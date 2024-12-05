'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_ocprovisioningstate_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			msdyn_errormessage: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

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
	OptionSet.msdyn_ocprovisioningstate = {
		msdyn_AutomatedCallingStatus : {
			Failure: 2,
			InProgress: 3,
			NotTested: 0,
			Success: 1
		},
		msdyn_gatekeeperstatus : {
			Active: 715240000,
			Inactive: 715240001
		},
		msdyn_gatekeeperstatusreason : {
			Deprovisioned: 2,
			Error: 1,
			Running: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Deprovisioned: 192350006,
			Deprovisioning: 192350005,
			Draft: 192350001,
			Error: 192350004,
			Processing: 192350002,
			Running: 192350003
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