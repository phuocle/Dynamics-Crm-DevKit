'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormWorkflow_Information = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			Name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			notes: {
				Section: {
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Workflow = {
		BusinessProcessType : {
			Business_Flow: 0,
			Task_Flow: 1
		},
		Category : {
			Action: 3,
			Business_Process_Flow: 4,
			Business_Rule: 2,
			Desktop_Flow: 6,
			Dialog: 1,
			Modern_Flow: 5,
			Workflow: 0
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		CreateStage : {
			Post_operation: 40,
			Pre_operation: 20
		},
		DeleteStage : {
			Post_operation: 40,
			Pre_operation: 20
		},
		Mode : {
			Background: 0,
			Real_time: 1
		},
		ProcessTriggerScope : {
			Entity: 2,
			Form: 1
		},
		RunAs : {
			Calling_User: 1,
			Owner: 0
		},
		Scope : {
			Business_Unit: 2,
			Organization: 4,
			Parent_Child_Business_Units: 3,
			User: 1
		},
		StateCode : {
			Activated: 1,
			Draft: 0
		},
		StatusCode : {
			Activated: 2,
			Draft: 1
		},
		Type : {
			Activation: 2,
			Definition: 1,
			Template: 3
		},
		UIFlowType : {
			Power_Automate_Desktop: 2,
			Recording: 101,
			Selenium_IDE: 1,
			Windows_recorder_V1: 0
		},
		UpdateStage : {
			Post_operation: 40,
			Pre_operation: 20
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