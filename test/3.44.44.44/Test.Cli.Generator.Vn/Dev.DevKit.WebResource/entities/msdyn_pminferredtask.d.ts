//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Tên thực thể tùy chỉnh. */
			msdyn_name: DevKit.Controls.String;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_pminferredtask_msdyn_pmanalysishistory_parenttask: DevKit.Controls.NavigationItem,
			msdyn_msdyn_pminferredtask_msdyn_pmbusinessruleautomationconfig_PMInferredTaskId: DevKit.Controls.NavigationItem,
			msdyn_msdyn_pminferredtask_msdyn_pmprocesstemplate_pmnferredtaskid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask: DevKit.Controls.NavigationItem,
			msdyn_pminferredtask_msdyn_pmprocessusersettings_parenttask: DevKit.Controls.NavigationItem,
			msdyn_pminferredtask_msdyn_pmprocessversion: DevKit.Controls.NavigationItem,
			msdyn_pmsimulation_pminferredtaskid_msdyn_pminferredtask: DevKit.Controls.NavigationItem
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
	class msdyn_pminferredtaskApi {
		/**
		* DynamicsCrm.DevKit msdyn_pminferredtaskApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_pminferredtask.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Thông tin về lịch trình phân tích. */
		msdyn_analysisschedule: string;
		/** Dữ liệu được tính toán để thúc đẩy tự động hóa tác vụ này. */
		msdyn_automationdata: string;
		/** Trạng thái tự động hóa cho tác vụ này. */
		msdyn_automationstatus: OptionSet.msdyn_pminferredtask.msdyn_automationstatus;
		/** Thông tin về quá trình xác thực dữ liệu cho nguồn dữ liệu. */
		msdyn_datavalidation: string;
		msdyn_description: string;
		/** Vị trí của dữ liệu dùng làm đầu vào cho Phân tích tác vụ. */
		msdyn_inputdatabinding: string;
		/** Hiển thị xem báo cáo phân tích hiện đang có sẵn hay không. */
		msdyn_isreportavailable: boolean;
		/** Định danh duy nhất lần xử lý thành công gần đây nhất của tác vụ. */
		msdyn_iterationid: string;
		msdyn_lasterrors: string;
		readonly msdyn_lasterrorsreport_name: string;
		/** Ngày và giờ làm mới báo cáo tương ứng lần gần đây nhất. */
		msdyn_lastreportrefreshdate_TimezoneDateAndTime: Date;
		/** Tên thực thể tùy chỉnh. */
		msdyn_name: string;
		msdyn_outputdata: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		msdyn_pminferredtaskId: string;
		/** Dữ liệu liên quan đến báo cáo cho tác vụ này. */
		msdyn_reportdata: string;
		/** Trạng thái hiện tại của hoạt động cung cấp cho báo cáo được liên kết với tác vụ này. */
		msdyn_reportprovisioningstatus: OptionSet.msdyn_pminferredtask.msdyn_reportprovisioningstatus;
		msdyn_sharedrecordingmetadata: string;
		/** Nguồn dữ liệu của Tác vụ được suy luận PM này. */
		msdyn_source: OptionSet.msdyn_pminferredtask.msdyn_source;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Tác vụ được suy lận PM */
		statecode: OptionSet.msdyn_pminferredtask.statecode;
		/** Lý do dẫn đến trạng thái của Tác vụ được suy luận PM */
		statuscode: OptionSet.msdyn_pminferredtask.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Thông tin về lịch trình phân tích. */
			readonly msdyn_analysisschedule: string;
			/** Dữ liệu được tính toán để thúc đẩy tự động hóa tác vụ này. */
			readonly msdyn_automationdata: string;
			/** Trạng thái tự động hóa cho tác vụ này. */
			readonly msdyn_automationstatus: string;
			/** Thông tin về quá trình xác thực dữ liệu cho nguồn dữ liệu. */
			readonly msdyn_datavalidation: string;
			readonly msdyn_description: string;
			/** Vị trí của dữ liệu dùng làm đầu vào cho Phân tích tác vụ. */
			readonly msdyn_inputdatabinding: string;
			/** Hiển thị xem báo cáo phân tích hiện đang có sẵn hay không. */
			readonly msdyn_isreportavailable: string;
			/** Định danh duy nhất lần xử lý thành công gần đây nhất của tác vụ. */
			readonly msdyn_iterationid: string;
			readonly msdyn_lasterrors: string;
			readonly msdyn_lasterrorsreport_name: string;
			/** Ngày và giờ làm mới báo cáo tương ứng lần gần đây nhất. */
			readonly msdyn_lastreportrefreshdate_TimezoneDateAndTime: string;
			/** Tên thực thể tùy chỉnh. */
			readonly msdyn_name: string;
			readonly msdyn_outputdata: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly msdyn_pminferredtaskId: string;
			/** Dữ liệu liên quan đến báo cáo cho tác vụ này. */
			readonly msdyn_reportdata: string;
			/** Trạng thái hiện tại của hoạt động cung cấp cho báo cáo được liên kết với tác vụ này. */
			readonly msdyn_reportprovisioningstatus: string;
			readonly msdyn_sharedrecordingmetadata: string;
			/** Nguồn dữ liệu của Tác vụ được suy luận PM này. */
			readonly msdyn_source: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Tác vụ được suy lận PM */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Tác vụ được suy luận PM */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_pminferredtask {
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
		enum msdyn_automationstatus {
			/** 200000000 */
			Chua_bat_dau,
			/** 200000002 */
			Dang_tien_hanh,
			/** 200000003 */
			Hoan_thanh,
			/** 200000001 */
			Khong_duoc_de_xuat
		}
		enum msdyn_reportprovisioningstatus {
			/** 193350000 */
			Chua_bat_dau,
			/** 193350004 */
			Da_bo_qua,
			/** 193350002 */
			Da_cung_cap,
			/** 193350001 */
			Dang_cung_cap,
			/** 193350003 */
			Khong_thanh_cong
		}
		enum msdyn_source {
			/** 0 */
			Dang_ghi,
			/** 1 */
			Kho_du_lieu
		}
		enum statecode {
			/** 0 */
			Ban_nhap,
			/** 4 */
			Da_nhap,
			/** 1 */
			Dang_tien_hanh,
			/** 2 */
			Hoan_tat,
			/** 3 */
			Khong_thanh_cong
		}
		enum statuscode {
			/** 0 */
			Ban_nhap,
			/** 7 */
			Da_nhap,
			/** 4 */
			Da_phan_tich,
			/** 1 */
			Da_xep_hang_doi,
			/** 2 */
			Dang_phan_tich,
			/** 3 */
			Dang_xoa,
			/** 5 */
			Khong_phan_tich_duoc,
			/** 6 */
			Khong_xoa_duoc
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