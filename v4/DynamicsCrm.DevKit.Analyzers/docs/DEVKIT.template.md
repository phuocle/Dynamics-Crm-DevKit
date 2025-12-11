# DEVKIT.template.md - Documentation Template for Analyzers

> **INSTRUCTIONS**: This is a template for creating consistent DEVKIT analyzer documentation.  
> Replace all `{{PLACEHOLDER}}` values with actual content. Remove sections marked `<!-- OPTIONAL -->` if not needed.

---

# DEVKIT{{XXXX}}: {{Title}}

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT{{XXXX}} |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | {{Error/Warning/Info}} |
| **Enabled by default** | Yes |

## Description

{{One or two sentences describing what this analyzer does and why it matters.}}

## Microsoft Best Practice

📚 **[{{Link Text}}]({{URL}})**

> {{Quote from Microsoft documentation}}

## Why This Matters

{{Problem description - what happens if you violate this rule:}}

1. **{{Impact 1}}**: {{Description}}
2. **{{Impact 2}}**: {{Description}}
3. **{{Impact 3}}**: {{Description}}
4. **{{Impact 4}}**: {{Description}}

<!-- OPTIONAL: Use this section if the analyzer applies to specific items -->
## {{Applicable Items/Patterns/Messages}}

| {{Column1}} | {{Column2}} |
|-------------|-------------|
| {{Item 1}} | {{Value 1}} |
| {{Item 2}} | {{Value 2}} |

## Detection

The analyzer flags {{patterns/usages/attributes}} where:
- {{Condition 1}}
- {{Condition 2}}

## Code Examples

### ❌ Bad Code

```csharp
{{Bad code example with comments explaining why it's bad}}
```

### ✅ Good Code

```csharp
{{Good code example with comments explaining why it's good}}
```

## How to Fix

1. **{{Step 1}}**: {{Description}}
2. **{{Step 2}}**: {{Description}}
3. **{{Step 3}}**: {{Description}}

### Before and After

```diff
- {{Old code}}
+ {{New code}}
```

<!-- OPTIONAL: Use this section for additional context or alternatives -->
## {{Additional Section Title}}

{{Additional content, scenarios, alternatives, etc.}}

## Suppression

If you have a legitimate need to suppress this warning:

```csharp
#pragma warning disable DEVKIT{{XXXX}}
{{Code that would trigger the warning}}
#pragma warning restore DEVKIT{{XXXX}}
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT{{XXXX}}.severity = {{none/suggestion/warning}}
```
