//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKbArticle_Information {
		interface tab__B641B7D4_753C_C99A_5978_977E6912E856_Sections {
			/** Comments */
			_493D7206_6935_E73D_75CC_44DC53D021E8: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			/** Article Information */
			article_information: DevKit.Controls.Section;
			/** Article Keywords */
			Article_Keywords: DevKit.Controls.Section;
			/** Web Portal Display */
			general_section_4: DevKit.Controls.Section;
			/** KB Article Data */
			kb_article_description: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}
		/** Comments */
		interface tab__B641B7D4_753C_C99A_5978_977E6912E856 extends DevKit.Controls.ITab {
			Section: tab__B641B7D4_753C_C99A_5978_977E6912E856_Sections;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		/** Notes */
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			/** Comments */
			_B641B7D4_753C_C99A_5978_977E6912E856: tab__B641B7D4_753C_C99A_5978_977E6912E856;
			/** General */
			general: tab_general;
			/** Notes */
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
		interface Grid {
			/** Article Comments (Article) */
			ArticleComments: DevKit.Controls.Grid;
		}
	}
	export class FormKbArticle_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form KbArticle_Information */
		Body: DevKit.FormKbArticle_Information.Body;
		/** The Grid of form KbArticle_Information */
		Grid: DevKit.FormKbArticle_Information.Grid;
	}
	export class KbArticleApi {
		/**
		* DynamicsCrm.DevKit KbArticleApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** The average rating of this article. */
		adx_averagerating: number | null;
		/** The average rating of this article, rounded to a whole number (positive integer). */
		adx_averagerating_int: number | null;
		/** The number of negative vote ratings applied to this article. */
		adx_downvotes: number | null;
		adx_ratingcount: number | null;
		/** The sum of the values of all ratings applied to this article. */
		adx_ratingsum: number | null;
		/** The number of positive vote ratings applied to this article. */
		adx_upvotes: number | null;
		/** Shows the article content and formatting, stored as XML. */
		ArticleXml: string | null;
		/** Comments regarding the knowledge base article. */
		Comments: string | null;
		/** Description of the content of the knowledge base article. */
		readonly Content: string | null;
		/** Unique identifier of the user who created the knowledge base article. */
		readonly CreatedBy: string | null;
		/** Date and time when the knowledge base article was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the article. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information that describes the knowledge base article. */
		Description: string | null;
		/** The default image for the entity. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Shows the ID of the article. */
		KbArticleId: string | null;
		/** Choose the template that you want to use as a base for creating the new article. */
		KbArticleTemplateId: string | null;
		/** Keywords to be used for searches in knowledge base articles. */
		KeyWords: string | null;
		/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
		LanguageCode: number | null;
		/** Unique identifier of the user who last modified the knowledge base article. */
		readonly ModifiedBy: string | null;
		/** Date and time when the knowledge base article was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the kbarticle. */
		readonly ModifiedOnBehalfBy: string | null;
		/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
		msa_publishtoweb: boolean | null;
		/** Knowledge base article number. */
		readonly Number: string | null;
		/** Unique identifier of the organization associated with the article. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Shows whether the knowledge base article is in draft, unapproved, or published status. Published articles are read-only and can't be edited unless they are unpublished. */
		StateCode: OptionSet.KbArticle.StateCode | null;
		/** Select the article's status. */
		StatusCode: OptionSet.KbArticle.StatusCode | null;
		/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
		SubjectId: string | null;
		/** Type a subject or descriptive name for the article to assist with article searches. */
		Title: string | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** Title of the knowledge base article. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Draft = 1*/
			Draft = 1,
			/** Published = 3*/
			Published = 3,
			/** Unapproved = 2*/
			Unapproved = 2
		}
		enum StatusCode {
			/** Draft = 1*/
			Draft = 1,
			/** Published = 3*/
			Published = 3,
			/** Unapproved = 2*/
			Unapproved = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}