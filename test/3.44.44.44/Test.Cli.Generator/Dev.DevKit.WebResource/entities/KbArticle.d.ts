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
			general_section_4: DevKit.Controls.Section;
			kb_article_description: DevKit.Controls.Section;
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
			/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
			msa_publishtoweb: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name for the article to assist with article searches. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			kbarticle_comments: DevKit.Controls.NavigationItem,
			kbarticle_incidents: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ArticleComments: DevKit.Controls.Grid;
		}
	}
	class FormKbArticle_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KbArticle_Information */
		Body: DevKit.FormKbArticle_Information.Body;
		/** The Navigation of form KbArticle_Information */
		Navigation: DevKit.FormKbArticle_Information.Navigation;
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
		/** The average rating of this article. */
		adx_averagerating: number;
		/** The average rating of this article, rounded to a whole number (positive integer). */
		adx_averagerating_int: number;
		/** The number of negative vote ratings applied to this article. */
		adx_downvotes: number;
		adx_ratingcount: number;
		/** The sum of the values of all ratings applied to this article. */
		adx_ratingsum: number;
		/** The number of positive vote ratings applied to this article. */
		adx_upvotes: number;
		/** Shows the article content and formatting, stored as XML. */
		ArticleXml: string;
		/** Comments regarding the knowledge base article. */
		Comments: string;
		/** Description of the content of the knowledge base article. */
		readonly Content: string;
		/** Unique identifier of the user who created the knowledge base article. */
		readonly CreatedBy: string;
		/** Date and time when the knowledge base article was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the article. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information that describes the knowledge base article. */
		Description: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Shows the ID of the article. */
		KbArticleId: string;
		/** Choose the template that you want to use as a base for creating the new article. */
		KbArticleTemplateId: string;
		/** Keywords to be used for searches in knowledge base articles. */
		KeyWords: string;
		/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
		LanguageCode: number;
		/** Unique identifier of the user who last modified the knowledge base article. */
		readonly ModifiedBy: string;
		/** Date and time when the knowledge base article was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the kbarticle. */
		readonly ModifiedOnBehalfBy: string;
		/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
		msa_publishtoweb: boolean;
		/** Knowledge base article number. */
		readonly Number: string;
		/** Unique identifier of the organization associated with the article. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Shows whether the knowledge base article is in draft, unapproved, or published status. Published articles are read-only and can't be edited unless they are unpublished. */
		StateCode: OptionSet.KbArticle.StateCode;
		/** Select the article's status. */
		StatusCode: OptionSet.KbArticle.StatusCode;
		/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
		SubjectId: string;
		/** Type a subject or descriptive name for the article to assist with article searches. */
		Title: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Title of the knowledge base article. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** The average rating of this article. */
			readonly adx_averagerating: string;
			/** The average rating of this article, rounded to a whole number (positive integer). */
			readonly adx_averagerating_int: string;
			/** The number of negative vote ratings applied to this article. */
			readonly adx_downvotes: string;
			readonly adx_ratingcount: string;
			/** The sum of the values of all ratings applied to this article. */
			readonly adx_ratingsum: string;
			/** The number of positive vote ratings applied to this article. */
			readonly adx_upvotes: string;
			/** Shows the article content and formatting, stored as XML. */
			readonly ArticleXml: string;
			/** Comments regarding the knowledge base article. */
			readonly Comments: string;
			/** Description of the content of the knowledge base article. */
			readonly Content: string;
			/** Unique identifier of the user who created the knowledge base article. */
			readonly CreatedBy: string;
			/** Date and time when the knowledge base article was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the article. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information that describes the knowledge base article. */
			readonly Description: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows the ID of the article. */
			readonly KbArticleId: string;
			/** Choose the template that you want to use as a base for creating the new article. */
			readonly KbArticleTemplateId: string;
			/** Keywords to be used for searches in knowledge base articles. */
			readonly KeyWords: string;
			/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
			readonly LanguageCode: string;
			/** Unique identifier of the user who last modified the knowledge base article. */
			readonly ModifiedBy: string;
			/** Date and time when the knowledge base article was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the kbarticle. */
			readonly ModifiedOnBehalfBy: string;
			/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
			readonly msa_publishtoweb: string;
			/** Knowledge base article number. */
			readonly Number: string;
			/** Unique identifier of the organization associated with the article. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows whether the knowledge base article is in draft, unapproved, or published status. Published articles are read-only and can't be edited unless they are unpublished. */
			readonly StateCode: string;
			/** Select the article's status. */
			readonly StatusCode: string;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			readonly SubjectId: string;
			/** Type a subject or descriptive name for the article to assist with article searches. */
			readonly Title: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Title of the knowledge base article. */
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}