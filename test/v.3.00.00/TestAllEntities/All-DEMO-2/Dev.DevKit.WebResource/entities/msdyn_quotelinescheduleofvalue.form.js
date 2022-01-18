'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_amount: {},
			msdyn_amount_after_tax: {},
			msdyn_invoicedate: {},
			msdyn_name: {},
			msdyn_projecttask: {},
			msdyn_quotelineid: {},
			msdyn_tax: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					GeneralSection: {},
					InvoiceSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_amount: {},
			msdyn_invoicedate: {},
			msdyn_name: {},
			msdyn_projecttask: {},
			msdyn_quotelineid: {},
			msdyn_tax: {},
			TransactionCurrencyId: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					AmountSection: {},
					GeneralSection: {},
					InvoiceSection: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotelinescheduleofvalue = {
		msdyn_invoicestatus : {
			Customer_invoice_created: 192350002,
			Customer_invoice_posted: 192350003,
			Not_Ready_for_invoicing: 192350000,
			Ready_for_invoicing: 192350001
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