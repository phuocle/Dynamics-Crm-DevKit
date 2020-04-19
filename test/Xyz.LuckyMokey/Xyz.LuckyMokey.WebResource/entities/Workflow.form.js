'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormWorkflow_Information = function(executionContext, defaultWebResourceName) {
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
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Workflow = {
		BusinessProcessType : {
			Business_Flow: 0,
			Task_Flow: 1
		},
		Category : {
			Workflow: 0,
			Dialog: 1,
			Business_Rule: 2,
			Action: 3,
			Business_Process_Flow: 4,
			Modern_Flow: 5,
			Reserved: 6
		},
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
		},
		CreateStage : {
			Pre_operation: 20,
			Post_operation: 40
		},
		DeleteStage : {
			Pre_operation: 20,
			Post_operation: 40
		},
		Mode : {
			Background: 0,
			Real_time: 1
		},
		ProcessTriggerScope : {
			Form: 1,
			Entity: 2
		},
		RunAs : {
			Owner: 0,
			Calling_User: 1
		},
		Scope : {
			User: 1,
			Business_Unit: 2,
			Parent_Child_Business_Units: 3,
			Organization: 4
		},
		StateCode : {
			Draft: 0,
			Activated: 1
		},
		StatusCode : {
			Draft: 1,
			Activated: 2
		},
		Type : {
			Definition: 1,
			Activation: 2,
			Template: 3
		},
		UIFlowType : {
			Desktop: 0,
			Selenium_IDE: 1,
			PowerShell: 2
		},
		UpdateStage : {
			Pre_operation: 20,
			Post_operation: 40
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