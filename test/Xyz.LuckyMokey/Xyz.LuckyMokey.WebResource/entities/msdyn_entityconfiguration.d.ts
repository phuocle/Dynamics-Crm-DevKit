﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_entityconfiguration_Main_Form {
		interface Tabs {
		}
		interface Body {
			msdyn_CopyGeoDataFromURS: DevKit.Form.Controls.ControlBoolean;
			/** Enables the entity's records to either represent geofences or be geotracked for entry and exit of geofences. */
			msdyn_EnabledAs: DevKit.Form.Controls.ControlOptionSet;
			/** The entity that is configured as either a geofence or to be geotracked. */
			msdyn_Entity: DevKit.Form.Controls.ControlString;
			/** Schematic name of the latitude field for the configured entity. */
			msdyn_LatitudeFieldName: DevKit.Form.Controls.ControlString;
			/** Schematic name of the longitude field for the configured entity. */
			msdyn_LongitudeFieldName: DevKit.Form.Controls.ControlString;
			/** The name of the entity configuration record. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Default radius for Geofences created for the configured entity type. */
			msdyn_Radius: DevKit.Form.Controls.ControlDouble;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_entityconfiguration_Main_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_entityconfiguration_Main_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_entityconfiguration_Main_Form */
		Body: LuckyMokey.Formmsdyn_entityconfiguration_Main_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_entityconfiguration {
		enum msdyn_EnabledAs {
			/** 192350000 */
			Geofence,
			/** 192350001 */
			Geotracked
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
//{'JsForm':['Main Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}