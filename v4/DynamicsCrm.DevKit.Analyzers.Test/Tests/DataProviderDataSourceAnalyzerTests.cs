using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class DataProviderDataSourceAnalyzerTests
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
    public enum PluginType { Plugin = 0, CustomAction = 1, CustomApi = 2, Workflow = 3, DataProvider = 4 }
    
    public class CrmPluginRegistrationAttribute : System.Attribute
    {
        public CrmPluginRegistrationAttribute(string name, string message, PluginType pluginType) { }
        public string DataSource { get; set; }
        public string EntityLogicalName { get; set; }
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

        #region Diagnostic Tests

        [Fact]
        public async Task Diagnostic_When_DataProvider_Has_Empty_DataSource()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin.Retrieve"", ""Retrieve"", DynamicsCrm.DevKit.Shared.PluginType.DataProvider, [|DataSource = """"|])]",
                "RetrieveDataProvider");
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_DataProvider_Has_No_DataSource()
        {
            var src = WrapCode(
                @"[[|DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin.Retrieve"", ""Retrieve"", DynamicsCrm.DevKit.Shared.PluginType.DataProvider)|]]",
                "RetrieveDataProvider");
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Negative Tests

        [Fact]
        public async Task NoDiagnostic_When_DataProvider_Has_Valid_DataSource()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin.Retrieve"", ""Retrieve"", DynamicsCrm.DevKit.Shared.PluginType.DataProvider, DataSource = ""my_datasource"")]",
                "RetrieveDataProvider");
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_PluginType_Is_Plugin()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin"", ""Create"", DynamicsCrm.DevKit.Shared.PluginType.Plugin)]",
                "CreatePlugin");
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_PluginType_Is_CustomApi()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyApi"", ""my_customapi"", DynamicsCrm.DevKit.Shared.PluginType.CustomApi)]",
                "CustomApiPlugin");
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
