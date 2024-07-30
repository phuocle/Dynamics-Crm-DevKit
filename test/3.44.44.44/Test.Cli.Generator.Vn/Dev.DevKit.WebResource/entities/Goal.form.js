'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
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
			MetricId1: {},
			notescontrol: {},
			OwnerId: {},
			ParentGoalId: {},
			Percentage: {},
			Percentage1: {},
			Percentage2: {},
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
			_242FCD83_2A50_478E_922A_F4641920DDE0: {
				Section: {
					_8ECDE6CB_085B_46D1_97A9_E357C5799076: {}
				}
			},
			_349A439D_6ED5_BAE8_7C7D_3721869367CA: {
				Section: {
					_3A5C2DC2_2EE7_848C_83EB_A2B1E4D1C703: {}
				}
			},
			general: {
				Section: {
					information: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			child_goals: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			goal_parent_goal: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Goal = {
		AmountDataType : {
			Loai_tien: 0,
			So_nguyen: 2,
			Thap_phan: 1
		},
		FiscalPeriod : {
			Hang_nam: 301,
			Ky_1: 401,
			Ky_10: 410,
			Ky_11: 411,
			Ky_12: 412,
			Ky_13: 413,
			Ky_2: 402,
			Ky_3: 403,
			Ky_4: 404,
			Ky_5: 405,
			Ky_6: 406,
			Ky_7: 407,
			Ky_8: 408,
			Ky_9: 409,
			Ky_sau_thang_1: 201,
			Ky_sau_thang_2: 202,
			Quy_1: 1,
			Quy_2: 2,
			Quy_3: 3,
			Quy_4: 4,
			Thang_1: 101,
			Thang_10: 110,
			Thang_11: 111,
			Thang_12: 112,
			Thang_2: 102,
			Thang_3: 103,
			Thang_4: 104,
			Thang_5: 105,
			Thang_6: 106,
			Thang_7: 107,
			Thang_8: 108,
			Thang_9: 109
		},
		FiscalYear : {
			Nam_Tai_chinh1970: 1970,
			Nam_Tai_chinh1971: 1971,
			Nam_Tai_chinh1972: 1972,
			Nam_Tai_chinh1973: 1973,
			Nam_Tai_chinh1974: 1974,
			Nam_Tai_chinh1975: 1975,
			Nam_Tai_chinh1976: 1976,
			Nam_Tai_chinh1977: 1977,
			Nam_Tai_chinh1978: 1978,
			Nam_Tai_chinh1979: 1979,
			Nam_Tai_chinh1980: 1980,
			Nam_Tai_chinh1981: 1981,
			Nam_Tai_chinh1982: 1982,
			Nam_Tai_chinh1983: 1983,
			Nam_Tai_chinh1984: 1984,
			Nam_Tai_chinh1985: 1985,
			Nam_Tai_chinh1986: 1986,
			Nam_Tai_chinh1987: 1987,
			Nam_Tai_chinh1988: 1988,
			Nam_Tai_chinh1989: 1989,
			Nam_Tai_chinh1990: 1990,
			Nam_Tai_chinh1991: 1991,
			Nam_Tai_chinh1992: 1992,
			Nam_Tai_chinh1993: 1993,
			Nam_Tai_chinh1994: 1994,
			Nam_Tai_chinh1995: 1995,
			Nam_Tai_chinh1996: 1996,
			Nam_Tai_chinh1997: 1997,
			Nam_Tai_chinh1998: 1998,
			Nam_Tai_chinh1999: 1999,
			Nam_Tai_chinh2000: 2000,
			Nam_Tai_chinh2001: 2001,
			Nam_Tai_chinh2002: 2002,
			Nam_Tai_chinh2003: 2003,
			Nam_Tai_chinh2004: 2004,
			Nam_Tai_chinh2005: 2005,
			Nam_Tai_chinh2006: 2006,
			Nam_Tai_chinh2007: 2007,
			Nam_Tai_chinh2008: 2008,
			Nam_Tai_chinh2009: 2009,
			Nam_Tai_chinh2010: 2010,
			Nam_Tai_chinh2011: 2011,
			Nam_Tai_chinh2012: 2012,
			Nam_Tai_chinh2013: 2013,
			Nam_Tai_chinh2014: 2014,
			Nam_Tai_chinh2015: 2015,
			Nam_Tai_chinh2016: 2016,
			Nam_Tai_chinh2017: 2017,
			Nam_Tai_chinh2018: 2018,
			Nam_Tai_chinh2019: 2019,
			Nam_Tai_chinh2020: 2020,
			Nam_Tai_chinh2021: 2021,
			Nam_Tai_chinh2022: 2022,
			Nam_Tai_chinh2023: 2023,
			Nam_Tai_chinh2024: 2024,
			Nam_Tai_chinh2025: 2025,
			Nam_Tai_chinh2026: 2026,
			Nam_Tai_chinh2027: 2027,
			Nam_Tai_chinh2028: 2028,
			Nam_Tai_chinh2029: 2029,
			Nam_Tai_chinh2030: 2030,
			Nam_Tai_chinh2031: 2031,
			Nam_Tai_chinh2032: 2032,
			Nam_Tai_chinh2033: 2033,
			Nam_Tai_chinh2034: 2034,
			Nam_Tai_chinh2035: 2035,
			Nam_Tai_chinh2036: 2036,
			Nam_Tai_chinh2037: 2037,
			Nam_Tai_chinh2038: 2038
		},
		GoalOwnerIdType : {
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Da_dong: 1,
			Da_loai_bo: 2,
			Mo: 0
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