//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class QuarterlyFiscalCalendarApi {
		/**
		* DynamicsCrm.DevKit QuarterlyFiscalCalendarApi
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
		readonly BusinessUnitId: string;
		/** Mã định danh duy nhất của người dùng đã tạo lịch tài khóa hàng quý. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo hạn ngạch cho lịch tài khóa hàng quý. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo quarterlyfiscalcalendar. */
		readonly CreatedOnBehalfBy: string;
		/** Ngày và giờ mà hạn ngạch bán hàng theo lịch tài khóa hàng quý có hiệu lực. */
		EffectiveOn_UtcDateOnly: Date;
		/** Tỷ giá của loại tiền liên kết với lịch tài khóa hàng quý theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Loại kỳ tài chính được dùng trong hạn ngạch bán hàng. */
		readonly FiscalPeriodType: number;
		/** Mã định danh duy nhất của người dùng sửa đổi lần cuối lịch tài khóa hàng quý. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi lịch tài khóa hàng quý lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa quarterlyfiscalcalendar lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Hạn ngạch bán hàng cho quý đầu tiên trong năm tài chính. */
		Period1: number;
		/** Giá trị tương đương loại tiền gốc của hạn ngạch bán hàng cho quý đầu tiên trong năm tài chính. */
		readonly Period1_Base: number;
		/** Hạn ngạch bán hàng cho quý thứ tư trong năm tài chính. */
		Period10: number;
		/** Giá trị tương đương tính theo loại tiền gốc của hạn ngạch bán hàng cho quý thứ tư trong năm tài chính. */
		readonly Period10_Base: number;
		/** Hạn ngạch bán hàng cho quý thứ hai trong năm tài chính. */
		Period4: number;
		/** Giá trị tương đương tính theo loại tiền gốc của hạn ngạch bán hàng cho quý thứ hai trong năm tài chính */
		readonly Period4_Base: number;
		/** Hạn ngạch bán hàng cho quý thứ ba trong năm tài chính. */
		Period7: number;
		/** Giá trị tương đương tính theo loại tiền gốc của hạn ngạch bán hàng cho quý thứ ba trong năm tài chính. */
		readonly Period7_Base: number;
		/** Mã định danh duy nhất của nhân viên bán hàng được liên kết. */
		SalesPersonId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với lịch tài chính hàng quý. */
		TransactionCurrencyId: string;
		/** Mã định danh duy nhất của lịch tài chính hàng quý. */
		UserFiscalCalendarId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			readonly BusinessUnitId: string;
			/** Mã định danh duy nhất của người dùng đã tạo lịch tài khóa hàng quý. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo hạn ngạch cho lịch tài khóa hàng quý. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo quarterlyfiscalcalendar. */
			readonly CreatedOnBehalfBy: string;
			/** Ngày và giờ mà hạn ngạch bán hàng theo lịch tài khóa hàng quý có hiệu lực. */
			readonly EffectiveOn_UtcDateOnly: string;
			/** Tỷ giá của loại tiền liên kết với lịch tài khóa hàng quý theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Loại kỳ tài chính được dùng trong hạn ngạch bán hàng. */
			readonly FiscalPeriodType: string;
			/** Mã định danh duy nhất của người dùng sửa đổi lần cuối lịch tài khóa hàng quý. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi lịch tài khóa hàng quý lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa quarterlyfiscalcalendar lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Hạn ngạch bán hàng cho quý đầu tiên trong năm tài chính. */
			readonly Period1: string;
			/** Giá trị tương đương loại tiền gốc của hạn ngạch bán hàng cho quý đầu tiên trong năm tài chính. */
			readonly Period1_Base: string;
			/** Hạn ngạch bán hàng cho quý thứ tư trong năm tài chính. */
			readonly Period10: string;
			/** Giá trị tương đương tính theo loại tiền gốc của hạn ngạch bán hàng cho quý thứ tư trong năm tài chính. */
			readonly Period10_Base: string;
			/** Hạn ngạch bán hàng cho quý thứ hai trong năm tài chính. */
			readonly Period4: string;
			/** Giá trị tương đương tính theo loại tiền gốc của hạn ngạch bán hàng cho quý thứ hai trong năm tài chính */
			readonly Period4_Base: string;
			/** Hạn ngạch bán hàng cho quý thứ ba trong năm tài chính. */
			readonly Period7: string;
			/** Giá trị tương đương tính theo loại tiền gốc của hạn ngạch bán hàng cho quý thứ ba trong năm tài chính. */
			readonly Period7_Base: string;
			/** Mã định danh duy nhất của nhân viên bán hàng được liên kết. */
			readonly SalesPersonId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với lịch tài chính hàng quý. */
			readonly TransactionCurrencyId: string;
			/** Mã định danh duy nhất của lịch tài chính hàng quý. */
			readonly UserFiscalCalendarId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace QuarterlyFiscalCalendar {
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