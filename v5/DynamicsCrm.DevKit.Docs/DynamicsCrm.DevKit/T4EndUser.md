# Custom Templates User Guide

## What are Custom Templates?

Custom Templates in **DynamicsCrm.DevKit** allow you to customize the code that gets generated when you create new plugins, workflows, custom actions, and other Dynamics 365/Dataverse components. Instead of using the default templates, you can create your own versions with your preferred coding style, additional helper methods, logging patterns, or company-specific standards.

### Why Use Custom Templates?

✅ **Consistency** - Ensure all team members generate code using the same patterns
✅ **Productivity** - Pre-include common helper methods and reduce boilerplate
✅ **Standards Compliance** - Enforce company coding standards automatically
✅ **Flexibility** - Adapt templates to your specific project needs
✅ **Reusability** - Share templates across projects and teams

---

## Supported Template Types

You can create custom templates for these item types:

| Template Type | Description | Common Uses |
|---------------|-------------|-------------|
| **Plugin** | Standard CRM plugin | Add logging, error handling patterns |
| **Workflow** | Custom workflow activity | Include common input/output parameters |
| **Custom Action** | Custom action plugin | Standardize output parameter handling |
| **Custom API** | Custom API plugin | Add authentication checks |
| **Test** | Unit test template | Include test helpers and setup |
| **UI Test** | UI automation test | Pre-configure test settings |

---

## How to Access Template Customization

### Step 1: Create a New Item

1. Right-click on your project in Visual Studio
2. Select **Add → New Item**
3. Choose a DynamicsCrm.DevKit template (e.g., "C# Plugin")

![Add New Item](../images/add-new-item.png)

### Step 2: Open Template Customization

1. In the template wizard dialog, fill in your selections (Entity, Message, Stage, etc.)
2. Click the **"Customize..."** button (pencil icon) next to the Template dropdown

![Customize Button](../images/customize-button.png)

### Step 3: Template Editor Opens

You'll see a full-screen editor with:
- **Template Dropdown** - Select which template to edit
- **Editor** - Modify the template code
- **Action Buttons** - Save, Save As, Set Default, Rename, Delete
- **Review Button** - Preview the generated code

![Template Editor](../images/template-editor.png)

---

## Understanding Template Syntax

Templates use **T4 (Text Template Transformation Toolkit)** syntax. Don't worry - it's simpler than it sounds!

### Basic Syntax

#### 1. Insert Values with `<#= #>`

Use this to insert properties from the `Context` object:

```csharp
namespace <#=Context.PluginNameSpace#>
{
    public class <#=Context.Class#>
    {
        // Your code here
    }
}
```

**Result:** If namespace is "MyCompany.Plugins" and class is "AccountCreate", you get:
```csharp
namespace MyCompany.Plugins
{
    public class AccountCreate
    {
        // Your code here
    }
}
```

#### 2. Conditional Logic with `<# if() { #> ... <# } #>`

Add code conditionally:

```csharp
<#if(Context.PluginExecution == "Asynchronous"){#>
    // This code only appears for async plugins
    private readonly ITracingService _tracing;
<#}#>
```

#### 3. Loops with `<# for() { #> ... <# } #>`

Generate repeated code:

```csharp
<#for(int i = 1; i <= 3; i++){#>
    private void Step<#=i#>() { }
<#}#>
```

**Result:**
```csharp
    private void Step1() { }
    private void Step2() { }
    private void Step3() { }
```

---

## Available Context Properties

When creating templates, you have access to these properties through the `Context` object:

### Common Properties (All Templates)

| Property | Description | Example Value |
|----------|-------------|---------------|
| `Context.PluginNameSpace` | Your plugin namespace | `"MyCompany.Plugins"` |
| `Context.Class` | Class name | `"PreAccountCreate"` |
| `Context.PluginSharedNameSpace` | Shared project namespace | `"MyCompany.Shared"` |

### Plugin-Specific Properties

| Property | Description | Example Value |
|----------|-------------|---------------|
| `Context.PluginMessage` | SDK Message | `"Create"`, `"Update"`, `"Delete"` |
| `Context.PluginLogicalName` | Entity logical name | `"account"`, `"contact"` |
| `Context.PluginSchemaName` | Entity schema name | `"Account"`, `"Contact"` |
| `Context.PluginStage` | Execution stage | `"PreValidation"`, `"PreOperation"`, `"PostOperation"` |
| `Context.PluginExecution` | Execution mode | `"Synchronous"`, `"Asynchronous"` |
| `Context.PluginOrder` | Execution order | `1`, `2`, `3` |
| `Context.PluginComment` | Auto-generated comment from CRM | See example below |

### Computed Properties

| Property | Description | Returns |
|----------|-------------|---------|
| `Context.IsPluginSupportedPreImage` | Can this message have PreImage? | `true` or `false` |
| `Context.IsPluginSupportedPostImage` | Can this message have PostImage? | `true` or `false` |

### Data Provider Properties

| Property | Description | Example Value |
|----------|-------------|---------------|
| `Context.DataSource` | Data source name | `"my_datasource"` |

---

## Step-by-Step: Creating Your First Custom Template

### Example: Add Logging to All Plugins

Let's create a custom plugin template that includes logging automatically.

#### Step 1: Open Default Template

1. Create a new Plugin item
2. Click **Customize** button
3. You'll see the default template

#### Step 2: Modify the Template

Find this section:
```csharp
public void Execute(IServiceProvider serviceProvider)
{
    var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
    var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
```

Add your logging after it:
```csharp
public void Execute(IServiceProvider serviceProvider)
{
    var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
    var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

    // YOUR CUSTOM LOGGING
    tracing?.Trace($"Plugin started: <#=Context.Class#>");
    tracing?.Trace($"Message: <#=Context.PluginMessage#>, Entity: <#=Context.PluginLogicalName#>");
```

#### Step 3: Preview Your Changes

1. Click **Review** button
2. Check the generated code
3. Verify the logging statements appear correctly

#### Step 4: Save as New Template

1. Click **Save As** button
2. Enter name: "Plugin with Logging"
3. Click OK

#### Step 5: Set as Default (Optional)

1. Select your "Plugin with Logging" template from dropdown
2. Click **Set Default** button
3. From now on, this template will be used by default

---

## Common Customization Examples

### Example 1: Add Constructor for Configuration

**Use Case:** You always want plugins to accept configuration strings.

**Template Modification:**
```csharp
public class <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#> : IPlugin
{
    private readonly string unsecureConfig;
    private readonly string secureConfig;

    public <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#>(string unsecureConfiguration, string secureConfiguration)
    {
        this.unsecureConfig = unsecureConfiguration;
        this.secureConfig = secureConfiguration;
    }

    public void Execute(IServiceProvider serviceProvider)
    {
        // Implementation
    }
}
```

**Result:** Every plugin now includes the constructor with configuration parameters.

---

### Example 2: Add Standard Error Handling

**Template Modification:**
```csharp
private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
{
    try
    {
<#if(Context.PluginMessage=="Create" || Context.PluginMessage=="Update"){#>
        var targetEntity = context.InputParameterOrDefault<Entity>("Target");
<#}#>
        //YOUR PLUGIN-CODE GO HERE

    }
    catch (InvalidPluginExecutionException)
    {
        throw; // Re-throw plugin exceptions
    }
    catch (Exception ex)
    {
        tracing?.Trace($"Error: {ex.Message}");
        throw new InvalidPluginExecutionException($"An error occurred in <#=Context.Class#>: {ex.Message}", ex);
    }
}
```

**Result:** Standard try-catch block added to all plugins.

---

### Example 3: Add Conditional Image Attributes

**Use Case:** You want to specify exact attributes for images instead of "*".

**Template Modification:**

Find the registration attribute section and modify:
```csharp
<#if(Context.IsPluginSupportedPreImage){#>, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name,emailaddress1,telephone1"<#}#>
```

**Result:** PreImage only retrieves specific attributes instead of all.

---

### Example 4: Add Custom Comments Header

**Template Modification:**

Add at the top of the class:
```csharp
namespace <#=Context.PluginNameSpace#>
{
    /// <summary>
    /// Plugin: <#=Context.Class#>
    /// Entity: <#=Context.PluginSchemaName#>
    /// Message: <#=Context.PluginMessage#>
    /// Stage: <#=Context.PluginStage#>
    /// Created: <#=DateTime.Now.ToString("yyyy-MM-dd")#>
    /// </summary>
    [CrmPluginRegistration("<#=Context.PluginMessage#>", "<#=Context.PluginLogicalName#>",
```

**Result:** XML documentation comments with metadata.

---

### Example 5: Add Helper Methods

**Template Modification:**

Add before the Execute method:
```csharp
    private bool HasAttribute(Entity entity, string attributeName)
    {
        return entity.Contains(attributeName) && entity[attributeName] != null;
    }

    private T GetAttributeValue<T>(Entity entity, string attributeName, T defaultValue = default(T))
    {
        return entity.Contains(attributeName) ? entity.GetAttributeValue<T>(attributeName) : defaultValue;
    }

    public void Execute(IServiceProvider serviceProvider)
    {
```

**Result:** Helper methods available in every plugin.

---

### Example 6: Add Region Markers

**Template Modification:**
```csharp
public class <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#> : IPlugin
{
    #region Fields and Constants

    // Add your fields here

    #endregion

    #region Constructor

    public void Execute(IServiceProvider serviceProvider)
    {
    }

    #endregion

    #region Private Methods

    private void ExecutePlugin(...)
    {
    }

    #endregion
}
```

**Result:** Code organized with collapsible regions.

---

## Workflow Template Customizations

### Example: Add Standard Input Parameters

**Template Modification:**
```csharp
public class <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#> : CodeActivity
{
    // Standard inputs used in most workflows

    [Input("Record Reference")]
    [RequiredArgument]
    [ReferenceTarget("account", "contact", "lead")]
    public InArgument<EntityReference> RecordReference { get; set; }

    [Input("Process Notes")]
    public InArgument<string> ProcessNotes { get; set; }

    [Output("Success")]
    public OutArgument<bool> Success { get; set; }

    [Output("Error Message")]
    public OutArgument<string> ErrorMessage { get; set; }

    protected override void Execute(CodeActivityContext executionContext)
    {
```

---

## Custom API Template Customizations

### Example: Add Output Parameters Pattern

**Template Modification:**
```csharp
private ParameterCollection ExecuteCustomApi(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
{
    var outputs = new ParameterCollection();

    try
    {
        //YOUR CUSTOM API CODE HERE

        // Standard success response
        outputs["Success"] = true;
        outputs["Message"] = "Operation completed successfully";

    }
    catch (Exception ex)
    {
        outputs["Success"] = false;
        outputs["Message"] = $"Error: {ex.Message}";
        tracing?.Trace($"Error in <#=Context.Class#>: {ex.Message}");
    }

    return outputs;
}
```

---

## Test Template Customizations

### Example: Add Test Setup Helper

**Template Modification:**
```csharp
[TestClass]
public class <#=Context.Class#>Test : FakeXrmEasyTestBase
{
    private IOrganizationService _service;
    private Guid _accountId;

    [TestInitialize]
    public void TestInitialize()
    {
        _service = _context.GetOrganizationService();

        // Create test account
        var account = new Entity("account")
        {
            ["name"] = "Test Account"
        };
        _accountId = _service.Create(account);
    }

    [TestMethod]
    public void <#=Context.Class#>Test_01()
    {
        // Your test code
        Assert.IsTrue(true);
    }
}
```

---

## Tips and Best Practices

### 1. Start with Default Template

Always start by reviewing the default template. It includes:
- Proper attribute registration
- Standard service initialization
- Message-specific parameter handling
- Best practice patterns

### 2. Test Before Setting as Default

1. Create your custom template
2. Test it by generating code with **Review** button
3. Create a real item to verify it compiles
4. Only then set as default

### 3. Use Descriptive Names

❌ Bad: "Template1", "MyTemplate"
✅ Good: "Plugin with Logging", "Async Workflow with Retry"

### 4. Keep Templates Maintainable

- Add comments in your template to explain customizations
- Don't over-complicate - simpler is better
- Update templates when you find better patterns

### 5. Share Templates with Team

Templates are stored in `DynamicsCrm.DevKit.Config.json` in your solution folder:
- Commit this file to source control
- Team members will automatically get your templates
- Document custom templates in your team wiki

### 6. Version Control Your Templates

When making significant changes:
1. Save the old version with a different name first
2. Create the new version
3. Test both to compare

### 7. Use Conditional Logic Wisely

```csharp
// Good - Clear and readable
<#if(Context.PluginMessage == "Create"){#>
    var targetEntity = context.InputParameterOrDefault<Entity>("Target");
<#}#>

// Bad - Too complex
<#if(Context.PluginMessage == "Create" && Context.PluginStage == "PreOperation" && Context.PluginExecution == "Synchronous"){#>
    // Hard to read and maintain
<#}#>
```

---

## Template Management Actions

### Save Template

Updates the currently selected template with your changes.

**When to use:** You've improved an existing custom template.

### Save As

Creates a new template with a new name.

**When to use:**
- Creating your first custom template
- Creating a variation of an existing template
- Preserving the original while experimenting

### Set Default

Marks a template as the default for its type.

**When to use:** You want this template to be pre-selected every time you create a new item.

**Note:** Each template type can have only one default.

### Rename

Changes the name of a custom template.

**When to use:** You want to give a template a more descriptive name.

**Note:** Cannot rename "Default" templates.

### Delete

Removes a custom template permanently.

**When to use:** You no longer need a template.

**Note:** Cannot delete "Default" templates.

---

## Troubleshooting

### Template Errors When Generating Code

**Symptom:** You see error messages instead of generated code.

**Solution:**
1. Click **Review** button to see the error details
2. Check for syntax errors in your T4 code:
   - Unclosed `<#` tags
   - Missing `#>` closers
   - Invalid C# syntax in template output
3. Fix the errors and click **Review** again

### Template Doesn't Appear in Dropdown

**Symptom:** Your saved template isn't showing up.

**Solution:**
1. Close and reopen the customize dialog
2. Check `DynamicsCrm.DevKit.Config.json` file exists in solution folder
3. Verify the template type matches (Plugin templates won't show for Workflows)

### Generated Code Won't Compile

**Symptom:** Code generates successfully but Visual Studio shows errors.

**Solution:**
1. Check that `Context` properties are used correctly
2. Verify all using statements are included
3. Make sure the generated C# syntax is valid
4. Use **Review** to inspect the actual generated code

### Context Property Returns Empty/Null

**Symptom:** Template generates but values are blank.

**Solution:**
- Some properties only apply to certain template types
- Check the property usage table above
- Use conditional checks: `<#if(!string.IsNullOrEmpty(Context.PluginMessage)){#>`

### Can't Save Template - Name Already Exists

**Symptom:** Error when trying to save or rename.

**Solution:**
- Choose a unique name
- Cannot use "Default" or "Default - [Type]" names
- Template names are case-insensitive

---

## Advanced Scenarios

### Scenario 1: Company-Wide Template Standards

**Goal:** Ensure all developers use the same patterns.

**Steps:**
1. Senior developer creates custom templates
2. Templates are saved to `DynamicsCrm.DevKit.Config.json`
3. File is committed to source control
4. All team members get templates when they pull
5. Templates are set as default for each type

**Result:** Consistent code across the team.

---

### Scenario 2: Project-Specific Templates

**Goal:** Different templates for different projects.

**Steps:**
1. Each solution has its own `DynamicsCrm.DevKit.Config.json`
2. Create templates specific to project needs
3. Templates stay with that solution
4. Developers work on multiple projects with different templates

**Result:** Templates automatically switch per project.

---

### Scenario 3: Template Library

**Goal:** Maintain a library of reusable templates.

**Steps:**
1. Create a reference project with all your templates
2. When starting new project, copy `DynamicsCrm.DevKit.Config.json`
3. Customize further as needed
4. Share successful patterns back to library

**Result:** Reusable template collection.

---

## Frequently Asked Questions

### Q: Can I use C# code in templates?

**A:** Yes! Between `<#` and `#>` you can write C# code. Example:
```csharp
<#
var today = DateTime.Now.ToString("yyyy-MM-dd");
var author = "John Doe";
#>
// Generated on <#=today#> by <#=author#>
```

### Q: Can I access external files or databases in templates?

**A:** Technically yes, but not recommended. Templates should be self-contained and fast. Complex logic belongs in helper classes, not templates.

### Q: Where are templates stored?

**A:** In `DynamicsCrm.DevKit.Config.json` in your solution root folder. Template code is compressed to save space.

### Q: Can I export/import templates?

**A:** Copy the `DynamicsCrm.DevKit.Config.json` file between solutions. You can also manually copy the CustomTemplates section from the JSON.

### Q: What happens if I delete the config file?

**A:** You'll lose all custom templates. Default templates will still work as they're embedded in the extension.

### Q: Can different developers have different default templates?

**A:** No, the default is stored in `DynamicsCrm.DevKit.Config.json` which is shared. But each developer can select their preferred template from the dropdown when creating items.

### Q: How do I undo template changes?

**A:** Before making major changes:
1. Use **Save As** to create a copy
2. Modify the original
3. If you don't like it, select the copy and **Set Default**

Or use source control to revert the config file.

### Q: Can templates include other templates?

**A:** Not directly. But you can copy common sections between templates manually.

### Q: Are templates executed at compile time or design time?

**A:** Design time - when you create the item. Once the code is generated, templates are no longer involved.

### Q: Can I debug template errors?

**A:** Use the **Review** button to see error messages with line and column numbers. Fix errors based on these messages.

---

## Quick Reference: T4 Syntax

```csharp
// Insert a value
<#=Context.PluginNameSpace#>

// If statement
<#if(Context.PluginExecution == "Synchronous"){#>
    // Code here
<#}#>

// If-Else statement
<#if(Context.PluginOrder > 1){#>
    // When order > 1
<#} else {#>
    // When order = 1
<#}#>

// For loop
<#for(int i = 0; i < 5; i++){#>
    // Repeated code
<#}#>

// C# code block (doesn't output)
<#
    var myVariable = "Hello";
    var today = DateTime.Now;
#>

// Output the variable
<#=myVariable#>

// String concatenation
<#=Context.Class + "Helper"#>

// Conditional expression
<#if(Context.PluginOrder != 1){#><#=Context.PluginOrder#><#}#>
```

---

## Example: Complete Custom Plugin Template

Here's a complete example showing many customizations:

```csharp
using System;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using <#=Context.PluginSharedNameSpace#>;

namespace <#=Context.PluginNameSpace#>
{
    /// <summary>
    /// Plugin: <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#>
    /// Entity: <#=Context.PluginSchemaName#> (<#=Context.PluginLogicalName#>)
    /// Message: <#=Context.PluginMessage#>
    /// Stage: <#=Context.PluginStage#>
    /// </summary>
    [CrmPluginRegistration("<#=Context.PluginMessage#>", "<#=Context.PluginLogicalName#>",
        StageEnum.<#=Context.PluginStage#>, ExecutionModeEnum.<#=Context.PluginExecution#>,
        "", "<#=Context.PluginNameSpace#>.<#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#>",
        <#=Context.PluginOrder#>, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin
<#if(Context.PluginExecution=="Asynchronous"){#>, DeleteAsyncOperation = true<#}#>
<#if(Context.IsPluginSupportedPreImage){#>, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*"<#}#>
<#if(Context.IsPluginSupportedPostImage){#><#if(Context.IsPluginSupportedPreImage){#>, Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*"<#} else {#>, Image1Name = "PostImage", Image1Alias = "PostImage", Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "*"<#}#><#}#>)]
    public class <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#> : IPlugin
    {
        #region Fields

        private readonly string _unsecureConfig;
        private readonly string _secureConfig;

        #endregion

        #region Constructor

        public <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#>(string unsecureConfiguration, string secureConfiguration)
        {
            _unsecureConfig = unsecureConfiguration;
            _secureConfig = secureConfiguration;
        }

        #endregion

        #region IPlugin Implementation

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            tracing?.Trace($"[{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss}] Plugin Started: <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#>");

            // Validate execution context
            if (!int.Equals(context.Stage, (int)StageEnum.<#=Context.PluginStage#>))
                throw new InvalidPluginExecutionException("Stage does not equals <#=Context.PluginStage#>");
            if (!string.Equals(context.MessageName, "<#=Context.PluginMessage#>", StringComparison.OrdinalIgnoreCase))
                throw new InvalidPluginExecutionException("MessageName does not equals <#=Context.PluginMessage#>");
            if (!string.Equals(context.PrimaryEntityName, "<#=Context.PluginLogicalName#>", StringComparison.OrdinalIgnoreCase))
                throw new InvalidPluginExecutionException("PrimaryEntityName does not equals <#=Context.PluginLogicalName#>");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.<#=Context.PluginExecution#>))
                throw new InvalidPluginExecutionException("Execution does not equals <#=Context.PluginExecution#>");

            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            tracing?.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);

            tracing?.Trace($"[{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss}] Plugin Completed Successfully");
        }

        #endregion

        #region Private Methods

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            try
            {
<#if(Context.PluginMessage=="Create" || Context.PluginMessage=="Update"){#>
                var targetEntity = context.InputParameterOrDefault<Entity>("Target");
                tracing?.Trace($"Target Entity ID: {targetEntity.Id}");
<#}else if(Context.PluginMessage=="CreateMultiple" || Context.PluginMessage=="UpdateMultiple"){#>
                var targetEntities = context.InputParameterOrDefault<EntityCollection>("Targets");
                tracing?.Trace($"Target Entities Count: {targetEntities.Entities.Count}");
<#}else if(Context.PluginMessage=="Delete"){#>
                var targetEntityReference = context.InputParameterOrDefault<EntityReference>("Target");
                tracing?.Trace($"Target Entity ID: {targetEntityReference.Id}");
<#}else{#>
                //var ??? = context.InputParameterOrDefault<???>("???");
<#}#>
<#if(Context.IsPluginSupportedPreImage){#>
                context.PreEntityImages.TryGetValue("PreImage", out Entity preEntity);
                if (preEntity != null)
                    tracing?.Trace("PreImage retrieved successfully");
<#}#>
<#if(Context.IsPluginSupportedPostImage){#>
                context.PostEntityImages.TryGetValue("PostImage", out Entity postEntity);
                if (postEntity != null)
                    tracing?.Trace("PostImage retrieved successfully");
<#}#>

                //YOUR PLUGIN-CODE GO HERE

            }
            catch (InvalidPluginExecutionException)
            {
                throw; // Re-throw CRM exceptions
            }
            catch (Exception ex)
            {
                tracing?.Trace($"ERROR: {ex.Message}");
                tracing?.Trace($"Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in <#=Context.Class#><#if(Context.PluginOrder!=1){#><#=Context.PluginOrder#><#}#>: {ex.Message}", ex);
            }
        }

        private bool HasAttribute(Entity entity, string attributeName)
        {
            return entity != null && entity.Contains(attributeName) && entity[attributeName] != null;
        }

        private T GetAttributeValue<T>(Entity entity, string attributeName, T defaultValue = default(T))
        {
            return HasAttribute(entity, attributeName) ? entity.GetAttributeValue<T>(attributeName) : defaultValue;
        }

        #endregion
    }
}
```

This template includes:
- XML documentation comments
- Constructor for configuration
- Enhanced logging with timestamps
- Try-catch error handling
- Helper methods
- Organized with regions
- PreImage/PostImage with null checks
- Message-specific parameter handling

---

## Next Steps

1. **Explore** the default templates to understand the structure
2. **Experiment** with small changes using Save As
3. **Test** your templates thoroughly before setting as default
4. **Share** successful templates with your team
5. **Iterate** and improve templates based on real-world usage

---

## Additional Resources

- [T4 Text Templates Documentation](https://learn.microsoft.com/en-us/visualstudio/modeling/code-generation-and-t4-text-templates)
- [DynamicsCrm.DevKit Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki)
- [Plugin Development Best Practices](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/)

---

**Happy Coding!** 🚀

If you have questions or need help with custom templates, visit the [DynamicsCrm.DevKit GitHub Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues) page.
