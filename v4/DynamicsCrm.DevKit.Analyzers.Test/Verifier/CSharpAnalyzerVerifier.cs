using System.Threading;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
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
            // Use modern .NET reference assemblies to enable analyzer config support
            test.ReferenceAssemblies = ReferenceAssemblies.Net.Net60;
            // Disambiguate diagnostics when analyzers expose multiple descriptors with same ID
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

        private class Test : CSharpAnalyzerTest<TAnalyzer, XUnitVerifier>
        {
        }
    }
}
