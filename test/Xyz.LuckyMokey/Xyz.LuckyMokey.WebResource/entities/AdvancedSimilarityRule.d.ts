//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAdvancedSimilarityRule_Information {
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections {
		}
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections {
			_0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D extends DevKit.Form.Controls.IControlTab {
			Section: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections;
		}
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0 extends DevKit.Form.Controls.IControlTab {
			Section: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections;
		}
		interface Tabs {
			_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D;
			_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0;
		}
		interface Body {
			Tab: Tabs;
			textanalyticsentitymappings: DevKit.Form.Controls.ControlGrid;
			/** Enter a description for the Advanced Similarity Rule */
			Description: DevKit.Form.Controls.ControlString;
			/** Filter Result By Status */
			FilterResultByStatus: DevKit.Form.Controls.ControlOptionSet;
			filterresultbystatus_UC: DevKit.Form.Controls.ControlActionCards;
			/** Type a logical name for the similarity configuration */
			name: DevKit.Form.Controls.ControlString;
			/** Provide noise key phrases by a semicolon ( ; ). These phrases will be filtered while searching for similar cases */
			NoiseKeyphraseslist: DevKit.Form.Controls.ControlString;
			/** Enter an entity that similar records will be suggested for */
			SourceEntity: DevKit.Form.Controls.ControlString;
			sourceentity_UC: DevKit.Form.Controls.ControlActionCards;
		}
	}
	class FormAdvancedSimilarityRule_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form AdvancedSimilarityRule_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form AdvancedSimilarityRule_Information */
		Body: LuckyMokey.FormAdvancedSimilarityRule_Information.Body;
	}
}
declare namespace OptionSet {
	namespace AdvancedSimilarityRule {
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
		enum FilterResultByStatus {
			/** 0 */
			Active,
			/** 1 */
			Inactive
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