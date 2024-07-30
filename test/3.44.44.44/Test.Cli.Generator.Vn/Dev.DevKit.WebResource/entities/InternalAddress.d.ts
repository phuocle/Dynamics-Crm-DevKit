//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class InternalAddressApi {
		/**
		* DynamicsCrm.DevKit InternalAddressApi
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
		/** Thông tin về địa chỉ nội bộ có thể áp dụng. */
		AddressNumber: number;
		/** Loại địa chỉ của địa chỉ nội bộ. */
		AddressTypeCode: OptionSet.InternalAddress.AddressTypeCode;
		readonly BusinessUnitId: string;
		/** Tên thành phố trong địa chỉ nội bộ. */
		City: string;
		/** Cho biết địa chỉ đầy đủ. */
		readonly Composite: string;
		/** Tên quốc gia/khu vực trong địa chỉ nội bộ. */
		Country: string;
		/** Tên quốc gia trong địa chỉ nội bộ. */
		County: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi địa chỉ nội bộ. */
		readonly CreatedBy: string;
		/** Ngày và giờ đã tạo địa chỉ nội bộ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo địa chỉ nội bộ. */
		readonly CreatedOnBehalfBy: string;
		/** Số fax cho địa chỉ nội bộ. */
		Fax: string;
		/** Mã định danh duy nhất của địa chỉ nội bộ. */
		InternalAddressId: string;
		/** Vĩ độ của địa chỉ nội bộ. */
		Latitude: number;
		/** Dòng đầu tiên để nhập thông tin địa chỉ. */
		Line1: string;
		/** Dòng thứ hai để nhập thông tin địa chỉ. */
		Line2: string;
		/** Dòng thứ ba để nhập thông tin địa chỉ. */
		Line3: string;
		/** Kinh độ của địa chỉ nội bộ. */
		Longitude: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối địa chỉ nội bộ. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi lần cuối bản ghi địa chỉ nội bộ. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối internaladdress. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên dùng để xác định địa chỉ nội bộ. */
		Name: string;
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của đối tượng mẹ có địa chỉ nội bộ được liên kết. */
		ParentId: string;
		/** Mã ZIP hoặc mã bưu điện trong địa chỉ nội bộ. */
		PostalCode: string;
		/** Số hòm thư trong địa chỉ nội bộ. */
		PostOfficeBox: string;
		/** Phương thức giao hàng cho địa chỉ nội bộ. */
		ShippingMethodCode: OptionSet.InternalAddress.ShippingMethodCode;
		/** Bang hoặc tỉnh trong địa chỉ nội bộ. */
		StateOrProvince: string;
		/** Số điện thoại đầu tiên cho địa chỉ nội bộ. */
		Telephone1: string;
		/** Số điện thoại thứ hai cho địa chỉ nội bộ. */
		Telephone2: string;
		/** Số điện thoại thứ ba cho địa chỉ nội bộ. */
		Telephone3: string;
		/** Vùng United Parcel Service (UPS) cho địa chỉ nội bộ. */
		UPSZone: string;
		/** Phần bù UTC cho địa chỉ nội bộ. Chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
		UTCOffset: number;
		/** Số phiên bản của địa chỉ nội bộ. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Thông tin về địa chỉ nội bộ có thể áp dụng. */
			readonly AddressNumber: string;
			/** Loại địa chỉ của địa chỉ nội bộ. */
			readonly AddressTypeCode: string;
			readonly BusinessUnitId: string;
			/** Tên thành phố trong địa chỉ nội bộ. */
			readonly City: string;
			/** Cho biết địa chỉ đầy đủ. */
			readonly Composite: string;
			/** Tên quốc gia/khu vực trong địa chỉ nội bộ. */
			readonly Country: string;
			/** Tên quốc gia trong địa chỉ nội bộ. */
			readonly County: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi địa chỉ nội bộ. */
			readonly CreatedBy: string;
			/** Ngày và giờ đã tạo địa chỉ nội bộ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo địa chỉ nội bộ. */
			readonly CreatedOnBehalfBy: string;
			/** Số fax cho địa chỉ nội bộ. */
			readonly Fax: string;
			/** Mã định danh duy nhất của địa chỉ nội bộ. */
			readonly InternalAddressId: string;
			/** Vĩ độ của địa chỉ nội bộ. */
			readonly Latitude: string;
			/** Dòng đầu tiên để nhập thông tin địa chỉ. */
			readonly Line1: string;
			/** Dòng thứ hai để nhập thông tin địa chỉ. */
			readonly Line2: string;
			/** Dòng thứ ba để nhập thông tin địa chỉ. */
			readonly Line3: string;
			/** Kinh độ của địa chỉ nội bộ. */
			readonly Longitude: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối địa chỉ nội bộ. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi lần cuối bản ghi địa chỉ nội bộ. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối internaladdress. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên dùng để xác định địa chỉ nội bộ. */
			readonly Name: string;
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của đối tượng mẹ có địa chỉ nội bộ được liên kết. */
			readonly ParentId: string;
			/** Mã ZIP hoặc mã bưu điện trong địa chỉ nội bộ. */
			readonly PostalCode: string;
			/** Số hòm thư trong địa chỉ nội bộ. */
			readonly PostOfficeBox: string;
			/** Phương thức giao hàng cho địa chỉ nội bộ. */
			readonly ShippingMethodCode: string;
			/** Bang hoặc tỉnh trong địa chỉ nội bộ. */
			readonly StateOrProvince: string;
			/** Số điện thoại đầu tiên cho địa chỉ nội bộ. */
			readonly Telephone1: string;
			/** Số điện thoại thứ hai cho địa chỉ nội bộ. */
			readonly Telephone2: string;
			/** Số điện thoại thứ ba cho địa chỉ nội bộ. */
			readonly Telephone3: string;
			/** Vùng United Parcel Service (UPS) cho địa chỉ nội bộ. */
			readonly UPSZone: string;
			/** Phần bù UTC cho địa chỉ nội bộ. Chênh lệch giữa giờ địa phương và Giờ Quốc tế Phối hợp chuẩn. */
			readonly UTCOffset: string;
			/** Số phiên bản của địa chỉ nội bộ. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace InternalAddress {
		enum AddressTypeCode {
		}
		enum ObjectTypeCode {
		}
		enum ShippingMethodCode {
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