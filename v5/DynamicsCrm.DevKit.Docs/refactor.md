# Rules quan trọng, không được quên

- Bỏ qua hết các code unit test, làm sau, do đó khi build thì dùng file @build-cli.md (D:\github\Dynamics-Crm-DevKit\v5\.codex\workflows\build-cli.md) để build vì nó sẽ kill process mcp hiện tại và mcp sẽ tự động restart để test lại
- Toàn bộ class chỉ có 1 try catch ở hàm main của tool
- Khi catch thì phải dùng base method ThrowException
- Không dùng các wrapper method, dùng base method như Success, Error
- return structuredContent DTO xem lại khi property null thì không cần return cho client, để tiết kiệm token
- return conent thì chỉ cần duy nhất 1 dòng, ngắn gọn. Nếu thành công luôn có như "[Success] Retrieved 5 entities in 120ms" cho tool get_tables có filter
- Tối ưu hóa lại tool descritpion để giảm token, đừng lập lại khi para của tool cũng đã mention.
- Mỗi tool sau khi build xong phải có 1 file test call mẫu tại DynamicsCrm.DevKit.Docs/testcall/{N}.{tool_name}.md (N là số thứ tự đọc được từ devkit mcp --tools) gồm 4 section H1: (1) Tool description AI đọc được, (2) Input tool call, (3) Output tool call, (4) Kết quả AI tổng hợp lại. Ví dụ: 16.whoami.md

# Tools đã hoàn thành và aP đã review

- 7. parse_record_url
- 8. search_records
- 9. whoami
- 10. get_audit_history
