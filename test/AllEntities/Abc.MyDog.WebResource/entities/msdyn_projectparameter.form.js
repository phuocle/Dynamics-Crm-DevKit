'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_projectparameter_Information = function(executionContext, defaultWebResourceName) {
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
			AmountBasedPricingDimensionGrid: {},
			CreatedOn: {},
			MarkupBasedPricingDimensionGrid: {},
			msdyn_defaultorganizationalunit: {},
			msdyn_defaultWorkTemplate: {},
			msdyn_description: {},
			msdyn_invoicefrequency: {},
			msdyn_pricelistdefaultingiscurrencyagnostic: {},
			msdyn_projectmanagerrole: {},
			msdyn_resourceallocationmode: {},
			msdyn_teammemberrole: {},
			PriceListGrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_4C87DA2D_AA4A_4EAE_972E_EAC9DBC05C4F: {
				Section: {
					_2495CB91_9D0E_4216_806C_D7287B3B2D42: {},
					_4C87DA2D_AA4A_4EAE_972E_EAC9DBC05C4F_SECTION_2: {}
				}
			},
			PriceListTab: {
				Section: {
					PriceListSection: {}
				}
			},
			AmountBasedPricingDimensionTab: {
				Section: {
					AmountBasedPricingDimensionSection: {}
				}
			},
			MarkupBasedPricingDimensionTab: {
				Section: {
					MarkupBasedPricingDimensionSection: {}
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
			PriceListGrid: {},
			AmountBasedPricingDimensionGrid: {},
			MarkupBasedPricingDimensionGrid: {},
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
	OptionSet.msdyn_projectparameter = {
		msdyn_resourceallocationmode : {
			Centralized: 1,
			Hybrid: 2
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