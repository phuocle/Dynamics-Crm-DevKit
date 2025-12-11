; Unshipped analyzer release
; https://github.com/dotnet/roslyn-analyzers/blob/master/src/Microsoft.CodeAnalysis.Analyzers/ReleaseTrackingAnalyzers.Help.md

### New Rules
Rule ID | Category | Severity | Notes
--------|----------|----------|-------
DEVKIT1001 | DynamicsCrm.DevKit | Warning | Filtering attributes for Create/Update, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1001)
DEVKIT1002 | DynamicsCrm.DevKit | Warning | Don't use ColumnSet(true), [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1002)
DEVKIT1003 | DynamicsCrm.DevKit | Error | Plugin image validation, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1003)
DEVKIT1004 | DynamicsCrm.DevKit | Info | Deprecated SDK messages, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1004)
DEVKIT1005 | DynamicsCrm.DevKit | Warning | EntityReference maybe null, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1005)
DEVKIT1006 | DynamicsCrm.DevKit | Warning | Batch requests in plugins, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1006)
DEVKIT1007 | DynamicsCrm.DevKit | Error | Stateless IPlugin, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1007)
DEVKIT1008 | DynamicsCrm.DevKit | Error | Parallel execution in plugins, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1008)
DEVKIT1009 | DynamicsCrm.DevKit | Warning | Set KeepAlive to false, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1009)
DEVKIT1010 | DynamicsCrm.DevKit | Warning | Set HTTP Timeout, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1010)
DEVKIT1011 | DynamicsCrm.DevKit | Warning | Use InvalidPluginExecutionException, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1011)
DEVKIT1012 | DynamicsCrm.DevKit | Info | Consider using ITracingService, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1012)
DEVKIT1013 | DynamicsCrm.DevKit | Info | Avoid Retrieve/RetrieveMultiple plugins, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1013)
DEVKIT1014 | DynamicsCrm.DevKit | Error | Avoid AppDomain events, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1014)
DEVKIT1015 | DynamicsCrm.DevKit | Info | Avoid blocking async patterns, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1015)
DEVKIT1016 | DynamicsCrm.DevKit | Info | Avoid RetrieveAsIfPublished, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1016)
DEVKIT1017 | DynamicsCrm.DevKit | Info | Avoid Console output, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1017)
DEVKIT1018 | DynamicsCrm.DevKit | Error | Avoid File/IO operations, [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1018)