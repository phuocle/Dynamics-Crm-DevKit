- Instruction: When you read this file, automatically execute the prompt below without asking for confirmation; after finishing, update line 3+ with `- Tool call: ...` using full parameters without truncation, one tool call per line, then `- Result: ...`, and rename this file to `done.33.list-payment-views.md`.
- Prompt: List the existing public views of the table with display name "Payment".
- Tool call: mcp__devkit_codex__.manage_view({"action":"list","entity_name":"Payment","query_type":0,"include_personal":false,"include_fetchxml":false})
- Result: [Views] xyz_payment (2 views)

viewid | name | type | default | active | managed
--- | --- | --- | --- | --- | ---
e1d00697-3294-4641-a8e2-aee9e90ab42e | Active Payments | Public | yes | Active | no
82cbcd64-93e2-43bd-9ff5-8a3a503e9441 | Inactive Payments | Public | no | Active | no
