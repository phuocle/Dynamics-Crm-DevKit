//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormExpiredProcess {
		interface tab_general_Sections {
			expiredprocessinformation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Tên quy trình. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {
			lk_expiredprocess_workflowlogs: DevKit.Controls.NavigationItem
		}
	}
	class FormExpiredProcess extends DevKit.IForm {
		/**
		* ExpiredProcess [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ExpiredProcess */
		Body: DevKit.FormExpiredProcess.Body;
		/** The Navigation of form ExpiredProcess */
		Navigation: DevKit.FormExpiredProcess.Navigation;
		/** The SidePanes of form ExpiredProcess */
		SidePanes: DevKit.SidePanes;
	}
	class ExpiredProcessApi {
		/**
		* DynamicsCrm.DevKit ExpiredProcessApi
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
		/** Mã định danh duy nhất của giai đoạn hiện hoạt trong phiên bản Dòng Quy trình Công việc. */
		ActiveStageId: string;
		/** Ngày và giờ bắt đầu giai đoạn hiện hoạt hiện tại. */
		ActiveStageStartedOn_UtcDateOnly: Date;
		/** Mã định danh duy nhất của phiên bản thực thể Dòng Quy trình Công việc trong Quy trình Đã hết hạn */
		BusinessProcessFlowInstanceId: string;
		/** Ngày và giờ hoàn thành phiên bản Dòng Quy trình Công việc. */
		CompletedOn_UtcDateOnly: Date;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Khoảng thời gian dòng quy trình công việc đã hiện hoạt. */
		readonly Duration: number;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để chuyển đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của quy trình làm việc liên kết với phiên bản Dòng Quy trình Công việc. */
		KnowledgeArticleId: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi sau cùng. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên quy trình. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với yêu cầu thông báo SDK. */
		readonly OrganizationId: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Mã định danh duy nhất của quy trình làm việc liên kết với phiên bản Dòng Quy trình Công việc. */
		ProcessId: string;
		/** Cho biết bản ghi hành động Delve là đang chờ xử lý, đã hoàn thành hay đang theo dõi. */
		StateCode: OptionSet.ExpiredProcess.StateCode;
		/** Chọn trạng thái bản ghi hành động delve. */
		StatusCode: OptionSet.ExpiredProcess.StatusCode;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Đường ngang */
		TraversedPath: string;
		/** Số phiên bản của phiên bản quy trình công việc. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của giai đoạn hiện hoạt trong phiên bản Dòng Quy trình Công việc. */
			readonly ActiveStageId: string;
			/** Ngày và giờ bắt đầu giai đoạn hiện hoạt hiện tại. */
			readonly ActiveStageStartedOn_UtcDateOnly: string;
			/** Mã định danh duy nhất của phiên bản thực thể Dòng Quy trình Công việc trong Quy trình Đã hết hạn */
			readonly BusinessProcessFlowInstanceId: string;
			/** Ngày và giờ hoàn thành phiên bản Dòng Quy trình Công việc. */
			readonly CompletedOn_UtcDateOnly: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Khoảng thời gian dòng quy trình công việc đã hiện hoạt. */
			readonly Duration: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để chuyển đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của quy trình làm việc liên kết với phiên bản Dòng Quy trình Công việc. */
			readonly KnowledgeArticleId: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi sau cùng. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên quy trình. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với yêu cầu thông báo SDK. */
			readonly OrganizationId: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Mã định danh duy nhất của quy trình làm việc liên kết với phiên bản Dòng Quy trình Công việc. */
			readonly ProcessId: string;
			/** Cho biết bản ghi hành động Delve là đang chờ xử lý, đã hoàn thành hay đang theo dõi. */
			readonly StateCode: string;
			/** Chọn trạng thái bản ghi hành động delve. */
			readonly StatusCode: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Đường ngang */
			readonly TraversedPath: string;
			/** Số phiên bản của phiên bản quy trình công việc. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExpiredProcess {
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