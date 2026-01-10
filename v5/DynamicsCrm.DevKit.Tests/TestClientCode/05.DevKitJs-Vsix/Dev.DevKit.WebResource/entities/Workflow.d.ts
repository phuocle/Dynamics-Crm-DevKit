//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormWorkflow_Information {
		interface tab_notes_Sections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}
		/** Notes */
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			/** Notes */
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
	}
	export class FormWorkflow_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Workflow_Information */
		Body: DevKit.FormWorkflow_Information.Body;
	}
	export class WorkflowApi {
		/**
		* DynamicsCrm.DevKit WorkflowApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the latest activation record for the process. */
		readonly ActiveWorkflowId: string | null;
		/** Indicates whether the asynchronous system job is automatically deleted on completion. */
		AsyncAutoDelete: boolean | null;
		/** Billing context this flow is in. */
		BillingContext: string | null;
		/** Business Process Type. */
		BusinessProcessType: OptionSet.Workflow.BusinessProcessType | null;
		/** Category of the process. */
		Category: OptionSet.Workflow.Category | null;
		/** Claims related to this workflow. */
		Claims: string | null;
		/** Business logic converted into client data */
		ClientData: string | null;
		/** For Internal Use Only. */
		readonly ClientDataIsCompressed: boolean | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Workflow.ComponentState | null;
		/** Connection References related to this workflow. */
		ConnectionReferences: string | null;
		/** Unique identifier of the user who created the process. */
		readonly CreatedBy: string | null;
		/** Date and time when the process was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the process. */
		readonly CreatedOnBehalfBy: string | null;
		/** Create metadata for this workflow. */
		CreateMetadata: string | null;
		/** Stage of the process when triggered on Create. */
		CreateStage: OptionSet.Workflow.CreateStage | null;
		/** Credentials related to this workflow. */
		Credentials: string | null;
		/** Definition of the business logic of this workflow instance. */
		Definition: string | null;
		/** Stage of the process when triggered on Delete. */
		DeleteStage: OptionSet.Workflow.DeleteStage | null;
		/** Soft dependencies of this workflow instance. */
		Dependencies: string | null;
		/** Description of the process. */
		Description: string | null;
		/** Desktop flow modules related to this workflow. */
		DesktopFlowModules: string | null;
		/** comma separated list of one or more Dynamics First Party Solution Unique names that this workflow is in context of. */
		DynamicsSolutionContext: string | null;
		/** Shows the default image for the record. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** Unique identifier of the associated form. */
		FormId: string | null;
		/** Input parameters to the process. */
		InputParameters: string | null;
		/** Inputs definition for this workflow. */
		Inputs: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Indicates whether the process was created using the Microsoft Dynamics 365 Web application. */
		readonly IsCrmUIWorkflow: boolean | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Defines whether other publishers can attach custom processing steps to this action */
		IsCustomProcessingStepAllowedForOtherPublishers: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Whether or not the steps in the process are executed in a single transaction. */
		IsTransacted: boolean | null;
		/** Language of the process. */
		LanguageCode: number | null;
		/** The user object that should be used to establish the license the flow should operate under. */
		Licensee: string | null;
		/** The source of the license entitlements. */
		LicenseEntitledBy: string | null;
		/** Additional metadata for this workflow. */
		Metadata: string | null;
		/** Shows the mode of the process. */
		Mode: OptionSet.Workflow.Mode | null;
		/** Type of the Modern Flow. */
		ModernFlowType: OptionSet.Workflow.ModernFlowType | null;
		/** Unique identifier of the user who last modified the process. */
		readonly ModifiedBy: string | null;
		/** Date and time when the process was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the process. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Flow modify metadata used for telemetry, etc. */
		ModifyMetadata: string | null;
		/** Name of the process. */
		Name: string | null;
		/** Indicates whether the process is able to run as an on-demand process. */
		OnDemand: boolean | null;
		/** Outputs definition for this workflow. */
		Outputs: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the process. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the process. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the process. */
		readonly OwningUser: string | null;
		/** Unique identifier of the definition for process activation. */
		readonly ParentWorkflowId: string | null;
		/** For Internal Use Only. */
		PlanVerified: boolean | null;
		/** Unique identifier of the plug-in type. */
		readonly PluginTypeId: string | null;
		/** Type the business process flow order. */
		ProcessOrder: number | null;
		/** Contains the role assignment for the process. */
		ProcessRoleAssignment: string | null;
		/** Unique identifier of the associated form for process trigger. */
		ProcessTriggerFormId: string | null;
		/** Scope of the process trigger. */
		ProcessTriggerScope: OptionSet.Workflow.ProcessTriggerScope | null;
		/** Indicates the rank for order of execution for the synchronous workflow. */
		Rank: number | null;
		/** For internal use only. */
		ResourceContainer: string | null;
		/** For internal use only. */
		ResourceId: string | null;
		/** Specifies the system user account under which a workflow executes. */
		RunAs: OptionSet.Workflow.RunAs | null;
		/** Schema version for this workflow. */
		SchemaVersion: string | null;
		/** Scope of the process. */
		Scope: OptionSet.Workflow.Scope | null;
		/** Unique identifier of the SDK Message associated with this workflow. */
		readonly SdkMessageId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the workflow */
		StateCode: OptionSet.Workflow.StateCode | null;
		/** Reason for the status of the workflow */
		StatusCode: OptionSet.Workflow.StatusCode | null;
		/** Indicates whether the process can be included in other processes as a child process. */
		Subprocess: boolean | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		SuspensionReasonDetails: string | null;
		/** Select whether synchronous workflow failures will be saved to log files. */
		SyncWorkflowLogOnFailure: boolean | null;
		/** The throttling behavior type. */
		ThrottlingBehavior: OptionSet.Workflow.ThrottlingBehavior | null;
		/** Indicates whether the process will be triggered when the primary entity is created. */
		TriggerOnCreate: boolean | null;
		/** Indicates whether the process will be triggered on deletion of the primary entity. */
		TriggerOnDelete: boolean | null;
		/** Attributes that trigger the process when updated. */
		TriggerOnUpdateAttributeList: string | null;
		/** For Internal Use Only. */
		readonly TrustedAccess: boolean | null;
		/** Type of the process. */
		Type: OptionSet.Workflow.Type | null;
		/** For internal use only. */
		readonly UIData: string | null;
		/** Type of the UI Flow process. */
		UIFlowType: OptionSet.Workflow.UIFlowType | null;
		/** Unique name of the process */
		UniqueName: string | null;
		/** Select the stage a process will be triggered on update. */
		UpdateStage: OptionSet.Workflow.UpdateStage | null;
		readonly VersionNumber: number | null;
		/** Unique identifier of the process. */
		WorkflowId: string | null;
		/** For internal use only. */
		readonly WorkflowIdUnique: string | null;
		/** XAML that defines the process. */
		Xaml: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Claims related to this workflow. */
			readonly Claims: string;
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
			/** The user object that should be used to establish the license the flow should operate under. */
			readonly Licensee: string;
			/** The source of the license entitlements. */
			readonly LicenseEntitledBy: string;
			/** Additional metadata for this workflow. */
			readonly Metadata: string;
			/** Shows the mode of the process. */
			readonly Mode: string;
			/** Type of the Modern Flow. */
			readonly ModernFlowType: string;
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
			/** Business_Flow = 0*/
			Business_Flow = 0,
			/** Task_Flow = 1*/
			Task_Flow = 1
		}
		enum Category {
			/** Action = 3*/
			Action = 3,
			/** AI_Flow = 7*/
			AI_Flow = 7,
			/** Business_Process_Flow = 4*/
			Business_Process_Flow = 4,
			/** Business_Rule = 2*/
			Business_Rule = 2,
			/** Desktop_Flow = 6*/
			Desktop_Flow = 6,
			/** Dialog = 1*/
			Dialog = 1,
			/** Modern_Flow = 5*/
			Modern_Flow = 5,
			/** Workflow = 0*/
			Workflow = 0
		}
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum CreateStage {
			/** Post_operation = 40*/
			Post_operation = 40,
			/** Pre_operation = 20*/
			Pre_operation = 20
		}
		enum DeleteStage {
			/** Post_operation = 40*/
			Post_operation = 40,
			/** Pre_operation = 20*/
			Pre_operation = 20
		}
		enum Mode {
			/** Background = 0*/
			Background = 0,
			/** Real_time = 1*/
			Real_time = 1
		}
		enum ModernFlowType {
			/** CopilotStudioFlow = 1*/
			CopilotStudioFlow = 1,
			/** M365CopilotAgentFlow = 2*/
			M365CopilotAgentFlow = 2,
			/** PowerAutomateFlow = 0*/
			PowerAutomateFlow = 0
		}
		enum PrimaryEntity {
		}
		enum ProcessTriggerScope {
			/** Entity = 2*/
			Entity = 2,
			/** Form = 1*/
			Form = 1
		}
		enum RendererObjectTypeCode {
		}
		enum RunAs {
			/** Calling_User = 1*/
			Calling_User = 1,
			/** Owner = 0*/
			Owner = 0
		}
		enum Scope {
			/** Business_Unit = 2*/
			Business_Unit = 2,
			/** Organization = 4*/
			Organization = 4,
			/** Parent_Child_Business_Units = 3*/
			Parent_Child_Business_Units = 3,
			/** User = 1*/
			User = 1
		}
		enum StateCode {
			/** Activated = 1*/
			Activated = 1,
			/** Draft = 0*/
			Draft = 0,
			/** Suspended = 2*/
			Suspended = 2
		}
		enum StatusCode {
			/** Activated = 2*/
			Activated = 2,
			/** CompanyDLPViolation = 3*/
			CompanyDLPViolation = 3,
			/** Draft = 1*/
			Draft = 1
		}
		enum ThrottlingBehavior {
			/** CopilotStudio = 2*/
			CopilotStudio = 2,
			/** None = 0*/
			None = 0,
			/** TenantPool = 1*/
			TenantPool = 1
		}
		enum Type {
			/** Activation = 2*/
			Activation = 2,
			/** Definition = 1*/
			Definition = 1,
			/** Template = 3*/
			Template = 3
		}
		enum UIFlowType {
			/** Power_Automate_Desktop = 2*/
			Power_Automate_Desktop = 2,
			/** Recording = 101*/
			Recording = 101,
			/** Selenium_IDE = 1*/
			Selenium_IDE = 1,
			/** Test = 3*/
			Test = 3,
			/** Windows_recorder_V1 = 0*/
			Windows_recorder_V1 = 0
		}
		enum UpdateStage {
			/** Post_operation = 40*/
			Post_operation = 40,
			/** Pre_operation = 20*/
			Pre_operation = 20
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}