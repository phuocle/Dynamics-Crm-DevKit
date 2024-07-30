//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RolePrivilegesApi {
		/**
		* DynamicsCrm.DevKit RolePrivilegesApi
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
		/** Cho biết bạn có thể xóa đặc quyền hay không. */
		CanBeDeleted: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.RolePrivileges.ComponentState;
		readonly IsManaged: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Thuộc tính do hệ thống tạo ra, lưu trữ quyền liên kết đến vai trò. */
		PrivilegeDepthMask: number;
		/** Mã định danh duy nhất của quyền đã liên kết với vai trò. */
		readonly PrivilegeId: string;
		/** Unique identifier for Record Filter associated with role privilege. */
		RecordFilterId: string;
		/** Mã định danh duy nhất của vai trò đã liên kết với quyền vai trò. */
		readonly RoleId: string;
		/** Mã định danh duy nhất của quyền vai trò. */
		RolePrivilegeId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly RolePrivilegeIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Cho biết bạn có thể xóa đặc quyền hay không. */
			readonly CanBeDeleted: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			readonly IsManaged: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Thuộc tính do hệ thống tạo ra, lưu trữ quyền liên kết đến vai trò. */
			readonly PrivilegeDepthMask: string;
			/** Mã định danh duy nhất của quyền đã liên kết với vai trò. */
			readonly PrivilegeId: string;
			/** Unique identifier for Record Filter associated with role privilege. */
			readonly RecordFilterId: string;
			/** Mã định danh duy nhất của vai trò đã liên kết với quyền vai trò. */
			readonly RoleId: string;
			/** Mã định danh duy nhất của quyền vai trò. */
			readonly RolePrivilegeId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RolePrivilegeIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RolePrivileges {
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