'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormContract = function(executionContext, defaultWebResourceName) {
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
			ActiveOn: {},
			BillingCustomerId: {},
			BillingEndOn: {},
			BillingFrequencyCode: {},
			BillingStartOn: {},
			BillToAddress: {},
			CancelOn: {},
			Contract_lines: {},
			ContractLanguage: {},
			ContractNumber: {},
			ContractServiceLevelCode: {},
			ContractTemplateId: {},
			CustomerId: {},
			Duration: {},
			ExpiresOn: {},
			NetPrice: {},
			notescontrol: {},
			OriginatingContract: {},
			OwnerId: {},
			ServiceAddress: {},
			Title: {},
			TotalDiscount: {},
			TotalPrice: {},
			TransactionCurrencyId: {},
			UseDiscountAsPercentage: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					header: {},
					contract_type: {},
					history: {},
					description: {},
					notes: {},
					contract_line: {},
					billing_information: {},
					pricing: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	LuckyMokey.FormContract_Information = function(executionContext, defaultWebResourceName) {
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
			ActiveOn: {},
			BillingCustomerId: {},
			BillingEndOn: {},
			BillingFrequencyCode: {},
			BillingStartOn: {},
			BillToAddress: {},
			CancelOn: {},
			ContractLanguage: {},
			ContractNumber: {},
			ContractServiceLevelCode: {},
			ContractTemplateId: {},
			CustomerId: {},
			Duration: {},
			ExpiresOn: {},
			NetPrice: {},
			notescontrol: {},
			OriginatingContract: {},
			OwnerId: {},
			ServiceAddress: {},
			Title: {},
			TotalDiscount: {},
			TotalPrice: {},
			TransactionCurrencyId: {},
			UseDiscountAsPercentage: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					header: {},
					billing_information: {},
					pricing: {}
				}
			},
			details: {
				Section: {
					contract_type: {},
					history: {},
					description: {}
				}
			},
			notes: {
				Section: {
					notes: {}
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
	OptionSet.Contract = {
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
		ContractServiceLevelCode : {
			Gold: 1,
			Silver: 2,
			Bronze: 3
		},
		StateCode : {
			Draft: 0,
			Invoiced: 1,
			Active: 2,
			On_Hold: 3,
			Canceled: 4,
			Expired: 5
		},
		StatusCode : {
			Draft: 1,
			Invoiced: 2,
			Active: 3,
			On_Hold: 4,
			Canceled: 5,
			Expired: 6
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