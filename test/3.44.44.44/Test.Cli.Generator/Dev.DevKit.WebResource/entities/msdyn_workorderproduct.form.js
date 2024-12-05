﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_workorderproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AdditionalCost: {},
			msdyn_AgreementBookingProduct: {},
			msdyn_Allocated: {},
			msdyn_Booking: {},
			msdyn_CommissionCosts: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_DisableEntitlement: {},
			msdyn_DiscountAmount: {},
			msdyn_DiscountPercent: {},
			msdyn_Entitlement: {},
			msdyn_EstimateDiscountAmount: {},
			msdyn_EstimateDiscountPercent: {},
			msdyn_EstimateQuantity: {},
			msdyn_EstimateSubtotal: {},
			msdyn_EstimateTotalAmount: {},
			msdyn_EstimateTotalCost: {},
			msdyn_EstimateUnitAmount: {},
			msdyn_EstimateUnitCost: {},
			msdyn_InternalDescription: {},
			msdyn_LineOrder: {},
			msdyn_LineStatus: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_Product: {},
			msdyn_PurchaseOrderReceiptProduct: {},
			msdyn_QtyToBill: {},
			msdyn_Quantity: {},
			msdyn_Subtotal: {},
			msdyn_Taxable: {},
			msdyn_TotalAmount: {},
			msdyn_TotalCost: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			msdyn_UnitCost: {},
			msdyn_Warehouse: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrderIncident: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			f1tab_actualcost: {
				Section: {
					tab_5_section_1: {}
				}
			},
			f1tab_actualqtysaleamt: {
				Section: {
					f1tabgeneral_section_3: {}
				}
			},
			f1tab_estimateinfo: {
				Section: {
					f1tab_estimateinfo_section_cost: {},
					tab_3_section_1: {}
				}
			},
			f1tab_general: {
				Section: {
					_A490AE2A_B9CE_4B27_8103_C8D177EF9C0D: {},
					f1generaltab_section_2: {},
					f1generaltab_section_3: {},
					QuantityInformation: {}
				}
			},
			f1tab_other: {
				Section: {
					tab_7_section_1: {}
				}
			},
			f1tab_relatedinfo: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_workorderproduct_invoicedetail: {},
			msdyn_msdyn_workorderproduct_msdyn_customerasset_WorkOrderProduct: {},
			msdyn_msdyn_workorderproduct_msdyn_inventoryjournal_WorkOrderProduct: {},
			msdyn_msdyn_workorderproduct_msdyn_rmaproduct_WOProduct: {},
			msdyn_msdyn_workorderproduct_msdyn_rtvproduct_WorkOrderProduct: {},
			msdyn_workorderproduct_adx_inviteredemptions: {},
			msdyn_workorderproduct_adx_portalcomments: {},
			msdyn_workorderproduct_Appointments: {},
			msdyn_workorderproduct_Emails: {},
			msdyn_workorderproduct_msdyn_bookingalerts: {},
			msdyn_workorderproduct_msdyn_copilottranscripts: {},
			msdyn_workorderproduct_msdyn_ocliveworkitems: {},
			msdyn_workorderproduct_msdyn_ocoutboundmessages: {},
			msdyn_workorderproduct_msdyn_ocsessions: {},
			msdyn_workorderproduct_msdyn_ocvoicemails: {},
			msdyn_workorderproduct_msfp_alerts: {},
			msdyn_workorderproduct_msfp_surveyinvites: {},
			msdyn_workorderproduct_msfp_surveyresponses: {},
			msdyn_workorderproduct_PhoneCalls: {},
			msdyn_workorderproduct_ServiceAppointments: {},
			msdyn_workorderproduct_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Product_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_AdditionalCost: {},
			msdyn_Allocated: {},
			msdyn_Booking: {},
			msdyn_CommissionCosts: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_DisableEntitlement: {},
			msdyn_DiscountAmount: {},
			msdyn_DiscountPercent: {},
			msdyn_Entitlement: {},
			msdyn_EstimateDiscountAmount: {},
			msdyn_EstimateDiscountPercent: {},
			msdyn_EstimateQuantity: {},
			msdyn_EstimateSubtotal: {},
			msdyn_EstimateTotalAmount: {},
			msdyn_EstimateTotalCost: {},
			msdyn_EstimateUnitAmount: {},
			msdyn_EstimateUnitCost: {},
			msdyn_InternalDescription: {},
			msdyn_LineOrder: {},
			msdyn_LineStatus: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_Product: {},
			msdyn_PurchaseOrderReceiptProduct: {},
			msdyn_QtyToBill: {},
			msdyn_Quantity: {},
			msdyn_Subtotal: {},
			msdyn_Taxable: {},
			msdyn_TotalAmount: {},
			msdyn_TotalCost: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			msdyn_UnitCost: {},
			msdyn_Warehouse: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrderIncident: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_estimate: {
				Section: {
					fstab_estimate_cost_amount: {},
					fstab_estimate_section_sale_amount: {}
				}
			},
			fstab_general: {
				Section: {
					fstab_general_section_6: {},
					fstab_general_section_description: {},
					fstab_general_section_general: {},
					fstab_general_section_INVENTORY: {},
					fstab_general_section_misc: {},
					fstab_sub_grids_section: {}
				}
			},
			fstab_pricing: {
				Section: {
					fstab_pricing_section_cost_amount: {},
					fstab_pricing_section_sale_amount: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_workorderproduct_invoicedetail: {},
			msdyn_msdyn_workorderproduct_msdyn_customerasset_WorkOrderProduct: {},
			msdyn_msdyn_workorderproduct_msdyn_inventoryjournal_WorkOrderProduct: {},
			msdyn_msdyn_workorderproduct_msdyn_rmaproduct_WOProduct: {},
			msdyn_msdyn_workorderproduct_msdyn_rtvproduct_WorkOrderProduct: {},
			msdyn_workorderproduct_adx_inviteredemptions: {},
			msdyn_workorderproduct_adx_portalcomments: {},
			msdyn_workorderproduct_Appointments: {},
			msdyn_workorderproduct_Emails: {},
			msdyn_workorderproduct_msdyn_bookingalerts: {},
			msdyn_workorderproduct_msdyn_copilottranscripts: {},
			msdyn_workorderproduct_msdyn_ocliveworkitems: {},
			msdyn_workorderproduct_msdyn_ocoutboundmessages: {},
			msdyn_workorderproduct_msdyn_ocsessions: {},
			msdyn_workorderproduct_msdyn_ocvoicemails: {},
			msdyn_workorderproduct_msfp_alerts: {},
			msdyn_workorderproduct_msfp_surveyinvites: {},
			msdyn_workorderproduct_msfp_surveyresponses: {},
			msdyn_workorderproduct_PhoneCalls: {},
			msdyn_workorderproduct_ServiceAppointments: {},
			msdyn_workorderproduct_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAdd_Product_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_EstimateQuantity: {},
			msdyn_Product: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					sectionProduct: {},
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
	OptionSet.msdyn_workorderproduct = {
		msdyn_LineStatus : {
			Estimated: 690970000,
			Used: 690970001
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