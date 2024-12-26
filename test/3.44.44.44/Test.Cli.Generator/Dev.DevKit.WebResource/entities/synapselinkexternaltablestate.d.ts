//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class synapselinkexternaltablestateApi {
		/**
		* DynamicsCrm.DevKit synapselinkexternaltablestateApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier for Data Lake Folder associated with Synapse Link External Table State. */
		datalakefolder: string;
		/** Name of the entity */
		EntityName2: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** State of lakehouse shortcut creation for an entity */
		LakehouseShortcutState: OptionSet.synapselinkexternaltablestate.LakehouseShortcutState;
		/** Last SynchronizedOn Date time */
		LastSynchronizedOn_UtcDateAndTime: Date;
		/** Last data synchronization state */
		LastSyncState: OptionSet.synapselinkexternaltablestate.LastSyncState;
		/** Maximum record version synchronized to the lake */
		MaxRecordVersion: number;
		/** Metadata version */
		MetadataVersion: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Record count synchronized to lake */
		RecordCount: number;
		/** Schema modified on date-time */
		SchemaModifiedOn_UtcDateAndTime: Date;
		/** Status of the Synapse Link External Table State */
		statecode: OptionSet.synapselinkexternaltablestate.statecode;
		/** Reason for the status of the Synapse Link External Table State */
		statuscode: OptionSet.synapselinkexternaltablestate.statuscode;
		/** Synapse database name */
		SynapseDatabaseName: string;
		/** Unique identifier for entity instances */
		synapselinkexternaltablestateId: string;
		/** Synapse workspace name */
		SynapseWorkspaceName: string;
		/** External table state */
		TableState: OptionSet.synapselinkexternaltablestate.TableState;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** State of Trino registration for an entity */
		TrinoState: OptionSet.synapselinkexternaltablestate.TrinoState;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 1 */
			Created,
			/** 3 */
			Deleted,
			/** 2 */
			Failed,
			/** 4 */
			In_Progress,
			/** 0 */
			Not_Created
		}
		enum LastSyncState {
			/** 1 */
			Created,
			/** 3 */
			Deleted,
			/** 2 */
			Failed,
			/** 4 */
			In_Progress,
			/** 0 */
			Not_Created
		}
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
		enum TableState {
			/** 1 */
			Created,
			/** 3 */
			Deleted,
			/** 2 */
			Failed,
			/** 4 */
			In_Progress,
			/** 0 */
			Not_Created
		}
		enum TrinoState {
			/** 1 */
			Created,
			/** 3 */
			Deleted,
			/** 2 */
			Failed,
			/** 4 */
			In_Progress,
			/** 0 */
			Not_Created
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