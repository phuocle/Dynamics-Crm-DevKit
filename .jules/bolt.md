## 2024-05-23 - [Zero-Allocation String Comparison]
**Learning:** `string.Replace` chains (e.g., `s.Replace("a", "").Replace("b", "")`) create multiple intermediate string allocations. For frequent comparisons (like file content checks), this creates significant garbage.
**Action:** Use a single-pass `StringBuilder` loop or `NormalizeString` helper to filter characters, reducing allocations from O(N*M) replacements to O(1) buffer reuse (or minimal allocations).
