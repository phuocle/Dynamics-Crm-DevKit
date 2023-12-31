'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBulkDeleteOperation_Information = function(executionContext, defaultWebResourceName) {
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BulkDeleteOperation = {
		OwnerIdType : {
		},
		StateCode : {
			Completed: 3,
			Locked: 2,
			Ready: 0,
			Suspended: 1
		},
		StatusCode : {
			Canceled: 32,
			Canceling: 22,
			Failed: 31,
			In_Progress: 20,
			Paused: 12,
			Pausing: 21,
			Retrying: 11,
			Succeeded: 30,
			Waiting: 10,
			Waiting_For_Resources: 0
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