'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_forecastdefinition_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_fiscalmonth: {},
			msdyn_fiscalquarter: {},
			msdyn_fiscalyear: {},
			msdyn_forecastdefinitionname: {},
			msdyn_forecastperiodtype: {},
			msdyn_metricid: {},
			msdyn_numberofrecurrences: {},
			msdyn_quotasource: {},
			msdyn_rollupquery: {},
			msdyn_validfrom: {},
			msdyn_validto: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_forecastdefinition_msdyn_forecastinstance: {},
			msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence: {}
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
	OptionSet.msdyn_forecastdefinition = {
		msdyn_fiscalmonth : {
			April: 3,
			August: 7,
			December: 11,
			February: 1,
			January: 0,
			July: 6,
			June: 5,
			March: 2,
			May: 4,
			November: 10,
			October: 9,
			September: 8
		},
		msdyn_fiscalquarter : {
			Q1: 0,
			Q2: 1,
			Q3: 2,
			Q4: 3
		},
		msdyn_fiscalyear : {
			FY2018: 0,
			FY2019: 1,
			FY2020: 2,
			FY2021: 3,
			FY2022: 4,
			FY2023: 5,
			FY2024: 6,
			FY2025: 7,
			FY2026: 8,
			FY2027: 9,
			FY2028: 10,
			FY2029: 11,
			FY2030: 12,
			FY2031: 13,
			FY2032: 14,
			FY2033: 15,
			FY2034: 16,
			FY2035: 17,
			FY2036: 18,
			FY2037: 19,
			FY2038: 20,
			FY2039: 21,
			FY2040: 22
		},
		msdyn_forecastperiodtype : {
			Custom: 2,
			Monthly: 0,
			Quarterly: 1
		},
		msdyn_quotasource : {
			Goal_based: 192350000,
			Manual: 192350001
		},
		statecode : {
			Draft: 0,
			Published: 1
		},
		statuscode : {
			Draft: 1,
			Failed: 4,
			In_progress: 2,
			Success: 3
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