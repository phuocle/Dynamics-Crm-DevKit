# DEVKIT1018: Avoid File/IO Operations in Plug-ins

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1018 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

## Description

This analyzer detects usage of `System.IO` file operations in plugin and workflow activity code. File system access is blocked in the Dataverse sandbox environment and will throw a `SecurityException` at runtime.

## Why This Matters

File I/O operations in plugins and workflows:

1. **Will Fail at Runtime**: Sandbox blocks all file system access with SecurityException
2. **Cannot Be Tested Locally**: Code may work in development but fail when deployed
3. **No File System Access**: Plugins run in isolated sandbox without disk access
4. **Security Risk**: Allowing file access would create data exfiltration vulnerabilities

## Detection

The analyzer flags usage of these System.IO types and methods within IPlugin or CodeActivity classes:

### Blocked Types (Object Creation)
- `FileStream`
- `StreamReader`
- `StreamWriter`
- `BinaryReader`
- `BinaryWriter`
- `FileInfo`
- `DirectoryInfo`
- `FileSystemWatcher`

### Blocked Methods (Static Calls)
- `File.ReadAllText()`, `File.ReadAllBytes()`, `File.ReadAllLines()`
- `File.WriteAllText()`, `File.WriteAllBytes()`, `File.WriteAllLines()`
- `File.Open()`, `File.Create()`, `File.Delete()`, `File.Copy()`, `File.Move()`
- `File.Exists()`, `File.AppendAllText()`, `File.AppendAllLines()`
- `Directory.CreateDirectory()`, `Directory.Delete()`, `Directory.Exists()`
- `Directory.GetFiles()`, `Directory.GetDirectories()`

## Code Examples

### ❌ Bad Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ All of these will throw SecurityException in sandbox
        var content = File.ReadAllText("config.txt");
        File.WriteAllText("log.txt", "Plugin executed");
        
        using (var stream = new FileStream("data.bin", FileMode.Open))
        {
            // Read from file
        }
        
        using (var reader = new StreamReader("input.txt"))
        {
            var line = reader.ReadLine();
        }
        
        if (Directory.Exists("C:\\temp"))
        {
            var files = Directory.GetFiles("C:\\temp");
        }
    }
}
```

### ✅ Good Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
        
        // ✅ Use Dataverse data storage instead
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(context.UserId);
        
        // Read configuration from Environment Variable
        var query = new QueryExpression("environmentvariabledefinition");
        query.ColumnSet = new ColumnSet("defaultvalue");
        query.Criteria.AddCondition("schemaname", ConditionOperator.Equal, "MyPluginConfig");
        var configValue = service.RetrieveMultiple(query).Entities.FirstOrDefault()?
            .GetAttributeValue<string>("defaultvalue");
        
        // Log using tracing service
        tracingService.Trace($"Plugin executed with config: {configValue}");
        
        // Store data using Note attachment or Azure Blob (via external service)
        var note = new Entity("annotation")
        {
            ["subject"] = "Plugin Output",
            ["notetext"] = "Data to store",
            ["objectid"] = context.PrimaryEntityId
        };
        service.Create(note);
    }
}
```

## Alternatives

| Instead of... | Use... |
|---------------|--------|
| Config files | Environment Variables, Custom Tables |
| Log files | ITracingService, Custom Log Entity |
| Data export | Azure Blob via external service |
| File attachments | Notes (annotation) or attachment entities |

## Suppression

This rule should generally NOT be suppressed since the code will fail at runtime. However, if you have validly shared code:

```csharp
#pragma warning disable DEVKIT1018
var content = File.ReadAllText("test.txt");
#pragma warning restore DEVKIT1018
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1018.severity = none
```

## Related Rules

- [DEVKIT1017](DEVKIT1017.md) - Avoid Console output (also has no effect in sandbox)
- [DEVKIT1008](DEVKIT1008.md) - Avoid parallel execution (also blocked in sandbox)
