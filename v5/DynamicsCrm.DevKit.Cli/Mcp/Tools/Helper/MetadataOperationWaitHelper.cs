using System;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Provides wait/sleep helpers for Dataverse metadata operations to allow
    /// propagation time before subsequent operations.
    ///
    /// Wait times based on empirical testing from Dataverse-skills dv-metadata reference.
    /// </summary>
    internal static class MetadataOperationWaitHelper
    {
        // Wait times in seconds - based on Dataverse propagation patterns
        public const int DefaultWaitSeconds = 15;
        public const int TableCreationWaitSeconds = 8;
        public const int ColumnCreationWaitSeconds = 5;
        public const int ChoiceCreationWaitSeconds = 3;
        public const int PropagationWaitSeconds = 20;
        public const int FormViewWaitSeconds = 5;
        public const int WebResourceWaitSeconds = 3;

        /// <summary>
        /// Generic wait after metadata mutation. Use specific methods when available.
        /// </summary>
        /// <param name="seconds">Number of seconds to wait (0 or negative = no wait)</param>
        public static void WaitAfterMutation(int seconds = DefaultWaitSeconds)
        {
            if (seconds <= 0)
                return;

            Thread.Sleep(TimeSpan.FromSeconds(seconds));
        }

        /// <summary>
        /// Wait after table (entity) creation before creating columns, keys, or relationships.
        /// Dataverse needs time to propagate table metadata and build indexes.
        /// </summary>
        public static void WaitAfterTableCreation()
        {
            WaitAfterMutation(TableCreationWaitSeconds);
        }

        /// <summary>
        /// Wait after column (attribute) creation before creating relationships or adding to forms.
        /// </summary>
        public static void WaitAfterColumnCreation()
        {
            WaitAfterMutation(ColumnCreationWaitSeconds);
        }

        /// <summary>
        /// Wait after choice (option set) creation/update before using in columns.
        /// </summary>
        public static void WaitAfterChoiceOperation()
        {
            WaitAfterMutation(ChoiceCreationWaitSeconds);
        }

        /// <summary>
        /// Extended wait for full metadata propagation across all layers.
        /// Use when creating multiple related components in sequence (e.g., relationships).
        /// </summary>
        public static void WaitForPropagation()
        {
            WaitAfterMutation(PropagationWaitSeconds);
        }

        /// <summary>
        /// Wait after form or view publish (PublishXmlRequest).
        /// </summary>
        public static void WaitAfterFormView()
        {
            WaitAfterMutation(FormViewWaitSeconds);
        }

        /// <summary>
        /// Wait after web resource publish (PublishXmlRequest).
        /// Shorter wait as web resources are lightweight.
        /// </summary>
        public static void WaitAfterWebResource()
        {
            WaitAfterMutation(WebResourceWaitSeconds);
        }
    }
}
