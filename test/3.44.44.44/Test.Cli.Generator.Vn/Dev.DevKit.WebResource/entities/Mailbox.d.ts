//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_MailboxStatusTab_Sections {
			MailboxStatusTab_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_MailboxStatusTab extends DevKit.Controls.ITab {
			Section: tab_MailboxStatusTab_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			MailboxStatusTab: tab_MailboxStatusTab;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn phương thức gửi cho hộp thư của cuộc hẹn, liên hệ và nhiệm vụ. */
			ACTDeliveryMethod: DevKit.Controls.OptionSet;
			/** Trạng thái của Cuộc hẹn, Liên hệ và Nhiệm vụ. */
			ACTStatus: DevKit.Controls.OptionSet;
			/** Chọn xem có cho phép bộ kết nối email sử dụng thông tin đăng nhập không. */
			AllowEmailConnectorToUseCredentials: DevKit.Controls.Boolean;
			/** Nhập địa chỉ email của hộp thư. */
			EmailAddress: DevKit.Controls.String;
			/** Chọn cấu hình máy chủ email của hộp thư. */
			EmailServerProfile: DevKit.Controls.Lookup;
			/** Chọn cách gửi email đến vào hộp thư. */
			IncomingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Chọn trạng thái sẽ gán cho email đến. */
			IncomingEmailStatus: DevKit.Controls.OptionSet;
			/** Cho biết trạng thái phê duyệt về địa chỉ email của Quản trị viên O365. */
			IsEmailAddressApprovedByO365Admin: DevKit.Controls.Boolean;
			/** Chọn xem hộp thư có là hộp thư chuyển tiếp hay không. */
			IsForwardMailbox: DevKit.Controls.Boolean;
			/** Nhập tên hộp thư. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Nhập mã thông báo truy cập Oauth cho hộp thư. */
			OauthAccessToken: DevKit.Controls.String;
			/** Chọn cách gửi email đi từ hộp thư. */
			OutgoingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Chọn trạng thái của email đi. */
			OutgoingEmailStatus: DevKit.Controls.OptionSet;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Nhập mật khẩu cho hộp thư. */
			Password: DevKit.Controls.String;
			/** Chọn xem có xóa email khỏi hộp thư sau khi xử lý không. */
			ProcessAndDeleteEmails: DevKit.Controls.Boolean;
			/** Chọn người dùng được liên kết với hộp thư. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Ngày và giờ hoàn thành quá trình kiểm tra cấu hình email cuối cùng cho bản ghi hộp thư. */
			TestMailboxAccessCompletedOn: DevKit.Controls.DateTime;
			/** Nhập tên người dùng được sử dụng cho xác thực hộp thư. */
			Username: DevKit.Controls.String;
		}
		interface Navigation {
			mailbox_email_ReceivingMailboxId: DevKit.Controls.NavigationItem,
			queue_defaultmailbox_mailbox: DevKit.Controls.NavigationItem,
			systemuser_defaultmailbox_mailbox: DevKit.Controls.NavigationItem,
			tracelog_Mailbox: DevKit.Controls.NavigationItem
		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class MailboxApi {
		/**
		* DynamicsCrm.DevKit MailboxApi
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
		/** Chọn phương thức gửi cho hộp thư của cuộc hẹn, liên hệ và nhiệm vụ. */
		ACTDeliveryMethod: OptionSet.Mailbox.ACTDeliveryMethod;
		/** Trạng thái của Cuộc hẹn, Liên hệ và Nhiệm vụ. */
		ACTStatus: OptionSet.Mailbox.ACTStatus;
		/** Chọn xem có cho phép bộ kết nối email sử dụng thông tin đăng nhập không. */
		AllowEmailConnectorToUseCredentials: boolean;
		/** Tổng Lượng thời gian Trung bình của Hộp thư */
		readonly AverageTotalDuration: number;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập địa chỉ email của hộp thư. */
		EmailAddress: string;
		/** Cho biết trạng thái của địa chỉ email. */
		EmailRouterAccessApproval: OptionSet.Mailbox.EmailRouterAccessApproval;
		/** Chọn cấu hình máy chủ email của hộp thư. */
		EmailServerProfile: string;
		/** Cho biết có bật hộp thư cho Cuộc hẹn, Liên hệ và Nhiệm vụ không. */
		EnabledForACT: boolean;
		/** Chọn xem có bật hộp thư cho email nhận không. */
		EnabledForIncomingEmail: boolean;
		/** Chọn xem có bật hộp thư cho email gửi không. */
		EnabledForOutgoingEmail: boolean;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** URL điểm cuối dịch vụ web Exchange cho hộp thư. */
		EWSURL: string;
		/** Ngày và giờ hoàn thành việc nhập người liên hệ Exchange lần cuối cho bản ghi hộp thư. */
		readonly ExchangeContactsImportCompletedOn_UtcDateAndTime: Date;
		/** Cho biết trạng thái nhập người liên hệ Exchange cho bản ghi hộp thư. */
		ExchangeContactsImportStatus: OptionSet.Mailbox.ExchangeContactsImportStatus;
		/** Bao gồm trạng thái đồng bộ Exchange ở định dạng XML. */
		ExchangeSyncStateXml: string;
		/** Tham chiếu đến tệp ExchangeSyncStateXml trên Azure. */
		readonly ExchangeSyncStateXmlFileRef_name: string;
		/** Chứa hệ thống cấp bậc của các thư mục bên dưới hộp thư đến ở định dạng XML. */
		FolderHierarchy: string;
		/** Chỉ sử dụng nội bộ */
		readonly ForcedUnlockCount: number;
		/** Mã định danh duy nhất của máy chủ không đồng bộ đang xử lý hộp thư này. */
		readonly HostId: string;
		/** Chọn cách gửi email đến vào hộp thư. */
		IncomingEmailDeliveryMethod: OptionSet.Mailbox.IncomingEmailDeliveryMethod;
		/** Chọn trạng thái sẽ gán cho email đến. */
		IncomingEmailStatus: OptionSet.Mailbox.IncomingEmailStatus;
		/** Đặt tổ chức hiện tại là tổ chức đồng bộ. */
		IsACTSyncOrgFlagSet: boolean;
		/** Cho biết trạng thái phê duyệt về địa chỉ email của Quản trị viên O365. */
		IsEmailAddressApprovedByO365Admin: boolean;
		/** Đã Lập lịch trình Nhập Người liên hệ Exchange. */
		readonly IsExchangeContactsImportScheduled: boolean;
		/** Chọn xem hộp thư có là hộp thư chuyển tiếp hay không. */
		readonly IsForwardMailbox: boolean;
		readonly IsOauthAccessTokenSet: boolean;
		readonly IsOauthRefreshTokenSet: boolean;
		readonly IsPasswordSet: boolean;
		/** Chọn xem hộp thư có phản hồi cho một tài khoản dịch vụ không. */
		readonly IsServiceAccount: boolean;
		/** Chỉ sử dụng nội bộ. */
		ItemsFailedForLastSync: number;
		/** Chỉ sử dụng nội bộ. */
		ItemsProcessedForLastSync: number;
		/** Chỉ sử dụng nội bộ. */
		readonly LastActiveOn_UtcDateAndTime: Date;
		/** Cho biết ngày và giờ phát hiện lần cuối URL dịch vụ web Exchange bằng dịch vụ AutoDiscover. */
		LastAutoDiscoveredOn_UtcDateAndTime: Date;
		/** Lượng thời gian Cuối cùng cho hộp thư */
		readonly LastDuration: number;
		/** Chỉ sử dụng nội bộ. */
		readonly LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của thư trước. */
		LastMessageId: string;
		/** Thời gian Đồng bộ Thành công Lần cuối */
		LastSuccessfulSyncCompletedOn_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		LastSyncError: string;
		/** Chỉ sử dụng nội bộ. */
		LastSyncErrorCode: number;
		/** Chỉ sử dụng nội bộ */
		LastSyncErrorCount: number;
		/** Chỉ sử dụng nội bộ. */
		LastSyncErrorMachineName: string;
		/** Chỉ sử dụng nội bộ. */
		LastSyncErrorOccurredOn_UtcDateAndTime: Date;
		/** Thời gian Bắt đầu Đồng bộ Lần cuối */
		readonly LastSyncStartedOn_UtcDateAndTime: Date;
		/** Identifies the timestamp when tagging last completed. For internal use only. */
		LastTagCompletedOn_UtcDateAndTime: Date;
		/** Xác định MessageId cuối cùng đã được xử lý để gắn thẻ trong hệ thống từ xa. */
		LastTaggedMessageId: string;
		/** Indicates if the last tagging cycle processed the maximum number of items. For internal use only. */
		LastTagProcessedMaxItems: boolean;
		/** Mã định danh duy nhất của hộp thư. */
		MailboxId: string;
		/** Chỉ sử dụng nội bộ. */
		MailboxProcessingContext: number;
		/** Trạng thái Đồng bộ hóa Lần cuối đối với toàn bộ nội dung Đi, Đến và ACT. */
		readonly MailboxStatus: OptionSet.Mailbox.MailboxStatus;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên hộp thư. */
		Name: string;
		/** Độ trễ đồng bộ hóa ACT được lên lịch tiếp theo, tính bằng giây, để áp dụng cho hộp thư. */
		readonly NextScheduledACTSyncInSeconds: number;
		/** Chỉ sử dụng nội bộ. */
		readonly NoACTCount: number;
		/** Chỉ sử dụng nội bộ. */
		readonly NoEmailCount: number;
		/** Nhập mã thông báo truy cập Oauth cho hộp thư. */
		OauthAccessToken: string;
		/** Nhập mã thông báo làm mới Oauth cho hộp thư. */
		OauthRefreshToken: string;
		/** Ngày giờ khi mã thông báo Oauth hết hạn */
		OauthTokenExpiresOn_UtcDateAndTime: Date;
		/** Ngày và giờ hoàn thành lần triển khai ứng dụng Office cuối cùng cho bản ghi hộp thư. */
		readonly OfficeAppsDeploymentCompleteOn_UtcDateAndTime: Date;
		/** Lỗi triển khai Ứng dụng Office. */
		readonly OfficeAppsDeploymentError: string;
		/** Cho biết quá trình triển khai ứng dụng Office đã được lên lịch cho bản ghi hộp thư hay chưa. */
		OfficeAppsDeploymentScheduled: boolean;
		/** Cho biết loại triển khai ứng dụng Office cho bản ghi hộp thư. */
		OfficeAppsDeploymentStatus: OptionSet.Mailbox.OfficeAppsDeploymentStatus;
		/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
		readonly OrganizationId: string;
		/** Cho biết tổ chức crm có được đánh dấu là tổ chức đồng bộ chính cho bản ghi hộp thư hay không. */
		OrgMarkedAsPrimaryForExchangeSync: boolean;
		/** Chọn cách gửi email đi từ hộp thư. */
		OutgoingEmailDeliveryMethod: OptionSet.Mailbox.OutgoingEmailDeliveryMethod;
		/** Chọn trạng thái của email đi. */
		OutgoingEmailStatus: OptionSet.Mailbox.OutgoingEmailStatus;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Chọn đơn vị kinh doanh sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Nhập mật khẩu cho hộp thư. */
		Password: string;
		/** Cho biết ngày và giờ bắt đầu xử lý trên hộp thư này. */
		PostponeMailboxProcessingUntil_UtcDateOnly: Date;
		/** Cho biết ngày và giờ chạy quá trình cài đặt ứng dụng thư outlook tiếp theo cho bản ghi hộp thư. */
		PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: Date;
		/** Cho biết ngày và giờ hộp thư có thể bắt đầu gửi email. */
		PostponeSendingUntil_UtcDateOnly: Date;
		/** Cho biết ngày và giờ chạy quá trình kiểm tra cấu hình email tiếp theo cho bản ghi hộp thư. */
		PostponeTestEmailConfigurationUntil_UtcDateAndTime: Date;
		/** Chọn xem có xóa email khỏi hộp thư sau khi xử lý không. */
		ProcessAndDeleteEmails: boolean;
		/** Số lần xử lý hộp thư */
		readonly ProcessedTimes: number;
		/** Cho biết ngày và giờ bắt đầu xử lý email mà hộp thư nhận được. */
		ProcessEmailReceivedAfter_UtcDateOnly: Date;
		/** Ngày và giờ gần đây nhất xử lý hộp thư. */
		ProcessingLastAttemptedOn_UtcDateAndTime: Date;
		/** Thông tin cho biết có xử lý email cho hộp thư này hay không */
		readonly ProcessingStateCode: number;
		/** Chỉ sử dụng nội bộ. */
		readonly ReceivingPostponedUntil_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly ReceivingPostponedUntilForACT_UtcDateOnly: Date;
		/** Chọn người dùng được liên kết với hộp thư. */
		readonly regardingobjectid_queue: string;
		/** Chọn người dùng được liên kết với hộp thư. */
		readonly regardingobjectid: string;
		/** Cho biết hộp thư ở trạng thái đang hiện hoạt hay không hoạt động. */
		StateCode: OptionSet.Mailbox.StateCode;
		/** Chọn trạng thái của hộp thư. */
		StatusCode: OptionSet.Mailbox.StatusCode;
		/** Xác định dấu thời gian mà sau đó email sẽ được gắn thẻ trong hệ thống từ xa. */
		TagEmailsAfter_UtcDateOnly: Date;
		/** Cho biết số lần thực hiện quá trình kiểm tra cấu hình email. */
		TestEmailConfigurationRetryCount: number;
		/** Cho biết quá trình kiểm tra cấu hình email đã được lên lịch cho bản ghi hộp thư hay chưa. */
		TestEmailConfigurationScheduled: boolean;
		/** Ngày và giờ hoàn thành quá trình kiểm tra cấu hình email cuối cùng cho bản ghi hộp thư. */
		TestMailboxAccessCompletedOn_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Ghép chuỗi số lần lỗi nhất thời của tất cả thao tác với hộp thư. */
		readonly TransientFailureCount: number;
		/** Cho biết ID của thư mục Không gửi được trong hộp thư do Microsoft Exchange quản lý. */
		UndeliverableFolder: string;
		/** Nhập tên người dùng được sử dụng cho xác thực hộp thư. */
		Username: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Cho biết có cần phải kích hoạt theo dõi diễn giải cho hộp thư này không. */
		VerboseLoggingEnabled: number;
		/** Số phiên bản của hộp thư. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chọn phương thức gửi cho hộp thư của cuộc hẹn, liên hệ và nhiệm vụ. */
			readonly ACTDeliveryMethod: string;
			/** Trạng thái của Cuộc hẹn, Liên hệ và Nhiệm vụ. */
			readonly ACTStatus: string;
			/** Chọn xem có cho phép bộ kết nối email sử dụng thông tin đăng nhập không. */
			readonly AllowEmailConnectorToUseCredentials: string;
			/** Tổng Lượng thời gian Trung bình của Hộp thư */
			readonly AverageTotalDuration: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập địa chỉ email của hộp thư. */
			readonly EmailAddress: string;
			/** Cho biết trạng thái của địa chỉ email. */
			readonly EmailRouterAccessApproval: string;
			/** Chọn cấu hình máy chủ email của hộp thư. */
			readonly EmailServerProfile: string;
			/** Cho biết có bật hộp thư cho Cuộc hẹn, Liên hệ và Nhiệm vụ không. */
			readonly EnabledForACT: string;
			/** Chọn xem có bật hộp thư cho email nhận không. */
			readonly EnabledForIncomingEmail: string;
			/** Chọn xem có bật hộp thư cho email gửi không. */
			readonly EnabledForOutgoingEmail: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** URL điểm cuối dịch vụ web Exchange cho hộp thư. */
			readonly EWSURL: string;
			/** Ngày và giờ hoàn thành việc nhập người liên hệ Exchange lần cuối cho bản ghi hộp thư. */
			readonly ExchangeContactsImportCompletedOn_UtcDateAndTime: string;
			/** Cho biết trạng thái nhập người liên hệ Exchange cho bản ghi hộp thư. */
			readonly ExchangeContactsImportStatus: string;
			/** Bao gồm trạng thái đồng bộ Exchange ở định dạng XML. */
			readonly ExchangeSyncStateXml: string;
			/** Tham chiếu đến tệp ExchangeSyncStateXml trên Azure. */
			readonly ExchangeSyncStateXmlFileRef_name: string;
			/** Chứa hệ thống cấp bậc của các thư mục bên dưới hộp thư đến ở định dạng XML. */
			readonly FolderHierarchy: string;
			/** Chỉ sử dụng nội bộ */
			readonly ForcedUnlockCount: string;
			/** Mã định danh duy nhất của máy chủ không đồng bộ đang xử lý hộp thư này. */
			readonly HostId: string;
			/** Chọn cách gửi email đến vào hộp thư. */
			readonly IncomingEmailDeliveryMethod: string;
			/** Chọn trạng thái sẽ gán cho email đến. */
			readonly IncomingEmailStatus: string;
			/** Đặt tổ chức hiện tại là tổ chức đồng bộ. */
			readonly IsACTSyncOrgFlagSet: string;
			/** Cho biết trạng thái phê duyệt về địa chỉ email của Quản trị viên O365. */
			readonly IsEmailAddressApprovedByO365Admin: string;
			/** Đã Lập lịch trình Nhập Người liên hệ Exchange. */
			readonly IsExchangeContactsImportScheduled: string;
			/** Chọn xem hộp thư có là hộp thư chuyển tiếp hay không. */
			readonly IsForwardMailbox: string;
			readonly IsOauthAccessTokenSet: string;
			readonly IsOauthRefreshTokenSet: string;
			readonly IsPasswordSet: string;
			/** Chọn xem hộp thư có phản hồi cho một tài khoản dịch vụ không. */
			readonly IsServiceAccount: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ItemsFailedForLastSync: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ItemsProcessedForLastSync: string;
			/** Chỉ sử dụng nội bộ. */
			readonly LastActiveOn_UtcDateAndTime: string;
			/** Cho biết ngày và giờ phát hiện lần cuối URL dịch vụ web Exchange bằng dịch vụ AutoDiscover. */
			readonly LastAutoDiscoveredOn_UtcDateAndTime: string;
			/** Lượng thời gian Cuối cùng cho hộp thư */
			readonly LastDuration: string;
			/** Chỉ sử dụng nội bộ. */
			readonly LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của thư trước. */
			readonly LastMessageId: string;
			/** Thời gian Đồng bộ Thành công Lần cuối */
			readonly LastSuccessfulSyncCompletedOn_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly LastSyncError: string;
			/** Chỉ sử dụng nội bộ. */
			readonly LastSyncErrorCode: string;
			/** Chỉ sử dụng nội bộ */
			readonly LastSyncErrorCount: string;
			/** Chỉ sử dụng nội bộ. */
			readonly LastSyncErrorMachineName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly LastSyncErrorOccurredOn_UtcDateAndTime: string;
			/** Thời gian Bắt đầu Đồng bộ Lần cuối */
			readonly LastSyncStartedOn_UtcDateAndTime: string;
			/** Identifies the timestamp when tagging last completed. For internal use only. */
			readonly LastTagCompletedOn_UtcDateAndTime: string;
			/** Xác định MessageId cuối cùng đã được xử lý để gắn thẻ trong hệ thống từ xa. */
			readonly LastTaggedMessageId: string;
			/** Indicates if the last tagging cycle processed the maximum number of items. For internal use only. */
			readonly LastTagProcessedMaxItems: string;
			/** Mã định danh duy nhất của hộp thư. */
			readonly MailboxId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly MailboxProcessingContext: string;
			/** Trạng thái Đồng bộ hóa Lần cuối đối với toàn bộ nội dung Đi, Đến và ACT. */
			readonly MailboxStatus: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên hộp thư. */
			readonly Name: string;
			/** Độ trễ đồng bộ hóa ACT được lên lịch tiếp theo, tính bằng giây, để áp dụng cho hộp thư. */
			readonly NextScheduledACTSyncInSeconds: string;
			/** Chỉ sử dụng nội bộ. */
			readonly NoACTCount: string;
			/** Chỉ sử dụng nội bộ. */
			readonly NoEmailCount: string;
			/** Nhập mã thông báo truy cập Oauth cho hộp thư. */
			readonly OauthAccessToken: string;
			/** Nhập mã thông báo làm mới Oauth cho hộp thư. */
			readonly OauthRefreshToken: string;
			/** Ngày giờ khi mã thông báo Oauth hết hạn */
			readonly OauthTokenExpiresOn_UtcDateAndTime: string;
			/** Ngày và giờ hoàn thành lần triển khai ứng dụng Office cuối cùng cho bản ghi hộp thư. */
			readonly OfficeAppsDeploymentCompleteOn_UtcDateAndTime: string;
			/** Lỗi triển khai Ứng dụng Office. */
			readonly OfficeAppsDeploymentError: string;
			/** Cho biết quá trình triển khai ứng dụng Office đã được lên lịch cho bản ghi hộp thư hay chưa. */
			readonly OfficeAppsDeploymentScheduled: string;
			/** Cho biết loại triển khai ứng dụng Office cho bản ghi hộp thư. */
			readonly OfficeAppsDeploymentStatus: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
			readonly OrganizationId: string;
			/** Cho biết tổ chức crm có được đánh dấu là tổ chức đồng bộ chính cho bản ghi hộp thư hay không. */
			readonly OrgMarkedAsPrimaryForExchangeSync: string;
			/** Chọn cách gửi email đi từ hộp thư. */
			readonly OutgoingEmailDeliveryMethod: string;
			/** Chọn trạng thái của email đi. */
			readonly OutgoingEmailStatus: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Chọn đơn vị kinh doanh sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Nhập mật khẩu cho hộp thư. */
			readonly Password: string;
			/** Cho biết ngày và giờ bắt đầu xử lý trên hộp thư này. */
			readonly PostponeMailboxProcessingUntil_UtcDateOnly: string;
			/** Cho biết ngày và giờ chạy quá trình cài đặt ứng dụng thư outlook tiếp theo cho bản ghi hộp thư. */
			readonly PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: string;
			/** Cho biết ngày và giờ hộp thư có thể bắt đầu gửi email. */
			readonly PostponeSendingUntil_UtcDateOnly: string;
			/** Cho biết ngày và giờ chạy quá trình kiểm tra cấu hình email tiếp theo cho bản ghi hộp thư. */
			readonly PostponeTestEmailConfigurationUntil_UtcDateAndTime: string;
			/** Chọn xem có xóa email khỏi hộp thư sau khi xử lý không. */
			readonly ProcessAndDeleteEmails: string;
			/** Số lần xử lý hộp thư */
			readonly ProcessedTimes: string;
			/** Cho biết ngày và giờ bắt đầu xử lý email mà hộp thư nhận được. */
			readonly ProcessEmailReceivedAfter_UtcDateOnly: string;
			/** Ngày và giờ gần đây nhất xử lý hộp thư. */
			readonly ProcessingLastAttemptedOn_UtcDateAndTime: string;
			/** Thông tin cho biết có xử lý email cho hộp thư này hay không */
			readonly ProcessingStateCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReceivingPostponedUntil_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReceivingPostponedUntilForACT_UtcDateOnly: string;
			/** Chọn người dùng được liên kết với hộp thư. */
			readonly regardingobjectid_queue: string;
			/** Chọn người dùng được liên kết với hộp thư. */
			readonly regardingobjectid: string;
			/** Cho biết hộp thư ở trạng thái đang hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của hộp thư. */
			readonly StatusCode: string;
			/** Xác định dấu thời gian mà sau đó email sẽ được gắn thẻ trong hệ thống từ xa. */
			readonly TagEmailsAfter_UtcDateOnly: string;
			/** Cho biết số lần thực hiện quá trình kiểm tra cấu hình email. */
			readonly TestEmailConfigurationRetryCount: string;
			/** Cho biết quá trình kiểm tra cấu hình email đã được lên lịch cho bản ghi hộp thư hay chưa. */
			readonly TestEmailConfigurationScheduled: string;
			/** Ngày và giờ hoàn thành quá trình kiểm tra cấu hình email cuối cùng cho bản ghi hộp thư. */
			readonly TestMailboxAccessCompletedOn_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Ghép chuỗi số lần lỗi nhất thời của tất cả thao tác với hộp thư. */
			readonly TransientFailureCount: string;
			/** Cho biết ID của thư mục Không gửi được trong hộp thư do Microsoft Exchange quản lý. */
			readonly UndeliverableFolder: string;
			/** Nhập tên người dùng được sử dụng cho xác thực hộp thư. */
			readonly Username: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Cho biết có cần phải kích hoạt theo dõi diễn giải cho hộp thư này không. */
			readonly VerboseLoggingEnabled: string;
			/** Số phiên bản của hộp thư. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Mailbox {
		enum ACTDeliveryMethod {
			/** 1 */
			Dong_bo_phia_May_chu,
			/** 2 */
			Khong,
			/** 0 */
			Microsoft_Dynamics_365_danh_cho_Outlook
		}
		enum ACTStatus {
			/** 0 */
			Khong_Chay,
			/** 2 */
			Loi,
			/** 1 */
			Thanh_cong
		}
		enum EmailRouterAccessApproval {
			/** 3 */
			Bi_tu_choi,
			/** 1 */
			Da_phe_chuan,
			/** 2 */
			Dang_cho_Phe_duyet,
			/** 0 */
			Trong
		}
		enum ExchangeContactsImportStatus {
			/** 1 */
			Imported,
			/** 2 */
			ImportFailed,
			/** 0 */
			NotImported
		}
		enum IncomingEmailDeliveryMethod {
			/** 2 */
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email,
			/** 3 */
			Hop_thu_chuyen_tiep,
			/** 0 */
			Khong,
			/** 1 */
			Microsoft_Dynamics_365_danh_cho_Outlook
		}
		enum IncomingEmailStatus {
			/** 0 */
			Khong_Chay,
			/** 2 */
			Loi,
			/** 1 */
			Thanh_cong
		}
		enum MailboxStatus {
			/** 0 */
			Khong_Chay,
			/** 2 */
			Loi,
			/** 1 */
			Thanh_cong
		}
		enum OfficeAppsDeploymentStatus {
			/** 1 */
			Da_cai_dat,
			/** 2 */
			InstallFailed,
			/** 0 */
			NotInstalled,
			/** 3 */
			UninstallFailed,
			/** 4 */
			UpgradeRequired
		}
		enum OutgoingEmailDeliveryMethod {
			/** 2 */
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email,
			/** 0 */
			Khong,
			/** 1 */
			Microsoft_Dynamics_365_danh_cho_Outlook
		}
		enum OutgoingEmailStatus {
			/** 0 */
			Khong_Chay,
			/** 2 */
			Loi,
			/** 1 */
			Thanh_cong
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
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