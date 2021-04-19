'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormProduct_Association = function(executionContext, defaultWebResourceName) {
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
		var grid = {
			product_association_dynamic_properties: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProductAssociation = {
		ProductIsRequired : {
			Optional: 0,
			Required: 1
		},
		PropertyCustomizationStatus : {
			Available: 1,
			Not_Available: 0
		},
		statecode : {
			Active: 0,
			Draft: 2,
			Inactive: 1,
			Under_Revision: 3
		},
		statuscode : {
			Active: 1,
			Draft: 0,
			DraftActive: 3,
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