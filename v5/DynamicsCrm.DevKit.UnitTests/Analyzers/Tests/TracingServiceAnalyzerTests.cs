using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class TracingServiceAnalyzerTests
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

        private static string WrapInPluginWithTracing() => $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var tracingService = (Microsoft.Xrm.Sdk.ITracingService)serviceProvider.GetService(typeof(Microsoft.Xrm.Sdk.ITracingService));
        tracingService.Trace(""Plugin started"");
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
        public async Task Diagnostic_When_Plugin_DoesNot_Use_TracingService()
        {
            var src = $@"
{Stubs}
public class [|TestPlugin|] : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        // No ITracingService usage
    }}
}}
";
            await CSharpAnalyzerVerifier<TracingServiceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region No Diagnostic Tests

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Uses_TracingService()
        {
            var src = WrapInPluginWithTracing();
            await CSharpAnalyzerVerifier<TracingServiceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Class()
        {
            var src = WrapInRegularClass(@"// regular code");
            await CSharpAnalyzerVerifier<TracingServiceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
