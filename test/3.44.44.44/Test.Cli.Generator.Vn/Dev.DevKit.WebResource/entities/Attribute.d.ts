//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AttributeApi {
		/**
		* DynamicsCrm.DevKit AttributeApi
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
		/** Mã định danh duy nhất của thuộc tính. */
		AttributeId: string;
		/** Thuộc tính của */
		readonly AttributeOf: string;
		/** ID loại thuộc tính */
		readonly AttributeTypeId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.Attribute.ComponentState;
		/** Tên bên ngoài của thuộc tính này. */
		ExternalName: string;
		/** Tên logic của thuộc tính này. */
		LogicalName: string;
		/** Tên logic thuộc tính được quản lý của thuộc tính này. */
		ManagedPropertyLogicalName: string;
		/** Tên thuộc tính cấp độ mẹ của thuộc tính được quản lý của thuộc tính này. */
		ManagedPropertyParentAttributeName: string;
		/** Tên của Thuộc tính này. */
		Name: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Tên thực của thuộc tính này. */
		PhysicalName: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Tên cột trong bảng của thuộc tính này. */
		TableColumnName: string;
		/** Hợp lệ cho API Đọc */
		readonly ValidForReadAPI: boolean;
		/** Số phiên bản của thuộc tính này. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của thuộc tính. */
			readonly AttributeId: string;
			/** Thuộc tính của */
			readonly AttributeOf: string;
			/** ID loại thuộc tính */
			readonly AttributeTypeId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Tên bên ngoài của thuộc tính này. */
			readonly ExternalName: string;
			/** Tên logic của thuộc tính này. */
			readonly LogicalName: string;
			/** Tên logic thuộc tính được quản lý của thuộc tính này. */
			readonly ManagedPropertyLogicalName: string;
			/** Tên thuộc tính cấp độ mẹ của thuộc tính được quản lý của thuộc tính này. */
			readonly ManagedPropertyParentAttributeName: string;
			/** Tên của Thuộc tính này. */
			readonly Name: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Tên thực của thuộc tính này. */
			readonly PhysicalName: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Tên cột trong bảng của thuộc tính này. */
			readonly TableColumnName: string;
			/** Hợp lệ cho API Đọc */
			readonly ValidForReadAPI: string;
			/** Số phiên bản của thuộc tính này. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Attribute {
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