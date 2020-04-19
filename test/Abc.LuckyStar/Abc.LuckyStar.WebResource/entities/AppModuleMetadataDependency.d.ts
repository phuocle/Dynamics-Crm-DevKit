//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class AppModuleMetadataDependencyApi {
		/**
		* DynamicsCrm.DevKit AppModuleMetadataDependencyApi
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
		AppModuleMetadataDependencyId: DevKit.WebApi.GuidValue;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		DependentComponentId: DevKit.WebApi.GuidValue;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		RequiredComponentId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		RequiredComponentInternalId: DevKit.WebApi.StringValue;
		/** For internal use only. */
		RequiredComponentSubType: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		RequiredComponentType: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		RequiredComponentVersion: DevKit.WebApi.BigIntValue;
		/** For internal use only. */
		State: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace AppModuleMetadataDependency {
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