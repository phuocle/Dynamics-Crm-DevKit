using Microsoft.Xrm.Sdk;
using System.Collections.Generic;

namespace Dev.DevKitV5.Shared.Test
{
    /// <summary>
    /// Shared no-op tracing service for unit tests.
    /// Use <see cref="Logs"/> to inspect trace output if needed.
    /// </summary>
    public class TestTracingService : ITracingService
    {
        public List<string> Logs { get; } = new List<string>();

        public void Trace(string format, params object[] args)
        {
            if (args != null && args.Length > 0)
                Logs.Add(string.Format(format, args));
            else
                Logs.Add(format);
        }
    }
}
