using System.Threading;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.Testing;
using Microsoft.CodeAnalysis.CSharp.Testing;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.CodeAnalysis.Testing.Verifiers;

namespace DynamicsCrm.DevKit.Analyzers.Test.Verifier
{
    public static class CSharpAnalyzerVerifier<TAnalyzer>
        where TAnalyzer : DiagnosticAnalyzer, new()
    {
        public static DiagnosticResult Diagnostic(string diagnosticId)
            => new DiagnosticResult(diagnosticId, DiagnosticSeverity.Warning);

        public static DiagnosticResult Diagnostic(DiagnosticDescriptor descriptor)
            => new DiagnosticResult(descriptor);

        public static async Task VerifyAnalyzerAsync(string source, params DiagnosticResult[] expected)
        {
            var test = new Test { TestCode = source };
            test.ReferenceAssemblies = ReferenceAssemblies.NetFramework.Net48.Default;
            test.TestState.AnalyzerConfigFiles.Add(("/.editorconfig", @"is_global = true"));
            test.TestBehaviors |= TestBehaviors.SkipGeneratedCodeCheck;
            test.SolutionTransforms.Add((solution, projectId) =>
            {
                var project = solution.GetProject(projectId)!;
                project = project.WithParseOptions(((Microsoft.CodeAnalysis.CSharp.CSharpParseOptions)project.ParseOptions!)
                    .WithLanguageVersion(Microsoft.CodeAnalysis.CSharp.LanguageVersion.Preview));
                return project.Solution;
            });

            test.ExpectedDiagnostics.AddRange(expected);
            await test.RunAsync(CancellationToken.None);
        }

        private class Test : CSharpAnalyzerTest<TAnalyzer, XUnitVerifier>
        {
        }
    }
}
