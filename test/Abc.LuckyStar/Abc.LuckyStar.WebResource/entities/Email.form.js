'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormEmail = function(executionContext, defaultWebResourceName) {
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
					recipient_information: {},
					email_description: {},
					Regarding_information: {},
					attachments: {},
					emailengagementactions: {},
					Emailrecipient_section_6: {},
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
		var footer = {
			IsEmailFollowed: {},
			IsEmailReminderSet: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Email = {
		CorrelationMethod : {
			None: 0,
			Skipped: 1,
			XHeader: 2,
			InReplyTo: 3,
			TrackingToken: 4,
			ConversationIndex: 5,
			SmartMatching: 6,
			CustomCorrelation: 7
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		EmailReminderStatus : {
			NotSet: 0,
			ReminderSet: 1,
			ReminderExpired: 2,
			ReminderInvalid: 3
		},
		EmailReminderType : {
			If_I_do_not_receive_a_reply_by: 0,
			If_the_email_is_not_opened_by: 1,
			Remind_me_anyways_at: 2
		},
		Notifications : {
			None: 0,
			The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1,
			Truncated_body: 2
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Completed: 1,
			Canceled: 2
		},
		StatusCode : {
			Draft: 1,
			Completed: 2,
			Sent: 3,
			Received: 4,
			Canceled: 5,
			Pending_Send: 6,
			Sending: 7,
			Failed: 8
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