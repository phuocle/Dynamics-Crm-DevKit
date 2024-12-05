'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_inventoryadjustmentproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_InventoryAdjustment: {},
			msdyn_InventoryTransfer: {},
			msdyn_name: {},
			msdyn_Product: {},
			msdyn_Quantity: {},
			msdyn_Unit: {},
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
			msdyn_inventoryadjustmentproduct_adx_inviteredemptions: {},
			msdyn_inventoryadjustmentproduct_adx_portalcomments: {},
			msdyn_inventoryadjustmentproduct_Appointments: {},
			msdyn_inventoryadjustmentproduct_Emails: {},
			msdyn_inventoryadjustmentproduct_msdyn_bookingalerts: {},
			msdyn_inventoryadjustmentproduct_msdyn_copilottranscripts: {},
			msdyn_inventoryadjustmentproduct_msdyn_ocliveworkitems: {},
			msdyn_inventoryadjustmentproduct_msdyn_ocoutboundmessages: {},
			msdyn_inventoryadjustmentproduct_msdyn_ocsessions: {},
			msdyn_inventoryadjustmentproduct_msdyn_ocvoicemails: {},
			msdyn_inventoryadjustmentproduct_msfp_alerts: {},
			msdyn_inventoryadjustmentproduct_msfp_surveyinvites: {},
			msdyn_inventoryadjustmentproduct_msfp_surveyresponses: {},
			msdyn_inventoryadjustmentproduct_PhoneCalls: {},
			msdyn_inventoryadjustmentproduct_ServiceAppointments: {},
			msdyn_inventoryadjustmentproduct_Tasks: {},
			msdyn_msdyn_inventoryadjustmentproduct_msdyn_inventoryjournal_InventoryAdjstProduct: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQuick_Create_Inventory_Adjustment_Product = function(executionContext, defaultWebResourceName) {
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
			msdyn_InventoryAdjustment: {},
			msdyn_InventoryTransfer: {},
			msdyn_Product: {},
			msdyn_Quantity: {},
			msdyn_Unit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
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
	OptionSet.msdyn_inventoryadjustmentproduct = {
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