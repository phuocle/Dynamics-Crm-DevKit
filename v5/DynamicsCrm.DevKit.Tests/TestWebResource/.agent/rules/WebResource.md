---
trigger: always_on
---

==== BẮT ĐẦU QUAN TRỌNG

# CLI LEGACY EXE PATH #
- DynamicsCrm.DevKit.Docs\CliBackup\DynamicsCrm.DevKit.Cli.exe
 
# CLI PROFILE #
- 15.TestWebResource-JS
- 16.TestWebResource-TS
- 22.DownloadWebResource

# RUN CLI PROFILE #
- Nếu nói LEGACY thì dùng CLI LEGACY EXE PATH và đọc profile để run
- Nếu không nói gì hết thì hiểu là BUILD CLI (dot net tool) để run profile

# BUILD CLI #
- taskkill /F /IM "DynamicsCrm.DevKit.Cli.exe" 2>$null
- dotnet build --configuration Release "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"