## 2024-05-23 - [Allocation Overhead in Helper.IsTheSame]
**Learning:** The method `Helper.IsTheSame` was creating multiple string copies (via `Replace` and `Trim`) just to compare two strings while ignoring whitespace. In a code generation tool that compares many large files, this leads to significant memory pressure (O(N) allocations per call).
**Action:** Use zero-allocation character loops for comparison when "ignoring whitespace" or similar loose equality checks are needed, especially for hot paths like file change detection.
