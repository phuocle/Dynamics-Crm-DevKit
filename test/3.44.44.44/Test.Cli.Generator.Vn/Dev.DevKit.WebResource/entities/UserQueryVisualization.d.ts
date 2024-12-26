//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserQueryVisualizationApi {
		/**
		* DynamicsCrm.DevKit UserQueryVisualizationApi
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
		/** Cho biết thư viện có được dùng để truy trực quan hóa hay không. */
		ChartType: OptionSet.UserQueryVisualization.ChartType;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Hiện trường dùng để hiển thị dữ liệu trong biểu đồ, lưu trữ trong định dạng XML. */
		DataDescription: string;
		/** Nhập thông tin bổ sung để mô tả biểu đồ như tiêu chí bộ lọc hoặc khán giả đã dự kiến. */
		Description: string;
		/** Chọn khả năng biểu đồ là biểu đồ mặc định cho dạng xem sẽ liên kết với biểu đồ. */
		IsDefault: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả cho biểu đồ. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu biểu đồ người dùng. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của nhóm sở hữu biểu đồ người dùng. */
		readonly OwningUser: string;
		/** Chứa chi tiết định dạng của biểu đồ và thuộc tính trình bày, đã lưu trữ trong định dạng XML. */
		PresentationDescription: string;
		/** Mã định danh duy nhất của biểu đồ người dùng. */
		UserQueryVisualizationId: string;
		/** Số phiên bản của biểu đồ người dùng. */
		readonly VersionNumber: number;
		/** Cho biết tài nguyên web sẽ hiện thị trong biểu đồ cho người dùng. */
		WebResourceId: string;
		readonly FormattedValue: {
			/** Cho biết thư viện có được dùng để truy trực quan hóa hay không. */
			readonly ChartType: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Hiện trường dùng để hiển thị dữ liệu trong biểu đồ, lưu trữ trong định dạng XML. */
			readonly DataDescription: string;
			/** Nhập thông tin bổ sung để mô tả biểu đồ như tiêu chí bộ lọc hoặc khán giả đã dự kiến. */
			readonly Description: string;
			/** Chọn khả năng biểu đồ là biểu đồ mặc định cho dạng xem sẽ liên kết với biểu đồ. */
			readonly IsDefault: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả cho biểu đồ. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu biểu đồ người dùng. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của nhóm sở hữu biểu đồ người dùng. */
			readonly OwningUser: string;
			/** Chứa chi tiết định dạng của biểu đồ và thuộc tính trình bày, đã lưu trữ trong định dạng XML. */
			readonly PresentationDescription: string;
			/** Mã định danh duy nhất của biểu đồ người dùng. */
			readonly UserQueryVisualizationId: string;
			/** Số phiên bản của biểu đồ người dùng. */
			readonly VersionNumber: string;
			/** Cho biết tài nguyên web sẽ hiện thị trong biểu đồ cho người dùng. */
			readonly WebResourceId: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserQueryVisualization {
		enum ChartType {
			/** 0 */
			Bieu_do_ASPNET,
			/** 1 */
			Power_BI
		}
		enum PrimaryEntityTypeCode {
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