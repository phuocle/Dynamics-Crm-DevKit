# MCP Test Prompts — TEST-MCP / Invoice & Invoice Line

Chạy tuần tự từ trên xuống. Mỗi prompt là một dòng, đánh số thứ tự.
Solution target: display name **TEST-MCP**

---

## A. Xác nhận kết nối & môi trường

1. Tôi đang kết nối vào môi trường Dataverse nào? Cho tôi biết tên tổ chức, URL, phiên bản, user hiện tại là ai và có những role nào.
   > ✅ Tools: whoami
   > Result: Org 🟢DEVKITV4 (unq82131d861aa7f011870600224806e), URL https://dynamics-crm-devkit-v4.crm.dynamics.com, version 9.2.26043.140, user "# DEVKIT", role System Administrator.
2. Solution tên "TEST-MCP" trong môi trường này đang chứa những component gì?
   > ✅ Tools: get_solution_components(TEST-MCP)
   > Result: Solution TEST-MCP (publisher DEVKITV4, unmanaged, v1.0.0.0) hiện rỗng — 0 component.

---

## B. Global Choice

3. Trong solution "TEST-MCP", tạo một danh sách lựa chọn toàn cục có display name "Invoice Status", gồm các giá trị: Draft, Confirmed, Shipped, Paid, Cancelled.
   > ✅ Tools: manage_choice(list) → manage_choice(create, v4_invoicestatus, solution=TEST-MCP)
   > Result: Global choice v4_invoicestatus tạo thành công với 5 options (Draft=111110000, Confirmed=111110001, Shipped=111110002, Paid=111110003, Cancelled=111110004), đã publish.
4. Đọc lại danh sách lựa chọn v4_invoicestatus và liệt kê đầy đủ tất cả giá trị kèm số nguyên tương ứng.
   > ✅ Tools: manage_choice(detail, v4_invoicestatus)
   > Result: 5 options — Draft=111110000, Confirmed=111110001, Shipped=111110002, Paid=111110003, Cancelled=111110004.

---

## C. Environment Variable

5. Trong solution "TEST-MCP", tạo một biến môi trường tên display name "Invoice Test Mode", kiểu chuỗi, giá trị mặc định là dev, giá trị hiện tại là test.
   > ✅ Tools: manage_environment_variable(create) → manage_environment_variable(create, confirmed_prefix=v4)
   > Result: Tạo thành công biến môi trường v4_InvoiceTestMode (Invoice Test Mode), kiểu String, defaultValue=dev, currentValue=test trong solution TEST-MCP.
6. Đổi giá trị hiện tại của biến môi trường "Invoice Test Mode" thành staging, rồi đọc lại để xác nhận.
   > ✅ Tools: manage_environment_variable(update, v4_InvoiceTestMode, value=staging) → manage_environment_variable(detail, v4_InvoiceTestMode)
   > Result: Cập nhật thành công currentValue=staging; đọc lại xác nhận defaultValue=dev, currentValue=staging.

---

## D. Tạo Table

7. Trong solution "TEST-MCP", tạo bảng "Invoice", tên số nhiều "Invoices", tên trường chính là "Invoice Name", bật ghi chú, bật audit, bật quick create, dùng user ownership.
   > ✅ Tools: upsert_table(Invoice, solution=TEST-MCP) → upsert_table(Invoice, confirmed_prefix=v4)
   > Result: Tạo thành công bảng v4_invoice (schema v4_Invoice) trong solution TEST-MCP, primary attribute v4_name (Invoice Name), hasNotes=yes, audit=true, quickCreate=true, published=true.
8. Trong solution "TEST-MCP", tạo bảng "Invoice Line", tên số nhiều "Invoice Lines", tên trường chính là "Line Name", bật ghi chú, bật audit, bật quick create, dùng user ownership.
   > ✅ Tools: upsert_table(Invoice Line, solution=TEST-MCP) → upsert_table(Invoice Line, confirmed_prefix=v4)
   > Result: Tạo thành công bảng v4_invoiceline (schema v4_InvoiceLine) trong solution TEST-MCP, primary attribute v4_name (Line Name), hasNotes=yes, audit=true, quickCreate=true, ownership=UserOwned, published=true.
9. Kiểm tra metadata bảng Invoice vừa tạo: logical name thật, trường id chính, trường tên chính, trường owner, trạng thái audit.
   > ✅ Tools: get_tables(filter=invoice) → get_tables(v4_invoice)
   > Result: Logical name v4_invoice, PrimaryId=v4_invoiceid, PrimaryName=v4_name (Invoice Name), owner=ownerid (systemuser/team), IsAuditEnabled=Yes.
10. Kiểm tra metadata bảng Invoice Line vừa tạo: logical name thật, trường id chính, trường tên chính, trường owner, trạng thái audit.
   > ✅ Tools: get_tables(filter=invoice line) → get_tables(v4_invoiceline)
   > Result: Logical name v4_invoiceline, PrimaryId=v4_invoicelineid, PrimaryName=v4_name (Line Name), owner=ownerid (systemuser/team, UserOwned), IsAuditEnabled=Yes.

---

## E. Tạo Column cho Invoice

11. Trong solution "TEST-MCP", thêm cột "Invoice Number" vào bảng Invoice, kiểu văn bản, bắt buộc, độ dài tối đa 100.
   > ✅ Tools: upsert_column(entity=invoice) → error "entity not found" → get_tables(filter=invoice) → upsert_column(entity=v4_invoice) → upsert_column(confirmed_prefix=v4)
   > Result: Cột v4_invoicenumber (Invoice Number) tạo thành công trên v4_invoice, kiểu Text, required, maxLength=100, đã publish vào solution TEST-MCP.
12. Trong solution "TEST-MCP", thêm cột "Invoice Date" vào bảng Invoice, kiểu ngày tháng (date only), bắt buộc.
   > ✅ Tools: upsert_column(entity=invoice) → error "entity not found" → get_tables(filter=invoice) → upsert_column(entity=v4_invoice) → upsert_column(confirmed_prefix=v4)
   > Result: Cột v4_invoicedate (Invoice Date) tạo thành công trên v4_invoice, kiểu DateTime/DateOnly, required, đã publish vào solution TEST-MCP.
13. Trong solution "TEST-MCP", thêm cột "Due Date" vào bảng Invoice, kiểu ngày tháng (date only).
   > ✅ Tools: upsert_column(entity=invoice) → error "entity not found" → get_tables(filter=invoice) → upsert_column(entity=v4_invoice) → upsert_column(confirmed_prefix=v4)
   > Result: Cột v4_duedate (Due Date) tạo thành công trên v4_invoice, kiểu DateTime/DateOnly, optional, đã publish vào solution TEST-MCP.
14. Trong solution "TEST-MCP", thêm cột "Bill To" vào bảng Invoice, kiểu customer lookup trỏ tới Account hoặc Contact, bắt buộc.
   > ✅ Tools: get_tables(entity_name=invoice) → error → get_tables(filter=invoice) → upsert_column(customer, v4_invoice) → upsert_column(confirmed_prefix=v4)
   > Result: Cột v4_billto (Bill To) tạo thành công trên v4_invoice, kiểu Customer (polymorphic: account+contact), required, targets=account,contact, đã publish vào solution TEST-MCP.
15. Trong solution "TEST-MCP", thêm cột "Invoice Status" vào bảng Invoice, kiểu picklist và dùng global choice v4_invoicestatus.
   > ✅ Tools: upsert_column(entity=invoice) → AmbiguousEntity error → upsert_column(entity=v4_invoice) → PrefixConfirmationRequired → upsert_column(entity=v4_invoice, confirmed_prefix=v4)
   > Result: Cột v4_invoicestatus (Invoice Status) tạo thành công trên v4_invoice, kiểu Picklist dùng GlobalOptionSet v4_invoicestatus, đã publish vào solution TEST-MCP.
16. Trong solution "TEST-MCP", thêm cột "Total Amount" vào bảng Invoice, kiểu tiền tệ, precision 2.
   > ✅ Tools: upsert_column(entity=invoice) → AmbiguousEntity error → upsert_column(entity=v4_invoice) → PrefixConfirmationRequired → upsert_column(entity=v4_invoice, confirmed_prefix=v4)
   > Result: Cột v4_totalamount (Total Amount) tạo thành công trên v4_invoice, kiểu Money, precision=2, precisionSource=0, đã publish vào solution TEST-MCP.
17. Trong solution "TEST-MCP", thêm cột "Tax Amount" vào bảng Invoice, kiểu tiền tệ, precision 2.
   > ✅ Tools: upsert_column(entity=invoice) → AmbiguousEntity error → upsert_column(entity=v4_invoice) → PrefixConfirmationRequired → upsert_column(entity=v4_invoice, confirmed_prefix=v4)
   > Result: Cột v4_taxamount (Tax Amount) tạo thành công trên v4_invoice, kiểu Money, precision=2, precisionSource=0, đã publish vào solution TEST-MCP.
18. Trong solution "TEST-MCP", thêm cột "Grand Total" vào bảng Invoice, kiểu tiền tệ, precision 2.
   > ✅ Tools: upsert_column(entity=invoice) → AmbiguousEntity error → upsert_column(entity=v4_invoice) → PrefixConfirmationRequired → upsert_column(entity=v4_invoice, confirmed_prefix=v4)
   > Result: Cột v4_grandtotal (Grand Total) tạo thành công trên v4_invoice, kiểu Money, precision=2, precisionSource=0, đã publish vào solution TEST-MCP.
19. Trong solution "TEST-MCP", thêm cột "PO Number" vào bảng Invoice, kiểu văn bản, độ dài tối đa 100.
   > ✅ Tools: upsert_column(entity=invoice) → AmbiguousEntity error → upsert_column(entity=v4_invoice) → PrefixConfirmationRequired → upsert_column(entity=v4_invoice, confirmed_prefix=v4)
   > Result: Cột v4_ponumber (PO Number) tạo thành công trên v4_invoice, kiểu Text, maxLength=100, đã publish vào solution TEST-MCP.
20. Trong solution "TEST-MCP", thêm cột "Remarks" vào bảng Invoice, kiểu văn bản nhiều dòng, độ dài tối đa 4000.
   > ✅ Tools: upsert_column(entity=invoice) → AmbiguousEntity error → upsert_column(entity=v4_invoice) → PrefixConfirmationRequired → upsert_column(entity=v4_invoice, confirmed_prefix=v4)
   > Result: Cột v4_remarks (Remarks) tạo thành công trên v4_invoice, kiểu Memo, maxLength=4000, đã publish vào solution TEST-MCP.

---

## F. Tạo Column cho Invoice Line

21. Trong solution "TEST-MCP", thêm cột "Line Number" vào bảng Invoice Line, kiểu số nguyên, bắt buộc, min 1, max 999999.
   > ✅ Tools: get_tables(filter=invoice line) → get_tables(entity=v4_invoiceline, filter=line) → upsert_column(v4_invoiceline, linenumber, integer) → upsert_column(confirmed_prefix=v4)
   > Result: Cột v4_linenumber (Line Number) tạo thành công trên v4_invoiceline, kiểu Integer, required, min=1, max=999999, đã publish vào solution TEST-MCP.
22. Trong solution "TEST-MCP", thêm cột "Product Name" vào bảng Invoice Line, kiểu văn bản, bắt buộc, độ dài tối đa 200.
   > ✅ Tools: upsert_column(entity=invoicedetail) → error "entity not found" → get_tables(filter=invoice) → upsert_column(entity=v4_invoiceline) → PrefixConfirmationRequired → upsert_column(entity=v4_invoiceline, confirmed_prefix=v4)
   > Result: Cột v4_productname (Product Name) tạo thành công trên v4_invoiceline, kiểu Text, required, maxLength=200, đã publish vào solution TEST-MCP.
23. Trong solution "TEST-MCP", thêm cột "Description" vào bảng Invoice Line, kiểu văn bản nhiều dòng, độ dài tối đa 2000.
   > ✅ Tools: get_tables(filter=invoice) → upsert_column(v4_invoiceline, description, memo) → upsert_column(confirmed_prefix=v4)
   > Result: Cột v4_description (Description) tạo thành công trên v4_invoiceline, kiểu Memo, maxLength=2000, đã publish vào solution TEST-MCP.
24. Trong solution "TEST-MCP", thêm cột "Quantity" vào bảng Invoice Line, kiểu số thập phân, bắt buộc, min 0, max 1000000, precision 2.
   > ✅ Tools: upsert_column(entity=invoicedetail) → error "entity not found" → get_tables(filter=invoice) → upsert_column(entity=v4_invoiceline, quantity, decimal, solution=TEST-MCP)
   > Result: Cột v4_quantity (Quantity) tạo thành công trên v4_invoiceline, kiểu Decimal, required, min=0, max=1000000, precision=2, đã publish vào solution TEST-MCP.
25. Trong solution "TEST-MCP", thêm cột "Unit Price" vào bảng Invoice Line, kiểu tiền tệ, bắt buộc, precision 2.
   > ✅ Tools: get_tables(filter=invoice line) → upsert_column(v4_invoiceline, unitprice, money, required, precision=2, solution=TEST-MCP)
   > Result: Cột v4_unitprice (Unit Price) tạo thành công trên v4_invoiceline, kiểu Money, required, precision=2, precisionSource=0, đã publish vào solution TEST-MCP.
26. Trong solution "TEST-MCP", thêm cột "Discount Percent" vào bảng Invoice Line, kiểu số thập phân, min 0, max 100, precision 2.
   > ✅ Tools: get_tables(filter=invoice) → upsert_column(v4_invoiceline, discountpercent, decimal, solution=TEST-MCP)
   > Result: Cột v4_discountpercent (Discount Percent) tạo thành công trên v4_invoiceline, kiểu Decimal, min=0, max=100, precision=2, đã publish vào solution TEST-MCP.
27. Trong solution "TEST-MCP", thêm cột "Line Total" vào bảng Invoice Line, kiểu tiền tệ, precision 2.
   > ✅ Tools: whoami() → get_tables(filter=Invoice Line) → upsert_column(v4_invoiceline, linetotal, money, precision=2, solution=TEST-MCP)
   > Result: Column v4_linetotal (Line Total) was created on v4_invoiceline as Money with precision=2 and published into solution TEST-MCP.
28. Trong solution "TEST-MCP", thêm cột "Line Status" vào bảng Invoice Line, kiểu picklist và dùng global choice v4_invoicestatus.
   > ✅ Tools: get_tables(filter=Invoice Line) → manage_choice(detail, v4_invoicestatus) → upsert_column(v4_invoiceline, linestatus, picklist, global_optionset=v4_invoicestatus, solution=TEST-MCP) → get_tables(v4_invoiceline, filter=v4_linestatus)
   > Result: Column v4_linestatus (Line Status) was created on v4_invoiceline as a Picklist using global choice v4_invoicestatus and published into solution TEST-MCP.

---

## G. Quan hệ giữa Invoice và Invoice Line

29. Trong solution "TEST-MCP", tạo quan hệ một-nhiều từ bảng Invoice sang bảng Invoice Line, lookup trên Invoice Line có display name "Invoice", cascade kiểu referential.
   > ✅ Tools: get_tables(filter=invoice) → upsert_relationship(create_1n, v4_invoice→v4_invoiceline, lookup_display_name=Invoice, cascade_preset=Referential, solution=TEST-MCP)
   > Result: Tạo thành công quan hệ v4_invoice_invoiceline (1:N), lookup field v4_invoice (display "Invoice") trên v4_invoiceline, cascade Referential (Delete=RemoveLink, các cascade còn lại=NoCascade), đã publish.
30. Kiểm tra lại metadata bảng Invoice Line và cho biết tên thật của lookup field đang trỏ về Invoice.
   > ✅ Tools: get_tables(filter=invoice) → get_tables(entity_name=v4_invoiceline)
   > Result: Lookup field trỏ về v4_invoice có logical name **v4_invoice** (DisplayName: "Invoice"), quan hệ N:1 `v4_invoice_invoiceline`.

---

## H. Publish

31. Publish customization cho bảng Invoice, bảng Invoice Line và global choice v4_invoicestatus.
   > ✅ Tools: publish_customizations(invoice,invoiceline+global_optionset) → error entity not found → get_tables(filter=invoice) → publish_customizations(v4_invoice,v4_invoiceline+global_optionset)
   > Result: Published v4_invoice, v4_invoiceline và global option sets thành công trong 4.9 giây (cần dùng logical name có prefix v4_ thay vì invoice/invoiceline).

---

## I. Thiết kế Form

32. Xem danh sách form của bảng Invoice và cho biết main form nào nên dùng để chỉnh layout.
   > ✅ Tools: manage_form(list invoice) → get_tables(filter Invoice) → manage_form(list v4_invoice)
   > Result: Bảng Invoice có logical name `v4_invoice`; chỉ có 1 Main form active tên `Information` (`88c99640-0fdc-43f9-b36f-e7da759ccc86`), nên dùng form này để chỉnh layout.
33. Thiết kế main form của Invoice: tab "Summary" gồm section "Invoice Information" chứa Invoice Number, Invoice Date, Due Date, Bill To, Invoice Status, PO Number và section "Amounts" chứa Total Amount, Tax Amount, Grand Total và section "Notes" chứa Remarks; tab "Lines" chứa subgrid các Invoice Line con.
   > ✅ Tools: get_tables(v4_invoice) → get_tables(v4_invoiceline) → manage_form(detail) → manage_view(list v4_invoiceline) → manage_form(update formxml) → manage_form(detail)
   > Result: Main form `Information` của `v4_invoice` đã được publish với tab Summary gồm 3 section yêu cầu và tab Lines có subgrid Invoice Lines dùng relationship `v4_invoice_invoiceline`.
33a. Cũng form đang làm việc, thêm header các field theo thứ tự primary name, owner, state, status
   > ✅ Tools: manage_form(update add_header v4_name,ownerid,statecode,statuscode) → manage_form(detail)
   > Result: Header của main form `Information` trên `v4_invoice` đã được publish với các field theo đúng thứ tự `v4_name`, `ownerid`, `statecode`, `statuscode`.
33b. Cũng form đang làm việc, thêm 1 tab Administrator (đặt ở cuối), tab có 2 section (emtpty label), section bên trái có các field: createdon, createdby, modifiedon, modifiedby, section bên phải có field: primary name, owner, status, status. Lưu ý, tất cả các fields phải readonly.
   > ✅ Tools: get_tables(v4_invoice) → manage_form(detail) → manage_form(update add_tab Administrator) → manage_form(detail)
   > Result: Tab `Administrator` đã được publish ở cuối main form `Information`, gồm 2 section không hiện label; các field `createdon`, `createdby`, `modifiedon`, `modifiedby`, `v4_name`, `ownerid`, `statecode`, `statuscode` đều readonly.
34. Đọc lại main form Invoice và xác nhận các field cùng subgrid Invoice Lines đã ở đúng vị trí.
   > ✅ Tools: manage_form(detail v4_invoice Information)
   > Result: Xác nhận main form `Information` có tab Summary với các section/field đúng yêu cầu, tab Lines có subgrid `Invoice Lines` dùng relationship `v4_invoice_invoiceline`, tab Administrator ở cuối và header đúng thứ tự.
35. Xem danh sách form của bảng Invoice Line và cho biết main form nào nên dùng.
   > ✅ Tools: manage_form(list invoice line) → get_tables(filter Invoice Line) → manage_form(list v4_invoiceline)
   > Result: Bảng Invoice Line có logical name `v4_invoiceline`; chỉ có 1 Main form active tên `Information` (`9e4eccea-f8dd-4dc6-9102-7ec0bc38d1df`), nên dùng form này để chỉnh layout.
36. Thiết kế main form của Invoice Line: section "Line Information" chứa Line Number, Product Name, Quantity, Unit Price, Discount Percent, Line Total, Line Status và lookup Invoice; section "Notes" chứa Description.
   > ✅ Tools: get_tables(v4_invoiceline) → manage_form(detail) → manage_form(update formxml) → manage_form(detail)
   > Result: Main form `Information` của `v4_invoiceline` đã được publish với section `Line Information` chứa 8 field yêu cầu và section `Notes` chứa `Description`.
36a. Hãy thêm header và tab Administrator của form Invoice Line giống form Invoice
   > ✅ Tools: get_tables(v4_invoiceline) → manage_form(detail) → manage_form(update add_header + add_tab Administrator) → manage_form(detail)
   > Result: Main form `Information` của `v4_invoiceline` đã được publish với header `v4_name`, `ownerid`, `statecode`, `statuscode` và tab `Administrator` readonly giống form Invoice.
37. Đọc lại main form Invoice Line và xác nhận các field đã ở đúng vị trí.
   > ✅ Tools: manage_form(detail v4_invoiceline Information)
   > Result: Xác nhận main form `Information` của `v4_invoiceline` có section `Line Information` và `Notes` đúng field, header đúng thứ tự, tab `Administrator` ở cuối với các field readonly.

---

## J. Thiết kế View

38. Xem các public view hiện có của bảng Invoice.
   > ✅ Tools: manage_view(list invoice) → error entity not found → get_tables(filter=invoice) → manage_view(list v4_invoice)
   > Result: Bảng v4_invoice có 2 public view: `Active Invoices` (default, active, unmanaged) và `Inactive Invoices` (active, unmanaged).
39. Tạo public view "TEST-MCP Active Invoices" cho bảng Invoice: chỉ record active, cột Invoice Number, Bill To, Invoice Date, Due Date, Invoice Status, Grand Total, Owner, Modified On, sort Modified On giảm dần.
   > ✅ Tools: get_tables(filter=invoice) → get_tables(entity=v4_invoice) → manage_view(list, TEST-MCP Active Invoices) → manage_view(create, v4_invoice)
   > Result: View "TEST-MCP Active Invoices" tạo thành công trên v4_invoice với 8 cột, filter statecode=0 (active), sort modifiedon descending, đã publish.
40. Tạo public view "TEST-MCP Invoices By Status" cho bảng Invoice: cột Invoice Number, Invoice Status, Bill To, Grand Total, Created On, sort Invoice Status tăng dần rồi Created On giảm dần.
   > ✅ Tools: manage_view(list, TEST-MCP Invoices By Status) → manage_view(create, v4_invoice)
   > Result: View "TEST-MCP Invoices By Status" tạo thành công trên v4_invoice với 5 cột, sort v4_invoicestatus tăng dần rồi createdon giảm dần, đã publish.
41. Xem các public view hiện có của bảng Invoice Line.
   > ✅ Tools: manage_view(list, v4_invoiceline, query_type=0)
   > Result: Bảng v4_invoiceline có 2 public view: `Active Invoice Lines` (default, active, unmanaged) và `Inactive Invoice Lines` (active, unmanaged).
42. Tạo public view "TEST-MCP Invoice Lines" cho bảng Invoice Line: chỉ record active, cột Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Invoice, sort Line Number tăng dần.
   > ✅ Tools: manage_view(list, TEST-MCP Invoice Lines) → get_tables(v4_invoiceline) → manage_view(create, v4_invoiceline)
   > Result: View "TEST-MCP Invoice Lines" tạo thành công trên v4_invoiceline với 7 cột, filter statecode=0 (active), sort v4_linenumber tăng dần, đã publish.
42a. Tạo public view "Subgrid Invoice Lines" cho bảng Invoice Lines. Bạn AI, đủ hiểu các columns cần thiết để tạo ra subgrid này nên hãy đề xuất.
   > ✅ Tools: manage_view(list, Subgrid Invoice Lines) → manage_view(create, v4_invoiceline)
   > Result: View "Subgrid Invoice Lines" tạo thành công trên v4_invoiceline với 6 cột (Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status), filter active, sort Line Number tăng dần, đã publish.
43. Đọc lại 4 view vừa tạo và xác nhận cột hiển thị cùng điều kiện lọc đúng yêu cầu.
   > ✅ Tools: manage_view(detail, TEST-MCP Active Invoices) → manage_view(detail, TEST-MCP Invoices By Status) → manage_view(detail, TEST-MCP Invoice Lines) → manage_view(detail, Subgrid Invoice Lines)
   > Result: Cả 4 view đều đúng — Active Invoices (8 cột, filter active, sort modifiedon↓), Invoices By Status (5 cột, sort status↑ createdon↓), Invoice Lines (7 cột, filter active, sort linenumber↑), Subgrid Invoice Lines (6 cột, filter active, sort linenumber↑).

---

## K. App & Sitemap

44. Kiểm tra trong môi trường có model-driven app tên "TEST-MCP App" chưa; nếu chưa có thì báo rõ cần tạo app đó tại Power Apps trước rồi dừng các bước liên quan app.
   > ⚠️ Tools: execute_webapi(GET appmodules, filter name='TEST-MCP App')
   > Result: Không tìm thấy model-driven app "TEST-MCP App"; cần tạo app đó tại Power Apps trước rồi dừng các bước liên quan app.
45. Xem sitemap hiện tại của app "TEST-MCP App" và cho biết đã có area hoặc group phù hợp để thêm Invoice chưa.
   > ✅ Tools: manage_sitemap(detail, app=TEST-MCP App) → execute_webapi(GET sitemaps)
   > Result: Sitemap hiện có Area1 với group MCP và subarea account; có thể dùng group MCP để thêm Invoice, nhưng chưa có area/group Invoicing riêng.
46. Cập nhật sitemap của app "TEST-MCP App": thêm khu vực tên "Invoicing", bên trong có menu mở bảng Invoice và menu mở bảng Invoice Line.
   > ✅ Tools: get_tables(v4_invoice,v4_invoiceline) → manage_sitemap(update, app=TEST-MCP App)
   > Result: Đã thêm area Invoicing với group Invoicing gồm 2 menu entity v4_invoice và v4_invoiceline; sitemap validated, backup created, published.
47. Đọc lại sitemap app "TEST-MCP App" và xác nhận Invoice cùng Invoice Line đã xuất hiện đúng vị trí.
   > ✅ Tools: manage_sitemap(detail, app=TEST-MCP App) → execute_webapi(GET appmodules) → execute_webapi(GET sitemaps)
   > Result: Confirmed sitemap contains Area Invoicing with Group Invoicing and SubAreas Invoice (v4_invoice) and Invoice Line (v4_invoiceline) in the expected position.

---

## L. Web Resource

48. Kiểm tra các JavaScript web resource có tên chứa "testmcp" hoặc "invoice" để tránh tạo trùng.
   > ✅ Tools: manage_webresource(list, name=testmcp, type=js) → manage_webresource(list, name=invoice, type=js)
   > Result: Tìm thấy 4 JavaScript web resources chứa testmcp (button.js, flyout.js, ieff.js, split.js) và không có JavaScript web resource nào chứa invoice.
49. Tạo file ở local D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestMcp\js\invoice.form.js. Trong solution "TEST-MCP", tạo JavaScript web resource tên v4_/testmcp/invoice.form.js; file có namespace TestMcp.Invoice, hàm syncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) đọc Invoice Status từ bản ghi Invoice cha rồi cập nhật Line Status của tất cả Invoice Line con tương ứng, và hàm canSyncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) trả về true chỉ khi form đã được lưu (record đã có id).
   > ✅ Tools: manage_webresource(list, name=v4_/testmcp/invoice.form.js) → get_tables(v4_invoice) → get_tables(v4_invoiceline) → manage_webresource(create, v4_/testmcp/invoice.form.js, solution=TEST-MCP) → execute_webapi(GET webresourceset)
   > Result: Đã tạo file local invoice.form.js và tạo/publish JavaScript web resource `v4_/testmcp/invoice.form.js` với namespace `TestMcp.Invoice`, hàm `syncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds)` và `canSyncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds)`.
50. Đọc lại web resource v4_/testmcp/invoice.form.js và xác nhận đủ namespace, hàm đồng bộ và hàm enable.

---

## M. Ribbon (Classic Button)

51. Xem tất cả button hiện có trên form của bảng Invoice để biết trước khi thêm nút mới.
52. Thêm nút vào ribbon trên main form của bảng Invoice, label "Sync Line Status", gọi hàm TestMcp.Invoice.syncLineStatus từ web resource devkit_/testmcp/invoice.form.js, dùng hàm TestMcp.Invoice.canSyncLineStatus để bật tắt nút.
53. Đọc lại ribbon của bảng Invoice và xác nhận nút "Sync Line Status" đã được thêm đúng cấu hình.

---

## N. Command Bar Hiện Đại (Hide/Show)

54. Trong app "TEST-MCP App", xem command bar hiện đại trên form Invoice và tìm các lệnh Activate cùng Deactivate.
55. Trong app "TEST-MCP App", ẩn lệnh Deactivate trên command bar form Invoice; nếu không phải modern command thì báo rõ lý do, không dùng classic ribbon thay thế.
56. Trong app "TEST-MCP App", ẩn lệnh Activate trên command bar form Invoice; nếu không phải modern command thì báo rõ lý do, không dùng classic ribbon thay thế.
57. Trong app "TEST-MCP App", kiểm tra lại command bar form Invoice và cho biết Activate cùng Deactivate đang ở trạng thái hidden hay visible.
58. Trong app "TEST-MCP App", hiện lại lệnh Deactivate trên command bar form Invoice để xác nhận nhánh show hoạt động đúng.
59. Trong app "TEST-MCP App", hiện lại lệnh Activate trên command bar form Invoice để xác nhận nhánh show hoạt động đúng.

---

## O. Dữ Liệu Test

60. Tạo một Account tên "TEST-MCP Client A" để dùng làm khách hàng test cho Invoice.
61. Tạo một Invoice: Invoice Number INV-0001, Invoice Date 2026-04-28, Due Date 2026-05-28, Bill To Account "TEST-MCP Client A", Invoice Status Draft, Total Amount 500, Tax Amount 50, Grand Total 550, PO Number PO-TEST-001.
62. Tạo Invoice Line con của INV-0001: Line Number 1, Product Name "Consulting Service", Quantity 2, Unit Price 200, Discount Percent 0, Line Total 400, Line Status Draft.
63. Đọc lại Invoice INV-0001 và Invoice Line số 1, chỉ lấy các field quan trọng để xác nhận dữ liệu liên kết đúng.
64. Tạo thêm 2 Invoice Line cho INV-0001: Line Number 2 và 3, mỗi line có Product Name khác nhau, Line Status Draft.
65. Sinh dữ liệu demo 10 Invoice trong khoảng từ 2026-01-01 đến 2026-04-28, xoay vòng Invoice Status qua Draft, Confirmed, Shipped, Paid, Cancelled.
66. Import 10 Invoice demo vừa sinh vào môi trường; nếu Bill To là bắt buộc thì dùng Account "TEST-MCP Client A".

---

## P. Truy Vấn & Tìm Kiếm

67. Truy vấn Invoice INV-0001 kèm tất cả Invoice Line con, trả về Invoice Number, Invoice Status, Line Number, Product Name, Quantity, Line Total, Line Status.
68. Tìm kiếm từ khóa INV-0001 trong Dataverse và cho biết record nào liên quan Invoice hoặc Invoice Line được tìm thấy.
69. Đếm số Invoice Line theo từng Invoice và xác nhận INV-0001 hiện có ít nhất 3 line.

---

## Q. Parse URL & Web API Trực Tiếp

70. Dán URL record Invoice INV-0001 từ trình duyệt vào đây để xác nhận entity logical name và record GUID.
71. Đọc trực tiếp Invoice INV-0001 qua Dataverse Web API, chỉ lấy Invoice Number, Invoice Status, Grand Total, Modified On; so sánh kết quả với cách đọc record thông thường.

---

## R. Cập Nhật Record & Audit

72. Cập nhật Invoice INV-0001: đổi Invoice Status từ Draft sang Confirmed và Grand Total thành 660.
73. Xem lịch sử audit của Invoice INV-0001 trong 24 giờ gần nhất, tập trung vào thay đổi Invoice Status và Grand Total.

---

## S. Messages, Plugin, Custom API

74. Cho biết các Dataverse message nào có thể dùng cho bảng Invoice, đặc biệt Create, Update, SetState và custom action nếu có.
75. Kiểm tra có custom API nào được gắn với bảng Invoice không; nếu có thì mô tả input, output và plugin xử lý.
76. Kiểm tra plugin step active trên bảng Invoice cho message Update: assembly, type, stage, mode và image nếu có.
77. Xem plugin trace log trong 60 phút gần nhất liên quan đến bảng Invoice; nếu không có thì nói rõ.

---

## T. System Jobs, Workflow, BPF, Flow

78. Xem system job bị lỗi trong 24 giờ gần nhất liên quan đến Invoice; nếu có thì tóm tắt lỗi và stack trace quan trọng.
79. Kiểm tra classic workflow active trên bảng Invoice, cả background lẫn realtime; tóm tắt trigger field và mode nếu có.
80. Kiểm tra business process flow nào đang liên quan đến bảng Invoice, cho biết stage và primary entity.
81. Kiểm tra cloud flow có tên chứa "TEST-MCP"; nếu có thì mở detail và xem vài run gần nhất cùng trạng thái.

---

## U. Business Rules & Security

82. Kiểm tra business rule trên bảng Invoice (cả active lẫn draft); nếu có thì mở detail rule đầu tiên và tóm tắt điều kiện cùng action.
83. Kiểm tra role "System Administrator" có quyền gì trên bảng Invoice.
84. Kiểm tra quyền effective của user hiện tại trên bảng Invoice: Create, Read, Write, Delete, Append, Append To.

---

## V. Cập Nhật Metadata & Publish

85. Thêm option "Archived" vào global choice v4_invoicestatus, rồi đọc lại để xác nhận option mới đã có.
86. Bật audit và advanced find cho cột Invoice Status trên bảng Invoice nếu đang tắt.
87. Cập nhật view "TEST-MCP Active Invoices" để thêm cột PO Number; đọc lại xác nhận layout và query còn đồng bộ.
88. Cập nhật main form Invoice để PO Number nằm trong section "Invoice Information"; đọc lại xác nhận đúng vị trí.
89. Cập nhật web resource devkit_/testmcp/invoice.form.js: thêm comment ngắn "// TEST-MCP v1" ở dòng đầu file; đọc lại xác nhận.
90. Publish lại toàn bộ customization: bảng Invoice, Invoice Line, global choice v4_invoicestatus và sitemap app.

---

## W. Kiểm Tra Audit & System Jobs Cuối Phiên

91. Xem audit 24 giờ gần nhất của user hiện tại, tối đa 20 dòng, xác nhận các thao tác test MCP đã được ghi vào audit.
92. Xem system job publish hoặc customization trong 60 phút gần nhất, cả succeeded và failed, kiểm tra kết quả sau các bước tạo metadata.

---

## X. Tổng Kết

93. Kiểm tra lại solution "TEST-MCP" và liệt kê đầy đủ component đã nằm trong solution: bảng, cột, choice, form, view, web resource, ribbon, command, sitemap, biến môi trường.
94. Tổng kết phiên test "TEST-MCP": những gì tạo thành công, những gì bị bỏ qua do môi trường không hỗ trợ, và những prompt nào nên chạy lại nếu muốn dọn dẹp hoặc test lại từ đầu.
