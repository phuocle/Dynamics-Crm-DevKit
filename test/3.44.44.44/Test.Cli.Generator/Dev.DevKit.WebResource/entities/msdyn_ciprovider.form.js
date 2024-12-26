'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_ciprovider_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AppSelector: {},
			msdyn_channelprovidericon: {},
			msdyn_ciproviderapiversion: {},
			msdyn_ClickToAct: {},
			msdyn_customparams: {},
			msdyn_EnableAnalytics: {},
			msdyn_Label: {},
			msdyn_LandingUrl: {},
			msdyn_name: {},
			msdyn_RoleSelector: {},
			msdyn_sandboxconfiguration: {},
			msdyn_SortOrder: {},
			msdyn_trusteddomain: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_2190EC7E_BB48_4408_AA64_6008072A8A39: {
				Section: {
					_2190EC7E_BB48_4408_AA64_6008072A8A39_SECTION_3: {},
					_C8623D8D_AFFD_453D_8CAE_3DA82648CCF0_SECTION_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_ciprovider_msdyn_channel: {}
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
	OptionSet.msdyn_ciprovider = {
		msdyn_ciproviderapiversion : {
			_10: 0,
			_20: 1
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