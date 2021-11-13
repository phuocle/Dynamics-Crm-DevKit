'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_rmaproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Changeownership: {},
			msdyn_CredittoAccount: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_ItemStatus: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_ProcessingAction: {},
			msdyn_Product: {},
			msdyn_QtyProcessed: {},
			msdyn_QtyReceived: {},
			msdyn_Quantitytoreturn: {},
			msdyn_ReturntoVendor: {},
			msdyn_ReturntoWarehouse: {},
			msdyn_RMA: {},
			msdyn_Taxable: {},
			msdyn_TotalAmount: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			msdyn_WOProduct: {},
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
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct: {},
			nav_msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_rmaproduct = {
		msdyn_ItemStatus : {
			Canceled: 690970002,
			Pending: 690970000,
			Received: 690970001
		},
		msdyn_ProcessingAction : {
			Change_Asset_Ownership: 690970002,
			Create_RTV: 690970000,
			Return_to_Warehouse: 690970001
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