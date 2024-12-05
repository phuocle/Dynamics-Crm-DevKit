'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_purchaseorderbill_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_BillDate: {},
			msdyn_name: {},
			msdyn_Note: {},
			msdyn_PaymentTerm: {},
			msdyn_PurchaseOrder: {},
			msdyn_ShippingAmount: {},
			msdyn_Subtotal: {},
			msdyn_TaxAmount: {},
			msdyn_TaxCode: {},
			msdyn_TotalAmount: {},
			msdyn_VendorInvoiceNumber: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Purchase_Order_Business_Process = {
			msdyn_BillDate: {},
			msdyn_VendorInvoiceNumber: {}
		}
		devKit.LoadFields(formContext, _Purchase_Order_Business_Process, "header_process_");
		process.Purchase_Order_Business_Process = _Purchase_Order_Business_Process;
		form.Process = process;
		var navigation = {
			bpf_msdyn_purchaseorderbill_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: {},
			msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: {},
			msdyn_purchaseorderbill_adx_inviteredemptions: {},
			msdyn_purchaseorderbill_adx_portalcomments: {},
			msdyn_purchaseorderbill_Appointments: {},
			msdyn_purchaseorderbill_Emails: {},
			msdyn_purchaseorderbill_msdyn_bookingalerts: {},
			msdyn_purchaseorderbill_msdyn_copilottranscripts: {},
			msdyn_purchaseorderbill_msdyn_ocliveworkitems: {},
			msdyn_purchaseorderbill_msdyn_ocoutboundmessages: {},
			msdyn_purchaseorderbill_msdyn_ocsessions: {},
			msdyn_purchaseorderbill_msdyn_ocvoicemails: {},
			msdyn_purchaseorderbill_msfp_alerts: {},
			msdyn_purchaseorderbill_msfp_surveyinvites: {},
			msdyn_purchaseorderbill_msfp_surveyresponses: {},
			msdyn_purchaseorderbill_PhoneCalls: {},
			msdyn_purchaseorderbill_ServiceAppointments: {},
			msdyn_purchaseorderbill_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPurchase_Order_Bill_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_BillDate: {},
			msdyn_name: {},
			msdyn_Note: {},
			msdyn_PaymentTerm: {},
			msdyn_PurchaseOrder: {},
			msdyn_ShippingAmount: {},
			msdyn_Subtotal: {},
			msdyn_TaxAmount: {},
			msdyn_TaxCode: {},
			msdyn_TotalAmount: {},
			msdyn_VendorInvoiceNumber: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
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
			msdyn_BillDate: {},
			msdyn_VendorInvoiceNumber: {}
		}
		devKit.LoadFields(formContext, _Purchase_Order_Business_Process, "header_process_");
		process.Purchase_Order_Business_Process = _Purchase_Order_Business_Process;
		form.Process = process;
		var navigation = {
			bpf_msdyn_purchaseorderbill_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: {},
			msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: {},
			msdyn_purchaseorderbill_adx_inviteredemptions: {},
			msdyn_purchaseorderbill_adx_portalcomments: {},
			msdyn_purchaseorderbill_Appointments: {},
			msdyn_purchaseorderbill_Emails: {},
			msdyn_purchaseorderbill_msdyn_bookingalerts: {},
			msdyn_purchaseorderbill_msdyn_copilottranscripts: {},
			msdyn_purchaseorderbill_msdyn_ocliveworkitems: {},
			msdyn_purchaseorderbill_msdyn_ocoutboundmessages: {},
			msdyn_purchaseorderbill_msdyn_ocsessions: {},
			msdyn_purchaseorderbill_msdyn_ocvoicemails: {},
			msdyn_purchaseorderbill_msfp_alerts: {},
			msdyn_purchaseorderbill_msfp_surveyinvites: {},
			msdyn_purchaseorderbill_msfp_surveyresponses: {},
			msdyn_purchaseorderbill_PhoneCalls: {},
			msdyn_purchaseorderbill_ServiceAppointments: {},
			msdyn_purchaseorderbill_Tasks: {}
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
	OptionSet.msdyn_purchaseorderbill = {
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