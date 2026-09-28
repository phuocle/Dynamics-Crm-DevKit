# Client API Reference Audit & Analysis Report

**Updated**: September 28, 2026
**Microsoft source**: [Client API Reference for model-driven apps](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference)
**Repository scope reviewed**:
- `DynamicsCrm.DevKit.Shared/Resources/js/devkit.js`
- `DynamicsCrm.DevKit.Shared/Resources/js/devkit.d.ts`
- `DynamicsCrm.DevKit.Shared/Resources/ts/devkit.ts`
- `DynamicsCrm.DevKit.Shared/Resources/ts/devkit.d.ts`

This is a focused discrepancy audit, not a complete method-by-method parity inventory of every page in Microsoft Learn. The September 26 link-liveness figures below are retained as a historical snapshot; the request script, response log, and exact scanned revision were not present, so those aggregate figures have not been independently reproduced in this update.

## Summary

- The earlier `Xrm.WebApi.offline.isAvailableOffline` runtime finding is stale: both current runtimes call the native `isAvailableOffline` method for `IsAvailable` and `IsAvailableOffline`.
- The old broken section links have already been corrected in the JavaScript declarations.
- The previously missing `Xrm.Copilot` methods, `control.addEventHandler`, custom/generative page input types, and JS `WebResource.Data` declaration have now been added to the source-of-truth wrappers and/or declarations as described below.
- Microsoft documents `executeEvent`, `executePrompt`, and `updateContext` as preview. `Xrm.Copilot` as a whole must not be described as GA.
- Runtime behavior and declarations pass the client-code checks listed in section 3. Generated entity files did not change.

## 1. Historical Link-Liveness Snapshot

The September 26, 2026 audit reported 353 unique JSDoc URLs: 347 HTTP 200, one redirect, and six HTTP 404. The old table combined the redirect with the 404 entries. The redirect was the section root; the six child-page URLs were the reported 404s. The current JavaScript declarations use the replacement `formcontext-ui-tab-sections` path at all affected section links.

The historic counts should be treated as unverified until the original checker and raw results are recovered or the links are checked again. A reproducible future run should save the scanned source revision, extracted unique URL list, request date, redirect/final URL, final HTTP status, and checker script. Count a redirect separately from a dead URL.

## 2. API Discrepancies and Current Status

### 2.1. `Xrm.Copilot`

The earlier audit identified nine Microsoft 365 Copilot methods not exposed by the wrapper. They are now exposed in both JS and TS wrappers and declarations:

- `addActionHandler`
- `addDefaultActionHandlers`
- `getCurrentAgent`
- `isM365CopilotEnabled`
- `openM365CopilotPanel`
- `removeActionHandler`
- `removeDefaultActionHandlers`
- `sendPromptToM365Copilot`
- `updateContext`

The wrapper keeps DevKit's PascalCase naming and callback convenience pattern. Microsoft’s native APIs return Promises; their success/error callbacks are Promise handlers, as shown by the native syntax `Xrm.Copilot.addActionHandler(...).then(successCallback, errorCallback)`. These wrapper callbacks are therefore DevKit wrapper parameters, not native method parameters.

Supporting declarations were added for `M365CopilotAgent`, `M365CopilotAgentMode`, `MCSResponse`, `PowerAppsContent`, and `SendPromptToM365CopilotOptions`. Microsoft currently marks `executeEvent`, `executePrompt`, and `updateContext` preview. See [Xrm.Copilot reference](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot) and [updateContext](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/updatecontext).

### 2.2. `control.addEventHandler`

Microsoft documents this method for custom code component controls. It is now surfaced as `AddEventHandler` by the JS and TS wrappers and declared on the common control interface. The wrapper forwards the event name and handler to the native control. See [addEventHandler](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addeventhandler).

### 2.3. `navigateTo` page input types

The JS and TS declarations now include custom and generative page inputs for `NavigateTo`. Custom page input is also included in the side-pane navigation type. Generative page input is deliberately excluded from side-pane navigation because Microsoft documents that opening a generative page in a side pane is unsupported. The runtime navigation wrappers already forward the page input to the native API; this discrepancy was in compile-time declarations. See [navigateTo](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto), [custom page examples](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/navigate-to-custom-page-examples), and [generative page examples](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/navigate-to-generative-page-examples).

### 2.4. Web resource `Data`

`loadField` already maps `Data` to native `getData()` / `setData()`. The JS declaration now exposes `Data: string` on `Controls.WebResource`, matching the API’s supported control type and return type. The TS declaration already had this property. It is not declared on the generic `IControl`, since Microsoft documents `getData` for Web resource controls. See [control.getData](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdata) and [control.setData](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdata).

### 2.5. Offline availability name

The earlier report described a runtime mismatch at `devkit.js` line 673. That finding no longer applies to the current source: JS and TS wrappers map both DevKit names `IsAvailable` and `IsAvailableOffline` to native `isAvailableOffline`. Both declaration files already expose those DevKit names. Microsoft’s native method is `Xrm.WebApi.offline.isAvailableOffline`; no runtime fix was needed in this update. See [Xrm.WebApi.offline](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/offline).

## 3. Scope and Reproducibility Limits

This review updates the discrepancies identified by the previous report across the JS and TS source-of-truth files. It does not establish complete parity across every Client API topic, nor does it independently validate Microsoft 365 Copilot behavior in a live Dataverse environment. Copilot methods are wrappers around native APIs; runtime availability depends on the platform and environment.

The repository client-code workflow synchronized the four source files into all six TestClientCode projects. `04.Sync-All.ps1` completed; the workflow's generated entity copy step produced no generated-file changes. `03.Generate-All.ps1` was not needed because these changes do not alter generated entity output. The final `05.Check-Build-Test.ps1` run completed with **6 successful projects and 0 failures**.

### Verification results

| Project | Result |
|---|---|
| `01.DevKitJs-UnitTest` | Pass: 136/136 tests; 100% statements, branches, functions, and lines |
| `02.DevKitTs-UnitTest` | Pass: 25 suites, 880/880 tests; 100% statements, branches, functions, and lines; release test build passed |
| `03.DevKitJs-AICode` | No check/build/test scripts in workflow |
| `04.DevKitTs-AICode` | Pass: TypeScript check and release build |
| `05.DevKitJs-Vsix` | No check/build/test scripts in workflow |
| `06.DevKitTs-Vsix` | Pass: TypeScript check and release build |

An earlier workflow attempt exposed missing coverage for newly added wrapper methods. Tests were added, then the complete workflow was rerun successfully. The final run passed the JS and TS unit suites, both TS sample release builds, and all TypeScript checks.
