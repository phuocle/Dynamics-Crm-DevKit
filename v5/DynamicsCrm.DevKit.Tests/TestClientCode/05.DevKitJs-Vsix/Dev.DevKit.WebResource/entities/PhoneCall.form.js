'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormPhone_Call = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "Description", "DirectionCode", "from", "PhoneNumber", "RegardingObjectId", "Subject", "to"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["phonecall___general_information", "phonecall___phone_call_description", "phonecall___phone_call_details", "phonecall___tab_2_section_2"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormPhone_Call_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "Description", "DirectionCode", "from", "PhoneNumber", "RegardingObjectId", "RegardingObjectId1", "Subject", "to"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["tab_2___tab_2_section_1", "tab_2___tab_2_section_2", "tab_2___tab_2_section_4"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormPhone_call_quick_create_form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "Description", "DirectionCode", "from", "OwnerId", "PhoneNumber", "PriorityCode", "RegardingObjectId", "ScheduledEnd", "Subject", "to"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["PhoneCall_Tab_1___PhoneCall_Description", "PhoneCall_Tab_1___PhoneCall_Description_2", "PhoneCall_Tab_1___PhoneCall_Description_3"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.PhoneCall = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0 },
		StatusCode: { Canceled: 3, Made: 2, Open: 1, Received: 4 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));