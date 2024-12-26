'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_authenticationsettings_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Authenticationtype: {},
			msdyn_JavaScriptclientfunction: {},
			msdyn_name: {},
			msdyn_ocauthchanneltype: {},
			msdyn_PublickeyURL: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_authenticationsettings_msdyn_entr: {},
			msdyn_authenticationsettings_msdyn_ocapplebusinessaccount: {},
			msdyn_authenticationsettings_msdyn_ocrichobjectmap: {},
			msdyn_authenticationsettings_msdyn_ocvoicechannelsetting: {},
			msdyn_authenticationsettingsv2_msdyn_ocapplebusinessaccount: {},
			msdyn_msdyn_authsettings_msdyn_livechatconfig: {}
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
	OptionSet.msdyn_authenticationsettings = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_Authenticationtype : {
			Gatekeeper_Biometric_Authentication: 192350002,
			OAuth_20_code_flow: 192350001,
			OAuth_20_enhanced_authentication_chat_flow: 192350004,
			OAuth_20_implicit_flow: 192350000,
			OAuth_20_OpenId_connect_flow: 192350003
		},
		msdyn_endpointregion : {
			Canada: 192440002,
			United_Kingdom: 192440003,
			United_States: 192440001
		},
		msdyn_ocauthchanneltype : {
			Apple_Messages_For_Business: 192450000,
			Live_chat: 192360000,
			Voice: 192440000
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