//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			_B0A70B0D_568C_10D3_1A3D_01C997A061C1: DevKit.Controls.Section;
			step1: DevKit.Controls.Section;
			step2: DevKit.Controls.Section;
		}
		interface tab_reciprocalroles_Sections {
			roleGrid: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_reciprocalroles extends DevKit.Controls.ITab {
			Section: tab_reciprocalroles_Sections;
		}
		interface Tabs {
			general: tab_general;
			reciprocalroles: tab_reciprocalroles;
		}
		interface Body {
			Tab: Tabs;
			/** Thể loại cho vai trò kết nối. */
			Category: DevKit.Controls.OptionSet;
			/** Mô tả về vai trò kết nối. */
			Description: DevKit.Controls.String;
			/** Tên của vai trò kết nối. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {

		}
		interface Grid {
			reciprocalRoleGrid: DevKit.Controls.Grid;
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
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class ConnectionRoleApi {
		/**
		* DynamicsCrm.DevKit ConnectionRoleApi
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
		/** Thể loại cho vai trò kết nối. */
		Category: OptionSet.ConnectionRole.Category;
		/** Trạng thái của thành phần. */
		readonly ComponentState: OptionSet.ConnectionRole.ComponentState;
		/** Mã định danh duy nhất của vai trò kết nối. */
		ConnectionRoleId: string;
		/** Mã định danh duy nhất của bản ghi vai trò kết nối đã phát hành hoặc chưa phát hành. */
		readonly ConnectionRoleIdUnique: string;
		/** Mã định danh duy nhất của người dùng đã tạo vai trò của mối quan hệ. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo vai trò kết nối. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo vai trò của mối quan hệ. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả về vai trò kết nối. */
		Description: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi vai trò kết nối lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi vai trò kết nối lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi vai trò của mối quan hệ. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của vai trò kết nối. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có vai trò kết nối này. */
		readonly OrganizationId: string;
		/** Ngày và giờ ghi đè bản ghi lần cuối. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Trạng thái của vai trò kết nối. */
		StateCode: OptionSet.ConnectionRole.StateCode;
		/** Lý do cho trạng thái của vai trò kết nối. */
		StatusCode: OptionSet.ConnectionRole.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số phiên bản của vai trò kết nối. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Thể loại cho vai trò kết nối. */
			readonly Category: string;
			/** Trạng thái của thành phần. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của vai trò kết nối. */
			readonly ConnectionRoleId: string;
			/** Mã định danh duy nhất của bản ghi vai trò kết nối đã phát hành hoặc chưa phát hành. */
			readonly ConnectionRoleIdUnique: string;
			/** Mã định danh duy nhất của người dùng đã tạo vai trò của mối quan hệ. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo vai trò kết nối. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo vai trò của mối quan hệ. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả về vai trò kết nối. */
			readonly Description: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi vai trò kết nối lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi vai trò kết nối lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi vai trò của mối quan hệ. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của vai trò kết nối. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có vai trò kết nối này. */
			readonly OrganizationId: string;
			/** Ngày và giờ ghi đè bản ghi lần cuối. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Trạng thái của vai trò kết nối. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của vai trò kết nối. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số phiên bản của vai trò kết nối. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ConnectionRole {
		enum Category {
			/** 4 */
			Ban_hang,
			/** 1000 */
			Ben_lien_quan,
			/** 1002 */
			Dich_vu,
			/** 1 */
			Doanh_nghiep,
			/** 2 */
			Gia_dinh,
			/** 5 */
			Khac,
			/** 1001 */
			Nhom_Ban_hang,
			/** 3 */
			Xa_hoi
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
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
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