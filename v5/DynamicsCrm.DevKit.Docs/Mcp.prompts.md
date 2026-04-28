# MCP Test Prompts — TEST-MCP / Invoice & Invoice Line

Chạy tuần tự từ trên xuống. Mỗi prompt là một dòng, đánh số thứ tự.
Solution target: display name **TEST-MCP**

---

## A. Xác nhận kết nối & môi trường

1. Tôi đang kết nối vào môi trường Dataverse nào? Cho tôi biết tên tổ chức, URL, phiên bản, user hiện tại là ai và có những role nào.
2. Solution tên "TEST-MCP" trong môi trường này đang chứa những component gì?

---

## B. Global Choice

3. Trong solution "TEST-MCP", tạo một danh sách lựa chọn toàn cục tên devkit_invoicestatus, display name "Invoice Status", gồm các giá trị: Draft, Confirmed, Shipped, Paid, Cancelled.
4. Đọc lại danh sách lựa chọn devkit_invoicestatus và liệt kê đầy đủ tất cả giá trị kèm số nguyên tương ứng.

---

## C. Environment Variable

5. Trong solution "TEST-MCP", tạo một biến môi trường tên devkit_InvoiceTestMode, display name "Invoice Test Mode", kiểu chuỗi, giá trị mặc định là dev, giá trị hiện tại là test.
6. Đổi giá trị hiện tại của biến devkit_InvoiceTestMode thành staging, rồi đọc lại để xác nhận.

---

## D. Tạo Table

7. Trong solution "TEST-MCP", tạo bảng "Invoice", tên số nhiều "Invoices", tên trường chính là "Invoice Name", bật ghi chú, bật audit, bật quick create, dùng user ownership.
8. Trong solution "TEST-MCP", tạo bảng "Invoice Line", tên số nhiều "Invoice Lines", tên trường chính là "Line Name", bật ghi chú, bật audit, bật quick create, dùng user ownership.
9. Kiểm tra metadata bảng Invoice vừa tạo: logical name thật, trường id chính, trường tên chính, trường owner, trạng thái audit.
10. Kiểm tra metadata bảng Invoice Line vừa tạo: logical name thật, trường id chính, trường tên chính, trường owner, trạng thái audit.

---

## E. Tạo Column cho Invoice

11. Trong solution "TEST-MCP", thêm cột "Invoice Number" vào bảng Invoice, kiểu văn bản, bắt buộc, độ dài tối đa 100.
12. Trong solution "TEST-MCP", thêm cột "Invoice Date" vào bảng Invoice, kiểu ngày tháng (date only), bắt buộc.
13. Trong solution "TEST-MCP", thêm cột "Due Date" vào bảng Invoice, kiểu ngày tháng (date only).
14. Trong solution "TEST-MCP", thêm cột "Bill To" vào bảng Invoice, kiểu customer lookup trỏ tới Account hoặc Contact, bắt buộc.
15. Trong solution "TEST-MCP", thêm cột "Invoice Status" vào bảng Invoice, kiểu picklist và dùng global choice devkit_invoicestatus.
16. Trong solution "TEST-MCP", thêm cột "Total Amount" vào bảng Invoice, kiểu tiền tệ, precision 2.
17. Trong solution "TEST-MCP", thêm cột "Tax Amount" vào bảng Invoice, kiểu tiền tệ, precision 2.
18. Trong solution "TEST-MCP", thêm cột "Grand Total" vào bảng Invoice, kiểu tiền tệ, precision 2.
19. Trong solution "TEST-MCP", thêm cột "PO Number" vào bảng Invoice, kiểu văn bản, độ dài tối đa 100.
20. Trong solution "TEST-MCP", thêm cột "Remarks" vào bảng Invoice, kiểu văn bản nhiều dòng, độ dài tối đa 4000.

---

## F. Tạo Column cho Invoice Line

21. Trong solution "TEST-MCP", thêm cột "Line Number" vào bảng Invoice Line, kiểu số nguyên, bắt buộc, min 1, max 999999.
22. Trong solution "TEST-MCP", thêm cột "Product Name" vào bảng Invoice Line, kiểu văn bản, bắt buộc, độ dài tối đa 200.
23. Trong solution "TEST-MCP", thêm cột "Description" vào bảng Invoice Line, kiểu văn bản nhiều dòng, độ dài tối đa 2000.
24. Trong solution "TEST-MCP", thêm cột "Quantity" vào bảng Invoice Line, kiểu số thập phân, bắt buộc, min 0, max 1000000, precision 2.
25. Trong solution "TEST-MCP", thêm cột "Unit Price" vào bảng Invoice Line, kiểu tiền tệ, bắt buộc, precision 2.
26. Trong solution "TEST-MCP", thêm cột "Discount Percent" vào bảng Invoice Line, kiểu số thập phân, min 0, max 100, precision 2.
27. Trong solution "TEST-MCP", thêm cột "Line Total" vào bảng Invoice Line, kiểu tiền tệ, precision 2.
28. Trong solution "TEST-MCP", thêm cột "Line Status" vào bảng Invoice Line, kiểu picklist và dùng global choice devkit_invoicestatus.

---

## G. Quan hệ giữa Invoice và Invoice Line

29. Trong solution "TEST-MCP", tạo quan hệ một-nhiều từ bảng Invoice sang bảng Invoice Line, lookup trên Invoice Line có display name "Invoice", cascade kiểu referential.
30. Kiểm tra lại metadata bảng Invoice Line và cho biết tên thật của lookup field đang trỏ về Invoice.

---

## H. Publish

31. Publish customization cho bảng Invoice, bảng Invoice Line và global choice devkit_invoicestatus.

---

## I. Thiết kế Form

32. Xem danh sách form của bảng Invoice và cho biết main form nào nên dùng để chỉnh layout.
33. Thiết kế main form của Invoice: tab "Summary" gồm section "Invoice Information" chứa Invoice Number, Invoice Date, Due Date, Bill To, Invoice Status, PO Number và section "Amounts" chứa Total Amount, Tax Amount, Grand Total và section "Notes" chứa Remarks; tab "Lines" chứa subgrid các Invoice Line con.
34. Đọc lại main form Invoice và xác nhận các field cùng subgrid Invoice Lines đã ở đúng vị trí.
35. Xem danh sách form của bảng Invoice Line và cho biết main form nào nên dùng.
36. Thiết kế main form của Invoice Line: section "Line Information" chứa Line Number, Product Name, Quantity, Unit Price, Discount Percent, Line Total, Line Status và lookup Invoice; section "Notes" chứa Description.
37. Đọc lại main form Invoice Line và xác nhận các field đã ở đúng vị trí.

---

## J. Thiết kế View

38. Xem các public view hiện có của bảng Invoice.
39. Tạo public view "TEST-MCP Active Invoices" cho bảng Invoice: chỉ record active, cột Invoice Number, Bill To, Invoice Date, Due Date, Invoice Status, Grand Total, Owner, Modified On, sort Modified On giảm dần.
40. Tạo public view "TEST-MCP Invoices By Status" cho bảng Invoice: cột Invoice Number, Invoice Status, Bill To, Grand Total, Created On, sort Invoice Status tăng dần rồi Created On giảm dần.
41. Xem các public view hiện có của bảng Invoice Line.
42. Tạo public view "TEST-MCP Invoice Lines" cho bảng Invoice Line: chỉ record active, cột Line Number, Product Name, Quantity, Unit Price, Line Total, Line Status, Invoice, sort Line Number tăng dần.
43. Đọc lại 3 view vừa tạo và xác nhận cột hiển thị cùng điều kiện lọc đúng yêu cầu.

---

## K. App & Sitemap

44. Kiểm tra trong môi trường có model-driven app tên "TEST-MCP App" chưa; nếu chưa có thì báo rõ cần tạo app đó tại Power Apps trước rồi dừng các bước liên quan app.
45. Xem sitemap hiện tại của app "TEST-MCP App" và cho biết đã có area hoặc group phù hợp để thêm Invoice chưa.
46. Cập nhật sitemap của app "TEST-MCP App": thêm khu vực tên "Invoicing", bên trong có menu mở bảng Invoice và menu mở bảng Invoice Line.
47. Đọc lại sitemap app "TEST-MCP App" và xác nhận Invoice cùng Invoice Line đã xuất hiện đúng vị trí.

---

## L. Web Resource

48. Kiểm tra các JavaScript web resource có tên chứa "testmcp" hoặc "invoice" để tránh tạo trùng.
49. Trong solution "TEST-MCP", tạo JavaScript web resource tên devkit_/testmcp/invoice.form.js; file có namespace TestMcp.Invoice, hàm syncLineStatus(primaryControl) đọc Invoice Status từ bản ghi Invoice cha rồi cập nhật Line Status của tất cả Invoice Line con tương ứng, và hàm canSyncLineStatus(primaryControl) trả về true chỉ khi form đã được lưu (record đã có id).
50. Đọc lại web resource devkit_/testmcp/invoice.form.js và xác nhận đủ namespace, hàm đồng bộ và hàm enable.

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

85. Thêm option "Archived" vào global choice devkit_invoicestatus, rồi đọc lại để xác nhận option mới đã có.
86. Bật audit và advanced find cho cột Invoice Status trên bảng Invoice nếu đang tắt.
87. Cập nhật view "TEST-MCP Active Invoices" để thêm cột PO Number; đọc lại xác nhận layout và query còn đồng bộ.
88. Cập nhật main form Invoice để PO Number nằm trong section "Invoice Information"; đọc lại xác nhận đúng vị trí.
89. Cập nhật web resource devkit_/testmcp/invoice.form.js: thêm comment ngắn "// TEST-MCP v1" ở dòng đầu file; đọc lại xác nhận.
90. Publish lại toàn bộ customization: bảng Invoice, Invoice Line, global choice devkit_invoicestatus và sitemap app.

---

## W. Kiểm Tra Audit & System Jobs Cuối Phiên

91. Xem audit 24 giờ gần nhất của user hiện tại, tối đa 20 dòng, xác nhận các thao tác test MCP đã được ghi vào audit.
92. Xem system job publish hoặc customization trong 60 phút gần nhất, cả succeeded và failed, kiểm tra kết quả sau các bước tạo metadata.

---

## X. Tổng Kết

93. Kiểm tra lại solution "TEST-MCP" và liệt kê đầy đủ component đã nằm trong solution: bảng, cột, choice, form, view, web resource, ribbon, command, sitemap, biến môi trường.
94. Tổng kết phiên test "TEST-MCP": những gì tạo thành công, những gì bị bỏ qua do môi trường không hỗ trợ, và những prompt nào nên chạy lại nếu muốn dọn dẹp hoặc test lại từ đầu.
