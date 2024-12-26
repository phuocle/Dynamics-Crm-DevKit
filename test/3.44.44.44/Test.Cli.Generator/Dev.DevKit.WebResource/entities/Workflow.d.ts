//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormWorkflow_Information {
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the process. */
			Description: DevKit.Controls.String;
			/** Name of the process. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the process. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			adx_invitation_redemptionworkflow: DevKit.Controls.NavigationItem,
			AIPluginOperation_Workflow_Workflow: DevKit.Controls.NavigationItem,
			catalogassignment_workflow: DevKit.Controls.NavigationItem,
			Comment_Artifact_Workflow: DevKit.Controls.NavigationItem,
			convertruleitembase_workflowid: DevKit.Controls.NavigationItem,
			flowcapacityassignment_workflow: DevKit.Controls.NavigationItem,
			flowevent_workflow: DevKit.Controls.NavigationItem,
			lk_expiredprocess_processid: DevKit.Controls.NavigationItem,
			lk_leadtoopportunitysalesprocess_processid: DevKit.Controls.NavigationItem,
			lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid: DevKit.Controls.NavigationItem,
			lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid: DevKit.Controls.NavigationItem,
			lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid: DevKit.Controls.NavigationItem,
			lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid: DevKit.Controls.NavigationItem,
			lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid: DevKit.Controls.NavigationItem,
			lk_msdyn_iottocaseprocess_processid: DevKit.Controls.NavigationItem,
			lk_msdyncrm_leadtoopportunity_processid: DevKit.Controls.NavigationItem,
			lk_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99_processid: DevKit.Controls.NavigationItem,
			lk_newprocess_processid: DevKit.Controls.NavigationItem,
			lk_opportunitysalesprocess_processid: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_processid: DevKit.Controls.NavigationItem,
			lk_translationprocess_processid: DevKit.Controls.NavigationItem,
			msdyn_retrainworkflow_msdyn_toaimodel: DevKit.Controls.NavigationItem,
			msdyn_scheduleinferenceworkflow_msdyn_toaimodel: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_macrosession_macroname: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_pmrecording: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_solutionhealthrule_resolutionaction: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_solutionhealthrule_Workflow: DevKit.Controls.NavigationItem,
			msdyn_workflow_msdyn_timespent_businessprocessflow: DevKit.Controls.NavigationItem,
			msdyn_workflow_slaitem_customtimecalculationworkflowid: DevKit.Controls.NavigationItem,
			process_processstage: DevKit.Controls.NavigationItem,
			process_processtrigger: DevKit.Controls.NavigationItem,
			regardingobjectid_process: DevKit.Controls.NavigationItem,
			slabase_workflowid: DevKit.Controls.NavigationItem,
			slaitembase_workflowid: DevKit.Controls.NavigationItem,
			workflow_active_workflow: DevKit.Controls.NavigationItem,
			workflow_dependencies: DevKit.Controls.NavigationItem,
			workflow_desktopflowbinary_Process: DevKit.Controls.NavigationItem,
			workflow_flowlog_cloudflowid: DevKit.Controls.NavigationItem,
			workflow_flowlog_desktopflowid: DevKit.Controls.NavigationItem,
			workflow_flowrun_Workflow: DevKit.Controls.NavigationItem,
			Workflow_licenseentitledby: DevKit.Controls.NavigationItem,
			workflow_parent_workflow: DevKit.Controls.NavigationItem,
			Workflow_routingrule: DevKit.Controls.NavigationItem,
			workflow_workflowbinary_Process: DevKit.Controls.NavigationItem,
			workflowid_convertrule: DevKit.Controls.NavigationItem,
			workflowid_profilerule: DevKit.Controls.NavigationItem
		}
	}
	class FormWorkflow_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Workflow_Information */
		Body: DevKit.FormWorkflow_Information.Body;
		/** The Navigation of form Workflow_Information */
		Navigation: DevKit.FormWorkflow_Information.Navigation;
		/** The SidePanes of form Workflow_Information */
		SidePanes: DevKit.SidePanes;
	}
	class WorkflowApi {
		/**
		* DynamicsCrm.DevKit WorkflowApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the latest activation record for the process. */
		readonly ActiveWorkflowId: string;
		/** Indicates whether the asynchronous system job is automatically deleted on completion. */
		AsyncAutoDelete: boolean;
		/** Billing context this flow is in. */
		BillingContext: string;
		/** Business Process Type. */
		BusinessProcessType: OptionSet.Workflow.BusinessProcessType;
		/** Category of the process. */
		Category: OptionSet.Workflow.Category;
		/** Business logic converted into client data */
		ClientData: string;
		/** For Internal Use Only. */
		readonly ClientDataIsCompressed: boolean;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Workflow.ComponentState;
		/** Connection References related to this workflow. */
		ConnectionReferences: string;
		/** Unique identifier of the user who created the process. */
		readonly CreatedBy: string;
		/** Date and time when the process was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the process. */
		readonly CreatedOnBehalfBy: string;
		/** Create metadata for this workflow. */
		CreateMetadata: string;
		/** Stage of the process when triggered on Create. */
		CreateStage: OptionSet.Workflow.CreateStage;
		/** Credentials related to this workflow. */
		Credentials: string;
		/** Definition of the business logic of this workflow instance. */
		Definition: string;
		/** Stage of the process when triggered on Delete. */
		DeleteStage: OptionSet.Workflow.DeleteStage;
		/** Soft dependencies of this workflow instance. */
		Dependencies: string;
		/** Description of the process. */
		Description: string;
		/** Desktop flow modules related to this workflow. */
		DesktopFlowModules: string;
		/** comma separated list of one or more Dynamics First Party Solution Unique names that this workflow is in context of. */
		DynamicsSolutionContext: string;
		/** Shows the default image for the record. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Unique identifier of the associated form. */
		FormId: string;
		/** Input parameters to the process. */
		InputParameters: string;
		/** Inputs definition for this workflow. */
		Inputs: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Indicates whether the process was created using the Microsoft Dynamics 365 Web application. */
		readonly IsCrmUIWorkflow: boolean;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Defines whether other publishers can attach custom processing steps to this action */
		IsCustomProcessingStepAllowedForOtherPublishers: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Whether or not the steps in the process are executed in a single transaction. */
		IsTransacted: boolean;
		/** Language of the process. */
		LanguageCode: number;
		/** The source of the license entitlements. */
		LicenseEntitledBy: string;
		/** Additional metadata for this workflow. */
		Metadata: string;
		/** Shows the mode of the process. */
		Mode: OptionSet.Workflow.Mode;
		/** Unique identifier of the user who last modified the process. */
		readonly ModifiedBy: string;
		/** Date and time when the process was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the process. */
		readonly ModifiedOnBehalfBy: string;
		/** Flow modify metadata used for telemetry, etc. */
		ModifyMetadata: string;
		/** Name of the process. */
		Name: string;
		/** Indicates whether the process is able to run as an on-demand process. */
		OnDemand: boolean;
		/** Outputs definition for this workflow. */
		Outputs: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the process. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the process. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the process. */
		readonly OwningUser: string;
		/** Unique identifier of the definition for process activation. */
		readonly ParentWorkflowId: string;
		/** For Internal Use Only. */
		PlanVerified: boolean;
		/** Unique identifier of the plug-in type. */
		readonly PluginTypeId: string;
		/** Type the business process flow order. */
		ProcessOrder: number;
		/** Contains the role assignment for the process. */
		ProcessRoleAssignment: string;
		/** Unique identifier of the associated form for process trigger. */
		ProcessTriggerFormId: string;
		/** Scope of the process trigger. */
		ProcessTriggerScope: OptionSet.Workflow.ProcessTriggerScope;
		/** Indicates the rank for order of execution for the synchronous workflow. */
		Rank: number;
		/** For internal use only. */
		ResourceContainer: string;
		/** For internal use only. */
		ResourceId: string;
		/** Specifies the system user account under which a workflow executes. */
		RunAs: OptionSet.Workflow.RunAs;
		/** Schema version for this workflow. */
		SchemaVersion: string;
		/** Scope of the process. */
		Scope: OptionSet.Workflow.Scope;
		/** Unique identifier of the SDK Message associated with this workflow. */
		readonly SdkMessageId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the workflow */
		StateCode: OptionSet.Workflow.StateCode;
		/** Reason for the status of the workflow */
		StatusCode: OptionSet.Workflow.StatusCode;
		/** Indicates whether the process can be included in other processes as a child process. */
		Subprocess: boolean;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		SuspensionReasonDetails: string;
		/** Select whether synchronous workflow failures will be saved to log files. */
		SyncWorkflowLogOnFailure: boolean;
		/** The throttling behavior type. */
		ThrottlingBehavior: OptionSet.Workflow.ThrottlingBehavior;
		/** Indicates whether the process will be triggered when the primary entity is created. */
		TriggerOnCreate: boolean;
		/** Indicates whether the process will be triggered on deletion of the primary entity. */
		TriggerOnDelete: boolean;
		/** Attributes that trigger the process when updated. */
		TriggerOnUpdateAttributeList: string;
		/** For Internal Use Only. */
		readonly TrustedAccess: boolean;
		/** Type of the process. */
		Type: OptionSet.Workflow.Type;
		/** For internal use only. */
		readonly UIData: string;
		/** Type of the UI Flow process. */
		UIFlowType: OptionSet.Workflow.UIFlowType;
		/** Unique name of the process */
		UniqueName: string;
		/** Select the stage a process will be triggered on update. */
		UpdateStage: OptionSet.Workflow.UpdateStage;
		readonly VersionNumber: number;
		/** Unique identifier of the process. */
		WorkflowId: string;
		/** For internal use only. */
		readonly WorkflowIdUnique: string;
		/** XAML that defines the process. */
		Xaml: string;
		readonly FormattedValue: {
			/** Unique identifier of the latest activation record for the process. */
			readonly ActiveWorkflowId: string;
			/** Indicates whether the asynchronous system job is automatically deleted on completion. */
			readonly AsyncAutoDelete: string;
			/** Billing context this flow is in. */
			readonly BillingContext: string;
			/** Business Process Type. */
			readonly BusinessProcessType: string;
			/** Category of the process. */
			readonly Category: string;
			/** Business logic converted into client data */
			readonly ClientData: string;
			/** For Internal Use Only. */
			readonly ClientDataIsCompressed: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Connection References related to this workflow. */
			readonly ConnectionReferences: string;
			/** Unique identifier of the user who created the process. */
			readonly CreatedBy: string;
			/** Date and time when the process was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the process. */
			readonly CreatedOnBehalfBy: string;
			/** Create metadata for this workflow. */
			readonly CreateMetadata: string;
			/** Stage of the process when triggered on Create. */
			readonly CreateStage: string;
			/** Credentials related to this workflow. */
			readonly Credentials: string;
			/** Definition of the business logic of this workflow instance. */
			readonly Definition: string;
			/** Stage of the process when triggered on Delete. */
			readonly DeleteStage: string;
			/** Soft dependencies of this workflow instance. */
			readonly Dependencies: string;
			/** Description of the process. */
			readonly Description: string;
			/** Desktop flow modules related to this workflow. */
			readonly DesktopFlowModules: string;
			/** comma separated list of one or more Dynamics First Party Solution Unique names that this workflow is in context of. */
			readonly DynamicsSolutionContext: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Unique identifier of the associated form. */
			readonly FormId: string;
			/** Input parameters to the process. */
			readonly InputParameters: string;
			/** Inputs definition for this workflow. */
			readonly Inputs: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Indicates whether the process was created using the Microsoft Dynamics 365 Web application. */
			readonly IsCrmUIWorkflow: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Defines whether other publishers can attach custom processing steps to this action */
			readonly IsCustomProcessingStepAllowedForOtherPublishers: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Whether or not the steps in the process are executed in a single transaction. */
			readonly IsTransacted: string;
			/** Language of the process. */
			readonly LanguageCode: string;
			/** The source of the license entitlements. */
			readonly LicenseEntitledBy: string;
			/** Additional metadata for this workflow. */
			readonly Metadata: string;
			/** Shows the mode of the process. */
			readonly Mode: string;
			/** Unique identifier of the user who last modified the process. */
			readonly ModifiedBy: string;
			/** Date and time when the process was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the process. */
			readonly ModifiedOnBehalfBy: string;
			/** Flow modify metadata used for telemetry, etc. */
			readonly ModifyMetadata: string;
			/** Name of the process. */
			readonly Name: string;
			/** Indicates whether the process is able to run as an on-demand process. */
			readonly OnDemand: string;
			/** Outputs definition for this workflow. */
			readonly Outputs: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the process. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the process. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the process. */
			readonly OwningUser: string;
			/** Unique identifier of the definition for process activation. */
			readonly ParentWorkflowId: string;
			/** For Internal Use Only. */
			readonly PlanVerified: string;
			/** Unique identifier of the plug-in type. */
			readonly PluginTypeId: string;
			/** Type the business process flow order. */
			readonly ProcessOrder: string;
			/** Contains the role assignment for the process. */
			readonly ProcessRoleAssignment: string;
			/** Unique identifier of the associated form for process trigger. */
			readonly ProcessTriggerFormId: string;
			/** Scope of the process trigger. */
			readonly ProcessTriggerScope: string;
			/** Indicates the rank for order of execution for the synchronous workflow. */
			readonly Rank: string;
			/** For internal use only. */
			readonly ResourceContainer: string;
			/** For internal use only. */
			readonly ResourceId: string;
			/** Specifies the system user account under which a workflow executes. */
			readonly RunAs: string;
			/** Schema version for this workflow. */
			readonly SchemaVersion: string;
			/** Scope of the process. */
			readonly Scope: string;
			/** Unique identifier of the SDK Message associated with this workflow. */
			readonly SdkMessageId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the workflow */
			readonly StateCode: string;
			/** Reason for the status of the workflow */
			readonly StatusCode: string;
			/** Indicates whether the process can be included in other processes as a child process. */
			readonly Subprocess: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly SuspensionReasonDetails: string;
			/** Select whether synchronous workflow failures will be saved to log files. */
			readonly SyncWorkflowLogOnFailure: string;
			/** The throttling behavior type. */
			readonly ThrottlingBehavior: string;
			/** Indicates whether the process will be triggered when the primary entity is created. */
			readonly TriggerOnCreate: string;
			/** Indicates whether the process will be triggered on deletion of the primary entity. */
			readonly TriggerOnDelete: string;
			/** Attributes that trigger the process when updated. */
			readonly TriggerOnUpdateAttributeList: string;
			/** For Internal Use Only. */
			readonly TrustedAccess: string;
			/** Type of the process. */
			readonly Type: string;
			/** For internal use only. */
			readonly UIData: string;
			/** Type of the UI Flow process. */
			readonly UIFlowType: string;
			/** Unique name of the process */
			readonly UniqueName: string;
			/** Select the stage a process will be triggered on update. */
			readonly UpdateStage: string;
			readonly VersionNumber: string;
			/** Unique identifier of the process. */
			readonly WorkflowId: string;
			/** For internal use only. */
			readonly WorkflowIdUnique: string;
			/** XAML that defines the process. */
			readonly Xaml: string;
		}
	}
}
declare namespace OptionSet {
	namespace Workflow {
		enum BusinessProcessType {
			/** 0 */
			Business_Flow,
			/** 1 */
			Task_Flow
		}
		enum Category {
			/** 3 */
			Action,
			/** 7 */
			AI_Flow,
			/** 4 */
			Business_Process_Flow,
			/** 2 */
			Business_Rule,
			/** 6 */
			Desktop_Flow,
			/** 1 */
			Dialog,
			/** 5 */
			Modern_Flow,
			/** 9000 */
			Web_Client_API_Flow,
			/** 0 */
			Workflow
		}
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum CreateStage {
			/** 40 */
			Post_operation,
			/** 20 */
			Pre_operation
		}
		enum DeleteStage {
			/** 40 */
			Post_operation,
			/** 20 */
			Pre_operation
		}
		enum Mode {
			/** 0 */
			Background,
			/** 1 */
			Real_time
		}
		enum PrimaryEntity {
		}
		enum ProcessTriggerScope {
			/** 2 */
			Entity,
			/** 1 */
			Form
		}
		enum RendererObjectTypeCode {
		}
		enum RunAs {
			/** 1 */
			Calling_User,
			/** 0 */
			Owner
		}
		enum Scope {
			/** 2 */
			Business_Unit,
			/** 4 */
			Organization,
			/** 3 */
			Parent_Child_Business_Units,
			/** 1 */
			User
		}
		enum StateCode {
			/** 1 */
			Activated,
			/** 0 */
			Draft,
			/** 2 */
			Suspended
		}
		enum StatusCode {
			/** 2 */
			Activated,
			/** 3 */
			CompanyDLPViolation,
			/** 1 */
			Draft
		}
		enum ThrottlingBehavior {
			/** 0 */
			None,
			/** 1 */
			TenantPool
		}
		enum Type {
			/** 2 */
			Activation,
			/** 1 */
			Definition,
			/** 3 */
			Template
		}
		enum UIFlowType {
			/** 2 */
			Power_Automate_Desktop,
			/** 101 */
			Recording,
			/** 1 */
			Selenium_IDE,
			/** 0 */
			Windows_recorder_V1
		}
		enum UpdateStage {
			/** 40 */
			Post_operation,
			/** 20 */
			Pre_operation
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}