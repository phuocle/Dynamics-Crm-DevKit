using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class RetrieveAsIfPublishedAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IOrganizationService
    {
        object Execute(object request);
    }
}
namespace Microsoft.Xrm.Sdk.Messages
{
    public class RetrieveEntityRequest
    {
        public bool RetrieveAsIfPublished { get; set; }
        public System.Guid MetadataId { get; set; }
    }
    public class RetrieveAllEntitiesRequest
    {
        public bool RetrieveAsIfPublished { get; set; }
    }
    public class RetrieveAttributeRequest
    {
        public bool RetrieveAsIfPublished { get; set; }
        public string EntityLogicalName { get; set; }
        public string LogicalName { get; set; }
    }
    public class RetrieveRelationshipRequest
    {
        public bool RetrieveAsIfPublished { get; set; }
        public System.Guid MetadataId { get; set; }
    }
    public class RetrieveOptionSetRequest
    {
        public bool RetrieveAsIfPublished { get; set; }
        public string Name { get; set; }
    }
    public class RetrieveAllOptionSetsRequest
    {
        public bool RetrieveAsIfPublished { get; set; }
    }
    public class RetrieveEntityKeyRequest
    {
        public bool RetrieveAsIfPublished { get; set; }
        public string EntityLogicalName { get; set; }
        public string LogicalName { get; set; }
    }
}
";

        #region Diagnostic Tests - Object Initializer

        [Fact]
        public async Task Diagnostic_When_ObjectInitializer_RetrieveAsIfPublished_True()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test(Microsoft.Xrm.Sdk.IOrganizationService service)
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest
        {{
            [|RetrieveAsIfPublished = true|],
            MetadataId = System.Guid.NewGuid()
        }};
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_RetrieveAllEntities_RetrieveAsIfPublished_True()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test(Microsoft.Xrm.Sdk.IOrganizationService service)
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveAllEntitiesRequest
        {{
            [|RetrieveAsIfPublished = true|]
        }};
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Diagnostic Tests - Assignment Expression

        [Fact]
        public async Task Diagnostic_When_Assignment_RetrieveAsIfPublished_True()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test(Microsoft.Xrm.Sdk.IOrganizationService service)
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest();
        [|request.RetrieveAsIfPublished = true|];
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region No Diagnostic Tests

        [Fact]
        public async Task NoDiagnostic_When_RetrieveAsIfPublished_False()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test(Microsoft.Xrm.Sdk.IOrganizationService service)
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest
        {{
            RetrieveAsIfPublished = false
        }};
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_RetrieveAsIfPublished_NotSet()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test(Microsoft.Xrm.Sdk.IOrganizationService service)
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest
        {{
            MetadataId = System.Guid.NewGuid()
        }};
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Diagnostic Tests - Individual Type Assignments

        [Fact]
        public async Task Diagnostic_When_RetrieveAttributeRequest_RetrieveAsIfPublished_True()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test()
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveAttributeRequest();
        [|request.RetrieveAsIfPublished = true|];
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Edge Case Tests

        [Fact]
        public async Task NoDiagnostic_When_Non_Metadata_Type()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test()
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest();
        request.MetadataId = System.Guid.NewGuid();
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_RetrieveAllOptionSets_RetrieveAsIfPublished_True()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test()
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveAllOptionSetsRequest();
        [|request.RetrieveAsIfPublished = true|];
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_RetrieveOptionSet_RetrieveAsIfPublished_True()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test()
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveOptionSetRequest();
        [|request.RetrieveAsIfPublished = true|];
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_RetrieveEntityKey_ObjectInitializer_True()
        {
            var src = $@"
{Stubs}
public class MyClass
{{
    public void Test()
    {{
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityKeyRequest
        {{
            [|RetrieveAsIfPublished = true|]
        }};
    }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveAsIfPublishedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
