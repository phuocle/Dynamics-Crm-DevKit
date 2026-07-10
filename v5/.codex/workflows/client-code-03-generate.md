# Generate Client Code

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\03.Generate-All.ps1" } finally { Pop-Location }
```

Generate form and Web API entity files through the CLI. Do not manually edit generated entity files.
