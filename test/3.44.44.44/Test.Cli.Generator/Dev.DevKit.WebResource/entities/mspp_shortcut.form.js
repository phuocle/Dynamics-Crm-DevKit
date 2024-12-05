'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_shortcut_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_description: {},
			mspp_description1: {},
			mspp_disabletargetvalidation: {},
			mspp_displayorder: {},
			mspp_externalurl: {},
			mspp_name: {},
			mspp_parentpage_webpageid: {},
			mspp_title: {},
			mspp_webfileid: {},
			mspp_webpageid: {},
			mspp_websiteid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			mspp_shortcut_adx_inviteredemptions: {},
			mspp_shortcut_adx_portalcomments: {},
			mspp_shortcut_Appointments: {},
			mspp_shortcut_BulkOperations: {},
			mspp_shortcut_CampaignActivities: {},
			mspp_shortcut_CampaignResponses: {},
			mspp_shortcut_Emails: {},
			mspp_shortcut_IncidentResolutions: {},
			mspp_shortcut_msdyn_bookingalerts: {},
			mspp_shortcut_msdyn_copilottranscripts: {},
			mspp_shortcut_msdyn_ocliveworkitems: {},
			mspp_shortcut_msdyn_ocoutboundmessages: {},
			mspp_shortcut_msdyn_ocsessions: {},
			mspp_shortcut_msdyn_ocvoicemails: {},
			mspp_shortcut_msfp_alerts: {},
			mspp_shortcut_msfp_surveyinvites: {},
			mspp_shortcut_msfp_surveyresponses: {},
			mspp_shortcut_OpportunityCloses: {},
			mspp_shortcut_OrderCloses: {},
			mspp_shortcut_PhoneCalls: {},
			mspp_shortcut_QuoteCloses: {},
			mspp_shortcut_ServiceAppointments: {},
			mspp_shortcut_Tasks: {}
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
	OptionSet.mspp_shortcut = {
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