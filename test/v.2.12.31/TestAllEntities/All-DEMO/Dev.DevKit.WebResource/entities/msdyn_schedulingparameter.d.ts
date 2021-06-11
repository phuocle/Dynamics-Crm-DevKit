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
			msdyn_DefaultRadiusUnit: DevKit.Controls.OptionSet;
			msdyn_DefaultRadiusValue: DevKit.Controls.Integer;
			/** Disable Sanitizing HTML Templates on the Schedule Board */
			msdyn_DisableSanitizingHTMLTemplates: DevKit.Controls.Boolean;
			/** Enable appointments to display on the new schedule board and be considered in availability search for resources. */
			msdyn_EnableAppointments: DevKit.Controls.OptionSet;
			/** Determines if a custom entity will be used as a source of geo locations for resources to be displayed in the map view. */
			msdyn_EnableCustomGeoLocation: DevKit.Controls.Boolean;
			msdyn_GeoLocationExpiresAfterXMinutes: DevKit.Controls.Integer;
			msdyn_GeoLocationRefreshIntervalSeconds: DevKit.Controls.Integer;
			/** Api key for map */
			msdyn_MapApiKey: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Determines if the schedule assistant should automatically filter results based on the requirement territory. */
			msdyn_SAAutoFilterServiceTerritory: DevKit.Controls.Boolean;
			msdyn_ScheduleBoardRefreshIntervalSeconds: DevKit.Controls.Integer;
		}
	}
	class Formmsdyn_schedulingparameter_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_schedulingparameter_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_schedulingparameter_Information */
		Body: DevKit.Formmsdyn_schedulingparameter_Information.Body;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}