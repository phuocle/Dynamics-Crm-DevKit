'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_decisionruleset_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_authoringmode: {},
			msdyn_description: {},
			msdyn_inputcontractid: {},
			msdyn_isinputcollection: {},
			msdyn_name: {},
			msdyn_outputcontractid: {},
			msdyn_rulesetdefinition: {},
			msdyn_rulesettype: {},
			msdyn_UniqueName: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_decisionruleset = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_authoringmode : {
			Decision_list: 192350000
		},
		msdyn_mlmodeltype : {
			Effort_based: 192350002,
			Sentiment_based: 192350001,
			Skill_based: 192350000
		},
		msdyn_rulesettype : {
			Declarative: 192350000,
			ML_model_based: 192350001
		},
		OwnerIdType : {
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