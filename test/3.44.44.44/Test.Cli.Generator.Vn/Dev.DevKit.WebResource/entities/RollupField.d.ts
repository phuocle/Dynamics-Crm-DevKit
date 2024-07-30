//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			_27578C24_6DCB_7649_BA95_913C229C39EB: DevKit.Controls.Section;
			_41A22D3A_56EC_4317_812A_AC5C92764CD5: DevKit.Controls.Section;
			_6AD1C698_2E2E_8A08_B43A_B66815B9EB06: DevKit.Controls.Section;
			_D65A4472_A959_3B9C_C416_D79C56E4A44B: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn trường ngày dành cho loại bản ghi đã chọn, như Ngày đóng thực tế của loại bản ghi Cơ hội. Bản ghi tham gia vào tổng số mục đích nếu ngày đã chọn nằm trong khoảng từ ngày bắt đầu đến ngày kết thúc của mục đích. */
			DateAttribute: DevKit.Controls.String;
			dateattribute_UC: DevKit.Controls.ActionCards;
			/** Chọn loại bản ghi chứa trường ngày mà hệ thống sẽ xem xét khi lấy tổng số dữ liệu vào mục đích. */
			EntityForDateAttribute: DevKit.Controls.String;
			entityfordateattribute_UC: DevKit.Controls.ActionCards;
			/** Chọn trường tổng số, trong đó, hiển thị dữ liệu tổng số sơ đồ trong mục đích. Tùy chọn là số nguyên hoặc tiền, tùy theo Loại số liệu mà bạn chọn cho sơ đồ mục đích. */
			GoalAttribute: DevKit.Controls.String;
			goalattribute_UC: DevKit.Controls.ActionCards;
			/** Nhập tên của trường để tính tổng số dữ liệu cho mục đích. */
			SourceAttribute: DevKit.Controls.String;
			sourceattribute_UC: DevKit.Controls.ActionCards;
			/** Nhập tên của loại bản ghi (thực thể) để tính tổng số dữ liệu cho mục đích. */
			SourceEntity: DevKit.Controls.String;
			sourceentity_UC: DevKit.Controls.ActionCards;
			/** Chọn trạng thái của bản ghi mà bạn muốn dùng làm nguồn của dữ liệu tổng số cho sơ đồ. */
			SourceState: DevKit.Controls.Integer;
			sourcestate_UC: DevKit.Controls.ActionCards;
			/** Chọn tình trạng của bản ghi mà bạn muốn dùng làm nguồn của dữ liệu tổng số cho sơ đồ. */
			SourceStatus: DevKit.Controls.Integer;
			sourcestatus_UC: DevKit.Controls.ActionCards;
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
	class RollupFieldApi {
		/**
		* DynamicsCrm.DevKit RollupFieldApi
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
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Chọn trường ngày dành cho loại bản ghi đã chọn, như Ngày đóng thực tế của loại bản ghi Cơ hội. Bản ghi tham gia vào tổng số mục đích nếu ngày đã chọn nằm trong khoảng từ ngày bắt đầu đến ngày kết thúc của mục đích. */
		DateAttribute: string;
		/** Chọn trường tổng số, trong đó, hiển thị dữ liệu tổng số sơ đồ trong mục đích. Tùy chọn là số nguyên hoặc tiền, tùy theo Loại số liệu mà bạn chọn cho sơ đồ mục đích. */
		GoalAttribute: string;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết khả năng trạng thái hay tình trạng thuộc về thực thể mẹ. */
		IsStateParentEntityAttribute: boolean;
		/** Mã định danh duy nhất của số liệu mục đích đã liên kết với trường tổng số. */
		MetricId: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của trường tổng số. */
		RollupFieldId: string;
		/** Nhập tên của trường để tính tổng số dữ liệu cho mục đích. */
		SourceAttribute: string;
		/** Chọn trạng thái của bản ghi mà bạn muốn dùng làm nguồn của dữ liệu tổng số cho sơ đồ. */
		SourceState: number;
		/** Chọn tình trạng của bản ghi mà bạn muốn dùng làm nguồn của dữ liệu tổng số cho sơ đồ. */
		SourceStatus: number;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của trường tổng số. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Chọn trường ngày dành cho loại bản ghi đã chọn, như Ngày đóng thực tế của loại bản ghi Cơ hội. Bản ghi tham gia vào tổng số mục đích nếu ngày đã chọn nằm trong khoảng từ ngày bắt đầu đến ngày kết thúc của mục đích. */
			readonly DateAttribute: string;
			/** Chọn trường tổng số, trong đó, hiển thị dữ liệu tổng số sơ đồ trong mục đích. Tùy chọn là số nguyên hoặc tiền, tùy theo Loại số liệu mà bạn chọn cho sơ đồ mục đích. */
			readonly GoalAttribute: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết khả năng trạng thái hay tình trạng thuộc về thực thể mẹ. */
			readonly IsStateParentEntityAttribute: string;
			/** Mã định danh duy nhất của số liệu mục đích đã liên kết với trường tổng số. */
			readonly MetricId: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của trường tổng số. */
			readonly RollupFieldId: string;
			/** Nhập tên của trường để tính tổng số dữ liệu cho mục đích. */
			readonly SourceAttribute: string;
			/** Chọn trạng thái của bản ghi mà bạn muốn dùng làm nguồn của dữ liệu tổng số cho sơ đồ. */
			readonly SourceState: string;
			/** Chọn tình trạng của bản ghi mà bạn muốn dùng làm nguồn của dữ liệu tổng số cho sơ đồ. */
			readonly SourceStatus: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của trường tổng số. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RollupField {
		enum EntityForDateAttribute {
		}
		enum SourceEntity {
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