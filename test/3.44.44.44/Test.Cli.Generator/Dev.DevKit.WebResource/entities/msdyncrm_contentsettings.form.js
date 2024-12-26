'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_contentsettings_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_AddressLine2: {},
			msdyncrm_AddressLine21: {},
			msdyncrm_AddressMain: {},
			msdyncrm_AddressMain1: {},
			msdyncrm_Default: {},
			msdyncrm_FacebookUrl: {},
			msdyncrm_ForwardToAFriend: {},
			msdyncrm_ForwardToAFriend1: {},
			msdyncrm_GooglePlusUrl: {},
			msdyncrm_InstagramUrl: {},
			msdyncrm_isbusinessunitdefault: {},
			msdyncrm_LinkedInUrl: {},
			msdyncrm_name: {},
			msdyncrm_SubscriptionCenter: {},
			msdyncrm_SubscriptionCenter1: {},
			msdyncrm_TwitterUrl: {},
			msdyncrm_YoutubeUrl: {},
			notescontrol: {},
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyncrm_contentsettings_adx_inviteredemptions: {},
			msdyncrm_contentsettings_adx_portalcomments: {},
			msdyncrm_contentsettings_Appointments: {},
			msdyncrm_contentsettings_Emails: {},
			msdyncrm_contentsettings_Feedback: {},
			msdyncrm_contentsettings_msdyn_bookingalerts: {},
			msdyncrm_contentsettings_msdyn_copilottranscripts: {},
			msdyncrm_contentsettings_msdyn_ocliveworkitems: {},
			msdyncrm_contentsettings_msdyn_ocoutboundmessages: {},
			msdyncrm_contentsettings_msdyn_ocsessions: {},
			msdyncrm_contentsettings_msdyn_ocvoicemails: {},
			msdyncrm_contentsettings_msfp_alerts: {},
			msdyncrm_contentsettings_msfp_surveyinvites: {},
			msdyncrm_contentsettings_msfp_surveyresponses: {},
			msdyncrm_contentsettings_PhoneCalls: {},
			msdyncrm_contentsettings_ServiceAppointments: {},
			msdyncrm_contentsettings_Tasks: {},
			msdyncrm_msdyncrm_contentsettings_msdyncrm_customerjourney_contentsettingsid: {},
			msdyncrm_msdyncrm_contentsettings_msdyncrm_defaultmarketingsetting_DefaultCntntSettings: {},
			msdyncrm_msdyncrm_contentsettings_msdyncrm_defaultmarketingsetting_doubleoptincontentsettings: {},
			msdyncrm_msdyncrm_contentsettings_msdyncrm_marketingemailtestsend_testcontentsettingsid: {},
			msdyncrm_msdyncrm_contentsettings_msdyncrm_marketingform_doubleoptincontentsettings: {}
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
	OptionSet.msdyncrm_contentsettings = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350005,
			Expired: 192350004,
			Going_live: 192350006,
			Live: 192350001,
			Live_editable: 192350003,
			Stopped: 192350002,
			Stopping: 192350007
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