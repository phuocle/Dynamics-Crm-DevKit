﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_workorderservicetask_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_ActualDuration: {},
			msdyn_AgreementBookingServiceTask: {},
			msdyn_AgreementBookingServiceTask1: {},
			msdyn_Booking: {},
			msdyn_Booking1: {},
			msdyn_CustomerAsset: {},
			msdyn_CustomerAsset1: {},
			msdyn_Description: {},
			msdyn_Description1: {},
			msdyn_EstimatedDuration: {},
			msdyn_Inspection: {},
			msdyn_inspectiondefinitionid: {},
			msdyn_InspectionEnabled: {},
			msdyn_inspectiontaskresult: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_PercentComplete: {},
			msdyn_surveyboundedoutput: {},
			msdyn_TaskType: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrderIncident: {},
			msdyn_WorkOrderIncident1: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_6: {
				Section: {
					tab_6_section_1: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_workorderservicetask_adx_inviteredemptions: {},
			msdyn_workorderservicetask_adx_portalcomments: {},
			msdyn_workorderservicetask_Appointments: {},
			msdyn_workorderservicetask_Emails: {},
			msdyn_workorderservicetask_msdyn_bookingalerts: {},
			msdyn_workorderservicetask_msdyn_copilottranscripts: {},
			msdyn_workorderservicetask_msdyn_ocliveworkitems: {},
			msdyn_workorderservicetask_msdyn_ocoutboundmessages: {},
			msdyn_workorderservicetask_msdyn_ocsessions: {},
			msdyn_workorderservicetask_msdyn_ocvoicemails: {},
			msdyn_workorderservicetask_msfp_alerts: {},
			msdyn_workorderservicetask_msfp_surveyinvites: {},
			msdyn_workorderservicetask_msfp_surveyresponses: {},
			msdyn_workorderservicetask_PhoneCalls: {},
			msdyn_workorderservicetask_QueueItems: {},
			msdyn_workorderservicetask_ServiceAppointments: {},
			msdyn_workorderservicetask_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Service_Task_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_ActualDuration: {},
			msdyn_Booking: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_Inspection: {},
			msdyn_inspectiondefinitionid: {},
			msdyn_InspectionEnabled: {},
			msdyn_inspectiontaskresult: {},
			msdyn_name: {},
			msdyn_PercentComplete: {},
			msdyn_surveyboundedoutput: {},
			msdyn_TaskType: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrderIncident: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_1932B377_2E7E_4880_9B0E_477CC529B5FE: {
				Section: {
					_1932B377_2E7E_4880_9B0E_477CC529B5FE_SECTION_2: {},
					_594A0AD8_A9A3_4509_9E40_52F6789D7512: {},
					fstab_general_section_duration: {},
					fstab_sub_grids_section: {},
					InspectionFormSection_Mobile: {},
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_workorderservicetask_adx_inviteredemptions: {},
			msdyn_workorderservicetask_adx_portalcomments: {},
			msdyn_workorderservicetask_Appointments: {},
			msdyn_workorderservicetask_Emails: {},
			msdyn_workorderservicetask_msdyn_bookingalerts: {},
			msdyn_workorderservicetask_msdyn_copilottranscripts: {},
			msdyn_workorderservicetask_msdyn_ocliveworkitems: {},
			msdyn_workorderservicetask_msdyn_ocoutboundmessages: {},
			msdyn_workorderservicetask_msdyn_ocsessions: {},
			msdyn_workorderservicetask_msdyn_ocvoicemails: {},
			msdyn_workorderservicetask_msfp_alerts: {},
			msdyn_workorderservicetask_msfp_surveyinvites: {},
			msdyn_workorderservicetask_msfp_surveyresponses: {},
			msdyn_workorderservicetask_PhoneCalls: {},
			msdyn_workorderservicetask_QueueItems: {},
			msdyn_workorderservicetask_ServiceAppointments: {},
			msdyn_workorderservicetask_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAdd_Task_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_EstimatedDuration: {},
			msdyn_TaskType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {},
					taskSection: {}
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
	OptionSet.msdyn_workorderservicetask = {
		msdyn_InspectionResult : {
			Fail: 100000001,
			Invalid: 100000002,
			Pass: 100000000
		},
		msdyn_inspectiontaskresult : {
			Fail: 192350001,
			NA: 192350003,
			Partial_Success: 192350002,
			Pass: 192350000
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