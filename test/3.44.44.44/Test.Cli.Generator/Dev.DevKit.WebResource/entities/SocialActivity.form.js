﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSocial_Activity = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			Description: {},
			ModifiedOn: {},
			OwnerId: {},
			PostedOn: {},
			PostFromProfileId: {},
			PostMessageType: {},
			PostToProfileId: {},
			PostURL: {},
			RegardingObjectId: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			Community: {},
			PriorityCode: {},
			SentimentValue: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSocial_Activity_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			ModifiedOn: {},
			OwnerId: {},
			PostedOn: {},
			PostedOn1: {},
			PostFromProfileId: {},
			PostMessageType: {},
			PostToProfileId: {},
			PostURL: {},
			RegardingObjectId: {},
			RegardingObjectId1: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					Description: {},
					tab_2_section_1: {},
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			Community: {},
			PriorityCode: {},
			SentimentValue: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {

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
	OptionSet.SocialActivity = {
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
		PostAuthorAccountType : {
		},
		PostAuthorType : {
		},
		PostMessageType : {
			Private_Message: 1,
			Public_Message: 0
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
			Open: 0
		},
		StatusCode : {
			Canceled: 5,
			Completed: 1,
			Failed: 2,
			Open: 4,
			Processing: 3
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