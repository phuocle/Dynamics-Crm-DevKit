# 🗺️ Suggested Code Analyzers for DynamicsCrm.DevKit.Analyzers

Based on research of [Microsoft's Dataverse Best Practices](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/), community blog posts, and deep analysis of common plugin development patterns, here are recommended new analyzers to add to the project.

---

## ✅ Current Analyzers (Already Implemented)

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
| DEVKIT1019 | Plugin depth check | ⚠️ Warning | Best practice |
| DEVKIT1020 | DataProvider requires DataSource | ❌ Error | DataProvider configuration |
| DEVKIT1021 | Use ITracingService in Catch Blocks | ⚠️ Warning | [Use ITracingService in plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins) |

---

## 🚀 Suggested New Analyzers (Roadmap)

### 🔴 High Priority (P1) - Critical for Production Stability

| ID | Title | Severity | Description | MS Best Practice |
|---|---|:---:|---|---|
| DEVKIT1022 | Duplicate Plugin Step Registration | ⚠️ Warning | Detect duplicate `[CrmPluginRegistration]` attributes with same Message, Entity, and Stage | [Don't duplicate plug-in step registration](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-duplicate-plugin-step-registration) |
| DEVKIT1023 | Avoid Reflection in Sandbox | ❌ Error | Detect `Assembly.Load`, `Activator.CreateInstance` on arbitrary types, `Type.GetType` with dynamic strings | Sandbox limitation |
| DEVKIT1024 | Avoid Environment Variables Access | ❌ Error | Detect `Environment.GetEnvironmentVariable`, `Environment.SetEnvironmentVariable` (unavailable in sandbox) | Sandbox limitation |
| DEVKIT1025 | Avoid Registry Access | ❌ Error | Detect `Microsoft.Win32.Registry` usage (blocked in sandbox) | Sandbox limitation |
| DEVKIT1026 | Input Validation in Plugins | ⚠️ Warning | Warn when plugin does not validate user inputs (null checks, type validation) before processing | Security best practice |

### 🟠 High Priority (P2) - Performance & Best Practices

| ID | Title | Severity | Description | MS Best Practice |
|---|---|:---:|---|---|
| DEVKIT1027 | Avoid Large EntityCollection Returns | ⚠️ Warning | Warn when `RetrieveMultiple` without paging or `TopCount` is used | [Service protection API limits](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/api-limits) |
| DEVKIT1028 | Use OrganizationServiceContext Carefully | ⚠️ Warning | Warn about `AutoSaveChanges` default behavior and recommend explicit `SaveChanges()` | Performance best practice |
| DEVKIT1029 | Avoid Recursive Plugin Calls | ⚠️ Warning | Detect patterns that may cause infinite plugin loops (e.g., Update in PostUpdate without depth check) | [Context depth check](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-infinite-loop) |
| DEVKIT1030 | Use PreImage Instead of Retrieve | ℹ️ Info | Suggest using PreImage when code does `Retrieve` on the same entity in Update plugin | Performance optimization |
| DEVKIT1031 | Hardcoded Entity/Attribute Names | ⚠️ Warning | Recommend using constants or early-bound types instead of hardcoded strings like `"account"`, `"name"` | Maintainability |

### 🟡 Medium Priority (P3) - Code Quality & Maintainability

| ID | Title | Severity | Description | MS Best Practice |
|---|---|:---:|---|---|
| DEVKIT1032 | Manage Invalid Characters | ℹ️ Info | Detect code that may set invalid characters in text fields | [Manage invalid characters](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/invalidcharactersinfield) |
| DEVKIT1033 | Verify Certificate Dependencies | ℹ️ Info | Alert when using external HTTPS calls without certificate validation consideration | [Verify certification dependencies](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/verify-certification-dependencies) |
| DEVKIT1034 | DateTime Timezone Handling | ⚠️ Warning | Warn when `DateTime` operations don't consider UTC/Local conversion properly | Common error pattern |
| DEVKIT1035 | Thread Usage in Plugin | ❌ Error | Detect `Thread`, `ThreadPool`, `BackgroundWorker` usage in plugins | Sandbox limitation |
| DEVKIT1036 | Web Storage in Plugins | ❌ Error | Detect attempts to use local storage patterns in server-side code | Sandbox limitation |

### 🟢 Low Priority (P4) - Nice to Have

| ID | Title | Severity | Description | MS Best Practice |
|---|---|:---:|---|---|
| DEVKIT1037 | Plugin Assembly Size Check | ℹ️ Info | Warn if assembly approaches recommended size limits (16MB) | [Optimize custom assembly development](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/optimize-assembly-development) |
| DEVKIT1038 | Single Responsibility Plugin | ℹ️ Info | Suggest splitting large `Execute` methods (>100 lines) into smaller focused methods | SOLID principles |
| DEVKIT1039 | Magic Numbers in Plugin | ℹ️ Info | Detect hardcoded OptionSet values without constants | Code quality |
| DEVKIT1040 | Empty Catch Block | ⚠️ Warning | Detect empty `catch` blocks that swallow exceptions silently | Error handling best practice |
| DEVKIT1041 | Missing Plugin Dispose | ℹ️ Info | Suggest implementing `IDisposable` when plugin creates disposable resources | Resource management |

### 🔵 Future Consideration (P5) - Advanced Scenarios

| ID | Title | Severity | Description | MS Best Practice |
|---|---|:---:|---|---|
| DEVKIT1042 | Direct SQL Query Detection | ❌ Error | Detect any attempts to use `SqlConnection` or direct database access | Sandbox & unsupported |
| DEVKIT1043 | Insecure String Comparison | ⚠️ Warning | Detect case-sensitive comparisons on entity/attribute names | Common bug pattern |
| DEVKIT1044 | Missing BypassBusinessLogicExecution Check | ℹ️ Info | Warn when plugin doesn't check for `tag:BypassBusinessLogicExecution` | Advanced pattern for migrations |
| DEVKIT1045 | GUID Comparison with == | ℹ️ Info | Recommend using `Guid.Equals()` for clarity | Code style |
| DEVKIT1046 | Long Running Synchronous Plugin | ⚠️ Warning | Warn about complex operations in synchronous plugins (suggest async) | Performance best practice |

---

## 🔍 Research Sources

### 📖 Microsoft Official Documentation (Bước 1)
- [Best practices for plug-in and workflow development](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/)
- [Best practices for working with data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/)
- [Best practices for working with metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-metadata/)
- [Plug-in isolation, trusts, and statistics](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins#plug-in-isolation-trusts-and-statistics)
- [Dataverse plug-in troubleshooting](https://learn.microsoft.com/en-us/troubleshoot/power-platform/dataverse/plug-in-execution/dataverse-plug-ins-errors)
- [Service protection API limits](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/api-limits)
- [Sandbox Worker process crash troubleshooting](https://learn.microsoft.com/en-us/troubleshoot/power-platform/dataverse/plug-in-execution/sandbox-worker-process-crashed)

### 🌐 Community Blog Posts & Resources (Bước 2)
- Power Platform Solution Checker (không analyze plugin code trực tiếp)
- Community patterns từ XrmToolBox, Power Platform Space
- FXCop, StyleCop, ReSharper patterns cho CRM developers
- Common mistakes patterns từ Dynamics community forums

### 🔬 Deep Research Findings (Bước 3)
- **Threading Issues**: Nhiều developers vẫn cố sử dụng `Thread`, `Task.Run`, `Parallel.ForEach` trong plugins
- **DateTime Bugs**: Lỗi phổ biến nhất là không xử lý timezone đúng cách
- **Recursive Plugins**: Plugins gọi Update trong PostUpdate mà không check depth
- **Input Validation**: Security issue - không validate input trước khi xử lý
- **Hardcoded Strings**: Khó maintain khi entity/attribute names thay đổi
- **Empty Catch Blocks**: Errors bị "nuốt" và khó debug

---

## 🎯 Competitor Analysis

> **Note**: As of February 2025, **DynamicsCrm.DevKit.Analyzers remains the first and only comprehensive Roslyn analyzer package** specifically designed for Dynamics 365 / Dataverse plugin development.

### 📦 Related Projects (Not Direct Competitors)

| Project | Description | Scope |
|---------|-------------|-------|
| [dotnet/roslyn-analyzers](https://github.com/dotnet/roslyn-analyzers) | Official .NET code quality analyzers | General C# |
| [Roslynator](https://github.com/JosefPihrt/Roslynator) | 500+ general C# analyzers | General C# |
| [Meziantou.Analyzer](https://github.com/meziantou/Meziantou.Analyzer) | Enforces C# best practices | General C# |
| Power Platform Solution Checker | Built-in static analysis for solutions | **Does NOT analyze plugin code** (explicit limitation) |

### 🎯 Our Differentiator

DynamicsCrm.DevKit.Analyzers uniquely focuses on:
- **🔌 Plugin/Workflow Domain Knowledge**: Understands `IPlugin`, `CodeActivity`, `CrmPluginRegistration` patterns
- **🔒 Sandbox Limitations**: Enforces sandbox-compatible code patterns (Registry, File I/O, Threading, Environment Variables)
- **📚 Microsoft Best Practices**: Directly maps to published Microsoft documentation
- **⚡ Real-time Feedback**: IDE integration while coding, not just at deploy time
- **🛡️ Security Patterns**: Input validation, secure configuration handling

---

## 📊 Summary

### Already Implemented
| ID Range | Count | Status |
|---|---|---|
| DEVKIT1001-DEVKIT1021 | 21 | ✅ Implemented |

### Planned (Roadmap)
| Priority | ID Range | Count | Status |
|---|---|---|---|
| 🔴 P1 - Critical | DEVKIT1022-DEVKIT1026 | 5 | 📋 Planned |
| 🟠 P2 - High | DEVKIT1027-DEVKIT1031 | 5 | 📋 Planned |
| 🟡 P3 - Medium | DEVKIT1032-DEVKIT1036 | 5 | 📋 Planned |
| 🟢 P4 - Low | DEVKIT1037-DEVKIT1041 | 5 | 📋 Planned |
| 🔵 P5 - Future | DEVKIT1042-DEVKIT1046 | 5 | 📋 Backlog |

**Total Current**: 21 analyzers
**Total Planned**: 25 new analyzers
**Grand Total**: 46 analyzers

---

## 📚 References

### 📖 Microsoft Documentation
- [Best practices for plug-in and workflow development](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/)
- [Best practices for working with data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/)
- [Best practices for working with metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-metadata/)
- [Plug-in isolation, trusts, and statistics](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins#plug-in-isolation-trusts-and-statistics)
- [Dataverse plug-in troubleshooting](https://learn.microsoft.com/en-us/troubleshoot/power-platform/dataverse/plug-in-execution/dataverse-plug-ins-errors)
- [Power Platform injection attack protection](https://learn.microsoft.com/en-us/power-platform/admin/security/power-platform-protection-injection-attacks)

### 🌐 Community Resources
- [Roslyn Analyzer Cookbook (Tom Englert)](https://github.com/tom-englert/RoslynAnalyzerCookbook)
- [Awesome Analyzers List](https://github.com/cybermaxs/awesome-analyzers)
- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

---

*Last Updated: 05.02.2026*
*Research conducted by DynamicsCrm.DevKit AI Agent*
