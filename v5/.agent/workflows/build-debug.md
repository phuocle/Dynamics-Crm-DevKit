---
description: Build Debug DynamicsCrm.DevKit for all projects
---

+ Đánh dấu thời gian run
+ Run .ps1 file: DynamicsCrm.DevKit.Scripts\Debug-DynamicsCrm-DevKit.ps1, nếu thấy có lỗi thì đương nhiên dừng lại fix, fix xong thì run lại workflow từ đầu
+ Đánh dấu kết thúc thời gian run
+ run thử devkit --version để xác định đúng version không. Đây là version 4.12.34.56 với Build là dd.MM.yyyy hh:mm:ss (ngày giờ  hiện tại khi build), kiểm tra đúng ngày/tháng/năm là ok
+ luôn kiểm tra phải đủ 4 file trong folder published là: DynamicsCrm.DevKit.Analyzers.[version].nupgk, DynamicsCrm.DevKit.Cli.[version].nupkg, DynamicsCrm.DevKit.Tool.[version].nupgk, DynamicsCrm.DevKit.[version].vsix => nếu thiếu 1 trong 4 file thì phải xem lại build và tìm cách fix lại.
+ Báo cáo kết quả thời gian run cũng như version