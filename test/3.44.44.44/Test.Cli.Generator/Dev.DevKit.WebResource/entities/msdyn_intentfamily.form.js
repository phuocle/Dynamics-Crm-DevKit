'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_intentfamily_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_agentgroup_intentfamilyid_msdyn_intentfamily: {},
			msdyn_intent_intentfamilyid_msdyn_intentfamily: {},
			msdyn_intentattribute_intentfamilyid_msdyn_intentfamily: {},
			msdyn_intentattributeset_intentfamilyid_msdyn_intentfamily: {},
			msdyn_intentconfig_intentfamilyid_msdyn_intentfamily: {},
			msdyn_intententity_intentfamilyid_msdyn_intentfamily: {},
			msdyn_intentgroupcondition_msdyn_intentfamily_msdyn_intentfamily: {},
			msdyn_intentsolutionmap_intentfamilyid_msdyn_intentfamily: {},
			msdyn_liveworkstream_intentfamilyid_msdyn_intentfamily: {},
			msdyn_msdyn_ocliveworkitem_msdyn_intentfamily_activeintentfamilyid: {},
			Queue_intentfamilyid_msdyn_intentfamily: {}
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
	OptionSet.msdyn_intentfamily = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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