//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMau {
		interface Header extends DevKit.Controls.IHeader {
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu mẫu cho hoạt động email. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_Template_Sections {
			Details: DevKit.Controls.Section;
			Template_editor: DevKit.Controls.Section;
		}
		interface tab_Template extends DevKit.Controls.ITab {
			Section: tab_Template_Sections;
		}
		interface Tabs {
			Template: tab_Template;
		}
		interface Body {
			Tab: Tabs;
			/** Mô tả mẫu email. */
			Description: DevKit.Controls.String;
			/** Thông tin về khả năng mẫu là cá nhân hoặc có sẵn cho tất cả người dùng. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Ngôn ngữ của mẫu email. */
			LanguageCode: DevKit.Controls.Integer;
			/** Html an toàn của mẫu email. */
			SafeHtml: DevKit.Controls.String;
			/** Html an toàn của chủ đề mẫu email. */
			SubjectSafeHtml: DevKit.Controls.String;
			category: DevKit.Controls.ActionCards;
			/** Tiêu đề của mẫu. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			Email_EmailTemplate: DevKit.Controls.NavigationItem,
			emailtemplate_convertrule: DevKit.Controls.NavigationItem,
			template_activity_mime_attachments: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormMau extends DevKit.IForm {
		/**
		* Mẫu [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mau */
		Body: DevKit.FormMau.Body;
		/** The Header section of form Mau */
		Header: DevKit.FormMau.Header;
		/** The Navigation of form Mau */
		Navigation: DevKit.FormMau.Navigation;
		/** The Grid of form Mau */
		Grid: DevKit.FormMau.Grid;
		/** The SidePanes of form Mau */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormThong_tin {
		interface tab_general_Sections {
			email_template_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chủ đề liên kết với mẫu email. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			Email_EmailTemplate: DevKit.Controls.NavigationItem,
			emailtemplate_convertrule: DevKit.Controls.NavigationItem,
			template_activity_mime_attachments: DevKit.Controls.NavigationItem
		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class TemplateApi {
		/**
		* DynamicsCrm.DevKit TemplateApi
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
		/** Văn bản nội dung của mẫu email. */
		Body: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.Template.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo mẫu email. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo mẫu email. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo mẫu. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả mẫu email. */
		Description: string;
		/** Hiển thị hình ảnh mặc định cho bản ghi. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Chỉ sử dụng nội bộ. */
		GenerationTypeCode: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Thông tin về khả năng mẫu là cá nhân hoặc có sẵn cho tất cả người dùng. */
		IsPersonal: boolean;
		/** Cho biết một mẫu có được đề xuất bởi Dynamics 365 hay không. */
		readonly IsRecommended: boolean;
		/** Ngôn ngữ của mẫu email. */
		LanguageCode: number;
		/** Loại MIME của mẫu email. */
		MimeType: string;
		/** Mã định danh duy nhất của người dùng đã sửa mẫu lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi mẫu email lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa mẫu lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. Cho biết số lần email dùng mẫu này đã được mở. */
		readonly OpenCount: number;
		/** Hiển thị tỷ lệ mở của mẫu mày. Tỷ lệ này là dựa vào số lần mở trên các email được theo dõi sử dụng mẫu này. */
		readonly OpenRate: number;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu mẫu. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu mẫu. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu mẫu. */
		readonly OwningUser: string;
		/** Dữ liệu XML cho nội dung của mẫu email. */
		PresentationXml: string;
		/** Chỉ sử dụng nội bộ. Cho biết số lần email dùng mẫu này đã nhận được câu trả lời. */
		readonly ReplyCount: number;
		/** Hiển thị tỷ lệ trả lời cho mẫu mày. Tỷ lệ này là dựa vào số thư trả lời nhận được trên các email được theo dõi sử dụng mẫu này. */
		readonly ReplyRate: number;
		/** Html an toàn của mẫu email. */
		SafeHtml: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chủ đề liên kết với mẫu email. */
		Subject: string;
		/** Dữ liệu XML cho chủ đề của mẫu email. */
		SubjectPresentationXml: string;
		/** Html an toàn của chủ đề mẫu email. */
		SubjectSafeHtml: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của mẫu. */
		TemplateId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly TemplateIdUnique: string;
		/** Tiêu đề của mẫu. */
		Title: string;
		/** Cho biết số email đã gửi có sử dụng mẫu này. */
		readonly UsedCount: number;
		/** Số phiên bản của mẫu. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Văn bản nội dung của mẫu email. */
			readonly Body: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo mẫu email. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo mẫu email. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo mẫu. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả mẫu email. */
			readonly Description: string;
			/** Hiển thị hình ảnh mặc định cho bản ghi. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly GenerationTypeCode: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Thông tin về khả năng mẫu là cá nhân hoặc có sẵn cho tất cả người dùng. */
			readonly IsPersonal: string;
			/** Cho biết một mẫu có được đề xuất bởi Dynamics 365 hay không. */
			readonly IsRecommended: string;
			/** Ngôn ngữ của mẫu email. */
			readonly LanguageCode: string;
			/** Loại MIME của mẫu email. */
			readonly MimeType: string;
			/** Mã định danh duy nhất của người dùng đã sửa mẫu lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi mẫu email lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa mẫu lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. Cho biết số lần email dùng mẫu này đã được mở. */
			readonly OpenCount: string;
			/** Hiển thị tỷ lệ mở của mẫu mày. Tỷ lệ này là dựa vào số lần mở trên các email được theo dõi sử dụng mẫu này. */
			readonly OpenRate: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu mẫu. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu mẫu. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu mẫu. */
			readonly OwningUser: string;
			/** Dữ liệu XML cho nội dung của mẫu email. */
			readonly PresentationXml: string;
			/** Chỉ sử dụng nội bộ. Cho biết số lần email dùng mẫu này đã nhận được câu trả lời. */
			readonly ReplyCount: string;
			/** Hiển thị tỷ lệ trả lời cho mẫu mày. Tỷ lệ này là dựa vào số thư trả lời nhận được trên các email được theo dõi sử dụng mẫu này. */
			readonly ReplyRate: string;
			/** Html an toàn của mẫu email. */
			readonly SafeHtml: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chủ đề liên kết với mẫu email. */
			readonly Subject: string;
			/** Dữ liệu XML cho chủ đề của mẫu email. */
			readonly SubjectPresentationXml: string;
			/** Html an toàn của chủ đề mẫu email. */
			readonly SubjectSafeHtml: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của mẫu. */
			readonly TemplateId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TemplateIdUnique: string;
			/** Tiêu đề của mẫu. */
			readonly Title: string;
			/** Cho biết số email đã gửi có sử dụng mẫu này. */
			readonly UsedCount: string;
			/** Số phiên bản của mẫu. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Template {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
		}
		enum TemplateTypeCode {
			/** 4700 */
			Cong_viec_He_thong,
			/** 8 */
			Nguoi_dung,
			/** 2 */
			Nguoi_lien_he,
			/** 1 */
			Tai_khoan
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