//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RoleTemplatePrivilegesApi {
		/**
		* DynamicsCrm.DevKit RoleTemplatePrivilegesApi
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
		/** Thông tin về khả năng vai trò trong mẫu áp dụng cho người dùng, nhóm của người dùng hoặc đối tượng mà người dùng chia sẻ. */
		IsBasic: boolean;
		/** Thông tin về khả năng vai trò trong mẫu áp dụng cho bơn vị kinh doanh cấp dưới của bơn vị kinh doanh liên kết với người dùng. */
		IsDeep: boolean;
		/** Thông tin về khả năng vai trò trong mẫu áp dụng cho toàn bộ tổ chức. */
		IsGlobal: boolean;
		/** Thông tin về khả năng vai trò trong mẫu áp dụng cho bơn vị kinh doanh của người dùng. */
		IsLocal: boolean;
		/** Mã định danh duy nhất của quyền đã gán cho mẫu vai trò. */
		readonly PrivilegeId: string;
		/** Mã định danh duy nhất của mẫu vai trò đã liên kết với quyền vai trò. */
		readonly RoleTemplateId: string;
		/** Mã định danh duy nhất của quyền mẫu vai trò. */
		RoleTemplatePrivilegeId: string;
		readonly Upgrading: boolean;
		readonly FormattedValue: {
			/** Thông tin về khả năng vai trò trong mẫu áp dụng cho người dùng, nhóm của người dùng hoặc đối tượng mà người dùng chia sẻ. */
			readonly IsBasic: string;
			/** Thông tin về khả năng vai trò trong mẫu áp dụng cho bơn vị kinh doanh cấp dưới của bơn vị kinh doanh liên kết với người dùng. */
			readonly IsDeep: string;
			/** Thông tin về khả năng vai trò trong mẫu áp dụng cho toàn bộ tổ chức. */
			readonly IsGlobal: string;
			/** Thông tin về khả năng vai trò trong mẫu áp dụng cho bơn vị kinh doanh của người dùng. */
			readonly IsLocal: string;
			/** Mã định danh duy nhất của quyền đã gán cho mẫu vai trò. */
			readonly PrivilegeId: string;
			/** Mã định danh duy nhất của mẫu vai trò đã liên kết với quyền vai trò. */
			readonly RoleTemplateId: string;
			/** Mã định danh duy nhất của quyền mẫu vai trò. */
			readonly RoleTemplatePrivilegeId: string;
			readonly Upgrading: string;
		}
	}
}
declare namespace OptionSet {
	namespace RoleTemplatePrivileges {
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