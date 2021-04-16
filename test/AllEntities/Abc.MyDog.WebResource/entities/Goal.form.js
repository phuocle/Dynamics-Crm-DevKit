'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormGoal_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActualDecimal: {},
			ActualInteger: {},
			ActualMoney: {},
			child_goals: {},
			ConsiderOnlyGoalOwnersRecords: {},
			CustomRollupFieldDecimal: {},
			CustomRollupFieldInteger: {},
			CustomRollupFieldMoney: {},
			FiscalPeriod: {},
			FiscalYear: {},
			GoalEndDate: {},
			GoalOwnerId: {},
			GoalStartDate: {},
			InProgressDecimal: {},
			InProgressInteger: {},
			InProgressMoney: {},
			IsFiscalPeriodGoal: {},
			LastRolledupDate: {},
			MetricId: {},
			MetricId_1: {},
			notescontrol: {},
			OwnerId: {},
			ParentGoalId: {},
			Percentage: {},
			Percentage_1: {},
			Percentage_2: {},
			RollupOnlyFromChildGoals: {},
			RollUpQueryActualDecimalId: {},
			RollupQueryActualIntegerId: {},
			RollUpQueryActualMoneyId: {},
			RollUpQueryCustomDecimalId: {},
			RollUpQueryCustomIntegerId: {},
			RollUpQueryCustomMoneyId: {},
			RollUpQueryInprogressDecimalId: {},
			RollUpQueryInprogressIntegerId: {},
			RollUpQueryInprogressMoneyId: {},
			StretchTargetDecimal: {},
			StretchTargetInteger: {},
			StretchTargetMoney: {},
			TargetDecimal: {},
			TargetInteger: {},
			TargetMoney: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					information: {}
				}
			},
			_349A439D_6ED5_BAE8_7C7D_3721869367CA: {
				Section: {
					_3A5C2DC2_2EE7_848C_83EB_A2B1E4D1C703: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			},
			_242FCD83_2A50_478E_922A_F4641920DDE0: {
				Section: {
					_8ECDE6CB_085B_46D1_97A9_E357C5799076: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			child_goals: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Goal = {
		AmountDataType : {
			Decimal: 1,
			Integer: 2,
			Money: 0
		},
		FiscalPeriod : {
			Annual: 301,
			April: 104,
			August: 108,
			December: 112,
			February: 102,
			January: 101,
			July: 107,
			June: 106,
			March: 103,
			May: 105,
			November: 111,
			October: 110,
			P1: 401,
			P10: 410,
			P11: 411,
			P12: 412,
			P13: 413,
			P2: 402,
			P3: 403,
			P4: 404,
			P5: 405,
			P6: 406,
			P7: 407,
			P8: 408,
			P9: 409,
			Quarter_1: 1,
			Quarter_2: 2,
			Quarter_3: 3,
			Quarter_4: 4,
			Semester_1: 201,
			Semester_2: 202,
			September: 109
		},
		FiscalYear : {
			FY1970: 1970,
			FY1971: 1971,
			FY1972: 1972,
			FY1973: 1973,
			FY1974: 1974,
			FY1975: 1975,
			FY1976: 1976,
			FY1977: 1977,
			FY1978: 1978,
			FY1979: 1979,
			FY1980: 1980,
			FY1981: 1981,
			FY1982: 1982,
			FY1983: 1983,
			FY1984: 1984,
			FY1985: 1985,
			FY1986: 1986,
			FY1987: 1987,
			FY1988: 1988,
			FY1989: 1989,
			FY1990: 1990,
			FY1991: 1991,
			FY1992: 1992,
			FY1993: 1993,
			FY1994: 1994,
			FY1995: 1995,
			FY1996: 1996,
			FY1997: 1997,
			FY1998: 1998,
			FY1999: 1999,
			FY2000: 2000,
			FY2001: 2001,
			FY2002: 2002,
			FY2003: 2003,
			FY2004: 2004,
			FY2005: 2005,
			FY2006: 2006,
			FY2007: 2007,
			FY2008: 2008,
			FY2009: 2009,
			FY2010: 2010,
			FY2011: 2011,
			FY2012: 2012,
			FY2013: 2013,
			FY2014: 2014,
			FY2015: 2015,
			FY2016: 2016,
			FY2017: 2017,
			FY2018: 2018,
			FY2019: 2019,
			FY2020: 2020,
			FY2021: 2021,
			FY2022: 2022,
			FY2023: 2023,
			FY2024: 2024,
			FY2025: 2025,
			FY2026: 2026,
			FY2027: 2027,
			FY2028: 2028,
			FY2029: 2029,
			FY2030: 2030,
			FY2031: 2031,
			FY2032: 2032,
			FY2033: 2033,
			FY2034: 2034,
			FY2035: 2035,
			FY2036: 2036,
			FY2037: 2037,
			FY2038: 2038
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Closed: 1,
			Discarded: 2,
			Open: 0
		},
        RollupState : {
            NotCalculated: 0,
            Calculated: 1,
            OverflowError: 2,
            OtherError: 3,
            RetryLimitExceeded: 4,
            HierarchicalRecursionLimitReached: 5,
            LoopDetected: 6
        }

	};
})(OptionSet || (OptionSet = {}));