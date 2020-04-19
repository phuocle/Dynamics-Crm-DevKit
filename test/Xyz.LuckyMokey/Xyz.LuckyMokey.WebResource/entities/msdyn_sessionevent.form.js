'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormSession_event_Form = function(executionContext, defaultWebResourceName) {
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
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_sessionevent = {
		msdyn_eventinfo : {
			Default: 192350000
		},
		msdyn_eventreason : {
			AgentTransfer: 192350001,
			QueueTransfer: 192350002,
			PreChatSurvey: 192350003,
			PostchatSurvey: 192350004,
			UserAccept: 192350005,
			AutoAccept: 192350006,
			Closed: 192350007,
			AgentInviteRejected: 192350008,
			AgentInviteTimeout: 192350009,
			AgentDisconnected: 192350010,
			AgentTimeout: 192350011,
			AgentTransferred: 192350012,
			CustomerTimeout: 192350013,
			CustomerDisconnect: 192350014,
			SessionTimeout: 192350015,
			Escalated: 192350016,
			Rejected: 192350017,
			TimedOut: 192350018,
			Accepted: 192350019,
			AutoAccepted: 192350020,
			Item: 192350021,
			Disconnect: 192350022,
			Timeout: 192350023,
			End: 192350024,
			Default: 192350000
		},
		msdyn_eventtype : {
			Default: 192350000,
			QueueAssigned: 192350001,
			AgentAssigned: 192350002,
			AgentAccepted: 192350003,
			AgentInviteRejected: 192350004,
			SessionEnd: 192350005,
			SessionCreated: 192350006,
			AgentInviteTimeout: 192350007,
			Escalated: 192350008,
			ParticipantInvited: 192350009,
			ParticipantInviteRejected: 192350010,
			ParticipantInviteAccepted: 192350011,
			ParticipantInviteTimeout: 192350012,
			ParticipantEnd: 192350013,
			AgentDisconnected: 192350014,
			AgentTimeout: 192350015,
			CustomerTimeout: 192350016,
			CustomerDisconnected: 192350017,
			TransferedToAgent: 192350018,
			TransferedToQueue: 192350019,
			ParticipantLeft: 192350020
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