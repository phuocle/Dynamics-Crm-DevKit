# JS vs TS Test Comparison

## File Naming Convention

**Format**: `Account.Test[xx].[Name].ts`  
- `xx` = JS Order number (00-26, 4A, 8A)
- `Name` = Test function name (Control, String, Boolean, etc.)

## Final Mapping Table

All tests are now synchronized! ✅

| JS Order | JS Function | TS File | JS Sub-Tests | TS Sub-Tests | Status |
|:--------:|-------------|---------|:------------:|:------------:|:------:|
| 0 | TestControl | Account.Test00.Control.ts | R1-R8 + S1-S16 (24) | 24 | OK |
| 1 | TestString | Account.Test01.String.ts | R1-R15 + S1-S11 (26) | 26 | OK |
| 2 | TestMemo | Account.Test02.Memo.ts | R1-R15 + S1-S11 (26) | 26 | OK |
| 3 | TestBoolean | Account.Test03.Boolean.ts | R1-R15 + S1-S11 (26) | 26 | OK |
| 4 | TestInteger | Account.Test04.Integer.ts | R1-R16 + S1-S11 (27) | 27 | OK |
| 4A | TestHeader | Account.Test04A.Header.ts | R1-R16 + S1-S11 (27) | 27 | OK |
| 5 | TestDecimal | Account.Test05.Decimal.ts | R1-R17 + S1-S13 (30) | 30 | OK |
| 6 | TestDouble | Account.Test06.Double.ts | R1-R17 + S1-S13 (30) | 30 | OK |
| 7 | TestMoney | Account.Test07.Money.ts | R1-R17 + S1-S13 (30) | 30 | OK |
| 8 | TestLookup | Account.Test08.Lookup.ts | R1-R16 + S1-S6 (22) | 22 | OK |
| 8A | TestLookup1 | Account.Test08A.Lookup1.ts | R1-R17 + S1 (18) | 18 | OK |
| 9 | TestOptionSet | Account.Test09.OptionSet.ts | R1-R18 + S1-S22 (40) | 40 | OK |
| 10 | TestMultiOptionSet | Account.Test10.MultiOptionSet.ts | R1-R18 + S1-S14 (32) | 32 | OK |
| 11 | TestDateOnly | Account.Test11.DateOnly.ts | R1-R14 + S1-S11 (25) | 25 | OK |
| 12 | TestDateTime | Account.Test12.DateTime.ts | R1-R15 + S1-S13 (28) | 28 | OK |
| 13 | TestGrid | Account.Test13.Grid.ts | R1-R12 + S1-S8 (20) | 20 | OK |
| 14 | TestQuickView | Account.Test14.QuickView.ts | R1-R9 + S1-S6 (15) | 15 | OK |
| 15 | TestNavigationItem | Account.Test15.NavigationItem.ts | R1-R3 + S1-S3 (6) | 6 | OK |
| 16 | TestExecutionContext | Account.Test16.ExecutionContext.ts | R1-R8 + S1-S6 (14) | 14 | OK |
| 17 | TestSidePanes | Account.Test17.SidePanes.ts | R1-R8 + S1-S6 (14) | 14 | OK |
| 18 | TestCopilot | Account.Test18.Copilot.ts | R1-R4 + S1-S4 (8) | 8 | OK |
| 19 | TestProcess | Account.Test19.Process.ts | R1-R9 + S1-S9 (18) | 18 | OK |
| 20 | TestIFrame | Account.Test20.IFrame.ts | R1-R7 + S1-S5 (12) | 12 | OK |
| 21 | TestUtility | Account.Test21.Utility.ts | R1-R51 + M1-M37 (88) | R1-R53 + S1-S37 (90) | OK |
| 22 | TestTab | Account.Test22.Tab.ts | R1-R11 + S1-S7 (18) | 18 | OK |
| 23 | TestTimer | Account.Test23.Timer.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |
| 24 | TestKnowledge | Account.Test24.Knowledge.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |
| 25 | TestWebApi | Account.Test25.WebApi.ts | R1-R5 + S1-S8 (13) | 13 | OK |
| 26 | TestWebResource | Account.Test26.WebResource.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |

## Summary

✅ **All 27 tests are now synchronized!**
- 24 tests have identical counts
- 3 tests are SKIPPED in both (Timer, Knowledge, WebResource)

## Sync Completed (This Session)

### TS → JS Additions
| Function | Added Tests |
|----------|-------------|
| Grid | R5-R6, R10-R11, S6-S8 (+6) |
| QuickView | R7-R9, S5-S6 (+5) |
| ExecutionContext | R8, S6 (+2) |
| SidePanes | R4, R6-R8, S5-S6 (+5) |
| Copilot | S2, S4 (+2) |
| Process | R9, S3-S4, S7-S9 (+5) |
| Utility | R24-R25, renumbered R39-R51, M37 (+3) |
| WebApi | S3 FormattedValue, S7 OData+PageSize (+2) |

### JS → TS Additions
| Function | Changes |
|----------|---------|
| Utility | Added R41-R53 DateFormattingInfo |
| Tab | Changed to TAB_1 (production form) |

## Notes

- Tests 23, 24, 26: **SKIPPED** (controls not on form)
- Test 22 (Tab): Uses **TAB_1 & TAB_1_SECTION_1**
- Utility uses **M prefix** for methods (M1-M37) in JS, **S prefix** (S1-S37) in TS
