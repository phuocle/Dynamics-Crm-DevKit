'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormProduct_Association = function(executionContext, defaultWebResourceName) {
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
			AssociatedProduct: {},
			product_association_dynamic_properties: {},
			ProductId: {},
			ProductIsRequired: {},
			Quantity: {},
			UoMId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			product_association_dynamic_properties: {
				Section: {
					product_association_dynamic_properties_section: {}
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
	OptionSet.ProductAssociation = {
		ProductIsRequired : {
			Optional: 0,
			Required: 1
		},
		PropertyCustomizationStatus : {
			Not_Available: 0,
			Available: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1,
			Draft: 2,
			Under_Revision: 3
		},
		statuscode : {
			Active: 1,
			Inactive: 2,
			Draft: 0,
			DraftActive: 3
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