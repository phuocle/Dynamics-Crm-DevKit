1. Tôi đang kết nối vào Dataverse environment nào, user hiện tại là ai, có role gì, URL môi trường là gì, version bao nhiêu, tenantId và environmentId là gì?
2. Kiểm tra lại thông tin kết nối hiện tại ở mức Dataverse request hệ thống và đối chiếu giúp tôi user id, business unit id, organization id có khớp với thông tin environment vừa xem không.
3. Kiểm tra solution có display name là `TEST-MCP` có tồn tại không; nếu có thì cho tôi biết unique name và tóm tắt hiện đang có những component chính nào.
4. Liệt kê các custom table hiện có trong môi trường này, đặc biệt kiểm tra xem đã có bảng nào giống Sales Order hoặc Sales Order Line chưa.
5. Trong solution display name `TEST-MCP`, tạo một environment variable tên schema `devkit_TestMcpMode`, display name `TEST MCP Mode`, kiểu string, default value là `dev`, current value là `test`.
6. Đọc lại environment variable `devkit_TestMcpMode`, đổi current value thành `uat`, rồi đọc lại lần nữa để xác nhận giá trị đã đổi.
7. Trong solution display name `TEST-MCP`, tạo một global choice tên `devkit_salesorderstatus`, display name `TEST MCP Sales Order Status`, gồm các option Draft, Submitted, Fulfilled và Cancelled.
8. Kiểm tra lại global choice `devkit_salesorderstatus` và cho tôi biết label cùng integer value của từng option.
9. Trong solution display name `TEST-MCP`, tạo table `Sales Order`, plural name `Sales Orders`, primary name là `Order Name`, bật notes, bật audit, bật quick create và dùng user ownership.
10. Trong solution display name `TEST-MCP`, tạo table `Sales Order Line`, plural name `Sales Order Lines`, primary name là `Line Name`, bật notes, bật audit, bật quick create và dùng user ownership.
11. Kiểm tra metadata của table `Sales Order` vừa tạo và cho tôi biết logical name thật, primary id field, primary name field, owner field và trạng thái audit.
12. Kiểm tra metadata của table `Sales Order Line` vừa tạo và cho tôi biết logical name thật, primary id field, primary name field, owner field và trạng thái audit.
13. Trong solution display name `TEST-MCP`, thêm column `Order Number` vào table `Sales Order`, kiểu text, required, max length 100.
14. Trong solution display name `TEST-MCP`, thêm column `Order Date` vào table `Sales Order`, kiểu date only, required.
15. Trong solution display name `TEST-MCP`, thêm column `Customer` vào table `Sales Order`, kiểu customer lookup tới Account hoặc Contact, required.
16. Trong solution display name `TEST-MCP`, thêm column `Order Status` vào table `Sales Order`, kiểu choice và dùng global choice `devkit_salesorderstatus`.
17. Trong solution display name `TEST-MCP`, thêm column `Total Amount` vào table `Sales Order`, kiểu money, precision 2.
18. Trong solution display name `TEST-MCP`, thêm column `External Reference` vào table `Sales Order`, kiểu text, max length 100.
19. Trong solution display name `TEST-MCP`, thêm column `Description` vào table `Sales Order`, kiểu multiline text, max length 4000.
20. Trong solution display name `TEST-MCP`, thêm column `Line Number` vào table `Sales Order Line`, kiểu whole number, required, min 1, max 999999.
21. Trong solution display name `TEST-MCP`, thêm column `Product Name` vào table `Sales Order Line`, kiểu text, required, max length 200.
22. Trong solution display name `TEST-MCP`, thêm column `Quantity` vào table `Sales Order Line`, kiểu decimal, required, min 0, max 1000000, precision 2.
23. Trong solution display name `TEST-MCP`, thêm column `Unit Price` vào table `Sales Order Line`, kiểu money, required, precision 2.
24. Trong solution display name `TEST-MCP`, thêm column `Line Amount` vào table `Sales Order Line`, kiểu money, precision 2.
25. Trong solution display name `TEST-MCP`, thêm column `Line Status` vào table `Sales Order Line`, kiểu choice và dùng global choice `devkit_salesorderstatus`.
26. Trong solution display name `TEST-MCP`, thêm column `Line Notes` vào table `Sales Order Line`, kiểu multiline text, max length 4000.
27. Trong solution display name `TEST-MCP`, tạo quan hệ một-nhiều từ `Sales Order` sang `Sales Order Line`, lookup trên line có display name `Sales Order`, cascade kiểu referential.
28. Kiểm tra lại metadata của `Sales Order Line` và cho tôi biết lookup field thật đang trỏ tới `Sales Order` tên là gì.
29. Publish các customization liên quan đến `Sales Order`, `Sales Order Line` và choice status vừa tạo.
30. Mở danh sách form của table `Sales Order` và cho tôi biết main form nào nên dùng để chỉnh layout.
31. Thiết kế main form của `Sales Order` gồm tab Summary, section Order Information có Order Number, Order Date, Customer, Order Status, Total Amount, External Reference; section Notes có Description; thêm tab Lines có subgrid hiển thị các Sales Order Line con.
32. Đọc lại main form của `Sales Order` và xác nhận các field cùng subgrid Sales Order Lines đã nằm đúng trên form.
33. Mở danh sách form của table `Sales Order Line` và cho tôi biết main form nào nên dùng để chỉnh layout.
34. Thiết kế main form của `Sales Order Line` gồm section Line Information có Line Number, Product Name, Quantity, Unit Price, Line Amount, Line Status và lookup Sales Order; section Notes có Line Notes.
35. Đọc lại main form của `Sales Order Line` và xác nhận các field đã nằm đúng trên form.
36. Xem các public view hiện có của table `Sales Order` trước khi tôi tạo view mới.
37. Tạo public view cho table `Sales Order` tên `TEST-MCP Active Sales Orders`, chỉ hiển thị record active, gồm các cột Order Number, Customer, Order Date, Order Status, Total Amount, Owner và Modified On, sort Modified On giảm dần.
38. Tạo public view cho table `Sales Order` tên `TEST-MCP Orders By Status`, gồm các cột Order Number, Order Status, Customer, Total Amount và Created On, sort Order Status tăng dần rồi Created On giảm dần.
39. Xem các public view hiện có của table `Sales Order Line` trước khi tôi tạo view mới.
40. Tạo public view cho table `Sales Order Line` tên `TEST-MCP Lines By Order`, chỉ hiển thị record active, gồm các cột Line Number, Product Name, Quantity, Unit Price, Line Amount, Line Status và Sales Order, sort Line Number tăng dần.
41. Đọc lại các view `TEST-MCP Active Sales Orders`, `TEST-MCP Orders By Status` và `TEST-MCP Lines By Order`, xác nhận cột hiển thị và điều kiện lọc đúng như yêu cầu.
42. Kiểm tra trong môi trường có model-driven app display name `TEST-MCP App` chưa; nếu chưa có thì báo rõ tôi cần tạo app đó trước ở Power Apps, rồi dừng các bước liên quan app.
43. Với app `TEST-MCP App`, xem sitemap hiện tại và cho tôi biết app đã có area hoặc group nào phù hợp để thêm Sales Order chưa.
44. Cập nhật sitemap của app `TEST-MCP App` để có khu vực `TEST-MCP`, bên trong có menu mở table `Sales Order` và table `Sales Order Line`.
45. Đọc lại sitemap của app `TEST-MCP App` và xác nhận hai menu Sales Order cùng Sales Order Line đã xuất hiện đúng vị trí.
46. Kiểm tra các JavaScript web resource hiện có có tên chứa `testmcp` để tránh tạo trùng.
47. Trong solution display name `TEST-MCP`, tạo JavaScript web resource `devkit_/testmcp/salesorder.form.js` cho form Sales Order; file này cần có namespace `TestMcp.SalesOrder`, hàm `syncLineStatus(primaryControl)` để đọc Order Status của Sales Order cha rồi cập nhật Line Status cho tất cả Sales Order Line con, và hàm `canSyncLineStatus(primaryControl)` chỉ cho chạy khi form đã được lưu.
48. Đọc lại web resource `devkit_/testmcp/salesorder.form.js` và xác nhận nó có đủ namespace, hàm đồng bộ status và hàm kiểm tra enable.
49. Liệt kê các button hiện có trên form của table `Sales Order` để tôi biết trước khi thêm nút mới.
50. Thêm một nút classic ribbon trên main form của `Sales Order` label `Sync Line Status`, gọi JavaScript web resource `devkit_/testmcp/salesorder.form.js`, function `TestMcp.SalesOrder.syncLineStatus`, và dùng function `TestMcp.SalesOrder.canSyncLineStatus` để bật tắt nút.
51. Kiểm tra lại ribbon của `Sales Order` và xác nhận nút `Sync Line Status` đã được thêm vào form.
52. Trong app `TEST-MCP App`, kiểm tra command bar hiện đại trên form `Sales Order` và tìm các lệnh Activate cùng Deactivate nếu chúng tồn tại.
53. Trong app `TEST-MCP App`, ẩn lệnh Deactivate trên command bar hiện đại của form `Sales Order`; nếu đó không phải modern command thì báo rõ lý do và không dùng classic ribbon để xử lý thay.
54. Trong app `TEST-MCP App`, ẩn lệnh Activate trên command bar hiện đại của form `Sales Order`; nếu đó không phải modern command thì báo rõ lý do và không dùng classic ribbon để xử lý thay.
55. Kiểm tra lại command bar hiện đại của form `Sales Order` trong app `TEST-MCP App` và cho tôi biết Activate cùng Deactivate đang hidden hay còn visible.
56. Trong app `TEST-MCP App`, hiện lại lệnh Deactivate trên command bar hiện đại của form `Sales Order` để kiểm tra nhánh show command.
57. Trong app `TEST-MCP App`, hiện lại lệnh Activate trên command bar hiện đại của form `Sales Order` để kiểm tra nhánh show command.
58. Tạo một Account tên `TEST-MCP Customer A` để làm khách hàng test cho Sales Order.
59. Tạo một Sales Order số `TSO-0001`, Order Date là `2026-04-28`, Customer là Account `TEST-MCP Customer A`, Order Status là Draft, Total Amount là `1200`, External Reference là `PROMPT-TEST-0001`.
60. Tạo một Sales Order Line con của Sales Order `TSO-0001`, Line Number `1`, Product Name `Test Product A`, Quantity `2`, Unit Price `100`, Line Amount `200`, Line Status Draft.
61. Đọc lại Sales Order `TSO-0001` và line số 1 của nó, chỉ hiển thị các field quan trọng để xác nhận dữ liệu đã liên kết đúng.
62. Tạo nhanh thêm 3 Sales Order Line cho Sales Order `TSO-0001`, Line Number 2, 3, 4, mỗi dòng có Product Name khác nhau và Line Status Draft.
63. Sinh dữ liệu demo 10 Sales Order trong khoảng ngày từ `2026-01-01` đến `2026-04-28`, ưu tiên dùng các field đã tạo và xoay vòng status Draft, Submitted, Fulfilled, Cancelled nếu có thể.
64. Import file dữ liệu demo Sales Order vừa sinh vào môi trường; nếu cần Customer bắt buộc thì dùng Account `TEST-MCP Customer A`.
65. Truy vấn Sales Order `TSO-0001` kèm các Sales Order Line con và trả về Order Number, Order Status, Line Number, Product Name, Quantity, Line Amount và Line Status.
66. Tìm kiếm keyword `TSO-0001` trong dữ liệu Dataverse và cho tôi biết record nào liên quan đến Sales Order hoặc Sales Order Line được tìm thấy.
67. Lấy URL record của Sales Order `TSO-0001`, parse URL đó và xác nhận entity logical name cùng record id có đúng với Sales Order vừa tạo không.
68. Cập nhật Sales Order `TSO-0001`, đổi Order Status từ Draft sang Submitted và đổi Total Amount thành `1400`.
69. Xem audit history của Sales Order `TSO-0001` trong 24 giờ gần nhất, tập trung các thay đổi của Order Status và Total Amount.
70. Đọc trực tiếp record Sales Order `TSO-0001` qua Dataverse API, chỉ lấy Order Number, Order Status, Total Amount và Modified On, rồi so sánh với dữ liệu đọc theo cách thông thường.
71. Cho tôi biết các Dataverse message có thể dùng cho table `Sales Order`, đặc biệt là Create, Update, SetState hoặc custom action nếu có.
72. Kiểm tra xem có custom API nào được bind với table `Sales Order` không; nếu có thì mô tả input, output và plugin xử lý phía sau.
73. Kiểm tra các plugin step active đang chạy trên table `Sales Order` cho message Update, cho tôi biết assembly, type, stage, mode và image nếu có.
74. Xem plugin trace log trong 60 phút gần nhất liên quan đến Sales Order hoặc các plugin vừa tìm thấy; nếu không có log phù hợp thì nói rõ.
75. Xem các system job failed trong 24 giờ gần nhất liên quan đến Sales Order; nếu có lỗi thì tóm tắt message và stack trace quan trọng.
76. Kiểm tra business rule active và draft trên table `Sales Order`; nếu có rule thì mở detail rule đầu tiên và tóm tắt điều kiện cùng action.
77. Kiểm tra classic workflow active trên table `Sales Order`, cả background và realtime, rồi tóm tắt trigger field và mode nếu có.
78. Kiểm tra business process flow nào đang liên quan đến table `Sales Order`, gồm stage và primary entity nếu có.
79. Kiểm tra cloud flow có tên chứa `TEST-MCP`; nếu có thì mở detail và xem vài run gần nhất.
80. Kiểm tra role `System Administrator` và cho tôi biết role này có quyền gì trên table `Sales Order`.
81. Kiểm tra quyền effective của user hiện tại trên table `Sales Order`, đặc biệt Create, Read, Write, Delete, Append và Append To.
82. Kiểm tra lại solution display name `TEST-MCP` và cho tôi biết các component chính vừa tạo đã nằm trong solution chưa: table, column, choice, form, view, web resource, ribbon, command customization và sitemap.
83. Cập nhật global choice `devkit_salesorderstatus` để thêm option Archived, rồi đọc lại choice để xác nhận option mới đã có.
84. Bật audit và advanced find cho column Order Status trên table `Sales Order` nếu các thuộc tính này đang tắt.
85. Cập nhật view `TEST-MCP Active Sales Orders` để thêm cột External Reference, sau đó đọc lại view và xác nhận layout cùng query vẫn đồng bộ.
86. Cập nhật main form của `Sales Order` để bảo đảm External Reference nằm trong section Order Information, sau đó đọc lại form để xác nhận.
87. Cập nhật web resource `devkit_/testmcp/salesorder.form.js` để thêm version comment ngắn `TEST-MCP v1` ở đầu file, sau đó đọc lại nội dung để xác nhận.
88. Publish lại toàn bộ customization liên quan đến `Sales Order`, `Sales Order Line`, global choice status và app sitemap.
89. Tính số lượng Sales Order Line theo từng Sales Order và xác nhận Sales Order `TSO-0001` hiện có ít nhất 4 line.
90. Xem audit gần nhất của user hiện tại trong 24 giờ qua, tối đa 20 dòng, để xác nhận các thao tác test MCP vừa làm đã ghi audit.
91. Xem các system job liên quan publish hoặc customization trong 60 phút gần nhất, cả succeeded và failed, để kiểm tra quá trình publish sau các bước metadata.
92. Tổng kết trạng thái test `TEST-MCP`: liệt kê những gì đã tạo thành công, những gì bị bỏ qua do môi trường không hỗ trợ, và những prompt nào nên chạy lại nếu muốn cleanup hoặc retest.
