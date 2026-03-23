---
description: Build Release DynamicsCrm.DevKit for all projects with current timestamp
---

> [!IMPORTANT]  
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> GỬI TỚI AI AGENT: Bạn KHÔNG ĐƯỢC chỉ in ra văn bản các bước. Bạn PHẢI SỬ DỤNG TOOL để thực thi TỪNG LỆNH một thay cho người dùng.
> **RẤT QUAN TRỌNG:** Tập lệnh build (.ps1) cần rất nhiều thời gian để hoàn thành. Bạn PHẢI DÙNG TOOL để kiểm tra tiến trình (process status) và CHỜ ĐỢI cho đến khi tập lệnh chạy xong 100% TRƯỚC KHI chuyển sang các bước Verify. Nếu bạn không chờ, các bước Verify sẽ báo lỗi hoặc báo thiếu file `nupkg`/`vsix` (vì nó chưa build xong), dẫn tới output sai hoàn toàn. Hãy làm tuần tự, chậm mà chắc.

// turbo-all

1. Record the start time
2. Run the PowerShell script: `DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-CurrentDate.ps1`. The script explicitly discovers and forcefully kills any running `DynamicsCrm.DevKit.Cli` and `devkit` processes (such as the running MCP server) before building to avoid file lock access-denied errors. It builds all projects in Release mode without running unit tests. The version comes from `DevKit.ReleaseConfig.json`, but the date/time is dynamically overridden with the current date/time. If any errors occur, stop and fix them, then restart this workflow from the beginning.
3. Record the end time
4. Verify the build:
   - Run `devkit --version`. Expected version format is `4.12.34.56` (from `DevKit.ReleaseConfig.json`) with Build timestamp in `dd.MM.yyyy HH:mm:ss` format (the exact current date/time when built). Confirm the date/month/year matches today.
   - Run `devkit-tool --help`. Expected output shows the `devkit-tool` banner with version `4.12.34.56` and list of available commands.
5. Verify that all 4 files exist in the `published` folder:
   - `DynamicsCrm.DevKit.Analyzers.[version].nupkg`
   - `DynamicsCrm.DevKit.Cli.[version].nupkg`
   - `DynamicsCrm.DevKit.Tool.[version].nupkg`
   - `DynamicsCrm.DevKit.[version].vsix`   
   If any file is missing, investigate the build output and fix the issue.
6. Report the total runtime and verified version
