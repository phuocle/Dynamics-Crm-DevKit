'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_redirect_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_inboundurl: {},
			mspp_name: {},
			mspp_redirectstatuscode: {},
			mspp_redirecturl: {},
			mspp_sitemarkerid: {},
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
			mspp_redirect_adx_inviteredemptions: {},
			mspp_redirect_adx_portalcomments: {},
			mspp_redirect_Appointments: {},
			mspp_redirect_BulkOperations: {},
			mspp_redirect_CampaignActivities: {},
			mspp_redirect_CampaignResponses: {},
			mspp_redirect_Emails: {},
			mspp_redirect_IncidentResolutions: {},
			mspp_redirect_msdyn_bookingalerts: {},
			mspp_redirect_msdyn_copilottranscripts: {},
			mspp_redirect_msdyn_ocliveworkitems: {},
			mspp_redirect_msdyn_ocoutboundmessages: {},
			mspp_redirect_msdyn_ocsessions: {},
			mspp_redirect_msdyn_ocvoicemails: {},
			mspp_redirect_msfp_alerts: {},
			mspp_redirect_msfp_surveyinvites: {},
			mspp_redirect_msfp_surveyresponses: {},
			mspp_redirect_OpportunityCloses: {},
			mspp_redirect_OrderCloses: {},
			mspp_redirect_PhoneCalls: {},
			mspp_redirect_QuoteCloses: {},
			mspp_redirect_ServiceAppointments: {},
			mspp_redirect_Tasks: {}
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
	OptionSet.mspp_redirect = {
		mspp_statuscode : {
			_301_Permanent_Redirect: 301,
			_302_Temporary_Redirect: 302
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