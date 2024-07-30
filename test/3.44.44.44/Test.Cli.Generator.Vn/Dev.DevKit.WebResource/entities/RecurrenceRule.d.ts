//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RecurrenceRuleApi {
		/**
		* DynamicsCrm.DevKit RecurrenceRuleApi
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
		/** Mã định danh duy nhất của người dùng đã tạo quy tắc lặp lại. */
		readonly CreatedBy: string;
		/** Ngày giờ tạo quy tắc lặp lại. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo quy tắc lặp lại. */
		readonly CreatedOnBehalfBy: string;
		/** Ngày của tháng xảy ra cuộc hẹn hoặc nhiệm vụ lặp lại. */
		DayOfMonth: number;
		/** Bitmask cho biết ngày của tuần xảy ra cuộc hẹn hoặc nhiệm vụ lặp lại. */
		DaysOfWeekMask: number;
		/** Khoảng thời gian của mẫu lặp lại, tính bằng phút. */
		Duration: number;
		/** Ngày kết thúc thực tế dành cho mở rộng mẫu lặp lại. */
		EffectiveEndDate_UtcDateAndTime: Date;
		/** Ngày bắt đầu thực tế dành cho mở rộng mẫu lặp lại. */
		EffectiveStartDate_UtcDateOnly: Date;
		/** Thời gian kết thúc của hoạt động đã liên kết. */
		EndTime_UtcDateAndTime: Date;
		/** Ngày đầu tiên của tuần dành cho mẫu lặp lại. */
		FirstDayOfWeek: number;
		/** Xác định tổng đếm mà trong đó, mẫu lặp lại hợp lệ đối với khoảng đã cho. */
		Instance: OptionSet.RecurrenceRule.Instance;
		/** Số lượng đơn vị của loại lặp lại đã cho giữa các lần xảy ra. */
		Interval: number;
		/** Xác định khả năng mẫu lập lại hàng tháng là vào ngày thứ N hàng tháng, duy nhất hợp lệ cho lặp lại hàng tháng. */
		IsNthMonthly: boolean;
		/** Xác định khả năng mẫu lập lại hàng năm là vào tháng thứ N hàng năm, duy nhất hợp lệ cho lặp lại hàng năm. */
		IsNthYearly: boolean;
		/** Duy nhất hợp lệ cho lặp lại của loại nhiệm vụ, chỉ định có tạo nhiệm vụ hay không. */
		IsRegenerate: boolean;
		/** Xác định mẫu lặp lại hàng tuần thực sự là mẫu hàng ngày vào mỗi ngày trong tuần, duy nhất hợp lệ cho mẫu hàng tuần. */
		IsWeekDayPattern: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi quy tắc lặp lại lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi quy tắc lặp lại lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa quy tắc lặp lại. */
		readonly ModifiedOnBehalfBy: string;
		/** Xác định tháng của năm hợp lệ cho mẫu lặp lại. */
		MonthOfYear: OptionSet.RecurrenceRule.MonthOfYear;
		/** Mã định danh duy nhất của đối tượng có liên kết với quy tắc lặp lại. */
		ObjectId: string;
		/** Số lần xảy ra cho mẫu lặp lại. */
		Occurrences: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu quy tắc lặp lại. */
		readonly OwningBusinessUnit: string;
		readonly OwningTeam: string;
		readonly OwningUser: string;
		/** Ngày kết thúc của phạm vi lặp lại. */
		PatternEndDate_UtcDateAndTime: Date;
		/** Loại kết thúc mẫu của chuỗi lặp lại. */
		PatternEndType: OptionSet.RecurrenceRule.PatternEndType;
		/** Ngày bắt đầu của Phạm vi lặp lại. */
		PatternStartDate_UtcDateAndTime: Date;
		/** Loại lặp lại. */
		RecurrencePatternType: OptionSet.RecurrenceRule.RecurrencePatternType;
		/** Mã định danh duy nhất của thực thể có liên kết với quy tắc lặp lại. */
		RuleId: string;
		/** Thời gian bắt đầu của hoạt động lặp lại. */
		StartTime_UtcDateAndTime: Date;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo quy tắc lặp lại. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo quy tắc lặp lại. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo quy tắc lặp lại. */
			readonly CreatedOnBehalfBy: string;
			/** Ngày của tháng xảy ra cuộc hẹn hoặc nhiệm vụ lặp lại. */
			readonly DayOfMonth: string;
			/** Bitmask cho biết ngày của tuần xảy ra cuộc hẹn hoặc nhiệm vụ lặp lại. */
			readonly DaysOfWeekMask: string;
			/** Khoảng thời gian của mẫu lặp lại, tính bằng phút. */
			readonly Duration: string;
			/** Ngày kết thúc thực tế dành cho mở rộng mẫu lặp lại. */
			readonly EffectiveEndDate_UtcDateAndTime: string;
			/** Ngày bắt đầu thực tế dành cho mở rộng mẫu lặp lại. */
			readonly EffectiveStartDate_UtcDateOnly: string;
			/** Thời gian kết thúc của hoạt động đã liên kết. */
			readonly EndTime_UtcDateAndTime: string;
			/** Ngày đầu tiên của tuần dành cho mẫu lặp lại. */
			readonly FirstDayOfWeek: string;
			/** Xác định tổng đếm mà trong đó, mẫu lặp lại hợp lệ đối với khoảng đã cho. */
			readonly Instance: string;
			/** Số lượng đơn vị của loại lặp lại đã cho giữa các lần xảy ra. */
			readonly Interval: string;
			/** Xác định khả năng mẫu lập lại hàng tháng là vào ngày thứ N hàng tháng, duy nhất hợp lệ cho lặp lại hàng tháng. */
			readonly IsNthMonthly: string;
			/** Xác định khả năng mẫu lập lại hàng năm là vào tháng thứ N hàng năm, duy nhất hợp lệ cho lặp lại hàng năm. */
			readonly IsNthYearly: string;
			/** Duy nhất hợp lệ cho lặp lại của loại nhiệm vụ, chỉ định có tạo nhiệm vụ hay không. */
			readonly IsRegenerate: string;
			/** Xác định mẫu lặp lại hàng tuần thực sự là mẫu hàng ngày vào mỗi ngày trong tuần, duy nhất hợp lệ cho mẫu hàng tuần. */
			readonly IsWeekDayPattern: string;
			/** Mã định danh duy nhất của người dùng sửa đổi quy tắc lặp lại lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi quy tắc lặp lại lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa quy tắc lặp lại. */
			readonly ModifiedOnBehalfBy: string;
			/** Xác định tháng của năm hợp lệ cho mẫu lặp lại. */
			readonly MonthOfYear: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với quy tắc lặp lại. */
			readonly ObjectId: string;
			/** Số lần xảy ra cho mẫu lặp lại. */
			readonly Occurrences: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu quy tắc lặp lại. */
			readonly OwningBusinessUnit: string;
			readonly OwningTeam: string;
			readonly OwningUser: string;
			/** Ngày kết thúc của phạm vi lặp lại. */
			readonly PatternEndDate_UtcDateAndTime: string;
			/** Loại kết thúc mẫu của chuỗi lặp lại. */
			readonly PatternEndType: string;
			/** Ngày bắt đầu của Phạm vi lặp lại. */
			readonly PatternStartDate_UtcDateAndTime: string;
			/** Loại lặp lại. */
			readonly RecurrencePatternType: string;
			/** Mã định danh duy nhất của thực thể có liên kết với quy tắc lặp lại. */
			readonly RuleId: string;
			/** Thời gian bắt đầu của hoạt động lặp lại. */
			readonly StartTime_UtcDateAndTime: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RecurrenceRule {
		enum Instance {
			/** 5 */
			Cuoi_cung,
			/** 1 */
			Dau_tien,
			/** 3 */
			Thu_ba,
			/** 2 */
			Thu_hai,
			/** 4 */
			Thu_tu
		}
		enum MonthOfYear {
			/** 1 */
			Thang_1,
			/** 10 */
			Thang_10,
			/** 11 */
			Thang_11,
			/** 12 */
			Thang_12,
			/** 2 */
			Thang_2,
			/** 3 */
			Thang_3,
			/** 4 */
			Thang_4,
			/** 5 */
			Thang_5,
			/** 6 */
			Thang_6,
			/** 7 */
			Thang_7,
			/** 8 */
			Thang_8,
			/** 9 */
			Thang_9,
			/** 0 */
			Thang_trong_Nam_khong_hop_le
		}
		enum ObjectTypeCode {
		}
		enum PatternEndType {
			/** 1 */
			Khong_co_Ngay_Ket_thuc,
			/** 2 */
			Lan_xay_ra,
			/** 3 */
			Ngay_Ket_thuc_Kieu
		}
		enum RecurrencePatternType {
			/** 3 */
			Hang_nam,
			/** 0 */
			Hang_ngay,
			/** 2 */
			Hang_thang,
			/** 1 */
			Hang_tuan
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