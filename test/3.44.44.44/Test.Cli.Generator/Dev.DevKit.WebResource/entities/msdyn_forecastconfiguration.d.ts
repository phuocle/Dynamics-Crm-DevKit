//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_forecastconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_forecastconfigurationApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_addedWeekIndex: number;
		msdyn_additionalfilter: string;
		/** Forecast configuration settings */
		msdyn_advancedsettings: string;
		/** Fiscal Year Calendar Template */
		msdyn_CalendarTemplate: OptionSet.msdyn_forecastconfiguration.msdyn_CalendarTemplate;
		msdyn_columns: string;
		msdyn_enddate_UtcDateOnly: Date;
		msdyn_entitymetadata: string;
		msdyn_errormessage: string;
		/** Fiscal Year Start Date */
		msdyn_FiscalYearStartDate_UtcDateOnly: Date;
		msdyn_forecastcategoryattribute: string;
		/** Unique identifier for entity instances */
		msdyn_forecastconfigurationId: string;
		msdyn_hierarchyentity: string;
		msdyn_hierarchyfilter: string;
		msdyn_hierarchyrelationship: string;
		/** Determine if FC is default */
		msdyn_isdefault: boolean;
		/** Enable scheduling for forecast snapshots */
		msdyn_issnapshotscheduled: boolean;
		msdyn_moneyattrcache: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Indicate the number of recurrences that the forecast will be generated. */
		msdyn_numberofrecurrences: number;
		/** Select the type of period for which the forecast must be generated. */
		msdyn_periodtype: OptionSet.msdyn_forecastconfiguration.msdyn_periodtype;
		msdyn_permissionsdata: string;
		msdyn_pivots: string;
		/** Feature Flags */
		msdyn_previewFlags: string;
		msdyn_publisheddatetime_UtcDateOnly: Date;
		msdyn_relatedentities: string;
		msdyn_rollupdefaultviewid: string;
		msdyn_rollupentity: string;
		msdyn_rootentityrecordid: string;
		/** Schedule governing the forecast snapshot */
		msdyn_snapshotschedule: string;
		/** Prefered timezone governing the scheduler of forecast snapshot */
		msdyn_snapshottimezone: string;
		msdyn_startdate_UtcDateOnly: Date;
		/** Select the fiscal month for the forecast configuration. */
		msdyn_startingfiscalmonth: OptionSet.msdyn_forecastconfiguration.msdyn_startingfiscalmonth;
		/** Select the fiscal quarter for the forecast configuration. */
		msdyn_startingfiscalquarter: OptionSet.msdyn_forecastconfiguration.msdyn_startingfiscalquarter;
		/** Select the fiscal year for the forecast configuration. */
		msdyn_startingfiscalyear: OptionSet.msdyn_forecastconfiguration.msdyn_startingfiscalyear;
		msdyn_templatetype: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
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
		/** Status of the Forecast Configuration */
		statecode: OptionSet.msdyn_forecastconfiguration.statecode;
		/** Reason for the status of the Forecast Configuration */
		statuscode: OptionSet.msdyn_forecastconfiguration.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_addedWeekIndex: string;
			readonly msdyn_additionalfilter: string;
			/** Forecast configuration settings */
			readonly msdyn_advancedsettings: string;
			/** Fiscal Year Calendar Template */
			readonly msdyn_CalendarTemplate: string;
			readonly msdyn_columns: string;
			readonly msdyn_enddate_UtcDateOnly: string;
			readonly msdyn_entitymetadata: string;
			readonly msdyn_errormessage: string;
			/** Fiscal Year Start Date */
			readonly msdyn_FiscalYearStartDate_UtcDateOnly: string;
			readonly msdyn_forecastcategoryattribute: string;
			/** Unique identifier for entity instances */
			readonly msdyn_forecastconfigurationId: string;
			readonly msdyn_hierarchyentity: string;
			readonly msdyn_hierarchyfilter: string;
			readonly msdyn_hierarchyrelationship: string;
			/** Determine if FC is default */
			readonly msdyn_isdefault: string;
			/** Enable scheduling for forecast snapshots */
			readonly msdyn_issnapshotscheduled: string;
			readonly msdyn_moneyattrcache: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Indicate the number of recurrences that the forecast will be generated. */
			readonly msdyn_numberofrecurrences: string;
			/** Select the type of period for which the forecast must be generated. */
			readonly msdyn_periodtype: string;
			readonly msdyn_permissionsdata: string;
			readonly msdyn_pivots: string;
			/** Feature Flags */
			readonly msdyn_previewFlags: string;
			readonly msdyn_publisheddatetime_UtcDateOnly: string;
			readonly msdyn_relatedentities: string;
			readonly msdyn_rollupdefaultviewid: string;
			readonly msdyn_rollupentity: string;
			readonly msdyn_rootentityrecordid: string;
			/** Schedule governing the forecast snapshot */
			readonly msdyn_snapshotschedule: string;
			/** Prefered timezone governing the scheduler of forecast snapshot */
			readonly msdyn_snapshottimezone: string;
			readonly msdyn_startdate_UtcDateOnly: string;
			/** Select the fiscal month for the forecast configuration. */
			readonly msdyn_startingfiscalmonth: string;
			/** Select the fiscal quarter for the forecast configuration. */
			readonly msdyn_startingfiscalquarter: string;
			/** Select the fiscal year for the forecast configuration. */
			readonly msdyn_startingfiscalyear: string;
			readonly msdyn_templatetype: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the Forecast Configuration */
			readonly statecode: string;
			/** Reason for the status of the Forecast Configuration */
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
	namespace msdyn_forecastconfiguration {
		enum msdyn_CalendarTemplate {
			/** 100000005 */
			_3_3_3_4,
			/** 100000006 */
			_3_3_4_3,
			/** 100000007 */
			_3_4_3_3,
			/** 100000008 */
			_4_3_3_3,
			/** 100000000 */
			_4_4_5,
			/** 100000001 */
			_4_5_4,
			/** 100000002 */
			_5_4_4,
			/** 100000004 */
			Broadcast_Calendar,
			/** 100000003 */
			Gregorian
		}
		enum msdyn_periodtype {
			/** 3 */
			Annually,
			/** 0 */
			Monthly,
			/** 1 */
			Quarterly,
			/** 2 */
			Weekly
		}
		enum msdyn_startingfiscalmonth {
			/** 3 */
			April,
			/** 7 */
			August,
			/** 11 */
			December,
			/** 1 */
			February,
			/** 0 */
			January,
			/** 6 */
			July,
			/** 5 */
			June,
			/** 2 */
			March,
			/** 4 */
			May,
			/** 10 */
			November,
			/** 9 */
			October,
			/** 8 */
			September
		}
		enum msdyn_startingfiscalquarter {
			/** 0 */
			Q1,
			/** 1 */
			Q2,
			/** 2 */
			Q3,
			/** 3 */
			Q4
		}
		enum msdyn_startingfiscalyear {
			/** 0 */
			FY2018,
			/** 1 */
			FY2019,
			/** 2 */
			FY2020,
			/** 3 */
			FY2021,
			/** 4 */
			FY2022,
			/** 5 */
			FY2023,
			/** 6 */
			FY2024,
			/** 7 */
			FY2025,
			/** 8 */
			FY2026,
			/** 9 */
			FY2027,
			/** 10 */
			FY2028
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 3 */
			Active,
			/** 6 */
			Archived,
			/** 1 */
			Draft,
			/** 4 */
			Failed,
			/** 2 */
			In_progress,
			/** 5 */
			Inactive,
			/** 7 */
			Invalidated,
			/** 8 */
			Reactivation_in_progress
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