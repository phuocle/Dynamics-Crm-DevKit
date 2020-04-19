//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormChannel_Property {
		interface tab_general_Sections {
			channelpropertyinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the application that the property is associated with. */
			Applicationsource: DevKit.Form.Controls.ControlString;
			/** Enter the data type for the property. */
			DataType: DevKit.Form.Controls.ControlOptionSet;
			/** Description of property */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the name of the property as received in the information provided by the external application. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormChannel_Property extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Channel_Property
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Channel_Property */
		Body: LuckyMokey.FormChannel_Property.Body;
	}
}
declare namespace OptionSet {
	namespace ChannelProperty {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum DataType {
			/** 0 */
			Floating_Point_Number,
			/** 1 */
			Single_Line_Of_Text,
			/** 2 */
			Whole_Number
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
//{'JsForm':['Channel Property'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}