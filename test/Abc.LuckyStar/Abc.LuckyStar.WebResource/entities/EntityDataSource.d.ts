//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class EntityDataSourceApi {
		/**
		* DynamicsCrm.DevKit EntityDataSourceApi
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
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** JSON data representing values from a data source entity as individual fields. */
		ConnectionDefinition: DevKit.WebApi.StringValue;
		/** JSON data representing secrets in a data source entity as individual fields. */
		ConnectionDefinitionSecrets: DevKit.WebApi.StringValue;
		/** Enter additional information to describe the environment this data source targets and the purpose of this system. */
		Description: DevKit.WebApi.StringValue;
		/** Choose the entity dataprovider for the entity datasource. */
		EntityDataProviderId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the Data Source Id */
		EntityDataSourceId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		EntityDataSourceIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Entity Logical Name */
		_EntityName: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Name of this data source. This name appears in the data source drop-down when creating a new entity. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace EntityDataSource {
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