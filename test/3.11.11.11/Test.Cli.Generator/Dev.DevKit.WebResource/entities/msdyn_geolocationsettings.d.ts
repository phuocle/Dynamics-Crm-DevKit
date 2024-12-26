//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_geolocationsettings_Information {
		interface Tabs {
		}
		interface Body {
			/** Checks if location tracking is enabled. */
			msdyn_EnableLocationTracking: DevKit.Controls.Boolean;
			/** The Friday tracking end time */
			msdyn_fridayendtime: DevKit.Controls.DateTime;
			/** The Friday tracking start time */
			msdyn_fridaystarttime: DevKit.Controls.DateTime;
			/** The Monday tracking end time */
			msdyn_mondayendtime: DevKit.Controls.DateTime;
			/** The Monday tracking start time */
			msdyn_mondaystarttime: DevKit.Controls.DateTime;
			/** The name of the geolocation settings */
			msdyn_name: DevKit.Controls.String;
			/** The frequency in seconds at which location data should be uploaded from mobile clients to the server */
			msdyn_refreshIntervalSeconds: DevKit.Controls.Integer;
			/** The Saturday tracking end time */
			msdyn_saturdayendtime: DevKit.Controls.DateTime;
			/** The Saturday tracking start time */
			msdyn_saturdaystarttime: DevKit.Controls.DateTime;
			/** The Sunday tracking end time */
			msdyn_sundayendtime: DevKit.Controls.DateTime;
			/** The Sunday tracking start time */
			msdyn_sundaystarttime: DevKit.Controls.DateTime;
			/** The Thursday tracking end time */
			msdyn_thursdayendtime: DevKit.Controls.DateTime;
			/** The Thursday tracking start time */
			msdyn_thursdaystarttime: DevKit.Controls.DateTime;
			/** The Tuesday tracking end time */
			msdyn_tuesdayendtime: DevKit.Controls.DateTime;
			/** The Tuesday tracking start time */
			msdyn_tuesdaystarttime: DevKit.Controls.DateTime;
			/** The Wednesday tracking end time */
			msdyn_wednesdayendtime: DevKit.Controls.DateTime;
			/** The Wednesday tracking start time */
			msdyn_wednesdaystarttime: DevKit.Controls.DateTime;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_geolocationsettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_geolocationsettings_Information */
		Body: DevKit.Formmsdyn_geolocationsettings_Information.Body;
		/** The Process of form msdyn_geolocationsettings_Information */
		Process: DevKit.Formmsdyn_geolocationsettings_Information.Process;
		/** The SidePanes of form msdyn_geolocationsettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_geolocationsettingsApi {
		/**
		* DynamicsCrm.DevKit msdyn_geolocationsettingsApi
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
		/** The Beacon configuration */
		msdyn_BeaconConfiguration: string;
		/** Checks if location tracking is enabled. */
		msdyn_EnableLocationTracking: boolean;
		/** The Friday tracking end time */
		msdyn_fridayendtime_TimezoneDateAndTime: Date;
		/** The Friday tracking start time */
		msdyn_fridaystarttime_TimezoneDateAndTime: Date;
		/** Unique identifier for entity instances */
		msdyn_geolocationsettingsId: string;
		/** The Monday tracking end time */
		msdyn_mondayendtime_TimezoneDateAndTime: Date;
		/** The Monday tracking start time */
		msdyn_mondaystarttime_TimezoneDateAndTime: Date;
		/** The name of the geolocation settings */
		msdyn_name: string;
		/** The frequency in seconds at which location data should be uploaded from mobile clients to the server */
		msdyn_refreshIntervalSeconds: number;
		/** The Saturday tracking end time */
		msdyn_saturdayendtime_TimezoneDateAndTime: Date;
		/** The Saturday tracking start time */
		msdyn_saturdaystarttime_TimezoneDateAndTime: Date;
		/** The Sunday tracking end time */
		msdyn_sundayendtime_TimezoneDateAndTime: Date;
		/** The Sunday tracking start time */
		msdyn_sundaystarttime_TimezoneDateAndTime: Date;
		/** The Thursday tracking end time */
		msdyn_thursdayendtime_TimezoneDateAndTime: Date;
		/** The Thursday tracking start time */
		msdyn_thursdaystarttime_TimezoneDateAndTime: Date;
		/** The Tuesday tracking end time */
		msdyn_tuesdayendtime_TimezoneDateAndTime: Date;
		/** The Tuesday tracking start time */
		msdyn_tuesdaystarttime_TimezoneDateAndTime: Date;
		/** The Wednesday tracking end time */
		msdyn_wednesdayendtime_TimezoneDateAndTime: Date;
		/** The Wednesday tracking start time */
		msdyn_wednesdaystarttime_TimezoneDateAndTime: Date;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the GeolocationSettings */
		statecode: OptionSet.msdyn_geolocationsettings.statecode;
		/** Reason for the status of the GeolocationSettings */
		statuscode: OptionSet.msdyn_geolocationsettings.statuscode;
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
			/** The Beacon configuration */
			readonly msdyn_BeaconConfiguration: string;
			/** Checks if location tracking is enabled. */
			readonly msdyn_EnableLocationTracking: string;
			/** The Friday tracking end time */
			readonly msdyn_fridayendtime_TimezoneDateAndTime: string;
			/** The Friday tracking start time */
			readonly msdyn_fridaystarttime_TimezoneDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly msdyn_geolocationsettingsId: string;
			/** The Monday tracking end time */
			readonly msdyn_mondayendtime_TimezoneDateAndTime: string;
			/** The Monday tracking start time */
			readonly msdyn_mondaystarttime_TimezoneDateAndTime: string;
			/** The name of the geolocation settings */
			readonly msdyn_name: string;
			/** The frequency in seconds at which location data should be uploaded from mobile clients to the server */
			readonly msdyn_refreshIntervalSeconds: string;
			/** The Saturday tracking end time */
			readonly msdyn_saturdayendtime_TimezoneDateAndTime: string;
			/** The Saturday tracking start time */
			readonly msdyn_saturdaystarttime_TimezoneDateAndTime: string;
			/** The Sunday tracking end time */
			readonly msdyn_sundayendtime_TimezoneDateAndTime: string;
			/** The Sunday tracking start time */
			readonly msdyn_sundaystarttime_TimezoneDateAndTime: string;
			/** The Thursday tracking end time */
			readonly msdyn_thursdayendtime_TimezoneDateAndTime: string;
			/** The Thursday tracking start time */
			readonly msdyn_thursdaystarttime_TimezoneDateAndTime: string;
			/** The Tuesday tracking end time */
			readonly msdyn_tuesdayendtime_TimezoneDateAndTime: string;
			/** The Tuesday tracking start time */
			readonly msdyn_tuesdaystarttime_TimezoneDateAndTime: string;
			/** The Wednesday tracking end time */
			readonly msdyn_wednesdayendtime_TimezoneDateAndTime: string;
			/** The Wednesday tracking start time */
			readonly msdyn_wednesdaystarttime_TimezoneDateAndTime: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the GeolocationSettings */
			readonly statecode: string;
			/** Reason for the status of the GeolocationSettings */
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
	namespace msdyn_geolocationsettings {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}