//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormProperty {
		interface tab_dynamic_property_summary_Sections {
			dynamic_property_properties_1: DevKit.Form.Controls.ControlSection;
			dynamic_property_properties_31: DevKit.Form.Controls.ControlSection;
		}
		interface tab_dynamic_property_properties_Sections {
			dynamic_property_properties_2: DevKit.Form.Controls.ControlSection;
			dynamic_property_properties_3: DevKit.Form.Controls.ControlSection;
			dynamic_property_properties_41: DevKit.Form.Controls.ControlSection;
		}
		interface tab_dynamic_property_summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_dynamic_property_summary_Sections;
		}
		interface tab_dynamic_property_properties extends DevKit.Form.Controls.IControlTab {
			Section: tab_dynamic_property_properties_Sections;
		}
		interface Tabs {
			dynamic_property_summary: tab_dynamic_property_summary;
			dynamic_property_properties: tab_dynamic_property_properties;
		}
		interface Body {
			Tab: Tabs;
			grid_DynamicPropertyOptionSetItem: DevKit.Form.Controls.ControlGrid;
			/** Select the data type of the property. */
			DataType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the default value of the property for a decimal data type. */
			DefaultValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the default value of the property for a double data type. */
			DefaultValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the default value of the property for a whole number data type. */
			DefaultValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Shows the default value of the property. */
			DefaultValueOptionSet: DevKit.Form.Controls.ControlLookup;
			/** Shows the default value of the property for a string data type. */
			DefaultValueString: DevKit.Form.Controls.ControlString;
			/** Type a description for the property. */
			Description: DevKit.Form.Controls.ControlString;
			/** Defines whether the attribute is hidden or shown. */
			IsHidden: DevKit.Form.Controls.ControlBoolean;
			/** Defines whether the attribute is read-only or if it can be edited. */
			IsReadOnly: DevKit.Form.Controls.ControlBoolean;
			/** Defines whether the attribute is mandatory. */
			IsRequired: DevKit.Form.Controls.ControlBoolean;
			/** Shows the maximum allowed length of the property for a string data type. */
			MaxLengthString: DevKit.Form.Controls.ControlInteger;
			/** Shows the maximum allowed value of the property for a decimal data type. */
			MaxValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the maximum allowed value of the property for a double data type. */
			MaxValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the maximum allowed value of the property for a whole number data type. */
			MaxValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Shows the minimum allowed value of the property for a decimal data type. */
			MinValueDecimal: DevKit.Form.Controls.ControlDecimal;
			/** Shows the minimum allowed value of the property for a double data type. */
			MinValueDouble: DevKit.Form.Controls.ControlDouble;
			/** Shows the minimum allowed value of the property for a whole number data type. */
			MinValueInteger: DevKit.Form.Controls.ControlInteger;
			/** Type the name of the property. */
			Name: DevKit.Form.Controls.ControlString;
			/** Shows the allowed precision of the property for a whole number data type. */
			Precision: DevKit.Form.Controls.ControlInteger;
			/** Choose the product that the property is associated with. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormProperty extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Property
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Property */
		Body: LuckyMokey.FormProperty.Body;
	}
}
declare namespace OptionSet {
	namespace DynamicProperty {
		enum DataType {
			/** 0 */
			Option_Set,
			/** 1 */
			Decimal,
			/** 2 */
			Floating_Point_Number,
			/** 3 */
			Single_Line_Of_Text,
			/** 4 */
			Whole_Number
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Draft,
			/** 2 */
			Retired
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 0 */
			Draft,
			/** 2 */
			Retired
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
//{'JsForm':['Property'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}