using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class TracingServiceInCatchAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
    public interface ITracingService
    {
        void Trace(string format, params object[] args);
    }
    public class InvalidPluginExecutionException : System.Exception
    {
        public InvalidPluginExecutionException(string message) : base(message) { }
        public InvalidPluginExecutionException(string message, System.Exception inner) : base(message, inner) { }
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
        public async Task Diagnostic_When_CatchBlock_DoesNotUse_TracingService()
        {
            var src = WrapInPlugin(@"
try
{
    var x = 1 / 0;
}
[|catch|] (System.Exception ex)
{
    throw new Microsoft.Xrm.Sdk.InvalidPluginExecutionException(""Error"");
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Workflow_CatchBlock_DoesNotUse_TracingService()
        {
            var src = WrapInWorkflow(@"
try
{
    var x = 1 / 0;
}
[|catch|] (System.Exception ex)
{
    // No tracing
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_CatchBlock_WithCode_NoTracing()
        {
            var src = WrapInPlugin(@"
try
{
    DoSomething();
}
[|catch|] (System.InvalidOperationException ex)
{
    var message = ex.Message;
    throw new Microsoft.Xrm.Sdk.InvalidPluginExecutionException(message);
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_MultipleCatchBlocks_OneWithoutTracing()
        {
            var src = WrapInPlugin(@"
var tracingService = (Microsoft.Xrm.Sdk.ITracingService)serviceProvider.GetService(typeof(Microsoft.Xrm.Sdk.ITracingService));
try
{
    DoSomething();
}
catch (System.ArgumentException ex)
{
    tracingService.Trace(""ArgumentException: "" + ex.Message);
}
[|catch|] (System.InvalidOperationException ex)
{
    // This one doesn't use tracing
    throw;
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region No Diagnostic Tests

        [Fact]
        public async Task NoDiagnostic_When_CatchBlock_Uses_TracingService()
        {
            var src = WrapInPlugin(@"
var tracingService = (Microsoft.Xrm.Sdk.ITracingService)serviceProvider.GetService(typeof(Microsoft.Xrm.Sdk.ITracingService));
try
{
    var x = 1 / 0;
}
catch (System.Exception ex)
{
    tracingService.Trace(""Exception: "" + ex.Message);
    throw new Microsoft.Xrm.Sdk.InvalidPluginExecutionException(""Error"");
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_CatchBlock_Uses_ITracingService_Variable()
        {
            var src = WrapInPlugin(@"
var tracing = (Microsoft.Xrm.Sdk.ITracingService)serviceProvider.GetService(typeof(Microsoft.Xrm.Sdk.ITracingService));
try
{
    ProcessData();
}
catch (System.Exception ex)
{
    tracing.Trace(""Error occurred: "" + ex.Message);
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_HasCatch_WithoutTracing()
        {
            var src = WrapInRegularClass(@"
try
{
    var x = 1 / 0;
}
catch (System.Exception ex)
{
    // Regular class - no tracing needed
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_CatchBlock_Uses_Trace_Method()
        {
            var src = WrapInPlugin(@"
var tracingService = (Microsoft.Xrm.Sdk.ITracingService)serviceProvider.GetService(typeof(Microsoft.Xrm.Sdk.ITracingService));
try
{
    DoSomething();
}
catch (System.ArgumentNullException ex)
{
    tracingService.Trace(""ArgumentNullException caught"");
    tracingService.Trace(""Stack: "" + ex.StackTrace);
    throw new Microsoft.Xrm.Sdk.InvalidPluginExecutionException(""Invalid argument"", ex);
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Workflow_CatchBlock_Uses_TracingService()
        {
            var src = WrapInWorkflow(@"
var tracingService = (Microsoft.Xrm.Sdk.ITracingService)((System.IServiceProvider)context).GetService(typeof(Microsoft.Xrm.Sdk.ITracingService));
try
{
    ProcessWorkflow();
}
catch (System.Exception ex)
{
    tracingService.Trace(""Workflow error: "" + ex.Message);
}
");
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
