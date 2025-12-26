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
| 13 | TestGrid | Account.Test13.Grid.ts | 20 | 20 | OK |
| 14 | TestQuickView | Account.Test14.QuickView.ts | 15 | 15 | OK |
| 15 | TestNavigationItem | Account.Test15.NavigationItem.ts | 6 | 6 | OK |
| 16 | TestExecutionContext | Account.Test16.ExecutionContext.ts | 14 | 14 | OK |
| 17 | TestSidePanes | Account.Test17.SidePanes.ts | 14 | 14 | OK |
| 18 | TestCopilot | Account.Test18.Copilot.ts | 8 | 8 | OK |
| 19 | TestProcess | Account.Test19.Process.ts | 18 | 18 | OK |
| 20 | TestIFrame | Account.Test20.IFrame.ts | 12 | 12 | OK |
| 21 | TestUtility | Account.Test21.Utility.ts | 85 | 90 | DIFF +5 |
| 22 | TestTab | Account.Test22.Tab.ts | 18 | 18 | OK |
| 23 | TestTimer | Account.Test23.Timer.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |
| 24 | TestKnowledge | Account.Test24.Knowledge.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |
| 25 | TestWebApi | Account.Test25.WebApi.ts | 11 | 13 | DIFF +2 |
| 26 | TestWebResource | Account.Test26.WebResource.ts | 0 (SKIPPED) | 0 (SKIPPED) | OK |

## Summary

- **25 tests have equal sub-test counts** (OK)
- **2 tests have different sub-test counts** (DIFF):
  - Utility: TS +5 (R41-R53 DateFormattingInfo + WebResourceUrl)
  - WebApi: TS +2 (S3 FormattedValue, S7 OData+PageSize)

## Sync History

### TS → JS (This session)
- Grid: R5-R6 Relationship details, R10-R11 ViewSelector.Visible, S6-S8 methods
- QuickView: R7-R9 Body controls, S5-S6 Controls/Focus
- ExecutionContext: R8 SaveErrorInfo, S6 SetPreventDefaultOnError
- SidePanes: R4 GetSelected, R6-R8 function checks, S5-S6 Create/GetAll
- Copilot: S2, S4 callback variants
- Process: R9 BPF.IndustryCode, S3-S4 SetActiveProcess/Stage, S7-S9 events

### JS → TS (This session)
- Utility: R41-R53 DateFormattingInfo detailed tests
- Tab: Used TAB_1 structure (matching production form)

## Notes

- Tests 23, 24 and 26 are **SKIPPED** in both JS and TS (controls not on form)
- Test 22 (Tab) uses **TAB_1 & TAB_1_SECTION_1** in both JS and TS
