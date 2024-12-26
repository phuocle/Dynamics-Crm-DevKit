//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEmail {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian email sẽ được gửi. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Chọn trạng thái của email. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Email_Sections {
			attachments: DevKit.Controls.Section;
			email_description: DevKit.Controls.Section;
			emailengagementactions: DevKit.Controls.Section;
			Emailrecipient_section_6: DevKit.Controls.Section;
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_Email extends DevKit.Controls.ITab {
			Section: tab_Email_Sections;
		}
		interface Tabs {
			Email: tab_Email;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập số phút cần để tạo và gửi email. Khoảng thời gian này được sử dụng trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập người nhận được bao gồm trong danh sách gửi email nhưng không hiển thị cho người nhận khác. */
			bcc: DevKit.Controls.Lookup;
			/** Nhập người nhận sẽ được sao chép trên email. */
			cc: DevKit.Controls.Lookup;
			/** Nhập lời chào và nội dung email. */
			Description: DevKit.Controls.String;
			emailengagementactionscontrol: DevKit.Controls.EmailEngagement;
			emailrecipientactivitycontrol: DevKit.Controls.EmailRecipient;
			/** Nhập người gửi email. */
			from: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến email. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập nội dung mô tả ngắn về mục tiêu hoặc chủ đề chính của email. */
			Subject: DevKit.Controls.String;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, hàng hoặc người dùng nhận email. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {
			email_activity_mime_attachment: DevKit.Controls.NavigationItem,
			email_email_CorrelatedActivityId: DevKit.Controls.NavigationItem,
			Email_QueueItem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormEmail extends DevKit.IForm {
		/**
		* Email [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email */
		Body: DevKit.FormEmail.Body;
		/** The Header section of form Email */
		Header: DevKit.FormEmail.Header;
		/** The Navigation of form Email */
		Navigation: DevKit.FormEmail.Navigation;
		/** The Grid of form Email */
		Grid: DevKit.FormEmail.Grid;
		/** The SidePanes of form Email */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_nang_cao {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian email sẽ được gửi. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Chọn trạng thái của email. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Email_Sections {
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
		}
		interface tab_Email extends DevKit.Controls.ITab {
			Section: tab_Email_Sections;
		}
		interface Tabs {
			Email: tab_Email;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập người nhận được bao gồm trong danh sách gửi email nhưng không hiển thị cho người nhận khác. */
			bcc: DevKit.Controls.Lookup;
			/** Nhập người nhận sẽ được sao chép trên email. */
			cc: DevKit.Controls.Lookup;
			/** Nhập lời chào và nội dung email. */
			Description: DevKit.Controls.String;
			/** Nhập người gửi email. */
			from: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến email. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập nội dung mô tả ngắn về mục tiêu hoặc chủ đề chính của email. */
			Subject: DevKit.Controls.String;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, hàng hoặc người dùng nhận email. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {
			email_activity_mime_attachment: DevKit.Controls.NavigationItem,
			email_email_CorrelatedActivityId: DevKit.Controls.NavigationItem,
			Email_QueueItem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormEmail_nang_cao extends DevKit.IForm {
		/**
		* Email nâng cao [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_nang_cao */
		Body: DevKit.FormEmail_nang_cao.Body;
		/** The Header section of form Email_nang_cao */
		Header: DevKit.FormEmail_nang_cao.Header;
		/** The Navigation of form Email_nang_cao */
		Navigation: DevKit.FormEmail_nang_cao.Navigation;
		/** The Grid of form Email_nang_cao */
		Grid: DevKit.FormEmail_nang_cao.Grid;
		/** The SidePanes of form Email_nang_cao */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_Trai_nghiem_tuong_tac {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian email sẽ được gửi. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Chọn trạng thái của email. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_2_Sections {
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
			tab_2_section_5: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập người nhận được bao gồm trong danh sách gửi email nhưng không hiển thị cho người nhận khác. */
			bcc: DevKit.Controls.Lookup;
			/** Nhập người nhận sẽ được sao chép trên email. */
			cc: DevKit.Controls.Lookup;
			/** Nhập lời chào và nội dung email. */
			Description: DevKit.Controls.String;
			/** Nhập người gửi email. */
			from: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến email. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập nội dung mô tả ngắn về mục tiêu hoặc chủ đề chính của email. */
			Subject: DevKit.Controls.String;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, hàng hoặc người dùng nhận email. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {
			email_activity_mime_attachment: DevKit.Controls.NavigationItem,
			email_email_CorrelatedActivityId: DevKit.Controls.NavigationItem,
			Email_QueueItem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormEmail_Trai_nghiem_tuong_tac extends DevKit.IForm {
		/**
		* Email Trải nghiệm tương tác [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_Trai_nghiem_tuong_tac */
		Body: DevKit.FormEmail_Trai_nghiem_tuong_tac.Body;
		/** The Header section of form Email_Trai_nghiem_tuong_tac */
		Header: DevKit.FormEmail_Trai_nghiem_tuong_tac.Header;
		/** The Navigation of form Email_Trai_nghiem_tuong_tac */
		Navigation: DevKit.FormEmail_Trai_nghiem_tuong_tac.Navigation;
		/** The Grid of form Email_Trai_nghiem_tuong_tac */
		Grid: DevKit.FormEmail_Trai_nghiem_tuong_tac.Grid;
		/** The SidePanes of form Email_Trai_nghiem_tuong_tac */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTrinh_huong_dan {
		interface Header extends DevKit.Controls.IHeader {
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian email sẽ được gửi. */
			ScheduledEnd: DevKit.Controls.DateTime;
		}
		interface tab_Email_Sections {
			attachments: DevKit.Controls.Section;
			email_description: DevKit.Controls.Section;
			Hidden_Section: DevKit.Controls.Section;
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
		}
		interface tab_Email extends DevKit.Controls.ITab {
			Section: tab_Email_Sections;
		}
		interface Tabs {
			Email: tab_Email;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập số phút cần để tạo và gửi email. Khoảng thời gian này được sử dụng trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập người nhận được bao gồm trong danh sách gửi email nhưng không hiển thị cho người nhận khác. */
			bcc: DevKit.Controls.Lookup;
			/** Nhập người nhận sẽ được sao chép trên email. */
			cc: DevKit.Controls.Lookup;
			/** Nhập lời chào và nội dung email. */
			Description: DevKit.Controls.String;
			/** Nhập người gửi email. */
			from: DevKit.Controls.Lookup;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến email. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của email. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Nhập nội dung mô tả ngắn về mục tiêu hoặc chủ đề chính của email. */
			Subject: DevKit.Controls.String;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, hàng hoặc người dùng nhận email. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {
			email_activity_mime_attachment: DevKit.Controls.NavigationItem,
			email_email_CorrelatedActivityId: DevKit.Controls.NavigationItem,
			Email_QueueItem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormTrinh_huong_dan extends DevKit.IForm {
		/**
		* Trình hướng dẫn [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Trinh_huong_dan */
		Body: DevKit.FormTrinh_huong_dan.Body;
		/** The Header section of form Trinh_huong_dan */
		Header: DevKit.FormTrinh_huong_dan.Header;
		/** The Navigation of form Trinh_huong_dan */
		Navigation: DevKit.FormTrinh_huong_dan.Navigation;
		/** The Grid of form Trinh_huong_dan */
		Grid: DevKit.FormTrinh_huong_dan.Grid;
		/** The SidePanes of form Trinh_huong_dan */
		SidePanes: DevKit.SidePanes;
	}
	class EmailApi {
		/**
		* DynamicsCrm.DevKit EmailApi
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
		/** Thực thể đã chấp nhận email */
		acceptingentityid_queue: string;
		/** Thực thể đã chấp nhận email */
		acceptingentityid_systemuser: string;
		/** Chỉ sử dụng nội bộ. */
		ActivityAdditionalParams: string;
		/** Mã định danh duy nhất của hoạt động email. */
		ActivityId: string;
		/** Nhập số phút cần để tạo và gửi email. Khoảng thời gian này được sử dụng trong báo cáo. */
		ActualDurationMinutes: number;
		/** Nhập ngày và giờ kết thúc thực tế của email. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động nhưng có thể chỉnh sửa trường này để thu thập thời gian tạo và gửi email thực tế. */
		ActualEnd_UtcDateOnly: Date;
		/** Nhập ngày và giờ bắt đầu thực tế cho email. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động nhưng có thể chỉnh sửa trường này để thu thập thời gian tạo và gửi email thực tế. */
		ActualStart_UtcDateOnly: Date;
		/** Hiển thị số lượng tệp đính kèm của email. */
		readonly AttachmentCount: number;
		/** Cho biết số lần một tệp đính kèm email đã được xem. */
		AttachmentOpenCount: number;
		/** Hàm băm gốc của chỉ mục cuộc hội thoại. */
		BaseConversationIndexHash: number;
		/** Nhập một thể loại để xác định loại email, chẳng hạn như liên hệ với khách hàng tiềm năng, theo dõi khách hàng hoặc thông báo dịch vụ, nhằm liên kết email với một chức năng hoặc nhóm kinh doanh. */
		Category: string;
		/** Cho biết nội dung có được nén hay không. */
		readonly Compressed: boolean;
		/** Mã định danh cho tất cả các email phản hồi cuộc hội thoại này. */
		readonly ConversationIndex: string;
		/** ID Theo dõi Cuộc hội thoại. */
		ConversationTrackingId: string;
		/** ID hoạt động có tương quan */
		CorrelatedActivityId: string;
		/** Cho biết nếu chủ đề đã thay đổi so với chủ đề của email tương quan */
		correlatedsubjectchanged: boolean;
		/** Hiển thị cách một email được ràng buộc với một email hiện có trong Microsoft Dynamics 365. XHeader và CustomCorrelation không được sử dụng. Chỉ sử dụng trong hệ thống. */
		readonly CorrelationMethod: OptionSet.Email.CorrelationMethod;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập ngày và giờ hết hạn dự kiến để gửi email. */
		DelayedEmailSendTime_UtcDateAndTime: Date;
		/** Hiển thị số lần cố gắng gửi email đã được thực hiện. Số lần này được sử dụng làm chỉ số cho các sự cố định tuyến email. */
		DeliveryAttempts: number;
		/** Chọn mức ưu tiên cho việc gửi email đến máy chủ email. */
		DeliveryPriorityCode: OptionSet.Email.DeliveryPriorityCode;
		/** Chọn liệu người gửi có nhận được xác nhận rằng email đã được gửi hay không. */
		DeliveryReceiptRequested: boolean;
		/** Nhập lời chào và nội dung email. */
		Description: string;
		/** Tệp chứa nội dung mô tả. */
		readonly DescriptionBlobId_name: string;
		/** Chọn hướng của email là đến hoặc đi. */
		DirectionCode: boolean;
		/** Hiển thị ngày và giờ lời nhắc email hết hạn. */
		EmailReminderExpiryTime_UtcDateAndTime: Date;
		/** Cho biết trạng thái của lời nhắc email. */
		readonly EmailReminderStatus: OptionSet.Email.EmailReminderStatus;
		/** Chỉ sử dụng nội bộ. */
		EmailReminderText: string;
		/** Hiển thị loại lời nhắc email. */
		EmailReminderType: OptionSet.Email.EmailReminderType;
		/** Hiển thị người gửi email. */
		readonly emailsender_account: string;
		/** Hiển thị người gửi email. */
		readonly emailsender_contact: string;
		/** Hiển thị người gửi email. */
		readonly emailsender_queue: string;
		/** Hiển thị người gửi email. */
		readonly emailsender_systemuser: string;
		/** ID Theo dõi Email. */
		EmailTrackingId: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Chọn xem email có cho phép theo dõi hoạt động của người nhận được gửi từ Microsoft Dynamics 365 hay không. Đây là trạng thái tùy chọn của người dùng, có thể được trạng thái đánh giá hệ thống thay thế. */
		FollowEmailUserPreference: boolean;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Nhập ID email mà hoạt động email này phản hồi tới. */
		readonly InReplyTo: string;
		/** Chứa một tập hợp các tiêu đề trên Internet được liên kết với thư email ở định dạng JSON */
		InternetMessageHeaders: string;
		/** Thông tin liên quan tới việc liệu hoạt động email có được lập hóa đơn như là một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Cho biết người gửi email không xác định được trong trường hợp có nhiều kết quả trùng khớp */
		IsDuplicateSenderUnresolved: boolean;
		/** Chỉ sử dụng nội bộ Hiển thị xem email có được theo dõi hay không. Đây là trạng thái đánh giá thay thế lựa chọn theo dõi email của người dùng. */
		readonly IsEmailFollowed: boolean;
		/** Chỉ sử dụng nội bộ. Hiển thị khả năng Đặt Lời nhắc email này. */
		readonly IsEmailReminderSet: boolean;
		/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly IsSafeDescriptionTruncated: number;
		/** Chỉ sử dụng nội bộ. */
		readonly IsUnsafe: number;
		/** Cho biết liệu email có được tạo bởi quy tắc quy trình hay không. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Hiển thị ngày và giờ email đã được mở gần đây nhất. */
		LastOpenedTime_UtcDateAndTime: Date;
		/** Cho biết số lần liên kết trong email đã được bấm vào. */
		LinksClickedCount: number;
		/** Mã định danh duy nhất của email. Chỉ sử dụng cho email được nhận. */
		MessageId: string;
		/** Chỉ sử dụng nội bộ. */
		MessageIdDupCheck: string;
		/** Loại MIME của dữ liệu email. */
		MimeType: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Chọn mã thông báo để xác định các sự cố xảy ra với người nhận email hoặc tệp đính kèm, chẳng hạn như các tệp đính kèm bị chặn. */
		Notifications: OptionSet.Email.Notifications;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Cho biết số lần email đã được mở. */
		OpenCount: number;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động email. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hoạt động email. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu hoạt động email. */
		readonly OwningUser: string;
		/** Chọn hoạt động mà email được liên kết với. */
		ParentActivityId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly PostponeEmailProcessingUntil_UtcDateAndTime: Date;
		/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
		PriorityCode: OptionSet.Email.PriorityCode;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Chỉ ra rằng biên nhận đã đọc được yêu cầu. */
		ReadReceiptRequested: boolean;
		/** Hộp thư đã nhận được email. */
		ReceivingMailboxId: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_account_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_adx_invitation_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_asyncoperation: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_contact_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_knowledgearticle_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_knowledgebaserecord_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_mspp_adplacement_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_mspp_pollplacement_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_mspp_publishingstatetransitionrule_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_mspp_redirect_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_mspp_shortcut_email: string;
		/** Chọn bản ghi liên quan đến email. */
		regardingobjectid_mspp_website_email: string;
		/** ID Thẻ Hành động Lời nhắc. */
		ReminderActionCardId: string;
		/** Cho biết số lần thư trả lời đã nhận được cho một email. */
		readonly ReplyCount: number;
		/** Chỉ sử dụng nội bộ */
		ReservedForInternalUse: string;
		/** Khoảng thời gian theo lịch của hoạt động email, tính bằng phút. */
		readonly ScheduledDurationMinutes: number;
		/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian email sẽ được gửi. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Nhập ngày và giờ bắt đầu dự kiến cho hoạt động để cung cấp chi tiết về thời gian tạm thời phải bắt đầu hoạt động email. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Người gửi email. */
		Sender: string;
		/** Chọn hộp thư được liên kết với người gửi email. */
		readonly SenderMailboxId: string;
		/** Hiển thị tài khoản mẹ của người gửi email. */
		readonly SendersAccount: string;
		/** Hiển thị ngày và giờ gửi email. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi email. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho email này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Cho biết liệu email đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các email đã hoàn thành và bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
		StateCode: OptionSet.Email.StateCode;
		/** Chọn trạng thái của email. */
		StatusCode: OptionSet.Email.StatusCode;
		/** Nhập thể loại phụ để xác định loại email và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
		Subcategory: string;
		/** Nhập nội dung mô tả ngắn về mục tiêu hoặc chủ đề chính của email. */
		Subject: string;
		/** Hiển thị tài khoản Microsoft Office Outlook cho người dùng đã gửi email tới Microsoft Dynamics 365. */
		SubmittedBy: string;
		/** Chỉ sử dụng nội bộ. ID cho mẫu đã dùng trong email. */
		TemplateId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Hiển thị địa chỉ email tương ứng với người nhận. */
		ToRecipients: string;
		/** Hiển thị mã thông báo theo dõi được gán cho email nhằm đảm bảo các email trả lời được tự động theo dõi trong Microsoft Dynamics 365. */
		TrackingToken: string;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của email. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Thực thể đã chấp nhận email */
			readonly acceptingentityid_queue: string;
			/** Thực thể đã chấp nhận email */
			readonly acceptingentityid_systemuser: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ActivityAdditionalParams: string;
			/** Mã định danh duy nhất của hoạt động email. */
			readonly ActivityId: string;
			/** Nhập số phút cần để tạo và gửi email. Khoảng thời gian này được sử dụng trong báo cáo. */
			readonly ActualDurationMinutes: string;
			/** Nhập ngày và giờ kết thúc thực tế của email. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động nhưng có thể chỉnh sửa trường này để thu thập thời gian tạo và gửi email thực tế. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Nhập ngày và giờ bắt đầu thực tế cho email. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động nhưng có thể chỉnh sửa trường này để thu thập thời gian tạo và gửi email thực tế. */
			readonly ActualStart_UtcDateOnly: string;
			/** Hiển thị số lượng tệp đính kèm của email. */
			readonly AttachmentCount: string;
			/** Cho biết số lần một tệp đính kèm email đã được xem. */
			readonly AttachmentOpenCount: string;
			/** Hàm băm gốc của chỉ mục cuộc hội thoại. */
			readonly BaseConversationIndexHash: string;
			/** Nhập một thể loại để xác định loại email, chẳng hạn như liên hệ với khách hàng tiềm năng, theo dõi khách hàng hoặc thông báo dịch vụ, nhằm liên kết email với một chức năng hoặc nhóm kinh doanh. */
			readonly Category: string;
			/** Cho biết nội dung có được nén hay không. */
			readonly Compressed: string;
			/** Mã định danh cho tất cả các email phản hồi cuộc hội thoại này. */
			readonly ConversationIndex: string;
			/** ID Theo dõi Cuộc hội thoại. */
			readonly ConversationTrackingId: string;
			/** ID hoạt động có tương quan */
			readonly CorrelatedActivityId: string;
			/** Cho biết nếu chủ đề đã thay đổi so với chủ đề của email tương quan */
			readonly correlatedsubjectchanged: string;
			/** Hiển thị cách một email được ràng buộc với một email hiện có trong Microsoft Dynamics 365. XHeader và CustomCorrelation không được sử dụng. Chỉ sử dụng trong hệ thống. */
			readonly CorrelationMethod: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập ngày và giờ hết hạn dự kiến để gửi email. */
			readonly DelayedEmailSendTime_UtcDateAndTime: string;
			/** Hiển thị số lần cố gắng gửi email đã được thực hiện. Số lần này được sử dụng làm chỉ số cho các sự cố định tuyến email. */
			readonly DeliveryAttempts: string;
			/** Chọn mức ưu tiên cho việc gửi email đến máy chủ email. */
			readonly DeliveryPriorityCode: string;
			/** Chọn liệu người gửi có nhận được xác nhận rằng email đã được gửi hay không. */
			readonly DeliveryReceiptRequested: string;
			/** Nhập lời chào và nội dung email. */
			readonly Description: string;
			/** Tệp chứa nội dung mô tả. */
			readonly DescriptionBlobId_name: string;
			/** Chọn hướng của email là đến hoặc đi. */
			readonly DirectionCode: string;
			/** Hiển thị ngày và giờ lời nhắc email hết hạn. */
			readonly EmailReminderExpiryTime_UtcDateAndTime: string;
			/** Cho biết trạng thái của lời nhắc email. */
			readonly EmailReminderStatus: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EmailReminderText: string;
			/** Hiển thị loại lời nhắc email. */
			readonly EmailReminderType: string;
			/** Hiển thị người gửi email. */
			readonly emailsender_account: string;
			/** Hiển thị người gửi email. */
			readonly emailsender_contact: string;
			/** Hiển thị người gửi email. */
			readonly emailsender_queue: string;
			/** Hiển thị người gửi email. */
			readonly emailsender_systemuser: string;
			/** ID Theo dõi Email. */
			readonly EmailTrackingId: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Chọn xem email có cho phép theo dõi hoạt động của người nhận được gửi từ Microsoft Dynamics 365 hay không. Đây là trạng thái tùy chọn của người dùng, có thể được trạng thái đánh giá hệ thống thay thế. */
			readonly FollowEmailUserPreference: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Nhập ID email mà hoạt động email này phản hồi tới. */
			readonly InReplyTo: string;
			/** Chứa một tập hợp các tiêu đề trên Internet được liên kết với thư email ở định dạng JSON */
			readonly InternetMessageHeaders: string;
			/** Thông tin liên quan tới việc liệu hoạt động email có được lập hóa đơn như là một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Cho biết người gửi email không xác định được trong trường hợp có nhiều kết quả trùng khớp */
			readonly IsDuplicateSenderUnresolved: string;
			/** Chỉ sử dụng nội bộ Hiển thị xem email có được theo dõi hay không. Đây là trạng thái đánh giá thay thế lựa chọn theo dõi email của người dùng. */
			readonly IsEmailFollowed: string;
			/** Chỉ sử dụng nội bộ. Hiển thị khả năng Đặt Lời nhắc email này. */
			readonly IsEmailReminderSet: string;
			/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsSafeDescriptionTruncated: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsUnsafe: string;
			/** Cho biết liệu email có được tạo bởi quy tắc quy trình hay không. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Hiển thị ngày và giờ email đã được mở gần đây nhất. */
			readonly LastOpenedTime_UtcDateAndTime: string;
			/** Cho biết số lần liên kết trong email đã được bấm vào. */
			readonly LinksClickedCount: string;
			/** Mã định danh duy nhất của email. Chỉ sử dụng cho email được nhận. */
			readonly MessageId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly MessageIdDupCheck: string;
			/** Loại MIME của dữ liệu email. */
			readonly MimeType: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Chọn mã thông báo để xác định các sự cố xảy ra với người nhận email hoặc tệp đính kèm, chẳng hạn như các tệp đính kèm bị chặn. */
			readonly Notifications: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Cho biết số lần email đã được mở. */
			readonly OpenCount: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động email. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hoạt động email. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu hoạt động email. */
			readonly OwningUser: string;
			/** Chọn hoạt động mà email được liên kết với. */
			readonly ParentActivityId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PostponeEmailProcessingUntil_UtcDateAndTime: string;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			readonly PriorityCode: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Chỉ ra rằng biên nhận đã đọc được yêu cầu. */
			readonly ReadReceiptRequested: string;
			/** Hộp thư đã nhận được email. */
			readonly ReceivingMailboxId: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_account_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_adx_invitation_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_asyncoperation: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_contact_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_knowledgearticle_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_knowledgebaserecord_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_mspp_adplacement_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_mspp_pollplacement_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_mspp_redirect_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_mspp_shortcut_email: string;
			/** Chọn bản ghi liên quan đến email. */
			readonly regardingobjectid_mspp_website_email: string;
			/** ID Thẻ Hành động Lời nhắc. */
			readonly ReminderActionCardId: string;
			/** Cho biết số lần thư trả lời đã nhận được cho một email. */
			readonly ReplyCount: string;
			/** Chỉ sử dụng nội bộ */
			readonly ReservedForInternalUse: string;
			/** Khoảng thời gian theo lịch của hoạt động email, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian email sẽ được gửi. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Nhập ngày và giờ bắt đầu dự kiến cho hoạt động để cung cấp chi tiết về thời gian tạm thời phải bắt đầu hoạt động email. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Người gửi email. */
			readonly Sender: string;
			/** Chọn hộp thư được liên kết với người gửi email. */
			readonly SenderMailboxId: string;
			/** Hiển thị tài khoản mẹ của người gửi email. */
			readonly SendersAccount: string;
			/** Hiển thị ngày và giờ gửi email. */
			readonly SentOn_UtcDateAndTime: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi email. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho email này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Cho biết liệu email đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các email đã hoàn thành và bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			readonly StateCode: string;
			/** Chọn trạng thái của email. */
			readonly StatusCode: string;
			/** Nhập thể loại phụ để xác định loại email và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
			readonly Subcategory: string;
			/** Nhập nội dung mô tả ngắn về mục tiêu hoặc chủ đề chính của email. */
			readonly Subject: string;
			/** Hiển thị tài khoản Microsoft Office Outlook cho người dùng đã gửi email tới Microsoft Dynamics 365. */
			readonly SubmittedBy: string;
			/** Chỉ sử dụng nội bộ. ID cho mẫu đã dùng trong email. */
			readonly TemplateId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Hiển thị địa chỉ email tương ứng với người nhận. */
			readonly ToRecipients: string;
			/** Hiển thị mã thông báo theo dõi được gán cho email nhằm đảm bảo các email trả lời được tự động theo dõi trong Microsoft Dynamics 365. */
			readonly TrackingToken: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của email. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Email {
		enum AcceptingEntityTypeCode {
		}
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
		enum CorrelationMethod {
			/** 5 */
			ConversationIndex,
			/** 7 */
			CustomCorrelation,
			/** 1 */
			Da_bo_qua,
			/** 3 */
			InReplyTo,
			/** 0 */
			Khong_co,
			/** 6 */
			SmartMatching,
			/** 4 */
			TrackingToken,
			/** 2 */
			XHeader
		}
		enum DeliveryPriorityCode {
			/** 1 */
			Binh_thuong,
			/** 2 */
			Cao,
			/** 0 */
			Thap
		}
		enum EmailReminderStatus {
			/** 0 */
			NotSet,
			/** 2 */
			ReminderExpired,
			/** 3 */
			ReminderInvalid,
			/** 1 */
			ReminderSet
		}
		enum EmailReminderType {
			/** 1 */
			Neu_email_khong_duoc_mo_vao,
			/** 0 */
			Neu_toi_khong_nhan_duoc_thu_tra_loi_vao,
			/** 2 */
			Van_cu_nhac_toi_vao
		}
		enum EmailSenderObjectTypeCode {
		}
		enum Notifications {
			/** 0 */
			Khong,
			/** 2 */
			Noi_dung_bi_cat_bot,
			/** 1 */
			Thu_da_duoc_luu_thanh_ban_ghi_email_Microsoft_Dynamics_365_nhung_khong_the_luu_tat_ca_cac_tep_dinh_kem_voi_thu_Khong_the_luu_mot_tep_dinh_kem_neu_tep_do_da_bi_chan_hoac_loai_tep_khong_hop_le
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
		enum SendersAccountObjectTypeCode {
		}
		enum StateCode {
			/** 1 */
			Da_hoan_thanh,
			/** 2 */
			Da_huy,
			/** 0 */
			Mo
		}
		enum StatusCode {
			/** 1 */
			Ban_nhap,
			/** 3 */
			Da_gui,
			/** 2 */
			Da_hoan_thanh,
			/** 5 */
			Da_huy,
			/** 4 */
			Da_nhan,
			/** 6 */
			Dang_cho_Gui,
			/** 7 */
			Dang_gui,
			/** 8 */
			Khong_thanh_cong
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