//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class synapselinkexternaltablestateApi {
		/**
		* DynamicsCrm.DevKit synapselinkexternaltablestateApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier for Data Lake Folder associated with Synapse Link External Table State. */
		datalakefolder: string | null;
		/** Name of the entity */
		EntityName2: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** State of lakehouse shortcut creation for an entity */
		LakehouseShortcutState: OptionSet.synapselinkexternaltablestate.LakehouseShortcutState | null;
		/** Last SynchronizedOn Date time */
		LastSynchronizedOn_UtcDateAndTime: Date | null;
		/** Last data synchronization state */
		LastSyncState: OptionSet.synapselinkexternaltablestate.LastSyncState | null;
		/** Maximum record version synchronized to the lake */
		MaxRecordVersion: number | null;
		/** Metadata version */
		MetadataVersion: string | null;
		/** Last Synced Minimum Data Version */
		MinSyncedDataVersion: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Record count synchronized to lake */
		RecordCount: number | null;
		/** Schema modified on date-time */
		SchemaModifiedOn_UtcDateAndTime: Date | null;
		/** Source Record Count */
		SourceRecordCount: number | null;
		/** Status of the Synapse Link External Table State */
		statecode: OptionSet.synapselinkexternaltablestate.statecode | null;
		/** Reason for the status of the Synapse Link External Table State */
		statuscode: OptionSet.synapselinkexternaltablestate.statuscode | null;
		/** Synapse database name */
		SynapseDatabaseName: string | null;
		/** Unique identifier for entity instances */
		synapselinkexternaltablestateId: string | null;
		/** Synapse workspace name */
		SynapseWorkspaceName: string | null;
		/** External table state */
		TableState: OptionSet.synapselinkexternaltablestate.TableState | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** State of Trino registration for an entity */
		TrinoState: OptionSet.synapselinkexternaltablestate.TrinoState | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier for Data Lake Folder associated with Synapse Link External Table State. */
			readonly datalakefolder: string;
			/** Name of the entity */
			readonly EntityName2: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** State of lakehouse shortcut creation for an entity */
			readonly LakehouseShortcutState: string;
			/** Last SynchronizedOn Date time */
			readonly LastSynchronizedOn_UtcDateAndTime: string;
			/** Last data synchronization state */
			readonly LastSyncState: string;
			/** Maximum record version synchronized to the lake */
			readonly MaxRecordVersion: string;
			/** Metadata version */
			readonly MetadataVersion: string;
			/** Last Synced Minimum Data Version */
			readonly MinSyncedDataVersion: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Record count synchronized to lake */
			readonly RecordCount: string;
			/** Schema modified on date-time */
			readonly SchemaModifiedOn_UtcDateAndTime: string;
			/** Source Record Count */
			readonly SourceRecordCount: string;
			/** Status of the Synapse Link External Table State */
			readonly statecode: string;
			/** Reason for the status of the Synapse Link External Table State */
			readonly statuscode: string;
			/** Synapse database name */
			readonly SynapseDatabaseName: string;
			/** Unique identifier for entity instances */
			readonly synapselinkexternaltablestateId: string;
			/** Synapse workspace name */
			readonly SynapseWorkspaceName: string;
			/** External table state */
			readonly TableState: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** State of Trino registration for an entity */
			readonly TrinoState: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace synapselinkexternaltablestate {
		enum LakehouseShortcutState {
			/** Created = 1*/
			Created = 1,
			/** Deleted = 3*/
			Deleted = 3,
			/** Failed = 2*/
			Failed = 2,
			/** In_Progress = 4*/
			In_Progress = 4,
			/** Not_Created = 0*/
			Not_Created = 0
		}
		enum LastSyncState {
			/** Created = 1*/
			Created = 1,
			/** Deleted = 3*/
			Deleted = 3,
			/** Failed = 2*/
			Failed = 2,
			/** In_Progress = 4*/
			In_Progress = 4,
			/** Not_Created = 0*/
			Not_Created = 0
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
		enum TableState {
			/** Created = 1*/
			Created = 1,
			/** Deleted = 3*/
			Deleted = 3,
			/** Failed = 2*/
			Failed = 2,
			/** In_Progress = 4*/
			In_Progress = 4,
			/** Not_Created = 0*/
			Not_Created = 0
		}
		enum TrinoState {
			/** Created = 1*/
			Created = 1,
			/** Deleted = 3*/
			Deleted = 3,
			/** Failed = 2*/
			Failed = 2,
			/** In_Progress = 4*/
			In_Progress = 4,
			/** Not_Created = 0*/
			Not_Created = 0
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