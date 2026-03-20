# SolutionLayer Command

## Overview

The `solutionlayer` command checks for **unmanaged "Active" solution layers** across specified Dataverse solutions. It identifies components that have customizations sitting in the Active (unmanaged) layer, which is critical for:

- **ALM hygiene** — ensuring all customizations are properly captured in managed solutions
- **Pre-deployment validation** — detecting unmanaged changes that could cause merge conflicts
- **Environment health checks** — identifying drift between environments

## What Are Solution Layers?

In Dataverse, every component (entity, attribute, form, view, etc.) can be modified by multiple solutions. These modifications create a **stack of layers**:

```
┌─────────────────────────┐
│  Active (Unmanaged)     │ ← customizations NOT in any solution
├─────────────────────────┤
│  Solution C (Managed)   │ ← installed managed solution
├─────────────────────────┤
│  Solution B (Managed)   │
├─────────────────────────┤
│  Solution A (Managed)   │
├─────────────────────────┤
│  System (Base)          │ ← out-of-the-box
└─────────────────────────┘
```

The **Active layer** contains customizations that are NOT captured in any solution. These are essentially "loose" customizations that:
- Won't be migrated when you deploy solutions
- Can cause unexpected behavior differences between environments
- May be lost if the environment is reset or rebuilt

## Usage

```
devkit-tool solutionlayer --conn <CONNECTION> --solutions <SOLUTIONS> [--output <FILE>]
```

### Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| `--conn` | Yes | Dataverse connection string |
| `--solutions` | Yes | Comma-separated list of solution unique names |
| `--output` | No | Output file path (default: console output) |

### Examples

```powershell
# Check a single solution, output to console
devkit-tool solutionlayer --conn "AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=...;ClientSecret=..." --solutions "MySolution"

# Check multiple solutions, save to file
devkit-tool solutionlayer --conn "AuthType=ClientSecret;..." --solutions "Core,Client,Server,Customize" --output "layer_report.txt"
```

## Output Format

The output is organized by solution, then by component type:

```
SOLUTION: MySolution_Core
    Entity (3)
        [account].[new_customfield] - [guid]
        [contact].[new_anotherfield] - [guid]
    System Form (1)
        [account].[Account - Custom Form] - [guid]
    Saved Query (2)
        [contact].[Active Contacts Custom] - [guid]

SOLUTION: MySolution_Client
    Web Resource (5)
        [new_/scripts/custom.js] - [guid]
    ...

Take: 2.35 minutes
```

## How It Works

### Step 1: Load Component Definitions

Retrieves all known component types from:
- `solutioncomponentdefinition` table — contains component type IDs and names
- `componenttype` global optionset — provides additional labels

### Step 2: Load Solution Components

For each specified solution:
1. Resolves the solution unique name to its GUID
2. Retrieves all `solutioncomponent` records for that solution
3. For **full Entity** components (rootcomponentbehavior = 0), expands to include:
   - Managed attributes
   - Managed relationships (1:N, N:1, N:N)
   - All system forms
   - All saved queries (views)
   - All charts (saved query visualizations)
4. Filters out auto-created activity relationships (regarding object)

### Step 3: Check Active Layers

For each component:
1. Queries `msdyn_componentlayer` table with the component's type and ID
2. Uses `ExecuteMultiple` for batch processing (200 per batch)
3. Looks for layers where `msdyn_solutionname == "Active"`
4. If found, parses `msdyn_componentjson` to extract display-friendly info:
   - For **Attributes**: resolves entity logical name + attribute logical name
   - For **Views** (Saved Query): includes `returnedtypecode` + view name
   - For **Charts**: includes `primaryentitytypecode` + chart name
   - For **Forms**: includes `objecttypecode` + form name
   - For others: uses `msdyn_name` directly

## Reference

This command is adapted from the `SolutionLayer.cs` implementation in `Abiz.Ht.Console.Tools`, generalized for use with any Dynamics 365 / Dataverse environment and solution set.

### Key Dataverse Tables Used

| Table | Purpose |
|-------|---------|
| `solution` | Resolve solution name → ID |
| `solutioncomponent` | List components in a solution |
| `solutioncomponentdefinition` | Component type definitions |
| `msdyn_componentlayer` | Solution layer information per component |
| `systemform` | Forms (expanded for full entities) |
| `savedquery` | Views (expanded for full entities) |
| `savedqueryvisualization` | Charts (expanded for full entities) |

### Key Concepts

| Concept | Value | Meaning |
|---------|-------|---------|
| Component Type 1 | Entity | Full entity metadata |
| Component Type 2 | Attribute | Entity field |
| Component Type 3 | Relationship | Entity relationship |
| Component Type 10 | Relationship (filtered) | Activity regarding relationships excluded |
| Component Type 26 | Saved Query | View |
| Component Type 59 | Saved Query Visualization | Chart |
| Component Type 60 | System Form | Form |
| rootcomponentbehavior = 0 | Include subcomponents | Full entity with all children |
