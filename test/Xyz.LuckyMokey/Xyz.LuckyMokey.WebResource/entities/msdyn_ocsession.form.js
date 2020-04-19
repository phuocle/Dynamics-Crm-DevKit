'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormOmnichannel_session_form = function(executionContext, defaultWebResourceName) {
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
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocsession = {
		Community : {
			Facebook: 1,
			Twitter: 2,
			Other: 0
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		msdyn_botengagementmode : {
			Default: 192350000,
			PreConversation: 192350001,
			PostConverstation: 192350002,
			OffBusinessHour: 192350003
		},
		msdyn_channel : {
			Entity_Records: 192350000,
			Live_chat: 192360000,
			Voice: 192370000,
			Video: 192380000,
			Co_browse: 192390000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Facebook: 192330000
		},
		msdyn_closurereason : {
			Default: 192350000,
			AgentReject: 192350001,
			AgentTimeout: 192350002,
			ConversationTimeout: 192350003,
			AgentClosed: 192350004,
			ConversationClosed: 192350005,
			AgentTransfered: 192350006,
			AgentDisconnected: 192350007,
			AgentReRouted: 192350008,
			VirtualAgentClosed: 192350009,
			AgentTransferToQueue: 192350010
		},
		msdyn_state : {
			Default: 192350000,
			Active: 192350001,
			Closed: 192350002,
			New: 192350003
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Completed: 1,
			Canceled: 2,
			Scheduled: 3
		},
		StatusCode : {
			Open: 1,
			Completed: 2,
			Canceled: 3,
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