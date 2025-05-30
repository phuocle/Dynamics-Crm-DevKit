﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class synapselinkprofileApi {
		/**
		* DynamicsCrm.DevKit synapselinkprofileApi
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
		/** Activation time of profile */
		ActivationTime_UtcDateAndTime: Date;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.synapselinkprofile.ComponentState;
		/** Enable Copy Attachments */
		CopyAttachments: boolean;
		/** Enable Copy Files */
		CopyFiles: boolean;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier for Data Lake Folder associated with Synapse Link Profile. */
		datalakefolder: string;
		/** Sync state of the profile */
		DestinationSyncState: OptionSet.synapselinkprofile.DestinationSyncState;
		/** Extended properties */
		ExtendedProperties: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
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
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** State of the profile */
		ProfileState: OptionSet.synapselinkprofile.ProfileState;
		/** Type of profile */
		ProfileType: OptionSet.synapselinkprofile.ProfileType;
		/** Profile Updated Time */
		ProfileUpdatedTime_UtcDateAndTime: Date;
		/** Profile version */
		ProfileVersion: string;
		/** Number of snapshots To persist */
		SnapshotsToPersist: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Synapse Link Profile */
		statecode: OptionSet.synapselinkprofile.statecode;
		/** Reason for the status of the Synapse Link Profile */
		statuscode: OptionSet.synapselinkprofile.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier for entity instances */
		synapselinkprofileId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique name */
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Activation time of profile */
			readonly ActivationTime_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Enable Copy Attachments */
			readonly CopyAttachments: string;
			/** Enable Copy Files */
			readonly CopyFiles: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier for Data Lake Folder associated with Synapse Link Profile. */
			readonly datalakefolder: string;
			/** Sync state of the profile */
			readonly DestinationSyncState: string;
			/** Extended properties */
			readonly ExtendedProperties: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
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
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** State of the profile */
			readonly ProfileState: string;
			/** Type of profile */
			readonly ProfileType: string;
			/** Profile Updated Time */
			readonly ProfileUpdatedTime_UtcDateAndTime: string;
			/** Profile version */
			readonly ProfileVersion: string;
			/** Number of snapshots To persist */
			readonly SnapshotsToPersist: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Synapse Link Profile */
			readonly statecode: string;
			/** Reason for the status of the Synapse Link Profile */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier for entity instances */
			readonly synapselinkprofileId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique name */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace synapselinkprofile {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
		}
		enum DestinationSyncState {
			/** 2 */
			Completed,
			/** 0 */
			None,
			/** 1 */
			NotCompleted
		}
		enum ProfileState {
			/** 5 */
			Aborted,
			/** 4 */
			Aborting,
			/** 1 */
			Active,
			/** 8 */
			Deactivated,
			/** 3 */
			Deleted,
			/** 2 */
			Error,
			/** 0 */
			Inactive,
			/** 6 */
			Suspended,
			/** 7 */
			Suspending
		}
		enum ProfileType {
			/** 1 */
			EventAnalytics,
			/** 0 */
			SynapseLink
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}