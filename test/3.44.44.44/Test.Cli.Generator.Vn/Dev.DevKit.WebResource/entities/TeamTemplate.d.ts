//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTeamTemplate {
		interface tab_general_Sections {
			Access_Rights: DevKit.Controls.Section;
			Description: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Mặt nạ quyền truy cập mặc định cho truy cập nhóm liên kết với phiên bản thực thể. */
			DefaultAccessRightsMask: DevKit.Controls.Integer;
			/** Nhập thông tin thêm mô tả nhóm. */
			Description: DevKit.Controls.String;
			/** Mã loại đối tượng của thực thể đã bật cho nhóm truy cập */
			ObjectTypeCode: DevKit.Controls.Integer;
			/** Nhập tên của mẫu nhóm. */
			TeamTemplateName: DevKit.Controls.String;
		}
		interface Navigation {
			teamtemplate_Teams: DevKit.Controls.NavigationItem
		}
	}
	class FormTeamTemplate extends DevKit.IForm {
		/**
		* TeamTemplate [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TeamTemplate */
		Body: DevKit.FormTeamTemplate.Body;
		/** The Navigation of form TeamTemplate */
		Navigation: DevKit.FormTeamTemplate.Navigation;
		/** The SidePanes of form TeamTemplate */
		SidePanes: DevKit.SidePanes;
	}
	class TeamTemplateApi {
		/**
		* DynamicsCrm.DevKit TeamTemplateApi
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
		readonly ComponentState: OptionSet.TeamTemplate.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo mẫu nhóm. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo mẫu nhóm. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo mẫu nhóm. */
		readonly CreatedOnBehalfBy: string;
		/** Mặt nạ quyền truy cập mặc định cho truy cập nhóm liên kết với phiên bản thực thể. */
		DefaultAccessRightsMask: number;
		/** Nhập thông tin thêm mô tả nhóm. */
		Description: string;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Thông tin về khả năng mẫu nhóm này là người dùng hoặc hệ thống đã xác định. */
		readonly IsSystem: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa mẫu nhóm lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi mẫu nhóm lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa mẫu nhóm lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã loại đối tượng của thực thể đã bật cho nhóm truy cập */
		ObjectTypeCode: number;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của mẫu nhóm. */
		TeamTemplateId: string;
		/** Nhập tên của mẫu nhóm. */
		TeamTemplateName: string;
		/** Version number for team template. */
		readonly versionnumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo mẫu nhóm. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo mẫu nhóm. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo mẫu nhóm. */
			readonly CreatedOnBehalfBy: string;
			/** Mặt nạ quyền truy cập mặc định cho truy cập nhóm liên kết với phiên bản thực thể. */
			readonly DefaultAccessRightsMask: string;
			/** Nhập thông tin thêm mô tả nhóm. */
			readonly Description: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Thông tin về khả năng mẫu nhóm này là người dùng hoặc hệ thống đã xác định. */
			readonly IsSystem: string;
			/** Mã định danh duy nhất của người dùng đã sửa mẫu nhóm lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi mẫu nhóm lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa mẫu nhóm lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã loại đối tượng của thực thể đã bật cho nhóm truy cập */
			readonly ObjectTypeCode: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của mẫu nhóm. */
			readonly TeamTemplateId: string;
			/** Nhập tên của mẫu nhóm. */
			readonly TeamTemplateName: string;
			/** Version number for team template. */
			readonly versionnumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TeamTemplate {
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