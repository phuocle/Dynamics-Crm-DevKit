//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_question_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			msfp_name: DevKit.Controls.String;
			/** Order of the question in the survey. */
			msfp_order: DevKit.Controls.Decimal;
			/** Text of the question in the survey. */
			msfp_questiontext: DevKit.Controls.String;
			/** Stores the type of question to display. */
			msfp_questiontype: DevKit.Controls.OptionSet;
			/** Shows if the question is mandatory. */
			msfp_responserequired: DevKit.Controls.Boolean;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Controls.String;
			/** Stores subtitle of a question. */
			msfp_subtitle: DevKit.Controls.String;
			/** Unique identifier of the survey to which the question belongs. */
			msfp_Survey: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsfp_question_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_question_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_question_Information */
		Body: DevKit.Formmsfp_question_Information.Body;
	}
	class msfp_questionApi {
		/**
		* DynamicsCrm.DevKit msfp_questionApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the question accepts single line or multiple lines of response. */
		msfp_choicetype: DevKit.WebApi.OptionSetValue;
		/** Stores the correct answer in case of quizzes. */
		msfp_correctanswer: DevKit.WebApi.StringValue;
		/** Question image properties in JSON format. */
		msfp_imageproperties: DevKit.WebApi.StringValue;
		/** Stores maximum rating of rating question type */
		msfp_Maximumrating: DevKit.WebApi.IntegerValue;
		/** Shows if the text question is multiple lines or not */
		msfp_multiline: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msfp_name: DevKit.WebApi.StringValue;
		/** Order of the question in the survey. */
		msfp_order: DevKit.WebApi.DecimalValue;
		/** Stores other question properties in JSON format. */
		msfp_otherproperties: DevKit.WebApi.StringValue;
		/** Permanent ID is auto-generated for a new survey question. For a copied survey, the ID is carried over from the original survey question. */
		msfp_PermanentID: DevKit.WebApi.StringValue;
		/** Stores the list of answer options */
		msfp_questionchoices: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msfp_questionId: DevKit.WebApi.GuidValue;
		/** Text of the question in the survey. */
		msfp_questiontext: DevKit.WebApi.StringValue;
		/** Stores the type of question to display. */
		msfp_questiontype: DevKit.WebApi.OptionSetValue;
		/** Shows if the question is mandatory. */
		msfp_responserequired: DevKit.WebApi.BooleanValue;
		/** Order of the question in the survey. */
		msfp_sequence: DevKit.WebApi.IntegerValue;
		/** Unique identifier for the parent question in the source application. */
		msfp_sourceparentquestionidentifier: DevKit.WebApi.StringValue;
		/** Unique identifier for the question in the source application. */
		msfp_Sourcequestionidentifier: DevKit.WebApi.StringValue;
		/** Unique identifier for the survey in the source application. */
		msfp_sourcesurveyidentifier: DevKit.WebApi.StringValue;
		/** Stores subtitle of a question. */
		msfp_subtitle: DevKit.WebApi.StringValue;
		/** Unique identifier of the survey to which the question belongs. */
		msfp_Survey: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Question */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Question */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msfp_question {
		enum msfp_choicetype {
			/** 647390001 */
			Multi_choice,
			/** 647390002 */
			none,
			/** 647390000 */
			Single_choice
		}
		enum msfp_questiontype {
			/** 647390000 */
			Choice,
			/** 647390003 */
			Date,
			/** 647390010 */
			Date_and_time,
			/** 647390011 */
			Drop_down,
			/** 647390008 */
			File_Upload,
			/** 647390006 */
			MatrixChoice,
			/** 647390005 */
			MatrixChoiceGroup,
			/** 647390007 */
			NPS,
			/** 647390009 */
			Number,
			/** 647390004 */
			Ranking,
			/** 647390002 */
			Rating,
			/** 647390001 */
			Text
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}