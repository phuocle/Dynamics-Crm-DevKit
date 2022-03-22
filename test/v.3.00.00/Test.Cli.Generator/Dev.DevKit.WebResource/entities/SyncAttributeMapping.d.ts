//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Allowed Sync Directions */
		AllowedSyncDirection: number;
		/** CRM Attribute Name. */
		AttributeCRMName: string;
		/** Exchange Attribute Name. */
		AttributeExchangeName: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SyncAttributeMapping.ComponentState;
		/** Computed Properties. */
		ComputedProperties: string;
		/** Default Sync Direction */
		DefaultSyncDirection: OptionSet.SyncAttributeMapping.DefaultSyncDirection;
		/** Indicates whether the mapping is a computed property */
		readonly IsComputed: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Attribute Name. */
		MappingName: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Parent Sync-Attribute Mapping to which this mapping belongs */
		ParentSyncAttributeMappingId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier of the Sync-Attribute Mapping. */
		SyncAttributeMappingId: string;
		/** For internal use only. */
		readonly SyncAttributeMappingIdUnique: string;
		/** Unique identifier of profile to which this mapping belongs. */
		SyncAttributeMappingProfileId: string;
		/** Sync Direction */
		SyncDirection: OptionSet.SyncAttributeMapping.SyncDirection;
	}
}
declare namespace OptionSet {
	namespace SyncAttributeMapping {
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
		enum DefaultSyncDirection {
			/** 3 */
			Bidirectional,
			/** 0 */
			None,
			/** 2 */
			ToCRM,
			/** 1 */
			ToExchange
		}
		enum SyncDirection {
			/** 3 */
			Bidirectional,
			/** 0 */
			None,
			/** 2 */
			ToCRM,
			/** 1 */
			ToExchange
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}