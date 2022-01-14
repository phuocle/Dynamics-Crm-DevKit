//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_schedulingparameter_Information {
		interface tab_tab_5_Sections {
			tab_5_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			/** When changing bookings on hourly Schedule Board, automatically update travel time and distance for affected bookings. */
			msdyn_AutoUpdateBookingTravel: DevKit.Controls.OptionSet;
			/** Determines if the mapping provider will be used for map location and distance calculations. */
			msdyn_ConnectToMaps: DevKit.Controls.Boolean;
			/** Shows the logical name of the latitude field to be used by geolocations. */
			msdyn_CustomGeoLatitudeField: DevKit.Controls.String;
			/** Shows the logical name of custom entity to be used for geolocations. */
			msdyn_CustomGeoLocationEntity: DevKit.Controls.String;
			/** Shows the logical name of the longitude field to be used for geolocations. */
			msdyn_CustomGeoLongitudeField: DevKit.Controls.String;
			/** Shows the logical name of the resource field to be used for geolocations. */
			msdyn_CustomGeoResourceField: DevKit.Controls.String;
			/** Shows the logical name of the timestamp field to be used for geolocations. */
			msdyn_CustomGeoTimestampField: DevKit.Controls.String;
			/** Choose the unit to display the distance on the Schedule Assistant experience */
			msdyn_DefaultRadiusUnit: DevKit.Controls.OptionSet;
			msdyn_DefaultRadiusValue: DevKit.Controls.Integer;
			/** Disable Sanitizing HTML Templates on the Schedule Board */
			msdyn_DisableSanitizingHTMLTemplates: DevKit.Controls.Boolean;
			/** Enable appointments to display on the new schedule board and be considered in availability search for resources. */
			msdyn_EnableAppointments: DevKit.Controls.OptionSet;
			/** Determines if a custom entity will be used as a source of geo locations for resources to be displayed in the map view. */
			msdyn_EnableCustomGeoLocation: DevKit.Controls.Boolean;
			/** This only applies when directly calling the API. It does not apply when the Book button is clicked on the Schedule Board or on any schedulable entity. */
			msdyn_EnableOutlookSchedules: DevKit.Controls.OptionSet;
			msdyn_GeoLocationExpiresAfterXMinutes: DevKit.Controls.Integer;
			msdyn_GeoLocationRefreshIntervalSeconds: DevKit.Controls.Integer;
			msdyn_internalflag: DevKit.Controls.ActionCards;
			/** Api key for map */
			msdyn_MapApiKey: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Determines if the schedule assistant should automatically filter results based on the requirement territory. */
			msdyn_SAAutoFilterServiceTerritory: DevKit.Controls.Boolean;
			msdyn_ScheduleBoardRefreshIntervalSeconds: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_schedulingparameter_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_schedulingparameter_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_schedulingparameter_Information */
		Body: DevKit.Formmsdyn_schedulingparameter_Information.Body;
		/** The Process of form msdyn_schedulingparameter_Information */
		Process: DevKit.Formmsdyn_schedulingparameter_Information.Process;
		/** The SidePanes of form msdyn_schedulingparameter_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_schedulingparameter_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_schedulingparameter_Information2 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_schedulingparameter_Information2 Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_schedulingparameter_Information2 */
		Body: DevKit.Formmsdyn_schedulingparameter_Information2.Body;
		/** The Process of form msdyn_schedulingparameter_Information2 */
		Process: DevKit.Formmsdyn_schedulingparameter_Information2.Process;
		/** The SidePanes of form msdyn_schedulingparameter_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_schedulingparameterApi {
		/**
		* DynamicsCrm.DevKit msdyn_schedulingparameterApi
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
		/** For internal use */
		msdyn_AdvancedSettings: DevKit.WebApi.StringValue;
		/** When changing bookings on hourly Schedule Board, automatically update travel time and distance for affected bookings. */
		msdyn_AutoUpdateBookingTravel: DevKit.WebApi.OptionSetValue;
		/** Configuration that defines operations, which will be executed in background periodically (internal use only) */
		msdyn_BackgroundJobsConfiguration: DevKit.WebApi.StringValue;
		/** Determines if the mapping provider will be used for map location and distance calculations. */
		msdyn_ConnectToMaps: DevKit.WebApi.BooleanValue;
		/** Shows the logical name of the latitude field to be used by geolocations. */
		msdyn_CustomGeoLatitudeField: DevKit.WebApi.StringValue;
		/** Shows the logical name of custom entity to be used for geolocations. */
		msdyn_CustomGeoLocationEntity: DevKit.WebApi.StringValue;
		/** Shows the logical name of the longitude field to be used for geolocations. */
		msdyn_CustomGeoLongitudeField: DevKit.WebApi.StringValue;
		/** Shows the logical name of the resource field to be used for geolocations. */
		msdyn_CustomGeoResourceField: DevKit.WebApi.StringValue;
		/** Shows the logical name of the timestamp field to be used for geolocations. */
		msdyn_CustomGeoTimestampField: DevKit.WebApi.StringValue;
		/** Choose the unit to display the distance on the Schedule Assistant experience */
		msdyn_DefaultRadiusUnit: DevKit.WebApi.OptionSetValue;
		msdyn_DefaultRadiusValue: DevKit.WebApi.IntegerValue;
		/** Disable Sanitizing HTML Templates on the Schedule Board */
		msdyn_DisableSanitizingHTMLTemplates: DevKit.WebApi.BooleanValue;
		/** Enable appointments to display on the new schedule board and be considered in availability search for resources. */
		msdyn_EnableAppointments: DevKit.WebApi.OptionSetValue;
		/** Determines if a custom entity will be used as a source of geo locations for resources to be displayed in the map view. */
		msdyn_EnableCustomGeoLocation: DevKit.WebApi.BooleanValue;
		/** Determines if scheduling optimization is enabled. */
		msdyn_enableOptimizer: DevKit.WebApi.BooleanValue;
		/** This only applies when directly calling the API. It does not apply when the Book button is clicked on the Schedule Board or on any schedulable entity. */
		msdyn_EnableOutlookSchedules: DevKit.WebApi.OptionSetValue;
		msdyn_GeoLocationExpiresAfterXMinutes: DevKit.WebApi.IntegerValue;
		msdyn_GeoLocationRefreshIntervalSeconds: DevKit.WebApi.IntegerValue;
		/** For internal use */
		msdyn_internalflag: DevKit.WebApi.StringValue;
		/** Api key for map */
		msdyn_MapApiKey: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Determines if the schedule assistant should automatically filter results based on the requirement territory. */
		msdyn_SAAutoFilterServiceTerritory: DevKit.WebApi.BooleanValue;
		msdyn_ScheduleBoardRefreshIntervalSeconds: DevKit.WebApi.IntegerValue;
		/** A unique identifier for an entity instance. */
		msdyn_schedulingparameterId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Scheduling Parameter */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Scheduling Parameter */
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
	namespace msdyn_schedulingparameter {
		enum msdyn_AutoUpdateBookingTravel {
			/** 192350000 */
			Disabled,
			/** 192350001 */
			Enabled
		}
		enum msdyn_DefaultRadiusUnit {
			/** 192350001 */
			KM,
			/** 192350000 */
			Miles
		}
		enum msdyn_EnableAppointments {
			/** 192350000 */
			No,
			/** 192350001 */
			Yes
		}
		enum msdyn_EnableOutlookSchedules {
			/** 192350000 */
			No,
			/** 192350001 */
			Yes
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}