//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RelationshipApi {
		/**
		* DynamicsCrm.DevKit RelationshipApi
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
		/** Thiết đặt lưu trữ xếp tầng */
		readonly CascadeArchive: number;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.Relationship.ComponentState;
		/** Khóa thay thế của thực thể được tham chiếu */
		EntityKeyId: string;
		/** Thuộc tính mối quan hệ có được phi chuẩn hóa không. */
		readonly IsRelationshipAttributeDenormalized: boolean;
		/** Tên của mối quan hệ. */
		Name: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của mối quan hệ của thực thể. */
		RelationshipId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Số phiên bản của mối quan hệ này. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Thiết đặt lưu trữ xếp tầng */
			readonly CascadeArchive: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Khóa thay thế của thực thể được tham chiếu */
			readonly EntityKeyId: string;
			/** Thuộc tính mối quan hệ có được phi chuẩn hóa không. */
			readonly IsRelationshipAttributeDenormalized: string;
			/** Tên của mối quan hệ. */
			readonly Name: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của mối quan hệ của thực thể. */
			readonly RelationshipId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Số phiên bản của mối quan hệ này. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Relationship {
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