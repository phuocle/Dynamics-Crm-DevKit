# Suggested Code Analyzers for DynamicsCrm.DevKit.Analyzers

Based on research of [Microsoft's Dataverse Best Practices](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/), here are recommended new analyzers to add to the project.

## Current Analyzers (Already Implemented)

| ID | Description | MS Best Practice |
|---|---|---|
| DEVKIT1001 | Create/Update message should have filtering attributes | ✅ [Include filtering attributes](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration) |
| DEVKIT1002 | Don't use ColumnSet(true) | ✅ [Retrieve specific columns](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/retrieve-specific-columns-entity-via-query-apis) |
| DEVKIT1003 | Plugin image validation | ✅ [Understand the execution context](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/understand-the-data-context) |
| DEVKIT1004 | Deprecated SDK messages | ✅ [Deprecated SDK messages](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/deprecations) |
| DEVKIT1005 | EntityReference maybe null | ✅ [Entity class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.entity) |
| DEVKIT1006 | Batch requests in plugins | ✅ [Avoid batch requests](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin) |
| DEVKIT1007 | Stateless IPlugin | ✅ [Develop IPlugin as stateless](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/develop-iplugin-implementations-stateless) |
| DEVKIT1008 | Don't use parallel execution | ✅ [Don't use parallel execution](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-use-parallel-execution-in-plug-ins) |
| DEVKIT1009 | Set KeepAlive to false | ✅ [Set KeepAlive to false](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-keepalive-false-interacting-external-hosts-plugin) |
| DEVKIT1010 | Set Timeout for HTTP calls | ✅ [Set Timeout for external calls](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-timeout-for-external-calls-from-plug-ins) |

---

## Suggested New Analyzers (Roadmap)

### High Priority

---

#### DEVKIT1011: Use InvalidPluginExecutionException for errors

**Severity:** Warning  
**Category:** Supportability, Usability  
**Impact:** Medium  
**MS Docs:** [Use InvalidPluginExecutionException](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-invalidpluginexecutionexception-plugin-workflow-activities)

**Detection:**
In IPlugin classes, detect `throw` statements with exception types other than `InvalidPluginExecutionException`.

---

### Medium Priority

---

#### DEVKIT1012: Recommend using ITracingService in plug-ins

**Severity:** Info  
**Category:** Maintainability, Supportability  
**Impact:** Medium  
**MS Docs:** [Use ITracingService](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins)

**Detection:**
IPlugin classes that don't retrieve or use `ITracingService`.

---

#### DEVKIT1013: Avoid registering plugins on Retrieve/RetrieveMultiple

**Severity:** Info  
**Category:** Performance  
**Impact:** Medium  
**MS Docs:** [Limit Retrieve/RetrieveMultiple plugins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple)

**Detection:**
Detect `[CrmPluginRegistration]` attributes with message "Retrieve" or "RetrieveMultiple".

---

### Lower Priority

---

#### DEVKIT1014: Avoid AppDomain event registration in plugins

**Severity:** Error  
**Category:** Supportability  
**Impact:** Medium

**Detection:**
Detect event handler subscriptions to `AppDomain` events in IPlugin classes.

---

#### DEVKIT1015: Don't use GetAwaiter().GetResult() incorrectly

**Severity:** Info  
**Category:** Design  
**Impact:** Low

**Detection:**
Context-dependent validation of async patterns in plugins.

---

## Summary

| ID | Analyzer Name | Status |
|---|---|---|
| DEVKIT1006 | Batch requests in plugins | ✅ Implemented |
| DEVKIT1007 | Stateless IPlugin | ✅ Implemented |
| DEVKIT1008 | Parallel execution in plugins | ✅ Implemented |
| DEVKIT1009 | KeepAlive = false | ✅ Implemented |
| DEVKIT1010 | HTTP Timeout | ✅ Implemented |
| DEVKIT1011 | InvalidPluginExecutionException | 📋 Planned |
| DEVKIT1012 | ITracingService recommendation | 📋 Planned |
| DEVKIT1013 | Retrieve/RetrieveMultiple warning | 📋 Planned |
| DEVKIT1014 | AppDomain events | 📋 Planned |
| DEVKIT1015 | Async pattern validation | 📋 Planned |
