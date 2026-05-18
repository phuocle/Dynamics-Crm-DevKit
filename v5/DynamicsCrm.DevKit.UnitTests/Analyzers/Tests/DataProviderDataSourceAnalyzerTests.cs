using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
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

        [Fact]
        public async Task Diagnostic_When_DataProvider_Named_PluginType_No_DataSource()
        {
            // PluginType as named argument
            var src = @"
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
        public CrmPluginRegistrationAttribute(string name, string message) { }
        public DynamicsCrm.DevKit.Shared.PluginType PluginType { get; set; }
        public string DataSource { get; set; }
    }
}
[[|DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin.Retrieve"", ""Retrieve"", PluginType = DynamicsCrm.DevKit.Shared.PluginType.DataProvider)|]]
public class RetrieveDataProviderNamed : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider) { }
}
";
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_PluginType_Is_Workflow()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyWorkflow"", ""Create"", DynamicsCrm.DevKit.Shared.PluginType.Workflow)]",
                "WorkflowPlugin");
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Edge Case Tests

        [Fact]
        public async Task NoDiagnostic_When_NonDataProvider_PluginType_With_Empty_DataSource()
        {
            var src = WrapCode(
                @"[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin"", ""Create"", DynamicsCrm.DevKit.Shared.PluginType.Plugin, DataSource = """")]",
                "CreatePlugin");
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Not_CrmPluginRegistration()
        {
            var src = @"
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

    [System.AttributeUsage(System.AttributeTargets.Class)]
    public class SomeOtherAttribute : System.Attribute { }
}
namespace DynamicsCrm.DevKit.Shared
{
    [SomeOtherAttribute]
    public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
    {
        public void Execute(System.IServiceProvider serviceProvider) { }
    }
}
";
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_DataSource_Named_Arg_Empty_String()
        {
            var src = @"
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
        public CrmPluginRegistrationAttribute(string name, string message) { }
        public DynamicsCrm.DevKit.Shared.PluginType PluginType { get; set; }
        public string DataSource { get; set; }
    }
}
[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin.Retrieve"", ""Retrieve"", PluginType = DynamicsCrm.DevKit.Shared.PluginType.DataProvider, [|DataSource = """"|])]
public class RetrieveDataProviderEmptyDS : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider) { }
}
";
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_DataSource_Is_Empty_Constant()
        {
            var src = @"
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
        public CrmPluginRegistrationAttribute(string name, string message) { }
        public DynamicsCrm.DevKit.Shared.PluginType PluginType { get; set; }
        public string DataSource { get; set; }
    }
}
public class RetrieveDataProviderConstDS : Microsoft.Xrm.Sdk.IPlugin
{
    private const string EmptyDataSource = """";

    [DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin.Retrieve"", ""Retrieve"", PluginType = DynamicsCrm.DevKit.Shared.PluginType.DataProvider, [|DataSource = EmptyDataSource|])]
    public void Execute(System.IServiceProvider serviceProvider) { }
}
";
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_TooFew_Arguments()
        {
            var src = @"
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
        public CrmPluginRegistrationAttribute(string name) { }
    }
}
[DynamicsCrm.DevKit.Shared.CrmPluginRegistration(""MyPlugin"")]
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider) { }
}
";
            await CSharpAnalyzerVerifier<DataProviderDataSourceAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
