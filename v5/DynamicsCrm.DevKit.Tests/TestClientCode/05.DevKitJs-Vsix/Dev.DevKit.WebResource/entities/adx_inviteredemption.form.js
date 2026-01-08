'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formadx_inviteredemption_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["adx_ipAddress", "CreatedOn", "Customers", "notescontrol", "OwnerId", "RegardingObjectId", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["StatusCode"],
			navigation: [],
			quick: [],
			tab: ["_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6____171A0ADC_6B27_41FB_B31F_2D6C193677F1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adx_inviteredemption = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		Community: { Facebook: 1, Other: 0, Twitter: 2 },
		DeliveryPriorityCode: { High: 2, Low: 0, Normal: 1 },
		InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
		StatusCode: { Canceled: 3, Completed: 2, Open: 1, Scheduled: 4 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));