//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class HierarchyRuleApi {
		/**
		* DynamicsCrm.DevKit HierarchyRuleApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.HierarchyRule.ComponentState;
		/** Mô tả của quy tắc hệ thống cấp bậc. */
		Description: string;
		/** Mã định danh duy nhất của quy tắc hệ thống cập bậc loại bản ghi. */
		HierarchyRuleID: string;
		/** Mã định danh duy nhất của quy tắc hệ thống cấp bậc được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook */
		readonly HierarchyRuleIDUnique: string;
		/** Phiên bản trong đó quy tắc hệ thống cấp bậc được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Tên của quy tắc hệ thống cấp bậc. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức. */
		readonly OrganizationId: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Id Biểu mẫu của Thực thể Chính */
		PrimaryEntityFormID: string;
		/** Tên Logic của Thực thể Chính */
		PrimaryEntityLogicalName: string;
		readonly PublishedOn_UtcDateAndTime: Date;
		/** Id Biểu mẫu của Thực thể Liên quan. */
		readonly RelatedEntityFormId: string;
		/** Tên Logic cho thực thể có Liên quan. */
		readonly RelatedEntityLogicalName: string;
		/** Có hay không hiển thị bản ghi đã tắt. */
		ShowDisabled: boolean;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** cột để sắp xếp theo thực thể chính */
		readonly SortBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số phiên bản của quy tắc Hệ thống cấp bậc. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mô tả của quy tắc hệ thống cấp bậc. */
			readonly Description: string;
			/** Mã định danh duy nhất của quy tắc hệ thống cập bậc loại bản ghi. */
			readonly HierarchyRuleID: string;
			/** Mã định danh duy nhất của quy tắc hệ thống cấp bậc được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook */
			readonly HierarchyRuleIDUnique: string;
			/** Phiên bản trong đó quy tắc hệ thống cấp bậc được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Tên của quy tắc hệ thống cấp bậc. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức. */
			readonly OrganizationId: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Id Biểu mẫu của Thực thể Chính */
			readonly PrimaryEntityFormID: string;
			/** Tên Logic của Thực thể Chính */
			readonly PrimaryEntityLogicalName: string;
			readonly PublishedOn_UtcDateAndTime: string;
			/** Id Biểu mẫu của Thực thể Liên quan. */
			readonly RelatedEntityFormId: string;
			/** Tên Logic cho thực thể có Liên quan. */
			readonly RelatedEntityLogicalName: string;
			/** Có hay không hiển thị bản ghi đã tắt. */
			readonly ShowDisabled: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** cột để sắp xếp theo thực thể chính */
			readonly SortBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số phiên bản của quy tắc Hệ thống cấp bậc. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace HierarchyRule {
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