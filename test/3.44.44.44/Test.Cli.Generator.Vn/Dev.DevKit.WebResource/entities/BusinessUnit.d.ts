//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_addresses_Sections {
			bill_to_address: DevKit.Controls.Section;
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			section_1: DevKit.Controls.Section;
		}
		interface tab_addresses extends DevKit.Controls.ITab {
			Section: tab_addresses_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			addresses: tab_addresses;
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Tên thành phố cho địa chỉ 1. */
			Address1_City: DevKit.Controls.String;
			/** Tên quốc gia/Khu vực cho địa chỉ 1. */
			Address1_Country: DevKit.Controls.String;
			/** Dòng đầu tiên để nhập thông tin địa chỉ 1. */
			Address1_Line1: DevKit.Controls.String;
			/** Dòng thứ hai để nhập thông tin địa chỉ 1. */
			Address1_Line2: DevKit.Controls.String;
			/** Dòng thứ ba để nhập thông tin địa chỉ 1. */
			Address1_Line3: DevKit.Controls.String;
			/** Mã ZIP hoặc mã bưu điện cho địa chỉ 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Bang hoặc tỉnh cho địa chỉ 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** Số điện thoại đầu tiên liên kết với địa chỉ 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Số điện thoại thứ hai liên kết với địa chỉ 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Số điện thoại thứ ba liên kết với địa chỉ 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** Tên thành phố cho địa chỉ 2. */
			Address2_City: DevKit.Controls.String;
			/** Tên quốc gia/khu vực cho địa chỉ 2. */
			Address2_Country: DevKit.Controls.String;
			/** Dòng đầu tiên để nhập thông tin địa chỉ 2. */
			Address2_Line1: DevKit.Controls.String;
			/** Dòng thứ hai để nhập thông tin địa chỉ 2. */
			Address2_Line2: DevKit.Controls.String;
			/** Dòng thứ ba để nhập thông tin địa chỉ 2. */
			Address2_Line3: DevKit.Controls.String;
			/** Mã ZIP hoặc mã bưu điện cho địa chỉ 2. */
			Address2_PostalCode: DevKit.Controls.String;
			/** Bang hoặc tỉnh cho địa chỉ 2. */
			Address2_StateOrProvince: DevKit.Controls.String;
			/** Tên của bộ phận trong đơn vị kinh doanh. */
			DivisionName: DevKit.Controls.String;
			/** Địa chỉ email cho đơn vị kinh doanh. */
			EMailAddress: DevKit.Controls.String;
			/** Tên của đơn vị kinh doanh. */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của đơn vị kinh doanh mẹ. */
			ParentBusinessUnitId: DevKit.Controls.Lookup;
			/** URL trang web cho đơn vị kinh doanh. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			business_unit_accounts: DevKit.Controls.NavigationItem,
			business_unit_category: DevKit.Controls.NavigationItem,
			business_unit_contacts: DevKit.Controls.NavigationItem,
			business_unit_feedback: DevKit.Controls.NavigationItem,
			business_unit_mailmergetemplates: DevKit.Controls.NavigationItem,
			business_unit_parent_business_unit: DevKit.Controls.NavigationItem,
			business_unit_personaldocumenttemplates: DevKit.Controls.NavigationItem,
			business_unit_principalentitybusinessunitmap: DevKit.Controls.NavigationItem,
			business_unit_reports: DevKit.Controls.NavigationItem,
			business_unit_roles: DevKit.Controls.NavigationItem,
			business_unit_system_users: DevKit.Controls.NavigationItem,
			business_unit_teams: DevKit.Controls.NavigationItem,
			businessunit_callbackregistration: DevKit.Controls.NavigationItem,
			businessunit_canvasapp: DevKit.Controls.NavigationItem
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
	class BusinessUnitApi {
		/**
		* DynamicsCrm.DevKit BusinessUnitApi
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
		/** Mã định danh duy nhất cho địa chỉ 1. */
		Address1_AddressId: string;
		/** Loại địa chỉ cho địa chỉ 1, chẳng hạn như địa chỉ lập hóa đơn, giao hàng hoặc địa chỉ chính. */
		Address1_AddressTypeCode: OptionSet.BusinessUnit.Address1_AddressTypeCode;
		/** Tên thành phố cho địa chỉ 1. */
		Address1_City: string;
		/** Tên quốc gia/Khu vực cho địa chỉ 1. */
		Address1_Country: string;
		/** Tên hạt cho địa chỉ 1. */
		Address1_County: string;
		/** Số fax cho địa chỉ 1. */
		Address1_Fax: string;
		/** Vĩ độ cho địa chỉ 1. */
		Address1_Latitude: number;
		/** Dòng đầu tiên để nhập thông tin địa chỉ 1. */
		Address1_Line1: string;
		/** Dòng thứ hai để nhập thông tin địa chỉ 1. */
		Address1_Line2: string;
		/** Dòng thứ ba để nhập thông tin địa chỉ 1. */
		Address1_Line3: string;
		/** Kinh độ cho địa chỉ 1. */
		Address1_Longitude: number;
		/** Tên để nhập cho địa chỉ 1. */
		Address1_Name: string;
		/** Mã ZIP hoặc mã bưu điện cho địa chỉ 1. */
		Address1_PostalCode: string;
		/** Số hòm thư cho địa chỉ 1. */
		Address1_PostOfficeBox: string;
		/** Phương thức giao hàng cho địa chỉ 1. */
		Address1_ShippingMethodCode: OptionSet.BusinessUnit.Address1_ShippingMethodCode;
		/** Bang hoặc tỉnh cho địa chỉ 1. */
		Address1_StateOrProvince: string;
		/** Số điện thoại đầu tiên liên kết với địa chỉ 1. */
		Address1_Telephone1: string;
		/** Số điện thoại thứ hai liên kết với địa chỉ 1. */
		Address1_Telephone2: string;
		/** Số điện thoại thứ ba liên kết với địa chỉ 1. */
		Address1_Telephone3: string;
		/** Vùng United Parcel Service (UPS) cho địa chỉ 1. */
		Address1_UPSZone: string;
		/** Phần bù UTC cho địa chỉ 1. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
		Address1_UTCOffset: number;
		/** Mã định danh duy nhất cho địa chỉ 2. */
		Address2_AddressId: string;
		/** Loại địa chỉ dành cho địa chỉ 2, chẳng hạn như địa chỉ thanh toán, giao hàng hoặc địa chỉ chính. */
		Address2_AddressTypeCode: OptionSet.BusinessUnit.Address2_AddressTypeCode;
		/** Tên thành phố cho địa chỉ 2. */
		Address2_City: string;
		/** Tên quốc gia/khu vực cho địa chỉ 2. */
		Address2_Country: string;
		/** Tên hạt cho địa chỉ 2. */
		Address2_County: string;
		/** Số fax cho địa chỉ 2. */
		Address2_Fax: string;
		/** Vĩ độ cho địa chỉ 2. */
		Address2_Latitude: number;
		/** Dòng đầu tiên để nhập thông tin địa chỉ 2. */
		Address2_Line1: string;
		/** Dòng thứ hai để nhập thông tin địa chỉ 2. */
		Address2_Line2: string;
		/** Dòng thứ ba để nhập thông tin địa chỉ 2. */
		Address2_Line3: string;
		/** Kinh độ cho địa chỉ 2. */
		Address2_Longitude: number;
		/** Tên để nhập cho địa chỉ 2. */
		Address2_Name: string;
		/** Mã ZIP hoặc mã bưu điện cho địa chỉ 2. */
		Address2_PostalCode: string;
		/** Số hòm thư cho địa chỉ 2. */
		Address2_PostOfficeBox: string;
		/** Phương thức giao hàng cho địa chỉ 2. */
		Address2_ShippingMethodCode: OptionSet.BusinessUnit.Address2_ShippingMethodCode;
		/** Bang hoặc tỉnh cho địa chỉ 2. */
		Address2_StateOrProvince: string;
		/** Số điện thoại đầu tiên liên kết với địa chỉ 2. */
		Address2_Telephone1: string;
		/** Số điện thoại thứ hai liên kết với địa chỉ 2. */
		Address2_Telephone2: string;
		/** Số điện thoại thứ ba liên kết với địa chỉ 2. */
		Address2_Telephone3: string;
		/** Vùng United Parcel Service (UPS) cho địa chỉ 2. */
		Address2_UPSZone: string;
		/** Phần bù UTC cho địa chỉ 2. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
		Address2_UTCOffset: number;
		/** Mã định danh duy nhất của đơn vị kinh doanh. */
		BusinessUnitId: string;
		/** Lịch tài khóa liên kết với đơn vị kinh doanh. */
		CalendarId: string;
		/** Tên trung tâm tính phí của đơn vị kinh doanh. */
		CostCenter: string;
		/** Mã định danh duy nhất của người dùng đã tạo đơn vị kinh doanh. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo đơn vị kinh doanh. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo businessunit. */
		readonly CreatedOnBehalfBy: string;
		/** Giới hạn tín dụng cho đơn vị kinh doanh. */
		CreditLimit: number;
		/** Mô tả về đơn vị kinh doanh. */
		Description: string;
		/** Lý do vô hiệu hóa đơn vị kinh doanh. */
		readonly DisabledReason: string;
		/** Tên của bộ phận trong đơn vị kinh doanh. */
		DivisionName: string;
		/** Địa chỉ email cho đơn vị kinh doanh. */
		EMailAddress: string;
		/** Tỷ giá của loại tiền liên kết với businessunit theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Tên thay thế có thể điền cho đơn vị kinh doanh. */
		FileAsName: string;
		/** URL trang web FTP cho đơn vị kinh doanh. */
		FtpSiteUrl: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mặt nạ kế thừa cho đơn vị kinh doanh. */
		InheritanceMask: number;
		/** Thông tin về trạng thái đơn vị kinh doanh được kích hoạt hay vô hiệu hóa. */
		IsDisabled: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi đơn vị kinh doanh lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi đơn vị kinh doanh lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi businessunit lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của đơn vị kinh doanh. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với đơn vị kinh doanh. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Mã định danh duy nhất của đơn vị kinh doanh mẹ. */
		ParentBusinessUnitId: string;
		/** Hình ảnh hoặc sơ đồ của đơn vị kinh doanh. */
		Picture: string;
		/** Sở chứng khoán có doanh nghiệp được niêm yết. */
		StockExchange: string;
		/** Ký hiệu chứng khoán của sở giao dịch chứng khoán cho đơn vị kinh doanh. */
		TickerSymbol: string;
		/** Mã định danh duy nhất của loại tiền liên kết với businessunit. */
		TransactionCurrencyId: string;
		readonly UserGroupId: string;
		/** Phần bù UTC cho đơn vị kinh doanh. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
		UTCOffset: number;
		/** Số phiên bản của đơn vị kinh doanh. */
		readonly VersionNumber: number;
		/** URL trang web cho đơn vị kinh doanh. */
		WebSiteUrl: string;
		/** Thông tin về trạng thái quy trình làm việc hoặc quá trình bán hàng có bị treo hay không. */
		WorkflowSuspended: boolean;
		readonly FormattedValue: {
			/** Mã định danh duy nhất cho địa chỉ 1. */
			readonly Address1_AddressId: string;
			/** Loại địa chỉ cho địa chỉ 1, chẳng hạn như địa chỉ lập hóa đơn, giao hàng hoặc địa chỉ chính. */
			readonly Address1_AddressTypeCode: string;
			/** Tên thành phố cho địa chỉ 1. */
			readonly Address1_City: string;
			/** Tên quốc gia/Khu vực cho địa chỉ 1. */
			readonly Address1_Country: string;
			/** Tên hạt cho địa chỉ 1. */
			readonly Address1_County: string;
			/** Số fax cho địa chỉ 1. */
			readonly Address1_Fax: string;
			/** Vĩ độ cho địa chỉ 1. */
			readonly Address1_Latitude: string;
			/** Dòng đầu tiên để nhập thông tin địa chỉ 1. */
			readonly Address1_Line1: string;
			/** Dòng thứ hai để nhập thông tin địa chỉ 1. */
			readonly Address1_Line2: string;
			/** Dòng thứ ba để nhập thông tin địa chỉ 1. */
			readonly Address1_Line3: string;
			/** Kinh độ cho địa chỉ 1. */
			readonly Address1_Longitude: string;
			/** Tên để nhập cho địa chỉ 1. */
			readonly Address1_Name: string;
			/** Mã ZIP hoặc mã bưu điện cho địa chỉ 1. */
			readonly Address1_PostalCode: string;
			/** Số hòm thư cho địa chỉ 1. */
			readonly Address1_PostOfficeBox: string;
			/** Phương thức giao hàng cho địa chỉ 1. */
			readonly Address1_ShippingMethodCode: string;
			/** Bang hoặc tỉnh cho địa chỉ 1. */
			readonly Address1_StateOrProvince: string;
			/** Số điện thoại đầu tiên liên kết với địa chỉ 1. */
			readonly Address1_Telephone1: string;
			/** Số điện thoại thứ hai liên kết với địa chỉ 1. */
			readonly Address1_Telephone2: string;
			/** Số điện thoại thứ ba liên kết với địa chỉ 1. */
			readonly Address1_Telephone3: string;
			/** Vùng United Parcel Service (UPS) cho địa chỉ 1. */
			readonly Address1_UPSZone: string;
			/** Phần bù UTC cho địa chỉ 1. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
			readonly Address1_UTCOffset: string;
			/** Mã định danh duy nhất cho địa chỉ 2. */
			readonly Address2_AddressId: string;
			/** Loại địa chỉ dành cho địa chỉ 2, chẳng hạn như địa chỉ thanh toán, giao hàng hoặc địa chỉ chính. */
			readonly Address2_AddressTypeCode: string;
			/** Tên thành phố cho địa chỉ 2. */
			readonly Address2_City: string;
			/** Tên quốc gia/khu vực cho địa chỉ 2. */
			readonly Address2_Country: string;
			/** Tên hạt cho địa chỉ 2. */
			readonly Address2_County: string;
			/** Số fax cho địa chỉ 2. */
			readonly Address2_Fax: string;
			/** Vĩ độ cho địa chỉ 2. */
			readonly Address2_Latitude: string;
			/** Dòng đầu tiên để nhập thông tin địa chỉ 2. */
			readonly Address2_Line1: string;
			/** Dòng thứ hai để nhập thông tin địa chỉ 2. */
			readonly Address2_Line2: string;
			/** Dòng thứ ba để nhập thông tin địa chỉ 2. */
			readonly Address2_Line3: string;
			/** Kinh độ cho địa chỉ 2. */
			readonly Address2_Longitude: string;
			/** Tên để nhập cho địa chỉ 2. */
			readonly Address2_Name: string;
			/** Mã ZIP hoặc mã bưu điện cho địa chỉ 2. */
			readonly Address2_PostalCode: string;
			/** Số hòm thư cho địa chỉ 2. */
			readonly Address2_PostOfficeBox: string;
			/** Phương thức giao hàng cho địa chỉ 2. */
			readonly Address2_ShippingMethodCode: string;
			/** Bang hoặc tỉnh cho địa chỉ 2. */
			readonly Address2_StateOrProvince: string;
			/** Số điện thoại đầu tiên liên kết với địa chỉ 2. */
			readonly Address2_Telephone1: string;
			/** Số điện thoại thứ hai liên kết với địa chỉ 2. */
			readonly Address2_Telephone2: string;
			/** Số điện thoại thứ ba liên kết với địa chỉ 2. */
			readonly Address2_Telephone3: string;
			/** Vùng United Parcel Service (UPS) cho địa chỉ 2. */
			readonly Address2_UPSZone: string;
			/** Phần bù UTC cho địa chỉ 2. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
			readonly Address2_UTCOffset: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh. */
			readonly BusinessUnitId: string;
			/** Lịch tài khóa liên kết với đơn vị kinh doanh. */
			readonly CalendarId: string;
			/** Tên trung tâm tính phí của đơn vị kinh doanh. */
			readonly CostCenter: string;
			/** Mã định danh duy nhất của người dùng đã tạo đơn vị kinh doanh. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo đơn vị kinh doanh. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo businessunit. */
			readonly CreatedOnBehalfBy: string;
			/** Giới hạn tín dụng cho đơn vị kinh doanh. */
			readonly CreditLimit: string;
			/** Mô tả về đơn vị kinh doanh. */
			readonly Description: string;
			/** Lý do vô hiệu hóa đơn vị kinh doanh. */
			readonly DisabledReason: string;
			/** Tên của bộ phận trong đơn vị kinh doanh. */
			readonly DivisionName: string;
			/** Địa chỉ email cho đơn vị kinh doanh. */
			readonly EMailAddress: string;
			/** Tỷ giá của loại tiền liên kết với businessunit theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Tên thay thế có thể điền cho đơn vị kinh doanh. */
			readonly FileAsName: string;
			/** URL trang web FTP cho đơn vị kinh doanh. */
			readonly FtpSiteUrl: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mặt nạ kế thừa cho đơn vị kinh doanh. */
			readonly InheritanceMask: string;
			/** Thông tin về trạng thái đơn vị kinh doanh được kích hoạt hay vô hiệu hóa. */
			readonly IsDisabled: string;
			/** Mã định danh duy nhất của người dùng sửa đổi đơn vị kinh doanh lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi đơn vị kinh doanh lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi businessunit lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của đơn vị kinh doanh. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với đơn vị kinh doanh. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh mẹ. */
			readonly ParentBusinessUnitId: string;
			/** Hình ảnh hoặc sơ đồ của đơn vị kinh doanh. */
			readonly Picture: string;
			/** Sở chứng khoán có doanh nghiệp được niêm yết. */
			readonly StockExchange: string;
			/** Ký hiệu chứng khoán của sở giao dịch chứng khoán cho đơn vị kinh doanh. */
			readonly TickerSymbol: string;
			/** Mã định danh duy nhất của loại tiền liên kết với businessunit. */
			readonly TransactionCurrencyId: string;
			readonly UserGroupId: string;
			/** Phần bù UTC cho đơn vị kinh doanh. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
			readonly UTCOffset: string;
			/** Số phiên bản của đơn vị kinh doanh. */
			readonly VersionNumber: string;
			/** URL trang web cho đơn vị kinh doanh. */
			readonly WebSiteUrl: string;
			/** Thông tin về trạng thái quy trình làm việc hoặc quá trình bán hàng có bị treo hay không. */
			readonly WorkflowSuspended: string;
		}
	}
}
declare namespace OptionSet {
	namespace BusinessUnit {
		enum Address1_AddressTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Gia_tri_mac_dinh
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