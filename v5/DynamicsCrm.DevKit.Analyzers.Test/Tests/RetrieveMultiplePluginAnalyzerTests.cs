using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class RetrieveMultiplePluginAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
namespace DynamicsCrm.DevKit.Shared
{
    public enum StageEnum { PreValidation = 10, PreOperation = 20, PostOperation = 40 }
    public enum ExecutionModeEnum { Synchronous = 0, Asynchronous = 1 }
    
    public class CrmPluginRegistrationAttribute : System.Attribute
    {
        public CrmPluginRegistrationAttribute(string message, string entityLogicalName, StageEnum stage, ExecutionModeEnum mode, string filteringAttributes, string stepName) { }
    }
}
";

        private static string WrapCode(string attributes, string className) => $@"
{Stubs}
{attributes}
public class {className} : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider) {{ }}
}}
";

        #region Retrieve Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Registered_On_Retrieve()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration([|""Retrieve""|], ""account"", DynamicsCrm.DevKit.Shared.StageEnum.PostOperation, DynamicsCrm.DevKit.Shared.ExecutionModeEnum.Synchronous, """", ""Retrieve Account"")]",
                "RetrievePlugin");
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Registered_On_RetrieveMultiple()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration([|""RetrieveMultiple""|], ""account"", DynamicsCrm.DevKit.Shared.StageEnum.PostOperation, DynamicsCrm.DevKit.Shared.ExecutionModeEnum.Synchronous, """", ""RetrieveMultiple Account"")]",
                "RetrieveMultiplePlugin");
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Negative Tests

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Registered_On_Create()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""Create"", ""account"", DynamicsCrm.DevKit.Shared.StageEnum.PostOperation, DynamicsCrm.DevKit.Shared.ExecutionModeEnum.Synchronous, """", ""Create Account"")]",
                "CreatePlugin");
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Registered_On_Update()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""Update"", ""account"", DynamicsCrm.DevKit.Shared.StageEnum.PostOperation, DynamicsCrm.DevKit.Shared.ExecutionModeEnum.Synchronous, ""name"", ""Update Account"")]",
                "UpdatePlugin");
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
