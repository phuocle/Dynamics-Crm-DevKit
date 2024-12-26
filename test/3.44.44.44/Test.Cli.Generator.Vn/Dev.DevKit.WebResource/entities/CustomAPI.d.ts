//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Loại bước xử lý tùy chỉnh được cho phép */
			AllowedCustomProcessingStepType: DevKit.Controls.OptionSet;
			/** Loại ràng buộc của API tùy chỉnh */
			BindingType: DevKit.Controls.OptionSet;
			/** Tên logic của thực thể ràng buộc với API tùy chỉnh */
			BoundEntityLogicalName: DevKit.Controls.String;
			/** Thông tin mô tả đã bản địa hóa cho các phiên bản API tùy chỉnh */
			Description: DevKit.Controls.String;
			/** Tên hiển thị đã bản địa hóa cho các phiên bản API tùy chỉnh */
			DisplayName: DevKit.Controls.String;
			/** Tên của đặc quyền cho phép thực thi API tùy chỉnh */
			ExecutePrivilegeName: DevKit.Controls.String;
			/** Cho biết API tùy chỉnh có phải là một hàm (hỗ trợ GET) hay không (hỗ trợ POST) */
			IsFunction: DevKit.Controls.Boolean;
			/** Cho biết API tùy chỉnh có ở chế độ riêng tư (ẩn khỏi siêu dữ liệu và tài liệu) hay không */
			IsPrivate: DevKit.Controls.Boolean;
			/** Tên chính của API tùy chỉnh */
			Name: DevKit.Controls.String;
			/** ID Chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			PluginTypeId: DevKit.Controls.Lookup;
			/** Tên duy nhất cho API tùy chỉnh */
			UniqueName: DevKit.Controls.String;
			/** Cho biết liệu API tùy chỉnh có được bật dưới dạng hành động quy trình làm việc hay không */
			WorkflowSdkStepEnabled: DevKit.Controls.Boolean;
		}
		interface Navigation {
			AIPluginOperation_CustomAPI_CustomAPI: DevKit.Controls.NavigationItem,
			catalogassignment_customapi: DevKit.Controls.NavigationItem,
			customapi_customapirequestparameter: DevKit.Controls.NavigationItem,
			customapi_customapiresponseproperty: DevKit.Controls.NavigationItem,
			customapi_serviceplanmapping: DevKit.Controls.NavigationItem,
			fabricaiskill_customapiid: DevKit.Controls.NavigationItem,
			msdyn_customapi_msdyn_pmbusinessruleautomationconfig_CustomApiId: DevKit.Controls.NavigationItem,
			msdyn_knowledgeassetconfiguration_customapiid: DevKit.Controls.NavigationItem
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
	class CustomAPIApi {
		/**
		* DynamicsCrm.DevKit CustomAPIApi
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
		/** Loại bước xử lý tùy chỉnh được cho phép */
		AllowedCustomProcessingStepType: OptionSet.CustomAPI.AllowedCustomProcessingStepType;
		/** Loại ràng buộc của API tùy chỉnh */
		BindingType: OptionSet.CustomAPI.BindingType;
		/** Tên logic của thực thể ràng buộc với API tùy chỉnh */
		BoundEntityLogicalName: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.CustomAPI.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của các phiên bản API tùy chỉnh */
		CustomAPIId: string;
		/** Thông tin mô tả đã bản địa hóa cho các phiên bản API tùy chỉnh */
		Description: string;
		/** Tên hiển thị đã bản địa hóa cho các phiên bản API tùy chỉnh */
		DisplayName: string;
		/** Tên của đặc quyền cho phép thực thi API tùy chỉnh */
		ExecutePrivilegeName: string;
		/** Unique identifier for fxexpression associated with Custom API. */
		FxExpressionId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Cho biết API tùy chỉnh có phải là một hàm (hỗ trợ GET) hay không (hỗ trợ POST) */
		IsFunction: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Cho biết API tùy chỉnh có ở chế độ riêng tư (ẩn khỏi siêu dữ liệu và tài liệu) hay không */
		IsPrivate: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên chính của API tùy chỉnh */
		Name: string;
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
		PluginTypeId: string;
		/** Unique identifier for powerfxrule associated with Custom API. */
		PowerfxRuleId: string;
		SdkMessageId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của API tùy chỉnh */
		statecode: OptionSet.CustomAPI.statecode;
		/** Lý do dẫn đến trạng thái của API tùy chỉnh */
		statuscode: OptionSet.CustomAPI.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tên duy nhất cho API tùy chỉnh */
		UniqueName: string;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Cho biết liệu API tùy chỉnh có được bật dưới dạng hành động quy trình làm việc hay không */
		WorkflowSdkStepEnabled: boolean;
		readonly FormattedValue: {
			/** Loại bước xử lý tùy chỉnh được cho phép */
			readonly AllowedCustomProcessingStepType: string;
			/** Loại ràng buộc của API tùy chỉnh */
			readonly BindingType: string;
			/** Tên logic của thực thể ràng buộc với API tùy chỉnh */
			readonly BoundEntityLogicalName: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của các phiên bản API tùy chỉnh */
			readonly CustomAPIId: string;
			/** Thông tin mô tả đã bản địa hóa cho các phiên bản API tùy chỉnh */
			readonly Description: string;
			/** Tên hiển thị đã bản địa hóa cho các phiên bản API tùy chỉnh */
			readonly DisplayName: string;
			/** Tên của đặc quyền cho phép thực thi API tùy chỉnh */
			readonly ExecutePrivilegeName: string;
			/** Unique identifier for fxexpression associated with Custom API. */
			readonly FxExpressionId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Cho biết API tùy chỉnh có phải là một hàm (hỗ trợ GET) hay không (hỗ trợ POST) */
			readonly IsFunction: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Cho biết API tùy chỉnh có ở chế độ riêng tư (ẩn khỏi siêu dữ liệu và tài liệu) hay không */
			readonly IsPrivate: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên chính của API tùy chỉnh */
			readonly Name: string;
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
			readonly PluginTypeId: string;
			/** Unique identifier for powerfxrule associated with Custom API. */
			readonly PowerfxRuleId: string;
			readonly SdkMessageId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của API tùy chỉnh */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của API tùy chỉnh */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tên duy nhất cho API tùy chỉnh */
			readonly UniqueName: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Cho biết liệu API tùy chỉnh có được bật dưới dạng hành động quy trình làm việc hay không */
			readonly WorkflowSdkStepEnabled: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomAPI {
		enum AllowedCustomProcessingStepType {
			/** 1 */
			Chi_khong_dong_bo,
			/** 2 */
			Dong_bo_va_khong_dong_bo,
			/** 0 */
			Khong_co
		}
		enum BindingType {
			/** 2 */
			Bo_suu_tap_thuc_the,
			/** 1 */
			Thuc_the,
			/** 0 */
			Toan_cau
		}
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
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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