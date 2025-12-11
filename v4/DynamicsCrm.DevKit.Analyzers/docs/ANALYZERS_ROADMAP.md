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
| DEVKIT1011 | Use InvalidPluginExecutionException | ✅ [Use InvalidPluginExecutionException](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-invalidpluginexecutionexception-plugin-workflow-activities) |
| DEVKIT1012 | ITracingService recommendation | ✅ [Use ITracingService](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins) |
| DEVKIT1013 | Avoid Retrieve/RetrieveMultiple plugins | ✅ [Limit Retrieve/RetrieveMultiple plugins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple) |
| DEVKIT1014 | Avoid AppDomain event registration | ✅ Sandbox limitation |
| DEVKIT1015 | Avoid blocking async patterns | ✅ Best practice |
| DEVKIT1016 | Avoid RetrieveAsIfPublished = true | ✅ [Retrieve published metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-metadata/retrieve-published-metadata) |

---

## Suggested New Analyzers (Roadmap)

### High Priority

---

### Medium Priority

---

---

## Summary

| ID | Analyzer Name | Status |
|---|---|---|
| DEVKIT1006 | Batch requests in plugins | ✅ Implemented |
| DEVKIT1007 | Stateless IPlugin | ✅ Implemented |
| DEVKIT1008 | Parallel execution in plugins | ✅ Implemented |
| DEVKIT1009 | KeepAlive = false | ✅ Implemented |
| DEVKIT1010 | HTTP Timeout | ✅ Implemented |
| DEVKIT1013 | Retrieve/RetrieveMultiple warning | ✅ Implemented |
| DEVKIT1011 | InvalidPluginExecutionException | ✅ Implemented |
| DEVKIT1012 | ITracingService recommendation | ✅ Implemented |
| DEVKIT1014 | AppDomain events | ✅ Implemented |
| DEVKIT1015 | Async pattern validation | ✅ Implemented |
| DEVKIT1016 | Avoid RetrieveAsIfPublished = true | ✅ Implemented |
