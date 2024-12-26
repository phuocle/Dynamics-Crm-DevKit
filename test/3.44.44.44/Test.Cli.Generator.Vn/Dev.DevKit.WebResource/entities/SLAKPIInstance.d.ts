//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSLA_KPI_Instance {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm đã gán quản lý bản ghi. Trường này sẽ cập nhật mỗi lần gán bản ghi cho người dùng hoặc nhóm khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Lý do dẫn đến trạng thái của phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). Ví dụ: Chỉ số Đo lường Hiệu suất Chính của Thỏa thuận Cấp độ Dịch vụ (SLA KPI) có thể là Không tuân thủ hoặc Đã thành công. */
			Status: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Nhập ngày giờ hết hạn Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
			FailureTime: DevKit.Controls.DateTime;
			/** Nhập tên mô tả dành cho phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			Regarding: DevKit.Controls.Lookup;
			/** Hiện ngày giờ thỏa mãn tiêu chí thành công cho Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
			SucceededOn: DevKit.Controls.DateTime;
			/** Nhập ngày giờ mà Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) sẽ chuyển sang trạng thái cảnh báo. */
			WarningTime: DevKit.Controls.DateTime;
		}
		interface Navigation {

		}
	}
	class FormSLA_KPI_Instance extends DevKit.IForm {
		/**
		* SLA KPI Instance [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SLA_KPI_Instance */
		Body: DevKit.FormSLA_KPI_Instance.Body;
		/** The Header section of form SLA_KPI_Instance */
		Header: DevKit.FormSLA_KPI_Instance.Header;
		/** The Navigation of form SLA_KPI_Instance */
		Navigation: DevKit.FormSLA_KPI_Instance.Navigation;
		/** The SidePanes of form SLA_KPI_Instance */
		SidePanes: DevKit.SidePanes;
	}
	class SLAKPIInstanceApi {
		/**
		* DynamicsCrm.DevKit SLAKPIInstanceApi
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
		ApplicableFromValue_UtcDateAndTime: Date;
		/** Ngày giờ lỗi đã tính */
		ComputedFailureTime_UtcDateAndTime: Date;
		/** Ngày giờ cảnh báo đã tính */
		ComputedWarningTime_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly CreatedBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly CreatedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		Description: string;
		/** Paused duration of a KPI in business hours */
		ElapsedTime: number;
		/** Chỉ sử dụng nội bộ. */
		readonly ExchangeRate: number;
		/** Nhập ngày giờ hết hạn Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
		FailureTime_UtcDateAndTime: Date;
		LastResumeTime_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly ModifiedBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_ActionExecutionStatus: OptionSet.SLAKPIInstance.msdyn_ActionExecutionStatus;
		/** Time taken in business hours by a KPI instance to reach the Success or failed state */
		msdyn_activeduration: number;
		msdyn_calendarid: string;
		msdyn_prevslakpiinstanceid: string;
		/** Unique identifier for SLA KPI Instance associated with SLA Item. */
		msdyn_slaitemid: string;
		/** Nhập tên mô tả dành cho phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Đơn vị kinh doanh sở hữu. */
		OwningBusinessUnit: string;
		PausedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_account: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_activitypointer: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_appointment: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_contact: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_email: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_fax: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_letter: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_phonecall: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_socialactivity: string;
		/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
		regarding_task: string;
		RegardingEntityID: string;
		/** Mã định danh duy nhất của phiên bản Chỉ số Đo lường Hiệu suất Chính của Thỏa thuận Cấp độ Dịch vụ (SLA KPI). */
		SLAKPIInstanceId: string;
		/** Lý do dẫn đến trạng thái của phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). Ví dụ: Chỉ số Đo lường Hiệu suất Chính của Thỏa thuận Cấp độ Dịch vụ (SLA KPI) có thể là Không tuân thủ hoặc Đã thành công. */
		Status: OptionSet.SLAKPIInstance.Status;
		/** Hiện ngày giờ thỏa mãn tiêu chí thành công cho Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
		SucceededOn_UtcDateAndTime: Date;
		SuccessCheckedAt_TimezoneDateAndTime: Date;
		TerminalStateReached: boolean;
		TerminalStateTime_UtcDateAndTime: Date;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly VersionNumber: number;
		/** Nhập ngày giờ mà Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) sẽ chuyển sang trạng thái cảnh báo. */
		WarningTime_UtcDateAndTime: Date;
		/** Hiện thông tin về khả năng trường hợp đến thời gian cảnh báo. */
		WarningTimeReached: OptionSet.SLAKPIInstance.WarningTimeReached;
		readonly FormattedValue: {
			readonly ApplicableFromValue_UtcDateAndTime: string;
			/** Ngày giờ lỗi đã tính */
			readonly ComputedFailureTime_UtcDateAndTime: string;
			/** Ngày giờ cảnh báo đã tính */
			readonly ComputedWarningTime_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly CreatedBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly CreatedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Description: string;
			/** Paused duration of a KPI in business hours */
			readonly ElapsedTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ExchangeRate: string;
			/** Nhập ngày giờ hết hạn Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
			readonly FailureTime_UtcDateAndTime: string;
			readonly LastResumeTime_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ModifiedBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_ActionExecutionStatus: string;
			/** Time taken in business hours by a KPI instance to reach the Success or failed state */
			readonly msdyn_activeduration: string;
			readonly msdyn_calendarid: string;
			readonly msdyn_prevslakpiinstanceid: string;
			/** Unique identifier for SLA KPI Instance associated with SLA Item. */
			readonly msdyn_slaitemid: string;
			/** Nhập tên mô tả dành cho phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Đơn vị kinh doanh sở hữu. */
			readonly OwningBusinessUnit: string;
			readonly PausedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_account: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_activitypointer: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_appointment: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_contact: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_email: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_fax: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_letter: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_phonecall: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_socialactivity: string;
			/** Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này. */
			readonly regarding_task: string;
			readonly RegardingEntityID: string;
			/** Mã định danh duy nhất của phiên bản Chỉ số Đo lường Hiệu suất Chính của Thỏa thuận Cấp độ Dịch vụ (SLA KPI). */
			readonly SLAKPIInstanceId: string;
			/** Lý do dẫn đến trạng thái của phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). Ví dụ: Chỉ số Đo lường Hiệu suất Chính của Thỏa thuận Cấp độ Dịch vụ (SLA KPI) có thể là Không tuân thủ hoặc Đã thành công. */
			readonly Status: string;
			/** Hiện ngày giờ thỏa mãn tiêu chí thành công cho Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). */
			readonly SucceededOn_UtcDateAndTime: string;
			readonly SuccessCheckedAt_TimezoneDateAndTime: string;
			readonly TerminalStateReached: string;
			readonly TerminalStateTime_UtcDateAndTime: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly VersionNumber: string;
			/** Nhập ngày giờ mà Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) sẽ chuyển sang trạng thái cảnh báo. */
			readonly WarningTime_UtcDateAndTime: string;
			/** Hiện thông tin về khả năng trường hợp đến thời gian cảnh báo. */
			readonly WarningTimeReached: string;
		}
	}
}
declare namespace OptionSet {
	namespace SLAKPIInstance {
		enum msdyn_ActionExecutionStatus {
			/** 0 */
			None,
			/** 2 */
			Success,
			/** 1 */
			Warning
		}
		enum RegardingObjectTypeCode {
		}
		enum Status {
			/** 5 */
			Da_huy,
			/** 3 */
			Da_tam_dung,
			/** 4 */
			Da_thanh_cong,
			/** 0 */
			Dang_tien_hanh,
			/** 2 */
			Gan_nhu_khong_tuan_thu,
			/** 1 */
			Khong_tuan_thu
		}
		enum WarningTimeReached {
			/** 1 */
			Co,
			/** 0 */
			Khong
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