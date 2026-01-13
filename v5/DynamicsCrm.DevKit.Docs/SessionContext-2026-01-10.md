# Session Context - 2026-01-10

> **Mục đích**: Lưu context để tiếp tục phiên làm việc tiếp theo mà không mất hiểu biết đã có.

## 🎯 Tóm tắt công việc đã làm

### 1. TypeScript Build System cho VSIX
- Thêm **TypeScript type checking** bằng `tsc --noEmit --project tsconfig.json` vào `build.js`
- Fix **UTF-8 encoding** cho console output (ký tự ✓, ✗ hiển thị đúng)
- Fix **error detection** pattern để tránh false positive

### 2. FormBuildOutput UI Improvements
- **DockPanel layout** thay StackPanel để fill toàn bộ window
- **Disable/Enable nút X** khi build đang chạy/hoàn thành
- **Word wrap** và chỉ scroll dọc
- Hiển thị **build mode** (Debug/Release) trong title

### 3. Deploy Commands cho TypeScript
Tạo 4 buttons cho context menu:

| Button | Command Class | Mode | Hiển thị khi |
|--------|---------------|------|--------------|
| Deploy WebResource (Debug) | `CommandWebResource.cs` | Debug | .ts → (Debug), others → no suffix |
| Deploy New WebResource (Debug) | `CommandNewWebResource.cs` | Debug | .ts → (Debug), others → no suffix |
| Deploy TypeScript (Release) | `CommandTypeScriptRelease.cs` | Release | .ts only |
| Deploy New TypeScript (Release) | `CommandNewTypeScriptRelease.cs` | Release | .ts only |

---

## 📁 Key Files & Purposes

### VSIX Commands
```
DynamicsCrm.DevKit\Commands\
├── CommandWebResource.cs           # Deploy existing (Debug for .ts)
├── CommandNewWebResource.cs        # Deploy NEW (Debug for .ts)
├── CommandTypeScriptRelease.cs     # Deploy existing .ts (Release)
└── CommandNewTypeScriptRelease.cs  # Deploy NEW .ts (Release)
```

### VSIX Infrastructure
```
DynamicsCrm.DevKit\
├── DevKitPackageVsct.vsct          # Button definitions (Groups, Buttons, CommandPlacements, IDSymbols)
├── DevKitPackageVsct.cs            # Constants for command IDs (auto-gen but need manual update)
└── Lib\
    ├── TypeScriptBuildHelper.cs    # Build TS, show popup, error detection
    └── Forms\
        ├── FormBuildOutput.xaml    # UI layout
        └── FormBuildOutput.xaml.cs # UI logic
```

### Build Script (Source of Truth)
```
DynamicsCrm.DevKit.Shared\Resources\ts\build.js
```
- **SYNC** đến test folders qua `04.Sync-All.ps1`
- Có function `checkTypeScript()` để type check trước esbuild
- esbuild **KHÔNG type check**, chỉ transpile

---

## 🔑 Key Patterns

### 1. Error Detection trong TypeScriptBuildHelper.cs
```csharp
// stdout - specific patterns to avoid false positive
if (args.Data.Contains("✗") || 
    args.Data.Contains("error TS") || 
    args.Data.Contains(": error") ||
    args.Data.Contains("Build failed"))

// stderr - only actual errors, not warnings
if (args.Data.Contains("✗") || 
    args.Data.Contains("error TS") || 
    args.Data.Contains("Error:"))
```

### 2. ProcessTypeScriptForDeploymentAsync
```csharp
// isRelease = false → npm run debug Entity
// isRelease = true  → npm run release Entity
await TypeScriptBuildHelper.ProcessTypeScriptForDeploymentAsync(fullFileName, url, isRelease: true);
```

### 3. Dynamic Button Label
```csharp
// Trong BeforeQueryStatus:
if (extension?.ToLowerInvariant() == ".ts")
{
    this.Command.Text = "Deploy WebResource (Debug)";
}
else
{
    this.Command.Text = "Deploy WebResource";
}
```

### 4. Adding New Command Checklist
1. Tạo file `CommandXxx.cs` trong `Commands\`
2. Update `DevKitPackageVsct.vsct`:
   - Groups
   - Buttons
   - CommandPlacements
   - IDSymbols
3. Update `DevKitPackageVsct.cs`:
   - GroupCommandXxx = 0x000X
   - CommandXxx = 0x100X
4. Build VSIX

---

## 🚀 Current Branch
```
dev.2026.jan
```

---

## 📋 Core Rules (PHẢI LUÔN TUÂN THỦ)
1. **Luôn làm việc ở folder `v5`**
2. **KHÔNG tự ý commit/push** khi không được yêu cầu
3. **Sync files** sau khi edit source of truth:
   ```powershell
   cd DynamicsCrm.DevKit.Tests\TestClientCode
   .\04.Sync-All.ps1
   ```

---

## 🔧 Build Commands

### Build VSIX (Debug)
```powershell
& "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe" "DynamicsCrm.DevKit.slnx" /t:Build /p:Configuration=Debug /v:m
```

### Test npm commands
```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs
npm run debug Account   # Debug mode
npm run release Account # Release mode
```

---

## 📌 Pending / Notes
- Tất cả 4 buttons đã hoạt động tốt
- Build.js đã có TypeScript checking với tsconfig.json
- Error detection đã được fix, không còn false positive

---

## 🔗 Related Conversations
- Fixing TypeScript Build Path
- Fixing Build Export Regex
- Run CLI TS-FORM Account
- Implement TsForm OptionSet Generation

---

*File này được tạo tự động bởi Antigravity để lưu context phiên làm việc.*
