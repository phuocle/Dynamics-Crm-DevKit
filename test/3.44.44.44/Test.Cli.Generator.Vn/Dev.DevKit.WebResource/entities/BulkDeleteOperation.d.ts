//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_properties_Sections {
			details: DevKit.Controls.Section;
			querydetails: DevKit.Controls.Section;
		}
		interface tab_properties extends DevKit.Controls.ITab {
			Section: tab_properties_Sections;
		}
		interface Tabs {
			properties: tab_properties;
		}
		interface Body {
			Tab: Tabs;
			advfindcontrol: DevKit.Controls.IFrame;
			/** Mã định danh duy nhất của người dùng đã tạo công việc xóa hàng loạt. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo công việc xóa hàng loạt. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Số lượng bản ghi không thể xóa được bằng công việc xóa hàng loạt. */
			FailureCount: DevKit.Controls.Integer;
			/** Thông tin về việc có xác định lặp lại cho công việc xóa hàng loạt hay không. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất của người dùng sửa đổi công việc xóa hàng loạt lần cuối. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi bản ghi công việc xóa hàng loạt lần cuối. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Tên của công việc xóa hàng loạt. */
			Name: DevKit.Controls.String;
			/** Thời gian theo lịch tiếp theo để chạy công việc xóa hàng loạt. */
			NextRun: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu thao tác xóa hàng loạt. */
			OwnerId: DevKit.Controls.Lookup;
			/** Lý do cho trạng thái của công việc xóa hàng loạt. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Số lượng bản ghi đã bị xóa bằng công việc xóa hàng loạt. */
			SuccessCount: DevKit.Controls.Integer;
		}
		interface Navigation {

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
	class BulkDeleteOperationApi {
		/**
		* DynamicsCrm.DevKit BulkDeleteOperationApi
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
		/** Mã định danh duy nhất của công việc hệ thống đã tạo bản ghi này */
		readonly AsyncOperationId: string;
		/** Mã định danh duy nhất của công việc xóa hàng loạt. */
		readonly BulkDeleteOperationId: string;
		/** Mã định danh duy nhất của người dùng đã tạo công việc xóa hàng loạt. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo công việc xóa hàng loạt. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bulkdeleteoperation. */
		readonly CreatedOnBehalfBy: string;
		/** Số lượng bản ghi không thể xóa được bằng công việc xóa hàng loạt. */
		readonly FailureCount: number;
		/** Thông tin về việc có xác định lặp lại cho công việc xóa hàng loạt hay không. */
		readonly IsRecurring: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi công việc xóa hàng loạt lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi công việc xóa hàng loạt lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bulkdeleteoperation lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của công việc xóa hàng loạt. */
		readonly Name: string;
		/** Thời gian theo lịch tiếp theo để chạy công việc xóa hàng loạt. */
		readonly NextRun_UtcDateAndTime: Date;
		/** XML tìm nạp dữ liệu của loạt truy vấn được yêu cầu. */
		readonly OrderedQuerySetXml: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Đơn vị kinh doanh sở hữu công việc xóa hàng loạt. */
		readonly OwningBusinessUnit: string;
		/** Người dùng của doanh nghiệp sở hữu thao tác xóa hàng loạt. */
		readonly OwningUser: string;
		/** Chỉ mục của việc trình bày truy vấn được yêu cầu xác định loạt xóa. */
		readonly ProcessingQEIndex: number;
		/** Trạng thái của công việc xóa hàng loạt. */
		readonly StateCode: OptionSet.BulkDeleteOperation.StateCode;
		/** Lý do cho trạng thái của công việc xóa hàng loạt. */
		readonly StatusCode: OptionSet.BulkDeleteOperation.StatusCode;
		/** Số lượng bản ghi đã bị xóa bằng công việc xóa hàng loạt. */
		readonly SuccessCount: number;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của công việc hệ thống đã tạo bản ghi này */
			readonly AsyncOperationId: string;
			/** Mã định danh duy nhất của công việc xóa hàng loạt. */
			readonly BulkDeleteOperationId: string;
			/** Mã định danh duy nhất của người dùng đã tạo công việc xóa hàng loạt. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo công việc xóa hàng loạt. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bulkdeleteoperation. */
			readonly CreatedOnBehalfBy: string;
			/** Số lượng bản ghi không thể xóa được bằng công việc xóa hàng loạt. */
			readonly FailureCount: string;
			/** Thông tin về việc có xác định lặp lại cho công việc xóa hàng loạt hay không. */
			readonly IsRecurring: string;
			/** Mã định danh duy nhất của người dùng sửa đổi công việc xóa hàng loạt lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi công việc xóa hàng loạt lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bulkdeleteoperation lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của công việc xóa hàng loạt. */
			readonly Name: string;
			/** Thời gian theo lịch tiếp theo để chạy công việc xóa hàng loạt. */
			readonly NextRun_UtcDateAndTime: string;
			/** XML tìm nạp dữ liệu của loạt truy vấn được yêu cầu. */
			readonly OrderedQuerySetXml: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Đơn vị kinh doanh sở hữu công việc xóa hàng loạt. */
			readonly OwningBusinessUnit: string;
			/** Người dùng của doanh nghiệp sở hữu thao tác xóa hàng loạt. */
			readonly OwningUser: string;
			/** Chỉ mục của việc trình bày truy vấn được yêu cầu xác định loạt xóa. */
			readonly ProcessingQEIndex: string;
			/** Trạng thái của công việc xóa hàng loạt. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của công việc xóa hàng loạt. */
			readonly StatusCode: string;
			/** Số lượng bản ghi đã bị xóa bằng công việc xóa hàng loạt. */
			readonly SuccessCount: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace BulkDeleteOperation {
		enum StateCode {
			/** 3 */
			Da_hoan_thanh,
			/** 2 */
			Da_khoa,
			/** 1 */
			Da_treo,
			/** 0 */
			San_sang
		}
		enum StatusCode {
			/** 32 */
			Da_huy,
			/** 12 */
			Da_tam_dung,
			/** 30 */
			Da_thanh_cong,
			/** 10 */
			Dang_cho,
			/** 0 */
			Dang_cho_nguon_luc,
			/** 22 */
			Dang_huy,
			/** 21 */
			Dang_tam_dung,
			/** 11 */
			Dang_thu_lai,
			/** 20 */
			Dang_tien_hanh,
			/** 31 */
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