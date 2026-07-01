using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class StatelessPluginAnalyzerTests
    {
        private const string XrmSdkStub = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
    public interface IOrganizationService { }
    public interface IPluginExecutionContext { }
}
namespace System.Activities
{
    public abstract class CodeActivity
    {
        protected abstract void Execute(object context);
    }
}
";

        #region Field Assignment Tests

        [Fact]
        public async Task Diagnostic_When_Assigning_To_Instance_Field_In_Execute()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    private Microsoft.Xrm.Sdk.IOrganizationService _service;
    
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        [|_service|] = null;
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Assigning_To_This_Field_In_Execute()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    private Microsoft.Xrm.Sdk.IPluginExecutionContext context;
    
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        [|this.context|] = null;
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Assigning_To_Readonly_Field_In_Constructor()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    private readonly string _config;
    
    public TestPlugin(string config)
    {{
        _config = config;  // OK - constructor assignment
    }}
    
    public void Execute(System.IServiceProvider serviceProvider)
    {{
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Assigning_To_Static_Field()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    private static string _staticField;
    
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        _staticField = ""value"";  // OK - static field
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Assigning_To_Local_Variable()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var localVar = ""value"";  // OK - local variable
        string anotherLocal;
        anotherLocal = ""test"";   // OK - local variable
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Property Assignment Tests

        [Fact]
        public async Task Diagnostic_When_Assigning_To_Instance_Property_In_Execute()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public Microsoft.Xrm.Sdk.IOrganizationService Service {{ get; set; }}
    
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        [|Service|] = null;
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Assigning_To_Static_Property()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public static string StaticProp {{ get; set; }}

    public void Execute(System.IServiceProvider serviceProvider)
    {{
        StaticProp = ""value"";  // OK - static property
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Assigning_To_Readonly_Property_NoSetter()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public Microsoft.Xrm.Sdk.IPluginExecutionContext Context {{ get; }}

    public void Execute(System.IServiceProvider serviceProvider)
    {{
        // Cannot assign to property with no setter - not reported
        var ctx = Context;
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Non-IPlugin Class Tests

        [Fact]
        public async Task NoDiagnostic_When_Regular_Class()
        {
            var src = $@"
{XrmSdkStub}
public class RegularClass
{{
    private string _field;
    
    public void Run()
    {{
        _field = ""value"";  // OK - not an IPlugin
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Helper Method Tests

        [Fact]
        public async Task Diagnostic_When_Assigning_In_Helper_Method_Called_From_Execute()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    private string _data;
    
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        HelperMethod();
    }}
    
    private void HelperMethod()
    {{
        [|_data|] = ""value"";  // Still in IPlugin class, still a problem
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region CodeActivity Tests

        [Fact]
        public async Task Diagnostic_When_Assigning_To_Instance_Field_In_CodeActivity()
        {
            var src = $@"
{XrmSdkStub}
public class TestWorkflow : System.Activities.CodeActivity
{{
    private string _data;
    
    protected override void Execute(object context)
    {{
        [|_data|] = ""value"";
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_CodeActivity_Constructor_Assignment()
        {
            var src = $@"
{XrmSdkStub}
public class TestWorkflow : System.Activities.CodeActivity
{{
    private readonly string _config;
    
    public TestWorkflow(string config)
    {{
        _config = config;  // OK - constructor assignment
    }}
    
    protected override void Execute(object context)
    {{
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Edge Case Tests

        [Fact]
        public async Task NoDiagnostic_When_Assigning_Field_Of_Different_Class()
        {
            var src = $@"
{XrmSdkStub}
public class HelperClass
{{
    public string Data;
}}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var helper = new HelperClass();
        helper.Data = ""value"";  // OK - not a field of the plugin class
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Assigning_Property_Of_Different_Class()
        {
            var src = $@"
{XrmSdkStub}
public class HelperClass
{{
    public string Data {{ get; set; }}
}}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var helper = new HelperClass();
        helper.Data = ""value"";  // OK - not a property of the plugin class
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Assigning_Readonly_Field()
        {
            var src = $@"
{XrmSdkStub}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    private readonly string _readonlyField;

    public TestPlugin()
    {{
        _readonlyField = ""init"";
    }}

    public void Execute(System.IServiceProvider serviceProvider)
    {{
        // _readonlyField can't be assigned to in Execute, so the analyzer won't reach it
        // But the compiler won't error — this is a valid readonly usage
        var x = _readonlyField;  // OK - just reading, not assigning
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Assigning_Field_Of_BaseClass_In_Execute()
        {
            var src = $@"
{XrmSdkStub}
public class BasePlugin
{{
    public string BaseField;
}}
public class TestPlugin : BasePlugin, Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        BaseField = ""value"";  // assigned in Execute - base class field
    }}
}}
";
            await CSharpAnalyzerVerifier<StatelessPluginAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
