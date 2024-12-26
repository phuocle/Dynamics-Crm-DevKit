//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PluginTypeApi {
		/**
		* DynamicsCrm.DevKit PluginTypeApi
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
		/** Tên đường dẫn đầy đủ của cụm tổ hợp bổ trợ. */
		readonly AssemblyName: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.PluginType.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo loại bổ trợ. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo loại bổ trợ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo plugintype. */
		readonly CreatedOnBehalfBy: string;
		/** Mã văn hóa dành cho cụm tổ hợp bổ trợ. */
		readonly Culture: string;
		/** Cấp độ tùy chỉnh của loại bổ trợ. */
		readonly CustomizationLevel: number;
		/** Thông tin Loại hoạt động tùy chỉnh đã xếp chuỗi theo thứ tự, bao gồm đối số bắt buộc. Để biết thêm thông tin, bạn có thể xem SandboxCustomActivityInfo. */
		readonly CustomWorkflowActivityInfo: string;
		/** Mô tả của loại bổ trợ. */
		Description: string;
		/** Tên dễ nhớ dành cho phần bổ trợ. */
		FriendlyName: string;
		readonly IsManaged: boolean;
		/** Cho biết phần bổ trợ có phải là hoạt động tùy chỉnh cho hoạt động của quy trình không. */
		readonly IsWorkflowActivity: boolean;
		/** Phần chính của số phiên bản cụm tổ hợp cho loại bổ trợ. */
		readonly Major: number;
		/** Phần phụ của số phiên bản cụm tổ hợp cho loại bổ trợ. */
		readonly Minor: number;
		/** Mã định danh duy nhất của người dùng đã sửa loại bổ trợ lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa loại bổ trợ lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa plugintype lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của loại bổ trợ. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với loại bổ trợ. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của cụm tổ hợp bổ trợ có chứa loại bổ trợ này. */
		PluginAssemblyId: string;
		PluginTypeExportKey: string;
		/** Mã định danh duy nhất của loại bổ trợ. */
		PluginTypeId: string;
		/** Mã định danh duy nhất của loại bổ trợ. */
		readonly PluginTypeIdUnique: string;
		/** Mã thông báo khóa công khai của cụm tổ hợp dành cho loại bổ trợ. */
		readonly PublicKeyToken: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Tên loại hoàn toàn hợp lệ của loại bổ trợ. */
		TypeName: string;
		/** Số phiên bản cụm tổ hợp cho loại bổ trợ. */
		readonly Version: string;
		readonly VersionNumber: number;
		/** Tên nhóm hoạt động tùy chỉnh của quy trình làm việc. */
		WorkflowActivityGroupName: string;
		readonly FormattedValue: {
			/** Tên đường dẫn đầy đủ của cụm tổ hợp bổ trợ. */
			readonly AssemblyName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo loại bổ trợ. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo loại bổ trợ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo plugintype. */
			readonly CreatedOnBehalfBy: string;
			/** Mã văn hóa dành cho cụm tổ hợp bổ trợ. */
			readonly Culture: string;
			/** Cấp độ tùy chỉnh của loại bổ trợ. */
			readonly CustomizationLevel: string;
			/** Thông tin Loại hoạt động tùy chỉnh đã xếp chuỗi theo thứ tự, bao gồm đối số bắt buộc. Để biết thêm thông tin, bạn có thể xem SandboxCustomActivityInfo. */
			readonly CustomWorkflowActivityInfo: string;
			/** Mô tả của loại bổ trợ. */
			readonly Description: string;
			/** Tên dễ nhớ dành cho phần bổ trợ. */
			readonly FriendlyName: string;
			readonly IsManaged: string;
			/** Cho biết phần bổ trợ có phải là hoạt động tùy chỉnh cho hoạt động của quy trình không. */
			readonly IsWorkflowActivity: string;
			/** Phần chính của số phiên bản cụm tổ hợp cho loại bổ trợ. */
			readonly Major: string;
			/** Phần phụ của số phiên bản cụm tổ hợp cho loại bổ trợ. */
			readonly Minor: string;
			/** Mã định danh duy nhất của người dùng đã sửa loại bổ trợ lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa loại bổ trợ lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa plugintype lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của loại bổ trợ. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với loại bổ trợ. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của cụm tổ hợp bổ trợ có chứa loại bổ trợ này. */
			readonly PluginAssemblyId: string;
			readonly PluginTypeExportKey: string;
			/** Mã định danh duy nhất của loại bổ trợ. */
			readonly PluginTypeId: string;
			/** Mã định danh duy nhất của loại bổ trợ. */
			readonly PluginTypeIdUnique: string;
			/** Mã thông báo khóa công khai của cụm tổ hợp dành cho loại bổ trợ. */
			readonly PublicKeyToken: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Tên loại hoàn toàn hợp lệ của loại bổ trợ. */
			readonly TypeName: string;
			/** Số phiên bản cụm tổ hợp cho loại bổ trợ. */
			readonly Version: string;
			readonly VersionNumber: string;
			/** Tên nhóm hoạt động tùy chỉnh của quy trình làm việc. */
			readonly WorkflowActivityGroupName: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginType {
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