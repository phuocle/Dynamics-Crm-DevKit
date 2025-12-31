## 2024-05-23 - [Allocation-Free String Comparison]
**Learning:** Replacing string manipulation chains (Replace/Trim) with a single-pass character loop eliminates all temporary allocations (O(1) space).
**Action:** Applied to `Helper.IsTheSame` to optimize file comparison. Changed behavior to ignore *all* whitespace (including standalone `\n`), fixing a cross-platform inconsistency where `\r\n` was ignored but `\n` was not.
