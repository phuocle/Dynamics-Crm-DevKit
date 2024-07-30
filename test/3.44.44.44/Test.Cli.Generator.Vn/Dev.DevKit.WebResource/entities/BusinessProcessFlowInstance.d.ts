//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class BusinessProcessFlowInstanceApi {
		/**
		* DynamicsCrm.DevKit BusinessProcessFlowInstanceApi
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
		/** Ngày và giờ bắt đầu giai đoạn hiện hoạt. */
		readonly ActiveStageStartedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của phiên bản dòng quy trình công việc. */
		BusinessProcessFlowInstanceId: string;
		/** Ngày và giờ hoàn tất quy trình. */
		readonly CompletedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của phiên bản thực thể đầu tiên. */
		Entity1Id: string;
		/** Mã định danh duy nhất của phiên bản thực thể thứ hai. */
		Entity2Id: string;
		/** Mã định danh duy nhất của phiên bản thực thể thứ ba. */
		Entity3Id: string;
		/** Mã định danh duy nhất của phiên bản thực thể thứ tư. */
		Entity4Id: string;
		/** Mã định danh duy nhất của phiên bản thực thể thứ năm. */
		Entity5Id: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả cho phiên bản. */
		Name: string;
		/** Mã định danh duy nhất của dòng quy trình công việc. */
		ProcessId: string;
		/** Mã định danh duy nhất của giai đoạn hiện hoạt trong phiên bản dòng quy trình công việc. */
		ProcessStageId: string;
		/** Hiển thị trạng thái phiên bản dòng quy trình công việc là hiện hoạt hay không hoạt động. */
		StateCode: OptionSet.BusinessProcessFlowInstance.StateCode;
		/** Trạng thái phiên bản dòng quy trình công việc. */
		StatusCode: OptionSet.BusinessProcessFlowInstance.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Số phiên bản của phiên bản dòng quy trình công việc. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Ngày và giờ bắt đầu giai đoạn hiện hoạt. */
			readonly ActiveStageStartedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của phiên bản dòng quy trình công việc. */
			readonly BusinessProcessFlowInstanceId: string;
			/** Ngày và giờ hoàn tất quy trình. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của phiên bản thực thể đầu tiên. */
			readonly Entity1Id: string;
			/** Mã định danh duy nhất của phiên bản thực thể thứ hai. */
			readonly Entity2Id: string;
			/** Mã định danh duy nhất của phiên bản thực thể thứ ba. */
			readonly Entity3Id: string;
			/** Mã định danh duy nhất của phiên bản thực thể thứ tư. */
			readonly Entity4Id: string;
			/** Mã định danh duy nhất của phiên bản thực thể thứ năm. */
			readonly Entity5Id: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả cho phiên bản. */
			readonly Name: string;
			/** Mã định danh duy nhất của dòng quy trình công việc. */
			readonly ProcessId: string;
			/** Mã định danh duy nhất của giai đoạn hiện hoạt trong phiên bản dòng quy trình công việc. */
			readonly ProcessStageId: string;
			/** Hiển thị trạng thái phiên bản dòng quy trình công việc là hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Trạng thái phiên bản dòng quy trình công việc. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Số phiên bản của phiên bản dòng quy trình công việc. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace BusinessProcessFlowInstance {
		enum Entity1ObjectTypeCode {
		}
		enum Entity2ObjectTypeCode {
		}
		enum Entity3ObjectTypeCode {
		}
		enum Entity4ObjectTypeCode {
		}
		enum Entity5ObjectTypeCode {
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 3 */
			Da_huy_bo,
			/** 2 */
			Da_ket_thuc,
			/** 1 */
			Hien_hoat
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