//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_inspection_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the inspection form */
			msdyn_state: DevKit.Controls.OptionSet;
		}
		interface tab__5B128D40_6C06_43BB_9357_608B66262519_Sections {
			InspectionFormSection: DevKit.Controls.Section;
		}
		interface tab__5B128D40_6C06_43BB_9357_608B66262519 extends DevKit.Controls.ITab {
			Section: tab__5B128D40_6C06_43BB_9357_608B66262519_Sections;
		}
		interface Tabs {
			_5B128D40_6C06_43BB_9357_608B66262519: tab__5B128D40_6C06_43BB_9357_608B66262519;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the Inspection. */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the Inspection entity. */
			msdyn_name: DevKit.Controls.String;
			/** Status of the inspection form */
			msdyn_state: DevKit.Controls.OptionSet;
			/** Inspection definition Json */
			msdyn_surveydefinition: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_inspection_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inspection_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inspection_Information */
		Body: MyDog.Formmsdyn_inspection_Information.Body;
		/** The Header section of form msdyn_inspection_Information */
		Header: MyDog.Formmsdyn_inspection_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_inspection {
		enum msdyn_state {
			/** 192350000 */
			Draft,
			/** 192350001 */
			Published
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