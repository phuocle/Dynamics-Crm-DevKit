//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMainIC_cua_phan_hoi {
		interface Header extends DevKit.Controls.IHeader {
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu dạng xem bài viết trong cơ sở kiến thức. */
			OwnerId: DevKit.Controls.Lookup;
			/** Hiển thị xem phản hồi còn mở, bị từ chối hay đã đóng. */
			StateCode: DevKit.Controls.OptionSet;
			/** Chọn trạng thái của phản hồi. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			Content: DevKit.Controls.Section;
			Content_2: DevKit.Controls.Section;
			General_Info: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Cho biết người đóng bản ghi. */
			ClosedBy: DevKit.Controls.Lookup;
			/** Cho biết ngày và giờ đóng bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			ClosedOn: DevKit.Controls.DateTime;
			/** Nhập nhận xét phản hồi. */
			Comments: DevKit.Controls.String;
			/** Cho biết người tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Hiển thị người liên hệ đã tạo bản ghi. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Nhập giá trị xếp hạng tối đa. */
			MaxRating: DevKit.Controls.Integer;
			/** Nhập giá trị xếp hạng tối thiểu. */
			MinRating: DevKit.Controls.Integer;
			/** Hiển thị xếp hạng được chia theo thang đo giá trị giữa 0 và 1 dựa trên xếp hạng tối thiểu và tối đa. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Cho biết mức độ có ích của bản ghi liên quan. */
			Rating: DevKit.Controls.Integer;
			/** Hiển thị bản ghi liên kết với phản hồi. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Hiển thị nơi gửi phản hồi. */
			Source: DevKit.Controls.OptionSet;
			/** Nhập tiêu đề cho phản hồi. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			feedback_feedback: DevKit.Controls.NavigationItem
		}
	}
	class FormMainIC_cua_phan_hoi extends DevKit.IForm {
		/**
		* MainIC của phản hồi [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form MainIC_cua_phan_hoi */
		Body: DevKit.FormMainIC_cua_phan_hoi.Body;
		/** The Header section of form MainIC_cua_phan_hoi */
		Header: DevKit.FormMainIC_cua_phan_hoi.Header;
		/** The Navigation of form MainIC_cua_phan_hoi */
		Navigation: DevKit.FormMainIC_cua_phan_hoi.Navigation;
		/** The SidePanes of form MainIC_cua_phan_hoi */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNew_Comment_Form {
		interface tab_general_Sections {
			feedback_Details: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập nhận xét phản hồi. */
			Comments: DevKit.Controls.String;
		}
		interface Navigation {
			feedback_feedback: DevKit.Controls.NavigationItem
		}
	}
	class FormNew_Comment_Form extends DevKit.IForm {
		/**
		* New Comment Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form New_Comment_Form */
		Body: DevKit.FormNew_Comment_Form.Body;
		/** The Navigation of form New_Comment_Form */
		Navigation: DevKit.FormNew_Comment_Form.Navigation;
		/** The SidePanes of form New_Comment_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPhan_hoi {
		interface Header extends DevKit.Controls.IHeader {
			/** Hiển thị xếp hạng được chia theo thang đo giá trị giữa 0 và 1 dựa trên xếp hạng tối thiểu và tối đa. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu dạng xem bài viết trong cơ sở kiến thức. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của phản hồi. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			feedback_Contacts: DevKit.Controls.Section;
			feedback_Details: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Cho biết người đóng bản ghi. */
			ClosedBy: DevKit.Controls.Lookup;
			/** Cho biết ngày và giờ đóng bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			ClosedOn: DevKit.Controls.DateTime;
			/** Nhập nhận xét phản hồi. */
			Comments: DevKit.Controls.String;
			/** Cho biết người tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Hiển thị người liên hệ đã tạo bản ghi. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Nhập giá trị xếp hạng tối đa. */
			MaxRating: DevKit.Controls.Integer;
			/** Nhập giá trị xếp hạng tối thiểu. */
			MinRating: DevKit.Controls.Integer;
			/** Cho biết mức độ có ích của bản ghi liên quan. */
			Rating: DevKit.Controls.Integer;
			/** Hiển thị bản ghi liên kết với phản hồi. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Hiển thị nơi gửi phản hồi. */
			Source: DevKit.Controls.OptionSet;
			/** Nhập tiêu đề cho phản hồi. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			feedback_feedback: DevKit.Controls.NavigationItem
		}
	}
	class FormPhan_hoi extends DevKit.IForm {
		/**
		* Phản hồi [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Phan_hoi */
		Body: DevKit.FormPhan_hoi.Body;
		/** The Header section of form Phan_hoi */
		Header: DevKit.FormPhan_hoi.Header;
		/** The Navigation of form Phan_hoi */
		Navigation: DevKit.FormPhan_hoi.Navigation;
		/** The SidePanes of form Phan_hoi */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formsimple_contact_us_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Hiển thị xếp hạng được chia theo thang đo giá trị giữa 0 và 1 dựa trên xếp hạng tối thiểu và tối đa. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu dạng xem bài viết trong cơ sở kiến thức. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của phản hồi. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Your_details_Sections {
			CONTACT_INFORMATION: DevKit.Controls.Section;
		}
		interface tab_Your_details extends DevKit.Controls.ITab {
			Section: tab_Your_details_Sections;
		}
		interface Tabs {
			Your_details: tab_Your_details;
		}
		interface Body {
			Tab: Tabs;
			/** Email của người liên hệ đã tạo bản ghi. */
			Adx_ContactEmail: DevKit.Controls.String;
			/** Tên của người liên hệ đã tạo bản ghi. */
			Adx_CreatedByContact: DevKit.Controls.String;
			/** Nhập nhận xét phản hồi. */
			Comments: DevKit.Controls.String;
			/** Nhập tiêu đề cho phản hồi. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			feedback_feedback: DevKit.Controls.NavigationItem
		}
	}
	class Formsimple_contact_us_form extends DevKit.IForm {
		/**
		* simple contact us form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form simple_contact_us_form */
		Body: DevKit.Formsimple_contact_us_form.Body;
		/** The Header section of form simple_contact_us_form */
		Header: DevKit.Formsimple_contact_us_form.Header;
		/** The Navigation of form simple_contact_us_form */
		Navigation: DevKit.Formsimple_contact_us_form.Navigation;
		/** The SidePanes of form simple_contact_us_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTao_Nhanh_Phan_hoi {
		interface tab_general_Sections {
			feedback_Contacts: DevKit.Controls.Section;
			feedback_Details: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập nhận xét phản hồi. */
			Comments: DevKit.Controls.String;
			/** Hiển thị người liên hệ đã tạo bản ghi. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Nhập giá trị xếp hạng tối đa. */
			MaxRating: DevKit.Controls.Integer;
			/** Nhập giá trị xếp hạng tối thiểu. */
			MinRating: DevKit.Controls.Integer;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu dạng xem bài viết trong cơ sở kiến thức. */
			OwnerId: DevKit.Controls.Lookup;
			/** Cho biết mức độ có ích của bản ghi liên quan. */
			Rating: DevKit.Controls.Integer;
			/** Hiển thị bản ghi liên kết với phản hồi. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Hiển thị nơi gửi phản hồi. */
			Source: DevKit.Controls.OptionSet;
			/** Chọn trạng thái của phản hồi. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Nhập tiêu đề cho phản hồi. */
			Title: DevKit.Controls.String;
		}
	}
	class FormTao_Nhanh_Phan_hoi extends DevKit.IForm {
		/**
		* Tạo Nhanh Phản hồi [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Tao_Nhanh_Phan_hoi */
		Body: DevKit.FormTao_Nhanh_Phan_hoi.Body;
	}
	class FeedbackApi {
		/**
		* DynamicsCrm.DevKit FeedbackApi
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
		/** Cho biết phản hồi đã được chấp thuận để hiển thị hay chưa. */
		adx_approved: boolean;
		/** URL trang chủ/blog của tác giả. */
		adx_authorurl: string;
		/** Email của người liên hệ đã tạo bản ghi. */
		Adx_ContactEmail: string;
		/** Tên người dùng của người liên hệ đã tạo bản ghi. */
		Adx_ContactUsername: string;
		/** Tên của người liên hệ đã tạo bản ghi. */
		Adx_CreatedByContact: string;
		/** Cho biết người đóng bản ghi. */
		readonly ClosedBy: string;
		/** Cho biết ngày và giờ đóng bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ClosedOn_UtcDateAndTime: Date;
		/** Nhập nhận xét phản hồi. */
		Comments: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Hiển thị người liên hệ đã tạo bản ghi. */
		CreatedByContact: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Cho biết người liên hệ tạo bản ghi thay mặt cho người dùng khác. */
		CreatedOnBehalfByContact: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để chuyển đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** FeedbackId */
		FeedbackId: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Nhập giá trị xếp hạng tối đa. */
		MaxRating: number;
		/** Nhập giá trị xếp hạng tối thiểu. */
		MinRating: number;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the record in context of which feedback rating is being provided. */
		msdyn_ContextObjectId: string;
		/** Hiển thị xếp hạng được chia theo thang đo giá trị giữa 0 và 1 dựa trên xếp hạng tối thiểu và tối đa. */
		readonly NormalizedRating: number;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu dạng xem bài viết trong cơ sở kiến thức. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu phản hồi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu phản hồi này. */
		readonly OwningUser: string;
		/** Cho biết mức độ có ích của bản ghi liên quan. */
		Rating: number;
		/** Hiển thị bản ghi liên kết với phản hồi. */
		ContactId: string;
		/** Hiển thị bản ghi liên kết với phản hồi. */
		FeedbackId1: string;
		/** Hiển thị bản ghi liên kết với phản hồi. */
		KnowledgeArticleId: string;
		/** Hiển thị nơi gửi phản hồi. */
		Source: OptionSet.Feedback.Source;
		/** Hiển thị xem phản hồi còn mở, bị từ chối hay đã đóng. */
		StateCode: OptionSet.Feedback.StateCode;
		/** Chọn trạng thái của phản hồi. */
		StatusCode: OptionSet.Feedback.StatusCode;
		/** Nhập tiêu đề cho phản hồi. */
		Title: string;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Số phiên bản của phản hồi. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Cho biết phản hồi đã được chấp thuận để hiển thị hay chưa. */
			readonly adx_approved: string;
			/** URL trang chủ/blog của tác giả. */
			readonly adx_authorurl: string;
			/** Email của người liên hệ đã tạo bản ghi. */
			readonly Adx_ContactEmail: string;
			/** Tên người dùng của người liên hệ đã tạo bản ghi. */
			readonly Adx_ContactUsername: string;
			/** Tên của người liên hệ đã tạo bản ghi. */
			readonly Adx_CreatedByContact: string;
			/** Cho biết người đóng bản ghi. */
			readonly ClosedBy: string;
			/** Cho biết ngày và giờ đóng bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ClosedOn_UtcDateAndTime: string;
			/** Nhập nhận xét phản hồi. */
			readonly Comments: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Hiển thị người liên hệ đã tạo bản ghi. */
			readonly CreatedByContact: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Cho biết người liên hệ tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfByContact: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để chuyển đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** FeedbackId */
			readonly FeedbackId: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Nhập giá trị xếp hạng tối đa. */
			readonly MaxRating: string;
			/** Nhập giá trị xếp hạng tối thiểu. */
			readonly MinRating: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the record in context of which feedback rating is being provided. */
			readonly msdyn_ContextObjectId: string;
			/** Hiển thị xếp hạng được chia theo thang đo giá trị giữa 0 và 1 dựa trên xếp hạng tối thiểu và tối đa. */
			readonly NormalizedRating: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu dạng xem bài viết trong cơ sở kiến thức. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu phản hồi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu phản hồi này. */
			readonly OwningUser: string;
			/** Cho biết mức độ có ích của bản ghi liên quan. */
			readonly Rating: string;
			/** Hiển thị bản ghi liên kết với phản hồi. */
			readonly ContactId: string;
			/** Hiển thị bản ghi liên kết với phản hồi. */
			readonly FeedbackId1: string;
			/** Hiển thị bản ghi liên kết với phản hồi. */
			readonly KnowledgeArticleId: string;
			/** Hiển thị nơi gửi phản hồi. */
			readonly Source: string;
			/** Hiển thị xem phản hồi còn mở, bị từ chối hay đã đóng. */
			readonly StateCode: string;
			/** Chọn trạng thái của phản hồi. */
			readonly StatusCode: string;
			/** Nhập tiêu đề cho phản hồi. */
			readonly Title: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Số phiên bản của phản hồi. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Feedback {
		enum msdyn_ContextObjectIdType {
		}
		enum RegardingObjectTypeCode {
		}
		enum Source {
			/** 1 */
			Cong_thong_tin,
			/** 0 */
			Noi_bo
		}
		enum StateCode {
			/** 1 */
			Da_dong,
			/** 0 */
			Mo
		}
		enum StatusCode {
			/** 4 */
			Bi_tu_choi,
			/** 2 */
			Da_chap_nhan,
			/** 1 */
			Da_de_xuat,
			/** 3 */
			Da_dong
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