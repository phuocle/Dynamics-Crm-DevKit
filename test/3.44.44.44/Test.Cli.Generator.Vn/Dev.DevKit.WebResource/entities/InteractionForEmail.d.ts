//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class InteractionForEmailApi {
		/**
		* DynamicsCrm.DevKit InteractionForEmailApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** ID Hoạt động Email. */
		readonly EmailActivityId: string;
		/** Chỉ sử dụng nội bộ. */
		EmailAddress: string;
		/** ID Hoạt động Email. */
		readonly EmailInteractionReplyId: string;
		/** Hiển thị ngày và giờ Tương tác của email. */
		readonly EmailInteractionTime_UtcDateAndTime: Date;
		/** Tỷ giá của loại tiền liên kết với InteractionForEmail theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Chỉ sử dụng nội bộ. */
		InteractedComponentText: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		InteractionForEmailId: string;
		/** Hiển thị vị trí cho Tương tác */
		InteractionLocation: string;
		/** Chỉ sử dụng nội bộ. */
		readonly InteractionPartyId: string;
		/** Chỉ sử dụng nội bộ */
		readonly InteractionPartyTypecode: number;
		/** Hiển thị Tên người đã trả lời email nếu tương tác là trả lời */
		InteractionRepliedBy: string;
		/** InteractionReplyId */
		InteractionReplyId: string;
		/** Hiển thị loại Tương tác. */
		readonly InteractionType: OptionSet.InteractionForEmail.InteractionType;
		/** Hiển thị Tổng đài viên Người dùng cho một Tương tác nếu có */
		InteractionUserAgent: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên thực thể tùy chỉnh. */
		name: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Trạng thái của Tương tác đối với Email */
		statecode: OptionSet.InteractionForEmail.statecode;
		/** Lý do dẫn đến trạng thái của Tương tác đối với Email */
		statuscode: OptionSet.InteractionForEmail.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tỷ giá của loại tiền liên kết với InteractionForEmail theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** ID Hoạt động Email. */
			readonly EmailActivityId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EmailAddress: string;
			/** ID Hoạt động Email. */
			readonly EmailInteractionReplyId: string;
			/** Hiển thị ngày và giờ Tương tác của email. */
			readonly EmailInteractionTime_UtcDateAndTime: string;
			/** Tỷ giá của loại tiền liên kết với InteractionForEmail theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Chỉ sử dụng nội bộ. */
			readonly InteractedComponentText: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly InteractionForEmailId: string;
			/** Hiển thị vị trí cho Tương tác */
			readonly InteractionLocation: string;
			/** Chỉ sử dụng nội bộ. */
			readonly InteractionPartyId: string;
			/** Chỉ sử dụng nội bộ */
			readonly InteractionPartyTypecode: string;
			/** Hiển thị Tên người đã trả lời email nếu tương tác là trả lời */
			readonly InteractionRepliedBy: string;
			/** InteractionReplyId */
			readonly InteractionReplyId: string;
			/** Hiển thị loại Tương tác. */
			readonly InteractionType: string;
			/** Hiển thị Tổng đài viên Người dùng cho một Tương tác nếu có */
			readonly InteractionUserAgent: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên thực thể tùy chỉnh. */
			readonly name: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Trạng thái của Tương tác đối với Email */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Tương tác đối với Email */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tỷ giá của loại tiền liên kết với InteractionForEmail theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace InteractionForEmail {
		enum InteractionType {
			/** 2 */
			AttachmentOpen,
			/** 0 */
			EmailOpen,
			/** 3 */
			EmailReply,
			/** 1 */
			LinkOpen
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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