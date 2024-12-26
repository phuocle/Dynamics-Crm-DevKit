//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SavedQueryVisualizationApi {
		/**
		* DynamicsCrm.DevKit SavedQueryVisualizationApi
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
		/** Cho biết bạn có thể xóa trực quan hóa về truy vấn đã lưu hay không. */
		CanBeDeleted: string;
		/** Cho biết thư viện có được dùng để truy trực quan hóa hay không. */
		ChartType: OptionSet.SavedQueryVisualization.ChartType;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SavedQueryVisualization.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo biểu đồ hệ thống. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo biểu đồ hệ thống. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo biểu đồ hệ thống. */
		readonly CreatedOnBehalfBy: string;
		/** Chuỗi XML dùng để xác định dữ liệu cơ sở dành cho biểu đồ hệ thống. */
		DataDescription: string;
		/** Mô tả của biểu đồ hệ thống. */
		Description: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Chỉ định khả năng biểu đồ hệ thống là biểu đồ mặc định cho thực thể. */
		IsDefault: boolean;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi biểu đồ hệ thống lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi biểu đồ hệ thống lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi biểu đồ hệ thống lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của biểu đồ hệ thống. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với biểu đồ hệ thống. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Chuỗi XML dùng để xác định thuộc tính trình bày của biểu đồ hệ thống. */
		PresentationDescription: string;
		/** Mã định danh duy nhất của biểu đồ hệ thống. */
		SavedQueryVisualizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SavedQueryVisualizationIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ định nơi sẽ sử dụng biểu đồ, 0 cho trung tâm dữ liệu cũng như trung tâm tương tác và 1 chỉ cho trung tâm tương tác */
		Type: OptionSet.SavedQueryVisualization.Type;
		/** Số phiên bản của biểu đồ hệ thống. */
		readonly VersionNumber: number;
		/** Mã định danh duy nhất của tài nguyên web sẽ hiện thị trong biểu đồ hệ thống. */
		WebResourceId: string;
		readonly FormattedValue: {
			/** Cho biết bạn có thể xóa trực quan hóa về truy vấn đã lưu hay không. */
			readonly CanBeDeleted: string;
			/** Cho biết thư viện có được dùng để truy trực quan hóa hay không. */
			readonly ChartType: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo biểu đồ hệ thống. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo biểu đồ hệ thống. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo biểu đồ hệ thống. */
			readonly CreatedOnBehalfBy: string;
			/** Chuỗi XML dùng để xác định dữ liệu cơ sở dành cho biểu đồ hệ thống. */
			readonly DataDescription: string;
			/** Mô tả của biểu đồ hệ thống. */
			readonly Description: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Chỉ định khả năng biểu đồ hệ thống là biểu đồ mặc định cho thực thể. */
			readonly IsDefault: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi biểu đồ hệ thống lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi biểu đồ hệ thống lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi biểu đồ hệ thống lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của biểu đồ hệ thống. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với biểu đồ hệ thống. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Chuỗi XML dùng để xác định thuộc tính trình bày của biểu đồ hệ thống. */
			readonly PresentationDescription: string;
			/** Mã định danh duy nhất của biểu đồ hệ thống. */
			readonly SavedQueryVisualizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SavedQueryVisualizationIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ định nơi sẽ sử dụng biểu đồ, 0 cho trung tâm dữ liệu cũng như trung tâm tương tác và 1 chỉ cho trung tâm tương tác */
			readonly Type: string;
			/** Số phiên bản của biểu đồ hệ thống. */
			readonly VersionNumber: string;
			/** Mã định danh duy nhất của tài nguyên web sẽ hiện thị trong biểu đồ hệ thống. */
			readonly WebResourceId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SavedQueryVisualization {
		enum ChartType {
			/** 0 */
			Bieu_do_ASPNET,
			/** 1 */
			Power_BI
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
		enum PrimaryEntityTypeCode {
		}
		enum Type {
			/** 1 */
			chi_cho_trung_tam_tuong_tac,
			/** 0 */
			cho_trung_tam_du_lieu_cung_nhu_trung_tam_tuong_tac
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