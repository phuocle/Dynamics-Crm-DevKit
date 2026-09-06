using System;
using System.Collections.Generic;
using System.Threading;

namespace DynamicsCrm.DevKit2019.UnitTests.TestInfrastructure
{
    internal static class StaRunner
    {
        public static void Run(Action action)
        {
            Exception caught = null;
            var thread = new Thread(() =>
            {
                try { action(); }
                catch (Exception ex) { caught = ex; }
            });
            thread.SetApartmentState(ApartmentState.STA);
            thread.Start();
            thread.Join();
            if (caught != null) throw caught;
        }
    }
}
