//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class unstructuredfilesearchrecordstatusApi {
		/**
		* DynamicsCrm.DevKit unstructuredfilesearchrecordstatusApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.unstructuredfilesearchrecordstatus.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Source file data id. */
		FileId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Indexing issue/error details. */
		IndexingIssueDetails: string | null;
		/** Indexing issue type for failed file data. */
		IndexingIssueType: string | null;
		IndexingStatus: OptionSet.unstructuredfilesearchrecordstatus.IndexingStatus | null;
		/** Ingesting all file data are done in batched, like folders. Therefore, this can be used as a folderid or any ids to indicate batches of ingestion. */
		IngestionBatchId: string | null;
		/** Ingestion issue/error details. */
		IngestionIssueDetails: string | null;
		/** Ingestion issue type for failed file data refresh */
		IngestionIssueType: string | null;
		IngestionStatus: OptionSet.unstructuredfilesearchrecordstatus.IngestionStatus | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Last Indexing Timestamp */
		LastIndexingTimestamp_UtcDateAndTime: Date | null;
		/** Last Ingestion Refresh Timestamp for file data or file content. */
		LastIngestionTimestamp_UtcDateAndTime: Date | null;
		/** Last Successful Indexing Timestamp */
		LastSuccessfulIndexingTimestamp_UtcDateAndTime: Date | null;
		/** Last Successful Ingestion Timestamp */
		LastSuccessfulIngestionTimestamp_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** SearchConfigurationId for a knowledge sources */
		SearchConfigurationId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Table1 */
		statecode: OptionSet.unstructuredfilesearchrecordstatus.statecode | null;
		/** Reason for the status of the Table1 */
		statuscode: OptionSet.unstructuredfilesearchrecordstatus.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Lookup to UnstructuredFileSearchRecord Table */
		UnstructuredFileSearchRecordId: string | null;
		/** Unique identifier for entity instances */
		unstructuredfilesearchrecordstatusId: string | null;
		/** Unstructured File Search Record Status Name */
		UnstructuredFileSearchRecordStatusName: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Source file data id. */
			readonly FileId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indexing issue/error details. */
			readonly IndexingIssueDetails: string;
			/** Indexing issue type for failed file data. */
			readonly IndexingIssueType: string;
			readonly IndexingStatus: string;
			/** Ingesting all file data are done in batched, like folders. Therefore, this can be used as a folderid or any ids to indicate batches of ingestion. */
			readonly IngestionBatchId: string;
			/** Ingestion issue/error details. */
			readonly IngestionIssueDetails: string;
			/** Ingestion issue type for failed file data refresh */
			readonly IngestionIssueType: string;
			readonly IngestionStatus: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Last Indexing Timestamp */
			readonly LastIndexingTimestamp_UtcDateAndTime: string;
			/** Last Ingestion Refresh Timestamp for file data or file content. */
			readonly LastIngestionTimestamp_UtcDateAndTime: string;
			/** Last Successful Indexing Timestamp */
			readonly LastSuccessfulIndexingTimestamp_UtcDateAndTime: string;
			/** Last Successful Ingestion Timestamp */
			readonly LastSuccessfulIngestionTimestamp_UtcDateAndTime: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** SearchConfigurationId for a knowledge sources */
			readonly SearchConfigurationId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Table1 */
			readonly statecode: string;
			/** Reason for the status of the Table1 */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Lookup to UnstructuredFileSearchRecord Table */
			readonly UnstructuredFileSearchRecordId: string;
			/** Unique identifier for entity instances */
			readonly unstructuredfilesearchrecordstatusId: string;
			/** Unstructured File Search Record Status Name */
			readonly UnstructuredFileSearchRecordStatusName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace unstructuredfilesearchrecordstatus {
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
		enum IndexingStatus {
			/** Archived = 2*/
			Archived = 2,
			/** Error = 5*/
			Error = 5,
			/** Excluded = 7*/
			Excluded = 7,
			/** In_Progress = 4*/
			In_Progress = 4,
			/** Queued = 1*/
			Queued = 1,
			/** Ready = 3*/
			Ready = 3,
			/** Skipped = 6*/
			Skipped = 6
		}
		enum IngestionStatus {
			/** Archived = 2*/
			Archived = 2,
			/** Error = 5*/
			Error = 5,
			/** Excluded = 7*/
			Excluded = 7,
			/** In_Progress = 4*/
			In_Progress = 4,
			/** Queued = 1*/
			Queued = 1,
			/** Ready = 3*/
			Ready = 3,
			/** Skipped = 6*/
			Skipped = 6
		}
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