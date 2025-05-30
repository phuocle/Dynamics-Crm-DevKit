﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SyncAttributeMappingProfileApi {
		/**
		* DynamicsCrm.DevKit SyncAttributeMappingProfileApi
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
		readonly ComponentState: OptionSet.SyncAttributeMappingProfile.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo cấu hình. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo cấu hình. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo vai trò. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả Cấu hình */
		Description: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi lần cuối cấu hình. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi lần cuối cấu hình. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối cấu hình. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên cấu hình. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức được liên kết. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của cấu hình. */
		SyncAttributeMappingProfileId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SyncAttributeMappingProfileIdUnique: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo cấu hình. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo cấu hình. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo vai trò. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả Cấu hình */
			readonly Description: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi lần cuối cấu hình. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi lần cuối cấu hình. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối cấu hình. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên cấu hình. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức được liên kết. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của cấu hình. */
			readonly SyncAttributeMappingProfileId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SyncAttributeMappingProfileIdUnique: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SyncAttributeMappingProfile {
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