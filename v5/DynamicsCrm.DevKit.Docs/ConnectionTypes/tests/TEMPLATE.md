# Phase Test Guide Template

> **Dành cho AI**: Khi làm xong bất kỳ phase nào, hãy tạo file `phaseX.md` trong folder `tests/` theo format này.

---

## QUAN TRONG
- Đảm bảo CLI build không bị lỗi
- AI không tự động test gì hết
- Khi cần test gì đó AI sẽ mention cho user biết là hãy test profile xxx gì đó
- Ứng với từng loại test, hãy tạo profile tương ứng với các param tương ứng


## Required Sections

### 1. Header
```markdown
# Phase X Test Guide - [Phase Name]

> **Status**: ✅ Phase X Complete  
> **Branch**: `feature/connection-types-phase-X`  
> **Last Tested**: [Date]  
> **Reference**: [Rnwood.Dataverse.Data.PowerShell](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell)
```

### 2. Reference Implementation Comparison
So sánh với Rnwood patterns.

### 3. Test Credentials (Hardcoded)
Các credentials để test.

### 4. Build & Run Commands
Các bước build và run.

### 5. Expected Output
Output mong đợi.

### 6. Test Cases
Các test case cụ thể.

### 7. Files Changed
Danh sách files đã thay đổi.

### 8. Copy-Paste Commands
**QUAN TRỌNG**: Phải có section này với các lệnh copy-paste ready.

### 9. 🎉 CELEBRATION SECTION (Cuối file)
**BẮT BUỘC**: Mỗi phase phải kết thúc với section này:

```markdown
---

## 🎉🎊 PHASE X HOÀN THÀNH! 🎊🎉

### ✅ Chúc mừng! Phase X - [Name] đã hoàn thành!

Bạn chỉ cần chạy **MỘT LỆNH DUY NHẤT** sau để verify Phase X hoạt động:

\`\`\`powershell
[ONE-LINER COMMAND HERE]
\`\`\`

### ✨ Expected Output:
\`\`\`
[EXPECTED OUTPUT]
\`\`\`

### 🚀 Next: Phase X+1 - [Next Phase Name]
- [Feature 1]
- [Feature 2]
```

---

## Example Files

- `tests/phase1.md` - Phase 1: Foundation & Enhancements
- `tests/phase2.md` - Phase 2: Modern Interactive Auth (TODO)
- `tests/phase3.md` - Phase 3: Production & Azure Auth (TODO)
- `tests/phase4.md` - Phase 4: Integration & Polish (TODO)
