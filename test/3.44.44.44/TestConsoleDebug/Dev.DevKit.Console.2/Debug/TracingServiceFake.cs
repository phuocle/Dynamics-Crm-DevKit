using Microsoft.Xrm.Sdk;

namespace Dev.DevKit.Console._2.Debug
{
    public class TracingServiceFake : ITracingService
    {
        public ITracingService crmTracingService;

        public void Trace(string format, params object[] args)
        {
            if (crmTracingService == null)
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
                crmTracingService.Trace(format, args);
            }
        }
    }
}
