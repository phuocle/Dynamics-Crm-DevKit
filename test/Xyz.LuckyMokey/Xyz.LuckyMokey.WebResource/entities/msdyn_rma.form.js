'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormRMA = function(executionContext, defaultWebResourceName) {
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
			msdyn_ApprovedBy: {},
			msdyn_BillingAccount: {},
			msdyn_DateRequested: {},
			msdyn_Description: {},
			msdyn_ETA: {},
			msdyn_name: {},
			msdyn_PackagingTrackingNo: {},
			msdyn_PriceList: {},
			msdyn_ProcessingAction: {},
			msdyn_ReferenceNo: {},
			msdyn_RequestedByContact: {},
			msdyn_ServiceAccount: {},
			msdyn_ShippingTrackingNo: {},
			msdyn_ShipVia: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_Taxable: {},
			msdyn_TaxCode: {},
			msdyn_TotalAmount: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {},
			receiptsgrid: {},
			rmaproductsgrid: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_967655CB_D318_4E85_A768_3B42E0FC398E: {
				Section: {
					_567C00B9_7BCD_4668_9FD1_010DD4039922: {},
					tab_1_section_2: {},
					tab_1_section_3: {},
					_967655CB_D318_4E85_A768_3B42E0FC398E_SECTION_2: {},
					tab_3_section_3: {},
					_967655CB_D318_4E85_A768_3B42E0FC398E_SECTION_3: {}
				}
			},
			tab_3: {
				Section: {
				}
			},
			rmaproductstab: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_rma_msdyn_rmaproduct_RMA: {},
			nav_msdyn_msdyn_rma_msdyn_rmareceipt_RMA: {},
			nav_msdyn_msdyn_rma_msdyn_rtvproduct_RMA: {},
			navAudit: {},
			navProcessSessions: {},
			nav_msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA: {},
			nav_msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_rma = {
		msdyn_ProcessingAction : {
			Create_RTV: 690970000,
			Return_to_Warehouse: 690970001,
			Change_Asset_Ownership: 690970002
		},
		msdyn_SystemStatus : {
			Pending: 690970000,
			Canceled: 690970001,
			Products_Received: 690970002
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