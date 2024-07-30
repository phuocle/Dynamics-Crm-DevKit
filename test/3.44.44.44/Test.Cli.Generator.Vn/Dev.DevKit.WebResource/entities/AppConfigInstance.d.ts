//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppConfigInstanceApi {
		/**
		* DynamicsCrm.DevKit AppConfigInstanceApi
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
		/** Mã định danh duy nhất của Cấu hình Ứng dụng do Hệ thống tính toán. */
		AppConfigId: string;
		/** Nhập mã định danh duy nhất Cấu hình Ứng dụng của thực thể AppConfig có chứa tùy chỉnh này. */
		AppConfigIdUnique: string;
		/** Mã định danh của phiên bản Cấu hình Ứng dụng do Hệ thống điền. */
		readonly AppConfigInstanceId: string;
		/** Mã định danh duy nhất của Phiên bản Cấu hình Ứng dụng do Hệ thống điền. */
		AppConfigInstanceIdUnique: string;
		/** Mã định danh Tổng thể của Cấu hình Ứng dụng do Hệ thống tính toán. */
		AppConfigMasterId: string;
		/** Trạng thái Đã phát hành hay Hủy phát hành của Phiên bản Cấu hình Ứng dụng do Hệ thống điền. */
		readonly ComponentState: OptionSet.AppConfigInstance.ComponentState;
		/** ComponentType */
		ComponentType: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ImportSequenceNumber: number;
		/** Hiển thị phiên bản (version) đã đưa Phiên bản Cấu hình Ứng dụng vào. */
		IntroducedVersion: string;
		/** Được quản lý */
		readonly IsManaged: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** ObjectId */
		ObjectId: string;
		/** Trường do hệ thống tính toán cho mã định danh Tổ chức. */
		readonly OrganizationId: string;
		/** Cho biết ngày và giờ di chuyển bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** Hiển thị thời gian ghi đè lần cuối cho Phiên bản Cấu hình Ứng dụng. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Đặt mã định danh giải pháp cho giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Đặt mã định danh giải pháp hỗ trợ cho giải pháp được liên kết. */
		readonly SupportingSolutionId: string;
		/** Nhập một giá trị cho thuộc tính tùy chỉnh hợp lệ theo như XML trình xác nhận đã định trong bản ghi tổng thể cấu hình ứng dụng. */
		Value: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của Cấu hình Ứng dụng do Hệ thống tính toán. */
			readonly AppConfigId: string;
			/** Nhập mã định danh duy nhất Cấu hình Ứng dụng của thực thể AppConfig có chứa tùy chỉnh này. */
			readonly AppConfigIdUnique: string;
			/** Mã định danh của phiên bản Cấu hình Ứng dụng do Hệ thống điền. */
			readonly AppConfigInstanceId: string;
			/** Mã định danh duy nhất của Phiên bản Cấu hình Ứng dụng do Hệ thống điền. */
			readonly AppConfigInstanceIdUnique: string;
			/** Mã định danh Tổng thể của Cấu hình Ứng dụng do Hệ thống tính toán. */
			readonly AppConfigMasterId: string;
			/** Trạng thái Đã phát hành hay Hủy phát hành của Phiên bản Cấu hình Ứng dụng do Hệ thống điền. */
			readonly ComponentState: string;
			/** ComponentType */
			readonly ComponentType: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ImportSequenceNumber: string;
			/** Hiển thị phiên bản (version) đã đưa Phiên bản Cấu hình Ứng dụng vào. */
			readonly IntroducedVersion: string;
			/** Được quản lý */
			readonly IsManaged: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** ObjectId */
			readonly ObjectId: string;
			/** Trường do hệ thống tính toán cho mã định danh Tổ chức. */
			readonly OrganizationId: string;
			/** Cho biết ngày và giờ di chuyển bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Hiển thị thời gian ghi đè lần cuối cho Phiên bản Cấu hình Ứng dụng. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Đặt mã định danh giải pháp cho giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Đặt mã định danh giải pháp hỗ trợ cho giải pháp được liên kết. */
			readonly SupportingSolutionId: string;
			/** Nhập một giá trị cho thuộc tính tùy chỉnh hợp lệ theo như XML trình xác nhận đã định trong bản ghi tổng thể cấu hình ứng dụng. */
			readonly Value: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppConfigInstance {
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