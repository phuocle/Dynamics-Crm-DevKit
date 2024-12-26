'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_workordercharacteristic_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Characteristic: {},
			msdyn_name: {},
			msdyn_RatingValue: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrderIncident: {},
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
			msdyn_workordercharacteristic_adx_inviteredemptions: {},
			msdyn_workordercharacteristic_adx_portalcomments: {},
			msdyn_workordercharacteristic_Appointments: {},
			msdyn_workordercharacteristic_Emails: {},
			msdyn_workordercharacteristic_msdyn_bookingalerts: {},
			msdyn_workordercharacteristic_msdyn_copilottranscripts: {},
			msdyn_workordercharacteristic_msdyn_ocliveworkitems: {},
			msdyn_workordercharacteristic_msdyn_ocoutboundmessages: {},
			msdyn_workordercharacteristic_msdyn_ocsessions: {},
			msdyn_workordercharacteristic_msdyn_ocvoicemails: {},
			msdyn_workordercharacteristic_msfp_alerts: {},
			msdyn_workordercharacteristic_msfp_surveyinvites: {},
			msdyn_workordercharacteristic_msfp_surveyresponses: {},
			msdyn_workordercharacteristic_PhoneCalls: {},
			msdyn_workordercharacteristic_ServiceAppointments: {},
			msdyn_workordercharacteristic_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Characteristic_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_Characteristic: {},
			msdyn_name: {},
			msdyn_RatingValue: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrderIncident: {},
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
			msdyn_workordercharacteristic_adx_inviteredemptions: {},
			msdyn_workordercharacteristic_adx_portalcomments: {},
			msdyn_workordercharacteristic_Appointments: {},
			msdyn_workordercharacteristic_Emails: {},
			msdyn_workordercharacteristic_msdyn_bookingalerts: {},
			msdyn_workordercharacteristic_msdyn_copilottranscripts: {},
			msdyn_workordercharacteristic_msdyn_ocliveworkitems: {},
			msdyn_workordercharacteristic_msdyn_ocoutboundmessages: {},
			msdyn_workordercharacteristic_msdyn_ocsessions: {},
			msdyn_workordercharacteristic_msdyn_ocvoicemails: {},
			msdyn_workordercharacteristic_msfp_alerts: {},
			msdyn_workordercharacteristic_msfp_surveyinvites: {},
			msdyn_workordercharacteristic_msfp_surveyresponses: {},
			msdyn_workordercharacteristic_PhoneCalls: {},
			msdyn_workordercharacteristic_ServiceAppointments: {},
			msdyn_workordercharacteristic_Tasks: {}
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
	OptionSet.msdyn_workordercharacteristic = {
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