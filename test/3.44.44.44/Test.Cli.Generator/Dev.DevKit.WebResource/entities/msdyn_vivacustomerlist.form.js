'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_vivacustomerlist_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	OptionSet.msdyn_vivacustomerlist = {
		msdyn_listtype : {
			Contacts_to_reconnect_with: 192350005,
			Contacts_with_upcoming_meetings: 192350002,
			CRM_list: 192350000,
			Frequently_contacted: 192350007,
			Opportunities_with_follow_up_items_due_soon: 192350003,
			Opportunities_with_overdue_items: 192350004,
			Opportunities_with_upcoming_meetings: 192350001,
			Recently_contacted: 192350006
		},
		msdyn_producttype : {
			Copilot_for_Sales: 10000,
			Copilot_for_Service: 10001,
			Shared: 11000
		},
		msdyn_timerangetype : {
			Last_month: 192350006,
			Last_week: 192350004,
			Last_X_days_192350005: 192350005,
			Last_X_days_192350007: 192350007,
			Last_X_months: 192350008,
			Last_year: 192350009,
			Next_X_days: 192350002,
			This_week: 192350001,
			Today: 192350000,
			Yesterday: 192350003
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