//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			Information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thông tin bổ sung để mô tả dạng xem đã lưu như tiêu chí bộ lọc hoặc bộ kết quả mong đợi. */
			Description: DevKit.Controls.String;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Nhập tên mô tả cho dạng xem đã lưu. */
			Name: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
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
	class UserQueryApi {
		/**
		* DynamicsCrm.DevKit UserQueryApi
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
		/** Nhập tên cột hệ thống sẽ dùng để tập hợp kết quả từ dữ liệu đã thu thập được qua nhiều bản ghi từ dạng xem người dùng. */
		AdvancedGroupBy: string;
		/** Hiện cột và tiêu chí sắp xếp cho dạng xem đã lưu, lưu trữ trong định dạng XML. */
		ColumnSetXml: string;
		/** Nhập thông tin về cách định dạng các mục trong dạng xem người dùng. */
		ConditionalFormatting: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung để mô tả dạng xem đã lưu như tiêu chí bộ lọc hoặc bộ kết quả mong đợi. */
		Description: string;
		/** Chứa truy vấn XML Tìm nạp dữ liệu xác định thực thể và thuộc tính đã bao gồm trong dạng xem đã lưu. */
		FetchXml: string;
		/** Dữ liệu bố cục theo định dạng JSON. */
		LayoutJson: string;
		/** Chỉ sử dụng nội bộ. */
		LayoutXml: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả cho dạng xem đã lưu. */
		Name: string;
		/** Chuỗi xác định truy vấn SQL tương ứng cho XML tìm nạp dữ liệu đã chỉ định để sử dụng ngoại tuyến. */
		OfflineSqlQuery: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu dạng xem đã lưu này. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu dạng xem đã lưu này. */
		readonly OwningUser: string;
		/** Hiện mã cho loại truy vấn để chỉ định có phải dạng xem đã lưu là bộ lọc sổ địa chỉ, tìm kiếm nâng cao hoặc dạng xem khác. */
		QueryType: number;
		/** Hiện dạng xem đã lưu ở trạng thái hiện hoạt hay không hoạt động. */
		StateCode: OptionSet.UserQuery.StateCode;
		/** Chọn trạng thái của mục. */
		StatusCode: OptionSet.UserQuery.StatusCode;
		/** Mã định danh duy nhất của dạng xem đã lưu. */
		UserQueryId: string;
		/** Số phiên bản của dạng xem đã lưu. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Nhập tên cột hệ thống sẽ dùng để tập hợp kết quả từ dữ liệu đã thu thập được qua nhiều bản ghi từ dạng xem người dùng. */
			readonly AdvancedGroupBy: string;
			/** Hiện cột và tiêu chí sắp xếp cho dạng xem đã lưu, lưu trữ trong định dạng XML. */
			readonly ColumnSetXml: string;
			/** Nhập thông tin về cách định dạng các mục trong dạng xem người dùng. */
			readonly ConditionalFormatting: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung để mô tả dạng xem đã lưu như tiêu chí bộ lọc hoặc bộ kết quả mong đợi. */
			readonly Description: string;
			/** Chứa truy vấn XML Tìm nạp dữ liệu xác định thực thể và thuộc tính đã bao gồm trong dạng xem đã lưu. */
			readonly FetchXml: string;
			/** Dữ liệu bố cục theo định dạng JSON. */
			readonly LayoutJson: string;
			/** Chỉ sử dụng nội bộ. */
			readonly LayoutXml: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả cho dạng xem đã lưu. */
			readonly Name: string;
			/** Chuỗi xác định truy vấn SQL tương ứng cho XML tìm nạp dữ liệu đã chỉ định để sử dụng ngoại tuyến. */
			readonly OfflineSqlQuery: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu dạng xem đã lưu này. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu dạng xem đã lưu này. */
			readonly OwningUser: string;
			/** Hiện mã cho loại truy vấn để chỉ định có phải dạng xem đã lưu là bộ lọc sổ địa chỉ, tìm kiếm nâng cao hoặc dạng xem khác. */
			readonly QueryType: string;
			/** Hiện dạng xem đã lưu ở trạng thái hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của mục. */
			readonly StatusCode: string;
			/** Mã định danh duy nhất của dạng xem đã lưu. */
			readonly UserQueryId: string;
			/** Số phiên bản của dạng xem đã lưu. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserQuery {
		enum ReturnedTypeCode {
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
			Khong_hoat_dong,
			/** 3 */
			Tat_ca
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