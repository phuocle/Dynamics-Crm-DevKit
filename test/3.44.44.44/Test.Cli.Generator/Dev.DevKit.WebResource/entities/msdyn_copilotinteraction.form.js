'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_copilotinteraction_Information = function(executionContext, defaultWebResourceName) {
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
	OptionSet.msdyn_copilotinteraction = {
		msdyn_interactiontype : {
			AcceptSuggestion: 100230312,
			ArticleProposed: 100230310,
			Available: 100230309,
			Copy: 100230304,
			EditAndSend: 100230307,
			ExpandTile: 100230314,
			Generated: 100230305,
			ManualCopy: 100230308,
			MarkAsReviewed: 100230311,
			RequestSolution: 100230315,
			SendToCustomer: 100230306,
			ThumbsClear: 100230303,
			ThumbsDown: 100230302,
			ThumbsUp: 100230301,
			ViewHistory: 100230313
		},
		msdyn_scenariotype : {
			Ask_a_question: 100230201,
			Case_summary: 100230205,
			Chat_Assist: 100230216,
			Collaborate_with_SMEs: 100230210,
			Copilot: 100230204,
			Custom_entity_summary: 100230209,
			Inline_Copilot_for_email: 100230211,
			Intent_Assist: 100230213,
			Knowledge_draft_assist: 100230208,
			knowledge_harvest: 100230214,
			Live_conversation_response: 100230202,
			Live_conversation_summary: 100230206,
			Resolution_notes: 100230215,
			Timeline_highlights: 100230207,
			Timeline_next_best_actions: 100230212,
			Write_an_email: 100230203
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