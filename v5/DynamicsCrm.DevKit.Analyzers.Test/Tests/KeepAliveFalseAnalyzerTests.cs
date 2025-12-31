using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class KeepAliveFalseAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
namespace System.Activities
{
    public abstract class CodeActivity
    {
        protected abstract void Execute(object context);
    }
}
namespace System.Net.Http
{
    public class HttpClient : System.IDisposable
    {
        public void Dispose() { }
    }
}
namespace System.Net
{
    public class HttpWebRequest { }
    public class WebRequest { }
}
";

        private static string WrapInPlugin(string body) => $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        {body}
    }}
}}
";

        private static string WrapInWorkflow(string body) => $@"
{Stubs}
public class TestWorkflow : System.Activities.CodeActivity
{{
    protected override void Execute(object context)
    {{
        {body}
    }}
}}
";

        private static string WrapInRegularClass(string body) => $@"
{Stubs}
public class RegularClass
{{
    public void Run()
    {{
        {body}
    }}
}}
";

        #region HttpClient Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_HttpClient()
        {
            var src = WrapInPlugin("using (var client = [|new System.Net.Http.HttpClient()|]) { }");
            await CSharpAnalyzerVerifier<KeepAliveFalseAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_HttpClient()
        {
            var src = WrapInWorkflow("using (var client = [|new System.Net.Http.HttpClient()|]) { }");
            await CSharpAnalyzerVerifier<KeepAliveFalseAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Uses_HttpClient()
        {
            var src = WrapInRegularClass("using (var client = new System.Net.Http.HttpClient()) { }");
            await CSharpAnalyzerVerifier<KeepAliveFalseAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
