//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class StagedEntityApi {
		/**
		* DynamicsCrm.DevKit StagedEntityApi
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
		/** The collection name of the staged entity. */
		CollectionName: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The ID of the data provider for virtual entity. */
		DataproviderId: string;
		/** The ID of the data source for virtual entity. */
		DatasourceId: string;
		/** The entity decription with properties for delta update */
		EntityDescription: string;
		/** The entity set name of the staged entity. */
		EntitySetName: string;
		/** The external collection name of the staged entity for VT scenario. */
		ExternalCollectionName: string;
		/** The external name for virtual entity. */
		ExternalName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** The logical collection name of the staged entity. */
		LogicalCollectionName: string;
		/** The logical name of the staged entity. */
		LogicalName: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the staged entity. */
		Name: string;
		/** The original localized collection name of the staged entity. */
		OriginalLocalizedCollectionName: string;
		/** The localized description of the entity. */
		OriginalLocalizedDescription: string;
		/** The original localized name of the staged entity. */
		OriginalLocalizedName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** The physical name of the staged entity. */
		PhysicalName: string;
		/** Unique identifier for entity instances */
		StagedEntityId: string;
		/** Status of the Staged Entity */
		statecode: OptionSet.StagedEntity.statecode;
		/** Reason for the status of the Staged Entity */
		statuscode: OptionSet.StagedEntity.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}