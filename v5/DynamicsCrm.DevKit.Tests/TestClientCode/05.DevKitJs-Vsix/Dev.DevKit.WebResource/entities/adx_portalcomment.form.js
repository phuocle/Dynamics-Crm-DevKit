'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPortal_Comment = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "From", "notescontrol", "RegardingObjectId", "Subject", "To"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["adx_PortalCommentDirectionCode", "OwnerId", "PriorityCode", "StatusCode"],
			navigation: [],
			quick: [],
			tab: ["_54373510_FFDA_4801_B39B_1D305942D8D6____54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_2", "_54373510_FFDA_4801_B39B_1D305942D8D6____54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_4"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adx_portalcomment = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		adx_PortalCommentDirectionCode: { Incoming: 1, Outgoing: 2 },
		Community: { Facebook: 1, Other: 0, Twitter: 2 },
		DeliveryPriorityCode: { High: 2, Low: 0, Normal: 1 },
		InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
		StatusCode: { Canceled: 4, Open: 1, Received: 3, Scheduled: 5, Sent: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));