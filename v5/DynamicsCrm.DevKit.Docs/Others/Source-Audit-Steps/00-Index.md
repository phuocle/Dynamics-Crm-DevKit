# Source Audit Step Index

Date: 2026-04-24

Folder này tách plan tổng thành từng work order nhỏ để có thể giao cho nhiều AI/agent làm song song. Mỗi file là một step độc lập tương đối, có dependency, ownership, checklist, verify command và workflow cần chạy.

## Files

| Step | File | Priority | Parallel? |
|---|---|---|---|
| 0 | `00-Baseline-Inventory.md` | P0 | Làm trước tất cả |
| 1 | `01-Secret-Credential-Hygiene.md` | P0 | Nên làm trước; có thể chia nhỏ theo fixture group |
| 2 | `02-CLI-Args-Help-Launch-Profiles.md` | P0 | Sau Step 1; tránh chạy song song với Step 3/4 nếu đụng CLI help |
| 3 | `03-FromPac-Generated-Arguments.md` | P1 | Sau Step 2 hoặc phối hợp chặt với Step 2 |
| 4 | `04-Stale-Commands-MCP-Tool-Counts.md` | P1 | Có thể song song với Step 5/6, tránh đụng `SpectreLog` cùng Step 2 |
| 5 | `05-Analyzer-Solution-Config.md` | P1 | Có thể làm song song, ownership analyzer files |
| 6 | `06-Dependency-Pinning-Warning-Audit.md` | P2 | Có thể làm song song, ownership project/package files |
| 7 | `07-Silent-Catch-Observability.md` | P2 | Không chạy song song trên cùng file với Step 8 |
| 8 | `08-MCP-God-File-Refactor.md` | P3 | Làm sau khi Step 4/7 ổn; chia từng MCP tool |
| 9 | `09-Fixture-Hygiene-Test-Data-Strategy.md` | P2 | Sau Step 1; tránh sửa cùng fixtures cùng lúc |
| 10 | `10-Documentation-Workflow-Alignment.md` | P2 | Có thể song song sau khi Step 2/4 chốt wording |
| 11 | `11-Final-Verification-Matrix.md` | P0 | Làm cuối |

## Recommended Parallel Waves

### Wave A - Không song song quá nhiều

1. Step 0 - baseline inventory.
2. Step 1 - secret hygiene.

Lý do: các step sau cần biết credential nào đã sanitize, placeholder nào được dùng, và fixture nào còn được giữ.

### Wave B - Có thể chia 3-4 agent

- Agent CLI contract: Step 2 + Step 3.
- Agent MCP docs/counts: Step 4.
- Agent analyzer: Step 5.
- Agent dependencies: Step 6.

Lưu ý: Step 2 và Step 4 cùng có thể đụng `SpectreLog.cs`, nên nếu chạy song song thì một agent chỉ sửa CLI auth/options, agent còn lại chỉ sửa MCP count hoặc chờ merge.

### Wave C - Sau khi contract đã ổn

- Step 7 - silent catch triage, chia theo folder hoặc task.
- Step 8 - MCP refactor, chia theo từng tool file.
- Step 9 - fixture hygiene, chia theo fixture group.
- Step 10 - docs alignment.

Không giao Step 7 và Step 8 cho cùng một file cùng lúc. Ví dụ nếu một agent refactor `ManageViewTool.cs`, agent silent-catch không sửa file đó trong cùng lượt.

### Wave D - Final

- Step 11 - final verification matrix.

## Standard Agent Instructions

Khi giao một step cho AI/agent khác, đưa kèm các rule này:

- Không dùng `git add`, `git commit`, `git push`.
- Không chạy `dotnet build` hoặc `dotnet test` trực tiếp.
- Chỉ chạy workflow repo: `/build-cli`, `/build-vsix`, `/build-analyzer`, `/build-tool`, `/unit-test`.
- Dùng PowerShell.
- Không in lại secret thật trong output.
- Không sửa ngoài ownership của step nếu không cần.
- Nếu gặp thay đổi từ agent khác, không revert; đọc và phối hợp.

## Output Expected From Each Agent

Mỗi agent nên trả về:

- Files changed.
- Behavioral change.
- Verify commands/workflows đã chạy.
- Commands/workflows không chạy được và lý do.
- Residual risks hoặc follow-up.

