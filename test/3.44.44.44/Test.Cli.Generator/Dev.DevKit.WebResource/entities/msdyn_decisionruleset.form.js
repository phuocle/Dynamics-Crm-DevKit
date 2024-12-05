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
		var navigation = {
			msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid: {},
			msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid: {},
			msdyn_decisionruleset_queue_msdyn_inqueueoverflowrulesetid: {},
			msdyn_intentsolution_mappingconfiguration_rulesetid_msdyn_decisionruleset: {},
			msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid: {},
			msdyn_msdyn_decisionruleset_msdyn_swarmtemplate_skillattachmentrulesetid: {},
			msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid: {},
			msdyn_queue_decisionrulesetId: {},
			msdyn_rulesetdependencymapping_msdyn_decisionruleset_msdyn_referencedpolymorphicentityid: {},
			msdyn_rulesetdependencymapping_msdyn_decisionruleset_msdyn_referencingrulesetid: {},
			msdyn_templateruleset_draftruleset_msdyn_decisionruleset: {},
			msdyn_templateruleset_publishedruleset_msdyn_decisionruleset: {}
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
		msdyn_dataversecomponenttype : {
			Custom_API: 192350000,
			Unkown: 0
		},
		msdyn_mlmodeltype : {
			Effort_based: 192350002,
			Sentiment_based: 192350001,
			Skill_based: 192350000
		},
		msdyn_rulesettype : {
			Dataverse_Components: 192350002,
			Declarative: 192350000,
			Intelligent_Conversation_Distribution: 192350003,
			ML_model_based: 192350001
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