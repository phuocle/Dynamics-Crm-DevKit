using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    public interface IMcpConnectionResolver
    {
        string StartupEnvId { get; }
        Task<ConnectionBundle> ResolveAsync(string env, CancellationToken cancellationToken);
        IReadOnlyList<ConnectionGroupInfo> ListGroups();
        IDisposable BeginInvocation();
    }

    public sealed class ConnectionBundle : IDisposable
    {
        public string EnvId { get; }
        public ServiceClient Client { get; }
        public IOrganizationService OrgService { get; }
        public IOrganizationServiceAsync2 OrgServiceAsync { get; }
        public MetadataService Metadata { get; }
        public IMcpConnectionInfo ConnectionInfo { get; }
        public IWebApiExecutor WebApi { get; }
        public McpDryRunOptions Options { get; }
        public McpExecutionContext Context { get; }
        private readonly Action _dispose;
        private int _disposed;

        internal ConnectionBundle(string envId, ServiceClient serviceClient, bool dryRun, string impersonating = null)
            : this(envId, serviceClient, dryRun, impersonating, serviceClient, serviceClient,
                  new ServiceClientConnectionInfo(serviceClient), new ServiceClientWebApiExecutor(serviceClient),
                  new MetadataService(serviceClient), serviceClient.Dispose) { }

        internal ConnectionBundle(string envId, ServiceClient client, bool dryRun, string impersonating,
            IOrganizationService orgService, IOrganizationServiceAsync2 orgServiceAsync,
            IMcpConnectionInfo connectionInfo, IWebApiExecutor webApi, MetadataService metadata, Action dispose = null)
        {
            EnvId = envId; Client = client; OrgService = orgService; OrgServiceAsync = orgServiceAsync;
            ConnectionInfo = connectionInfo; WebApi = webApi; Metadata = metadata; _dispose = dispose;
            var policy = new McpExecutionPolicy(dryRun, impersonating);
            Options = policy.Options; Context = policy.Context;
        }
        public void Dispose() { if (Interlocked.Exchange(ref _disposed, 1) == 0) _dispose?.Invoke(); }
    }

    public sealed class ConnectionGroupInfo
    {
        [JsonPropertyName("env")] public string Env { get; init; }
        [JsonPropertyName("alias")] public string Alias { get; init; }
        [JsonPropertyName("isStartupDefault")] public bool IsStartupDefault { get; init; }
        [JsonPropertyName("connected")] public bool Connected { get; init; }
        [JsonPropertyName("authType")] public string AuthType { get; init; }
        [JsonPropertyName("url")] public string Url { get; init; }
        [JsonPropertyName("clientId")] public string ClientId { get; init; }
        [JsonPropertyName("username")] public string Username { get; init; }
        [JsonPropertyName("dryRun")] public bool DryRun { get; init; }
        [JsonPropertyName("asUser")] public string AsUser { get; init; }
        [JsonPropertyName("impersonating")] public string Impersonating { get; init; }
        [JsonPropertyName("source")] public string Source { get; init; }
    }

    internal sealed class McpConnectionSelectionException : Exception
    {
        internal object Details { get; }
        internal string Hint { get; }
        internal McpConnectionSelectionException(string message, string hint, object details) : base(message)
        { Hint = hint; Details = details; }
    }

    internal sealed class McpConnectionRegistry : IMcpConnectionResolver, IAsyncDisposable
    {
        private readonly object _gate = new();
        private readonly McpConnectionSnapshot _snapshot;
        private readonly Dictionary<string, McpCommandArgs> _settings;
        private readonly Dictionary<string, Lazy<Task<ConnectionBundle>>> _entries = new();
        private readonly HashSet<Task<ConnectionBundle>> _attempts = new();
        private readonly Func<string, McpCommandArgs, CancellationToken, Task<ConnectionBundle>> _factory;
        private readonly CancellationTokenSource _shutdown = new();
        private readonly TaskCompletionSource _drained = new(TaskCreationOptions.RunContinuationsAsynchronously);
        private readonly TaskCompletionSource _disposed = new(TaskCreationOptions.RunContinuationsAsynchronously);
        private bool _stopping;
        private int _active;
        public string StartupEnvId => _snapshot.StartupEnvId;

        internal McpConnectionRegistry(McpConnectionSnapshot snapshot, McpCommandArgs startupArgs,
            bool dryRunFlag, ConnectionBundle startup,
            Func<string, McpCommandArgs, CancellationToken, Task<ConnectionBundle>> factory = null)
        {
            _snapshot = snapshot;
            _settings = snapshot.GroupIds.ToDictionary(id => id, id => id == StartupEnvId ? startupArgs : snapshot.CreateGroupArgs(id, dryRunFlag));
            _factory = factory ?? McpConnectionFactory.ConnectBundleAsync;
            _entries.Add(StartupEnvId, new Lazy<Task<ConnectionBundle>>(() => Task.FromResult(startup)));
            _attempts.Add(_entries[StartupEnvId].Value);
        }

        public IDisposable BeginInvocation()
        {
            lock (_gate) { ObjectDisposedException.ThrowIf(_stopping, this); _active++; }
            return new InvocationLease(this);
        }
        private sealed class InvocationLease(McpConnectionRegistry registry) : IDisposable
        {
            private McpConnectionRegistry _registry = registry;
            public void Dispose()
            {
                var owner = Interlocked.Exchange(ref _registry, null);
                if (owner == null) return;
                lock (owner._gate) { if (--owner._active == 0 && owner._stopping) owner._drained.TrySetResult(); }
            }
        }

        public async Task<ConnectionBundle> ResolveAsync(string env, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            var id = _snapshot.ResolveId(env);
            if (id == null) throw new McpConnectionSelectionException(
                $"Unknown connection group '{SafeSelector(env)}'.",
                "Use get_context(action='connections') to list available groups, or omit env to use the startup connection.",
                new { requested = SafeSelector(env), availableGroups = _snapshot.GroupIds, startupEnv = StartupEnvId });
            Task<ConnectionBundle> attempt;
            lock (_gate)
            {
                ObjectDisposedException.ThrowIf(_stopping, this);
                if (!_entries.TryGetValue(id, out var entry))
                {
                    Lazy<Task<ConnectionBundle>> created = null;
                    created = new Lazy<Task<ConnectionBundle>>(() => Task.Run(async () =>
                    {
                        try { return await _factory(id, _settings[id], _shutdown.Token).ConfigureAwait(false); }
                        catch
                        {
                            lock (_gate)
                            {
                                if (_entries.TryGetValue(id, out var current) && ReferenceEquals(current, created)) _entries.Remove(id);
                                _attempts.Remove(created.Value);
                            }
                            throw;
                        }
                    }));
                    entry = created;
                    _entries.Add(id, entry);
                    _attempts.Add(entry.Value);
                }
                attempt = entry.Value;
            }
            try { return await attempt.WaitAsync(cancellationToken).ConfigureAwait(false); }
            catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested) { throw; }
            catch (Exception)
            {
                lock (_gate)
                    if (_entries.TryGetValue(id, out var current) && ReferenceEquals(current.Value, attempt)) _entries.Remove(id);
                var args = _settings[id];
                var missing = string.IsNullOrEmpty(args.AuthType) && string.IsNullOrEmpty(args.Connection);
                throw new McpConnectionSelectionException(missing
                    ? $"Environment group '{id}': {McpConnectionSnapshot.Key(id, "AUTH_TYPE")} or {McpConnectionSnapshot.Key(id, "CONNECTION")} is required for MCP server."
                    : $"Connection failed for group '{id}': authentication, authorization or connection validation failed.",
                    missing ? "Add the required connection keys to the project .env and restart the MCP server; use get_context(action='connections') to inspect groups."
                    : "Retry for a transient connection failure. If you change the project .env, restart the MCP server before retrying.",
                    new { requested = SafeSelector(env), env = id, authType = args.AuthType, url = SafeUrl(args.Url) });
            }
        }

        internal static string SafeSelector(string value)
        {
            var text = McpConnectionSnapshot.Escape(value?.Trim());
            return text.Length <= 128 ? text : text.Substring(0, 128) + "…";
        }
        internal static string SafeUrl(string url) => Uri.TryCreate(url, UriKind.Absolute, out var uri)
            && (uri.Scheme == "https" || uri.Scheme == "http") ? uri.GetLeftPart(UriPartial.Authority) : null;

        public IReadOnlyList<ConnectionGroupInfo> ListGroups()
        {
            lock (_gate)
            {
                return _snapshot.GroupIds.Select(id =>
                {
                    var args = _settings[id];
                    var conn = _entries.TryGetValue(id, out var entry) && entry.IsValueCreated && entry.Value.IsCompletedSuccessfully ? entry.Value.Result : null;
                    return new ConnectionGroupInfo { Env = id, Alias = _snapshot.Alias(id), IsStartupDefault = id == StartupEnvId,
                        Connected = conn != null, AuthType = string.IsNullOrEmpty(args.AuthType) ? null : args.AuthType,
                        Url = SafeUrl(conn?.ConnectionInfo?.ConnectedOrgUri?.ToString() ?? args.Url), ClientId = EmptyToNull(args.ClientId),
                        Username = EmptyToNull(args.Username), DryRun = args.DryRun, AsUser = EmptyToNull(args.AsUser),
                        Impersonating = conn?.Context.ImpersonatedUser, Source = args.ResolvedConnectionSource };
                }).ToArray();
            }
        }
        private static string EmptyToNull(string value) => string.IsNullOrWhiteSpace(value) ? null : value;

        public async ValueTask DisposeAsync()
        {
            Task<ConnectionBundle>[] attempts;
            lock (_gate)
            {
                if (_stopping) { attempts = null; }
                else { _stopping = true; attempts = _attempts.ToArray(); if (_active == 0) _drained.TrySetResult(); }
            }
            if (attempts == null) { await _disposed.Task.ConfigureAwait(false); return; }
            try
            {
                await _shutdown.CancelAsync().ConfigureAwait(false);
                await _drained.Task.ConfigureAwait(false);
                foreach (var attempt in attempts)
                    try { (await attempt.ConfigureAwait(false)).Dispose(); } catch { /* Failed attempts own partial-client cleanup. */ }
            }
            finally { _shutdown.Dispose(); _disposed.TrySetResult(); }
        }
    }
}
