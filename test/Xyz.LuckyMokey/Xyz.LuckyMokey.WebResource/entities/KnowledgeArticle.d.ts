//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormKnowledge_Article {
		interface Header {
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Form.Controls.ControlLookup;
			/** Select the article's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			Knowledge_Information: DevKit.Form.Controls.ControlSection;
			Content: DevKit.Form.Controls.ControlSection;
		}
		interface tab_summary_Sections {
			Portal_Settings: DevKit.Form.Controls.ControlSection;
			Publish_Settings: DevKit.Form.Controls.ControlSection;
			Timeline: DevKit.Form.Controls.ControlSection;
		}
		interface tab_analytics_Sections {
			Views: DevKit.Form.Controls.ControlSection;
			Feedback: DevKit.Form.Controls.ControlSection;
			Cases: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_summary_Sections;
		}
		interface tab_analytics extends DevKit.Form.Controls.IControlTab {
			Section: tab_analytics_Sections;
		}
		interface Tabs {
			general: tab_general;
			summary: tab_summary;
			analytics: tab_analytics;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			KnowledgearticleviewsGrid: DevKit.Form.Controls.ControlGrid;
			Feedback: DevKit.Form.Controls.ControlGrid;
			RelatedCasesGrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the automatically generated ID exposed to customers, partners, and other external users to reference and look up articles. */
			ArticlePublicNumber: DevKit.Form.Controls.ControlString;
			content: DevKit.Form.Controls.ControlActionCards;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** A short overview of the article, primarily used in search results and for search engine optimization. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether this article is only visible internally. */
			IsInternal: DevKit.Form.Controls.ControlBoolean;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Form.Controls.ControlString;
			/** Shows the total number of article views. */
			KnowledgeArticleViews: DevKit.Form.Controls.ControlInteger;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Form.Controls.ControlLookup;
			/** Shows the major version number of this article's content. */
			MajorVersionNumber: DevKit.Form.Controls.ControlInteger;
			/** Shows the minor version number of this article's content. */
			MinorVersionNumber: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Contains the id of the parent article content associated with the entity. */
			ParentArticleContentId: DevKit.Form.Controls.ControlLookup;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was published. */
			PublishOn: DevKit.Form.Controls.ControlDateTime;
			/** Information which specifies how helpful the related record was. */
			Rating: DevKit.Form.Controls.ControlDecimal;
			/** Contains the id of the root article. */
			RootArticleId: DevKit.Form.Controls.ControlLookup;
			/** Select the article's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a title for the article. */
			Title: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Shows the major version number of this article's content. */
			MajorVersionNumber: DevKit.Form.Controls.ControlInteger;
			/** Shows the minor version number of this article's content. */
			MinorVersionNumber: DevKit.Form.Controls.ControlInteger;
		}
		interface ProcessNew_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Form.Controls.ControlString;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Form.Controls.ControlLookup;
			/** Ready For Review */
			ReadyForReview: DevKit.Form.Controls.ControlBoolean;
			/** Review */
			Review: DevKit.Form.Controls.ControlOptionSet;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Form.Controls.ControlBoolean;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Update Content */
			UpdateContent: DevKit.Form.Controls.ControlBoolean;
		}
		interface ProcessTranslation_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Form.Controls.ControlLookup;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Form.Controls.ControlBoolean;
		}
		interface ProcessExpired_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate_1: DevKit.Form.Controls.ControlDateTime;
			/** Expired Review Options */
			ExpiredReviewOptions: DevKit.Form.Controls.ControlOptionSet;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Form.Controls.ControlBoolean;
			/** Set Product Associations */
			SetProductAssociations_1: DevKit.Form.Controls.ControlBoolean;
			/** Update Content */
			UpdateContent: DevKit.Form.Controls.ControlBoolean;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			New_Process: ProcessNew_Process;
			Translation_Process: ProcessTranslation_Process;
			Expired_Process: ProcessExpired_Process;
		}
	}
	class FormKnowledge_Article extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Knowledge_Article
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Knowledge_Article */
		Body: LuckyMokey.FormKnowledge_Article.Body;
		/** The Footer section of form Knowledge_Article */
		Footer: LuckyMokey.FormKnowledge_Article.Footer;
		/** The Header section of form Knowledge_Article */
		Header: LuckyMokey.FormKnowledge_Article.Header;
		/** The Process of form Knowledge_Article */
		Process: LuckyMokey.FormKnowledge_Article.Process;
	}
	namespace FormKnowledge_Article_for_Interactive_experience {
		interface Header {
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Form.Controls.ControlLookup;
			/** Select the article's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			Knowledge_Information: DevKit.Form.Controls.ControlSection;
			Content: DevKit.Form.Controls.ControlSection;
		}
		interface tab_summary_Sections {
			Portal_Settings: DevKit.Form.Controls.ControlSection;
			Publish_Settings: DevKit.Form.Controls.ControlSection;
			Timeline: DevKit.Form.Controls.ControlSection;
		}
		interface tab_analytics_Sections {
			Views: DevKit.Form.Controls.ControlSection;
			Feedback: DevKit.Form.Controls.ControlSection;
			Cases: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_summary_Sections;
		}
		interface tab_analytics extends DevKit.Form.Controls.IControlTab {
			Section: tab_analytics_Sections;
		}
		interface Tabs {
			general: tab_general;
			summary: tab_summary;
			analytics: tab_analytics;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			KnowledgearticleviewsGrid: DevKit.Form.Controls.ControlGrid;
			Feedback: DevKit.Form.Controls.ControlGrid;
			RelatedCasesGrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the automatically generated ID exposed to customers, partners, and other external users to reference and look up articles. */
			ArticlePublicNumber: DevKit.Form.Controls.ControlString;
			content: DevKit.Form.Controls.ControlActionCards;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** A short overview of the article, primarily used in search results and for search engine optimization. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether this article is only visible internally. */
			IsInternal: DevKit.Form.Controls.ControlBoolean;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Form.Controls.ControlString;
			/** Shows the total number of article views. */
			KnowledgeArticleViews: DevKit.Form.Controls.ControlInteger;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Form.Controls.ControlLookup;
			/** Shows the major version number of this article's content. */
			MajorVersionNumber: DevKit.Form.Controls.ControlInteger;
			/** Shows the minor version number of this article's content. */
			MinorVersionNumber: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user or team who owns the record. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Contains the id of the parent article content associated with the entity. */
			ParentArticleContentId: DevKit.Form.Controls.ControlLookup;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was published. */
			PublishOn: DevKit.Form.Controls.ControlDateTime;
			/** Information which specifies how helpful the related record was. */
			Rating: DevKit.Form.Controls.ControlDecimal;
			/** Contains the id of the root article. */
			RootArticleId: DevKit.Form.Controls.ControlLookup;
			/** Select the article's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a title for the article. */
			Title: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Shows the major version number of this article's content. */
			MajorVersionNumber: DevKit.Form.Controls.ControlInteger;
			/** Shows the minor version number of this article's content. */
			MinorVersionNumber: DevKit.Form.Controls.ControlInteger;
		}
		interface ProcessNew_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
			Keywords: DevKit.Form.Controls.ControlString;
			/** Contains the id of the primary author associated with the article. */
			primaryauthorid: DevKit.Form.Controls.ControlLookup;
			/** Ready For Review */
			ReadyForReview: DevKit.Form.Controls.ControlBoolean;
			/** Review */
			Review: DevKit.Form.Controls.ControlOptionSet;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Form.Controls.ControlBoolean;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Update Content */
			UpdateContent: DevKit.Form.Controls.ControlBoolean;
		}
		interface ProcessTranslation_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Select the language that the article's content is in. */
			LanguageLocaleId: DevKit.Form.Controls.ControlLookup;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Form.Controls.ControlBoolean;
		}
		interface ProcessExpired_Process {
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
			ExpirationDate_1: DevKit.Form.Controls.ControlDateTime;
			/** Expired Review Options */
			ExpiredReviewOptions: DevKit.Form.Controls.ControlOptionSet;
			/** Set Product Associations */
			SetProductAssociations: DevKit.Form.Controls.ControlBoolean;
			/** Set Product Associations */
			SetProductAssociations_1: DevKit.Form.Controls.ControlBoolean;
			/** Update Content */
			UpdateContent: DevKit.Form.Controls.ControlBoolean;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			New_Process: ProcessNew_Process;
			Translation_Process: ProcessTranslation_Process;
			Expired_Process: ProcessExpired_Process;
		}
	}
	class FormKnowledge_Article_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Knowledge_Article_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Knowledge_Article_for_Interactive_experience */
		Body: LuckyMokey.FormKnowledge_Article_for_Interactive_experience.Body;
		/** The Footer section of form Knowledge_Article_for_Interactive_experience */
		Footer: LuckyMokey.FormKnowledge_Article_for_Interactive_experience.Footer;
		/** The Header section of form Knowledge_Article_for_Interactive_experience */
		Header: LuckyMokey.FormKnowledge_Article_for_Interactive_experience.Header;
		/** The Process of form Knowledge_Article_for_Interactive_experience */
		Process: LuckyMokey.FormKnowledge_Article_for_Interactive_experience.Process;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows the automatically generated ID exposed to customers, partners, and other external users to reference and look up articles. */
		ArticlePublicNumber: DevKit.WebApi.StringValue;
		/** Shows the body of the article stored in HTML format. */
		Content: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** A short overview of the article, primarily used in search results and for search engine optimization. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the KnowledgeArticle with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter an expiration date for the article. Leave this field blank for no expiration date. */
		ExpirationDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Contains the id of the expiration state of the entity. */
		ExpirationStateId: DevKit.WebApi.IntegerValue;
		/** Contains the id of the expiration status of the entity. */
		ExpirationStatusId: DevKit.WebApi.IntegerValue;
		/** Expired Review Options */
		ExpiredReviewOptions: DevKit.WebApi.OptionSetValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows whether this article is only visible internally. */
		IsInternal: DevKit.WebApi.BooleanValue;
		/** Shows which version of the knowledge article is the latest version. */
		IsLatestVersion: DevKit.WebApi.BooleanValue;
		/** Select whether the article is the primary article. */
		IsPrimary: DevKit.WebApi.BooleanValue;
		/** Select whether the article is the root article. */
		IsRootArticle: DevKit.WebApi.BooleanValue;
		/** Type keywords to be used for searches in knowledge base articles. Separate keywords by using commas. */
		Keywords: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		knowledgearticleId: DevKit.WebApi.GuidValue;
		/** Shows the total number of article views. */
		KnowledgeArticleViews: DevKit.WebApi.IntegerValueReadonly;
		/** The date time for Knowledge Article View. */
		KnowledgeArticleViews_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of Knowledge Article View. */
		KnowledgeArticleViews_State: DevKit.WebApi.IntegerValueReadonly;
		/** Select the language that the article's content is in. */
		LanguageLocaleId: DevKit.WebApi.LookupValue;
		LanguageLocaleIdLocaleId: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the major version number of this article's content. */
		MajorVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the minor version number of this article's content. */
		MinorVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
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
		/** Contains the id of the parent article content associated with the entity. */
		ParentArticleContentId: DevKit.WebApi.LookupValue;
		/** Shows the version that the current article was restored from. */
		PreviousArticleContentId: DevKit.WebApi.LookupValue;
		/** Contains the id of the primary author associated with the article. */
		primaryauthorid: DevKit.WebApi.LookupValue;
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Date and time when the record was published. */
		PublishOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Publish Status of the Article. */
		PublishStatusId: DevKit.WebApi.IntegerValue;
		/** Information which specifies how helpful the related record was. */
		Rating: DevKit.WebApi.DecimalValueReadonly;
		/** Rating Count */
		Rating_Count: DevKit.WebApi.IntegerValueReadonly;
		/** The date time for Rating. */
		Rating_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of Rating */
		Rating_State: DevKit.WebApi.IntegerValueReadonly;
		/** Total sum of Rating */
		Rating_Sum: DevKit.WebApi.DecimalValueReadonly;
		/** Ready For Review */
		ReadyForReview: DevKit.WebApi.BooleanValue;
		/** Review */
		Review: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the root article. */
		RootArticleId: DevKit.WebApi.LookupValue;
		/** Contains the id of the scheduled status of the entity. */
		ScheduledStatusId: DevKit.WebApi.IntegerValue;
		/** Shows whether category associations have been set */
		SetCategoryAssociations: DevKit.WebApi.BooleanValue;
		/** Set Product Associations */
		SetProductAssociations: DevKit.WebApi.BooleanValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Shows whether the article is a draft or is published, archived, or discarded. Draft articles aren't available externally and can be edited. Published articles are available externally, based on applicable permissions, but can't be edited. All metadata changes are reflected in the published version. Archived and discarded articles aren't available externally and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the article's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
		SubjectId: DevKit.WebApi.LookupValue;
		SubjectIdDsc: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type a title for the article. */
		Title: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the KnowledgeArticle with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Update Content */
		UpdateContent: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticle {
		enum ExpiredReviewOptions {
			/** 0 */
			Needs_Updating,
			/** 1 */
			Republish,
			/** 2 */
			Archive
		}
		enum Review {
			/** 0 */
			Approved,
			/** 1 */
			Rejected
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Approved,
			/** 2 */
			Scheduled,
			/** 3 */
			Published,
			/** 4 */
			Expired,
			/** 5 */
			Archived,
			/** 6 */
			Discarded
		}
		enum StatusCode {
			/** 1 */
			Proposed,
			/** 2 */
			Draft,
			/** 3,8 */
			Needs_review,
			/** 4 */
			In_review,
			/** 5 */
			Approved,
			/** 6 */
			Scheduled,
			/** 7 */
			Published,
			/** 9 */
			Updating,
			/** 10 */
			Expired,
			/** 11,14 */
			Rejected,
			/** 12 */
			Archived,
			/** 13 */
			Discarded
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
//{'JsForm':['Knowledge Article','Knowledge Article for Interactive experience'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}