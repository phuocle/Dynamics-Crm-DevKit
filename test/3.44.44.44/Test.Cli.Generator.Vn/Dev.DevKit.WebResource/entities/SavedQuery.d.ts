//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			account_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Cho biết người tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Nhập thông tin bổ sung để mô tả dạng xem, như tiêu chí bộ lọc hoặc bộ kết quả mong đợi. */
			Description: DevKit.Controls.String;
			/** Cho biết có thể tùy chỉnh thành phần này hay không. */
			IsCustomizable: DevKit.Controls.String;
			/** Cho biết dạng xem có phải là mặc định đối với loại bản ghi đã chỉ định (thực thể) hay không. */
			IsDefault: DevKit.Controls.Boolean;
			/** Chọn khả năng tương thích của dạng xem với Tìm nhanh. Khi người dùng tìm kiếm mục cụ thể, bạn xác định trường tìm kiếm trong đó. */
			IsQuickFindQuery: DevKit.Controls.Boolean;
			/** Cho biết việc người dùng tạo dạng xem hay không. */
			IsUserDefined: DevKit.Controls.Boolean;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Nhập tên cho chế độ để mô tả chế độ sẽ chứa kết quả nào. Người dùng có thể thấy tên này trong danh sách Dạng xem. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {
			lk_mobileofflineprofileitem_savedquery: DevKit.Controls.NavigationItem
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
	class SavedQueryApi {
		/**
		* DynamicsCrm.DevKit SavedQueryApi
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
		/** Nhập tên cột mà hệ thống sẽ dùng để nhóm kết quả từ dữ liệu đã thu thập được trong nhiều bản ghi từ dạng xem hệ thống. */
		AdvancedGroupBy: string;
		/** Cho biết bạn có thể xóa dạng xem hay không. */
		CanBeDeleted: string;
		/** Chứa cột và tiêu chí sắp xếp cho dạng xem, lưu trữ theo định dạng XML. */
		ColumnSetXml: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SavedQuery.ComponentState;
		/** Nhập thông tin về cách định dạng các mục trong dạng xem hệ thống. */
		ConditionalFormatting: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung để mô tả dạng xem, như tiêu chí bộ lọc hoặc bộ kết quả mong đợi. */
		Description: string;
		/** Chuỗi xác định truy vấn theo ngôn ngữ XML tìm nạp dữ liệu. */
		FetchXml: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Cho biết người dùng có tạo dạng xem hay không. */
		readonly IsCustom: boolean;
		/** Cho biết có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Cho biết dạng xem có phải là mặc định đối với loại bản ghi đã chỉ định (thực thể) hay không. */
		IsDefault: boolean;
		/** Cho biết bản ghi có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Chỉ định toàn bộ tổ chức có thể xem mục này hay không. */
		readonly IsPrivate: boolean;
		/** Chọn khả năng tương thích của dạng xem với Tìm nhanh. Khi người dùng tìm kiếm mục cụ thể, bạn xác định trường tìm kiếm trong đó. */
		IsQuickFindQuery: boolean;
		/** Cho biết việc người dùng tạo dạng xem hay không. */
		readonly IsUserDefined: boolean;
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
		/** Nhập tên cho chế độ để mô tả chế độ sẽ chứa kết quả nào. Người dùng có thể thấy tên này trong danh sách Dạng xem. */
		Name: string;
		/** Chuỗi xác định truy vấn SQL tương ứng cho XML tìm nạp dữ liệu đã chỉ định để sử dụng ngoại tuyến. */
		OfflineSqlQuery: string;
		/** Chọn ID của tổ chức có bản ghi được liên kết. */
		readonly OrganizationId: string;
		/** Đối với tổ chức, nhập thứ tự thẻ để xác định cách người dùng điều hướng qua màn hình duy nhất với khóa Thẻ. */
		readonly OrganizationTabOrder: number;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly QueryAPI: string;
		/** Chỉ sử dụng nội bộ. */
		QueryAppUsage: number;
		/** Hiện loại truy vấn. */
		QueryType: number;
		/** Contains the role display conditions for the SavedQuery. */
		RoleDisplayConditionsXml: string;
		/** Mã định danh duy nhất của dạng xem. */
		SavedQueryId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SavedQueryIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Hiện lý do cho trạng thái của dạng xem. */
		StateCode: OptionSet.SavedQuery.StateCode;
		/** Hiện mã lý do giải thích trạng thái của bản ghi. */
		StatusCode: OptionSet.SavedQuery.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số phiên bản của dạng xem. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Nhập tên cột mà hệ thống sẽ dùng để nhóm kết quả từ dữ liệu đã thu thập được trong nhiều bản ghi từ dạng xem hệ thống. */
			readonly AdvancedGroupBy: string;
			/** Cho biết bạn có thể xóa dạng xem hay không. */
			readonly CanBeDeleted: string;
			/** Chứa cột và tiêu chí sắp xếp cho dạng xem, lưu trữ theo định dạng XML. */
			readonly ColumnSetXml: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Nhập thông tin về cách định dạng các mục trong dạng xem hệ thống. */
			readonly ConditionalFormatting: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung để mô tả dạng xem, như tiêu chí bộ lọc hoặc bộ kết quả mong đợi. */
			readonly Description: string;
			/** Chuỗi xác định truy vấn theo ngôn ngữ XML tìm nạp dữ liệu. */
			readonly FetchXml: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Cho biết người dùng có tạo dạng xem hay không. */
			readonly IsCustom: string;
			/** Cho biết có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Cho biết dạng xem có phải là mặc định đối với loại bản ghi đã chỉ định (thực thể) hay không. */
			readonly IsDefault: string;
			/** Cho biết bản ghi có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Chỉ định toàn bộ tổ chức có thể xem mục này hay không. */
			readonly IsPrivate: string;
			/** Chọn khả năng tương thích của dạng xem với Tìm nhanh. Khi người dùng tìm kiếm mục cụ thể, bạn xác định trường tìm kiếm trong đó. */
			readonly IsQuickFindQuery: string;
			/** Cho biết việc người dùng tạo dạng xem hay không. */
			readonly IsUserDefined: string;
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
			/** Nhập tên cho chế độ để mô tả chế độ sẽ chứa kết quả nào. Người dùng có thể thấy tên này trong danh sách Dạng xem. */
			readonly Name: string;
			/** Chuỗi xác định truy vấn SQL tương ứng cho XML tìm nạp dữ liệu đã chỉ định để sử dụng ngoại tuyến. */
			readonly OfflineSqlQuery: string;
			/** Chọn ID của tổ chức có bản ghi được liên kết. */
			readonly OrganizationId: string;
			/** Đối với tổ chức, nhập thứ tự thẻ để xác định cách người dùng điều hướng qua màn hình duy nhất với khóa Thẻ. */
			readonly OrganizationTabOrder: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly QueryAPI: string;
			/** Chỉ sử dụng nội bộ. */
			readonly QueryAppUsage: string;
			/** Hiện loại truy vấn. */
			readonly QueryType: string;
			/** Contains the role display conditions for the SavedQuery. */
			readonly RoleDisplayConditionsXml: string;
			/** Mã định danh duy nhất của dạng xem. */
			readonly SavedQueryId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SavedQueryIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Hiện lý do cho trạng thái của dạng xem. */
			readonly StateCode: string;
			/** Hiện mã lý do giải thích trạng thái của bản ghi. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số phiên bản của dạng xem. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SavedQuery {
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