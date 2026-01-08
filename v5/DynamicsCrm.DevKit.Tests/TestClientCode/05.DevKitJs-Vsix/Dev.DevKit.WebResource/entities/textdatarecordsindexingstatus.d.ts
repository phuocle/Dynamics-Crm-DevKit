//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class textdatarecordsindexingstatusApi {
		/**
		* DynamicsCrm.DevKit textdatarecordsindexingstatusApi
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
		/** Attribute name. */
		AttributeName: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Entity name that identifies which entity does this record belong to. */
		EntityName2: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unstructured / Text data indexing status of entity - attribute - recordId combination. */
		IndexingStatus: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the record. */
		Name: string | null;
		/** Object type code of the entity that identifies which entity does this record belong to. */
		ObjectTypeCode: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string | null;
		/** Created on of the record in CRM / Dataverse. */
		RecordCreatedOnInCrm: string | null;
		/** Record Id */
		RecordId: string | null;
		/** Modified on of the record in CRM / Dataverse. */
		RecordModifiedOnInCrm: string | null;
		/** Size of record in bytes in CRM */
		RecordSizeInBytesInCrm: number | null;
		/** Size of record in bytes in Unstructured / Text data search index */
		RecordSizeInBytesInTextDataIndex: number | null;
		/** Version number of the record. */
		RecordVersionNumber: number | null;
		/** Unstructured / Text data index name. */
		TextDataIndexName: string | null;
		/** Unique identifier for TextDataRecordsIndexingStatus */
		textdatarecordsindexingstatusId: string | null;
		/** Time to live in seconds. */
		TTLInSeconds: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Attribute name. */
			readonly AttributeName: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Entity name that identifies which entity does this record belong to. */
			readonly EntityName2: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unstructured / Text data indexing status of entity - attribute - recordId combination. */
			readonly IndexingStatus: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the record. */
			readonly Name: string;
			/** Object type code of the entity that identifies which entity does this record belong to. */
			readonly ObjectTypeCode: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Created on of the record in CRM / Dataverse. */
			readonly RecordCreatedOnInCrm: string;
			/** Record Id */
			readonly RecordId: string;
			/** Modified on of the record in CRM / Dataverse. */
			readonly RecordModifiedOnInCrm: string;
			/** Size of record in bytes in CRM */
			readonly RecordSizeInBytesInCrm: string;
			/** Size of record in bytes in Unstructured / Text data search index */
			readonly RecordSizeInBytesInTextDataIndex: string;
			/** Version number of the record. */
			readonly RecordVersionNumber: string;
			/** Unstructured / Text data index name. */
			readonly TextDataIndexName: string;
			/** Unique identifier for TextDataRecordsIndexingStatus */
			readonly textdatarecordsindexingstatusId: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace textdatarecordsindexingstatus {
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