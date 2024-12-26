'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_quotebookingincident_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_customerasset: {},
			msdyn_description: {},
			msdyn_estimatedduration: {},
			msdyn_incidenttype: {},
			msdyn_name: {},
			msdyn_quotebookingsetup: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_12F021EA_BAAA_460F_99BF_53D1F1A1F781: {
				Section: {
					_4366A258_2E1D_4CC0_A7D7_9318CC651C44: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_quotebookingincident_msdyn_quotebookingproduct_QuoteBookingIncident: {},
			msdyn_msdyn_quotebookingincident_msdyn_quotebookingservice_QuoteBookingIncident: {},
			msdyn_msdyn_quotebookingincident_msdyn_quotebookingservicetask_QuoteBookingIncident: {},
			msdyn_quotebookingincident_adx_inviteredemptions: {},
			msdyn_quotebookingincident_adx_portalcomments: {},
			msdyn_quotebookingincident_Appointments: {},
			msdyn_quotebookingincident_Emails: {},
			msdyn_quotebookingincident_msdyn_bookingalerts: {},
			msdyn_quotebookingincident_msdyn_copilottranscripts: {},
			msdyn_quotebookingincident_msdyn_ocliveworkitems: {},
			msdyn_quotebookingincident_msdyn_ocoutboundmessages: {},
			msdyn_quotebookingincident_msdyn_ocsessions: {},
			msdyn_quotebookingincident_msdyn_ocvoicemails: {},
			msdyn_quotebookingincident_msfp_alerts: {},
			msdyn_quotebookingincident_msfp_surveyinvites: {},
			msdyn_quotebookingincident_msfp_surveyresponses: {},
			msdyn_quotebookingincident_PhoneCalls: {},
			msdyn_quotebookingincident_ServiceAppointments: {},
			msdyn_quotebookingincident_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_quotebookingincident_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_quotebookingincident_msdyn_quotebookingproduct_QuoteBookingIncident: {},
			msdyn_msdyn_quotebookingincident_msdyn_quotebookingservice_QuoteBookingIncident: {},
			msdyn_msdyn_quotebookingincident_msdyn_quotebookingservicetask_QuoteBookingIncident: {},
			msdyn_quotebookingincident_adx_inviteredemptions: {},
			msdyn_quotebookingincident_adx_portalcomments: {},
			msdyn_quotebookingincident_Appointments: {},
			msdyn_quotebookingincident_Emails: {},
			msdyn_quotebookingincident_msdyn_bookingalerts: {},
			msdyn_quotebookingincident_msdyn_copilottranscripts: {},
			msdyn_quotebookingincident_msdyn_ocliveworkitems: {},
			msdyn_quotebookingincident_msdyn_ocoutboundmessages: {},
			msdyn_quotebookingincident_msdyn_ocsessions: {},
			msdyn_quotebookingincident_msdyn_ocvoicemails: {},
			msdyn_quotebookingincident_msfp_alerts: {},
			msdyn_quotebookingincident_msfp_surveyinvites: {},
			msdyn_quotebookingincident_msfp_surveyresponses: {},
			msdyn_quotebookingincident_PhoneCalls: {},
			msdyn_quotebookingincident_ServiceAppointments: {},
			msdyn_quotebookingincident_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_quotebookingincident_Information3 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_customerasset: {},
			msdyn_description: {},
			msdyn_estimatedduration: {},
			msdyn_incidenttype: {},
			msdyn_name: {},
			msdyn_quotebookingsetup: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			QuoteBookingIncidentTab: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotebookingincident = {
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