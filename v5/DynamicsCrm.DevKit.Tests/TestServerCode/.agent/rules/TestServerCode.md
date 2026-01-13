---
trigger: always_on
---

==== BẮT ĐẦU QUAN TRỌNG

# CLI LEGACY EXE PATH #
- DynamicsCrm.DevKit.Docs\CliBackup\DynamicsCrm.DevKit.Cli.exe
 
# CLI PROFILE #
- 07-DEVKITV4.Server
- 08-DEVKITV4.Server.OnlyUpdateAssembly
- 09-DEVKITV4.Server.Package
- 10-DEVKITV4.Server.Package.OnlyUpdateAssembly
- 11-DEVKITV4.Server.ManagedIdentity
- 12-DEVKITV4.Server.ManagedIdentity.OnlyUpdateAssembly
- 13-DEVKITV4.Package.ManagedIdentity
- 14-DEVKITV4.Package.ManagedIdentity.OnlyUpdateAssembly
- 23-DEVKITV4.DataSource

# RUN CLI PROFILE #
- Nếu nói LEGACY thì dùng CLI LEGACY EXE PATH và đọc profile để run
- Nếu không nói gì hết thì hiểu là BUILD CLI (dot net tool) để run profile

# BUILD CLI #
- taskkill /F /IM "DynamicsCrm.DevKit.Cli.exe" 2>$null;
- dotnet build --configuration Release "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"

