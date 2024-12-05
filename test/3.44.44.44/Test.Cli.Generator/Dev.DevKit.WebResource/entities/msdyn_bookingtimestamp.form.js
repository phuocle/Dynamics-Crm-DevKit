'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBooking_Timestamp_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_Booking: {},
			msdyn_name: {},
			msdyn_SystemStatus: {},
			msdyn_TimestampTime: {},
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
			msdyn_bookingtimestamp_adx_inviteredemptions: {},
			msdyn_bookingtimestamp_adx_portalcomments: {},
			msdyn_bookingtimestamp_Appointments: {},
			msdyn_bookingtimestamp_Emails: {},
			msdyn_bookingtimestamp_msdyn_bookingalerts: {},
			msdyn_bookingtimestamp_msdyn_copilottranscripts: {},
			msdyn_bookingtimestamp_msdyn_ocliveworkitems: {},
			msdyn_bookingtimestamp_msdyn_ocoutboundmessages: {},
			msdyn_bookingtimestamp_msdyn_ocsessions: {},
			msdyn_bookingtimestamp_msdyn_ocvoicemails: {},
			msdyn_bookingtimestamp_msfp_alerts: {},
			msdyn_bookingtimestamp_msfp_surveyinvites: {},
			msdyn_bookingtimestamp_msfp_surveyresponses: {},
			msdyn_bookingtimestamp_PhoneCalls: {},
			msdyn_bookingtimestamp_ServiceAppointments: {},
			msdyn_bookingtimestamp_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_bookingtimestamp_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Booking: {},
			msdyn_BookingStatus: {},
			msdyn_name: {},
			msdyn_SystemStatus: {},
			msdyn_TimestampTime: {},
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
			msdyn_bookingtimestamp_adx_inviteredemptions: {},
			msdyn_bookingtimestamp_adx_portalcomments: {},
			msdyn_bookingtimestamp_Appointments: {},
			msdyn_bookingtimestamp_Emails: {},
			msdyn_bookingtimestamp_msdyn_bookingalerts: {},
			msdyn_bookingtimestamp_msdyn_copilottranscripts: {},
			msdyn_bookingtimestamp_msdyn_ocliveworkitems: {},
			msdyn_bookingtimestamp_msdyn_ocoutboundmessages: {},
			msdyn_bookingtimestamp_msdyn_ocsessions: {},
			msdyn_bookingtimestamp_msdyn_ocvoicemails: {},
			msdyn_bookingtimestamp_msfp_alerts: {},
			msdyn_bookingtimestamp_msfp_surveyinvites: {},
			msdyn_bookingtimestamp_msfp_surveyresponses: {},
			msdyn_bookingtimestamp_PhoneCalls: {},
			msdyn_bookingtimestamp_ServiceAppointments: {},
			msdyn_bookingtimestamp_Tasks: {}
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
	OptionSet.msdyn_bookingtimestamp = {
		msdyn_SystemStatus : {
			Canceled: 690970005,
			Completed: 690970004,
			In_Progress: 690970003,
			On_Break: 690970002,
			Scheduled: 690970000,
			Traveling: 690970001
		},
		msdyn_TimestampSource : {
			Desktop: 690970000,
			Mobile: 690970001
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