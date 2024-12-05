'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSession_event_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	OptionSet.msdyn_sessionevent = {
		msdyn_eventinfo : {
			Default: 192350000
		},
		msdyn_eventreason : {
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
			BotEndConversation: 192350025,
			BotTransferSession: 192350024,
			Closed: 192350007,
			Consult: 192350039,
			ConversationExpired: 192350038,
			CustomerDisconnect: 192350014,
			CustomerEndConversation: 192350029,
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
		msdyn_eventtype : {
			AgentAccepted: 192350003,
			AgentAddedToC2Chat: 192350027,
			AgentAssigned: 192350002,
			AgentDisconnected: 192350014,
			AgentEndConsult: 192350029,
			AgentEndConversation: 192350026,
			AgentInviteRejected: 192350004,
			AgentInviteTimeout: 192350007,
			AgentRemovedFromC2Chat: 192350028,
			AgentTimeout: 192350015,
			AssignToAgentBySupervisor: 192350023,
			AssignToQueueBySupervisor: 192350024,
			BotEndConversation: 192350022,
			BotTransferSession: 192350021,
			CustomerDisconnected: 192350017,
			CustomerEndConversation: 192350025,
			CustomerTimeout: 192350016,
			Default: 192350000,
			Escalated: 192350008,
			ExpiredConversationClose: 192350032,
			ParticipantEnd: 192350013,
			ParticipantInviteAccepted: 192350011,
			ParticipantInvited: 192350009,
			ParticipantInviteRejected: 192350010,
			ParticipantInviteTimeout: 192350012,
			ParticipantLeft: 192350020,
			QueueAssigned: 192350001,
			SessionCreated: 192350006,
			SessionEnd: 192350005,
			SessionEndAfterWrapUp: 192350031,
			SupervisorForceClose: 192350030,
			TransferedToAgent: 192350018,
			TransferedToQueue: 192350019
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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