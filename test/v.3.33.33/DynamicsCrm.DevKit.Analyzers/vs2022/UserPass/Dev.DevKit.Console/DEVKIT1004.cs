using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Messages;

namespace Dev.DevKit.Console
{
    internal class DEVKIT1004
    {
        private void Test1()
        {
            var request = new AddProductToKitRequest();
            var response = (AddProductToKitResponse)AppSettings.Service.Execute(request);
            var response2 = AppSettings.Service.Execute(request) as AddProductToKitResponse;
            var update = new UpdateRequest();
            var response3 = (UpdateResponse)AppSettings.Service.Execute(update);
            if (response != null && response2 != null)
            {
            }
        }
    }
}
