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
		var navigation = {
			adx_invitation_redemptionworkflow: {},
			AIPluginOperation_Workflow_Workflow: {},
			catalogassignment_workflow: {},
			Comment_Artifact_Workflow: {},
			convertruleitembase_workflowid: {},
			flowcapacityassignment_workflow: {},
			flowevent_workflow: {},
			lk_expiredprocess_processid: {},
			lk_leadtoopportunitysalesprocess_processid: {},
			lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid: {},
			lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid: {},
			lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid: {},
			lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid: {},
			lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid: {},
			lk_msdyn_iottocaseprocess_processid: {},
			lk_msdyncrm_leadtoopportunity_processid: {},
			lk_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_processid: {},
			lk_newprocess_processid: {},
			lk_opportunitysalesprocess_processid: {},
			lk_phonetocaseprocess_processid: {},
			lk_translationprocess_processid: {},
			msdyn_retrainworkflow_msdyn_toaimodel: {},
			msdyn_scheduleinferenceworkflow_msdyn_toaimodel: {},
			msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess: {},
			msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess: {},
			msdyn_workflow_msdyn_macrosession_macroname: {},
			msdyn_workflow_msdyn_pmrecording: {},
			msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid: {},
			msdyn_workflow_msdyn_solutionhealthrule_resolutionaction: {},
			msdyn_workflow_msdyn_solutionhealthrule_Workflow: {},
			msdyn_workflow_msdyn_timespent_businessprocessflow: {},
			msdyn_workflow_slaitem_customtimecalculationworkflowid: {},
			process_processstage: {},
			process_processtrigger: {},
			regardingobjectid_process: {},
			slabase_workflowid: {},
			slaitembase_workflowid: {},
			workflow_active_workflow: {},
			workflow_dependencies: {},
			workflow_desktopflowbinary_Process: {},
			workflow_flowlog_cloudflowid: {},
			workflow_flowlog_desktopflowid: {},
			workflow_flowrun_Workflow: {},
			Workflow_licenseentitledby: {},
			workflow_parent_workflow: {},
			Workflow_routingrule: {},
			workflow_workflowbinary_Process: {},
			workflowid_convertrule: {},
			workflowid_profilerule: {}
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
	OptionSet.Workflow = {
		BusinessProcessType : {
			Business_Flow: 0,
			Task_Flow: 1
		},
		Category : {
			Action: 3,
			AI_Flow: 7,
			Business_Process_Flow: 4,
			Business_Rule: 2,
			Desktop_Flow: 6,
			Dialog: 1,
			Modern_Flow: 5,
			Web_Client_API_Flow: 9000,
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
		PrimaryEntity : {
		},
		ProcessTriggerScope : {
			Entity: 2,
			Form: 1
		},
		RendererObjectTypeCode : {
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
			Draft: 0,
			Suspended: 2
		},
		StatusCode : {
			Activated: 2,
			CompanyDLPViolation: 3,
			Draft: 1
		},
		ThrottlingBehavior : {
			None: 0,
			TenantPool: 1
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