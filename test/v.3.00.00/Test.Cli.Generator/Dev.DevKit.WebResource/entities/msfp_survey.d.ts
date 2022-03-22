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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsfp_survey_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_survey_Information */
		Body: DevKit.Formmsfp_survey_Information.Body;
		/** The Process of form msfp_survey_Information */
		Process: DevKit.Formmsfp_survey_Information.Process;
		/** The SidePanes of form msfp_survey_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msfp_surveyApi {
		/**
		* DynamicsCrm.DevKit msfp_surveyApi
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
		/** Unique identifier for Inspection Template associated with Survey. */
		msdyn_Inspection: string;
		/** Specifies if responses can be accepted from anonymous respondents. */
		msfp_acceptanonymousresponses: boolean;
		/** Link to the anonymous survey response. */
		msfp_anonymousurl: string;
		/** Description of the survey. */
		msfp_description: string;
		/** Embed code for the survey */
		msfp_embedcode: string;
		/** End date and time of the survey, if configured. */
		msfp_enddate_UtcDateAndTime: Date;
		/** Friendly name of the survey. */
		msfp_friendlyname: string;
		/** The name of the custom entity. */
		msfp_name: string;
		/** Other survey properties in JSON format. */
		msfp_otherproperties: string;
		/** Permanent ID is auto-generated for a new survey. For a copied survey, the ID is carried over from the original survey. */
		msfp_PermanentID: string;
		/** Project associated with the survey. */
		msfp_project: string;
		/** User who published the survey. */
		msfp_publishedby: string;
		/** Date and time on which the survey was published. */
		msfp_publishedon_UtcDateAndTime: Date;
		/** Unique identifier for the survey in the source application. */
		msfp_sourcesurveyidentifier: string;
		/** Date when a survey is modified in source. */
		msfp_sourcesurveymodifieddate_UtcDateOnly: Date;
		/** Version number of the survey. */
		msfp_sourcesurveyversion: string;
		/** Start date and time of the survey, if configured. */
		msfp_startdate_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		msfp_surveyId: string;
		/** Source through which the survey was created. */
		msfp_surveysource: string;
		/** Link to the survey in Customer Voice. */
		msfp_surveyurl: string;
		/** Stores survey variables and their default values in JSON format. */
		msfp_variables: string;
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
		/** Status of the Survey */
		statecode: OptionSet.msfp_survey.statecode;
		/** Reason for the status of the Survey */
		statuscode: OptionSet.msfp_survey.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}