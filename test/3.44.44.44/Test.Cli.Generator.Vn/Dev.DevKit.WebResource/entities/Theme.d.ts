//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChu_de {
		interface tab_general_Sections {
			theme_information: DevKit.Controls.Section;
			theme_navigation: DevKit.Controls.Section;
			theme_ui_elements: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn màu chủ đề phụ cho Giao diện Hợp nhất được dùng trên kiểm soát quy trình */
			AccentColor: DevKit.Controls.String;
			/** Chỉ sử dụng nội bộ. */
			BackgroundColor: DevKit.Controls.String;
			/** Chọn màu mà các điều khiển sẽ sử dụng cho đường viền */
			ControlBorder: DevKit.Controls.String;
			/** Chọn màu nền cho các kiểm soát sẽ sử dụng để cho biết khi bạn di chuột qua các mục */
			ControlShade: DevKit.Controls.String;
			/** Chọn màu thực thể tùy chỉnh mặc định nếu không có màu nào được gán */
			DefaultCustomEntityColor: DevKit.Controls.String;
			/** Chọn màu mặc định cho các thực thể hệ thống nếu không có màu nào được gán */
			DefaultEntityColor: DevKit.Controls.String;
			/** Chọn màu cho tất cả các liên kết, chẳng hạn như địa chỉ email và liên kết tra cứu, và cho tất cả các nút được tập trung */
			GlobalLinkColor: DevKit.Controls.String;
			/** Chọn màu cho văn bản tiêu đề, chẳng hạn như các nhãn thẻ của biểu mẫu */
			HeaderColor: DevKit.Controls.String;
			/** Chọn màu mà các lệnh hoặc danh sách sẽ sử dụng để cho biết các mục được di chuột qua */
			HoverLinkEffect: DevKit.Controls.String;
			/** Tải lên tài nguyên web để sử dụng làm logo. Kích thước được khuyến nghị là cao 50 pixel và rộng tối đa 400. */
			LogoId: DevKit.Controls.Lookup;
			/** Nhập văn bản sẽ được dùng làm công cụ chú giải và văn bản thay thế cho logo. */
			LogoToolTip: DevKit.Controls.String;
			/** Chọn màu chủ đề chính cho Giao diện Hợp nhất được dùng trên thanh lệnh, các nút và thẻ chính */
			MainColor: DevKit.Controls.String;
			/** Tên của Thực thể Chủ đề. */
			Name: DevKit.Controls.String;
			/** Chọn màu nền của Thanh Điều hướng chính */
			NavBarBackgroundColor: DevKit.Controls.String;
			/** Chọn màu nền của Thanh Điều hướng phụ */
			NavBarShelfColor: DevKit.Controls.String;
			/** Chọn màu nền của tiêu đề trang */
			PageHeaderBackgroundColor: DevKit.Controls.String;
			/** Chọn màu nền của tiêu đề bảng điều khiển */
			PanelHeaderBackgroundColor: DevKit.Controls.String;
			/** Chọn màu nền chính cho các kiểm soát quy trình */
			ProcessControlColor: DevKit.Controls.String;
			/** Chọn màu mà các lệnh hoặc danh sách sẽ sử dụng để cho biết các mục được chọn */
			SelectedLinkEffect: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormChu_de extends DevKit.IForm {
		/**
		* Chủ đề [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Chu_de */
		Body: DevKit.FormChu_de.Body;
		/** The Navigation of form Chu_de */
		Navigation: DevKit.FormChu_de.Navigation;
		/** The SidePanes of form Chu_de */
		SidePanes: DevKit.SidePanes;
	}
	class ThemeApi {
		/**
		* DynamicsCrm.DevKit ThemeApi
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
		/** Chọn màu chủ đề phụ cho Giao diện Hợp nhất được dùng trên kiểm soát quy trình */
		AccentColor: string;
		/** Chỉ sử dụng nội bộ. */
		BackgroundColor: string;
		/** Chọn màu mà các điều khiển sẽ sử dụng cho đường viền */
		ControlBorder: string;
		/** Chọn màu nền cho các kiểm soát sẽ sử dụng để cho biết khi bạn di chuột qua các mục */
		ControlShade: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Chọn màu thực thể tùy chỉnh mặc định nếu không có màu nào được gán */
		DefaultCustomEntityColor: string;
		/** Chọn màu mặc định cho các thực thể hệ thống nếu không có màu nào được gán */
		DefaultEntityColor: string;
		/** Tỷ giá của loại tiền liên kết với Chủ đề theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Chọn màu cho tất cả các liên kết, chẳng hạn như địa chỉ email và liên kết tra cứu, và cho tất cả các nút được tập trung */
		GlobalLinkColor: string;
		/** Chọn màu cho văn bản tiêu đề, chẳng hạn như các nhãn thẻ của biểu mẫu */
		HeaderColor: string;
		/** Chọn màu mà các lệnh hoặc danh sách sẽ sử dụng để cho biết các mục được di chuột qua */
		HoverLinkEffect: string;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Trạng thái mặc định của chủ đề. */
		IsDefaultTheme: boolean;
		/** Tải lên tài nguyên web để sử dụng làm logo. Kích thước được khuyến nghị là cao 50 pixel và rộng tối đa 400. */
		LogoId: string;
		/** Nhập văn bản sẽ được dùng làm công cụ chú giải và văn bản thay thế cho logo. */
		LogoToolTip: string;
		/** Chọn màu chủ đề chính cho Giao diện Hợp nhất được dùng trên thanh lệnh, các nút và thẻ chính */
		MainColor: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của Thực thể Chủ đề. */
		Name: string;
		/** Chọn màu nền của Thanh Điều hướng chính */
		NavBarBackgroundColor: string;
		/** Chọn màu nền của Thanh Điều hướng phụ */
		NavBarShelfColor: string;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chọn màu nền của tiêu đề trang */
		PageHeaderBackgroundColor: string;
		/** Chọn màu nền của tiêu đề bảng điều khiển */
		PanelHeaderBackgroundColor: string;
		/** Chọn màu nền chính cho các kiểm soát quy trình */
		ProcessControlColor: string;
		/** Chọn màu mà các lệnh hoặc danh sách sẽ sử dụng để cho biết các mục được chọn */
		SelectedLinkEffect: string;
		/** Trạng thái của Chủ đề */
		readonly statecode: OptionSet.Theme.statecode;
		/** Lý do cho trạng thái của Chủ đề */
		statuscode: OptionSet.Theme.statuscode;
		/** Mã định danh duy nhất của phiên bản thực thể */
		ThemeId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tỷ giá của loại tiền liên kết với Chủ đề theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Định nghĩa loại chủ đề. */
		Type: boolean;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chọn màu chủ đề phụ cho Giao diện Hợp nhất được dùng trên kiểm soát quy trình */
			readonly AccentColor: string;
			/** Chỉ sử dụng nội bộ. */
			readonly BackgroundColor: string;
			/** Chọn màu mà các điều khiển sẽ sử dụng cho đường viền */
			readonly ControlBorder: string;
			/** Chọn màu nền cho các kiểm soát sẽ sử dụng để cho biết khi bạn di chuột qua các mục */
			readonly ControlShade: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Chọn màu thực thể tùy chỉnh mặc định nếu không có màu nào được gán */
			readonly DefaultCustomEntityColor: string;
			/** Chọn màu mặc định cho các thực thể hệ thống nếu không có màu nào được gán */
			readonly DefaultEntityColor: string;
			/** Tỷ giá của loại tiền liên kết với Chủ đề theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Chọn màu cho tất cả các liên kết, chẳng hạn như địa chỉ email và liên kết tra cứu, và cho tất cả các nút được tập trung */
			readonly GlobalLinkColor: string;
			/** Chọn màu cho văn bản tiêu đề, chẳng hạn như các nhãn thẻ của biểu mẫu */
			readonly HeaderColor: string;
			/** Chọn màu mà các lệnh hoặc danh sách sẽ sử dụng để cho biết các mục được di chuột qua */
			readonly HoverLinkEffect: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Trạng thái mặc định của chủ đề. */
			readonly IsDefaultTheme: string;
			/** Tải lên tài nguyên web để sử dụng làm logo. Kích thước được khuyến nghị là cao 50 pixel và rộng tối đa 400. */
			readonly LogoId: string;
			/** Nhập văn bản sẽ được dùng làm công cụ chú giải và văn bản thay thế cho logo. */
			readonly LogoToolTip: string;
			/** Chọn màu chủ đề chính cho Giao diện Hợp nhất được dùng trên thanh lệnh, các nút và thẻ chính */
			readonly MainColor: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của Thực thể Chủ đề. */
			readonly Name: string;
			/** Chọn màu nền của Thanh Điều hướng chính */
			readonly NavBarBackgroundColor: string;
			/** Chọn màu nền của Thanh Điều hướng phụ */
			readonly NavBarShelfColor: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chọn màu nền của tiêu đề trang */
			readonly PageHeaderBackgroundColor: string;
			/** Chọn màu nền của tiêu đề bảng điều khiển */
			readonly PanelHeaderBackgroundColor: string;
			/** Chọn màu nền chính cho các kiểm soát quy trình */
			readonly ProcessControlColor: string;
			/** Chọn màu mà các lệnh hoặc danh sách sẽ sử dụng để cho biết các mục được chọn */
			readonly SelectedLinkEffect: string;
			/** Trạng thái của Chủ đề */
			readonly statecode: string;
			/** Lý do cho trạng thái của Chủ đề */
			readonly statuscode: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly ThemeId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tỷ giá của loại tiền liên kết với Chủ đề theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Định nghĩa loại chủ đề. */
			readonly Type: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Theme {
		enum statecode {
			/** 1 */
			He_thong,
			/** 0 */
			Tuy_chinh
		}
		enum statuscode {
			/** 2 */
			He_thong,
			/** 1 */
			Tuy_chinh
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