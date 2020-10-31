//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	class EntityApi {
		/**
		* DynamicsCrm.DevKit EntityApi
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
		/** The address table name of this entity. */
		AddressTableName: DevKit.WebApi.StringValue;
		/** The base table name of this entity. */
		BaseTableName: DevKit.WebApi.StringValue;
		/** The collection name of this entity. */
		CollectionName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the entity. */
		EntityId: DevKit.WebApi.GuidValue;
		/** The entity set name of this entity. */
		EntitySetName: DevKit.WebApi.StringValue;
		/** The extension table name of this entity. */
		ExtensionTableName: DevKit.WebApi.StringValue;
		/** The external collection name of this entity. */
		ExternalCollectionName: DevKit.WebApi.StringValue;
		/** The external name of this entity. */
		ExternalName: DevKit.WebApi.StringValue;
		/** The logical collection name of this entity. */
		LogicalCollectionName: DevKit.WebApi.StringValue;
		/** The logical name of this entity. */
		LogicalName: DevKit.WebApi.StringValue;
		/** The name of this Entity. */
		Name: DevKit.WebApi.StringValue;
		/** The original localized collection name of this entity. */
		OriginalLocalizedCollectionName: DevKit.WebApi.StringValue;
		/** The original localized name of this entity. */
		OriginalLocalizedName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** The parent controlling attribute name of this entity. */
		ParentControllingAttributeName: DevKit.WebApi.StringValue;
		/** The physical name of this entity. */
		PhysicalName: DevKit.WebApi.StringValue;
		/** The Report view name of this entity. */
		ReportViewName: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Entity {
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