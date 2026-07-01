using System;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Provides automatic retry logic for Dataverse metadata operations that may fail
    /// due to lock contention or transient cache errors.
    ///
    /// Based on patterns from Dataverse-skills dv-metadata reference.
    /// </summary>
    internal static class MetadataRetryHelper
    {
        private const int MaxRetryAttempts = 5;
        private const int BaseRetryDelaySeconds = 10;

        /// <summary>
        /// Executes a metadata operation with automatic retry on lock contention errors.
        /// Uses exponential backoff: 10s, 20s, 30s, 40s between retries.
        /// </summary>
        /// <param name="operation">The operation to execute (void return)</param>
        /// <param name="operationDescription">Human-readable description for error messages</param>
        /// <returns>True if operation succeeded, false if all retries exhausted</returns>
        public static bool RetryOnLockContention(Action operation, string operationDescription)
        {
            for (int attempt = 0; attempt < MaxRetryAttempts; attempt++)
            {
                try
                {
                    operation();
                    return true;
                }
                catch (Exception ex)
                {
                    // If not a lock contention error, propagate immediately
                    if (!IsLockContentionError(ex))
                        throw;

                    // If this was the last attempt, return false
                    if (attempt == MaxRetryAttempts - 1)
                        return false;

                    // Exponential backoff: 10s, 20s, 30s, 40s
                    var waitSeconds = BaseRetryDelaySeconds * (attempt + 1);
                    Thread.Sleep(TimeSpan.FromSeconds(waitSeconds));
                }
            }

            return false;
        }

        /// <summary>
        /// Executes a metadata operation with automatic retry on lock contention errors.
        /// Uses exponential backoff: 10s, 20s, 30s, 40s between retries.
        /// </summary>
        /// <typeparam name="T">Return type of the operation</typeparam>
        /// <param name="operation">The operation to execute</param>
        /// <param name="operationDescription">Human-readable description for error messages</param>
        /// <returns>Result of the operation</returns>
        /// <exception cref="InvalidOperationException">Thrown if all retry attempts fail</exception>
        public static T RetryOnLockContention<T>(Func<T> operation, string operationDescription)
        {
            Exception lastException = null;

            for (int attempt = 0; attempt < MaxRetryAttempts; attempt++)
            {
                try
                {
                    return operation();
                }
                catch (Exception ex)
                {
                    lastException = ex;

                    // If not a lock contention error, propagate immediately
                    if (!IsLockContentionError(ex))
                        throw;

                    // If this was the last attempt, break and throw below
                    if (attempt == MaxRetryAttempts - 1)
                        break;

                    // Exponential backoff: 10s, 20s, 30s, 40s
                    var waitSeconds = BaseRetryDelaySeconds * (attempt + 1);
                    Thread.Sleep(TimeSpan.FromSeconds(waitSeconds));
                }
            }

            // All retries exhausted - throw with helpful message
            throw new InvalidOperationException(
                $"Metadata operation '{operationDescription}' failed after {MaxRetryAttempts} attempts due to lock contention.\n" +
                $"Reason: Another metadata operation may be running or metadata has not propagated.\n" +
                $"Action: Wait 30 seconds and retry manually, or check for other running operations.",
                lastException);
        }

        /// <summary>
        /// Determines if an exception is a lock contention or transient metadata error
        /// that should trigger a retry.
        /// </summary>
        private static bool IsLockContentionError(Exception ex)
        {
            var message = ex.Message.ToLowerInvariant();

            // Check for common lock contention phrases
            if (message.Contains("another") && message.Contains("running"))
                return true;

            if (message.Contains("lock"))
                return true;

            // Check for specific Dataverse error codes
            // 0x80040216 = Transient metadata cache error
            if (message.Contains("0x80040216"))
                return true;

            // 0x80060891 = Metadata cache not ready after table creation
            if (message.Contains("0x80060891"))
                return true;

            return false;
        }
    }
}
