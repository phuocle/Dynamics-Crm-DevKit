//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormKbArticle_Information {
		interface tab_general_Sections {
			article_information: DevKit.Form.Controls.ControlSection;
			Article_Keywords: DevKit.Form.Controls.ControlSection;
			kb_article_description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B641B7D4_753C_C99A_5978_977E6912E856_Sections {
			_493D7206_6935_E73D_75CC_44DC53D021E8: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface tab__B641B7D4_753C_C99A_5978_977E6912E856 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B641B7D4_753C_C99A_5978_977E6912E856_Sections;
		}
		interface Tabs {
			general: tab_general;
			notes: tab_notes;
			_B641B7D4_753C_C99A_5978_977E6912E856: tab__B641B7D4_753C_C99A_5978_977E6912E856;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ArticleComments: DevKit.Form.Controls.ControlGrid;
			/** Shows the article content and formatting, stored as XML. */
			ArticleXml: DevKit.Form.Controls.ControlString;
			/** Keywords to be used for searches in knowledge base articles. */
			KeyWords: DevKit.Form.Controls.ControlString;
			/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
			LanguageCode: DevKit.Form.Controls.ControlInteger;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a subject or descriptive name for the article to assist with article searches. */
			Title: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Shows whether the knowledge base article is in draft, unapproved, or published status. Published articles are read-only and can't be edited unless they are unpublished. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormKbArticle_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form KbArticle_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KbArticle_Information */
		Body: MyDog.FormKbArticle_Information.Body;
		/** The Footer section of form KbArticle_Information */
		Footer: MyDog.FormKbArticle_Information.Footer;
	}
	class KbArticleApi {
		/**
		* DynamicsCrm.DevKit KbArticleApi
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
		/** Shows the article content and formatting, stored as XML. */
		ArticleXml: DevKit.WebApi.StringValue;
		/** Comments regarding the knowledge base article. */
		Comments: DevKit.WebApi.StringValue;
		/** Description of the content of the knowledge base article. */
		Content: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the user who created the knowledge base article. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the knowledge base article was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the article. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information that describes the knowledge base article. */
		Description: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows the ID of the article. */
		KbArticleId: DevKit.WebApi.GuidValue;
		/** Choose the template that you want to use as a base for creating the new article. */
		KbArticleTemplateId: DevKit.WebApi.LookupValue;
		/** Title of the associated knowledge base article template. */
		KbArticleTemplateIdTitle: DevKit.WebApi.StringValueReadonly;
		/** Keywords to be used for searches in knowledge base articles. */
		KeyWords: DevKit.WebApi.StringValue;
		/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the knowledge base article. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the knowledge base article was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the kbarticle. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Knowledge base article number. */
		Number: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the organization associated with the article. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows whether the knowledge base article is in draft, unapproved, or published status. Published articles are read-only and can't be edited unless they are unpublished. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the article's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
		SubjectId: DevKit.WebApi.LookupValue;
		/** Type a subject or descriptive name for the article to assist with article searches. */
		Title: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Title of the knowledge base article. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace KbArticle {
		enum StateCode {
			/** 1 */
			Draft,
			/** 2 */
			Unapproved,
			/** 3 */
			Published
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Unapproved,
			/** 3 */
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}