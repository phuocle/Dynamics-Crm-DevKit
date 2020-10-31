//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_schedulingparameter_Information {
		interface tab_tab_5_Sections {
			tab_5_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			/** When changing bookings on hourly Schedule Board, automatically update travel time and distance for affected bookings. */
			msdyn_AutoUpdateBookingTravel: DevKit.Form.Controls.ControlOptionSet;
			/** Determines if the mapping provider will be used for map location and distance calculations. */
			msdyn_ConnectToMaps: DevKit.Form.Controls.ControlBoolean;
			/** Shows the logical name of the latitude field to be used by geolocations. */
			msdyn_CustomGeoLatitudeField: DevKit.Form.Controls.ControlString;
			/** Shows the logical name of custom entity to be used for geolocations. */
			msdyn_CustomGeoLocationEntity: DevKit.Form.Controls.ControlString;
			/** Shows the logical name of the longitude field to be used for geolocations. */
			msdyn_CustomGeoLongitudeField: DevKit.Form.Controls.ControlString;
			/** Shows the logical name of the resource field to be used for geolocations. */
			msdyn_CustomGeoResourceField: DevKit.Form.Controls.ControlString;
			/** Shows the logical name of the timestamp field to be used for geolocations. */
			msdyn_CustomGeoTimestampField: DevKit.Form.Controls.ControlString;
			msdyn_DefaultRadiusUnit: DevKit.Form.Controls.ControlOptionSet;
			msdyn_DefaultRadiusValue: DevKit.Form.Controls.ControlInteger;
			/** Disable Sanitizing HTML Templates on the Schedule Board */
			msdyn_DisableSanitizingHTMLTemplates: DevKit.Form.Controls.ControlBoolean;
			/** Determines if a custom entity will be used as a source of geo locations for resources to be displayed in the map view. */
			msdyn_EnableCustomGeoLocation: DevKit.Form.Controls.ControlBoolean;
			msdyn_GeoLocationExpiresAfterXMinutes: DevKit.Form.Controls.ControlInteger;
			msdyn_GeoLocationRefreshIntervalSeconds: DevKit.Form.Controls.ControlInteger;
			/** Api key for map */
			msdyn_MapApiKey: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Determines if the schedule assistant should automatically filter results based on the requirement territory. */
			msdyn_SAAutoFilterServiceTerritory: DevKit.Form.Controls.ControlBoolean;
			msdyn_ScheduleBoardRefreshIntervalSeconds: DevKit.Form.Controls.ControlInteger;
		}
	}
	class Formmsdyn_schedulingparameter_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_schedulingparameter_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_schedulingparameter_Information */
		Body: LuckyMokey.Formmsdyn_schedulingparameter_Information.Body;
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
		msdyn_DefaultRadiusUnit: DevKit.WebApi.OptionSetValue;
		msdyn_DefaultRadiusValue: DevKit.WebApi.IntegerValue;
		/** Disable Sanitizing HTML Templates on the Schedule Board */
		msdyn_DisableSanitizingHTMLTemplates: DevKit.WebApi.BooleanValue;
		/** Determines if a custom entity will be used as a source of geo locations for resources to be displayed in the map view. */
		msdyn_EnableCustomGeoLocation: DevKit.WebApi.BooleanValue;
		/** Determines if scheduling optimization is enabled. */
		msdyn_enableOptimizer: DevKit.WebApi.BooleanValue;
		msdyn_GeoLocationExpiresAfterXMinutes: DevKit.WebApi.IntegerValue;
		msdyn_GeoLocationRefreshIntervalSeconds: DevKit.WebApi.IntegerValue;
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
			/** 192350000 */
			Miles,
			/** 192350001 */
			KM
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}