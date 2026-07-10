# Sync Client Code

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\04.Sync-All.ps1" } finally { Pop-Location }
```

This copies the JS/TS sources of truth and generated entity files into the six test projects.
