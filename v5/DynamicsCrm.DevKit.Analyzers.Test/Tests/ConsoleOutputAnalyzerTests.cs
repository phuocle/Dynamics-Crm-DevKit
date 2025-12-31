using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class ConsoleOutputAnalyzerTests
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

        #region Console.WriteLine Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleWriteLine()
        {
            var src = WrapInPlugin("[|System.Console.WriteLine|](\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleWriteLine_WithFormat()
        {
            var src = WrapInPlugin("[|System.Console.WriteLine|](\"value: {0}\", 42);");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Uses_ConsoleWriteLine()
        {
            var src = WrapInRegularClass("System.Console.WriteLine(\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Console.Write Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleWrite()
        {
            var src = WrapInPlugin("[|System.Console.Write|](\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Other Console Methods

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleClear()
        {
            var src = WrapInPlugin("[|System.Console.Clear|]();");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleBeep()
        {
            var src = WrapInPlugin("[|System.Console.Beep|]();");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleResetColor()
        {
            var src = WrapInPlugin("[|System.Console.ResetColor|]();");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Workflow Tests

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_ConsoleWriteLine()
        {
            var src = WrapInWorkflow("[|System.Console.WriteLine|](\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_ConsoleWrite()
        {
            var src = WrapInWorkflow("[|System.Console.Write|](\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
