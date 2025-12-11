# DEVKIT1003: Plugin Image Validation

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1003 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

## Description

This analyzer validates that plugin image configurations (Pre-Images and Post-Images) are compatible with the message and stage. The Dynamics 365 platform has specific rules about when images are available, and incorrect configurations will cause runtime errors.

## Microsoft Best Practice

📚 **[Understand the execution context](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/understand-the-data-context)**

> Pre-entity images contain data as it existed before the operation. Post-entity images contain data as it exists after the operation. Not all operations support both types of images.

## Why This Matters

Configuring unavailable images causes:

1. **Runtime Errors**: Plugins will fail at execution time
2. **Deployment Failures**: Solution import may fail with invalid step configurations
3. **Debugging Difficulty**: Errors may not be obvious until runtime
4. **Data Integrity Issues**: Failed plugins may leave data in inconsistent states

## Image Availability Matrix

| Message | Stage | Pre-Image | Post-Image |
|---------|-------|:---------:|:----------:|
| **Create** | Pre-Validation | ❌ | ❌ |
| **Create** | Pre-Operation | ❌ | ❌ |
| **Create** | Post-Operation | ❌ | ✅ |
| **Update** | Pre-Validation | ✅ | ❌ |
| **Update** | Pre-Operation | ✅ | ❌ |
| **Update** | Post-Operation | ✅ | ✅ |
| **Delete** | Pre-Validation | ✅ | ❌ |
| **Delete** | Pre-Operation | ✅ | ❌ |
| **Delete** | Post-Operation | ✅ | ❌ |

## Detection

The analyzer flags `[CrmPluginRegistration]` attributes where:
- Image configurations are incompatible with the message/stage combination
- Pre-Image on Create (record doesn't exist yet)
- Post-Image on Pre-Operation stages (changes not committed yet)
- Post-Image on Delete (record is deleted)

## Code Examples

### ❌ Bad Code

```csharp
// Pre-Create cannot have Pre-Image - record doesn't exist yet!
[CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PreImage, 
    Image1Name = "PreImage",
    Image1Attributes = "name,accountnumber")]
public class PreCreateWithPreImage : IPlugin { }

// Pre-Update cannot have Post-Image - changes not committed yet!
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PostImage,
    Image1Name = "PostImage",
    Image1Attributes = "name")]
public class PreUpdateWithPostImage : IPlugin { }

// Delete cannot have Post-Image - record is deleted!
[CrmPluginRegistration("Delete", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PostImage,
    Image1Name = "PostImage",
    Image1Attributes = "name")]
public class PostDeleteWithPostImage : IPlugin { }
```

### ✅ Good Code

```csharp
// Post-Create can have Post-Image
[CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PostImage,
    Image1Name = "PostImage",
    Image1Attributes = "name,accountnumber")]
public class PostCreateWithPostImage : IPlugin { }

// Pre-Update can have Pre-Image
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PreImage,
    Image1Name = "PreImage",
    Image1Attributes = "name,accountnumber")]
public class PreUpdateWithPreImage : IPlugin { }

// Post-Update can have BOTH images
[CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PreImage,
    Image1Name = "PreImage",
    Image1Attributes = "name",
    Image2Type = ImageTypeEnum.PostImage,
    Image2Name = "PostImage",
    Image2Attributes = "name")]
public class PostUpdateWithBothImages : IPlugin { }
```

## How to Fix

1. **Check the Matrix**: Refer to the Image Availability Matrix above
2. **Adjust Stage or Image Type**: Either change the stage or remove the incompatible image
3. **Use Target Entity**: For Create messages, use `Target` from InputParameters instead of images

### Before and After

```diff
- [CrmPluginRegistration("Create", "account", StageEnum.PreOperation,
-     Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name")]
+ [CrmPluginRegistration("Create", "account", StageEnum.PostOperation,
+     Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "name")]
```

## Suppression

If you have a legitimate need to suppress this warning:

```csharp
#pragma warning disable DEVKIT1003
[CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name")]
#pragma warning restore DEVKIT1003
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1003.severity = none
```
