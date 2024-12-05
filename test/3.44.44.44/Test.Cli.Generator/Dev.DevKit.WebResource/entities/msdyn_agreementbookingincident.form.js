'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAgreement_Booking_Incident_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_Agreement: {},
			msdyn_AgreementBookingSetup: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_IncidentType: {},
			msdyn_name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					fstab_general_section_2: {},
					fstab_general_section_3: {},
					fstab_general_section_general: {}
				}
			},
			fstab_other: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section: {},
					fstab_sub_grids_section_2: {},
					fstab_sub_grids_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_agreementbookingincident_adx_inviteredemptions: {},
			msdyn_agreementbookingincident_adx_portalcomments: {},
			msdyn_agreementbookingincident_Appointments: {},
			msdyn_agreementbookingincident_Emails: {},
			msdyn_agreementbookingincident_msdyn_bookingalerts: {},
			msdyn_agreementbookingincident_msdyn_copilottranscripts: {},
			msdyn_agreementbookingincident_msdyn_ocliveworkitems: {},
			msdyn_agreementbookingincident_msdyn_ocoutboundmessages: {},
			msdyn_agreementbookingincident_msdyn_ocsessions: {},
			msdyn_agreementbookingincident_msdyn_ocvoicemails: {},
			msdyn_agreementbookingincident_msfp_alerts: {},
			msdyn_agreementbookingincident_msfp_surveyinvites: {},
			msdyn_agreementbookingincident_msfp_surveyresponses: {},
			msdyn_agreementbookingincident_PhoneCalls: {},
			msdyn_agreementbookingincident_ServiceAppointments: {},
			msdyn_agreementbookingincident_Tasks: {},
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingproduct_AgreementBookingIncident: {},
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservice_AgreementBookingIncident: {},
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservicetask_AgreementBookingIncident: {},
			msdyn_msdyn_agreementbookingincident_msdyn_workorderincident_AgreementBookingIncident: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_agreementbookingincident_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Agreement: {},
			msdyn_AgreementBookingSetup: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_FunctionalLocation: {},
			msdyn_IncidentType: {},
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
			msdyn_agreementbookingincident_adx_inviteredemptions: {},
			msdyn_agreementbookingincident_adx_portalcomments: {},
			msdyn_agreementbookingincident_Appointments: {},
			msdyn_agreementbookingincident_Emails: {},
			msdyn_agreementbookingincident_msdyn_bookingalerts: {},
			msdyn_agreementbookingincident_msdyn_copilottranscripts: {},
			msdyn_agreementbookingincident_msdyn_ocliveworkitems: {},
			msdyn_agreementbookingincident_msdyn_ocoutboundmessages: {},
			msdyn_agreementbookingincident_msdyn_ocsessions: {},
			msdyn_agreementbookingincident_msdyn_ocvoicemails: {},
			msdyn_agreementbookingincident_msfp_alerts: {},
			msdyn_agreementbookingincident_msfp_surveyinvites: {},
			msdyn_agreementbookingincident_msfp_surveyresponses: {},
			msdyn_agreementbookingincident_PhoneCalls: {},
			msdyn_agreementbookingincident_ServiceAppointments: {},
			msdyn_agreementbookingincident_Tasks: {},
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingproduct_AgreementBookingIncident: {},
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservice_AgreementBookingIncident: {},
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservicetask_AgreementBookingIncident: {},
			msdyn_msdyn_agreementbookingincident_msdyn_workorderincident_AgreementBookingIncident: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAgreement_Booking_Incident_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_Agreement: {},
			msdyn_AgreementBookingSetup: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_FunctionalLocation: {},
			msdyn_IncidentType: {},
			msdyn_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					fstab_general_section_3: {},
					fstab_general_section_general: {},
					fstab_general_section_other: {}
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
	OptionSet.msdyn_agreementbookingincident = {
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