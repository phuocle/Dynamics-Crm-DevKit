'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_activityanalysisconfig_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {}
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
	DevKit.Formmsdyn_activityanalysisconfig_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {}
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
	OptionSet.msdyn_activityanalysisconfig = {
		msdyn_communicationfrequency : {
			Once_a_day: 1,
			Once_a_month: 5,
			Once_a_week: 3,
			Once_every_couple_of_weeks: 4,
			Once_every_few_days: 2
		},
		msdyn_currentstatus : {
			ActivationCompleted: 3,
			ActivationFailed: 4,
			ActivationInProgress: 2,
			DeactivationCompleted: 6,
			DeactivationFailed: 7,
			DeactivationInProgress: 5,
			None: 1
		},
		msdyn_datasource : {
			Both: 3,
			CRM: 1,
			MARS: 2
		},
		msdyn_exchangemarsstatus : {
			ActivationCompleted: 3,
			ActivationFailed: 4,
			ActivationFailedDueToOptin_401: 401,
			ActivationFailedDueToOptin_5: 5,
			ActivationFailedDueToOptinAccess: 402,
			ActivationInProgress: 2,
			DeactivationCompleted: 7,
			DeactivationInProgress: 6,
			None: 1
		},
		msdyn_healthfeaturestatus : {
			Disabled: 2,
			Enabled: 1
		},
		msdyn_linkedinstatus : {
			ActivationCompleted: 3,
			ActivationFailed: 4,
			ActivationInProgress: 2,
			DeactivationCompleted: 6,
			DeactivationFailed: 7,
			DeactivationInProgress: 5,
			None: 1,
			UpgradeFailed: 10,
			UpgradeInProgress: 9,
			UpgradePending: 8,
			UpgradeSucceeded: 11
		},
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