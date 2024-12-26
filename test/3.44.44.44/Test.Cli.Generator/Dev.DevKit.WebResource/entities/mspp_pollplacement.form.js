'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_pollplacement_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_name: {},
			mspp_websiteid: {},
			mspp_webtemplateid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			mspp_pollplacement_adx_inviteredemptions: {},
			mspp_pollplacement_adx_portalcomments: {},
			mspp_pollplacement_Appointments: {},
			mspp_pollplacement_BulkOperations: {},
			mspp_pollplacement_CampaignActivities: {},
			mspp_pollplacement_CampaignResponses: {},
			mspp_pollplacement_Emails: {},
			mspp_pollplacement_IncidentResolutions: {},
			mspp_pollplacement_msdyn_bookingalerts: {},
			mspp_pollplacement_msdyn_copilottranscripts: {},
			mspp_pollplacement_msdyn_ocliveworkitems: {},
			mspp_pollplacement_msdyn_ocoutboundmessages: {},
			mspp_pollplacement_msdyn_ocsessions: {},
			mspp_pollplacement_msdyn_ocvoicemails: {},
			mspp_pollplacement_msfp_alerts: {},
			mspp_pollplacement_msfp_surveyinvites: {},
			mspp_pollplacement_msfp_surveyresponses: {},
			mspp_pollplacement_OpportunityCloses: {},
			mspp_pollplacement_OrderCloses: {},
			mspp_pollplacement_PhoneCalls: {},
			mspp_pollplacement_QuoteCloses: {},
			mspp_pollplacement_ServiceAppointments: {},
			mspp_pollplacement_Tasks: {}
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
	OptionSet.mspp_pollplacement = {
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