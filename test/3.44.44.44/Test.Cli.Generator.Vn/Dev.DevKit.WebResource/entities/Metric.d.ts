//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_description_Sections {
			description: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			_379F3DB8_82DF_4E44_930A_C7A22C0E5206: DevKit.Controls.Section;
		}
		interface tab_Rollup_Attributes_Sections {
			_CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB: DevKit.Controls.Section;
		}
		interface tab_description extends DevKit.Controls.ITab {
			Section: tab_description_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_Rollup_Attributes extends DevKit.Controls.ITab {
			Section: tab_Rollup_Attributes_Sections;
		}
		interface Tabs {
			description: tab_description;
			general: tab_general;
			Rollup_Attributes: tab_Rollup_Attributes;
		}
		interface Body {
			Tab: Tabs;
			/** Loại dữ liệu của số tiền. */
			AmountDataType: DevKit.Controls.OptionSet;
			/** Mô tả về số liệu mục tiêu. */
			Description: DevKit.Controls.String;
			/** Thông tin cho biết loại số liệu là Số lượng hay Số tiền. */
			IsAmount: DevKit.Controls.Boolean;
			/** Cho biết số liệu mục tiêu có theo dõi đích dài hạn không. */
			IsStretchTracked: DevKit.Controls.Boolean;
			/** Tên của số liệu mục tiêu. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {
			metric_goal: DevKit.Controls.NavigationItem,
			metric_rollupfield: DevKit.Controls.NavigationItem
		}
		interface Grid {
			MetricLineItemSubGrid: DevKit.Controls.Grid;
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
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class MetricApi {
		/**
		* DynamicsCrm.DevKit MetricApi
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
		/** Loại dữ liệu của số tiền. */
		AmountDataType: OptionSet.Metric.AmountDataType;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả về số liệu mục tiêu. */
		Description: string;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin cho biết loại số liệu là Số lượng hay Số tiền. */
		IsAmount: boolean;
		/** Cho biết số liệu mục tiêu có theo dõi đích dài hạn không. */
		IsStretchTracked: boolean;
		/** Mã định danh duy nhất của số liệu mục tiêu. */
		MetricId: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của số liệu mục tiêu. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Trạng thái của số liệu mục tiêu. */
		StateCode: OptionSet.Metric.StateCode;
		/** Lý do dẫn đến trạng thái của số liệu mục tiêu. */
		StatusCode: OptionSet.Metric.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của số liệu mục tiêu. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Loại dữ liệu của số tiền. */
			readonly AmountDataType: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả về số liệu mục tiêu. */
			readonly Description: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin cho biết loại số liệu là Số lượng hay Số tiền. */
			readonly IsAmount: string;
			/** Cho biết số liệu mục tiêu có theo dõi đích dài hạn không. */
			readonly IsStretchTracked: string;
			/** Mã định danh duy nhất của số liệu mục tiêu. */
			readonly MetricId: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của số liệu mục tiêu. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Trạng thái của số liệu mục tiêu. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của số liệu mục tiêu. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của số liệu mục tiêu. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Metric {
		enum AmountDataType {
			/** 0 */
			Loai_tien,
			/** 2 */
			So_nguyen,
			/** 1 */
			Thap_phan
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 1 */
			Da_dong,
			/** 0 */
			Mo
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