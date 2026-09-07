# Install Client-Code Dependencies

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\02.Install-All.ps1" } finally { Pop-Location }
```

Wait for all six TestClientCode projects to finish dependency installation.
