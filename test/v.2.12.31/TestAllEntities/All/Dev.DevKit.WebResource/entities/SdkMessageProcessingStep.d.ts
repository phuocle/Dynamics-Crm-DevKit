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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Indicates whether the asynchronous system job is automatically deleted on completion. */
		AsyncAutoDelete: DevKit.WebApi.BooleanValue;
		/** Identifies whether a SDK Message Processing Step type will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly  */
		CanUseReadOnlyConnection: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		Category: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Step-specific configuration for the plug-in type. Passed to the plug-in constructor at run time. */
		Configuration: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the SDK message processing step. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message processing step was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sdkmessageprocessingstep. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customization level of the SDK message processing step. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Description of the SDK message processing step. */
		Description: DevKit.WebApi.StringValue;
		/** Configuration for sending pipeline events to the Event Expander service. */
		EventExpander: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated event handler. */
		eventhandler_plugintype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated event handler. */
		eventhandler_serviceendpoint: DevKit.WebApi.LookupValue;
		/** Comma-separated list of attributes. If at least one of these attributes is modified, the plug-in should execute. */
		FilteringAttributes: DevKit.WebApi.StringValue;
		/** Unique identifier of the user to impersonate context when step is executed. */
		ImpersonatingUserId: DevKit.WebApi.LookupValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Run-time mode of execution, for example, synchronous or asynchronous. */
		Mode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the SDK message processing step. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message processing step was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sdkmessageprocessingstep. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of SdkMessage processing step. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the SDK message processing step is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Processing order within the stage. */
		Rank: DevKit.WebApi.IntegerValue;
		/** For internal use only. Holds miscellaneous properties related to runtime integration. */
		RuntimeIntegrationProperties: DevKit.WebApi.StringValue;
		/** Unique identifier of the SDK message filter. */
		SdkMessageFilterId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the SDK message. */
		SdkMessageId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the SDK message processing step entity. */
		SdkMessageProcessingStepId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the SDK message processing step. */
		SdkMessageProcessingStepIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the Sdk message processing step secure configuration. */
		SdkMessageProcessingStepSecureConfigId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Stage in the execution pipeline that the SDK message processing step is in. */
		Stage: DevKit.WebApi.OptionSetValue;
		/** Status of the SDK message processing step. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the SDK message processing step. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Deployment that the SDK message processing step should be executed on; server, client, or both. */
		SupportedDeployment: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Number that identifies a specific revision of the SDK message processing step.  */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
		enum InvocationSource {
			/** 1 */
			Child,
			/** -1 */
			Internal,
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}