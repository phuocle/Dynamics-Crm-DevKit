# MCP Order Management Prompts — Order & Order Line

Run sequentially from top to bottom. Each prompt is one line, numbered.
Solution target: display name **Order MCP Solution**

Name-resolution intent: these prompts intentionally use Display Names such as **Order MCP Solution**, **Order**, **Order Line**, and **Order Status**. MCP tools must resolve Display Name contains first, then Logical/Unique/Schema Name contains. If a Display Name or logical-name lookup is ambiguous, stop and ask the user to disambiguate; do not invent GUIDs, logical names, or hidden IDs.

---

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS — READ THIS BEFORE EXECUTING ANY PROMPT**
>
> **EXECUTION MODE: Run until error (Automatic)**
>
> When the user says *"read this file"*, *"run this file"*, *"continue this file"*, or similar commands:
>
> 1. Scan this file from top to bottom
> 2. Find the first numbered prompt that does NOT have a result block (starting with `> ✅` or `> ⚠️`) directly underneath it
> 3. Execute all prompts sequentially from that point onward
> 4. Write result blocks after each prompt
> 5. Stop ONLY when an MCP tool returns an error or all prompts are complete
>
> Prompts MUST be executed in strict sequential order — this file is designed for sequential execution where each prompt may depend on previous prompts.
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
> - FORBIDDEN: `Created with id bb56c39d-1e4a-f111`, `Draft=222220000`, `view id: 91a63e4c-5b48`, `v5_orderid: eae8368a`
> - ALLOWED: `Created Order ORD-0001 linked to Customer A`, `Global choice created with 5 options: Draft, Confirmed, Shipped, Paid, Cancelled`
>
> **Step 4 — Handle conflicts (already exists)**
> If a prompt tries to create something that already exists and cannot proceed:
>
> - Resolve names with the normal MCP rule first: Display Name contains, then Logical/Unique/Schema Name contains
> - If name resolution returns multiple candidates, stop and ask the user to choose a specific candidate
> - If a create/upsert prompt resolves to an existing table, column, choice, web resource, app, or environment variable, do not force a duplicate; follow the tool's error/update guidance and ask the user how to proceed when needed
> - Do NOT silently skip or work around it
> - Stop and ask the user to manually delete the existing record/table/field so the run can proceed cleanly
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

---

## A. Connection & Environment Check

1. Which Dataverse environment am I connected to? Tell me the organization name, URL, version, current user, and assigned roles.

2. What components does the solution with display name "Order MCP Solution" currently contain?

---

## B. Global Choice

3. In the solution with display name "Order MCP Solution", create a global choice with display name "Order Status" containing the following values: Draft, Confirmed, Shipped, Paid, Cancelled.

4. Read back the global choice with display name "Order Status" just created and list all values as human-readable labels only; do not include integer codes, logical names, GUIDs, or any machine-readable identifiers in the result.

5. Update the colors of the global choice with display name "Order Status": Draft=gray (#808080), Confirmed=blue (#0070C0), Shipped=orange (#FF7C00), Paid=green (#00B050), Cancelled=red (#FF0000); read it back to confirm the colors were applied correctly.

---

## C. Environment Variable

6. In the solution with display name "Order MCP Solution", create an environment variable with display name "Order Production Mode", type string, default value dev, current value production.

7. Update the current value of the environment variable with display name "Order Production Mode" to staging, then read it back to confirm.

---

## D. Create Tables

8. In the solution with display name "Order MCP Solution", create a table with display name "Order", plural name "Orders", primary field name "Order Name", enable notes, enable audit, enable quick create, user ownership.

9. In the solution with display name "Order MCP Solution", create a table with display name "Order Line", plural name "Order Lines", primary field name "Line Name", enable notes, enable audit, enable quick create, user ownership.

10. Check the metadata of the table with display name "Order" just created: actual logical name, primary id field, primary name field, owner field, audit status.

11. Check the metadata of the table with display name "Order Line" just created: actual logical name, primary id field, primary name field, owner field, audit status.

---

## E. Create Columns for Order

12. In the solution with display name "Order MCP Solution", add column with display name "Order Number" to the table with display name "Order", type text, required, max length 100.

13. In the solution with display name "Order MCP Solution", add column with display name "Order Date" to the table with display name "Order", type date only, required.

14. In the solution with display name "Order MCP Solution", add column with display name "Due Date" to the table with display name "Order", type date only.

15. In the solution with display name "Order MCP Solution", add column with display name "Bill To" to the table with display name "Order", type customer lookup targeting Account or Contact, required.

16. In the solution with display name "Order MCP Solution", add column with display name "Order Status" to the table with display name "Order", type picklist using the global choice with display name "Order Status" created earlier.

17. In the solution with display name "Order MCP Solution", add column with display name "Total Amount" to the table with display name "Order", type currency, precision 2.

18. In the solution with display name "Order MCP Solution", add column with display name "Tax Amount" to the table with display name "Order", type currency, precision 2.

19. In the solution with display name "Order MCP Solution", add column with display name "Grand Total" to the table with display name "Order", type currency, precision 2.

20. In the solution with display name "Order MCP Solution", add column with display name "PO Number" to the table with display name "Order", type text, max length 100.

21. In the solution with display name "Order MCP Solution", add column with display name "Remarks" to the table with display name "Order", type multiline text, max length 4000.

---

## F. Create Columns for Order Line

22. In the solution with display name "Order MCP Solution", add column with display name "Line Number" to the table with display name "Order Line", type integer, required, min 1, max 999999.

23. In the solution with display name "Order MCP Solution", add column with display name "Product Name" to the table with display name "Order Line", type text, required, max length 200.

24. In the solution with display name "Order MCP Solution", add column with display name "Description" to the table with display name "Order Line", type multiline text, max length 2000.

25. In the solution with display name "Order MCP Solution", add column with display name "Quantity" to the table with display name "Order Line", type decimal, required, min 0, max 1000000, precision 2.

26. In the solution with display name "Order MCP Solution", add column with display name "Unit Price" to the table with display name "Order Line", type currency, required, precision 2.

27. In the solution with display name "Order MCP Solution", add column with display name "Discount Percent" to the table with display name "Order Line", type decimal, min 0, max 100, precision 2.

28. In the solution with display name "Order MCP Solution", add column with display name "Line Total" to the table with display name "Order Line", type currency, precision 2.

29. In the solution with display name "Order MCP Solution", add column with display name "Line Status" to the table with display name "Order Line", type picklist using the global choice with display name "Order Status" created earlier.

---

## G. Relationship Between Order and Order Line

30. In the solution with display name "Order MCP Solution", create a one-to-many relationship from the table with display name "Order" to the table with display name "Order Line", the lookup on the child table has display name "Order", cascade type referential.

31. Check the metadata of the table with display name "Order Line" and identify the actual logical name of the lookup field pointing to the parent Order table.

---

## H. Publish

32. Publish customizations for the table with display name "Order", the table with display name "Order Line", and the global choice with display name "Order Status".

---

## I. View Design

33. List the existing public views of the table with display name "Order".

34. Update public view with display name "Active Orders" for the table with display name "Order": active records only, columns Order Number, Bill To, Order Date, Due Date, Order Status, Grand Total, Owner, Modified On, sort by Modified On descending.

35. Create public view with display name "Orders By Status" for the table with display name "Order": columns Order Number, Order Status, Bill To, Grand Total, Created On, sort by Order Status ascending then Created On descending.

36. List the existing public views of the table with display name "Order Line".

37. Update public view with display name "Active Order Lines" for the table with display name "Order Line": active records only, columns Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Order, sort by Line Number ascending.

38. Create public view with display name "Subgrid Order Lines" for the table with display name "Order Line" with query type subgrid: active records only, columns Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Order, sort by Line Number ascending.

39. Read back all 4 views just created and confirm the columns and filter conditions match the requirements.

---

## J. Form Design

40. List the forms of the table with display name "Order" and identify which main form should be used for layout editing.

41. Design the main form of the table with display name "Order": tab "Summary" with section "Order Information" containing Order Number, Order Date, Due Date, Bill To, Order Status, PO Number; section "Amounts" containing Total Amount, Tax Amount, Grand Total; section "Notes" containing Remarks; tab "Lines" containing a subgrid of child Order Lines using the view with display name "Subgrid Order Lines".

42. On the same form, add header fields in this order: primary name, owner, state, status. And change form display name to "Order".

43. On the same form, add an Administrator tab (placed at the end) with 2 sections (empty labels); left section contains: createdon, createdby, modifiedon, modifiedby; right section contains: primary name, owner, state, status. All fields must be read-only.

44. Read back the main form of the table with display name "Order" and confirm all fields and the Order Lines subgrid are in the correct positions.

45. List the forms of the table with display name "Order Line" and identify which main form should be used.

46. Design the main form of the table with display name "Order Line": section "Line Information" containing Line Number, Product Name, Quantity, Unit Price, Discount Percent, Line Total, Line Status, and the Order lookup; section "Notes" containing Description.

47. Add a header and Administrator tab to the main form of the table with display name "Order Line" identical to the Order form.

48. Read back the main form of the table with display name "Order Line" and confirm all fields are in the correct positions.

---

## K. Model-Driven App & Navigation

49. Check whether a model-driven app with display name "Order MCP App" exists; if it does not exist, create it in the solution with display name "Order MCP Solution" with display name "Order MCP App" and description "Order management model-driven app".

50. Read the details and current navigation of the app with display name "Order MCP App"; confirm the app has navigation configured, identify the starter Account item if present, and determine whether an Orders area/group already exists.

51. Configure the app with display name "Order MCP App" navigation so it has an area named "Orders" at the first position, a group named "Transactions" inside it, and menu items for the table with display name "Order" and the table with display name "Order Line" in that order.

52. Read back the app with display name "Order MCP App" navigation and confirm the Orders area is first, the Transactions group exists, Order then Order Line appear in the correct order, and whether the navigation is ready to publish.

---

## L. Web Resource

53. Check for any JavaScript web resources with names containing "ordermcp" or "order" to avoid duplicates.

54. Create a local file at D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\OrderMcp\js\order.form.js. In the solution with display name "Order MCP Solution", create a JavaScript web resource for this file, path /ordermcp/order.form.js; the file should have namespace OrderMcp.Order, async function syncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) that asks for confirmation before reading Order Status from the parent Order record and updating the Line Status of all child Order Lines accordingly, and function canSyncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) that returns true only when the form has been saved (record already has an id).

55. Continue update file D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\OrderMcp\js\order.form.js by add function OnLoad then attach it to main form Order. In the body of function OnLoad show a dialog "Hello Order" that user knew that the OnLoad attached to form. Make sure you deploy the webresource after you update.

56. Read back the web resource just created (ordermcp/order.form.js) and confirm it has the correct namespace, sync function, and enable function.

---

## M. Ribbon (Classic Button)

57. View all existing buttons on the form ribbon of the table with display name "Order" before adding a new button.

58. Add a button to the ribbon on the main form of the table with display name "Order", label "Sync Line Status", calling function OrderMcp.Order.syncLineStatus from the web resource created in prompt 54, using OrderMcp.Order.canSyncLineStatus as the enable rule.

59. Hide the Activate and Deactivate button on the classic form ribbon of the table with display name "Order".

60. Create a new webresource file .svg, idea button is "Sync Line Status", save at D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\OrderMcp\button\sync-line-status.svg and deploy it to the solution with display name "Order MCP Solution"

61. Update the ribbon button with label "Sync Line Status" with the button image sync-line-status.svg

62. View all existing buttons on the form ribbon of the table with display name "Order" and locate the Activate and Deactivate buttons if present.

---

## N. Sample Data

63. Create an Account with display name "Customer A" to use as a sample customer for Order.

64. Create an Order: Order Number ORD-0001, Order Date 2026-04-28, Due Date 2026-05-28, Bill To Account with display name "Customer A", Order Status Draft, Total Amount 500, Tax Amount 50, Grand Total 550, PO Number PO-ORDER-001.

65. Create an Order Line as a child of ORD-0001: Line Number 1, Product Name "Consulting Service", Quantity 2, Unit Price 200, Discount Percent 0, Line Total 400, Line Status Draft.

66. Read back Order ORD-0001 and Order Line 1, fetching only the important fields to confirm the data is linked correctly.

67. Create 2 more Order Lines for ORD-0001: Line Number 2 and 3, each with a different Product Name, Line Status Draft.

68. Generate 10 sample Order records in the date range 2026-01-01 to 2026-04-28, rotating Order Status through Draft, Confirmed, Shipped, Paid, Cancelled.

69. Import the 10 sample Orders into the environment; if Bill To is required, use Account with display name "Customer A".

---

## O. Query & Search

70. Add search columns for the table with display name "Order" and the table with display name "Order Line" to enable Quick Find search.

71. Enable Dataverse Search for the table with display name "Order" and the table with display name "Order Line" in the solution with display name "Order MCP Solution".

72. Query Order ORD-0001 with all child Order Lines, returning Order Number, Order Status, Line Number, Product Name, Quantity, Line Total, Line Status.

73. Search for keyword ORD-0001 in Dataverse and report which records related to Order or Order Line are found.

74. Count Order Lines per Order and confirm that ORD-0001 has at least 3 lines.

---

## P. Parse URL & Direct Web API

75. The URL of Order ORD-0001 is provided by the user, parse it to confirm the entity logical name and record GUID.

76. Read Order ORD-0001 directly via Dataverse Web API, fetching only Order Number, Order Status, Grand Total, Modified On; compare the result with the standard record read approach.

---

## Q. Update Record & Audit

77. Update Order ORD-0001: change Order Status from Draft to Confirmed and set Grand Total to 660.

78. View the audit history of Order ORD-0001 in the last 24 hours, focusing on changes to Order Status and Grand Total.

---

## R. Messages, Plugins, Custom API

79. List all Dataverse messages available for the table with display name "Order", especially Create, Update, SetState, and any custom actions.

80. Check whether any custom API is bound to the table with display name "Order"; if so, describe its input, output, and the handling plugin.

81. Check active plugin steps on the table with display name "Order" for the Update message: assembly, type, stage, mode, and image if any.

82. View plugin trace logs in the last 60 minutes related to the table with display name "Order"; if none exist, state that clearly.

---

## S. System Jobs, Workflows, BPF, Flows

83. View failed system jobs in the last 24 hours related to the table with display name "Order"; if any, summarize the error and key stack trace.

84. Check active classic workflows on the table with display name "Order", both background and realtime; summarize trigger fields and mode if any.

85. Check which business process flows are associated with the table with display name "Order", listing stages and primary entities.

86. Check for cloud flows with names containing "Order MCP"; if found, open detail and view the latest few runs and their status.

---

## T. Business Rules & Security

87. Check business rules on the table with display name "Order" (both active and draft); if any exist, open the first rule and summarize its conditions and actions.

88. Check what permissions the "System Administrator" role has on the table with display name "Order".

89. Check the current user's effective permissions on the table with display name "Order": Create, Read, Write, Delete, Append, Append To.

---

## U. Metadata Updates & Publish

90. Add option "Archived" to the global choice with display name "Order Status" with color purple (#7030A0), then read it back to confirm the new option and color are present.

91. Enable audit and advanced find for the column with display name "Order Status" on the table with display name "Order" if currently disabled.

92. Update the view with display name "Active Orders" to add the PO Number column; read it back to confirm the layout and query are still in sync.

93. Update the main form of the table with display name "Order" so that PO Number is inside the "Order Information" section; read it back to confirm the correct position.

94. Update the web resource created in prompt 54 (ordermcp/order.form.js): add a short comment "// Order MCP v1" at the top of the file; read it back to confirm.

95. Publish all customizations for the table with display name "Order", the table with display name "Order Line", the global choice with display name "Order Status", and the model-driven app navigation for the app with display name "Order MCP App".

---

## V. End-of-Session Audit & System Jobs Check

96. View the last 24 hours of audit history for the current user, up to 20 rows, confirming that MCP operations have been recorded.

97. View publish or customization system jobs in the last 60 minutes, both succeeded and failed, to verify results after metadata creation steps.

---

## W. Summary

98. Check the solution with display name "Order MCP Solution" and list all components now inside it: tables, columns, choices, forms, views, web resources, ribbon, commands, model-driven app, sitemap, and environment variables.

99. Summarize the "Order MCP Solution" session: what was created successfully, what was skipped due to environment limitations, and which prompts should be re-run to clean up or start over from scratch.