'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormEntitlement_Template = function(executionContext, defaultWebResourceName) {
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
			AllocationTypeCode: {},
			DecreaseRemainingOn: {},
			Description: {},
			editableEntitlementChannelGridControl: {},
			EndDate: {},
			grid_EntitlementChannel: {},
			grid_EntitlementProducts: {},
			Name: {},
			RestrictCaseCreation: {},
			SLAId: {},
			StartDate: {},
			TotalTerms: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					information: {},
					entitlementterms: {},
					entitlementtemplateterms: {},
					entitlementtemplatetermsInUCI: {},
					products: {}
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
	OptionSet.EntitlementTemplate = {
		AllocationTypeCode : {
			Number_of_cases: 0,
			Number_of_hours: 1
		},
		DecreaseRemainingOn : {
			Case_Resolution: 0,
			Case_Creation: 1
		},
		entitytype : {
			Work_Order: 192350000,
			Case: 0
		},
		KbAccessLevel : {
			Standard: 0,
			Premium: 1,
			None: 2
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