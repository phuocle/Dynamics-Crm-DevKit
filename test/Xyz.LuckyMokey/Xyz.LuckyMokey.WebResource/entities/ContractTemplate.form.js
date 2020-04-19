'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormContractTemplate_Information = function(executionContext, defaultWebResourceName) {
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
			Abbreviation: {},
			AllotmentTypeCode: {},
			BillingFrequencyCode: {},
			ContractServiceLevelCode: {},
			Description: {},
			EffectivityCalendar: {},
			IFRAME_ContractTemplateCalendar: {},
			Name: {},
			UseDiscountAsPercentage: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.ContractTemplate = {
		AllotmentTypeCode : {
			Number_of_Cases: 1,
			Time: 2,
			Coverage_Dates: 3
		},
		BillingFrequencyCode : {
			Monthly: 1,
			Bimonthly: 2,
			Quarterly: 3,
			Semiannually: 4,
			Annually: 5
		},
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
		},
		ContractServiceLevelCode : {
			Gold: 1,
			Silver: 2,
			Bronze: 3
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