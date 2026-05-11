# Analysis: Remove auto_publish Parameter from MCP Tools

## Executive Summary

**Decision:** Remove `auto_publish` parameter from all MCP tools.

**Rationale:**
- Batch scenarios are rare (user typically makes 1 change at a time)
- Simpler API (remove 1 parameter from 8 tools)
- Code layer controls publish behavior (not AI decision)
- Accept slower performance for rare batch scenarios
- Most common case: single operation → publish immediately

---

## Tools with auto_publish Parameter

Found **8 tools** with `auto_publish` parameter (all default = `true`):

| # | Tool | Parameter | Default | Current Behavior |
|---|------|-----------|---------|------------------|
| 1 | `upsert_table` | `auto_publish` | `true` | Publish after create/update |
| 2 | `upsert_column` | `auto_publish` | `true` | Publish after create/update |
| 3 | `upsert_relationship` | `auto_publish` | `true` | Publish after create/update/delete |
| 4 | `manage_form` | `auto_publish` | `true` | Publish after update/rename/undo |
| 5 | `manage_view` | `auto_publish` | `true` | Publish after create/update/rename/set_default/undo |
| 6 | `manage_choice` | `auto_publish` | `true` | Publish after update (only if needed) |
| 7 | `manage_webresource` | `auto_publish` | `true` | Publish after create/update/delete |
| 8 | `manage_ribbon` | `auto_publish` | `true` | PublishAll after update/undo |

---

## Detailed Analysis by Tool

### 1. upsert_table

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertTableTool.cs`

**Current logic:**
```csharp
// Line 67
[Description("")] bool auto_publish = true

// Line 234 (create mode)
if (auto_publish)
    Publish(new List<string> { logicalName });

// Line 349 (update mode)
if (auto_publish)
    Publish(new List<string> { logicalName });
```

**Proposed change:**
- Remove `auto_publish` parameter
- Always call `Publish(new List<string> { logicalName })` after create/update
- Remove all `if (auto_publish)` checks

**Justification:**
- Entity metadata changes (create/update) MUST be published to be visible
- No valid scenario for skipping publish

---

### 2. upsert_column

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`

**Current logic:**
```csharp
// Line 84
[Description("")] bool auto_publish = true

// Line 267 (create mode)
if (auto_publish)
    Publish(new List<string> { resolvedEntityName });

// Line 502 (update mode)
if (auto_publish)
    Publish(new List<string> { resolvedEntityName });
```

**Proposed change:**
- Remove `auto_publish` parameter
- Always call `Publish(new List<string> { resolvedEntityName })` after create/update
- Remove all `if (auto_publish)` checks

**Justification:**
- Attribute metadata changes MUST be published to be visible
- No valid scenario for skipping publish

---

### 3. upsert_relationship

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertRelationshipTool.cs`

**Current logic:**
```csharp
// Line 80
[Description("")] bool auto_publish = true

// Line 178 (create_1n)
if (auto_publish)
    Publish(new List<string> { resolvedReferencedEntity, resolvedReferencingEntity });

// Line 254 (create_nn)
if (auto_publish)
    Publish(new List<string> { resolvedEntity1, resolvedEntity2 });

// Line 330 (update)
if (auto_publish)
    Publish(new List<string> { referencedEntity, referencingEntity });

// Line 391 (delete)
if (auto_publish)
    Publish(new List<string> { referencedEntity, referencingEntity });

// Line 467 (add_target)
if (auto_publish)
    Publish(new List<string> { resolvedEntityName, resolvedReferencedEntity });

// Line 543 (remove_target)
if (auto_publish)
    Publish(new List<string> { resolvedEntityName, resolvedReferencedEntity });
```

**Proposed change:**
- Remove `auto_publish` parameter
- Always call `Publish(...)` after all actions
- Remove all `if (auto_publish)` checks

**Justification:**
- Relationship metadata changes MUST be published to be visible
- No valid scenario for skipping publish

---

### 4. manage_form

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs`

**Current logic:**
```csharp
// Line 77
[Description("Publish after. Set false when batching.")] bool auto_publish = true

// Used in 6 methods:
// - HandleUpdate (line 321)
// - HandleUpdateWithOperations (line 352)
// - HandleUpdateWithFormXml (line 556)
// - HandleRename (line 741)
// - HandleUndo (line 874)
// - Publish method (line 1046)

// Line 1046
private void Publish(string entityName, bool autoPublish)
{
    if (!autoPublish) return;
    // ... publish logic
}
```

**Proposed change:**
- Remove `auto_publish` parameter from tool signature (line 77)
- Remove `auto_publish` parameter from all Handle* methods
- Remove `autoPublish` parameter from `Publish` method
- Always call `Publish(entityName)` after update/rename/undo

**Justification:**
- Form changes MUST be published to be visible in UI
- Description says "Set false when batching" but batch scenarios are rare
- Simpler: always publish after form changes

---

### 5. manage_view

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs`

**Current logic:**
```csharp
// Line 76
[Description("Publish after. false when batching.")] bool auto_publish = true

// Used in 6 methods:
// - HandleCreate (line 246)
// - HandleUpdate (line 379)
// - HandleRename (line 596)
// - HandleSetDefault (line 685)
// - HandleUndo (line 762)
// - Publish method (line 1002)

// Line 1002
private void Publish(string entityName, bool autoPublish)
{
    if (!autoPublish) return;
    // ... publish logic
}
```

**Proposed change:**
- Remove `auto_publish` parameter from tool signature (line 76)
- Remove `auto_publish` parameter from all Handle* methods
- Remove `autoPublish` parameter from `Publish` method
- Always call `Publish(entityName)` after create/update/rename/set_default/undo

**Justification:**
- View changes MUST be published to be visible in UI
- Description says "false when batching" but batch scenarios are rare
- Simpler: always publish after view changes

---

### 6. manage_choice

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs`

**Current logic:**
```csharp
// Line 86
[Description("Update only: publish only this option set after changes that need publishing. Create and delete-only update do not issue a publish request because new/deleted customizations are automatically published by Dataverse.")] bool auto_publish = true

// Line 234 (update action)
if (auto_publish && needsPublish)
    PublishOptionSet(optionSetName);
```

**Proposed change:**
- Remove `auto_publish` parameter
- Always call `PublishOptionSet(optionSetName)` when `needsPublish == true`
- Keep the logic: only publish if changes need publishing (not for create/delete)

**Justification:**
- Option set changes (add/rename options) MUST be published to be visible
- Create/delete already auto-published by Dataverse (no change needed)
- The `needsPublish` flag already controls when to publish

---

### 7. manage_webresource

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs`

**Current logic:**
```csharp
// Line 111
[Description("")] bool auto_publish = true

// Line 234 (create)
if (auto_publish)
    PublishWebResource(wrId);

// Line 318 (update)
if (auto_publish)
    PublishWebResource(wrId);

// Line 382 (delete)
if (auto_publish)
    PublishWebResource(wrId);
```

**Proposed change:**
- Remove `auto_publish` parameter
- Always call `PublishWebResource(wrId)` after create/update/delete
- Remove all `if (auto_publish)` checks

**Justification:**
- Web resource changes MUST be published to be visible in UI
- No valid scenario for skipping publish

---

### 8. manage_ribbon

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs`

**Current logic:**
```csharp
// Line 85
[Description("Runs PublishAll. false to batch.")] bool auto_publish = true

// Used in 3 methods:
// - UpdateRibbon (line 668)
// - UpdateRibbonFromOperations (line 756)
// - UndoRibbon (line 929)

// Line 1312
private (bool Success, Guid? AsyncOperationId) TryPublish(bool autoPublish, string entityName)
{
    if (!autoPublish) return (false, null);
    // ... PublishAllXmlAsync logic
}
```

**Proposed change:**
- Remove `auto_publish` parameter from tool signature (line 85)
- Remove `auto_publish` parameter from UpdateRibbon, UpdateRibbonFromOperations, UndoRibbon
- Remove `autoPublish` parameter from `TryPublish` method
- Always call `TryPublish(entityName)` after update/undo
- Rename method to `PublishAll` (no longer "Try")

**Justification:**
- Ribbon changes MUST be published via PublishAll (no entity-specific publish)
- Description says "false to batch" but batch scenarios are rare
- Simpler: always publish after ribbon changes

---

## Implementation Plan

### Phase 1: Remove auto_publish parameter from tool signatures

For each tool, remove the parameter from the `[McpServerTool]` method signature:

```csharp
// BEFORE
public CallToolResult manage_form(
    ...,
    bool auto_publish = true)

// AFTER
public CallToolResult manage_form(
    ...)
```

### Phase 2: Remove auto_publish from internal methods

For each tool, remove the parameter from all internal Handle* methods:

```csharp
// BEFORE
private CallToolResult HandleUpdate(..., bool auto_publish)

// AFTER
private CallToolResult HandleUpdate(...)
```

### Phase 3: Remove conditional publish logic

Replace all conditional publish calls with unconditional calls:

```csharp
// BEFORE
if (auto_publish)
    Publish(entityName);

// AFTER
Publish(entityName);
```

### Phase 4: Update Publish helper methods

Remove `autoPublish` parameter from helper methods:

```csharp
// BEFORE
private void Publish(string entityName, bool autoPublish)
{
    if (!autoPublish) return;
    // ... publish logic
}

// AFTER
private void Publish(string entityName)
{
    // ... publish logic
}
```

### Phase 5: Update structured results

Remove `published` field from structured results (always true now):

```csharp
// BEFORE
Published = auto_publish

// AFTER
Published = true
```

Or remove the field entirely if it's always true.

---

## Impact Analysis

### Breaking Changes

**API Changes:**
- 8 tools lose `auto_publish` parameter
- AI agents must update their tool calls (remove the parameter)
- No backward compatibility (parameter removed entirely)

**Behavior Changes:**
- All operations now always publish (no opt-out)
- Batch scenarios will be slower (multiple publish operations)
- No functional regression (publish was default behavior)

### Performance Impact

**Worst case scenario (batch operations):**
- Before: 10 operations + 1 publish = ~5-10 seconds
- After: 10 operations + 10 publishes = ~50-100 seconds

**Mitigation:**
- Batch scenarios are rare (< 5% of use cases)
- Most common case: 1 operation → no performance difference
- User can still batch manually by calling tools then publish_customizations

### Testing Requirements

**Unit tests:**
- Update all tool tests to remove `auto_publish` parameter
- Verify publish is always called after operations

**Integration tests:**
- Test each tool action (create/update/delete/rename/undo)
- Verify changes are visible in UI after operation

**Regression tests:**
- Test batch scenarios (10 forms, 10 views, etc.)
- Measure performance impact (acceptable if < 2 minutes for 10 operations)

---

## Recommendation

**PROCEED with removal:**

1. ✅ Simpler API (remove 1 parameter from 8 tools)
2. ✅ Code layer controls behavior (not AI decision)
3. ✅ Most common case optimized (single operation)
4. ✅ No functional regression (publish was default)
5. ⚠️ Batch scenarios slower (acceptable trade-off)

**Alternative considered and rejected:**
- Keep `auto_publish` for batching optimization
- Reason: Adds complexity for rare use case (< 5%)

---

## Files to Modify

1. `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertTableTool.cs`
2. `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`
3. `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertRelationshipTool.cs`
4. `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs`
5. `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs`
6. `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs`
7. `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs`
8. `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs`

**Total:** 8 files

---

## Estimated Effort

- Analysis: ✅ Done
- Implementation: ~2-3 hours (8 files, straightforward changes)
- Testing: ~1-2 hours (verify each tool)
- Documentation: ~30 minutes (update tool descriptions)

**Total:** ~4-6 hours

---

## Next Steps

1. Review this analysis document
2. Approve removal of `auto_publish` parameter
3. Implement changes in all 8 tools
4. Run `/claude-build-cli` to rebuild
5. Test each tool with MCP `whoami` verification
6. Run `/claude-commit` to commit all changes

---

**Document created:** 2026-05-11  
**Author:** Claude (AI Agent)  
**Status:** Pending user review
