//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PluginTypeStatisticApi {
		/**
		* DynamicsCrm.DevKit PluginTypeStatisticApi
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
		/** Thời gian thực thi trung bình (tính theo mili giây) cho loại bổ trợ. */
		readonly AverageExecuteTimeInMilliseconds: number;
		/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào sự cố chương trình. */
		readonly CrashContributionPercent: number;
		/** Số lần loại bổ trợ gặp sự cố. */
		readonly CrashCount: number;
		/** Tỉ lệ phần trăm sự cố chương trình dành cho loại bổ trợ. */
		readonly CrashPercent: number;
		/** Mã định danh duy nhất của người dùng đã tạo thống kê loại bổ trợ. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo thống kê loại bổ trợ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo thống kê loại bổ trợ. */
		readonly CreatedOnBehalfBy: string;
		/** Số lần thực thi loại bổ trợ. */
		readonly ExecuteCount: number;
		/** Số lần loại bổ trợ gặp lỗi. */
		readonly FailureCount: number;
		/** Tỉ lệ phần trăm lỗi đối với loại bổ trợ. */
		readonly FailurePercent: number;
		/** Mã định danh duy nhất của người dùng đã sửa thống kê loại bổ trợ lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi thống kê loại bổ trợ lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại điện đã sửa thống kê bổ trợ. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với thống kê loại bổ trợ. */
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của loại bổ trợ đã liên kết với thống kê loại bổ trợ này. */
		readonly PluginTypeId: string;
		/** Mã định danh duy nhất của thống kê loại bổ trợ. */
		readonly PluginTypeStatisticId: string;
		/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào việc chấm dứt quy trình Nhân viên do sử dụng CPU quá mức. */
		readonly TerminateCpuContributionPercent: number;
		/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào việc chấm dứt quy trình Nhân viên do sử dụng điều khiển quá mức. */
		readonly TerminateHandlesContributionPercent: number;
		/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào việc chấm dứt quy trình Nhân viên do sử dụng bộ nhớ quá mức. */
		readonly TerminateMemoryContributionPercent: number;
		/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào việc chấm dứt quy trình Nhân viên vì lý do không rõ. */
		readonly TerminateOtherContributionPercent: number;
		readonly FormattedValue: {
			/** Thời gian thực thi trung bình (tính theo mili giây) cho loại bổ trợ. */
			readonly AverageExecuteTimeInMilliseconds: string;
			/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào sự cố chương trình. */
			readonly CrashContributionPercent: string;
			/** Số lần loại bổ trợ gặp sự cố. */
			readonly CrashCount: string;
			/** Tỉ lệ phần trăm sự cố chương trình dành cho loại bổ trợ. */
			readonly CrashPercent: string;
			/** Mã định danh duy nhất của người dùng đã tạo thống kê loại bổ trợ. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo thống kê loại bổ trợ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo thống kê loại bổ trợ. */
			readonly CreatedOnBehalfBy: string;
			/** Số lần thực thi loại bổ trợ. */
			readonly ExecuteCount: string;
			/** Số lần loại bổ trợ gặp lỗi. */
			readonly FailureCount: string;
			/** Tỉ lệ phần trăm lỗi đối với loại bổ trợ. */
			readonly FailurePercent: string;
			/** Mã định danh duy nhất của người dùng đã sửa thống kê loại bổ trợ lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi thống kê loại bổ trợ lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại điện đã sửa thống kê bổ trợ. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với thống kê loại bổ trợ. */
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của loại bổ trợ đã liên kết với thống kê loại bổ trợ này. */
			readonly PluginTypeId: string;
			/** Mã định danh duy nhất của thống kê loại bổ trợ. */
			readonly PluginTypeStatisticId: string;
			/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào việc chấm dứt quy trình Nhân viên do sử dụng CPU quá mức. */
			readonly TerminateCpuContributionPercent: string;
			/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào việc chấm dứt quy trình Nhân viên do sử dụng điều khiển quá mức. */
			readonly TerminateHandlesContributionPercent: string;
			/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào việc chấm dứt quy trình Nhân viên do sử dụng bộ nhớ quá mức. */
			readonly TerminateMemoryContributionPercent: string;
			/** Tỉ lệ phần trăm đóng góp của loại bổ trợ vào việc chấm dứt quy trình Nhân viên vì lý do không rõ. */
			readonly TerminateOtherContributionPercent: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginTypeStatistic {
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