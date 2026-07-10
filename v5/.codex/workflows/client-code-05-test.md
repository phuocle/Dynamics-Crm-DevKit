# Test Client Code

```powershell
Push-Location "DynamicsCrm.DevKit.Tests\TestClientCode"
try { & ".\05.Check-Build-Test.ps1" } finally { Pop-Location }
```

Wait for all checks, release builds, and unit tests to complete. Report the failing project and command if the pipeline stops.
