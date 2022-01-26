'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_playbooktemplate_Information = function(executionContext, defaultWebResourceName) {
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
			AssociatedPlaybooks: {},
			msdyn_categoryid: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_name: {},
			msdyn_relatedentitylist: {},
			msdyn_trackprogress: {},
			notescontrol: {},
			PlaybookActivities: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_3A0EE21B_6FBD_455F_913E_A42FE8978461: {
				Section: {
					_30B01E30_AE8E_4D6D_ACA8_95CFBB42C003: {},
					_3A0EE21B_6FBD_455F_913E_A42FE8978461_SECTION_3: {},
					_3A0EE21B_6FBD_455F_913E_A42FE8978461_SECTION_4: {}
				}
			},
			Monitoring: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			AssociatedPlaybooks: {},
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
	OptionSet.msdyn_playbooktemplate = {
		statecode : {
			Draft: 0,
			Published: 1
		},
		statuscode : {
			Draft: 1,
			Published: 2
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