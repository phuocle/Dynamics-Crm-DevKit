'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormKnowledge_Article = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ArticlePublicNumber", "Content", "CreatedBy", "CreatedOn", "Description", "ExpirationDate", "Feedback", "IsInternal", "Keywords", "KnowledgeArticleViews", "KnowledgearticleviewsGrid", "LanguageLocaleId", "MajorVersionNumber", "MinorVersionNumber", "ModifiedBy", "ModifiedOn", "msdyn_agentreviewstatus", "msdyn_compliancestatecode", "msdyn_creationmode", "notescontrol", "OwnerId", "ParentArticleContentId", "primaryauthorid", "PublishOn", "Rating", "RelatedCategoriesGrid", "RelatedTranslationsGrid", "RootArticleId", "StatusCode", "SubjectId", "Title", "webResource_allowed_origins_disclaimer", "WebResource_KAComplianceErrorBanner"],
			bpf: ["Expired_Process___ExpirationDate", "Expired_Process___ExpirationDate_1", "Expired_Process___ExpiredReviewOptions", "Expired_Process___UpdateContent", "New_Process___ExpirationDate", "New_Process___Keywords", "New_Process___primaryauthorid", "New_Process___ReadyForReview", "New_Process___Review", "New_Process___SubjectId", "New_Process___UpdateContent", "Translation_Process___ExpirationDate", "Translation_Process___LanguageLocaleId"],
			dialog: [],
			grid: ["Feedback", "KnowledgearticleviewsGrid", "RelatedCategoriesGrid", "RelatedTranslationsGrid"],
			header: ["LanguageLocaleId", "StatusCode"],
			navigation: ["navActivities"],
			quick: [],
			tab: ["analytics___Feedback", "analytics___Views", "general___Content", "general___Knowledge_Information", "summary___Portal_Settings", "summary___Publish_Settings", "summary___Timeline"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormKnowledge_Article_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ArticlePublicNumber", "Content", "CreatedBy", "CreatedOn", "Description", "ExpirationDate", "Feedback", "IsInternal", "Keywords", "KnowledgeArticleAttachmentControl", "KnowledgeArticleViews", "KnowledgearticleviewsGrid", "LanguageLocaleId", "MajorVersionNumber", "MinorVersionNumber", "ModifiedBy", "ModifiedOn", "msdyn_agentreviewstatus", "msdyn_compliancestatecode", "msdyn_creationmode", "notescontrol", "OwnerId", "ParentArticleContentId", "primaryauthorid", "PublishOn", "Rating", "RelatedCategoriesGrid", "RelatedTranslationsGrid", "RootArticleId", "StatusCode", "SubjectId", "Title", "webResource_allowed_origins_disclaimer", "WebResource_KAComplianceErrorBanner"],
			bpf: ["Expired_Process___ExpirationDate", "Expired_Process___ExpirationDate_1", "Expired_Process___ExpiredReviewOptions", "Expired_Process___UpdateContent", "New_Process___ExpirationDate", "New_Process___Keywords", "New_Process___primaryauthorid", "New_Process___ReadyForReview", "New_Process___Review", "New_Process___SubjectId", "New_Process___UpdateContent", "Translation_Process___ExpirationDate", "Translation_Process___LanguageLocaleId"],
			dialog: [],
			grid: ["Feedback", "KnowledgeArticleAttachmentControl", "KnowledgearticleviewsGrid", "RelatedCategoriesGrid", "RelatedTranslationsGrid"],
			header: ["LanguageLocaleId", "StatusCode"],
			navigation: ["navActivities"],
			quick: [],
			tab: ["analytics___Feedback", "analytics___Views", "general___Content", "general___Knowledge_Information", "general___KnowledgeArticleAttachmentSectionV2", "summary___Portal_Settings", "summary___Publish_Settings", "summary___Timeline"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormKnowledge_Article_Quick_Create = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "Keywords", "LanguageLocaleId", "OwnerId", "primaryauthorid", "Title"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["newKnowledgeArticle___quickKnowledgeArticle", "newKnowledgeArticle___quickKnowledgecontent", "newKnowledgeArticle___quickKnowledgeowner"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.KnowledgeArticle = {
		ExpiredReviewOptions: { Archive: 2, Needs_Updating: 0, Republish: 1 },
		msdyn_agentreviewstatus: { Not_Reviewed: 100000000, Reviewed: 100000001 },
		msdyn_compliancestatecode: { Compliant: 100000000, Non_Compliant: 100000001, Pending: 100000002 },
		msdyn_creationmode: { Copilot: 1, Manual: 0 },
		msdyn_sourceofcreation: { BulkHarvest: 3, DraftAssist: 1, Manual: 0, RealTimeHarvest: 2, RealTimeHarvest_Conversation: 4 },
		Review: { Approved: 0, Rejected: 1 },
		StateCode: { Approved: 1, Archived: 5, Discarded: 6, Draft: 0, Expired: 4, Published: 3, Scheduled: 2 },
		StatusCode: { Approved: 5, Archived: 12, Discarded: 13, Draft: 2, Expired: 10, In_review: 4, Needs_review_3: 3, Needs_review_8: 8, Proposed: 1, Published: 7, Rejected_11: 11, Rejected_14: 14, Scheduled: 6, Updating: 9 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));