#pragma warning disable

/// <summary>
/// DEVKIT1016: RetrieveAsIfPublished analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1016 only.
/// - Visual Studio Error List should show DEVKIT1016 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1016 is restored.
///
/// Severity Rules:
/// - DEVKIT1016 diagnostics: INFO by default; this test project promotes DEVKIT1016 to WARNING in .editorconfig for visible editor squiggles.
/// </summary>
#pragma warning restore DEVKIT1016

using Microsoft.Xrm.Sdk.Messages;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1016: Avoid Retrieving Unpublished Metadata
    /// This file contains code that retrieves unpublished metadata,
    /// which should trigger DEVKIT1016 info warnings.
    /// </summary>
    internal class DEVKIT1016
    {
        private void Test()
        {
            // ❌ BAD: Do not set RetrieveAsIfPublished=true for normal metadata reads; retrieve published metadata unless building a metadata editor.
            var request1 = new RetrieveEntityRequest
            {
                EntityFilters = Microsoft.Xrm.Sdk.Metadata.EntityFilters.All,
                LogicalName = "account",
                RetrieveAsIfPublished = true  // Performance issue
            };
            AppSettings.Service.Execute(request1);

            // ❌ BAD: Do not retrieve all entities as-if-published for normal runtime logic; use published metadata for better performance.
            var request2 = new RetrieveAllEntitiesRequest
            {
                EntityFilters = Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity,
                RetrieveAsIfPublished = true  // Performance issue
            };
            AppSettings.Service.Execute(request2);

            // ❌ BAD: Do not retrieve attributes as-if-published unless the user needs unpublished customizations.
            var request3 = new RetrieveAttributeRequest
            {
                EntityLogicalName = "account",
                LogicalName = "name",
                RetrieveAsIfPublished = true  // Performance issue
            };
            AppSettings.Service.Execute(request3);

            // ❌ BAD: Do not assign RetrieveAsIfPublished=true after request creation; leave it false for normal metadata reads.
            var request4 = new RetrieveOptionSetRequest();
            request4.Name = "my_optionset";
            request4.RetrieveAsIfPublished = true;  // Performance issue
            AppSettings.Service.Execute(request4);
        }
    }
}
#pragma warning restore
