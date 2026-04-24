# Step 3 - FromPac Generated Arguments

Priority: P1

Parallelization: should coordinate with Step 2. This step is narrow and can be handled by one agent.

## Goal

Ensure generated CLI command lines for PAC profile authentication include the full auth contract, especially `--auth FromPac`.

## Ownership

Primary files:

- `DynamicsCrm.DevKit.Shared/CliArgsBuilder.cs`
- relevant unit tests under `DynamicsCrm.DevKit.UnitTests`
- templates only if tests reveal template-specific problems

Avoid touching:

- CLI parser option naming unless Step 2 is assigned to the same agent.
- secret fixture cleanup unless Step 1 is assigned to the same agent.

## Current Risk

`BuildFromPacArgs()` appears to produce `--pacprofile "..."` but not `--auth FromPac`. If generated `.bat` files call commands that require auth type, FromPac scripts may fail validation.

## Detailed Tasks

### 3.1 Confirm Current Behavior

```powershell
rg -n "class CliArgsBuilder|BuildFromPacArgs|pacprofile|FromPac|CliConnectionArgs" DynamicsCrm.DevKit.Shared DynamicsCrm.DevKit.UnitTests ProjectTemplates ItemTemplates
```

Read the builder and the template replacement path before editing.

### 3.2 Add Or Update Tests First

Create focused unit tests for:

- FromPac profile outputs `--auth FromPac --pacprofile "profile"`.
- Profile names with spaces are quoted.
- Empty/null PAC profile behavior is intentional.
- ClientSecret still outputs expected auth/url/clientid/clientsecret args.
- Interactive/DeviceCode output still matches parser contract.

Test names should describe generated command behavior, not implementation details.

### 3.3 Fix Builder

Expected behavior:

```text
--auth FromPac --pacprofile "DEVKIT_TEST_PROFILE"
```

Implementation guidance:

- Use existing quoting helper if present.
- Preserve existing ordering if tests or templates expect it, unless ordering was the bug.
- Do not include credentials in generated output.

### 3.4 Check Template Integration

Search:

```powershell
rg -n "\$CliConnectionArgs\$|CliArgsBuilder|Build\(form\.CrmConnection" DynamicsCrm.DevKit ProjectTemplates ItemTemplates DynamicsCrm.DevKit.Shared
```

Expected:

- Templates receive the fixed string through the existing replacement flow.
- No duplicate `--auth` is introduced.

## Verification

```powershell
rg -n "BuildFromPacArgs|--auth FromPac|--pacprofile" DynamicsCrm.DevKit.Shared DynamicsCrm.DevKit.UnitTests ProjectTemplates ItemTemplates
```

Manual expected output check:

- A generated FromPac command line contains both `--auth FromPac` and `--pacprofile`.

## Workflows

- Shared builder changed: `/build-cli`
- VSIX replacement path affected: `/build-vsix`
- Tests added/changed: `/unit-test`

## Done Criteria

- FromPac builder output includes auth type.
- Unit tests cover FromPac generated args.
- Existing auth arg generation still passes tests.

## Suggested Agent Prompt

```text
You own Step 3 FromPac Generated Arguments. Add focused tests around CliArgsBuilder, then fix FromPac output to include --auth FromPac with --pacprofile. Keep changes narrow. Do not run dotnet build/test directly; use repo workflows only. Report files changed and tests/workflows run.
```

