'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormForm = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_consentcompliancegroupcontrol: {},
			msdynmkt_imageid: {},
			msdynmkt_link: {},
			msdynmkt_link1: {},
			msdynmkt_message: {},
			msdynmkt_onclickbehavior: {},
			msdynmkt_subtitle: {},
			msdynmkt_title: {},
			OwningBusinessUnit: {},
			statuscode: {},
			textnoconsentcontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_pushnotification: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_pushnotification_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_appname: {},
			msdynmkt_compliance: {},
			msdynmkt_consentcompliancegroupcontrol: {},
			msdynmkt_imageid: {},
			msdynmkt_link: {},
			msdynmkt_message: {},
			msdynmkt_onclickbehavior: {},
			msdynmkt_purpose: {},
			msdynmkt_pushnotificationId: {},
			msdynmkt_subtitle: {},
			msdynmkt_title: {},
			msdynmkt_topic: {},
			OwningBusinessUnit: {},
			PushNotificationtHostControl: {},
			statuscode: {},
			textnoconsentcontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {},
			msdynmkt_placeholders: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_pushnotification: {}
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
	OptionSet.msdynmkt_pushnotification = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_messagedesignation : {
			Commercial: 534120000,
			Transactional: 534120001
		},
		msdynmkt_onclickbehavior : {
			Open_Customer_Voice_survey: 534120002,
			Open_in_browser: 534120001,
			Open_the_app: 534120000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 1,
			Inactive: 100,
			Ready_to_send: 2,
			Ready_to_send_editing: 3
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