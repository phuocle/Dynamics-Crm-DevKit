﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_intent_Information = function(executionContext, defaultWebResourceName) {
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
		var navigation = {
			msdyn_intententity_intentgroupid_msdyn_intent: {},
			msdyn_intentsolutionmap_intentid_msdyn_intent: {},
			msdyn_msdyn_intent_msdyn_intent_parentgroupid: {},
			msdyn_msdyn_intent_msdyn_intentattributeset_intentid: {},
			msdyn_msdyn_intent_msdyn_intententity_intentid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentgroupid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentid: {}
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
	OptionSet.msdyn_intent = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_harvestingsource : {
			Data_Execution_Run: 192350000,
			Manually_Edited: 192350002,
			Simulation: 192350001
		},
		msdyn_reviewstate : {
			Approved: 192350001,
			Discarded: 192350002,
			Pending: 192350000
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