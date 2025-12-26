# JS vs TS Test Comparison

## File Naming Convention

**Format**: `Account.Test[xx].[Name].ts`  
- `xx` = JS Order number (00-26, 4A, 8A)
- `Name` = Test function name (Control, String, Boolean, etc.)

## Final Mapping Table

| JS Order | JS Function | TS File | JS Sub-Tests | TS Sub-Tests | Status |
|:--------:|-------------|---------|:------------:|:------------:|:------:|
| 0 | TestControl | Account.Test00.Control.ts | 24 | 24 | OK |
| 1 | TestString | Account.Test01.String.ts | 26 | 26 | OK |
| 2 | TestMemo | Account.Test02.Memo.ts | 26 | 26 | OK |
| 3 | TestBoolean | Account.Test03.Boolean.ts | 26 | 26 | OK |
| 4 | TestInteger | Account.Test04.Integer.ts | 27 | 27 | OK |
| 4A | TestHeader | Account.Test04A.Header.ts | 27 | 27 | OK |
| 5 | TestDecimal | Account.Test05.Decimal.ts | 30 | 30 | OK |
| 6 | TestDouble | Account.Test06.Double.ts | 30 | 30 | OK |
| 7 | TestMoney | Account.Test07.Money.ts | 30 | 30 | OK |
| 8 | TestLookup | Account.Test08.Lookup.ts | 22 | 22 | OK |
| 8A | TestLookup1 | Account.Test08A.Lookup1.ts | 18 | 18 | OK |
| 9 | TestOptionSet | Account.Test09.OptionSet.ts | 40 | 40 | OK |
| 10 | TestMultiOptionSet | Account.Test10.MultiOptionSet.ts | 32 | 32 | OK |
| 11 | TestDateOnly | Account.Test11.DateOnly.ts | 25 | 25 | OK |
| 12 | TestDateTime | Account.Test12.DateTime.ts | 28 | 28 | OK |
| 13 | TestGrid | Account.Test13.Grid.ts | 14 | 20 | DIFF +6 |
| 14 | TestQuickView | Account.Test14.QuickView.ts | 10 | 15 | DIFF +5 |
| 15 | TestNavigationItem | Account.Test15.NavigationItem.ts | 6 | 6 | OK |
| 16 | TestExecutionContext | Account.Test16.ExecutionContext.ts | 12 | 14 | DIFF +2 |
| 17 | TestSidePanes | Account.Test17.SidePanes.ts | 9 | 14 | DIFF +5 |
| 18 | TestCopilot | Account.Test18.Copilot.ts | 6 | 8 | DIFF +2 |
| 19 | TestProcess | Account.Test19.Process.ts | 13 | 18 | DIFF +5 |
| 20 | TestIFrame | Account.Test20.IFrame.ts | 12 | 12 | OK |
| 21 | TestUtility | Account.Test21.Utility.ts | 85 | 90 | DIFF +5 |
| 22 | TestTab | Account.Test22.Tab.ts | 18 | 18 | OK |
| 23 | TestTimer | Account.Test23.Timer.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |
| 24 | TestKnowledge | Account.Test24.Knowledge.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |
| 25 | TestWebApi | Account.Test25.WebApi.ts | 11 | 13 | DIFF +2 |
| 26 | TestWebResource | Account.Test26.WebResource.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |

## Summary

- **21 tests have equal sub-test counts** (OK)
- **7 tests have different sub-test counts** (DIFF) - all TS has MORE tests:
  - Grid: TS +6 (R5-R6 Relationship details, S6-S8 RefreshRibbon/OpenRelatedGrid/Rows iteration)
  - QuickView: TS +5 (R7-R9 Body controls, S5-S6 Controls/Focus methods)
  - ExecutionContext: TS +2 (R7-R8 SaveErrorInfo/SaveMode, S6 SetPreventDefaultOnError)
  - SidePanes: TS +5 (R6-R8 function checks, S5-S6 Create/GetAll delayed)
  - Copilot: TS +2 (S2, S4 callback variants)
  - Process: TS +5 (R9 BPF.IndustryCode, S3-S4 SetActiveProcess/Stage, S7-S9 events)
  - Utility: TS +5 (R41-R53 DateFormattingInfo now added)
  - WebApi: TS +2 (S3 FormattedValue, S7 OData+PageSize)

## Notes

- Tests 23, 24 and 26 are **SKIPPED** in both JS and TS (controls not on form)
- Test 22 (Tab) uses **TAB_1 & TAB_1_SECTION_1** in both JS and TS
- **Synced from JS → TS**: Test21.Utility DateFormattingInfo tests (R41-R53)
