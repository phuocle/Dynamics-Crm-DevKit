//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class TimeZoneRuleApi {
		/**
		* DynamicsCrm.DevKit TimeZoneRuleApi
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
		/** Thiên về thời gian cơ bản của quy tắc múi giờ. */
		Bias: number;
		/** Mã định danh duy nhất của người dùng đã tạo quy tắc múi giờ. */
		readonly CreatedBy: string;
		/** Ngày giờ tạo quy tắc múi giờ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo timezonerule. */
		readonly CreatedOnBehalfBy: string;
		/** Thiên về giờ bổ sung vào thiên về giờ cơ sở cho quy ước giờ mùa hè. */
		DaylightBias: number;
		/** Ngày của tháng bắt đầu tính theo giờ mùa hè. */
		DaylightDay: number;
		/** Ngày của tuần bắt đầu tính theo giờ mùa hè. */
		DaylightDayOfWeek: number;
		/** Giờ của ngày bắt đầu tính theo giờ mùa hè */
		DaylightHour: number;
		/** Phút của giờ bắt đầu tính theo giờ mùa hè. */
		DaylightMinute: number;
		/** Tháng bắt đầu tính theo giờ mùa hè. */
		DaylightMonth: number;
		/** Giây phút bắt đầu tính theo giờ mùa hè. */
		DaylightSecond: number;
		/** Năm bắt đầu tính theo giờ mùa hè. */
		DaylightYear: number;
		/** Thời điểm quy tắc này có hiệu lực, theo giờ địa phương. */
		EffectiveDateTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của người dùng đã sửa quy tắc múi giờ lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày giờ sửa đổi quy tắc múi giờ. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi timezonerule lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với quy tắc múi giờ. */
		readonly OrganizationId: string;
		/** Thiên về giờ bổ sung vào thiên về giờ cơ sở cho giờ chuẩn. */
		StandardBias: number;
		/** Ngày của tháng bắt đầu tính theo giờ chuẩn. */
		StandardDay: number;
		/** Ngày của tuần bắt đầu tính theo giờ chuẩn. */
		StandardDayOfWeek: number;
		/** Giờ của ngày bắt đầu tính theo giờ chuẩn. */
		StandardHour: number;
		/** Phút của giờ bắt đầu tính theo giờ chuẩn. */
		StandardMinute: number;
		/** Tháng bắt đầu tính theo giờ chuẩn. */
		StandardMonth: number;
		/** Giây Phút bắt đầu tính theo giờ chuẩn. */
		StandardSecond: number;
		/** Năm bắt đầu tính theo giờ chuẩn. */
		StandardYear: number;
		/** Mã định danh duy nhất của định nghĩa múi giờ. */
		TimeZoneDefinitionId: string;
		/** Mã định danh duy nhất của quy tắc múi giờ. */
		TimeZoneRuleId: string;
		/** Chỉ sử dụng nội bộ */
		TimeZoneRuleVersionNumber: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Thiên về thời gian cơ bản của quy tắc múi giờ. */
			readonly Bias: string;
			/** Mã định danh duy nhất của người dùng đã tạo quy tắc múi giờ. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo quy tắc múi giờ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo timezonerule. */
			readonly CreatedOnBehalfBy: string;
			/** Thiên về giờ bổ sung vào thiên về giờ cơ sở cho quy ước giờ mùa hè. */
			readonly DaylightBias: string;
			/** Ngày của tháng bắt đầu tính theo giờ mùa hè. */
			readonly DaylightDay: string;
			/** Ngày của tuần bắt đầu tính theo giờ mùa hè. */
			readonly DaylightDayOfWeek: string;
			/** Giờ của ngày bắt đầu tính theo giờ mùa hè */
			readonly DaylightHour: string;
			/** Phút của giờ bắt đầu tính theo giờ mùa hè. */
			readonly DaylightMinute: string;
			/** Tháng bắt đầu tính theo giờ mùa hè. */
			readonly DaylightMonth: string;
			/** Giây phút bắt đầu tính theo giờ mùa hè. */
			readonly DaylightSecond: string;
			/** Năm bắt đầu tính theo giờ mùa hè. */
			readonly DaylightYear: string;
			/** Thời điểm quy tắc này có hiệu lực, theo giờ địa phương. */
			readonly EffectiveDateTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của người dùng đã sửa quy tắc múi giờ lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày giờ sửa đổi quy tắc múi giờ. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi timezonerule lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với quy tắc múi giờ. */
			readonly OrganizationId: string;
			/** Thiên về giờ bổ sung vào thiên về giờ cơ sở cho giờ chuẩn. */
			readonly StandardBias: string;
			/** Ngày của tháng bắt đầu tính theo giờ chuẩn. */
			readonly StandardDay: string;
			/** Ngày của tuần bắt đầu tính theo giờ chuẩn. */
			readonly StandardDayOfWeek: string;
			/** Giờ của ngày bắt đầu tính theo giờ chuẩn. */
			readonly StandardHour: string;
			/** Phút của giờ bắt đầu tính theo giờ chuẩn. */
			readonly StandardMinute: string;
			/** Tháng bắt đầu tính theo giờ chuẩn. */
			readonly StandardMonth: string;
			/** Giây Phút bắt đầu tính theo giờ chuẩn. */
			readonly StandardSecond: string;
			/** Năm bắt đầu tính theo giờ chuẩn. */
			readonly StandardYear: string;
			/** Mã định danh duy nhất của định nghĩa múi giờ. */
			readonly TimeZoneDefinitionId: string;
			/** Mã định danh duy nhất của quy tắc múi giờ. */
			readonly TimeZoneRuleId: string;
			/** Chỉ sử dụng nội bộ */
			readonly TimeZoneRuleVersionNumber: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TimeZoneRule {
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