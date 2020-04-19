//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsfp_survey_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Specifies if responses can be accepted from anonymous respondents. */
			msfp_acceptanonymousresponses: DevKit.Form.Controls.ControlBoolean;
			/** Description of the survey. */
			msfp_description: DevKit.Form.Controls.ControlString;
			/** Friendly name of the survey. */
			msfp_friendlyname: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msfp_name: DevKit.Form.Controls.ControlString;
			/** Other survey properties in JSON format. */
			msfp_otherproperties: DevKit.Form.Controls.ControlString;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Form.Controls.ControlString;
			/** Date when a survey is modified in source. */
			msfp_sourcesurveymodifieddate: DevKit.Form.Controls.ControlDate;
			/** Link to the survey in Microsoft Forms Pro. */
			msfp_surveyurl: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsfp_survey_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_survey_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msfp_survey_Information */
		Body: LuckyMokey.Formmsfp_survey_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msfp_survey {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 100000000 */
			Draft,
			/** 100000003 */
			Published,
			/** 2 */
			Inactive,
			/** 100000002 */
			Deleted
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