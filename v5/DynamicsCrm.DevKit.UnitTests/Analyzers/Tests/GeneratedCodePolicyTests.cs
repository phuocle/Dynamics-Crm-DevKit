using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    /// <summary>
    /// Regression tests for Policy A: generated code is NOT analyzed (GeneratedCodeAnalysisFlags.None).
    /// All analyzers must skip files/types marked with [System.CodeDom.Compiler.GeneratedCode].
    /// </summary>
    public class GeneratedCodePolicyTests
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
    }
    public delegate void UnhandledExceptionEventHandler(object sender, UnhandledExceptionEventArgs e);
    public class UnhandledExceptionEventArgs { }
}
";

        /// <summary>
        /// Policy A: a plugin class marked [GeneratedCode] that subscribes to AppDomain events
        /// must NOT produce DEVKIT1001 diagnostics.
        /// </summary>
        [Fact]
        public async Task AppDomainEventAnalyzer_GeneratedCodeClass_NoDiagnostic()
        {
            var src = $@"
{Stubs}
[System.CodeDom.Compiler.GeneratedCode(""DevKit"", ""1.0"")]
public class GeneratedPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        System.AppDomain.CurrentDomain.UnhandledException += (s, e) => {{ }};
    }}
}}
";
            // No expected diagnostics — generated code should be skipped (Policy A).
            await CSharpAnalyzerVerifier<AppDomainEventAnalyzer>.VerifyAnalyzerAsync(src);
        }

        /// <summary>
        /// Baseline: same code WITHOUT [GeneratedCode] MUST produce a diagnostic.
        /// This confirms Policy A only suppresses generated code, not all code.
        /// </summary>
        [Fact]
        public async Task AppDomainEventAnalyzer_NonGeneratedCodeClass_ProducesDiagnostic()
        {
            var src = $@"
{Stubs}
public class HandWrittenPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        [|System.AppDomain.CurrentDomain.UnhandledException|] += (s, e) => {{ }};
    }}
}}
";
            await CSharpAnalyzerVerifier<AppDomainEventAnalyzer>.VerifyAnalyzerAsync(src);
        }
    }
}
