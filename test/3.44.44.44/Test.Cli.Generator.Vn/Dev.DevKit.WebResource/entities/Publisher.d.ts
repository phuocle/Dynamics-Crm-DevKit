//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab__70098AD5_4956_11DD_982E_00188B01DCE6_Sections {
			_70098AD6_4956_11DD_982E_00188B01DCE6: DevKit.Controls.Section;
			_EAF2EDB4_7C5E_DD11_940F_00155D8AC303: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
		}
		interface tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343_Sections {
			_6FE75F79_0CA8_4DBE_8C7B_6E68C17DE013: DevKit.Controls.Section;
			_CBF04024_5749_444C_BC51_CFAF839688BF: DevKit.Controls.Section;
		}
		interface tab_solutions_marketplace_Sections {
			marketplacesection: DevKit.Controls.Section;
		}
		interface tab__70098AD5_4956_11DD_982E_00188B01DCE6 extends DevKit.Controls.ITab {
			Section: tab__70098AD5_4956_11DD_982E_00188B01DCE6_Sections;
		}
		interface tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343 extends DevKit.Controls.ITab {
			Section: tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343_Sections;
		}
		interface tab_solutions_marketplace extends DevKit.Controls.ITab {
			Section: tab_solutions_marketplace_Sections;
		}
		interface Tabs {
			_70098AD5_4956_11DD_982E_00188B01DCE6: tab__70098AD5_4956_11DD_982E_00188B01DCE6;
			_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343: tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343;
			solutions_marketplace: tab_solutions_marketplace;
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
			/** Mã ZIP hoặc mã bưu điện cho địa chỉ 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Bang hoặc tỉnh cho địa chỉ 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** Số điện thoại đầu tiên liên kết với địa chỉ 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Tiền tố giá trị tùy chọn mặc định dùng cho các tùy chọn mới tạo dành cho giải pháp có liên kết với nhà phát hành này. */
			CustomizationOptionValuePrefix: DevKit.Controls.Integer;
			/** Tiền tố dùng cho thực thể, thuộc tính hoặc mối quan hệ của thực thể  mới của thực thể có liên kết với nhà phát hành này. */
			CustomizationPrefix: DevKit.Controls.String;
			/** Mô tả của giải pháp. */
			Description: DevKit.Controls.String;
			/** Địa chỉ email dành cho nhà phát hành. */
			EMailAddress: DevKit.Controls.String;
			/** Tên hiển thị của người dùng cho nhà phát hành này. */
			FriendlyName: DevKit.Controls.String;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** URL cho trang web hỗ trợ của nhà phát hành này. */
			SupportingWebsiteUrl: DevKit.Controls.String;
			/** Tên duy nhất của nhà phát hành này. */
			UniqueName: DevKit.Controls.String;
		}
		interface Navigation {
			publisher_appmodule: DevKit.Controls.NavigationItem,
			Publisher_PublisherAddress: DevKit.Controls.NavigationItem,
			publisher_solution: DevKit.Controls.NavigationItem
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
	class PublisherApi {
		/**
		* DynamicsCrm.DevKit PublisherApi
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
		Address1_AddressTypeCode: OptionSet.Publisher.Address1_AddressTypeCode;
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
		Address1_ShippingMethodCode: OptionSet.Publisher.Address1_ShippingMethodCode;
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
		Address2_AddressTypeCode: OptionSet.Publisher.Address2_AddressTypeCode;
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
		Address2_ShippingMethodCode: OptionSet.Publisher.Address2_ShippingMethodCode;
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
		/** Mã định danh duy nhất của người dùng đã tạo nhà phát hành. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo nhà phát hành. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo nhà phát hành. */
		readonly CreatedOnBehalfBy: string;
		/** Tiền tố giá trị tùy chọn mặc định dùng cho các tùy chọn mới tạo dành cho giải pháp có liên kết với nhà phát hành này. */
		CustomizationOptionValuePrefix: number;
		/** Tiền tố dùng cho thực thể, thuộc tính hoặc mối quan hệ của thực thể  mới của thực thể có liên kết với nhà phát hành này. */
		CustomizationPrefix: string;
		/** Mô tả của giải pháp. */
		Description: string;
		/** Địa chỉ email dành cho nhà phát hành. */
		EMailAddress: string;
		/** Hiển thị hình ảnh mặc định cho bản ghi. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Tên hiển thị của người dùng cho nhà phát hành này. */
		FriendlyName: string;
		/** Chỉ định khả năng tạo nhà phát hành trong quá trình cài đặt giải pháp được quản lý. */
		readonly IsReadonly: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi nhà phát hành lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi nhà phát hành lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa nhà phát hành. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với nhà phát hành. */
		readonly OrganizationId: string;
		/** Vùng bản địa mặc định của nhà phát hành trong Microsoft Pinpoint. */
		readonly PinpointPublisherDefaultLocale: string;
		/** Mã định danh của nhà phát hành trong Microsoft Pinpoint. */
		readonly PinpointPublisherId: number;
		/** Mã định danh duy nhất của nhà phát hành. */
		PublisherId: string;
		/** URL cho trang web hỗ trợ của nhà phát hành này. */
		SupportingWebsiteUrl: string;
		/** Tên duy nhất của nhà phát hành này. */
		UniqueName: string;
		readonly VersionNumber: number;
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
			/** Mã định danh duy nhất của người dùng đã tạo nhà phát hành. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo nhà phát hành. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo nhà phát hành. */
			readonly CreatedOnBehalfBy: string;
			/** Tiền tố giá trị tùy chọn mặc định dùng cho các tùy chọn mới tạo dành cho giải pháp có liên kết với nhà phát hành này. */
			readonly CustomizationOptionValuePrefix: string;
			/** Tiền tố dùng cho thực thể, thuộc tính hoặc mối quan hệ của thực thể  mới của thực thể có liên kết với nhà phát hành này. */
			readonly CustomizationPrefix: string;
			/** Mô tả của giải pháp. */
			readonly Description: string;
			/** Địa chỉ email dành cho nhà phát hành. */
			readonly EMailAddress: string;
			/** Hiển thị hình ảnh mặc định cho bản ghi. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Tên hiển thị của người dùng cho nhà phát hành này. */
			readonly FriendlyName: string;
			/** Chỉ định khả năng tạo nhà phát hành trong quá trình cài đặt giải pháp được quản lý. */
			readonly IsReadonly: string;
			/** Mã định danh duy nhất của người dùng sửa đổi nhà phát hành lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi nhà phát hành lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa nhà phát hành. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với nhà phát hành. */
			readonly OrganizationId: string;
			/** Vùng bản địa mặc định của nhà phát hành trong Microsoft Pinpoint. */
			readonly PinpointPublisherDefaultLocale: string;
			/** Mã định danh của nhà phát hành trong Microsoft Pinpoint. */
			readonly PinpointPublisherId: string;
			/** Mã định danh duy nhất của nhà phát hành. */
			readonly PublisherId: string;
			/** URL cho trang web hỗ trợ của nhà phát hành này. */
			readonly SupportingWebsiteUrl: string;
			/** Tên duy nhất của nhà phát hành này. */
			readonly UniqueName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Publisher {
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