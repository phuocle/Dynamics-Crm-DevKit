'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_overflowactionconfig_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_overflowactiondata: {},
			msdyn_overflowactiontype: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			General: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_liveworkstream_BotFailureActionConfig_msdyn_overflowactionconfig: {},
			msdyn_overflowactionconfig_QueueItems: {},
			msdyn_rulesetdependencymapping_msdyn_overflowactionconfig_msdyn_referencedpolymorphicentityid: {}
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
	OptionSet.msdyn_overflowactionconfig = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_botfailureactiontype : {
			Prompt_and_Escalate: 192350002,
			Prompt_and_External_Transfer: 192350001,
			Prompt_and_Hang_Up: 192350000,
			Wait_Music_and_Escalate: 192350003
		},
		msdyn_overflowactiontype : {
			Default: 192350000,
			Direct_Callback: 192350003,
			End_Conversation: 192350001,
			Queue_Transfer: 192350005,
			Remain_In_Queue: 192350006,
			Transfer_to_Phone: 192350002,
			Voicemail: 192350004
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