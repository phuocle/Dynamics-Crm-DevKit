'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_smartassistconfig_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_IconURL: {},
			msdyn_isDefault: {},
			msdyn_maxsuggestioncount: {},
			msdyn_name: {},
			msdyn_Order: {},
			msdyn_SourceEntityName: {},
			msdyn_Suggestioncontainertitle: {},
			msdyn_SuggestionControlConfigUniquename: {},
			msdyn_Suggestioncontroltype: {},
			msdyn_SuggestionProvider: {},
			msdyn_Suggestiontype: {},
			msdyn_suggestionwebresourcemethod: {},
			msdyn_SuggestionWebresourceURL: {},
			msdyn_UniqueName: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
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
	OptionSet.msdyn_smartassistconfig = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_Suggestioncontroltype : {
			Adaptive_Card: 192360000
		},
		msdyn_Suggestiontype : {
			Bot_Suggestion: 192360002,
			Knowledge_Article_Suggestion: 192360000,
			Similar_Case_Suggestion: 192360001
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