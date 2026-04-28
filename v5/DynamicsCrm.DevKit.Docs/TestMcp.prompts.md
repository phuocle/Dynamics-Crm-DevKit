1. Gọi MCP tool `whoami` của devkit-codex và cho tôi biết user, role, environment URL, org friendly name, org unique name, version, tenantId và environmentId hiện tại.
2. Gọi MCP tool `execute_webapi` với GET `WhoAmI` để đối chiếu với kết quả `whoami`, sau đó tóm tắt UserId, BusinessUnitId và OrganizationId.
3. Kiểm tra solution display name `TEST-MCP` bằng MCP tool `get_solution_components`, nếu không tồn tại hoặc có nhiều kết quả thì dừng và báo rõ cần xử lý solution trước.
4. Liệt kê các custom table hiện có bằng MCP tool `get_tables` với `custom_only=true`, tập trung xem đã có table Sales Order hoặc Sales Order Line nào chưa.
5. Tạo environment variable trong solution display name `TEST-MCP` với schema name `devkit_TestMcpMode`, display name `TEST MCP Mode`, type `string`, default value `dev`, current value `test` bằng MCP tool `manage_environment_variable`.
6. Gọi MCP tool `manage_environment_variable` để xem detail của `devkit_TestMcpMode`, sau đó update current value thành `uat` và đọc lại để xác nhận.
7. Tạo global choice bằng MCP tool `manage_choice` tên `devkit_salesorderstatus`, display name `TEST MCP Sales Order Status`, options `100000000:Draft;100000001:Submitted;100000002:Fulfilled;100000003:Cancelled`.
8. Gọi MCP tool `manage_choice` detail cho `devkit_salesorderstatus` để xác nhận các option Draft, Submitted, Fulfilled và Cancelled đã tồn tại đúng value.
9. Tạo table `Sales Order` trong solution display name `TEST-MCP` bằng MCP tool `upsert_table`: entity name gợi ý `salesorder`, plural `Sales Orders`, primary name `Order Name`, bật notes, bật audit, bật quick create, ownership User; nếu tool yêu cầu prefix confirmation thì xác nhận prefix của publisher trong solution `TEST-MCP` và gọi lại.
10. Tạo table `Sales Order Line` trong solution display name `TEST-MCP` bằng MCP tool `upsert_table`: entity name gợi ý `salesorderline`, plural `Sales Order Lines`, primary name `Line Name`, bật notes, bật audit, bật quick create, ownership User; nếu tool yêu cầu prefix confirmation thì xác nhận prefix của publisher trong solution `TEST-MCP` và gọi lại.
11. Gọi MCP tool `get_tables` để lấy detail metadata của table `Sales Order`, ghi lại logical name thật, primary id, primary name attribute và các relationship hiện có.
12. Gọi MCP tool `get_tables` để lấy detail metadata của table `Sales Order Line`, ghi lại logical name thật, primary id, primary name attribute và các relationship hiện có.
13. Trên table `Sales Order` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Order Number` kiểu string, logical name gợi ý `ordernumber`, required, max length 100, format Text.
14. Trên table `Sales Order` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Order Date` kiểu datetime, logical name gợi ý `orderdate`, behavior DateOnly, format DateOnly, required.
15. Trên table `Sales Order` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Customer` kiểu customer, logical name gợi ý `customerid`, required.
16. Trên table `Sales Order` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Order Status` kiểu picklist, logical name gợi ý `orderstatus`, dùng global option set `devkit_salesorderstatus`, default không cần set.
17. Trên table `Sales Order` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Total Amount` kiểu money, logical name gợi ý `totalamount`, precision source Attribute, precision 2.
18. Trên table `Sales Order` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `External Reference` kiểu string, logical name gợi ý `externalreference`, max length 100, format Text.
19. Trên table `Sales Order` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Description` kiểu memo, logical name gợi ý `description`, max length 4000.
20. Trên table `Sales Order Line` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Line Number` kiểu integer, logical name gợi ý `linenumber`, required, min 1, max 999999.
21. Trên table `Sales Order Line` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Product Name` kiểu string, logical name gợi ý `productname`, required, max length 200.
22. Trên table `Sales Order Line` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Quantity` kiểu decimal, logical name gợi ý `quantity`, required, min 0, max 1000000, precision 2.
23. Trên table `Sales Order Line` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Unit Price` kiểu money, logical name gợi ý `unitprice`, required, precision source Attribute, precision 2.
24. Trên table `Sales Order Line` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Line Amount` kiểu money, logical name gợi ý `lineamount`, precision source Attribute, precision 2.
25. Trên table `Sales Order Line` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Line Status` kiểu picklist, logical name gợi ý `linestatus`, dùng global option set `devkit_salesorderstatus`.
26. Trên table `Sales Order Line` vừa tạo, dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` để tạo column `Line Notes` kiểu memo, logical name gợi ý `linenotes`, max length 4000.
27. Tạo relationship 1:N trong solution display name `TEST-MCP` bằng MCP tool `upsert_relationship`: parent là table `Sales Order`, child là table `Sales Order Line`, lookup display name `Sales Order`, relationship schema name gợi ý `devkit_SalesOrder_SalesOrderLines`, cascade preset Referential.
28. Gọi MCP tool `get_tables` detail cho `Sales Order Line` và xác nhận lookup tới `Sales Order` đã tồn tại, ghi lại lookup logical name thật để dùng cho form, view và test data.
29. Publish metadata cho 2 table `Sales Order` và `Sales Order Line` bằng MCP tool `publish_customizations`, include global option set nếu cần.
30. Gọi MCP tool `manage_form` list cho table `Sales Order`, chỉ lấy main forms và ghi lại form id của main form phù hợp nhất để thiết kế.
31. Dùng MCP tool `manage_form` update main form của table `Sales Order`: tạo layout gồm tab Summary với section Order Information chứa Order Number, Order Date, Customer, Order Status, Total Amount, External Reference; section Notes chứa Description; tab Lines chứa subgrid Sales Order Lines liên kết bằng relationship vừa tạo.
32. Gọi MCP tool `manage_form` detail cho main form của `Sales Order` để xác nhận các field và subgrid Sales Order Lines đã nằm đúng form.
33. Gọi MCP tool `manage_form` list cho table `Sales Order Line`, chỉ lấy main forms và ghi lại form id của main form phù hợp nhất để thiết kế.
34. Dùng MCP tool `manage_form` update main form của table `Sales Order Line`: tạo layout gồm section Line Information chứa Line Number, Product Name, Quantity, Unit Price, Line Amount, Line Status và lookup Sales Order; section Notes chứa Line Notes.
35. Gọi MCP tool `manage_form` detail cho main form của `Sales Order Line` để xác nhận các field đã nằm đúng form.
36. Gọi MCP tool `manage_view` list cho table `Sales Order`, include FetchXML, để xem các public view hiện có trước khi tạo view mới.
37. Dùng MCP tool `manage_view` create public view cho table `Sales Order` tên `TEST-MCP Active Sales Orders`, query type Public, FetchXML lọc active records, columns gồm Order Number, Customer, Order Date, Order Status, Total Amount, Owner và Modified On, sort Modified On descending.
38. Dùng MCP tool `manage_view` create public view cho table `Sales Order` tên `TEST-MCP Orders By Status`, query type Public, columns gồm Order Number, Order Status, Customer, Total Amount và Created On, sort Order Status ascending rồi Created On descending.
39. Gọi MCP tool `manage_view` list cho table `Sales Order Line`, include FetchXML, để xem các public view hiện có trước khi tạo view mới.
40. Dùng MCP tool `manage_view` create public view cho table `Sales Order Line` tên `TEST-MCP Lines By Order`, query type Public, FetchXML lọc active records, columns gồm Line Number, Product Name, Quantity, Unit Price, Line Amount, Line Status và lookup Sales Order, sort Line Number ascending.
41. Dùng MCP tool `manage_view` detail cho các view vừa tạo trên `Sales Order` và `Sales Order Line` để xác nhận FetchXML và LayoutXML đồng bộ.
42. Gọi MCP tool `manage_sitemap` list để tìm Model-Driven App display name `TEST-MCP App`; nếu chưa có app thì dừng và báo rõ MCP hiện không có tool tạo app trực tiếp, cần tạo app `TEST-MCP App` bằng Power Apps UI trước rồi chạy tiếp.
43. Gọi MCP tool `manage_sitemap` detail cho app `TEST-MCP App` để xem SiteMap hiện tại trước khi chỉnh.
44. Dùng MCP tool `manage_sitemap` update cho app `TEST-MCP App`: thêm area hoặc group tên `TEST-MCP`, thêm subarea cho table `Sales Order` và subarea cho table `Sales Order Line`, publish sau khi update.
45. Gọi MCP tool `manage_sitemap` detail cho app `TEST-MCP App` để xác nhận 2 subarea Sales Order và Sales Order Line đã xuất hiện.
46. Gọi MCP tool `manage_webresource` list với name filter `testmcp` và type filter `js` để kiểm tra đã có JavaScript web resource nào cho test MCP chưa.
47. Tạo JavaScript web resource trong solution display name `TEST-MCP` bằng MCP tool `manage_webresource`: name `devkit_/testmcp/salesorder.form.js`, display name `TEST MCP Sales Order Form JS`, type `js`, nội dung có namespace `TestMcp.SalesOrder`, function `syncLineStatus(primaryControl)` đọc Order Status của record cha rồi update tất cả Sales Order Lines cùng lookup sang Line Status tương ứng bằng `Xrm.WebApi`, và function `canSyncLineStatus(primaryControl)` chỉ trả true khi form đã có record id.
48. Gọi MCP tool `manage_webresource` detail cho `devkit_/testmcp/salesorder.form.js` để xác nhận web resource tồn tại và nội dung có đủ `syncLineStatus` cùng `canSyncLineStatus`.
49. Gọi MCP tool `manage_ribbon` buttons cho table `Sales Order` để liệt kê các button trên form trước khi thêm custom ribbon button.
50. Dùng MCP tool `manage_ribbon` update cho table `Sales Order` để add custom button trên surface form, label `Sync Line Status`, tooltip title `Sync Line Status`, library `devkit_/testmcp/salesorder.form.js`, function `TestMcp.SalesOrder.syncLineStatus`, enable library `devkit_/testmcp/salesorder.form.js`, enable function `TestMcp.SalesOrder.canSyncLineStatus`, icon mặc định hoặc không icon, publish sau khi update.
51. Gọi MCP tool `manage_ribbon` detail cho table `Sales Order` để xác nhận RibbonDiffXml có button `Sync Line Status`.
52. Gọi MCP tool `manage_command` list cho table `Sales Order`, location `form`, app name `TEST-MCP App`, include rules, origin all, để tìm modern command Active và Deactivate nếu chúng tồn tại trong app.
53. Dùng MCP tool `manage_command` hide để ẩn command `Deactivate` trên form của table `Sales Order` trong app `TEST-MCP App`; nếu tool báo đây là classic ribbon button thì dừng và báo đúng lỗi, không chuyển qua ribbon để làm thay.
54. Dùng MCP tool `manage_command` hide để ẩn command `Activate` trên form của table `Sales Order` trong app `TEST-MCP App`; nếu tool báo đây là classic ribbon button thì dừng và báo đúng lỗi, không chuyển qua ribbon để làm thay.
55. Gọi MCP tool `manage_command` list lại cho table `Sales Order`, location `form`, app name `TEST-MCP App`, include rules, để xác nhận Active và Deactivate đang hidden hoặc ghi rõ vì sao không hidden được.
56. Dùng MCP tool `manage_command` show để hiện lại command `Deactivate` trên form của table `Sales Order` trong app `TEST-MCP App` để test nhánh show.
57. Dùng MCP tool `manage_command` show để hiện lại command `Activate` trên form của table `Sales Order` trong app `TEST-MCP App` để test nhánh show.
58. Dùng MCP tool `manage_record` create một Account tên `TEST-MCP Customer A` để làm customer test cho Sales Order.
59. Dùng MCP tool `manage_record` create một record `Sales Order` với Order Number `TSO-0001`, Order Date `2026-04-28`, Customer là Account `TEST-MCP Customer A`, Order Status `Draft`, Total Amount `1200`, External Reference `PROMPT-TEST-0001`.
60. Dùng MCP tool `manage_record` create một record `Sales Order Line` con của Sales Order `TSO-0001` với Line Number `1`, Product Name `Test Product A`, Quantity `2`, Unit Price `100`, Line Amount `200`, Line Status `Draft`.
61. Dùng MCP tool `manage_record` read lại Sales Order `TSO-0001` và Sales Order Line line 1, chỉ lấy các column quan trọng để xác nhận data đã liên kết đúng.
62. Dùng MCP tool `create_records` để bulk create thêm 3 Sales Order Line cho Sales Order `TSO-0001`, với Line Number 2, 3, 4 và các Product Name khác nhau, mỗi record có Line Status `Draft`.
63. Dùng MCP tool `generate_demo_data` tạo file JSON demo 10 record cho table `Sales Order` từ ngày `2026-01-01` đến `2026-04-28`, chỉ chọn các field creatable phù hợp và override Order Status xoay vòng Draft, Submitted, Fulfilled, Cancelled nếu field hỗ trợ.
64. Dùng MCP tool `create_records` import file JSON vừa tạo bởi `generate_demo_data` để tạo demo Sales Order records, nếu có lookup Customer bắt buộc thì dùng Account `TEST-MCP Customer A`.
65. Dùng MCP tool `execute_fetchxml` query Sales Order `TSO-0001` join sang Sales Order Lines, trả về Order Number, Order Status, Line Number, Product Name, Quantity, Line Amount và Line Status.
66. Dùng MCP tool `search_records` tìm keyword `TSO-0001` trong các entity Sales Order và Sales Order Line, top 10, rồi tóm tắt kết quả tìm được.
67. Lấy URL record Sales Order `TSO-0001` từ environment hiện tại rồi dùng MCP tool `parse_record_url` để parse entity logical name và record id, xác nhận parse đúng table Sales Order.
68. Dùng MCP tool `manage_record` update Sales Order `TSO-0001` đổi Order Status từ Draft sang Submitted và Total Amount thành `1400`.
69. Dùng MCP tool `get_audit_history` xem audit detail cho Sales Order `TSO-0001` trong 1440 phút gần nhất, tập trung field Order Status và Total Amount.
70. Dùng MCP tool `execute_webapi` GET trực tiếp record Sales Order `TSO-0001` qua Web API, `$select` các field Order Number, Order Status, Total Amount và Modified On, rồi đối chiếu với `manage_record`.
71. Dùng MCP tool `get_messages` list các SDK messages cho table `Sales Order`, include custom actions, rồi tóm tắt Create, Update, SetState hoặc custom action nào khả dụng.
72. Dùng MCP tool `get_custom_apis` list custom APIs bound với table `Sales Order`, include Microsoft false, status all, nếu không có thì báo rõ không có custom API custom nào cho table này.
73. Dùng MCP tool `get_plugins` tìm plugin steps active trên table `Sales Order` cho message Update, include images, rồi tóm tắt assembly, type, stage và mode nếu có.
74. Dùng MCP tool `get_plugin_trace_logs` list plugin trace logs trong 60 phút gần nhất cho table hoặc plugin liên quan Sales Order, status bất kỳ, nếu không có thì báo rõ môi trường chưa có trace phù hợp.
75. Dùng MCP tool `get_system_jobs` list failed system jobs trong 1440 phút gần nhất liên quan table `Sales Order`, operation type all, rồi tóm tắt error nếu có.
76. Dùng MCP tool `get_business_rules` list active và draft business rules trên table `Sales Order`, nếu có thì chọn một rule để xem detail.
77. Dùng MCP tool `get_workflows` list classic workflows active trên table `Sales Order`, cả background và realtime, rồi tóm tắt trigger fields nếu có.
78. Dùng MCP tool `get_business_process_flows` list BPF active hoặc draft liên quan table `Sales Order`, include stages, nếu không có thì báo rõ.
79. Dùng MCP tool `get_flows` list cloud flows status all có name chứa `TEST-MCP`, nếu tìm thấy thì xem detail và 5 runs gần nhất.
80. Dùng MCP tool `manage_role` list role name chứa `System Administrator`, sau đó dùng detail role đó và filter privileges theo table `Sales Order`.
81. Dùng MCP tool `manage_role` action `user` cho current user từ `whoami`, filter privileges theo table `Sales Order`, để xác nhận user có Create, Read, Write, Delete, Append và AppendTo.
82. Gọi MCP tool `get_solution_components` cho solution display name `TEST-MCP` với include active layers để kiểm tra các table, columns, forms, views, web resources, ribbon hoặc sitemap components vừa tạo đã nằm trong solution chưa.
83. Dùng MCP tool `manage_choice` update global choice `devkit_salesorderstatus` thêm option `100000004:Archived`, rồi gọi detail để xác nhận option mới xuất hiện.
84. Dùng MCP tool `upsert_column` trong solution display name `TEST-MCP` update column Order Status trên table `Sales Order` để bật audit và advanced find nếu tool hỗ trợ update metadata cho các flag này.
85. Dùng MCP tool `manage_view` update view `TEST-MCP Active Sales Orders` để thêm column External Reference vào layout và FetchXML nếu chưa có, sau đó detail lại view để xác nhận sync FetchXML/LayoutXML.
86. Dùng MCP tool `manage_form` update main form của `Sales Order` để thêm External Reference vào section Order Information nếu chưa có, sau đó detail lại form để xác nhận.
87. Dùng MCP tool `manage_webresource` update `devkit_/testmcp/salesorder.form.js` để thêm comment version ngắn `TEST-MCP v1` ở đầu file, sau đó detail lại để xác nhận update thành công.
88. Dùng MCP tool `publish_customizations` publish riêng 2 table `Sales Order` và `Sales Order Line`, include sitemap và include global option set nếu tool cho phép.
89. Dùng MCP tool `execute_fetchxml` chạy aggregate hoặc query tổng số Sales Order Lines theo từng Sales Order, xác nhận Sales Order `TSO-0001` có ít nhất 4 lines sau các bước create/bulk create.
90. Dùng MCP tool `get_audit_history` browse audit toàn môi trường trong 1440 phút gần nhất, filter user hiện tại từ `whoami`, max 20 records, để xác nhận các thao tác test MCP có audit entry.
91. Dùng MCP tool `get_system_jobs` list tất cả system jobs trong 60 phút gần nhất có name chứa `Publish`, status all, để kiểm tra publish/customization jobs sau khi chạy các bước metadata.
92. Dùng MCP tool `get_solution_components` lần cuối cho solution display name `TEST-MCP`, xuất summary theo component type và liệt kê những component chính cần có: Sales Order, Sales Order Line, global choice, forms, views, web resource, ribbon command và sitemap.
