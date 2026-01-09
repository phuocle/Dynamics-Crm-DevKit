//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class synapselinkprofileentitystateApi {
		/**
		* DynamicsCrm.DevKit synapselinkprofileentitystateApi
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
		/** Addition time of entity */
		AdditionTime_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** CRM record count */
		CrmRecordCount: number | null;
		/** CRM record count modified time for entity */
		CrmRecordCountModifiedTime_UtcDateAndTime: Date | null;
		/** Name of the entity */
		EntityName2: string | null;
		/** Source of the entity */
		EntitySource: OptionSet.synapselinkprofileentitystate.EntitySource | null;
		/** Type of the entity */
		EntityType: OptionSet.synapselinkprofileentitystate.EntityType | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Initial sync data completed time */
		InitialSyncDataCompletedTime_UtcDateAndTime: Date | null;
		/** Initial sync metadata created time */
		InitialSyncMetadataCreatedTime_UtcDateAndTime: Date | null;
		/** Initial sync process completed time */
		InitialSyncProcessCompletedTime_UtcDateAndTime: Date | null;
		/** Initial sync state */
		InitialSyncState: OptionSet.synapselinkprofileentitystate.InitialSyncState | null;
		/** Lake record count */
		LakeRecordCount: number | null;
		/** Lake record count modified time for entity */
		LakeRecordCountModifiedTime_UtcDateAndTime: Date | null;
		/** Last synced data time */
		LastSyncedDataTime_UtcDateAndTime: Date | null;
		/** Last synced data version */
		LastSyncedDataVersion: string | null;
		/** Last synced metadata time */
		LastSyncedMetadataTime_UtcDateAndTime: Date | null;
		/** Last synced metadata version */
		LastSyncedMetadataVersion: string | null;
		/** Metadata state */
		MetadataState: OptionSet.synapselinkprofileentitystate.MetadataState | null;
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
		/** Unique identifier for Synapse Link Profile associated with Synapse Link Profile Entity State. */
		profile: string | null;
		/** Unique identifier for Synapse Link Profile Entity associated with Synapse Link Profile Entity State. */
		profileentity: string | null;
		/** Source Record count */
		SourceRecordCount: number | null;
		/** Status of the Synapse Link Profile Entity State */
		statecode: OptionSet.synapselinkprofileentitystate.statecode | null;
		/** Reason for the status of the Synapse Link Profile Entity State */
		statuscode: OptionSet.synapselinkprofileentitystate.statuscode | null;
		/** Unique identifier for entity instances */
		synapselinkprofileentitystateId: string | null;
		/** Synapse table creation state */
		SynapseTableCreationState: OptionSet.synapselinkprofileentitystate.SynapseTableCreationState | null;
		/** Entity sync state */
		SyncState: OptionSet.synapselinkprofileentitystate.SyncState | null;
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
			/** Addition time of entity */
			readonly AdditionTime_UtcDateAndTime: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** CRM record count */
			readonly CrmRecordCount: string;
			/** CRM record count modified time for entity */
			readonly CrmRecordCountModifiedTime_UtcDateAndTime: string;
			/** Name of the entity */
			readonly EntityName2: string;
			/** Source of the entity */
			readonly EntitySource: string;
			/** Type of the entity */
			readonly EntityType: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Initial sync data completed time */
			readonly InitialSyncDataCompletedTime_UtcDateAndTime: string;
			/** Initial sync metadata created time */
			readonly InitialSyncMetadataCreatedTime_UtcDateAndTime: string;
			/** Initial sync process completed time */
			readonly InitialSyncProcessCompletedTime_UtcDateAndTime: string;
			/** Initial sync state */
			readonly InitialSyncState: string;
			/** Lake record count */
			readonly LakeRecordCount: string;
			/** Lake record count modified time for entity */
			readonly LakeRecordCountModifiedTime_UtcDateAndTime: string;
			/** Last synced data time */
			readonly LastSyncedDataTime_UtcDateAndTime: string;
			/** Last synced data version */
			readonly LastSyncedDataVersion: string;
			/** Last synced metadata time */
			readonly LastSyncedMetadataTime_UtcDateAndTime: string;
			/** Last synced metadata version */
			readonly LastSyncedMetadataVersion: string;
			/** Metadata state */
			readonly MetadataState: string;
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
			/** Unique identifier for Synapse Link Profile associated with Synapse Link Profile Entity State. */
			readonly profile: string;
			/** Unique identifier for Synapse Link Profile Entity associated with Synapse Link Profile Entity State. */
			readonly profileentity: string;
			/** Source Record count */
			readonly SourceRecordCount: string;
			/** Status of the Synapse Link Profile Entity State */
			readonly statecode: string;
			/** Reason for the status of the Synapse Link Profile Entity State */
			readonly statuscode: string;
			/** Unique identifier for entity instances */
			readonly synapselinkprofileentitystateId: string;
			/** Synapse table creation state */
			readonly SynapseTableCreationState: string;
			/** Entity sync state */
			readonly SyncState: string;
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
	namespace synapselinkprofileentitystate {
		enum EntitySource {
			/** Dataverse = 0*/
			Dataverse = 0,
			/** FnOTables = 1*/
			FnOTables = 1
		}
		enum EntityType {
			/** Requested = 0*/
			Requested = 0
		}
		enum InitialSyncState {
			/** Completed = 4*/
			Completed = 4,
			/** CompletedWithFailures = 8*/
			CompletedWithFailures = 8,
			/** InProgress = 2*/
			InProgress = 2,
			/** None = 0*/
			None = 0,
			/** NotStarted = 1*/
			NotStarted = 1,
			/** Paused = 32*/
			Paused = 32,
			/** PostProcessing = 64*/
			PostProcessing = 64,
			/** RequestedInitialData = 16*/
			RequestedInitialData = 16
		}
		enum MetadataState {
			/** Created = 8*/
			Created = 8,
			/** Failure = 16*/
			Failure = 16,
			/** MetadataCreating = 2*/
			MetadataCreating = 2,
			/** None = 0*/
			None = 0,
			/** NotCreated = 1*/
			NotCreated = 1,
			/** RelationshipCreating = 4*/
			RelationshipCreating = 4
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
		enum SynapseTableCreationState {
			/** Completed = 2*/
			Completed = 2,
			/** Failed = 3*/
			Failed = 3,
			/** InProgress = 1*/
			InProgress = 1,
			/** NotStarted = 0*/
			NotStarted = 0
		}
		enum SyncState {
			/** Completed = 4*/
			Completed = 4,
			/** CompletedWithFailures = 8*/
			CompletedWithFailures = 8,
			/** InProgress = 2*/
			InProgress = 2,
			/** None = 0*/
			None = 0,
			/** NotStarted = 1*/
			NotStarted = 1,
			/** Paused = 32*/
			Paused = 32,
			/** PostProcessing = 64*/
			PostProcessing = 64,
			/** RequestedInitialData = 16*/
			RequestedInitialData = 16
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