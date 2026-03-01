using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
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
    private void DoSomething() {{ }}
    private void ProcessData() {{ }}
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
    private void ProcessWorkflow() {{ }}
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
    throw new System.Exception();
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
    throw new System.Exception();
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
    throw new System.Exception();
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
    throw new System.Exception();
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

        [Fact]
        public async Task NoDiagnostic_When_CatchBlock_Uses_CustomTracerClass()
        {
            var src = $@"
{Stubs}
public class CustomTracer : Microsoft.Xrm.Sdk.ITracingService
{{
    public void Trace(string format, params object[] args) {{ }}
}}

public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var tracer = new CustomTracer();
        try
        {{
            throw new System.Exception();
        }}
        catch (System.Exception ex)
        {{
            tracer.Trace(""Error: "" + ex.Message);
        }}
    }}
}}
";
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }



        [Fact]
        public async Task Diagnostic_When_CatchBlock_Uses_Static_Trace_Method()
        {
            var src = $@"
{Stubs}

namespace CustomTest
{{
    public class MyLogger
    {{
        public static void Trace(string s) {{ }}
    }}

    public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
    {{
        public void Execute(System.IServiceProvider serviceProvider)
        {{
            try
            {{
                throw new System.Exception();
            }}
            [|catch|] (System.Exception ex)
            {{
                MyLogger.Trace(""Error"");
            }}
        }}
    }}
}}
";
            await CSharpAnalyzerVerifier<TracingServiceInCatchAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public void Initialize_WithNullContext_ThrowsArgumentNullException()
        {
            var analyzer = new TracingServiceInCatchAnalyzer();
            Assert.Throws<System.ArgumentNullException>(() => analyzer.Initialize(null));
        }

        #endregion
    }
}
