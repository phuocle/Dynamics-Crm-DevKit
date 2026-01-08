'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAppointment = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["attachmentsGrid", "Description", "IsAllDayEvent", "IsOnlineMeeting", "Location", "OnlineMeetingJoinUrl", "OptionalAttendees", "RegardingObjectId", "requiredattendees", "ScheduledDurationMinutes", "ScheduledEnd", "ScheduledStart", "Subject"],
			bpf: [],
			dialog: [],
			grid: ["attachmentsGrid"],
			header: ["OwnerId", "PriorityCode", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["appointment___appointment_description", "appointment___attachments", "appointment___general_information", "appointment___scheduling_information", "appointment___tab_2_section_2"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormAppointment_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["attachmentsGrid", "Description", "IsAllDayEvent", "IsOnlineMeeting", "Location", "OnlineMeetingJoinUrl", "OptionalAttendees", "RegardingObjectId", "RegardingObjectId1", "requiredattendees", "ScheduledDurationMinutes", "ScheduledEnd", "ScheduledStart", "Subject"],
			bpf: [],
			dialog: [],
			grid: ["attachmentsGrid"],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StateCode"],
			navigation: [],
			quick: [],
			tab: ["tab_5___appointment_description", "tab_5___tab_5_section_2", "tab_5___tab_5_section_3", "tab_5___tab_5_section_5"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormAppointment_Wizard = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["attachmentsGrid", "Description", "IsAllDayEvent", "IsOnlineMeeting", "Location", "OnlineMeetingJoinUrl", "OptionalAttendees", "RegardingObjectId", "requiredattendees", "ScheduledDurationMinutes", "ScheduledEnd", "ScheduledStart", "StatusCode", "Subject"],
			bpf: [],
			dialog: [],
			grid: ["attachmentsGrid"],
			header: ["OwnerId", "PriorityCode"],
			navigation: [],
			quick: [],
			tab: ["appointment___appointment_description", "appointment___attachments", "appointment___general_information", "appointment___Hidden_Section", "appointment___scheduling_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormAppointment_quick_create_form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "IsAllDayEvent", "IsOnlineMeeting", "Location", "OptionalAttendees", "OwnerId", "PriorityCode", "RegardingObjectId", "requiredattendees", "ScheduledDurationMinutes", "ScheduledEnd", "ScheduledStart", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["tab_1___tab_1_column_1_section_1", "tab_1___tab_1_column_2_section_1", "tab_1___tab_1_column_3_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Appointment = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		AttachmentErrors: { None: 0, The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1 },
		InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
		OnlineMeetingType: { Teams_Meeting: 1 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
		StatusCode: { Busy: 5, Canceled: 4, Completed: 3, Free: 1, Out_of_Office: 6, Tentative: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));