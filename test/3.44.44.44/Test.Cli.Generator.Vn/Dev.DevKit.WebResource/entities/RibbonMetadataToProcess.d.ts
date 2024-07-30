//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RibbonMetadataToProcessApi {
		/**
		* DynamicsCrm.DevKit RibbonMetadataToProcessApi
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
		/** Cho biết ngày và giờ hoàn thành việc xử lý bản ghi thực thể ruy băng. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CompletedOn_UtcDateAndTime: Date;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Tên Lôgic của Thực thể */
		EntityName2: string;
		/** Thông báo ngoại lệ */
		ExceptionMessage: string;
		/** Là thực thể được tạo qua Bản cập nhật Db */
		IsDbUpdate: number;
		/** Cho biết ngày và giờ xử lý bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ProcessedOn_UtcDateAndTime: Date;
		/** Số lần Thử lại */
		RetryCount: number;
		/** Mã định danh duy nhất cho Phiên bản Siêu dữ liệu Ruy băng để Xử lý */
		RibbonMetadataRowId: string;
		/** Id giải pháp */
		SolutionId: string;
		/** Tên Giải pháp của thực thể ruy băng */
		SolutionName: string;
		/** Trạng thái */
		Status: number;
		readonly FormattedValue: {
			/** Cho biết ngày và giờ hoàn thành việc xử lý bản ghi thực thể ruy băng. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Tên Lôgic của Thực thể */
			readonly EntityName2: string;
			/** Thông báo ngoại lệ */
			readonly ExceptionMessage: string;
			/** Là thực thể được tạo qua Bản cập nhật Db */
			readonly IsDbUpdate: string;
			/** Cho biết ngày và giờ xử lý bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ProcessedOn_UtcDateAndTime: string;
			/** Số lần Thử lại */
			readonly RetryCount: string;
			/** Mã định danh duy nhất cho Phiên bản Siêu dữ liệu Ruy băng để Xử lý */
			readonly RibbonMetadataRowId: string;
			/** Id giải pháp */
			readonly SolutionId: string;
			/** Tên Giải pháp của thực thể ruy băng */
			readonly SolutionName: string;
			/** Trạng thái */
			readonly Status: string;
		}
	}
}
declare namespace OptionSet {
	namespace RibbonMetadataToProcess {
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