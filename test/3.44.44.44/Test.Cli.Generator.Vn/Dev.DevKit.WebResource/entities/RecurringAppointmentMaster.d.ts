//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCuoc_hen_Lap_lai {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Cho biết cuộc hẹn lặp lại ở trạng thái mở, đã lên lịch, đã hoàn thành hay bị hủy. Cuộc hẹn đã hoàn thành hoặc bị hủy sẽ có trạng thái chỉ đọc và không chỉnh sửa được. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			appointment_description: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thêm thông tin để mô tả cuộc hẹn lặp lại, như những điểm thảo luận chính hoặc mục tiêu. */
			Description: DevKit.Controls.String;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Nhập vị trí diễn ra cuộc hẹn lặp lại, như phòng hội nghị hoặc văn phòng khách hàng. */
			Location: DevKit.Controls.String;
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị không cần thiết tại cuộc hẹn lặp lại, nhưng có thể tham gia theo tùy chọn. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, người dùng hoặc nguồn lực thiết bị khác bắt buộc phải tham gia cuộc hẹn lặp lại. */
			RequiredAttendees: DevKit.Controls.Lookup;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn lặp lại. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormCuoc_hen_Lap_lai extends DevKit.IForm {
		/**
		* Cuộc hẹn Lặp lại [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Cuoc_hen_Lap_lai */
		Body: DevKit.FormCuoc_hen_Lap_lai.Body;
		/** The Header section of form Cuoc_hen_Lap_lai */
		Header: DevKit.FormCuoc_hen_Lap_lai.Header;
		/** The Navigation of form Cuoc_hen_Lap_lai */
		Navigation: DevKit.FormCuoc_hen_Lap_lai.Navigation;
		/** The SidePanes of form Cuoc_hen_Lap_lai */
		SidePanes: DevKit.SidePanes;
	}
	class RecurringAppointmentMasterApi {
		/**
		* DynamicsCrm.DevKit RecurringAppointmentMasterApi
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
		/** Mã định danh duy nhất của chuỗi cuộc hẹn lặp lại. */
		ActivityId: string;
		/** Nhập thể loại để xác định loại cuộc hẹn lặp lại, như họp giao ban hay cuộc gọi dịch vụ, để liên kết cuộc hẹn với bộ phận hoặc nhóm kinh doanh. */
		Category: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Ngày của tháng xảy ra cuộc hẹn lặp lại. */
		DayOfMonth: number;
		/** Bitmask cho biết ngày của tuần xảy ra cuộc hẹn lặp lại. */
		DaysOfWeekMask: number;
		/** Danh sách lần xuất hiện đã xóa của chuỗi cuộc hẹn lặp lại. */
		readonly DeletedExceptionsList: string;
		/** Nhập thêm thông tin để mô tả cuộc hẹn lặp lại, như những điểm thảo luận chính hoặc mục tiêu. */
		Description: string;
		/** Khoảng thời gian của chuỗi cuộc hẹn lặp lại, tính bằng phút. */
		Duration: number;
		/** Ngày kết thúc thực tế của chuỗi cuộc hẹn lặp lại, dựa trên ngày kết thúc đã chỉ định và mẫu lặp lại. */
		EffectiveEndDate_UtcDateAndTime: Date;
		/** Ngày bắt đầu thực tế của chuỗi cuộc hẹn lặp lại, dựa trên ngày bắt đầu đã chỉ định và mẫu lặp lại. */
		EffectiveStartDate_UtcDateOnly: Date;
		/** Thời gian kết thúc của hoạt động đã liên kết. */
		EndTime_UtcDateAndTime: Date;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã trạng thái để cho biết chuỗi cuộc hẹn lặp lại mở rộng toàn bộ hay một phần. */
		readonly ExpansionStateCode: OptionSet.RecurringAppointmentMaster.ExpansionStateCode;
		/** Ngày đầu tiên của tuần dành cho mẫu lặp lại. */
		FirstDayOfWeek: number;
		/** Mã định danh Outlook duy nhất để tương quan chuỗi cuộc hẹn lặp lại trong các hộp thư Exchange. */
		GlobalObjectId: string;
		/** Mã định danh duy nhất của chuỗi cuộc hẹn lặp lại, trong đó, đã cập nhật thông tin lặp lại.  */
		readonly GroupId: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Xác định chuỗi cuộc hẹn lặp lại để xảy ra vào mỗi ngày thứ N của tháng. Duy nhất hợp lệ cho mẫu lặp lại hàng tháng và hàng năm. */
		Instance: OptionSet.RecurringAppointmentMaster.Instance;
		/** Loại xuất hiện của chuỗi cuộc hẹn lặp lại. */
		readonly InstanceTypeCode: OptionSet.RecurringAppointmentMaster.InstanceTypeCode;
		/** Số lượng đơn vị của loại lặp lại đã cho giữa các lần xảy ra. */
		Interval: number;
		/** Chọn khả năng cuộc hẹn lặp lại là sự kiện cả ngày, để đảm bảo lên lịch nguồn lực bắt buộc cho cả ngày. */
		IsAllDayEvent: boolean;
		/** Chỉ định khả năng xuất hóa đơn cho chuỗi cuộc hẹn lặp lại khi giải quyết trường hợp. */
		IsBilled: boolean;
		/** Chỉ sử dụng nội bộ. */
		IsMapiPrivate: boolean;
		/** Chỉ định khả năng xảy ra chuỗi cuộc hẹn lặp lại sau N tháng một lần. Duy nhất hợp lệ cho mẫu lặp lại hàng tháng. */
		IsNthMonthly: boolean;
		/** Chỉ định khả năng xảy ra chuỗi cuộc hẹn lặp lại sau N năm một lần. Duy nhất hợp lệ cho mẫu lặp lại hàng năm. */
		IsNthYearly: boolean;
		/** Hiển thị xem đây có phải là cuộc họp trực tuyến hay không. */
		IsOnlineMeeting: boolean;
		/** Chỉ sử dụng nội bộ. */
		IsRegenerate: boolean;
		/** Chỉ định hoạt động là loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly IsUnsafe: number;
		/** Chỉ định khả năng mẫu lặp lại hàng tuần là mẫu hàng ngày vào ngày trong tuần. Duy nhất hợp lệ cho mẫu hàng tuần. */
		IsWeekDayPattern: boolean;
		/** Chỉ định khả năng tạo chuỗi cuộc hẹn lặp lại từ quy tắc quy trình. */
		IsWorkflowCreated: boolean;
		/** Ngày xuất hiện mở rộng cuối cùng của chuỗi cuộc hẹn lặp lại. */
		readonly LastExpandedInstanceDate_UtcDateAndTime: Date;
		/** Nhập vị trí diễn ra cuộc hẹn lặp lại, như phòng hội nghị hoặc văn phòng khách hàng. */
		Location: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Chỉ định tháng của năm cho mẫu lặp lại. */
		MonthOfYear: OptionSet.RecurringAppointmentMaster.MonthOfYear;
		/** Ngày xuất hiện mở rộng tiếp theo của chuỗi cuộc hẹn lặp lại. */
		readonly NextExpansionInstanceDate_UtcDateAndTime: Date;
		/** Số lần xảy ra cuộc hẹn trong chuỗi cuộc hẹn lặp lại. */
		Occurrences: number;
		/** Hiển thị ID cuộc trò chuyện trong cuộc họp trực tuyến. */
		OnlineMeetingChatId: string;
		/** Hiển thị ID cuộc họp trực tuyến. */
		OnlineMeetingId: string;
		/** Hiển thị URL tham gia cuộc họp trực tuyến. */
		OnlineMeetingJoinUrl: string;
		/** Hiển thị loại cuộc họp trực tuyến. */
		OnlineMeetingType: OptionSet.RecurringAppointmentMaster.OnlineMeetingType;
		/** Mã định danh duy nhất của chủ sở hữu chuỗi cuộc hẹn lặp lại Microsoft Office Outlook có tương quan với thuộc tính MAPI PR_OWNER_APPT_ID. */
		OutlookOwnerApptId: number;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu chuỗi cuộc hẹn lặp lại. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu chuỗi cuộc hẹn lặp lại. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu chuỗi cuộc hẹn lặp lại. */
		readonly OwningUser: string;
		/** Ngày kết thúc của phạm vi lặp lại. */
		PatternEndDate_UtcDateOnly: Date;
		/** Chọn loại ngày kết thúc cho cuộc hẹn lặp lại, như không có ngày kết thúc hoặc số lần xảy ra. */
		PatternEndType: OptionSet.RecurringAppointmentMaster.PatternEndType;
		/** Ngày bắt đầu của phạm vi lặp lại. */
		PatternStartDate_UtcDateOnly: Date;
		/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
		PriorityCode: OptionSet.RecurringAppointmentMaster.PriorityCode;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Chọn loại mẫu dành cho cuộc hẹn lặp lại để chỉ định cuộc hẹn xảy ra hàng ngày, hàng tuần, hàng tháng hay hàng năm. */
		RecurrencePatternType: OptionSet.RecurringAppointmentMaster.RecurrencePatternType;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_account_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_adx_invitation_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_contact_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_knowledgearticle_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_knowledgebaserecord_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_mspp_adplacement_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_mspp_pollplacement_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_mspp_publishingstatetransitionrule_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_mspp_redirect_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_mspp_shortcut_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
		regardingobjectid_mspp_website_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của quy tắc lặp lại có liên kết với chuỗi cuộc hẹn lặp lại. */
		readonly RuleId: string;
		/** Thời gian kết thúc theo lịch của chuỗi cuộc hẹn lặp lại. */
		readonly ScheduledEnd_UtcDateAndTime: Date;
		/** Thời gian bắt đầu theo lịch của chuỗi cuộc hẹn lặp lại. */
		readonly ScheduledStart_UtcDateAndTime: Date;
		/** Chỉ định chuỗi cuộc hẹn lặp lại là hiện hoạt hay không hoạt động. */
		SeriesStatus: boolean;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Thời gian bắt đầu của chuỗi cuộc hẹn lặp lại. */
		StartTime_UtcDateAndTime: Date;
		/** Cho biết cuộc hẹn lặp lại ở trạng thái mở, đã lên lịch, đã hoàn thành hay bị hủy. Cuộc hẹn đã hoàn thành hoặc bị hủy sẽ có trạng thái chỉ đọc và không chỉnh sửa được. */
		StateCode: OptionSet.RecurringAppointmentMaster.StateCode;
		/** Chọn trạng thái của cuộc hẹn lặp lại. */
		StatusCode: OptionSet.RecurringAppointmentMaster.StatusCode;
		/** Nhập thể loại con để xác định loại cuộc hẹn lặp lại và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
		Subcategory: string;
		/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn lặp lại. */
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
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của chuỗi cuộc hẹn lặp lại. */
			readonly ActivityId: string;
			/** Nhập thể loại để xác định loại cuộc hẹn lặp lại, như họp giao ban hay cuộc gọi dịch vụ, để liên kết cuộc hẹn với bộ phận hoặc nhóm kinh doanh. */
			readonly Category: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Ngày của tháng xảy ra cuộc hẹn lặp lại. */
			readonly DayOfMonth: string;
			/** Bitmask cho biết ngày của tuần xảy ra cuộc hẹn lặp lại. */
			readonly DaysOfWeekMask: string;
			/** Danh sách lần xuất hiện đã xóa của chuỗi cuộc hẹn lặp lại. */
			readonly DeletedExceptionsList: string;
			/** Nhập thêm thông tin để mô tả cuộc hẹn lặp lại, như những điểm thảo luận chính hoặc mục tiêu. */
			readonly Description: string;
			/** Khoảng thời gian của chuỗi cuộc hẹn lặp lại, tính bằng phút. */
			readonly Duration: string;
			/** Ngày kết thúc thực tế của chuỗi cuộc hẹn lặp lại, dựa trên ngày kết thúc đã chỉ định và mẫu lặp lại. */
			readonly EffectiveEndDate_UtcDateAndTime: string;
			/** Ngày bắt đầu thực tế của chuỗi cuộc hẹn lặp lại, dựa trên ngày bắt đầu đã chỉ định và mẫu lặp lại. */
			readonly EffectiveStartDate_UtcDateOnly: string;
			/** Thời gian kết thúc của hoạt động đã liên kết. */
			readonly EndTime_UtcDateAndTime: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã trạng thái để cho biết chuỗi cuộc hẹn lặp lại mở rộng toàn bộ hay một phần. */
			readonly ExpansionStateCode: string;
			/** Ngày đầu tiên của tuần dành cho mẫu lặp lại. */
			readonly FirstDayOfWeek: string;
			/** Mã định danh Outlook duy nhất để tương quan chuỗi cuộc hẹn lặp lại trong các hộp thư Exchange. */
			readonly GlobalObjectId: string;
			/** Mã định danh duy nhất của chuỗi cuộc hẹn lặp lại, trong đó, đã cập nhật thông tin lặp lại.  */
			readonly GroupId: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Xác định chuỗi cuộc hẹn lặp lại để xảy ra vào mỗi ngày thứ N của tháng. Duy nhất hợp lệ cho mẫu lặp lại hàng tháng và hàng năm. */
			readonly Instance: string;
			/** Loại xuất hiện của chuỗi cuộc hẹn lặp lại. */
			readonly InstanceTypeCode: string;
			/** Số lượng đơn vị của loại lặp lại đã cho giữa các lần xảy ra. */
			readonly Interval: string;
			/** Chọn khả năng cuộc hẹn lặp lại là sự kiện cả ngày, để đảm bảo lên lịch nguồn lực bắt buộc cho cả ngày. */
			readonly IsAllDayEvent: string;
			/** Chỉ định khả năng xuất hóa đơn cho chuỗi cuộc hẹn lặp lại khi giải quyết trường hợp. */
			readonly IsBilled: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsMapiPrivate: string;
			/** Chỉ định khả năng xảy ra chuỗi cuộc hẹn lặp lại sau N tháng một lần. Duy nhất hợp lệ cho mẫu lặp lại hàng tháng. */
			readonly IsNthMonthly: string;
			/** Chỉ định khả năng xảy ra chuỗi cuộc hẹn lặp lại sau N năm một lần. Duy nhất hợp lệ cho mẫu lặp lại hàng năm. */
			readonly IsNthYearly: string;
			/** Hiển thị xem đây có phải là cuộc họp trực tuyến hay không. */
			readonly IsOnlineMeeting: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsRegenerate: string;
			/** Chỉ định hoạt động là loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsUnsafe: string;
			/** Chỉ định khả năng mẫu lặp lại hàng tuần là mẫu hàng ngày vào ngày trong tuần. Duy nhất hợp lệ cho mẫu hàng tuần. */
			readonly IsWeekDayPattern: string;
			/** Chỉ định khả năng tạo chuỗi cuộc hẹn lặp lại từ quy tắc quy trình. */
			readonly IsWorkflowCreated: string;
			/** Ngày xuất hiện mở rộng cuối cùng của chuỗi cuộc hẹn lặp lại. */
			readonly LastExpandedInstanceDate_UtcDateAndTime: string;
			/** Nhập vị trí diễn ra cuộc hẹn lặp lại, như phòng hội nghị hoặc văn phòng khách hàng. */
			readonly Location: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Chỉ định tháng của năm cho mẫu lặp lại. */
			readonly MonthOfYear: string;
			/** Ngày xuất hiện mở rộng tiếp theo của chuỗi cuộc hẹn lặp lại. */
			readonly NextExpansionInstanceDate_UtcDateAndTime: string;
			/** Số lần xảy ra cuộc hẹn trong chuỗi cuộc hẹn lặp lại. */
			readonly Occurrences: string;
			/** Hiển thị ID cuộc trò chuyện trong cuộc họp trực tuyến. */
			readonly OnlineMeetingChatId: string;
			/** Hiển thị ID cuộc họp trực tuyến. */
			readonly OnlineMeetingId: string;
			/** Hiển thị URL tham gia cuộc họp trực tuyến. */
			readonly OnlineMeetingJoinUrl: string;
			/** Hiển thị loại cuộc họp trực tuyến. */
			readonly OnlineMeetingType: string;
			/** Mã định danh duy nhất của chủ sở hữu chuỗi cuộc hẹn lặp lại Microsoft Office Outlook có tương quan với thuộc tính MAPI PR_OWNER_APPT_ID. */
			readonly OutlookOwnerApptId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu chuỗi cuộc hẹn lặp lại. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu chuỗi cuộc hẹn lặp lại. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu chuỗi cuộc hẹn lặp lại. */
			readonly OwningUser: string;
			/** Ngày kết thúc của phạm vi lặp lại. */
			readonly PatternEndDate_UtcDateOnly: string;
			/** Chọn loại ngày kết thúc cho cuộc hẹn lặp lại, như không có ngày kết thúc hoặc số lần xảy ra. */
			readonly PatternEndType: string;
			/** Ngày bắt đầu của phạm vi lặp lại. */
			readonly PatternStartDate_UtcDateOnly: string;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			readonly PriorityCode: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Chọn loại mẫu dành cho cuộc hẹn lặp lại để chỉ định cuộc hẹn xảy ra hàng ngày, hàng tuần, hàng tháng hay hàng năm. */
			readonly RecurrencePatternType: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_account_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_adx_invitation_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_contact_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_knowledgearticle_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_knowledgebaserecord_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_mspp_adplacement_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_mspp_pollplacement_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_mspp_redirect_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_mspp_shortcut_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến chuỗi cuộc hẹn lặp lại. */
			readonly regardingobjectid_mspp_website_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của quy tắc lặp lại có liên kết với chuỗi cuộc hẹn lặp lại. */
			readonly RuleId: string;
			/** Thời gian kết thúc theo lịch của chuỗi cuộc hẹn lặp lại. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Thời gian bắt đầu theo lịch của chuỗi cuộc hẹn lặp lại. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Chỉ định chuỗi cuộc hẹn lặp lại là hiện hoạt hay không hoạt động. */
			readonly SeriesStatus: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Thời gian bắt đầu của chuỗi cuộc hẹn lặp lại. */
			readonly StartTime_UtcDateAndTime: string;
			/** Cho biết cuộc hẹn lặp lại ở trạng thái mở, đã lên lịch, đã hoàn thành hay bị hủy. Cuộc hẹn đã hoàn thành hoặc bị hủy sẽ có trạng thái chỉ đọc và không chỉnh sửa được. */
			readonly StateCode: string;
			/** Chọn trạng thái của cuộc hẹn lặp lại. */
			readonly StatusCode: string;
			/** Nhập thể loại con để xác định loại cuộc hẹn lặp lại và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
			readonly Subcategory: string;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc hẹn lặp lại. */
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
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RecurringAppointmentMaster {
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
		enum ExpansionStateCode {
			/** 2 */
			Day_du,
			/** 0 */
			Khong_mo_rong,
			/** 1 */
			Mot_phan
		}
		enum Instance {
			/** 5 */
			Cuoi_cung,
			/** 1 */
			Dau_tien,
			/** 3 */
			Thu_ba,
			/** 2 */
			Thu_hai,
			/** 4 */
			Thu_tu
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
		enum MonthOfYear {
			/** 1 */
			Thang_1,
			/** 10 */
			Thang_10,
			/** 11 */
			Thang_11,
			/** 12 */
			Thang_12,
			/** 2 */
			Thang_2,
			/** 3 */
			Thang_3,
			/** 4 */
			Thang_4,
			/** 5 */
			Thang_5,
			/** 6 */
			Thang_6,
			/** 7 */
			Thang_7,
			/** 8 */
			Thang_8,
			/** 9 */
			Thang_9,
			/** 0 */
			Thang_trong_Nam_khong_hop_le
		}
		enum OnlineMeetingType {
			/** 1 */
			Cuoc_hop_trong_Teams
		}
		enum PatternEndType {
			/** 1 */
			Khong_co_Ngay_Ket_thuc,
			/** 2 */
			Lan_xay_ra,
			/** 3 */
			Ngay_Ket_thuc_Kieu
		}
		enum PriorityCode {
			/** 1 */
			Binh_thuong,
			/** 2 */
			Cao,
			/** 0 */
			Thap
		}
		enum RecurrencePatternType {
			/** 3 */
			Hang_nam,
			/** 0 */
			Hang_ngay,
			/** 2 */
			Hang_thang,
			/** 1 */
			Hang_tuan
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