'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRecurring_Appointment = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "IsOnlineMeeting", "Location", "OnlineMeetingJoinUrl", "OptionalAttendees", "RegardingObjectId", "RequiredAttendees", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId", "PriorityCode", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["SUMMARY_TAB___appointment_description", "SUMMARY_TAB___general_information", "SUMMARY_TAB___tab_2_section_2"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurringAppointmentMaster = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		ExpansionStateCode: { Full: 2, Partial: 1, Unexpanded: 0 },
		Instance: { First: 1, Fourth: 4, Last: 5, Second: 2, Third: 3 },
		InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
		MonthOfYear: { April: 4, August: 8, December: 12, February: 2, Invalid_Month_Of_Year: 0, January: 1, July: 7, June: 6, March: 3, May: 5, November: 11, October: 10, September: 9 },
		OnlineMeetingType: { Teams_Meeting: 1 },
		PatternEndType: { No_End_Date: 1, Occurrences: 2, Pattern_End_Date: 3 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RecurrencePatternType: { Daily: 0, Monthly: 2, Weekly: 1, Yearly: 3 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
		StatusCode: { Busy: 5, Canceled: 4, Completed: 3, Free: 1, Out_of_Office: 6, Tentative: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));