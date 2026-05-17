using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class PluginDepthAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
    public interface IPluginExecutionContext
    {
        int Depth { get; }
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

        private static string WrapInRegularClass(string body) => $@"
{Stubs}
public class RegularClass
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        {body}
    }}
}}
";

        #region Diagnostic Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_DoesNot_Check_Depth()
        {
            var src = @"
" + Stubs + @"
public class [|TestPlugin|] : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        // Plugin logic without depth check
        var x = 1;
    }
}
";
            await CSharpAnalyzerVerifier<PluginDepthAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Checks_Depth()
        {
            var src = @"
" + Stubs + @"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        var context = (Microsoft.Xrm.Sdk.IPluginExecutionContext)serviceProvider.GetService(typeof(Microsoft.Xrm.Sdk.IPluginExecutionContext));
        if (context.Depth > 1) return;
        // Plugin logic
    }
}
";
            await CSharpAnalyzerVerifier<PluginDepthAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Uses_Depth_In_Condition()
        {
            var src = @"
" + Stubs + @"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        var context = (Microsoft.Xrm.Sdk.IPluginExecutionContext)serviceProvider.GetService(typeof(Microsoft.Xrm.Sdk.IPluginExecutionContext));
        if (context.Depth == 1)
        {
            // Only run on first level
        }
    }
}
";
            await CSharpAnalyzerVerifier<PluginDepthAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region No Diagnostic Tests

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Class()
        {
            var src = WrapInRegularClass("var x = 1;");
            await CSharpAnalyzerVerifier<PluginDepthAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Logs_Depth()
        {
            var src = @"
" + Stubs + @"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        var context = (Microsoft.Xrm.Sdk.IPluginExecutionContext)serviceProvider.GetService(typeof(Microsoft.Xrm.Sdk.IPluginExecutionContext));
        var depth = context.Depth;
        // Use depth somehow
    }
}
";
            await CSharpAnalyzerVerifier<PluginDepthAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region ExpressionBody Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_ExpressionBody()
        {
            var src = $@"
{Stubs}
public class [|TestPlugin|] : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider) => DoWork();
    private void DoWork() {{ }}
}}
";
            await CSharpAnalyzerVerifier<PluginDepthAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
