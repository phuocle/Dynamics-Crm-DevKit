//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTopicModel_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the time when topic analysis will stop */
			EndTime: DevKit.Controls.DateTime;
			/** Shows the time when topic analysis will start according to the recurrence schedule. */
			StartTime: DevKit.Controls.DateTime;
			/** Shows the status of the topic model build */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab__27D0B923_9D79_470D_924A_80C3367D5556_Sections {
			_2AF8CA63_6895_463A_B9E4_F22012AB5B84: DevKit.Controls.Section;
		}
		interface tab__5CC8F085_E248_47E6_956C_383F40B24D2B_Sections {
			_5BF12C70_CEAD_4BCD_BD01_5C5FC0D28E78: DevKit.Controls.Section;
		}
		interface tab__27D0B923_9D79_470D_924A_80C3367D5556 extends DevKit.Controls.ITab {
			Section: tab__27D0B923_9D79_470D_924A_80C3367D5556_Sections;
		}
		interface tab__5CC8F085_E248_47E6_956C_383F40B24D2B extends DevKit.Controls.ITab {
			Section: tab__5CC8F085_E248_47E6_956C_383F40B24D2B_Sections;
		}
		interface Tabs {
			_27D0B923_9D79_470D_924A_80C3367D5556: tab__27D0B923_9D79_470D_924A_80C3367D5556;
			_5CC8F085_E248_47E6_956C_383F40B24D2B: tab__5CC8F085_E248_47E6_956C_383F40B24D2B;
		}
		interface Body {
			Tab: Tabs;
			/** Shows how frequently topic analysis is done. */
			BuildRecurrence: DevKit.Controls.String;
			/** Shows the configuration used for topic analysis. */
			ConfigurationUsed: DevKit.Controls.Lookup;
			/** Enter a description for the model. */
			Description: DevKit.Controls.String;
			/** Shows the maximum number of topics to be determined. */
			MaxTopics: DevKit.Controls.Integer;
			/** Shows the name of the topic model. */
			Name: DevKit.Controls.String;
			/** Shows the entity whose records are used for topic analysis. */
			SourceEntity: DevKit.Controls.String;
		}
		interface Grid {
			modelconfigurations: DevKit.Controls.Grid;
			topicmodelexecutionhistory: DevKit.Controls.Grid;
		}
	}
	class FormTopicModel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form TopicModel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TopicModel_Information */
		Body: DevKit.FormTopicModel_Information.Body;
		/** The Header section of form TopicModel_Information */
		Header: DevKit.FormTopicModel_Information.Header;
		/** The Grid of form TopicModel_Information */
		Grid: DevKit.FormTopicModel_Information.Grid;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}