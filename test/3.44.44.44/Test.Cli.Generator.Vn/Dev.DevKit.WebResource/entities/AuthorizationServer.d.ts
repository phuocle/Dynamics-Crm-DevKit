//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AuthorizationServerApi {
		/**
		* DynamicsCrm.DevKit AuthorizationServerApi
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
		AuthorizationServerId: string;
		/**  Loại Máy chủ Ủy quyền  */
		AuthorizationServerType: OptionSet.AuthorizationServer.AuthorizationServerType;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Chứa siêu dữ liệu cho của máy chủ ủy quyền. */
		Metadata: string;
		/** Cho biết ngày và giờ làm mới siêu dữ liệu từ máy chủ ủy quyền. */
		readonly MetadataRefreshedOn_UtcDateAndTime: Date;
		/** Chứa URL cho siêu dữ liệu. */
		MetadataUrl: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên của máy chủ ủy quyền. */
		Name: string;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		/** Chứa ID người phát hành của máy chủ ủy quyền. */
		PrincipalId: string;
		/** Cho biết miền gốc. */
		Realm: string;
		/** Cho biết máy chủ ủy quyền hiện hoạt hay không hoạt động. */
		readonly StateCode: OptionSet.AuthorizationServer.StateCode;
		/** Chọn trạng thái của máy chủ ủy quyền. */
		StatusCode: OptionSet.AuthorizationServer.StatusCode;
		/** Cho biết ID đối tượng thuê. */
		TenantId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của máy chủ ủy quyền. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly AuthorizationServerId: string;
			/**  Loại Máy chủ Ủy quyền  */
			readonly AuthorizationServerType: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Chứa siêu dữ liệu cho của máy chủ ủy quyền. */
			readonly Metadata: string;
			/** Cho biết ngày và giờ làm mới siêu dữ liệu từ máy chủ ủy quyền. */
			readonly MetadataRefreshedOn_UtcDateAndTime: string;
			/** Chứa URL cho siêu dữ liệu. */
			readonly MetadataUrl: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên của máy chủ ủy quyền. */
			readonly Name: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			/** Chứa ID người phát hành của máy chủ ủy quyền. */
			readonly PrincipalId: string;
			/** Cho biết miền gốc. */
			readonly Realm: string;
			/** Cho biết máy chủ ủy quyền hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của máy chủ ủy quyền. */
			readonly StatusCode: string;
			/** Cho biết ID đối tượng thuê. */
			readonly TenantId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của máy chủ ủy quyền. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AuthorizationServer {
		enum AuthorizationServerType {
			/** 0 */
			Dich_vu_Kiem_soat_Truy_cap,
			/** 1 */
			Evolved_STS
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 1 */
			Da_bat,
			/** 2 */
			Da_tat
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