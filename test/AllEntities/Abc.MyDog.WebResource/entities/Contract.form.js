'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormContract = function(executionContext, defaultWebResourceName) {
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
		var grid = {
			Contract_lines: {},
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
	MyDog.FormContract_Information = function(executionContext, defaultWebResourceName) {
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Contract = {
		AllotmentTypeCode : {
			Coverage_Dates: 3,
			Number_of_Cases: 1,
			Time: 2
		},
		BillingFrequencyCode : {
			Annually: 5,
			Bimonthly: 2,
			Monthly: 1,
			Quarterly: 3,
			Semiannually: 4
		},
		ContractServiceLevelCode : {
			Bronze: 3,
			Gold: 1,
			Silver: 2
		},
		StateCode : {
			Active: 2,
			Canceled: 4,
			Draft: 0,
			Expired: 5,
			Invoiced: 1,
			On_Hold: 3
		},
		StatusCode : {
			Active: 3,
			Canceled: 5,
			Draft: 1,
			Expired: 6,
			Invoiced: 2,
			On_Hold: 4
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