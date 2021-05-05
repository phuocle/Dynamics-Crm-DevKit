//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMailMergeTemplate_Information {
		interface tab_general_Sections {
			Details: DevKit.Controls.Section;
			Categorization: DevKit.Controls.Section;
			Ownership: DevKit.Controls.Section;
			Language: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the mail merge template. */
			Description: DevKit.Controls.String;
			/** Information about whether the mail merge template is personal or is available to all users. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Language of the mail merge template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Name of the mail merge template. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the mail merge template. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type of mail merge template. */
			TemplateTypeCode: DevKit.Controls.String;
		}
	}
	class FormMailMergeTemplate_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form MailMergeTemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form MailMergeTemplate_Information */
		Body: DevKit.FormMailMergeTemplate_Information.Body;
	}
	class MailMergeTemplateApi {
		/**
		* DynamicsCrm.DevKit MailMergeTemplateApi
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
		/** Body text of the mail merge template. */
		Body: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the mail merge template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the mail merge template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the mailmergetemplate. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Default data fields associated with the mail merge template. */
		DefaultFilter: DevKit.WebApi.StringValue;
		/** Description of the mail merge template. */
		Description: DevKit.WebApi.StringValue;
		/** Version of the Microsoft Office Word XML format used by the template. */
		DocumentFormat: DevKit.WebApi.OptionSetValue;
		/** Exchange rate for the currency associated with the mailmergetemplate with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** File name of the mail merge template. */
		FileName: DevKit.WebApi.StringValue;
		/** File size of the mail merge template. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the mail merge template is personal or is available to all users. */
		IsPersonal: DevKit.WebApi.BooleanValue;
		/** Language of the mail merge template. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the mail merge template. */
		MailMergeTemplateId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		MailMergeTemplateIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Drop-down list for selecting the type of the mail merge. */
		MailMergeType: DevKit.WebApi.OptionSetValue;
		/** MIME type of the mail merge template. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the mail merge template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the mail merge template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the mailmergetemplate. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the mail merge template. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the mail merge template. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the mail merge template. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the mail merge template. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Parameter Xml. */
		ParameterXml: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the mail merge template. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the mail merge template. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the mailmergetemplate. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the mail merge template. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MailMergeTemplate {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum DocumentFormat {
			/** 1 */
			_2003,
			/** 2 */
			_2007
		}
		enum MailMergeType {
			/** 2 */
			Email_Message,
			/** 3 */
			Envelope,
			/** 6 */
			Fax,
			/** 4 */
			Labels,
			/** 1 */
			Letter,
			/** 5 */
			Quotes
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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