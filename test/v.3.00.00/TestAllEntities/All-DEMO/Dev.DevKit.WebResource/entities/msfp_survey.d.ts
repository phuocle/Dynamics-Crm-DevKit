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
		* DynamicsCrm.DevKit form msfp_survey_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_survey_Information */
		Body: DevKit.Formmsfp_survey_Information.Body;
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
		/** Unique identifier for Inspection Template associated with Survey. */
		msdyn_Inspection: DevKit.WebApi.LookupValue;
		/** Specifies if responses can be accepted from anonymous respondents. */
		msfp_acceptanonymousresponses: DevKit.WebApi.BooleanValue;
		/** Link to the anonymous survey response. */
		msfp_anonymousurl: DevKit.WebApi.StringValue;
		/** Description of the survey. */
		msfp_description: DevKit.WebApi.StringValue;
		/** Embed code for the survey */
		msfp_embedcode: DevKit.WebApi.StringValue;
		/** End date and time of the survey, if configured. */
		msfp_enddate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Friendly name of the survey. */
		msfp_friendlyname: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msfp_name: DevKit.WebApi.StringValue;
		/** Other survey properties in JSON format. */
		msfp_otherproperties: DevKit.WebApi.StringValue;
		/** Permanent ID is auto-generated for a new survey. For a copied survey, the ID is carried over from the original survey. */
		msfp_PermanentID: DevKit.WebApi.StringValue;
		/** Project associated with the survey. */
		msfp_project: DevKit.WebApi.LookupValue;
		/** User who published the survey. */
		msfp_publishedby: DevKit.WebApi.LookupValue;
		/** Date and time on which the survey was published. */
		msfp_publishedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier for the survey in the source application. */
		msfp_sourcesurveyidentifier: DevKit.WebApi.StringValue;
		/** Date when a survey is modified in source. */
		msfp_sourcesurveymodifieddate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Version number of the survey. */
		msfp_sourcesurveyversion: DevKit.WebApi.StringValue;
		/** Start date and time of the survey, if configured. */
		msfp_startdate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier for entity instances */
		msfp_surveyId: DevKit.WebApi.GuidValue;
		/** Source through which the survey was created. */
		msfp_surveysource: DevKit.WebApi.StringValue;
		/** Link to the survey in Customer Voice. */
		msfp_surveyurl: DevKit.WebApi.StringValue;
		/** Stores survey variables and their default values in JSON format. */
		msfp_variables: DevKit.WebApi.StringValue;
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
		/** Status of the Survey */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Survey */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}