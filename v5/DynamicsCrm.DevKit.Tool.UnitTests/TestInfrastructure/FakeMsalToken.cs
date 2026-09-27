using HarmonyLib;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Tool.UnitTests.TestInfrastructure;

/// <summary>
/// Detours every concrete MSAL ExecuteAsync so token acquisition succeeds
/// offline with a fixed access token. When <see cref="ThrowOnSilent"/> is set,
/// AcquireTokenSilent builders throw MsalUiRequiredException instead, driving
/// the builder fallback paths. For device-code builders the captured device
/// code callback is invoked with a bare DeviceCodeResult so its display branch
/// is covered. Classes using this harness are marked DoNotParallelize.
/// </summary>
public static class FakeMsalToken
{
    private const string AccessToken = "fake-access-token";
    internal const string AccessTokenValue = AccessToken;
    internal const string DefaultUsername = "user@contoso.com";
    private static readonly object Gate = new();
    private static bool patched;

    public static bool ThrowOnSilent { get; set; }

    /// <summary>When set, silent acquisition throws MsalServiceException instead (service outage path).</summary>
    public static bool ThrowServiceOnSilent { get; set; }

    /// <summary>When set, device-code acquisition returns a canceled task (timeout path).</summary>
    public static bool CancelDeviceCode { get; set; }

    public static string LastCallbackMessage { get; private set; }

    /// <summary>Accounts returned by the detoured GetAccountsAsync.</summary>
    public static List<IAccount> Accounts { get; set; } = new List<IAccount>();

    /// <summary>When true the GetAccountsAsync detour lets the original run so real token-cache notifications fire.</summary>
    public static bool GetAccountsPassthrough { get; set; }

    public static void EnsurePatched()
    {
        lock (Gate)
        {
            if (patched) return;
            patched = true;

            var harmony = new Harmony("devkit.test.fakemsaltoken");
            var prefix = new HarmonyMethod(typeof(Patches), nameof(Patches.ExecuteAsyncPrefix));
            var msalAssembly = typeof(AbstractAcquireTokenParameterBuilder<>).Assembly;
            var cancellationToken = typeof(CancellationToken);

            // Only methods DECLARED on a type are patchable, and Harmony needs
            // CLOSED types: walk the base chains of every concrete builder to
            // collect the constructed generic bases that hold the shared
            // ExecuteAsync implementations.
            var candidateTypes = new HashSet<Type>();
            foreach (var concreteType in msalAssembly.GetTypes().Where(type => type.IsClass && !type.IsAbstract))
            {
                candidateTypes.Add(concreteType);
                var baseType = concreteType.BaseType;
                while (baseType != null && baseType != typeof(object))
                {
                    candidateTypes.Add(baseType);
                    baseType = baseType.BaseType;
                }
            }

            var targets = candidateTypes
                .Select(type => type.GetMethod("ExecuteAsync", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly, null, new[] { cancellationToken }, null))
                .Where(method => method != null &&
                                 !method.IsAbstract &&
                                 method.ReturnType == typeof(Task<AuthenticationResult>));

            foreach (var method in targets)
            {
                harmony.Patch(method, prefix: prefix);
            }

            var getAccounts = typeof(ClientApplicationBase).GetMethod("GetAccountsAsync", BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly, null, Type.EmptyTypes, null);
            if (getAccounts == null || getAccounts.ReturnType != typeof(Task<IEnumerable<IAccount>>))
                throw new InvalidOperationException(
                    "FakeMsalToken could not locate ClientApplicationBase.GetAccountsAsync(); the MSAL surface may have moved.");
            harmony.Patch(getAccounts, prefix: new HarmonyMethod(typeof(Patches), nameof(Patches.GetAccountsPrefix)));
        }
    }

    public sealed class FakeAccount : IAccount
    {
        public AccountId HomeAccountId => new AccountId("uid.11111111-1111-1111-1111-111111111111");
        public string Environment => "login.microsoftonline.com";
        public string Username => Username_ ?? FakeMsalToken.DefaultUsername;
        public string Username_ { get; set; }
    }

    private static AuthenticationResult CreateResult()
    {
        var expires = DateTimeOffset.UtcNow.AddHours(1);
        var account = new FakeAccount();

        // AuthenticationResult's constructor shape varies between MSAL versions;
        // pick the widest available one and fill parameters by name.
        var constructor = typeof(AuthenticationResult)
            .GetConstructors(BindingFlags.Public | BindingFlags.Instance)
            .OrderByDescending(ctor => ctor.GetParameters().Length)
            .First();

        var arguments = constructor.GetParameters().Select(parameter =>
        {
            switch (parameter.Name)
            {
                case "accessToken": return AccessToken;
                case "account": return (object)account;
                case "scopes": return (object)new[] { "https://org.crm.dynamics.com/.default" };
                case "expiresOn":
                case "extendedExpiresOn":
                    return (object)expires;
                case "authenticationResultMetadata":
                    return parameter.ParameterType.IsValueType ? Activator.CreateInstance(parameter.ParameterType) : null;
                default:
                    return parameter.ParameterType.IsValueType ? Activator.CreateInstance(parameter.ParameterType) : null;
            }
        }).ToArray();

        return (AuthenticationResult)constructor.Invoke(arguments);
    }

    private static class Patches
    {
        public static bool ExecuteAsyncPrefix(object __instance, ref Task<AuthenticationResult> __result)
        {
            if (__instance.GetType().Name == "AcquireTokenSilentParameterBuilder")
            {
                if (ThrowServiceOnSilent)
                    throw new MsalServiceException("fake_service_error", "MSAL service down in tests.");
                if (ThrowOnSilent)
                    throw new MsalUiRequiredException("fake_ui_required", "No cached token in tests.");
            }

            if (__instance.GetType().Name == "AcquireTokenWithDeviceCodeParameterBuilder")
            {
                InvokeDeviceCodeCallback(__instance);
                if (CancelDeviceCode)
                {
                    __result = Task.FromCanceled<AuthenticationResult>(new CancellationToken(canceled: true));
                    return false;
                }
            }

            __result = Task.FromResult(CreateResult());
            return false;
        }

        public static bool GetAccountsPrefix(ref Task<IEnumerable<IAccount>> __result)
        {
            if (GetAccountsPassthrough) return true;
            __result = Task.FromResult<IEnumerable<IAccount>>(Accounts);
            return false;
        }

        private static void InvokeDeviceCodeCallback(object builder)
        {
            // The device-code callback is not stored on the builder itself; it
            // lives on the AcquireTokenWithDeviceCodeParameters instance held
            // in the builder's <Parameters> backing field.
            var parameters = builder.GetType()
                .GetField("<Parameters>k__BackingField", BindingFlags.Instance | BindingFlags.NonPublic)
                ?.GetValue(builder);
            if (parameters == null) return;

            var callback = parameters.GetType()
                .GetField("<DeviceCodeResultCallback>k__BackingField", BindingFlags.Instance | BindingFlags.NonPublic)
                ?.GetValue(parameters) as Delegate;
            if (callback == null) return;

            var deviceCodeResultType = callback.Method.GetParameters()[0].ParameterType;
            var bareResult = (DeviceCodeResult)RuntimeHelpers.GetUninitializedObject(deviceCodeResultType);
            deviceCodeResultType
                .GetField("<Message>k__BackingField", BindingFlags.Instance | BindingFlags.NonPublic)
                ?.SetValue(bareResult, "fake device code message");
            try
            {
                callback.DynamicInvoke(bareResult);
                LastCallbackMessage = "invoked";
            }
            catch
            {
                // Display callback failures never affect token acquisition.
            }
        }
    }
}
