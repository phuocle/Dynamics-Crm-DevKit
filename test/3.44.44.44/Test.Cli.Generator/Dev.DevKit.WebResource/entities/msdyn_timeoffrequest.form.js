'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_timeoffrequest_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Approvedby: {},
			msdyn_EndTime: {},
			msdyn_name: {},
			msdyn_Resource: {},
			msdyn_StartTime: {},
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
			msdyn_msdyn_timeoffrequest_msdyn_timeentry: {},
			msdyn_timeoffrequest_adx_inviteredemptions: {},
			msdyn_timeoffrequest_adx_portalcomments: {},
			msdyn_timeoffrequest_Appointments: {},
			msdyn_timeoffrequest_Emails: {},
			msdyn_timeoffrequest_msdyn_bookingalerts: {},
			msdyn_timeoffrequest_msdyn_copilottranscripts: {},
			msdyn_timeoffrequest_msdyn_ocliveworkitems: {},
			msdyn_timeoffrequest_msdyn_ocoutboundmessages: {},
			msdyn_timeoffrequest_msdyn_ocsessions: {},
			msdyn_timeoffrequest_msdyn_ocvoicemails: {},
			msdyn_timeoffrequest_msfp_alerts: {},
			msdyn_timeoffrequest_msfp_surveyinvites: {},
			msdyn_timeoffrequest_msfp_surveyresponses: {},
			msdyn_timeoffrequest_PhoneCalls: {},
			msdyn_timeoffrequest_ServiceAppointments: {},
			msdyn_timeoffrequest_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTime_Off_Request_Mobile = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			msdyn_Approvedby: {},
			msdyn_EndTime: {},
			msdyn_name: {},
			msdyn_Resource: {},
			msdyn_StartTime: {},
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
			msdyn_msdyn_timeoffrequest_msdyn_timeentry: {},
			msdyn_timeoffrequest_adx_inviteredemptions: {},
			msdyn_timeoffrequest_adx_portalcomments: {},
			msdyn_timeoffrequest_Appointments: {},
			msdyn_timeoffrequest_Emails: {},
			msdyn_timeoffrequest_msdyn_bookingalerts: {},
			msdyn_timeoffrequest_msdyn_copilottranscripts: {},
			msdyn_timeoffrequest_msdyn_ocliveworkitems: {},
			msdyn_timeoffrequest_msdyn_ocoutboundmessages: {},
			msdyn_timeoffrequest_msdyn_ocsessions: {},
			msdyn_timeoffrequest_msdyn_ocvoicemails: {},
			msdyn_timeoffrequest_msfp_alerts: {},
			msdyn_timeoffrequest_msfp_surveyinvites: {},
			msdyn_timeoffrequest_msfp_surveyresponses: {},
			msdyn_timeoffrequest_PhoneCalls: {},
			msdyn_timeoffrequest_ServiceAppointments: {},
			msdyn_timeoffrequest_Tasks: {}
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
	OptionSet.msdyn_timeoffrequest = {
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