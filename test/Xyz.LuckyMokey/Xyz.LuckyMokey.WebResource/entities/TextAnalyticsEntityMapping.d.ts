//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormTextAnalyticsEntityMapping_Information {
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections {
		}
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F extends DevKit.Form.Controls.IControlTab {
			Section: tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections;
		}
		interface Tabs {
			_C01C55A7_B832_422F_B768_4BDA9674E00F: tab__C01C55A7_B832_422F_B768_4BDA9674E00F;
		}
		interface Body {
			Tab: Tabs;
			/** Select Entity */
			EntityPickList: DevKit.Form.Controls.ControlOptionSet;
			entitypicklist_UC: DevKit.Form.Controls.ControlActionCards;
			/** Select Field */
			FieldPickList: DevKit.Form.Controls.ControlOptionSet;
			fieldpicklist_UC: DevKit.Form.Controls.ControlActionCards;
			/** Specify if the mapping is for text match or exact match */
			IsTextMatchMapping: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormTextAnalyticsEntityMapping_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form TextAnalyticsEntityMapping_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form TextAnalyticsEntityMapping_Information */
		Body: LuckyMokey.FormTextAnalyticsEntityMapping_Information.Body;
	}
}
declare namespace OptionSet {
	namespace TextAnalyticsEntityMapping {
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
		enum EntityPickList {
			/** 1 */
			No,
			/** 2 */
			Yes
		}
		enum FieldPickList {
			/** 1 */
			No,
			/** 2 */
			Yes
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}