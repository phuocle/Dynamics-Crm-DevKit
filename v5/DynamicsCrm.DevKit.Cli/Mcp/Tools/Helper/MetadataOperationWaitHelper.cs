using System;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class MetadataOperationWaitHelper
    {
        public const int DefaultWaitSeconds = 15;

        public static void WaitAfterMutation(int seconds = DefaultWaitSeconds)
        {
            if (seconds <= 0)
                return;

            Thread.Sleep(TimeSpan.FromSeconds(seconds));
        }
    }
}
