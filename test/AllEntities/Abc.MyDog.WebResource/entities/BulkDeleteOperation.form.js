'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormBulkDeleteOperation_Information = function(executionContext, defaultWebResourceName) {
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
			advfindcontrol: {},
			CreatedBy: {},
			CreatedOn: {},
			FailureCount: {},
			IsRecurring: {},
			ModifiedBy: {},
			ModifiedOn: {},
			Name: {},
			NextRun: {},
			OwnerId: {},
			querylist: {},
			rdNotify: {},
			recipients: {},
			StatusCode: {},
			SuccessCount: {},
			totalcount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			properties: {
				Section: {
					details: {},
					querydetails: {}
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BulkDeleteOperation = {
		StateCode : {
			Ready: 0,
			Suspended: 1,
			Locked: 2,
			Completed: 3
		},
		StatusCode : {
			Waiting_For_Resources: 0,
			Waiting: 10,
			Retrying: 11,
			Paused: 12,
			In_Progress: 20,
			Pausing: 21,
			Canceling: 22,
			Succeeded: 30,
			Failed: 31,
			Canceled: 32
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