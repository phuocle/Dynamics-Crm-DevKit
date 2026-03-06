using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class NotUseColumnSetTrueAnalyzerTests
    {
        private const string ColumnSetStub = @"
namespace Microsoft.Xrm.Sdk.Query
{
    public class ColumnSet
    {
        public bool AllColumns { get; set; }
        public ColumnSet() { }
        public ColumnSet(bool allColumns) { AllColumns = allColumns; }
        public ColumnSet(params string[] columns) { }
    }
}
";

        private static string WrapInMethod(string body) => $@"
{ColumnSetStub}
public class Sample
{{
    public void Run()
    {{
        {body}
    }}
}}
";

        [Fact]
        public async Task Diagnostic_When_New_ColumnSet_true()
        {
            var src = WrapInMethod("var cs = [|new Microsoft.Xrm.Sdk.Query.ColumnSet(true)|];");
            await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Initializer_AllColumns_true()
        {
            var src = WrapInMethod("var cs = new Microsoft.Xrm.Sdk.Query.ColumnSet { [|AllColumns = true|] };");
            await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Assignment_AllColumns_true()
        {
            var src = WrapInMethod("var cs = new Microsoft.Xrm.Sdk.Query.ColumnSet(); [|cs.AllColumns = true|];");
            await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_String_Contains_AllAttributes()
        {
            var src = WrapInMethod("var s = \"<fetch><entity><[|all-attributes|]/></entity></fetch>\";");
            await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Interpolated_String_Contains_AllAttributes()
        {
            var src = WrapInMethod("var s = $\"prefix <entity><[|all-attributes|]/></entity> suffix\";");
            await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_ColumnSet_Specific_Columns()
        {
            var src = WrapInMethod("var cs = new Microsoft.Xrm.Sdk.Query.ColumnSet(\"name\", \"accountnumber\");");
            await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_AllColumns_false()
        {
            var src = WrapInMethod("var cs = new Microsoft.Xrm.Sdk.Query.ColumnSet(); cs.AllColumns = false;");
            await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
        }
    }
}
