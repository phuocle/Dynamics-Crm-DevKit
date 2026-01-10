'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEmail = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "attachmentsGrid", "bcc", "cc", "Description", "emailengagementactionscontrol", "emailrecipientactivitycontrol", "from", "RegardingObjectId", "Subject", "to"],
			bpf: [],
			dialog: [],
			grid: ["attachmentsGrid"],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StatusCode"],
			navigation: [],
			quick: [],
			tab: ["Email___attachments", "Email___email_description", "Email___emailengagementactions", "Email___Emailrecipient_section_6", "Email___recipient_information", "Email___Regarding_information", "Email___tab_4_section_2"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormEmail_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["attachmentsGrid", "bcc", "cc", "Description", "from", "RegardingObjectId", "Subject", "to"],
			bpf: [],
			dialog: [],
			grid: ["attachmentsGrid"],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StatusCode"],
			navigation: [],
			quick: [],
			tab: ["tab_2___tab_2_section_2", "tab_2___tab_2_section_3", "tab_2___tab_2_section_5"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormEnhanced_Email = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["attachmentsGrid", "bcc", "cc", "Description", "from", "RegardingObjectId", "Subject", "to"],
			bpf: [],
			dialog: [],
			grid: ["attachmentsGrid"],
			header: ["OwnerId", "PriorityCode", "ScheduledEnd", "StatusCode"],
			navigation: [],
			quick: [],
			tab: ["Email___recipient_information", "Email___Regarding_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormEmail_Wizard = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActualDurationMinutes", "attachmentsGrid", "bcc", "cc", "Description", "from", "OwnerId", "RegardingObjectId", "StatusCode", "Subject", "to"],
			bpf: [],
			dialog: [],
			grid: ["attachmentsGrid"],
			header: ["PriorityCode", "ScheduledEnd"],
			navigation: [],
			quick: [],
			tab: ["Email___attachments", "Email___email_description", "Email___Hidden_Section", "Email___recipient_information", "Email___Regarding_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Email = {
		AcceptingEntityTypeCode: { },
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		CorrelationMethod: { ConversationIndex: 5, CustomCorrelation: 7, InReplyTo: 3, None: 0, Skipped: 1, SmartMatching: 6, TrackingToken: 4, XHeader: 2 },
		DeliveryPriorityCode: { High: 2, Low: 0, Normal: 1 },
		EmailReminderStatus: { NotSet: 0, ReminderExpired: 2, ReminderInvalid: 3, ReminderSet: 1 },
		EmailReminderType: { If_I_do_not_receive_a_reply_by: 0, If_the_email_is_not_opened_by: 1, Remind_me_anyways_at: 2 },
		EmailSenderObjectTypeCode: { },
		Notifications: { None: 0, The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1, Truncated_body: 2 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		SendersAccountObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0 },
		StatusCode: { Canceled: 5, Completed: 2, Draft: 1, Failed: 8, Pending_Send: 6, Received: 4, Sending: 7, Sent: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));