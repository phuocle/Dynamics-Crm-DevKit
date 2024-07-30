//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ReplicationBacklogApi {
		/**
		* DynamicsCrm.DevKit ReplicationBacklogApi
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
		/** Dữ liệu bổ sung liên quan đến mục nhập tồn đọng sao chép. Chỉ sử dụng nội bộ. */
		readonly Data: string;
		/** Mã định danh duy nhất của mục nhập tồn đọng sao chép. */
		readonly ReplicationBacklogId: string;
		/** Loại của tồn đọng sao chép. */
		readonly ReplicationBacklogType: OptionSet.ReplicationBacklog.ReplicationBacklogType;
		/** Chỉ sử dụng nội bộ. */
		readonly TargetDatacenterId: string;
		/** Mã định danh duy nhất của đối tượng mục tiêu */
		readonly TargetObjectId: string;
		readonly FormattedValue: {
			/** Dữ liệu bổ sung liên quan đến mục nhập tồn đọng sao chép. Chỉ sử dụng nội bộ. */
			readonly Data: string;
			/** Mã định danh duy nhất của mục nhập tồn đọng sao chép. */
			readonly ReplicationBacklogId: string;
			/** Loại của tồn đọng sao chép. */
			readonly ReplicationBacklogType: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TargetDatacenterId: string;
			/** Mã định danh duy nhất của đối tượng mục tiêu */
			readonly TargetObjectId: string;
		}
	}
}
declare namespace OptionSet {
	namespace ReplicationBacklog {
		enum ReplicationBacklogType {
			/** 1 */
			Cap_nhat,
			/** 0 */
			Tao,
			/** 2 */
			Xoa
		}
		enum TargetObjectTypeCode {
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