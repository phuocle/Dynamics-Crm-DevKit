//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class StagedMetadataAsyncOperationApi {
		/**
		* DynamicsCrm.DevKit StagedMetadataAsyncOperationApi
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
		/** Trạng thái của Công việc không đồng bộ để xử lý thao tác siêu dữ liệu. */
		readonly AsyncJobStatus: number;
		/** OperationId công việc không đồng bộ. */
		readonly AsyncOperationId: string;
		/** Loại thành phần siêu dữ liệu. */
		readonly ComponentType: number;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Ngày giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Ngày giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của hoạt động không đồng bộ cho siêu dữ liệu theo giai đoạn. */
		readonly Name: string;
		/** MetadataId (Thực thể/Thuộc tính) thành phần */
		readonly ObjectId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Mã định danh duy nhất cho các phiên bản thực thể */
		readonly StagedMetadataAsyncOperationId: string;
		/** Trạng thái của Thao tác không đồng bộ siêu dữ liệu theo giai đoạn */
		statecode: OptionSet.StagedMetadataAsyncOperation.statecode;
		/** Lý do dẫn đến trạng thái của Thao tác không đồng bộ siêu dữ liệu theo giai đoạn */
		statuscode: OptionSet.StagedMetadataAsyncOperation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Danh sách phần phụ thuộc chưa được xử lý */
		readonly UnprocessedDependencies: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Trạng thái của Công việc không đồng bộ để xử lý thao tác siêu dữ liệu. */
			readonly AsyncJobStatus: string;
			/** OperationId công việc không đồng bộ. */
			readonly AsyncOperationId: string;
			/** Loại thành phần siêu dữ liệu. */
			readonly ComponentType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Ngày giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của hoạt động không đồng bộ cho siêu dữ liệu theo giai đoạn. */
			readonly Name: string;
			/** MetadataId (Thực thể/Thuộc tính) thành phần */
			readonly ObjectId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Mã định danh duy nhất cho các phiên bản thực thể */
			readonly StagedMetadataAsyncOperationId: string;
			/** Trạng thái của Thao tác không đồng bộ siêu dữ liệu theo giai đoạn */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Thao tác không đồng bộ siêu dữ liệu theo giai đoạn */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Danh sách phần phụ thuộc chưa được xử lý */
			readonly UnprocessedDependencies: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace StagedMetadataAsyncOperation {
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
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