# JS vs TS Test Comparison

## File Naming Convention

**Format**: `Account.Test[xx].[Name].ts`  
- `xx` = JS Order number (00-26, 4A, 8A)
- `Name` = Test function name (Control, String, Boolean, etc.)

## Final Mapping Table

| JS Order | JS Function | TS File | JS Sub-Tests | TS Sub-Tests | Status |
|:--------:|-------------|---------|:------------:|:------------:|:------:|
| 0 | TestControl | Account.Test00.Control.ts | 41 | 41 | OK |
| 1 | TestString | Account.Test01.String.ts | 38 | 38 | OK |
| 2 | TestMemo | Account.Test02.Memo.ts | 38 | 38 | OK |
| 3 | TestBoolean | Account.Test03.Boolean.ts | 38 | 38 | OK |
| 4 | TestInteger | Account.Test04.Integer.ts | 39 | 39 | OK |
| 4A | TestHeader | Account.Test04A.Header.ts | 39 | 39 | OK |
| 5 | TestDecimal | Account.Test05.Decimal.ts | 42 | 42 | OK |
| 6 | TestDouble | Account.Test06.Double.ts | 42 | 42 | OK |
| 7 | TestMoney | Account.Test07.Money.ts | 42 | 42 | OK |
| 8 | TestLookup | Account.Test08.Lookup.ts | 35 | 35 | OK |
| 8A | TestLookup1 | Account.Test08A.Lookup1.ts | 30 | 30 | OK |
| 9 | TestOptionSet | Account.Test09.OptionSet.ts | 52 | 52 | OK |
| 10 | TestMultiOptionSet | Account.Test10.MultiOptionSet.ts | 44 | 44 | OK |
| 11 | TestDateOnly | Account.Test11.DateOnly.ts | 37 | 37 | OK |
| 12 | TestDateTime | Account.Test12.DateTime.ts | 40 | 40 | OK |
| 13 | TestGrid | Account.Test13.Grid.ts | 20 | 33 | DIFF +13 |
| 14 | TestQuickView | Account.Test14.QuickView.ts | 15 | 22 | DIFF +7 |
| 15 | TestNavigationItem | Account.Test15.NavigationItem.ts | 12 | 10 | DIFF -2 |
| 16 | TestExecutionContext | Account.Test16.ExecutionContext.ts | 25 | 21 | DIFF -4 |
| 17 | TestSidePanes | Account.Test17.SidePanes.ts | 12 | 16 | DIFF +4 |
| 18 | TestCopilot | Account.Test18.Copilot.ts | 9 | 10 | DIFF +1 |
| 19 | TestProcess | Account.Test19.Process.ts | 19 | 23 | DIFF +4 |
| 20 | TestIFrame | Account.Test20.IFrame.ts | 18 | 18 | OK |
| 21 | TestUtility | Account.Test21.Utility.ts | 92 | 115 | DIFF +23 |
| 22 | TestTab | Account.Test22.Tab.ts | 26 | 27 | DIFF +1 |
| 23 | TestTimer | Account.Test23.Timer.ts | 22 | 14 | DIFF -8 |
| 24 | TestKnowledge | Account.Test24.Knowledge.ts | 22 | 18 | DIFF -4 |
| 25 | TestWebApi | Account.Test25.WebApi.ts | 22 | 26 | DIFF +4 |
| 26 | TestWebResource | Account.Test26.WebResource.ts | 0 (SKIPPED) | 20 | DIFF +20 |

## Summary

- 15 tests have equal sub-test counts (OK)
- 14 tests have different sub-test counts (DIFF)
