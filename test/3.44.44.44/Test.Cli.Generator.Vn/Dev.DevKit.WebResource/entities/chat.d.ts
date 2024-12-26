//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class chatApi {
		/**
		* DynamicsCrm.DevKit chatApi
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
		/** Thông tin bổ sung được cung cấp bởi ứng dụng bên ngoài là JSON. Chỉ sử dụng nội bộ. */
		ActivityAdditionalParams: string;
		/** Mã định danh duy nhất của hoạt động. */
		ActivityId: string;
		/** Khoảng thời gian thực tế của hoạt động tính bằng phút. */
		ActualDurationMinutes: number;
		/** Thời gian kết thúc thực tế của hoạt động. */
		ActualEnd_UtcDateAndTime: Date;
		/** Thời gian bắt đầu thực tế của hoạt động. */
		ActualStart_UtcDateAndTime: Date;
		/** Cho biết cách khởi nguồn liên hệ về hoạt động xã hội, chẳng hạn như Twitter hoặc Facebook. Trường này ở trạng thái chỉ đọc. */
		Community: OptionSet.chat.Community;
		/** Mã định danh duy nhất của người dùng đã tạo hoạt động. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo hoạt động. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Ngày và giờ của lần gửi hoạt động cuối cùng. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Ưu tiên gửi hoạt động đến máy chủ email. */
		DeliveryPriorityCode: OptionSet.chat.DeliveryPriorityCode;
		/** Mô tả của hoạt động. */
		Description: string;
		/** Chỉ sử dụng nội bộ. Một trường tính toán dạng văn bản đa dạng thức để hiển thị bản tóm tắt các sự kiện. */
		readonly EventsSummary: string;
		/** ID thư của hoạt động được trả về từ Exchange Server. */
		ExchangeItemId: string;
		/** Tỷ giá của loại tiền liên kết với activitypointer theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Hiển thị liên kết web Hoạt động của email thể loại. */
		ExchangeWebLink: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Loại phiên bản của chuỗi lặp lại. */
		readonly InstanceTypeCode: OptionSet.chat.InstanceTypeCode;
		/** Thông tin về việc hoạt động có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Chỉ sử dụng nội bộ. */
		IsMapiPrivate: boolean;
		/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Thông tin về việc hoạt động có được tạo từ quy tắc quy trình làm việc hay không. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Lỗi đồng bộ hóa xảy ra gần đây nhất với cuộc trò chuyện. */
		LastSyncError: number;
		/** Để lại Thư Thoại */
		LeftVoiceMail: boolean;
		/** Chỉ sử dụng nội bộ. Mã định danh duy nhất của người dùng đã liên kết bản ghi. */
		readonly LinkedBy: string;
		/** Chỉ sử dụng nội bộ. Ngày và giờ liên kết bản ghi. */
		readonly LinkedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng sửa đổi hoạt động lần cuối. */
		readonly ModifiedBy: string;
		/** Người cập nhật cuộc trò chuyện lần gần nhất trong Teams. */
		ModifiedInTeamsByActivityPartyId: string;
		/** Ngày và giờ cuộc trò chuyện được cập nhật lần gần nhất trong Teams. Trường này sử dụng múi giờ được chọn trong các tùy chọn Dynamics 365. */
		ModifiedInTeamsOn_UtcDateAndTime: Date;
		/** Ngày và giờ sửa đổi hoạt động lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi activitypointer lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hoạt động. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu hoạt động. */
		readonly OwningUser: string;
		/** Chỉ sử dụng nội bộ. */
		readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date;
		/** Mức ưu tiên của hoạt động. */
		PriorityCode: OptionSet.chat.PriorityCode;
		/** Mã định danh duy nhất của Quy trình. */
		ProcessId: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_account_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_adx_invitation_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_contact_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_new_interactionforemail_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_knowledgearticle_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_knowledgebaserecord_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_adplacement_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_pollplacement_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_publishingstatetransitionrule_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_redirect_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_shortcut_chat: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_website_chat: string;
		/** Khoảng thời gian theo lịch của hoạt động, tính bằng phút. */
		ScheduledDurationMinutes: number;
		/** Thời gian kết thúc theo lịch của hoạt động. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Thời gian bắt đầu theo lịch của hoạt động. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của hộp thư liên kết với người gửi thư qua email. */
		readonly SenderMailboxId: string;
		/** Ngày và giờ gửi hoạt động. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Uniqueidentifier chỉ định id chuỗi lặp lại của phiên bản. */
		readonly SeriesId: string;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi trường hợp. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho trường hợp này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của Giai đoạn. */
		StageId: string;
		/** Trạng thái của hoạt động. */
		StateCode: OptionSet.chat.StateCode;
		/** Lý do cho trạng thái của hoạt động. */
		StatusCode: OptionSet.chat.StatusCode;
		/** Chỉ sử dụng nội bộ. Chủ đề */
		Subject: string;
		/** Hiển thị trạng thái đồng bộ hóa. */
		SyncStatus: OptionSet.chat.SyncStatus;
		/** Chỉ sử dụng nội bộ. ID trò chuyện Teams */
		teamschatid: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với activitypointer. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Chỉ sử dụng nội bộ. Mã định danh duy nhất của người dùng đã hủy liên kết bản ghi. */
		readonly UnLinkedBy: string;
		/** Chỉ sử dụng nội bộ. Ngày và giờ hủy liên kết bản ghi. */
		readonly UnLinkedOn_UtcDateAndTime: Date;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của hoạt động. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Thông tin bổ sung được cung cấp bởi ứng dụng bên ngoài là JSON. Chỉ sử dụng nội bộ. */
			readonly ActivityAdditionalParams: string;
			/** Mã định danh duy nhất của hoạt động. */
			readonly ActivityId: string;
			/** Khoảng thời gian thực tế của hoạt động tính bằng phút. */
			readonly ActualDurationMinutes: string;
			/** Thời gian kết thúc thực tế của hoạt động. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Thời gian bắt đầu thực tế của hoạt động. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Cho biết cách khởi nguồn liên hệ về hoạt động xã hội, chẳng hạn như Twitter hoặc Facebook. Trường này ở trạng thái chỉ đọc. */
			readonly Community: string;
			/** Mã định danh duy nhất của người dùng đã tạo hoạt động. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo hoạt động. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo activitypointer. */
			readonly CreatedOnBehalfBy: string;
			/** Ngày và giờ của lần gửi hoạt động cuối cùng. */
			readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
			/** Ưu tiên gửi hoạt động đến máy chủ email. */
			readonly DeliveryPriorityCode: string;
			/** Mô tả của hoạt động. */
			readonly Description: string;
			/** Chỉ sử dụng nội bộ. Một trường tính toán dạng văn bản đa dạng thức để hiển thị bản tóm tắt các sự kiện. */
			readonly EventsSummary: string;
			/** ID thư của hoạt động được trả về từ Exchange Server. */
			readonly ExchangeItemId: string;
			/** Tỷ giá của loại tiền liên kết với activitypointer theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Hiển thị liên kết web Hoạt động của email thể loại. */
			readonly ExchangeWebLink: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Loại phiên bản của chuỗi lặp lại. */
			readonly InstanceTypeCode: string;
			/** Thông tin về việc hoạt động có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsMapiPrivate: string;
			/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Thông tin về việc hoạt động có được tạo từ quy tắc quy trình làm việc hay không. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Lỗi đồng bộ hóa xảy ra gần đây nhất với cuộc trò chuyện. */
			readonly LastSyncError: string;
			/** Để lại Thư Thoại */
			readonly LeftVoiceMail: string;
			/** Chỉ sử dụng nội bộ. Mã định danh duy nhất của người dùng đã liên kết bản ghi. */
			readonly LinkedBy: string;
			/** Chỉ sử dụng nội bộ. Ngày và giờ liên kết bản ghi. */
			readonly LinkedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng sửa đổi hoạt động lần cuối. */
			readonly ModifiedBy: string;
			/** Người cập nhật cuộc trò chuyện lần gần nhất trong Teams. */
			readonly ModifiedInTeamsByActivityPartyId: string;
			/** Ngày và giờ cuộc trò chuyện được cập nhật lần gần nhất trong Teams. Trường này sử dụng múi giờ được chọn trong các tùy chọn Dynamics 365. */
			readonly ModifiedInTeamsOn_UtcDateAndTime: string;
			/** Ngày và giờ sửa đổi hoạt động lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi activitypointer lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hoạt động. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu hoạt động. */
			readonly OwningUser: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PostponeActivityProcessingUntil_UtcDateAndTime: string;
			/** Mức ưu tiên của hoạt động. */
			readonly PriorityCode: string;
			/** Mã định danh duy nhất của Quy trình. */
			readonly ProcessId: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_account_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_adx_invitation_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_contact_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_new_interactionforemail_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_knowledgearticle_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_knowledgebaserecord_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_adplacement_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_pollplacement_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_redirect_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_shortcut_chat: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_website_chat: string;
			/** Khoảng thời gian theo lịch của hoạt động, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Thời gian kết thúc theo lịch của hoạt động. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Thời gian bắt đầu theo lịch của hoạt động. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Mã định danh duy nhất của hộp thư liên kết với người gửi thư qua email. */
			readonly SenderMailboxId: string;
			/** Ngày và giờ gửi hoạt động. */
			readonly SentOn_UtcDateAndTime: string;
			/** Uniqueidentifier chỉ định id chuỗi lặp lại của phiên bản. */
			readonly SeriesId: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi trường hợp. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho trường hợp này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Mã định danh duy nhất của Giai đoạn. */
			readonly StageId: string;
			/** Trạng thái của hoạt động. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của hoạt động. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. Chủ đề */
			readonly Subject: string;
			/** Hiển thị trạng thái đồng bộ hóa. */
			readonly SyncStatus: string;
			/** Chỉ sử dụng nội bộ. ID trò chuyện Teams */
			readonly teamschatid: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với activitypointer. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Chỉ sử dụng nội bộ. Mã định danh duy nhất của người dùng đã hủy liên kết bản ghi. */
			readonly UnLinkedBy: string;
			/** Chỉ sử dụng nội bộ. Ngày và giờ hủy liên kết bản ghi. */
			readonly UnLinkedOn_UtcDateAndTime: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của hoạt động. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace chat {
		enum ActivityTypeCode {
			/** 4210 */
			Cuoc_goi_dien_thoai,
			/** 4201 */
			Cuoc_hen,
			/** 4251 */
			Cuoc_hen_lap_lai,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 10311 */
			Nhan_xet_Cong_thong_tin,
			/** 4212 */
			Nhiem_vu,
			/** 10310 */
			Quy_doi_Loi_moi,
			/** 4207 */
			Thu_tin,
			/** 10185 */
			Tro_chuyen_qua_Teams
		}
		enum Community {
			/** 1 */
			Facebook,
			/** 0 */
			Khac,
			/** 2 */
			Twitter
		}
		enum DeliveryPriorityCode {
			/** 1 */
			Binh_thuong,
			/** 2 */
			Cao,
			/** 0 */
			Thap
		}
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
		enum PriorityCode {
			/** 1 */
			Binh_thuong,
			/** 2 */
			Cao,
			/** 0 */
			Thap
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 1 */
			Da_hoan_thanh,
			/** 2 */
			Da_huy,
			/** 3 */
			Da_lap_lich,
			/** 0 */
			Mo
		}
		enum StatusCode {
			/** 2 */
			Da_hoan_thanh,
			/** 3 */
			Da_huy,
			/** 4 */
			Da_lap_lich,
			/** 1 */
			Mo
		}
		enum SyncStatus {
			/** 0 */
			Chua_bat,
			/** 2 */
			Da_bat,
			/** 1 */
			Dang_cho_xu_ly
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