using Microsoft.Crm.Sdk.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dev.DevKit.Console
{
    internal class DEVKIT1004
    {
        private void Test1()  
        {
            var request = new AddProductToKitRequest();
            var response = (AddProductToKitResponse)AppSettings.Service.Execute(request);
            var response2 = AppSettings.Service.Execute(request) as AddProductToKitResponse;
            if (response != null && response2 != null)
            {
            }
        }
    }
}
