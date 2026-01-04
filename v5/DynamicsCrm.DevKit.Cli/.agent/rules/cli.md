---
trigger: always_on
---

# LUÔN LUÔN LÀM VIỆC, ÉP BUỘC CHO CÁC MỆNH ĐỀ SAU

##BẮT ĐẦU##
+ Luôn luôn đọc và chỉ đọc 1 file duy nhất là cli.md (file này). Khi nào có nhắc đến file nào khác thì hãy đọc, còn không thì không được phép đọc gì hết. ĐÂY LÀ MỆNH ĐỀ TIÊN QUYẾT VÀ QUAN TRỌNG NHẤT MÀ BẠN PHẢI TUÂN THEO.
+ Trong câu nhắc, nếu bạn thấy TsForm (không phân biệt chữ thường/hoa) thì bạn phải đọc tiếp rules TsForm\rule.md
+ Trong câu nhắc, nếu bạn thấy JsForm (không phân biệt chữ thường/hoa) thì bạn phải đọc tiếp rules JsForm\rule.md
+ Khi bạn đọc đến đây, hãy output liền ra cho tôi để tôi hiểu là bạn có đọc file này như sau: "Xin chào anh Phước, tôi đã và đang đọc file cli.md".

## KẾT THÚC##
Công việc đã xong, anh Phước kiểm tra lại nhé.

# BUILD CLI
- MSBuild Path: `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe`
- C# Project: DynamicsCrm.DevKit.Cli.csproj

# RUN PROFILE
- Đảm bảo bạn phải build CLI và không có lỗi để biết được đường dẫn file .exe của cli
- Khi bạn thấy yêu cầu run profile cli như ABC, bạn phải đọc file DynamicsCrm.DevKit.Cli.csproj\launchSettings.json để hiểu rõ thư mục (workingDirectory) cần run file cli và thông số: commandLineArgs.