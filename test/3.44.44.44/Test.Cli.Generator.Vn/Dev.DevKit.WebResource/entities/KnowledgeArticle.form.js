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
			Description: {},
			ExpirationDate: {},
			Feedback: {},
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
			notescontrol: {},
			OwnerId: {},
			ParentArticleContentId: {},
			primaryauthorid: {},
			PublishOn: {},
			Rating: {},
			RelatedCategoriesGrid: {},
			RelatedTranslationsGrid: {},
			RootArticleId: {},
			StatusCode: {},
			SubjectId: {},
			Title: {},
			webResource_allowed_origins_disclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			analytics: {
				Section: {
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
		var _Quy_trinh_da_Het_han = {
			ExpirationDate: {},
			ExpirationDate_1: {},
			ExpiredReviewOptions: {},
			UpdateContent: {}
		}
		devKit.LoadFields(formContext, _Quy_trinh_da_Het_han, "header_process_");
		process.Quy_trinh_da_Het_han = _Quy_trinh_da_Het_han;
		var _Quy_trinh_Dich_thuat = {
			ExpirationDate: {},
			LanguageLocaleId: {}
		}
		devKit.LoadFields(formContext, _Quy_trinh_Dich_thuat, "header_process_");
		process.Quy_trinh_Dich_thuat = _Quy_trinh_Dich_thuat;
		var _Quy_trinh_moi = {
			ExpirationDate: {},
			Keywords: {},
			primaryauthorid: {},
			ReadyForReview: {},
			Review: {},
			SubjectId: {},
			UpdateContent: {}
		}
		devKit.LoadFields(formContext, _Quy_trinh_moi, "header_process_");
		process.Quy_trinh_moi = _Quy_trinh_moi;
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
			Feedback: {},
			KnowledgearticleviewsGrid: {},
			RelatedCategoriesGrid: {},
			RelatedTranslationsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			knowledgearticle_adx_inviteredemptions: {},
			knowledgearticle_adx_portalcomments: {},
			KnowledgeArticle_Appointments: {},
			KnowledgeArticle_Emails: {},
			KnowledgeArticle_Feedback: {},
			knowledgearticle_parentarticle_contentid: {},
			KnowledgeArticle_Phonecalls: {},
			knowledgearticle_previousarticle_contentid: {},
			knowledgearticle_QueueItems: {},
			knowledgearticle_rootarticle_id: {},
			KnowledgeArticle_Tasks: {},
			knowledgearticle_Teams: {},
			knowledgearticle_views: {},
			lk_expiredprocess_knowledgearticleid: {},
			lk_newprocess_knowledgearticleid: {},
			lk_translationprocess_knowledgearticleid: {},
			msdyn_knowledgearticle_favoriteknowledgearticle: {},
			msdyn_knowledgearticle_feedback_context: {},
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
			msdyn_keywordsdescsuggestioncontrol: {},
			notescontrol: {},
			OwnerId: {},
			ParentArticleContentId: {},
			primaryauthorid: {},
			PublishOn: {},
			Rating: {},
			RelatedCategoriesGrid: {},
			RelatedTranslationsGrid: {},
			RootArticleId: {},
			StatusCode: {},
			SubjectId: {},
			Title: {},
			webResource_allowed_origins_disclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			analytics: {
				Section: {
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
		var _Quy_trinh_da_Het_han = {
			ExpirationDate: {},
			ExpirationDate_1: {},
			ExpiredReviewOptions: {},
			UpdateContent: {}
		}
		devKit.LoadFields(formContext, _Quy_trinh_da_Het_han, "header_process_");
		process.Quy_trinh_da_Het_han = _Quy_trinh_da_Het_han;
		var _Quy_trinh_Dich_thuat = {
			ExpirationDate: {},
			LanguageLocaleId: {}
		}
		devKit.LoadFields(formContext, _Quy_trinh_Dich_thuat, "header_process_");
		process.Quy_trinh_Dich_thuat = _Quy_trinh_Dich_thuat;
		var _Quy_trinh_moi = {
			ExpirationDate: {},
			Keywords: {},
			primaryauthorid: {},
			ReadyForReview: {},
			Review: {},
			SubjectId: {},
			UpdateContent: {}
		}
		devKit.LoadFields(formContext, _Quy_trinh_moi, "header_process_");
		process.Quy_trinh_moi = _Quy_trinh_moi;
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
			Feedback: {},
			KnowledgeArticleAttachmentControl: {},
			KnowledgearticleviewsGrid: {},
			RelatedCategoriesGrid: {},
			RelatedTranslationsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			knowledgearticle_adx_inviteredemptions: {},
			knowledgearticle_adx_portalcomments: {},
			KnowledgeArticle_Appointments: {},
			KnowledgeArticle_Emails: {},
			KnowledgeArticle_Feedback: {},
			knowledgearticle_parentarticle_contentid: {},
			KnowledgeArticle_Phonecalls: {},
			knowledgearticle_previousarticle_contentid: {},
			knowledgearticle_QueueItems: {},
			knowledgearticle_rootarticle_id: {},
			KnowledgeArticle_Tasks: {},
			knowledgearticle_Teams: {},
			knowledgearticle_views: {},
			lk_expiredprocess_knowledgearticleid: {},
			lk_newprocess_knowledgearticleid: {},
			lk_translationprocess_knowledgearticleid: {},
			msdyn_knowledgearticle_favoriteknowledgearticle: {},
			msdyn_knowledgearticle_feedback_context: {},
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
			Can_cap_nhat: 0,
			Luu_tru: 2,
			Xuat_ban_lai: 1
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
		Review : {
			Bi_tu_choi: 1,
			Da_phe_duyet: 0
		},
		StateCode : {
			Ban_nhap: 0,
			Da_het_han: 4,
			Da_len_lich: 2,
			Da_loai_bo: 6,
			Da_luu_tru: 5,
			Da_phe_duyet: 1,
			Da_xuat_ban: 3
		},
		StatusCode : {
			Ban_nhap: 2,
			Bi_tu_choi_11: 11,
			Bi_tu_choi_14: 14,
			Can_danh_gia_3: 3,
			Can_danh_gia_8: 8,
			Da_de_xuat: 1,
			Da_het_han: 10,
			Da_len_lich: 6,
			Da_loai_bo: 13,
			Da_luu_tru: 12,
			Da_phe_duyet: 5,
			Da_xuat_ban: 7,
			Dang_cap_nhat: 9,
			Dang_duoc_danh_gia: 4
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