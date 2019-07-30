using System.Diagnostics;
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

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay
        {
            get { return $"{GetType()} {{{string.Join(", ", SupportedDiagnostics.Select(f => f.Id))}}}"; }
        }

        public override void Initialize(AnalysisContext context)
        {
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.None);
        }
    }
}
