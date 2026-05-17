using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class ParallelExecutionInPluginAnalyzerTests
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

        #region Task.Run Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_TaskRun()
        {
            var src = WrapInPlugin("[|System.Threading.Tasks.Task.Run|](() => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Uses_TaskRun()
        {
            var src = WrapInRegularClass("System.Threading.Tasks.Task.Run(() => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Parallel Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ParallelForEach()
        {
            var src = WrapInPlugin("var list = new System.Collections.Generic.List<int>(); [|System.Threading.Tasks.Parallel.ForEach|](list, x => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ParallelFor()
        {
            var src = WrapInPlugin("[|System.Threading.Tasks.Parallel.For|](0, 10, i => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ParallelInvoke()
        {
            var src = WrapInPlugin("[|System.Threading.Tasks.Parallel.Invoke|](() => { }, () => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Thread Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_NewThread()
        {
            var src = WrapInPlugin("var thread = [|new System.Threading.Thread|](() => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region ThreadPool Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ThreadPoolQueueUserWorkItem()
        {
            var src = WrapInPlugin("[|System.Threading.ThreadPool.QueueUserWorkItem|](state => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region TaskFactory.StartNew Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_TaskFactoryStartNew()
        {
            var src = WrapInPlugin("[|System.Threading.Tasks.Task.Factory.StartNew|](() => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Workflow Tests

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_TaskRun()
        {
            var src = WrapInWorkflow("[|System.Threading.Tasks.Task.Run|](() => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_ParallelForEach()
        {
            var src = WrapInWorkflow("var list = new System.Collections.Generic.List<int>(); [|System.Threading.Tasks.Parallel.ForEach|](list, x => { });");
            await CSharpAnalyzerVerifier<ParallelExecutionInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
