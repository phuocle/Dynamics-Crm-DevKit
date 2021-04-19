//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_problematicassetfeedback_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the problematic asset feedback. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_problematicassetfeedback_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_problematicassetfeedback_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_problematicassetfeedback_Information */
		Body: MyDog.Formmsdyn_problematicassetfeedback_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_problematicassetfeedback {
		enum msdyn_NumberOfDays {
			/** 192350000 */
			_0,
			/** 192350001 */
			_15,
			/** 192350002 */
			_30,
			/** 192350003 */
			_60,
			/** 192350004 */
			_90
		}
		enum msdyn_OtherFeedback {
			/** 700610001 */
			Dislike,
			/** 700610000 */
			Like
		}
		enum msdyn_ProblematicAssetFeedback {
			/** 700610001 */
			Dislike,
			/** 700610000 */
			Like
		}
		enum msdyn_Suggestion {
			/** 700610002 */
			None,
			/** 700610000 */
			Repair,
			/** 700610001 */
			Replace
		}
		enum msdyn_SuggestionFeedback {
			/** 700610001 */
			Dislike,
			/** 700610000 */
			Like
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