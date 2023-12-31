'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_pminferredtask_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.msdyn_pminferredtask = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_automationstatus : {
			Complete: 200000003,
			InProgress: 200000002,
			NotRecommended: 200000001,
			NotStarted: 200000000
		},
		msdyn_reportprovisioningstatus : {
			Failed: 193350003,
			NotStarted: 193350000,
			Provisioned: 193350002,
			Provisioning: 193350001
		},
		msdyn_source : {
			DataLake: 1,
			Recording: 0
		},
		OwnerIdType : {
		},
		statecode : {
			Done: 2,
			Draft: 0,
			Failed: 3,
			InProgress: 1
		},
		statuscode : {
			Analyzed: 4,
			AnalyzeFailed: 5,
			Analyzing: 2,
			DeleteFailed: 6,
			Deleting: 3,
			Draft: 0,
			Queued: 1
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