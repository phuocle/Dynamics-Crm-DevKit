//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ProcessTriggerApi {
		/**
		* DynamicsCrm.DevKit ProcessTriggerApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ProcessTrigger.ComponentState;
		/** Tên của kiểm soát. */
		ControlName: string;
		/** Loại kiểm soát quy định bộ kích hoạt này */
		ControlType: OptionSet.ProcessTrigger.ControlType;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Cho biết sự kiện. */
		Event: string;
		/** Mã định danh duy nhất của biểu mẫu liên kết với bộ kích hoạt. */
		FormId: string;
		/** Cho biết khả năng tùy chỉnh thành phần này. */
		IsCustomizable: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Hiển thị StageID mà quy tắc PBL thuộc về */
		MethodId: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Chọn đơn vị kinh doanh sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Phần bổ trợ Giai đoạn Quy trình bán hàng để Thực thi Sự kiện Quy trình làm việc. */
		PipelineStage: OptionSet.ProcessTrigger.PipelineStage;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Mã định danh duy nhất của bản ghi kích hoạt quy trình. */
		ProcessTriggerId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ProcessTriggerIdUnique: string;
		/** Mức phạm vi dành cho quy tắc PBL. */
		Scope: OptionSet.ProcessTrigger.Scope;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Tên của kiểm soát. */
			readonly ControlName: string;
			/** Loại kiểm soát quy định bộ kích hoạt này */
			readonly ControlType: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Cho biết sự kiện. */
			readonly Event: string;
			/** Mã định danh duy nhất của biểu mẫu liên kết với bộ kích hoạt. */
			readonly FormId: string;
			/** Cho biết khả năng tùy chỉnh thành phần này. */
			readonly IsCustomizable: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Hiển thị StageID mà quy tắc PBL thuộc về */
			readonly MethodId: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Chọn đơn vị kinh doanh sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Phần bổ trợ Giai đoạn Quy trình bán hàng để Thực thi Sự kiện Quy trình làm việc. */
			readonly PipelineStage: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Mã định danh duy nhất của bản ghi kích hoạt quy trình. */
			readonly ProcessTriggerId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ProcessTriggerIdUnique: string;
			/** Mức phạm vi dành cho quy tắc PBL. */
			readonly Scope: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ProcessTrigger {
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
		enum ControlType {
			/** 2 */
			The_bieu_mau,
			/** 1 */
			Thuoc_tinh
		}
		enum PipelineStage {
			/** 0 */
			Gia_tri_Mac_dinh,
			/** 40 */
			Sau_Thao_tac_Chinh,
			/** 20 */
			Truoc_Thao_tac_Chinh
		}
		enum PrimaryEntityTypeCode {
		}
		enum Scope {
			/** 1 */
			Bieu_mau,
			/** 2 */
			Thuc_the
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