//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RollupPropertiesApi {
		/**
		* DynamicsCrm.DevKit RollupPropertiesApi
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
		/** Tên lôgic của thuộc tính mục tiêu */
		readonly AggregateAttributeLogicalName: string;
		/** Tên lôgic của thực thể mục tiêu */
		readonly AggregateEntityLogicalName: string;
		/** Mã loại của thực thể gộp tổng hợp */
		readonly AggregateEntityTypeCode: number;
		/** Tiêu chí lọc dành cho mục tiêu */
		readonly AggregateFilterAttributes: string;
		/** Tên mối quan hệ của mối quan hệ nguồn - mục tiêu. */
		readonly AggregateRelationshipName: string;
		/** Loại gộp tổng hợp để thực hiện */
		readonly AggregateType: OptionSet.RollupProperties.AggregateType;
		/** Chấp nhận thực thể nguồn theo cấp bậc */
		readonly AllowHierarchyOnSource: boolean;
		/** Độ sâu dùng để tính tự khởi động */
		readonly BootstrapCurrentDepth: number;
		/** Tổng đếm lần thử lại dành cho tự khởi động */
		readonly BootstrapRetryCount: number;
		/** Mã định danh duy nhất biểu thị id công việc không đồng bộ tính hàng loạt. */
		readonly BootstrapRollupAsyncJobId: string;
		/** Số hiệu bước để bắt đầu thực thi tự khởi động */
		readonly BootstrapStepNumber: number;
		/** Con trỏ mục tiêu dùng để tính tự khởi động */
		readonly BootstrapTargetPointer: number;
		/** Loại dữ liệu trường tổng số */
		readonly DataType: string;
		/** Mã định danh duy nhất biểu thị id công việc không đồng bộ thực thể tính toán. */
		readonly IncrementalRollupAsyncJobId: string;
		/** Trạng thái tính giá trị ban đầu. */
		readonly InitialValueCalculationStatus: OptionSet.RollupProperties.InitialValueCalculationStatus;
		/** Cờ cho biết Bên Hoạt động có được bao gồm hay không */
		readonly IsActivityPartyIncluded: number;
		/** Lần cuối cùng thực hiện tính toán cho trường tổng số này. */
		readonly LastCalculationTime_UtcDateAndTime: Date;
		/** Tên lôgic của thuộc tính nguồn */
		readonly RollupAttributeLogicalName: string;
		/** Tên bảng gốc của thực thể tổng số */
		readonly RollupEntityBaseTableName: string;
		/** Tên lôgic của thực thể nguồn */
		readonly RollupEntityLogicalName: string;
		/** Tên vật lý của khóa chính dành cho thực thể tổng số */
		readonly RollupEntityPrimaryKeyPhysicalName: string;
		/** Mã loại của thực thể tổng số */
		readonly RollupEntityTypeCode: number;
		/** Tiêu chí lọc dành cho nguồn */
		readonly RollupFilterAttributes: string;
		/** Mã định danh duy nhất của bản ghi hiện tại. */
		readonly RollupPropertiesId: string;
		/** Tên vật lý của thuộc tính trạng thái tổng số */
		readonly RollupStateAttributePhysicalName: string;
		/** Tên mối quan hệ của mối quan hệ nguồn theo cấp bậc */
		readonly SourceHierarchicalRelationshipName: string;
		/** Trạng thái của tổng số. */
		readonly StateCode: OptionSet.RollupProperties.StateCode;
		/** Thông tin thêm về trạng thái của thuộc tính tổng số. */
		readonly StatusCode: OptionSet.RollupProperties.StatusCode;
		/** Số phiên bản của tổng số. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Tên lôgic của thuộc tính mục tiêu */
			readonly AggregateAttributeLogicalName: string;
			/** Tên lôgic của thực thể mục tiêu */
			readonly AggregateEntityLogicalName: string;
			/** Mã loại của thực thể gộp tổng hợp */
			readonly AggregateEntityTypeCode: string;
			/** Tiêu chí lọc dành cho mục tiêu */
			readonly AggregateFilterAttributes: string;
			/** Tên mối quan hệ của mối quan hệ nguồn - mục tiêu. */
			readonly AggregateRelationshipName: string;
			/** Loại gộp tổng hợp để thực hiện */
			readonly AggregateType: string;
			/** Chấp nhận thực thể nguồn theo cấp bậc */
			readonly AllowHierarchyOnSource: string;
			/** Độ sâu dùng để tính tự khởi động */
			readonly BootstrapCurrentDepth: string;
			/** Tổng đếm lần thử lại dành cho tự khởi động */
			readonly BootstrapRetryCount: string;
			/** Mã định danh duy nhất biểu thị id công việc không đồng bộ tính hàng loạt. */
			readonly BootstrapRollupAsyncJobId: string;
			/** Số hiệu bước để bắt đầu thực thi tự khởi động */
			readonly BootstrapStepNumber: string;
			/** Con trỏ mục tiêu dùng để tính tự khởi động */
			readonly BootstrapTargetPointer: string;
			/** Loại dữ liệu trường tổng số */
			readonly DataType: string;
			/** Mã định danh duy nhất biểu thị id công việc không đồng bộ thực thể tính toán. */
			readonly IncrementalRollupAsyncJobId: string;
			/** Trạng thái tính giá trị ban đầu. */
			readonly InitialValueCalculationStatus: string;
			/** Cờ cho biết Bên Hoạt động có được bao gồm hay không */
			readonly IsActivityPartyIncluded: string;
			/** Lần cuối cùng thực hiện tính toán cho trường tổng số này. */
			readonly LastCalculationTime_UtcDateAndTime: string;
			/** Tên lôgic của thuộc tính nguồn */
			readonly RollupAttributeLogicalName: string;
			/** Tên bảng gốc của thực thể tổng số */
			readonly RollupEntityBaseTableName: string;
			/** Tên lôgic của thực thể nguồn */
			readonly RollupEntityLogicalName: string;
			/** Tên vật lý của khóa chính dành cho thực thể tổng số */
			readonly RollupEntityPrimaryKeyPhysicalName: string;
			/** Mã loại của thực thể tổng số */
			readonly RollupEntityTypeCode: string;
			/** Tiêu chí lọc dành cho nguồn */
			readonly RollupFilterAttributes: string;
			/** Mã định danh duy nhất của bản ghi hiện tại. */
			readonly RollupPropertiesId: string;
			/** Tên vật lý của thuộc tính trạng thái tổng số */
			readonly RollupStateAttributePhysicalName: string;
			/** Tên mối quan hệ của mối quan hệ nguồn theo cấp bậc */
			readonly SourceHierarchicalRelationshipName: string;
			/** Trạng thái của tổng số. */
			readonly StateCode: string;
			/** Thông tin thêm về trạng thái của thuộc tính tổng số. */
			readonly StatusCode: string;
			/** Số phiên bản của tổng số. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RollupProperties {
		enum AggregateType {
			/** 4 */
			Toi_da,
			/** 3 */
			Toi_thieu,
			/** 1 */
			Tong,
			/** 0 */
			Tong_dem,
			/** 2 */
			Trung_binh
		}
		enum InitialValueCalculationStatus {
			/** 3 */
			Da_hoan_thanh,
			/** 2 */
			Da_tam_dung,
			/** 1 */
			Dang_tien_hanh,
			/** 0 */
			Dang_treo,
			/** 4 */
			Khong_thanh_cong
		}
		enum StateCode {
			/** 0 */
			Hop_le,
			/** 1 */
			Khong_hop_le
		}
		enum StatusCode {
			/** 1 */
			Hop_le,
			/** 2 */
			Khong_hop_le
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