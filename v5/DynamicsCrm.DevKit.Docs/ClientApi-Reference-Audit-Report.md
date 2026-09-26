# Client API Reference Audit & Analysis Report

**Date of Audit**: September 26, 2026  
**Source of Truth**: [Client API Reference for model-driven apps - Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference)  
**Target Codebase Files**:
- `DynamicsCrm.DevKit.Shared/Resources/js/devkit.d.ts`
- `DynamicsCrm.DevKit.Shared/Resources/js/devkit.js`

---

## 1. Executive Summary

An exhaustive audit of the Microsoft Learn Client API Reference documentation repository (`MicrosoftDocs/powerapps-docs`) was conducted against DynamicsCrm.DevKit's client wrapper files (`devkit.d.ts` and `devkit.js`).

### Key Metrics
- **Total Unique URLs in `devkit.d.ts`**: 353
- **Live URLs (HTTP 200)**: 347 (98.3%)
- **Redirected URLs (HTTP 301)**: 1 (0.3%)
- **Dead URLs (HTTP 404)**: 6 (1.7%)
- **New Methods Added by Microsoft (Unimplemented in DevKit)**: 10 methods
- **New Navigation Page Types Added by Microsoft**: 2 types (`generative`, `custom`)
- **New Interfaces / Supporting Types in Client API**: 5 types
- **Runtime Discrepancies in `devkit.js`**: 1 method (`Xrm.WebApi.offline.isAvailableOffline` vs `isAvailable`)
- **Type Declaration Missing in `devkit.d.ts`**: 1 property (`IControl.Data`)

---

## 2. Part 1: Link Liveness Audit Results

All 353 URLs embedded inside JSDoc comments of `devkit.d.ts` were checked via HTTP requests with automated redirect handling.

### 2.1. Dead Links (HTTP 404)

All 6 dead links stem from a single documentation restructure by Microsoft: the path segment `formcontext-ui-sections` was updated to `formcontext-ui-tab-sections`. The root URL redirects, but the sub-method URLs return HTTP 404.

| # | Line in `devkit.d.ts` | Dead URL (HTTP 404) | Replacement Live URL (HTTP 200) |
|---|----------------------|---------------------|---------------------------------|
| 1 | 1544 | `.../reference/formcontext-ui-sections` (301 redirect) | `https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tab-sections` |
| 2 | 1549 | `.../reference/formcontext-ui-sections/getname` | `https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tab-sections/getname` |
| 3 | 1554 | `.../reference/formcontext-ui-sections/getparent` | `https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tab-sections/getparent` |
| 4 | 1559 | `.../reference/formcontext-ui-sections/getlabel` | `https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tab-sections/getlabel` |
| 5 | 1560 | `.../reference/formcontext-ui-sections/setlabel` | `https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tab-sections/setlabel` |
| 6 | 1565 | `.../reference/formcontext-ui-sections/getvisible` | `https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tab-sections/getvisible` |
| 7 | 1566 | `.../reference/formcontext-ui-sections/setvisible` | `https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tab-sections/setvisible` |

---

## 3. Part 2: Microsoft Learn Updates & Discrepancies

### 3.1. Complete M365 Copilot & Copilot Studio APIs (`Xrm.Copilot`)

DevKit currently only supports 2 preview methods: `ExecuteEvent` and `ExecutePrompt`.  
Microsoft has officially graduated `Xrm.Copilot` to General Availability (GA) and added 9 new methods for Microsoft 365 Copilot Agent integration (documented June-August 2026).

#### New Methods in `Xrm.Copilot`:

1. **`addActionHandler(actionId: string, actionHandler: Function, successCallback?: Function, errorCallback?: Function): Promise<void>`**
   - Registers a custom handler function for a Microsoft 365 Copilot action.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/addactionhandler)

2. **`addDefaultActionHandlers(actionId: string, successCallback?: Function, errorCallback?: Function): Promise<void>`**
   - Restores the platform-default handlers for a Microsoft 365 Copilot action.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/adddefaultactionhandlers)

3. **`getCurrentAgent(successCallback?: Function, errorCallback?: Function): Promise<M365CopilotAgent | undefined>`**
   - Returns the currently active Microsoft 365 Copilot agent.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/getcurrentagent)

4. **`isM365CopilotEnabled(successCallback?: Function, errorCallback?: Function): Promise<boolean>`**
   - Returns whether Microsoft 365 Copilot is enabled in the current environment.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/ism365copilotenabled)

5. **`openM365CopilotPanel(successCallback?: Function, errorCallback?: Function): Promise<void>`**
   - Opens the Microsoft 365 Copilot side panel.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/openm365copilotpanel)

6. **`removeActionHandler(actionId: string, actionHandler: Function, successCallback?: Function, errorCallback?: Function): Promise<void>`**
   - Removes a previously registered custom handler for a Microsoft 365 Copilot action.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/removeactionhandler)

7. **`removeDefaultActionHandlers(actionId: string, successCallback?: Function, errorCallback?: Function): Promise<void>`**
   - Removes the platform-default handlers for a Microsoft 365 Copilot action.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/removedefaultactionhandlers)

8. **`sendPromptToM365Copilot(promptText: string, options?: SendPromptToM365CopilotOptions, successCallback?: Function, errorCallback?: Function): Promise<void>`**
   - Sends a prompt to the Microsoft 365 Copilot side panel, causing Copilot to process and respond on behalf of the user.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/sendprompttom365copilot)

9. **`updateContext(context: PowerAppsContent, successCallback?: Function, errorCallback?: Function): Promise<void>`**
   - Sends updated app context to the Microsoft 365 Copilot side panel.
   - [Microsoft Documentation](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/updatecontext)

#### New Interfaces / Supporting Types:
- **`M365CopilotAgent`**:
  ```typescript
  interface M365CopilotAgent {
      agentId: string | null;
      mode: M365CopilotAgentMode | null;
  }
  type M365CopilotAgentMode = "agentPage" | "mentioned";
  ```
- **`MCSResponse`**: Returned by `executeEvent` and `executePrompt`:
  ```typescript
  interface MCSResponse {
      type: string;
      id?: string;
      locale?: string;
      replyToId?: string;
      timestamp?: string;
      speak?: string;
      text?: string;
      textFormat?: "plain" | "markdown" | "xml";
      suggestedActions?: { actions: any[]; to?: string[] };
      value?: unknown;
      valueType?: string;
      name?: string;
      attachmentLayout?: "list" | "carousel";
      attachments?: Array<{ content: unknown; contentType?: string }>;
  }
  ```
- **`PowerAppsContent`**:
  ```typescript
  interface PowerAppsContent {
      schemaVersion?: string;
      appType?: "ModelApp" | "CanvasApp" | "CodeApp";
      appId?: string;
      orgId?: string;
      geo?: string;
      entity?: string;
      filterXML?: string;
      filterId?: string;
      extendedContext?: Array<Record<string, unknown>>;
      telemetryContext?: { clientSessionId?: string; clientRequestId?: string };
      selectedRecords?: { selectedContents: any[] };
      messageAnnotationAppContext?: string;
  }
  ```
- **`SendPromptToM365CopilotOptions`**:
  ```typescript
  interface SendPromptToM365CopilotOptions {
      gptId?: string;
      autoSubmit?: boolean;
  }
  ```

---

### 3.2. New Control Event Handler: `control.addEventHandler` (March 2025)

Microsoft added `addEventHandler` to controls for PCF custom code components:
- **Syntax**: `control.addEventHandler(name: string, function: (executionContext: any) => void): void;`
- **Purpose**: Attaches custom event handlers to custom PCF component events on forms.
- **Reference**: [addEventHandler (Client API reference)](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addeventhandler)
- **Status in DevKit**: Missing in both `devkit.d.ts` and `devkit.js`.

---

### 3.3. New Navigation Targets in `Xrm.Navigation.navigateTo` (April 2026)

Microsoft documented two additional page types for `navigateTo` and `ISidePane.navigate`:
1. **Generative Pages (`pageType: "generative"`)**:
   ```typescript
   interface PageInputGenerative {
       pageType: "generative";
       pageId: string;
       recordId?: string;
       entityName?: string;
       data?: Record<string, any>;
   }
   ```
   Reference: [Navigate to generative page](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/navigate-to-generative-page-examples)

2. **Custom Pages (`pageType: "custom"`)**:
   ```typescript
   interface PageInputCustom {
       pageType: "custom";
       name: string;
       entityName?: string;
       recordId?: string;
   }
   ```
   Reference: [Navigate to custom page](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/navigate-to-custom-page-examples)

---

### 3.4. Runtime API Name Inconsistency in `devkit.js` (`Xrm.WebApi.offline`)

In `devkit.js` line 673:
```javascript
getter(obj, 'Offline', () => {
    const offline = {};
    offline.IsAvailable = entityLogicalName => getOffline?.isAvailable(entityLogicalName);
    return offline;
});
```
- Microsoft official API is: `Xrm.WebApi.offline.isAvailableOffline(entityLogicalName)`
- In `devkit.js`, calling `getOffline?.isAvailable` causes an issue if `isAvailable` is undefined on the native Dataverse offline object.
- **Recommendation**: Update to:
  ```javascript
  offline.IsAvailable = entityLogicalName => (getOffline?.isAvailableOffline ? getOffline.isAvailableOffline(entityLogicalName) : getOffline?.isAvailable?.(entityLogicalName));
  ```

---

### 3.5. Missing Declaration in `devkit.d.ts`: `IControl.Data`

In `devkit.js` line 262:
```javascript
getterSetter(field, 'Data', () => control?.getData(), value => { control?.setData(value); });
```
DevKit's runtime supports `field.Data` accessing `control.getData()` / `control.setData()`. However, `Data: any;` is missing from the `Controls.IControl` interface in `devkit.d.ts`.
- References:
  - [control.getData](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdata)
  - [control.setData](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdata)
