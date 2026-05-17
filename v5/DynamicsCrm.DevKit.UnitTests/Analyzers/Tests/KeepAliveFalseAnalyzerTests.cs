using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
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
        public HttpRequestHeaders DefaultRequestHeaders { get; set; }
        public void Dispose() { }
    }
    public class HttpRequestHeaders
    {
        public bool? ConnectionClose { get; set; }
    }
}
namespace System.Net
{
    public class HttpWebRequest { public bool KeepAlive { get; set; } }
    public class WebRequest { public bool KeepAlive { get; set; } }
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


        [Fact]
        public async Task NoDiagnostic_When_Plugin_Sets_ConnectionClose_True()
        {
            var src = WrapInPlugin(@"
            using (var client = new System.Net.Http.HttpClient())
            {
                client.DefaultRequestHeaders.ConnectionClose = true;
            }
            ");
            await CSharpAnalyzerVerifier<KeepAliveFalseAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region WebRequest Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_NewWebRequest()
        {
            var src = WrapInPlugin("var r = [|new System.Net.WebRequest()|];");
            await CSharpAnalyzerVerifier<KeepAliveFalseAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_NewHttpWebRequest()
        {
            var src = WrapInPlugin("var r = [|new System.Net.HttpWebRequest()|];");
            await CSharpAnalyzerVerifier<KeepAliveFalseAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Sets_KeepAlive_False()
        {
            var src = WrapInPlugin(@"
            var request = new System.Net.WebRequest();
            request.KeepAlive = false;
            ");
            await CSharpAnalyzerVerifier<KeepAliveFalseAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
