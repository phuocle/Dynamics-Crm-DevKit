//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_emailtemplate_New_Form {
		interface Tabs {
		}
		interface Body {
			/** Language of the email message template */
			msfp_language: DevKit.Controls.String;
			/** The name of the custom entity. */
			msfp_name: DevKit.Controls.String;
			/** Version of the email message template */
			msfp_version: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsfp_emailtemplate_New_Form extends DevKit.IForm {
		/**
		* New Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_emailtemplate_New_Form */
		Body: DevKit.Formmsfp_emailtemplate_New_Form.Body;
		/** The Process of form msfp_emailtemplate_New_Form */
		Process: DevKit.Formmsfp_emailtemplate_New_Form.Process;
		/** The SidePanes of form msfp_emailtemplate_New_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msfp_emailtemplateApi {
		/**
		* DynamicsCrm.DevKit msfp_emailtemplateApi
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
		/** Specifies if the email template can be deleted. */
		msfp_Candelete: DevKit.WebApi.BooleanValue;
		/** Specifies if the email template can be edited. */
		msfp_Canedit: DevKit.WebApi.BooleanValue;
		/** Specifies if the email template can be renamed. */
		msfp_Canrename: DevKit.WebApi.BooleanValue;
		/** Stores body of the email template. */
		msfp_emailtemplatebody: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msfp_emailtemplateId: DevKit.WebApi.GuidValue;
		/** Stores subject of the email template. */
		msfp_emailtemplatesubject: DevKit.WebApi.StringValue;
		/** Language of the email message template */
		msfp_language: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msfp_name: DevKit.WebApi.StringValue;
		/** Unique identifier for the survey in the source application. */
		msfp_sourcesurveyidentifier: DevKit.WebApi.StringValue;
		/** Unique identifier for Customer Voice survey associated with Customer Voice survey email template. */
		msfp_survey: DevKit.WebApi.LookupValue;
		/** Stores tags added to the email template. */
		msfp_tags: DevKit.WebApi.StringValue;
		/** Determines the type of template. */
		msfp_templatetype: DevKit.WebApi.OptionSetValue;
		/** Version of the email message template */
		msfp_version: DevKit.WebApi.StringValue;
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
		/** Status of the Survey email template */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Survey email template */
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
	namespace msfp_emailtemplate {
		enum msfp_templatetype {
			/** 647390001 */
			Survey,
			/** 647390000 */
			User
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}