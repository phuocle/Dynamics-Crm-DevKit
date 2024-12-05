'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_inventoryadjustment_Information = function(executionContext, defaultWebResourceName) {
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
			inventoryadjustmentproductssubgrid: {},
			msdyn_AdjustedByResource: {},
			msdyn_AdjustmentTime: {},
			msdyn_Description: {},
			msdyn_name: {},
			msdyn_RequestedByResource: {},
			msdyn_Warehouse: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			inventoryadjustmentproductssubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_inventoryadjustment_adx_inviteredemptions: {},
			msdyn_inventoryadjustment_adx_portalcomments: {},
			msdyn_inventoryadjustment_Appointments: {},
			msdyn_inventoryadjustment_Emails: {},
			msdyn_inventoryadjustment_msdyn_bookingalerts: {},
			msdyn_inventoryadjustment_msdyn_copilottranscripts: {},
			msdyn_inventoryadjustment_msdyn_ocliveworkitems: {},
			msdyn_inventoryadjustment_msdyn_ocoutboundmessages: {},
			msdyn_inventoryadjustment_msdyn_ocsessions: {},
			msdyn_inventoryadjustment_msdyn_ocvoicemails: {},
			msdyn_inventoryadjustment_msfp_alerts: {},
			msdyn_inventoryadjustment_msfp_surveyinvites: {},
			msdyn_inventoryadjustment_msfp_surveyresponses: {},
			msdyn_inventoryadjustment_PhoneCalls: {},
			msdyn_inventoryadjustment_QueueItems: {},
			msdyn_inventoryadjustment_ServiceAppointments: {},
			msdyn_inventoryadjustment_Tasks: {},
			msdyn_msdyn_inventoryadjustment_msdyn_inventoryadjustmentproduct_InventoryAdjustment: {}
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
	OptionSet.msdyn_inventoryadjustment = {
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