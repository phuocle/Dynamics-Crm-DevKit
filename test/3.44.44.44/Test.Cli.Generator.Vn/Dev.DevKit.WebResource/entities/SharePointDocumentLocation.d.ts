//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			_272EB814_0769_5EBE_3ED1_E95A0B16853E: DevKit.Controls.Section;
			url_option: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** URL tuyệt đối của vị trí tài liệu SharePoint. */
			AbsoluteURL: DevKit.Controls.String;
			/** Mô tả của bản ghi vị trí tài liệu SharePoint. */
			Description: DevKit.Controls.String;
			/** Kiểu vị trí của vị trí tài liệu SharePoint. */
			LocationType: DevKit.Controls.OptionSet;
			/** Tên của bản ghi vị trí tài liệu SharePoint. */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu bản ghi vị trí tài liệu SharePoint. */
			OwnerId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của vị trí hay trang mẹ. */
			ParentSiteOrLocation: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** URL tương đối của vị trí tài liệu SharePoint. */
			RelativeUrl: DevKit.Controls.String;
		}
		interface Navigation {

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
	class SharePointDocumentLocationApi {
		/**
		* DynamicsCrm.DevKit SharePointDocumentLocationApi
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
		/** URL tuyệt đối của vị trí tài liệu SharePoint. */
		AbsoluteURL: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi vị trí tài liệu SharePoint. */
		readonly CreatedBy: string;
		/** Ngày giờ tạo bản ghi vị trí tài liệu SharePoint. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi vị trí tài liệu SharePoint. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả của bản ghi vị trí tài liệu SharePoint. */
		Description: string;
		/** Tỷ giá giữa loại tiền đã liên kết với bản ghi vị trí tài liệu SharePoint và loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Số tuần tự của lần nhập đã tạo bản ghi vị trí tài liệu SharePoint. */
		ImportSequenceNumber: number;
		/** Kiểu vị trí của vị trí tài liệu SharePoint. */
		LocationType: OptionSet.SharePointDocumentLocation.LocationType;
		/** Mã định danh duy nhất của người dùng đã sửa bản ghi vị trí tài liệu SharePoint lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày giờ sửa bản ghi vị trí tài liệu SharePoint lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi vị trí tài liệu SharePoint. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của bản ghi vị trí tài liệu SharePoint. */
		Name: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi vị trí tài liệu SharePoint. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi vị trí tài liệu SharePoint. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi vị trí tài liệu SharePoint. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của vị trí hay trang mẹ. */
		parentsiteorlocation_sharepointdocumentlocation: string;
		/** Mã định danh duy nhất của vị trí hay trang mẹ. */
		parentsiteorlocation_sharepointsite: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
		regardingobjectid_account: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
		regardingobjectid_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
		regardingobjectid_kbarticle: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
		regardingobjectid_knowledgearticle: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
		regardingobjectid_mspp_website: string;
		/** URL tương đối của vị trí tài liệu SharePoint. */
		RelativeUrl: string;
		/** Hiển thị loại dịch vụ của trang web SharePoint. */
		ServiceType: OptionSet.SharePointDocumentLocation.ServiceType;
		/** Mã định danh duy nhất của bản ghi vị trí tài liệu SharePoint. */
		SharePointDocumentLocationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SiteCollectionId: string;
		/** Trạng thái của bản ghi vị trí tài liệu SharePoint. */
		StateCode: OptionSet.SharePointDocumentLocation.StateCode;
		/** Lý do dẫn đến trạng thái của bản ghi vị trí tài liệu SharePoint. */
		StatusCode: OptionSet.SharePointDocumentLocation.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền đã liên kết với bản ghi vị trí tài liệu SharePoint. */
		readonly TransactionCurrencyId: string;
		/** Chọn người dùng sở hữu vị trí tài liệu SharePoint. */
		UserId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** URL tuyệt đối của vị trí tài liệu SharePoint. */
			readonly AbsoluteURL: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi vị trí tài liệu SharePoint. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo bản ghi vị trí tài liệu SharePoint. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi vị trí tài liệu SharePoint. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả của bản ghi vị trí tài liệu SharePoint. */
			readonly Description: string;
			/** Tỷ giá giữa loại tiền đã liên kết với bản ghi vị trí tài liệu SharePoint và loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Số tuần tự của lần nhập đã tạo bản ghi vị trí tài liệu SharePoint. */
			readonly ImportSequenceNumber: string;
			/** Kiểu vị trí của vị trí tài liệu SharePoint. */
			readonly LocationType: string;
			/** Mã định danh duy nhất của người dùng đã sửa bản ghi vị trí tài liệu SharePoint lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày giờ sửa bản ghi vị trí tài liệu SharePoint lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi vị trí tài liệu SharePoint. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của bản ghi vị trí tài liệu SharePoint. */
			readonly Name: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi vị trí tài liệu SharePoint. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi vị trí tài liệu SharePoint. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi vị trí tài liệu SharePoint. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của vị trí hay trang mẹ. */
			readonly parentsiteorlocation_sharepointdocumentlocation: string;
			/** Mã định danh duy nhất của vị trí hay trang mẹ. */
			readonly parentsiteorlocation_sharepointsite: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
			readonly regardingobjectid_account: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
			readonly regardingobjectid_kbarticle: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint. */
			readonly regardingobjectid_mspp_website: string;
			/** URL tương đối của vị trí tài liệu SharePoint. */
			readonly RelativeUrl: string;
			/** Hiển thị loại dịch vụ của trang web SharePoint. */
			readonly ServiceType: string;
			/** Mã định danh duy nhất của bản ghi vị trí tài liệu SharePoint. */
			readonly SharePointDocumentLocationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SiteCollectionId: string;
			/** Trạng thái của bản ghi vị trí tài liệu SharePoint. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của bản ghi vị trí tài liệu SharePoint. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền đã liên kết với bản ghi vị trí tài liệu SharePoint. */
			readonly TransactionCurrencyId: string;
			/** Chọn người dùng sở hữu vị trí tài liệu SharePoint. */
			readonly UserId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointDocumentLocation {
		enum LocationType {
			/** 1 */
			Danh_rieng_cho_Tich_hop_OneNote,
			/** 0 */
			Tong_quat
		}
		enum ParentSiteOrLocationTypeCode {
		}
		enum RegardingObjectTypeCode {
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