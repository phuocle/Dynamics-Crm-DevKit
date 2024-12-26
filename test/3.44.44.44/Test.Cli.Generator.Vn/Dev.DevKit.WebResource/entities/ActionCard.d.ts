//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ActionCardApi {
		/**
		* DynamicsCrm.DevKit ActionCardApi
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
		/** Mã định danh duy nhất của thẻ hành động. */
		ActionCardId: string;
		/** Giá trị CardType ENUM. */
		CardType: number;
		/** Mã định danh duy nhất của loại thẻ. */
		CardTypeId: string;
		/** Mã định danh duy nhất của người dùng đã tạo thẻ hành động. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo thẻ hành động. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo thẻ hành động. */
		readonly CreatedOnBehalfBy: string;
		/** Chuỗi theo định dạng Json dành cho mục đích chung. */
		Data: string;
		/** Mô tả Thẻ */
		Description: string;
		/** Tỷ giá của loại tiền đã liên kết với thẻ hành động theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Hiển thị Ngày Hết hạn */
		ExpiryDate_UtcDateAndTime: Date;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi thẻ hành động lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi thẻ hành động lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi thẻ hành động lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu thẻ hành động. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu thẻ hành động. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu thẻ hành động. */
		readonly OwningUser: string;
		/** Chuỗi theo định dạng Json dành cho đối tượng bản lưu ý chính. */
		ParentRegardingObjectIdData: string;
		/** Mức ưu tiên của ActionCard */
		Priority: number;
		/** RecordIdObjectTypeCode2 của Thẻ Hành động */
		RecordIdObjectTypeCode2: number;
		/** Chỉ sử dụng nội bộ. */
		ReferenceTokens: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_account_actioncard: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_adx_inviteredemption: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_adx_portalcomment: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_appointment_actioncard: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_chat: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_contact_actioncard: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_email_actioncard: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_fax_actioncard: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_letter_actioncard: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_phonecall_actioncard: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_recurringappointmentmaster_actioncard: string;
		/** Chọn bản ghi liên quan đến thẻ. */
		regardingobjectid_task_actioncard: string;
		/** Nguồn cho Thẻ Hành động */
		Source: OptionSet.ActionCard.Source;
		/** Hiển thị Ngày Bắt đầu */
		StartDate_UtcDateAndTime: Date;
		/** Trạng thái của Thẻ Hành động */
		State: OptionSet.ActionCard.State;
		/** Tiêu đề của ActionCard */
		Title: string;
		/** Mã định danh duy nhất của loại tiền liên kết với thẻ hành động. */
		TransactionCurrencyId: string;
		/** Số phiên bản của thẻ hành động. */
		readonly VersionNumber: number;
		/** Chọn đặt khả năng hiển thị là công khai/riêng tư. */
		Visibility: boolean;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của thẻ hành động. */
			readonly ActionCardId: string;
			/** Giá trị CardType ENUM. */
			readonly CardType: string;
			/** Mã định danh duy nhất của loại thẻ. */
			readonly CardTypeId: string;
			/** Mã định danh duy nhất của người dùng đã tạo thẻ hành động. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo thẻ hành động. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo thẻ hành động. */
			readonly CreatedOnBehalfBy: string;
			/** Chuỗi theo định dạng Json dành cho mục đích chung. */
			readonly Data: string;
			/** Mô tả Thẻ */
			readonly Description: string;
			/** Tỷ giá của loại tiền đã liên kết với thẻ hành động theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Hiển thị Ngày Hết hạn */
			readonly ExpiryDate_UtcDateAndTime: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi thẻ hành động lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi thẻ hành động lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi thẻ hành động lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu thẻ hành động. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu thẻ hành động. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu thẻ hành động. */
			readonly OwningUser: string;
			/** Chuỗi theo định dạng Json dành cho đối tượng bản lưu ý chính. */
			readonly ParentRegardingObjectIdData: string;
			/** Mức ưu tiên của ActionCard */
			readonly Priority: string;
			/** RecordIdObjectTypeCode2 của Thẻ Hành động */
			readonly RecordIdObjectTypeCode2: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReferenceTokens: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_account_actioncard: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_appointment_actioncard: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_chat: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_contact_actioncard: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_email_actioncard: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_fax_actioncard: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_letter_actioncard: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_phonecall_actioncard: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_recurringappointmentmaster_actioncard: string;
			/** Chọn bản ghi liên quan đến thẻ. */
			readonly regardingobjectid_task_actioncard: string;
			/** Nguồn cho Thẻ Hành động */
			readonly Source: string;
			/** Hiển thị Ngày Bắt đầu */
			readonly StartDate_UtcDateAndTime: string;
			/** Trạng thái của Thẻ Hành động */
			readonly State: string;
			/** Tiêu đề của ActionCard */
			readonly Title: string;
			/** Mã định danh duy nhất của loại tiền liên kết với thẻ hành động. */
			readonly TransactionCurrencyId: string;
			/** Số phiên bản của thẻ hành động. */
			readonly VersionNumber: string;
			/** Chọn đặt khả năng hiển thị là công khai/riêng tư. */
			readonly Visibility: string;
		}
	}
}
declare namespace OptionSet {
	namespace ActionCard {
		enum ParentRegardingObjectTypeCode {
		}
		enum RecordIdObjectTypeCode {
		}
		enum RegardingObjectTypeCode {
		}
		enum Source {
			/** 1 */
			CRM,
			/** 2 */
			Exchange
		}
		enum State {
			/** 2 */
			Da_hoan_thanh,
			/** 1 */
			Da_loai_bo,
			/** 0 */
			Hien_hoat
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