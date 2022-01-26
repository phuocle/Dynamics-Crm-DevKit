'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_workorderservice_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AgreementBookingService: {},
			msdyn_Booking: {},
			msdyn_CommissionCosts: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_DisableEntitlement: {},
			msdyn_DiscountAmount: {},
			msdyn_DiscountPercent: {},
			msdyn_Duration: {},
			msdyn_DurationToBill: {},
			msdyn_Entitlement: {},
			msdyn_EstimateDiscountAmount: {},
			msdyn_EstimateDiscountPercent: {},
			msdyn_EstimateDuration: {},
			msdyn_EstimateSubtotal: {},
			msdyn_EstimateTotalAmount: {},
			msdyn_EstimateTotalCost: {},
			msdyn_EstimateUnitAmount: {},
			msdyn_EstimateUnitCost: {},
			msdyn_InternalDescription: {},
			msdyn_LineOrder: {},
			msdyn_LineStatus: {},
			msdyn_MinimumChargeAmount: {},
			msdyn_MinimumChargeDuration: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_Service: {},
			msdyn_Subtotal: {},
			msdyn_Taxable: {},
			msdyn_TotalAmount: {},
			msdyn_TotalCost: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			msdyn_UnitCost: {},
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
					tab_6_section_1: {}
				}
			},
			f1tab_durationsaleamt: {
				Section: {
					f1tab_durationsaleamt_section_2: {},
					tab_4_section_1: {}
				}
			},
			f1tab_estimateinfo: {
				Section: {
					f1tab_3_section_estimatesaleamt: {},
					f1tab_estimateinfo_section_cost: {}
				}
			},
			f1tab_other: {
				Section: {
					tab_7_section_1: {}
				}
			},
			f1tab_relatesto: {
				Section: {
					tab_5_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var navigation = {
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Service_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_Booking: {},
			msdyn_CommissionCosts: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_DisableEntitlement: {},
			msdyn_DiscountAmount: {},
			msdyn_DiscountPercent: {},
			msdyn_Duration: {},
			msdyn_DurationToBill: {},
			msdyn_Entitlement: {},
			msdyn_EstimateDiscountAmount: {},
			msdyn_EstimateDiscountPercent: {},
			msdyn_EstimateDuration: {},
			msdyn_EstimateSubtotal: {},
			msdyn_EstimateTotalAmount: {},
			msdyn_EstimateTotalCost: {},
			msdyn_EstimateUnitAmount: {},
			msdyn_EstimateUnitCost: {},
			msdyn_InternalDescription: {},
			msdyn_LineOrder: {},
			msdyn_LineStatus: {},
			msdyn_MinimumChargeAmount: {},
			msdyn_MinimumChargeDuration: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_Service: {},
			msdyn_Subtotal: {},
			msdyn_Taxable: {},
			msdyn_TotalAmount: {},
			msdyn_TotalCost: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			msdyn_UnitCost: {},
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
					fstab_estimate_section_cost: {},
					fstab_estimate_section_sale: {}
				}
			},
			fstab_general: {
				Section: {
					fstab_general_section_5: {},
					fstab_general_section_description: {},
					fstab_general_section_general: {},
					fstab_general_section_misc: {},
					fstab_sub_grids_section: {}
				}
			},
			fstab_pricing: {
				Section: {
					fstab_pricing_section_cost: {},
					fstab_pricing_section_minimum_charge: {},
					fstab_pricing_section_sale: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var navigation = {
			nav_msdyn_msdyn_workorderservice_invoicedetail: {},
			navAsyncOperations: {},
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
	OptionSet.msdyn_workorderservice = {
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