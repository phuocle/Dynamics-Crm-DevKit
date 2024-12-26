'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_applicationtabtemplate_Information = function(executionContext, defaultWebResourceName) {
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
			IsManaged: {},
			msdyn_Description: {},
			msdyn_name: {},
			msdyn_pagetype: {},
			msdyn_pinned: {},
			msdyn_title: {},
			msdyn_UniqueName: {},
			OwnerId: {},
			Parameters: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_FCC0A0D2_0A04_4593_A743_3A1A41353188: {
				Section: {
					_FCC0A0D2_0A04_4593_A743_3A1A41353188_SECTION_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Parameters: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_applicationtabtemplate_sessiontemplate_anchortab: {},
			msdyn_applicationtabtemplate_templateparameter: {}
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
	OptionSet.msdyn_applicationtabtemplate = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_pagetype : {
			Control: 509180003,
			Custom: 509180007,
			Dashboard: 509180004,
			Entity_List: 509180000,
			Entity_Record: 509180001,
			Search: 509180005,
			Third_Party_Website: 509180006,
			Web_Resource: 509180002
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