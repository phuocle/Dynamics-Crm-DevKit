//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SdkMessageProcessingStepApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepApi
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
		/** Indicates whether the asynchronous system job is automatically deleted on completion. */
		AsyncAutoDelete: boolean | null;
		CanBeBypassed: boolean | null;
		/** Identifies whether a SDK Message Processing Step type will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly  */
		CanUseReadOnlyConnection: boolean | null;
		/** For internal use only. */
		Category: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessageProcessingStep.ComponentState | null;
		/** Step-specific configuration for the plug-in type. Passed to the plug-in constructor at run time. */
		Configuration: string | null;
		/** Unique identifier of the user who created the SDK message processing step. */
		readonly CreatedBy: string | null;
		/** Date and time when the SDK message processing step was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstep. */
		readonly CreatedOnBehalfBy: string | null;
		/** Customization level of the SDK message processing step. */
		readonly CustomizationLevel: number | null;
		/** Description of the SDK message processing step. */
		Description: string | null;
		/** EnablePluginProfiler */
		EnablePluginProfiler: boolean | null;
		/** Configuration for sending pipeline events to the Event Expander service. */
		EventExpander: string | null;
		/** Comma-separated list of attributes. If at least one of these attributes is modified, the plug-in should execute. */
		FilteringAttributes: string | null;
		/** Unique identifier for fxexpression associated with SdkMessageProcessingStep. */
		FxExpressionId: string | null;
		/** Unique identifier of the user to impersonate context when step is executed. */
		ImpersonatingUserId: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Identifies if a plug-in should be executed from a parent pipeline, a child pipeline, or both. */
		InvocationSource: OptionSet.SdkMessageProcessingStep.InvocationSource | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Run-time mode of execution, for example, synchronous or asynchronous. */
		Mode: OptionSet.SdkMessageProcessingStep.Mode | null;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		readonly ModifiedBy: string | null;
		/** Date and time when the SDK message processing step was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstep. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of SdkMessage processing step. */
		Name: string | null;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the plug-in type associated with the step. */
		PluginTypeId: string | null;
		/** Unique identifier for powerfxrule associated with SdkMessageProcessingStep. */
		PowerfxRuleId: string | null;
		/** Processing order within the stage. */
		Rank: number | null;
		/** For internal use only. Holds miscellaneous properties related to runtime integration. */
		RuntimeIntegrationProperties: string | null;
		/** Unique identifier of the SDK message filter. */
		SdkMessageFilterId: string | null;
		/** Unique identifier of the SDK message. */
		SdkMessageId: string | null;
		/** Unique identifier of the SDK message processing step entity. */
		SdkMessageProcessingStepId: string | null;
		/** Unique identifier of the SDK message processing step. */
		readonly SdkMessageProcessingStepIdUnique: string | null;
		/** Unique identifier of the Sdk message processing step secure configuration. */
		SdkMessageProcessingStepSecureConfigId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Stage in the execution pipeline that the SDK message processing step is in. */
		Stage: OptionSet.SdkMessageProcessingStep.Stage | null;
		/** Status of the SDK message processing step. */
		StateCode: OptionSet.SdkMessageProcessingStep.StateCode | null;
		/** Reason for the status of the SDK message processing step. */
		StatusCode: OptionSet.SdkMessageProcessingStep.StatusCode | null;
		/** Deployment that the SDK message processing step should be executed on; server, client, or both. */
		SupportedDeployment: OptionSet.SdkMessageProcessingStep.SupportedDeployment | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Number that identifies a specific revision of the SDK message processing step.  */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Indicates whether the asynchronous system job is automatically deleted on completion. */
			readonly AsyncAutoDelete: string;
			readonly CanBeBypassed: string;
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
			/** EnablePluginProfiler */
			readonly EnablePluginProfiler: string;
			/** Configuration for sending pipeline events to the Event Expander service. */
			readonly EventExpander: string;
			/** Comma-separated list of attributes. If at least one of these attributes is modified, the plug-in should execute. */
			readonly FilteringAttributes: string;
			/** Unique identifier for fxexpression associated with SdkMessageProcessingStep. */
			readonly FxExpressionId: string;
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
			/** Unique identifier for powerfxrule associated with SdkMessageProcessingStep. */
			readonly PowerfxRuleId: string;
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum EventHandlerTypeCode {
		}
		enum InvocationSource {
			/** Child = 1*/
			Child = 1,
			/** Parent = 0*/
			Parent = 0
		}
		enum Mode {
			/** Asynchronous = 1*/
			Asynchronous = 1,
			/** Synchronous = 0*/
			Synchronous = 0
		}
		enum Stage {
			/** Final_Post_operation_For_internal_use_only = 55*/
			Final_Post_operation_For_internal_use_only = 55,
			/** Initial_Pre_operation_For_internal_use_only = 5*/
			Initial_Pre_operation_For_internal_use_only = 5,
			/** Internal_Post_operation_After_External_Plugins_For_internal_use_only = 45*/
			Internal_Post_operation_After_External_Plugins_For_internal_use_only = 45,
			/** Internal_Post_operation_Before_External_Plugins_For_internal_use_only = 35*/
			Internal_Post_operation_Before_External_Plugins_For_internal_use_only = 35,
			/** Internal_Pre_operation_After_External_Plugins_For_internal_use_only = 25*/
			Internal_Pre_operation_After_External_Plugins_For_internal_use_only = 25,
			/** Internal_Pre_operation_Before_External_Plugins_For_internal_use_only = 15*/
			Internal_Pre_operation_Before_External_Plugins_For_internal_use_only = 15,
			/** Main_Operation_For_internal_use_only = 30*/
			Main_Operation_For_internal_use_only = 30,
			/** Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only = 90*/
			Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only = 90,
			/** Post_operation = 40*/
			Post_operation = 40,
			/** Post_operation_Deprecated = 50*/
			Post_operation_Deprecated = 50,
			/** Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only = 80*/
			Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only = 80,
			/** Pre_operation = 20*/
			Pre_operation = 20,
			/** Pre_validation = 10*/
			Pre_validation = 10
		}
		enum StateCode {
			/** Disabled = 1*/
			Disabled = 1,
			/** Enabled = 0*/
			Enabled = 0
		}
		enum StatusCode {
			/** Disabled = 2*/
			Disabled = 2,
			/** Enabled = 1*/
			Enabled = 1
		}
		enum SupportedDeployment {
			/** Both = 2*/
			Both = 2,
			/** Microsoft_Dynamics_365_Client_for_Outlook_Only = 1*/
			Microsoft_Dynamics_365_Client_for_Outlook_Only = 1,
			/** Server_Only = 0*/
			Server_Only = 0
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