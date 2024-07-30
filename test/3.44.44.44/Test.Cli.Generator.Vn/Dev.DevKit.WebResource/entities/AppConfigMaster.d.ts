//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppConfigMasterApi {
		/**
		* DynamicsCrm.DevKit AppConfigMasterApi
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
		/** Mã định danh của phiên bản Cấu hình Ứng dụng do Hệ thống điền. */
		readonly AppConfigMasterId: string;
		/** Nhập loại dữ liệu thuộc tính Thiết đặt và Cấu hình Ứng dụng. */
		readonly ConfigType: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập giá trị mặc định của thuộc tính Thiết đặt và Cấu hình Ứng dụng. */
		readonly DefaultValue: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ImportSequenceNumber: number;
		/** Nhập Cấu hình Ứng dụng và Thiết đặt này có phải là Thiết đặt Điều hướng hay không. */
		readonly IsNavigationSetting: number;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên của thuộc tính Cấu hình Ứng dụng và Thiết đặt mà sẽ định danh tùy chỉnh này. */
		Name: string;
		/** Trường do hệ thống tính toán cho mã định danh Tổ chức. */
		readonly OrganizationId: string;
		/** Cho biết ngày và giờ di chuyển bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** ParentAppConfigMasterId */
		readonly ParentAppConfigMasterId: string;
		/** Trình xác nhận */
		readonly Validator: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh của phiên bản Cấu hình Ứng dụng do Hệ thống điền. */
			readonly AppConfigMasterId: string;
			/** Nhập loại dữ liệu thuộc tính Thiết đặt và Cấu hình Ứng dụng. */
			readonly ConfigType: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập giá trị mặc định của thuộc tính Thiết đặt và Cấu hình Ứng dụng. */
			readonly DefaultValue: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ImportSequenceNumber: string;
			/** Nhập Cấu hình Ứng dụng và Thiết đặt này có phải là Thiết đặt Điều hướng hay không. */
			readonly IsNavigationSetting: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên của thuộc tính Cấu hình Ứng dụng và Thiết đặt mà sẽ định danh tùy chỉnh này. */
			readonly Name: string;
			/** Trường do hệ thống tính toán cho mã định danh Tổ chức. */
			readonly OrganizationId: string;
			/** Cho biết ngày và giờ di chuyển bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** ParentAppConfigMasterId */
			readonly ParentAppConfigMasterId: string;
			/** Trình xác nhận */
			readonly Validator: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppConfigMaster {
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