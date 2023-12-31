﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_geolocationsettings_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_EnableLocationTracking: {},
			msdyn_fridayendtime: {},
			msdyn_fridaystarttime: {},
			msdyn_mondayendtime: {},
			msdyn_mondaystarttime: {},
			msdyn_name: {},
			msdyn_refreshIntervalSeconds: {},
			msdyn_saturdayendtime: {},
			msdyn_saturdaystarttime: {},
			msdyn_sundayendtime: {},
			msdyn_sundaystarttime: {},
			msdyn_thursdayendtime: {},
			msdyn_thursdaystarttime: {},
			msdyn_tuesdayendtime: {},
			msdyn_tuesdaystarttime: {},
			msdyn_wednesdayendtime: {},
			msdyn_wednesdaystarttime: {}
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
	OptionSet.msdyn_geolocationsettings = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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