'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormKnowledge_Article = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ArticlePublicNumber: {},
			Content: {},
			CreatedBy: {},
			CreatedOn: {},
			customerassetsubgrid: {},
			Description: {},
			ExpirationDate: {},
			Feedback: {},
			incidenttypesubgrid: {},
			IsInternal: {},
			Keywords: {},
			KnowledgeArticleViews: {},
			KnowledgearticleviewsGrid: {},
			LanguageLocaleId: {},
			MajorVersionNumber: {},
			MinorVersionNumber: {},
			ModifiedBy: {},
			ModifiedOn: {},
			msdyn_agentreviewstatus: {},
			msdyn_compliancestatecode: {},
			msdyn_creationmode: {},
			notescontrol: {},
			OwnerId: {},
			ParentArticleContentId: {},
			primaryauthorid: {},
			productsubgrid: {},
			PublishOn: {},
			Rating: {},
			RelatedCasesGrid: {},
			RelatedCategoriesGrid: {},
			RelatedTranslationsGrid: {},
			RootArticleId: {},
			StatusCode: {},
			SubjectId: {},
			Title: {},
			WebResource_AI_Disclaimer_Section: {},
			webResource_allowed_origins_disclaimer: {},
			WebResource_KAComplianceErrorBanner: {},
			workordersubgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			analytics: {
				Section: {
					Cases: {},
					Feedback: {},
					Views: {}
				}
			},
			general: {
				Section: {
					Content: {},
					Knowledge_Information: {}
				}
			},
			summary: {
				Section: {
					Portal_Settings: {},
					Publish_Settings: {},
					Timeline: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			LanguageLocaleId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Expired_Process = {
			ExpirationDate: {},
			ExpirationDate_1: {},
			ExpiredReviewOptions: {},
			SetProductAssociations: {},
			SetProductAssociations_1: {},
			UpdateContent: {}
		}
		devKit.LoadFields(formContext, _Expired_Process, "header_process_");
		process.Expired_Process = _Expired_Process;
		var _New_Process = {
			ExpirationDate: {},
			Keywords: {},
			primaryauthorid: {},
			ReadyForReview: {},
			Review: {},
			SetProductAssociations: {},
			SubjectId: {},
			UpdateContent: {}
		}
		devKit.LoadFields(formContext, _New_Process, "header_process_");
		process.New_Process = _New_Process;
		var _Translation_Process = {
			ExpirationDate: {},
			LanguageLocaleId: {},
			SetProductAssociations: {}
		}
		devKit.LoadFields(formContext, _Translation_Process, "header_process_");
		process.Translation_Process = _Translation_Process;
		form.Process = process;
		var quickForm = {
			relatedarticlequickform: {
			},
			relatedversionsquickform: {
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			customerassetsubgrid: {},
			Feedback: {},
			incidenttypesubgrid: {},
			KnowledgearticleviewsGrid: {},
			productsubgrid: {},
			RelatedCasesGrid: {},
			RelatedCategoriesGrid: {},
			RelatedTranslationsGrid: {},
			workordersubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			incident_knowledgearticles: {},
			knowledgearticle_adx_inviteredemptions: {},
			knowledgearticle_adx_portalcomments: {},
			KnowledgeArticle_Appointments: {},
			knowledgearticle_BulkOperations: {},
			knowledgearticle_CampaignResponses: {},
			KnowledgeArticle_Emails: {},
			KnowledgeArticle_Feedback: {},
			knowledgearticle_IncidentResolutions: {},
			knowledgearticle_msdyn_bookingalerts: {},
			knowledgearticle_msdyn_copilottranscripts: {},
			knowledgearticle_msdyn_ocliveworkitems: {},
			knowledgearticle_msdyn_ocoutboundmessages: {},
			knowledgearticle_msdyn_ocsessions: {},
			knowledgearticle_msdyn_ocvoicemails: {},
			knowledgearticle_msfp_alerts: {},
			knowledgearticle_msfp_surveyinvites: {},
			knowledgearticle_msfp_surveyresponses: {},
			knowledgearticle_OpportunityCloses: {},
			knowledgearticle_OrderCloses: {},
			knowledgearticle_parentarticle_contentid: {},
			KnowledgeArticle_Phonecalls: {},
			knowledgearticle_Posts: {},
			knowledgearticle_previousarticle_contentid: {},
			knowledgearticle_QueueItems: {},
			knowledgearticle_QuoteCloses: {},
			knowledgearticle_rootarticle_id: {},
			KnowledgeArticle_ServiceAppointments: {},
			KnowledgeArticle_Tasks: {},
			knowledgearticle_Teams: {},
			knowledgearticle_views: {},
			lk_expiredprocess_knowledgearticleid: {},
			lk_newprocess_knowledgearticleid: {},
			lk_translationprocess_knowledgearticleid: {},
			msdyn_copilotknowledgeinteraction_knowledgearticleid_knowledgearticle: {},
			msdyn_knowledgearticle_favoriteknowledgearticle: {},
			msdyn_knowledgearticle_feedback_context: {},
			msdyn_knowledgearticle_msdyn_kbenrichment_kbid: {},
			msdyn_knowledgearticle_msdyn_knowledgearticlesuggestion_suggestedentity: {},
			msdyn_knowledgearticle_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_knowledgearticleimage_parentknowledgearticleid: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormKnowledge_Article_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ArticlePublicNumber: {},
			AssociatedProductsGrid: {},
			Content: {},
			CreatedBy: {},
			CreatedOn: {},
			Description: {},
			ExpirationDate: {},
			Feedback: {},
			IsInternal: {},
			Keywords: {},
			KnowledgeArticleAttachmentControl: {},
			KnowledgeArticleViews: {},
			KnowledgearticleviewsGrid: {},
			LanguageLocaleId: {},
			MajorVersionNumber: {},
			MinorVersionNumber: {},
			ModifiedBy: {},
			ModifiedOn: {},
			msdyn_agentreviewstatus: {},
			msdyn_compliancestatecode: {},
			msdyn_creationmode: {},
			msdyn_keywordsdescsuggestioncontrol: {},
			notescontrol: {},
			OwnerId: {},
			ParentArticleContentId: {},
			primaryauthorid: {},
			PublishOn: {},
			Rating: {},
			RelatedCasesGrid: {},
			RelatedCategoriesGrid: {},
			RelatedTranslationsGrid: {},
			RootArticleId: {},
			StatusCode: {},
			SubjectId: {},
			Title: {},
			WebResource_AI_Disclaimer_Section: {},
			webResource_allowed_origins_disclaimer: {},
			WebResource_KAComplianceErrorBanner: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			analytics: {
				Section: {
					Cases: {},
					Feedback: {},
					Views: {}
				}
			},
			general: {
				Section: {
					Content: {},
					Knowledge_Information: {},
					Knowledge_Suggestion: {},
					KnowledgeArticleAttachmentSectionV2: {}
				}
			},
			summary: {
				Section: {
					Portal_Settings: {},
					Publish_Settings: {},
					Timeline: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			LanguageLocaleId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Expired_Process = {
			ExpirationDate: {},
			ExpirationDate_1: {},
			ExpiredReviewOptions: {},
			SetProductAssociations: {},
			SetProductAssociations_1: {},
			UpdateContent: {}
		}
		devKit.LoadFields(formContext, _Expired_Process, "header_process_");
		process.Expired_Process = _Expired_Process;
		var _New_Process = {
			ExpirationDate: {},
			Keywords: {},
			primaryauthorid: {},
			ReadyForReview: {},
			Review: {},
			SetProductAssociations: {},
			SubjectId: {},
			UpdateContent: {}
		}
		devKit.LoadFields(formContext, _New_Process, "header_process_");
		process.New_Process = _New_Process;
		var _Translation_Process = {
			ExpirationDate: {},
			LanguageLocaleId: {},
			SetProductAssociations: {}
		}
		devKit.LoadFields(formContext, _Translation_Process, "header_process_");
		process.Translation_Process = _Translation_Process;
		form.Process = process;
		var quickForm = {
			relatedarticlequickform: {
			},
			relatedversionsquickform: {
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			AssociatedProductsGrid: {},
			Feedback: {},
			KnowledgeArticleAttachmentControl: {},
			KnowledgearticleviewsGrid: {},
			RelatedCasesGrid: {},
			RelatedCategoriesGrid: {},
			RelatedTranslationsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			incident_knowledgearticles: {},
			knowledgearticle_adx_inviteredemptions: {},
			knowledgearticle_adx_portalcomments: {},
			KnowledgeArticle_Appointments: {},
			knowledgearticle_BulkOperations: {},
			knowledgearticle_CampaignResponses: {},
			KnowledgeArticle_Emails: {},
			KnowledgeArticle_Feedback: {},
			knowledgearticle_IncidentResolutions: {},
			knowledgearticle_msdyn_bookingalerts: {},
			knowledgearticle_msdyn_copilottranscripts: {},
			knowledgearticle_msdyn_ocliveworkitems: {},
			knowledgearticle_msdyn_ocoutboundmessages: {},
			knowledgearticle_msdyn_ocsessions: {},
			knowledgearticle_msdyn_ocvoicemails: {},
			knowledgearticle_msfp_alerts: {},
			knowledgearticle_msfp_surveyinvites: {},
			knowledgearticle_msfp_surveyresponses: {},
			knowledgearticle_OpportunityCloses: {},
			knowledgearticle_OrderCloses: {},
			knowledgearticle_parentarticle_contentid: {},
			KnowledgeArticle_Phonecalls: {},
			knowledgearticle_Posts: {},
			knowledgearticle_previousarticle_contentid: {},
			knowledgearticle_QueueItems: {},
			knowledgearticle_QuoteCloses: {},
			knowledgearticle_rootarticle_id: {},
			KnowledgeArticle_ServiceAppointments: {},
			KnowledgeArticle_Tasks: {},
			knowledgearticle_Teams: {},
			knowledgearticle_views: {},
			lk_expiredprocess_knowledgearticleid: {},
			lk_newprocess_knowledgearticleid: {},
			lk_translationprocess_knowledgearticleid: {},
			msdyn_copilotknowledgeinteraction_knowledgearticleid_knowledgearticle: {},
			msdyn_knowledgearticle_favoriteknowledgearticle: {},
			msdyn_knowledgearticle_feedback_context: {},
			msdyn_knowledgearticle_msdyn_kbenrichment_kbid: {},
			msdyn_knowledgearticle_msdyn_knowledgearticlesuggestion_suggestedentity: {},
			msdyn_knowledgearticle_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_knowledgearticleimage_parentknowledgearticleid: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormKnowledge_Article_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Description: {},
			Keywords: {},
			LanguageLocaleId: {},
			OwnerId: {},
			primaryauthorid: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			newKnowledgeArticle: {
				Section: {
					quickKnowledgeArticle: {},
					quickKnowledgecontent: {},
					quickKnowledgeowner: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.KnowledgeArticle = {
		ExpiredReviewOptions : {
			Archive: 2,
			Needs_Updating: 0,
			Republish: 1
		},
		msdyn_agentreviewstatus : {
			Not_Reviewed: 100000000,
			Reviewed_By_Agent: 100000001
		},
		msdyn_compliancestatecode : {
			Compliant: 100000000,
			Non_Compliant: 100000001,
			Pending: 100000002
		},
		msdyn_creationmode : {
			Copilot: 1,
			Manual: 0
		},
		msdyn_sourceofcreation : {
			BulkHarvest: 3,
			DraftAssist: 1,
			Manual: 0,
			RealTimeHarvest: 2
		},
		Review : {
			Approved: 0,
			Rejected: 1
		},
		StateCode : {
			Approved: 1,
			Archived: 5,
			Discarded: 6,
			Draft: 0,
			Expired: 4,
			Published: 3,
			Scheduled: 2
		},
		StatusCode : {
			Approved: 5,
			Archived: 12,
			Discarded: 13,
			Draft: 2,
			Expired: 10,
			In_review: 4,
			Needs_review_3: 3,
			Needs_review_8: 8,
			Proposed: 1,
			Published: 7,
			Rejected_11: 11,
			Rejected_14: 14,
			Scheduled: 6,
			Updating: 9
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));