# DEVKIT1020: DataProvider Must Have DataSource

## 📖 Description

This analyzer detects when a `CrmPluginRegistration` attribute uses `PluginType.DataProvider` but the `DataSource` parameter is empty or missing. DataProvider plugins require a valid DataSource to function correctly at runtime.

## 🎯 Microsoft Best Practice

📚 **[Virtual Table Data Providers](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/virtual-entities/custom-virtual-entity-data-providers)**

> Virtual entity data providers require a data source table record to be configured. The DataSource parameter in your plugin registration must reference this data source.

## ⚠️ Why This Matters

Using `PluginType.DataProvider` without a valid DataSource causes:

1. **💥 Runtime Failure**: The plugin will fail when called because it cannot connect to the data source
2. **🔍 Silent Configuration Error**: The plugin will register but not function correctly
3. **🐛 Difficult Debugging**: Errors only appear at runtime when accessing virtual entities
4. **⏱️ Deployment Issues**: The solution may deploy but virtual entities won't work

## 🔍 Detection

The analyzer flags `[CrmPluginRegistration]` attributes where:
- `PluginType` is `PluginType.DataProvider`
- `DataSource` is missing OR
- `DataSource` is an empty string `""`

## 💻 Code Examples

### ❌ Bad Code

```csharp
// ❌ DataSource is empty - will fail at runtime
[CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cds.Retrieve", "Retrieve", 
    PluginType.DataProvider, DataSource = "")]
public class RetrieveDataProvider : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // This will never work properly!
    }
}

// ❌ DataSource is missing - will fail at runtime
[CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cds.Create", "Create", 
    PluginType.DataProvider)]
public class CreateDataProvider : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // This will never work properly!
    }
}
```

### ✅ Good Code

```csharp
// ✅ DataSource is specified with valid data source name
[CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cds.Retrieve", "Retrieve", 
    PluginType.DataProvider, DataSource = "v4_sql_datasource")]
public class RetrieveDataProvider : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
        
        // DataProvider works correctly with valid DataSource
        tracing.Trace("DataProvider executed");
    }
}
```

## 🔧 How to Fix

1. **Create a Data Source**: In Power Apps, create a virtual table data source record
2. **Get the Logical Name**: Note the logical name of your data source (e.g., `v4_sql_datasource`)
3. **Add DataSource Parameter**: Add `DataSource = "your_datasource_name"` to the attribute

### 🔄 Before and After

```diff
- [CrmPluginRegistration("MyPlugin.Retrieve", "Retrieve", PluginType.DataProvider, DataSource = "")]
+ [CrmPluginRegistration("MyPlugin.Retrieve", "Retrieve", PluginType.DataProvider, DataSource = "my_datasource")]
```

## 💡 Creating a Virtual Table Data Source

1. In Power Apps, go to **Settings** > **Virtual Entity Data Sources**
2. Click **New** and select your data provider
3. Configure the connection settings
4. Note the **Logical Name** for use in your `DataSource` parameter

## 🔕 Suppression

This rule should generally NOT be suppressed since the code will fail at runtime. However, if you have a specific use case:

```csharp
#pragma warning disable DEVKIT1020
[CrmPluginRegistration("MyPlugin.Retrieve", "Retrieve", PluginType.DataProvider, DataSource = "")]
#pragma warning restore DEVKIT1020
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1020.severity = none
```

---

## 📊 Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1020 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |
