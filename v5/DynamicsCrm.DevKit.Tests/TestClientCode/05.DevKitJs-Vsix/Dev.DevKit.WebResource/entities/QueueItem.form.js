'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormQueueItem_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["EnteredOn", "ModifiedOn", "QueueId", "WorkerId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___information", "general___Time_Information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.QueueItem = {
		ObjectIdTypeCode: { },
		ObjectTypeCode: { Activity: 4200, Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Knowledge_Article: 9953, Knowledge_Article_Template: 10269, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Social_Activity: 4216, Task: 4212, Teams_chat: 10253 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		WorkerIdType: { },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));