'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormContact_point_consent_create = function(executionContext, defaultWebResourceName) {
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
			description: {},
			ModifiedBy: {},
			ModifiedOn: {},
			msdynmkt_contactpointtype: {},
			msdynmkt_contactpointvalue: {},
			msdynmkt_logicalreason: {},
			msdynmkt_modifiedonbehalf: {},
			msdynmkt_purposeId: {},
			msdynmkt_source: {},
			msdynmkt_topicId: {},
			msdynmkt_value: {},
			OwningBusinessUnit: {}
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
	OptionSet.msdynmkt_contactpointconsent4 = {
		msdynmkt_contactpointconsenttype : {
			Purpose: 534120000,
			Topic: 534120001
		},
		msdynmkt_contactpointtype : {
			Custom: 534120002,
			Email: 534120000,
			Text_Message: 534120001,
			Voice: 534120003
		},
		msdynmkt_logicalreason : {
			No_reasons: 534119999,
			Opt_in_Advertisement: 534120000,
			Opt_in_Events: 534120002,
			Opt_in_Landing_page: 534120001,
			Opt_out_Content_was_irrelevant: 534120003,
			Opt_out_Didnt_recall_signing_up: 534120005,
			Opt_out_One_click_unsubscribe: 534120007,
			Opt_out_Privacy_concerns: 534120006,
			Opt_out_Received_too_frequently: 534120004
		},
		msdynmkt_source : {
			Email_list_unsubscribe: 534120007,
			Internal: 534120000,
			Loaded: 534120003,
			Preference_Center: 534120004,
			Preference_page: 534120001,
			Realtime_Marketing_Form: 534120005,
			Subscription_Center: 534120006,
			Text_message: 534120002
		},
		msdynmkt_uionly_value_tracking : {
			Not_Set: 534120000,
			Opted_In: 534120001,
			Opted_Out: 534120002
		},
		msdynmkt_value : {
			Not_Set: 534120000,
			Opted_In: 534120001,
			Opted_Out: 534120002
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