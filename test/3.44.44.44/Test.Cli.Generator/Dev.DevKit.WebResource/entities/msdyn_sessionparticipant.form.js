'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSession_participant_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_agentid: {},
			msdyn_joinedon: {},
			msdyn_mode: {},
			msdyn_name: {},
			msdyn_omnichannelsession: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid: {},
			msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid: {}
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
	OptionSet.msdyn_sessionparticipant = {
		msdyn_consultmode : {
			Chat: 0,
			Chat_And_Voice: 1,
			Voice: 2
		},
		msdyn_conversationaccess : {
			Default: 0,
			Private: 2,
			Public: 1
		},
		msdyn_externalparticipantchanneltype : {
			Microsoft_Teams: 426120001,
			Phone_Number: 426120000
		},
		msdyn_mode : {
			Consult: 192350003,
			Monitor: 192350004,
			Preview: 192350005,
			Primary: 192350002
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