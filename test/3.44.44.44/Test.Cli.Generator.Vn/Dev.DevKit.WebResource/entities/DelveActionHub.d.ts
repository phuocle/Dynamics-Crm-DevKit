//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class DelveActionHubApi {
		/**
		* DynamicsCrm.DevKit DelveActionHubApi
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
		/** Hiện loại thông báo. */
		readonly CardType: OptionSet.DelveActionHub.CardType;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedTime_UtcDateAndTime: Date;
		/** Hiển thị các phiên bản thực thể. */
		DelveActionHubId: string;
		/** Chỉ sử dụng nội bộ. */
		Description: string;
		/** Hiển thị tỷ giá của loại tiền được liên kết với hub hành động Delve theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Lưu trữ tên Lớp Biểu tượng của Thẻ ActionHub Delve. */
		readonly IconClassName: string;
		/** Hiển thị liên kết web thư. */
		MailWebLink: string;
		/** Hiển thị email. Thông tin này chỉ dùng cho email nhận được. */
		MessageId: string;
		/** Hiển thị ngày và giờ nhận được email. */
		readonly MessageTime_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedTime_UtcDateAndTime: Date;
		/** Hiển thị tổ chức sở hữu bản ghi. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		RelatedMailIds: string;
		/** Nhập người gửi email. */
		Sender: string;
		/** ID bản ghi của thực thể người gửi. */
		SenderEntityId: string;
		/** Mã Loại Đối tượng của thực thể người gửi. */
		readonly SenderEntityObjectTypeCode: number;
		/** Hình ảnh của người gửi. */
		SenderImageUrl: string;
		/** Cho biết bản ghi hành động Delve là đang chờ xử lý, đã hoàn thành hay đang theo dõi. */
		StateCode: OptionSet.DelveActionHub.StateCode;
		/** Chọn trạng thái bản ghi hành động delve. */
		StatusCode: OptionSet.DelveActionHub.StatusCode;
		/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của email. */
		Subject: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Hiển thị tỷ giá của loại tiền được liên kết với hub hành động Delve theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Hiện loại thông báo. */
			readonly CardType: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedTime_UtcDateAndTime: string;
			/** Hiển thị các phiên bản thực thể. */
			readonly DelveActionHubId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Description: string;
			/** Hiển thị tỷ giá của loại tiền được liên kết với hub hành động Delve theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Lưu trữ tên Lớp Biểu tượng của Thẻ ActionHub Delve. */
			readonly IconClassName: string;
			/** Hiển thị liên kết web thư. */
			readonly MailWebLink: string;
			/** Hiển thị email. Thông tin này chỉ dùng cho email nhận được. */
			readonly MessageId: string;
			/** Hiển thị ngày và giờ nhận được email. */
			readonly MessageTime_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedTime_UtcDateAndTime: string;
			/** Hiển thị tổ chức sở hữu bản ghi. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RelatedMailIds: string;
			/** Nhập người gửi email. */
			readonly Sender: string;
			/** ID bản ghi của thực thể người gửi. */
			readonly SenderEntityId: string;
			/** Mã Loại Đối tượng của thực thể người gửi. */
			readonly SenderEntityObjectTypeCode: string;
			/** Hình ảnh của người gửi. */
			readonly SenderImageUrl: string;
			/** Cho biết bản ghi hành động Delve là đang chờ xử lý, đã hoàn thành hay đang theo dõi. */
			readonly StateCode: string;
			/** Chọn trạng thái bản ghi hành động delve. */
			readonly StatusCode: string;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của email. */
			readonly Subject: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Hiển thị tỷ giá của loại tiền được liên kết với hub hành động Delve theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DelveActionHub {
		enum CardType {
			/** 0 */
			Mac_dinh,
			/** 3 */
			MeetingRequest,
			/** 1 */
			SendContentRequest,
			/** 2 */
			YesNo
		}
		enum RecordIdObjectTypeCode {
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 1 */
			Da_hoan_thanh,
			/** 0 */
			Dang_cho_xu_ly,
			/** 2 */
			Loai_bo
		}
		enum StatusCode {
			/** 2 */
			Da_hoan_thanh,
			/** 1 */
			Dang_cho_xu_ly,
			/** 3 */
			Loai_bo
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