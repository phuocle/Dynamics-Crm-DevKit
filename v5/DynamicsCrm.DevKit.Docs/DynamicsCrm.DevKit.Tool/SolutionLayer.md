# SolutionLayer Command

## Overview

The `solutionlayer` command checks for **unmanaged "Active" solution layers** across specified Dataverse solutions. Similar to XrmToolBox plugins like **Solution Layers Explorer** and **Unmanaged Active Layer Bulk Remover**, but as a CLI tool for automation and CI/CD pipelines.

**Use cases:**
- **ALM hygiene** — ensure all customizations are in managed solutions
- **Pre-deployment validation** — detect unmanaged changes before deploying
- **Environment health checks** — identify drift between environments

## What Are Solution Layers?

```
┌─────────────────────────┐
│  Active (Unmanaged)     │ ← customizations NOT in any solution ⚠️
├─────────────────────────┤
│  Solution C (Managed)   │
├─────────────────────────┤
│  Solution B (Managed)   │
├─────────────────────────┤
│  System (Base)          │
└─────────────────────────┘
```

The **Active layer** contains "loose" customizations that won't migrate with solutions.

## Full Entity vs Container Entity

When an entity is added to a solution, `rootcomponentbehavior` controls sub-component inclusion:

| Value | Name | What Gets Checked |
|-------|------|--------------------|
| **0** | Include Subcomponents | ALL managed attributes, relationships, forms, views, charts are expanded and checked |
| **1** | Do not include | Only explicitly added sub-components in `solutioncomponent` |
| **2** | Shell Only | Same as 1 |

## Usage

```
devkit-tool solutionlayer --conn <CONNECTION> --solutions <SOLUTIONS> [--output <FILE>]
```

| Argument | Required | Description |
|----------|----------|-------------|
| `--conn` | Yes | Dataverse connection string |
| `--solutions` | Yes | Comma-separated solution unique names |
| `--output` | No | Output file path (default: console) |

### Examples

```powershell
# Single solution
devkit-tool solutionlayer --conn "AuthType=ClientSecret;..." --solutions "MySolution"

# Multiple solutions, save to file
devkit-tool solutionlayer --conn "AuthType=ClientSecret;..." --solutions "Core,Client,Server" --output "report.txt"
```

## Output Format

```
SOLUTION: MySolution_Core
    Entity (3)
        [account].[new_customfield] - [guid]
    System Form (1)
        [account].[Account - Custom Form] - [guid]
    Saved Query (2)
        [contact].[Active Contacts Custom] - [guid]

Take: 2.35 minutes
```

## How It Works

1. **Load Component Definitions** — from `solutioncomponentdefinition` table + `componenttype` global optionset (60+ types)
2. **Load Solution Components** — for each solution, retrieve all `solutioncomponent` records
3. **Expand Full Entities** — for entities with `rootcomponentbehavior=0`, query metadata to add managed attributes, relationships, forms, views, charts
4. **Filter Activity Relationships** — exclude auto-generated `regardingobjectid` relationships
5. **Check Active Layers** — batch query `msdyn_componentlayer` (200/batch via `ExecuteMultiple`) looking for `msdyn_solutionname == "Active"`
6. **Format Results** — parse `msdyn_componentjson` for display-friendly names

## Comparison with XrmToolBox

| Feature | DevKit Tool | XrmToolBox Solution Layers Explorer |
|---------|-------------|-------------------------------------|
| Detect active layers | ✅ | ✅ |
| Remove active layers | ❌ (future) | ✅ |
| CLI / automation | ✅ | ❌ (GUI only) |
| Multiple solutions | ✅ | Per-solution |
| File output | ✅ | ❌ |

## Key Dataverse Tables

| Table | Purpose |
|-------|---------|
| `solution` | Resolve name → ID |
| `solutioncomponent` | List components in solution |
| `solutioncomponentdefinition` | Component type definitions |
| `msdyn_componentlayer` | Layer information per component |
| `systemform` | Forms (expanded for full entities) |
| `savedquery` | Views (expanded for full entities) |
| `savedqueryvisualization` | Charts (expanded for full entities) |
