//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormTopicModel_Information {
		interface Header {
			/** Shows the time when topic analysis will stop */
			EndTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the time when topic analysis will start according to the recurrence schedule. */
			StartTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the status of the topic model build */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__27D0B923_9D79_470D_924A_80C3367D5556_Sections {
			_2AF8CA63_6895_463A_B9E4_F22012AB5B84: DevKit.Form.Controls.ControlSection;
		}
		interface tab__5CC8F085_E248_47E6_956C_383F40B24D2B_Sections {
			_5BF12C70_CEAD_4BCD_BD01_5C5FC0D28E78: DevKit.Form.Controls.ControlSection;
		}
		interface tab__27D0B923_9D79_470D_924A_80C3367D5556 extends DevKit.Form.Controls.IControlTab {
			Section: tab__27D0B923_9D79_470D_924A_80C3367D5556_Sections;
		}
		interface tab__5CC8F085_E248_47E6_956C_383F40B24D2B extends DevKit.Form.Controls.IControlTab {
			Section: tab__5CC8F085_E248_47E6_956C_383F40B24D2B_Sections;
		}
		interface Tabs {
			_27D0B923_9D79_470D_924A_80C3367D5556: tab__27D0B923_9D79_470D_924A_80C3367D5556;
			_5CC8F085_E248_47E6_956C_383F40B24D2B: tab__5CC8F085_E248_47E6_956C_383F40B24D2B;
		}
		interface Body {
			Tab: Tabs;
			modelconfigurations: DevKit.Form.Controls.ControlGrid;
			topicmodelexecutionhistory: DevKit.Form.Controls.ControlGrid;
			/** Shows how frequently topic analysis is done. */
			BuildRecurrence: DevKit.Form.Controls.ControlString;
			/** Shows the configuration used for topic analysis. */
			ConfigurationUsed: DevKit.Form.Controls.ControlLookup;
			/** Enter a description for the model. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the maximum number of topics to be determined. */
			MaxTopics: DevKit.Form.Controls.ControlInteger;
			/** Shows the name of the topic model. */
			Name: DevKit.Form.Controls.ControlString;
			/** Shows the entity whose records are used for topic analysis. */
			SourceEntity: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTopicModel_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form TopicModel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form TopicModel_Information */
		Body: LuckyMokey.FormTopicModel_Information.Body;
		/** The Header section of form TopicModel_Information */
		Header: LuckyMokey.FormTopicModel_Information.Header;
	}
}
declare namespace OptionSet {
	namespace TopicModel {
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