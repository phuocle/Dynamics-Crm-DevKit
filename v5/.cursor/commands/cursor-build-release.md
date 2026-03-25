# Build Release - DynamicsCrm.DevKit

> [!IMPORTANT]  
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> GỬI TỚI AI AGENT: Bạn KHÔNG ĐƯỢC chỉ in ra văn bản các bước. Bạn PHẢI SỬ DỤNG TOOL để thực thi TỪNG LỆNH một thay cho người dùng.
> **RẤT QUAN TRỌNG:** Lệnh `/unit-test` và tập lệnh build (.ps1) cần rất nhiều thời gian để hoàn thành. Bạn PHẢI DÙNG TOOL để kiểm tra lệnh đang chạy và CHỜ ĐỢI cho đến khi lệnh chạy xong 100% (status DONE) TRƯỚC KHI gọi tool làm bước tiếp theo (nhất là các bước Verify). Nếu bạn chạy một lèo không chờ, kết quả Verify sẽ fail hoàn toàn. Phải đợi dứt điểm lệnh này mới chạy lệnh kia!


1. Record the start time
2. **Run `/unit-test` first**: Execute the `/unit-test` workflow to run all unit tests and generate a code coverage report. BẮT BUỘC phải thực thi bước này. If any tests fail, stop and fix them before proceeding. Report the code coverage summary and open the HTML coverage report (`DynamicsCrm.DevKit.UnitTests\CoverageReport\index.html`) in the browser for the user to review before continuing.
3. Run the PowerShell script: `DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit.ps1`. The script explicitly discovers and forcefully kills any running `DynamicsCrm.DevKit.Cli` and `devkit` processes (such as the running MCP server) before building to avoid file lock access-denied errors. It builds all projects in Release mode using strictly the exact version and exact date/time configuration directly from `DevKit.ReleaseConfig.json`. If any errors occur, stop and fix them, then restart this workflow from the beginning.
4. Record the end time
5. Verify the build:
   - Run `devkit --version`. Expected version format is `4.12.34.56` (from `DevKit.ReleaseConfig.json`) with Build timestamp `31.12.2026 23:59:59` (exact date/time matching `DevKit.ReleaseConfig.json`).
   - Run `devkit-tool --help`. Expected output shows the `devkit-tool` banner with version `4.12.34.56` and list of available commands.
6. Verify that all 4 files exist in the `published` folder:
   - `DynamicsCrm.DevKit.Analyzers.[version].nupkg`
   - `DynamicsCrm.DevKit.Cli.[version].nupkg`
   - `DynamicsCrm.DevKit.Tool.[version].nupkg`
   - `DynamicsCrm.DevKit.[version].vsix`   
   If any file is missing, investigate the build output and fix the issue.
7. Report the total runtime and verified version
