'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_bookingalertstatus_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_BookingAlert: {},
			msdyn_name: {},
			msdyn_NextTimeToShow: {},
			msdyn_Status: {},
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
			msdyn_bookingalertstatus_adx_inviteredemptions: {},
			msdyn_bookingalertstatus_adx_portalcomments: {},
			msdyn_bookingalertstatus_Appointments: {},
			msdyn_bookingalertstatus_Emails: {},
			msdyn_bookingalertstatus_msdyn_bookingalerts: {},
			msdyn_bookingalertstatus_msdyn_copilottranscripts: {},
			msdyn_bookingalertstatus_msdyn_ocliveworkitems: {},
			msdyn_bookingalertstatus_msdyn_ocoutboundmessages: {},
			msdyn_bookingalertstatus_msdyn_ocsessions: {},
			msdyn_bookingalertstatus_msdyn_ocvoicemails: {},
			msdyn_bookingalertstatus_msfp_alerts: {},
			msdyn_bookingalertstatus_msfp_surveyinvites: {},
			msdyn_bookingalertstatus_msfp_surveyresponses: {},
			msdyn_bookingalertstatus_PhoneCalls: {},
			msdyn_bookingalertstatus_ServiceAppointments: {},
			msdyn_bookingalertstatus_Tasks: {}
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
	OptionSet.msdyn_bookingalertstatus = {
		msdyn_Status : {
			Normal: 690970001,
			Snoozed: 690970000
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