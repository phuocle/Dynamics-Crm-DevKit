//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			role_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Mã định danh duy nhất của người dùng đã tạo vai trò. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo vai trò. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng sửa đổi vai trò lần cuối. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi vai trò lần cuối. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Tên của vai trò. */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của vai trò cấp trên. */
			ParentRoleId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			role_parent_role: DevKit.Controls.NavigationItem,
			role_parent_root_role: DevKit.Controls.NavigationItem
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
	class RoleApi {
		/**
		* DynamicsCrm.DevKit RoleApi
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
		/** Personas/Licenses the security role applies to */
		AppliesTo: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh có liên kết với vai trò. */
		BusinessUnitId: string;
		/** Cho biết bạn có thể xóa vai trò hay không. */
		CanBeDeleted: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.Role.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo vai trò. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo vai trò. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo vai trò. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the security role */
		Description: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Value indicating whether security role is auto-assigned based on user license */
		IsAutoAssigned: OptionSet.Role.IsAutoAssigned;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Vai trò được người dùng kế thừa từ tư cách thành viên nhóm nếu vai trò có liên kết với nhóm. */
		IsInherited: OptionSet.Role.IsInherited;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi vai trò lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi vai trò lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa vai trò lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của vai trò. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với vai trò. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của vai trò cấp trên. */
		readonly ParentRoleId: string;
		/** Mã định danh duy nhất của vai trò gốc. */
		readonly ParentRootRoleId: string;
		/** Mã định danh duy nhất của vai trò. */
		RoleId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly RoleIdUnique: string;
		/** Mã định danh duy nhất của mẫu vai trò liên kết với vai trò. */
		readonly RoleTemplateId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Summary of Core Table Permissions of the Role */
		SummaryofCoreTablePermissions: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số phiên bản của vai trò. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Personas/Licenses the security role applies to */
			readonly AppliesTo: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh có liên kết với vai trò. */
			readonly BusinessUnitId: string;
			/** Cho biết bạn có thể xóa vai trò hay không. */
			readonly CanBeDeleted: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo vai trò. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo vai trò. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo vai trò. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the security role */
			readonly Description: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Value indicating whether security role is auto-assigned based on user license */
			readonly IsAutoAssigned: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Vai trò được người dùng kế thừa từ tư cách thành viên nhóm nếu vai trò có liên kết với nhóm. */
			readonly IsInherited: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi vai trò lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi vai trò lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa vai trò lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của vai trò. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với vai trò. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của vai trò cấp trên. */
			readonly ParentRoleId: string;
			/** Mã định danh duy nhất của vai trò gốc. */
			readonly ParentRootRoleId: string;
			/** Mã định danh duy nhất của vai trò. */
			readonly RoleId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RoleIdUnique: string;
			/** Mã định danh duy nhất của mẫu vai trò liên kết với vai trò. */
			readonly RoleTemplateId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Summary of Core Table Permissions of the Role */
			readonly SummaryofCoreTablePermissions: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số phiên bản của vai trò. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Role {
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
		enum IsAutoAssigned {
			/** 0 */
			No,
			/** 1 */
			Yes
		}
		enum IsInherited {
			/** 1 */
			Cac_dac_quyen_Nhom_va_cap_do_truy_cap_Nguoi_dung_truc_tiep_Co_ban,
			/** 0 */
			Chi_dac_quyen_nhom
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