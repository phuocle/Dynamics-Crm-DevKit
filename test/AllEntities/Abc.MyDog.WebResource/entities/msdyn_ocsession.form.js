'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormOmnichannel_session_form = function(executionContext, defaultWebResourceName) {
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			session_participants: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navConnections: {},
			navAudit: {},
			nav_msdyn_ocsession_sessionevent_nested: {},
			nav_msdyn_msdyn_ocsession_msdyn_ocliveworkitem_lastsessionid: {},
			nav_msdyn_ocsession_sessionparticipant_nested: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocsession = {
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
		msdyn_botengagementmode : {
			Default: 192350000,
			OffBusinessHour: 192350003,
			PostConverstation: 192350002,
			PreConversation: 192350001
		},
		msdyn_channel : {
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		msdyn_closurereason : {
			AgentClosed: 192350004,
			AgentDisconnected: 192350007,
			AgentReject: 192350001,
			AgentReRouted: 192350008,
			AgentTimeout: 192350002,
			AgentTransfered: 192350006,
			AgentTransferToQueue: 192350010,
			ConversationClosed: 192350005,
			ConversationTimeout: 192350003,
			Default: 192350000,
			SupervisorAssignToQueue: 192350011,
			VirtualAgentClosed: 192350009
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