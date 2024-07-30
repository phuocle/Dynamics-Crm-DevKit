//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledge_Article {
		interface Header extends DevKit.Controls.IHeader {
			/** Chọn ngôn ngữ của nội dung bài viết. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của bài viết. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_analytics_Sections {
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
			/** Hiển thị ID được tạo tự động hiển thị cho khách hàng, đối tác và người dùng bên ngoài khác để tham chiếu cũng như tra cứu các bài viết. */
			ArticlePublicNumber: DevKit.Controls.String;
			content: DevKit.Controls.ActionCards;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo bản ghi. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Tổng quan ngắn về bài viết, được sử dụng chủ yếu trong các kết quả tìm kiếm cũng như để tối ưu hóa công cụ tìm kiếm. */
			Description: DevKit.Controls.String;
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Cho biết bài viết này chỉ có thể xem trong nội bộ hay không. */
			IsInternal: DevKit.Controls.Boolean;
			/** Nhập từ khóa được sử dụng cho các tìm kiếm trong bài viết trên cơ sở kiến thức. Phân tách các từ khóa bằng cách sử dụng các dấu phẩy. */
			Keywords: DevKit.Controls.String;
			/** Hiển thị tổng số lượt xem bài viết. */
			KnowledgeArticleViews: DevKit.Controls.Integer;
			/** Chọn ngôn ngữ của nội dung bài viết. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Hiển thị số phiên bản chính của nội dung bài viết này. */
			MajorVersionNumber: DevKit.Controls.Integer;
			/** Hiển thị số phiên bản phụ của nội dung bài viết này. */
			MinorVersionNumber: DevKit.Controls.Integer;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi bản ghi. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** field to indicate the agent review status of the article */
			msdyn_agentreviewstatus: DevKit.Controls.OptionSet;
			/** field to indicate the compliance state of an article */
			msdyn_compliancestatecode: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu bản ghi. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chứa id của nội dung bài viết mẹ được liên kết với thực thể. */
			ParentArticleContentId: DevKit.Controls.Lookup;
			/** Chứa id của tác giả chính được liên kết với bài viết. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Ngày và giờ xuất bản bản ghi. */
			PublishOn: DevKit.Controls.DateTime;
			/** Thông tin cho biết mức độ có ích của bản ghi liên quan. */
			Rating: DevKit.Controls.Decimal;
			/** Chứa id của bài viết gốc. */
			RootArticleId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của bài viết. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
			SubjectId: DevKit.Controls.Lookup;
			/** Nhập tiêu đề cho bài viết. */
			Title: DevKit.Controls.String;
			webResource_allowed_origins_disclaimer: DevKit.Controls.WebResource;
		}
		interface Navigation {
			knowledgearticle_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			knowledgearticle_adx_portalcomments: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Appointments: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Emails: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Feedback: DevKit.Controls.NavigationItem,
			knowledgearticle_parentarticle_contentid: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Phonecalls: DevKit.Controls.NavigationItem,
			knowledgearticle_previousarticle_contentid: DevKit.Controls.NavigationItem,
			knowledgearticle_QueueItems: DevKit.Controls.NavigationItem,
			knowledgearticle_rootarticle_id: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Tasks: DevKit.Controls.NavigationItem,
			knowledgearticle_Teams: DevKit.Controls.NavigationItem,
			knowledgearticle_views: DevKit.Controls.NavigationItem,
			lk_expiredprocess_knowledgearticleid: DevKit.Controls.NavigationItem,
			lk_newprocess_knowledgearticleid: DevKit.Controls.NavigationItem,
			lk_translationprocess_knowledgearticleid: DevKit.Controls.NavigationItem,
			msdyn_knowledgearticle_favoriteknowledgearticle: DevKit.Controls.NavigationItem,
			msdyn_knowledgearticle_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_knowledgearticleimage_parentknowledgearticleid: DevKit.Controls.NavigationItem
		}
		interface ProcessQuy_trinh_da_Het_han {
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate_1: DevKit.Controls.DateTime;
			/** Tùy chọn đánh giá đã hết hạn */
			ExpiredReviewOptions: DevKit.Controls.OptionSet;
			/** Cập nhật nội dung */
			UpdateContent: DevKit.Controls.Boolean;
		}
		interface ProcessQuy_trinh_Dich_thuat {
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Chọn ngôn ngữ của nội dung bài viết. */
			LanguageLocaleId: DevKit.Controls.Lookup;
		}
		interface ProcessQuy_trinh_moi {
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Nhập từ khóa được sử dụng cho các tìm kiếm trong bài viết trên cơ sở kiến thức. Phân tách các từ khóa bằng cách sử dụng các dấu phẩy. */
			Keywords: DevKit.Controls.String;
			/** Chứa id của tác giả chính được liên kết với bài viết. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Sẵn sàng đánh giá */
			ReadyForReview: DevKit.Controls.Boolean;
			/** Đánh giá */
			Review: DevKit.Controls.OptionSet;
			/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
			SubjectId: DevKit.Controls.Lookup;
			/** Cập nhật nội dung */
			UpdateContent: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
			Quy_trinh_da_Het_han: ProcessQuy_trinh_da_Het_han;
			Quy_trinh_Dich_thuat: ProcessQuy_trinh_Dich_thuat;
			Quy_trinh_moi: ProcessQuy_trinh_moi;
		}
		interface Grid {
			Feedback: DevKit.Controls.Grid;
			KnowledgearticleviewsGrid: DevKit.Controls.Grid;
			RelatedCategoriesGrid: DevKit.Controls.Grid;
			RelatedTranslationsGrid: DevKit.Controls.Grid;
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
		/** The Header section of form Knowledge_Article */
		Header: DevKit.FormKnowledge_Article.Header;
		/** The Navigation of form Knowledge_Article */
		Navigation: DevKit.FormKnowledge_Article.Navigation;
		/** The Process of form Knowledge_Article */
		Process: DevKit.FormKnowledge_Article.Process;
		/** The Grid of form Knowledge_Article */
		Grid: DevKit.FormKnowledge_Article.Grid;
		/** The SidePanes of form Knowledge_Article */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormKnowledge_Article_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Chọn ngôn ngữ của nội dung bài viết. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của bài viết. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_analytics_Sections {
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
			/** Hiển thị ID được tạo tự động hiển thị cho khách hàng, đối tác và người dùng bên ngoài khác để tham chiếu cũng như tra cứu các bài viết. */
			ArticlePublicNumber: DevKit.Controls.String;
			content: DevKit.Controls.ActionCards;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo bản ghi. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Tổng quan ngắn về bài viết, được sử dụng chủ yếu trong các kết quả tìm kiếm cũng như để tối ưu hóa công cụ tìm kiếm. */
			Description: DevKit.Controls.String;
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Cho biết bài viết này chỉ có thể xem trong nội bộ hay không. */
			IsInternal: DevKit.Controls.Boolean;
			/** Nhập từ khóa được sử dụng cho các tìm kiếm trong bài viết trên cơ sở kiến thức. Phân tách các từ khóa bằng cách sử dụng các dấu phẩy. */
			Keywords: DevKit.Controls.String;
			/** Hiển thị tổng số lượt xem bài viết. */
			KnowledgeArticleViews: DevKit.Controls.Integer;
			/** Chọn ngôn ngữ của nội dung bài viết. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Hiển thị số phiên bản chính của nội dung bài viết này. */
			MajorVersionNumber: DevKit.Controls.Integer;
			/** Hiển thị số phiên bản phụ của nội dung bài viết này. */
			MinorVersionNumber: DevKit.Controls.Integer;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi bản ghi. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** field to indicate the agent review status of the article */
			msdyn_agentreviewstatus: DevKit.Controls.OptionSet;
			/** field to indicate the compliance state of an article */
			msdyn_compliancestatecode: DevKit.Controls.OptionSet;
			msdyn_keywordsdescsuggestioncontrol: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu bản ghi. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chứa id của nội dung bài viết mẹ được liên kết với thực thể. */
			ParentArticleContentId: DevKit.Controls.Lookup;
			/** Chứa id của tác giả chính được liên kết với bài viết. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Ngày và giờ xuất bản bản ghi. */
			PublishOn: DevKit.Controls.DateTime;
			/** Thông tin cho biết mức độ có ích của bản ghi liên quan. */
			Rating: DevKit.Controls.Decimal;
			/** Chứa id của bài viết gốc. */
			RootArticleId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của bài viết. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
			SubjectId: DevKit.Controls.Lookup;
			/** Nhập tiêu đề cho bài viết. */
			Title: DevKit.Controls.String;
			webResource_allowed_origins_disclaimer: DevKit.Controls.WebResource;
		}
		interface Navigation {
			knowledgearticle_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			knowledgearticle_adx_portalcomments: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Appointments: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Emails: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Feedback: DevKit.Controls.NavigationItem,
			knowledgearticle_parentarticle_contentid: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Phonecalls: DevKit.Controls.NavigationItem,
			knowledgearticle_previousarticle_contentid: DevKit.Controls.NavigationItem,
			knowledgearticle_QueueItems: DevKit.Controls.NavigationItem,
			knowledgearticle_rootarticle_id: DevKit.Controls.NavigationItem,
			KnowledgeArticle_Tasks: DevKit.Controls.NavigationItem,
			knowledgearticle_Teams: DevKit.Controls.NavigationItem,
			knowledgearticle_views: DevKit.Controls.NavigationItem,
			lk_expiredprocess_knowledgearticleid: DevKit.Controls.NavigationItem,
			lk_newprocess_knowledgearticleid: DevKit.Controls.NavigationItem,
			lk_translationprocess_knowledgearticleid: DevKit.Controls.NavigationItem,
			msdyn_knowledgearticle_favoriteknowledgearticle: DevKit.Controls.NavigationItem,
			msdyn_knowledgearticle_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_knowledgearticleimage_parentknowledgearticleid: DevKit.Controls.NavigationItem
		}
		interface ProcessQuy_trinh_da_Het_han {
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate_1: DevKit.Controls.DateTime;
			/** Tùy chọn đánh giá đã hết hạn */
			ExpiredReviewOptions: DevKit.Controls.OptionSet;
			/** Cập nhật nội dung */
			UpdateContent: DevKit.Controls.Boolean;
		}
		interface ProcessQuy_trinh_Dich_thuat {
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Chọn ngôn ngữ của nội dung bài viết. */
			LanguageLocaleId: DevKit.Controls.Lookup;
		}
		interface ProcessQuy_trinh_moi {
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			ExpirationDate: DevKit.Controls.DateTime;
			/** Nhập từ khóa được sử dụng cho các tìm kiếm trong bài viết trên cơ sở kiến thức. Phân tách các từ khóa bằng cách sử dụng các dấu phẩy. */
			Keywords: DevKit.Controls.String;
			/** Chứa id của tác giả chính được liên kết với bài viết. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Sẵn sàng đánh giá */
			ReadyForReview: DevKit.Controls.Boolean;
			/** Đánh giá */
			Review: DevKit.Controls.OptionSet;
			/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
			SubjectId: DevKit.Controls.Lookup;
			/** Cập nhật nội dung */
			UpdateContent: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
			Quy_trinh_da_Het_han: ProcessQuy_trinh_da_Het_han;
			Quy_trinh_Dich_thuat: ProcessQuy_trinh_Dich_thuat;
			Quy_trinh_moi: ProcessQuy_trinh_moi;
		}
		interface Grid {
			Feedback: DevKit.Controls.Grid;
			KnowledgeArticleAttachmentControl: DevKit.Controls.Grid;
			KnowledgearticleviewsGrid: DevKit.Controls.Grid;
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
		/** The Header section of form Knowledge_Article_for_Interactive_experience */
		Header: DevKit.FormKnowledge_Article_for_Interactive_experience.Header;
		/** The Navigation of form Knowledge_Article_for_Interactive_experience */
		Navigation: DevKit.FormKnowledge_Article_for_Interactive_experience.Navigation;
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
			/** Tổng quan ngắn về bài viết, được sử dụng chủ yếu trong các kết quả tìm kiếm cũng như để tối ưu hóa công cụ tìm kiếm. */
			Description: DevKit.Controls.String;
			/** Nhập từ khóa được sử dụng cho các tìm kiếm trong bài viết trên cơ sở kiến thức. Phân tách các từ khóa bằng cách sử dụng các dấu phẩy. */
			Keywords: DevKit.Controls.String;
			/** Chọn ngôn ngữ của nội dung bài viết. */
			LanguageLocaleId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu bản ghi. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chứa id của tác giả chính được liên kết với bài viết. */
			primaryauthorid: DevKit.Controls.Lookup;
			/** Nhập tiêu đề cho bài viết. */
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
		/** Hiển thị ID được tạo tự động hiển thị cho khách hàng, đối tác và người dùng bên ngoài khác để tham chiếu cũng như tra cứu các bài viết. */
		ArticlePublicNumber: string;
		/** Hiển thị nội dung của bài viết được lưu trữ ở định dạng HTML. */
		Content: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tổng quan ngắn về bài viết, được sử dụng chủ yếu trong các kết quả tìm kiếm cũng như để tối ưu hóa công cụ tìm kiếm. */
		Description: string;
		/** Tỷ giá của loại tiền được liên kết với KnowledgeArticle theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
		ExpirationDate_UtcDateAndTime: Date;
		/** Chứa id trạng thái hết hạn của thực thể. */
		ExpirationStateId: number;
		/** Chứa id của trạng thái hết hạn của thực thể. */
		ExpirationStatusId: number;
		/** Tùy chọn đánh giá đã hết hạn */
		ExpiredReviewOptions: OptionSet.KnowledgeArticle.ExpiredReviewOptions;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết bài viết này chỉ có thể xem trong nội bộ hay không. */
		IsInternal: boolean;
		/** Cho biết phiên bản nào của bài viết trong cơ sở kiến thức là phiên bản mới nhất. */
		IsLatestVersion: boolean;
		/** Chọn xem bài viết có phải là bài viết chính hay không. */
		IsPrimary: boolean;
		/** Chọn xem bài viết có phải là bài viết gốc hay không. */
		IsRootArticle: boolean;
		/** Nhập từ khóa được sử dụng cho các tìm kiếm trong bài viết trên cơ sở kiến thức. Phân tách các từ khóa bằng cách sử dụng các dấu phẩy. */
		Keywords: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		knowledgearticleId: string;
		/** Hiển thị tổng số lượt xem bài viết. */
		readonly KnowledgeArticleViews: number;
		/** Ngày và giờ của Dạng xem Bài viết trong Cơ sở kiến thức. */
		readonly KnowledgeArticleViews_Date_UtcDateAndTime: Date;
		/** Trạng thái của Dạng xem Bài viết trong Cơ sở kiến thức. */
		readonly KnowledgeArticleViews_State: number;
		/** Chọn ngôn ngữ của nội dung bài viết. */
		LanguageLocaleId: string;
		/** Hiển thị số phiên bản chính của nội dung bài viết này. */
		MajorVersionNumber: number;
		/** Hiển thị số phiên bản phụ của nội dung bài viết này. */
		MinorVersionNumber: number;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** field to indicate the agent review status of the article */
		msdyn_agentreviewstatus: OptionSet.KnowledgeArticle.msdyn_agentreviewstatus;
		/** field to indicate the compliance state of an article */
		msdyn_compliancestatecode: OptionSet.KnowledgeArticle.msdyn_compliancestatecode;
		/** Stores the reference to content in file store */
		readonly msdyn_contentstore_name: string;
		/** External Reference Id */
		msdyn_externalreferenceid: string;
		/** Ingested article URL */
		msdyn_ingestedarticleurl: string;
		/** Integrated Search Dataprovider Id  */
		msdyn_integratedsearchproviderid: string;
		/** Sets whether the article content is synced to file storage */
		msdyn_iscontentsyncedtostore: boolean;
		/** Value is true for all Ingested articles */
		msdyn_isingestedarticle: boolean;
		msdyn_keywordsdescsuggestioncontrol: boolean;
		/** The Language Code that the article's content is in. */
		msdyn_languagecode: string;
		/** Displays the number of times migration to file storage retry is attempted for an article */
		msdyn_retrycountformigrationtocontentstore: number;
		msdyn_totalcasesimpacted: number;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Chứa id của nội dung bài viết mẹ được liên kết với thực thể. */
		ParentArticleContentId: string;
		/** Hiển thị phiên bản lưu trữ bài viết hiện tại. */
		PreviousArticleContentId: string;
		/** Chứa id của tác giả chính được liên kết với bài viết. */
		primaryauthorid: string;
		/** Chứa id của quy trình được liên kết với thực thể. */
		processid: string;
		/** Ngày và giờ xuất bản bản ghi. */
		PublishOn_UtcDateAndTime: Date;
		/** Trạng thái xuất bản của bài viết. */
		PublishStatusId: number;
		/** Thông tin cho biết mức độ có ích của bản ghi liên quan. */
		readonly Rating: number;
		/** Số lượng xếp hạng */
		readonly Rating_Count: number;
		/** Ngày và giờ cho Xếp hạng. */
		readonly Rating_Date_UtcDateAndTime: Date;
		/** Trạng thái xếp hạng */
		readonly Rating_State: number;
		/** Tổng số Xếp hạng */
		readonly Rating_Sum: number;
		/** Sẵn sàng đánh giá */
		ReadyForReview: boolean;
		/** Đánh giá */
		Review: OptionSet.KnowledgeArticle.Review;
		/** Chứa id của bài viết gốc. */
		RootArticleId: string;
		/** Chứa id của trạng thái theo lịch của thực thể. */
		ScheduledStatusId: number;
		/** Cho biết đã đặt các liên kết của thể loại hay chưa */
		SetCategoryAssociations: boolean;
		/** Chứa id của giai đoạn có thực thể được đặt. */
		stageid: string;
		/** Cho biết bài viết là bản nháp hay được xuất bản, được lưu trữ hoặc bị hủy bỏ. Bài viết nháp không sẵn có bên ngoài và có thể chỉnh sửa được. Bài viết đã xuất bản sẵn có bên ngoài, dựa trên các quyền hiện hành, nhưng không thể chỉnh sửa được. Tất cả các thay đổi về siêu dữ liệu sẽ được phản ánh trong phiên bản được xuất bản. Các bài viết được lưu trữ và bị hủy bỏ không sẵn có bên ngoài và không thể chỉnh sửa được. */
		StateCode: OptionSet.KnowledgeArticle.StateCode;
		/** Chọn trạng thái của bài viết. */
		StatusCode: OptionSet.KnowledgeArticle.StatusCode;
		/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
		SubjectId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Nhập tiêu đề cho bài viết. */
		Title: string;
		/** Tỷ giá của loại tiền được liên kết với KnowledgeArticle theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Một danh sách các giá trị chuỗi phân tách bằng dấu phẩy cho biết mã định danh duy nhất của các giai đoạn trong Phiên bản dòng quy trình công việc theo thứ tự xuất hiện. */
		traversedpath: string;
		/** Cập nhật nội dung */
		UpdateContent: boolean;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Hiển thị ID được tạo tự động hiển thị cho khách hàng, đối tác và người dùng bên ngoài khác để tham chiếu cũng như tra cứu các bài viết. */
			readonly ArticlePublicNumber: string;
			/** Hiển thị nội dung của bài viết được lưu trữ ở định dạng HTML. */
			readonly Content: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tổng quan ngắn về bài viết, được sử dụng chủ yếu trong các kết quả tìm kiếm cũng như để tối ưu hóa công cụ tìm kiếm. */
			readonly Description: string;
			/** Tỷ giá của loại tiền được liên kết với KnowledgeArticle theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Nhập ngày hết hạn của bài viết. Hãy để trống trường này nếu không có ngày hết hạn. */
			readonly ExpirationDate_UtcDateAndTime: string;
			/** Chứa id trạng thái hết hạn của thực thể. */
			readonly ExpirationStateId: string;
			/** Chứa id của trạng thái hết hạn của thực thể. */
			readonly ExpirationStatusId: string;
			/** Tùy chọn đánh giá đã hết hạn */
			readonly ExpiredReviewOptions: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết bài viết này chỉ có thể xem trong nội bộ hay không. */
			readonly IsInternal: string;
			/** Cho biết phiên bản nào của bài viết trong cơ sở kiến thức là phiên bản mới nhất. */
			readonly IsLatestVersion: string;
			/** Chọn xem bài viết có phải là bài viết chính hay không. */
			readonly IsPrimary: string;
			/** Chọn xem bài viết có phải là bài viết gốc hay không. */
			readonly IsRootArticle: string;
			/** Nhập từ khóa được sử dụng cho các tìm kiếm trong bài viết trên cơ sở kiến thức. Phân tách các từ khóa bằng cách sử dụng các dấu phẩy. */
			readonly Keywords: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly knowledgearticleId: string;
			/** Hiển thị tổng số lượt xem bài viết. */
			readonly KnowledgeArticleViews: string;
			/** Ngày và giờ của Dạng xem Bài viết trong Cơ sở kiến thức. */
			readonly KnowledgeArticleViews_Date_UtcDateAndTime: string;
			/** Trạng thái của Dạng xem Bài viết trong Cơ sở kiến thức. */
			readonly KnowledgeArticleViews_State: string;
			/** Chọn ngôn ngữ của nội dung bài viết. */
			readonly LanguageLocaleId: string;
			/** Hiển thị số phiên bản chính của nội dung bài viết này. */
			readonly MajorVersionNumber: string;
			/** Hiển thị số phiên bản phụ của nội dung bài viết này. */
			readonly MinorVersionNumber: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** field to indicate the agent review status of the article */
			readonly msdyn_agentreviewstatus: string;
			/** field to indicate the compliance state of an article */
			readonly msdyn_compliancestatecode: string;
			/** Stores the reference to content in file store */
			readonly msdyn_contentstore_name: string;
			/** External Reference Id */
			readonly msdyn_externalreferenceid: string;
			/** Ingested article URL */
			readonly msdyn_ingestedarticleurl: string;
			/** Integrated Search Dataprovider Id  */
			readonly msdyn_integratedsearchproviderid: string;
			/** Sets whether the article content is synced to file storage */
			readonly msdyn_iscontentsyncedtostore: string;
			/** Value is true for all Ingested articles */
			readonly msdyn_isingestedarticle: string;
			readonly msdyn_keywordsdescsuggestioncontrol: string;
			/** The Language Code that the article's content is in. */
			readonly msdyn_languagecode: string;
			/** Displays the number of times migration to file storage retry is attempted for an article */
			readonly msdyn_retrycountformigrationtocontentstore: string;
			readonly msdyn_totalcasesimpacted: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Chứa id của nội dung bài viết mẹ được liên kết với thực thể. */
			readonly ParentArticleContentId: string;
			/** Hiển thị phiên bản lưu trữ bài viết hiện tại. */
			readonly PreviousArticleContentId: string;
			/** Chứa id của tác giả chính được liên kết với bài viết. */
			readonly primaryauthorid: string;
			/** Chứa id của quy trình được liên kết với thực thể. */
			readonly processid: string;
			/** Ngày và giờ xuất bản bản ghi. */
			readonly PublishOn_UtcDateAndTime: string;
			/** Trạng thái xuất bản của bài viết. */
			readonly PublishStatusId: string;
			/** Thông tin cho biết mức độ có ích của bản ghi liên quan. */
			readonly Rating: string;
			/** Số lượng xếp hạng */
			readonly Rating_Count: string;
			/** Ngày và giờ cho Xếp hạng. */
			readonly Rating_Date_UtcDateAndTime: string;
			/** Trạng thái xếp hạng */
			readonly Rating_State: string;
			/** Tổng số Xếp hạng */
			readonly Rating_Sum: string;
			/** Sẵn sàng đánh giá */
			readonly ReadyForReview: string;
			/** Đánh giá */
			readonly Review: string;
			/** Chứa id của bài viết gốc. */
			readonly RootArticleId: string;
			/** Chứa id của trạng thái theo lịch của thực thể. */
			readonly ScheduledStatusId: string;
			/** Cho biết đã đặt các liên kết của thể loại hay chưa */
			readonly SetCategoryAssociations: string;
			/** Chứa id của giai đoạn có thực thể được đặt. */
			readonly stageid: string;
			/** Cho biết bài viết là bản nháp hay được xuất bản, được lưu trữ hoặc bị hủy bỏ. Bài viết nháp không sẵn có bên ngoài và có thể chỉnh sửa được. Bài viết đã xuất bản sẵn có bên ngoài, dựa trên các quyền hiện hành, nhưng không thể chỉnh sửa được. Tất cả các thay đổi về siêu dữ liệu sẽ được phản ánh trong phiên bản được xuất bản. Các bài viết được lưu trữ và bị hủy bỏ không sẵn có bên ngoài và không thể chỉnh sửa được. */
			readonly StateCode: string;
			/** Chọn trạng thái của bài viết. */
			readonly StatusCode: string;
			/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
			readonly SubjectId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Nhập tiêu đề cho bài viết. */
			readonly Title: string;
			/** Tỷ giá của loại tiền được liên kết với KnowledgeArticle theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Một danh sách các giá trị chuỗi phân tách bằng dấu phẩy cho biết mã định danh duy nhất của các giai đoạn trong Phiên bản dòng quy trình công việc theo thứ tự xuất hiện. */
			readonly traversedpath: string;
			/** Cập nhật nội dung */
			readonly UpdateContent: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticle {
		enum ExpiredReviewOptions {
			/** 0 */
			Can_cap_nhat,
			/** 2 */
			Luu_tru,
			/** 1 */
			Xuat_ban_lai
		}
		enum msdyn_agentreviewstatus {
			/** 100000000 */
			Not_Reviewed,
			/** 100000001 */
			Reviewed_By_Agent
		}
		enum msdyn_compliancestatecode {
			/** 100000000 */
			Compliant,
			/** 100000001 */
			Non_Compliant,
			/** 100000002 */
			Pending
		}
		enum Review {
			/** 1 */
			Bi_tu_choi,
			/** 0 */
			Da_phe_duyet
		}
		enum StateCode {
			/** 0 */
			Ban_nhap,
			/** 4 */
			Da_het_han,
			/** 2 */
			Da_len_lich,
			/** 6 */
			Da_loai_bo,
			/** 5 */
			Da_luu_tru,
			/** 1 */
			Da_phe_duyet,
			/** 3 */
			Da_xuat_ban
		}
		enum StatusCode {
			/** 2 */
			Ban_nhap,
			/** 11 */
			Bi_tu_choi_11,
			/** 14 */
			Bi_tu_choi_14,
			/** 3 */
			Can_danh_gia_3,
			/** 8 */
			Can_danh_gia_8,
			/** 1 */
			Da_de_xuat,
			/** 10 */
			Da_het_han,
			/** 6 */
			Da_len_lich,
			/** 13 */
			Da_loai_bo,
			/** 12 */
			Da_luu_tru,
			/** 5 */
			Da_phe_duyet,
			/** 7 */
			Da_xuat_ban,
			/** 9 */
			Dang_cap_nhat,
			/** 4 */
			Dang_duoc_danh_gia
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}