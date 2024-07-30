//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formadx_inviteredemption_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Chọn trạng thái của hoạt động. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab__BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6_Sections {
			_171A0ADC_6B27_41FB_B31F_2D6C193677F1: DevKit.Controls.Section;
		}
		interface tab__BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6 extends DevKit.Controls.ITab {
			Section: tab__BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6_Sections;
		}
		interface Tabs {
			_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6: tab__BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6;
		}
		interface Body {
			Tab: Tabs;
			adx_ipAddress: DevKit.Controls.String;
			/** Hiển thị ngày và giờ tạo hoạt động. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Khách hàng có hoạt động được liên kết. */
			Customers: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Nhập người dùng hoặc nhóm đã gán quản lý hoặc duy trì hoạt động. Trường này sẽ cập nhật mỗi lần gán hoạt động cho một người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Chủ đề liên kết với hoạt động. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			adx_inviteredemption_QueueItems: DevKit.Controls.NavigationItem
		}
	}
	class Formadx_inviteredemption_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form adx_inviteredemption_Information */
		Body: DevKit.Formadx_inviteredemption_Information.Body;
		/** The Header section of form adx_inviteredemption_Information */
		Header: DevKit.Formadx_inviteredemption_Information.Header;
		/** The Navigation of form adx_inviteredemption_Information */
		Navigation: DevKit.Formadx_inviteredemption_Information.Navigation;
		/** The SidePanes of form adx_inviteredemption_Information */
		SidePanes: DevKit.SidePanes;
	}
	class adx_inviteredemptionApi {
		/**
		* DynamicsCrm.DevKit adx_inviteredemptionApi
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
		/** Thông tin bổ sung được cung cấp bởi ứng dụng bên ngoài dưới dạng JSON. Chỉ sử dụng nội bộ. */
		ActivityAdditionalParams: string;
		/** Hiển thị hoạt động. */
		ActivityId: string;
		/** Nhập khoảng thời gian thực tế của hoạt động tính bằng phút. */
		ActualDurationMinutes: number;
		/** Nhập thời gian kết thúc thực tế của hoạt động. */
		ActualEnd_UtcDateAndTime: Date;
		/** Nhập thời gian bắt đầu thực tế của hoạt động. */
		ActualStart_UtcDateAndTime: Date;
		adx_ipAddress: string;
		/** Cho biết nguồn gốc của người liên hệ về hoạt động xã hội, chẳng hạn như từ Twitter hay Facebook. Đây là trường chỉ đọc. */
		Community: OptionSet.adx_inviteredemption.Community;
		/** Cho biết người tạo hoạt động. */
		readonly CreatedBy: string;
		/** Hiển thị ngày và giờ tạo hoạt động. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo con trỏ hoạt động thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Hiển thị ngày và giờ của lần gửi hoạt động cuối cùng. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Hiển thị ưu tiên gửi hoạt động đến máy chủ email. */
		DeliveryPriorityCode: OptionSet.adx_inviteredemption.DeliveryPriorityCode;
		/** Mô tả hoạt động. */
		Description: string;
		/** ID thông báo của hoạt động được trả về từ Exchange Server. */
		ExchangeItemId: string;
		/** Tỷ giá của loại tiền liên kết với activitypointer theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Hiển thị đường liên kết web của Hoạt động thuộc loại email. */
		ExchangeWebLink: string;
		/** Hiển thị số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Hiển thị loại phiên bản của chuỗi lặp lại. */
		readonly InstanceTypeCode: OptionSet.adx_inviteredemption.InstanceTypeCode;
		/** Cho biết hoạt động có được xuất hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Chỉ sử dụng nội bộ. */
		IsMapiPrivate: boolean;
		/** Cho biết hoạt động là loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Cho biết hoạt động có được tạo từ quy tắc quy trình hay không. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Chọn xem thư thoại có được để lại hay không. */
		LeftVoiceMail: boolean;
		/** Cho biết người đã cập nhật hoạt động sau cùng. */
		readonly ModifiedBy: string;
		/** Hiển thị ngày và giờ sửa đổi hoạt động lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật con trỏ hoạt động lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Hiển thị ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Hiển thị đơn vị kinh doanh sở hữu hoạt động. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hoạt động. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu hoạt động. */
		readonly OwningUser: string;
		/** Chỉ sử dụng nội bộ. */
		readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date;
		/** Hiển thị ưu tiên của hoạt động. */
		PriorityCode: OptionSet.adx_inviteredemption.PriorityCode;
		/** Hiển thị quy trình. */
		ProcessId: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_account_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_adx_invitation_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_contact_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_new_interactionforemail_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_knowledgearticle_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_knowledgebaserecord_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_adplacement_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_pollplacement_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_publishingstatetransitionrule_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_redirect_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_shortcut_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_website_adx_inviteredemption: string;
		/** Nhập khoảng thời gian đã lên lịch của hoạt động tính bằng phút. */
		ScheduledDurationMinutes: number;
		/** Nhập thời gian kết thúc đã lên lịch của hoạt động. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Nhập thời gian kết thúc đã lên lịch của hoạt động. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của hộp thư liên kết với người gửi thư email. */
		readonly SenderMailboxId: string;
		/** Hiển thị ngày và giờ gửi hoạt động. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Hiển thị ID chuỗi lặp lại của phiên bản. */
		readonly SeriesId: string;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi trường hợp. */
		SLAId: string;
		/** Thỏa thuận cấp độ dịch vụ gần đây nhất đã được áp dụng cho trường hợp này. Đây là trường chỉ dùng nội bộ. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Hiển thị giai đoạn. */
		StageId: string;
		/** Trạng thái của hoạt động. */
		StateCode: OptionSet.adx_inviteredemption.StateCode;
		/** Chọn trạng thái của hoạt động. */
		StatusCode: OptionSet.adx_inviteredemption.StatusCode;
		/** Chủ đề liên kết với hoạt động. */
		Subject: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với activitypointer. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của hoạt động. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Thông tin bổ sung được cung cấp bởi ứng dụng bên ngoài dưới dạng JSON. Chỉ sử dụng nội bộ. */
			readonly ActivityAdditionalParams: string;
			/** Hiển thị hoạt động. */
			readonly ActivityId: string;
			/** Nhập khoảng thời gian thực tế của hoạt động tính bằng phút. */
			readonly ActualDurationMinutes: string;
			/** Nhập thời gian kết thúc thực tế của hoạt động. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Nhập thời gian bắt đầu thực tế của hoạt động. */
			readonly ActualStart_UtcDateAndTime: string;
			readonly adx_ipAddress: string;
			/** Cho biết nguồn gốc của người liên hệ về hoạt động xã hội, chẳng hạn như từ Twitter hay Facebook. Đây là trường chỉ đọc. */
			readonly Community: string;
			/** Cho biết người tạo hoạt động. */
			readonly CreatedBy: string;
			/** Hiển thị ngày và giờ tạo hoạt động. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo con trỏ hoạt động thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Hiển thị ngày và giờ của lần gửi hoạt động cuối cùng. */
			readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
			/** Hiển thị ưu tiên gửi hoạt động đến máy chủ email. */
			readonly DeliveryPriorityCode: string;
			/** Mô tả hoạt động. */
			readonly Description: string;
			/** ID thông báo của hoạt động được trả về từ Exchange Server. */
			readonly ExchangeItemId: string;
			/** Tỷ giá của loại tiền liên kết với activitypointer theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Hiển thị đường liên kết web của Hoạt động thuộc loại email. */
			readonly ExchangeWebLink: string;
			/** Hiển thị số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Hiển thị loại phiên bản của chuỗi lặp lại. */
			readonly InstanceTypeCode: string;
			/** Cho biết hoạt động có được xuất hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsMapiPrivate: string;
			/** Cho biết hoạt động là loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Cho biết hoạt động có được tạo từ quy tắc quy trình hay không. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Chọn xem thư thoại có được để lại hay không. */
			readonly LeftVoiceMail: string;
			/** Cho biết người đã cập nhật hoạt động sau cùng. */
			readonly ModifiedBy: string;
			/** Hiển thị ngày và giờ sửa đổi hoạt động lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật con trỏ hoạt động lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Hiển thị ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Hiển thị đơn vị kinh doanh sở hữu hoạt động. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hoạt động. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu hoạt động. */
			readonly OwningUser: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PostponeActivityProcessingUntil_UtcDateAndTime: string;
			/** Hiển thị ưu tiên của hoạt động. */
			readonly PriorityCode: string;
			/** Hiển thị quy trình. */
			readonly ProcessId: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_account_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_adx_invitation_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_contact_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_new_interactionforemail_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_knowledgearticle_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_knowledgebaserecord_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_adplacement_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_pollplacement_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_redirect_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_shortcut_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_website_adx_inviteredemption: string;
			/** Nhập khoảng thời gian đã lên lịch của hoạt động tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Nhập thời gian kết thúc đã lên lịch của hoạt động. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Nhập thời gian kết thúc đã lên lịch của hoạt động. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Mã định danh duy nhất của hộp thư liên kết với người gửi thư email. */
			readonly SenderMailboxId: string;
			/** Hiển thị ngày và giờ gửi hoạt động. */
			readonly SentOn_UtcDateAndTime: string;
			/** Hiển thị ID chuỗi lặp lại của phiên bản. */
			readonly SeriesId: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi trường hợp. */
			readonly SLAId: string;
			/** Thỏa thuận cấp độ dịch vụ gần đây nhất đã được áp dụng cho trường hợp này. Đây là trường chỉ dùng nội bộ. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Hiển thị giai đoạn. */
			readonly StageId: string;
			/** Trạng thái của hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của hoạt động. */
			readonly StatusCode: string;
			/** Chủ đề liên kết với hoạt động. */
			readonly Subject: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với activitypointer. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của hoạt động. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_inviteredemption {
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
			Da_hoan_tat,
			/** 2 */
			Da_huy,
			/** 3 */
			Da_len_lich,
			/** 0 */
			Mo
		}
		enum StatusCode {
			/** 2 */
			Da_hoan_tat,
			/** 3 */
			Da_huy,
			/** 4 */
			Da_len_lich,
			/** 1 */
			Mo
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