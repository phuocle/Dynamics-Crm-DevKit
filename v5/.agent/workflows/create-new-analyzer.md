---
description: Create a new Roslyn analyzer for DynamicsCrm.DevKit
---

# Create New Analyzer Workflow

This workflow guides you through creating a new Roslyn analyzer for DynamicsCrm.DevKit, following the established project patterns.

## Pre-requisites

Before starting, you need to know:
1. **Analyzer ID**: Next available ID (check `DiagnosticIdentifiers.cs` - currently DEVKIT1022+)
2. **Problem to detect**: What code pattern should trigger the diagnostic?
3. **Severity level**: Error, Warning, or Info?
4. **Microsoft Best Practice URL**: Official documentation link (if applicable)

---

## Step 1: Determine Next Available ID

// turbo

```powershell
# Check current highest ID in DiagnosticIdentifiers.cs
Get-Content "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Analyzers\Core\DiagnosticIdentifiers.cs" | Select-String "DEVKIT\d+"
```

Expected: Next ID after the highest existing one (e.g., if DEVKIT1021 exists, next is DEVKIT1022)

---

## Step 2: Add Diagnostic Identifier

Edit `d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Analyzers\Core\DiagnosticIdentifiers.cs`:

```csharp
// Add new constant at the end of the class
public const string YourAnalyzerName = "DEVKIT{XXXX}";
```

**Example:**
```csharp
public const string DuplicatePluginStepRegistration = "DEVKIT1022";
```

---

## Step 3: Add Diagnostic Descriptor

Edit `d:\github\Dynamics-Crm.DevKit.Analyzers\Core\DiagnosticDescriptors.cs`:

```csharp
/// <summary>DEVKIT{XXXX}</summary>
public static readonly DiagnosticDescriptor YourDescriptorName = CreateDescriptor(
    "DEVKIT{XXXX}",
    "Title of the diagnostic",
    "Message format with {0} placeholders",
    DiagnosticSeverity.Warning,  // or Error/Info
    "Detailed description of what this rule checks.");
```

**Example:**
```csharp
/// <summary>DEVKIT1022</summary>
public static readonly DiagnosticDescriptor DuplicatePluginStepRegistration = CreateDescriptor(
    "DEVKIT1022",
    "Duplicate plugin step registration detected",
    "Plugin '{0}' has duplicate registration for message '{1}'",
    DiagnosticSeverity.Warning,
    "Don't duplicate plug-in step registration as it can cause unintended behavior.");
```

---

## Step 4: Create Analyzer Implementation

Create new file: `d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Analyzers\CrmAnalyzers\{AnalyzerName}Analyzer.cs`

**Template:**
```csharp
using System;
using System.Collections.Immutable;
#if DEBUG
using System.Diagnostics;
#endif
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;

namespace DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    /// <summary>
    /// Analyzer to detect {DESCRIPTION}.
    /// 
    /// Based on Microsoft best practices:
    /// {MS_BEST_PRACTICE_URL}
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class {AnalyzerName}Analyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.YourDescriptorName); }
        }

        public override void Initialize(AnalysisContext context)
        {
#if DEBUG
            //if (!Debugger.IsAttached)
            //{
            //    Debugger.Launch();
            //}
#endif
            if (context == null) throw new ArgumentNullException(nameof(context));
            
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
            base.Initialize(context);
            
            // Register for appropriate syntax nodes
            context.RegisterSyntaxNodeAction(AnalyzeNode, SyntaxKind.ObjectCreationExpression);
        }

        private void AnalyzeNode(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            // Check if inside plugin/workflow (if applicable)
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(context.Node, semanticModel, context.CancellationToken))
                return;

            // Your detection logic here
            
            // Report diagnostic when issue detected
            // DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.YourDescriptorName,
            //     node.GetLocation(), "arg1", "arg2");
        }
    }
}
```

---

## Step 5: Create Unit Tests

Create new file: `d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.UnitTests\Analyzers\Tests\{AnalyzerName}AnalyzerTests.cs`

**Template:**
```csharp
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class {AnalyzerName}AnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
namespace System.Activities
{
    public abstract class CodeActivity
    {
        protected abstract void Execute(object context);
    }
}
// Add more stubs as needed for your analyzer
";

        private static string WrapInPlugin(string body) => $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        {body}
    }}
}}
";

        private static string WrapInWorkflow(string body) => $@"
{Stubs}
public class TestWorkflow : System.Activities.CodeActivity
{{
    protected override void Execute(object context)
    {{
        {body}
    }}
}}
";

        private static string WrapInRegularClass(string body) => $@"
{Stubs}
public class RegularClass
{{
    public void Run()
    {{
        {body}
    }}
}}
";

        #region Positive Tests (Should Report Diagnostic)

        [Fact]
        public async Task Diagnostic_When_Plugin_Has_Issue()
        {
            // Use [|...|] to mark expected diagnostic location
            var src = WrapInPlugin("[|problematic code here|]");
            await CSharpAnalyzerVerifier<{AnalyzerName}Analyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Workflow_Has_Issue()
        {
            var src = WrapInWorkflow("[|problematic code here|]");
            await CSharpAnalyzerVerifier<{AnalyzerName}Analyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Negative Tests (Should NOT Report Diagnostic)

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Has_Issue()
        {
            // No [|...|] markers = no diagnostics expected
            var src = WrapInRegularClass("problematic code here");
            await CSharpAnalyzerVerifier<{AnalyzerName}Analyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Has_Correct_Code()
        {
            var src = WrapInPlugin("correct code here");
            await CSharpAnalyzerVerifier<{AnalyzerName}Analyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
```

---

## Step 6: Run Unit Tests

// turbo

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Scripts"
.\Run-Analyzer-Coverage.ps1
```

**Expected:** All tests pass with good coverage

---

## Step 7: Create Integration Test File

Create new file: `d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestAnalyzers\DEVKIT{XXXX}.cs`

**Template:**
```csharp
using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
// Add other using statements as needed

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT{XXXX}: {Title of the analyzer}
    /// {Brief description of what triggers the diagnostic}
    /// </summary>
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT{XXXX}_{ShortName}", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT{XXXX}_{ShortName} : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // DEVKIT{XXXX}: Code that should trigger the diagnostic
            // {Example problematic code}
        }
    }
}
```

---

## Step 8: Copy DLL to Test Project for VS Integration Testing

// turbo

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5"
Copy-Item -Path "DynamicsCrm.DevKit.Analyzers\bin\Debug\netstandard2.0\DynamicsCrm.DevKit.Analyzers.dll" `
  -Destination "DynamicsCrm.DevKit.Tests\TestAnalyzers\Lib\" -Force
```

**IMPORTANT**: Request the user to:
1. Close and reopen Visual Studio (VS caches analyzers)
2. Open `DynamicsCrm.DevKit.Tests\TestAnalyzers\TestAnalyzers.slnx`
3. Verify the diagnostic appears in the integration test file

---

## Step 9: Create Documentation

Create new file: `d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Analyzers\DEVKIT{XXXX}.md`

Use template from: `DEVKIT.template.md`

**Required sections:**
- Description
- Microsoft Best Practice (with link)
- Why This Matters
- Detection
- Code Examples (Bad and Good)
- How to Fix
- Suppression
- Rule Properties

---

## Step 10: Update Roadmap

Edit `d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Analyzers\ANALYZERS_ROADMAP.md`:

1. Move entry from "Suggested New Analyzers" to "Current Analyzers" table
2. Update status from Planned to Implemented

---

## Final Verification Checklist

- [ ] `DiagnosticIdentifiers.cs` has new ID constant
- [ ] `DiagnosticDescriptors.cs` has new descriptor
- [ ] Analyzer class created in `CrmAnalyzers\`
- [ ] Unit tests pass (run `/build-analyzer`)
- [ ] Integration test file `DEVKIT{XXXX}.cs` created in `TestAnalyzers\`
- [ ] Documentation `DEVKIT{XXXX}.md` created
- [ ] `ANALYZERS_ROADMAP.md` updated
- [ ] Request the user to test in Visual Studio

---

## Tips and Common Patterns

### Check if inside Plugin/Workflow
```csharp
if (!AnalyzerHelper.IsInsidePluginOrWorkflow(node, semanticModel, context.CancellationToken))
    return;
```

### Register for multiple syntax kinds
```csharp
context.RegisterSyntaxNodeAction(AnalyzeNode, 
    SyntaxKind.ObjectCreationExpression,
    SyntaxKind.InvocationExpression);
```

### Report diagnostic with message arguments
```csharp
DiagnosticHelpers.ReportDiagnostic(context, 
    DiagnosticDescriptors.YourDescriptor,
    node.GetLocation(), 
    "HttpClient");  // {0} placeholder value
```

### Get type info from expression
```csharp
var typeInfo = semanticModel.GetTypeInfo(expression, context.CancellationToken);
var typeName = typeInfo.Type?.ToDisplayString();
```
