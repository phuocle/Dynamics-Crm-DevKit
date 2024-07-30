//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSocial_Profile {
		interface Header extends DevKit.Controls.IHeader {
			/** Xác định nguồn gốc của hồ sơ mạng xã hội, chẳng hạn như Twitter hoặc Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Hiện điểm số xác định mức ảnh hưởng xã hội trực tuyến của hồ sơ mạng xã hội. */
			InfluenceScore: DevKit.Controls.Double;
			/** Hiện người dùng hoặc nhóm đã gán quản lý bản ghi. Trường này sẽ cập nhật mỗi lần gán bản ghi cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			/** Chỉ định khả năng chặn hồ sơ mạng xã hội. */
			Blocked: DevKit.Controls.Boolean;
			/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
			CustomerId: DevKit.Controls.Lookup;
			/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
			ProfileLink: DevKit.Controls.String;
			/** Cho biết tên của hồ sơ mạng xã hội trên kênh xã hội tương ứng. */
			ProfileName: DevKit.Controls.String;
		}
		interface Navigation {

		}
		interface quickForm_related_sp_Body {
		}
		interface quickForm_related_sp extends DevKit.Controls.IQuickView {
			Body: quickForm_related_sp_Body;
		}
		interface QuickForm {
			related_sp: quickForm_related_sp;
		}
	}
	class FormSocial_Profile extends DevKit.IForm {
		/**
		* Social Profile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Social_Profile */
		Body: DevKit.FormSocial_Profile.Body;
		/** The Header section of form Social_Profile */
		Header: DevKit.FormSocial_Profile.Header;
		/** The Navigation of form Social_Profile */
		Navigation: DevKit.FormSocial_Profile.Navigation;
		/** The QuickForm of form Social_Profile */
		QuickForm: DevKit.FormSocial_Profile.QuickForm;
		/** The SidePanes of form Social_Profile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSocial_Profile_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Xác định nguồn gốc của hồ sơ mạng xã hội, chẳng hạn như Twitter hoặc Facebook. */
			Community: DevKit.Controls.OptionSet;
			/** Hiện điểm số xác định mức ảnh hưởng xã hội trực tuyến của hồ sơ mạng xã hội. */
			InfluenceScore: DevKit.Controls.Double;
			/** Hiện người dùng hoặc nhóm đã gán quản lý bản ghi. Trường này sẽ cập nhật mỗi lần gán bản ghi cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
			tab_2_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Chỉ định khả năng chặn hồ sơ mạng xã hội. */
			Blocked: DevKit.Controls.Boolean;
			/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
			CustomerId: DevKit.Controls.Lookup;
			/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
			ProfileLink: DevKit.Controls.String;
			/** Cho biết tên của hồ sơ mạng xã hội trên kênh xã hội tương ứng. */
			ProfileName: DevKit.Controls.String;
		}
		interface Navigation {

		}
		interface quickForm_customer_qfc_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FullName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_related_sp_Body {
		}
		interface quickForm_customer_qfc extends DevKit.Controls.IQuickView {
			Body: quickForm_customer_qfc_Body;
		}
		interface quickForm_related_sp extends DevKit.Controls.IQuickView {
			Body: quickForm_related_sp_Body;
		}
		interface QuickForm {
			customer_qfc: quickForm_customer_qfc;
			related_sp: quickForm_related_sp;
		}
	}
	class FormSocial_Profile_for_Interactive_experience extends DevKit.IForm {
		/**
		* Social Profile for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Social_Profile_for_Interactive_experience */
		Body: DevKit.FormSocial_Profile_for_Interactive_experience.Body;
		/** The Header section of form Social_Profile_for_Interactive_experience */
		Header: DevKit.FormSocial_Profile_for_Interactive_experience.Header;
		/** The Navigation of form Social_Profile_for_Interactive_experience */
		Navigation: DevKit.FormSocial_Profile_for_Interactive_experience.Navigation;
		/** The QuickForm of form Social_Profile_for_Interactive_experience */
		QuickForm: DevKit.FormSocial_Profile_for_Interactive_experience.QuickForm;
		/** The SidePanes of form Social_Profile_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	class SocialProfileApi {
		/**
		* DynamicsCrm.DevKit SocialProfileApi
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
		/** Chỉ định khả năng chặn hồ sơ mạng xã hội. */
		Blocked: boolean;
		/** Xác định nguồn gốc của hồ sơ mạng xã hội, chẳng hạn như Twitter hoặc Facebook. */
		Community: OptionSet.SocialProfile.Community;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
		customerid_account: string;
		/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
		customerid_contact: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Hiện điểm số xác định mức ảnh hưởng xã hội trực tuyến của hồ sơ mạng xã hội. */
		InfluenceScore: number;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu người liên hệ. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu người liên hệ. */
		readonly OwningUser: string;
		/** Cho biết tên hiển thị của khách hàng trên hồ sơ mạng xã hội này. */
		ProfileFullName: string;
		/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
		ProfileLink: string;
		/** Cho biết tên của hồ sơ mạng xã hội trên kênh xã hội tương ứng. */
		ProfileName: string;
		/** Mã định danh duy nhất của tên hồ sơ mạng xã hội. */
		SocialProfileId: string;
		/** Trạng thái của hồ sơ mạng xã hội */
		StateCode: OptionSet.SocialProfile.StateCode;
		/** Lý do dẫn đến trạng thái của hồ sơ mạng xã hội */
		StatusCode: OptionSet.SocialProfile.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** ID duy nhất của ID Cấu hình */
		UniqueProfileID: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của hồ sơ mạng xã hội. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ định khả năng chặn hồ sơ mạng xã hội. */
			readonly Blocked: string;
			/** Xác định nguồn gốc của hồ sơ mạng xã hội, chẳng hạn như Twitter hoặc Facebook. */
			readonly Community: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
			readonly customerid_account: string;
			/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
			readonly customerid_contact: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Hiện điểm số xác định mức ảnh hưởng xã hội trực tuyến của hồ sơ mạng xã hội. */
			readonly InfluenceScore: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu người liên hệ. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu người liên hệ. */
			readonly OwningUser: string;
			/** Cho biết tên hiển thị của khách hàng trên hồ sơ mạng xã hội này. */
			readonly ProfileFullName: string;
			/** Bạn hãy cho biết khách hàng của hồ sơ mạng xã hội này. */
			readonly ProfileLink: string;
			/** Cho biết tên của hồ sơ mạng xã hội trên kênh xã hội tương ứng. */
			readonly ProfileName: string;
			/** Mã định danh duy nhất của tên hồ sơ mạng xã hội. */
			readonly SocialProfileId: string;
			/** Trạng thái của hồ sơ mạng xã hội */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của hồ sơ mạng xã hội */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** ID duy nhất của ID Cấu hình */
			readonly UniqueProfileID: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của hồ sơ mạng xã hội. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SocialProfile {
		enum Community {
			/** 1 */
			Facebook,
			/** 0 */
			Khac,
			/** 2 */
			Twitter
		}
		enum CustomerIdType {
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