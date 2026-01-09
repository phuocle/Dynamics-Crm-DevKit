//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SyncAttributeMappingApi {
		/**
		* DynamicsCrm.DevKit SyncAttributeMappingApi
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
		/** Allowed Sync Directions */
		AllowedSyncDirection: number | null;
		/** CRM Attribute Name. */
		AttributeCRMName: string | null;
		/** Exchange Attribute Name. */
		AttributeExchangeName: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SyncAttributeMapping.ComponentState | null;
		/** Computed Properties. */
		ComputedProperties: string | null;
		/** Default Sync Direction */
		DefaultSyncDirection: OptionSet.SyncAttributeMapping.DefaultSyncDirection | null;
		/** Indicates whether the mapping is a computed property */
		readonly IsComputed: boolean | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Attribute Name. */
		MappingName: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Parent Sync-Attribute Mapping to which this mapping belongs */
		ParentSyncAttributeMappingId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique identifier of the Sync-Attribute Mapping. */
		SyncAttributeMappingId: string | null;
		/** For internal use only. */
		readonly SyncAttributeMappingIdUnique: string | null;
		/** Unique identifier of profile to which this mapping belongs. */
		SyncAttributeMappingProfileId: string | null;
		/** Sync Direction */
		SyncDirection: OptionSet.SyncAttributeMapping.SyncDirection | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Allowed Sync Directions */
			readonly AllowedSyncDirection: string;
			/** CRM Attribute Name. */
			readonly AttributeCRMName: string;
			/** Exchange Attribute Name. */
			readonly AttributeExchangeName: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Computed Properties. */
			readonly ComputedProperties: string;
			/** Default Sync Direction */
			readonly DefaultSyncDirection: string;
			/** Indicates whether the mapping is a computed property */
			readonly IsComputed: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Attribute Name. */
			readonly MappingName: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Parent Sync-Attribute Mapping to which this mapping belongs */
			readonly ParentSyncAttributeMappingId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the Sync-Attribute Mapping. */
			readonly SyncAttributeMappingId: string;
			/** For internal use only. */
			readonly SyncAttributeMappingIdUnique: string;
			/** Unique identifier of profile to which this mapping belongs. */
			readonly SyncAttributeMappingProfileId: string;
			/** Sync Direction */
			readonly SyncDirection: string;
		}
	}
}
declare namespace OptionSet {
	namespace SyncAttributeMapping {
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
		enum DefaultSyncDirection {
			/** Bidirectional = 3*/
			Bidirectional = 3,
			/** None = 0*/
			None = 0,
			/** ToCRM = 2*/
			ToCRM = 2,
			/** ToExchange = 1*/
			ToExchange = 1
		}
		enum EntityTypeCode {
		}
		enum SyncDirection {
			/** Bidirectional = 3*/
			Bidirectional = 3,
			/** None = 0*/
			None = 0,
			/** ToCRM = 2*/
			ToCRM = 2,
			/** ToExchange = 1*/
			ToExchange = 1
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