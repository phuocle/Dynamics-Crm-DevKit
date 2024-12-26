'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_inventoryjournal_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AllocatedToWorkOrder: {},
			msdyn_InventoryAdjustmentProduct: {},
			msdyn_JournalType: {},
			msdyn_name: {},
			msdyn_OriginatingJournal: {},
			msdyn_Product: {},
			msdyn_PurchaseOrderProduct: {},
			msdyn_PurchaseOrderReceiptProduct: {},
			msdyn_Quantity: {},
			msdyn_Reversal: {},
			msdyn_RMAReceiptProduct: {},
			msdyn_TransactionType: {},
			msdyn_Unit: {},
			msdyn_Warehouse: {},
			msdyn_WorkOrderProduct: {},
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
			msdyn_inventoryjournal_adx_inviteredemptions: {},
			msdyn_inventoryjournal_adx_portalcomments: {},
			msdyn_inventoryjournal_Appointments: {},
			msdyn_inventoryjournal_Emails: {},
			msdyn_inventoryjournal_msdyn_bookingalerts: {},
			msdyn_inventoryjournal_msdyn_copilottranscripts: {},
			msdyn_inventoryjournal_msdyn_ocliveworkitems: {},
			msdyn_inventoryjournal_msdyn_ocoutboundmessages: {},
			msdyn_inventoryjournal_msdyn_ocsessions: {},
			msdyn_inventoryjournal_msdyn_ocvoicemails: {},
			msdyn_inventoryjournal_msfp_alerts: {},
			msdyn_inventoryjournal_msfp_surveyinvites: {},
			msdyn_inventoryjournal_msfp_surveyresponses: {},
			msdyn_inventoryjournal_PhoneCalls: {},
			msdyn_inventoryjournal_ServiceAppointments: {},
			msdyn_inventoryjournal_Tasks: {},
			msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal: {}
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
	OptionSet.msdyn_inventoryjournal = {
		msdyn_JournalType : {
			Allocated: 690970002,
			On_Hand: 690970000,
			On_Order: 690970001
		},
		msdyn_TransactionType : {
			Inventory_Adjustment: 690970003,
			Inventory_Transfer: 690970004,
			Manual: 690970006,
			Purchase_Order_Product: 690970000,
			Purchase_Order_Receipt: 690970001,
			RMA_Product: 690970005,
			WO_Product: 690970002
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