---
description: "Build DynamicsCrm.DevKit.Tool project in Debug mode"
mode: agent
---

Build **only** the Tool project (faster than `/build-debug`), pack it as a .NET global tool, and install locally for testing.

> [!CAUTION]
> Quy trình build sử dụng script `Release.DynamicsCrm.DevKit.Tool.ps1`.
> Kịch bản này đã được cấu trúc với `try...finally` để đảm bảo tệp `Const.cs` sẽ luôn được phục hồi an toàn trong mọi tình huống (kể cả khi lỗi hoặc nhấn huỷ giữa chừng).

## Build Script

```powershell
.\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Tool.ps1
```

## Notes

- This workflow builds **only Tool** (not CLI, Analyzer, or VSIX) → much faster
- Tool is a .NET 10 global tool with command name `devkit-tool`
- Version is defined in `DevKit.ReleaseConfig.json`
- No signing keys required for any build configuration
- For full solution build, use `/build-debug` workflow instead
