'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormTask = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "Description", "RegardingObjectId", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["TASK_TAB___Description", "TASK_TAB___tab_2_section_2", "TASK_TAB___TASK", "TASK_TAB___task_details"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormTask_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "Description", "RegardingObjectId", "RegardingObjectId1", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["tab_4___tab_3_section_3", "tab_4___tab_4_section_2", "tab_4___tab_4_section_4"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormTask_quick_create_form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "Description", "OwnerId", "PriorityCode", "RegardingObjectId", "ScheduledEnd", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["createtask___task", "createtask___task_2", "createtask___task_3"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Task = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0 },
		StatusCode: { Canceled: 6, Completed: 5, Deferred: 7, In_Progress: 3, Not_Started: 2, Waiting_on_someone_else: 4 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));