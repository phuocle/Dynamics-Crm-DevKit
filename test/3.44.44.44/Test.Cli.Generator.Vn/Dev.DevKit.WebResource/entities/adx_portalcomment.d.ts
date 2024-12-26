//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPortal_Comment {
		interface Header extends DevKit.Controls.IHeader {
			/** Cho biết Hoạt động web là do Người dùng cổng thông tin hay Người dùng Dynamics 365 tạo. */
			adx_PortalCommentDirectionCode: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu hoạt động. */
			OwnerId: DevKit.Controls.Lookup;
			/** Mức ưu tiên của hoạt động. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Lý do dẫn đến trạng thái của hoạt động. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab__54373510_FFDA_4801_B39B_1D305942D8D6_Sections {
			_54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_2: DevKit.Controls.Section;
			_54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_4: DevKit.Controls.Section;
		}
		interface tab__54373510_FFDA_4801_B39B_1D305942D8D6 extends DevKit.Controls.ITab {
			Section: tab__54373510_FFDA_4801_B39B_1D305942D8D6_Sections;
		}
		interface Tabs {
			_54373510_FFDA_4801_B39B_1D305942D8D6: tab__54373510_FFDA_4801_B39B_1D305942D8D6;
		}
		interface Body {
			Tab: Tabs;
			/** Mô tả hoạt động. */
			Description: DevKit.Controls.String;
			/** Người bắt đầu hoạt động. */
			From: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Chủ đề liên kết với hoạt động. */
			Subject: DevKit.Controls.String;
			/** Người nhận hoạt động. */
			To: DevKit.Controls.Lookup;
		}
		interface Navigation {
			adx_portalcomment_QueueItems: DevKit.Controls.NavigationItem
		}
	}
	class FormPortal_Comment extends DevKit.IForm {
		/**
		* Portal Comment [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Portal_Comment */
		Body: DevKit.FormPortal_Comment.Body;
		/** The Header section of form Portal_Comment */
		Header: DevKit.FormPortal_Comment.Header;
		/** The Navigation of form Portal_Comment */
		Navigation: DevKit.FormPortal_Comment.Navigation;
		/** The SidePanes of form Portal_Comment */
		SidePanes: DevKit.SidePanes;
	}
	class adx_portalcommentApi {
		/**
		* DynamicsCrm.DevKit adx_portalcommentApi
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
		/** Mã định danh duy nhất của hoạt động. */
		ActivityId: string;
		/** Khoảng thời gian thực tế của hoạt động tính bằng phút. */
		ActualDurationMinutes: number;
		/** Thời gian kết thúc thực tế của hoạt động. */
		ActualEnd_UtcDateAndTime: Date;
		/** Thời gian bắt đầu thực tế của hoạt động. */
		ActualStart_UtcDateAndTime: Date;
		/** Cho biết Hoạt động web là do Người dùng cổng thông tin hay Người dùng Dynamics 365 tạo. */
		adx_PortalCommentDirectionCode: OptionSet.adx_portalcomment.adx_PortalCommentDirectionCode;
		/** Cho biết nguồn gốc của người liên hệ về hoạt động xã hội, chẳng hạn như từ Twitter hay Facebook. Đây là trường chỉ đọc. */
		Community: OptionSet.adx_portalcomment.Community;
		/** Mã định danh duy nhất của người dùng đã tạo hoạt động. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo hoạt động. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Ngày và giờ của lần gửi hoạt động cuối cùng. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Ưu tiên gửi hoạt động đến máy chủ email. */
		DeliveryPriorityCode: OptionSet.adx_portalcomment.DeliveryPriorityCode;
		/** Mô tả hoạt động. */
		Description: string;
		/** ID thông báo của hoạt động được trả về từ Exchange Server. */
		ExchangeItemId: string;
		/** Tỷ giá của loại tiền liên kết với activitypointer theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Hiển thị đường liên kết web của Hoạt động thuộc loại email. */
		ExchangeWebLink: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Loại phiên bản của chuỗi lặp lại. */
		readonly InstanceTypeCode: OptionSet.adx_portalcomment.InstanceTypeCode;
		/** Thông tin về việc hoạt động có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Chỉ sử dụng nội bộ. */
		IsMapiPrivate: boolean;
		/** Thông tin về việc hoạt động là loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Thông tin về việc hoạt động có được tạo từ quy tắc quy trình làm việc hay không. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Đã để lại thư thoại */
		LeftVoiceMail: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi hoạt động lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi hoạt động lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi activitypointer lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Ngày và giờ di chuyển bản ghi. */
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
		PriorityCode: OptionSet.adx_portalcomment.PriorityCode;
		/** Mã định danh duy nhất của Quy trình. */
		ProcessId: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_account_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_adx_invitation_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_contact_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_new_interactionforemail_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_knowledgearticle_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_knowledgebaserecord_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_adplacement_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_pollplacement_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_publishingstatetransitionrule_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_redirect_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_shortcut_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
		regardingobjectid_mspp_website_adx_portalcomment: string;
		/** Khoảng thời gian theo lịch của hoạt động, tính bằng phút. */
		ScheduledDurationMinutes: number;
		/** Thời gian kết thúc theo lịch của hoạt động. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Thời gian bắt đầu theo lịch của hoạt động. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của hộp thư liên kết với người gửi thư email. */
		readonly SenderMailboxId: string;
		/** Ngày và giờ gửi hoạt động. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất chỉ định ID chuỗi lặp lại của phiên bản. */
		readonly SeriesId: string;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi trường hợp. */
		SLAId: string;
		/** Thỏa thuận cấp độ dịch vụ gần đây nhất đã được áp dụng cho trường hợp này. Đây là trường chỉ dùng nội bộ. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của Giai đoạn. */
		StageId: string;
		/** Trạng thái của hoạt động. */
		StateCode: OptionSet.adx_portalcomment.StateCode;
		/** Lý do dẫn đến trạng thái của hoạt động. */
		StatusCode: OptionSet.adx_portalcomment.StatusCode;
		/** Chủ đề liên kết với hoạt động. */
		Subject: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với activitypointer. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của hoạt động. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Thông tin bổ sung được cung cấp bởi ứng dụng bên ngoài dưới dạng JSON. Chỉ sử dụng nội bộ. */
			readonly ActivityAdditionalParams: string;
			/** Mã định danh duy nhất của hoạt động. */
			readonly ActivityId: string;
			/** Khoảng thời gian thực tế của hoạt động tính bằng phút. */
			readonly ActualDurationMinutes: string;
			/** Thời gian kết thúc thực tế của hoạt động. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Thời gian bắt đầu thực tế của hoạt động. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Cho biết Hoạt động web là do Người dùng cổng thông tin hay Người dùng Dynamics 365 tạo. */
			readonly adx_PortalCommentDirectionCode: string;
			/** Cho biết nguồn gốc của người liên hệ về hoạt động xã hội, chẳng hạn như từ Twitter hay Facebook. Đây là trường chỉ đọc. */
			readonly Community: string;
			/** Mã định danh duy nhất của người dùng đã tạo hoạt động. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo hoạt động. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo activitypointer. */
			readonly CreatedOnBehalfBy: string;
			/** Ngày và giờ của lần gửi hoạt động cuối cùng. */
			readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
			/** Ưu tiên gửi hoạt động đến máy chủ email. */
			readonly DeliveryPriorityCode: string;
			/** Mô tả hoạt động. */
			readonly Description: string;
			/** ID thông báo của hoạt động được trả về từ Exchange Server. */
			readonly ExchangeItemId: string;
			/** Tỷ giá của loại tiền liên kết với activitypointer theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Hiển thị đường liên kết web của Hoạt động thuộc loại email. */
			readonly ExchangeWebLink: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Loại phiên bản của chuỗi lặp lại. */
			readonly InstanceTypeCode: string;
			/** Thông tin về việc hoạt động có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsMapiPrivate: string;
			/** Thông tin về việc hoạt động là loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Thông tin về việc hoạt động có được tạo từ quy tắc quy trình làm việc hay không. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Đã để lại thư thoại */
			readonly LeftVoiceMail: string;
			/** Mã định danh duy nhất của người dùng sửa đổi hoạt động lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi hoạt động lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi activitypointer lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Ngày và giờ di chuyển bản ghi. */
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
			/** Mã định danh duy nhất của Quy trình. */
			readonly ProcessId: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_account_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_adx_invitation_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_contact_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_new_interactionforemail_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_knowledgearticle_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_knowledgebaserecord_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_adplacement_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_pollplacement_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_redirect_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_shortcut_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có hoạt động được liên kết. */
			readonly regardingobjectid_mspp_website_adx_portalcomment: string;
			/** Khoảng thời gian theo lịch của hoạt động, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Thời gian kết thúc theo lịch của hoạt động. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Thời gian bắt đầu theo lịch của hoạt động. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Mã định danh duy nhất của hộp thư liên kết với người gửi thư email. */
			readonly SenderMailboxId: string;
			/** Ngày và giờ gửi hoạt động. */
			readonly SentOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất chỉ định ID chuỗi lặp lại của phiên bản. */
			readonly SeriesId: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi trường hợp. */
			readonly SLAId: string;
			/** Thỏa thuận cấp độ dịch vụ gần đây nhất đã được áp dụng cho trường hợp này. Đây là trường chỉ dùng nội bộ. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Mã định danh duy nhất của Giai đoạn. */
			readonly StageId: string;
			/** Trạng thái của hoạt động. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của hoạt động. */
			readonly StatusCode: string;
			/** Chủ đề liên kết với hoạt động. */
			readonly Subject: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với activitypointer. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của hoạt động. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_portalcomment {
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
		enum adx_PortalCommentDirectionCode {
			/** 1 */
			Den,
			/** 2 */
			Di
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
			Da_gui,
			/** 4 */
			Da_huy,
			/** 5 */
			Da_len_lich,
			/** 3 */
			Da_nhan,
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