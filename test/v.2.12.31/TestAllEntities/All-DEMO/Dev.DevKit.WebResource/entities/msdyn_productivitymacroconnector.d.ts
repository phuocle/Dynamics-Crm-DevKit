//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_productivitymacroconnector_Information {
		interface Tabs {
		}
		interface Body {
			/** The color in which tile for this connector is rendered */
			msdyn_brandcolor: DevKit.Controls.String;
			/** Sets the callback value */
			msdyn_callback: DevKit.Controls.String;
			/** A string label for the category under which this connector should be rendered */
			msdyn_categorykey: DevKit.Controls.String;
			/** Textual display text for the category key under which this connector is to be displayed */
			msdyn_categorylabel: DevKit.Controls.String;
			/** Text describing this connector displayed in the designer */
			msdyn_description: DevKit.Controls.String;
			/** The display name for this connector in the designer */
			msdyn_displayname: DevKit.Controls.String;
			/** Icon URL to be rendered for this connector */
			msdyn_icon: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Sets the prefix value */
			msdyn_prefix: DevKit.Controls.String;
			/** The title displayed on the desginer for this connector */
			msdyn_title: DevKit.Controls.String;
			/** The type of this connector */
			msdyn_type: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Unique identifier for webresource name */
			msdyn_webresourcename: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_productivitymacroconnector_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_productivitymacroconnector_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productivitymacroconnector_Information */
		Body: DevKit.Formmsdyn_productivitymacroconnector_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_productivitymacroconnector {
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