'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSocial_Activity = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CreatedOn", "Description", "ModifiedOn", "OwnerId", "PostedOn", "PostFromProfileId", "PostMessageType", "PostToProfileId", "PostURL", "RegardingObjectId", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["Community", "PriorityCode", "SentimentValue", "StatusCode"],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormSocial_Activity_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "ModifiedOn", "OwnerId", "PostedOn", "PostedOn1", "PostFromProfileId", "PostMessageType", "PostToProfileId", "PostURL", "RegardingObjectId", "RegardingObjectId1", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["Community", "PriorityCode", "SentimentValue", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["tab_2___Description", "tab_2___tab_2_section_1", "tab_2___tab_2_section_2"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SocialActivity = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		Community: { Facebook: 1, Other: 0, Twitter: 2 },
		PostAuthorAccountType: { },
		PostAuthorType: { },
		PostMessageType: { Private_Message: 1, Public_Message: 0 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0 },
		StatusCode: { Canceled: 5, Completed: 1, Failed: 2, Open: 4, Processing: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));