//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_productivitymacroactiontemplate_Information {
		interface Tabs {
		}
		interface Body {
			/** The description of this macro action. */
			msdyn_actionDescription: DevKit.Controls.String;
			/** Unique value to set the brand color */
			msdyn_brandcolor: DevKit.Controls.String;
			/** Unique value to set the display name */
			msdyn_displayname: DevKit.Controls.String;
			/** Unique value to set the icon */
			msdyn_icon: DevKit.Controls.String;
			/** Kind is either 'TRIGGERS' or 'ACTIONS' */
			msdyn_kind: DevKit.Controls.String;
			/** Sets the value of macro connector */
			msdyn_macroconnector: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Function to be executed at runtime */
			msdyn_runtimeapi: DevKit.Controls.String;
			/** Unique value to set the subtitle value */
			msdyn_subtitle: DevKit.Controls.String;
			/** Unique value to set the summary */
			msdyn_summary: DevKit.Controls.String;
			/** The title of this macro action. */
			msdyn_title: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Unique value to set the visibility value */
			msdyn_visibility: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_productivitymacroactiontemplate_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_productivitymacroactiontemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productivitymacroactiontemplate_Information */
		Body: MyDog.Formmsdyn_productivitymacroactiontemplate_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_productivitymacroactiontemplate {
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