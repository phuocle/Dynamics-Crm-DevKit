# Metadata Propagation Fix - Implementation Plan

**Date:** 2026-05-13  
**Reference:** [metadata-propagation-complete-guide.md](metadata-propagation-complete-guide.md)  
**Scope:** Fix metadata propagation delays and lock contention in 13 DevKit MCP tools  
**Estimated Effort:** 5-6 days  
**Status:** Ready to implement

---

## Executive Summary

**Problem:** Sequential metadata operations fail with lock contention errors (0x80040216, 0x80060891). Users must manually wait 15-30 seconds between operations.

**Solution:** Implement automatic retry with exponential backoff + operation-specific wait times.

**Impact:** 
- 90% reduction in lock contention errors
- 80% reduction in user manual retries
- Seamless multi-step schema creation

**Changes:**
- 2 new/enhanced helper classes
- 12 tool updates
- ~130 lines of code across 13 files

---

## Task Breakdown

### Phase 1: Foundation (Day 1) - CRITICAL

#### Task 1.1: Create MetadataRetryHelper.cs
**Priority:** CRITICAL  
**Effort:** 2 hours  
**Dependencies:** None  
**Owner:** AI Agent

**Description:**
Create new helper class with automatic retry logic for metadata operations that fail due to lock contention.

**Files:**
- Create: `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/MetadataRetryHelper.cs`

**Implementation:**
- Copy full code from [Complete Guide STEP 1](metadata-propagation-complete-guide.md#step-1-create-metadataretryhelpercs)
- Namespace: `DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper`
- 2 public methods: `RetryOnLockContention(Action)` and `RetryOnLockContention<T>(Func<T>)`
- Exponential backoff: 10s, 20s, 30s, 40s (max 5 attempts)
- Error detection: 0x80040216, 0x80060891, "another...running", "lock"

**Acceptance Criteria:**
- [ ] File compiles without errors
- [ ] Namespace matches existing helpers
- [ ] Both overloads (void and return-value) work
- [ ] Error detection correctly identifies lock contention errors
- [ ] Non-lock errors propagate immediately

**Verification:**
```bash
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
```

---

#### Task 1.2: Enhance MetadataOperationWaitHelper.cs
**Priority:** CRITICAL  
**Effort:** 1 hour  
**Dependencies:** None  
**Owner:** AI Agent

**Description:**
Add operation-specific wait methods to existing helper.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/MetadataOperationWaitHelper.cs`

**Implementation:**
- Replace entire file with enhanced version from [Complete Guide STEP 2](metadata-propagation-complete-guide.md#step-2-enhance-metadataoperationwaithelpercs)
- Add 6 new constants: `TableCreationWaitSeconds=8`, `ColumnCreationWaitSeconds=5`, etc.
- Add 6 new methods: `WaitAfterTableCreation()`, `WaitAfterColumnCreation()`, etc.
- Keep existing `WaitAfterMutation()` for backward compatibility

**Acceptance Criteria:**
- [ ] File compiles without errors
- [ ] All new constants defined
- [ ] All new methods implemented
- [ ] Existing `ManageChoiceTool` still works (uses `WaitAfterMutation`)
- [ ] XML documentation complete

**Verification:**
```bash
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
```

---

---

#### ✅ Phase 1 Checkpoint: Build & Verify

**After completing all Phase 1 tasks, run:**

```bash
/claude-build-cli
```

**Verify:**
- [ ] Build succeeds with no errors
- [ ] Helper classes compile correctly
- [ ] No breaking changes to existing tools

**If build fails:** Fix compilation errors before proceeding to Phase 2.

**Note:** Unit tests will be created in a separate task later.

---

### Phase 2: CRITICAL Tools (Day 2-3)

#### Task 2.1: Update UpsertTableTool
**Priority:** CRITICAL  
**Effort:** 1 hour  
**Dependencies:** Task 1.2  
**Owner:** AI Agent

**Description:**
Add 8-second wait after table creation to allow metadata propagation.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertTableTool.cs`

**Implementation:**
- Apply [Complete Guide STEP 3](metadata-propagation-complete-guide.md#step-3-update-upserttabletool-critical)
- Add wait after line 380 (after publish succeeds)
- Code: `if (published) { MetadataOperationWaitHelper.WaitAfterTableCreation(); }`

**Acceptance Criteria:**
- [ ] Code compiles
- [ ] Wait only executes if publish succeeded
- [ ] Wait duration is 8 seconds
- [ ] No changes to output format or structured result

**Verification:**
```bash
/claude-build-cli
# Then test: create table → create column (should succeed without manual wait)
```

---

#### Task 2.2: Update UpsertColumnTool
**Priority:** CRITICAL  
**Effort:** 3 hours  
**Dependencies:** Task 1.1, Task 1.2  
**Owner:** AI Agent

**Description:**
Add retry on create + wait after publish for all column types. Extended wait for lookup columns.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`

**Implementation:**
Apply [Complete Guide STEP 4](metadata-propagation-complete-guide.md#step-4-update-upsertcolumntool-critical):

1. **Change 4.1** (line 346): Wrap `ExecuteCreateAttribute` in retry
2. **Change 4.2** (line 353): Add 5s wait after publish for all column methods (15 locations)
3. **Change 4.3** (line 730): Extended 20s wait for lookup columns

**Acceptance Criteria:**
- [ ] Create operations wrapped in retry (handles lock contention)
- [ ] All 15 column creation methods have 5s wait after publish
- [ ] Lookup columns have 20s wait (not 5s)
- [ ] Clear error messages when retry exhausted
- [ ] No changes to output format

**Verification:**
```bash
/claude-build-cli
# Test: create table → create column → create lookup (all should succeed)
```

---

#### Task 2.3: Update UpsertRelationshipTool
**Priority:** CRITICAL  
**Effort:** 2 hours  
**Dependencies:** Task 1.1, Task 1.2  
**Owner:** AI Agent

**Description:**
Add retry on create + extended wait after publish for relationships.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertRelationshipTool.cs`

**Implementation:**
Apply [Complete Guide STEP 5](metadata-propagation-complete-guide.md#step-5-update-upsertrelationshiptool-critical):

1. **Change 5.1** (line 185): Wrap `CreateOneToManyResponse` in retry
2. **Change 5.2** (line 187): Add 20s wait after publish

**Acceptance Criteria:**
- [ ] Create wrapped in retry
- [ ] 20s wait after publish (not 5s)
- [ ] Clear error messages
- [ ] No changes to output format

**Verification:**
```bash
/claude-build-cli
# Test: create relationship (should retry on lock contention)
```

---

#### Task 2.4: Integration Test - Full Schema Creation
**Priority:** CRITICAL  
**Effort:** 2 hours  
**Dependencies:** Task 2.1, Task 2.2, Task 2.3  
**Owner:** AI Agent

**Description:**
End-to-end test of sequential metadata operations without manual waits.

**Test Scenario:**
```
1. Create table "devkit_country"
2. Create column "devkit_code" on "devkit_country"
3. Create column "devkit_name" on "devkit_country"
4. Create table "devkit_city"
5. Create column "devkit_name" on "devkit_city"
6. Create lookup "devkit_countryid" on "devkit_city" → "devkit_country"
```

**Acceptance Criteria:**
- [ ] All 6 operations succeed without manual intervention
- [ ] Total time < 90 seconds
- [ ] No lock contention errors
- [ ] No manual waits required

**Verification:**
Use MCP tools sequentially via Claude Code or test script.

---

#### ✅ Phase 2 Checkpoint: Build & Verify

**After completing all Phase 2 tasks, run:**

```bash
/claude-build-cli
```

**Verify:**
- [ ] Build succeeds with no errors
- [ ] All CRITICAL tools compile correctly
- [ ] Integration test passes (6/6 operations succeed)
- [ ] No lock contention errors in sequential operations
- [ ] Output format unchanged

**If build fails:** Fix compilation errors before proceeding to Phase 3.

**If integration test fails:** Debug and fix tool implementations before proceeding.

---

### Phase 3: HIGH Priority Tools (Day 4)

#### Task 3.1: Update ManageChoiceTool
**Priority:** HIGH  
**Effort:** 2 hours  
**Dependencies:** Task 1.1  
**Owner:** AI Agent

**Description:**
Add retry for option operations (add/update/delete).

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs`

**Implementation:**
Apply [Complete Guide STEP 6](metadata-propagation-complete-guide.md#step-6-update-managechoicetool-high):
- Wrap `InsertOptionValueRequest` in retry (line 305-317)
- Wrap `UpdateOptionValueRequest` in retry (line ~330)
- Wrap `DeleteOptionValueRequest` in retry (line ~350)
- Keep existing wait at line 367

**Acceptance Criteria:**
- [ ] All option operations wrapped in retry
- [ ] Existing wait logic preserved
- [ ] Clear error messages
- [ ] No changes to output format

**Verification:**
```bash
/claude-build-cli
# Test: create choice → add options (should retry on lock contention)
```

---

#### Task 3.2: Update ManageFormTool
**Priority:** HIGH  
**Effort:** 1 hour  
**Dependencies:** Task 1.2  
**Owner:** AI Agent

**Description:**
Add 5s wait after PublishXmlRequest at 4 locations.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs`

**Implementation:**
Apply [Complete Guide STEP 7](metadata-propagation-complete-guide.md#step-7-update-manageformtool-high):
- Line 485: After form update publish
- Line 662: After form create publish
- Line 810: After form rename publish
- Line 980: After form undo publish

**Acceptance Criteria:**
- [ ] 5s wait added at all 4 locations
- [ ] Wait only after successful publish
- [ ] No changes to output format

**Verification:**
```bash
/claude-build-cli
# Test: update form → update form again (should succeed without manual wait)
```

---

#### Task 3.3: Update ManageViewTool
**Priority:** HIGH  
**Effort:** 30 minutes  
**Dependencies:** Task 1.2  
**Owner:** AI Agent

**Description:**
Add 5s wait after PublishXmlRequest.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs`

**Implementation:**
Apply [Complete Guide STEP 8](metadata-propagation-complete-guide.md#step-8-update-manageviewtool-high):
- Line 1473: Add `MetadataOperationWaitHelper.WaitAfterFormView();`

**Acceptance Criteria:**
- [ ] 5s wait added after publish
- [ ] No changes to output format

**Verification:**
```bash
/claude-build-cli
# Test: update view → update view again (should succeed)
```

---

#### Task 3.4: Update ManageWebResourceTool
**Priority:** HIGH  
**Effort:** 30 minutes  
**Dependencies:** Task 1.2  
**Owner:** AI Agent

**Description:**
Add 3s wait after PublishXmlRequest.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs`

**Implementation:**
Apply [Complete Guide STEP 9](metadata-propagation-complete-guide.md#step-9-update-managewebresourcetool-high):
- Line 640: Add `MetadataOperationWaitHelper.WaitAfterWebResource();`

**Acceptance Criteria:**
- [ ] 3s wait added after publish
- [ ] No changes to output format

**Verification:**
```bash
/claude-build-cli
# Test: create webresource → update webresource (should succeed)
```

---

#### Task 3.5: Update ManageAppTool
**Priority:** HIGH  
**Effort:** 1 hour  
**Dependencies:** Task 1.2  
**Owner:** AI Agent

**Description:**
Publish app navigation changes before returning success so immediate `manage_app(action='detail')` readback sees the updated sitemap.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageAppTool.cs`
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs`

**Implementation:**
- After `update_navigation` updates sitemap XML and app components, call appmodule-specific `PublishXmlRequest`.
- Call `MetadataOperationWaitHelper.WaitForPropagation()` after publish.
- Return `Published=true` and no publish next step for successful navigation updates.
- Preserve backup, validation, operation summaries, and existing structured result fields.
- Update `docs://instructions_for_manage_app` to state navigation updates auto-publish while other app mutations still require separate publish.

**Acceptance Criteria:**
- [ ] Code compiles
- [ ] `manage_app(action='update_navigation')` publishes app navigation before returning success
- [ ] Immediate `manage_app(action='detail')` readback shows updated navigation
- [ ] Output and structured result report `Published=true`
- [ ] Create/update/undo app metadata behavior remains unchanged

**Verification:**
```bash
/claude-build-cli
# Test: update app navigation -> detail readback shows the new area/group/items
```

---

#### ✅ Phase 3 Checkpoint: Build & Verify

**After completing all Phase 3 tasks, run:**

```bash
/claude-build-cli
```

**Verify:**
- [ ] Build succeeds with no errors
- [ ] All HIGH priority tools compile correctly
- [ ] No regressions in existing functionality
- [ ] Output format unchanged

**If build fails:** Fix compilation errors before proceeding to Phase 4.

---

### Phase 4: MEDIUM Priority Tools (Day 5)

#### Task 4.1: Update ManageCommandTool
**Priority:** MEDIUM  
**Effort:** 30 minutes  
**Dependencies:** Task 1.2  
**Owner:** AI Agent

**Description:**
Add 5s wait after PublishXmlRequest.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageCommandTool.cs`

**Implementation:**
Apply [Complete Guide STEP 10](metadata-propagation-complete-guide.md#step-10-update-managecommandtool-medium):
- Line 2614: Add `MetadataOperationWaitHelper.WaitAfterFormView();`

**Acceptance Criteria:**
- [ ] 5s wait added after publish
- [ ] No changes to output format

**Verification:**
```bash
/claude-build-cli
# Test: create command → update command (should succeed)
```

---

#### Task 4.2: Enhance ManageRibbonTool
**Priority:** MEDIUM  
**Effort:** 1 hour  
**Dependencies:** None  
**Owner:** AI Agent

**Description:**
Add structured result fields for async PublishAll guidance.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs`

**Implementation:**
Apply [Complete Guide STEP 11](metadata-propagation-complete-guide.md#step-11-enhance-manageribbontool-medium):
- Add `NeedsWait`, `EstimatedWaitSeconds`, `WaitReason` to structured result

**Acceptance Criteria:**
- [ ] Structured result has new fields
- [ ] Fields populated when using PublishAllXmlAsync
- [ ] No changes to text output

**Verification:**
```bash
/claude-build-cli
# Test: update ribbon → verify structured result has NeedsWait field
```

---

#### Task 4.3: Enhance PublishCustomizationsTool
**Priority:** MEDIUM  
**Effort:** 1 hour  
**Dependencies:** None  
**Owner:** AI Agent

**Description:**
Add structured result fields for wait guidance.

**Files:**
- Edit: `DynamicsCrm.DevKit.Cli/Mcp/Tools/PublishCustomizationsTool.cs`

**Implementation:**
Apply [Complete Guide STEP 12](metadata-propagation-complete-guide.md#step-12-enhance-publishcustomizationstool-medium):
- Add `NeedsWait`, `WaitSeconds`, `WaitReason` to structured result

**Acceptance Criteria:**
- [ ] Structured result has new fields
- [ ] Fields populated correctly for sync/async publish
- [ ] No changes to text output

**Verification:**
```bash
/claude-build-cli
# Test: publish → verify structured result has wait guidance
```

---

#### ✅ Phase 4 Checkpoint: Build & Verify

**After completing all Phase 4 tasks, run:**

```bash
/claude-build-cli
```

**Verify:**
- [ ] Build succeeds with no errors
- [ ] All MEDIUM priority tools compile correctly
- [ ] Structured results have new fields
- [ ] No regressions in existing functionality

**If build fails:** Fix compilation errors before proceeding to Phase 5.

---

### Phase 5: MCP Restart & Validation (Day 5)

#### Task 5.1: Rebuild and Restart MCP
**Priority:** CRITICAL  
**Effort:** 30 minutes  
**Dependencies:** All previous tasks  
**Owner:** AI Agent

**Description:**
Rebuild CLI, install new version, kill stale MCP processes, verify new version running.

**Steps:**
1. Run `/claude-build-cli`
2. Kill stale MCP processes
3. Call MCP `whoami` to start new process
4. Verify `structuredContent.devkit.version` matches new build
5. Verify `structuredContent.devkit.assemblySha256` matches manifest

**Acceptance Criteria:**
- [ ] Build succeeds
- [ ] New MCP process starts
- [ ] Version matches expected
- [ ] SHA256 matches manifest
- [ ] No stale processes running

**Verification:**
```bash
/claude-build-cli
Get-Process | Where-Object {$_.ProcessName -like "*DynamicsCrm.DevKit.Cli*"} | Stop-Process
# Call MCP whoami
```

---

#### Task 5.2: Smoke Tests - CRITICAL Tools
**Priority:** CRITICAL  
**Effort:** 2 hours  
**Dependencies:** Task 5.1  
**Owner:** AI Agent

**Description:**
Test each CRITICAL tool to verify no regressions.

**Test Cases:**
1. **upsert_table**: Create table → verify 8s wait → create column succeeds
2. **upsert_column**: Create column → verify 5s wait → create another column succeeds
3. **upsert_column (lookup)**: Create lookup → verify 20s wait → relationship operations succeed
4. **upsert_relationship**: Create relationship → verify 20s wait → no lock errors

**Acceptance Criteria:**
- [ ] All CRITICAL tools work without manual waits
- [ ] No lock contention errors
- [ ] Output format unchanged
- [ ] Structured results unchanged

---

#### Task 5.3: Smoke Tests - HIGH Tools
**Priority:** HIGH  
**Effort:** 1 hour  
**Dependencies:** Task 5.1  
**Owner:** AI Agent

**Description:**
Test each HIGH priority tool.

**Test Cases:**
1. **manage_choice**: Create choice → add options → verify retry on lock
2. **manage_form**: Update form → update again → verify 5s wait
3. **manage_view**: Update view → update again → verify 5s wait
4. **manage_webresource**: Create WR → update → verify 3s wait

**Acceptance Criteria:**
- [ ] All HIGH tools work without manual waits
- [ ] No regressions
- [ ] Output unchanged

---

#### ✅ Phase 5 Checkpoint: Final Verification

**After completing all Phase 5 tasks:**

**Verify:**
- [ ] All smoke tests pass
- [ ] No lock contention errors in sequential operations
- [ ] MCP process running with correct version
- [ ] All tools work as expected

**If smoke tests fail:** Debug and fix issues before proceeding to Phase 6.

---

### Phase 6: Documentation (Day 6)

#### Task 6.1: Update Tool Descriptions
**Priority:** LOW  
**Effort:** 2 hours  
**Dependencies:** Task 5.2, Task 5.3  
**Owner:** AI Agent

**Description:**
Update tool descriptions to document wait/retry behavior.

**Files:**
- Edit: Tool description strings in each updated tool file

**Changes:**
- Add note about automatic retry on lock contention
- Add note about automatic wait after publish
- Add note about operation-specific wait times

**Acceptance Criteria:**
- [ ] All 12 tool descriptions updated
- [ ] Descriptions mention retry behavior
- [ ] Descriptions mention wait times

**Verification:**
```bash
/claude-build-cli
```

---

#### Task 6.2: Update mcp.prompts.md
**Priority:** LOW  
**Effort:** 1 hour  
**Dependencies:** Task 6.1  
**Owner:** AI Agent

**Description:**
Add phased operation examples and best practices.

**Files:**
- Edit: `DynamicsCrm.DevKit.Docs/mcp.prompts.md`

**Content:**
- Phased creation pattern examples
- Error code reference (0x80040216, 0x80060891)
- Recovery patterns
- Best practices for multi-step operations

**Acceptance Criteria:**
- [ ] Examples added
- [ ] Error codes documented
- [ ] Best practices clear

**Verification:**
```bash
/claude-build-cli
```

---

#### Task 6.3: Update CLAUDE.md
**Priority:** LOW  
**Effort:** 1 hour  
**Dependencies:** Task 6.2  
**Owner:** AI Agent

**Description:**
Add metadata operation guidance to project instructions.

**Files:**
- Edit: `CLAUDE.md` or `AGENTS.md`

**Content:**
- Metadata operation best practices
- Phased creation patterns
- Troubleshooting guide reference

**Acceptance Criteria:**
- [ ] Guidance added
- [ ] References to complete guide
- [ ] Clear for future AI agents

**Verification:**
```bash
/claude-build-cli
```

---

#### ✅ Phase 6 Checkpoint: Final Build

**After completing all Phase 6 tasks, run:**

```bash
/claude-build-cli
```

**Verify:**
- [ ] Build succeeds with no errors
- [ ] Documentation complete and accurate
- [ ] All references correct

**Implementation Complete!** 🎉

---

## Dependencies Graph

```
Phase 1 (Foundation)
├─ Task 1.1 (MetadataRetryHelper) ──┐
├─ Task 1.2 (MetadataOperationWaitHelper) ──┐
└─ Task 1.3 (Unit Tests) ←──────────────────┘
                                             │
Phase 2 (CRITICAL Tools)                     │
├─ Task 2.1 (UpsertTableTool) ←──────────────┤
├─ Task 2.2 (UpsertColumnTool) ←─────────────┤
├─ Task 2.3 (UpsertRelationshipTool) ←───────┤
└─ Task 2.4 (Integration Test) ←─────────────┘
                                             │
Phase 3 (HIGH Tools)                         │
├─ Task 3.1 (ManageChoiceTool) ←─────────────┤
├─ Task 3.2 (ManageFormTool) ←───────────────┤
├─ Task 3.3 (ManageViewTool) ←───────────────┤
├─ Task 3.4 (ManageWebResourceTool) ←────────┤
└─ Task 3.5 (ManageAppTool) ←────────────────┘
                                             │
Phase 4 (MEDIUM Tools)                       │
├─ Task 4.1 (ManageCommandTool) ←────────────┤
├─ Task 4.2 (ManageRibbonTool) ←─────────────┤
└─ Task 4.3 (PublishCustomizationsTool) ←────┘
                                             │
Phase 5 (Validation)                         │
├─ Task 5.1 (MCP Restart) ←──────────────────┤
├─ Task 5.2 (Smoke Tests CRITICAL) ←─────────┤
└─ Task 5.3 (Smoke Tests HIGH) ←─────────────┘
                                             │
Phase 6 (Documentation)                      │
├─ Task 6.1 (Tool Descriptions) ←────────────┤
├─ Task 6.2 (mcp.prompts.md) ←───────────────┤
└─ Task 6.3 (CLAUDE.md) ←────────────────────┘
```

---

## Risk Management

### High Risk Items

1. **Breaking Changes to Tool Output**
   - **Risk:** Changing output format breaks existing AI workflows
   - **Mitigation:** Preserve all existing output text and structured result fields
   - **Rollback:** Revert tool changes, keep only helper classes

2. **Wait Times Too Short**
   - **Risk:** Lock contention errors still occur
   - **Mitigation:** Use empirically-tested wait times from Dataverse-skills reference
   - **Rollback:** Increase wait constants in MetadataOperationWaitHelper

3. **Wait Times Too Long**
   - **Risk:** Operations become unacceptably slow
   - **Mitigation:** Use minimum wait times that achieve 95% success rate
   - **Rollback:** Decrease wait constants (accept higher error rate)

4. **Retry Logic Causes Infinite Loops**
   - **Risk:** Retry never exits on persistent errors
   - **Mitigation:** Hard limit of 5 attempts, clear error messages
   - **Rollback:** Disable retry, keep only wait logic

### Medium Risk Items

1. **MCP Process Not Restarting**
   - **Risk:** New code not picked up after build
   - **Mitigation:** Follow MCP restart procedure exactly
   - **Rollback:** Manual process kill + restart

2. **Unit Tests Fail**
   - **Risk:** MetadataRetryHelper implementation incorrect
   - **Mitigation:** Copy exact code from complete guide
   - **Rollback:** Fix implementation, re-run tests

### Low Risk Items

1. **Documentation Out of Sync**
   - **Risk:** Docs don't match implementation
   - **Mitigation:** Update docs after code verified working
   - **Rollback:** Update docs to match actual behavior

---

## Success Metrics

### Functional Metrics

- [ ] **Zero manual waits required** for sequential metadata operations
- [ ] **<5% lock contention errors** (down from ~40%)
- [ ] **<10% manual retries** (down from ~60%)
- [ ] **All 12 tools updated** with wait/retry logic
- [ ] **All unit tests pass** (6/6)
- [ ] **All integration tests pass** (3/3)

### Performance Metrics

- [ ] **5-table schema creation: <4 minutes** (down from 10+ minutes)
- [ ] **Table creation: 8s wait** (acceptable overhead)
- [ ] **Column creation: 5s wait** (acceptable overhead)
- [ ] **Relationship creation: 20s wait** (acceptable overhead)
- [ ] **Total wait time reasonable** for operation complexity

### User Experience Metrics

- [ ] **Clear error messages** when retry exhausted
- [ ] **Structured results guide AI** on next steps
- [ ] **No breaking changes** to existing workflows
- [ ] **Documentation complete** for future maintainers

---

## Rollback Procedures

### Full Rollback (All Changes)

If the implementation causes critical issues:

1. **Revert all tool changes**
   ```bash
   git checkout HEAD -- DynamicsCrm.DevKit.Cli/Mcp/Tools/*.cs
   ```

2. **Keep helper classes** (they don't break anything)
   ```bash
   # Keep MetadataRetryHelper.cs
   # Keep enhanced MetadataOperationWaitHelper.cs
   ```

3. **Rebuild and restart MCP**
   ```bash
   /claude-build-cli
   ```

### Partial Rollback (Specific Tool)

If a specific tool has issues:

1. **Revert that tool only**
   ```bash
   git checkout HEAD -- DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertTableTool.cs
   ```

2. **Rebuild and restart MCP**
   ```bash
   /claude-build-cli
   ```

### Adjust Wait Times

If wait times need tuning:

1. **Edit MetadataOperationWaitHelper.cs constants**
   ```csharp
   public const int TableCreationWaitSeconds = 15;  // Was 8
   ```

2. **Rebuild and restart MCP**
   ```bash
   /claude-build-cli
   ```

---

## Next Steps

1. **Review this plan** with stakeholders
2. **Assign tasks** to AI agents or developers
3. **Start with Phase 1** (Foundation)
4. **Test after each phase** before proceeding
5. **Document any deviations** from plan
6. **Update plan** if new issues discovered

---

## References

- [Complete Implementation Guide](metadata-propagation-complete-guide.md) - Full code examples and detailed steps
- [Dataverse-skills dv-metadata](D:\github\Dataverse-skills\.github\plugins\dataverse\skills\dv-metadata) - Reference patterns
- [CLAUDE.md](../../CLAUDE.md) - Project conventions
- [AGENTS.md](../../AGENTS.md) - Component boundaries

---

**END OF IMPLEMENTATION PLAN**
