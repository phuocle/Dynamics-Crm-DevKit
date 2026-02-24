using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;

namespace DynamicsCrm.DevKit.Shared
{
    public static class RetryHelper
    {
        private const int DefaultMaxRetries = 3;
        private static readonly TimeSpan DefaultBaseDelay = TimeSpan.FromSeconds(2);

        private static readonly HashSet<int> TransientErrorCodes = new()
        {
            -2147204784, // Server Busy
            -2147188475, // Sql Timeout
            -2147204718, // Throttling
            -2147180030, // Rate Limit Exceeded
        };

        public static async Task<T> ExecuteWithRetryAsync<T>(
            Func<Task<T>> operation,
            int maxRetries = DefaultMaxRetries,
            CancellationToken cancellationToken = default)
        {
            var lastException = (Exception)null;
            for (int attempt = 0; attempt <= maxRetries; attempt++)
            {
                try
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    return await operation();
                }
                catch (OperationCanceledException) { throw; }
                catch (Exception ex) when (attempt < maxRetries && IsTransient(ex))
                {
                    lastException = ex;
                    var delay = CalculateDelay(attempt);
                    await Task.Delay(delay, cancellationToken);
                }
            }
            throw lastException ?? new InvalidOperationException("Retry failed with no exception");
        }

        public static async Task ExecuteWithRetryAsync(
            Func<Task> operation,
            int maxRetries = DefaultMaxRetries,
            CancellationToken cancellationToken = default)
        {
            await ExecuteWithRetryAsync(async () =>
            {
                await operation();
                return true;
            }, maxRetries, cancellationToken);
        }

        private static bool IsTransient(Exception ex)
        {
            if (ex is TimeoutException) return true;
            if (ex is System.Net.Http.HttpRequestException) return true;

            var message = ex.Message?.ToLower() ?? string.Empty;
            if (message.Contains("server is busy") ||
                message.Contains("throttl") ||
                message.Contains("rate limit") ||
                message.Contains("timeout") ||
                message.Contains("503") ||
                message.Contains("429"))
                return true;

            if (ex is FaultException<OrganizationServiceFault> faultEx)
            {
                if (TransientErrorCodes.Contains(faultEx.Detail.ErrorCode)) return true;
            }

            if (ex.InnerException != null) return IsTransient(ex.InnerException);

            return false;
        }

        private static TimeSpan CalculateDelay(int attempt)
        {
            var jitter = Random.Shared.Next(0, 1000);
            var delay = DefaultBaseDelay.TotalMilliseconds * Math.Pow(2, attempt) + jitter;
            return TimeSpan.FromMilliseconds(Math.Min(delay, 30000));
        }
    }
}
