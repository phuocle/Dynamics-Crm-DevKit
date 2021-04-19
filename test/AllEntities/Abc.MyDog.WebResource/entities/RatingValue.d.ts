//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormRatingValue_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			msdyn_IsDefault: DevKit.Controls.Boolean;
			/** Type a name that represents a rating value such as familiar, good, proficient etc. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the model that this rating value is associated with. */
			RatingModel: DevKit.Controls.Lookup;
			/** Type a rating value which is unique to the rating model it is associated with and lies within the range specified on the model. */
			Value: DevKit.Controls.Integer;
		}
	}
	class FormRatingValue_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RatingValue_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RatingValue_Information */
		Body: MyDog.FormRatingValue_Information.Body;
	}
	namespace FormRatingValue_Omnichannel_Information {
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
			/** Type a name that represents a rating value such as familiar, good, proficient etc. */
			Name: DevKit.Controls.String;
			/** Select the model that this rating value is associated with. */
			RatingModel: DevKit.Controls.Lookup;
			/** Type a rating value which is unique to the rating model it is associated with and lies within the range specified on the model. */
			Value: DevKit.Controls.Integer;
		}
	}
	class FormRatingValue_Omnichannel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RatingValue_Omnichannel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form RatingValue_Omnichannel_Information */
		Body: MyDog.FormRatingValue_Omnichannel_Information.Body;
	}
}
declare namespace OptionSet {
	namespace RatingValue {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 192350000 */
			Disabled_By_Generation_Process,
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
//{'JsForm':['Information','Omnichannel Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}