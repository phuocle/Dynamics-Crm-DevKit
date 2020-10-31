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
		/** Specifies if responses can be accepted from anonymous respondents. */
		msfp_acceptanonymousresponses: DevKit.WebApi.BooleanValue;
		/** Link to the anonymous survey response. */
		msfp_anonymousurl: DevKit.WebApi.StringValue;
		/** Description of the survey. */
		msfp_description: DevKit.WebApi.StringValue;
		/** Embed code for the survey */
		msfp_embedcode: DevKit.WebApi.StringValue;
		/** Friendly name of the survey. */
		msfp_friendlyname: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msfp_name: DevKit.WebApi.StringValue;
		/** Other survey properties in JSON format. */
		msfp_otherproperties: DevKit.WebApi.StringValue;
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
		/** Unique identifier for entity instances */
		msfp_surveyId: DevKit.WebApi.GuidValue;
		/** Source through which the survey was created. */
		msfp_surveysource: DevKit.WebApi.StringValue;
		/** Link to the survey in Microsoft Forms Pro. */
		msfp_surveyurl: DevKit.WebApi.StringValue;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}