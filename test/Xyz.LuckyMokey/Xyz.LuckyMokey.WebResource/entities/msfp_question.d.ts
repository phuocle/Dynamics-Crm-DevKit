//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsfp_question_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** The name of the custom entity. */
			msfp_name: DevKit.Form.Controls.ControlString;
			/** Order of the question in the survey. */
			msfp_order: DevKit.Form.Controls.ControlDecimal;
			/** Text of the question in the survey. */
			msfp_questiontext: DevKit.Form.Controls.ControlString;
			/** Stores the type of question to display. */
			msfp_questiontype: DevKit.Form.Controls.ControlOptionSet;
			/** Shows if the question is mandatory. */
			msfp_responserequired: DevKit.Form.Controls.ControlBoolean;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Form.Controls.ControlString;
			/** Stores subtitle of a question. */
			msfp_subtitle: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the survey to which the question belongs. */
			msfp_Survey: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsfp_question_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_question_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msfp_question_Information */
		Body: LuckyMokey.Formmsfp_question_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msfp_question {
		enum msfp_choicetype {
			/** 647390000 */
			Single_choice,
			/** 647390001 */
			Multi_choice,
			/** 647390002 */
			none
		}
		enum msfp_questiontype {
			/** 647390000 */
			Choice,
			/** 647390001 */
			Text,
			/** 647390002 */
			Rating,
			/** 647390003 */
			Date,
			/** 647390004 */
			Ranking,
			/** 647390005 */
			MatrixChoiceGroup,
			/** 647390006 */
			MatrixChoice,
			/** 647390007 */
			NPS,
			/** 647390008 */
			File_Upload,
			/** 647390009 */
			Number,
			/** 647390010 */
			Date_and_time,
			/** 647390011 */
			Drop_down
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}