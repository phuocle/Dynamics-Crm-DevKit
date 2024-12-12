'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEmail = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActualDurationMinutes: {},
			attachmentsGrid: {},
			bcc: {},
			cc: {},
			Description: {},
			emailengagementactionscontrol: {},
			emailrecipientactivitycontrol: {},
			from: {},
			RegardingObjectId: {},
			Subject: {},
			to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Email: {
				Section: {
					attachments: {},
					email_description: {},
					emailengagementactions: {},
					Emailrecipient_section_6: {},
					recipient_information: {},
					Regarding_information: {},
					tab_4_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			email_activity_mime_attachment: {},
			email_email_CorrelatedActivityId: {},
			Email_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			attachmentsGrid: {},
			bcc: {},
			cc: {},
			Description: {},
			from: {},
			RegardingObjectId: {},
			Subject: {},
			to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_2: {},
					tab_2_section_3: {},
					tab_2_section_5: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			email_activity_mime_attachment: {},
			email_email_CorrelatedActivityId: {},
			Email_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEnhanced_Email = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			attachmentsGrid: {},
			bcc: {},
			cc: {},
			Description: {},
			from: {},
			RegardingObjectId: {},
			Subject: {},
			to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Email: {
				Section: {
					recipient_information: {},
					Regarding_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			email_activity_mime_attachment: {},
			email_email_CorrelatedActivityId: {},
			Email_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_Wizard = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActualDurationMinutes: {},
			attachmentsGrid: {},
			bcc: {},
			cc: {},
			Description: {},
			from: {},
			OwnerId: {},
			RegardingObjectId: {},
			StatusCode: {},
			Subject: {},
			to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Email: {
				Section: {
					attachments: {},
					email_description: {},
					Hidden_Section: {},
					recipient_information: {},
					Regarding_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			PriorityCode: {},
			ScheduledEnd: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			email_activity_mime_attachment: {},
			email_email_CorrelatedActivityId: {},
			Email_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Email = {
		AcceptingEntityTypeCode : {
		},
		ActivityTypeCode : {
			Appointment: 4201,
			Customer_Voice_alert: 10611,
			Customer_Voice_survey_invite: 10612,
			Customer_Voice_survey_response: 10613,
			Email: 4202,
			Fax: 4204,
			Invite_Redemption: 10315,
			Letter: 4207,
			Phone_Call: 4210,
			Portal_Comment: 10316,
			Recurring_Appointment: 4251,
			Task: 4212,
			Teams_chat: 10187
		},
		CorrelationMethod : {
			ConversationIndex: 5,
			CustomCorrelation: 7,
			InReplyTo: 3,
			None: 0,
			Skipped: 1,
			SmartMatching: 6,
			TrackingToken: 4,
			XHeader: 2
		},
		DeliveryPriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		EmailReminderStatus : {
			NotSet: 0,
			ReminderExpired: 2,
			ReminderInvalid: 3,
			ReminderSet: 1
		},
		EmailReminderType : {
			If_I_do_not_receive_a_reply_by: 0,
			If_the_email_is_not_opened_by: 1,
			Remind_me_anyways_at: 2
		},
		EmailSenderObjectTypeCode : {
		},
		Notifications : {
			None: 0,
			The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1,
			Truncated_body: 2
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RegardingObjectTypeCode : {
		},
		SendersAccountObjectTypeCode : {
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0
		},
		StatusCode : {
			Canceled: 5,
			Completed: 2,
			Draft: 1,
			Failed: 8,
			Pending_Send: 6,
			Received: 4,
			Sending: 7,
			Sent: 3
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));