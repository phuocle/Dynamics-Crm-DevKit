//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_oclocalizationdata_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Channel Language associated with Localization Data. */
			msdyn_customerlanguageid: DevKit.Controls.Lookup;
			/** Localized text of the original record. */
			msdyn_localizedtext: DevKit.Controls.String;
			/** Unique identifier for System Message associated with Localization Data. */
			msdyn_systemmessageid: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_oclocalizationdata_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_oclocalizationdata_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclocalizationdata_Information */
		Body: DevKit.Formmsdyn_oclocalizationdata_Information.Body;
	}
	namespace Formmsdyn_oclocalizationdata_New_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;

		}
	}
	class Formmsdyn_oclocalizationdata_New_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_oclocalizationdata_New_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclocalizationdata_New_Form */
		Body: DevKit.Formmsdyn_oclocalizationdata_New_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_oclocalizationdata {
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
//{'JsForm':['Information','msdyn_oclocalizationdata New_Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}