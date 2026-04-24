# Step 0 - Baseline And Inventory

Priority: P0

Parallelization: làm trước tất cả. Đây là step không sửa code, chỉ tạo baseline để các agent khác đối chiếu.

## Goal

Chốt trạng thái ban đầu của repo trước khi sửa. Baseline giúp phát hiện agent nào tạo thay đổi ngoài phạm vi, và giúp so sánh issue nào đã được xử lý sau từng step.

## Ownership

Read-only toàn repo.

Không sửa file trong step này.

## Pre-Checks

```powershell
git status --short
```

Expected:

- Nếu clean: ghi nhận clean baseline.
- Nếu không clean: liệt kê file đang thay đổi và xác định file nào thuộc user/agent khác.

## Inventory Commands

```powershell
rg --files | Measure-Object
rg --files -g '!bin/**' -g '!obj/**' -g '!Coverage/**' -g '!Published/**' | Measure-Object
Get-ChildItem -Force | Select-Object Name,Mode
```

## Risk Scan Commands

```powershell
rg -n --glob '!bin/**' --glob '!obj/**' --glob '!Coverage/**' --glob '!Published/**' "webresources-t|--sdk-login|--secret|--user|--pass|Version=\"\*\"|catch\s*\{\s*\}" .
rg -n --glob '!bin/**' --glob '!obj/**' --glob '!Coverage/**' --glob '!Published/**' "clientsecret|client secret|password|crm[0-9]?\.dynamics\.com|\.pfx|\.snk|\.cer" .
rg -n "ConfigureGeneratedCodeAnalysis|BuildFromPacArgs|pacprofile|FromPac" DynamicsCrm.DevKit.Analyzers DynamicsCrm.DevKit.Shared DynamicsCrm.DevKit.UnitTests
```

## Deliverable

Tạo một short note trong response hoặc issue tracker, không nhất thiết lưu vào repo:

- Current worktree state.
- Count/list của stale CLI options.
- Count/list của wildcard package versions.
- Count/list của possible secret/cert hits.
- Count/list của silent catches.

## Done Criteria

- Có baseline rõ trước khi sửa.
- Không có file bị thay đổi.
- Các agent tiếp theo biết file/area nào đang có rủi ro.

