//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledge_Article {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Select the article's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_analytics_Sections {
			Cases: DevKit.Controls.Section;
			Feedback: DevKit.Controls.Section;
			Views: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			Content: DevKit.Controls.Section;
			Knowledge_Information: DevKit.Controls.Section;
		}
		interface tab_summary_Sections {
			Portal_Settings: DevKit.Controls.Section;
			Publish_Settings: DevKit.Controls.Section;
			ref_pan_Related: DevKit.Controls.Section;
			Timeline: DevKit.Controls.Section;
		}
		interface tab_analytics extends DevKit.Controls.ITab {
			Section: tab_analytics_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_summary extends DevKit.Controls.ITab {
			Section: tab_summary_Sections;
		}
		interface Tabs {
			analytics: tab_analytics;
			general: tab_general;
			summary: tab_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the automatically generated ID exposed to customers, partners, and other external users to reference and look up articles. */
			ArticlePublicNumber: DevKit.Controls.String;
			content: DevKit.Controls.ActionCards;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** A short overview of the article, primarily used in search results and for search engine optimization. */
			Description: DevKit.Controls.String;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Shows whether this article is only visible internally. */
			IsInternal: DevKit.Controls.Boolean;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Controls.String;
			/** Shows the total number of article views. */
			KnowledgeArticleViews: DevKit.Controls.Integer;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Shows the major version number of this article's content. */
			MajorVersionNumber: DevKit.Controls.Integer;
			/** Shows the minor version number of this article's content. */
			MinorVersionNumber: DevKit.Controls.Integer;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Contains the id of the parent article content associated with the entity. */
			ParentArticleContentId: DevKit.Controls.Lookup;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Date and time when the record was published. */
			PublishOn: DevKit.Controls.DateTime;
			/** Information which specifies how helpful the related record was. */
			Rating: DevKit.Controls.Decimal;
			/** Contains the id of the root article. */
			RootArticleId: DevKit.Controls.Lookup;
			/** Select the article's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a title for the article. */
			Title: DevKit.Controls.String;
			webResource_allowed_origins_disclaimer: DevKit.Controls.WebResource;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows the major version number of this article's content. */
			MajorVersionNumber: DevKit.Controls.Integer;
			/** Shows the minor version number of this article's content. */
			MinorVersionNumber: DevKit.Controls.Integer;
		}
		interface ProcessExpired_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate_1: DevKit.Controls.DateTime;
			/** Expired Review Options */
			ExpiredReviewOptions: DevKit.Controls.OptionSet;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Controls.Boolean;
			/** Set Product Associations */
			SetProductAssociations_1: DevKit.Controls.Boolean;
			/** Update Content */
			UpdateContent: DevKit.Controls.Boolean;
		}
		interface ProcessNew_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Controls.String;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Ready For Review */
			ReadyForReview: DevKit.Controls.Boolean;
			/** Review */
			Review: DevKit.Controls.OptionSet;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Controls.Boolean;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Update Content */
			UpdateContent: DevKit.Controls.Boolean;
		}
		interface ProcessTranslation_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
			Expired_Process: ProcessExpired_Process;
			New_Process: ProcessNew_Process;
			Translation_Process: ProcessTranslation_Process;
		}
		interface Grid {
			customerassetsubgrid: DevKit.Controls.Grid;
			Feedback: DevKit.Controls.Grid;
			incidenttypesubgrid: DevKit.Controls.Grid;
			KnowledgearticleviewsGrid: DevKit.Controls.Grid;
			productsubgrid: DevKit.Controls.Grid;
			RelatedCasesGrid: DevKit.Controls.Grid;
			RelatedCategoriesGrid: DevKit.Controls.Grid;
			RelatedTranslationsGrid: DevKit.Controls.Grid;
			workordersubgrid: DevKit.Controls.Grid;
		}
	}
	class FormKnowledge_Article extends DevKit.IForm {
		/**
		* Knowledge Article [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Knowledge_Article */
		Body: DevKit.FormKnowledge_Article.Body;
		/** The Footer section of form Knowledge_Article */
		Footer: DevKit.FormKnowledge_Article.Footer;
		/** The Header section of form Knowledge_Article */
		Header: DevKit.FormKnowledge_Article.Header;
		/** The Process of form Knowledge_Article */
		Process: DevKit.FormKnowledge_Article.Process;
		/** The Grid of form Knowledge_Article */
		Grid: DevKit.FormKnowledge_Article.Grid;
		/** The SidePanes of form Knowledge_Article */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormKnowledge_Article_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Select the article's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_analytics_Sections {
			Cases: DevKit.Controls.Section;
			Feedback: DevKit.Controls.Section;
			Views: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			Content: DevKit.Controls.Section;
			Knowledge_Information: DevKit.Controls.Section;
			Knowledge_Suggestion: DevKit.Controls.Section;
			KnowledgeArticleAttachmentSectionV2: DevKit.Controls.Section;
		}
		interface tab_summary_Sections {
			Portal_Settings: DevKit.Controls.Section;
			Publish_Settings: DevKit.Controls.Section;
			ref_pan_Related: DevKit.Controls.Section;
			Timeline: DevKit.Controls.Section;
		}
		interface tab_analytics extends DevKit.Controls.ITab {
			Section: tab_analytics_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_summary extends DevKit.Controls.ITab {
			Section: tab_summary_Sections;
		}
		interface Tabs {
			analytics: tab_analytics;
			general: tab_general;
			summary: tab_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the automatically generated ID exposed to customers, partners, and other external users to reference and look up articles. */
			ArticlePublicNumber: DevKit.Controls.String;
			content: DevKit.Controls.ActionCards;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** A short overview of the article, primarily used in search results and for search engine optimization. */
			Description: DevKit.Controls.String;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Shows whether this article is only visible internally. */
			IsInternal: DevKit.Controls.Boolean;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Controls.String;
			/** Shows the total number of article views. */
			KnowledgeArticleViews: DevKit.Controls.Integer;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Shows the major version number of this article's content. */
			MajorVersionNumber: DevKit.Controls.Integer;
			/** Shows the minor version number of this article's content. */
			MinorVersionNumber: DevKit.Controls.Integer;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_keywordsdescsuggestioncontrol: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Contains the id of the parent article content associated with the entity. */
			ParentArticleContentId: DevKit.Controls.Lookup;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Date and time when the record was published. */
			PublishOn: DevKit.Controls.DateTime;
			/** Information which specifies how helpful the related record was. */
			Rating: DevKit.Controls.Decimal;
			/** Contains the id of the root article. */
			RootArticleId: DevKit.Controls.Lookup;
			/** Select the article's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a title for the article. */
			Title: DevKit.Controls.String;
			webResource_allowed_origins_disclaimer: DevKit.Controls.WebResource;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows the major version number of this article's content. */
			MajorVersionNumber: DevKit.Controls.Integer;
			/** Shows the minor version number of this article's content. */
			MinorVersionNumber: DevKit.Controls.Integer;
		}
		interface ProcessExpired_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate_1: DevKit.Controls.DateTime;
			/** Expired Review Options */
			ExpiredReviewOptions: DevKit.Controls.OptionSet;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Controls.Boolean;
			/** Set Product Associations */
			SetProductAssociations_1: DevKit.Controls.Boolean;
			/** Update Content */
			UpdateContent: DevKit.Controls.Boolean;
		}
		interface ProcessNew_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Controls.String;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Ready For Review */
			ReadyForReview: DevKit.Controls.Boolean;
			/** Review */
			Review: DevKit.Controls.OptionSet;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Controls.Boolean;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Update Content */
			UpdateContent: DevKit.Controls.Boolean;
		}
		interface ProcessTranslation_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
			Expired_Process: ProcessExpired_Process;
			New_Process: ProcessNew_Process;
			Translation_Process: ProcessTranslation_Process;
		}
		interface Grid {
			AssociatedProductsGrid: DevKit.Controls.Grid;
			Feedback: DevKit.Controls.Grid;
			KnowledgeArticleAttachmentControl: DevKit.Controls.Grid;
			KnowledgearticleviewsGrid: DevKit.Controls.Grid;
			RelatedCasesGrid: DevKit.Controls.Grid;
			RelatedCategoriesGrid: DevKit.Controls.Grid;
			RelatedTranslationsGrid: DevKit.Controls.Grid;
		}
	}
	class FormKnowledge_Article_for_Interactive_experience extends DevKit.IForm {
		/**
		* Knowledge Article for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Knowledge_Article_for_Interactive_experience */
		Body: DevKit.FormKnowledge_Article_for_Interactive_experience.Body;
		/** The Footer section of form Knowledge_Article_for_Interactive_experience */
		Footer: DevKit.FormKnowledge_Article_for_Interactive_experience.Footer;
		/** The Header section of form Knowledge_Article_for_Interactive_experience */
		Header: DevKit.FormKnowledge_Article_for_Interactive_experience.Header;
		/** The Process of form Knowledge_Article_for_Interactive_experience */
		Process: DevKit.FormKnowledge_Article_for_Interactive_experience.Process;
		/** The Grid of form Knowledge_Article_for_Interactive_experience */
		Grid: DevKit.FormKnowledge_Article_for_Interactive_experience.Grid;
		/** The SidePanes of form Knowledge_Article_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormKnowledge_Article_Quick_Create {
		interface tab_newKnowledgeArticle_Sections {
			quickKnowledgeArticle: DevKit.Controls.Section;
			quickKnowledgecontent: DevKit.Controls.Section;
			quickKnowledgeowner: DevKit.Controls.Section;
		}
		interface tab_newKnowledgeArticle extends DevKit.Controls.ITab {
			Section: tab_newKnowledgeArticle_Sections;
		}
		interface Tabs {
			newKnowledgeArticle: tab_newKnowledgeArticle;
		}
		interface Body {
			Tab: Tabs;
			/** A short overview of the article, primarily used in search results and for search engine optimization. */
			Description: DevKit.Controls.String;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Controls.String;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Controls.Lookup;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Type a title for the article. */
			Title: DevKit.Controls.String;
		}
	}
	class FormKnowledge_Article_Quick_Create extends DevKit.IForm {
		/**
		* Knowledge Article Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Knowledge_Article_Quick_Create */
		Body: DevKit.FormKnowledge_Article_Quick_Create.Body;
	}
	class KnowledgeArticleApi {
		/**
		* DynamicsCrm.DevKit KnowledgeArticleApi
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
		/** Shows the automatically generated ID exposed to customers, partners, and other external users to reference and look up articles. */
		ArticlePublicNumber: string;
		/** Shows the body of the article stored in HTML format. */
		Content: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** A short overview of the article, primarily used in search results and for search engine optimization. */
		Description: string;
		/** Exchange rate for the currency associated with the KnowledgeArticle with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
		ExpirationDate_UtcDateAndTime: Date;
		/** Contains the id of the expiration state of the entity. */
		ExpirationStateId: number;
		/** Contains the id of the expiration status of the entity. */
		ExpirationStatusId: number;
		/** Expired Review Options */
		ExpiredReviewOptions: OptionSet.KnowledgeArticle.ExpiredReviewOptions;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows whether this article is only visible internally. */
		IsInternal: boolean;
		/** Shows which version of the knowledge article is the latest version. */
		IsLatestVersion: boolean;
		/** Select whether the article is the primary article. */
		IsPrimary: boolean;
		/** Select whether the article is the root article. */
		IsRootArticle: boolean;
		/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
		Keywords: string;
		/** Unique identifier for entity instances */
		knowledgearticleId: string;
		/** Shows the total number of article views. */
		readonly KnowledgeArticleViews: number;
		/** The date time for Knowledge Article View. */
		readonly KnowledgeArticleViews_Date_UtcDateAndTime: Date;
		/** State of Knowledge Article View. */
		readonly KnowledgeArticleViews_State: number;
		/** Select the language that the article's content is in. */
		LanguageLocaleId: string;
		/** Shows the major version number of this article's content. */
		MajorVersionNumber: number;
		/** Shows the minor version number of this article's content. */
		MinorVersionNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Stores the reference to content field in the knowledge article */
		readonly msdyn_contentstore: string;
		/** Ingested article URL */
		msdyn_ingestedarticleurl: string;
		/** Sets whether the article content is synced to file storage */
		msdyn_iscontentsyncedtostore: boolean;
		/** Value is true for all Ingested articles */
		msdyn_isingestedarticle: boolean;
		msdyn_keywordsdescsuggestioncontrol: boolean;
		/** Displays the number of times migration to file storage retry is attempted for an article */
		msdyn_retrycountformigrationtocontentstore: number;
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
		/** Contains the id of the parent article content associated with the entity. */
		ParentArticleContentId: string;
		/** Shows the version that the current article was restored from. */
		PreviousArticleContentId: string;
		/** Contains the id of the primary author associated with the article. */
		primaryauthorid: string;
		/** Contains the id of the process associated with the entity. */
		processid: string;
		/** Date and time when the record was published. */
		PublishOn_UtcDateAndTime: Date;
		/** Publish Status of the Article. */
		PublishStatusId: number;
		/** Information which specifies how helpful the related record was. */
		readonly Rating: number;
		/** Rating Count */
		readonly Rating_Count: number;
		/** The date time for Rating. */
		readonly Rating_Date_UtcDateAndTime: Date;
		/** State of Rating */
		readonly Rating_State: number;
		/** Total sum of Rating */
		readonly Rating_Sum: number;
		/** Ready For Review */
		ReadyForReview: boolean;
		/** Review */
		Review: OptionSet.KnowledgeArticle.Review;
		/** Contains the id of the root article. */
		RootArticleId: string;
		/** Contains the id of the scheduled status of the entity. */
		ScheduledStatusId: number;
		/** Shows whether category associations have been set */
		SetCategoryAssociations: boolean;
		/** Set Product Associations */
		SetProductAssociations: boolean;
		/** Contains the id of the stage where the entity is located. */
		stageid: string;
		/** Shows whether the article is a draft or is published, archived, or discarded. Draft articles aren't available externally and can be edited. Published articles are available externally, based on applicable permissions, but can't be edited. All metadata changes are reflected in the published version. Archived and discarded articles aren't available externally and can't be edited. */
		StateCode: OptionSet.KnowledgeArticle.StateCode;
		/** Select the article's status. */
		StatusCode: OptionSet.KnowledgeArticle.StatusCode;
		/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
		SubjectId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type a title for the article. */
		Title: string;
		/** Exchange rate for the currency associated with the KnowledgeArticle with respect to the base currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: string;
		/** Update Content */
		UpdateContent: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows the automatically generated ID exposed to customers, partners, and other external users to reference and look up articles. */
			readonly ArticlePublicNumber: string;
			/** Shows the body of the article stored in HTML format. */
			readonly Content: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** A short overview of the article, primarily used in search results and for search engine optimization. */
			readonly Description: string;
			/** Exchange rate for the currency associated with the KnowledgeArticle with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			readonly ExpirationDate_UtcDateAndTime: string;
			/** Contains the id of the expiration state of the entity. */
			readonly ExpirationStateId: string;
			/** Contains the id of the expiration status of the entity. */
			readonly ExpirationStatusId: string;
			/** Expired Review Options */
			readonly ExpiredReviewOptions: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows whether this article is only visible internally. */
			readonly IsInternal: string;
			/** Shows which version of the knowledge article is the latest version. */
			readonly IsLatestVersion: string;
			/** Select whether the article is the primary article. */
			readonly IsPrimary: string;
			/** Select whether the article is the root article. */
			readonly IsRootArticle: string;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			readonly Keywords: string;
			/** Unique identifier for entity instances */
			readonly knowledgearticleId: string;
			/** Shows the total number of article views. */
			readonly KnowledgeArticleViews: string;
			/** The date time for Knowledge Article View. */
			readonly KnowledgeArticleViews_Date_UtcDateAndTime: string;
			/** State of Knowledge Article View. */
			readonly KnowledgeArticleViews_State: string;
			/** Select the language that the article's content is in. */
			readonly LanguageLocaleId: string;
			/** Shows the major version number of this article's content. */
			readonly MajorVersionNumber: string;
			/** Shows the minor version number of this article's content. */
			readonly MinorVersionNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Stores the reference to content field in the knowledge article */
			readonly msdyn_contentstore: string;
			/** Ingested article URL */
			readonly msdyn_ingestedarticleurl: string;
			/** Sets whether the article content is synced to file storage */
			readonly msdyn_iscontentsyncedtostore: string;
			/** Value is true for all Ingested articles */
			readonly msdyn_isingestedarticle: string;
			readonly msdyn_keywordsdescsuggestioncontrol: string;
			/** Displays the number of times migration to file storage retry is attempted for an article */
			readonly msdyn_retrycountformigrationtocontentstore: string;
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
			/** Contains the id of the parent article content associated with the entity. */
			readonly ParentArticleContentId: string;
			/** Shows the version that the current article was restored from. */
			readonly PreviousArticleContentId: string;
			/** Contains the id of the primary author associated with the article. */
			readonly primaryauthorid: string;
			/** Contains the id of the process associated with the entity. */
			readonly processid: string;
			/** Date and time when the record was published. */
			readonly PublishOn_UtcDateAndTime: string;
			/** Publish Status of the Article. */
			readonly PublishStatusId: string;
			/** Information which specifies how helpful the related record was. */
			readonly Rating: string;
			/** Rating Count */
			readonly Rating_Count: string;
			/** The date time for Rating. */
			readonly Rating_Date_UtcDateAndTime: string;
			/** State of Rating */
			readonly Rating_State: string;
			/** Total sum of Rating */
			readonly Rating_Sum: string;
			/** Ready For Review */
			readonly ReadyForReview: string;
			/** Review */
			readonly Review: string;
			/** Contains the id of the root article. */
			readonly RootArticleId: string;
			/** Contains the id of the scheduled status of the entity. */
			readonly ScheduledStatusId: string;
			/** Shows whether category associations have been set */
			readonly SetCategoryAssociations: string;
			/** Set Product Associations */
			readonly SetProductAssociations: string;
			/** Contains the id of the stage where the entity is located. */
			readonly stageid: string;
			/** Shows whether the article is a draft or is published, archived, or discarded. Draft articles aren't available externally and can be edited. Published articles are available externally, based on applicable permissions, but can't be edited. All metadata changes are reflected in the published version. Archived and discarded articles aren't available externally and can't be edited. */
			readonly StateCode: string;
			/** Select the article's status. */
			readonly StatusCode: string;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			readonly SubjectId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type a title for the article. */
			readonly Title: string;
			/** Exchange rate for the currency associated with the KnowledgeArticle with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly traversedpath: string;
			/** Update Content */
			readonly UpdateContent: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticle {
		enum ExpiredReviewOptions {
			/** 2 */
			Archive,
			/** 0 */
			Needs_Updating,
			/** 1 */
			Republish
		}
		enum OwnerIdType {
		}
		enum Review {
			/** 0 */
			Approved,
			/** 1 */
			Rejected
		}
		enum StateCode {
			/** 1 */
			Approved,
			/** 5 */
			Archived,
			/** 6 */
			Discarded,
			/** 0 */
			Draft,
			/** 4 */
			Expired,
			/** 3 */
			Published,
			/** 2 */
			Scheduled
		}
		enum StatusCode {
			/** 5 */
			Approved,
			/** 12 */
			Archived,
			/** 13 */
			Discarded,
			/** 2 */
			Draft,
			/** 10 */
			Expired,
			/** 4 */
			In_review,
			/** 3 */
			Needs_review_3,
			/** 8 */
			Needs_review_8,
			/** 1 */
			Proposed,
			/** 7 */
			Published,
			/** 11 */
			Rejected_11,
			/** 14 */
			Rejected_14,
			/** 6 */
			Scheduled,
			/** 9 */
			Updating
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