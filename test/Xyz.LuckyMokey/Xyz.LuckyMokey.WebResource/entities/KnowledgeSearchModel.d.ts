//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormKnowledgeSearchModel_Information {
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections {
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections {
			_87C466A2_37F3_4CDE_A484_C6C75EFF544D: DevKit.Form.Controls.ControlSection;
		}
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65 extends DevKit.Form.Controls.IControlTab {
			Section: tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections;
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC extends DevKit.Form.Controls.IControlTab {
			Section: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections;
		}
		interface Tabs {
			_5B6AE5E5_8F54_4363_B906_48722F438B65: tab__5B6AE5E5_8F54_4363_B906_48722F438B65;
			_6A04C119_906C_4D8D_84D6_A470E79CBFCC: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC;
		}
		interface Body {
			Tab: Tabs;
			textanalyticsentitymappings: DevKit.Form.Controls.ControlGrid;
			/** Enter a description for the search configuration */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
			MaxKeyWords: DevKit.Form.Controls.ControlInteger;
			/** Type a logical name for the search configuration. */
			Name: DevKit.Form.Controls.ControlString;
			/** Enter an entity that articles are suggested for. */
			SourceEntity: DevKit.Form.Controls.ControlString;
		}
	}
	class FormKnowledgeSearchModel_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form KnowledgeSearchModel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KnowledgeSearchModel_Information */
		Body: LuckyMokey.FormKnowledgeSearchModel_Information.Body;
	}
}
declare namespace OptionSet {
	namespace KnowledgeSearchModel {
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
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}