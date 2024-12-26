'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPurchase_Order_Receipt = function(executionContext, defaultWebResourceName) {
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
			msdyn_Note: {},
			msdyn_PurchaseOrder: {},
			msdyn_ReceivedBy: {},
			msdyn_ShipVia: {},
			notescontrol: {},
			OwnerId: {},
			RECEIPT_PRODUCTS: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_receipt_products: {
				Section: {
					fstab_products_section_related: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Purchase_Order_Business_Process = {
			msdyn_DateReceived: {},
			msdyn_ReceivedBy: {},
			msdyn_ShipVia: {}
		}
		devKit.LoadFields(formContext, _Purchase_Order_Business_Process, "header_process_");
		process.Purchase_Order_Business_Process = _Purchase_Order_Business_Process;
		form.Process = process;
		var grid = {
			RECEIPT_PRODUCTS: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: {},
			msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: {},
			msdyn_purchaseorderreceipt_adx_inviteredemptions: {},
			msdyn_purchaseorderreceipt_adx_portalcomments: {},
			msdyn_purchaseorderreceipt_Appointments: {},
			msdyn_purchaseorderreceipt_Emails: {},
			msdyn_purchaseorderreceipt_msdyn_bookingalerts: {},
			msdyn_purchaseorderreceipt_msdyn_copilottranscripts: {},
			msdyn_purchaseorderreceipt_msdyn_ocliveworkitems: {},
			msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages: {},
			msdyn_purchaseorderreceipt_msdyn_ocsessions: {},
			msdyn_purchaseorderreceipt_msdyn_ocvoicemails: {},
			msdyn_purchaseorderreceipt_msfp_alerts: {},
			msdyn_purchaseorderreceipt_msfp_surveyinvites: {},
			msdyn_purchaseorderreceipt_msfp_surveyresponses: {},
			msdyn_purchaseorderreceipt_PhoneCalls: {},
			msdyn_purchaseorderreceipt_ServiceAppointments: {},
			msdyn_purchaseorderreceipt_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPurchase_Order_Receipt_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_Note: {},
			msdyn_PurchaseOrder: {},
			msdyn_ReceivedBy: {},
			msdyn_ShipVia: {},
			notescontrol: {},
			OwnerId: {},
			RECEIPT_PRODUCTS: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
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
		var process = devKit.LoadProcess(formContext);
		var _Purchase_Order_Business_Process = {
			msdyn_DateReceived: {},
			msdyn_ReceivedBy: {},
			msdyn_ShipVia: {}
		}
		devKit.LoadFields(formContext, _Purchase_Order_Business_Process, "header_process_");
		process.Purchase_Order_Business_Process = _Purchase_Order_Business_Process;
		form.Process = process;
		var grid = {
			RECEIPT_PRODUCTS: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: {},
			msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: {},
			msdyn_purchaseorderreceipt_adx_inviteredemptions: {},
			msdyn_purchaseorderreceipt_adx_portalcomments: {},
			msdyn_purchaseorderreceipt_Appointments: {},
			msdyn_purchaseorderreceipt_Emails: {},
			msdyn_purchaseorderreceipt_msdyn_bookingalerts: {},
			msdyn_purchaseorderreceipt_msdyn_copilottranscripts: {},
			msdyn_purchaseorderreceipt_msdyn_ocliveworkitems: {},
			msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages: {},
			msdyn_purchaseorderreceipt_msdyn_ocsessions: {},
			msdyn_purchaseorderreceipt_msdyn_ocvoicemails: {},
			msdyn_purchaseorderreceipt_msfp_alerts: {},
			msdyn_purchaseorderreceipt_msfp_surveyinvites: {},
			msdyn_purchaseorderreceipt_msfp_surveyresponses: {},
			msdyn_purchaseorderreceipt_PhoneCalls: {},
			msdyn_purchaseorderreceipt_ServiceAppointments: {},
			msdyn_purchaseorderreceipt_Tasks: {}
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
	OptionSet.msdyn_purchaseorderreceipt = {
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