//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PublisherAddressApi {
		/**
		* DynamicsCrm.DevKit PublisherAddressApi
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
		/** Xác định địa chỉ nhà phát hành hiện hành. */
		AddressNumber: number;
		/** Loại địa chỉ cho nhà phát hành, như địa chỉ thanh toán, giao hàng hoặc địa chỉ chính. */
		AddressTypeCode: OptionSet.PublisherAddress.AddressTypeCode;
		/** Tên thành phố trong địa chỉ của nhà phát hành. */
		City: string;
		/** Tên quốc gia/khu vực trong địa chỉ của nhà phát hành. */
		Country: string;
		/** Tên quốc gia trong địa chỉ của nhà phát hành. */
		County: string;
		/** Mã định danh duy nhất của người dùng đã tạo địa chỉ của nhà phát hành. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo địa chỉ của nhà phát hành. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo địa chỉ của nhà phát hành. */
		readonly CreatedOnBehalfBy: string;
		/** Số fax cho địa chỉ của nhà phát hành. */
		Fax: string;
		/** Điều khoản vận chuyển hàng hóa dành cho địa chỉ của nhà phát hành. */
		FreightTermsCode: OptionSet.PublisherAddress.FreightTermsCode;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Vĩ độ cho địa chỉ của nhà phát hành. */
		Latitude: number;
		/** Dòng đầu tiên để nhập thông tin địa chỉ. */
		Line1: string;
		/** Dòng thứ hai để nhập thông tin địa chỉ. */
		Line2: string;
		/** Dòng thứ ba để nhập thông tin địa chỉ. */
		Line3: string;
		/** Kinh độ cho địa chỉ của nhà phát hành. */
		Longitude: number;
		/** Mã định danh duy nhất của người dùng sửa đổi địa chỉ của nhà phát hành lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi địa chỉ của đối tác phá triển lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa địa chỉ của nhà phát hành. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên dùng để xác định địa chỉ của nhà phát hành. */
		Name: string;
		/** Mã định danh duy nhất của đối tượng mẹ có liên kết với địa chỉ của nhà phát hành. */
		ParentId: string;
		/** Mã ZIP hoặc mã bưu điện trong địa chỉ của nhà phát hành. */
		PostalCode: string;
		/** Số hộp thư bưu điện trong địa chỉ của nhà phát hành. */
		PostOfficeBox: string;
		/** Ten của người liên hệ chính tại địa chỉ của nhà phát hành. */
		PrimaryContactName: string;
		/** Mã định danh duy nhất của địa chỉ nhà phát hành. */
		PublisherAddressId: string;
		/** Phương thức giao hàng cho địa chỉ của nhà phát hành. */
		ShippingMethodCode: OptionSet.PublisherAddress.ShippingMethodCode;
		/** Bang hoặc tỉnh trong địa chỉ của nhà phát hành. */
		StateOrProvince: string;
		/** Số điện thoại đầu tiên cho địa chỉ của nhà phát hành. */
		Telephone1: string;
		/** Số điện thoại thứ hai cho địa chỉ của nhà phát hành. */
		Telephone2: string;
		/** Số điện thoại thứ ba cho địa chỉ của nhà phát hành. */
		Telephone3: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Vùng United Parcel Service (UPS) cho địa chỉ của nhà phát hành. */
		UPSZone: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Khoảng bù giờ UTC cho địa chỉ. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ phối hợp quốc tế chuẩn. */
		UTCOffset: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Xác định địa chỉ nhà phát hành hiện hành. */
			readonly AddressNumber: string;
			/** Loại địa chỉ cho nhà phát hành, như địa chỉ thanh toán, giao hàng hoặc địa chỉ chính. */
			readonly AddressTypeCode: string;
			/** Tên thành phố trong địa chỉ của nhà phát hành. */
			readonly City: string;
			/** Tên quốc gia/khu vực trong địa chỉ của nhà phát hành. */
			readonly Country: string;
			/** Tên quốc gia trong địa chỉ của nhà phát hành. */
			readonly County: string;
			/** Mã định danh duy nhất của người dùng đã tạo địa chỉ của nhà phát hành. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo địa chỉ của nhà phát hành. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo địa chỉ của nhà phát hành. */
			readonly CreatedOnBehalfBy: string;
			/** Số fax cho địa chỉ của nhà phát hành. */
			readonly Fax: string;
			/** Điều khoản vận chuyển hàng hóa dành cho địa chỉ của nhà phát hành. */
			readonly FreightTermsCode: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Vĩ độ cho địa chỉ của nhà phát hành. */
			readonly Latitude: string;
			/** Dòng đầu tiên để nhập thông tin địa chỉ. */
			readonly Line1: string;
			/** Dòng thứ hai để nhập thông tin địa chỉ. */
			readonly Line2: string;
			/** Dòng thứ ba để nhập thông tin địa chỉ. */
			readonly Line3: string;
			/** Kinh độ cho địa chỉ của nhà phát hành. */
			readonly Longitude: string;
			/** Mã định danh duy nhất của người dùng sửa đổi địa chỉ của nhà phát hành lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi địa chỉ của đối tác phá triển lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa địa chỉ của nhà phát hành. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên dùng để xác định địa chỉ của nhà phát hành. */
			readonly Name: string;
			/** Mã định danh duy nhất của đối tượng mẹ có liên kết với địa chỉ của nhà phát hành. */
			readonly ParentId: string;
			/** Mã ZIP hoặc mã bưu điện trong địa chỉ của nhà phát hành. */
			readonly PostalCode: string;
			/** Số hộp thư bưu điện trong địa chỉ của nhà phát hành. */
			readonly PostOfficeBox: string;
			/** Ten của người liên hệ chính tại địa chỉ của nhà phát hành. */
			readonly PrimaryContactName: string;
			/** Mã định danh duy nhất của địa chỉ nhà phát hành. */
			readonly PublisherAddressId: string;
			/** Phương thức giao hàng cho địa chỉ của nhà phát hành. */
			readonly ShippingMethodCode: string;
			/** Bang hoặc tỉnh trong địa chỉ của nhà phát hành. */
			readonly StateOrProvince: string;
			/** Số điện thoại đầu tiên cho địa chỉ của nhà phát hành. */
			readonly Telephone1: string;
			/** Số điện thoại thứ hai cho địa chỉ của nhà phát hành. */
			readonly Telephone2: string;
			/** Số điện thoại thứ ba cho địa chỉ của nhà phát hành. */
			readonly Telephone3: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Vùng United Parcel Service (UPS) cho địa chỉ của nhà phát hành. */
			readonly UPSZone: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Khoảng bù giờ UTC cho địa chỉ. Đây là khoảng chênh lệch giữa giờ địa phương và Giờ phối hợp quốc tế chuẩn. */
			readonly UTCOffset: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PublisherAddress {
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
		enum ParentIdTypeCode {
		}
		enum ShippingMethodCode {
			/** 1 */
			Mac_dinh
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