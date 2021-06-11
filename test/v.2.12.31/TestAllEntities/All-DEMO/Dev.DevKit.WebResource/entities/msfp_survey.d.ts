//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_survey_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Specifies if responses can be accepted from anonymous respondents. */
			msfp_acceptanonymousresponses: DevKit.Controls.Boolean;
			/** Description of the survey. */
			msfp_description: DevKit.Controls.String;
			/** Friendly name of the survey. */
			msfp_friendlyname: DevKit.Controls.String;
			/** The name of the custom entity. */
			msfp_name: DevKit.Controls.String;
			/** Other survey properties in JSON format. */
			msfp_otherproperties: DevKit.Controls.String;
			/** Project associated with the survey. */
			msfp_project: DevKit.Controls.Lookup;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Controls.String;
			/** Date when a survey is modified in source. */
			msfp_sourcesurveymodifieddate: DevKit.Controls.Date;
			/** Link to the survey in Customer Voice. */
			msfp_surveyurl: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsfp_survey_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_survey_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_survey_Information */
		Body: DevKit.Formmsfp_survey_Information.Body;
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
			/** 100000002 */
			Deleted,
			/** 100000000 */
			Draft,
			/** 2 */
			Inactive,
			/** 100000003 */
			Published
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