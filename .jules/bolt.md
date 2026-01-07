## 2024-05-23 - [C# String Allocation Optimization]
**Learning:** Chained `string.Replace()` calls are a major source of hidden allocations in C# (allocating a new string for every call). For frequently executed text processing logic (like file generation checks), this can cause significant GC pressure.
**Action:** Replace `Replace().Replace()...` chains with a single-pass `StringBuilder` loop that filters characters. Use `ReferenceEquals` for early returns. Always pre-allocate `StringBuilder` capacity if the upper bound is known.
