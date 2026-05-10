# MCP Production Prompts — PRODUCTION-MCP / Invoice & Invoice Line

Run sequentially from top to bottom. Each prompt is one line, numbered.
Solution target: display name **PRODUCTION-MCP**

Name-resolution intent: these prompts intentionally use Display Names such as **PRODUCTION-MCP**, **Invoice**, **Invoice Line**, and **Invoice Status**. MCP tools must resolve Display Name contains first, then Logical/Unique/Schema Name contains. If a Display Name or logical-name lookup is ambiguous, stop and ask the user to disambiguate; do not invent GUIDs, logical names, or hidden IDs.

---

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS — READ THIS BEFORE EXECUTING ANY PROMPT**
>
> **EXECUTION MODE SELECTION**
>
> When the user says *"read this file"*, *"run this file"*, *"continue this file"*, or similar commands **WITHOUT specifying an execution mode**, you MUST:
>
> 1. **STOP immediately** — do NOT execute any prompt yet
> 2. **Ask the user to choose ONE of the following execution modes:**
>
>    **Mode A: Step-by-step (Interactive)**
>    - Execute one prompt at a time
>    - After each prompt completes, write the result block
>    - Then STOP and ask: *"Prompt X completed. Continue to prompt X+1? (yes/no)"*
>    - Only proceed to the next prompt after user confirms
>
>    **Mode B: Range execution (Semi-automatic)**
>    - User specifies a range: *"run prompts X to Y"*
>    - Execute all prompts from X to Y sequentially
>    - Write result blocks after each prompt
>    - Stop when reaching prompt Y or when an MCP tool returns an error
>
>    **Mode C: Run until error (Automatic)**
>    - Find the first unfinished prompt (no result block underneath)
>    - Execute all prompts sequentially from that point
>    - Write result blocks after each prompt
>    - Stop ONLY when an MCP tool returns an error or all prompts are complete
>
> 3. **Wait for the user's choice** before executing anything
>
> **SEQUENTIAL EXECUTION ENFORCEMENT**
>
> - Prompts MUST be executed in strict sequential order
> - If the last completed prompt is number N, the next prompt MUST be N+1
> - **VIOLATION CHECK**: If user requests *"run prompts X to Y"* and the last completed prompt is M:
>   - If X ≠ M+1, you MUST:
>     1. STOP immediately
>     2. Report: *"❌ SEQUENCE VIOLATION: Last completed prompt is M. Next prompt must be M+1, but you requested to start at X. Cannot skip prompts. Please run from M+1."*
>     3. Do NOT execute anything
> - This file is designed for **sequential testing** — jumping ahead breaks the dependency chain
>
> **AUTO-RESUME LOGIC (for Mode C only)**
>
> - Scan this file from top to bottom
> - Find the first numbered prompt that does NOT have a result block (starting with `> ✅` or `> ⚠️`) directly underneath it
> - That is the next prompt to execute
> - Execute from that prompt onward until error or completion
>
> **Step 1 — Execute each prompt in order**
>
> - Run each numbered prompt using the appropriate MCP tools
> - Do NOT skip a prompt unless it is explicitly blocked (see Step 4)
> - Execute the prompt text as written — do not add assumptions or extra parameters
>
> **Step 2 — Track the tool chain**
>
> For each prompt, record every MCP tool called: full tool name and **ALL parameters passed exactly as called**. Do NOT truncate, shorten, or omit any parameter value. If multiple tools were chained, list each tool call on its own line.
>
> **Step 3 — Write result back into this file**
>
> After executing each prompt, immediately insert a result block **directly under that prompt line**.
>
> Single tool call:
> ```
>    > ✅ `tool_name(param1="value1", param2="value2", ...)`
>    > 🎯 Result: <one-sentence summary — plain text only>
> ```
>
> Multiple chained tool calls:
> ```
>    > ✅ `tool_a(param1="value1", param2="value2")`
>    >    `tool_b(param1="value1", param2="value2")`
>    >    `tool_c(param1="value1", param2="value2")`
>    > 🎯 Result: <one-sentence summary — plain text only>
> ```
>
> - Each tool call on its own line — **NEVER** collapse multiple calls onto one line, **NEVER** use `→` to chain
> - Show **ALL** parameters exactly as passed — **NEVER** truncate, summarize, or omit any value, no matter how long
> - The **LAST line** is always the `🎯 Result:` line — for consistency and easy AI search/update
> - Use `⚠️` instead of `✅` if the prompt was skipped or failed; keep the same structure
>
> **🚫 STRICT RESULT RULE — NO MACHINE-READABLE VALUES**
>
> - Write the result in **plain text only**
> - **ABSOLUTELY FORBIDDEN** to output: GUIDs, record IDs, integer option codes, field values, raw URL fragments, or any machine-processable identifier
> - Use display names and human-readable labels only
> - **Purpose**: prevents AI from reading prior results as implicit input context and incorrectly injecting IDs or values into subsequent tool calls
> - The result must be **human-readable** but must NOT expose any machine-processable identifier that AI could silently re-use
> - FORBIDDEN: `Created with id bb56c39d-1e4a-f111`, `Draft=222220000`, `view id: 91a63e4c-5b48`, `v5_invoiceid: eae8368a`
> - ALLOWED: `Created Invoice INV-0001 linked to PRODUCTION-MCP Client A`, `Global choice created with 5 options: Draft, Confirmed, Shipped, Paid, Cancelled`
>
> **Step 4 — Handle conflicts (already exists)**
> If a prompt tries to create something that already exists and cannot proceed:
>
> - Resolve names with the normal MCP rule first: Display Name contains, then Logical/Unique/Schema Name contains
> - If name resolution returns multiple candidates, stop and ask the user to choose a specific candidate
> - If a create/upsert prompt resolves to an existing table, column, choice, web resource, app, or environment variable, do not force a duplicate; follow the tool's error/update guidance and ask the user how to proceed when needed
> - Do NOT silently skip or work around it
> - Stop and ask the user to manually delete the existing record/table/field so the production run can proceed cleanly
> - Mark the result block as:
>
> ```
>    > ⚠️ `tool_name(param1="value1", ...)`
>    > 🎯 Result: BLOCKED — [display name] already exists. Ask user to delete it and re-run this prompt.
> ```
>
> **Step 5 — Handle bugs**
> If you discover a bug in a `.cs` file under `DynamicsCrm.DevKit.Cli\Mcp\` during execution:
>
> 1. Read and fix the relevant `.cs` file(s)
> 2. Run `/claude-build-cli` to rebuild and restart MCP
> 3. Kill the running MCP process: `Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force`
> 4. Re-run the original prompt and record the corrected result
>
> **Step 6 - App/navigation tool rule**
> For model-driven app, sitemap, or app navigation work, use `manage_app`. Do not use `execute_webapi` to create or update `appmodule`, `sitemap`, or `appmodulecomponent` records. `manage_app` does not publish, so publish separately only when a prompt explicitly asks for publishing.

---

## A. Connection & Environment Check

1. Which Dataverse environment am I connected to? Tell me the organization name, URL, version, current user, and assigned roles.

2. What components does the solution "PRODUCTION-MCP (PRODUCTIONMCP)" currently contain?

---

## B. Global Choice

3. In solution PRODUCTION-MCP, create a global choice with display name "Invoice Status" containing the following values: Draft, Confirmed, Shipped, Paid, Cancelled.

4. Read back the global choice "Invoice Status" just created and list all values as human-readable labels only; do not include integer codes, logical names, GUIDs, or any machine-readable identifiers in the result.

5. Update the colors of the "Invoice Status" global choice: Draft=gray (#808080), Confirmed=blue (#0070C0), Shipped=orange (#FF7C00), Paid=green (#00B050), Cancelled=red (#FF0000); read it back to confirm the colors were applied correctly.

---

## C. Environment Variable

6. In solution "PRODUCTION-MCP", create an environment variable with display name "Invoice Production Mode", type string, default value dev, current value production.

7. Update the current value of environment variable "Invoice Production Mode" to staging, then read it back to confirm.

---

## D. Create Tables

8. In solution "PRODUCTION-MCP", create a table "Invoice", plural name "Invoices", primary field name "Invoice Name", enable notes, enable audit, enable quick create, user ownership.

9. In solution "PRODUCTION-MCP", create a table "Invoice Line", plural name "Invoice Lines", primary field name "Line Name", enable notes, enable audit, enable quick create, user ownership.

10. Check the metadata of the Invoice table just created: actual logical name, primary id field, primary name field, owner field, audit status.

11. Check the metadata of the Invoice Line table just created: actual logical name, primary id field, primary name field, owner field, audit status.

---

## E. Create Columns for Invoice

12. In solution "PRODUCTION-MCP", add column "Invoice Number" to the Invoice table, type text, required, max length 100.

13. In solution "PRODUCTION-MCP", add column "Invoice Date" to the Invoice table, type date only, required.

14. In solution "PRODUCTION-MCP", add column "Due Date" to the Invoice table, type date only.

15. In solution "PRODUCTION-MCP", add column "Bill To" to the Invoice table, type customer lookup targeting Account or Contact, required.

16. In solution "PRODUCTION-MCP", add column "Invoice Status" to the Invoice table, type picklist using the global choice "Invoice Status" created earlier.

17. In solution "PRODUCTION-MCP", add column "Total Amount" to the Invoice table, type currency, precision 2.

18. In solution "PRODUCTION-MCP", add column "Tax Amount" to the Invoice table, type currency, precision 2.

19. In solution "PRODUCTION-MCP", add column "Grand Total" to the Invoice table, type currency, precision 2.

20. In solution "PRODUCTION-MCP", add column "PO Number" to the Invoice table, type text, max length 100.

21. In solution "PRODUCTION-MCP", add column "Remarks" to the Invoice table, type multiline text, max length 4000.

---

## F. Create Columns for Invoice Line

22. In solution "PRODUCTION-MCP", add column "Line Number" to the Invoice Line table, type integer, required, min 1, max 999999.

23. In solution "PRODUCTION-MCP", add column "Product Name" to the Invoice Line table, type text, required, max length 200.

24. In solution "PRODUCTION-MCP", add column "Description" to the Invoice Line table, type multiline text, max length 2000.

25. In solution "PRODUCTION-MCP", add column "Quantity" to the Invoice Line table, type decimal, required, min 0, max 1000000, precision 2.

26. In solution "PRODUCTION-MCP", add column "Unit Price" to the Invoice Line table, type currency, required, precision 2.

27. In solution "PRODUCTION-MCP", add column "Discount Percent" to the Invoice Line table, type decimal, min 0, max 100, precision 2.

28. In solution "PRODUCTION-MCP", add column "Line Total" to the Invoice Line table, type currency, precision 2.

29. In solution "PRODUCTION-MCP", add column "Line Status" to the Invoice Line table, type picklist using the global choice "Invoice Status" created earlier.

---

## G. Relationship Between Invoice and Invoice Line

30. In solution "PRODUCTION-MCP", create a one-to-many relationship from Invoice to Invoice Line, the lookup on Invoice Line has display name "Invoice", cascade type referential.

31. Check the metadata of the Invoice Line table and identify the actual logical name of the lookup field pointing to Invoice.

---

## H. Publish

32. Publish customizations for the Invoice table, Invoice Line table, and the "Invoice Status" global choice.

---

## I. View Design

33. List the existing public views of the Invoice table.

34. Create public view "PRODUCTION-MCP Active Invoices" for Invoice: active records only, columns Invoice Number, Bill To, Invoice Date, Due Date, Invoice Status, Grand Total, Owner, Modified On, sort by Modified On descending.

35. Create public view "PRODUCTION-MCP Invoices By Status" for Invoice: columns Invoice Number, Invoice Status, Bill To, Grand Total, Created On, sort by Invoice Status ascending then Created On descending.

36. List the existing public views of the Invoice Line table.

37. Create public view "PRODUCTION-MCP Invoice Lines" for Invoice Line: active records only, columns Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Invoice, sort by Line Number ascending.

38. Create public view "Subgrid Invoice Lines" for Invoice Line: active records only, columns Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Invoice, sort by Line Number ascending.

39. Read back all 4 views just created and confirm the columns and filter conditions match the requirements.

---

## J. Form Design

40. List the forms of the Invoice table and identify which main form should be used for layout editing.

41. Design the main form of Invoice: tab "Summary" with section "Invoice Information" containing Invoice Number, Invoice Date, Due Date, Bill To, Invoice Status, PO Number; section "Amounts" containing Total Amount, Tax Amount, Grand Total; section "Notes" containing Remarks; tab "Lines" containing a subgrid of child Invoice Lines using the "Subgrid Invoice Lines" view.

42. On the same form, add header fields in this order: primary name, owner, state, status.

43. On the same form, add an Administrator tab (placed at the end) with 2 sections (empty labels); left section contains: createdon, createdby, modifiedon, modifiedby; right section contains: primary name, owner, state, status. All fields must be read-only.

44. Read back the Invoice main form and confirm all fields and the Invoice Lines subgrid are in the correct positions.

45. List the forms of the Invoice Line table and identify which main form should be used.

46. Design the main form of Invoice Line: section "Line Information" containing Line Number, Product Name, Quantity, Unit Price, Discount Percent, Line Total, Line Status, and the Invoice lookup; section "Notes" containing Description.

47. Add a header and Administrator tab to the Invoice Line form identical to the Invoice form.

48. Read back the Invoice Line main form and confirm all fields are in the correct positions.

---

## K. Model-Driven App & Navigation

49. Check whether a model-driven app named "PRODUCTION-MCP" exists; if it does not exist, create it in solution "PRODUCTION-MCP" with display name "PRODUCTION-MCP" and description "Production MCP model-driven app".

50. Read the details and current navigation of app "PRODUCTION-MCP"; confirm the app has navigation configured, identify the starter Account item if present, and determine whether an Invoicing area/group already exists.

51. Configure app "PRODUCTION-MCP" navigation so it has an area named "Invoicing" at the first position, a group named "Transactions" inside it, and menu items for Invoice and Invoice Line in that order.

52. Read back app "PRODUCTION-MCP" navigation and confirm the Invoicing area is first, the Transactions group exists, Invoice then Invoice Line appear in the correct order, and whether the navigation is ready to publish.

---

## L. Web Resource

53. Check for any JavaScript web resources with names containing "productionmcp" or "invoice" to avoid duplicates.

54. Create a local file at D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\ProductionMcp\js\invoice.form.js. In solution "PRODUCTION-MCP", create a JavaScript web resource for this file using the solution's publisher prefix, path /productionmcp/invoice.form.js; the file should have namespace ProductionMcp.Invoice, function syncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) that reads Invoice Status from the parent Invoice record and updates the Line Status of all child Invoice Lines accordingly, and function canSyncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) that returns true only when the form has been saved (record already has an id).

55. Read back the web resource just created (productionmcp/invoice.form.js) and confirm it has the correct namespace, sync function, and enable function.

---

## M. Ribbon (Classic Button)

56. View all existing buttons on the form ribbon of the Invoice table before adding a new button.

57. Add a button to the ribbon on the main form of Invoice, label "Sync Line Status", calling function ProductionMcp.Invoice.syncLineStatus from the web resource created in prompt 54, using ProductionMcp.Invoice.canSyncLineStatus as the enable rule.

58. Read back the ribbon of the Invoice table and confirm the "Sync Line Status" button was added with the correct configuration.

---

## N. Modern Command Bar (Hide/Show)

59. In app "PRODUCTION-MCP" app, view the modern command bar on the Invoice form and locate the Activate and Deactivate commands.

60. In app "PRODUCTION-MCP" app, hide the Deactivate command on the Invoice form command bar; if it is not a modern command, clearly explain why and do not substitute with a classic ribbon approach.

61. In app "PRODUCTION-MCP" app, hide the Activate command on the Invoice form command bar; if it is not a modern command, clearly explain why and do not substitute with a classic ribbon approach.

62. In app "PRODUCTION-MCP" app, check the Invoice form command bar and report whether Activate and Deactivate are currently hidden or visible.

63. In app "PRODUCTION-MCP" app, read back the Deactivate command on the Invoice form command bar and confirm it remains hidden with an active appaction hide override record.

64. In app "PRODUCTION-MCP" app, read back the Activate command on the Invoice form command bar and confirm it remains hidden with an active appaction hide override record.

---

## O. Production Data

65. Create an Account named "PRODUCTION-MCP Client A" to use as a production customer for Invoice.

66. Create an Invoice: Invoice Number INV-0001, Invoice Date 2026-04-28, Due Date 2026-05-28, Bill To Account "PRODUCTION-MCP Client A", Invoice Status Draft, Total Amount 500, Tax Amount 50, Grand Total 550, PO Number PO-PRODUCTION-001.

67. Create an Invoice Line as a child of INV-0001: Line Number 1, Product Name "Consulting Service", Quantity 2, Unit Price 200, Discount Percent 0, Line Total 400, Line Status Draft.

68. Read back Invoice INV-0001 and Invoice Line 1, fetching only the important fields to confirm the data is linked correctly.

69. Create 2 more Invoice Lines for INV-0001: Line Number 2 and 3, each with a different Product Name, Line Status Draft.

70. Generate 10 demo Invoice records in the date range 2026-01-01 to 2026-04-28, rotating Invoice Status through Draft, Confirmed, Shipped, Paid, Cancelled.

71. Import the 10 demo Invoices into the environment; if Bill To is required, use Account "PRODUCTION-MCP Client A".

---

## P. Query & Search

72. Query Invoice INV-0001 with all child Invoice Lines, returning Invoice Number, Invoice Status, Line Number, Product Name, Quantity, Line Total, Line Status.

73. Search for keyword INV-0001 in Dataverse and report which records related to Invoice or Invoice Line are found.

74. Count Invoice Lines per Invoice and confirm that INV-0001 has at least 3 lines.

---

## Q. Parse URL & Direct Web API

75. Paste the URL of Invoice INV-0001 from the browser here to confirm the entity logical name and record GUID.

76. Read Invoice INV-0001 directly via Dataverse Web API, fetching only Invoice Number, Invoice Status, Grand Total, Modified On; compare the result with the standard record read approach.

---

## R. Update Record & Audit

77. Update Invoice INV-0001: change Invoice Status from Draft to Confirmed and set Grand Total to 660.

78. View the audit history of Invoice INV-0001 in the last 24 hours, focusing on changes to Invoice Status and Grand Total.

---

## S. Messages, Plugins, Custom API

79. List all Dataverse messages available for the Invoice table, especially Create, Update, SetState, and any custom actions.

80. Check whether any custom API is bound to the Invoice table; if so, describe its input, output, and the handling plugin.

81. Check active plugin steps on the Invoice table for the Update message: assembly, type, stage, mode, and image if any.

82. View plugin trace logs in the last 60 minutes related to the Invoice table; if none exist, state that clearly.

---

## T. System Jobs, Workflows, BPF, Flows

83. View failed system jobs in the last 24 hours related to Invoice; if any, summarize the error and key stack trace.

84. Check active classic workflows on the Invoice table, both background and realtime; summarize trigger fields and mode if any.

85. Check which business process flows are associated with the Invoice table, listing stages and primary entities.

86. Check for cloud flows with names containing "PRODUCTION-MCP"; if found, open detail and view the latest few runs and their status.

---

## U. Business Rules & Security

87. Check business rules on the Invoice table (both active and draft); if any exist, open the first rule and summarize its conditions and actions.

88. Check what permissions the "System Administrator" role has on the Invoice table.

89. Check the current user's effective permissions on the Invoice table: Create, Read, Write, Delete, Append, Append To.

---

## V. Metadata Updates & Publish

90. Add option "Archived" to the "Invoice Status" global choice with color purple (#7030A0), then read it back to confirm the new option and color are present.

91. Enable audit and advanced find for the Invoice Status column on the Invoice table if currently disabled.

92. Update view "PRODUCTION-MCP Active Invoices" to add the PO Number column; read it back to confirm the layout and query are still in sync.

93. Update the Invoice main form so that PO Number is inside the "Invoice Information" section; read it back to confirm the correct position.

94. Update the web resource created in prompt 54 (productionmcp/invoice.form.js): add a short comment "// PRODUCTION-MCP v1" at the top of the file; read it back to confirm.

95. Publish all customizations for the Invoice table, Invoice Line table, the "Invoice Status" global choice, and the model-driven app navigation for app "PRODUCTION-MCP".

---

## W. End-of-Session Audit & System Jobs Check

96. View the last 24 hours of audit history for the current user, up to 20 rows, confirming that MCP production operations have been recorded.

97. View publish or customization system jobs in the last 60 minutes, both succeeded and failed, to verify results after metadata creation steps.

---

## X. Summary

98. Check solution "PRODUCTION-MCP (PRODUCTIONMCP)" and list all components now inside it: tables, columns, choices, forms, views, web resources, ribbon, commands, model-driven app, sitemap, and environment variables.

99. Summarize the "PRODUCTION-MCP" production session: what was created successfully, what was skipped due to environment limitations, and which prompts should be re-run to clean up or start over from scratch.

---

## Y. Ambiguous Name Resolution Tests — Polymorphic Lookup & N:N Relationship

100. In solution "PRODUCTION-MCP", create a table "Product" with plural name "Products", primary field name "Product Name", user ownership; then create another table also named "Product" but with plural name "Product Catalog", primary field name "Catalog Name", user ownership — this should trigger an ambiguity error because both tables have the same display name "Product".

101. In solution "PRODUCTION-MCP", add column "Related Product" to the Invoice Line table, type lookup targeting the "Product" table created in prompt 100 — this should trigger an ambiguity error because there are two tables with display name "Product"; AI must stop and ask user to disambiguate by providing the exact logical name.

102. In solution "PRODUCTION-MCP", create a many-to-many relationship between Invoice and Account with relationship name "invoice_account_association" — then attempt to create another N:N relationship between Invoice and Contact also named "invoice_account_association" — this should trigger a conflict error.

103. In solution "PRODUCTION-MCP", add column "Assigned To" to the Invoice table, type lookup targeting SystemUser — then add another column also named "Assigned To" to the same Invoice table, type lookup targeting Team — this should trigger a duplicate column name error.

104. In solution "PRODUCTION-MCP", create a global choice "Status" with values Active, Inactive — then create another global choice also named "Status" with values Open, Closed — this should trigger an ambiguity error when AI tries to reference "Status" in subsequent prompts.

---

## Z. Calculated & Rollup Fields

105. In solution "PRODUCTION-MCP", add a calculated field "Line Subtotal" to the Invoice Line table, type currency, formula: Quantity × Unit Price; read it back to confirm the formula is correct.

106. In solution "PRODUCTION-MCP", add a calculated field "Discount Amount" to the Invoice Line table, type currency, formula: Line Subtotal × (Discount Percent ÷ 100); read it back to confirm the formula is correct.

107. In solution "PRODUCTION-MCP", add a rollup field "Total Lines Count" to the Invoice table, type integer, aggregating count of related Invoice Line records; read it back to confirm the rollup configuration.

108. In solution "PRODUCTION-MCP", add a rollup field "Total Lines Amount" to the Invoice table, type currency, aggregating sum of Line Total from related Invoice Line records; read it back to confirm the rollup configuration.

109. Trigger recalculation of all rollup fields on Invoice INV-0001 and read back the updated values for Total Lines Count and Total Lines Amount.

---

## AA. Alternate Keys & Duplicate Detection

110. In solution "PRODUCTION-MCP", create an alternate key on the Invoice table using the "Invoice Number" field; read it back to confirm the alternate key is active.

111. Attempt to create a duplicate Invoice with Invoice Number "INV-0001" — this should trigger a duplicate key error because an alternate key exists on Invoice Number.

112. In solution "PRODUCTION-MCP", create a duplicate detection rule for the Invoice table: match on Invoice Number (exact match) and Bill To (exact match); activate the rule and read it back to confirm.

113. Run duplicate detection on the Invoice table and report any duplicates found based on the rule created in prompt 112.

114. In solution "PRODUCTION-MCP", create a composite alternate key on the Invoice Line table using fields "Invoice" (lookup) and "Line Number" (integer); read it back to confirm the composite key is active.

---

## AB. Advanced Form Features — Business Rules, Quick View, Tabs, Sections

115. In solution "PRODUCTION-MCP", create a business rule on the Invoice form: when Invoice Status equals "Paid", set Grand Total as read-only and hide the Tax Amount field; read it back to confirm the rule logic.

116. In solution "PRODUCTION-MCP", create a quick view form for the Account table showing Account Name, Primary Contact, Phone, Email; then add this quick view form to the Invoice main form under the "Bill To" lookup field.

117. On the Invoice main form, add a new tab "Attachments" positioned after the "Lines" tab, containing a section "Files" with the standard Notes control; read it back to confirm the tab order.

118. On the Invoice main form, configure the "Amounts" section to display in 2 columns: left column contains Total Amount and Tax Amount, right column contains Grand Total; read it back to confirm the column layout.

119. On the Invoice main form, add a header field "Invoice Status" (if not already present) and configure it to display as a colored status indicator; read it back to confirm the header configuration.

---

## AC. Advanced View Features — Aggregation, Conditional Formatting, Charts

120. Create a public view "PRODUCTION-MCP Invoices Summary" for Invoice: group by Invoice Status, show count of records per status, sum of Grand Total per status; read it back to confirm the aggregation configuration.

121. Update view "PRODUCTION-MCP Active Invoices" to add conditional formatting: if Due Date is in the past and Invoice Status is not "Paid", highlight the row in red; read it back to confirm the conditional formatting rule.

122. Create a chart "Invoices by Status" for the Invoice table: pie chart showing count of Invoices grouped by Invoice Status, using the "PRODUCTION-MCP Active Invoices" view as data source; read it back to confirm the chart configuration.

---

## AD. Ambiguous Field Reference Tests — Multiple Lookups to Same Entity

123. In solution "PRODUCTION-MCP", add column "Primary Contact" to the Invoice table, type lookup targeting Contact, required; then add another column "Secondary Contact" to the same Invoice table, also type lookup targeting Contact, not required.

124. Create an Invoice with Invoice Number "INV-0002", Bill To Account "PRODUCTION-MCP Client A", Primary Contact pointing to a Contact record named "John Doe", Secondary Contact pointing to a Contact record named "Jane Smith" — AI must correctly resolve which Contact lookup to use for each field.

125. Query all Invoices where "Contact" equals "John Doe" — this should trigger an ambiguity error because there are two Contact lookup fields (Primary Contact and Secondary Contact); AI must stop and ask user to specify which Contact field to filter on.

126. In solution "PRODUCTION-MCP", add column "Billing Account" to the Invoice table, type lookup targeting Account; now the Invoice table has two Account lookups: "Bill To" (customer, polymorphic) and "Billing Account" (regular lookup) — create a view filtering on "Account" and observe the ambiguity error.

127. Update the Invoice main form to add both "Primary Contact" and "Secondary Contact" fields in the "Invoice Information" section; read it back and confirm both Contact lookups are displayed with their correct labels.

---

## AE. Ambiguous Solution Name Tests

128. Create a new solution with display name "PRODUCTION" and unique name "PRODUCTION_v2"; then attempt to create a table in solution "PRODUCTION" — this should trigger an ambiguity error because there are now two solutions with display names containing "PRODUCTION" (PRODUCTION-MCP and PRODUCTION).

129. In solution "PRODUCTION" (the one created in prompt 128), create a global choice "Payment Method" with values Cash, Credit Card, Bank Transfer; read it back to confirm it was created in the correct solution.

130. List all solutions with display names containing "PRODUCTION" and report how many matches are found; AI must handle the ambiguity by asking user to specify the exact solution unique name.

---

## AF. Ambiguous View Name Tests

131. Create a public view "Active Records" for the Invoice table showing Invoice Number, Invoice Status, Grand Total; then create another public view also named "Active Records" for the Invoice Line table showing Line Number, Product Name, Line Status — both views have the same display name "Active Records".

132. Update view "Active Records" to add a new column — this should trigger an ambiguity error because there are two views with the same display name "Active Records" (one for Invoice, one for Invoice Line); AI must stop and ask user to specify which entity's view to update.

133. Delete view "Active Records" — this should trigger an ambiguity error because there are two views with the same display name; AI must stop and ask user to specify which entity's view to delete.

---

## AG. Ambiguous Form Name Tests

134. Rename the Invoice main form to "Information"; then create a new main form for the Invoice table also named "Information" — this should trigger a duplicate form name error.

135. Update form "Information" on the Invoice table to add a new field — this should trigger an ambiguity error because there are two forms with the same display name "Information"; AI must stop and ask user to specify which form to update by providing the form GUID.

---

## AH. Ambiguous Web Resource Name Tests

136. In solution "PRODUCTION-MCP", create a JavaScript web resource with name "common.js" at path /scripts/common.js; then create another JavaScript web resource also named "common.js" at path /lib/common.js — both have the same file name "common.js" but different paths.

137. Update web resource "common.js" to add a new function — this should trigger an ambiguity error because there are two web resources with names containing "common.js"; AI must stop and ask user to specify the exact unique name (with full path).

---

## AI. Ambiguous Environment Variable Name Tests

138. In solution "PRODUCTION-MCP", create an environment variable "API Endpoint" with default value "https://api.dev.example.com"; then in solution "PRODUCTION" (created in prompt 128), create another environment variable also named "API Endpoint" with default value "https://api.prod.example.com" — both have the same display name "API Endpoint" but belong to different solutions.

139. Update environment variable "API Endpoint" to change the current value — this should trigger an ambiguity error because there are two environment variables with the same display name "API Endpoint"; AI must stop and ask user to specify which solution's environment variable to update.

140. Read environment variable "API Endpoint" — this should trigger an ambiguity error because there are two environment variables with the same display name; AI must stop and ask user to disambiguate.

---

## AJ. Ambiguous Column Name Tests — Same Display Name, Different Entities

141. In solution "PRODUCTION-MCP", add column "Status" to the Invoice table, type picklist with local options: New, In Progress, Completed; then add another column also named "Status" to the Invoice Line table, type picklist with local options: Pending, Active, Closed.

142. Query all Invoices where "Status" equals "New" — AI should correctly resolve "Status" to the Invoice table's Status field because the query context is Invoice.

143. Query all Invoice Lines where "Status" equals "Pending" — AI should correctly resolve "Status" to the Invoice Line table's Status field because the query context is Invoice Line.

144. Create a view for Invoice showing "Status" column — AI should correctly resolve "Status" to the Invoice table's Status field; then create a view for Invoice Line also showing "Status" column — AI should correctly resolve "Status" to the Invoice Line table's Status field.

---

## AK. Ambiguous Relationship Name Tests

145. In solution "PRODUCTION-MCP", create a one-to-many relationship from Account to Invoice with relationship name "account_invoice"; then attempt to create another one-to-many relationship from Contact to Invoice also named "account_invoice" — this should trigger a duplicate relationship name error.

146. Query all Invoices related to Account "PRODUCTION-MCP Client A" via relationship "account_invoice" — AI should correctly resolve the relationship because there is only one relationship with that name.

147. In solution "PRODUCTION-MCP", create a many-to-many relationship between Invoice and SystemUser with relationship name "invoice_systemuser_assignment"; then query all SystemUsers related to Invoice INV-0001 via this N:N relationship.

---

## AL. Ambiguous Command/Button Name Tests

148. In app "PRODUCTION-MCP", add a modern command button "Export" on the Invoice main grid; then add another modern command button also named "Export" on the Invoice form — both buttons have the same label "Export" but different locations.

149. Update command "Export" on the Invoice entity — this should trigger an ambiguity error because there are two commands with the same label "Export" (one on main grid, one on form); AI must stop and ask user to specify which location's command to update.

150. Hide command "Export" on the Invoice entity — this should trigger an ambiguity error because there are two commands with the same label "Export"; AI must stop and ask user to specify which location's command to hide.

---

## AM. Final Summary & Cleanup

151. List all tables created during this session that have ambiguous or duplicate display names; report which prompts created them and recommend cleanup actions.

152. List all global choices created during this session that have ambiguous or duplicate display names; report which prompts created them and recommend cleanup actions.

153. List all views created during this session that have ambiguous or duplicate display names across different entities; report which prompts created them and recommend cleanup actions.

154. List all web resources created during this session that have ambiguous or duplicate names; report which prompts created them and recommend cleanup actions.

155. List all environment variables created during this session that have ambiguous or duplicate display names; report which prompts created them and recommend cleanup actions.

156. Check solution "PRODUCTION-MCP" and solution "PRODUCTION" (created in prompt 128) and list all components in each solution; confirm which components belong to which solution.

157. Attempt to delete solution "PRODUCTION" (created in prompt 128) — report whether the deletion succeeds or fails, and if it fails, explain why (e.g., dependencies, managed components).

158. View all system jobs in the last 60 minutes related to solution import, export, or deletion; report any failures and their error messages.

159. View all audit history in the last 24 hours for the current user, filtering on operations related to table creation, column creation, and solution component addition; confirm that all MCP operations were audited correctly.

160. Summarize the ambiguity test session: which prompts successfully triggered ambiguity errors, which prompts did not trigger errors as expected, and which MCP tools correctly handled ambiguous name resolution by stopping and asking the user to disambiguate.
