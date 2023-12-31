//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageProcessingStepApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepApi
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
		/** Indicates whether the asynchronous system job is automatically deleted on completion. */
		AsyncAutoDelete: boolean;
		/** Identifies whether a SDK Message Processing Step type will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly  */
		CanUseReadOnlyConnection: boolean;
		/** For internal use only. */
		Category: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageProcessingStep.ComponentState;
		/** Step-specific configuration for the plug-in type. Passed to the plug-in constructor at run time. */
		Configuration: string;
		/** Unique identifier of the user who created the SDK message processing step. */
		readonly CreatedBy: string;
		/** Date and time when the SDK message processing step was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstep. */
		readonly CreatedOnBehalfBy: string;
		/** Customization level of the SDK message processing step. */
		readonly CustomizationLevel: number;
		/** Description of the SDK message processing step. */
		Description: string;
		/** Configuration for sending pipeline events to the Event Expander service. */
		EventExpander: string;
		/** Unique identifier of the associated event handler. */
		eventhandler_plugintype: string;
		/** Unique identifier of the associated event handler. */
		eventhandler_serviceendpoint: string;
		/** Comma-separated list of attributes. If at least one of these attributes is modified, the plug-in should execute. */
		FilteringAttributes: string;
		/** Unique identifier of the user to impersonate context when step is executed. */
		ImpersonatingUserId: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Identifies if a plug-in should be executed from a parent pipeline, a child pipeline, or both. */
		InvocationSource: OptionSet.SdkMessageProcessingStep.InvocationSource;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Run-time mode of execution, for example, synchronous or asynchronous. */
		Mode: OptionSet.SdkMessageProcessingStep.Mode;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		readonly ModifiedBy: string;
		/** Date and time when the SDK message processing step was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstep. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of SdkMessage processing step. */
		Name: string;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the plug-in type associated with the step. */
		PluginTypeId: string;
		/** Processing order within the stage. */
		Rank: number;
		/** For internal use only. Holds miscellaneous properties related to runtime integration. */
		RuntimeIntegrationProperties: string;
		/** Unique identifier of the SDK message filter. */
		SdkMessageFilterId: string;
		/** Unique identifier of the SDK message. */
		SdkMessageId: string;
		/** Unique identifier of the SDK message processing step entity. */
		SdkMessageProcessingStepId: string;
		/** Unique identifier of the SDK message processing step. */
		readonly SdkMessageProcessingStepIdUnique: string;
		/** Unique identifier of the Sdk message processing step secure configuration. */
		SdkMessageProcessingStepSecureConfigId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Stage in the execution pipeline that the SDK message processing step is in. */
		Stage: OptionSet.SdkMessageProcessingStep.Stage;
		/** Status of the SDK message processing step. */
		StateCode: OptionSet.SdkMessageProcessingStep.StateCode;
		/** Reason for the status of the SDK message processing step. */
		StatusCode: OptionSet.SdkMessageProcessingStep.StatusCode;
		/** Deployment that the SDK message processing step should be executed on; server, client, or both. */
		SupportedDeployment: OptionSet.SdkMessageProcessingStep.SupportedDeployment;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Number that identifies a specific revision of the SDK message processing step.  */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates whether the asynchronous system job is automatically deleted on completion. */
			readonly AsyncAutoDelete: string;
			/** Identifies whether a SDK Message Processing Step type will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly  */
			readonly CanUseReadOnlyConnection: string;
			/** For internal use only. */
			readonly Category: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Step-specific configuration for the plug-in type. Passed to the plug-in constructor at run time. */
			readonly Configuration: string;
			/** Unique identifier of the user who created the SDK message processing step. */
			readonly CreatedBy: string;
			/** Date and time when the SDK message processing step was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sdkmessageprocessingstep. */
			readonly CreatedOnBehalfBy: string;
			/** Customization level of the SDK message processing step. */
			readonly CustomizationLevel: string;
			/** Description of the SDK message processing step. */
			readonly Description: string;
			/** Configuration for sending pipeline events to the Event Expander service. */
			readonly EventExpander: string;
			/** Unique identifier of the associated event handler. */
			readonly eventhandler_plugintype: string;
			/** Unique identifier of the associated event handler. */
			readonly eventhandler_serviceendpoint: string;
			/** Comma-separated list of attributes. If at least one of these attributes is modified, the plug-in should execute. */
			readonly FilteringAttributes: string;
			/** Unique identifier of the user to impersonate context when step is executed. */
			readonly ImpersonatingUserId: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Identifies if a plug-in should be executed from a parent pipeline, a child pipeline, or both. */
			readonly InvocationSource: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Information that specifies whether this component should be hidden. */
			readonly IsHidden: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Run-time mode of execution, for example, synchronous or asynchronous. */
			readonly Mode: string;
			/** Unique identifier of the user who last modified the SDK message processing step. */
			readonly ModifiedBy: string;
			/** Date and time when the SDK message processing step was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstep. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of SdkMessage processing step. */
			readonly Name: string;
			/** Unique identifier of the organization with which the SDK message processing step is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the plug-in type associated with the step. */
			readonly PluginTypeId: string;
			/** Processing order within the stage. */
			readonly Rank: string;
			/** For internal use only. Holds miscellaneous properties related to runtime integration. */
			readonly RuntimeIntegrationProperties: string;
			/** Unique identifier of the SDK message filter. */
			readonly SdkMessageFilterId: string;
			/** Unique identifier of the SDK message. */
			readonly SdkMessageId: string;
			/** Unique identifier of the SDK message processing step entity. */
			readonly SdkMessageProcessingStepId: string;
			/** Unique identifier of the SDK message processing step. */
			readonly SdkMessageProcessingStepIdUnique: string;
			/** Unique identifier of the Sdk message processing step secure configuration. */
			readonly SdkMessageProcessingStepSecureConfigId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Stage in the execution pipeline that the SDK message processing step is in. */
			readonly Stage: string;
			/** Status of the SDK message processing step. */
			readonly StateCode: string;
			/** Reason for the status of the SDK message processing step. */
			readonly StatusCode: string;
			/** Deployment that the SDK message processing step should be executed on; server, client, or both. */
			readonly SupportedDeployment: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Number that identifies a specific revision of the SDK message processing step.  */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStep {
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
		enum EventHandlerTypeCode {
		}
		enum InvocationSource {
			/** 1 */
			Child,
			/** 0 */
			Parent
		}
		enum Mode {
			/** 1 */
			Asynchronous,
			/** 0 */
			Synchronous
		}
		enum Stage {
			/** 55 */
			Final_Post_operation_For_internal_use_only,
			/** 5 */
			Initial_Pre_operation_For_internal_use_only,
			/** 45 */
			Internal_Post_operation_After_External_Plugins_For_internal_use_only,
			/** 35 */
			Internal_Post_operation_Before_External_Plugins_For_internal_use_only,
			/** 25 */
			Internal_Pre_operation_After_External_Plugins_For_internal_use_only,
			/** 15 */
			Internal_Pre_operation_Before_External_Plugins_For_internal_use_only,
			/** 30 */
			Main_Operation_For_internal_use_only,
			/** 90 */
			Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only,
			/** 40 */
			Post_operation,
			/** 50 */
			Post_operation_Deprecated,
			/** 80 */
			Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only,
			/** 20 */
			Pre_operation,
			/** 10 */
			Pre_validation
		}
		enum StateCode {
			/** 1 */
			Disabled,
			/** 0 */
			Enabled
		}
		enum StatusCode {
			/** 2 */
			Disabled,
			/** 1 */
			Enabled
		}
		enum SupportedDeployment {
			/** 2 */
			Both,
			/** 1 */
			Microsoft_Dynamics_365_Client_for_Outlook_Only,
			/** 0 */
			Server_Only
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}