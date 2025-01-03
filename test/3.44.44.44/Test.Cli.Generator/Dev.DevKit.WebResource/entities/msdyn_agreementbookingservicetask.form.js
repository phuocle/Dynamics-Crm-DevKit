﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAgreement_Booking_Service_Task_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_AgreementBookingIncident: {},
			msdyn_AgreementBookingSetup: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_Inspection: {},
			msdyn_Inspection1: {},
			msdyn_InspectionEnabled: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_TaskType: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					fstab_general_section_3: {},
					fstab_general_section_4: {},
					fstab_general_section_general: {},
					fstab_general_section_service_task_relates_to: {},
					InspectionFormSection_Mobile: {}
				}
			},
			fstab_other: {
				Section: {
					fstab_other_section: {},
					fstab_other_section_2: {},
					fstab_other_section_3: {}
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
			msdyn_agreementbookingservicetask_adx_inviteredemptions: {},
			msdyn_agreementbookingservicetask_adx_portalcomments: {},
			msdyn_agreementbookingservicetask_Appointments: {},
			msdyn_agreementbookingservicetask_Emails: {},
			msdyn_agreementbookingservicetask_msdyn_bookingalerts: {},
			msdyn_agreementbookingservicetask_msdyn_copilottranscripts: {},
			msdyn_agreementbookingservicetask_msdyn_ocliveworkitems: {},
			msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages: {},
			msdyn_agreementbookingservicetask_msdyn_ocsessions: {},
			msdyn_agreementbookingservicetask_msdyn_ocvoicemails: {},
			msdyn_agreementbookingservicetask_msfp_alerts: {},
			msdyn_agreementbookingservicetask_msfp_surveyinvites: {},
			msdyn_agreementbookingservicetask_msfp_surveyresponses: {},
			msdyn_agreementbookingservicetask_PhoneCalls: {},
			msdyn_agreementbookingservicetask_ServiceAppointments: {},
			msdyn_agreementbookingservicetask_Tasks: {},
			msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_agreementbookingservicetask_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AgreementBookingIncident: {},
			msdyn_AgreementBookingSetup: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_Inspection: {},
			msdyn_Inspection1: {},
			msdyn_InspectionEnabled: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_TaskType: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_agreementbookingservicetask_adx_inviteredemptions: {},
			msdyn_agreementbookingservicetask_adx_portalcomments: {},
			msdyn_agreementbookingservicetask_Appointments: {},
			msdyn_agreementbookingservicetask_Emails: {},
			msdyn_agreementbookingservicetask_msdyn_bookingalerts: {},
			msdyn_agreementbookingservicetask_msdyn_copilottranscripts: {},
			msdyn_agreementbookingservicetask_msdyn_ocliveworkitems: {},
			msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages: {},
			msdyn_agreementbookingservicetask_msdyn_ocsessions: {},
			msdyn_agreementbookingservicetask_msdyn_ocvoicemails: {},
			msdyn_agreementbookingservicetask_msfp_alerts: {},
			msdyn_agreementbookingservicetask_msfp_surveyinvites: {},
			msdyn_agreementbookingservicetask_msfp_surveyresponses: {},
			msdyn_agreementbookingservicetask_PhoneCalls: {},
			msdyn_agreementbookingservicetask_ServiceAppointments: {},
			msdyn_agreementbookingservicetask_Tasks: {},
			msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask: {}
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
	OptionSet.msdyn_agreementbookingservicetask = {
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