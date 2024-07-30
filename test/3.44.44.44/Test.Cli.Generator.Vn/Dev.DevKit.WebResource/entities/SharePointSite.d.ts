//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			section_1: DevKit.Controls.Section;
			url_option: DevKit.Controls.Section;
			url_validation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** URL tuyệt đối của trang SharePoint. */
			AbsoluteURL: DevKit.Controls.String;
			/** Mô tả của bản ghi trang SharePoint. */
			Description: DevKit.Controls.String;
			/** Cho biết khả năng hiển thị Lưới SharePoint. */
			IsGridPresent: DevKit.Controls.Boolean;
			/** Cho phép nhúng Báo cáo Power BI có trong trang web SharePoint này. */
			IsPowerBISite: DevKit.Controls.Boolean;
			/** Ngày giờ xác thực URL trang SharePoint lần cuối. */
			LastValidated: DevKit.Controls.DateTime;
			/** Tên của bản ghi trang SharePoint. */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu trang SharePoint. */
			OwnerId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của trang SharePoint mẹ. */
			ParentSite: DevKit.Controls.Lookup;
			/** URL tương đối của trang SharePoint. */
			RelativeUrl: DevKit.Controls.String;
			/** Trạng thái xác thực của URL trang SharePoint. */
			ValidationStatus: DevKit.Controls.OptionSet;
			/** Lý do dẫn đến trạng thái xác thực của URL */
			ValidationStatusErrorCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			sharepointsite_parentsite_sharepointsite: DevKit.Controls.NavigationItem
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
	class SharePointSiteApi {
		/**
		* DynamicsCrm.DevKit SharePointSiteApi
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
		/** URL tuyệt đối của trang SharePoint. */
		AbsoluteURL: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi trang SharePoint. */
		readonly CreatedBy: string;
		/** Ngày giờ tạo bản ghi trang SharePoint. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi trang SharePoint. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả của bản ghi trang SharePoint. */
		Description: string;
		/** Tỷ giá giữa loại tiền đã liên kết với bản ghi trang SharePoint và loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết trang SharePoint có phải là trang mặc định hay không. */
		IsDefault: boolean;
		/** Cho biết khả năng hiển thị Lưới SharePoint. */
		IsGridPresent: boolean;
		/** Cho phép nhúng Báo cáo Power BI có trong trang web SharePoint này. */
		IsPowerBISite: boolean;
		/** Ngày giờ xác thực URL trang SharePoint lần cuối. */
		LastValidated_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi trang SharePoint lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày giờ sửa bản ghi trang SharePoint lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa bản ghi trang SharePoint. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của bản ghi trang SharePoint. */
		Name: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất dành cho bơn vị kinh doanh sở hữu bản ghi vị trí tài liệu. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi trang SharePoint. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi trang SharePoint. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của trang SharePoint mẹ. */
		ParentSite: string;
		/** URL tương đối của trang SharePoint. */
		RelativeUrl: string;
		/** Cho biết loại dịch vụ cho vị trí của trang web SharePoint. */
		ServiceType: OptionSet.SharePointSite.ServiceType;
		/** Mã định danh duy nhất của trang SharePoint trong Dynamics 365 */
		SharePointSiteId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SiteCollectionId: string;
		/** Trạng thái của bản ghi trang SharePoint. */
		StateCode: OptionSet.SharePointSite.StateCode;
		/** Lý do dẫn đến trạng thái của bản ghi trang SharePoint. */
		StatusCode: OptionSet.SharePointSite.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền đã liên kết với bản ghi trang SharePoint. */
		readonly TransactionCurrencyId: string;
		/** Chọn người dùng sở hữu trang web SharePoint. */
		UserId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Trạng thái xác thực của URL trang SharePoint. */
		ValidationStatus: OptionSet.SharePointSite.ValidationStatus;
		/** Lý do dẫn đến trạng thái xác thực của URL */
		ValidationStatusErrorCode: OptionSet.SharePointSite.ValidationStatusErrorCode;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** URL tuyệt đối của trang SharePoint. */
			readonly AbsoluteURL: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi trang SharePoint. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo bản ghi trang SharePoint. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi trang SharePoint. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả của bản ghi trang SharePoint. */
			readonly Description: string;
			/** Tỷ giá giữa loại tiền đã liên kết với bản ghi trang SharePoint và loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết trang SharePoint có phải là trang mặc định hay không. */
			readonly IsDefault: string;
			/** Cho biết khả năng hiển thị Lưới SharePoint. */
			readonly IsGridPresent: string;
			/** Cho phép nhúng Báo cáo Power BI có trong trang web SharePoint này. */
			readonly IsPowerBISite: string;
			/** Ngày giờ xác thực URL trang SharePoint lần cuối. */
			readonly LastValidated_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi trang SharePoint lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày giờ sửa bản ghi trang SharePoint lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa bản ghi trang SharePoint. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của bản ghi trang SharePoint. */
			readonly Name: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất dành cho bơn vị kinh doanh sở hữu bản ghi vị trí tài liệu. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi trang SharePoint. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi trang SharePoint. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của trang SharePoint mẹ. */
			readonly ParentSite: string;
			/** URL tương đối của trang SharePoint. */
			readonly RelativeUrl: string;
			/** Cho biết loại dịch vụ cho vị trí của trang web SharePoint. */
			readonly ServiceType: string;
			/** Mã định danh duy nhất của trang SharePoint trong Dynamics 365 */
			readonly SharePointSiteId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SiteCollectionId: string;
			/** Trạng thái của bản ghi trang SharePoint. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của bản ghi trang SharePoint. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền đã liên kết với bản ghi trang SharePoint. */
			readonly TransactionCurrencyId: string;
			/** Chọn người dùng sở hữu trang web SharePoint. */
			readonly UserId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Trạng thái xác thực của URL trang SharePoint. */
			readonly ValidationStatus: string;
			/** Lý do dẫn đến trạng thái xác thực của URL */
			readonly ValidationStatusErrorCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointSite {
		enum FolderStructureEntity {
			/** 0 */
			Khong,
			/** 2 */
			Nguoi_lien_he,
			/** 1 */
			Tai_khoan
		}
		enum ParentSiteObjectTypeCode {
		}
		enum ServiceType {
			/** 3 */
			Cac_nhom_MS,
			/** 2 */
			Duoc_chia_se_voi_toi,
			/** 1 */
			OneDrive,
			/** 0 */
			SharePoint
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
		enum ValidationStatus {
			/** 1 */
			Chua_xac_thuc,
			/** 2 */
			Dang_tien_hanh,
			/** 4 */
			Hop_le,
			/** 3 */
			Khong_hop_le,
			/** 5 */
			Khong_the_xac_thuc
		}
		enum ValidationStatusErrorCode {
			/** 1 */
			Chua_xac_thuc_URL_cua_ban_ghi_nay,
			/** 7 */
			Chung_chi_khong_hop_le,
			/** 5 */
			Khong_the_truy_cap_URL_do_thiet_dat_bao_mat_cua_Internet_Explorer,
			/** 6 */
			Loi_xac_thuc,
			/** 4 */
			So_do_URL_cua_Microsoft_Dynamics_365_va_SharePoint_khac_nhau,
			/** 2 */
			URL_cua_ban_ghi_nay_co_hop_le,
			/** 3 */
			URL_cua_ban_ghi_nay_khong_hop_le
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