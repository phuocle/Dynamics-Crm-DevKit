//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_productivitymacrosolutionconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** Sets designer fallback url */
			msdyn_designerfallbackurl: DevKit.Controls.String;
			/** Sets the entity from which to read designer URL */
			msdyn_designerurlconfigentity: DevKit.Controls.String;
			/** Sets the attributes of designer url config entity */
			msdyn_designerurlconfigentityattrib: DevKit.Controls.String;
			/** Sets the id from which to read designer URL */
			msdyn_designerurlconfigentityid: DevKit.Controls.String;
			/** An OData query to retrieve record from which to read designer URL */
			msdyn_designerurlconfigentityquery: DevKit.Controls.String;
			/** Sets the path to designer blob with designer URL */
			msdyn_designerurlrelativepath: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Sets the value for serach hint */
			msdyn_searchhint: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Sets the value for user voice link */
			msdyn_uservoicelink: DevKit.Controls.String;
			/** Sets the value for user voice text */
			msdyn_uservoicetext: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_productivitymacrosolutionconfiguration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_productivitymacrosolutionconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productivitymacrosolutionconfiguration_Information */
		Body: DevKit.Formmsdyn_productivitymacrosolutionconfiguration_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_productivitymacrosolutionconfiguration {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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