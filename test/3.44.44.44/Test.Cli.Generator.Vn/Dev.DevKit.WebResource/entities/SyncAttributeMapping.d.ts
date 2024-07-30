//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SyncAttributeMappingApi {
		/**
		* DynamicsCrm.DevKit SyncAttributeMappingApi
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
		/** Hướng chấp nhận đồng bộ */
		AllowedSyncDirection: number;
		/** Tên thuộc tính CRM. */
		AttributeCRMName: string;
		/** Tên thuộc tính Exchange. */
		AttributeExchangeName: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SyncAttributeMapping.ComponentState;
		/** Thuộc tính đã tính. */
		ComputedProperties: string;
		/** Hướng đồng bộ định */
		DefaultSyncDirection: OptionSet.SyncAttributeMapping.DefaultSyncDirection;
		/** Chỉ định khả năng ánh xạ là thuộc tính đã tính */
		readonly IsComputed: boolean;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Tên Thuộc tính. */
		MappingName: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Ánh xạ thuộc tính đồng bộ mẹ mà ánh xạ này thuộc về */
		ParentSyncAttributeMappingId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của Ánh xạ thuộc tính đồng bộ. */
		SyncAttributeMappingId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SyncAttributeMappingIdUnique: string;
		/** Mã định danh duy nhất cho cấu hình của ánh xạ. */
		SyncAttributeMappingProfileId: string;
		/** Hướng đồng bộ */
		SyncDirection: OptionSet.SyncAttributeMapping.SyncDirection;
		readonly FormattedValue: {
			/** Hướng chấp nhận đồng bộ */
			readonly AllowedSyncDirection: string;
			/** Tên thuộc tính CRM. */
			readonly AttributeCRMName: string;
			/** Tên thuộc tính Exchange. */
			readonly AttributeExchangeName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Thuộc tính đã tính. */
			readonly ComputedProperties: string;
			/** Hướng đồng bộ định */
			readonly DefaultSyncDirection: string;
			/** Chỉ định khả năng ánh xạ là thuộc tính đã tính */
			readonly IsComputed: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Tên Thuộc tính. */
			readonly MappingName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Ánh xạ thuộc tính đồng bộ mẹ mà ánh xạ này thuộc về */
			readonly ParentSyncAttributeMappingId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của Ánh xạ thuộc tính đồng bộ. */
			readonly SyncAttributeMappingId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SyncAttributeMappingIdUnique: string;
			/** Mã định danh duy nhất cho cấu hình của ánh xạ. */
			readonly SyncAttributeMappingProfileId: string;
			/** Hướng đồng bộ */
			readonly SyncDirection: string;
		}
	}
}
declare namespace OptionSet {
	namespace SyncAttributeMapping {
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
		enum DefaultSyncDirection {
			/** 3 */
			Hai_chieu,
			/** 0 */
			Khong,
			/** 2 */
			ToCRM,
			/** 1 */
			ToExchange
		}
		enum EntityTypeCode {
		}
		enum SyncDirection {
			/** 3 */
			Hai_chieu,
			/** 0 */
			Khong,
			/** 2 */
			ToCRM,
			/** 1 */
			ToExchange
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