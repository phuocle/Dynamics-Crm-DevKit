'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormProductPriceLevel_Information = function(executionContext, defaultWebResourceName) {
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
			Amount: {},
			DiscountTypeId: {},
			Percentage: {},
			PriceLevelId: {},
			PricingMethodCode: {},
			ProductId: {},
			QuantitySellingCode: {},
			RoundingOptionAmount: {},
			RoundingOptionCode: {},
			RoundingPolicyCode: {},
			TransactionCurrencyId: {},
			UoMId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					price_list_item_information: {},
					pricing: {},
					rounding: {}
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

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormProduct_Price_List = function(executionContext, defaultWebResourceName) {
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
			Amount: {},
			DiscountTypeId: {},
			Percentage: {},
			PriceLevelId: {},
			PricingMethodCode: {},
			ProductId: {},
			QuantitySellingCode: {},
			RoundingOptionAmount: {},
			RoundingOptionCode: {},
			RoundingPolicyCode: {},
			TransactionCurrencyId: {},
			UoMId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					price_list_item_information: {},
					Currency: {}
				}
			},
			Pricing_information: {
				Section: {
					pricing: {},
					rounding: {}
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
	OptionSet.ProductPriceLevel = {
		PricingMethodCode : {
			Currency_Amount: 1,
			Percent_of_List: 2,
			Percent_Markup_Current_Cost: 3,
			Percent_Margin_Current_Cost: 4,
			Percent_Markup_Standard_Cost: 5,
			Percent_Margin_Standard_Cost: 6
		},
		QuantitySellingCode : {
			No_Control: 1,
			Whole: 2,
			Whole_and_Fractional: 3
		},
		RoundingOptionCode : {
			Ends_in: 1,
			Multiple_of: 2
		},
		RoundingPolicyCode : {
			None: 1,
			Up: 2,
			Down: 3,
			To_Nearest: 4
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