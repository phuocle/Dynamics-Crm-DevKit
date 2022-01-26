'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_sessiontemplate_Information = function(executionContext, defaultWebResourceName) {
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
			AdditionalTabs: {},
			Agentscripts: {},
			IsManaged: {},
			msdyn_anchortab: {},
			msdyn_description: {},
			msdyn_enablebuildexpression: {},
			msdyn_entity: {},
			msdyn_expressiondata: {},
			msdyn_name: {},
			msdyn_panelstate: {},
			msdyn_sessiontype: {},
			msdyn_title: {},
			msdyn_UniqueName: {},
			OwnerId: {},
			WebResource_Disclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_F804DF38_FCA6_488A_928E_A5DCCA6FCA2B: {
				Section: {
					_F804DF38_FCA6_488A_928E_A5DCCA6FCA2B_SECTION_2: {}
				}
			},
			Agent_scripts: {
				Section: {
					Agent_scripts_column_4_section_1: {},
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			AdditionalTabs: {},
			Agentscripts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_sessiontemplate = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_panelstate : {
			Docked: 162450002,
			Hidden: 162450001,
			Minimized: 162450000
		},
		msdyn_sessiontype : {
			Entity: 1,
			Generic: 0
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