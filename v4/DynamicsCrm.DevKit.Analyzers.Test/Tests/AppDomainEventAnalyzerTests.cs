using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class AppDomainEventAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
namespace System
{
    public class AppDomain
    {
        public static AppDomain CurrentDomain { get; }
        public event UnhandledExceptionEventHandler UnhandledException;
        public event ResolveEventHandler AssemblyResolve;
        public event EventHandler ProcessExit;
        public event EventHandler DomainUnload;
    }
    public delegate void UnhandledExceptionEventHandler(object sender, UnhandledExceptionEventArgs e);
    public delegate System.Reflection.Assembly ResolveEventHandler(object sender, ResolveEventArgs e);
    public class UnhandledExceptionEventArgs { }
    public class ResolveEventArgs { }
}
";

        #region Diagnostic Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Subscribes_To_UnhandledException()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        [|System.AppDomain.CurrentDomain.UnhandledException += (s, e) => {{ }}|];
    }}
}}
";
            await CSharpAnalyzerVerifier<AppDomainEventAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Subscribes_To_AssemblyResolve()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        [|System.AppDomain.CurrentDomain.AssemblyResolve += (s, e) => null|];
    }}
}}
";
            await CSharpAnalyzerVerifier<AppDomainEventAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Subscribes_To_ProcessExit()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        [|System.AppDomain.CurrentDomain.ProcessExit += (s, e) => {{ }}|];
    }}
}}
";
            await CSharpAnalyzerVerifier<AppDomainEventAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region No Diagnostic Tests

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Class()
        {
            var src = $@"
{Stubs}
public class RegularClass
{{
    public void Run()
    {{
        System.AppDomain.CurrentDomain.UnhandledException += (s, e) => {{ }};
    }}
}}
";
            await CSharpAnalyzerVerifier<AppDomainEventAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
