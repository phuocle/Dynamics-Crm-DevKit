'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_adplacement_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_adplacement_adx_inviteredemptions: {},
			mspp_adplacement_adx_portalcomments: {},
			mspp_adplacement_Appointments: {},
			mspp_adplacement_BulkOperations: {},
			mspp_adplacement_CampaignActivities: {},
			mspp_adplacement_CampaignResponses: {},
			mspp_adplacement_Emails: {},
			mspp_adplacement_IncidentResolutions: {},
			mspp_adplacement_msdyn_bookingalerts: {},
			mspp_adplacement_msdyn_copilottranscripts: {},
			mspp_adplacement_msdyn_ocliveworkitems: {},
			mspp_adplacement_msdyn_ocoutboundmessages: {},
			mspp_adplacement_msdyn_ocsessions: {},
			mspp_adplacement_msdyn_ocvoicemails: {},
			mspp_adplacement_msfp_alerts: {},
			mspp_adplacement_msfp_surveyinvites: {},
			mspp_adplacement_msfp_surveyresponses: {},
			mspp_adplacement_OpportunityCloses: {},
			mspp_adplacement_OrderCloses: {},
			mspp_adplacement_PhoneCalls: {},
			mspp_adplacement_QuoteCloses: {},
			mspp_adplacement_ServiceAppointments: {},
			mspp_adplacement_Tasks: {}
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
	OptionSet.mspp_adplacement = {
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