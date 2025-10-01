# devkit.js Quick Reference Card

**Version:** v4.00.00.00+ | **Coverage:** 100% | **Date:** October 1, 2025

---

## 🚀 Getting Started

```javascript
// Load components
const formContext = executionContext.getFormContext();
const form = devKit.LoadForm(formContext);
const utility = devKit.LoadUtility();
const execContext = devKit.LoadExecutionContext(executionContext);
```

---

## 📋 Form Operations

```javascript
// Form Properties
form.EntityId              // Get current record ID
form.EntityName            // Get entity logical name
form.FormType              // Get form type (1=Create, 2=Update, etc.)
form.DataIsDirty           // Check if form has unsaved changes
form.PrimaryAttributeValue // Get primary attribute value

// Form Methods
form.Save()                              // Save the form
form.Refresh(false)                      // Refresh without save
form.Close()                             // Close the form
form.SetFormNotification(msg, level, id) // Show notification
form.ClearFormNotification(id)           // Clear notification
```

---

## 🔢 Field Operations

```javascript
// Load fields
const fields = { name: {}, accountnumber: {}, revenue: {} };
devKit.LoadFields(formContext, fields, undefined);

// Field Properties
fields.name.Value          // Get/Set field value
fields.name.Visible        // Get/Set visibility
fields.name.Disabled       // Get/Set disabled state
fields.name.RequiredLevel  // Get/Set required level
fields.name.Label          // Get/Set label
fields.name.IsDirty        // Check if field is dirty
fields.name.Outputs        // Get PCF control outputs ✨

// Field Methods
fields.name.AddOnChange(callback)     // Add onChange handler
fields.name.RemoveOnChange(callback)  // Remove onChange handler
fields.name.SetNotification(msg, id)  // Show field notification
fields.name.ClearNotification(id)     // Clear field notification
```

---

## 📊 WebApi Operations (NEW ✨)

### CRUD Operations
```javascript
// Create
utility.WebApi.CreateRecord("account", data,
    result => console.log("Created:", result.id),
    error => console.error(error.message)
);

// Retrieve
utility.WebApi.RetrieveRecord("account", id, "?$select=name",
    result => console.log("Name:", result.name),
    error => console.error(error.message)
);

// Update
utility.WebApi.UpdateRecord("account", id, data,
    result => console.log("Updated"),
    error => console.error(error.message)
);

// Delete
utility.WebApi.DeleteRecord("account", id,
    result => console.log("Deleted"),
    error => console.error(error.message)
);

// Retrieve Multiple
utility.WebApi.RetrieveMultipleRecords("account",
    "?$select=name&$filter=revenue gt 100000&$top=10", 50,
    result => console.log("Found:", result.entities.length),
    error => console.error(error.message)
);
```

### Execute Operations
```javascript
// Execute
utility.WebApi.Execute(request, success, error);

// Execute Multiple
utility.WebApi.ExecuteMultiple(requests, success, error);

// Online/Offline
utility.WebApi.Online.Execute(request, success, error);
const isAvailable = utility.WebApi.Offline.IsAvailable("account");
```

---

## 🤖 Copilot Operations (NEW ✨)

```javascript
// Execute by Event Name
utility.Copilot.ExecuteEvent(
    "Microsoft.PowerApps.Copilot.EventName",
    { id: recordId },
    response => console.log("Response:", response),
    error => console.error("Error:", error)
);

// Execute by Prompt
utility.Copilot.ExecutePrompt(
    "Show me top opportunities",
    response => console.log("Text:", response[0].text),
    error => console.error("Error:", error)
);
```

---

## 📑 Tab Operations

```javascript
// Load tabs
const tabs = {
    tabGeneral: { Section: { sectionInfo: {} } }
};
devKit.LoadTabs(formContext, tabs);

// Tab Properties
tabs.tabGeneral.DisplayState  // Get/Set: "expanded" or "collapsed"
tabs.tabGeneral.Visible       // Get/Set visibility
tabs.tabGeneral.Label         // Get/Set label

// Section Properties
tabs.tabGeneral.Section.sectionInfo.Visible
tabs.tabGeneral.Section.sectionInfo.Label
```

---

## 🔄 Process (BPF) Operations

```javascript
const process = devKit.LoadProcess(formContext);

// Process Properties
process.ActiveProcess           // Get active process
process.ActiveStage            // Get current stage
process.EnabledProcesses       // Get enabled processes
process.SelectedStage          // Get selected stage

// Process Methods
process.SetActiveProcess(processId, callback)
process.MoveNext(callback)
process.MovePrevious(callback)

// Stage Operations
process.ActiveStage.Name
process.ActiveStage.Status
process.ActiveStage.Steps      // Array of steps
```

---

## 📊 Grid Operations

```javascript
// Load grids
const grids = { gridContacts: {} };
devKit.LoadGrids(formContext, grids);

// Grid Properties
grids.gridContacts.TotalRecordCount
grids.gridContacts.Rows

// Grid Methods
grids.gridContacts.Refresh()
grids.gridContacts.AddOnLoad(callback)
grids.gridContacts.OpenRelatedGrid()

// Grid Row Operations
const rows = grids.gridContacts.Rows;
rows.forEach(row => {
    const data = row.Data;
    const entity = data.Entity;
    console.log(entity.EntityName, entity.Id);
});
```

---

## 🧭 Navigation

```javascript
// Open Forms
utility.OpenForm(entityFormOptions, formParameters, success, error);

// Open Dialogs
utility.OpenAlertDialog(alertStrings, alertOptions, callback, error);
utility.OpenConfirmDialog(confirmStrings, confirmOptions, success, error);

// Navigate
utility.NavigateTo(pageInput, navigationOptions, success, error);

// Open URL
utility.OpenUrl(url, openUrlOptions);

// Open Web Resource
utility.OpenWebResource(webResourceName, windowOptions, data);
```

---

## 🔧 Utility Functions

```javascript
// Metadata
utility.EntityMetadata(entityName, attributes, success, error);
utility.EntityMainFormDescriptor(entityName, formId);

// Lookup
utility.LookupObjects(lookupOptions, success, error);

// Progress Indicator
utility.ShowProgressIndicator(message);
utility.CloseProgressIndicator();

// Context
utility.ClientUrl                        // Get client URL
utility.Version                          // Get version
utility.IsOnPremises                     // Check on-premises
utility.UserSettings.UserId              // Get user ID
utility.UserSettings.UserName            // Get username
utility.OrganizationSettings.LanguageId  // Get language
```

---

## 📱 Device Capabilities

```javascript
// Camera
utility.CaptureImage(options, success, error);
utility.CaptureVideo(success, error);
utility.CaptureAudio(success, error);

// Location
utility.CurrentPosition(success, error);

// Barcode
utility.BarcodeValue(success, error);

// File Picker
utility.PickFile(options, success, error);
```

---

## 🔐 Encoding

```javascript
// HTML Encoding
utility.HtmlEncode(text);
utility.HtmlDecode(text);
utility.HtmlAttributeEncode(text);

// XML Encoding
utility.XmlEncode(text);
utility.XmlAttributeEncode(text);
```

---

## 🎯 Execution Context

```javascript
const execContext = devKit.LoadExecutionContext(executionContext);

// Properties
execContext.Depth              // Get event depth
execContext.EventSource        // Get event source
execContext.FormContext        // Get form context
execContext.SaveMode           // Get save mode
execContext.IsSaveSuccess      // Check save success

// Methods
execContext.GetSharedVariable(key);
execContext.SetSharedVariable(key, value);
execContext.SetPreventDefault();
execContext.IsDefaultPrevented();
```

---

## 📐 Quick Forms

```javascript
// Load quick forms
const quickForms = { qfContact: {} };
devKit.LoadQuickForms(formContext, quickForms);

// Quick Form Properties
quickForms.qfContact.IsLoaded
quickForms.qfContact.Visible
quickForms.qfContact.Label

// Quick Form Methods
quickForms.qfContact.Refresh();

// Access quick form fields
quickForms.qfContact.firstname.Value
quickForms.qfContact.lastname.Value
```

---

## 🎨 Side Panes

```javascript
form.SidePanes.DisplayState        // Get/Set: 0=Collapsed, 1=Expanded
form.SidePanes.Create(options, callback);
form.SidePanes.Get(paneId);
form.SidePanes.GetAll();
form.SidePanes.GetSelected();
```

---

## 📋 Common Patterns

### Pattern 1: Form Load
```javascript
function onLoad(executionContext) {
    const formContext = executionContext.getFormContext();
    const form = devKit.LoadForm(formContext);
    const utility = devKit.LoadUtility();

    console.log("Form loaded for:", form.EntityName);
}
```

### Pattern 2: Field Change
```javascript
function onFieldChange(executionContext) {
    const formContext = executionContext.getFormContext();
    const field = {};
    const attribute = formContext.getAttribute("fieldname");
    const control = formContext.getControl("fieldname");
    devKit.LoadField(formContext, field, attribute, control);

    console.log("New value:", field.Value);
}
```

### Pattern 3: Save with Validation
```javascript
function onSave(executionContext) {
    const execContext = devKit.LoadExecutionContext(executionContext);
    const formContext = execContext.FormContext;
    const form = devKit.LoadForm(formContext);

    if (!form.DataIsValid) {
        execContext.SetPreventDefault();
        form.SetFormNotification("Please fix errors", "ERROR", "validation");
    }
}
```

### Pattern 4: WebApi + UI Update
```javascript
function createRelatedRecord(executionContext) {
    const formContext = executionContext.getFormContext();
    const form = devKit.LoadForm(formContext);
    const utility = devKit.LoadUtility();

    utility.WebApi.CreateRecord("contact",
        { firstname: "John", parentcustomerid: form.EntityId },
        result => {
            form.SetFormNotification("Contact created", "INFO", "created");
            form.Refresh(false);
        },
        error => {
            form.SetFormNotification(error.message, "ERROR", "error");
        }
    );
}
```

### Pattern 5: Copilot Integration
```javascript
function askCopilot(executionContext) {
    const utility = devKit.LoadUtility();

    if (!Xrm.Copilot) {
        console.warn("Copilot not available");
        return;
    }

    utility.Copilot.ExecutePrompt(
        "Summarize this record",
        response => {
            console.log("Copilot says:", response[0].text);
        },
        error => console.error(error.message)
    );
}
```

---

## ⚠️ Important Notes

### Null Safety
All properties use optional chaining (`?.`) for null safety.

### Async Operations
WebApi and Copilot methods are asynchronous and use callbacks.

### Form Type Checks
Some operations check `formContext.ui.getFormType()`:
- 1 = Create
- 2 = Update
- 3 = Read Only
- 4 = Disabled

### Preview Features
Copilot is a preview feature - check availability before use:
```javascript
if (Xrm.Copilot) {
    // Use Copilot features
}
```

---

## 🔗 Resources

- **Full Documentation**: See COPILOT_IMPLEMENTATION.md, WEBAPI_QUICK_REFERENCE.md
- **Microsoft Docs**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference
- **Coverage Report**: See 100_PERCENT_COVERAGE_REPORT.md

---

**Coverage:** 100% ✅ | **Status:** Production Ready | **Version:** v4.00.00.00+
