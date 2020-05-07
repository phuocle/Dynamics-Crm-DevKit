//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	class SyncAttributeMappingApi {
		/**
		* DynamicsCrm.DevKit SyncAttributeMappingApi
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
		/** Allowed Sync Directions */
		AllowedSyncDirection: DevKit.WebApi.IntegerValue;
		/** CRM Attribute Name. */
		AttributeCRMName: DevKit.WebApi.StringValue;
		/** Exchange Attribute Name. */
		AttributeExchangeName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Computed Properties. */
		ComputedProperties: DevKit.WebApi.StringValue;
		/** Default Sync Direction */
		DefaultSyncDirection: DevKit.WebApi.OptionSetValue;
		/** Indicates whether the mapping is a computed property */
		IsComputed: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Attribute Name. */
		MappingName: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Parent Sync-Attribute Mapping to which this mapping belongs */
		ParentSyncAttributeMappingId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the Sync-Attribute Mapping. */
		SyncAttributeMappingId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SyncAttributeMappingIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of profile to which this mapping belongs. */
		SyncAttributeMappingProfileId: DevKit.WebApi.LookupValue;
		/** Sync Direction */
		SyncDirection: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace SyncAttributeMapping {
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
		enum DefaultSyncDirection {
			/** 0 */
			None,
			/** 1 */
			ToExchange,
			/** 2 */
			ToCRM,
			/** 3 */
			Bidirectional
		}
		enum SyncDirection {
			/** 0 */
			None,
			/** 1 */
			ToExchange,
			/** 2 */
			ToCRM,
			/** 3 */
			Bidirectional
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