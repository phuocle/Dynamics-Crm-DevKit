---
description: Build VSIX DynamicsCrm.DevKit
---

# Build VSIX Workflow

Follow these steps strictly to examine, build, and verify the VSIX project.

## 1. Configuration Constants
Use these exact paths and configurations. Do not deviate.
- **Build Mode**: `DEBUG`
- **MSBuild Path**: `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe`
- **Solution File**: `DynamicsCrm.DevKit.slnx` (Relative to workspace root `v5`)

## 2. Execution Process
1.  **Pre-check**: Ensure you are in the workspace root (`v5`).
2.  **Build Command**: Execute MSBuild with the following parameters:
    - Target: `Rebuild`
    - Configuration: `Debug`
      ```
3.  **Error Resolution Loop**:
    - If the build **fails** (exit code != 0 or Errors > 0):
      - Analyze the error output.
      - Apply fixes to the code.
      - **Re-run** the build command.
      - Repeat until the build succeeds with 0 errors.

## 3. Strict Constraints
- **NO TESTS**: You are strictly FORBIDDEN from running any VSIX tests. Your task ends at the build.
- **DEBUG ONLY**: Do not use Release mode.

## 4. Completion Notification
When the build is successful (0 errors), verify the `.vsix` file exists in `bin\Debug\`, then strictly notify the user with this exact message:

> "Anh Phước, tôi đã build VSIX không có lỗi gì, anh hãy test lại giúp tôi"