//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			additional_information: DevKit.Controls.Section;
			customer_address_information: DevKit.Controls.Section;
			phone_numbers: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn loại địa chỉ, chẳng hạn như chính hoặc thanh toán. */
			AddressTypeCode: DevKit.Controls.OptionSet;
			/** Nhập thành phố cho địa chỉ của khách hàng nhằm giúp xác định vị trí. */
			City: DevKit.Controls.String;
			/** Nhập quốc gia hoặc khu vực cho địa chỉ của khách hàng. */
			Country: DevKit.Controls.String;
			/** Nhập số fax liên kết với địa chỉ của khách hàng. */
			Fax: DevKit.Controls.String;
			/** Chọn điều khoản vận chuyển hàng hóa để đảm bảo phí giao hàng được xử lý chính xác. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Nhập dòng đầu tiên cho địa chỉ của khách hàng nhằm giúp xác định vị trí. */
			Line1: DevKit.Controls.String;
			/** Nhập dòng thứ hai cho địa chỉ của khách hàng. */
			Line2: DevKit.Controls.String;
			/** Nhập dòng thứ ba cho địa chỉ của khách hàng. */
			Line3: DevKit.Controls.String;
			/** Nhập tên mô tả cho địa chỉ của khách hàng, chẳng hạn như Trụ sở chính của Tập đoàn. */
			Name: DevKit.Controls.String;
			/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ. */
			PostalCode: DevKit.Controls.String;
			/** Nhập tên của người liên hệ chính cho địa chỉ của khách hàng. */
			PrimaryContactName: DevKit.Controls.String;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Nhập bang hoặc tỉnh cho địa chỉ của khách hàng. */
			StateOrProvince: DevKit.Controls.String;
			/** Nhập số điện thoại chính cho địa chỉ của khách hàng. */
			Telephone1: DevKit.Controls.String;
			/** Nhập số điện thoại thứ hai cho địa chỉ của khách hàng. */
			Telephone2: DevKit.Controls.String;
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
	class CustomerAddressApi {
		/**
		* DynamicsCrm.DevKit CustomerAddressApi
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
		/** Cho biết số địa chỉ, nhằm biểu thị địa chỉ là chính, phụ hay địa chỉ khác cho khách hàng. */
		AddressNumber: number;
		/** Chọn loại địa chỉ, chẳng hạn như chính hoặc thanh toán. */
		AddressTypeCode: OptionSet.CustomerAddress.AddressTypeCode;
		/** Nhập thành phố cho địa chỉ của khách hàng nhằm giúp xác định vị trí. */
		City: string;
		/** Cho biết địa chỉ đầy đủ. */
		readonly Composite: string;
		/** Nhập quốc gia hoặc khu vực cho địa chỉ của khách hàng. */
		Country: string;
		/** Nhập hạt cho địa chỉ của khách hàng. */
		County: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của địa chỉ khách hàng. */
		CustomerAddressId: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Nhập số fax liên kết với địa chỉ của khách hàng. */
		Fax: string;
		/** Chọn điều khoản vận chuyển hàng hóa để đảm bảo phí giao hàng được xử lý chính xác. */
		FreightTermsCode: OptionSet.CustomerAddress.FreightTermsCode;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Nhập giá trị vĩ độ cho địa chỉ của khách hàng để sử dụng trong ánh xạ và các ứng dụng khác. */
		Latitude: number;
		/** Nhập dòng đầu tiên cho địa chỉ của khách hàng nhằm giúp xác định vị trí. */
		Line1: string;
		/** Nhập dòng thứ hai cho địa chỉ của khách hàng. */
		Line2: string;
		/** Nhập dòng thứ ba cho địa chỉ của khách hàng. */
		Line3: string;
		/** Nhập giá trị kinh độ cho địa chỉ của khách hàng để sử dụng trong ánh xạ và các ứng dụng khác. */
		Longitude: number;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả cho địa chỉ của khách hàng, chẳng hạn như Trụ sở chính của Tập đoàn. */
		Name: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu địa chỉ khách hàng. */
		readonly OwningUser: string;
		/** Chọn địa chỉ của khách hàng. */
		parentid_account: string;
		/** Chọn địa chỉ của khách hàng. */
		parentid_contact: string;
		/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ. */
		PostalCode: string;
		/** Nhập số hòm thư cho địa chỉ của khách hàng. */
		PostOfficeBox: string;
		/** Nhập tên của người liên hệ chính cho địa chỉ của khách hàng. */
		PrimaryContactName: string;
		/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
		ShippingMethodCode: OptionSet.CustomerAddress.ShippingMethodCode;
		/** Nhập bang hoặc tỉnh cho địa chỉ của khách hàng. */
		StateOrProvince: string;
		/** Nhập số điện thoại chính cho địa chỉ của khách hàng. */
		Telephone1: string;
		/** Nhập số điện thoại thứ hai cho địa chỉ của khách hàng. */
		Telephone2: string;
		/** Nhập số điện thoại thứ ba cho địa chỉ của khách hàng. */
		Telephone3: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Nhập vùng UPS cho địa chỉ của khách hàng để đảm bảo phí vận chuyển được tính chính xác và hàng được giao kịp thời nếu giao bằng UPS. */
		UPSZone: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Chọn múi giờ cho địa chỉ. */
		UTCOffset: number;
		/** Số phiên bản của địa chỉ khách hàng. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Cho biết số địa chỉ, nhằm biểu thị địa chỉ là chính, phụ hay địa chỉ khác cho khách hàng. */
			readonly AddressNumber: string;
			/** Chọn loại địa chỉ, chẳng hạn như chính hoặc thanh toán. */
			readonly AddressTypeCode: string;
			/** Nhập thành phố cho địa chỉ của khách hàng nhằm giúp xác định vị trí. */
			readonly City: string;
			/** Cho biết địa chỉ đầy đủ. */
			readonly Composite: string;
			/** Nhập quốc gia hoặc khu vực cho địa chỉ của khách hàng. */
			readonly Country: string;
			/** Nhập hạt cho địa chỉ của khách hàng. */
			readonly County: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của địa chỉ khách hàng. */
			readonly CustomerAddressId: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Nhập số fax liên kết với địa chỉ của khách hàng. */
			readonly Fax: string;
			/** Chọn điều khoản vận chuyển hàng hóa để đảm bảo phí giao hàng được xử lý chính xác. */
			readonly FreightTermsCode: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Nhập giá trị vĩ độ cho địa chỉ của khách hàng để sử dụng trong ánh xạ và các ứng dụng khác. */
			readonly Latitude: string;
			/** Nhập dòng đầu tiên cho địa chỉ của khách hàng nhằm giúp xác định vị trí. */
			readonly Line1: string;
			/** Nhập dòng thứ hai cho địa chỉ của khách hàng. */
			readonly Line2: string;
			/** Nhập dòng thứ ba cho địa chỉ của khách hàng. */
			readonly Line3: string;
			/** Nhập giá trị kinh độ cho địa chỉ của khách hàng để sử dụng trong ánh xạ và các ứng dụng khác. */
			readonly Longitude: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả cho địa chỉ của khách hàng, chẳng hạn như Trụ sở chính của Tập đoàn. */
			readonly Name: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu địa chỉ khách hàng. */
			readonly OwningUser: string;
			/** Chọn địa chỉ của khách hàng. */
			readonly parentid_account: string;
			/** Chọn địa chỉ của khách hàng. */
			readonly parentid_contact: string;
			/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ. */
			readonly PostalCode: string;
			/** Nhập số hòm thư cho địa chỉ của khách hàng. */
			readonly PostOfficeBox: string;
			/** Nhập tên của người liên hệ chính cho địa chỉ của khách hàng. */
			readonly PrimaryContactName: string;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			readonly ShippingMethodCode: string;
			/** Nhập bang hoặc tỉnh cho địa chỉ của khách hàng. */
			readonly StateOrProvince: string;
			/** Nhập số điện thoại chính cho địa chỉ của khách hàng. */
			readonly Telephone1: string;
			/** Nhập số điện thoại thứ hai cho địa chỉ của khách hàng. */
			readonly Telephone2: string;
			/** Nhập số điện thoại thứ ba cho địa chỉ của khách hàng. */
			readonly Telephone3: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Nhập vùng UPS cho địa chỉ của khách hàng để đảm bảo phí vận chuyển được tính chính xác và hàng được giao kịp thời nếu giao bằng UPS. */
			readonly UPSZone: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Chọn múi giờ cho địa chỉ. */
			readonly UTCOffset: string;
			/** Số phiên bản của địa chỉ khách hàng. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomerAddress {
		enum AddressTypeCode {
			/** 3 */
			Chinh,
			/** 4 */
			Khac,
			/** 2 */
			Nhan_hang,
			/** 1 */
			Nhan_hoa_don
		}
		enum FreightTermsCode {
			/** 1 */
			Cang_giao_hang,
			/** 2 */
			Mien_phi
		}
		enum ObjectTypeCode {
			/** 2 */
			Nguoi_lien_he,
			/** 1 */
			Tai_khoan
		}
		enum ParentIdTypeCode {
		}
		enum ShippingMethodCode {
			/** 7 */
			Ban_le_dat_hang_truoc,
			/** 1 */
			Chuyen_cho_bang_may_bay,
			/** 6 */
			Day_tai,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 5 */
			Thu_gui_buu_dien,
			/** 4 */
			UPS
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