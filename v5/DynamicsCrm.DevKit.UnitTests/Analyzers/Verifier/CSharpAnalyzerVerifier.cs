using System.Threading;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Testing;
using Microsoft.CodeAnalysis.CSharp.Testing;
using Microsoft.CodeAnalysis.Diagnostics;
namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier
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
            test.MarkupOptions = MarkupOptions.UseFirstDescriptor;
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

        private class Test : CSharpAnalyzerTest<TAnalyzer, DefaultVerifier>
        {
        }
    }
}
