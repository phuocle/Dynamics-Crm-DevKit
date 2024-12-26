'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_mobileapplication_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_apiToken: {},
			msdynmkt_applicationmode: {},
			msdynmkt_applicationnicknameapns: {},
			msdynmkt_applicationnicknamefcm: {},
			msdynmkt_authenticationmode: {},
			msdynmkt_BundleId: {},
			msdynmkt_certificate: {},
			msdynmkt_CertificateName: {},
			msdynmkt_description: {},
			msdynmkt_endpoint: {},
			msdynmkt_keyId: {},
			msdynmkt_mobileapplicationId: {},
			msdynmkt_name: {},
			msdynmkt_organizationid: {},
			msdynmkt_password: {},
			msdynmkt_signingKey: {},
			msdynmkt_teamId: {},
			msdynmkt_tokencopied: {},
			msdynmkt_validationfcm: {},
			msdynmkt_validationios: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_A477696B_0E56_4530_80CA_29BAC08CD292: {
				Section: {
					_4BE71A76_A3C7_4E60_8DCB_1AE50112A0F4: {},
					_A477696B_0E56_4530_80CA_29BAC08CD292_SECTION_2: {},
					_A477696B_0E56_4530_80CA_29BAC08CD292_SECTION_3: {},
					_E2B995FF_B910_4A38_B3BA_E36C264B2211: {},
					_E2C995FF_B910_4A38_B3BA_E36C264B2211: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_mobileapplication: {},
			msdynmkt_mobileapplication_mobiledevice: {}
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
	OptionSet.msdynmkt_mobileapplication = {
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