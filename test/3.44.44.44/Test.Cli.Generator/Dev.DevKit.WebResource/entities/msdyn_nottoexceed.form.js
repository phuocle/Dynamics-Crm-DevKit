'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_nottoexceed_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_account: {},
			msdyn_amount: {},
			msdyn_costmargin: {},
			msdyn_incidenttype: {},
			msdyn_location: {},
			msdyn_name: {},
			msdyn_ntetype: {},
			msdyn_priority: {},
			msdyn_trade: {},
			msdyn_workordertype: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_20C873EF_EDBF_4992_846B_AA3942C92B3B: {
				Section: {
					_20C873EF_EDBF_4992_846B_AA3942C92B3B_SECTION_2: {},
					_C7080E4B_6601_45CA_B360_CBA9FF30118C: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_nottoexceed_msdyn_workordernte_nottoexceed: {}
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
	OptionSet.msdyn_nottoexceed = {
		msdyn_ntetype : {
			Cost: 192350200,
			Price: 192350100,
			Price_and_cost_margin: 192350300
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