'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormWorkflow_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "Name", "notescontrol", "OwnerId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["notes___notes"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Workflow = {
		BusinessProcessType: { Business_Flow: 0, Task_Flow: 1 },
		Category: { Action: 3, AI_Flow: 7, Business_Process_Flow: 4, Business_Rule: 2, Desktop_Flow: 6, Dialog: 1, Modern_Flow: 5, Workflow: 0 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		CreateStage: { Post_operation: 40, Pre_operation: 20 },
		DeleteStage: { Post_operation: 40, Pre_operation: 20 },
		Mode: { Background: 0, Real_time: 1 },
		ModernFlowType: { CopilotStudioFlow: 1, M365CopilotAgentFlow: 2, PowerAutomateFlow: 0 },
		PrimaryEntity: { },
		ProcessTriggerScope: { Entity: 2, Form: 1 },
		RendererObjectTypeCode: { },
		RunAs: { Calling_User: 1, Owner: 0 },
		Scope: { Business_Unit: 2, Organization: 4, Parent_Child_Business_Units: 3, User: 1 },
		StateCode: { Activated: 1, Draft: 0, Suspended: 2 },
		StatusCode: { Activated: 2, CompanyDLPViolation: 3, Draft: 1 },
		ThrottlingBehavior: { CopilotStudio: 2, None: 0, TenantPool: 1 },
		Type: { Activation: 2, Definition: 1, Template: 3 },
		UIFlowType: { Power_Automate_Desktop: 2, Recording: 101, Selenium_IDE: 1, Test: 3, Windows_recorder_V1: 0 },
		UpdateStage: { Post_operation: 40, Pre_operation: 20 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));