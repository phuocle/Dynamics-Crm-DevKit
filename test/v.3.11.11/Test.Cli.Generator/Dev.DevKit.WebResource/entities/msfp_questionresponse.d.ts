//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_questionresponse_Information {
		interface tab_Summary_Sections {
			General: DevKit.Controls.Section;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Stores key Phrases from text response. */
			msfp_keyphrases: DevKit.Controls.String;
			/** The name of the custom entity. */
			msfp_name: DevKit.Controls.String;
			/** Question associated with the question response. */
			msfp_questionid: DevKit.Controls.Lookup;
			/** Question response value as string. */
			msfp_response: DevKit.Controls.String;
			/** Sentiment of the question response. */
			msfp_Sentimentvalue: DevKit.Controls.Decimal;
			/** Survey response associated with the question response. */
			msfp_surveyresponseid: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsfp_questionresponse_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_questionresponse_Information */
		Body: DevKit.Formmsfp_questionresponse_Information.Body;
		/** The Process of form msfp_questionresponse_Information */
		Process: DevKit.Formmsfp_questionresponse_Information.Process;
		/** The SidePanes of form msfp_questionresponse_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msfp_questionresponseApi {
		/**
		* DynamicsCrm.DevKit msfp_questionresponseApi
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
		/** Stores key Phrases from text response. */
		msfp_keyphrases: string;
		/** The name of the custom entity. */
		msfp_name: string;
		/** Other question response properties in JSON format. */
		msfp_otherproperties: string;
		/** Question associated with the question response. */
		msfp_questionid: string;
		/** Unique identifier for entity instances */
		msfp_questionresponseId: string;
		/** Question response value as string. */
		msfp_response: string;
		/** Sentiment of the question response. */
		msfp_Sentimentvalue: number;
		/** Unique identifier for the question in the source application. */
		msfp_sourcequestionidentifier: string;
		/** Unique identifier for the response in the source application. */
		msfp_sourceresponseidentifier: string;
		/** Unique identifier for the survey in the source application. */
		msfp_sourcesurveyidentifier: string;
		/** Survey response associated with the question response. */
		msfp_surveyresponseid: string;
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
		/** Status of the Survey question response */
		statecode: OptionSet.msfp_questionresponse.statecode;
		/** Reason for the status of the Survey question response */
		statuscode: OptionSet.msfp_questionresponse.statuscode;
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
			/** Stores key Phrases from text response. */
			readonly msfp_keyphrases: string;
			/** The name of the custom entity. */
			readonly msfp_name: string;
			/** Other question response properties in JSON format. */
			readonly msfp_otherproperties: string;
			/** Question associated with the question response. */
			readonly msfp_questionid: string;
			/** Unique identifier for entity instances */
			readonly msfp_questionresponseId: string;
			/** Question response value as string. */
			readonly msfp_response: string;
			/** Sentiment of the question response. */
			readonly msfp_Sentimentvalue: string;
			/** Unique identifier for the question in the source application. */
			readonly msfp_sourcequestionidentifier: string;
			/** Unique identifier for the response in the source application. */
			readonly msfp_sourceresponseidentifier: string;
			/** Unique identifier for the survey in the source application. */
			readonly msfp_sourcesurveyidentifier: string;
			/** Survey response associated with the question response. */
			readonly msfp_surveyresponseid: string;
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
			/** Status of the Survey question response */
			readonly statecode: string;
			/** Reason for the status of the Survey question response */
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
	namespace msfp_questionresponse {
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