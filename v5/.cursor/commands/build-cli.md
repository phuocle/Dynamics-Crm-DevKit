# Build CLI - DynamicsCrm.DevKit.Cli

Build **only** the CLI project (faster than `/build-debug`), pack it as a .NET tool, and install locally for testing.

> [!CAUTION]
> Quy trình build sử dụng script `Release.DynamicsCrm.DevKit.Cli.ps1`.
> Kịch bản này đã được cấu trúc với `try...finally` để đảm bảo tệp `Const.cs` sẽ luôn được phục hồi an toàn trong mọi tình huống (kể cả khi lỗi hoặc nhấn huỷ giữa chừng).

## Build Script

```powershell
.\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Cli.ps1
```

## Notes

- This workflow builds **only CLI** (not Analyzer, Tool, or VSIX) → much faster
- Version is defined in `DevKit.ReleaseConfig.json`
- No signing keys required for any build configuration
- For full solution build, use `/build-debug` workflow instead
