# Research: Convert DynamicsCrm.DevKit.Cli to .NET Tool (Detailed Plan)

## 1. Goal
Convert `DynamicsCrm.DevKit.Cli` to a **.NET 10 Global Tool** using **Spectre.Console**, while ensuring **Backward Compatibility** for existing users.

## 2. Backward Compatibility Strategy (Critical)
Since the existing CLI is widely used with scripts relying on the `/arg:value` syntax, we **must** support the legacy argument format. The new tool will support **both** styles transparently.

### 2.1. Argument Interception Layer
We will implement a middleware/converter in `Program.cs` that inspects `args` before passing them to `Spectre.Console`.

**Logic**:
1.  Check if args contain legacy prefixes (`/type:`, `/conn:`, etc.).
2.  If found, **normalize** them to the new CLI syntax on the fly.
    - `/type:generators` -> `generate` (Command)
    - `/type:webresources` -> `webresources` (Command)
    - `/conn:"..."` -> `--conn "..."`
    - `/profile:"..."` -> `--profile "..."`
    - `/json:"..."` -> `--json "..."`
3.  Pass the normalized args to `CommandApp`.

**Benefit**: Users can continue using their existing scripts (e.g., in CI/CD) without changing a single character of the arguments, even if the executable name changes (or if they alias the new tool).

## 3. Implementation Plan (Incremental)

### Phase 1: Foundation & Compatibility
**Goal**: Create a buildable .NET 10 Tool that supports legacy args.
1.  **Project Upgrade**:
    - Update `.csproj` to `net10.0`.
    - Add `Spectre.Console`, `Microsoft.PowerPlatform.Dataverse.Client`.
2.  **Shared Library**:
    - Update `Helper.cs` (Encryption).
3.  **Program.cs & Interceptor**:
    - Implement `LegacyArgConverter.Convert(string[] args)`.
    - Setup `Spectre.Console.CommandApp`.
4.  **Clean Slate**:
    - Exclude other tasks EXCEPT `TaskGenerator.cs`.

### Phase 2: The First Task (Generator)
**Goal**: Get code generation working with **BOTH** new and old syntax.
1.  **Refactor `TaskGenerator`**:
    - Migrate to `GeneratorCommand`.
2.  **Verification**:
    - Test New: `devkit generate --profile "Default"`
    - **Test Old**: `devkit /type:generators /profile:"Default"` (Should work identical to v4).

### Phase 3: Debugging & Verification (TestClientCode-JS-FORM)
**Goal**: Verify using the legacy profile arguments.
1.  **Build**: `dotnet build ...`
2.  **Run with Legacy Profile**:
    - Don't change the arguments in `launchSettings.json` (except `commandName` if needed).
    - Run: `dotnet run -- /conn:"..." /type:"generators" ...`
    - The `LegacyArgConverter` should handle this and route to `GeneratorCommand`.

### Phase 4: Migration Backlog
*Modules to migrate:*
- [ ] `TaskWebResource.cs`
- [ ] `TaskPlugin.cs`
- [ ] `TaskSolutionPackager.cs`
- [ ] ...

## 4. Execution Step (Phase 1 Start)
1.  Modify `.csproj`.
2.  Fix `Helper.cs`.
3.  Implement `Program.cs` with **Legacy Argument Support**.
4.  Implement `GeneratorCommand.cs`.
