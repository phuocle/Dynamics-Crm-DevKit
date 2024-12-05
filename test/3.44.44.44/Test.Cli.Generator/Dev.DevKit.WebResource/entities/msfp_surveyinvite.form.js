'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsfp_surveyinvite_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedBy: {},
			msfp_channel: {},
			msfp_emailmessage: {},
			msfp_invitebouncecategory: {},
			msfp_invitebouncedetails: {},
			msfp_inviteemailaddress: {},
			msfp_invitefailurereason: {},
			msfp_invitesentdate: {},
			msfp_invitestatus: {},
			msfp_otherproperties: {},
			msfp_respondent: {},
			msfp_sourcesurveyidentifier: {},
			msfp_subject: {},
			msfp_surveyid: {},
			msfp_surveyinvitationurl: {},
			RegardingObjectId: {},
			StatusCode: {},
			Subject: {},
			To: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_9556FAF0_FB19_453F_A229_3F55E2787722: {
				Section: {
					_D2018D44_DE86_424D_889D_319B33BF6825: {},
					Email_Message: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msfp_msfp_surveyinvite_msfp_surveyresponse_surveyinviteid: {},
			msfp_surveyinvite_Feedback: {},
			msfp_surveyinvite_QueueItems: {}
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
	OptionSet.msfp_surveyinvite = {
		ActivityTypeCode : {
			Appointment: 4201,
			Booking_Alert: 11000,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10691,
			Copilot_Transcript: 10877,
			Customer_Voice_alert: 10600,
			Customer_Voice_survey_invite: 10610,
			Customer_Voice_survey_response: 10612,
			Email: 4202,
			Fax: 4204,
			Invite_Redemption: 10310,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 11063,
			Phone_Call: 4210,
			Portal_Comment: 10311,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10708,
			Task: 4212,
			Teams_chat: 10185,
			Voicemail: 11070
		},
		Community : {
			Apple_Messages_For_Business: 16,
			Cortana: 5,
			Direct_Line: 6,
			Direct_Line_Speech: 8,
			Email: 9,
			Facebook: 1,
			Googles_Business_Messages: 17,
			GroupMe: 10,
			Kik: 11,
			Line: 3,
			Microsoft_Teams: 7,
			Other: 0,
			Skype: 13,
			Slack: 14,
			Telegram: 12,
			Twitter: 2,
			Wechat: 4,
			WhatsApp: 15
		},
		DeliveryPriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		msfp_channel : {
			Email: 647390000,
			Flow: 647390001
		},
		msfp_invitebouncecategory : {
			Blocklisting_issues: 413190007,
			Connection_error: 413190011,
			DMARC_issues: 413190004,
			Email_failed_due_to_unknown_error: 413190015,
			Full_mailbox: 413190003,
			Greylisting_issues: 413190006,
			Inactive_mailbox: 413190002,
			Invalid_domain: 413190001,
			Invalid_mailbox: 413190000,
			Message_expired: 413190013,
			No_Error: 413190016,
			Policy_related: 413190012,
			Recipient_server_error: 413190010,
			Relaying_issues: 413190008,
			Reputation_issues: 413190005,
			Routing_issues: 413190009,
			Suppression_list: 413190014
		},
		msfp_invitefailurereason : {
			Block_bounced: 413190003,
			Cache_block_bounced: 413190010,
			Cache_hard_bounced: 413190011,
			Email_activity_expired: 413190009,
			Email_blocked_by_suppression: 413190012,
			Email_failed_due_to_unknown_error: 413190008,
			Hard_bounced: 413190002,
			Invalid_email_address: 413190004,
			Invalid_recipient_address: 413190005,
			Invalid_reply_to_address: 413190007,
			Invalid_sender_address: 413190006,
			No_Error: 413190013,
			Soft_bounced: 413190001,
			Spam_complaint: 413190000
		},
		msfp_invitestatus : {
			Created: 647390005,
			Delayed: 647390008,
			Failed: 647390004,
			Queued: 647390000,
			Read: 647390006,
			Reminder_failed: 647390011,
			Reminder_in_progress: 647390012,
			Reminder_scheduled: 647390009,
			Reminder_sent: 647390010,
			Responded: 647390003,
			Sent: 647390002,
			Skipped: 647390013,
			Started: 647390007,
			UnSubscribed: 647390001
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0,
			Scheduled: 3
		},
		StatusCode : {
			Canceled: 3,
			Completed: 2,
			Open: 1,
			Scheduled: 4
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