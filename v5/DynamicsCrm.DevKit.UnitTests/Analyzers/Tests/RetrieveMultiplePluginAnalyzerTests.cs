using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
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
        public CrmPluginRegistrationAttribute() { }
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

        #region Case-Insensitive Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Registered_On_retrieve_Lowercase()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration([|""retrieve""|], ""account"", DynamicsCrm.DevKit.Shared.StageEnum.PostOperation, DynamicsCrm.DevKit.Shared.ExecutionModeEnum.Synchronous, """", ""Retrieve Account"")]",
                "RetrievePluginLower");
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Edge Case Tests

        [Fact]
        public async Task NoDiagnostic_When_Not_CrmPluginRegistration()
        {
            var src = $@"
{Stubs}
[System.Obsolete(""old"")]
public class NotAPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider) {{ }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Message_Is_Nameof_Constant()
        {
            var src = $@"
{Stubs}
public class PluginWithConst : Microsoft.Xrm.Sdk.IPlugin
{{
    private const string MessageName = ""Retrieve"";
    [DynamicsCrm.DevKit.Shared.CrmPluginRegistration([|MessageName|], ""account"", DynamicsCrm.DevKit.Shared.StageEnum.PostOperation, DynamicsCrm.DevKit.Shared.ExecutionModeEnum.Synchronous, """", ""Retrieve Plugin"")]
    public void Execute(System.IServiceProvider serviceProvider) {{ }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Attribute_Has_No_Arguments()
        {
            var src = $@"
{Stubs}
[DynamicsCrm.DevKit.Shared.CrmPluginRegistration]
public class NoArgsPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider) {{ }}
}}
";
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Message_Is_RetrieveMultiple_Lowercase()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration([|""retrievemultiple""|], ""account"", DynamicsCrm.DevKit.Shared.StageEnum.PostOperation, DynamicsCrm.DevKit.Shared.ExecutionModeEnum.Synchronous, """", ""RetrieveMultiple Lower"")]",
                "RetrieveMultipleLower");
            await CSharpAnalyzerVerifier<RetrieveMultiplePluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
