//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCuoc_hen {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Cho biết cuộc hẹn đang mở, đã hoàn thành hay bị hủy. Cuộc hẹn đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_appointment_Sections {
			appointment_description: DevKit.Controls.Section;
			attachments: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			scheduling_information: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_appointment extends DevKit.Controls.ITab {
			Section: tab_appointment_Sections;
		}
		interface Tabs {
			appointment: tab_appointment;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thông tin bổ sung để mô tả mục đích của cuộc hẹn. */
			Description: DevKit.Controls.String;
			/** Chọn cuộc hẹn có là sự kiện cả ngày hay không để đảm bảo rằng nguồn lực bắt buộc được lên lịch cho cả ngày. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Nhập vị trí diễn ra cuộc hẹn, chẳng hạn như phòng hội nghị hoặc văn phòng khách hàng. */
			Location: DevKit.Controls.String;
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị không cần thiết tại cuộc hẹn, nhưng có thể tham gia theo tùy chọn. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị khác bắt buộc phải tham gia cuộc hẹn. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Cho biết khoảng thời gian dự kiến của cuộc hẹn, tính bằng phút. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Nhập ngày và giờ bắt đầu dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			appointment_activity_mime_attachment: DevKit.Controls.NavigationItem,
			Appointment_QueueItem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormCuoc_hen extends DevKit.IForm {
		/**
		* Cuộc hẹn [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Cuoc_hen */
		Body: DevKit.FormCuoc_hen.Body;
		/** The Header section of form Cuoc_hen */
		Header: DevKit.FormCuoc_hen.Header;
		/** The Navigation of form Cuoc_hen */
		Navigation: DevKit.FormCuoc_hen.Navigation;
		/** The Grid of form Cuoc_hen */
		Grid: DevKit.FormCuoc_hen.Grid;
		/** The SidePanes of form Cuoc_hen */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCuoc_hen_Trai_nghiem_Tuong_tac {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Cho biết cuộc hẹn đang mở, đã hoàn thành hay bị hủy. Cuộc hẹn đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_5_Sections {
			appointment_description: DevKit.Controls.Section;
			tab_5_section_2: DevKit.Controls.Section;
			tab_5_section_3: DevKit.Controls.Section;
			tab_5_section_5: DevKit.Controls.Section;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thông tin bổ sung để mô tả mục đích của cuộc hẹn. */
			Description: DevKit.Controls.String;
			/** Chọn cuộc hẹn có là sự kiện cả ngày hay không để đảm bảo rằng nguồn lực bắt buộc được lên lịch cho cả ngày. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Nhập vị trí diễn ra cuộc hẹn, chẳng hạn như phòng hội nghị hoặc văn phòng khách hàng. */
			Location: DevKit.Controls.String;
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị không cần thiết tại cuộc hẹn, nhưng có thể tham gia theo tùy chọn. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị khác bắt buộc phải tham gia cuộc hẹn. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Cho biết khoảng thời gian dự kiến của cuộc hẹn, tính bằng phút. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Nhập ngày và giờ bắt đầu dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			appointment_activity_mime_attachment: DevKit.Controls.NavigationItem,
			Appointment_QueueItem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormCuoc_hen_Trai_nghiem_Tuong_tac extends DevKit.IForm {
		/**
		* Cuộc hẹn Trải nghiệm Tương tác [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Cuoc_hen_Trai_nghiem_Tuong_tac */
		Body: DevKit.FormCuoc_hen_Trai_nghiem_Tuong_tac.Body;
		/** The Header section of form Cuoc_hen_Trai_nghiem_Tuong_tac */
		Header: DevKit.FormCuoc_hen_Trai_nghiem_Tuong_tac.Header;
		/** The Navigation of form Cuoc_hen_Trai_nghiem_Tuong_tac */
		Navigation: DevKit.FormCuoc_hen_Trai_nghiem_Tuong_tac.Navigation;
		/** The Grid of form Cuoc_hen_Trai_nghiem_Tuong_tac */
		Grid: DevKit.FormCuoc_hen_Trai_nghiem_Tuong_tac.Grid;
		/** The SidePanes of form Cuoc_hen_Trai_nghiem_Tuong_tac */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTrinh_huong_dan {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
		}
		interface tab_appointment_Sections {
			appointment_description: DevKit.Controls.Section;
			attachments: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			Hidden_Section: DevKit.Controls.Section;
			scheduling_information: DevKit.Controls.Section;
		}
		interface tab_appointment extends DevKit.Controls.ITab {
			Section: tab_appointment_Sections;
		}
		interface Tabs {
			appointment: tab_appointment;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thông tin bổ sung để mô tả mục đích của cuộc hẹn. */
			Description: DevKit.Controls.String;
			/** Chọn cuộc hẹn có là sự kiện cả ngày hay không để đảm bảo rằng nguồn lực bắt buộc được lên lịch cho cả ngày. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Nhập vị trí diễn ra cuộc hẹn, chẳng hạn như phòng hội nghị hoặc văn phòng khách hàng. */
			Location: DevKit.Controls.String;
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị không cần thiết tại cuộc hẹn, nhưng có thể tham gia theo tùy chọn. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị khác bắt buộc phải tham gia cuộc hẹn. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Cho biết khoảng thời gian dự kiến của cuộc hẹn, tính bằng phút. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Nhập ngày và giờ bắt đầu dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Chọn trạng thái của cuộc hẹn. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			appointment_activity_mime_attachment: DevKit.Controls.NavigationItem,
			Appointment_QueueItem: DevKit.Controls.NavigationItem
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
	namespace FormAppointment_quick_create_form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thông tin bổ sung để mô tả mục đích của cuộc hẹn. */
			Description: DevKit.Controls.String;
			/** Chọn cuộc hẹn có là sự kiện cả ngày hay không để đảm bảo rằng nguồn lực bắt buộc được lên lịch cho cả ngày. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Nhập vị trí diễn ra cuộc hẹn, chẳng hạn như phòng hội nghị hoặc văn phòng khách hàng. */
			Location: DevKit.Controls.String;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị không cần thiết tại cuộc hẹn, nhưng có thể tham gia theo tùy chọn. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị khác bắt buộc phải tham gia cuộc hẹn. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Cho biết khoảng thời gian dự kiến của cuộc hẹn, tính bằng phút. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Nhập ngày và giờ bắt đầu dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormAppointment_quick_create_form extends DevKit.IForm {
		/**
		* Appointment quick create form. [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Appointment_quick_create_form */
		Body: DevKit.FormAppointment_quick_create_form.Body;
	}
	class AppointmentApi {
		/**
		* DynamicsCrm.DevKit AppointmentApi
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
		ActivityAdditionalParams: string;
		/** Mã định danh duy nhất của cuộc hẹn. */
		ActivityId: string;
		/** Cho biết giá trị được chọn trong trường Khoảng thời gian trong cuộc hẹn tại thời điểm đóng hoặc hoàn thành cuộc hẹn. Khoảng thời gian được dùng để báo cáo thời lượng sử dụng trong hoạt động. */
		ActualDurationMinutes: number;
		/** Nhập ngày và giờ kết thúc thực tế của cuộc hẹn. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động, nhưng có thể chỉnh sửa được để thu thập khoảng thời gian thực tế của cuộc hẹn. */
		ActualEnd_UtcDateAndTime: Date;
		/** Nhập ngày và giờ bắt đầu thực tế cho cuộc hẹn. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động, nhưng có thể chỉnh sửa được để thu thập khoảng thời gian thực tế của cuộc hẹn. */
		ActualStart_UtcDateAndTime: Date;
		/** Hiển thị số lượng tệp đính kèm trong cuộc hẹn. */
		readonly AttachmentCount: number;
		/** Chọn mã lỗi để xác định sự cố với người nhận hoặc tệp đính kèm trong mục outlook, chẳng hạn như tệp đính kèm bị chặn. */
		AttachmentErrors: OptionSet.Appointment.AttachmentErrors;
		/** Nhập một thể loại để xác định loại cuộc hẹn, chẳng hạn như giới thiệu bán hàng, gọi điện cho nhà tài trợ tiềm năng hay cuộc gọi dịch vụ, nhằm liên kết cuộc hẹn với chức năng hoặc nhóm kinh doanh. */
		Category: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung để mô tả mục đích của cuộc hẹn. */
		Description: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Thời gian kết thúc đã lên lịch đã được định dạng của cuộc hẹn. */
		readonly FormattedScheduledEnd_TimezoneDateAndTime: Date;
		/** Thời gian bắt đầu đã lên lịch đã được định dạng của cuộc hẹn. */
		readonly FormattedScheduledStart_TimezoneDateAndTime: Date;
		/** Cho biết ID của cuộc hẹn trong Microsoft Office Outlook. ID được dùng để đồng bộ hóa cuộc hẹn giữa Microsoft Dynamics 365 và tài khoản Exchange chính xác. */
		GlobalObjectId: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Loại phiên bản của chuỗi lặp lại. */
		readonly InstanceTypeCode: OptionSet.Appointment.InstanceTypeCode;
		/** Chọn cuộc hẹn có là sự kiện cả ngày hay không để đảm bảo rằng nguồn lực bắt buộc được lên lịch cho cả ngày. */
		IsAllDayEvent: boolean;
		/** Thông tin về việc cuộc hẹn có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Thông tin về việc cuộc hẹn có phải là bản nháp hay không. */
		IsDraft: boolean;
		/** Chỉ sử dụng nội bộ. */
		IsMapiPrivate: boolean;
		/** Hiển thị xem đây có phải là cuộc họp trực tuyến hay không. */
		IsOnlineMeeting: boolean;
		/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly IsUnsafe: number;
		/** Thông tin về việc cuộc hẹn có được tạo từ quy tắc quy trình làm việc hay không. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Nhập vị trí diễn ra cuộc hẹn, chẳng hạn như phòng hội nghị hoặc văn phòng khách hàng. */
		Location: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Chỉ sử dụng nội bộ.  */
		readonly ModifiedFieldsMask: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Hiển thị ID cuộc trò chuyện trong cuộc họp trực tuyến. */
		OnlineMeetingChatId: string;
		/** Hiển thị ID cuộc họp trực tuyến. */
		OnlineMeetingId: string;
		/** Hiển thị URL tham gia cuộc họp trực tuyến. */
		OnlineMeetingJoinUrl: string;
		/** Hiển thị loại cuộc họp trực tuyến. */
		OnlineMeetingType: OptionSet.Appointment.OnlineMeetingType;
		/** Ngày bắt đầu ban đầu của cuộc hẹn. */
		readonly OriginalStartDate_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của chủ sở hữu cuộc hẹn Microsoft Office Outlook liên quan đến thuộc tính MAPI PR_OWNER_APPT_ID. */
		OutlookOwnerApptId: number;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu cuộc hẹn. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu cuộc hẹn. */
		readonly OwningUser: string;
		/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
		PriorityCode: OptionSet.Appointment.PriorityCode;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_account_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_adx_invitation_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_contact_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_knowledgearticle_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_knowledgebaserecord_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_mspp_adplacement_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_mspp_pollplacement_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_mspp_publishingstatetransitionrule_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_mspp_redirect_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_mspp_shortcut_appointment: string;
		/** Chọn bản ghi liên quan đến cuộc hẹn. */
		regardingobjectid_mspp_website_appointment: string;
		/** Cho biết khoảng thời gian dự kiến của cuộc hẹn, tính bằng phút. */
		ScheduledDurationMinutes: number;
		/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Nhập ngày và giờ bắt đầu dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Cho biết ID của chuỗi lặp lại của phiên bản. */
		readonly SeriesId: string;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi cuộc hẹn. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho cuộc hẹn này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Cho biết cuộc hẹn đang mở, đã hoàn thành hay bị hủy. Cuộc hẹn đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
		StateCode: OptionSet.Appointment.StateCode;
		/** Chọn trạng thái của cuộc hẹn. */
		StatusCode: OptionSet.Appointment.StatusCode;
		/** Nhập thể loại phụ để xác định loại cuộc hẹn và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
		Subcategory: string;
		/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn. */
		Subject: string;
		/** Chỉ sử dụng nội bộ. */
		SubscriptionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của cuộc hẹn. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ActivityAdditionalParams: string;
			/** Mã định danh duy nhất của cuộc hẹn. */
			readonly ActivityId: string;
			/** Cho biết giá trị được chọn trong trường Khoảng thời gian trong cuộc hẹn tại thời điểm đóng hoặc hoàn thành cuộc hẹn. Khoảng thời gian được dùng để báo cáo thời lượng sử dụng trong hoạt động. */
			readonly ActualDurationMinutes: string;
			/** Nhập ngày và giờ kết thúc thực tế của cuộc hẹn. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động, nhưng có thể chỉnh sửa được để thu thập khoảng thời gian thực tế của cuộc hẹn. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Nhập ngày và giờ bắt đầu thực tế cho cuộc hẹn. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động, nhưng có thể chỉnh sửa được để thu thập khoảng thời gian thực tế của cuộc hẹn. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Hiển thị số lượng tệp đính kèm trong cuộc hẹn. */
			readonly AttachmentCount: string;
			/** Chọn mã lỗi để xác định sự cố với người nhận hoặc tệp đính kèm trong mục outlook, chẳng hạn như tệp đính kèm bị chặn. */
			readonly AttachmentErrors: string;
			/** Nhập một thể loại để xác định loại cuộc hẹn, chẳng hạn như giới thiệu bán hàng, gọi điện cho nhà tài trợ tiềm năng hay cuộc gọi dịch vụ, nhằm liên kết cuộc hẹn với chức năng hoặc nhóm kinh doanh. */
			readonly Category: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung để mô tả mục đích của cuộc hẹn. */
			readonly Description: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Thời gian kết thúc đã lên lịch đã được định dạng của cuộc hẹn. */
			readonly FormattedScheduledEnd_TimezoneDateAndTime: string;
			/** Thời gian bắt đầu đã lên lịch đã được định dạng của cuộc hẹn. */
			readonly FormattedScheduledStart_TimezoneDateAndTime: string;
			/** Cho biết ID của cuộc hẹn trong Microsoft Office Outlook. ID được dùng để đồng bộ hóa cuộc hẹn giữa Microsoft Dynamics 365 và tài khoản Exchange chính xác. */
			readonly GlobalObjectId: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Loại phiên bản của chuỗi lặp lại. */
			readonly InstanceTypeCode: string;
			/** Chọn cuộc hẹn có là sự kiện cả ngày hay không để đảm bảo rằng nguồn lực bắt buộc được lên lịch cho cả ngày. */
			readonly IsAllDayEvent: string;
			/** Thông tin về việc cuộc hẹn có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Thông tin về việc cuộc hẹn có phải là bản nháp hay không. */
			readonly IsDraft: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsMapiPrivate: string;
			/** Hiển thị xem đây có phải là cuộc họp trực tuyến hay không. */
			readonly IsOnlineMeeting: string;
			/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsUnsafe: string;
			/** Thông tin về việc cuộc hẹn có được tạo từ quy tắc quy trình làm việc hay không. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Nhập vị trí diễn ra cuộc hẹn, chẳng hạn như phòng hội nghị hoặc văn phòng khách hàng. */
			readonly Location: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Chỉ sử dụng nội bộ.  */
			readonly ModifiedFieldsMask: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Hiển thị ID cuộc trò chuyện trong cuộc họp trực tuyến. */
			readonly OnlineMeetingChatId: string;
			/** Hiển thị ID cuộc họp trực tuyến. */
			readonly OnlineMeetingId: string;
			/** Hiển thị URL tham gia cuộc họp trực tuyến. */
			readonly OnlineMeetingJoinUrl: string;
			/** Hiển thị loại cuộc họp trực tuyến. */
			readonly OnlineMeetingType: string;
			/** Ngày bắt đầu ban đầu của cuộc hẹn. */
			readonly OriginalStartDate_UtcDateAndTime: string;
			/** Mã định danh duy nhất của chủ sở hữu cuộc hẹn Microsoft Office Outlook liên quan đến thuộc tính MAPI PR_OWNER_APPT_ID. */
			readonly OutlookOwnerApptId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu cuộc hẹn. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu cuộc hẹn. */
			readonly OwningUser: string;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			readonly PriorityCode: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_account_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_adx_invitation_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_contact_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_knowledgearticle_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_knowledgebaserecord_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_mspp_adplacement_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_mspp_pollplacement_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_mspp_redirect_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_mspp_shortcut_appointment: string;
			/** Chọn bản ghi liên quan đến cuộc hẹn. */
			readonly regardingobjectid_mspp_website_appointment: string;
			/** Cho biết khoảng thời gian dự kiến của cuộc hẹn, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Nhập ngày và giờ hết hạn dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Nhập ngày và giờ bắt đầu dự kiến để hoàn thành hoạt động nhằm cung cấp chi tiết về thời gian của cuộc hẹn. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Cho biết ID của chuỗi lặp lại của phiên bản. */
			readonly SeriesId: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi cuộc hẹn. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho cuộc hẹn này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Cho biết cuộc hẹn đang mở, đã hoàn thành hay bị hủy. Cuộc hẹn đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			readonly StateCode: string;
			/** Chọn trạng thái của cuộc hẹn. */
			readonly StatusCode: string;
			/** Nhập thể loại phụ để xác định loại cuộc hẹn và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
			readonly Subcategory: string;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn. */
			readonly Subject: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SubscriptionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của cuộc hẹn. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Appointment {
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
		enum AttachmentErrors {
			/** 1 */
			Cuoc_hen_da_duoc_luu_thanh_ban_ghi_cuoc_hen_Microsoft_Dynamics_365_nhung_khong_the_luu_tat_ca_cac_tep_dinh_kem_voi_cuoc_hen_Khong_the_luu_mot_tep_dinh_kem_neu_tep_do_da_bi_chan_hoac_loai_tep_khong_hop_le,
			/** 0 */
			Khong
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
		enum OnlineMeetingType {
			/** 1 */
			Cuoc_hop_trong_Teams
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
			/** 5 */
			Ban,
			/** 2 */
			Chua_dut_khoat,
			/** 3 */
			Da_hoan_thanh,
			/** 4 */
			Da_huy,
			/** 6 */
			Khong_co_mat_o_van_phong,
			/** 1 */
			Ranh
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