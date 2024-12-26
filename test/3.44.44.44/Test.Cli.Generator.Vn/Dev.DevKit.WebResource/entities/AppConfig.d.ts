//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppConfigApi {
		/**
		* DynamicsCrm.DevKit AppConfigApi
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
		/** ID cấu hình ứng dụng do hệ thống điền. */
		readonly AppConfigId: string;
		/** ID duy nhất của cấu hình ứng dụng do hệ thống điền. */
		AppConfigIdUnique: string;
		/** Sự khác biệt Cấu hình Ứng dụng được tính toán cho giải pháp được quản lý có chứa thực thể AppConfig. Chỉ sử dụng nội bộ. */
		AppConfigImportXml: string;
		/** Chọn mô-đun ứng dụng liên kết với cấu hình ứng dụng. */
		AppModuleId: string;
		/** Chỉ sử dụng nội bộ */
		readonly ComponentState: OptionSet.AppConfig.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ImportSequenceNumber: number;
		/** Phiên bản trong đó quy tắc tương tự được đưa vào. */
		IntroducedVersion: string;
		/** Được quản lý */
		readonly IsManaged: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất cho tổ chức. */
		readonly OrganizationId: string;
		/** Cho biết ngày và giờ di chuyển bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Cho biết cấu hình ứng dụng là Hiện hoạt hay Không hoạt động. Các bản ghi không hoạt động là bản ghi ở trạng thái chỉ đọc và không thể chỉnh sửa trừ khi được kích hoạt lại. */
		StateCode: OptionSet.AppConfig.StateCode;
		/** Chọn trạng thái. */
		StatusCode: OptionSet.AppConfig.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** ID cấu hình ứng dụng do hệ thống điền. */
			readonly AppConfigId: string;
			/** ID duy nhất của cấu hình ứng dụng do hệ thống điền. */
			readonly AppConfigIdUnique: string;
			/** Sự khác biệt Cấu hình Ứng dụng được tính toán cho giải pháp được quản lý có chứa thực thể AppConfig. Chỉ sử dụng nội bộ. */
			readonly AppConfigImportXml: string;
			/** Chọn mô-đun ứng dụng liên kết với cấu hình ứng dụng. */
			readonly AppModuleId: string;
			/** Chỉ sử dụng nội bộ */
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản trong đó quy tắc tương tự được đưa vào. */
			readonly IntroducedVersion: string;
			/** Được quản lý */
			readonly IsManaged: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất cho tổ chức. */
			readonly OrganizationId: string;
			/** Cho biết ngày và giờ di chuyển bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Cho biết cấu hình ứng dụng là Hiện hoạt hay Không hoạt động. Các bản ghi không hoạt động là bản ghi ở trạng thái chỉ đọc và không thể chỉnh sửa trừ khi được kích hoạt lại. */
			readonly StateCode: string;
			/** Chọn trạng thái. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppConfig {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
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