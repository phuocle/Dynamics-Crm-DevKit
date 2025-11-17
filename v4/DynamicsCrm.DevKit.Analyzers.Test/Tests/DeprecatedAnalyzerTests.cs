using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class DeprecatedAnalyzerTests
    {
        private const string DeprecatedTypesStub = @"
namespace Microsoft.Crm.Sdk.Messages
{
    // in DeprecatedRequests list
    public class ExecuteFetchRequest { }
    public class ExecuteFetchResponse { }
    // not deprecated
    public class RetrieveRequest { }
}
";

        private static string WrapInMethod(string body) => $@"
{DeprecatedTypesStub}
public class Sample
{{
    public void Run(object obj)
    {{
        {body}
    }}
}}
";

        [Fact]
        public async Task Diagnostic_When_New_Deprecated_Request()
        {
            var src = WrapInMethod("var r = [|new Microsoft.Crm.Sdk.Messages.ExecuteFetchRequest()|];");
            await CSharpAnalyzerVerifier<DeprecatedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Cast_To_Deprecated_Request()
        {
            var src = WrapInMethod("var r = ([|Microsoft.Crm.Sdk.Messages.ExecuteFetchRequest|])new object();");
            await CSharpAnalyzerVerifier<DeprecatedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_As_To_Deprecated_Request()
        {
            var src = WrapInMethod("var r = new object() as [|Microsoft.Crm.Sdk.Messages.ExecuteFetchRequest|];");
            await CSharpAnalyzerVerifier<DeprecatedAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Not_Deprecated_Request()
        {
            var src = WrapInMethod("var r = new Microsoft.Crm.Sdk.Messages.RetrieveRequest();");
            await CSharpAnalyzerVerifier<DeprecatedAnalyzer>.VerifyAnalyzerAsync(src);
        }
    }
}
