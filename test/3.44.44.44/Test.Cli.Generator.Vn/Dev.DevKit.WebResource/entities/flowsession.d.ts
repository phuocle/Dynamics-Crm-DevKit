//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Tên thực thể tùy chỉnh. */
			Name: DevKit.Controls.String;
			/** ID Chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			flowevent_flowsession: DevKit.Controls.NavigationItem,
			flowsession_flowlog_flowsessionid: DevKit.Controls.NavigationItem,
			flowsession_flowlog_parentobjectid: DevKit.Controls.NavigationItem,
			flowsession_workflowbinary_FlowSessionId: DevKit.Controls.NavigationItem
		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class flowsessionApi {
		/**
		* DynamicsCrm.DevKit flowsessionApi
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
		/** Ngữ cảnh bổ sung về phiên dòng. */
		readonly AdditionalContext_name: string;
		/** URL sẽ được gọi sau khi phiên dòng quy trình hoàn tất. */
		CallbackUrl: string;
		/** Ngày và giờ hoàn thành phiên dòng. */
		CompletedOn_UtcDateAndTime: Date;
		/** ID của kết nối được sử dụng trong lần chạy dòng màn hình nền. */
		ConnectionId: string;
		/** Ngữ cảnh về phiên dòng. */
		Context: string;
		/** Mã định danh duy nhất được dùng để xét tương quan giữa nhiều yêu cầu SDK và hoạt động thực thi quy trình. */
		CorrelationId: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mã lỗi mô tả sự cố khi thực thi phiên dòng. */
		ErrorCode: string;
		/** Chi tiết sự cố khi thực thi phiên dòng. */
		ErrorDetails: string;
		/** Thông tin cụ thể về lỗi trong quá trình thực thi phiên dòng quy trình. */
		ErrorInnerError: string;
		/** Thông báo mô tả sự cố khi thực thi phiên dòng. */
		ErrorMessage: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		flowsessionId: string;
		/** Tên của cổng kết nối được sử dụng. */
		Gateway: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Đầu vào được tạo từ hoạt động thực thi phiên dòng. */
		readonly Inputs_name: string;
		MachineGroupId: string;
		MachineId: string;
		/** Tỷ lệ sử dụng CPU của máy */
		MachinePercentCpuUsage: number;
		/** Tỷ lệ sử dụng RAM của máy */
		MachinePercentRamUsage: number;
		/** Mức sử dụng RAM của máy ở Mo */
		MachineRamUsage: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên thực thể tùy chỉnh. */
		Name: string;
		/** Đầu ra được tạo từ hoạt động thực thi phiên dòng. */
		readonly Outputs_name: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** ID trình tự của phiên chạy dòng đám mây gốc, chỉ sử dụng khi Dòng màn hình nền được chạy bằng một dòng đám mây. */
		ParentCloudFlowRunSequenceId: string;
		/** Id of the parent workflow, cloud flow or desktop flow. */
		ParentWorkflowId: string;
		/** Phiên bản của quy trình được liên kết với phiên dòng. */
		ProcessVersion: string;
		/** Mã định danh duy nhất của quy trình được liên kết với phiên dòng. */
		RegardingObjectId: string;
		/** Chi tiết về phiên chạy. */
		RunDetails: string;
		/** Thời lượng phiên chạy. */
		RunDuration: number;
		/** Thời lượng thực thi phiên chạy. */
		RunExecutionDuration: number;
		/** Cho biết chế độ chạy của lượt chạy dòng màn hình nền. */
		RunMode: OptionSet.flowsession.RunMode;
		/** Cho biết chế độ phiên chạy của dòng màn hình nền. */
		RunSessionMode: OptionSet.flowsession.RunSessionMode;
		/** Thời gian mà phiên chạy đã dành để chờ đợi. */
		RunWaitDuration: number;
		/** Tên người dùng được sử dụng trong lượt chạy Dòng màn hình nền. */
		SessionUsername: string;
		/** SID của người dùng được sử dụng trong lượt chạy Dòng màn hình nền. */
		SessionUserSID: string;
		/** Ngày và giờ bắt đầu phiên dòng. */
		StartedOn_UtcDateAndTime: Date;
		/** Trạng thái phiên dòng */
		statecode: OptionSet.flowsession.statecode;
		/** Lý do dẫn đến trạng thái của phiên dòng */
		statuscode: OptionSet.flowsession.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Cho biết loại trình kích hoạt được sử dụng để chạy dòng màn hình nền. */
		TriggerType: OptionSet.flowsession.TriggerType;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Ngữ cảnh bổ sung về phiên dòng. */
			readonly AdditionalContext_name: string;
			/** URL sẽ được gọi sau khi phiên dòng quy trình hoàn tất. */
			readonly CallbackUrl: string;
			/** Ngày và giờ hoàn thành phiên dòng. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** ID của kết nối được sử dụng trong lần chạy dòng màn hình nền. */
			readonly ConnectionId: string;
			/** Ngữ cảnh về phiên dòng. */
			readonly Context: string;
			/** Mã định danh duy nhất được dùng để xét tương quan giữa nhiều yêu cầu SDK và hoạt động thực thi quy trình. */
			readonly CorrelationId: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mã lỗi mô tả sự cố khi thực thi phiên dòng. */
			readonly ErrorCode: string;
			/** Chi tiết sự cố khi thực thi phiên dòng. */
			readonly ErrorDetails: string;
			/** Thông tin cụ thể về lỗi trong quá trình thực thi phiên dòng quy trình. */
			readonly ErrorInnerError: string;
			/** Thông báo mô tả sự cố khi thực thi phiên dòng. */
			readonly ErrorMessage: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly flowsessionId: string;
			/** Tên của cổng kết nối được sử dụng. */
			readonly Gateway: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Đầu vào được tạo từ hoạt động thực thi phiên dòng. */
			readonly Inputs_name: string;
			readonly MachineGroupId: string;
			readonly MachineId: string;
			/** Tỷ lệ sử dụng CPU của máy */
			readonly MachinePercentCpuUsage: string;
			/** Tỷ lệ sử dụng RAM của máy */
			readonly MachinePercentRamUsage: string;
			/** Mức sử dụng RAM của máy ở Mo */
			readonly MachineRamUsage: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên thực thể tùy chỉnh. */
			readonly Name: string;
			/** Đầu ra được tạo từ hoạt động thực thi phiên dòng. */
			readonly Outputs_name: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** ID trình tự của phiên chạy dòng đám mây gốc, chỉ sử dụng khi Dòng màn hình nền được chạy bằng một dòng đám mây. */
			readonly ParentCloudFlowRunSequenceId: string;
			/** Id of the parent workflow, cloud flow or desktop flow. */
			readonly ParentWorkflowId: string;
			/** Phiên bản của quy trình được liên kết với phiên dòng. */
			readonly ProcessVersion: string;
			/** Mã định danh duy nhất của quy trình được liên kết với phiên dòng. */
			readonly RegardingObjectId: string;
			/** Chi tiết về phiên chạy. */
			readonly RunDetails: string;
			/** Thời lượng phiên chạy. */
			readonly RunDuration: string;
			/** Thời lượng thực thi phiên chạy. */
			readonly RunExecutionDuration: string;
			/** Cho biết chế độ chạy của lượt chạy dòng màn hình nền. */
			readonly RunMode: string;
			/** Cho biết chế độ phiên chạy của dòng màn hình nền. */
			readonly RunSessionMode: string;
			/** Thời gian mà phiên chạy đã dành để chờ đợi. */
			readonly RunWaitDuration: string;
			/** Tên người dùng được sử dụng trong lượt chạy Dòng màn hình nền. */
			readonly SessionUsername: string;
			/** SID của người dùng được sử dụng trong lượt chạy Dòng màn hình nền. */
			readonly SessionUserSID: string;
			/** Ngày và giờ bắt đầu phiên dòng. */
			readonly StartedOn_UtcDateAndTime: string;
			/** Trạng thái phiên dòng */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của phiên dòng */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Cho biết loại trình kích hoạt được sử dụng để chạy dòng màn hình nền. */
			readonly TriggerType: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowsession {
		enum RegardingObjectTypeCode {
		}
		enum RunMode {
			/** 1 */
			Co_giam_sat,
			/** 0 */
			Cuc_bo,
			/** 2 */
			Khong_giam_sat
		}
		enum RunSessionMode {
			/** 2 */
			Hinh_trong_hinh,
			/** 0 */
			Khong_the_ap_dung,
			/** 1 */
			Mac_dinh
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 9 */
			Bi_loi,
			/** 12 */
			Da_bo_qua_12,
			/** 5 */
			Da_bo_qua_5,
			/** 14 */
			Da_cham_dut,
			/** 10 */
			Da_het_thoi_gian_cho,
			/** 7 */
			Da_huy,
			/** 11 */
			Da_huy_bo,
			/** 1 */
			Da_tam_dung,
			/** 4 */
			Da_thanh_cong,
			/** 6 */
			Da_treo,
			/** 13 */
			Da_xoa,
			/** 2 */
			Dang_chay,
			/** 3 */
			Dang_cho,
			/** 0 */
			Khong_chi_dinh,
			/** 8 */
			Khong_thanh_cong
		}
		enum TriggerType {
			/** 0 */
			ApiFlow,
			/** 2 */
			Cuc_bo,
			/** 1 */
			DesktopFlow,
			/** 3 */
			RunDesktopFlowDataverseApi
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