# Proposal: `manage_record_file` — file & image column tool (MCP)

> Rename note (13.08.2026): tool ban đầu tên `manage_file`, đổi thành `manage_record_file` sau khi implement xong — sibling thật của nó là `manage_record` (data record), không phải `upsert_column` (metadata). Doc này đã cập nhật tên mới; câu trả lời Q&A ở §7 ghi theo tên mới.

> Nguồn nghiên cứu: [Files and images overview](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/files-images-overview?tabs=sdk), [Use file column data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/file-column-data?tabs=sdk), [Use image column data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/image-column-data?tabs=sdk) (MS Learn, SDK tab).

## 1. Hiện trạng — gap trong DevKit MCP

- Không tool nào đụng tới file/image column. Grep toàn bộ `DynamicsCrm.DevKit.Cli`: chỉ `GetSolutionComponentsTool` (liệt kê fileattachment như solution component type) và `TaskServer` (CLI task, không phải MCP).
- Cách duy nhất hiện tại là `execute_webapi` raw — và nó **không block** endpoint file/image (`{entity}({id})/{column}`, `/$value`, chunked PATCH với `x-ms-chunk-size` + `Location` continuation). AI tự làm chunked upload qua raw Web API rất dễ sai (block id base64, block size đồng nhất, commit danh sách block theo đúng thứ tự).
- `manage_record` không hỗ trợ binary column (file/image value là `byte[]` + companion metadata, không nằm trong CRUD record thường).

## 2. Kiến thức Dataverse nền (facts từ MS Learn)

### File column

- Column type `File`, metadata: `FileAttributeMetadata.MaxSizeInKB` (tối đa 131072 KB = 128 MB ở mức column; API chunked xử lý được tới 10 GB, nhưng client controls Power Apps chỉ support 128 MB).
- Retrieve record trả companion fields: `{column}_fileid`, `{column}_filename`, `{column}_filesizeinbytes`, `{column}_mimetype` — **không trả binary**.
- Upload (SDK, mọi kích thước): `InitializeFileBlocksUploadRequest` (Entity, EntityAttributeName, FileName) → response `FileContinuationToken` → lặp `UploadBlockRequest` (BlockId = base64 unique, BlockData ≤ **4 MB**, BlockLength) → `CommitFileBlocksUploadRequest` (FileContinuationToken + `BlockList` đúng thứ tự) → response trả `FileId`.
- Web API: file < 128 MB → 1 `PATCH {entity}({id})/{column}` với binary body; lớn hơn → chunked PATCH với header `x-ms-chunk-size` (bội số 4 MB), đọc `Location` header để tiếp tục.
- Download: `InitializeFileBlocksDownloadRequest` → `DownloadBlockRequest` (Offset/BlockLength, dùng `FileContinuationToken`). Partial chunk download bị từ chối nếu `FileAttributeMetadata.IsChunkingSupported = false`.
- Delete: `DELETE .../{column}` (Web API) hoặc set `null` rồi Update; SDK có message `DeleteFile` dùng `FileId`.

### Image column

- Mỗi table có 1 **primary image** (`IsPrimaryImage = true`, OOB là `entityimage`); khi **create** record chỉ set được primary image, set image column khác lúc create → error.
- 2 tầng lưu trữ: **thumbnail** (crop vuông, tối đa 144×144, luôn lưu relational, ≤ 30 MB) và **full-sized image** (chỉ khi `ImageAttributeMetadata.CanStoreFullImage = true`, lưu file storage, tới 10 GB). Upload image > `MaxSizeInKB` khi không CanStoreFullImage → `ProcessImageFailure 0x80072553`.
- Type cho phép: gif, jpeg, tiff, bmp, png. Sai type → `ProcessImageFailure 0x80072553` ("Update image properties failed...").
- Download: mặc định lấy **thumbnail**; full image qua Web API `GET .../{column}/$value?size=full`; có companion string column chứa relative URL download.
- Delete: `DELETE .../{column}` (204) hoặc set null.

### Org-level MIME policy

- `organization.blockedmimetypes` / `organization.allowedmimetypes`. Upload bị chặn → `MimeTypeBlocked 0x80072522`; không nằm trong allow list → `MimeTypeNotInAllowedList 0x80072521`. Tool nên catch và surface đúng 2 error này với hint rõ.

## 3. Đề xuất tool `manage_record_file`

Category: **standard** (mutation). Tên cố ý bao cả image — tool auto-detect column type từ metadata.

### Actions

| Action     | Mode     | Mô tả                                                                                                                                                                                              |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `info`     | read     | Column metadata (File/Image, MaxSizeInKB, IsPrimaryImage, CanStoreFullImage, IsChunkingSupported) + value hiện tại (fileid, filename, filesizeinbytes, mimetype; image: có full hay chỉ thumbnail) |
| `upload`   | mutation | Upload file vào file/image column. SDK block pattern (4 MB blocks) cho mọi kích thước — không cần phân nhánh 128 MB của Web API                                                                    |
| `download` | read\*   | Download về local path (server-side write) hoặc trả base64 khi nhỏ. Image: param `full_size` để lấy full image thay thumbnail                                                                      |
| `delete`   | mutation | Xóa value của column (không xóa record)                                                                                                                                                            |

\*download ghi file xuống đĩa local của máy chạy MCP — vẫn tính read-only với Dataverse.

### Params

```
action        REQUIRED: 'info' | 'upload' | 'download' | 'delete'
table         REQUIRED: logical name (dùng DisplayNameFirstResolver nếu có)
record_id     REQUIRED: GUID (hoặc key/URL nếu tái dùng parse_record_url)
column        REQUIRED: logical name của file/image column
file_path     upload: đường dẫn local đọc file (CLI chạy local → đây là lợi thế lớn so với base64)
              download: đường dẫn local ghi file (mặc định %TEMP%\devkit-downloads\)
content_base64 upload: thay file_path cho file nhỏ (< 1 MB) khi AI không có file trên đĩa
file_name     upload: override tên file (mặc định lấy từ file_path)
full_size     download image: true = full image ($value?size=full), false/mặc định = thumbnail
```

### Output structured (DTO null-aware, rule §2.4 refactor3)

`ManageRecordFileResult`: Action, Table, RecordId, Column, ColumnType ("File"|"Image"), FileId, FileName, FileSizeBytes, MimeType, IsThumbnail (image), DownloadPath, BlocksUploaded (upload lớn), DurationMs. **Tuyệt đối không** đưa binary/base64 vào Content/structured (rule §3.15 — tương tự secret masking).

## 4. Mapping rules refactor3 (bắt buộc khi implement)

- 1 try-catch entry point; `Error(msg, hint?)` cho validation/metadata fail; `ThrowException` cho fault.
- Mutation (`upload`/`delete`) tôn trọng `_options.DryRun` → `DryRun(summary, structured)` mô tả exact target (table, record, column, file name, size).
- Validate trước khi đụng Dataverse: column tồn tại + đúng type (sai type → `Error` "not a file/image column", mirror lỗi SDK sample); record tồn tại.
- Upload: validate extension/MIME client-side theo image types (gif/jpeg/tiff/bmp/png) cho image column; surface `MimeTypeBlocked`/`MimeTypeNotInAllowedList` với hint check org settings.
- `execute_webapi`: thêm block `/{column}` binary patterns? **Cần probe** — endpoint file là generic (`{entityset}(id)/{columnname}` + `/$value`), không pattern tĩnh. Đề xuất: block `/$value` suffix và chunked upload header, redirect message sang `manage_record_file`.
- Helper mới `Helper/FileColumnTransferHelper.cs`: Initialize/Upload/Commit blocks + Initialize/Download blocks (SDK messages). Update/Delete record-level tái dùng `DataverseMutationExecutor`.
- Content 1 dòng: `[Success] Uploaded 'report.pdf' (2.4 MB, 1 block) to account.new_document.` — chi tiết vào structured.

## 5. Test plan (org 🟢DEVKITV4, khi được duyệt)

Probe trước: table `all_in_one` **KHÔNG được touch** (rule refactor3 §0) — cần chọn table test khác có file/image column, hoặc tạo column mới qua `upsert_column` rồi xóa sau.

1. `info` trên column có data + column rỗng.
2. `upload` file nhỏ (1 block) + file > 4 MB (multi-block) → verify bằng `info` (filename/size khớp) và download lại so hash.
3. `download` file + image thumbnail + image `full_size=true` (cần column CanStoreFullImage).
4. `delete` → `info` xác nhận rỗng.
5. Error paths: column không tồn tại / column sai type (text column) / record không tồn tại / image sai loại file (upload .exe vào image column → ProcessImageFailure) / download khi chưa có data.
6. Test-call `testcall/{N}.manage_record_file.md` đúng format 4 H1.

## 6. Out of scope (v1)

- `annotation`/`attachment` (note attachments legacy) — pattern khác (body base64 trong record), nếu cần làm tool/phase riêng.
- Upload/download nhiều record bulk.
- Set image lúc **create** record (giới hạn primary-image-only của platform — có thể bổ sung vào `manage_record.create` sau).

## 7. Câu hỏi cần anh Phước quyết trước khi code

1. Tên tool: `manage_record_file` (bao cả image, auto-detect) hay tách `manage_image` riêng? => aP trả lời: manage_record_file ok, bao gồm cả file và image (tự động nhận diện hoặc có para khác để xác định)
2. `download` mặc định ghi ra đĩa local có chấp nhận không (MCP server chạy máy user), hay bắt buộc trả base64 (giới hạn size)? => aP trả lời: lưu ở folder backup đó (đã và đang là .devkit), khi đó cần xem các tool khác truyền folder .devkit vào thế nào và khi đó lưu theo dạng .devkit\manage_record_file\account\primary name of entity\file.xxx, check tồn tại, nếu tồn tại thì tự động thêm số 2 vào, nếu 2 thì thành 3 và next .... đến khi save được thôi
3. `execute_webapi` block pattern file/image ở mức nào: chỉ block `/$value`, hay cả PATCH binary generic (khó pattern)? => aP trả lời, phải block lại
4. Table test trên DEVKITV4 dùng table nào (không được touch `all_in_one`) — có sẵn table nào có file/image column không, hay tạo mới rồi cleanup? => aP trả lời: dùng mcp tạo table mới: TestFile, sau đó tạo column tương ứng: File, Image. bỏ vào solution all_in_one. Cuối cùng tạo 1 file dummay abc.txt gì đó để upload lên, và tìm 1 file trên mạng .png gì đó để upload lên (lưu ý có thể support http để tự download và upload luôn)
5. Annotation attachments có gom vào tool này luôn không, hay để phase khác hẳn? => aP trả lời, bỏ qua, làm sau
