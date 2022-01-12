//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_forecastconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_forecastconfiguration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_forecastconfiguration_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_forecastconfiguration_Information */
		Body: DevKit.Formmsdyn_forecastconfiguration_Information.Body;
		/** The SidePanes of form msdyn_forecastconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_forecastconfiguration_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_forecastconfiguration_Information2 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_forecastconfiguration_Information2 Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_forecastconfiguration_Information2 */
		Body: DevKit.Formmsdyn_forecastconfiguration_Information2.Body;
		/** The SidePanes of form msdyn_forecastconfiguration_Information2 */
		SidePanes: DevKit.SidePanes;
	}
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_addedWeekIndex: DevKit.WebApi.IntegerValue;
		msdyn_additionalfilter: DevKit.WebApi.StringValue;
		/** Forecast configuration settings */
		msdyn_advancedsettings: DevKit.WebApi.StringValue;
		msdyn_CalendarTemplate: DevKit.WebApi.OptionSetValue;
		msdyn_columns: DevKit.WebApi.StringValue;
		msdyn_enddate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_errormessage: DevKit.WebApi.StringValue;
		msdyn_FiscalYearStartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_forecastcategoryattribute: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_forecastconfigurationId: DevKit.WebApi.GuidValue;
		msdyn_hierarchyentity: DevKit.WebApi.StringValue;
		msdyn_hierarchyrelationship: DevKit.WebApi.StringValue;
		/** Enable scheduling for forecast snapshots */
		msdyn_issnapshotscheduled: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Indicate the number of recurrences that the forecast will be generated. */
		msdyn_numberofrecurrences: DevKit.WebApi.IntegerValue;
		/** Select the type of period for which the forecast must be generated. */
		msdyn_periodtype: DevKit.WebApi.OptionSetValue;
		msdyn_permissionsdata: DevKit.WebApi.StringValue;
		msdyn_pivots: DevKit.WebApi.StringValue;
		msdyn_previewFlags: DevKit.WebApi.StringValue;
		msdyn_publisheddatetime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_rollupdefaultviewid: DevKit.WebApi.StringValue;
		msdyn_rollupentity: DevKit.WebApi.StringValue;
		msdyn_rootentityrecordid: DevKit.WebApi.StringValue;
		/** Schedule governing the forecast snapshot */
		msdyn_snapshotschedule: DevKit.WebApi.StringValue;
		/** Prefered timezone governing the scheduler of forecast snapshot */
		msdyn_snapshottimezone: DevKit.WebApi.StringValue;
		msdyn_startdate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the fiscal month for the forecast configuration. */
		msdyn_startingfiscalmonth: DevKit.WebApi.OptionSetValue;
		/** Select the fiscal quarter for the forecast configuration. */
		msdyn_startingfiscalquarter: DevKit.WebApi.OptionSetValue;
		/** Select the fiscal year for the forecast configuration. */
		msdyn_startingfiscalyear: DevKit.WebApi.OptionSetValue;
		msdyn_templatetype: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Forecast Configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Forecast Configuration */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
			/** 0 */
			Monthly,
			/** 1 */
			Quarterly
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
			Invalidated
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}