//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_propertylog_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_booleanvalue: DevKit.Controls.Boolean;
			msdyn_customerasset: DevKit.Controls.Lookup;
			msdyn_datevalue: DevKit.Controls.DateTime;
			/** For Internal Use only */
			msdyn_delta: DevKit.Controls.Decimal;
			msdyn_islatest: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_numbervalue: DevKit.Controls.Decimal;
			msdyn_property: DevKit.Controls.Lookup;
			msdyn_readingtime: DevKit.Controls.DateTime;
			msdyn_stringvalue: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_propertylog_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_propertylog_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_propertylog_Information */
		Body: MyDog.Formmsdyn_propertylog_Information.Body;
	}
	namespace FormProperty_Log_Quick_Create {
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
			msdyn_booleanvalue: DevKit.Controls.Boolean;
			msdyn_customerasset: DevKit.Controls.Lookup;
			msdyn_datevalue: DevKit.Controls.DateTime;
			msdyn_numbervalue: DevKit.Controls.Decimal;
			msdyn_property: DevKit.Controls.Lookup;
			msdyn_readingtime: DevKit.Controls.DateTime;
			msdyn_stringvalue: DevKit.Controls.String;
		}
	}
	class FormProperty_Log_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Property_Log_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Property_Log_Quick_Create */
		Body: MyDog.FormProperty_Log_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_propertylog {
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}