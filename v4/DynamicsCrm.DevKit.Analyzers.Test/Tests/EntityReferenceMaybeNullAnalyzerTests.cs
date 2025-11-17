using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class EntityReferenceMaybeNullAnalyzerTests
    {
        private const string EntityReferenceStub = @"
using System;
namespace Microsoft.Xrm.Sdk
{
    public class EntityReference
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public string LogicalName { get; set; }
    }
}
";

        private static string WrapInMethod(string body) => $@"
{EntityReferenceStub}
public class Sample
{{
    public void Run(Microsoft.Xrm.Sdk.EntityReference er)
    {{
        {body}
    }}
}}
";

        [Fact]
        public async Task Diagnostic_When_Interpolated_String_Uses_Name()
        {
            var src = WrapInMethod("var s = $\"Name: {er.[|Name|]}\";");
            await CSharpAnalyzerVerifier<EntityReferenceMaybeNullAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Binary_Uses_Id()
        {
            var src = WrapInMethod("var s = er.[|Name|] + \"x\";");
            await CSharpAnalyzerVerifier<EntityReferenceMaybeNullAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Assign_To_String_From_LogicalName()
        {
            var src = WrapInMethod("string s = er.[|LogicalName|];");
            await CSharpAnalyzerVerifier<EntityReferenceMaybeNullAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Assigning_Same_Member_RightSide()
        {
            // Left equals same member access; analyzer reports on RHS
            var src = WrapInMethod("er.Name = er.[|Name|];");
            await CSharpAnalyzerVerifier<EntityReferenceMaybeNullAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Other_Member()
        {
            var src = WrapInMethod("var x = er.ToString();");
            await CSharpAnalyzerVerifier<EntityReferenceMaybeNullAnalyzer>.VerifyAnalyzerAsync(src);
        }
    }
}
