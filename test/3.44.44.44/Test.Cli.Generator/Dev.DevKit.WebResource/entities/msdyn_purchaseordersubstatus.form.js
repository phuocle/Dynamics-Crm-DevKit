﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_purchaseordersubstatus_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_msdyn_purchaseordersubstatus_msdyn_purchaseorder_SubStatus: {},
			msdyn_purchaseordersubstatus_adx_inviteredemptions: {},
			msdyn_purchaseordersubstatus_adx_portalcomments: {},
			msdyn_purchaseordersubstatus_Appointments: {},
			msdyn_purchaseordersubstatus_Emails: {},
			msdyn_purchaseordersubstatus_msdyn_bookingalerts: {},
			msdyn_purchaseordersubstatus_msdyn_copilottranscripts: {},
			msdyn_purchaseordersubstatus_msdyn_ocliveworkitems: {},
			msdyn_purchaseordersubstatus_msdyn_ocoutboundmessages: {},
			msdyn_purchaseordersubstatus_msdyn_ocsessions: {},
			msdyn_purchaseordersubstatus_msdyn_ocvoicemails: {},
			msdyn_purchaseordersubstatus_msfp_alerts: {},
			msdyn_purchaseordersubstatus_msfp_surveyinvites: {},
			msdyn_purchaseordersubstatus_msfp_surveyresponses: {},
			msdyn_purchaseordersubstatus_PhoneCalls: {},
			msdyn_purchaseordersubstatus_ServiceAppointments: {},
			msdyn_purchaseordersubstatus_Tasks: {}
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
	OptionSet.msdyn_purchaseordersubstatus = {
		msdyn_SystemStatus : {
			Billed: 690970004,
			Canceled: 690970002,
			Draft: 690970000,
			Products_Received: 690970003,
			Submitted: 690970001
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