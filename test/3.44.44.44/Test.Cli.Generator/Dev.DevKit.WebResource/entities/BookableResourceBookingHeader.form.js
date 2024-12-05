'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBookableResourceBookingHeader_Information = function(executionContext, defaultWebResourceName) {
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
			Duration: {},
			EndTime: {},
			Name: {},
			notescontrol: {},
			StartTime: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			bookableresourcebookingheader_adx_inviteredemptions: {},
			bookableresourcebookingheader_adx_portalcomments: {},
			bookableresourcebookingheader_Appointments: {},
			bookableresourcebookingheader_bookableresourcebooking_Header: {},
			bookableresourcebookingheader_BulkOperations: {},
			bookableresourcebookingheader_CampaignActivities: {},
			bookableresourcebookingheader_CampaignResponses: {},
			bookableresourcebookingheader_Emails: {},
			bookableresourcebookingheader_IncidentResolutions: {},
			bookableresourcebookingheader_msdyn_bookingalerts: {},
			bookableresourcebookingheader_msdyn_copilottranscripts: {},
			bookableresourcebookingheader_msdyn_ocliveworkitems: {},
			bookableresourcebookingheader_msdyn_ocoutboundmessages: {},
			bookableresourcebookingheader_msdyn_ocsessions: {},
			bookableresourcebookingheader_msdyn_ocvoicemails: {},
			bookableresourcebookingheader_msfp_alerts: {},
			bookableresourcebookingheader_msfp_surveyinvites: {},
			bookableresourcebookingheader_msfp_surveyresponses: {},
			bookableresourcebookingheader_OpportunityCloses: {},
			bookableresourcebookingheader_OrderCloses: {},
			bookableresourcebookingheader_PhoneCalls: {},
			bookableresourcebookingheader_QuoteCloses: {},
			bookableresourcebookingheader_ServiceAppointments: {},
			bookableresourcebookingheader_Tasks: {}
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
	OptionSet.BookableResourceBookingHeader = {
		msdyn_BookingType : {
			Liquid: 2,
			Solid: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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