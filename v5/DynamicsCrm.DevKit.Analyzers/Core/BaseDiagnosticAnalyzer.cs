using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using Microsoft.CodeAnalysis.Diagnostics;

namespace DynamicsCrm.DevKit.Analyzers
{
    [DebuggerDisplay("{DebuggerDisplay,nq}")]
    public abstract class BaseDiagnosticAnalyzer : DiagnosticAnalyzer
    {
        protected BaseDiagnosticAnalyzer()
        {
        }

        [ExcludeFromCodeCoverage]
        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay
        {
            get { return $"{GetType()} {{{string.Join(", ", SupportedDiagnostics.Select(f => f.Id))}}}"; }
        }

        public override void Initialize(AnalysisContext context)
        {
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.None);
        }
    }
}
