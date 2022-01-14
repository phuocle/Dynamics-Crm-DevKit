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
			msfp_inviteemailaddress: {},
			msfp_invitesentdate: {},
			msfp_invitestatus: {},
			msfp_otherproperties: {},
			msfp_respondent: {},
			msfp_sourcesurveyidentifier: {},
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
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
			Booking_Alert: 10386,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10673,
			Customer_Voice_alert: 10283,
			Customer_Voice_survey_invite: 10293,
			Customer_Voice_survey_response: 10295,
			Email: 4202,
			Fax: 4204,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 10781,
			Phone_Call: 4210,
			Project_Service_Approval: 10416,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10688,
			Task: 4212
		},
		Community : {
			Cortana: 5,
			Direct_Line: 6,
			Direct_Line_Speech: 8,
			Email: 9,
			Facebook: 1,
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