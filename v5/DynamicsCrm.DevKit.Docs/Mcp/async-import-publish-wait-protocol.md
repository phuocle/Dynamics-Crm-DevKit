# manage_ribbon Async Wait Protocol

## Scope

This note is only about `manage_ribbon`.

Other tools may have similar publish or throttling concerns, but they are intentionally out of scope here and should be handled later in separate reviews.

## Problem

Classic ribbon updates are heavy because `manage_ribbon(update)` does more than edit XML:

1. Builds or modifies RibbonDiffXml.
2. Performs best-effort cleanup of stale components from the shared ribbon solution.
3. Packages/imports a temporary solution.
4. Starts a classic ribbon publish flow, currently using `PublishAllXmlAsyncRequest`.

The dangerous part is what happens next. The AI may immediately call `manage_ribbon(buttons)` or `manage_ribbon(detail)` to verify the result. Those readback actions are not cheap; they may retrieve/export ribbon data while Dataverse is still importing or publishing.

This can stack expensive operations:

```text
Import solution
-> PublishAll
-> Ribbon readback/export
-> User portal publish
```

That overlap can overload Dataverse/SQL and cause errors like:

```text
Too many concurrent requests.
SqlException: Resource ID : 1. The request limit for the database is 800 and has been reached.
```

## Current Risk In manage_ribbon

Observed from `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs`:

- `manage_ribbon(update)` imports a solution.
- It then calls `TryPublish(...)`.
- `TryPublish(...)` starts `PublishAllXmlAsyncRequest`.
- The tool may return an `AsyncOperationId`.
- The AI is not forced to wait for that system job before readback or before the next prompt.
- If a tool call times out, the server-side import or publish may still be running, but the AI may treat the timeout as permission to inspect/retry.
- `CleanupSolutionComponents(...)` must not run between import and publish because it is non-critical and can delay or interrupt the critical sequence.

The fix should focus on changing the `manage_ribbon` contract and AI execution rule.

## Goal

After any `manage_ribbon` action that imports ribbon customizations or starts PublishAll:

1. Run best-effort cleanup of all existing solution components before import.
2. Import through the C# layer and wait for `ImportSolutionRequest` to complete.
3. Immediately start `PublishAllXmlAsyncRequest` after import returns.
4. The tool must tell the AI that the operation is not fully complete yet.
5. The AI must wait using system jobs.
6. The AI must not call `manage_ribbon(buttons)` or `manage_ribbon(detail)` until the job reaches a terminal status.
7. The next prompt must not start until the current ribbon job succeeds, fails, is canceled, or times out.

The critical code sequence is:

```text
CleanupSolutionComponents()  // best-effort, before import
-> ImportRibbonSolution(solutionZip)  // synchronous C# SDK call; wait until import returns
-> TryPublish(entityName)  // starts PublishAll async and returns AsyncOperationId
```

Do not insert readback, cleanup, export, or other non-critical work between import completion and PublishAll async start.

## Required manage_ribbon Output Contract

When `manage_ribbon(update)` or `manage_ribbon(undo)` starts `PublishAllXmlAsyncRequest`, return structured fields like:

```json
{
  "status": "publish_in_progress",
  "needsWait": true,
  "waitTool": "get_system_jobs",
  "asyncOperationId": "<asyncoperation id>",
  "pollAfterSeconds": 30,
  "readbackAllowed": false,
  "nextAllowedActions": ["get_system_jobs"]
}
```

The text output should also say clearly:

```text
PublishAll started asynchronously. Wait for the system job to finish before calling manage_ribbon(buttons), manage_ribbon(detail), or running the next prompt.
```

If the operation times out and the tool cannot tell whether import/publish finished, return:

```json
{
  "status": "operation_status_unknown",
  "needsWait": true,
  "waitTool": "get_system_jobs",
  "pollAfterSeconds": 60,
  "readbackAllowed": false,
  "nextAllowedActions": ["get_system_jobs"]
}
```

The important part is that timeout is treated as "unknown, wait/check jobs", not as "safe to read back immediately".

## Required AI Rule For manage_ribbon

Add this rule to the sequential prompt execution instructions:

```text
For manage_ribbon:

If manage_ribbon returns needsWait=true, AsyncOperationId, publish_in_progress, or operation_status_unknown:

1. Do not run the next prompt.
2. Do not call manage_ribbon(buttons).
3. Do not call manage_ribbon(detail).
4. Do not call another manage_ribbon(update/undo).
5. Only call get_system_jobs for the returned async operation id.
6. If the job is Waiting or In Progress, wait at least pollAfterSeconds before polling again.
7. Continue polling until the job reaches Succeeded, Failed, Canceled, or timeout.
8. Only after Succeeded may the AI run manage_ribbon(buttons/detail), and only if the current prompt explicitly requires readback.
9. If Failed, Canceled, or timeout, write a blocked result for the current prompt and stop.
```

This rule should override the normal "read back to confirm" behavior.

## Polling Policy

Recommended polling behavior for `manage_ribbon` jobs:

- First poll after 30 seconds.
- If still running, poll every 60 seconds.
- For ribbon import/publish, allow up to 15 minutes before reporting timeout.
- If Dataverse returns throttling or too many concurrent requests, increase the wait to 2-5 minutes.
- Never run multiple polling loops in parallel.
- Never run portal publish while `manage_ribbon` import or PublishAll is still running.

Preferred job detail call:

```text
get_system_jobs(record_id="<asyncOperationId>")
```

If no async operation id is available because the tool timed out before returning it, use a lightweight list query:

```text
get_system_jobs(operation_type="all", status="all", minutes_ago=60, max_records=20)
```

Reason: PublishAll jobs may appear as `CustomAction` with message `PublishAllAsync`, not only as solution jobs.

The AI should use system jobs as the status source. It should not use ribbon readback as a status check.

## Recommended manage_ribbon Changes

### 1. Return wait metadata after PublishAll async starts

Current output already includes an async operation id in some paths. Make it explicit and machine-readable:

- `Status = "publish_in_progress"`
- `NeedsWait = true`
- `WaitTool = "get_system_jobs"`
- `AsyncOperationId = asyncJobId`
- `PollAfterSeconds = 30`
- `ReadbackAllowed = false`

### 2. Improve timeout handling

If import or publish takes too long and the MCP tool call times out or reaches an internal timeout, return `operation_status_unknown` when possible.

The output should tell the AI:

- Do not retry the ribbon update immediately.
- Do not read back ribbon immediately.
- Check active solution/import/publish system jobs first.

### 3. Gate ribbon readback actions

Optional but recommended:

Before running `manage_ribbon(buttons)` or `manage_ribbon(detail)`, check for recent active solution import or PublishAll jobs.

If such jobs exist, return:

```json
{
  "status": "environment_busy",
  "needsWait": true,
  "waitTool": "get_system_jobs",
  "readbackAllowed": false
}
```

Text output:

```text
Ribbon readback is blocked because a solution import or PublishAll job is still active. Wait for system jobs before reading ribbon state.
```

This prevents readback itself from adding load while Dataverse is busy.

The guard must detect:

- `ExportSolution`
- `ImportSolution`
- `PublishAll`
- `CustomAction` jobs where message/name indicates `PublishAllAsync` or `PublishAllXml`

### 4. Keep readback explicit

Do not automatically run `manage_ribbon(buttons)` inside `manage_ribbon(update)`.

Let prompt execution do:

```text
manage_ribbon(update)
-> wait system job
-> readback only if prompt asks for it
```

For prompts that only ask to update the ribbon, success can be recorded after the publish job succeeds without extra readback.

## Prompt Result Recording For manage_ribbon

For long-running ribbon operations, do not mark the prompt complete until the PublishAll job reaches terminal status.

Suggested success style:

```text
   > SUCCESS `manage_ribbon(action="update", entity_name="Invoice", operations="...", backup=true)`
   >    `get_system_jobs(record_id="...")`
   > Result: Activate and Deactivate were hidden on the Invoice classic form ribbon after the publish job completed successfully.
```

Suggested timeout or unknown style:

```text
   > WARNING `manage_ribbon(action="update", entity_name="Invoice", operations="...", backup=true)`
   >    `get_system_jobs(operation_type="all", status="all", minutes_ago=60, max_records=20)`
   > Result: BLOCKED - Ribbon update status is still unknown because the import or publish job did not reach a terminal status within the wait window.
```

The existing production prompt rule says result text should avoid machine-readable values. Keep that rule for the result sentence. Exact tool call lines may still include parameters because the prompt file requires exact tool call logging.

## Acceptance Criteria

This fix is complete when:

1. `manage_ribbon(update)` returns `needsWait=true` whenever it starts PublishAll async.
2. The structured result includes `asyncOperationId`, `pollAfterSeconds`, and `readbackAllowed=false`.
3. AI instructions forbid `manage_ribbon(buttons/detail)` while the PublishAll job is active.
4. AI instructions forbid starting the next prompt while the ribbon job is active.
5. Tool timeout or unknown status leads to system job polling, not immediate readback.
6. Optional guard prevents `manage_ribbon(buttons/detail)` from running while recent import/publish jobs are active.

## Summary

The fix for `manage_ribbon` is a wait protocol:

```text
manage_ribbon(update)
-> cleanup stale solution components before import
-> import ribbon solution and wait for import completion
-> start PublishAll async
-> return needsWait + asyncOperationId
-> AI polls get_system_jobs
-> only after success may AI read back ribbon, if the prompt requires it
```

This prevents the AI from stacking ribbon import, PublishAll, and ribbon readback/export on top of each other.
