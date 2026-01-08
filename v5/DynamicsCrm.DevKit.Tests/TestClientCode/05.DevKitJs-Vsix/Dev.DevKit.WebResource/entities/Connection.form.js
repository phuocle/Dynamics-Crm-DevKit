'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormConnection_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "EffectiveEnd", "EffectiveStart", "OwnerId", "Record1Id", "Record1RoleId", "Record2Id", "Record2RoleId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["Record1Id"],
			navigation: [],
			quick: [],
			tab: ["details___connect_from", "details___details", "info___description", "info___info_s"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Connection = {
		Record1IdObjectTypeCode: { },
		Record1ObjectTypeCode: { Account: 1, Activity: 4200, Appointment: 4201, Channel_Access_Profile_Rule: 9400, Contact: 2, Email: 4202, Fax: 4204, Goal: 9600, Invitation: 10406, Invite_Redemption: 10407, Knowledge_Article: 9953, Knowledge_Base_Record: 9930, Letter: 4207, Phone_Call: 4210, Position: 50, Process_Session: 4710, Publishing_State_Transition_Rule: 10426, Recurring_Appointment: 4251, Shortcut: 10428, Social_Activity: 4216, Social_Profile: 99, Task: 4212, Team: 9, Territory: 2013, User: 8, Website: 10440 },
		Record2IdObjectTypeCode: { },
		Record2ObjectTypeCode: { Account: 1, Activity: 4200, Appointment: 4201, Channel_Access_Profile_Rule: 9400, Contact: 2, Email: 4202, Fax: 4204, Goal: 9600, Invitation: 10406, Invite_Redemption: 10407, Knowledge_Article: 9953, Knowledge_Base_Record: 9930, Letter: 4207, Phone_Call: 4210, Position: 50, Process_Session: 4710, Publishing_State_Transition_Rule: 10426, Recurring_Appointment: 4251, Shortcut: 10428, Social_Activity: 4216, Social_Profile: 99, Task: 4212, Team: 9, Territory: 2013, User: 8, Website: 10440 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));