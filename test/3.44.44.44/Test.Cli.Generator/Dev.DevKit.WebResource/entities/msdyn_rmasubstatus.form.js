'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_rmasubstatus_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_DefaultSubStatus: {},
			msdyn_name: {},
			msdyn_SystemStatus: {},
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
			msdyn_msdyn_rmasubstatus_msdyn_rma_SubStatus: {},
			msdyn_rmasubstatus_adx_inviteredemptions: {},
			msdyn_rmasubstatus_adx_portalcomments: {},
			msdyn_rmasubstatus_Appointments: {},
			msdyn_rmasubstatus_Emails: {},
			msdyn_rmasubstatus_msdyn_bookingalerts: {},
			msdyn_rmasubstatus_msdyn_copilottranscripts: {},
			msdyn_rmasubstatus_msdyn_ocliveworkitems: {},
			msdyn_rmasubstatus_msdyn_ocoutboundmessages: {},
			msdyn_rmasubstatus_msdyn_ocsessions: {},
			msdyn_rmasubstatus_msdyn_ocvoicemails: {},
			msdyn_rmasubstatus_msfp_alerts: {},
			msdyn_rmasubstatus_msfp_surveyinvites: {},
			msdyn_rmasubstatus_msfp_surveyresponses: {},
			msdyn_rmasubstatus_PhoneCalls: {},
			msdyn_rmasubstatus_ServiceAppointments: {},
			msdyn_rmasubstatus_Tasks: {}
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
	OptionSet.msdyn_rmasubstatus = {
		msdyn_SystemStatus : {
			Canceled: 690970001,
			Pending: 690970000,
			Products_Received: 690970002
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