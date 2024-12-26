//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WorkflowLogApi {
		/**
		* DynamicsCrm.DevKit WorkflowLogApi
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
		/** Tên của hoạt động mà bước quy trình hiện đang xử lý. */
		ActivityName: string;
		/** Mã định danh duy nhất của bản ghi mẹ. */
		asyncoperationid_asyncoperation: string;
		/** Mã định danh duy nhất của bản ghi mẹ. */
		asyncoperationid_processsession: string;
		/** Mã định danh duy nhất của công việc hệ thống. */
		childworkflowinstanceid_asyncoperation: string;
		/** Mã định danh duy nhất của công việc hệ thống. */
		childworkflowinstanceid_processsession: string;
		/** Ngày và giờ đã hoàn tất thao tác. */
		CompletedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đã tạo mục nhập nhật ký quy trình. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo mục nhập nhật ký quy trình. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo nhật ký quy trình. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả bước quy trình. */
		Description: string;
		/** Khoảng thời gian giữa lúc hoàn thành và bắt đầu, được dùng bởi dòng quy trình công việc. */
		readonly Duration: number;
		/** Mã lỗi liên quan đến quy trình. */
		ErrorCode: number;
		/** Phần biểu diễn chuỗi của lỗi. */
		ErrorText: string;
		/** Đầu vào được yêu cầu theo bước của quy trình làm việc. */
		readonly Inputs_name: string;
		/** Chuỗi chỉ định kết quả của hoạt động tương tác */
		InteractionActivityResult: string;
		/** Số lần lặp lại cho hành động khi trong vòng lặp do until. */
		IterationCount: number;
		/** Thông báo liên quan đến quy trình. */
		Message: string;
		/** Mã định danh duy nhất của người dùng sửa đổi mục nhập nhật ký quy trình lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi mục nhập nhật ký quy trình lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa nhật ký quy trình lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Đầu ra được tạo từ bước của quy trình làm việc. */
		readonly Outputs_name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu quy trình. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu nhật ký quy trình. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu quy trình. */
		readonly OwningUser: string;
		/** Số lần lặp lại của hành động khi trong vòng lặp. */
		RepetitionCount: number;
		/** Phần biểu diễn chuỗi sự lặp lại và lặp lại / mức độ của hành động. */
		RepetitionId: string;
		/** Tên của giai đoạn quy trình. */
		StageName: string;
		/** Ngày và giờ bắt đầu thao tác. */
		StartedOn_UtcDateAndTime: Date;
		/** Trạng thái của bước quy trình tạo ra bản ghi nhật ký quy trình: Đang thực hiện, Hoàn thành thành công hoặc Không thành công. */
		Status: OptionSet.WorkflowLog.Status;
		/** Tên của bước quy trình. */
		StepName: string;
		/** Mã định danh duy nhất của mục nhập nhật ký quy trình. */
		WorkflowLogId: string;
		readonly FormattedValue: {
			/** Tên của hoạt động mà bước quy trình hiện đang xử lý. */
			readonly ActivityName: string;
			/** Mã định danh duy nhất của bản ghi mẹ. */
			readonly asyncoperationid_asyncoperation: string;
			/** Mã định danh duy nhất của bản ghi mẹ. */
			readonly asyncoperationid_processsession: string;
			/** Mã định danh duy nhất của công việc hệ thống. */
			readonly childworkflowinstanceid_asyncoperation: string;
			/** Mã định danh duy nhất của công việc hệ thống. */
			readonly childworkflowinstanceid_processsession: string;
			/** Ngày và giờ đã hoàn tất thao tác. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đã tạo mục nhập nhật ký quy trình. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo mục nhập nhật ký quy trình. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo nhật ký quy trình. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả bước quy trình. */
			readonly Description: string;
			/** Khoảng thời gian giữa lúc hoàn thành và bắt đầu, được dùng bởi dòng quy trình công việc. */
			readonly Duration: string;
			/** Mã lỗi liên quan đến quy trình. */
			readonly ErrorCode: string;
			/** Phần biểu diễn chuỗi của lỗi. */
			readonly ErrorText: string;
			/** Đầu vào được yêu cầu theo bước của quy trình làm việc. */
			readonly Inputs_name: string;
			/** Chuỗi chỉ định kết quả của hoạt động tương tác */
			readonly InteractionActivityResult: string;
			/** Số lần lặp lại cho hành động khi trong vòng lặp do until. */
			readonly IterationCount: string;
			/** Thông báo liên quan đến quy trình. */
			readonly Message: string;
			/** Mã định danh duy nhất của người dùng sửa đổi mục nhập nhật ký quy trình lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi mục nhập nhật ký quy trình lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa nhật ký quy trình lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Đầu ra được tạo từ bước của quy trình làm việc. */
			readonly Outputs_name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu quy trình. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu nhật ký quy trình. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu quy trình. */
			readonly OwningUser: string;
			/** Số lần lặp lại của hành động khi trong vòng lặp. */
			readonly RepetitionCount: string;
			/** Phần biểu diễn chuỗi sự lặp lại và lặp lại / mức độ của hành động. */
			readonly RepetitionId: string;
			/** Tên của giai đoạn quy trình. */
			readonly StageName: string;
			/** Ngày và giờ bắt đầu thao tác. */
			readonly StartedOn_UtcDateAndTime: string;
			/** Trạng thái của bước quy trình tạo ra bản ghi nhật ký quy trình: Đang thực hiện, Hoàn thành thành công hoặc Không thành công. */
			readonly Status: string;
			/** Tên của bước quy trình. */
			readonly StepName: string;
			/** Mã định danh duy nhất của mục nhập nhật ký quy trình. */
			readonly WorkflowLogId: string;
		}
	}
}
declare namespace OptionSet {
	namespace WorkflowLog {
		enum ChildWorkflowInstanceObjectTypeCode {
			/** 4700 */
			Cong_viec_He_thong,
			/** 4710 */
			Giao_dich_quy_trinh_lam_viec,
			/** 4720 */
			Phien_dong
		}
		enum ObjectTypeCode {
			/** 4700 */
			Cong_viec_He_thong,
			/** 4710 */
			Giao_dich_quy_trinh_lam_viec,
			/** 4720 */
			Phien_dong
		}
		enum RegardingObjectTypeCode {
		}
		enum Status {
			/** 4 */
			Da_huy,
			/** 2 */
			Da_thanh_cong,
			/** 5 */
			Dang_cho,
			/** 1 */
			Dang_tien_hanh,
			/** 3 */
			Khong_thanh_cong
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