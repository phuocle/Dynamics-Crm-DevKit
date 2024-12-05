'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormOmnichannel_session_form = function(executionContext, defaultWebResourceName) {
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
			msdyn_agentacceptedon: {},
			msdyn_agentassignedon: {},
			msdyn_channel: {},
			msdyn_liveworkitemid: {},
			msdyn_sessionclosedon: {},
			msdyn_sessioncreatedon: {},
			OwnerId: {},
			RegardingObjectId: {},
			session_participants: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_E74AC0DC_7C2F_4E02_9235_A56E038611BA: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			session_participants: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_botsession_sessionid_msdyn_oc: {},
			msdyn_msdyn_ocsession_msdyn_agentcapacityupdatehistory_sessionid: {},
			msdyn_msdyn_ocsession_msdyn_ocliveworkitem_lastsessionid: {},
			msdyn_msdyn_ocsession_msdyn_ocsession_primarysession: {},
			msdyn_msdyn_ocsession_msdyn_ocsessionparticipantevent_sessionid: {},
			msdyn_msdyn_ocsession_msdyn_ocsessionsentiment_omnichannelsession: {},
			msdyn_ocsession_Feedback: {},
			msdyn_ocsession_msdyn_conversationmessageblock_msdyn_agentresponsesessionid: {},
			msdyn_ocsession_msdyn_conversationmessageblock_msdyn_customermessagesessionid: {},
			msdyn_ocsession_QueueItems: {},
			msdyn_ocsession_sessioncharacteristic_nested: {},
			msdyn_ocsession_sessionevent_nested: {},
			msdyn_ocsession_sessionparticipant_nested: {}
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
	OptionSet.msdyn_ocsession = {
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
		msdyn_botengagementmode : {
			Default: 192350000,
			OffBusinessHour: 192350003,
			PostConverstation: 192350002,
			PreConversation: 192350001
		},
		msdyn_channel : {
			Apple_Messages_for_Business: 192450000,
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			Googles_Business_Messages: 192450001,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			Voice_call: 192440000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		msdyn_closurereason : {
			AddAgentFailed: 192350017,
			AgentClosed: 192350004,
			AgentDisconnected: 192350007,
			AgentEndConversation: 192350021,
			AgentReject: 192350001,
			AgentReRouted: 192350008,
			AgentTimeout: 192350002,
			AgentTransfered: 192350006,
			AgentTransferToQueue: 192350010,
			AutoClose: 192350018,
			BotCallFailureEndConversation: 192350028,
			BotCallFailureEscalate: 192350031,
			BotCallFailureExternalTransfer: 192350029,
			BotCallFailurePromptAndEscalate: 192350030,
			BotEndConversation: 192350027,
			BotTransferToAgent: 192350026,
			ConversationClosed: 192350005,
			ConversationTimeout: 192350003,
			CustomerDisconnect: 192350020,
			CustomerEndConversation: 192350022,
			Default: 192350000,
			ForceClose: 192350014,
			InqueueOverflowEndConversation: 192350025,
			InqueueOverflowQueueTransfer: 192350024,
			OverflowEndConversation: 192350016,
			OverflowQueueTransfer: 192350015,
			QueueTransfer: 192350023,
			SecondaryChannelClosed: 192350019,
			SupervisorAssignToQueue: 192350011,
			SupervisorTransferToAgent: 192350012,
			SystemReject: 192350013,
			VirtualAgentClosed: 192350009
		},
		msdyn_queueassignedreason : {
			Accepted: 192350019,
			AgentConversationJoin: 192350041,
			AgentDisconnected: 192350010,
			AgentEndConsult: 192350032,
			AgentEndConversation: 192350030,
			AgentInviteRejected: 192350008,
			AgentInviteTimeout: 192350009,
			AgentMonitor: 192350040,
			AgentTimeout: 192350011,
			AgentTransfer: 192350001,
			AgentTransferred: 192350012,
			AssignToAgentBySupervisor: 192350026,
			AssignToQueueBySupervisor: 192350027,
			AutoAccept: 192350006,
			AutoAccepted: 192350020,
			BotCallFailureEndConversation: 192350043,
			BotCallFailureEscalate: 192350046,
			BotCallFailureExternalTransfer: 192350044,
			BotCallFailurePromptAndEscalate: 192350045,
			BotEndConversation: 192350025,
			BotTransferSession: 192350024,
			Closed: 192350007,
			Consult: 192350039,
			ConversationExpired: 192350038,
			CustomerDisconnect: 192350014,
			CustomerEndConversation: 192350029,
			CustomerReconnect: 192350049,
			CustomerRejoin: 192350028,
			CustomerTimeout: 192350013,
			Default: 192350000,
			Disconnect: 192350021,
			End: 192350023,
			Escalated: 192350016,
			ForceClose: 192350033,
			OverflowAssignToQueue: 192350036,
			OverflowEndConversation: 192350035,
			OverflowQueueTransfer: 192350034,
			PostchatSurvey: 192350004,
			PreChatSurvey: 192350003,
			Preview: 192350042,
			QueueTransfer: 192350002,
			Rejected: 192350017,
			SessionEndAfterWrapUp: 192350037,
			SessionTimeout: 192350015,
			SupervisorTransferToAgent: 192350031,
			TimedOut: 192350018,
			Timeout: 192350022,
			UserAccept: 192350005
		},
		msdyn_routingfailurestage : {
			Demand_Classification: 2000,
			None: 10,
			Record_Identification: 1000
		},
		msdyn_sessioncreationreason : {
			Accepted: 192350019,
			AgentConversationJoin: 192350041,
			AgentDisconnected: 192350010,
			AgentEndConsult: 192350032,
			AgentEndConversation: 192350030,
			AgentInviteRejected: 192350008,
			AgentInviteTimeout: 192350009,
			AgentMonitor: 192350040,
			AgentTimeout: 192350011,
			AgentTransfer: 192350001,
			AgentTransferred: 192350012,
			AssignToAgentBySupervisor: 192350026,
			AssignToQueueBySupervisor: 192350027,
			AutoAccept: 192350006,
			AutoAccepted: 192350020,
			BotCallFailureEndConversation: 192350043,
			BotCallFailureEscalate: 192350046,
			BotCallFailureExternalTransfer: 192350044,
			BotCallFailurePromptAndEscalate: 192350045,
			BotEndConversation: 192350025,
			BotTransferSession: 192350024,
			Closed: 192350007,
			Consult: 192350039,
			ConversationExpired: 192350038,
			CustomerDisconnect: 192350014,
			CustomerEndConversation: 192350029,
			CustomerReconnect: 192350049,
			CustomerRejoin: 192350028,
			CustomerTimeout: 192350013,
			Default: 192350000,
			Disconnect: 192350021,
			End: 192350023,
			Escalated: 192350016,
			ForceClose: 192350033,
			OverflowAssignToQueue: 192350036,
			OverflowEndConversation: 192350035,
			OverflowQueueTransfer: 192350034,
			PostchatSurvey: 192350004,
			PreChatSurvey: 192350003,
			Preview: 192350042,
			QueueTransfer: 192350002,
			Rejected: 192350017,
			SessionEndAfterWrapUp: 192350037,
			SessionTimeout: 192350015,
			SupervisorTransferToAgent: 192350031,
			TimedOut: 192350018,
			Timeout: 192350022,
			UserAccept: 192350005
		},
		msdyn_state : {
			Active: 192350001,
			Closed: 192350002,
			Default: 192350000,
			New: 192350003
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