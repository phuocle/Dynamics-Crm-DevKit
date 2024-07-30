//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Chọn trạng thái của cấu hình truy cập kênh. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_ChannelAccess_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_EntityPermissions_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_KnowledgeSettings_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_Note_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_ChannelAccess extends DevKit.Controls.ITab {
			Section: tab_ChannelAccess_Sections;
		}
		interface tab_EntityPermissions extends DevKit.Controls.ITab {
			Section: tab_EntityPermissions_Sections;
		}
		interface tab_KnowledgeSettings extends DevKit.Controls.ITab {
			Section: tab_KnowledgeSettings_Sections;
		}
		interface tab_Note extends DevKit.Controls.ITab {
			Section: tab_Note_Sections;
		}
		interface Tabs {
			ChannelAccess: tab_ChannelAccess;
			EntityPermissions: tab_EntityPermissions;
			KnowledgeSettings: tab_KnowledgeSettings;
			Note: tab_Note;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn xem có cho phép truy cập vào kênh email hay không. */
			EmailAccess: DevKit.Controls.Boolean;
			/** Chọn xem có cho phép truy cập vào kênh Facebook hay không. */
			FacebookAccess: DevKit.Controls.Boolean;
			/** Nhập tên mô tả cho cấu hình truy cập kênh. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Nhập người dùng hoặc nhóm được chỉ định quản lý bản ghi. Trường này sẽ cập nhật mỗi lần chỉ định bản ghi cho người dùng hoặc nhóm khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn xem có cho phép truy cập vào kênh điện thoại hay không. */
			PhoneAccess: DevKit.Controls.Boolean;
			/** Chọn xem có cho phép xếp hạng bài viết trong cơ sở kiến thức hay không. */
			RateKnowledgeArticles: DevKit.Controls.Boolean;
			Role_Control: DevKit.Controls.IFrame;
			/** Chọn xem có cho phép gửi phản hồi về bài viết trong cơ sở kiến thức hay không. */
			SubmitFeedback: DevKit.Controls.Boolean;
			/** Chọn xem có cho phép truy cập vào kênh Twitter hay không. */
			TwitterAccess: DevKit.Controls.Boolean;
			/** Chọn xem có cho phép xem xếp hạng bài viết trong cơ sở kiến thức hay không. */
			ViewArticleRating: DevKit.Controls.Boolean;
			/** Chọn xem có cho phép xem bài viết trong cơ sở kiến thức hay không. */
			ViewKnowledgeArticles: DevKit.Controls.Boolean;
			/** Chọn xem có cho phép truy cập vào kênh web hay không. */
			WebAccess: DevKit.Controls.Boolean;
		}
		interface Navigation {
			lk_externalpartyitem_channelaccessprofileid: DevKit.Controls.NavigationItem,
			profileruleitem_associated_channelaccessprofile: DevKit.Controls.NavigationItem
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
		/** The Header section of form Thong_tin */
		Header: DevKit.FormThong_tin.Header;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelAccessProfileApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileApi
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
		/** Mã định danh duy nhất của phiên bản thực thể */
		ChannelAccessProfileId: string;
		/** Mã định danh duy nhất của Cấu hình truy cập kênh được sử dụng khi đồng bộ các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
		readonly ChannelAccessProfileIdUnique: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ChannelAccessProfile.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Chọn xem có cho phép truy cập vào kênh email hay không. */
		EmailAccess: boolean;
		/** Tỷ giá của loại tiền được liên kết với ChannelAccessProfile theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Chọn xem có cho phép truy cập vào kênh Facebook hay không. */
		FacebookAccess: boolean;
		/** Chỉ sử dụng nội bộ */
		readonly HavePrivilegesChanged: boolean;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Phiên bản trong đó quy tắc tương tự được giới thiệu. */
		IntroducedVersion: string;
		/** Chỉ sử dụng nội bộ. */
		IsGuestProfile: boolean;
		/** Được quản lý */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả cho cấu hình truy cập kênh. */
		Name: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Ngày và giờ tạo bản ghi. */
		readonly OverwriteTime_UtcDateOnly: Date;
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
		/** Chọn xem có cho phép truy cập vào kênh điện thoại hay không. */
		PhoneAccess: boolean;
		/** Chọn xem có cho phép xếp hạng bài viết trong cơ sở kiến thức hay không. */
		RateKnowledgeArticles: boolean;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Cho biết cấu hình truy cập kênh là hiện hoạt hay không hoạt động. */
		StateCode: OptionSet.ChannelAccessProfile.StateCode;
		/** Chọn trạng thái của cấu hình truy cập kênh. */
		StatusCode: OptionSet.ChannelAccessProfile.StatusCode;
		/** Chọn xem có cho phép gửi phản hồi về bài viết trong cơ sở kiến thức hay không. */
		SubmitFeedback: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tỷ giá của loại tiền được liên kết với ChannelAccessProfile theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Chọn xem có cho phép truy cập vào kênh Twitter hay không. */
		TwitterAccess: boolean;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Chọn xem có cho phép xem xếp hạng bài viết trong cơ sở kiến thức hay không. */
		ViewArticleRating: boolean;
		/** Chọn xem có cho phép xem bài viết trong cơ sở kiến thức hay không. */
		ViewKnowledgeArticles: boolean;
		/** Chọn xem có cho phép truy cập vào kênh web hay không. */
		WebAccess: boolean;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly ChannelAccessProfileId: string;
			/** Mã định danh duy nhất của Cấu hình truy cập kênh được sử dụng khi đồng bộ các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
			readonly ChannelAccessProfileIdUnique: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Chọn xem có cho phép truy cập vào kênh email hay không. */
			readonly EmailAccess: string;
			/** Tỷ giá của loại tiền được liên kết với ChannelAccessProfile theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Chọn xem có cho phép truy cập vào kênh Facebook hay không. */
			readonly FacebookAccess: string;
			/** Chỉ sử dụng nội bộ */
			readonly HavePrivilegesChanged: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản trong đó quy tắc tương tự được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsGuestProfile: string;
			/** Được quản lý */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả cho cấu hình truy cập kênh. */
			readonly Name: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly OverwriteTime_UtcDateOnly: string;
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
			/** Chọn xem có cho phép truy cập vào kênh điện thoại hay không. */
			readonly PhoneAccess: string;
			/** Chọn xem có cho phép xếp hạng bài viết trong cơ sở kiến thức hay không. */
			readonly RateKnowledgeArticles: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Cho biết cấu hình truy cập kênh là hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của cấu hình truy cập kênh. */
			readonly StatusCode: string;
			/** Chọn xem có cho phép gửi phản hồi về bài viết trong cơ sở kiến thức hay không. */
			readonly SubmitFeedback: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tỷ giá của loại tiền được liên kết với ChannelAccessProfile theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Chọn xem có cho phép truy cập vào kênh Twitter hay không. */
			readonly TwitterAccess: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Chọn xem có cho phép xem xếp hạng bài viết trong cơ sở kiến thức hay không. */
			readonly ViewArticleRating: string;
			/** Chọn xem có cho phép xem bài viết trong cơ sở kiến thức hay không. */
			readonly ViewKnowledgeArticles: string;
			/** Chọn xem có cho phép truy cập vào kênh web hay không. */
			readonly WebAccess: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfile {
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
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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