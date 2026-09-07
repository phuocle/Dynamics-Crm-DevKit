using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.UnitTests.Verifier;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Analyzers.UnitTests.Tests
{
    [TestClass]
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

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleWriteLine()
        {
            var src = WrapInPlugin("[|System.Console.WriteLine|](\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleWriteLine_WithFormat()
        {
            var src = WrapInPlugin("[|System.Console.WriteLine|](\"value: {0}\", 42);");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task NoDiagnostic_When_NonPlugin_Uses_ConsoleWriteLine()
        {
            var src = WrapInRegularClass("System.Console.WriteLine(\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Console.Write Tests

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleWrite()
        {
            var src = WrapInPlugin("[|System.Console.Write|](\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Other Console Methods

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleClear()
        {
            var src = WrapInPlugin("[|System.Console.Clear|]();");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleBeep()
        {
            var src = WrapInPlugin("[|System.Console.Beep|]();");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleResetColor()
        {
            var src = WrapInPlugin("[|System.Console.ResetColor|]();");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Console.SetOut Tests

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleSetOut()
        {
            var src = WrapInPlugin("[|System.Console.SetOut|](null);");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Console.SetError Tests

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleSetError()
        {
            var src = WrapInPlugin("[|System.Console.SetError|](null);");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Console Cursor/Window Tests

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleSetCursorPosition()
        {
            var src = WrapInPlugin("[|System.Console.SetCursorPosition|](0, 0);");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleSetWindowPosition()
        {
            var src = WrapInPlugin("[|System.Console.SetWindowPosition|](0, 0);");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleSetWindowSize()
        {
            var src = WrapInPlugin("[|System.Console.SetWindowSize|](80, 25);");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task Diagnostic_When_Plugin_Uses_ConsoleSetBufferSize()
        {
            var src = WrapInPlugin("[|System.Console.SetBufferSize|](80, 300);");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Edge Case Tests

        [TestMethod]
        public async Task NoDiagnostic_When_Plugin_Uses_NonConsole_Method()
        {
            var src = WrapInPlugin("System.Diagnostics.Debug.WriteLine(\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task NoDiagnostic_When_Plugin_Uses_ConsoleOpenStandardOutput()
        {
            var src = WrapInPlugin("System.Console.OpenStandardOutput();");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Workflow Tests

        [TestMethod]
        public async Task Diagnostic_When_Workflow_Uses_ConsoleWriteLine()
        {
            var src = WrapInWorkflow("[|System.Console.WriteLine|](\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [TestMethod]
        public async Task Diagnostic_When_Workflow_Uses_ConsoleWrite()
        {
            var src = WrapInWorkflow("[|System.Console.Write|](\"test\");");
            await CSharpAnalyzerVerifier<ConsoleOutputAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
