//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			section_1: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Xác định thời gian rảnh/bận cho dịch vụ và cho nguồn lực hoặc nhóm nguồn lực, chẳng hạn như làm việc, không làm việc, ngày nghỉ và đã chặn. */
			Description: DevKit.Controls.String;
			/** Tên của quy tắc lịch. */
			Name: DevKit.Controls.String;
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
	class CalendarRuleApi {
		/**
		* DynamicsCrm.DevKit CalendarRuleApi
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
		/** Mã định danh duy nhất của đơn vị kinh doanh có quy tắc lịch được liên kết. */
		readonly BusinessUnitId: string;
		/** Mã định danh duy nhất của lịch có quy tắc lịch được liên kết. */
		CalendarId: string;
		/** Mã định danh duy nhất của quy tắc lịch. */
		CalendarRuleId: string;
		/** Mã định danh duy nhất của người dùng đã tạo quy tắc lịch. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo quy tắc lịch. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo calendarrule. */
		readonly CreatedOnBehalfBy: string;
		/** Xác định thời gian rảnh/bận cho dịch vụ và cho nguồn lực hoặc nhóm nguồn lực, chẳng hạn như làm việc, không làm việc, ngày nghỉ và đã chặn. */
		Description: string;
		/** Khoảng thời gian của quy tắc lịch tính bằng phút. */
		Duration: number;
		/** Kết thúc khoảng thời gian hiệu lực của quy tắc lịch. */
		EffectiveIntervalEnd_UtcDateOnly: Date;
		/** Bắt đầu khoảng thời gian hiệu lực của quy tắc lịch. */
		EffectiveIntervalStart_UtcDateOnly: Date;
		/** Nỗ lực hiện có cho một nguồn lực trong thời gian theo mô tả của quy tắc lịch. */
		Effort: number;
		/** Chỉ sử dụng nội bộ. */
		EndTime_UtcDateAndTime: Date;
		/** Phạm vi của quy tắc lịch. */
		ExtentCode: number;
		/** Mã định danh duy nhất của nhóm. */
		GroupDesignator: string;
		/** Mã định danh duy nhất của lịch nội bộ cho quy tắc lịch không phải là lá. */
		InnerCalendarId: string;
		/** Chỉ sử dụng nội bộ. */
		IsModified: boolean;
		/** Cờ được dùng trong quy tắc lịch thay đổi theo ngày. */
		IsSelected: boolean;
		/** Cờ được dùng trong quy tắc lịch thay đổi theo ngày. */
		IsSimple: boolean;
		/** Cờ được dùng trong quy tắc lá không lặp lại. */
		IsVaried: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi quy tắc lịch lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi quy tắc lịch lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi calendarrule lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của quy tắc lịch. */
		Name: string;
		/** Khoảng bù bắt đầu cho quy tắc lá không lặp lại. */
		Offset: number;
		/** Mã định danh duy nhất của tổ chức có quy tắc lịch được liên kết. */
		readonly OrganizationId: string;
		/** Kiểu lặp lại của quy tắc. */
		Pattern: string;
		/** Xếp hạng quy tắc lịch. */
		Rank: number;
		/** Thời gian bắt đầu cho quy tắc. */
		StartTime_UtcDateAndTime: Date;
		/** Loại phụ của quy tắc lịch. */
		SubCode: number;
		/** Loại quy tắc lịch chẳng hạn như giờ làm việc, giờ nghỉ, ngày nghỉ lễ hoặc thời gian nghỉ. */
		TimeCode: number;
		/** Múi giờ địa phương cho quy tắc lịch. */
		TimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của đơn vị kinh doanh có quy tắc lịch được liên kết. */
			readonly BusinessUnitId: string;
			/** Mã định danh duy nhất của lịch có quy tắc lịch được liên kết. */
			readonly CalendarId: string;
			/** Mã định danh duy nhất của quy tắc lịch. */
			readonly CalendarRuleId: string;
			/** Mã định danh duy nhất của người dùng đã tạo quy tắc lịch. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo quy tắc lịch. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo calendarrule. */
			readonly CreatedOnBehalfBy: string;
			/** Xác định thời gian rảnh/bận cho dịch vụ và cho nguồn lực hoặc nhóm nguồn lực, chẳng hạn như làm việc, không làm việc, ngày nghỉ và đã chặn. */
			readonly Description: string;
			/** Khoảng thời gian của quy tắc lịch tính bằng phút. */
			readonly Duration: string;
			/** Kết thúc khoảng thời gian hiệu lực của quy tắc lịch. */
			readonly EffectiveIntervalEnd_UtcDateOnly: string;
			/** Bắt đầu khoảng thời gian hiệu lực của quy tắc lịch. */
			readonly EffectiveIntervalStart_UtcDateOnly: string;
			/** Nỗ lực hiện có cho một nguồn lực trong thời gian theo mô tả của quy tắc lịch. */
			readonly Effort: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EndTime_UtcDateAndTime: string;
			/** Phạm vi của quy tắc lịch. */
			readonly ExtentCode: string;
			/** Mã định danh duy nhất của nhóm. */
			readonly GroupDesignator: string;
			/** Mã định danh duy nhất của lịch nội bộ cho quy tắc lịch không phải là lá. */
			readonly InnerCalendarId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsModified: string;
			/** Cờ được dùng trong quy tắc lịch thay đổi theo ngày. */
			readonly IsSelected: string;
			/** Cờ được dùng trong quy tắc lịch thay đổi theo ngày. */
			readonly IsSimple: string;
			/** Cờ được dùng trong quy tắc lá không lặp lại. */
			readonly IsVaried: string;
			/** Mã định danh duy nhất của người dùng sửa đổi quy tắc lịch lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi quy tắc lịch lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi calendarrule lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của quy tắc lịch. */
			readonly Name: string;
			/** Khoảng bù bắt đầu cho quy tắc lá không lặp lại. */
			readonly Offset: string;
			/** Mã định danh duy nhất của tổ chức có quy tắc lịch được liên kết. */
			readonly OrganizationId: string;
			/** Kiểu lặp lại của quy tắc. */
			readonly Pattern: string;
			/** Xếp hạng quy tắc lịch. */
			readonly Rank: string;
			/** Thời gian bắt đầu cho quy tắc. */
			readonly StartTime_UtcDateAndTime: string;
			/** Loại phụ của quy tắc lịch. */
			readonly SubCode: string;
			/** Loại quy tắc lịch chẳng hạn như giờ làm việc, giờ nghỉ, ngày nghỉ lễ hoặc thời gian nghỉ. */
			readonly TimeCode: string;
			/** Múi giờ địa phương cho quy tắc lịch. */
			readonly TimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CalendarRule {
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