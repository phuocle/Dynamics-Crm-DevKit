//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserSettingsApi {
		/**
		* DynamicsCrm.DevKit UserSettingsApi
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
		/** Tần số bỏ phiếu thông thường, dùng đồng bộ sổ địa chỉ trong Microsoft Office Outlook. */
		AddressBookSyncInterval: number;
		/** Chế độ mặc định như đơn giản hoặc đã chi tiết cho tìm kiếm nâng cao. */
		AdvancedFindStartupMode: number;
		/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.AllowEmailConnectorToUseCredentials. */
		readonly AllowEmailCredentials: boolean;
		/** Bộ chỉ định AM để dùng trong Microsoft Dynamics 365. */
		AMDesignator: string;
		/** Đặt trạng thái người dùng cho Đề xuất ADC */
		AutoCaptureUserStatus: number;
		/** Liên hệ tạo tự động trên tăng cấp khách hàng */
		AutoCreateContactOnPromote: number;
		/** Mã định danh duy nhất của bơn vị kinh doanh có người dùng được liên kết. */
		BusinessUnitId: string;
		/** Loại lịch dành cho hệ thống. Đặt là dương lịch của Mỹ theo mặc định. */
		CalendarType: number;
		/** Mã định danh duy nhất của người dùng đã tạo thiết đặt người dùng. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo đối tượng thiết đặt. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo usersettings. */
		readonly CreatedOnBehalfBy: string;
		/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền. */
		CurrencyDecimalPrecision: number;
		/** Thông tin về cách đặt ký hiệu tiền tệ trong Microsoft Dynamics 365. */
		CurrencyFormatCode: number;
		/** Ký hiệu dùng cho loại tiền trong Microsoft Dynamics 365. */
		CurrencySymbol: string;
		/** Xác định xem trạng thái của lần thử tự động cài đặt của Dynamics 365 vào Teams đã hoàn tất hay chưa */
		D365AutoInstallAttemptStatus: OptionSet.UserSettings.D365AutoInstallAttemptStatus;
		/** Thông tin chỉ định mức xác thực dữ liệu trong bảng tính Excel đã xuất trong một định dạng thích hợp cho việc nhập. */
		DataValidationModeForExportToExcel: OptionSet.UserSettings.DataValidationModeForExportToExcel;
		/** Thông tin về cách hiển thị ngày trong Microsoft Dynamics 365. */
		DateFormatCode: number;
		/** Chuỗi cho thấy cách hiển thị ngày trong toàn Microsoft Dynamics 365. */
		DateFormatString: string;
		/** Ký tự dùng để phân tách tháng, ngày và năm trong ngày tháng, trong Microsoft Dynamics 365. */
		DateSeparator: string;
		/** Ký hiệu dùng cho dấu thập phân trong Microsoft Dynamics 365. */
		DecimalSymbol: string;
		/** Dạng xem lịch mặc định cho người dùng. */
		DefaultCalendarView: number;
		/** Khu vực văn bản để nhập mã quốc gia mặc định. */
		DefaultCountryCode: string;
		/** Mã định danh duy nhất của bảng thông tin mặc định. */
		DefaultDashboardId: string;
		/** Trải nghiệm tìm kiếm mặc định cho người dùng. */
		DefaultSearchExperience: OptionSet.UserSettings.DefaultSearchExperience;
		/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.Password. */
		readonly EmailPassword: string;
		/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.UserName. */
		readonly EmailUsername: string;
		/** Cho biết có dùng chế độ biểu mẫu không. */
		EntityFormMode: OptionSet.UserSettings.EntityFormMode;
		/** Thứ tự sẽ hiển thị tên trong Microsoft Dynamics 365. */
		FullNameConventionCode: number;
		/** Thông tin chỉ định khả năng sẽ bật ngăn bắt đầu trong danh sách. */
		GetStartedPaneContentEnabled: boolean;
		/** Mã định danh duy nhất của ngôn ngữ Trợ giúp. */
		HelpLanguageId: number;
		/** Trang chủ của trang web cho người dùng. */
		HomepageArea: string;
		/** Cấu hình của bố cục trang chủ. */
		HomepageLayout: string;
		/** Trang của trang web cho người dùng. */
		HomepageSubarea: string;
		/** Thông tin xác định khả năng tài khoản người dùng định bỏ qua thư không mong muốn (không còn dùng). */
		IgnoreUnsolicitedEmail: boolean;
		/** Phương pháp lọc email đến. */
		IncomingEmailFilteringMethod: OptionSet.UserSettings.IncomingEmailFilteringMethod;
		/** Hiển thị hoặc bỏ qua cảnh báo cho Ứng dụng dành cho Dynamics 365. */
		IsAppsForCrmAlertDismissed: boolean;
		/** Cho biết khả năng sử dụng tính năng Tự động Ghi có được bật hay không. */
		IsAutoDataCaptureEnabled: boolean;
		/** Bật hoặc tắt chọn lựa mã quốc gia . */
		IsDefaultCountryCodeCheckEnabled: boolean;
		/** Cho biết khả năng bật phát hiện sự trùng lặp khi truy cập trực tuyến. */
		IsDuplicateDetectionEnabledWhenGoingOnline: boolean;
		/** Lựa chọn Bật hoặc tắt dạng xem cuộc hội thoại email trên tường dòng thời gian. */
		IsEmailConversationViewEnabled: boolean;
		/** Bật hoặc tắt trợ giúp có hướng dẫn. */
		IsGuidedHelpEnabled: boolean;
		/** Cho biết liệu việc đồng bộ hóa đăng ký nguồn lực người dùng với Exchange có được bật ở cấp độ người dùng hay không. */
		IsResourceBookingExchangeSyncEnabled: boolean;
		/** Cho biết khả năng có bật đặc quyền gửi với tư cách là người dùng khác hay không. */
		IsSendAsAllowed: boolean;
		/** Hiển thị lần cuối đọc dấu vết từ cơ sở dữ liệu. */
		LastAlertsViewedTime_UtcDateAndTime: Date;
		/** Lưu trữ dấu thời gian khi thuộc tính ViewPersonalizationSettings được cập nhật cho người dùng này trong bảng UserEntityUISettings. */
		LastModifiedTimeForViewPersonalizationSettings_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của bản địa người dùng. */
		LocaleId: number;
		/** Thông tin chỉ định cách hiển thị Ngày dạng dài trong toàn Microsoft Dynamics 365. */
		LongDateFormatCode: number;
		/** Mã định danh duy nhất của người dùng sửa đổi thiết đặt người dùng lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi đối tượng thiết đặt người dùng lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi usersettings lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Thông tin chỉ định cách hiển thị số tiền âm trong Microsoft Dynamics 365. */
		NegativeCurrencyFormatCode: number;
		/** Thông tin chỉ định cách hiển thị số âm trong Microsoft Dynamics 365. */
		NegativeFormatCode: number;
		/** Số theo dõi tiếp theo. */
		NextTrackingNumber: number;
		/** Thông tin chỉ định cách phân nhóm số trong Microsoft Dynamics 365. */
		NumberGroupFormat: string;
		/** Ký hiệu dùng cho dấu phân tách số trong Microsoft Dynamics 365. */
		NumberSeparator: string;
		/** Tần số bỏ phiếu thông thường, dùng đồng bộ ngoại tuyến dạng chạy ẩn trong Microsoft Office Outlook. */
		OfflineSyncInterval: number;
		/** Tần số bỏ phiếu thông thường đã dùng cho đồng bộ bản ghi trong Microsoft Office Outlook. */
		OutlookSyncInterval: number;
		/** Thông tin chỉ định liệt kê bao nhiêu mục trên trang trong dạng xem danh sách. */
		PagingLimit: number;
		/** Chỉ sử dụng nội bộ. */
		PersonalizationSettings: string;
		/** Bộ chỉ định PM để dùng trong Microsoft Dynamics 365. */
		PMDesignator: string;
		/** Preferred Solution when create a component without under a solution in this organization */
		PreferredSolution: string;
		/** Số chữ số sau dấu thập phân có thể dùng cho giá. */
		PricingDecimalPrecision: number;
		/** Thay thế kênh ứng dụng mô hình */
		ReleaseChannel: OptionSet.UserSettings.ReleaseChannel;
		/** Danh sách chọn để chọn tùy chọn người dùng khi báo cáo lỗi script. */
		ReportScriptErrors: OptionSet.UserSettings.ReportScriptErrors;
		/** Số phiên bản cho việc đồng bộ hóa đăng ký nguồn lực với Exchange. */
		ResourceBookingExchangeSyncVersion: number;
		/** Lưu trữ ID bộ lọc đã lưu trong bảng thông tin trung tâm dịch vụ khách hàng đã chọn. */
		SelectedGlobalFilterId: string;
		/** Thông tin chỉ định khả năng hiển thị số tuần trong lịch hiển thị trong Microsoft Dynamics 365. */
		ShowWeekNumber: boolean;
		/** Chỉ sử dụng nội bộ */
		SplitViewState: boolean;
		/** Cho biết có đặt trường công ty trong mục Microsoft Office Outlook trong quá trình đồng bộ Outlook không. */
		SyncContactCompany: boolean;
		/** Mã định danh duy nhất của người dùng. */
		SystemUserId: string;
		/** Số lần người dùng đã tương tác với bong bóng hướng dẫn của tính năng Tìm kiếm trong Dataverse theo phạm vi bảng. */
		TableScopedDVSearchFeatureTeachingBubbleViews: number;
		/** Số lần người dùng đã tương tác với bong bóng hướng dẫn Tìm nhanh của tính năng Tìm kiếm trong Dataverse theo phạm vi bảng. */
		TableScopedDVSearchQuickFindTeachingBubbleViews: number;
		/** Thông tin chỉ định cách hiển thị thời gian trong Microsoft Dynamics 365. */
		TimeFormatCode: number;
		/** Văn bản về cách hiển thị thời gian trong Microsoft Dynamics 365. */
		TimeFormatString: string;
		/** Văn bản về cách hiển thị thời gian trong Microsoft Dynamics 365. */
		TimeSeparator: string;
		/** Bạn hãy điều chỉnh múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneBias: number;
		/** Múi giờ địa phương cho người dùng. */
		TimeZoneCode: number;
		/** Bạn hãy điều chỉnh giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneDaylightBias: number;
		/** Ngày theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneDaylightDay: number;
		/** Ngày theo giờ mùa hè của múi giờ địa phương của tuần cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn trong Tùy chọn. */
		TimeZoneDaylightDayOfWeek: number;
		/** Giờ theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneDaylightHour: number;
		/** Phút theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneDaylightMinute: number;
		/** Tháng theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneDaylightMonth: number;
		/** Giây theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneDaylightSecond: number;
		/** Năm theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneDaylightYear: number;
		/** Thiên về giờ chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneStandardBias: number;
		/** Ngày chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneStandardDay: number;
		/** Ngày chuẩn của múi giờ địa phương của tuần cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneStandardDayOfWeek: number;
		/** Giờ chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneStandardHour: number;
		/** Phút chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneStandardMinute: number;
		/** Tháng chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneStandardMonth: number;
		/** Giây chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneStandardSecond: number;
		/** Năm chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
		TimeZoneStandardYear: number;
		/** ID mã thông báo theo dõi. */
		TrackingTokenId: number;
		/** Mã định danh duy nhất của loại tiền mặc định của người dùng. */
		TransactionCurrencyId: string;
		/** Danh sách các mô-đun ứng dụng có bộ bật/tắt thử */
		TryToggleSets: string;
		/** Bật hoặc tắt chức năng thử chuyển đổi trạng thái. */
		TryToggleStatus: boolean;
		/** Mã định danh duy nhất của ngôn ngữ để xem giao diện người dùng (UI). */
		UILanguageId: number;
		/** Cho biết có dùng biểu mẫu cuộc hẹn của Microsoft Dynamics 365 trong Microsoft Office Outlook để tạo cuộc hẹn mới không. */
		UseCrmFormForAppointment: boolean;
		/** Cho biết có dùng biểu mẫu liên hệ của Microsoft Dynamics 365 trong Microsoft Office Outlook để tạo liên hệ mới không. */
		UseCrmFormForContact: boolean;
		/** Cho biết có dùng biểu mẫu email của Microsoft Dynamics 365 trong Microsoft Office Outlook để tạo email mới không. */
		UseCrmFormForEmail: boolean;
		/** Cho biết có dùng biểu mẫu nhiệm vụ của Microsoft Dynamics 365 trong Microsoft Office Outlook để tạo nhiệm vụ mới không. */
		UseCrmFormForTask: boolean;
		/** Cho biết có dùng dải hình ảnh để kết xuất hình ảnh không. */
		UseImageStrips: boolean;
		/** Chỉ định id cấu hình người dùng trong danh sách đã phân cách bằng dấu phẩy. */
		UserProfile: string;
		readonly VersionNumber: number;
		/** Bố cục của ngăn hiển thị trực quan. */
		VisualizationPaneLayout: OptionSet.UserSettings.VisualizationPaneLayout;
		/** Giờ bắt đầu ngày làm việc cho người dùng. */
		WorkdayStartTime: string;
		/** Giờ kết thúc ngày làm việc cho người dùng. */
		WorkdayStopTime: string;
		readonly FormattedValue: {
			/** Tần số bỏ phiếu thông thường, dùng đồng bộ sổ địa chỉ trong Microsoft Office Outlook. */
			readonly AddressBookSyncInterval: string;
			/** Chế độ mặc định như đơn giản hoặc đã chi tiết cho tìm kiếm nâng cao. */
			readonly AdvancedFindStartupMode: string;
			/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.AllowEmailConnectorToUseCredentials. */
			readonly AllowEmailCredentials: string;
			/** Bộ chỉ định AM để dùng trong Microsoft Dynamics 365. */
			readonly AMDesignator: string;
			/** Đặt trạng thái người dùng cho Đề xuất ADC */
			readonly AutoCaptureUserStatus: string;
			/** Liên hệ tạo tự động trên tăng cấp khách hàng */
			readonly AutoCreateContactOnPromote: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh có người dùng được liên kết. */
			readonly BusinessUnitId: string;
			/** Loại lịch dành cho hệ thống. Đặt là dương lịch của Mỹ theo mặc định. */
			readonly CalendarType: string;
			/** Mã định danh duy nhất của người dùng đã tạo thiết đặt người dùng. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo đối tượng thiết đặt. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo usersettings. */
			readonly CreatedOnBehalfBy: string;
			/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền. */
			readonly CurrencyDecimalPrecision: string;
			/** Thông tin về cách đặt ký hiệu tiền tệ trong Microsoft Dynamics 365. */
			readonly CurrencyFormatCode: string;
			/** Ký hiệu dùng cho loại tiền trong Microsoft Dynamics 365. */
			readonly CurrencySymbol: string;
			/** Xác định xem trạng thái của lần thử tự động cài đặt của Dynamics 365 vào Teams đã hoàn tất hay chưa */
			readonly D365AutoInstallAttemptStatus: string;
			/** Thông tin chỉ định mức xác thực dữ liệu trong bảng tính Excel đã xuất trong một định dạng thích hợp cho việc nhập. */
			readonly DataValidationModeForExportToExcel: string;
			/** Thông tin về cách hiển thị ngày trong Microsoft Dynamics 365. */
			readonly DateFormatCode: string;
			/** Chuỗi cho thấy cách hiển thị ngày trong toàn Microsoft Dynamics 365. */
			readonly DateFormatString: string;
			/** Ký tự dùng để phân tách tháng, ngày và năm trong ngày tháng, trong Microsoft Dynamics 365. */
			readonly DateSeparator: string;
			/** Ký hiệu dùng cho dấu thập phân trong Microsoft Dynamics 365. */
			readonly DecimalSymbol: string;
			/** Dạng xem lịch mặc định cho người dùng. */
			readonly DefaultCalendarView: string;
			/** Khu vực văn bản để nhập mã quốc gia mặc định. */
			readonly DefaultCountryCode: string;
			/** Mã định danh duy nhất của bảng thông tin mặc định. */
			readonly DefaultDashboardId: string;
			/** Trải nghiệm tìm kiếm mặc định cho người dùng. */
			readonly DefaultSearchExperience: string;
			/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.Password. */
			readonly EmailPassword: string;
			/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.UserName. */
			readonly EmailUsername: string;
			/** Cho biết có dùng chế độ biểu mẫu không. */
			readonly EntityFormMode: string;
			/** Thứ tự sẽ hiển thị tên trong Microsoft Dynamics 365. */
			readonly FullNameConventionCode: string;
			/** Thông tin chỉ định khả năng sẽ bật ngăn bắt đầu trong danh sách. */
			readonly GetStartedPaneContentEnabled: string;
			/** Mã định danh duy nhất của ngôn ngữ Trợ giúp. */
			readonly HelpLanguageId: string;
			/** Trang chủ của trang web cho người dùng. */
			readonly HomepageArea: string;
			/** Cấu hình của bố cục trang chủ. */
			readonly HomepageLayout: string;
			/** Trang của trang web cho người dùng. */
			readonly HomepageSubarea: string;
			/** Thông tin xác định khả năng tài khoản người dùng định bỏ qua thư không mong muốn (không còn dùng). */
			readonly IgnoreUnsolicitedEmail: string;
			/** Phương pháp lọc email đến. */
			readonly IncomingEmailFilteringMethod: string;
			/** Hiển thị hoặc bỏ qua cảnh báo cho Ứng dụng dành cho Dynamics 365. */
			readonly IsAppsForCrmAlertDismissed: string;
			/** Cho biết khả năng sử dụng tính năng Tự động Ghi có được bật hay không. */
			readonly IsAutoDataCaptureEnabled: string;
			/** Bật hoặc tắt chọn lựa mã quốc gia . */
			readonly IsDefaultCountryCodeCheckEnabled: string;
			/** Cho biết khả năng bật phát hiện sự trùng lặp khi truy cập trực tuyến. */
			readonly IsDuplicateDetectionEnabledWhenGoingOnline: string;
			/** Lựa chọn Bật hoặc tắt dạng xem cuộc hội thoại email trên tường dòng thời gian. */
			readonly IsEmailConversationViewEnabled: string;
			/** Bật hoặc tắt trợ giúp có hướng dẫn. */
			readonly IsGuidedHelpEnabled: string;
			/** Cho biết liệu việc đồng bộ hóa đăng ký nguồn lực người dùng với Exchange có được bật ở cấp độ người dùng hay không. */
			readonly IsResourceBookingExchangeSyncEnabled: string;
			/** Cho biết khả năng có bật đặc quyền gửi với tư cách là người dùng khác hay không. */
			readonly IsSendAsAllowed: string;
			/** Hiển thị lần cuối đọc dấu vết từ cơ sở dữ liệu. */
			readonly LastAlertsViewedTime_UtcDateAndTime: string;
			/** Lưu trữ dấu thời gian khi thuộc tính ViewPersonalizationSettings được cập nhật cho người dùng này trong bảng UserEntityUISettings. */
			readonly LastModifiedTimeForViewPersonalizationSettings_UtcDateAndTime: string;
			/** Mã định danh duy nhất của bản địa người dùng. */
			readonly LocaleId: string;
			/** Thông tin chỉ định cách hiển thị Ngày dạng dài trong toàn Microsoft Dynamics 365. */
			readonly LongDateFormatCode: string;
			/** Mã định danh duy nhất của người dùng sửa đổi thiết đặt người dùng lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi đối tượng thiết đặt người dùng lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi usersettings lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Thông tin chỉ định cách hiển thị số tiền âm trong Microsoft Dynamics 365. */
			readonly NegativeCurrencyFormatCode: string;
			/** Thông tin chỉ định cách hiển thị số âm trong Microsoft Dynamics 365. */
			readonly NegativeFormatCode: string;
			/** Số theo dõi tiếp theo. */
			readonly NextTrackingNumber: string;
			/** Thông tin chỉ định cách phân nhóm số trong Microsoft Dynamics 365. */
			readonly NumberGroupFormat: string;
			/** Ký hiệu dùng cho dấu phân tách số trong Microsoft Dynamics 365. */
			readonly NumberSeparator: string;
			/** Tần số bỏ phiếu thông thường, dùng đồng bộ ngoại tuyến dạng chạy ẩn trong Microsoft Office Outlook. */
			readonly OfflineSyncInterval: string;
			/** Tần số bỏ phiếu thông thường đã dùng cho đồng bộ bản ghi trong Microsoft Office Outlook. */
			readonly OutlookSyncInterval: string;
			/** Thông tin chỉ định liệt kê bao nhiêu mục trên trang trong dạng xem danh sách. */
			readonly PagingLimit: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PersonalizationSettings: string;
			/** Bộ chỉ định PM để dùng trong Microsoft Dynamics 365. */
			readonly PMDesignator: string;
			/** Preferred Solution when create a component without under a solution in this organization */
			readonly PreferredSolution: string;
			/** Số chữ số sau dấu thập phân có thể dùng cho giá. */
			readonly PricingDecimalPrecision: string;
			/** Thay thế kênh ứng dụng mô hình */
			readonly ReleaseChannel: string;
			/** Danh sách chọn để chọn tùy chọn người dùng khi báo cáo lỗi script. */
			readonly ReportScriptErrors: string;
			/** Số phiên bản cho việc đồng bộ hóa đăng ký nguồn lực với Exchange. */
			readonly ResourceBookingExchangeSyncVersion: string;
			/** Lưu trữ ID bộ lọc đã lưu trong bảng thông tin trung tâm dịch vụ khách hàng đã chọn. */
			readonly SelectedGlobalFilterId: string;
			/** Thông tin chỉ định khả năng hiển thị số tuần trong lịch hiển thị trong Microsoft Dynamics 365. */
			readonly ShowWeekNumber: string;
			/** Chỉ sử dụng nội bộ */
			readonly SplitViewState: string;
			/** Cho biết có đặt trường công ty trong mục Microsoft Office Outlook trong quá trình đồng bộ Outlook không. */
			readonly SyncContactCompany: string;
			/** Mã định danh duy nhất của người dùng. */
			readonly SystemUserId: string;
			/** Số lần người dùng đã tương tác với bong bóng hướng dẫn của tính năng Tìm kiếm trong Dataverse theo phạm vi bảng. */
			readonly TableScopedDVSearchFeatureTeachingBubbleViews: string;
			/** Số lần người dùng đã tương tác với bong bóng hướng dẫn Tìm nhanh của tính năng Tìm kiếm trong Dataverse theo phạm vi bảng. */
			readonly TableScopedDVSearchQuickFindTeachingBubbleViews: string;
			/** Thông tin chỉ định cách hiển thị thời gian trong Microsoft Dynamics 365. */
			readonly TimeFormatCode: string;
			/** Văn bản về cách hiển thị thời gian trong Microsoft Dynamics 365. */
			readonly TimeFormatString: string;
			/** Văn bản về cách hiển thị thời gian trong Microsoft Dynamics 365. */
			readonly TimeSeparator: string;
			/** Bạn hãy điều chỉnh múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneBias: string;
			/** Múi giờ địa phương cho người dùng. */
			readonly TimeZoneCode: string;
			/** Bạn hãy điều chỉnh giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneDaylightBias: string;
			/** Ngày theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneDaylightDay: string;
			/** Ngày theo giờ mùa hè của múi giờ địa phương của tuần cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn trong Tùy chọn. */
			readonly TimeZoneDaylightDayOfWeek: string;
			/** Giờ theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneDaylightHour: string;
			/** Phút theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneDaylightMinute: string;
			/** Tháng theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneDaylightMonth: string;
			/** Giây theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneDaylightSecond: string;
			/** Năm theo giờ mùa hè của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneDaylightYear: string;
			/** Thiên về giờ chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneStandardBias: string;
			/** Ngày chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneStandardDay: string;
			/** Ngày chuẩn của múi giờ địa phương của tuần cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneStandardDayOfWeek: string;
			/** Giờ chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneStandardHour: string;
			/** Phút chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneStandardMinute: string;
			/** Tháng chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneStandardMonth: string;
			/** Giây chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneStandardSecond: string;
			/** Năm chuẩn của múi giờ địa phương cho người dùng. Hệ thống tính toán dựa trên múi giờ đã chọn. */
			readonly TimeZoneStandardYear: string;
			/** ID mã thông báo theo dõi. */
			readonly TrackingTokenId: string;
			/** Mã định danh duy nhất của loại tiền mặc định của người dùng. */
			readonly TransactionCurrencyId: string;
			/** Danh sách các mô-đun ứng dụng có bộ bật/tắt thử */
			readonly TryToggleSets: string;
			/** Bật hoặc tắt chức năng thử chuyển đổi trạng thái. */
			readonly TryToggleStatus: string;
			/** Mã định danh duy nhất của ngôn ngữ để xem giao diện người dùng (UI). */
			readonly UILanguageId: string;
			/** Cho biết có dùng biểu mẫu cuộc hẹn của Microsoft Dynamics 365 trong Microsoft Office Outlook để tạo cuộc hẹn mới không. */
			readonly UseCrmFormForAppointment: string;
			/** Cho biết có dùng biểu mẫu liên hệ của Microsoft Dynamics 365 trong Microsoft Office Outlook để tạo liên hệ mới không. */
			readonly UseCrmFormForContact: string;
			/** Cho biết có dùng biểu mẫu email của Microsoft Dynamics 365 trong Microsoft Office Outlook để tạo email mới không. */
			readonly UseCrmFormForEmail: string;
			/** Cho biết có dùng biểu mẫu nhiệm vụ của Microsoft Dynamics 365 trong Microsoft Office Outlook để tạo nhiệm vụ mới không. */
			readonly UseCrmFormForTask: string;
			/** Cho biết có dùng dải hình ảnh để kết xuất hình ảnh không. */
			readonly UseImageStrips: string;
			/** Chỉ định id cấu hình người dùng trong danh sách đã phân cách bằng dấu phẩy. */
			readonly UserProfile: string;
			readonly VersionNumber: string;
			/** Bố cục của ngăn hiển thị trực quan. */
			readonly VisualizationPaneLayout: string;
			/** Giờ bắt đầu ngày làm việc cho người dùng. */
			readonly WorkdayStartTime: string;
			/** Giờ kết thúc ngày làm việc cho người dùng. */
			readonly WorkdayStopTime: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserSettings {
		enum D365AutoInstallAttemptStatus {
			/** 0 */
			Chua_thuc_hien,
			/** 2 */
			Da_cai_dat,
			/** 7 */
			Da_tat_nguon_luc,
			/** 1 */
			Da_tu_dong_cai_dat,
			/** 5 */
			Khong_co_giai_phap,
			/** 6 */
			Khong_co_Graph_API,
			/** 4 */
			Khong_duoc_uy_quyen,
			/** 3 */
			Quan_tri_vien_Teams_da_chan
		}
		enum DataValidationModeForExportToExcel {
			/** 0 */
			Day_du,
			/** 1 */
			Khong
		}
		enum DefaultSearchExperience {
			/** 2 */
			Su_dung_tim_kiem_gan_nhat,
			/** 1 */
			Tim_kiem_duoc_phan_loai,
			/** 0 */
			Tim_kiem_lien_quan,
			/** 3 */
			Tim_kiem_tuy_chinh
		}
		enum EntityFormMode {
			/** 0 */
			Mac_dinh_to_chuc,
			/** 2 */
			Sua,
			/** 1 */
			Toi_uu_hoa_dang_chi_doc
		}
		enum IncomingEmailFilteringMethod {
			/** 1 */
			Email_khi_tra_loi_email_Dynamics_365,
			/** 3 */
			Email_tu_ban_ghi_Dynamics_365_co_bat_email,
			/** 2 */
			Email_tu_Khach_hang_tiem_nang_Nguoi_lien_he_va_Khach_hang_Dynamics_365,
			/** 4 */
			Khong_co_email,
			/** 0 */
			Tat_ca_thu_email
		}
		enum ReleaseChannel {
			/** 0 */
			Khong_co,
			/** 3 */
			Thay_the_kenh_ben_trong,
			/** 2 */
			Thay_the_kenh_hang_thang,
			/** 1 */
			Thay_the_kenh_nua_nam_mot_lan
		}
		enum ReportScriptErrors {
			/** 3 */
			Khong_bao_gio_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365,
			/** 2 */
			Tu_dong_gui_bao_cao_loi_den_Microsoft_ma_khong_xin_phep_toi,
			/** 1 */
			Xin_phep_toi_khi_gui_bao_cao_loi_den_Microsoft
		}
		enum VisualizationPaneLayout {
			/** 0 */
			Dau_cuoi,
			/** 1 */
			Lien_ke_nhau
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