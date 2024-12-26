'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_priority_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_LevelofImportance: {},
			msdyn_name: {},
			msdyn_PriorityColor: {},
			msdyn_PriorityValue: {},
			notescontrol: {},
			OwnerId: {},
			WebResource_colorPicker: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_priority_msdyn_agreementbookingsetup_Priority: {},
			msdyn_msdyn_priority_msdyn_quotebookingsetup_Priority: {},
			msdyn_msdyn_priority_msdyn_resourcerequirement_Priority: {},
			msdyn_msdyn_priority_msdyn_workorder_Priority: {},
			msdyn_priority_msdyn_nottoexceed_priority: {}
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
	OptionSet.msdyn_priority = {
		msdyn_LevelofImportance : {
			_1: 1,
			_10: 10,
			_2: 2,
			_3: 3,
			_4: 4,
			_5: 5,
			_6: 6,
			_7: 7,
			_8: 8,
			_9: 9
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