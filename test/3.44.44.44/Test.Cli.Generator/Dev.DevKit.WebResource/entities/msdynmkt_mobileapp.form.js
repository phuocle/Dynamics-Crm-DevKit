'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_mobileapp_Information = function(executionContext, defaultWebResourceName) {
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
			ApiTokenControl: {},
			AppSetupControl: {},
			FileLoaderControl: {},
			msdynmkt_activefcm: {},
			msdynmkt_activeios: {},
			msdynmkt_apikey: {},
			msdynmkt_apitoken: {},
			msdynmkt_applicationmode: {},
			msdynmkt_authenticationmode: {},
			msdynmkt_bundleId: {},
			msdynmkt_certificate1: {},
			msdynmkt_certificate2: {},
			msdynmkt_certificate3: {},
			msdynmkt_certificate4: {},
			msdynmkt_certificate5: {},
			msdynmkt_certificateName: {},
			msdynmkt_description: {},
			msdynmkt_keyid: {},
			msdynmkt_mobileappId: {},
			msdynmkt_name: {},
			msdynmkt_password: {},
			msdynmkt_signingkey: {},
			msdynmkt_teamId: {},
			msdynmkt_uionly_value_endpoint: {},
			msdynmkt_uionly_value_organizationid: {},
			msdynmkt_validationfcm: {},
			msdynmkt_validationios: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46: {
				Section: {
					_6A2A2CC0_DC07_4263_8CBA_7F960224682A: {},
					_A28A8CB3_0773_4CF8_9198_5CC4DD0270BA: {},
					_A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46_SECTION_2: {},
					_A64C18C0_3EAD_47DA_BACF_EA3FF7E65B46_SECTION_3: {},
					_A6FDB331_7D53_4B82_AE00_FD794DAA2991: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_mobileapp: {},
			msdynmkt_mobileapp_mobiledevice: {}
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
	OptionSet.msdynmkt_mobileapp = {
		msdynmkt_validationfcm : {
			Checking: 295660001,
			Invalid: 295660003,
			Not_started: 295660000,
			Valid: 295660002,
			Valid_connected: 295660004
		},
		msdynmkt_validationios : {
			Checking: 295660001,
			Invalid: 295660003,
			Not_started: 295660000,
			Valid: 295660002,
			Valid_connected: 295660004
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