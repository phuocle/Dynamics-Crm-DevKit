//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class organizationdatasyncstateApi {
		/**
		* DynamicsCrm.DevKit organizationdatasyncstateApi
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
		/** Continue from last delta sync */
		continuefromlastdeltasync: boolean;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		currentfullsyncfetchxml: string;
		currentfullsyncstate: OptionSet.organizationdatasyncstate.currentfullsyncstate;
		entityname: string;
		fullsynconly: boolean;
		fullsyncpagesdata: string;
		implicitlastdataversion: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		lastdataversion: string;
		/** Last Metadata Version */
		lastmetadataversion: string;
		lockexpiretimestamp_UtcDateAndTime: Date;
		lockowner: string;
		minactiverowversion: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		nullstatedate_UtcDateOnly: Date;
		/** Unique identifier for entity instances */
		organizationdatasyncstateId: string;
		/** Organization Data Sync Subscription Id */
		organizationdatasyncsubscriptionid: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** pagenumber */
		pagenumber: number;
		paginationcookie: string;
		pagingcookie: string;
		partitionid: string;
		/** SyncStatesForPartitions */
		partitionssyncstatedata: string;
		/** Status of the OrganizationDataSyncState */
		statecode: OptionSet.organizationdatasyncstate.statecode;
		/** Reason for the status of the OrganizationDataSyncState */
		statuscode: OptionSet.organizationdatasyncstate.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		usepagingcookiemax: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Continue from last delta sync */
			readonly continuefromlastdeltasync: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			readonly currentfullsyncfetchxml: string;
			readonly currentfullsyncstate: string;
			readonly entityname: string;
			readonly fullsynconly: string;
			readonly fullsyncpagesdata: string;
			readonly implicitlastdataversion: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			readonly lastdataversion: string;
			/** Last Metadata Version */
			readonly lastmetadataversion: string;
			readonly lockexpiretimestamp_UtcDateAndTime: string;
			readonly lockowner: string;
			readonly minactiverowversion: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			readonly nullstatedate_UtcDateOnly: string;
			/** Unique identifier for entity instances */
			readonly organizationdatasyncstateId: string;
			/** Organization Data Sync Subscription Id */
			readonly organizationdatasyncsubscriptionid: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** pagenumber */
			readonly pagenumber: string;
			readonly paginationcookie: string;
			readonly pagingcookie: string;
			readonly partitionid: string;
			/** SyncStatesForPartitions */
			readonly partitionssyncstatedata: string;
			/** Status of the OrganizationDataSyncState */
			readonly statecode: string;
			/** Reason for the status of the OrganizationDataSyncState */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly usepagingcookiemax: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace organizationdatasyncstate {
		enum currentfullsyncstate {
			/** 5 */
			AcceptMerge,
			/** 3 */
			Completed,
			/** 6 */
			Failed,
			/** 1 */
			Initiating,
			/** 2 */
			InProgress,
			/** 4 */
			Invalid,
			/** 0 */
			NotInitialized
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