using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class InvalidPluginExecutionExceptionAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
    public class InvalidPluginExecutionException : System.Exception
    {
        public InvalidPluginExecutionException(string message) : base(message) { }
    }
}
namespace System.Activities
{
    public abstract class CodeActivity
    {
        protected abstract void Execute(object context);
    }
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

        #region Diagnostic Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Throws_Exception()
        {
            var src = WrapInPlugin(@"[|throw new System.Exception(""error"");|]");
            await CSharpAnalyzerVerifier<InvalidPluginExecutionExceptionAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Throws_ArgumentException()
        {
            var src = WrapInPlugin(@"[|throw new System.ArgumentException(""invalid arg"");|]");
            await CSharpAnalyzerVerifier<InvalidPluginExecutionExceptionAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Workflow_Throws_Exception()
        {
            var src = WrapInWorkflow(@"[|throw new System.Exception(""error"");|]");
            await CSharpAnalyzerVerifier<InvalidPluginExecutionExceptionAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region No Diagnostic Tests

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Throws_InvalidPluginExecutionException()
        {
            var src = WrapInPlugin(@"throw new Microsoft.Xrm.Sdk.InvalidPluginExecutionException(""error"");");
            await CSharpAnalyzerVerifier<InvalidPluginExecutionExceptionAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Rethrows()
        {
            var src = WrapInPlugin(@"try { } catch { throw; }");
            await CSharpAnalyzerVerifier<InvalidPluginExecutionExceptionAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Throws_Exception()
        {
            var src = WrapInRegularClass(@"throw new System.Exception(""error"");");
            await CSharpAnalyzerVerifier<InvalidPluginExecutionExceptionAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
