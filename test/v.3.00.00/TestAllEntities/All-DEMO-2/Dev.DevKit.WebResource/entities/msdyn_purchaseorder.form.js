'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPurchase_Order = function(executionContext, defaultWebResourceName) {
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
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_AddressName: {},
			msdyn_AmountBilled: {},
			msdyn_ApprovalStatus: {},
			msdyn_ApprovedRejectedBy: {},
			msdyn_Booking: {},
			msdyn_City: {},
			msdyn_Country: {},
			msdyn_DateExpected: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_name: {},
			msdyn_OrderedBy: {},
			msdyn_PaymentTerm: {},
			msdyn_PostalCode: {},
			msdyn_PODate: {},
			msdyn_ReceivetoWarehouse: {},
			msdyn_RequestedByResource: {},
			msdyn_ShipTo: {},
			msdyn_ShipVia: {},
			msdyn_StateOrProvince: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_TotalAmount: {},
			msdyn_Vendor: {},
			msdyn_VendorNote: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {},
			PurchaseOrderProductsGrid: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_0898DBC4_7C5F_4D66_963F_628E881B178B: {
				Section: {
					_0898DBC4_7C5F_4D66_963F_628E881B178B_SECTION_2: {},
					_58B0EA4F_855F_4143_8703_D34B3849F302: {},
					tab_5_section_1: {}
				}
			},
			Address: {
				Section: {
					tab_3_section_1: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_3: {},
					tab_4_section_4: {},
					tab_6_section_1: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Purchase_Order_Business_Process = {
			msdyn_ApprovalStatus: {},
			msdyn_ApprovedRejectedBy: {},
			msdyn_PODate: {},
			msdyn_ReceivetoWarehouse: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_Vendor: {},
			msdyn_WorkOrder: {}
		}
		devKit.LoadFields(formContext, _Purchase_Order_Business_Process, "header_process_");
		process.Purchase_Order_Business_Process = _Purchase_Order_Business_Process;
		form.Process = process;
		var grid = {
			PurchaseOrderProductsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPurchase_Order_Mobile = function(executionContext, defaultWebResourceName) {
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
			BILLS: {},
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_AmountBilled: {},
			msdyn_ApprovalStatus: {},
			msdyn_ApprovedRejectedBy: {},
			msdyn_Booking: {},
			msdyn_City: {},
			msdyn_Country: {},
			msdyn_DateExpected: {},
			msdyn_name: {},
			msdyn_OrderedBy: {},
			msdyn_PaymentTerm: {},
			msdyn_PostalCode: {},
			msdyn_PODate: {},
			msdyn_ReceivetoWarehouse: {},
			msdyn_RequestedByResource: {},
			msdyn_ShipTo: {},
			msdyn_ShipVia: {},
			msdyn_StateOrProvince: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_TotalAmount: {},
			msdyn_Vendor: {},
			msdyn_VendorNote: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {},
			PurchaseOrderProductsGrid: {},
			RECEIPT_PRODUCTS: {},
			RECEIPTS: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Address: {
				Section: {
					fstab_address_section_address: {}
				}
			},
			fstab_details: {
				Section: {
					fstab_details_column_5_section_1: {},
					fstab_details_column_6_section_1: {},
					fstab_details_section_amount: {},
					fstab_details_section_general: {},
					fstab_details_section_user_information: {},
					fstab_details_section_work_order: {}
				}
			},
			fstab_general: {
				Section: {
					fstab_general_column_2_section_1: {},
					fstab_general_section_3: {},
					fstab_general_section_summary: {},
					fstab_general_section_vendor: {}
				}
			},
			fstab_other: {
				Section: {
					tab_5_section_2: {},
					tab_5_section_3: {},
					tab_5_section_4: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section_2: {},
					fstab_sub_grids_section_3: {},
					tab_7_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Purchase_Order_Business_Process = {
			msdyn_ApprovalStatus: {},
			msdyn_ApprovedRejectedBy: {},
			msdyn_PODate: {},
			msdyn_ReceivetoWarehouse: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_Vendor: {},
			msdyn_WorkOrder: {}
		}
		devKit.LoadFields(formContext, _Purchase_Order_Business_Process, "header_process_");
		process.Purchase_Order_Business_Process = _Purchase_Order_Business_Process;
		form.Process = process;
		var grid = {
			BILLS: {},
			PurchaseOrderProductsGrid: {},
			RECEIPT_PRODUCTS: {},
			RECEIPTS: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder: {},
			nav_msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO: {},
			navProcessSessions: {}
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
	OptionSet.msdyn_purchaseorder = {
		msdyn_ApprovalStatus : {
			Approved: 690970000,
			Rejected: 690970001
		},
		msdyn_ShipTo : {
			Business_Unit: 690970001,
			Other: 690970003,
			Service_Account: 690970002,
			Site: 690970000
		},
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