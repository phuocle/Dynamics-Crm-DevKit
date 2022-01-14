'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_playbookinstance_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			msdyn_activitiesassociated: {},
			msdyn_activitiesclosed: {},
			msdyn_categoryid: {},
			msdyn_estimatedclose: {},
			msdyn_name: {},
			msdyn_playbooktemplateid: {},
			msdyn_trackprogress: {},
			notescontrol: {},
			PlaybookActivities: {},
			Regarding: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_0A307C03_96BD_41F7_8800_EBF2860AAA98: {
				Section: {
					_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_3: {},
					_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_4: {},
					_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_5: {},
					_547DCA32_5C99_4BF5_95D8_95AE479D4963: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			PlaybookActivities: {},
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
	OptionSet.msdyn_playbookinstance = {
		statecode : {
			Active: 0,
			Completed: 1
		},
		statuscode : {
			In_Progress: 1,
			Not_Required: 5,
			Not_Successful: 3,
			Not_Tracked: 6,
			Partially_Successful: 4,
			Successful: 2
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