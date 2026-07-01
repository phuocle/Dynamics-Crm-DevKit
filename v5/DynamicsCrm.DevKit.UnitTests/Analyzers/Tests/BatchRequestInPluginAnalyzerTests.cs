using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class BatchRequestInPluginAnalyzerTests
    {
        private const string XrmSdkStub = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
namespace Microsoft.Xrm.Sdk.Messages
{
    public class ExecuteMultipleRequest { }
    public class ExecuteTransactionRequest { }
    public class CreateMultipleRequest { }
    public class UpdateMultipleRequest { }
    public class UpsertMultipleRequest { }
    public class CreateRequest { }  // Not a batch request
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
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        {body}
    }}
}}
";

        private static string WrapInWorkflow(string body) => $@"
{XrmSdkStub}
public class TestWorkflow : System.Activities.CodeActivity
{{
    protected override void Execute(object context)
    {{
        {body}
    }}
}}
";

        private static string WrapInRegularClass(string body) => $@"
{XrmSdkStub}
public class RegularClass
{{
    public void Run()
    {{
        {body}
    }}
}}
";

        #region ExecuteMultipleRequest Tests

        [Fact]
        public async Task Diagnostic_When_ExecuteMultipleRequest_In_Plugin()
        {
            var src = WrapInPlugin("var r = [|new Microsoft.Xrm.Sdk.Messages.ExecuteMultipleRequest()|];");
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_ExecuteMultipleRequest_In_Workflow()
        {
            var src = WrapInWorkflow("var r = [|new Microsoft.Xrm.Sdk.Messages.ExecuteMultipleRequest()|];");
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_ExecuteMultipleRequest_In_RegularClass()
        {
            var src = WrapInRegularClass("var r = new Microsoft.Xrm.Sdk.Messages.ExecuteMultipleRequest();");
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region ExecuteTransactionRequest Tests

        [Fact]
        public async Task Diagnostic_When_ExecuteTransactionRequest_In_Plugin()
        {
            var src = WrapInPlugin("var r = [|new Microsoft.Xrm.Sdk.Messages.ExecuteTransactionRequest()|];");
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region CreateMultipleRequest Tests

        [Fact]
        public async Task Diagnostic_When_CreateMultipleRequest_In_Plugin()
        {
            var src = WrapInPlugin("var r = [|new Microsoft.Xrm.Sdk.Messages.CreateMultipleRequest()|];");
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region UpdateMultipleRequest Tests

        [Fact]
        public async Task Diagnostic_When_UpdateMultipleRequest_In_Plugin()
        {
            var src = WrapInPlugin("var r = [|new Microsoft.Xrm.Sdk.Messages.UpdateMultipleRequest()|];");
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region UpsertMultipleRequest Tests

        [Fact]
        public async Task Diagnostic_When_UpsertMultipleRequest_In_Plugin()
        {
            var src = WrapInPlugin("var r = [|new Microsoft.Xrm.Sdk.Messages.UpsertMultipleRequest()|];");
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Non-Batch Request Tests

        [Fact]
        public async Task NoDiagnostic_When_NonBatch_Request_In_Plugin()
        {
            var src = WrapInPlugin("var r = new Microsoft.Xrm.Sdk.Messages.CreateRequest();");
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region NativeActivity Tests

        [Fact]
        public async Task Diagnostic_When_ExecuteMultipleRequest_In_NativeActivity()
        {
            var src = $@"
{XrmSdkStub}
namespace System.Activities
{{
    public abstract class NativeActivity : System.Activities.CodeActivity {{ }}
}}
public class TestWorkflow : System.Activities.NativeActivity
{{
    protected override void Execute(object context)
    {{
        var r = [|new Microsoft.Xrm.Sdk.Messages.ExecuteMultipleRequest()|];
    }}
}}
";
            await CSharpAnalyzerVerifier<BatchRequestInPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
