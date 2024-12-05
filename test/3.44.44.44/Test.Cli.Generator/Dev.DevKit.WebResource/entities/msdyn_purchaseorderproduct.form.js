'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_purchaseorderproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AssociateToBooking: {},
			msdyn_AssociateToWarehouse: {},
			msdyn_AssociateToWorkOrder: {},
			msdyn_DateExpected: {},
			msdyn_Description: {},
			msdyn_ItemStatus: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_Product: {},
			msdyn_PurchaseOrder: {},
			msdyn_QtyBilled: {},
			msdyn_QtyReceived: {},
			msdyn_Quantity: {},
			msdyn_TotalCost: {},
			msdyn_Unit: {},
			msdyn_UnitCost: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct: {},
			msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct: {},
			msdyn_purchaseorderproduct_adx_inviteredemptions: {},
			msdyn_purchaseorderproduct_adx_portalcomments: {},
			msdyn_purchaseorderproduct_Appointments: {},
			msdyn_purchaseorderproduct_Emails: {},
			msdyn_purchaseorderproduct_msdyn_bookingalerts: {},
			msdyn_purchaseorderproduct_msdyn_copilottranscripts: {},
			msdyn_purchaseorderproduct_msdyn_ocliveworkitems: {},
			msdyn_purchaseorderproduct_msdyn_ocoutboundmessages: {},
			msdyn_purchaseorderproduct_msdyn_ocsessions: {},
			msdyn_purchaseorderproduct_msdyn_ocvoicemails: {},
			msdyn_purchaseorderproduct_msfp_alerts: {},
			msdyn_purchaseorderproduct_msfp_surveyinvites: {},
			msdyn_purchaseorderproduct_msfp_surveyresponses: {},
			msdyn_purchaseorderproduct_PhoneCalls: {},
			msdyn_purchaseorderproduct_ServiceAppointments: {},
			msdyn_purchaseorderproduct_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPurchase_Order_Product_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_AssociateToBooking: {},
			msdyn_AssociateToWarehouse: {},
			msdyn_AssociateToWorkOrder: {},
			msdyn_DateExpected: {},
			msdyn_Description: {},
			msdyn_ItemStatus: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_Product: {},
			msdyn_PurchaseOrder: {},
			msdyn_QtyBilled: {},
			msdyn_QtyReceived: {},
			msdyn_Quantity: {},
			msdyn_TotalCost: {},
			msdyn_Unit: {},
			msdyn_UnitCost: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					_5AE19875_5712_4CB9_B3B7_F7583E96AE65_SECTION_3: {},
					fstab_general_section_general: {}
				}
			},
			fstab_other: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {},
					tab_4_section_3: {}
				}
			},
			fstab_product_associates_to: {
				Section: {
					fstab_product_associates_to_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct: {},
			msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct: {},
			msdyn_purchaseorderproduct_adx_inviteredemptions: {},
			msdyn_purchaseorderproduct_adx_portalcomments: {},
			msdyn_purchaseorderproduct_Appointments: {},
			msdyn_purchaseorderproduct_Emails: {},
			msdyn_purchaseorderproduct_msdyn_bookingalerts: {},
			msdyn_purchaseorderproduct_msdyn_copilottranscripts: {},
			msdyn_purchaseorderproduct_msdyn_ocliveworkitems: {},
			msdyn_purchaseorderproduct_msdyn_ocoutboundmessages: {},
			msdyn_purchaseorderproduct_msdyn_ocsessions: {},
			msdyn_purchaseorderproduct_msdyn_ocvoicemails: {},
			msdyn_purchaseorderproduct_msfp_alerts: {},
			msdyn_purchaseorderproduct_msfp_surveyinvites: {},
			msdyn_purchaseorderproduct_msfp_surveyresponses: {},
			msdyn_purchaseorderproduct_PhoneCalls: {},
			msdyn_purchaseorderproduct_ServiceAppointments: {},
			msdyn_purchaseorderproduct_Tasks: {}
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
	OptionSet.msdyn_purchaseorderproduct = {
		msdyn_ItemStatus : {
			Canceled: 690970002,
			Pending: 690970000,
			Received: 690970001
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