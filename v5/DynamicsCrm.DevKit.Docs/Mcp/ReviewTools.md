> Tools reviewed and updated by AP. Append new entries below as more tools are reviewed.

- `execute_fetchxml`: AP reviewed and rewrote — fixed try/catch pattern, simplified return to avoid duplicate content, enhanced descriptions, and verified build/runtime. Now uses centralized `ThrowException(ex)` in main catch.
- `whoami`: AP reviewed — removed unnecessary try/catch in `PopulateUserDetails`, `PopulateOrgDetails`, and `PopulateRoles`; enhanced description with structured output sections. Main catch now uses centralized `ThrowException(ex)`. Inner access-token try/catch was removed (suppression delegated to main catch).
- `manage_choice`: AP reviewed and refactored — removed redundant private wrapper helpers (`StructuredResult`, `ErrorResult`, `DryRunResult`) that simply delegated to base class methods (`Success`, `Error`, `DryRun`); all call sites now use base class methods directly. Moved `try` block to the top of the main method so it is the first statement on entry, with input validation moved inside the try; **only one `try/catch` in the class (main)**. Main catch delegates to centralized `ThrowException(ex)`. All inner try/catch (publish failure, "not found" controlled error, `OptionSetExists` helper) were killed — exceptions now bubble to the main catch. Behavior change documented in inline comments: `updated_publish_failed` and "already exists" controlled errors are gone; those cases now surface as `[UncaughtException]`. Rewrote tool description to reduce AI hallucination risk: split into per-action required params, added explicit AMBIGUITY, IDEMPOTENCY, READBACK WAIT, DRY RUN, and OUTPUT structure hints; flagged that add_options silently skips duplicate labels (vs. errors on value collisions), that rename replaces the base-language label only, and that list/detail are non-destructive while create/update require user confirmation. Verified build (0 errors).
- `manage_view`: AP reviewed and refactored — removed redundant private wrapper helpers (`ErrorResult`, `DryRunResult`, `TextResult`) that simply delegated to base class methods (`Error`, `DryRun`, `Success`); all 62 call sites now use base class methods directly. Moved `try` block to the top of the main method; main catch now delegates to centralized `ThrowException(ex)`. **Only one `try/catch` in the class (main)**. All inner try/catch (best-effort returns, JSON/XML parse guards, IO error suppression, `TryPublish`, `ValidateFetchXmlExpression`, GetViewDetail display enrichment) were killed — exceptions now bubble to the main catch. Behavior change documented in inline comments: publish failures and FetchXML validation outcomes now surface as `[UncaughtException]` instead of structured success-with-warning responses. Verified build (0 errors), MCP auto-restarted on next call.

## ThrowException design (base class)

Added a 4th standard result builder alongside `Success` / `Error` / `DryRun`:

```csharp
CallToolResult ThrowException(Exception ex);   // IMcpToolResultBuilder
```

**Why separate from `Error`:**
- `Error(msg, hint)` is for **controlled** failures — validation, business rules, missing params. The AI can usually fix the input and retry.
- `ThrowException(ex)` is for **uncontrolled** failures — the tool hit a bug, Dataverse SDK threw unexpectedly, an XML/JSON parse failed at a guard the tool didn't anticipate, IO failed. The AI should NOT retry with the same inputs; it should surface to the user or report as a tool bug.

**How to use (single try/catch per tool):**
```csharp
public CallToolResult manage_xxx(...)
{
    try
    {
        // validation + action dispatch
        return normalizedAction switch { ... };
    }
    catch (Exception ex)
    {
        return ThrowException(ex);   // centralized handler
    }
}
```

**Output shape (text):**
```
[UncaughtException] DataverseFault: ...message...
InnerException: ...
StackTrace: ...first frame...
Hint: ...
```

**Structured payload (`details`):**
- `exceptionType` (e.g. `Microsoft.Xrm.Sdk.OrganizationServiceFault`, `System.Text.Json.JsonException`)
- `kind` (e.g. `DataverseFault`, `JsonParseError`, `XmlParseError`, `FileIOError`, `AccessDenied`, `InvalidArgument`, `InvalidState`, `Timeout`, `Cancelled`, or the raw type name)
- `errorCode` (Dataverse faults only, e.g. `0x80040217`)
- `innerFault` (Dataverse nested fault, if any)
- `message`
- `innerException` (object with type + message)
- `stackTrace` (first frame only, for compactness)

**ClassifyException() mapping** in `McpToolResults.ThrowException` decides the kind label and hint text per exception type. AI clients can branch on `kind` if needed (e.g. don't retry on `DataverseFault` with a specific error code).

**Files changed:**
- `Mcp/Tools/IMcpToolResultBuilder.cs` — interface gains `ThrowException(Exception)`.
- `Mcp/Tools/McpToolBase.cs` — base class delegates to `McpToolResults.ThrowException`.
- `Mcp/Tools/Helper/McpToolResults.cs` — implementation with `ClassifyException`, `BuildInnerExceptionText`, `ExtractFirstFrame`.
