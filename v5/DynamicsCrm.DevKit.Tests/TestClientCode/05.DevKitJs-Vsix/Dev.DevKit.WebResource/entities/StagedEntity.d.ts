//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class StagedEntityApi {
		/**
		* DynamicsCrm.DevKit StagedEntityApi
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
		/** The collection name of the staged entity. */
		CollectionName: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** The ID of the data provider for virtual entity. */
		DataproviderId: string | null;
		/** The ID of the data source for virtual entity. */
		DatasourceId: string | null;
		/** The entity decription with properties for delta update */
		EntityDescription: string | null;
		/** The entity set name of the staged entity. */
		EntitySetName: string | null;
		/** The external collection name of the staged entity for VT scenario. */
		ExternalCollectionName: string | null;
		/** The external name for virtual entity. */
		ExternalName: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** The logical collection name of the staged entity. */
		LogicalCollectionName: string | null;
		/** The logical name of the staged entity. */
		LogicalName: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the staged entity. */
		Name: string | null;
		/** The original localized collection name of the staged entity. */
		OriginalLocalizedCollectionName: string | null;
		/** The localized description of the entity. */
		OriginalLocalizedDescription: string | null;
		/** The original localized name of the staged entity. */
		OriginalLocalizedName: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** The physical name of the staged entity. */
		PhysicalName: string | null;
		/** Unique identifier for entity instances */
		StagedEntityId: string | null;
		/** Status of the Staged Entity */
		statecode: OptionSet.StagedEntity.statecode | null;
		/** Reason for the status of the Staged Entity */
		statuscode: OptionSet.StagedEntity.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The collection name of the staged entity. */
			readonly CollectionName: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The ID of the data provider for virtual entity. */
			readonly DataproviderId: string;
			/** The ID of the data source for virtual entity. */
			readonly DatasourceId: string;
			/** The entity decription with properties for delta update */
			readonly EntityDescription: string;
			/** The entity set name of the staged entity. */
			readonly EntitySetName: string;
			/** The external collection name of the staged entity for VT scenario. */
			readonly ExternalCollectionName: string;
			/** The external name for virtual entity. */
			readonly ExternalName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** The logical collection name of the staged entity. */
			readonly LogicalCollectionName: string;
			/** The logical name of the staged entity. */
			readonly LogicalName: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the staged entity. */
			readonly Name: string;
			/** The original localized collection name of the staged entity. */
			readonly OriginalLocalizedCollectionName: string;
			/** The localized description of the entity. */
			readonly OriginalLocalizedDescription: string;
			/** The original localized name of the staged entity. */
			readonly OriginalLocalizedName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** The physical name of the staged entity. */
			readonly PhysicalName: string;
			/** Unique identifier for entity instances */
			readonly StagedEntityId: string;
			/** Status of the Staged Entity */
			readonly statecode: string;
			/** Reason for the status of the Staged Entity */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace StagedEntity {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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