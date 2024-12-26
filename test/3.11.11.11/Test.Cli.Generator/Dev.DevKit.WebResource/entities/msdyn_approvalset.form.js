'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_approvalset_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			msdyn_ActionType: {},
			msdyn_Approver: {},
			msdyn_EntryType: {},
			msdyn_LifeTime: {},
			msdyn_name: {},
			msdyn_Project: {},
			msdyn_SystemJobId: {},
			msdyn_TargetStatus: {},
			notescontrol: {},
			OwnerId: {},
			ProjectApprovalsSubGrid: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			ProjectApprovalsSubGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_approvalset = {
		msdyn_ActionType : {
			Approve: 192350003,
			Cancel: 192350004,
			Recall: 192350002,
			Reject: 192350001,
			Submit: 192350000,
			Unknown: 192350999
		},
		msdyn_EntryType : {
			Expense: 192350001,
			Time: 192350000
		},
		msdyn_TargetStatus : {
			Approved: 192350002,
			Draft: 192350000,
			Recall_Requested: 192350004,
			Rejected: 192350003,
			Submitted: 192350001,
			Unknown: 192350999
		},
		OwnerIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Completed: 192350004,
			Failed: 192350003,
			Inactive: 2,
			Partially_Completed: 192350002,
			Processing: 192350001,
			Queued: 192350000
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