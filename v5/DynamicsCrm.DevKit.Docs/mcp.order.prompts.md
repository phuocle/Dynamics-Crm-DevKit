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
   > ✅ `mcp__devkit_codex__whoami(include_token=false)`
   > 🎯 Result: Connected to the DEVKITV4 Dataverse environment using version 9.2.26044.135 as user # DEVKIT with the System Administrator role.

2. What components does the solution with display name "Order MCP Solution" currently contain?
   > ✅ `mcp__devkit_codex__get_solution_components(solution_name="Order MCP Solution")`
   > 🎯 Result: Order MCP Solution currently contains no components.

---

## B. Global Choice

3. In the solution with display name "Order MCP Solution", create a global choice with display name "Order Status" containing the following values: Draft, Confirmed, Shipped, Paid, Cancelled.
   > ✅ `mcp__devkit_codex__manage_choice(action="create", display_name="Order Status", options="Draft;Confirmed;Shipped;Paid;Cancelled", solution_name="Order MCP Solution")`
   > 🎯 Result: Global choice Order Status created with the labels Draft, Confirmed, Shipped, Paid, and Cancelled.

4. Read back the global choice with display name "Order Status" just created and list all values as human-readable labels only; do not include integer codes, logical names, GUIDs, or any machine-readable identifiers in the result.
   > ✅ `mcp__devkit_codex__manage_choice(action="detail", optionset_name="Order Status")`
   > 🎯 Result: Order Status contains Draft, Confirmed, Shipped, Paid, and Cancelled.

5. Update the colors of the global choice with display name "Order Status": Draft=gray (#808080), Confirmed=blue (#0070C0), Shipped=orange (#FF7C00), Paid=green (#00B050), Cancelled=red (#FF0000); read it back to confirm the colors were applied correctly.
   > ✅ `mcp__devkit_codex__manage_choice(action="update", optionset_name="Order Status", option_colors="Draft:#808080;Confirmed:#0070C0;Shipped:#FF7C00;Paid:#00B050;Cancelled:#FF0000")`
   >    `mcp__devkit_codex__manage_choice(action="detail", optionset_name="Order Status")`
   > 🎯 Result: Order Status colors were applied for Draft, Confirmed, Shipped, Paid, and Cancelled.

---

## C. Environment Variable

6. In the solution with display name "Order MCP Solution", create an environment variable with display name "Order Production Mode", type string, default value dev, current value production.
   > ✅ `mcp__devkit_codex__manage_environment_variable(action="create", solution_name="Order MCP Solution", display_name="Order Production Mode", type="string", default_value="dev", value="production")`
   > 🎯 Result: Environment variable Order Production Mode created with default value dev and current value production.

7. Update the current value of the environment variable with display name "Order Production Mode" to staging, then read it back to confirm.
   > ✅ `mcp__devkit_codex__manage_environment_variable(action="update", variable_name="Order Production Mode", value="staging")`
   >    `mcp__devkit_codex__manage_environment_variable(action="detail", variable_name="Order Production Mode")`
   > 🎯 Result: Environment variable Order Production Mode now has current value staging.

---

## D. Create Tables

8. In the solution with display name "Order MCP Solution", create a table with display name "Order", plural name "Orders", primary field name "Order Name", enable notes, enable audit, enable quick create, user ownership.
   > ✅ `mcp__devkit_codex__upsert_table(entity_name="Order", display_name="Order", display_collection_name="Orders", solution_name="Order MCP Solution", primary_attribute_display_name="Order Name", has_notes=true, is_audit_enabled=true, is_quick_create_enabled=true, ownership_type="User")`
   > 🎯 Result: Table Order created with notes, audit, quick create, and user ownership enabled.

9. In the solution with display name "Order MCP Solution", create a table with display name "Order Line", plural name "Order Lines", primary field name "Line Name", enable notes, enable audit, enable quick create, user ownership.
   > ✅ `mcp__devkit_codex__upsert_table(entity_name="Order Line", display_name="Order Line", display_collection_name="Order Lines", solution_name="Order MCP Solution", primary_attribute_display_name="Line Name", has_notes=true, is_audit_enabled=true, is_quick_create_enabled=true, ownership_type="User")`
   > 🎯 Result: Table Order Line created with notes, audit, quick create, and user ownership enabled.

10. Check the metadata of the table with display name "Order" just created: actual logical name, primary id field, primary name field, owner field, audit status.
   > ✅ `mcp__devkit_codex__get_tables(entity_name="Order")`
   > 🎯 Result: Order metadata confirms a custom user-owned audited table with primary name Order Name, owner field Owner, and standard primary identifier.

11. Check the metadata of the table with display name "Order Line" just created: actual logical name, primary id field, primary name field, owner field, audit status.
   > ✅ `mcp__devkit_codex__get_tables(entity_name="Order Line")`
   > 🎯 Result: Order Line metadata confirms a custom user-owned audited table with primary name Line Name, owner field Owner, and standard primary identifier.

---

## E. Create Columns for Order

12. In the solution with display name "Order MCP Solution", add column with display name "Order Number" to the table with display name "Order", type text, required, max length 100.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Order Number", attribute_type="string", display_name="Order Number", solution_name="Order MCP Solution", required_level="Required", max_length=100)`
   > 🎯 Result: Order Number text column created on Order as required with maximum length one hundred.

13. In the solution with display name "Order MCP Solution", add column with display name "Order Date" to the table with display name "Order", type date only, required.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Order Date", attribute_type="datetime", display_name="Order Date", solution_name="Order MCP Solution", format="DateOnly", behavior="DateOnly", required_level="Required")`
   > 🎯 Result: Order Date date-only column created on Order as required.

14. In the solution with display name "Order MCP Solution", add column with display name "Due Date" to the table with display name "Order", type date only.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Due Date", attribute_type="datetime", display_name="Due Date", solution_name="Order MCP Solution", format="DateOnly", behavior="DateOnly")`
   > 🎯 Result: Due Date date-only column created on Order.

15. In the solution with display name "Order MCP Solution", add column with display name "Bill To" to the table with display name "Order", type customer lookup targeting Account or Contact, required.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Bill To", attribute_type="customer", display_name="Bill To", solution_name="Order MCP Solution", required_level="Required")`
   > 🎯 Result: Bill To customer lookup created on Order as required and targeting Account or Contact.

16. In the solution with display name "Order MCP Solution", add column with display name "Order Status" to the table with display name "Order", type picklist using the global choice with display name "Order Status" created earlier.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Order Status", attribute_type="picklist", display_name="Order Status", solution_name="Order MCP Solution", global_optionset_name="Order Status")`
   > 🎯 Result: Order Status picklist created on Order using the Order Status global choice.

17. In the solution with display name "Order MCP Solution", add column with display name "Total Amount" to the table with display name "Order", type currency, precision 2.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Total Amount", attribute_type="money", display_name="Total Amount", solution_name="Order MCP Solution", precision=2)`
   > 🎯 Result: Total Amount currency column created on Order with two-decimal precision.

18. In the solution with display name "Order MCP Solution", add column with display name "Tax Amount" to the table with display name "Order", type currency, precision 2.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Tax Amount", attribute_type="money", display_name="Tax Amount", solution_name="Order MCP Solution", precision=2)`
   > 🎯 Result: Tax Amount currency column created on Order with two-decimal precision.

19. In the solution with display name "Order MCP Solution", add column with display name "Grand Total" to the table with display name "Order", type currency, precision 2.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Grand Total", attribute_type="money", display_name="Grand Total", solution_name="Order MCP Solution", precision=2)`
   > 🎯 Result: Grand Total currency column created on Order with two-decimal precision.

20. In the solution with display name "Order MCP Solution", add column with display name "PO Number" to the table with display name "Order", type text, max length 100.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="PO Number", attribute_type="string", display_name="PO Number", solution_name="Order MCP Solution", max_length=100)`
   > 🎯 Result: PO Number text column created on Order with maximum length one hundred.

21. In the solution with display name "Order MCP Solution", add column with display name "Remarks" to the table with display name "Order", type multiline text, max length 4000.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order", attribute_name="Remarks", attribute_type="memo", display_name="Remarks", solution_name="Order MCP Solution", max_length=4000)`
   > 🎯 Result: Remarks multiline text column created on Order with maximum length four thousand.

---

## F. Create Columns for Order Line

22. In the solution with display name "Order MCP Solution", add column with display name "Line Number" to the table with display name "Order Line", type integer, required, min 1, max 999999.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order Line", attribute_name="Line Number", attribute_type="integer", display_name="Line Number", solution_name="Order MCP Solution", required_level="Required", min_value=1, max_value=999999)`
   > 🎯 Result: Line Number integer column created on Order Line as required with the requested range.

23. In the solution with display name "Order MCP Solution", add column with display name "Product Name" to the table with display name "Order Line", type text, required, max length 200.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order Line", attribute_name="Product Name", attribute_type="string", display_name="Product Name", solution_name="Order MCP Solution", required_level="Required", max_length=200)`
   > 🎯 Result: Product Name text column created on Order Line as required with maximum length two hundred.

24. In the solution with display name "Order MCP Solution", add column with display name "Description" to the table with display name "Order Line", type multiline text, max length 2000.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order Line", attribute_name="Description", attribute_type="memo", display_name="Description", solution_name="Order MCP Solution", max_length=2000)`
   > 🎯 Result: Description multiline text column created on Order Line with maximum length two thousand.

25. In the solution with display name "Order MCP Solution", add column with display name "Quantity" to the table with display name "Order Line", type decimal, required, min 0, max 1000000, precision 2.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order Line", attribute_name="Quantity", attribute_type="decimal", display_name="Quantity", solution_name="Order MCP Solution", required_level="Required", min_value=0, max_value=1000000, precision=2)`
   > 🎯 Result: Quantity decimal column created on Order Line as required with the requested range and precision.

26. In the solution with display name "Order MCP Solution", add column with display name "Unit Price" to the table with display name "Order Line", type currency, required, precision 2.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order Line", attribute_name="Unit Price", attribute_type="money", display_name="Unit Price", solution_name="Order MCP Solution", required_level="Required", precision=2)`
   > 🎯 Result: Unit Price currency column created on Order Line as required with two-decimal precision.

27. In the solution with display name "Order MCP Solution", add column with display name "Discount Percent" to the table with display name "Order Line", type decimal, min 0, max 100, precision 2.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order Line", attribute_name="Discount Percent", attribute_type="decimal", display_name="Discount Percent", solution_name="Order MCP Solution", min_value=0, max_value=100, precision=2)`
   > 🎯 Result: Discount Percent decimal column created on Order Line with the requested range and precision.

28. In the solution with display name "Order MCP Solution", add column with display name "Line Total" to the table with display name "Order Line", type currency, precision 2.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order Line", attribute_name="Line Total", attribute_type="money", display_name="Line Total", solution_name="Order MCP Solution", precision=2)`
   > 🎯 Result: Line Total currency column created on Order Line with two-decimal precision.

29. In the solution with display name "Order MCP Solution", add column with display name "Line Status" to the table with display name "Order Line", type picklist using the global choice with display name "Order Status" created earlier.
   > ✅ `mcp__devkit_codex__upsert_column(entity_name="Order Line", attribute_name="Line Status", attribute_type="picklist", display_name="Line Status", solution_name="Order MCP Solution", global_optionset_name="Order Status")`
   > 🎯 Result: Line Status picklist created on Order Line using the Order Status global choice.

---

## G. Relationship Between Order and Order Line

30. In the solution with display name "Order MCP Solution", create a one-to-many relationship from the table with display name "Order" to the table with display name "Order Line", the lookup on the child table has display name "Order", cascade type referential.
   > ✅ `mcp__devkit_codex__upsert_relationship(action="create_1n", referenced_entity="Order", referencing_entity="Order Line", solution_name="Order MCP Solution", lookup_display_name="Order", cascade_preset="Referential")`
   > 🎯 Result: One-to-many relationship from Order to Order Line created with referential cascade behavior and child lookup Order.

31. Check the metadata of the table with display name "Order Line" and identify the actual logical name of the lookup field pointing to the parent Order table.
   > ✅ `mcp__devkit_codex__get_tables(entity_name="Order Line")`
   > 🎯 Result: Order Line metadata confirms the parent lookup field is the Order lookup.

---

## H. Publish

32. Publish customizations for the table with display name "Order", the table with display name "Order Line", and the global choice with display name "Order Status".
   > ✅ `mcp__devkit_codex__publish_customizations(entities="Order,Order Line", include_global_optionset=true)`
   > 🎯 Result: Customizations published for Order, Order Line, and global choices.

---

## I. View Design

33. List the existing public views of the table with display name "Order".
   > ✅ `mcp__devkit_codex__manage_view(action="list", entity_name="Order", query_type=0, include_personal=false, include_fetchxml=false)`
   > 🎯 Result: Order already has public views named Active Orders and Inactive Orders.

34. Update public view with display name "Active Orders" for the table with display name "Order": active records only, columns Order Number, Bill To, Order Date, Due Date, Order Status, Grand Total, Owner, Modified On, sort by Modified On descending.
   > ✅ `mcp__devkit_codex__manage_view(action="update", entity_name="Order", view_name="Active Orders", query_type=0, layoutxml="<grid name=\"resultset\" jump=\"Order Number\" select=\"1\" icon=\"1\" preview=\"1\"><row name=\"result\" id=\"Order\"><cell name=\"Order Number\" width=\"150\"/><cell name=\"Bill To\" width=\"150\"/><cell name=\"Order Date\" width=\"100\"/><cell name=\"Due Date\" width=\"100\"/><cell name=\"Order Status\" width=\"120\"/><cell name=\"Grand Total\" width=\"120\"/><cell name=\"Owner\" width=\"120\"/><cell name=\"Modified On\" width=\"140\"/></row></grid>", fetchxml="<fetch><entity name=\"Order\"><attribute name=\"Order Number\"/><attribute name=\"Bill To\"/><attribute name=\"Order Date\"/><attribute name=\"Due Date\"/><attribute name=\"Order Status\"/><attribute name=\"Grand Total\"/><attribute name=\"Owner\"/><attribute name=\"Modified On\"/><filter><condition attribute=\"statecode\" operator=\"eq\" value=\"0\"/></filter><order attribute=\"Modified On\" descending=\"true\"/></entity></fetch>")`
   > 🎯 Result: Active Orders was updated for active Order records with the requested columns and Modified On descending sort.

35. Create public view with display name "Orders By Status" for the table with display name "Order": columns Order Number, Order Status, Bill To, Grand Total, Created On, sort by Order Status ascending then Created On descending.
   > ✅ `mcp__devkit_codex__manage_view(action="create", entity_name="Order", view_name="Orders By Status", layoutxml="<grid name=\"resultset\" jump=\"Order Number\" select=\"1\" icon=\"1\" preview=\"1\"><row name=\"result\" id=\"Order\"><cell name=\"Order Number\" width=\"150\"/><cell name=\"Order Status\" width=\"120\"/><cell name=\"Bill To\" width=\"150\"/><cell name=\"Grand Total\" width=\"120\"/><cell name=\"Created On\" width=\"140\"/></row></grid>", fetchxml="<fetch><entity name=\"Order\"><attribute name=\"Order Number\"/><attribute name=\"Order Status\"/><attribute name=\"Bill To\"/><attribute name=\"Grand Total\"/><attribute name=\"Created On\"/><order attribute=\"Order Status\" descending=\"false\"/><order attribute=\"Created On\" descending=\"true\"/></entity></fetch>")`
   > 🎯 Result: Orders By Status was created with the requested Order columns and sorting by Order Status then Created On.

36. List the existing public views of the table with display name "Order Line".
   > ✅ `mcp__devkit_codex__manage_view(action="list", entity_name="Order Line", query_type=0, include_personal=false, include_fetchxml=false)`
   > 🎯 Result: Order Line has public views named Active Order Lines and Inactive Order Lines.

37. Update public view with display name "Active Order Lines" for the table with display name "Order Line": active records only, columns Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Order, sort by Line Number ascending.
   > ✅ `mcp__devkit_codex__manage_view(action="update", entity_name="Order Line", view_name="Active Order Lines", query_type=0, layoutxml="<grid name=\"resultset\" jump=\"Line Number\" select=\"1\" icon=\"1\" preview=\"1\"><row name=\"result\" id=\"Order Line\"><cell name=\"Line Number\" width=\"100\"/><cell name=\"Product Name\" width=\"180\"/><cell name=\"Quantity\" width=\"100\"/><cell name=\"Unit Price\" width=\"120\"/><cell name=\"Line Total\" width=\"120\"/><cell name=\"Line Status\" width=\"120\"/><cell name=\"Order\" width=\"150\"/></row></grid>", fetchxml="<fetch><entity name=\"Order Line\"><attribute name=\"Line Number\"/><attribute name=\"Product Name\"/><attribute name=\"Quantity\"/><attribute name=\"Unit Price\"/><attribute name=\"Line Total\"/><attribute name=\"Line Status\"/><attribute name=\"Order\"/><filter><condition attribute=\"statecode\" operator=\"eq\" value=\"0\"/></filter><order attribute=\"Line Number\" descending=\"false\"/></entity></fetch>")`
   > 🎯 Result: Active Order Lines was updated for active Order Line records with the requested columns and Line Number ascending sort.

38. Create public view with display name "Subgrid Order Lines" for the table with display name "Order Line" with query type subgrid: active records only, columns Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Order, sort by Line Number ascending.
   > ✅ `mcp__devkit_codex__manage_view(action="create", entity_name="Order Line", view_name="Subgrid Order Lines", query_type=64, layoutxml="<grid name=\"resultset\" jump=\"Line Number\" select=\"1\" icon=\"1\" preview=\"1\"><row name=\"result\" id=\"Order Line\"><cell name=\"Line Number\" width=\"100\"/><cell name=\"Product Name\" width=\"180\"/><cell name=\"Quantity\" width=\"100\"/><cell name=\"Unit Price\" width=\"120\"/><cell name=\"Line Total\" width=\"120\"/><cell name=\"Line Status\" width=\"120\"/><cell name=\"Order\" width=\"150\"/></row></grid>", fetchxml="<fetch><entity name=\"Order Line\"><attribute name=\"Line Number\"/><attribute name=\"Product Name\"/><attribute name=\"Quantity\"/><attribute name=\"Unit Price\"/><attribute name=\"Line Total\"/><attribute name=\"Line Status\"/><attribute name=\"Order\"/><filter><condition attribute=\"statecode\" operator=\"eq\" value=\"0\"/></filter><order attribute=\"Line Number\" descending=\"false\"/></entity></fetch>")`
   > 🎯 Result: Subgrid Order Lines was created for active Order Line records with the requested columns and Line Number ascending sort.

39. Read back all 4 views just created and confirm the columns and filter conditions match the requirements.
   > ✅ `mcp__devkit_codex__manage_view(action="detail", entity_name="Order", view_name="Active Orders", query_type=0)`
   >    `mcp__devkit_codex__manage_view(action="detail", entity_name="Order", view_name="Orders By Status", query_type=0)`
   >    `mcp__devkit_codex__manage_view(action="detail", entity_name="Order Line", view_name="Active Order Lines", query_type=0)`
   >    `mcp__devkit_codex__manage_view(action="detail", entity_name="Order Line", view_name="Subgrid Order Lines", query_type=64)`
   > 🎯 Result: Active Orders, Orders By Status, Active Order Lines, and Subgrid Order Lines match the requested columns, filters, and sort requirements.

---

## J. Form Design

40. List the forms of the table with display name "Order" and identify which main form should be used for layout editing.
   > ✅ `mcp__devkit_codex__manage_form(action="list", entity_name="Order", form_type=2, include_formxml=false)`
   > 🎯 Result: Order has one active main form named Information, which should be used for layout editing.

41. Design the main form of the table with display name "Order": tab "Summary" with section "Order Information" containing Order Number, Order Date, Due Date, Bill To, Order Status, PO Number; section "Amounts" containing Total Amount, Tax Amount, Grand Total; section "Notes" containing Remarks; tab "Lines" containing a subgrid of child Order Lines using the view with display name "Subgrid Order Lines".
   > ✅ `mcp__devkit_codex__manage_form(action="detail", entity_name="Order", form_name="Information", form_type=2)`
   >    `mcp__devkit_codex__manage_form(action="update", entity_name="Order", form_id="adfde007-1406-40b3-a5a0-8939ecfd0964", operations="[{\"action\":\"manage_tab\",\"manage_action\":\"remove\",\"tab\":\"General\"},{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Summary\",\"name\":\"tab_summary\",\"tab_columns\":2,\"position\":\"first\",\"sections\":[{\"label\":\"Order Information\",\"name\":\"summary_sec_order_information\",\"section_columns\":2,\"tab_column\":1,\"fields\":[{\"field\":\"Order Number\"},{\"field\":\"Order Date\"},{\"field\":\"Due Date\"},{\"field\":\"Bill To\"},{\"field\":\"Order Status\"},{\"field\":\"PO Number\"}]},{\"label\":\"Amounts\",\"name\":\"summary_sec_amounts\",\"section_columns\":1,\"tab_column\":2,\"fields\":[{\"field\":\"Total Amount\"},{\"field\":\"Tax Amount\"},{\"field\":\"Grand Total\"}]},{\"label\":\"Notes\",\"name\":\"summary_sec_notes\",\"section_columns\":1,\"tab_column\":2,\"fields\":[{\"field\":\"Remarks\",\"rowspan\":4}]}]},{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Lines\",\"name\":\"tab_lines\",\"tab_columns\":1,\"position\":\"last\",\"sections\":[{\"label\":\"Order Lines\",\"name\":\"lines_sec_order_lines\",\"section_columns\":1,\"tab_column\":1,\"fields\":[]}]},{\"action\":\"manage_subgrid\",\"manage_action\":\"add\",\"tab\":\"tab_lines\",\"section\":\"lines_sec_order_lines\",\"label\":\"Order Lines\",\"control_id\":\"devkitv5_order_orderline\",\"relationship_name\":\"devkitv5_order_orderline\",\"target_entity\":\"devkitv5_orderline\",\"view_id\":\"{3c1713bd-9b4e-f111-bec6-000d3a5ae021}\",\"rows_per_page\":10,\"rowspan\":10,\"enable_view_picker\":false,\"enable_quick_find\":false}]", validate=true, backup=true)`
   >    `mcp__devkit_codex__manage_form(action="detail", entity_name="Order", form_id="adfde007-1406-40b3-a5a0-8939ecfd0964")`
   > 🎯 Result: Order main form now has Summary and Lines tabs with the requested sections, fields, and Order Lines subgrid.

42. On the same form, add header fields in this order: primary name, owner, state, status. And change form display name to "Order".
   > ✅ `mcp__devkit_codex__manage_form(action="update", entity_name="Order", form_id="adfde007-1406-40b3-a5a0-8939ecfd0964", operations="[{\"action\":\"manage_fields\",\"manage_action\":\"add_header\",\"fields\":[{\"field\":\"Order Name\"},{\"field\":\"Owner\"},{\"field\":\"Status\"},{\"field\":\"Status Reason\"}]}]", validate=true, backup=true)`
   >    `mcp__devkit_codex__manage_form(action="rename", entity_name="Order", form_id="adfde007-1406-40b3-a5a0-8939ecfd0964", form_name="Order", backup=true)`
   > 🎯 Result: Order main form header now contains Order Name, Owner, Status, and Status Reason, and the form display name is Order.

43. On the same form, add an Administrator tab (placed at the end) with 2 sections (empty labels); left section contains: createdon, createdby, modifiedon, modifiedby; right section contains: primary name, owner, state, status. All fields must be read-only.
   > ✅ `mcp__devkit_codex__manage_form(action="update", entity_name="Order", form_id="adfde007-1406-40b3-a5a0-8939ecfd0964", operations="[{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Administrator\",\"name\":\"tab_administrator\",\"tab_columns\":2,\"position\":\"last\",\"sections\":[{\"label\":\"\",\"name\":\"administrator_sec_left\",\"section_columns\":1,\"tab_column\":1,\"show_label\":false,\"fields\":[{\"field\":\"Created On\",\"disabled\":true},{\"field\":\"Created By\",\"disabled\":true},{\"field\":\"Modified On\",\"disabled\":true},{\"field\":\"Modified By\",\"disabled\":true}]},{\"label\":\"\",\"name\":\"administrator_sec_right\",\"section_columns\":1,\"tab_column\":2,\"show_label\":false,\"fields\":[{\"field\":\"Order Name\",\"disabled\":true},{\"field\":\"Owner\",\"disabled\":true},{\"field\":\"Status\",\"disabled\":true},{\"field\":\"Status Reason\",\"disabled\":true}]}]}]", validate=true, backup=true)`
   > 🎯 Result: Administrator tab was added at the end of the Order form with two read-only field sections.

44. Read back the main form of the table with display name "Order" and confirm all fields and the Order Lines subgrid are in the correct positions.
   > ✅ `mcp__devkit_codex__manage_form(action="detail", entity_name="Order", form_id="adfde007-1406-40b3-a5a0-8939ecfd0964")`
   > 🎯 Result: Order form layout confirms the requested header, Summary fields, Lines subgrid, and Administrator read-only fields are in the correct positions.

45. List the forms of the table with display name "Order Line" and identify which main form should be used.
   > ✅ `mcp__devkit_codex__manage_form(action="list", entity_name="Order Line", form_type=2, include_formxml=false)`
   > 🎯 Result: Order Line has one active main form named Information, which should be used for layout editing.

46. Design the main form of the table with display name "Order Line": section "Line Information" containing Line Number, Product Name, Quantity, Unit Price, Discount Percent, Line Total, Line Status, and the Order lookup; section "Notes" containing Description.
   > ✅ `mcp__devkit_codex__manage_form(action="detail", entity_name="Order Line", form_name="Information", form_type=2)`
   >    `mcp__devkit_codex__manage_form(action="update", entity_name="Order Line", form_id="a31c076e-3a59-4d96-bd05-5a0312f4981c", operations="[{\"action\":\"manage_tab\",\"manage_action\":\"remove\",\"tab\":\"General\"},{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Summary\",\"name\":\"tab_summary\",\"tab_columns\":2,\"position\":\"first\",\"sections\":[{\"label\":\"Line Information\",\"name\":\"summary_sec_line_information\",\"section_columns\":2,\"tab_column\":1,\"fields\":[{\"field\":\"Line Number\"},{\"field\":\"Product Name\"},{\"field\":\"Quantity\"},{\"field\":\"Unit Price\"},{\"field\":\"Discount Percent\"},{\"field\":\"Line Total\"},{\"field\":\"Line Status\"},{\"field\":\"Order\"}]},{\"label\":\"Notes\",\"name\":\"summary_sec_notes\",\"section_columns\":1,\"tab_column\":2,\"fields\":[{\"field\":\"Description\",\"rowspan\":4}]}]}]", validate=true, backup=true)`
   > 🎯 Result: Order Line main form now has Line Information and Notes sections with the requested fields.

47. Add a header and Administrator tab to the main form of the table with display name "Order Line" identical to the Order form.
   > ✅ `mcp__devkit_codex__manage_form(action="update", entity_name="Order Line", form_id="a31c076e-3a59-4d96-bd05-5a0312f4981c", operations="[{\"action\":\"manage_fields\",\"manage_action\":\"add_header\",\"fields\":[{\"field\":\"Line Name\"},{\"field\":\"Owner\"},{\"field\":\"Status\"},{\"field\":\"Status Reason\"}]},{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Administrator\",\"name\":\"tab_administrator\",\"tab_columns\":2,\"position\":\"last\",\"sections\":[{\"label\":\"\",\"name\":\"administrator_sec_left\",\"section_columns\":1,\"tab_column\":1,\"show_label\":false,\"fields\":[{\"field\":\"Created On\",\"disabled\":true},{\"field\":\"Created By\",\"disabled\":true},{\"field\":\"Modified On\",\"disabled\":true},{\"field\":\"Modified By\",\"disabled\":true}]},{\"label\":\"\",\"name\":\"administrator_sec_right\",\"section_columns\":1,\"tab_column\":2,\"show_label\":false,\"fields\":[{\"field\":\"Line Name\",\"disabled\":true},{\"field\":\"Owner\",\"disabled\":true},{\"field\":\"Status\",\"disabled\":true},{\"field\":\"Status Reason\",\"disabled\":true}]}]}]", validate=true, backup=true)`
   > 🎯 Result: Order Line main form now has the requested header and Administrator tab with read-only fields.

48. Read back the main form of the table with display name "Order Line" and confirm all fields are in the correct positions.
   > ✅ `mcp__devkit_codex__manage_form(action="detail", entity_name="Order Line", form_id="a31c076e-3a59-4d96-bd05-5a0312f4981c")`
   > 🎯 Result: Order Line form layout confirms the requested header, Line Information fields, Notes section, and Administrator read-only fields are in the correct positions.

---

## K. Model-Driven App & Navigation

49. Check whether a model-driven app with display name "Order MCP App" exists; if it does not exist, create it in the solution with display name "Order MCP Solution" with display name "Order MCP App" and description "Order management model-driven app".
   > ✅ `mcp__devkit_codex__manage_app(action="list", app_name="Order MCP App", max_records=50)`
   >    `mcp__devkit_codex__manage_app(action="create", solution_name="Order MCP Solution", display_name="Order MCP App", description="Order management model-driven app")`
   > 🎯 Result: Model-driven app Order MCP App was created in Order MCP Solution with the requested description.

50. Read the details and current navigation of the app with display name "Order MCP App"; confirm the app has navigation configured, identify the starter Account item if present, and determine whether an Orders area/group already exists.
   > ✅ `mcp__devkit_codex__manage_app(action="detail", app="Order MCP App")`
   > 🎯 Result: Order MCP App has starter navigation with Workspace and Default containing Accounts; no Orders area or Transactions group is present yet.

51. Configure the app with display name "Order MCP App" navigation so it has an area named "Orders" at the first position, a group named "Transactions" inside it, and menu items for the table with display name "Order" and the table with display name "Order Line" in that order.
   > ✅ `mcp__devkit_codex__manage_app(action="update_navigation", app="Order MCP App", backup=true, operations="[{\"action\":\"add_area\",\"label\":\"Orders\",\"id\":\"area_orders\",\"show_groups\":true,\"position\":\"first\"},{\"action\":\"add_group\",\"area\":\"Orders\",\"label\":\"Transactions\",\"id\":\"group_transactions\",\"position\":\"first\"},{\"action\":\"add_item\",\"area\":\"Orders\",\"group\":\"Transactions\",\"entity\":\"Order\",\"label\":\"Orders\",\"id\":\"sa_order\",\"position\":\"first\"},{\"action\":\"add_item\",\"area\":\"Orders\",\"group\":\"Transactions\",\"entity\":\"Order Line\",\"label\":\"Order Lines\",\"id\":\"sa_orderline\",\"position\":\"last\"}]")`
   > 🎯 Result: Order MCP App navigation now has Orders first, Transactions inside it, and menu items for Order then Order Line.

52. Read back the app with display name "Order MCP App" navigation and confirm the Orders area is first, the Transactions group exists, Order then Order Line appear in the correct order, and whether the navigation is ready to publish.
   > ✅ `mcp__devkit_codex__manage_app(action="detail", app="Order MCP App")`
   > 🎯 Result: Orders is the first area, Transactions contains Orders then Order Lines in order, and the navigation is configured for publishing.

---

## L. Web Resource

53. Check for any JavaScript web resources with names containing "ordermcp" or "order" to avoid duplicates.
   > ✅ `mcp__devkit_codex__manage_webresource(action="list", name="ordermcp", type_filter="js", max_records=500)`
   >    `mcp__devkit_codex__manage_webresource(action="list", name="order", type_filter="js", max_records=500)`
   > 🎯 Result: No JavaScript web resources containing ordermcp or order were found.

54. Create a local file at D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\OrderMcp\js\order.form.js. In the solution with display name "Order MCP Solution", create a JavaScript web resource for this file, path /ordermcp/order.form.js; the file should have namespace OrderMcp.Order, async function syncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) that asks for confirmation before reading Order Status from the parent Order record and updating the Line Status of all child Order Lines accordingly, and function canSyncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) that returns true only when the form has been saved (record already has an id).
   > ✅ `mcp__devkit_codex__manage_webresource(action="create", name="devkitv5_/ordermcp/order.form.js", file_path="D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\OrderMcp\js\order.form.js", type="js", solution_name="Order MCP Solution", display_name="ordermcp/order.form.js")`
   > 🎯 Result: JavaScript web resource ordermcp/order.form.js was created with OrderMcp.Order sync and enable functions.

54b. Continue update file D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\OrderMcp\js\order.form.js by add function OnLoad then attach it to main form Order. In the body of function OnLoad show a dialog "Hello Order" that user knew that the OnLoad attached to form. Make sure you deploy the webresource after you update.
   > ✅ `mcp__devkit_codex__manage_webresource(action="update", web_resource_id="ordermcp/order.form.js", file_path="D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\OrderMcp\js\order.form.js", display_name="ordermcp/order.form.js")`
   >    `mcp__devkit_codex__manage_form(action="update", entity_name="Order", form_id="adfde007-1406-40b3-a5a0-8939ecfd0964", operations="[{\"action\":\"manage_library\",\"manage_action\":\"add\",\"library_name\":\"devkitv5_/ordermcp/order.form.js\"},{\"action\":\"manage_event\",\"manage_action\":\"add\",\"event_name\":\"onload\",\"function_name\":\"OrderMcp.Order.OnLoad\",\"library_name\":\"devkitv5_/ordermcp/order.form.js\",\"pass_execution_context\":true,\"target\":\"form\"}]", validate=true, backup=true)`
   > 🎯 Result: Order web resource was redeployed and the Order main form now runs OrderMcp.Order.OnLoad on load to show Hello Order.

55. Read back the web resource just created (ordermcp/order.form.js) and confirm it has the correct namespace, sync function, and enable function.

---

## M. Ribbon (Classic Button)

56. View all existing buttons on the form ribbon of the table with display name "Order" before adding a new button.

57. Add a button to the ribbon on the main form of the table with display name "Order", label "Sync Line Status", calling function OrderMcp.Order.syncLineStatus from the web resource created in prompt 54, using OrderMcp.Order.canSyncLineStatus as the enable rule.

58. Hide the Activate and Deactivate button on the classic form ribbon of the table with display name "Order".

59. Create a new webresource file .svg, idea button is "Sync Line Status", save at D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\OrderMcp\button\sync-line-status.svg and deploy it to the solution with display name "Order MCP Solution"

60. Update the ribbon button with label "Sync Line Status" with the button image sync-line-status.svg

61. View all existing buttons on the form ribbon of the table with display name "Order" and locate the Activate and Deactivate buttons if present.

---

## N. Sample Data

62. Create an Account with display name "Customer A" to use as a sample customer for Order.

63. Create an Order: Order Number ORD-0001, Order Date 2026-04-28, Due Date 2026-05-28, Bill To Account with display name "Customer A", Order Status Draft, Total Amount 500, Tax Amount 50, Grand Total 550, PO Number PO-ORDER-001.

64. Create an Order Line as a child of ORD-0001: Line Number 1, Product Name "Consulting Service", Quantity 2, Unit Price 200, Discount Percent 0, Line Total 400, Line Status Draft.

65. Read back Order ORD-0001 and Order Line 1, fetching only the important fields to confirm the data is linked correctly.

65. Read back Order ORD-0001 and Order Line 1, fetching only the important fields to confirm the data is linked correctly.

66. Create 2 more Order Lines for ORD-0001: Line Number 2 and 3, each with a different Product Name, Line Status Draft.

67. Generate 10 sample Order records in the date range 2026-01-01 to 2026-04-28, rotating Order Status through Draft, Confirmed, Shipped, Paid, Cancelled.

68. Import the 10 sample Orders into the environment; if Bill To is required, use Account with display name "Customer A".

---

## O. Query & Search

69. Add search columns for the table with display name "Order" and the table with display name "Order Line" to enable Quick Find search.

70. Enable Dataverse Search for the table with display name "Order" and the table with display name "Order Line" in the solution with display name "Order MCP Solution".

71. Query Order ORD-0001 with all child Order Lines, returning Order Number, Order Status, Line Number, Product Name, Quantity, Line Total, Line Status.

71. Query Order ORD-0001 with all child Order Lines, returning Order Number, Order Status, Line Number, Product Name, Quantity, Line Total, Line Status.

72. Search for keyword ORD-0001 in Dataverse and report which records related to Order or Order Line are found.

73. Count Order Lines per Order and confirm that ORD-0001 has at least 3 lines.

---

## P. Parse URL & Direct Web API

74. The URL of Order ORD-0001 is provided by the user, parse it to confirm the entity logical name and record GUID.

75. Read Order ORD-0001 directly via Dataverse Web API, fetching only Order Number, Order Status, Grand Total, Modified On; compare the result with the standard record read approach.

---

## Q. Update Record & Audit

76. Update Order ORD-0001: change Order Status from Draft to Confirmed and set Grand Total to 660.

77. View the audit history of Order ORD-0001 in the last 24 hours, focusing on changes to Order Status and Grand Total.

---

## R. Messages, Plugins, Custom API

78. List all Dataverse messages available for the table with display name "Order", especially Create, Update, SetState, and any custom actions.

79. Check whether any custom API is bound to the table with display name "Order"; if so, describe its input, output, and the handling plugin.

80. Check active plugin steps on the table with display name "Order" for the Update message: assembly, type, stage, mode, and image if any.

81. View plugin trace logs in the last 60 minutes related to the table with display name "Order"; if none exist, state that clearly.

---

## S. System Jobs, Workflows, BPF, Flows

82. View failed system jobs in the last 24 hours related to the table with display name "Order"; if any, summarize the error and key stack trace.

83. Check active classic workflows on the table with display name "Order", both background and realtime; summarize trigger fields and mode if any.

84. Check which business process flows are associated with the table with display name "Order", listing stages and primary entities.

85. Check for cloud flows with names containing "Order MCP"; if found, open detail and view the latest few runs and their status.

---

## T. Business Rules & Security

86. Check business rules on the table with display name "Order" (both active and draft); if any exist, open the first rule and summarize its conditions and actions.

87. Check what permissions the "System Administrator" role has on the table with display name "Order".

88. Check the current user's effective permissions on the table with display name "Order": Create, Read, Write, Delete, Append, Append To.

---

## U. Metadata Updates & Publish

89. Add option "Archived" to the global choice with display name "Order Status" with color purple (#7030A0), then read it back to confirm the new option and color are present.

90. Enable audit and advanced find for the column with display name "Order Status" on the table with display name "Order" if currently disabled.

91. Update the view with display name "Active Orders" to add the PO Number column; read it back to confirm the layout and query are still in sync.

92. Update the main form of the table with display name "Order" so that PO Number is inside the "Order Information" section; read it back to confirm the correct position.

93. Update the web resource created in prompt 54 (ordermcp/order.form.js): add a short comment "// Order MCP v1" at the top of the file; read it back to confirm.

94. Publish all customizations for the table with display name "Order", the table with display name "Order Line", the global choice with display name "Order Status", and the model-driven app navigation for the app with display name "Order MCP App".

---

## V. End-of-Session Audit & System Jobs Check

95. View the last 24 hours of audit history for the current user, up to 20 rows, confirming that MCP operations have been recorded.

96. View publish or customization system jobs in the last 60 minutes, both succeeded and failed, to verify results after metadata creation steps.

---

## W. Summary

97. Check the solution with display name "Order MCP Solution" and list all components now inside it: tables, columns, choices, forms, views, web resources, ribbon, commands, model-driven app, sitemap, and environment variables.

98. Summarize the "Order MCP Solution" session: what was created successfully, what was skipped due to environment limitations, and which prompts should be re-run to clean up or start over from scratch.
