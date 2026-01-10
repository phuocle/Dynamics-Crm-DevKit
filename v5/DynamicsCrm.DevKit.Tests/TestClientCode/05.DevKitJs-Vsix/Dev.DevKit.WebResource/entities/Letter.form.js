'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormLetter = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "Address", "Description", "DirectionCode", "from", "RegardingObjectId", "Subject", "to"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["SUMMARY_TAB___general_information", "SUMMARY_TAB___Letter_description", "SUMMARY_TAB___Letter_details", "SUMMARY_TAB___tab_2_section_2"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Letter = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0 },
		StatusCode: { Canceled: 5, Draft: 2, Open: 1, Received: 3, Sent: 4 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));