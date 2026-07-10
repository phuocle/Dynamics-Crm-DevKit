# Analyzer Development Rules

Apply this rule only when the user explicitly points Codex to this file.

## Structure

| Path | Purpose |
|---|---|
| `DynamicsCrm.DevKit.Analyzers/` | Analyzer project targeting `netstandard2.0` |
| `DynamicsCrm.DevKit.Analyzers/CrmAnalyzers/` | Analyzer implementations |
| `DynamicsCrm.DevKit.Analyzers/Core/` | IDs, descriptors, base classes, and helpers |
| `DynamicsCrm.DevKit.UnitTests/Analyzers/Tests/` | xUnit/Roslyn analyzer tests |
| `DynamicsCrm.DevKit.UnitTests/Analyzers/Verifier/` | `CSharpAnalyzerVerifier<T>` |
| `DynamicsCrm.DevKit.Tests/TestAnalyzers/` | Visual Studio integration samples |
| `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/` | Analyzer documentation |

The current analyzer range is `DEVKIT1001` through `DEVKIT1021` (21 analyzers).

## Before changing an analyzer

Read:

1. `Core/DiagnosticIdentifiers.cs`.
2. `Core/DiagnosticDescriptors.cs`.
3. `Core/AnalyzerHelper.cs` and any helper used by the analyzer.
4. The corresponding file under `CrmAnalyzers/`.
5. Existing unit tests, integration sample, and documentation for the same diagnostic ID.

## Implementation and tests

- All analyzers inherit `BaseDiagnosticAnalyzer`.
- Keep identifiers, descriptors, implementation, tests, integration sample, and documentation aligned.
- Unit tests use xUnit with the Roslyn test framework. Use `[|code|]` markup for expected diagnostics when appropriate.
- Each supported diagnostic ID must have a matching `DEVKITxxxx.cs` integration sample under `TestAnalyzers/`.
- AI cannot validate Visual Studio integration behavior; ask the user to verify that portion manually.

## Verification

Execute `.codex/workflows/build-analyzer.md`. If only a narrow test is needed during iteration, run it first, but complete the analyzer workflow before handoff.

When adding a new analyzer, also update:

- `DiagnosticIdentifiers.cs` and `DiagnosticDescriptors.cs`.
- The analyzer implementation and unit test.
- The `TestAnalyzers/DEVKITxxxx.cs` integration sample.
- `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/DEVKITxxxx.md`.
- `ANALYZERS_ROADMAP.md` when status or scope changes.
