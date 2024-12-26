//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ActivityPartyApi {
		/**
		* DynamicsCrm.DevKit ActivityPartyApi
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
		/** Mã định danh duy nhất của hoạt động liên kết với bên hoạt động. (Một "bên" là bất kỳ cá nhân nào được liên kết với một hoạt động). */
		ActivityId: string;
		/** Mã định danh duy nhất của bên hoạt động. */
		ActivityPartyId: string;
		/** Địa chỉ email dùng để nhận email và liên kết với thực thể đích. */
		AddressUsed: string;
		/** Số cột địa chỉ email từ bên được liên kết. */
		readonly AddressUsedEmailColumnNumber: number;
		/** Thông tin về việc có cho phép gửi email đến bên hoạt động hay không. */
		readonly DoNotEmail: boolean;
		/** Thông tin về việc có cho phép gửi fax đến bên hoạt động hay không. */
		readonly DoNotFax: boolean;
		/** Thông tin về việc có cho phép gọi điện thoại cho khách hàng tiềm năng hay không. */
		readonly DoNotPhone: boolean;
		/** Thông tin về việc có cho phép gửi thư bưu điện đến khách hàng tiềm năng hay không. */
		readonly DoNotPostalMail: boolean;
		/** Số lần nỗ lực được nguồn lực sử dụng trong hoạt động lên hẹn dịch vụ. */
		Effort: number;
		/** Chỉ sử dụng nội bộ. */
		ExchangeEntryId: string;
		/** Loại phiên bản của chuỗi lặp lại. */
		readonly InstanceTypeCode: OptionSet.ActivityParty.InstanceTypeCode;
		/** Thông tin về việc xóa bản ghi thực thể phụ thuộc hay không. */
		readonly IsPartyDeleted: boolean;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		readonly OwningBusinessUnit: string;
		readonly OwningUser: string;
		/** Vai trò của cá nhân trong hoạt động, chẳng hạn như người gửi, người nhận, cc, bcc, bắt buộc, không bắt buộc, người tổ chức, lưu ý hoặc chủ sở hữu. */
		ParticipationTypeMask: OptionSet.ActivityParty.ParticipationTypeMask;
		/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
		partyid_account: string;
		/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
		partyid_contact: string;
		/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
		partyid_knowledgearticle: string;
		/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
		partyid_queue: string;
		/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
		partyid_systemuser: string;
		/** Thời gian kết thúc theo lịch của hoạt động. */
		readonly ScheduledEnd_UtcDateOnly: Date;
		/** Thời gian bắt đầu theo lịch của hoạt động. */
		readonly ScheduledStart_UtcDateOnly: Date;
		/** Tên của bên được sử dụng khi bên đó không được giải quyết thành một thực thể. */
		UnresolvedPartyName: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của hoạt động liên kết với bên hoạt động. (Một "bên" là bất kỳ cá nhân nào được liên kết với một hoạt động). */
			readonly ActivityId: string;
			/** Mã định danh duy nhất của bên hoạt động. */
			readonly ActivityPartyId: string;
			/** Địa chỉ email dùng để nhận email và liên kết với thực thể đích. */
			readonly AddressUsed: string;
			/** Số cột địa chỉ email từ bên được liên kết. */
			readonly AddressUsedEmailColumnNumber: string;
			/** Thông tin về việc có cho phép gửi email đến bên hoạt động hay không. */
			readonly DoNotEmail: string;
			/** Thông tin về việc có cho phép gửi fax đến bên hoạt động hay không. */
			readonly DoNotFax: string;
			/** Thông tin về việc có cho phép gọi điện thoại cho khách hàng tiềm năng hay không. */
			readonly DoNotPhone: string;
			/** Thông tin về việc có cho phép gửi thư bưu điện đến khách hàng tiềm năng hay không. */
			readonly DoNotPostalMail: string;
			/** Số lần nỗ lực được nguồn lực sử dụng trong hoạt động lên hẹn dịch vụ. */
			readonly Effort: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ExchangeEntryId: string;
			/** Loại phiên bản của chuỗi lặp lại. */
			readonly InstanceTypeCode: string;
			/** Thông tin về việc xóa bản ghi thực thể phụ thuộc hay không. */
			readonly IsPartyDeleted: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			readonly OwningBusinessUnit: string;
			readonly OwningUser: string;
			/** Vai trò của cá nhân trong hoạt động, chẳng hạn như người gửi, người nhận, cc, bcc, bắt buộc, không bắt buộc, người tổ chức, lưu ý hoặc chủ sở hữu. */
			readonly ParticipationTypeMask: string;
			/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
			readonly partyid_account: string;
			/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
			readonly partyid_contact: string;
			/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
			readonly partyid_knowledgearticle: string;
			/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
			readonly partyid_queue: string;
			/** Mã định danh duy nhất của bên được liên kết với hoạt động. */
			readonly partyid_systemuser: string;
			/** Thời gian kết thúc theo lịch của hoạt động. */
			readonly ScheduledEnd_UtcDateOnly: string;
			/** Thời gian bắt đầu theo lịch của hoạt động. */
			readonly ScheduledStart_UtcDateOnly: string;
			/** Tên của bên được sử dụng khi bên đó không được giải quyết thành một thực thể. */
			readonly UnresolvedPartyName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ActivityParty {
		enum InstanceTypeCode {
			/** 1 */
			Ban_ghi_chu_Lap_lai,
			/** 0 */
			Khong_Lap_lai,
			/** 3 */
			Ngoai_le_Lap_lai,
			/** 4 */
			Ngoai_le_Tuong_lai_Lap_lai,
			/** 2 */
			Phien_ban_Lap_lai
		}
		enum ParticipationTypeMask {
			/** 9 */
			Chu_so_huu,
			/** 13 */
			Co_lien_quan,
			/** 11 */
			Khach_hang,
			/** 8 */
			Lien_quan_den,
			/** 1 */
			Nguoi_gui,
			/** 4 */
			Nguoi_nhan_trong_muc_BCC,
			/** 3 */
			Nguoi_nhan_trong_muc_CC,
			/** 2 */
			Nguoi_nhan_trong_muc_Den,
			/** 5 */
			Nguoi_tham_gia_bat_buoc,
			/** 12 */
			Nguoi_tham_gia_cuoc_tro_chuyen,
			/** 6 */
			Nguoi_tham_gia_khong_bat_buoc,
			/** 7 */
			Nguoi_to_chuc,
			/** 10 */
			Nguon_luc
		}
		enum PartyObjectTypeCode {
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