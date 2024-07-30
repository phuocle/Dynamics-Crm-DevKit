//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_scheduleApi {
		/**
		* DynamicsCrm.DevKit msdyn_scheduleApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_schedule.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
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
		/** Callback Url */
		msdyn_callbackurl: string;
		/** IsActive option set */
		msdyn_isactive: boolean;
		/** Next expected refresh time */
		msdyn_nextrefreshtime_TimezoneDateAndTime: Date;
		/** Reference name of consuming entity */
		msdyn_refentityname: string;
		/** Reference id of consuming entity */
		msdyn_referenceid: string;
		/** Refresh payload */
		msdyn_refreshpayload: string;
		/** Refresh period for interval based */
		msdyn_refreshperiod: string;
		/** Schedule */
		msdyn_schedule2: string;
		/** Schedule Refresh disabled reason if any */
		msdyn_scheduledisabledreason: string;
		/** Unique identifier for entity instances */
		msdyn_scheduleId: string;
		/** (Deprecated) Schedule id reference for dataflows etc. */
		readonly msdyn_scheduleidref: string;
		/** Dataflow schedule refresh type */
		msdyn_schedulerefreshtype: OptionSet.msdyn_schedule.msdyn_schedulerefreshtype;
		/** Initial start date time */
		msdyn_startdatetime_TimezoneDateAndTime: Date;
		/** Refresh period for time based. */
		msdyn_timebasedrefreshperiod: string;
		/** Dataflow Time zone id */
		msdyn_timezoneid: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Schedule */
		statecode: OptionSet.msdyn_schedule.statecode;
		/** Reason for the status of the Schedule */
		statuscode: OptionSet.msdyn_schedule.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** Callback Url */
			readonly msdyn_callbackurl: string;
			/** IsActive option set */
			readonly msdyn_isactive: string;
			/** Next expected refresh time */
			readonly msdyn_nextrefreshtime_TimezoneDateAndTime: string;
			/** Reference name of consuming entity */
			readonly msdyn_refentityname: string;
			/** Reference id of consuming entity */
			readonly msdyn_referenceid: string;
			/** Refresh payload */
			readonly msdyn_refreshpayload: string;
			/** Refresh period for interval based */
			readonly msdyn_refreshperiod: string;
			/** Schedule */
			readonly msdyn_schedule2: string;
			/** Schedule Refresh disabled reason if any */
			readonly msdyn_scheduledisabledreason: string;
			/** Unique identifier for entity instances */
			readonly msdyn_scheduleId: string;
			/** (Deprecated) Schedule id reference for dataflows etc. */
			readonly msdyn_scheduleidref: string;
			/** Dataflow schedule refresh type */
			readonly msdyn_schedulerefreshtype: string;
			/** Initial start date time */
			readonly msdyn_startdatetime_TimezoneDateAndTime: string;
			/** Refresh period for time based. */
			readonly msdyn_timebasedrefreshperiod: string;
			/** Dataflow Time zone id */
			readonly msdyn_timezoneid: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Schedule */
			readonly statecode: string;
			/** Reason for the status of the Schedule */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_schedule {
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
		enum msdyn_schedulerefreshtype {
			/** 2 */
			IntervalBased,
			/** 0 */
			Manual,
			/** 1 */
			TimeBased
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