# New Proposals for DynamicsCrm.DevKit v5

Based on code analysis of the `v5` branch and current industry trends (as of late 2024/early 2025), the following proposals identify key areas where `DynamicsCrm.DevKit` can be modernized to improve developer experience, performance, and cross-platform compatibility.

## 1. Migrate CLI to .NET 8 (Cross-Platform Support)

**Current State:**
The `DynamicsCrm.DevKit.Cli` project currently targets `.NET Framework 4.8` (`net48`). This limits the tool to Windows environments or requires Mono on Linux/macOS.

**Proposal:**
Migrate the CLI project to target `.NET 8` (or Multi-target `net48;net8.0`).

**Benefits:**
- **Cross-Platform:** Native execution on Linux and macOS, enabling usage in GitHub Actions/Azure DevOps hosted agents (ubuntu-latest) without Windows overhead.
- **Performance:** Significant runtime performance improvements in file processing and generation logic.
- **Modern Dependencies:** Align with `Microsoft.PowerPlatform.Dataverse.Client` which has robust .NET Core support.

**Action Items:**
- Update `DynamicsCrm.DevKit.Cli.csproj` to `<TargetFrameworks>net48;net8.0</TargetFrameworks>`.
- Refactor file I/O to use `System.IO.Abstractions` or conditional compilation where paths/newlines differ.

## 2. Roslyn Source Generators for Early Bound Types

**Current State:**
The code generation (generators) appears to rely on traditional external execution (CLI or T4 templates) to generate code *before* compilation.

**Proposal:**
Implement `IIncrementalGenerator` (Roslyn Source Generators) to generate Early Bound proxy classes during compilation.

**Benefits:**
- **Instant Feedback:** No need to run an external tool (CLI) to regenerate code after metadata changes if the generator can read the metadata cache or a schema file.
- **Performance:** Only regenerates what is needed using the incremental pipeline.
- **IDE Integration:** Seamless experience in Visual Studio; "It just works" without context switching.

## 3. Playwright Integration for UI Testing

**Current State:**
The `DynamicsCrm.DevKit.Test` implies unit testing, but there is no dedicated template or standard for UI testing of generated Web Resources or Forms.

**Proposal:**
Add a new project template `DynamicsCrm.DevKit.Test.Ui` that uses **Playwright for .NET**.

**Benefits:**
- **Reliability:** Playwright provides auto-waiting and is significantly more stable than Selenium for modern web apps (React/Fluent UI used by Dataverse).
- **Automation:** Enable end-to-end testing of Form logic (JS) and Custom Pages as part of the CI/CD pipeline.

## 4. GitHub Actions & Azure DevOps Pipeline Templates

**Current State:**
The `v5` folder contains no standard CI/CD configuration files (only a copilot instruction).

**Proposal:**
Include "scaffold" commands in the CLI (e.g., `devkit init ci --github` or `devkit init ci --azdo`) to generate best-practice workflow files.

**Benefits:**
- **standardization:** Ensure users use the correct actions (e.g., `microsoft/powerplatform-actions`) and authentications (Service Principals).
- **Adoption:** Lowers the barrier to entry for ALM (Application Lifecycle Management).

## 5. AI-Assisted Code Explanation & Query Generation

**Current State:**
`copilot-instructions.md` exists, but is static.

**Proposal:**
Integrate a `devkit ask "query"` command or a VS extension feature that uses local or API-based LLMs to:
- Convert SQL/Natural Language to `QueryExpression` or `FetchXML`.
- Explain complex existing plugins.

## 6. Modern Analyzers for Dataverse

**Current State:**
`DynamicsCrm.DevKit.Analyzers` targets `netstandard2.0` and uses Roslyn 4.14.

**Proposal:**
Expand the analyzer rule set to include 2024/2025 best practices:
- **Async/Await Usage:** Warn against `Task.Result` in Plugins (sync-over-async anti-patterns).
- **OData/WebAPI Checks:** Verify string literals in `Xrm.WebApi` calls match entity logical names.
- **Plugin Trace Log:** Warn if `ITracingService` is not used in catch blocks.

---
**Status:** Proposed
**Target Branch:** v5
