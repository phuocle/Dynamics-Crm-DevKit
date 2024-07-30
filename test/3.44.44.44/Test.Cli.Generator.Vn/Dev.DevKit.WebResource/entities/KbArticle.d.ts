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
			/** Cho biết nội dung và định dạng bài viết, được lưu trữ ở dạng XML. */
			ArticleXml: DevKit.Controls.String;
			/** Từ khóa cần sử dụng cho tìm kiếm trong bài viết trong cơ sở kiến thức. */
			KeyWords: DevKit.Controls.String;
			/** Chọn ngôn ngữ bắt buộc của bài viết. Danh sách này dựa trên danh sách gói ngôn ngữ đã cài đặt trong môi trường Microsoft Dynamics 365 của bạn. */
			LanguageCode: DevKit.Controls.Integer;
			/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
			msa_publishtoweb: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
			SubjectId: DevKit.Controls.Lookup;
			/** Nhập chủ đề hoặc tên mô tả cho bài viết để hỗ trợ việc tìm kiếm bài viết. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			kbarticle_comments: DevKit.Controls.NavigationItem
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
		/** Xếp hạng trung bình của bài viết này. */
		adx_averagerating: number;
		/** Xếp hạng trung bình của bài viết này, làm tròn thành một số nguyên (số nguyên dương). */
		adx_averagerating_int: number;
		/** Con số xếp hạng biểu quyết âm được áp dụng cho bài viết này. */
		adx_downvotes: number;
		adx_ratingcount: number;
		/** Tổng giá trị tất cả các xếp hạng được áp dụng cho bài viết này. */
		adx_ratingsum: number;
		/** Con số xếp hạng biểu quyết dương được áp dụng cho bài viết này. */
		adx_upvotes: number;
		/** Cho biết nội dung và định dạng bài viết, được lưu trữ ở dạng XML. */
		ArticleXml: string;
		/** Nhận xét về bài viết trong cơ sở kiến thức. */
		Comments: string;
		/** Mô tả nội dung của bài viết trong cơ sở kiến thức. */
		readonly Content: string;
		/** Mã định danh duy nhất của người dùng đã tạo bài viết trong cơ sở kiến thức. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bài viết trong cơ sở kiến thức. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bài viết. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung mô tả bài viết trong cơ sở kiến thức. */
		Description: string;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết ID của bài viết. */
		KbArticleId: string;
		/** Chọn mẫu bạn muốn sử dụng làm cơ sở để tạo bài viết mới. */
		KbArticleTemplateId: string;
		/** Từ khóa cần sử dụng cho tìm kiếm trong bài viết trong cơ sở kiến thức. */
		KeyWords: string;
		/** Chọn ngôn ngữ bắt buộc của bài viết. Danh sách này dựa trên danh sách gói ngôn ngữ đã cài đặt trong môi trường Microsoft Dynamics 365 của bạn. */
		LanguageCode: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối bài viết trong cơ sở kiến thức. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi lần cuối bài viết trong cơ sở kiến thức. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối kbarticle. */
		readonly ModifiedOnBehalfBy: string;
		/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
		msa_publishtoweb: boolean;
		/** Số bài viết trong cơ sở kiến thức. */
		readonly Number: string;
		/** Mã định danh duy nhất của tổ chức liên kết với bài viết. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Cho biết bài viết trong cơ sở kiến thức ở trạng thái bản nháp, chưa phê duyệt hay đã phát hành. Các bài viết đã phát hành ở trạng thái chỉ đọc và không thể chỉnh sửa được trừ khi chúng được hủy phát hành. */
		StateCode: OptionSet.KbArticle.StateCode;
		/** Chọn trạng thái của bài viết. */
		StatusCode: OptionSet.KbArticle.StatusCode;
		/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
		SubjectId: string;
		/** Nhập chủ đề hoặc tên mô tả cho bài viết để hỗ trợ việc tìm kiếm bài viết. */
		Title: string;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Tiêu đề của bài viết trong cơ sở kiến thức. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Xếp hạng trung bình của bài viết này. */
			readonly adx_averagerating: string;
			/** Xếp hạng trung bình của bài viết này, làm tròn thành một số nguyên (số nguyên dương). */
			readonly adx_averagerating_int: string;
			/** Con số xếp hạng biểu quyết âm được áp dụng cho bài viết này. */
			readonly adx_downvotes: string;
			readonly adx_ratingcount: string;
			/** Tổng giá trị tất cả các xếp hạng được áp dụng cho bài viết này. */
			readonly adx_ratingsum: string;
			/** Con số xếp hạng biểu quyết dương được áp dụng cho bài viết này. */
			readonly adx_upvotes: string;
			/** Cho biết nội dung và định dạng bài viết, được lưu trữ ở dạng XML. */
			readonly ArticleXml: string;
			/** Nhận xét về bài viết trong cơ sở kiến thức. */
			readonly Comments: string;
			/** Mô tả nội dung của bài viết trong cơ sở kiến thức. */
			readonly Content: string;
			/** Mã định danh duy nhất của người dùng đã tạo bài viết trong cơ sở kiến thức. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bài viết trong cơ sở kiến thức. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bài viết. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung mô tả bài viết trong cơ sở kiến thức. */
			readonly Description: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết ID của bài viết. */
			readonly KbArticleId: string;
			/** Chọn mẫu bạn muốn sử dụng làm cơ sở để tạo bài viết mới. */
			readonly KbArticleTemplateId: string;
			/** Từ khóa cần sử dụng cho tìm kiếm trong bài viết trong cơ sở kiến thức. */
			readonly KeyWords: string;
			/** Chọn ngôn ngữ bắt buộc của bài viết. Danh sách này dựa trên danh sách gói ngôn ngữ đã cài đặt trong môi trường Microsoft Dynamics 365 của bạn. */
			readonly LanguageCode: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối bài viết trong cơ sở kiến thức. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi lần cuối bài viết trong cơ sở kiến thức. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối kbarticle. */
			readonly ModifiedOnBehalfBy: string;
			/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
			readonly msa_publishtoweb: string;
			/** Số bài viết trong cơ sở kiến thức. */
			readonly Number: string;
			/** Mã định danh duy nhất của tổ chức liên kết với bài viết. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Cho biết bài viết trong cơ sở kiến thức ở trạng thái bản nháp, chưa phê duyệt hay đã phát hành. Các bài viết đã phát hành ở trạng thái chỉ đọc và không thể chỉnh sửa được trừ khi chúng được hủy phát hành. */
			readonly StateCode: string;
			/** Chọn trạng thái của bài viết. */
			readonly StatusCode: string;
			/** Chọn chủ đề của bài viết để hỗ trợ việc tìm kiếm bài viết. Bạn có thể đặt cấu hình chủ đề bên dưới Quản lý Doanh nghiệp trong vùng Thiết đặt. */
			readonly SubjectId: string;
			/** Nhập chủ đề hoặc tên mô tả cho bài viết để hỗ trợ việc tìm kiếm bài viết. */
			readonly Title: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Tiêu đề của bài viết trong cơ sở kiến thức. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KbArticle {
		enum StateCode {
			/** 1 */
			Ban_nhap,
			/** 3 */
			Da_phat_hanh,
			/** 2 */
			Khong_phe_chuan
		}
		enum StatusCode {
			/** 1 */
			Ban_nhap,
			/** 3 */
			Da_phat_hanh,
			/** 2 */
			Khong_phe_chuan
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