//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTopicModelConfiguration_Information {
		interface tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2_Sections {
		}
		interface tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B_Sections {
			_5E0987A5_6DEC_4225_BBB4_7CC1F9DD8347: DevKit.Controls.Section;
		}
		interface tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2 extends DevKit.Controls.ITab {
			Section: tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2_Sections;
		}
		interface tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B extends DevKit.Controls.ITab {
			Section: tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B_Sections;
		}
		interface Tabs {
			_29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2: tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2;
			_C9B62E5D_9925_479D_87BA_DBE9FA64B47B: tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B;
		}
		interface Body {
			Tab: Tabs;
			/** Specify the data filter configured to filter records. */
			DataFilter: DevKit.Controls.String;
			/** Enter a description for the model */
			Description: DevKit.Controls.String;
			/** Type a logical name for the model. */
			Name: DevKit.Controls.String;
			/** Select the time window to filter on for the last number of days or weeks. */
			TimeFilter: DevKit.Controls.OptionSet;
			/** Time Filter Duration */
			TimeFilterDuration: DevKit.Controls.Integer;
		}
		interface Grid {
			textanalyticsentitymappings: DevKit.Controls.Grid;
		}
	}
	class FormTopicModelConfiguration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form TopicModelConfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TopicModelConfiguration_Information */
		Body: DevKit.FormTopicModelConfiguration_Information.Body;
		/** The Grid of form TopicModelConfiguration_Information */
		Grid: DevKit.FormTopicModelConfiguration_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace TopicModelConfiguration {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum TimeFilter {
			/** 1 */
			Last_N_Days,
			/** 2 */
			Last_N_Weeks
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