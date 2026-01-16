using Microsoft.Xrm.Sdk;

namespace Dev.DevKit.ConsoleCore.OAuth2.Lib
{
    public class TracingServiceFake : ITracingService
    {
        public ITracingService tracingService = null;

        public void Trace(string format, params object[] args)
        {
            if (tracingService == null)
            {
                try
                {
                    System.Console.Write(format, args);
                    System.Console.WriteLine();
                }
                catch
                {
                    System.Console.Write(format);
                    System.Console.WriteLine();
                }
            }
            else
            {
                tracingService.Trace(format, args);
            }
        }
    }
}
