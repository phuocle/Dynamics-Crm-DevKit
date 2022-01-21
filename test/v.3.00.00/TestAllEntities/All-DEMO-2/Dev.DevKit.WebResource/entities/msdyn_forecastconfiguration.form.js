'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_forecastconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_forecastconfiguration_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_forecastconfiguration = {
		msdyn_CalendarTemplate : {
			_3_3_3_4: 100000005,
			_3_3_4_3: 100000006,
			_3_4_3_3: 100000007,
			_4_3_3_3: 100000008,
			_4_4_5: 100000000,
			_4_5_4: 100000001,
			_5_4_4: 100000002,
			Broadcast_Calendar: 100000004,
			Gregorian: 100000003
		},
		msdyn_periodtype : {
			Monthly: 0,
			Quarterly: 1
		},
		msdyn_startingfiscalmonth : {
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
		msdyn_startingfiscalquarter : {
			Q1: 0,
			Q2: 1,
			Q3: 2,
			Q4: 3
		},
		msdyn_startingfiscalyear : {
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
			FY2028: 10
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 3,
			Archived: 6,
			Draft: 1,
			Failed: 4,
			In_progress: 2,
			Inactive: 5,
			Invalidated: 7
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