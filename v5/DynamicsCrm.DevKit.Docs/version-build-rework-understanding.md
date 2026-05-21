# Version/Build Rework - Understanding

## Muc tieu

1. `4.12.34.56` la version neo on dinh trong source.
2. Debug build va release build khong replace version moi lan build nua.
3. Build-time replacement chi con la phan ngay gio build.
4. Neu sau nay muon doi version, tao rieng mot script/file doi version thu cong, khong nam trong luong build.

## Version

- Version hien tai trong source la `4.12.34.56`.
- Tat ca file lien quan version cua DevKit, VSIX, CLI, Tool, Analyzer, templates, project templates... dung chung version neo nay.
- `Debug` khong quan tam version theo nghia build nao cung chap nhan, nhung source van giu `4.12.34.56`.
- `Release` cung khong tu dong replace `4.12.34.56` thanh version khac trong luc build.
- Khi can update version tu `4.12.34.56` len version moi, lam bang script rieng, vi du `Change-Version.ps1`.
- Script doi version chi chay khi minh chu dong goi, khong duoc `Release-DynamicsCrm-DevKit.ps1` hay debug script goi ngam.

## Build-Time Replacement

Build chi replace ngay gio build:

- Debug/current-date build lay ngay gio hien tai.
- Release build lay ngay gio release trong config.
- Token ngay gio hien tai van la `xxxx.yy.zz HH.mm.ss`.
- Danh sach file duoc replace phai la danh sach ro rang trong config, khong scan dong toan repo.

Khong replace trong build:

- Khong replace `4.12.34.56`.
- Khong replace `1.0.0.0`.
- Khong replace `x.xx.xx.xx`.
- Khong grep toan bo repository de tim version.

## Config

`DynamicsCrm.DevKit.Scripts/DevKit.ReleaseConfig.json` nen la single source cho:

- `version`: version neo hien tai, vi du `4.12.34.56`.
- release date/time cho release build.
- danh sach file can replace date trong luc build.

Config khong nen co danh sach scan dong version replacement cho build.

## Files Khong Duoc Cham Vao Khi Build

Build script khong duoc replace, restore, hay scan cac file trong:

- `DynamicsCrm.DevKit.Tests/`
- `DynamicsCrm.DevKit.UnitTests/`
- `Coverage/`
- `bin/`
- `obj/`
- `Published/`

Ly do: cac folder test/coverage/output khong nam trong release build package, dung vao se lam build cham va tao rat nhieu git changes khong can thiet.

## Restore Sau Build

Sau build, script dung `git restore` de undo cac file da bi build-time replace.

Pham vi restore chi la:

- cac file date replacement duoc liet ke ro trong config.

Khong restore bang cach:

- scan toan repo theo version.
- scan test fixtures.
- restore file khong lien quan build.

## Huong Toi Toc Do Build

Build script nen tranh cac viec lam build cham khong can thiet:

- khong restore full solution neu chi can package projects.
- khong build test projects.
- khong scan `.Tests`.
- khong `Clean;Build` mac dinh neu khong bat buoc.
- `Clean` chi nen la option khi minh chu dong can clean build.

## Cach Toi Se Lam Sau Khi Duoc Review

1. Undo/giu sach tat ca git changes cu.
2. Sua config de chi giu version neo, release date, va date replacement list.
3. Sua debug script: chi replace date bang current date/time.
4. Sua release script: chi replace date bang date trong config.
5. Tao script doi version rieng, vi du `Change-Version.ps1`.
6. Sua restore helper de restore dung cac file date replacement trong config.
7. Verify bang parse PowerShell/JSON va check khong co `.Tests` trong replacement list.
8. Chi run build khi anh yeu cau sau khi review xong.
