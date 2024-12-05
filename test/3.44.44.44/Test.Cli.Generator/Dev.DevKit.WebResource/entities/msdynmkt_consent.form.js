'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_consent_Information = function(executionContext, defaultWebResourceName) {
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
			AllowSmsMessageControl: {},
			msdynmkt_AllowEmail: {},
			msdynmkt_AllowSMS: {},
			msdynmkt_AllowTracking: {},
			msdynmkt_changesource: {},
			msdynmkt_profileId: {},
			msdynmkt_reason: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_profileId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	OptionSet.msdynmkt_consent = {
		msdynmkt_AllowEmail : {
			Opted_in: 534120000,
			Opted_out: 534120001
		},
		msdynmkt_AllowSMS : {
			Opted_in: 534120000,
			Opted_out: 534120001
		},
		msdynmkt_AllowTracking : {
			Opted_in: 534120000,
			Opted_out: 534120001
		},
		msdynmkt_changesource : {
			Internal: 534120000,
			Preference_page: 534120001,
			Text_message: 534120002
		},
		msdynmkt_reason : {
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