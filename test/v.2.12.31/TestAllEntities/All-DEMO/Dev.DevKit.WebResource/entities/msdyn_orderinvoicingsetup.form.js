'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_orderinvoicingsetup_Information = function(executionContext, defaultWebResourceName) {
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
			GridProducts: {},
			msdyn_Description: {},
			msdyn_name: {},
			msdyn_Order: {},
			msdyn_RecurrenceSettings: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_14599880_992D_4F94_A7F0_76721D4D0D8B: {
				Section: {
					_14599880_992D_4F94_A7F0_76721D4D0D8B_SECTION_2: {}
				}
			},
			TabProducts: {
				Section: {
					tab_2_section_1: {}
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
			GridProducts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingproduct_OrderInvoicingSetup: {},
			nav_msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingsetupdate_InvoiceSetup: {}
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
	OptionSet.msdyn_orderinvoicingsetup = {
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