'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormGoal_Information = function(executionContext, defaultWebResourceName) {
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
			: {
				Section: {
					_48707907_E91E_1590_1CD1_A9DDB71476D7: {},
					_ADADC153_6BE6_448B_7B31_64C39637829B: {},
					_A7C72450_609E_C738_4557_781B2088C473: {}
				}
			},
			: {
				Section: {
					_89AE1E95_1CCC_8646_EECE_5DE9E57B9743: {}
				}
			},
			: {
				Section: {
					_1D7EAC24_348A_75B1_8A7B_C1DBBC2D7930: {},
					_7C93D1DD_BCB6_8994_06BA_B913CAB6BDB4: {},
					_86AA59B3_D012_BD70_488B_6D2767EA858D: {}
				}
			},
			: {
				Section: {
					_16152234_8617_BEE9_5EEB_069B4472173D: {},
					_649D4E80_5014_8C90_2ABE_C39B137DC761: {},
					_009E75C7_D9C6_E460_98B7_4278BE07024B: {}
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
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Goal = {
		AmountDataType : {
			Money: 0,
			Decimal: 1,
			Integer: 2
		},
		FiscalPeriod : {
			Quarter_1: 1,
			Quarter_2: 2,
			Quarter_3: 3,
			Quarter_4: 4,
			January: 101,
			February: 102,
			March: 103,
			April: 104,
			May: 105,
			June: 106,
			July: 107,
			August: 108,
			September: 109,
			October: 110,
			November: 111,
			December: 112,
			Semester_1: 201,
			Semester_2: 202,
			Annual: 301,
			P1: 401,
			P2: 402,
			P3: 403,
			P4: 404,
			P5: 405,
			P6: 406,
			P7: 407,
			P8: 408,
			P9: 409,
			P10: 410,
			P11: 411,
			P12: 412,
			P13: 413
		},
		FiscalYear : {
			FY2038: 2038,
			FY2037: 2037,
			FY2036: 2036,
			FY2035: 2035,
			FY2034: 2034,
			FY2033: 2033,
			FY2032: 2032,
			FY2031: 2031,
			FY2030: 2030,
			FY2029: 2029,
			FY2028: 2028,
			FY2027: 2027,
			FY2026: 2026,
			FY2025: 2025,
			FY2024: 2024,
			FY2023: 2023,
			FY2022: 2022,
			FY2021: 2021,
			FY2020: 2020,
			FY2019: 2019,
			FY2018: 2018,
			FY2017: 2017,
			FY2016: 2016,
			FY2015: 2015,
			FY2014: 2014,
			FY2013: 2013,
			FY2012: 2012,
			FY2011: 2011,
			FY2010: 2010,
			FY2009: 2009,
			FY2008: 2008,
			FY2007: 2007,
			FY2006: 2006,
			FY2005: 2005,
			FY2004: 2004,
			FY2003: 2003,
			FY2002: 2002,
			FY2001: 2001,
			FY2000: 2000,
			FY1999: 1999,
			FY1998: 1998,
			FY1997: 1997,
			FY1996: 1996,
			FY1995: 1995,
			FY1994: 1994,
			FY1993: 1993,
			FY1992: 1992,
			FY1991: 1991,
			FY1990: 1990,
			FY1989: 1989,
			FY1988: 1988,
			FY1987: 1987,
			FY1986: 1986,
			FY1985: 1985,
			FY1984: 1984,
			FY1983: 1983,
			FY1982: 1982,
			FY1981: 1981,
			FY1980: 1980,
			FY1979: 1979,
			FY1978: 1978,
			FY1977: 1977,
			FY1976: 1976,
			FY1975: 1975,
			FY1974: 1974,
			FY1973: 1973,
			FY1972: 1972,
			FY1971: 1971,
			FY1970: 1970
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Open: 0,
			Closed: 1,
			Discarded: 2
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