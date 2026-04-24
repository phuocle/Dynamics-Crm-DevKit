# Step 1 - Secret And Credential Hygiene

Priority: P0

Parallelization: nên làm sớm nhất sau baseline. Có thể chia nhỏ theo nhóm file, nhưng cần một người giữ source-of-truth về placeholder naming để tránh mỗi agent dùng một kiểu.

## Goal

Loại bỏ credential thật hoặc thật-giống khỏi tracked files, giảm rủi ro lộ secret, và làm rõ rằng cơ chế encryption hiện tại không phải secret storage an toàn.

## Why This Comes First

Nếu credential đã từng được dùng thật, việc thay text trong repo chưa đủ. Cần rotate secret/cert trước hoặc song song. Các step sau có thể chỉnh docs/tests/templates, nhưng không nên tiếp tục lan truyền credential cũ.

## Ownership

Primary files/areas:

- `DynamicsCrm.DevKit.Cli/Properties/launchSettings.json`
- `DynamicsCrm.DevKit.Tests/**/*.json`
- `DynamicsCrm.DevKit.Tests/**/*.config`
- `DynamicsCrm.DevKit.Tests/**/*.bat`
- `DynamicsCrm.DevKit.UnitTests/**/*.json`
- `DynamicsCrm.DevKit.Shared/Helper.cs`
- tracked `.pfx`, `.snk`, `.cer` under tests/templates

Do not change:

- Auth builder behavior unless explicitly required.
- Connection parsing behavior unless a test proves it depends on real secret.
- Production signing assets unless owner confirms they are disposable/test-only.

## Standard Placeholders

Use consistent placeholders:

| Data Type | Placeholder |
|---|---|
| Dataverse URL | `https://contoso.crm.dynamics.com` |
| Client ID | `00000000-0000-0000-0000-000000000000` |
| Tenant ID | `11111111-1111-1111-1111-111111111111` |
| Client Secret | `__DEVKIT_CLIENT_SECRET__` |
| Username | `user@contoso.onmicrosoft.com` |
| Password | `__DEVKIT_PASSWORD__` |
| PAC profile | `DEVKIT_TEST_PROFILE` |
| Domain | `CONTOSO` |

Không dùng placeholder trông như secret thật.

## Detailed Tasks

### 1.1 Find All Secret-Looking Text

```powershell
rg -n --glob '!bin/**' --glob '!obj/**' --glob '!Coverage/**' --glob '!Published/**' "clientsecret|client secret|clientid|tenant|password|username|crm[0-9]?\.dynamics\.com|AuthType|Url=" .
```

Review từng hit. Không paste secret thật vào issue/comment.

### 1.2 Sanitize Launch Profiles

File:

- `DynamicsCrm.DevKit.Cli/Properties/launchSettings.json`

Expected changes:

- Replace real-looking org URLs, client IDs, client secrets, usernames/passwords.
- Remove profiles that cannot run without private environment if they are not needed.
- Prefer env var references in comments/docs if supported by launcher flow.

Acceptance:

- Launch profiles remain useful examples.
- No secret or private org URL remains.

### 1.3 Sanitize Test Fixtures

Files:

- `DynamicsCrm.DevKit.Tests/**/*.json`
- `DynamicsCrm.DevKit.Tests/**/*.config`
- `DynamicsCrm.DevKit.Tests/**/*.bat`
- `DynamicsCrm.DevKit.UnitTests/**/*.json`

Expected changes:

- Replace credentials with standard placeholders.
- Keep shape/schema identical so tests/templates still exercise parsing.
- If a fixture intentionally tests encrypted values, replace with newly generated fixture values that encode placeholders only.

Acceptance:

- Tests still read the same keys.
- No fixture points to a real tenant/org/user.

### 1.4 Audit Binary Keys And Certificates

Command:

```powershell
git ls-files | Select-String -Pattern "\.pfx$|\.snk$|\.cer$"
```

For each file, classify:

- disposable fixture;
- template signing key;
- production-like asset;
- unknown.

Expected changes:

- Rename or document disposable fixture keys where helpful.
- Remove unknown/prod-like assets only after owner confirms they are not required.
- If kept, add a nearby README or comment explaining they are test-only and contain no production trust.

### 1.5 Clarify Encryption Semantics

File:

- `DynamicsCrm.DevKit.Shared/Helper.cs`

Finding:

- Current encryption uses hardcoded passphrase/IV, so it is reversible by anyone with source access.

Expected changes:

- If behavior must remain compatible: add a concise comment/doc naming this as legacy obfuscation, not secure storage.
- If allowed to improve behavior: design a migration to Windows DPAPI, Windows Credential Manager, Azure Key Vault, or env vars. Do not silently break old config files without migration.

Recommended small first change:

- Keep runtime behavior unchanged.
- Update docs/comments to prevent false security assumptions.
- Create a follow-up task for real secret storage migration.

## Verification

Search text files:

```powershell
rg -n --glob '!bin/**' --glob '!obj/**' --glob '!Coverage/**' --glob '!Published/**' "clientsecret|client secret|password|crm[0-9]?\.dynamics\.com|[A-Za-z0-9_\-]{30,}" .
```

Search tracked key/cert assets:

```powershell
git ls-files | Select-String -Pattern "\.pfx$|\.snk$|\.cer$"
```

Check worktree:

```powershell
git status --short
```

## Workflows

- Docs/fixture text only: no build required.
- Shared code comments only: no build required, but `/build-cli` is acceptable if owner wants confidence.
- Shared behavior change: `/build-cli`; add `/build-vsix` if VSIX consumes the changed behavior.
- Tests added/changed: `/unit-test`.

## Done Criteria

- No real or real-looking secret remains in tracked text files.
- Remaining `.pfx`, `.snk`, `.cer` files are classified and documented as test/template assets.
- `Helper.EncryptString`/`DecryptString` are not represented as strong secret protection.
- Any potentially exposed secret/cert has a rotate action outside the repo.

## Suggested Agent Prompt

Use this prompt when delegating:

```text
You own Step 1 Secret And Credential Hygiene. Only edit files needed to sanitize credentials and clarify secret-storage wording. Do not print actual secret values. Use the placeholders defined in 01-Secret-Credential-Hygiene.md. Do not run dotnet build/test directly. Report files changed, verification searches run, and any credential/cert that still needs owner decision.
```

