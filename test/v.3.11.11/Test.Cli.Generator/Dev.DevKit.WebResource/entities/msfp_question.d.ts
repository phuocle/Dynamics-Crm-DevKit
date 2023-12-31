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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsfp_question_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_question_Information */
		Body: DevKit.Formmsfp_question_Information.Body;
		/** The Process of form msfp_question_Information */
		Process: DevKit.Formmsfp_question_Information.Process;
		/** The SidePanes of form msfp_question_Information */
		SidePanes: DevKit.SidePanes;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows whether the question accepts single line or multiple lines of response. */
		msfp_choicetype: OptionSet.msfp_question.msfp_choicetype;
		/** Stores the correct answer in case of quizzes. */
		msfp_correctanswer: string;
		/** Question image properties in JSON format. */
		msfp_imageproperties: string;
		/** Stores maximum rating of rating question type */
		msfp_Maximumrating: number;
		/** Shows if the text question is multiple lines or not */
		msfp_multiline: boolean;
		/** The name of the custom entity. */
		msfp_name: string;
		/** Order of the question in the survey. */
		msfp_order: number;
		/** Stores other question properties in JSON format. */
		msfp_otherproperties: string;
		/** Permanent ID is auto-generated for a new survey question. For a copied survey, the ID is carried over from the original survey question. */
		msfp_PermanentID: string;
		/** Stores the list of answer options */
		msfp_questionchoices: string;
		/** Unique identifier for entity instances */
		msfp_questionId: string;
		/** Text of the question in the survey. */
		msfp_questiontext: string;
		/** Stores the type of question to display. */
		msfp_questiontype: OptionSet.msfp_question.msfp_questiontype;
		/** Shows if the question is mandatory. */
		msfp_responserequired: boolean;
		/** Order of the question in the survey. */
		msfp_sequence: number;
		/** Unique identifier for the parent question in the source application. */
		msfp_sourceparentquestionidentifier: string;
		/** Unique identifier for the question in the source application. */
		msfp_Sourcequestionidentifier: string;
		/** Unique identifier for the survey in the source application. */
		msfp_sourcesurveyidentifier: string;
		/** Stores subtitle of a question. */
		msfp_subtitle: string;
		/** Unique identifier of the survey to which the question belongs. */
		msfp_Survey: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Question */
		statecode: OptionSet.msfp_question.statecode;
		/** Reason for the status of the Question */
		statuscode: OptionSet.msfp_question.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows whether the question accepts single line or multiple lines of response. */
			readonly msfp_choicetype: string;
			/** Stores the correct answer in case of quizzes. */
			readonly msfp_correctanswer: string;
			/** Question image properties in JSON format. */
			readonly msfp_imageproperties: string;
			/** Stores maximum rating of rating question type */
			readonly msfp_Maximumrating: string;
			/** Shows if the text question is multiple lines or not */
			readonly msfp_multiline: string;
			/** The name of the custom entity. */
			readonly msfp_name: string;
			/** Order of the question in the survey. */
			readonly msfp_order: string;
			/** Stores other question properties in JSON format. */
			readonly msfp_otherproperties: string;
			/** Permanent ID is auto-generated for a new survey question. For a copied survey, the ID is carried over from the original survey question. */
			readonly msfp_PermanentID: string;
			/** Stores the list of answer options */
			readonly msfp_questionchoices: string;
			/** Unique identifier for entity instances */
			readonly msfp_questionId: string;
			/** Text of the question in the survey. */
			readonly msfp_questiontext: string;
			/** Stores the type of question to display. */
			readonly msfp_questiontype: string;
			/** Shows if the question is mandatory. */
			readonly msfp_responserequired: string;
			/** Order of the question in the survey. */
			readonly msfp_sequence: string;
			/** Unique identifier for the parent question in the source application. */
			readonly msfp_sourceparentquestionidentifier: string;
			/** Unique identifier for the question in the source application. */
			readonly msfp_Sourcequestionidentifier: string;
			/** Unique identifier for the survey in the source application. */
			readonly msfp_sourcesurveyidentifier: string;
			/** Stores subtitle of a question. */
			readonly msfp_subtitle: string;
			/** Unique identifier of the survey to which the question belongs. */
			readonly msfp_Survey: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Question */
			readonly statecode: string;
			/** Reason for the status of the Question */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}