//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SourceControlBranchConfigurationApi {
		/**
		* DynamicsCrm.DevKit SourceControlBranchConfigurationApi
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
		/** Name of the branch associated with the organization or solution */
		BranchName: string | null;
		/** Git commit id of the branch which was last synced in the organization */
		BranchSyncedCommitId: string | null;
		/** Specifies the time at which branch was last synced in the organization */
		BranchSyncedTime_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string | null;
		/** Specifies the relative path of the folder under which the organization or solution changes would be synced */
		RootFolderPath: string | null;
		/** Unique identifier for entity instances */
		SourceControlBranchConfigurationId: string | null;
		/** Unique identifier of source control configuration */
		SourceControlConfigurationId: string | null;
		/** Describes solution git connection status. */
		StatusCode: OptionSet.SourceControlBranchConfiguration.StatusCode | null;
		/** Time to live in seconds. */
		TTLInSeconds: number | null;
		/** Stores the git upstream branch name associated with the organization */
		UpstreamBranchName: string | null;
		/** Specifies the upstream branch commit id which was last synced to the current branch */
		UpstreamBranchSyncedCommitId: string | null;
		/** Specifies the time when the upstream branch was last synced to the current branch */
		UpstreamBranchSyncedTime_UtcDateAndTime: Date | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Name of the branch associated with the organization or solution */
			readonly BranchName: string;
			/** Git commit id of the branch which was last synced in the organization */
			readonly BranchSyncedCommitId: string;
			/** Specifies the time at which branch was last synced in the organization */
			readonly BranchSyncedTime_UtcDateAndTime: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Specifies the relative path of the folder under which the organization or solution changes would be synced */
			readonly RootFolderPath: string;
			/** Unique identifier for entity instances */
			readonly SourceControlBranchConfigurationId: string;
			/** Unique identifier of source control configuration */
			readonly SourceControlConfigurationId: string;
			/** Describes solution git connection status. */
			readonly StatusCode: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Stores the git upstream branch name associated with the organization */
			readonly UpstreamBranchName: string;
			/** Specifies the upstream branch commit id which was last synced to the current branch */
			readonly UpstreamBranchSyncedCommitId: string;
			/** Specifies the time when the upstream branch was last synced to the current branch */
			readonly UpstreamBranchSyncedTime_UtcDateAndTime: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SourceControlBranchConfiguration {
		enum StatusCode {
			/** Connected = 0*/
			Connected = 0,
			/** Disconnect = 1*/
			Disconnect = 1,
			/** DisconnectFailed = 3*/
			DisconnectFailed = 3,
			/** DisconnectInprogress = 2*/
			DisconnectInprogress = 2
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