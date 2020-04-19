//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class WorkflowDependencyApi {
		/**
		* DynamicsCrm.DevKit WorkflowDependencyApi
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
		/** Unique identifier of the user who created the process dependency. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the process dependency was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the process dependency. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the entity used in the process. */
		CustomEntityName: DevKit.WebApi.StringValue;
		/** Name of the attribute used in the process. */
		DependentAttributeName: DevKit.WebApi.StringValue;
		/** Name of the entity used in the process. */
		DependentEntityName: DevKit.WebApi.StringValue;
		/** Comma-separated list of attributes that will be passed to process instance. */
		EntityAttributes: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the process dependency. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the process dependency was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the process dependency. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the process dependency. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the process dependency. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Name of the process parameter. */
		ParameterName: DevKit.WebApi.StringValue;
		/** Fully qualified name of the CLR type of the local parameter. */
		ParameterType: DevKit.WebApi.StringValue;
		/** Attribute of the primary entity that specifies related entity. */
		RelatedAttributeName: DevKit.WebApi.StringValue;
		/** Name of the related entity. */
		RelatedEntityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the SDK message. */
		SdkMessageId: DevKit.WebApi.LookupValue;
		/** Type of the process dependency. */
		Type: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the process dependency. */
		WorkflowDependencyId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the process with which the dependency is associated. */
		WorkflowId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace WorkflowDependency {
		enum Type {
			/** 1 */
			Sdk_association,
			/** 2 */
			Local_parameter,
			/** 3 */
			Primary_entity,
			/** 4 */
			Primary_entity_before_SDK_operation,
			/** 5 */
			Primary_entity_after_SDK_operation,
			/** 6 */
			Related_entity,
			/** 7 */
			Custom_entity_definition_that_workflow_depends_on,
			/** 8 */
			Attribute_definition_that_workflow_depends_on,
			/** 9 */
			Argument_Entity_that_workflow_depends_on
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}