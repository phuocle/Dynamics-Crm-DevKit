'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormContract_Detail = function(executionContext, defaultWebResourceName) {
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
			AllotmentsRemaining: {},
			AllotmentsUsed: {},
			CustomerId: {},
			Discount: {},
			DiscountPercentage: {},
			ExpiresOn: {},
			InitialQuantity: {},
			Net: {},
			notescontrol: {},
			Price: {},
			ProductId: {},
			ProductSerialNumber: {},
			Rate: {},
			ServiceAddress: {},
			Title: {},
			TotalAllotments: {},
			UoMId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					administration: {},
					allotment_details: {},
					contract_detail_information: {},
					notes: {},
					pricing: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
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
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContractDetail_Information = function(executionContext, defaultWebResourceName) {
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
			AllotmentsRemaining: {},
			AllotmentsUsed: {},
			CustomerId: {},
			Discount: {},
			DiscountPercentage: {},
			ExpiresOn: {},
			InitialQuantity: {},
			Net: {},
			notescontrol: {},
			Price: {},
			ProductId: {},
			ProductSerialNumber: {},
			Rate: {},
			ServiceAddress: {},
			Title: {},
			TotalAllotments: {},
			UoMId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			administration: {
				Section: {
					customer_information: {},
					serial_number: {}
				}
			},
			general: {
				Section: {
					allotment_details: {},
					contract_detail_information: {},
					pricing: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
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
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ContractDetail = {
		ServiceContractUnitsCode : {
			Default_Value: 1
		},
		StateCode : {
			Canceled: 2,
			Existing: 0,
			Expired: 3,
			Renewed: 1
		},
		StatusCode : {
			Canceled: 3,
			Expired: 4,
			New: 1,
			Renewed: 2
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