'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_ocsystemmessage_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {}
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
	OptionSet.msdyn_ocsystemmessage = {
		msdyn_messagereceiver : {
			Agent: 192350000,
			Customer: 192350001
		},
		msdyn_streamsource : {
			Entity_Records: 192350000,
			Live_chat: 192360000,
			Voice: 192370000,
			Video: 192380000,
			Co_browse: 192390000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Facebook: 192330000
		},
		msdyn_systemmessageeventtype : {
			AgentAccepted: 192350000,
			ConsultAccepted: 192350001,
			TransferAccepted: 192350002,
			ConsultInitiated: 192350003,
			ConsultFailed: 192350004,
			TransferInitiated: 192350005,
			TransferFailed: 192350006,
			ConsultRejected: 192350007,
			TransferRejected: 192350008,
			ConsultTimedOut: 192350009,
			TransferTimedOut: 192350010,
			TransferToQueueInitiated: 192350011,
			TransferToQueueFailed: 192350012,
			AgentDisconnected: 192350013,
			AgentEnded: 192350014,
			SessionClosed: 192350015,
			ConsultSessionClosed: 192350016,
			AgentAssignmentReady: 192350017,
			AgentAssignmentFailure: 192350018,
			CustomerEnded: 192350019,
			CustomerDisconnected: 192350020,
			CustomerQueuePosition_LiveChat: 192350021,
			MessageFailedToSendToCustomer: 192350022,
			OutsideOperationHours: 192350023,
			CustomerQueuePosition_Next: 192350024
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