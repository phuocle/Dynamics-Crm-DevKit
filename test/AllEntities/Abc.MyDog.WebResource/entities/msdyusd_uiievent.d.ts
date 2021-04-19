//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyusd_uiievent_Information {
		interface Tabs {
		}
		interface Body {
			WebResource_EventDocumentation: DevKit.Controls.WebResource;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier for UII Hosted Application associated with UII Event. */
			msdyusd_HostedApplicationId: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Event */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Grid {
			Action_Calls: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_uiievent_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_uiievent_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_uiievent_Information */
		Body: MyDog.Formmsdyusd_uiievent_Information.Body;
		/** The Footer section of form msdyusd_uiievent_Information */
		Footer: MyDog.Formmsdyusd_uiievent_Information.Footer;
		/** The Grid of form msdyusd_uiievent_Information */
		Grid: MyDog.Formmsdyusd_uiievent_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyusd_uiievent {
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