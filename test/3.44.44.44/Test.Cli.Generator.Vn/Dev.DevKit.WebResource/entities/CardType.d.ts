//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CardTypeApi {
		/**
		* DynamicsCrm.DevKit CardTypeApi
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
		/** Chỉ sử dụng nội bộ. */
		Actions: string;
		/** Mẫu AdaptiveCard. */
		AdaptiveCardTemplate: string;
		/** Mọi tùy chọn Bolean cho cardtype. */
		BoolCardOption: boolean;
		/** Tên thực thể tùy chỉnh. */
		CardName: string;
		/** Giá trị CardType ENUM. */
		CardType1: number;
		/** CardTypeIcon của thẻ. */
		CardTypeIcon: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		CardTypeId: string;
		/** Xác định loại máy khách mà thẻ này sẽ khả dụng. */
		ClientAvailability: OptionSet.CardType.ClientAvailability;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tỷ giá của loại tiền đã liên kết với CardType theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** GroupCategory cho biết nhóm các thẻ trong Trợ lý. */
		GroupCategory: number;
		/** Chỉ định loại nhóm thẻ */
		GroupType: string;
		/** Chỉ định xem loại thẻ có loại bỏ báo lại hay không */
		HasSnoozeDismiss: boolean;
		/** Số thứ tự của quá trình nhập tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mọi tùy chọn int cho cardtype. */
		IntCardOption: number;
		/** IsBaseCard */
		IsBaseCard: boolean;
		/** IsEnabled */
		IsEnabled: boolean;
		/** IsLiveOnly */
		IsLiveOnly: boolean;
		/** IsPreviewCard */
		IsPreviewCard: boolean;
		/** Cột này được Phần bổ trợ cập nhật dựa trên dữ liệu tìm nạp lần cuối. */
		LastSyncTime_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Mức ưu tiên của CardType */
		Priority: number;
		/** Tên nhà phát hành của loại thẻ */
		PublisherName: string;
		/** Cột này được Phần bổ trợ cập nhật dựa trên dữ liệu tìm nạp lần cuối. */
		ScheduleTime_TimezoneDateAndTime: Date;
		/** Tiêu đề mềm của thẻ. */
		SoftTitle: string;
		/** Mọi tùy chọn chuỗi cho cardtype. */
		StringCardOption: string;
		/** Văn bản tóm tắt của thẻ. */
		SummaryText: string;
		/** Tỷ giá của loại tiền đã liên kết với CardType theo loại tiền gốc. */
		TransactionCurrencyId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly Actions: string;
			/** Mẫu AdaptiveCard. */
			readonly AdaptiveCardTemplate: string;
			/** Mọi tùy chọn Bolean cho cardtype. */
			readonly BoolCardOption: string;
			/** Tên thực thể tùy chỉnh. */
			readonly CardName: string;
			/** Giá trị CardType ENUM. */
			readonly CardType1: string;
			/** CardTypeIcon của thẻ. */
			readonly CardTypeIcon: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly CardTypeId: string;
			/** Xác định loại máy khách mà thẻ này sẽ khả dụng. */
			readonly ClientAvailability: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tỷ giá của loại tiền đã liên kết với CardType theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** GroupCategory cho biết nhóm các thẻ trong Trợ lý. */
			readonly GroupCategory: string;
			/** Chỉ định loại nhóm thẻ */
			readonly GroupType: string;
			/** Chỉ định xem loại thẻ có loại bỏ báo lại hay không */
			readonly HasSnoozeDismiss: string;
			/** Số thứ tự của quá trình nhập tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mọi tùy chọn int cho cardtype. */
			readonly IntCardOption: string;
			/** IsBaseCard */
			readonly IsBaseCard: string;
			/** IsEnabled */
			readonly IsEnabled: string;
			/** IsLiveOnly */
			readonly IsLiveOnly: string;
			/** IsPreviewCard */
			readonly IsPreviewCard: string;
			/** Cột này được Phần bổ trợ cập nhật dựa trên dữ liệu tìm nạp lần cuối. */
			readonly LastSyncTime_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Mức ưu tiên của CardType */
			readonly Priority: string;
			/** Tên nhà phát hành của loại thẻ */
			readonly PublisherName: string;
			/** Cột này được Phần bổ trợ cập nhật dựa trên dữ liệu tìm nạp lần cuối. */
			readonly ScheduleTime_TimezoneDateAndTime: string;
			/** Tiêu đề mềm của thẻ. */
			readonly SoftTitle: string;
			/** Mọi tùy chọn chuỗi cho cardtype. */
			readonly StringCardOption: string;
			/** Văn bản tóm tắt của thẻ. */
			readonly SummaryText: string;
			/** Tỷ giá của loại tiền đã liên kết với CardType theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CardType {
		enum ClientAvailability {
			/** 3 */
			MocaAndWeb,
			/** 2 */
			MocaOnly,
			/** 1 */
			WebClientOnly
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