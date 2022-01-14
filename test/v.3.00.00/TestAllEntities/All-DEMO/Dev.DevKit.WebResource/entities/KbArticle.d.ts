//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKbArticle_Information {
		interface tab__B641B7D4_753C_C99A_5978_977E6912E856_Sections {
			_493D7206_6935_E73D_75CC_44DC53D021E8: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			article_information: DevKit.Controls.Section;
			Article_Keywords: DevKit.Controls.Section;
			kbarticle_description: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab__B641B7D4_753C_C99A_5978_977E6912E856 extends DevKit.Controls.ITab {
			Section: tab__B641B7D4_753C_C99A_5978_977E6912E856_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			_B641B7D4_753C_C99A_5978_977E6912E856: tab__B641B7D4_753C_C99A_5978_977E6912E856;
			general: tab_general;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the article content and formatting, stored as XML. */
			ArticleXml: DevKit.Controls.String;
			/** Keywords to be used for searches in knowledge base articles. */
			KeyWords: DevKit.Controls.String;
			/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
			LanguageCode: DevKit.Controls.Integer;
			notescontrol: DevKit.Controls.Note;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name for the article to assist with article searches. */
			Title: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows whether the knowledge base article is in draft, unapproved, or published status. Published articles are read-only and can't be edited unless they are unpublished. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ArticleComments: DevKit.Controls.Grid;
		}
	}
	class FormKbArticle_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form KbArticle_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KbArticle_Information */
		Body: DevKit.FormKbArticle_Information.Body;
		/** The Footer section of form KbArticle_Information */
		Footer: DevKit.FormKbArticle_Information.Footer;
		/** The Process of form KbArticle_Information */
		Process: DevKit.FormKbArticle_Information.Process;
		/** The Grid of form KbArticle_Information */
		Grid: DevKit.FormKbArticle_Information.Grid;
		/** The SidePanes of form KbArticle_Information */
		SidePanes: DevKit.SidePanes;
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
			/** 3 */
			Published,
			/** 2 */
			Unapproved
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 3 */
			Published,
			/** 2 */
			Unapproved
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