//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormWorkflow_Information {
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Description of the process. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the process. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the process. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormWorkflow_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Workflow_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Workflow_Information */
		Body: LuckyStar.FormWorkflow_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the latest activation record for the process. */
		ActiveWorkflowId: DevKit.WebApi.LookupValueReadonly;
		/** Indicates whether the asynchronous system job is automatically deleted on completion. */
		AsyncAutoDelete: DevKit.WebApi.BooleanValue;
		/** Business Process Type. */
		BusinessProcessType: DevKit.WebApi.OptionSetValue;
		/** Category of the process. */
		Category: DevKit.WebApi.OptionSetValue;
		/** Business logic converted into client data */
		ClientData: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the process. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the process was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the process. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Stage of the process when triggered on Create. */
		CreateStage: DevKit.WebApi.OptionSetValue;
		/** Stage of the process when triggered on Delete. */
		DeleteStage: DevKit.WebApi.OptionSetValue;
		/** Description of the process. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated form. */
		FormId: DevKit.WebApi.GuidValue;
		/** Input parameters to the process. */
		InputParameters: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Indicates whether the process was created using the Microsoft Dynamics 365 Web application. */
		IsCrmUIWorkflow: DevKit.WebApi.BooleanValueReadonly;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Whether or not the steps in the process are executed in a single transaction. */
		IsTransacted: DevKit.WebApi.BooleanValue;
		/** Language of the process. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Shows the mode of the process. */
		Mode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the process. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the process was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the process. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the process. */
		Name: DevKit.WebApi.StringValue;
		/** Indicates whether the process is able to run as an on-demand process. */
		OnDemand: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the process. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the process. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the process. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the definition for process activation. */
		ParentWorkflowId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the plug-in type. */
		PluginTypeId: DevKit.WebApi.LookupValueReadonly;
		/** Type the business process flow order. */
		ProcessOrder: DevKit.WebApi.IntegerValue;
		/** Contains the role assignment for the process. */
		ProcessRoleAssignment: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated form for process trigger. */
		ProcessTriggerFormId: DevKit.WebApi.GuidValue;
		/** Scope of the process trigger. */
		ProcessTriggerScope: DevKit.WebApi.OptionSetValue;
		/** Indicates the rank for order of execution for the synchronous workflow. */
		Rank: DevKit.WebApi.IntegerValue;
		/** Specifies the system user account under which a workflow executes. */
		RunAs: DevKit.WebApi.OptionSetValue;
		/** Scope of the process. */
		Scope: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the SDK Message associated with this workflow. */
		SdkMessageId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the process. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Additional information about status of the process. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Indicates whether the process can be included in other processes as a child process. */
		Subprocess: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Select whether synchronous workflow failures will be saved to log files. */
		SyncWorkflowLogOnFailure: DevKit.WebApi.BooleanValue;
		/** Indicates whether the process will be triggered when the primary entity is created. */
		TriggerOnCreate: DevKit.WebApi.BooleanValue;
		/** Indicates whether the process will be triggered on deletion of the primary entity. */
		TriggerOnDelete: DevKit.WebApi.BooleanValue;
		/** Attributes that trigger the process when updated. */
		TriggerOnUpdateAttributeList: DevKit.WebApi.StringValue;
		/** Type of the process. */
		Type: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		UIData: DevKit.WebApi.StringValueReadonly;
		/** Type of the UI Flow process. */
		UIFlowType: DevKit.WebApi.OptionSetValue;
		/** Unique name of the process */
		UniqueName: DevKit.WebApi.StringValue;
		/** Select the stage a process will be triggered on update. */
		UpdateStage: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the process. */
		WorkflowId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		WorkflowIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** XAML that defines the process. */
		Xaml: DevKit.WebApi.StringValue;
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
			/** 0 */
			Workflow,
			/** 1 */
			Dialog,
			/** 2 */
			Business_Rule,
			/** 3 */
			Action,
			/** 4 */
			Business_Process_Flow,
			/** 5 */
			Modern_Flow,
			/** 6 */
			Reserved
		}
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum CreateStage {
			/** 20 */
			Pre_operation,
			/** 40 */
			Post_operation
		}
		enum DeleteStage {
			/** 20 */
			Pre_operation,
			/** 40 */
			Post_operation
		}
		enum Mode {
			/** 0 */
			Background,
			/** 1 */
			Real_time
		}
		enum ProcessTriggerScope {
			/** 1 */
			Form,
			/** 2 */
			Entity
		}
		enum RunAs {
			/** 0 */
			Owner,
			/** 1 */
			Calling_User
		}
		enum Scope {
			/** 1 */
			User,
			/** 2 */
			Business_Unit,
			/** 3 */
			Parent_Child_Business_Units,
			/** 4 */
			Organization
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Activated
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Activated
		}
		enum Type {
			/** 1 */
			Definition,
			/** 2 */
			Activation,
			/** 3 */
			Template
		}
		enum UIFlowType {
			/** 0 */
			Desktop,
			/** 1 */
			Selenium_IDE,
			/** 2 */
			PowerShell
		}
		enum UpdateStage {
			/** 20 */
			Pre_operation,
			/** 40 */
			Post_operation
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}