# Hướng dẫn Setup AI Context tự động

## 📋 Tổng quan

Project này đã được setup để các AI assistants tự động đọc context từ file `AIContext.md`. Dưới đây là hướng dẫn cho từng công cụ.

---

## 🤖 1. GitHub Copilot (VS Code)

### Cách hoạt động:
GitHub Copilot sẽ tự động đọc file `.github/copilot-instructions.md`

### Setup:
✅ **Đã tạo:** `.github/copilot-instructions.md`

### Kích hoạt:
1. Mở VS Code
2. Đảm bảo GitHub Copilot extension đã được cài đặt
3. File `.github/copilot-instructions.md` sẽ tự động được đọc mỗi lần bạn chat với Copilot

### Kiểm tra:
```
Hỏi Copilot: "Where is the source of truth for JavaScript?"
Copilot sẽ trả lời: "TestDevKitJs"
```

---

## 🎯 2. Cursor AI

### Cách hoạt động:
Cursor tự động đọc file `.cursorrules` trong root của project

### Setup:
✅ **Đã tạo:** `.cursorrules`

### Kích hoạt:
1. Mở project trong Cursor
2. File `.cursorrules` sẽ tự động được áp dụng
3. Không cần config thêm

---

## 🌐 3. Google Gemini / Antigravity

### Cách hoạt động:
Google Gemini chưa có cơ chế tự động đọc context file như Copilot. Có 2 cách:

#### **Cách 1: Project Knowledge (Khuyên dùng)**
1. Vào **Gemini Code Assist** settings
2. Tìm phần **"Project Knowledge"** hoặc **"Context Files"**
3. Thêm file: `TestDevKitTs/AIContext.md`
4. Enable "Include in all conversations"

#### **Cách 2: Manual mention (tạm thời)**
Trong prompt đầu tiên của conversation, thêm:
```
@TestDevKitTs/AIContext.md 
```
Hoặc:
```
Please read TestDevKitTs/AIContext.md for context before answering
```

### File đã tạo:
✅ `.ai/context.md` - Có thể được một số AI tools nhận diện

---

## 🗂️ 4. VS Code Workspace

### Setup:
✅ **Đã tạo:** `DynamicsCrm.DevKit.Tests.code-workspace`

### Sử dụng:
1. Mở VS Code
2. **File → Open Workspace from File**
3. Chọn `DynamicsCrm.DevKit.Tests.code-workspace`
4. Workspace sẽ mở với 4 folders và settings đã được config

### Lợi ích:
- Tất cả 4 folders hiển thị rõ ràng
- Settings chung cho workspace
- Copilot context được config sẵn

---

## 📁 Các files đã tạo

```
DynamicsCrm.DevKit.Tests/
├── .github/
│   └── copilot-instructions.md        ← GitHub Copilot tự động đọc
├── .ai/
│   └── context.md                      ← Cho một số AI tools khác
├── .cursorrules                        ← Cursor AI tự động đọc
├── DynamicsCrm.DevKit.Tests.code-workspace  ← VS Code workspace
├── AI_SETUP_GUIDE.md                   ← File này
└── TestDevKitTs/
    └── AIContext.md                    ← Context chính (source of truth)
```

---

## ✅ Checklist

### Cho GitHub Copilot:
- [x] Đã tạo `.github/copilot-instructions.md`
- [ ] Cài đặt GitHub Copilot extension
- [ ] Test chat với Copilot

### Cho Cursor:
- [x] Đã tạo `.cursorrules`
- [ ] Mở project trong Cursor
- [ ] Test chat với Cursor

### Cho Google Gemini:
- [x] Đã tạo `.ai/context.md`
- [ ] Setup Project Knowledge (nếu có)
- [ ] Hoặc mention `@AIContext.md` trong prompts

### Cho VS Code:
- [x] Đã tạo workspace file
- [ ] Mở workspace trong VS Code
- [ ] Verify 4 folders được hiển thị

---

## 🔧 Troubleshooting

### Copilot không đọc context:
1. Kiểm tra extension GitHub Copilot đã enable
2. Reload VS Code window (Ctrl+Shift+P → "Reload Window")
3. Verify file `.github/copilot-instructions.md` tồn tại

### Cursor không apply rules:
1. Restart Cursor
2. Check file `.cursorrules` ở root của project
3. Try Settings → Cursor Settings → Rules

### Gemini không có context:
1. Manually mention file trong prompt:
   ```
   @TestDevKitTs/AIContext.md Please read this first
   ```
2. Hoặc copy nội dung vào Custom Instructions (nếu có)

---

## 📝 Best Practices

1. **Update AIContext.md** khi có thay đổi cấu trúc project
2. **Mention explicitly** nếu AI không hiểu context:
   ```
   "Please refer to AIContext.md"
   ```
3. **Test định kỳ** xem AI có đọc đúng context không
4. **Keep it updated** - AIContext.md là single source of truth

---

## 🆘 Support

Nếu gặp vấn đề, kiểm tra:
1. File AIContext.md có tồn tại không
2. Đường dẫn trong các instruction files có đúng không
3. AI tool version có hỗ trợ auto-context không
4. Thử restart VS Code / Cursor / Browser

---

**Lưu ý:** Google Antigravity/Gemini có thể yêu cầu setup manual vì chưa có auto-context như Copilot. Nên dùng Project Knowledge feature nếu có.
