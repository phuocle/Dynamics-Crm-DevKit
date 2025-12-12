# Suggested Code Analyzers for DynamicsCrm.DevKit.Analyzers

Based on research of [Microsoft's Dataverse Best Practices](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/), here are recommended new analyzers to add to the project.

## Current Analyzers (Already Implemented)

| ID | Description | Severity | MS Best Practice |
|---|---|:---:|---|
| DEVKIT1001 | Create/Update message should have filtering attributes | ❌ Error | [Include filtering attributes](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration) |
| DEVKIT1002 | Don't use ColumnSet(true) | ⚠️ Warning | [Retrieve specific columns](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/retrieve-specific-columns-entity-via-query-apis) |
| DEVKIT1003 | Plugin image validation | ❌ Error | [Understand the execution context](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/understand-the-data-context) |
| DEVKIT1004 | Deprecated SDK messages | ℹ️ Info | [Deprecated SDK messages](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/deprecations) |
| DEVKIT1005 | EntityReference maybe null | ⚠️ Warning | [Entity class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.entity) |
| DEVKIT1006 | Batch requests in plugins | ⚠️ Warning | [Avoid batch requests](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin) |
| DEVKIT1007 | Stateless IPlugin | ❌ Error | [Develop IPlugin as stateless](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/develop-iplugin-implementations-stateless) |
| DEVKIT1008 | Don't use parallel execution | ❌ Error | [Don't use parallel execution](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-use-parallel-execution-in-plug-ins) |
| DEVKIT1009 | Set KeepAlive to false | ⚠️ Warning | [Set KeepAlive to false](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-keepalive-false-interacting-external-hosts-plugin) |
| DEVKIT1010 | Set Timeout for HTTP calls | ⚠️ Warning | [Set Timeout for external calls](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-timeout-for-external-calls-from-plug-ins) |
| DEVKIT1011 | Use InvalidPluginExecutionException | ⚠️ Warning | [Use InvalidPluginExecutionException](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-invalidpluginexecutionexception-plugin-workflow-activities) |
| DEVKIT1012 | ITracingService recommendation | ℹ️ Info | [Use ITracingService](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins) |
| DEVKIT1013 | Avoid Retrieve/RetrieveMultiple plugins | ℹ️ Info | [Limit Retrieve/RetrieveMultiple plugins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple) |
| DEVKIT1014 | Avoid AppDomain event registration | ❌ Error | Sandbox limitation |
| DEVKIT1015 | Avoid blocking async patterns | ℹ️ Info | Best practice |
| DEVKIT1016 | Avoid RetrieveAsIfPublished = true | ℹ️ Info | [Retrieve published metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-metadata/retrieve-published-metadata) |
| DEVKIT1017 | Avoid Console output in plugins | ℹ️ Info | Sandbox limitation |
| DEVKIT1018 | Avoid File/IO operations in plugins | ❌ Error | Sandbox limitation |

---

## Suggested New Analyzers (Roadmap)

### High Priority

| ID | Title | Suggested Severity | Description | MS Best Practice |
|---|---|:---:|---|---|
| DEVKIT1020 | All Query Types for PreOperation RetrieveMultiple | ⚠️ Warning | Handle FetchExpression, QueryExpression, QueryByAttribute | [Implement all types of queries](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/implement-all-types-of-queries-when-filtering-preoperation-retrievemultiple) |
| DEVKIT1021 | Duplicate Plugin Step Registration | ⚠️ Warning | Detect duplicate `[CrmPluginRegistration]` attributes | [Don't duplicate plug-in step registration](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-duplicate-plugin-step-registration) |

### Medium Priority

| ID | Title | Description | MS Best Practice |
|---|---|---|---|
| DEVKIT1022 | Avoid Reflection in Sandbox Plugins | Detect disallowed reflection patterns (Assembly.Load, Activator.CreateInstance on arbitrary types) | Sandbox limitation |
| DEVKIT1023 | Avoid Environment Variables in Plugins | Detect Environment.GetEnvironmentVariable (unavailable in sandbox) | Sandbox limitation |
| DEVKIT1024 | Use OrganizationServiceContext Carefully | Warn about AutoSaveChanges and LINQ edge cases | Performance |
| DEVKIT1025 | Avoid Large EntityCollection Returns | Warn when not using paging for RetrieveMultiple | [Service protection API limits](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/api-limits) |

### Low Priority

| ID | Title | Description | MS Best Practice |
|---|---|---|---|
| DEVKIT1026 | Manage Invalid Characters | Detect code that may set invalid characters in fields | [Manage invalid characters](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/invalidcharactersinfield) |
| DEVKIT1027 | Verify Certificate Dependencies | Alert when using external HTTPS calls without cert validation consideration | [Verify certification dependencies](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/verify-certification-dependencies) |
| DEVKIT1028 | Plugin Assembly Size Check | Warn if assembly exceeds recommended size limits | [Optimize custom assembly development](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/optimize-assembly-development) |

---

## Competitor Analysis

> **Note**: As of December 2024, no dedicated Roslyn analyzer package for Dynamics 365 / Dataverse plugin development exists in the .NET ecosystem. **DynamicsCrm.DevKit.Analyzers is the first and only comprehensive analyzer package** specifically for this domain.

### Related Projects (Not Direct Competitors)

| Project | Description | Scope |
|---------|-------------|-------|
| [dotnet/roslyn-analyzers](https://github.com/dotnet/roslyn-analyzers) | Official .NET code quality analyzers | General C# |
| [Roslynator](https://github.com/JosefPihrt/Roslynator) | 500+ general C# analyzers | General C# |
| [Meziantou.Analyzer](https://github.com/meziantou/Meziantou.Analyzer) | Enforces C# best practices | General C# |
| Power Platform Solution Checker | Built-in static analysis for solutions | Solutions (not plugin code) |

### Our Differentiator

DynamicsCrm.DevKit.Analyzers uniquely focuses on:
- **Plugin/Workflow Domain Knowledge**: Understands `IPlugin`, `CodeActivity`, `CrmPluginRegistration` patterns
- **Sandbox Limitations**: Enforces sandbox-compatible code patterns
- **Microsoft Best Practices**: Directly maps to published Microsoft documentation
- **Real-time Feedback**: IDE integration while coding, not just at deploy time

---

## Summary

| ID | Analyzer Name | Status |
|---|---|---|
| DEVKIT1001-1018 | Current analyzers | ✅ Implemented |
| DEVKIT1019 | Context depth check | ✅ Implemented |
| DEVKIT1020 | Query type handling | 📋 Planned |
| DEVKIT1021 | Duplicate step registration | 📋 Planned |
| DEVKIT1022 | Reflection patterns | 📋 Planned |
| DEVKIT1023 | Environment variables | 📋 Planned |
| DEVKIT1024 | OrganizationServiceContext | 📋 Planned |
| DEVKIT1025 | Large EntityCollection | 📋 Planned |
| DEVKIT1026 | Invalid characters | 📋 Planned |
| DEVKIT1027 | Certificate dependencies | 📋 Planned |
| DEVKIT1028 | Assembly size | 📋 Planned |

---

## References

### Microsoft Documentation
- [Best practices for plug-in and workflow development](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/)
- [Best practices for working with data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/)
- [Best practices for working with metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-metadata/)
- [Plug-in isolation, trusts, and statistics](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins#plug-in-isolation-trusts-and-statistics)
- [Dataverse plug-in troubleshooting](https://learn.microsoft.com/en-us/troubleshoot/power-platform/dataverse/plug-in-execution/dataverse-plug-ins-errors)

### Community Resources
- [Roslyn Analyzer Cookbook (Tom Englert)](https://github.com/tom-englert/RoslynAnalyzerCookbook)
- [Awesome Analyzers List](https://github.com/cybermaxs/awesome-analyzers)
