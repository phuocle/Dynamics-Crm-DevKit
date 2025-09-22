using Microsoft.Xrm.Sdk;

namespace $NameSpace$.Lib
{
    public class TracingServiceFake : ITracingService
    {
        public ITracingService tracingService;

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
