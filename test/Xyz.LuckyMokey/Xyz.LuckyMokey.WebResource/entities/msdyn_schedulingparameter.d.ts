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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}