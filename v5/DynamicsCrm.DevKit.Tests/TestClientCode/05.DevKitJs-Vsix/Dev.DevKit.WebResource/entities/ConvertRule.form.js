'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRecord_Creation_and_Update_Rule = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AllowUnknownSender", "ChannelPropertyGroupId", "CheckActiveEntitlement", "CheckBlockedSocialProfile", "CheckDirectMessages", "CheckIfResolved", "ConvertRuleItemsGrid", "Name", "OwnerId", "QueueId", "ResolvedSince", "ResponseTemplateId", "SendAutomaticResponse", "SourceChannelTypeCode", "SourceTypeCode"],
			bpf: [],
			dialog: [],
			grid: ["ConvertRuleItemsGrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___AutoResponseSettings", "general___CaseDetails", "general___ChannelProperties", "general___ConvertToCaseSettings", "general___EmailCaseConditions", "general___SocialMonitoringCaseConditions"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ConvertRule = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		SourceChannelTypeCode: { Appointment: 4201, Email: 4202, Invite_Redemption: 10407, Phone_Call: 4210, Portal_Comment: 10408, Social_Activity: 4216, Task: 4212, Teams_chat: 10253 },
		SourceTypeCode: { Email: 2, Social_Monitoring: 1 },
		StateCode: { Active: 1, Draft: 0 },
		StatusCode: { Active: 2, Draft: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));