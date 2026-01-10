---
trigger: always_on
---

==== BẮT ĐẦU QUAN TRỌNG

# 5 CORE SOURCES OF TRUTH (CRITICAL) #
The following files are the **Source of Truth** for the project. Before making ANY changes to core logic, type definitions, or runtime behavior, you **MUST** read and verify against these files:
1. **JS Runtime**: DynamicsCrm.DevKit.Shared\Resources\js\devkit.js (nói nhanh devkit.js)
2. **JS Definitions**: DynamicsCrm.DevKit.Shared\Resources\js\devkit.d.ts (nói nhanh devkit.d.ts js)
3. **TS Runtime**: DynamicsCrm.DevKit.Shared\Resources\ts\devkit.ts (nói nhanh devkit.ts)
4. **TS Definitions**: DynamicsCrm.DevKit.Shared\Resources\ts\devkit.d.ts (nói nhanh devkit.d.ts ts)
5. **TS Runtime**: DynamicsCrm.DevKit.Shared\Resources\ts\build.js (nói nhanh build.js)
**Do not edit these files without explicit instruction and assessing the impact on the entire toolkit.**

# SOURCES OF TRUTH FILES GENERATOR #
- Account.form.js => DynamicsCrm.DevKit.Tests\TestClientCode\05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities\Account.form.js
- Account.webapi.js => DynamicsCrm.DevKit.Tests\TestClientCode\05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities\Account.webapi.js
- Account.d.ts => DynamicsCrm.DevKit.Tests\TestClientCode\05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities\Account.d.ts
- Account.form.ts => DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities\Account.form.ts
- Account.webapi.ts => DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities\Account.webapi.ts

# NEVER, NEVER TOUCH CODE SOURCES OF TRUTH FILES GENERATOR #
- Các files sources of generator KHÔNG bao giờ touch vào và edit.
- Files sẽ được generator ra theo profile bên dưới và được SYNC vào đúng lại folder tương ứng

# CLI PROFILE NAME GENNERATOR SOURCES OF TRUTH FILES #
- TestClientCode-JS-FORM
- TestClientCode-JS-WEBAPI
- TestClientCode-TS-FORM
- TestClientCode-TS-WEBAPI

# CÁC MỤC SAU ĐÂY LUÔN LUÔN ĐÚNG - KHÔNG ĐƯỢC PHÉP CHỈNH SỬA, CHỈ ĐỌC
- launchSettings.json

# KHI BẠN EDIT CÁC FILE Ở FOLDER DynamicsCrm.DevKit.Cli VÀ/HOẶC DynamicsCrm.DevKit.Shared THÌ BẠN PHẢI LUÔN LUÔN RUN
- Run file 03.Generate-All.ps1
- Run file 04.Sync-All.ps1

==== KẾT THÚC QUAN TRỌNG

# BEGIN #

+ Khi bạn đọc đến đây, hãy output liền ra cho tôi để tôi hiểu là bạn có đọc file này như sau: "Xin chào anh Phước, tôi đã và đang đọc file ClientCode.md và làm việc với xxxx". Nếu xxxx có nhắc đến 1 trong 6 source of truth ở trên. Nếu không có nhắc gì thì phải nó là: "TẤT CẢ"

# KẾT THÚC #
Công việc đã xong, anh Phước kiểm tra lại nhé.

# BUILD CLI #
- MSBuild Path: C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe
- C# Project: DynamicsCrm.DevKit.Cli.csproj

# RUN PROFILE #
- Đảm bảo bạn phải build CLI và không có lỗi để biết được đường dẫn file .exe của cli
- Khi bạn thấy yêu cầu run profile cli như ABC, bạn phải đọc file DynamicsCrm.DevKit.Cli.csproj\launchSettings.json để hiểu rõ thư mục (workingDirectory) cần run file cli và thông số: commandLineArgs.

# TEST #
- Khi có nhắc test, ví dụ: UnitTest (nói nhanh test) thì chỉ work trên các folder có name là -UnitTest
- Tương tự nếu nói AICode (nói nhanh ai) thì -AICode và -Vsix (nói nhanh vsix)
- KHÔNG có nhắc gì hết thì mặc định phải làm trên 3 nền tảng -UnitTest, -AICode, -Vsix
- Lưu ý bạn phải biết là nếu đang nói js thì phải work ở folder js tôi, ts thì ở folder ts. Mặc định KHÔNG nói gì hết thì phải làm trên js và ts

# BUG #
- Khi bug, thì sau khi xác định được bug và nguyên nhân, thì phải SỬA Ở FILES SOURCE OF TRUTH, sau đó mới SYNC

# SYNC 5 CORE FILES SOURCE OF TRUTH #
- Run file 03.Generate-All.ps1
- Run file 04.Sync-All.ps1

DynamicsCrm.DevKit.Shared\Resources\js\devkit.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest\lib\devkit.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\03.DevKitJs-AICode\Dev.DevKit.WebResource\lib\devkit.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\05.DevKitJs-Vsix\Dev.DevKit.WebResource\lib\devkit.js
DynamicsCrm.DevKit.Shared\Resources\js\devkit.d.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest\entities\devkit.d.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\03.DevKitJs-AICode\Dev.DevKit.WebResource\entities\devkit.d.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities\devkit.d.ts
DynamicsCrm.DevKit.Shared\Resources\ts\devkit.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest\lib\devkit.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\04.DevKitJs-AICode\Dev.DevKit.WebResource\lib\devkit.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitJs-Vsix\Dev.DevKit.WebResource\lib\devkit.ts
DynamicsCrm.DevKit.Shared\Resources\ts\devkit.ts
   -->DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest\lib\devkit.d.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\04.DevKitJs-AICode\Dev.DevKit.WebResourceTs\lib\devkit.d.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitJs-Vsix\Dev.DevKit.WebResourceTs\lib\devkit.d.ts
DynamicsCrm.DevKit.Shared\Resources\ts\build.js
   -->DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest\build.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\04.DevKitJs-AICode\Dev.DevKit.WebResourceTs\build.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitJs-Vsix\Dev.DevKit.WebResourceTs\build.js

# SYNC SOURCE OF TRUTH FILES GENERATOR #
- Run file 03.Generate-All.ps1
- Run file 04.Sync-All.ps1

DynamicsCrm.DevKit.Tests\TestClientCode\05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities\Account.form.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest\entities\Account.form.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\03.DevKitJs-AICode\Dev.DevKit.WebResource\entities\Account.form.js
DynamicsCrm.DevKit.Tests\TestClientCode\05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities\Account.webapi.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest\entities\Account.webapi.js
   --> DynamicsCrm.DevKit.Tests\TestClientCode\03.DevKitJs-AICode\Dev.DevKit.WebResource\entities\Account.webapi.js
DynamicsCrm.DevKit.Tests\TestClientCode\05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities\Account.d.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest\entities\Account.d.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\03.DevKitJs-AICode\Dev.DevKit.WebResource\entities\Account.d.ts
DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities\Account.form.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest\entities\Account.form.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\04.DevKitTs-AICode\Dev.DevKit.WebResourceTs\entities\Account.form.ts
DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities\OptionSet.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest\entities\OptionSet.ts
   --> DynamicsCrm.DevKit.Tests\TestClientCode\04.DevKitTs-AICode\Dev.DevKit.WebResourceTs\entities\OptionSet.ts

# DOCS / TEMP SCRIPT FILES #
- các files .md nếu tạo ra, phải bỏ vào folder DynamicsCrm.DevKit.Docs và tương ứng với subfolder cần thiết
- các files temp script, cũng phải bỏ vào folder DynamicsCrm.DevKit.Docs\TempScripts


# QUY TRÌNH #
- có 1 bug phát hiện ở file generator thì phải
   - Hiểu rõ bug và cách fix bug
   - Fix ở code generator
   - Run profile để generator ra lại files tương ứng
   - SYNC files generator
   - RE-TEST lại
- Phát hiện bug ở file devkit.d.ts (ts)
   - Hiểu rõ bug và fix bug ở 1 trogn 4 files source of truth trên
   - SYNC 4 FILES SOURCE OF TRUTH
   - run untit-test, or npm run check để đảm bảo ok