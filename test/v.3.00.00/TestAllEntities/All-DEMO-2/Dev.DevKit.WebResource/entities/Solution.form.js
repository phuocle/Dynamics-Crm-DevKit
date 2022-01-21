'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSolution_Information = function(executionContext, defaultWebResourceName) {
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
			ConfigurationPageId: {},
			Description: {},
			FriendlyName: {},
			IFRAME_SolutionsMarketplace: {},
			InstalledOn: {},
			IsManaged: {},
			PublisherId: {},
			UniqueName: {},
			Version: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_9129B06A_8446_77D8_2BD2_027C5006BE41: {
				Section: {
					solutionmarketplacesection: {}
				}
			},
			general: {
				Section: {
					description: {},
					solution_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
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
	OptionSet.Solution = {
		SolutionType : {
			Internal: 2,
			None: 0,
			Snapshot: 1
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