//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUoM_Information {
		interface tab_general_Sections {
			unit_of_measure_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the base or primary unit on which the unit is based. */
			BaseUoM: DevKit.Controls.Lookup;
			/** Type a descriptive title or name for the unit of measure. */
			Name: DevKit.Controls.String;
			/** Unit quantity for the product. */
			Quantity: DevKit.Controls.Decimal;
			/** Choose the ID of the unit group that the unit is associated with. */
			UoMScheduleId: DevKit.Controls.Lookup;
		}
	}
	class FormUoM_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form UoM_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UoM_Information */
		Body: DevKit.FormUoM_Information.Body;
	}
	namespace FormUnit_of_Measure_Quick_Create {
		interface tab_general_Sections {
			unit_of_measure_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the base or primary unit on which the unit is based. */
			BaseUoM: DevKit.Controls.Lookup;
			/** Type a descriptive title or name for the unit of measure. */
			Name: DevKit.Controls.String;
			/** Unit quantity for the product. */
			Quantity: DevKit.Controls.Decimal;
			/** Choose the ID of the unit group that the unit is associated with. */
			UoMScheduleId: DevKit.Controls.Lookup;
		}
	}
	class FormUnit_of_Measure_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Unit_of_Measure_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Unit_of_Measure_Quick_Create */
		Body: DevKit.FormUnit_of_Measure_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace UoM {
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