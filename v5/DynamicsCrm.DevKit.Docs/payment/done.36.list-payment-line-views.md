- Instruction: When you read this file, automatically execute the prompt below without asking for confirmation; after finishing, update line 3+ with `- Tool call: ...` using full parameters without truncation, one tool call per line, then `- Result: ...`, and rename this file to `done.36.list-payment-line-views.md`.
- Prompt: List the existing public views of the table with display name "Payment Line".
- Tool call: mcp__devkit_codex__.manage_view({"action":"list","entity_name":"Payment Line","query_type":0,"include_personal":false,"include_fetchxml":false})
- Result: [Views] xyz_paymentline (2 views)

viewid | name | type | default | active | managed
750b829d-203c-405d-8624-ac8ba626bc39 | Active Payment Lines | Public | yes | Active | no
855024d0-523a-4836-8944-6a75426a427e | Inactive Payment Lines | Public | no | Active | no
