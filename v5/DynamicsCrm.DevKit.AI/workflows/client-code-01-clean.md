# Clean Client Code

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\01.Clean-All.ps1" } finally { Pop-Location }
```

This removes generated build output, dependencies, coverage, and lock files from all six TestClientCode projects. Run only when explicitly requested.
