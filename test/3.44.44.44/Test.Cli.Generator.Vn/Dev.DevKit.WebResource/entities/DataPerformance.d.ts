//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_Performance_Improvement_Sections {
			Performance_Improvement: DevKit.Controls.Section;
		}
		interface tab_Performance_Improvement extends DevKit.Controls.ITab {
			Section: tab_Performance_Improvement_Sections;
		}
		interface Tabs {
			Performance_Improvement: tab_Performance_Improvement;
		}
		interface Body {
			Tab: Tabs;
			/** Trạng thái nội bộ cho biết liệu có tối ưu hóa nào được áp dụng hay không. */
			AnyOptimizationApplied: DevKit.Controls.Boolean;
			/** Trạng thái nội bộ cho biết liệu có tối ưu hóa nào có sẵn cho bản ghi này hay không. */
			AnyOptimizationAvailable: DevKit.Controls.Boolean;
			/** Số lần truy vấn được thực thi (Tổng hợp) */
			Count: DevKit.Controls.Integer;
			/** Thực thể chính */
			Entity: DevKit.Controls.String;
			/** Trạng thái nội bộ thể hiện kết quả của hành động cuối cùng đã thực hiện trên bản ghi này. */
			LastActionResult: DevKit.Controls.String;
			/** Thời gian thực thi tối đa tính bằng giây. (Tổng hợp) */
			MaxTime: DevKit.Controls.Decimal;
			/** Thời gian thực thi trung bình tính bằng giây. (Tổng hợp) */
			MedianTime: DevKit.Controls.Decimal;
			/** Thời gian thực thi tối thiểu tính bằng giây. (Tổng hợp) */
			MinTime: DevKit.Controls.Decimal;
			/** Thao tác dữ liệu đã kích hoạt truy vấn (Truy xuất nhiều, v.v) */
			Operation: DevKit.Controls.String;
			/** Trạng thái tối ưu hóa hiện tại của bản ghi, hiển thị với khách hàng. */
			OptimizationStatus: DevKit.Controls.String;
			/** Trọng số truy vấn của thành phần. Được đưa vào cùng Tác động tối ưu hóa nhằm xác định tầm quan trọng chung của việc áp dụng tối ưu hóa. (P2) */
			Weight: DevKit.Controls.Decimal;
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
	class DataPerformanceApi {
		/**
		* DynamicsCrm.DevKit DataPerformanceApi
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
		/** Trạng thái nội bộ cho biết liệu có tối ưu hóa nào được áp dụng hay không. */
		readonly AnyOptimizationApplied: boolean;
		/** Trạng thái nội bộ cho biết liệu có tối ưu hóa nào có sẵn cho bản ghi này hay không. */
		readonly AnyOptimizationAvailable: boolean;
		/** Tên của thành phần */
		readonly Component: string;
		/** Số lần truy vấn được thực thi (Tổng hợp) */
		readonly Count: number;
		/** Mã định danh duy nhất của đề xuất về hiệu suất. */
		DataPerformanceId: string;
		/** Thực thể chính */
		readonly Entity1: string;
		/** Lợi ích chi phí trung bình dự kiến của tối ưu hóa. */
		readonly EstimatedOptimizationImpact: number;
		/** Khoảng thời gian thực thi mà chỉ số hiệu suất được tính toán trong khoảng thời gian đó. */
		readonly ExecutionPeriod: string;
		/** Trạng thái nội bộ thể hiện kết quả của hành động cuối cùng đã thực hiện trên bản ghi này. */
		readonly LastActionResult: string;
		/** Lần cuối cùng khi tối ưu hóa được áp dụng. */
		readonly LastOptimizationDate_UtcDateAndTime: Date;
		/** Thời gian thực thi tối đa tính bằng giây. (Tổng hợp) */
		readonly MaxTime: number;
		/** Thời gian thực thi trung bình tính bằng giây. (Tổng hợp) */
		readonly MedianTime: number;
		/** Thời gian thực thi tối thiểu tính bằng giây. (Tổng hợp) */
		readonly MinTime: number;
		/** Thao tác dữ liệu đã kích hoạt truy vấn (Truy xuất nhiều, v.v) */
		readonly Operation: string;
		/** Trạng thái tối ưu hóa hiện tại của bản ghi, hiển thị với khách hàng. */
		readonly OptimizationStatus: string;
		/** Bộ nhớ bị tối ưu hóa sử dụng. (MB) */
		readonly OptimizationStorage: number;
		/** Mã định danh duy nhất của tổ chức được liên kết. */
		readonly OrganizationId: string;
		/** Thay đổi hiệu suất thực tế sau khi thực hiện hành động tối ưu hóa trên bản ghi. */
		readonly RealizedOptimizationImpact: string;
		/** Tên của giải pháp sở hữu thành phần */
		readonly Solution: string;
		/** Trọng số truy vấn của thành phần. Được đưa vào cùng Tác động tối ưu hóa nhằm xác định tầm quan trọng chung của việc áp dụng tối ưu hóa. (P2) */
		readonly Weight: number;
		readonly FormattedValue: {
			/** Trạng thái nội bộ cho biết liệu có tối ưu hóa nào được áp dụng hay không. */
			readonly AnyOptimizationApplied: string;
			/** Trạng thái nội bộ cho biết liệu có tối ưu hóa nào có sẵn cho bản ghi này hay không. */
			readonly AnyOptimizationAvailable: string;
			/** Tên của thành phần */
			readonly Component: string;
			/** Số lần truy vấn được thực thi (Tổng hợp) */
			readonly Count: string;
			/** Mã định danh duy nhất của đề xuất về hiệu suất. */
			readonly DataPerformanceId: string;
			/** Thực thể chính */
			readonly Entity1: string;
			/** Lợi ích chi phí trung bình dự kiến của tối ưu hóa. */
			readonly EstimatedOptimizationImpact: string;
			/** Khoảng thời gian thực thi mà chỉ số hiệu suất được tính toán trong khoảng thời gian đó. */
			readonly ExecutionPeriod: string;
			/** Trạng thái nội bộ thể hiện kết quả của hành động cuối cùng đã thực hiện trên bản ghi này. */
			readonly LastActionResult: string;
			/** Lần cuối cùng khi tối ưu hóa được áp dụng. */
			readonly LastOptimizationDate_UtcDateAndTime: string;
			/** Thời gian thực thi tối đa tính bằng giây. (Tổng hợp) */
			readonly MaxTime: string;
			/** Thời gian thực thi trung bình tính bằng giây. (Tổng hợp) */
			readonly MedianTime: string;
			/** Thời gian thực thi tối thiểu tính bằng giây. (Tổng hợp) */
			readonly MinTime: string;
			/** Thao tác dữ liệu đã kích hoạt truy vấn (Truy xuất nhiều, v.v) */
			readonly Operation: string;
			/** Trạng thái tối ưu hóa hiện tại của bản ghi, hiển thị với khách hàng. */
			readonly OptimizationStatus: string;
			/** Bộ nhớ bị tối ưu hóa sử dụng. (MB) */
			readonly OptimizationStorage: string;
			/** Mã định danh duy nhất của tổ chức được liên kết. */
			readonly OrganizationId: string;
			/** Thay đổi hiệu suất thực tế sau khi thực hiện hành động tối ưu hóa trên bản ghi. */
			readonly RealizedOptimizationImpact: string;
			/** Tên của giải pháp sở hữu thành phần */
			readonly Solution: string;
			/** Trọng số truy vấn của thành phần. Được đưa vào cùng Tác động tối ưu hóa nhằm xác định tầm quan trọng chung của việc áp dụng tối ưu hóa. (P2) */
			readonly Weight: string;
		}
	}
}
declare namespace OptionSet {
	namespace DataPerformance {
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