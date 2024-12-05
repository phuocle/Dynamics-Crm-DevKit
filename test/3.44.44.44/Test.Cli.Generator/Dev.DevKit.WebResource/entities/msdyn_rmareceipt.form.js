﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRMA_Receipt = function(executionContext, defaultWebResourceName) {
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
			msdyn_DateReceived: {},
			msdyn_name: {},
			msdyn_RMA: {},
			msdyn_ShipVia: {},
			notescontrol: {},
			OwnerId: {},
			productgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA: {
				Section: {
					_07D47361_9E6E_4D81_87EA_CFC744F763D1: {},
					_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_SECTION_2: {},
					_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_SECTION_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			productgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_rmareceipt_msdyn_rmareceiptproduct_RMAReceipt: {},
			msdyn_rmareceipt_adx_inviteredemptions: {},
			msdyn_rmareceipt_adx_portalcomments: {},
			msdyn_rmareceipt_Appointments: {},
			msdyn_rmareceipt_Emails: {},
			msdyn_rmareceipt_msdyn_bookingalerts: {},
			msdyn_rmareceipt_msdyn_copilottranscripts: {},
			msdyn_rmareceipt_msdyn_ocliveworkitems: {},
			msdyn_rmareceipt_msdyn_ocoutboundmessages: {},
			msdyn_rmareceipt_msdyn_ocsessions: {},
			msdyn_rmareceipt_msdyn_ocvoicemails: {},
			msdyn_rmareceipt_msfp_alerts: {},
			msdyn_rmareceipt_msfp_surveyinvites: {},
			msdyn_rmareceipt_msfp_surveyresponses: {},
			msdyn_rmareceipt_PhoneCalls: {},
			msdyn_rmareceipt_ServiceAppointments: {},
			msdyn_rmareceipt_Tasks: {}
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
	OptionSet.msdyn_rmareceipt = {
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