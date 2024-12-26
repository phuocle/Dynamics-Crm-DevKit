//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SavedOrgInsightsConfigurationApi {
		/**
		* DynamicsCrm.DevKit SavedOrgInsightsConfigurationApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả của cấu hình hiểu biết tổ chức đã lưu */
		Description: string;
		/** Cho biết cấu hình hiểu biết tổ chức đã lưu này có phải là cấu hình mặc định hay không */
		IsDefault: boolean;
		/** Hiển thị cấu hình này có thể hiện biểu đồ xem chi tiết hay không */
		IsDrilldown: boolean;
		/** Dữ liệu Số liệu theo định dạng Json cho những số liệu đó được xác định trong các tham số */
		readonly JsonData: string;
		/** Thời gian Kết thúc */
		readonly JsonDataEndTime_UtcDateAndTime: Date;
		/** Thời gian Bắt đầu */
		readonly JsonDataStartTime_UtcDateAndTime: Date;
		/** Khoảng thời gian nhìn lại */
		Lookback: OptionSet.SavedOrgInsightsConfiguration.Lookback;
		/** Loại số liệu */
		MetricType: OptionSet.SavedOrgInsightsConfiguration.MetricType;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi */
		readonly ModifiedOnBehalfBy: string;
		/** Tên hiển thị */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với giải pháp */
		readonly OrganizationId: string;
		/** Cần có tham số để truy xuất dữ liệu */
		Parameters: string;
		/** Tùy chọn Vẽ biểu đồ */
		PlotOption: OptionSet.SavedOrgInsightsConfiguration.PlotOption;
		/** Hiện ID của Cấu hình Hiểu biết Tổ chức Đã lưu */
		SavedOrgInsightsConfigurationId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả của cấu hình hiểu biết tổ chức đã lưu */
			readonly Description: string;
			/** Cho biết cấu hình hiểu biết tổ chức đã lưu này có phải là cấu hình mặc định hay không */
			readonly IsDefault: string;
			/** Hiển thị cấu hình này có thể hiện biểu đồ xem chi tiết hay không */
			readonly IsDrilldown: string;
			/** Dữ liệu Số liệu theo định dạng Json cho những số liệu đó được xác định trong các tham số */
			readonly JsonData: string;
			/** Thời gian Kết thúc */
			readonly JsonDataEndTime_UtcDateAndTime: string;
			/** Thời gian Bắt đầu */
			readonly JsonDataStartTime_UtcDateAndTime: string;
			/** Khoảng thời gian nhìn lại */
			readonly Lookback: string;
			/** Loại số liệu */
			readonly MetricType: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi */
			readonly ModifiedOnBehalfBy: string;
			/** Tên hiển thị */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với giải pháp */
			readonly OrganizationId: string;
			/** Cần có tham số để truy xuất dữ liệu */
			readonly Parameters: string;
			/** Tùy chọn Vẽ biểu đồ */
			readonly PlotOption: string;
			/** Hiện ID của Cấu hình Hiểu biết Tổ chức Đã lưu */
			readonly SavedOrgInsightsConfigurationId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SavedOrgInsightsConfiguration {
		enum Lookback {
			/** 1 */
			_2_Tieng,
			/** 4 */
			_30_Ngay,
			/** 2 */
			_48_Tieng,
			/** 3 */
			_7_Ngay
		}
		enum MetricType {
			/** 1 */
			Chuoi_Thoi_gian,
			/** 2 */
			The_loai
		}
		enum PlotOption {
			/** 10 */
			Bo_do_Tuyen_tinh,
			/** 11 */
			Bong_bong,
			/** 2 */
			Cot,
			/** 6 */
			Dang_vong,
			/** 9 */
			Dang_vong_kep,
			/** 8 */
			Danh_sach,
			/** 1 */
			Duong,
			/** 5 */
			Thanh,
			/** 7 */
			The_thong_tin,
			/** 4 */
			Tron,
			/** 3 */
			Vung
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