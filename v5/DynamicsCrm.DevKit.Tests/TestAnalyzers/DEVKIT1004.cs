#pragma warning disable

/// <summary>
/// DEVKIT1004: Deprecated Dataverse request analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1004 only.
/// - Visual Studio Error List should show DEVKIT1004 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1004 is restored.
///
/// Severity Rules:
/// - Deprecated request/response types: INFO - use supported Dataverse request types instead
/// </summary>
#pragma warning restore DEVKIT1004

using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Messages;

namespace TestAnalyzers
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
#pragma warning restore
