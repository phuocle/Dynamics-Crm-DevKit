# MCP Test Prompts — TEST-MCP / Invoice & Invoice Line

Run sequentially from top to bottom. Each prompt is one line, numbered.
Solution target: display name **TEST-MCP**

---

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS — READ THIS BEFORE EXECUTING ANY PROMPT**
>
> When the user says *"read this file and run prompts X to Y"*, follow these rules exactly:
>
> **Step 1 — Execute each prompt in order**
> - Run each numbered prompt using the appropriate MCP tools
> - Do NOT skip a prompt unless it is explicitly blocked (see Step 4)
> - Execute the prompt text as written — do not add assumptions or extra parameters
>
> **Step 2 — Track the tool chain**
> For each prompt, note every MCP tool called in order: tool name, key params used, brief result.
>
> **Step 3 — Write result back into this file**
> After executing each prompt, immediately insert a result block **directly under that prompt line**:
> ```
>    > ✅ Tools: [tool A] → [tool B] → [tool C]
>    > Result: <one sentence summary of what happened>
> ```
> - Use `→` to show call order
> - Keep it to **2 lines only** — one for tools, one for result
> - Use `⚠️` instead of `✅` if the prompt was skipped or failed, with a reason
>
> **Step 4 — Handle conflicts (already exists)**
> If a prompt tries to create something that already exists and cannot proceed:
> - Do NOT silently skip or work around it
> - Stop and ask the user to manually delete the existing record/table/field so the test can run cleanly
> - Mark the result block as:
> ```
>    > ⚠️ Tools: [tool used to detect conflict]
>    > Result: BLOCKED — [name] already exists. Ask user to delete it and re-run this prompt.
> ```
>
> **Step 5 — Handle bugs**
> If you discover a bug in a `.cs` file under `DynamicsCrm.DevKit.Cli\Mcp\` during execution:
> 1. Read and fix the relevant `.cs` file(s)
> 2. Run `/claude-build-cli` to rebuild and restart MCP
> 3. Kill the running MCP process: `Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force`
> 4. Re-run the original prompt and record the corrected result

---

## A. Connection & Environment Check

1. Which Dataverse environment am I connected to? Tell me the organization name, URL, version, current user, and assigned roles.
2. What components does the solution "TEST-MCP (TESTMCP)" currently contain?

---

## B. Global Choice

3. In solution "TEST-MCP (TESTMCP)", create a global choice with display name "Invoice Status" containing the following values: Draft, Confirmed, Shipped, Paid, Cancelled.
4. Read back the global choice v5_invoicestatus and list all values with their corresponding integer codes.
5. Update the colors of global choice v5_invoicestatus: Draft=gray (#808080), Confirmed=blue (#0070C0), Shipped=orange (#FF7C00), Paid=green (#00B050), Cancelled=red (#FF0000); read it back to confirm the colors were applied correctly.

---

## C. Environment Variable

6. In solution "TEST-MCP", create an environment variable with display name "Invoice Test Mode", type string, default value dev, current value test.
7. Update the current value of environment variable "Invoice Test Mode" to staging, then read it back to confirm.

---

## D. Create Tables

8. In solution "TEST-MCP", create a table "Invoice", plural name "Invoices", primary field name "Invoice Name", enable notes, enable audit, enable quick create, user ownership.
9. In solution "TEST-MCP", create a table "Invoice Line", plural name "Invoice Lines", primary field name "Line Name", enable notes, enable audit, enable quick create, user ownership.
10. Check the metadata of the Invoice table just created: actual logical name, primary id field, primary name field, owner field, audit status.
11. Check the metadata of the Invoice Line table just created: actual logical name, primary id field, primary name field, owner field, audit status.

---

## E. Create Columns for Invoice

12. In solution "TEST-MCP", add column "Invoice Number" to the Invoice table, type text, required, max length 100.
13. In solution "TEST-MCP", add column "Invoice Date" to the Invoice table, type date only, required.
14. In solution "TEST-MCP", add column "Due Date" to the Invoice table, type date only.
15. In solution "TEST-MCP", add column "Bill To" to the Invoice table, type customer lookup targeting Account or Contact, required.
16. In solution "TEST-MCP", add column "Invoice Status" to the Invoice table, type picklist using global choice v5_invoicestatus.
17. In solution "TEST-MCP", add column "Total Amount" to the Invoice table, type currency, precision 2.
18. In solution "TEST-MCP", add column "Tax Amount" to the Invoice table, type currency, precision 2.
19. In solution "TEST-MCP", add column "Grand Total" to the Invoice table, type currency, precision 2.
20. In solution "TEST-MCP", add column "PO Number" to the Invoice table, type text, max length 100.
21. In solution "TEST-MCP", add column "Remarks" to the Invoice table, type multiline text, max length 4000.

---

## F. Create Columns for Invoice Line

22. In solution "TEST-MCP", add column "Line Number" to the Invoice Line table, type integer, required, min 1, max 999999.
23. In solution "TEST-MCP", add column "Product Name" to the Invoice Line table, type text, required, max length 200.
24. In solution "TEST-MCP", add column "Description" to the Invoice Line table, type multiline text, max length 2000.
25. In solution "TEST-MCP", add column "Quantity" to the Invoice Line table, type decimal, required, min 0, max 1000000, precision 2.
26. In solution "TEST-MCP", add column "Unit Price" to the Invoice Line table, type currency, required, precision 2.
27. In solution "TEST-MCP", add column "Discount Percent" to the Invoice Line table, type decimal, min 0, max 100, precision 2.
28. In solution "TEST-MCP", add column "Line Total" to the Invoice Line table, type currency, precision 2.
29. In solution "TEST-MCP", add column "Line Status" to the Invoice Line table, type picklist using global choice v5_invoicestatus.

---

## G. Relationship Between Invoice and Invoice Line

30. In solution "TEST-MCP", create a one-to-many relationship from Invoice to Invoice Line, the lookup on Invoice Line has display name "Invoice", cascade type referential.
31. Check the metadata of the Invoice Line table and identify the actual logical name of the lookup field pointing to Invoice.

---

## H. Publish

32. Publish customizations for the Invoice table, Invoice Line table, and global choice v5_invoicestatus.

---

## I. Form Design

33. List the forms of the Invoice table and identify which main form should be used for layout editing.
34. Design the main form of Invoice: tab "Summary" with section "Invoice Information" containing Invoice Number, Invoice Date, Due Date, Bill To, Invoice Status, PO Number; section "Amounts" containing Total Amount, Tax Amount, Grand Total; section "Notes" containing Remarks; tab "Lines" containing a subgrid of child Invoice Lines.
35. On the same form, add header fields in this order: primary name, owner, state, status.
36. On the same form, add an Administrator tab (placed at the end) with 2 sections (empty labels); left section contains: createdon, createdby, modifiedon, modifiedby; right section contains: primary name, owner, state, status. All fields must be read-only.
37. Read back the Invoice main form and confirm all fields and the Invoice Lines subgrid are in the correct positions.
38. List the forms of the Invoice Line table and identify which main form should be used.
39. Design the main form of Invoice Line: section "Line Information" containing Line Number, Product Name, Quantity, Unit Price, Discount Percent, Line Total, Line Status, and the Invoice lookup; section "Notes" containing Description.
40. Add a header and Administrator tab to the Invoice Line form identical to the Invoice form.
41. Read back the Invoice Line main form and confirm all fields are in the correct positions.

---

## J. View Design

42. List the existing public views of the Invoice table.
43. Create public view "TEST-MCP Active Invoices" for Invoice: active records only, columns Invoice Number, Bill To, Invoice Date, Due Date, Invoice Status, Grand Total, Owner, Modified On, sort by Modified On descending.
44. Create public view "TEST-MCP Invoices By Status" for Invoice: columns Invoice Number, Invoice Status, Bill To, Grand Total, Created On, sort by Invoice Status ascending then Created On descending.
45. List the existing public views of the Invoice Line table.
46. Create public view "TEST-MCP Invoice Lines" for Invoice Line: active records only, columns Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Invoice, sort by Line Number ascending.
47. Create public view "Subgrid Invoice Lines" for Invoice Line. As an AI you should know what columns are needed for a subgrid view — please propose them.
48. Read back all 4 views just created and confirm the columns and filter conditions match the requirements.

---

## K. App & Sitemap

49. Check if a model-driven app named "TEST-MCP App" exists in the environment; if not, clearly state that the app must be created in Power Apps first and stop all app-related steps.
50. View the current sitemap of app "TEST-MCP App" and determine whether there is already a suitable area or group to add Invoice.
51. Update the sitemap of app "TEST-MCP App": add an area named "Invoicing" with menu items for Invoice and Invoice Line tables.
52. Read back the sitemap of app "TEST-MCP App" and confirm Invoice and Invoice Line appear in the correct positions.

---

## L. Web Resource

53. Check for any JavaScript web resources with names containing "testmcp" or "invoice" to avoid duplicates.
54. Create a local file at D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestMcp\js\invoice.form.js. In solution "TEST-MCP", create a JavaScript web resource named v5_/testmcp/invoice.form.js; the file should have namespace TestMcp.Invoice, function syncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) that reads Invoice Status from the parent Invoice record and updates the Line Status of all child Invoice Lines accordingly, and function canSyncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) that returns true only when the form has been saved (record already has an id).
55. Read back web resource v5_/testmcp/invoice.form.js and confirm it has the correct namespace, sync function, and enable function.

---

## M. Ribbon (Classic Button)

56. View all existing buttons on the form ribbon of the Invoice table before adding a new button.
57. Add a button to the ribbon on the main form of Invoice, label "Sync Line Status", calling function TestMcp.Invoice.syncLineStatus from web resource v5_/testmcp/invoice.form.js, using TestMcp.Invoice.canSyncLineStatus as the enable rule.
58. Read back the ribbon of the Invoice table and confirm the "Sync Line Status" button was added with the correct configuration.

---

## N. Modern Command Bar (Hide/Show)

59. In app "TEST-MCP App", view the modern command bar on the Invoice form and locate the Activate and Deactivate commands.
60. In app "TEST-MCP App", hide the Deactivate command on the Invoice form command bar; if it is not a modern command, clearly explain why and do not substitute with a classic ribbon approach.
61. In app "TEST-MCP App", hide the Activate command on the Invoice form command bar; if it is not a modern command, clearly explain why and do not substitute with a classic ribbon approach.
62. In app "TEST-MCP App", check the Invoice form command bar and report whether Activate and Deactivate are currently hidden or visible.
63. In app "TEST-MCP App", show the Deactivate command on the Invoice form command bar to confirm the show branch works correctly.
64. In app "TEST-MCP App", show the Activate command on the Invoice form command bar to confirm the show branch works correctly.

---

## O. Test Data

65. Create an Account named "TEST-MCP Client A" to use as a test customer for Invoice.
66. Create an Invoice: Invoice Number INV-0001, Invoice Date 2026-04-28, Due Date 2026-05-28, Bill To Account "TEST-MCP Client A", Invoice Status Draft, Total Amount 500, Tax Amount 50, Grand Total 550, PO Number PO-TEST-001.
67. Create an Invoice Line as a child of INV-0001: Line Number 1, Product Name "Consulting Service", Quantity 2, Unit Price 200, Discount Percent 0, Line Total 400, Line Status Draft.
68. Read back Invoice INV-0001 and Invoice Line 1, fetching only the important fields to confirm the data is linked correctly.
69. Create 2 more Invoice Lines for INV-0001: Line Number 2 and 3, each with a different Product Name, Line Status Draft.
70. Generate 10 demo Invoice records in the date range 2026-01-01 to 2026-04-28, rotating Invoice Status through Draft, Confirmed, Shipped, Paid, Cancelled.
71. Import the 10 demo Invoices into the environment; if Bill To is required, use Account "TEST-MCP Client A".

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
86. Check for cloud flows with names containing "TEST-MCP"; if found, open detail and view the latest few runs and their status.

---

## U. Business Rules & Security

87. Check business rules on the Invoice table (both active and draft); if any exist, open the first rule and summarize its conditions and actions.
88. Check what permissions the "System Administrator" role has on the Invoice table.
89. Check the current user's effective permissions on the Invoice table: Create, Read, Write, Delete, Append, Append To.

---

## V. Metadata Updates & Publish

90. Add option "Archived" to global choice v5_invoicestatus with color purple (#7030A0), then read it back to confirm the new option and color are present.
91. Enable audit and advanced find for the Invoice Status column on the Invoice table if currently disabled.
92. Update view "TEST-MCP Active Invoices" to add the PO Number column; read it back to confirm the layout and query are still in sync.
93. Update the Invoice main form so that PO Number is inside the "Invoice Information" section; read it back to confirm the correct position.
94. Update web resource v5_/testmcp/invoice.form.js: add a short comment "// TEST-MCP v1" at the top of the file; read it back to confirm.
95. Publish all customizations: Invoice table, Invoice Line table, global choice v5_invoicestatus, and the app sitemap.

---

## W. End-of-Session Audit & System Jobs Check

96. View the last 24 hours of audit history for the current user, up to 20 rows, confirming that MCP test operations have been recorded.
97. View publish or customization system jobs in the last 60 minutes, both succeeded and failed, to verify results after metadata creation steps.

---

## X. Summary

98. Check solution "TEST-MCP (TESTMCP)" and list all components now inside it: tables, columns, choices, forms, views, web resources, ribbon, commands, sitemap, environment variables.
99. Summarize the "TEST-MCP" test session: what was created successfully, what was skipped due to environment limitations, and which prompts should be re-run to clean up or start over from scratch.
