'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_rtvsubstatus_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_msdyn_rtvsubstatus_msdyn_rtv_SubStatus: {},
			msdyn_rtvsubstatus_adx_inviteredemptions: {},
			msdyn_rtvsubstatus_adx_portalcomments: {},
			msdyn_rtvsubstatus_Appointments: {},
			msdyn_rtvsubstatus_Emails: {},
			msdyn_rtvsubstatus_msdyn_bookingalerts: {},
			msdyn_rtvsubstatus_msdyn_copilottranscripts: {},
			msdyn_rtvsubstatus_msdyn_ocliveworkitems: {},
			msdyn_rtvsubstatus_msdyn_ocoutboundmessages: {},
			msdyn_rtvsubstatus_msdyn_ocsessions: {},
			msdyn_rtvsubstatus_msdyn_ocvoicemails: {},
			msdyn_rtvsubstatus_msfp_alerts: {},
			msdyn_rtvsubstatus_msfp_surveyinvites: {},
			msdyn_rtvsubstatus_msfp_surveyresponses: {},
			msdyn_rtvsubstatus_PhoneCalls: {},
			msdyn_rtvsubstatus_ServiceAppointments: {},
			msdyn_rtvsubstatus_Tasks: {}
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
	OptionSet.msdyn_rtvsubstatus = {
		msdyn_SystemStatus : {
			Approved: 690970001,
			Canceled: 690970004,
			Draft: 690970000,
			Received: 690970003,
			Shipped: 690970002
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