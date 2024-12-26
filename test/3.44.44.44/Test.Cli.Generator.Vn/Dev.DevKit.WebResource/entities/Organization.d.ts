//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OrganizationApi {
		/**
		* DynamicsCrm.DevKit OrganizationApi
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
		/** URL Điểm cuối Web ACI. */
		ACIWebEndpointUrl: string;
		/** Mã định danh duy nhất của mẫu dùng cho xác nhận khi người dùng dừng đăng ký. */
		AcknowledgementTemplateId: string;
		/** Thông tin cho biết có lọc hoạt động dựa trên thực thể trong ứng dụng hay không. */
		ActivityTypeFilter: boolean;
		/** Liệu chỉ hiển thị những hoạt động được đặt cấu hình trong ứng dụng này hay tất cả các hoạt động trong nút "Hoạt động mới". */
		ActivityTypeFilterV2: boolean;
		/** Gắn cờ để cho biết liệu có bật các tùy chọn cột hiển thị trên một dạng xem trong ứng dụng dựa trên mô hình hay không */
		AdvancedColumnEditorEnabled: boolean;
		/** Gắn cờ để cho biết liệu có bật tính năng lọc cột nâng cao trong một dạng xem trong ứng dụng dựa trên mô hình hay không */
		AdvancedColumnFilteringEnabled: boolean;
		/** Gắn cờ để cho biết liệu có bật tính năng lọc nâng cao trên tất cả các bảng trong một ứng dụng dựa trên mô hình hay không */
		AdvancedFilteringEnabled: boolean;
		/** Gắn cờ để cho biết liệu tính năng Tra cứu nâng cao có được bật cho các kiểm soát tra cứu hay không */
		AdvancedLookupEnabled: boolean;
		/** Cho phép tra cứu nâng cao trong bảng điều khiển bộ lọc chỉnh sửa lưới */
		AdvancedLookupInEditFilter: number;
		/** Indicates whether AI Prompts feature is enabled. */
		AiPromptsEnabled: boolean;
		/** Cho biết có chấp nhận đồng bộ sổ địa chỉ dạng chạy ẩn trong Microsoft Office Outlook không. */
		AllowAddressBookSyncs: boolean;
		/** Information that specifies whether all application users are allowed to access the environment */
		AllowApplicationUserAccess: boolean;
		/** Cho biết khả năng chấp nhận tạo phản hồi tự động. */
		AllowAutoResponseCreation: boolean;
		/** Cho biết khả năng chấp nhận dừng đăng ký tự động. */
		AllowAutoUnsubscribe: boolean;
		/** Cho biết khả năng chấp nhận gửi email xác nhận dừng đăng ký tự động. */
		AllowAutoUnsubscribeAcknowledgement: boolean;
		/** Cho biết khả năng chấp nhận quảng cáo trên thanh thư của ứng dụng khách Outlook. */
		AllowClientMessageBarAd: boolean;
		/** Information on whether connectors on power fx actions is enabled. */
		AllowConnectorsOnPowerFXActions: boolean;
		/** Information that specifies the Applications that are in allow list for the accessing DV resources. */
		AllowedApplicationsForDVAccess: string;
		/** Information that specifies the range of IP addresses that are in allow list for the firewall. */
		AllowedIpRangeForFirewall: string;
		/** Information that specifies the range of IP addresses that are in allowed list for generating the SAS URIs. */
		AllowedIpRangeForStorageAccessSignatures: string;
		/** Allow upload or download of certain mime types. */
		AllowedMimeTypes: string;
		/** Information that specifies the List of Service Tags that should be allowed by the firewall. */
		AllowedServiceTagsForFirewall: string;
		/** Cho biết khả năng chấp nhận kiểm tra thay đổi đối với thực thể khi không đổi thuộc tính. */
		AllowEntityOnlyAudit: boolean;
		/** Cho phép kiểu tìm kiếm “kết thúc bằng” trong các lưới bằng việc sử dụng ký tự đại diện hàng đầu trên tất cả các bảng trong môi trường */
		AllowLeadingWildcardsInGridSearch: boolean;
		/** Cho phép kiểu tìm kiếm “kết thúc bằng” trong các lưới bằng việc sử dụng ký tự đại diện hàng đầu trên tất cả các bảng trong môi trường */
		AllowLeadingWildcardsInQuickFind: number;
		/** Bật quyền truy cập vào UI máy khách web cũ */
		AllowLegacyClientExperience: boolean;
		/** Cho phép nhúng một số hộp thoại cũ trong máy khách trình duyệt Giao diện Hợp nhất */
		AllowLegacyDialogsEmbedding: boolean;
		/** Cho biết khả năng chấp nhận thực thi email tiếp thị. */
		AllowMarketingEmailExecution: boolean;
		/** Information that specifies whether Microsoft Trusted Service Tags are allowed */
		AllowMicrosoftTrustedServiceTags: boolean;
		/** Cho biết có chấp nhận đồng bộ ngoại tuyến dạng chạy ẩn trong Microsoft Office Outlook không. */
		AllowOfflineScheduledSyncs: boolean;
		/** Cho biết có chấp nhận đồng bộ theo lịch với Outlook không. */
		AllowOutlookScheduledSyncs: boolean;
		/** Kiểm soát xem tổ chức có Cho phép chuyển hướng thiết đặt quản trị cũ sang giao diện người dùng hiện đại hay không */
		AllowRedirectAdminSettingsToModernUI: boolean;
		/** Cho biết khả năng chấp nhận người dùng gửi email đến bên không được giải quyết (các bên vẫn phải có địa chỉ email). */
		AllowUnresolvedPartiesOnEmailSend: boolean;
		/** Cho biết khả năng cá nhân có thể chọn tùy chọn chế độ biểu mẫu của họ trong tùy chọn cá nhân. */
		AllowUserFormModePreference: boolean;
		/** Gắn cờ để cho biết liệu có bật tính năng cho phép người dùng cuối ẩn dạng xem hệ thống trong các ứng dụng dựa trên mô hình hay không */
		AllowUsersHidingSystemViews: boolean;
		/** Cho biết khả năng chấp nhận hiện thanh thông báo ứng dụng máy tính bảng trong trình duyệt. */
		AllowUsersSeeAppdownloadMessage: boolean;
		/** Cho biết khả năng chấp nhận xuất lưới chạy trên web ra Microsoft Office Excel. */
		AllowWebExcelExport: boolean;
		/** Bộ chỉ định SA để dùng trong toàn Microsoft Dynamics CRM. */
		AMDesignator: string;
		/** Cho biết appDesignerExperience đã được bật cho tổ chức hay chưa. */
		AppDesignerExperienceEnabled: boolean;
		/** Application Based Access Control Mode. 0 is Disabled, 1 is audit mode , 2 is enforcement mode */
		ApplicationBasedAccessControlMode: OptionSet.Organization.ApplicationBasedAccessControlMode;
		/** Information on whether rich editing experience for Appointment is enabled. */
		AppointmentRichEditorExperience: boolean;
		/** Thông tin cho biết có bật trải nghiệm cuộc họp Teams cho Cuộc hẹn hay không. */
		AppointmentWithTeamsMeeting: boolean;
		/** Liệu trải nghiệm họp qua Teams cho cuộc hẹn có được bật không. */
		AppointmentWithTeamsMeetingV2: boolean;
		/** Thiết đặt Thời kỳ Duy trì Kiểm toán đã lưu trong Cơ sở dữ liệu Tổ chức. */
		AuditRetentionPeriod: number;
		/** Thiết đặt Thời kỳ duy trì nội dung kiểm tra đã lưu trong Cơ sở dữ liệu tổ chức. */
		AuditRetentionPeriodV2: number;
		/** Audit Settings of the organization */
		AuditSettings: string;
		/** Chọn có áp dụng tự động quyền được hưởng mặc định của khách hàng khi tạo trường hợp hay không. */
		AutoApplyDefaultonCaseCreate: boolean;
		/** Chọn có áp dụng tự động quyền được hưởng mặc định của khách hàng khi cập nhật trường hợp hay không. */
		AutoApplyDefaultonCaseUpdate: boolean;
		/** Cho biết có tự động áp dụng Thỏa thuận Cấp độ Dịch vụ trong bản cập nhật bản ghi trường hợp sau khi Thỏa thuận Cấp độ Dịch vụ được áp dụng theo cách thủ công. */
		AutoApplySLA: boolean;
		/** Chỉ sử dụng nội bộ. */
		AzureSchedulerJobCollectionName: string;
		/** Mã định danh duy nhất của loại tiền cơ sở của tổ chức. */
		BaseCurrencyId: string;
		/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền cơ sở. */
		readonly BaseCurrencyPrecision: number;
		/** Ký hiệu dùng cho loại tiền cơ sở. */
		readonly BaseCurrencySymbol: string;
		readonly BaseISOCurrencyCode: string;
		/** Khóa api dùng trong yêu cầu đến dịch vụ Bing Bản đồ. */
		BingMapsApiKey: string;
		/** Information that specifies the Applications that are in block list for the accessing DV resources. */
		BlockedApplicationsForDVAccess: string;
		/** Ngăn tải lên hay tải xuống loại đính kèm cụ thể, được coi là nguy hiểm. */
		BlockedAttachments: string;
		/** Prevent upload or download of certain mime types that are considered dangerous. */
		BlockedMimeTypes: string;
		/** Hiển thị thẻ theo trạng thái mở rộng đối với bảng thông tin tương tác */
		BoundDashboardDefaultCardExpanded: boolean;
		/** Tiền tố dùng trong thao tác đánh số hàng loạt. */
		BulkOperationPrefix: string;
		/** BusinessCardOptions */
		BusinessCardOptions: string;
		/** Mã định danh duy nhất của lịch đóng cửa của tổ chức. */
		BusinessClosureCalendarId: string;
		/** Loại lịch dành cho hệ thống. Đặt là dương lịch của Mỹ theo mặc định. */
		CalendarType: number;
		/** Tiền tố dùng khi đánh số chiến dịch. */
		CampaignPrefix: string;
		/** Cho biết liệu tổ chức có thể chọn không tham gia trải nghiệm Tìm kiếm liên quan mới (phát hành vào tháng 10/2020) hay không */
		CanOptOutNewSearchExperience: boolean;
		/** Dựng cờ phân tầng Cập nhật cho sự việc. */
		CascadeStatusUpdate: boolean;
		/** Tiền tố để dùng cho mọi trường hợp trong toàn Microsoft Dynamics 365. */
		CasePrefix: string;
		/** Nhập tiền tố để dùng cho mọi thể loại trong Microsoft Dynamics 365. */
		CategoryPrefix: string;
		/** Tính năng Máy khách để bật làm XML BLOB. */
		ClientFeatureSet: string;
		/** Cấu hình chính sách cho CSP */
		ContentSecurityPolicyConfiguration: string;
		/** Cấu hình chính sách bảo mật nội dung cho Các ứng dụng canvas. */
		ContentSecurityPolicyConfigurationForCanvas: string;
		/** Content Security Policy Options. */
		ContentSecurityPolicyOptions: number;
		/** Uri báo cáo chính sách bảo mật nội dung. */
		ContentSecurityPolicyReportUri: string;
		/** Tiền tố để dùng cho mọi hợp đồng trong toàn Microsoft Dynamics 365. */
		ContractPrefix: string;
		/** Tốc độ làm mới dữ liệu hiện diện đồng thời tính bằng giây. */
		CopresenceRefreshRate: number;
		/** Cho biết xem liệu có nên bật tính năng quy trình Dòng CortanaProactiveExperience cho tổ chức này hay không. */
		CortanaProactiveExperienceEnabled: boolean;
		/** Mã định danh duy nhất của người dùng đã tạo tổ chức. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo tổ chức. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo tổ chức. */
		readonly CreatedOnBehalfBy: string;
		/** Bật trạng thái Ban đầu của sản phẩm mới được tạo ở Hiện hoạt thay vì Bản nháp */
		CreateProductsWithoutParentInActiveState: boolean;
		/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền. */
		CurrencyDecimalPrecision: number;
		/** Cho biết khả năng hiển thị trường tiền với mã loại tiền hay ký hiệu loại tiền. */
		CurrencyDisplayOption: OptionSet.Organization.CurrencyDisplayOption;
		/** Thông tin về cách đặt ký hiệu loại tiền trong toàn Microsoft Dynamics CRM. */
		CurrencyFormatCode: OptionSet.Organization.CurrencyFormatCode;
		/** Ký hiệu dùng cho loại tiền trong toàn Microsoft Dynamics 365. */
		CurrencySymbol: string;
		/** Số thao tác hàng loạt hiện tại. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentBulkOperationNumber: number;
		/** Số chiến dịch hiện tại. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentCampaignNumber: number;
		/** Số hiệu trường hợp đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentCaseNumber: number;
		/** Nhập số đầu tiên để dùng cho Thể loại. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentCategoryNumber: number;
		/** Số hiệu hợp đồng đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentContractNumber: number;
		/** Thứ tự chuỗi nhập để dùng. */
		readonly CurrentImportSequenceNumber: number;
		/** Số hiệu hóa đơn đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentInvoiceNumber: number;
		/** Nhập số đầu tiên để dùng cho bài viết trong cơ sở kiến thức. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentKaNumber: number;
		/** Số hiệu bài viết đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentKbNumber: number;
		/** Số hiệu đơn hàng đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentOrderNumber: number;
		/** Số bảng đã phân tách đầu tiên để dùng. */
		readonly CurrentParsedTableNumber: number;
		/** Số hiệu báo giá đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
		CurrentQuoteNumber: number;
		/** Thông tin về cách hiển thị ngày trong toàn Microsoft CRM. */
		DateFormatCode: OptionSet.Organization.DateFormatCode;
		/** Chuỗi cho thấy cách hiển thị ngày trong toàn Microsoft CRM. */
		DateFormatString: string;
		/** Ký tự dùng để phân tách tháng, ngày và năm trong ngày tháng, trong toàn Microsoft Dynamics 365. */
		DateSeparator: string;
		/** Number of days before we migrate email description to blob. */
		DaysBeforeEmailDescriptionIsMigrated: number;
		/** Số ngày không hoạt động trước khi chức năng đồng bộ hóa bị tắt đối với Cuộc trò chuyện Teams. */
		DaysBeforeInactiveTeamsChatSyncDisabled: number;
		/** Giá trị tối đa cho Ngày thiết đặt Mobile Offline kể từ lần cuối sửa đổi bản ghi */
		readonly DaysSinceRecordLastModifiedMaxValue: number;
		/** Ký hiệu dùng cho dấu thập phân trong Microsoft Dynamics 365. */
		DecimalSymbol: string;
		/** Khu vực văn bản để nhập mã quốc gia mặc định. */
		DefaultCountryCode: string;
		/** Tên của crm custom mặc định. */
		DefaultCrmCustomName: string;
		/** Mã định danh duy nhất cho cấu hình máy chủ email mặc định. */
		DefaultEmailServerProfileId: string;
		/** Chuỗi XML chứa thiết đặt email mặc định, áp dụng khi tạo người dùng hay hàng đợi. */
		DefaultEmailSettings: string;
		/** Mã định danh duy nhất của cấu hình Mobile Offline mặc định. */
		DefaultMobileOfflineProfileId: string;
		/** Loại của ngày phạm vi kết thúc lặp lại mặc định. */
		DefaultRecurrenceEndRangeType: OptionSet.Organization.DefaultRecurrenceEndRangeType;
		/** Dữ liệu chủ đề mặc định dành cho tổ chức. */
		DefaultThemeData: string;
		/** Mã định danh duy nhất của người dùng quản trị viên đại diện cho tổ chức. */
		DelegatedAdminUserId: string;
		/** Thời gian tồn tại mặc định tính bằng phút đối với bản ghi nhật ký hàng đợi dòng màn hình nền mới. */
		DesktopFlowQueueLogsTtlInMinutes: number;
		/** Kích hoạt/Hủy kích hoạt nhật ký hành động chạy Dòng màn hình nền Power Automate. */
		DesktopFlowRunActionLogsStatus: OptionSet.Organization.DesktopFlowRunActionLogsStatus;
		/** Nơi lưu trữ nhật ký hành động chạy dòng màn hình nền Power Automate. */
		DesktopFlowRunActionLogVersion: OptionSet.Organization.DesktopFlowRunActionLogVersion;
		/** Lý do tắt tổ chức. */
		readonly DisabledReason: string;
		/** Cho biết có tắt Chăm sóc mạng xã hội hay không. */
		DisableSocialCare: boolean;
		/** Tắt tính năng chia sẻ nhãn hệ thống cho tổ chức. */
		DisableSystemLabelsCacheSharing: boolean;
		/** Phương pháp tính giảm giá cho sản phẩm QOOI. */
		DiscountCalculationMethod: OptionSet.Organization.DiscountCalculationMethod;
		/** Cho biết hiển thị hay không hiển thị hướng dẫn điều hướng. */
		DisplayNavigationTour: boolean;
		/** Chọn nếu bạn muốn dùng Bộ định tuyến email hay đồng bộ hóa phía máy chủ khi xử lý email. */
		EmailConnectionChannel: OptionSet.Organization.EmailConnectionChannel;
		/** Gắn cờ để bật hoặc tắt tương quan email. */
		EmailCorrelationEnabled: boolean;
		/** Tần số bỏ phiếu thông thường, dùng khi gửi email trong Microsoft Office Outlook. */
		EmailSendPollingPeriod: number;
		/** Xác định xem các bản ghi được hợp nhất thông qua hộp thoại hợp nhất trong UCI có được hợp nhất theo cách không đồng thời hay không */
		EnableAsyncMergeAPIForUCI: boolean;
		/** Bật tích hợp với Bing Bản đồ */
		EnableBingMapsIntegration: boolean;
		/** Lưu ý: Bằng cách bật tính năng này, bạn cũng sẽ tự động tạo các biến môi trường khi thêm nguồn dữ liệu cho ứng dụng của mình. */
		EnableCanvasAppsInSolutionsByDefault: boolean;
		/** Cho biết liệu việc tạo dòng quy trình có nằm trong một giải pháp theo mặc định cho tổ chức này hay không. */
		EnableFlowsInSolutionByDefault: boolean;
		/** Những tổ chức có thuộc tính này được đặt thành True sẽ được gia hạn và chưa được sử dụng chức năng 'tạo các dòng trong giải pháp theo mặc định' khi chức năng này bắt đầu được bật trên toàn thế giới. Sau khi hết thời gian gia hạn, chức năng này sẽ được bật trong tổ chức của bạn. */
		EnableFlowsInSolutionByDefaultGracePeriod: boolean;
		/** Bật Tích hợp với Skype Chân thực */
		EnableImmersiveSkypeIntegration: boolean;
		/** Information that specifies whether IP based cookie binding is enabled */
		EnableIpBasedCookieBinding: boolean;
		/** Information that specifies whether IP based firewall rule is enabled */
		EnableIpBasedFirewallRule: boolean;
		/** Information that specifies whether IP based firewall rule is enabled in Audit Only Mode */
		EnableIpBasedFirewallRuleInAuditMode: boolean;
		/** Information that specifies whether IP based SAS URI generation rule is enabled */
		EnableIpBasedStorageAccessSignatureRule: boolean;
		/** Cho biết người dùng đã bật hay tắt tính năng Thẻ Persona Trực tiếp trong UCI. */
		EnableLivePersonaCardUCI: boolean;
		/** Cho biết người dùng đã bật hay tắt LivePersonCardIntegration trong Office. */
		EnableLivePersonCardIntegrationInOffice: boolean;
		/** Chọn bật tác giả hướng dẫn học tập. */
		EnableLPAuthoring: boolean;
		/** Kiểm soát xem tổ chức có Chuyển đổi Maker Portal sang phiên bản cũ hay không */
		EnableMakerSwitchToClassic: boolean;
		/** Bật Tích hợp với Microsoft Flow */
		EnableMicrosoftFlowIntegration: boolean;
		/** Bật tính định giá khi gọi ra lệnh Tạo. */
		EnablePricingOnCreate: boolean;
		/** Dùng kết nối tương quan thông minh. */
		EnableSmartMatching: boolean;
		/** Để trống để sử dụng thiết đặt mặc định. Đặt thành bật/tắt để bật/tắt CDN cho UCI. */
		EnableUnifiedClientCDN: boolean;
		/** Bật sơ đồ trang web và cập nhật lệnh */
		EnableUnifiedInterfaceShellRefresh: boolean;
		/** Thiết đặt tổ chức để thực thi phần bổ trợ chỉ đọc. */
		EnforceReadOnlyPlugins: boolean;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Số ngày tối đa để theo dõi thay đổi đối với bản ghi đã xóa */
		ExpireChangeTrackingInDays: number;
		/** Số ngày tối đa trước khi xóa đăng ký không hoạt động. */
		ExpireSubscriptionsInDays: number;
		/** Chỉ định URL gốc dùng để tìm kiếm gợi ý tài liệu bên ngoài. */
		ExternalBaseUrl: string;
		/** Chuỗi XML chứa khóa tương quan của thực thể đã kích hoạt bên ngoài để liên kết các thực thể phiên bản Bên ngoài hiện có với các thực thể đã Kích hoạt Bên ngoài mới tạo. Chỉ sử dụng nội bộ. */
		ExternalPartyCorrelationKeys: string;
		/** Chuỗi XML chứa thiết đặt thực thể đã kích hoạt bên ngoài. */
		ExternalPartyEntitySettings: string;
		/** Tính năng để bật làm XML BLOB. */
		FeatureSet: string;
		/** Ngày bắt đầu cho kỳ tài chính dùng trong toàn bộ Microsoft CRM. */
		FiscalCalendarStart_UtcDateOnly: Date;
		/** Thông tin chỉ định cách hiển thị tên của kỳ tài chính trong toàn Microsoft CRM. */
		FiscalPeriodFormat: string;
		/** Định dạng sẽ hiển thị kỳ tài chính. */
		FiscalPeriodFormatPeriod: OptionSet.Organization.FiscalPeriodFormatPeriod;
		/** Loại kỳ tài chính được dùng trong toàn Microsoft CRM. */
		FiscalPeriodType: number;
		/** Thông tin chỉ định trạng thái cập nhật thiết đặt tài chính. */
		readonly FiscalSettingsUpdated: boolean;
		/** Thông tin chỉ định việc hiển thị năm tài chính dựa trên ngày bắt đầu hay ngày kết thúc của năm tài chính. */
		FiscalYearDisplayCode: number;
		/** Thông tin chỉ định cách hiển thị tên của năm tài chính trong toàn Microsoft CRM. */
		FiscalYearFormat: string;
		/** Tiền tố khi hiển thị năm tài chính. */
		FiscalYearFormatPrefix: OptionSet.Organization.FiscalYearFormatPrefix;
		/** Hậu tố khi hiển thị năm tài chính. */
		FiscalYearFormatSuffix: OptionSet.Organization.FiscalYearFormatSuffix;
		/** Định dạng cho năm. */
		FiscalYearFormatYear: OptionSet.Organization.FiscalYearFormatYear;
		/** Thông tin chỉ định cách kết nối tên của năm tài chính và kỳ tài chính khi hiển thị cùng nhau. */
		FiscalYearPeriodConnect: string;
		/** Thời gian tồn tại mặc định tính bằng phút đối với các bản ghi mới trong thực thể nhật ký dòng. */
		FlowLogsTtlInMinutes: number;
		/** Thời gian hoạt động (tính bằng giây) cho phiên chạy dòng */
		FlowRunTimeToLiveInSeconds: number;
		/** Thứ tự hiển thị tên trong toàn Microsoft CRM. */
		FullNameConventionCode: OptionSet.Organization.FullNameConventionCode;
		/** Chỉ định số lượng tháng tối đa trong tương lai để có thể tạo hoạt động lặp lại. */
		FutureExpansionWindow: number;
		/** Cho biết khả năng tạo cảnh báo dành cho lỗi. */
		GenerateAlertsForErrors: boolean;
		/** Cho biết khả năng tạo cảnh báo dành cho thông tin. */
		GenerateAlertsForInformation: boolean;
		/** Cho biết khả năng tạo thông báo dành cho cảnh báo. */
		GenerateAlertsForWarnings: boolean;
		/** Cho biết khả năng bật nội dung Bắt đầu dành cho tổ chức này. */
		GetStartedPaneContentEnabled: boolean;
		/** Cho biết có bật tham số URL nối vào không. */
		GlobalAppendUrlParametersEnabled: boolean;
		/** URL cho trợ giúp chung về trang web. */
		GlobalHelpUrl: string;
		/** Cho biết có bật trợ giúp chung có thể tùy chỉnh không. */
		GlobalHelpUrlEnabled: boolean;
		/** Số lượng ngày sau ngày kết thúc mục đích, sau khi tổng số của mục đích dừng tự động. */
		GoalRollupExpiryTime: number;
		/** Số lượng giờ giữa các công việc tổng số tự động. */
		GoalRollupFrequency: number;
		/** Chỉ sử dụng nội bộ. */
		GrantAccessToNetworkService: boolean;
		/** Chênh lệch tối đa có thể có giữa tổng số đếm từ khóa chủ đề của email với nội dung gửi cần tương quan */
		HashDeltaSubjectCount: number;
		/** Lọc từ khóa chủ đề */
		HashFilterKeywords: string;
		/** Số lượng từ khóa chủ đề hay người nhận tối đa dùng để tương quan */
		HashMaxCount: number;
		/** Số lượng người nhận tối đa cần thiết để khớp cho email với nội dung gửi cần tương quan */
		HashMinAddressCount: number;
		/** Dữ liệu chủ đề có độ thương phản cao dành cho tổ chức. */
		HighContrastThemeData: string;
		/** Cho biết khả năng theo dõi email đến do người dùng hay hàng đợi Microsoft Dynamics 365 nội bộ gửi đi. */
		IgnoreInternalEmail: boolean;
		/** Cho biết tổ chức đã đồng ý chia sẻ dữ liệu truy vấn tìm kiếm để giúp cải thiện kết quả tìm kiếm hay chưa */
		ImproveSearchLoggingEnabled: boolean;
		/** Thông tin chỉ định có bật thời gian chờ Không hoạt động hay không */
		InactivityTimeoutEnabled: boolean;
		/** Thời gian chờ không hoạt động tính theo phút */
		InactivityTimeoutInMins: number;
		/** Lời nhắc thời gian chờ không hoạt động tính theo phút */
		InactivityTimeoutReminderInMins: number;
		/** Thiết đặt cho Hàng đợi hộp thư dịch vụ không đồng bộ. Xác định kích thước khối truy xuất của máy chủ exchange. */
		IncomingEmailExchangeEmailRetrievalBatchSize: number;
		/** Phiên bản ban đầu của tổ chức. */
		InitialVersion: string;
		/** Mã định danh duy nhất của người dùng tích hợp cho tổ chức. */
		IntegrationUserId: string;
		/** Tiền tố để dùng cho mọi mã số hóa đơn trong toàn Microsoft Dynamics 365. */
		InvoicePrefix: string;
		/** IP Based SAS mode. */
		IpBasedStorageAccessSignatureMode: OptionSet.Organization.IpBasedStorageAccessSignatureMode;
		/** Cho biết khả năng bật tính năng Thẻ Hành động cho tổ chức. */
		IsActionCardEnabled: boolean;
		/** Thông tin chỉ định khả năng bật Tính năng Hỗ trợ Hành động */
		IsActionSupportFeatureEnabled: boolean;
		/** Cho biết xem liệu có nên bật tính năng Phân tích Mối quan hệ cho tổ chức này hay không. */
		IsActivityAnalysisEnabled: boolean;
		/** Cho biết liệu tất cả các thuộc tính tiền có được chuyển đổi thành số thập phân không. */
		readonly IsAllMoneyDecimal: boolean;
		/** Cho biết khả năng bật tải Microsoft Dynamics 365 trong cửa sổ trình duyệt không có địa chỉ, công cụ và thanh menu. */
		IsAppMode: boolean;
		/** Bật hoặc tắt đồng bộ tệp đính kèm cho Outlook và Exchange. */
		IsAppointmentAttachmentSyncEnabled: boolean;
		/** Bật hoặc tắt đồng bộ nhiệm vụ đã gán cho Outlook và Exchange. */
		IsAssignedTasksSyncEnabled: boolean;
		/** Bật hoặc tắt kiểm tra thay đổi. */
		IsAuditEnabled: boolean;
		/** Cho biết khả năng bật tính năng Tự động Ghi cho tổ chức này. */
		IsAutoDataCaptureEnabled: boolean;
		/** Cho biết khả năng bật tính năng V2 của Tự động Ghi cho tổ chức này. */
		IsAutoDataCaptureV2Enabled: boolean;
		IsAutoInstallAppForD365InTeamsEnabled: boolean;
		/** Thông tin về khả năng bật tự động lưu. */
		IsAutoSaveEnabled: boolean;
		IsBaseCardStaticFieldDataEnabled: boolean;
		/** Xác định xem người dùng có thể sử dụng các tính năng Không gian địa lý cơ bản trong Ứng dụng canvas hay không. */
		IsBasicGeospatialIntegrationEnabled: boolean;
		/** Thông tin chỉ định khả năng bật Tính năng Tùy chỉnh Thực thể BDF */
		IsBPFEntityCustomizationFeatureEnabled: boolean;
		IsCollaborationExperienceEnabled: boolean;
		/** Thông tin chỉ định khả năng sẽ bật phát hiện xung đột cho máy khách di động. */
		IsConflictDetectionEnabledForMobileClient: boolean;
		/** Bật hoặc tắt đồng bộ địa chỉ gửi thư cho Outlook và Exchange. */
		IsContactMailingAddressSyncEnabled: boolean;
		/** Cho biết Chính sách Bảo mật Nội dung đã được bật cho tổ chức hay chưa. */
		IsContentSecurityPolicyEnabled: boolean;
		/** Cho biết Chính sách bảo mật nội dung đã được bật cho Các ứng dụng canvas của tổ chức này hay chưa. */
		IsContentSecurityPolicyEnabledForCanvas: boolean;
		/** Cho biết Trải nghiệm email theo ngữ cảnh có được bật trên tổ chức này không */
		IsContextualEmailEnabled: boolean;
		/** Chọn để bật Trợ giúp theo Ngữ cảnh trong UCI. */
		IsContextualHelpEnabled: boolean;
		/** Determines whether users can provide feedback Copilot experiences. */
		IsCopilotFeedbackEnabled: boolean;
		/** Cho biết tính năng Kiểm soát Tùy chỉnh trong bảng tùy biến PowerApps đã được bật cho tổ chức hay chưa. */
		IsCustomControlsInCanvasAppsEnabled: boolean;
		/** Bật hoặc tắt chọn lựa mã quốc gia. */
		IsDefaultCountryCodeCheckEnabled: boolean;
		/** Bật nội dung Truy cập Ủy quyền */
		IsDelegateAccessEnabled: boolean;
		/** Cho biết khả năng có thể bật tính năng Hub Hành động cho tổ chức. */
		IsDelveActionHubIntegrationEnabled: boolean;
		/** Indicates whether connection embedding in Desktop Flows is enabled in this organization. */
		IsDesktopFlowConnectionEmbeddingEnabled: boolean;
		/** Indicates whether the Desktop Flows UI Automation Runtime Repair for Attended feature for this organization. */
		IsDesktopFlowRuntimeRepairAttendedEnabled: boolean;
		/** Indicates whether the Desktop Flows UI Automation Runtime Repair for Unattended feature for this organization. */
		IsDesktopFlowRuntimeRepairUnattendedEnabled: boolean;
		/** Cho biết có bật lược đồ v2 cho Dòng màn hình nền trong tổ chức này hay không. */
		IsDesktopFlowSchemaV2Enabled: boolean;
		/** Thông tin chỉ định khả năng tắt tổ chức. */
		readonly IsDisabled: boolean;
		/** Cho biết khả năng bật phát hiện sự trùng lặp bản ghi. */
		IsDuplicateDetectionEnabled: boolean;
		/** Cho biết khả năng bật phát hiện sự trùng lặp bản ghi trong khi nhập. */
		IsDuplicateDetectionEnabledForImport: boolean;
		/** Cho biết khả năng bật phát hiện sự trùng lặp bản ghi trong khi đồng bộ ngoại tuyến. */
		IsDuplicateDetectionEnabledForOfflineSync: boolean;
		/** Cho biết khả năng bật phát hiện sự trùng lặp trong khi tạo hay cập nhật trực tuyến. */
		IsDuplicateDetectionEnabledForOnlineCreateUpdate: boolean;
		/** Information on whether Smart Email Address Validation is enabled. */
		IsEmailAddressValidationEnabled: boolean;
		/** Cho phép theo dõi hoạt động của người nhận trên các email đã gửi. */
		IsEmailMonitoringAllowed: boolean;
		/** Bật lọc nội dung Cấu hình Máy chủ Email */
		IsEmailServerProfileContentFilteringEnabled: boolean;
		/** Cho biết appmodule đã được bật cho tất cả các vai trò hay chưa */
		IsEnabledForAllRoles: boolean;
		/** Cho biết các tệp của tổ chức có đang được lưu trữ trong Azure hay không. */
		IsExternalFileStorageEnabled: boolean;
		/** Chọn khả năng đồng bộ hóa dữ liệu với chỉ mục tìm kiếm bên ngoài. */
		IsExternalSearchIndexEnabled: boolean;
		/** Cho biết khả năng hiển thị kỳ tài chính ở dạng số tháng. */
		IsFiscalPeriodMonthBased: boolean;
		/** Chọn khả năng tạo thư mục tự động trên SharePoint. */
		IsFolderAutoCreatedonSP: boolean;
		/** Bật hoặc tắt tính năng theo dõi dựa trên thư mục để Đồng bộ Phía Máy chủ. */
		IsFolderBasedTrackingEnabled: boolean;
		/** Cho biết có thể bật thực thể tìm kiếm văn bản đầy đủ cho Tìm Nhanh cho tổ chức hay không. */
		IsFullTextSearchEnabled: boolean;
		/** Cho biết liệu các khả năng không gian địa lý tận dụng Azure Maps có được bật hay không. */
		IsGeospatialAzureMapsIntegrationEnabled: boolean;
		/** Bật mô hình bảo mật theo cấp bậc */
		IsHierarchicalSecurityModelEnabled: boolean;
		/** Indicates whether data collection for ideas in canvas PowerApps has been enabled. */
		IsIdeasDataCollectionEnabled: boolean;
		/** Cấp chấp thuận sử dụng LUIS trong Bot Dynamics 365 */
		IsLUISEnabledforD365Bot: boolean;
		/** Bật hoặc tắt tính năng buộc mở khóa để Đồng bộ hóa Phía Máy chủ. */
		IsMailboxForcedUnlockingEnabled: boolean;
		/** Bật hoặc tắt hộp thư luôn hoạt động đối với Đồng bộ phía máy chủ. */
		IsMailboxInactiveBackoffEnabled: boolean;
		/** Cho biết tính năng Dự báo Bán hàng Thủ công đã được bật cho tổ chức hay chưa. */
		IsManualSalesForecastingEnabled: boolean;
		/** Thông tin chỉ định khả năng sẽ bật đồng bộ máy khách di động theo yêu cầu. */
		IsMobileClientOnDemandSyncEnabled: boolean;
		/** Cho biết khả năng bật tính năng Ngoại tuyến trên Thiết bị di động cho tổ chức này. */
		IsMobileOfflineEnabled: boolean;
		/** Cho biết liệu có thể nhúng Ứng dụng mô hình trong Microsoft Teams hay không. Đây là một tính năng thử nghiệm/bản xem trước do quản trị viên đối tượng thuê kiểm soát. */
		IsModelDrivenAppsInMSTeamsEnabled: boolean;
		/** Cho biết tính năng Cộng tác Microsoft Teams đã được bật cho tổ chức hay chưa. */
		IsMSTeamsCollaborationEnabled: boolean;
		/** Cho biết tích hợp Microsoft Teams đã được bật cho tổ chức hay chưa. */
		IsMSTeamsEnabled: boolean;
		/** Cho biết người dùng đã bật hay tắt tích hợp Microsoft Teams. */
		IsMSTeamsSettingChangedByUser: boolean;
		/** Cho biết tính năng Đồng bộ Người dùng Microsoft Teams đã được bật cho tổ chức hay chưa. */
		IsMSTeamsUserSyncEnabled: boolean;
		/** Cho biết liệu trải nghiệm thêm sản phẩm mới có được bật không. */
		IsNewAddProductExperienceEnabled: boolean;
		/** Cho biết khả năng bật tính năng Phân tích Ghi chú cho tổ chức này. */
		IsNotesAnalysisEnabled: boolean;
		IsNotificationForD365InTeamsEnabled: boolean;
		/** Cho biết có thể bật tính năng Office Graph cho tổ chức hay không. */
		IsOfficeGraphEnabled: boolean;
		/** Cho biết có thể bật tính năng One Drive cho tổ chức hay không. */
		IsOneDriveEnabled: boolean;
		/** Cho biết tính năng PAI đã được bật cho tổ chức hay chưa. */
		IsPAIEnabled: boolean;
		/** Cho biết tính năng Tạo PDF đã được bật cho tổ chức hay chưa. */
		IsPDFGenerationEnabled: string;
		/** Cho biết có bật tính năng Số dư theo quy trình trong tổ chức này hay không. */
		IsPerProcessCapacityOverageEnabled: boolean;
		/** Cho biết tính năng cẩm nang đã được bật cho tổ chức hay chưa. */
		IsPlaybookEnabled: boolean;
		/** Thông tin về khả năng bật hiển thị IM. */
		IsPresenceEnabled: boolean;
		/** Cho biết tính năng ở giai đoạn Bản xem trước cho Thẻ hành động có được phép bật cho tổ chức hay không. */
		IsPreviewEnabledForActionCard: boolean;
		/** Cho biết khả năng bật tính năng Thu nạp Tự động cho tổ chức này ở Thiết đặt Xem trước. */
		IsPreviewForAutoCaptureEnabled: boolean;
		/** Cho phép Xem trước đối với Theo dõi Email. */
		IsPreviewForEmailMonitoringAllowed: boolean;
		/** Cho biết liệu Bảng giá có bắt buộc đối với việc thêm sản phẩm hiện tại vào các thực thể bán hàng hay không. */
		IsPriceListMandatory: boolean;
		/** Chọn sử dụng trải nghiệm Đóng Cơ hội Dùng được ngay tiêu chuẩn hay tham gia trải nghiệm tùy chỉnh. */
		IsQuickCreateEnabledForOpportunityClose: boolean;
		/** Bật hoặc tắt tính năng kiểm tra hoạt động đọc. */
		IsReadAuditEnabled: boolean;
		/** Cho biết xem liệu có nên bật tính năng Relationship Insights cho tổ chức này hay không. */
		IsRelationshipInsightsEnabled: boolean;
		/** Cho biết liệu việc đồng bộ hóa đăng ký nguồn lực người dùng với Exchange có được bật ở cấp độ tổ chức hay không. */
		IsResourceBookingExchangeSyncEnabled: boolean;
		/** Cho biết liệu trình chỉnh sửa văn bản phong phú cho trải nghiệm ghi chú có được bật trên tổ chức này không */
		IsRichTextNotesEnabled: boolean;
		/** Cho biết có bật Liên kết AAD cho tính năng Tự động co giãn RPA cho tổ chức này hay không. */
		IsRpaAutoscaleAadJoinEnabled: boolean;
		/** Cho biết có bật tính năng Tự động điều chỉnh quy mô cho RPA trong tổ chức này hay không. */
		IsRpaAutoscaleEnabled: boolean;
		/** Cho biết liệu tính năng Hộp RPA có được bật trong tổ chức này ở các vị trí bên ngoài vị trí địa lý của đối tượng thuê hay không. */
		IsRpaBoxCrossGeoEnabled: boolean;
		/** Cho biết có bật tính năng RPA Box trong tổ chức này hay không. */
		IsRpaBoxEnabled: boolean;
		/** Cho biết có bật tính năng Lần chạy không được giám sát cho RPA trong tổ chức này hay không. */
		IsRpaUnattendedEnabled: boolean;
		/** Cho biết ứng dụng di động Sales Assistant đã được bật cho tổ chức hay chưa. */
		IsSalesAssistantEnabled: boolean;
		IsSharingInOrgAllowed: boolean;
		/** Bật tích hợp xử lý đơn bán hàng. */
		IsSOPIntegrationEnabled: boolean;
		/** Thông tin về khả năng bật ngắt dòng. */
		IsTextWrapEnabled: boolean;
		/** Bật hoặc tắt kiểm tra truy cập của người dùng. */
		IsUserAccessAuditEnabled: boolean;
		/** Cho biết khả năng bật tải Microsoft Dynamics 365 trong cửa sổ trình duyệt không có địa chỉ, công cụ và thanh menu. */
		ISVIntegrationCode: OptionSet.Organization.ISVIntegrationCode;
		/** Cho biết liệu có thể thêm Sản phẩm chọn thêm vào Cơ hội/Báo giá/Đơn hàng/Hóa đơn hay không. */
		IsWriteInProductsAllowed: boolean;
		/** Nhập tiền tố để dùng cho mọi bài viết trong cơ sở kiến thức trong Microsoft Dynamics 365. */
		KaPrefix: string;
		/** Tiền tố để dùng cho mọi bài viết trong Microsoft Dynamics 365. */
		KbPrefix: string;
		/** Chuỗi XML chứa các thiết đặt Quản lý Kiến thức được áp dụng trong Trình hướng dẫn Quản lý Kiến thức. */
		KMSettings: string;
		/** Ngôn ngữ ưu tiên cho tổ chức. */
		LanguageCode: number;
		/** Hiển thị ứng dụng cũ cho quản trị viên */
		LegacyAppToggle: OptionSet.Organization.LegacyAppToggle;
		/** Mã định danh duy nhất của vùng bản địa của tổ chức. */
		LocaleId: number;
		/** Thông tin chỉ định cách hiển thị định dạng Ngày dạng dài trong Microsoft Dynamics 365. */
		LongDateFormatCode: number;
		/** Số ký tự tối thiểu cần nhập vào chức năng kiểm soát tra cứu trước khi giải quyết các đề xuất */
		LookupCharacterCountBeforeResolve: number;
		/** Độ trễ tối thiểu (tính bằng mili giây) giữa hai lần nhập liên tiếp trong chức năng kiểm soát tra cứu mà sẽ kích hoạt tìm kiếm đề xuất */
		LookupResolveDelayMS: number;
		/** Ngưỡng Dưới cho Sự cố Gián đoạn Hộp thư. */
		MailboxIntermittentIssueMinRange: number;
		/** Ngưỡng Dưới cho Sự cố Vĩnh viễn của Hộp thư. */
		MailboxPermanentIssueMinRange: number;
		/** Số actionsteps tối đa được cho phép trong BPF */
		MaxActionStepsInBPF: number;
		/** Maximum Allowed Pending Rollup Job Count */
		MaxAllowedPendingRollupJobCount: number;
		/** Percentage Of Entity Table Size For Kicking Off Bootstrap Job */
		MaxAllowedPendingRollupJobPercentage: number;
		/** Số lượng ngày tối đa mà cuộc hẹn có thể có. */
		MaxAppointmentDurationDays: number;
		/** Số lượng điều kiện tối đa được phép cho các bộ lọc Mobile Offline */
		MaxConditionsForMobileOfflineFilters: number;
		/** Chiều sâu tối đa khi tự động điền bảo mật cho hệ thống cấp bậc. */
		MaxDepthForHierarchicalSecurityModel: number;
		/** Số ánh xạ Theo dõi Trên Thư mục tối đa mà người dùng có thể thêm */
		MaxFolderBasedTrackingMappings: number;
		/** Số lượng dòng quy trình công việc hiện hoạt tối đa có thể có cho mỗi thực thể */
		MaximumActiveBusinessProcessFlowsAllowedPerEntity: number;
		/** Hạn chế số lượng thuộc tính sản phẩm tối đa cho họ/gói sản phẩm */
		MaximumDynamicPropertiesAllowed: number;
		/** Số lượng Thỏa thuận Cấp độ Dịch vụ hiện hoạt tối đa được phép trên mỗi thực thể khi ở chế độ trực tuyến */
		MaximumEntitiesWithActiveSLA: number;
		/** Số lượng SLA KPI tối đa cho mỗi SLA hiện hoạt được phép trên mỗi thực thể khi ở chế độ trực tuyến */
		MaximumSLAKPIPerEntityWithActiveSLA: number;
		/** Số theo dõi tối đa trước khi thực hiện tái chế. */
		MaximumTrackingNumber: number;
		/** Hạn chế số lượng mục tối đa trong gói */
		MaxProductsInBundle: number;
		/** Số lượng bản ghi tối đa sẽ xuất ra bảng tính Microsoft Office Excel tĩnh khi xuất từ lưới. */
		MaxRecordsForExportToExcel: number;
		/** Số lượng bản ghi tra cứu và danh sách chọn tối đa mà người dùng có thể chọn khi lọc. */
		MaxRecordsForLookupFilters: number;
		/** Maximum Rollup Fields Per Entity */
		MaxRollupFieldsPerEntity: number;
		/** Maximum Rollup Fields Per Organization */
		MaxRollupFieldsPerOrg: number;
		MaxSLAItemsPerSLA: number;
		/** Phiên bản IE cao nhất để chạy mô phỏng trình duyệt cho ứng dụng khách Outlook */
		readonly MaxSupportedInternetExplorerVersion: number;
		/** Kích thước tệp đính kèm tối đa có thể chấp nhận. */
		MaxUploadFileSize: number;
		/** Số lượng hộp thư tối đa có thể chuyển đổi cho ghi nhật ký diễn giải */
		readonly MaxVerboseLoggingMailbox: number;
		/** Số chu kỳ đồng bộ tối đa để kích hoạt ghi nhật ký diễn giải theo mặc định */
		readonly MaxVerboseLoggingSyncCycles: number;
		/** Ngày/giờ cuối cùng là lúc nào, khi có siêu dữ liệu theo dõi đối tượng đã xóa nhưng đối tượng đó chưa bao giờ nằm ngoài khoảng thời gian hết hạn. */
		readonly MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: Date;
		/** Chứa số lượng phiên bản tối đa của thuộc tính mà đồng bộ siêu dữ liệu đã đổi sử dụng. */
		readonly MetadataSyncTimestamp: number;
		/** (Không còn dùng) Môi trường đã chọn cho Tích hợp với Microsoft Flow */
		MicrosoftFlowEnvironment: string;
		/** Tần số bỏ phiếu thông thường, dùng đồng bộ sổ địa chỉ trong Microsoft Office Outlook. */
		MinAddressBookSyncInterval: number;
		/** Tần số bỏ phiếu thông thường, dùng đồng bộ ngoại tuyến dạng chạy ẩn trong Microsoft Office Outlook. */
		MinOfflineSyncInterval: number;
		/** Thời gian tối thiểu có thể chấp nhận giữa các lần đồng bộ Outlook theo lịch. */
		MinOutlookSyncInterval: number;
		/** Yêu cầu số lượng giấy phép người dùng tối thiểu cho dịch vụ Mobile Offline theo tổ chức sản xuất/xem trước */
		readonly MobileOfflineMinLicenseProd: number;
		/** Yêu cầu số lượng giấy phép người dùng tối thiểu cho dịch vụ Mobile Offline theo tổ chức dùng thử */
		readonly MobileOfflineMinLicenseTrial: number;
		/** Đồng bộ khoảng thời gian cho mobile offline. */
		MobileOfflineSyncInterval: number;
		/** Gắn cờ để cho biết liệu có bật tính năng lọc tìm kiếm nâng cao tiên tiến trên tất cả các bảng trong một ứng dụng dựa trên mô hình hay không */
		ModernAdvancedFindFiltering: boolean;
		/** Indicates whether coauthoring is enabled in modern app designer */
		ModernAppDesignerCoauthoringEnabled: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi tổ chức lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi tổ chức lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi tổ chức lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiện nút sắp xếp theo trên dạng xem */
		MultiColumnSortEnabled: number;
		/** Tên của tổ chức. Bạn đặt tên khi cài đặt Microsoft CRM và không đổi được tên này. */
		Name: string;
		/** Bật bộ lọc hỗ trợ ngôn ngữ tự nhiên. */
		NaturalLanguageAssistFilter: boolean;
		/** Thông tin chỉ định cách hiển thị số tiền âm trong toàn Microsoft Dynamics 365. */
		NegativeCurrencyFormatCode: number;
		/** Thông tin chỉ định cách hiển thị số âm trong toàn Microsoft CRM. */
		NegativeFormatCode: OptionSet.Organization.NegativeFormatCode;
		/** Cho biết liệu một tổ chức đã bật trải nghiệm Tìm kiếm liên quan mới (phát hành vào tháng 10/2020) cho tổ chức đó hay chưa */
		NewSearchExperienceEnabled: boolean;
		/** Mã loại thực thể tiếp theo để dùng cho thực thể tùy chỉnh. */
		readonly NextCustomObjectTypeCode: number;
		/** Mã thông báo tiếp theo đặt trên dòng chủ đề của email. */
		NextTrackingNumber: number;
		/** Cho biết khả năng sẽ thông báo chủ hộp thư về cảnh báo cấp độ cấu hình máy chủ email. */
		NotifyMailboxOwnerOfEmailServerLevelAlerts: boolean;
		/** Chỉ định cách hiển thị số trong toàn Microsoft CRM. */
		NumberFormat: string;
		/** Chỉ định cách phân nhóm số trong Microsoft Dynamics 365. */
		NumberGroupFormat: string;
		/** Ký hiệu dùng cho dấu phân tách số trong Microsoft Dynamics 365. */
		NumberSeparator: string;
		/** Cho biết tùy chọn tự động triển khai Ứng dụng Office đã được bật cho tổ chức hay chưa. */
		OfficeAppsAutoDeploymentEnabled: boolean;
		/** Url để mở Delve cho tổ chức. */
		OfficeGraphDelveUrl: string;
		/** Chấp nhận lôgic tính giá OOB cho thực thể Cơ hội, Báo giá, Đơn hàng và Hóa đơn. */
		OOBPriceCalculationEnabled: boolean;
		/** Cho biết tổ chức này có chọn không tự động bật sơ đồ v2 trên tổ chức hay không. */
		OptOutSchemaV2EnabledByDefault: boolean;
		/** Tiền tố để dùng cho mọi đơn hàng trong toàn Microsoft Dynamics 365. */
		OrderPrefix: string;
		/** Mã định danh duy nhất của tổ chức. */
		readonly OrganizationId: string;
		/** Cho biết trạng thái vòng đời của tổ chức */
		readonly OrganizationState: OptionSet.Organization.OrganizationState;
		/** Thiết đặt tổ chức đã lưu trong Cơ sở dữ liệu tổ chức. */
		OrgDbOrgSettings: string;
		/** Chọn khả năng bật OrgInsights cho tổ chức. */
		OrgInsightsEnabled: boolean;
		/** Cho biết đã bật tính năng ở giai đoạn Bản xem trước cho tổ chức hay chưa. */
		PaiPreviewScenarioEnabled: boolean;
		/** Tiền tố dùng cho cột đã phân tách trong bảng. */
		readonly ParsedTableColumnPrefix: string;
		/** Tiền tố dùng cho bảng đã phân tách. */
		readonly ParsedTablePrefix: string;
		/** Chỉ định số lượng tháng tối đa trong quá khứ để có thể tạo hoạt động lặp lại. */
		PastExpansionWindow: number;
		/** Để trống để sử dụng thiết đặt mặc định. Đặt thành bật/tắt để cho phép/vô hiệu hóa thay thế lưới mặc định bằng lưới hiện đại trong ứng dụng dựa trên mô hình. */
		PcfDatasetGridEnabled: string;
		/** Thiết đặt này chứa ngày giờ trước khi có thể thực thi thao tác đồng bộ hóa ACT. */
		PerformACTSyncAfter_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		Picture: string;
		PinpointLanguageCode: number;
		/** Thiết đặt ghi nhật ký truy vết phần bổ trợ cho Tổ chức. */
		PluginTraceLogSetting: OptionSet.Organization.PluginTraceLogSetting;
		/** Bộ chỉ định CH để dùng trong toàn Microsoft Dynamics 365. */
		PMDesignator: string;
		/** Chỉ sử dụng nội bộ. */
		PostMessageWhitelistDomains: string;
		/** Indicates whether bot for makers is enabled. */
		PowerAppsMakerBotEnabled: boolean;
		/** Cho biết tổ chức có được phép thực hiện các hoạt động liên khu vực hay không */
		PowerBIAllowCrossRegionOperations: boolean;
		/** Cho biết tính năng tự động gán quyền cho Power BI đã được bật cho tổ chức hay chưa */
		PowerBIAutomaticPermissionsAssignment: boolean;
		/** Cho biết tính năng tạo thành phần Power BI đã được bật cho tổ chức hay chưa */
		PowerBIComponentsCreate: boolean;
		/** Cho biết có thể bật tính năng Power BI cho tổ chức hay không. */
		PowerBiFeatureEnabled: boolean;
		/** Số chữ số sau dấu thập phân có thể dùng cho giá. */
		PricingDecimalPrecision: number;
		/** URL Tuyên bố về Quyền riêng tư */
		PrivacyStatementUrl: string;
		/** Mã định danh duy nhất của quyền mặc định cho người dùng trong tổ chức. */
		PrivilegeUserGroupId: string;
		/** Chỉ sử dụng nội bộ. */
		PrivReportingGroupId: string;
		/** Chỉ sử dụng nội bộ. */
		PrivReportingGroupName: string;
		/** Chọn khả năng bật đề xuất sản phẩm cho tổ chức. */
		ProductRecommendationsEnabled: boolean;
		/** Cho biết liệu có hiển thị thông báo nhắc cho Trải nghiệm Định tính Khách hàng tiềm năng mới hay không */
		QualifyLeadAdditionalOptions: string;
		/** Gắn cờ để cho biết liệu có bật tính năng sử dụng thao tác nhanh để mở bản ghi trong ngăn bên tìm kiếm hay không */
		QuickActionToOpenRecordsInSidePaneEnabled: boolean;
		/** Cho biết khả năng bật giới hạn bản ghi tìm nhanh cho tổ chức này (để thực hiện nhanh hơn truy vấn tìm nhanh, nhưng ngăn tìm kiếm quá rộng). */
		QuickFindRecordLimitEnabled: boolean;
		/** Tiền tố để dùng cho mọi báo giá trong toàn Microsoft Dynamics 365. */
		QuotePrefix: string;
		/** Indicates whether SLA Recalculation has been enabled for the organization */
		RecalculateSLA: boolean;
		/** Chỉ định giá trị mặc định cho trường số lần xảy ra trong hộp thoại lần lặp lại. */
		RecurrenceDefaultNumberOfOccurrences: number;
		/** Chỉ định khoảng (tính bằng giây) cho tạm dừng công việc mở rộng. */
		RecurrenceExpansionJobBatchInterval: number;
		/** Chỉ định giá trị cho số lượng phiên bản đã tạo trong công việc theo yêu cầu, tại một thời điểm. */
		RecurrenceExpansionJobBatchSize: number;
		/** Chỉ định số lượng phiên bản tối đa tạo đồng thời sau khi tạo cuộc hẹn lặp lại. */
		RecurrenceExpansionSynchCreateMax: number;
		/** Chuỗi XML xác định cấu trúc điều hướng cho ứng dụng. Đây là sơ đồ trang web từ bản nâng cấp trước đây và dùng trong quy trình hợp nhất 3 chiều khi nâng cấp. */
		ReferenceSiteMapXml: string;
		/** Giá trị nhịp độ phát hành của tổ chức hiện tại */
		ReleaseCadence: number;
		/** Kênh làm mới ứng dụng mô hình */
		ReleaseChannel: OptionSet.Organization.ReleaseChannel;
		/** Đợt phát hành được áp dụng cho môi trường. */
		ReleaseWaveName: string;
		/** Cho biết liệu tìm kiếm theo mức độ liên quan có được bật cho các môi trường như một phần của tìm kiếm theo mức độ liên quan của Dataverse ở hoạt động quét theo mặc định hay không */
		RelevanceSearchEnabledByPlatform: boolean;
		/** Thiết đặt này chứa ngày sửa đổi lần gần nhất cho thiết đặt tìm kiếm theo mức độ liên quan xuất hiện dưới dạng nút chuyển đổi trong PPAC. */
		RelevanceSearchModifiedOn_UtcDateAndTime: Date;
		/** Dựng cờ để kết xuất nội dung email trong biểu mẫu web trong IFRAME, đặt thuộc tính security='restricted'. Đây là tính năng bảo mật thêm, nhưng có thể khiến hệ thống nhắc nhập thông tin đăng nhập. */
		RenderSecureIFrameForEmail: boolean;
		/** Chỉ sử dụng nội bộ. */
		ReportingGroupId: string;
		/** Chỉ sử dụng nội bộ. */
		ReportingGroupName: string;
		/** Danh sách chọn để chọn tùy chọn tổ chức khi báo cáo lỗi script. */
		ReportScriptErrors: OptionSet.Organization.ReportScriptErrors;
		/** Cho biết khả năng bật quyền Gửi với tư cách là người dùng khác. */
		RequireApprovalForQueueEmail: boolean;
		/** Cho biết khả năng bật quyền Gửi với tư cách là người dùng khác. */
		RequireApprovalForUserEmail: boolean;
		/** Khi tự giải quyết giá trị khớp cho một địa chỉ, áp dụng cùng địa chỉ email cho tất cả các giá trị khớp chưa được giải quyết */
		ResolveSimilarUnresolvedEmailAddress: boolean;
		/** Information that specifies whether guest user restriction is enabled */
		RestrictGuestUserAccess: boolean;
		/** Dựng cờ hạn chế Cập nhật cho sự việc. */
		RestrictStatusUpdate: boolean;
		/** Information that specifies Reverse Proxy IP addresses from which requests have to be allowed. */
		ReverseProxyIpAddresses: string;
		/** Trạng thái lỗi trong khi cung cấp Relationship Insights. */
		RiErrorStatus: number;
		/** Samesite mode for Session Cookie 0 is Default, 1 is None, 2 is Lax , 3 is Strict */
		SameSiteModeForSessionCookie: OptionSet.Organization.SameSiteModeForSessionCookie;
		/** Mã định danh duy nhất cho công việc nhập dữ liệu mẫu. */
		SampleDataImportId: string;
		/** Tiền tố dùng cho thực thể và thuộc tính tùy chỉnh. */
		SchemaNamePrefix: string;
		/** Cho biết liệu Gửi Email Hàng loạt trong UCI có được bật cho tổ chức không. */
		SendBulkEmailInUCI: boolean;
		/** Cung cấp Nội dung Tĩnh từ CDN */
		ServeStaticResourcesFromAzureCDN: boolean;
		/** Bật tính năng ghi phiên để ghi lại phiên của người dùng trong UCI */
		SessionRecordingEnabled: boolean;
		/** Thông tin chỉ định có bật thời gian chờ của phiên hay không */
		SessionTimeoutEnabled: boolean;
		/** Thời gian chờ của phiên tính theo phút */
		SessionTimeoutInMins: number;
		/** Lời nhắc thời gian chờ của phiên tính theo phút */
		SessionTimeoutReminderInMins: number;
		/** Cho biết loại triển khai SharePoint được đặt cấu hình cho Máy chủ tới Máy chủ. (Trực tuyến hoặc Tại chỗ) */
		SharePointDeploymentType: OptionSet.Organization.SharePointDeploymentType;
		/** Thông tin chỉ định khả năng chia sẻ với chủ sở hữu trước khi gán. */
		ShareToPreviousOwnerOnAssign: boolean;
		/** Chọn khả năng hiển thị cho người dùng về thông báo không dùng bài viết trong KB. */
		ShowKBArticleDeprecationNotification: boolean;
		/** Thông tin chỉ định khả năng hiển thị số tuần trong lịch hiển thị trong toàn Microsoft CRM. */
		ShowWeekNumber: boolean;
		/** URL tải xuống CRM dành cho Outlook */
		SignupOutlookDownloadFWLink: string;
		/** Chuỗi XML xác định cấu trúc điều hướng cho ứng dụng. */
		SiteMapXml: string;
		/** Chứa giá trị trạng thái của trường hợp tạm giữ. */
		SlaPauseStates: string;
		/** Cờ hiệu cho việc tổ chức có đang dùng Hiểu biết xã hội hay không. */
		SocialInsightsEnabled: boolean;
		/** Mã định danh cho phiên bản Hiểu biết xã hội của tổ chức. */
		SocialInsightsInstance: string;
		/** Dựng cờ về khả năng tổ chức chấp nhận điều khoản sử dụng cho Hiểu biết xã hội. */
		SocialInsightsTermsAccepted: boolean;
		/** Chỉ sử dụng nội bộ. */
		SortId: number;
		/** Chỉ sử dụng nội bộ. */
		SqlAccessGroupId: string;
		/** Chỉ sử dụng nội bộ. */
		SqlAccessGroupName: string;
		/** Có bật thiết đặt cho thu thập dữ liệu SQM, 0 là không, 1 là có */
		SQMEnabled: boolean;
		/** Mã định danh duy nhất của người dùng hỗ trợ cho tổ chức. */
		SupportUserId: string;
		/** Cho biết khả năng chặn dùng SLA. */
		SuppressSLA: boolean;
		/** Để trống để sử dụng tùy chọn thiết đặt mặc định. Đặt thành bật/tắt để bật/tắt email của Quản trị viên khi không xác thực được Trình kiểm tra giải pháp. */
		SuppressValidationEmails: boolean;
		/** Số bản ghi cần cập nhật trên mỗi thao tác trong Tạm dừng/Tiếp tục/Hủy Đồng bộ Hàng loạt */
		SyncBulkOperationBatchSize: number;
		/** Tổng số bản ghi tối đa cần cập nhật trong cơ sở dữ liệu cho Tạm dừng/Tiếp tục/Hủy Đồng bộ Hàng loạt */
		SyncBulkOperationMaxLimit: number;
		/** Cho biết việc chọn dùng khuôn khổ Dynamics 365 azure sync hay đồng bộ hóa phía máy chủ. */
		SyncOptInSelection: boolean;
		/** Cho biết trạng thái của hoạt động tham gia hay không tham gia đối với Dynamics 365 azure sync. */
		SyncOptInSelectionStatus: OptionSet.Organization.SyncOptInSelectionStatus;
		/** Mã định danh duy nhất của người dùng hệ thống cho tổ chức. */
		SystemUserId: string;
		/** Kiểm soát sự xuất hiện của tùy chọn để tìm kiếm trên một bảng được lập chỉ mục tìm kiếm trong DV đơn nhất trong tìm kiếm toàn cầu của ứng dụng dựa trên mô hình trong tiêu đề. */
		TableScopedDVSearchInApps: boolean;
		/** Số lượng vòng bỏ phiếu linh hoạt tối đa được thực hiện cho ghi thẻ tự động email khi nhận email mới. */
		TagMaxAggressiveCycles: number;
		/** Tần số bỏ phiếu thông thường, dùng khi ghi thẻ tự động lúc nhận email trong outlook. */
		TagPollingPeriod: number;
		/** Chọn khả năng bật dòng tác vụ cho tổ chức. */
		TaskBasedFlowEnabled: boolean;
		/** Thông tin cho biết chức năng Đồng bộ hóa dữ liệu cuộc trò chuyện Teams có được bật hay không. */
		TeamsChatDataSync: boolean;
		/** Instrumentation key for Application Insights used to log plugins telemetry. */
		TelemetryInstrumentationKey: string;
		/** Chọn khả năng bật phân tích văn bản cho tổ chức. */
		TextAnalyticsEnabled: boolean;
		/** Thông tin chỉ định cách hiển thị thời gian trong toàn Microsoft CRM. */
		TimeFormatCode: OptionSet.Organization.TimeFormatCode;
		/** Văn bản về cách hiển thị thời gian trong Microsoft Dynamics 365. */
		TimeFormatString: string;
		/** Văn bản về cách hiển thị dấu phân tách thời gian trong toàn Microsoft Dynamics 365. */
		TimeSeparator: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Khoảng thời gian dùng cho hết hạn mã thông báo. */
		TokenExpiry: number;
		/** Khóa của mã thông báo. */
		TokenKey: string;
		/** Tuổi tối đa của bản ghi tracelog tính theo ngày */
		TraceLogMaximumAgeInDays: number;
		/** Danh sách lịch sử theo dõi tiền tố của mã thông báo. */
		TrackingPrefix: string;
		/** Số cơ sở dùng để cấp mã định danh mã thông báo theo dõi riêng cho người dùng thuộc về bản phát triển khác. */
		TrackingTokenIdBase: number;
		/** Số lượng chữ số dùng để thể hiện mã định dạng mã thông báo theo dõi. */
		TrackingTokenIdDigits: number;
		/** Số lượng ký tự nối vào mã số hóa đơn, báo giá và đơn hàng. */
		UniqueSpecifierLength: number;
		/** Cho biết liệu có phải hủy phân giải địa chỉ email nếu tìm thấy nhiều giá trị khớp hay không */
		UnresolveEmailAddressIfMultipleMatch: boolean;
		/** Cờ hiệu cho biết khả năng Dùng quy tắc ghép vào cho DefaultPricelist. */
		UseInbuiltRuleForDefaultPricelistSelection: boolean;
		/** Chọn có sử dụng kết xuất mẫu cũ hay không. */
		UseLegacyRendering: boolean;
		/** Dùng hệ thống cấp bậc vị trí */
		UsePositionHierarchy: boolean;
		/** Cho biết liệu việc tìm kiếm trong lưới có nên sử dụng dạng xem Tìm nhanh cho thực thể hay không. */
		UseQuickFindViewForGridSearch: boolean;
		/** Khoảng thời gian kiểm tra truy cập người dùng. */
		UserAccessAuditingInterval: number;
		/** Cho biết khả năng bật biểu mẫu tối hóa dạng chỉ đọc cho tổ chức này. */
		UseReadForm: boolean;
		/** Mã định danh duy nhất của nhóm mặc định cho người dùng trong tổ chức. */
		UserGroupId: string;
		/** Bật tính năng đánh giá của người dùng để hiển thị điểm NSAT và nhận xét cho người tạo */
		UserRatingEnabled: boolean;
		/** Cho biết giao thức mặc định đã chọn cho tổ chức. */
		UseSkypeProtocol: boolean;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Hàm băm của tệp cấu hình gọi lệnh V3. */
		readonly V3CalloutConfigHash: string;
		/** Chế độ xác thực cho các ứng dụng trong môi trường này */
		ValidationMode: OptionSet.Organization.ValidationMode;
		/** Số phiên bản của tổ chức. */
		readonly VersionNumber: number;
		/** Giá trị hàm băm của tài nguyên web. */
		WebResourceHash: string;
		/** Ngày đầu tiên của tuần chỉ định trong toàn Microsoft Dynamics 365. */
		WeekStartDayCode: OptionSet.Organization.WeekStartDayCode;
		/** Chỉ sử dụng nội bộ. */
		WidgetProperties: string;
		/** Biểu thị ID nhóm Yammer */
		YammerGroupId: number;
		/** Biểu thị liên kết cố định của mạng Yammer */
		YammerNetworkPermalink: string;
		/** Biểu thị khả năng hết hạn của mã thông báo truy cập OAuth cho mạng Yammer */
		YammerOAuthAccessTokenExpired: boolean;
		/** Chỉ Sử dụng Nội bộ */
		YammerPostMethod: OptionSet.Organization.YammerPostMethod;
		/** Thông tin chỉ định cách chỉ định tuần đầu tiên của năm trong Microsoft Dynamics 365. */
		YearStartWeekCode: number;
		readonly FormattedValue: {
			/** URL Điểm cuối Web ACI. */
			readonly ACIWebEndpointUrl: string;
			/** Mã định danh duy nhất của mẫu dùng cho xác nhận khi người dùng dừng đăng ký. */
			readonly AcknowledgementTemplateId: string;
			/** Thông tin cho biết có lọc hoạt động dựa trên thực thể trong ứng dụng hay không. */
			readonly ActivityTypeFilter: string;
			/** Liệu chỉ hiển thị những hoạt động được đặt cấu hình trong ứng dụng này hay tất cả các hoạt động trong nút "Hoạt động mới". */
			readonly ActivityTypeFilterV2: string;
			/** Gắn cờ để cho biết liệu có bật các tùy chọn cột hiển thị trên một dạng xem trong ứng dụng dựa trên mô hình hay không */
			readonly AdvancedColumnEditorEnabled: string;
			/** Gắn cờ để cho biết liệu có bật tính năng lọc cột nâng cao trong một dạng xem trong ứng dụng dựa trên mô hình hay không */
			readonly AdvancedColumnFilteringEnabled: string;
			/** Gắn cờ để cho biết liệu có bật tính năng lọc nâng cao trên tất cả các bảng trong một ứng dụng dựa trên mô hình hay không */
			readonly AdvancedFilteringEnabled: string;
			/** Gắn cờ để cho biết liệu tính năng Tra cứu nâng cao có được bật cho các kiểm soát tra cứu hay không */
			readonly AdvancedLookupEnabled: string;
			/** Cho phép tra cứu nâng cao trong bảng điều khiển bộ lọc chỉnh sửa lưới */
			readonly AdvancedLookupInEditFilter: string;
			/** Indicates whether AI Prompts feature is enabled. */
			readonly AiPromptsEnabled: string;
			/** Cho biết có chấp nhận đồng bộ sổ địa chỉ dạng chạy ẩn trong Microsoft Office Outlook không. */
			readonly AllowAddressBookSyncs: string;
			/** Information that specifies whether all application users are allowed to access the environment */
			readonly AllowApplicationUserAccess: string;
			/** Cho biết khả năng chấp nhận tạo phản hồi tự động. */
			readonly AllowAutoResponseCreation: string;
			/** Cho biết khả năng chấp nhận dừng đăng ký tự động. */
			readonly AllowAutoUnsubscribe: string;
			/** Cho biết khả năng chấp nhận gửi email xác nhận dừng đăng ký tự động. */
			readonly AllowAutoUnsubscribeAcknowledgement: string;
			/** Cho biết khả năng chấp nhận quảng cáo trên thanh thư của ứng dụng khách Outlook. */
			readonly AllowClientMessageBarAd: string;
			/** Information on whether connectors on power fx actions is enabled. */
			readonly AllowConnectorsOnPowerFXActions: string;
			/** Information that specifies the Applications that are in allow list for the accessing DV resources. */
			readonly AllowedApplicationsForDVAccess: string;
			/** Information that specifies the range of IP addresses that are in allow list for the firewall. */
			readonly AllowedIpRangeForFirewall: string;
			/** Information that specifies the range of IP addresses that are in allowed list for generating the SAS URIs. */
			readonly AllowedIpRangeForStorageAccessSignatures: string;
			/** Allow upload or download of certain mime types. */
			readonly AllowedMimeTypes: string;
			/** Information that specifies the List of Service Tags that should be allowed by the firewall. */
			readonly AllowedServiceTagsForFirewall: string;
			/** Cho biết khả năng chấp nhận kiểm tra thay đổi đối với thực thể khi không đổi thuộc tính. */
			readonly AllowEntityOnlyAudit: string;
			/** Cho phép kiểu tìm kiếm “kết thúc bằng” trong các lưới bằng việc sử dụng ký tự đại diện hàng đầu trên tất cả các bảng trong môi trường */
			readonly AllowLeadingWildcardsInGridSearch: string;
			/** Cho phép kiểu tìm kiếm “kết thúc bằng” trong các lưới bằng việc sử dụng ký tự đại diện hàng đầu trên tất cả các bảng trong môi trường */
			readonly AllowLeadingWildcardsInQuickFind: string;
			/** Bật quyền truy cập vào UI máy khách web cũ */
			readonly AllowLegacyClientExperience: string;
			/** Cho phép nhúng một số hộp thoại cũ trong máy khách trình duyệt Giao diện Hợp nhất */
			readonly AllowLegacyDialogsEmbedding: string;
			/** Cho biết khả năng chấp nhận thực thi email tiếp thị. */
			readonly AllowMarketingEmailExecution: string;
			/** Information that specifies whether Microsoft Trusted Service Tags are allowed */
			readonly AllowMicrosoftTrustedServiceTags: string;
			/** Cho biết có chấp nhận đồng bộ ngoại tuyến dạng chạy ẩn trong Microsoft Office Outlook không. */
			readonly AllowOfflineScheduledSyncs: string;
			/** Cho biết có chấp nhận đồng bộ theo lịch với Outlook không. */
			readonly AllowOutlookScheduledSyncs: string;
			/** Kiểm soát xem tổ chức có Cho phép chuyển hướng thiết đặt quản trị cũ sang giao diện người dùng hiện đại hay không */
			readonly AllowRedirectAdminSettingsToModernUI: string;
			/** Cho biết khả năng chấp nhận người dùng gửi email đến bên không được giải quyết (các bên vẫn phải có địa chỉ email). */
			readonly AllowUnresolvedPartiesOnEmailSend: string;
			/** Cho biết khả năng cá nhân có thể chọn tùy chọn chế độ biểu mẫu của họ trong tùy chọn cá nhân. */
			readonly AllowUserFormModePreference: string;
			/** Gắn cờ để cho biết liệu có bật tính năng cho phép người dùng cuối ẩn dạng xem hệ thống trong các ứng dụng dựa trên mô hình hay không */
			readonly AllowUsersHidingSystemViews: string;
			/** Cho biết khả năng chấp nhận hiện thanh thông báo ứng dụng máy tính bảng trong trình duyệt. */
			readonly AllowUsersSeeAppdownloadMessage: string;
			/** Cho biết khả năng chấp nhận xuất lưới chạy trên web ra Microsoft Office Excel. */
			readonly AllowWebExcelExport: string;
			/** Bộ chỉ định SA để dùng trong toàn Microsoft Dynamics CRM. */
			readonly AMDesignator: string;
			/** Cho biết appDesignerExperience đã được bật cho tổ chức hay chưa. */
			readonly AppDesignerExperienceEnabled: string;
			/** Application Based Access Control Mode. 0 is Disabled, 1 is audit mode , 2 is enforcement mode */
			readonly ApplicationBasedAccessControlMode: string;
			/** Information on whether rich editing experience for Appointment is enabled. */
			readonly AppointmentRichEditorExperience: string;
			/** Thông tin cho biết có bật trải nghiệm cuộc họp Teams cho Cuộc hẹn hay không. */
			readonly AppointmentWithTeamsMeeting: string;
			/** Liệu trải nghiệm họp qua Teams cho cuộc hẹn có được bật không. */
			readonly AppointmentWithTeamsMeetingV2: string;
			/** Thiết đặt Thời kỳ Duy trì Kiểm toán đã lưu trong Cơ sở dữ liệu Tổ chức. */
			readonly AuditRetentionPeriod: string;
			/** Thiết đặt Thời kỳ duy trì nội dung kiểm tra đã lưu trong Cơ sở dữ liệu tổ chức. */
			readonly AuditRetentionPeriodV2: string;
			/** Audit Settings of the organization */
			readonly AuditSettings: string;
			/** Chọn có áp dụng tự động quyền được hưởng mặc định của khách hàng khi tạo trường hợp hay không. */
			readonly AutoApplyDefaultonCaseCreate: string;
			/** Chọn có áp dụng tự động quyền được hưởng mặc định của khách hàng khi cập nhật trường hợp hay không. */
			readonly AutoApplyDefaultonCaseUpdate: string;
			/** Cho biết có tự động áp dụng Thỏa thuận Cấp độ Dịch vụ trong bản cập nhật bản ghi trường hợp sau khi Thỏa thuận Cấp độ Dịch vụ được áp dụng theo cách thủ công. */
			readonly AutoApplySLA: string;
			/** Chỉ sử dụng nội bộ. */
			readonly AzureSchedulerJobCollectionName: string;
			/** Mã định danh duy nhất của loại tiền cơ sở của tổ chức. */
			readonly BaseCurrencyId: string;
			/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền cơ sở. */
			readonly BaseCurrencyPrecision: string;
			/** Ký hiệu dùng cho loại tiền cơ sở. */
			readonly BaseCurrencySymbol: string;
			readonly BaseISOCurrencyCode: string;
			/** Khóa api dùng trong yêu cầu đến dịch vụ Bing Bản đồ. */
			readonly BingMapsApiKey: string;
			/** Information that specifies the Applications that are in block list for the accessing DV resources. */
			readonly BlockedApplicationsForDVAccess: string;
			/** Ngăn tải lên hay tải xuống loại đính kèm cụ thể, được coi là nguy hiểm. */
			readonly BlockedAttachments: string;
			/** Prevent upload or download of certain mime types that are considered dangerous. */
			readonly BlockedMimeTypes: string;
			/** Hiển thị thẻ theo trạng thái mở rộng đối với bảng thông tin tương tác */
			readonly BoundDashboardDefaultCardExpanded: string;
			/** Tiền tố dùng trong thao tác đánh số hàng loạt. */
			readonly BulkOperationPrefix: string;
			/** BusinessCardOptions */
			readonly BusinessCardOptions: string;
			/** Mã định danh duy nhất của lịch đóng cửa của tổ chức. */
			readonly BusinessClosureCalendarId: string;
			/** Loại lịch dành cho hệ thống. Đặt là dương lịch của Mỹ theo mặc định. */
			readonly CalendarType: string;
			/** Tiền tố dùng khi đánh số chiến dịch. */
			readonly CampaignPrefix: string;
			/** Cho biết liệu tổ chức có thể chọn không tham gia trải nghiệm Tìm kiếm liên quan mới (phát hành vào tháng 10/2020) hay không */
			readonly CanOptOutNewSearchExperience: string;
			/** Dựng cờ phân tầng Cập nhật cho sự việc. */
			readonly CascadeStatusUpdate: string;
			/** Tiền tố để dùng cho mọi trường hợp trong toàn Microsoft Dynamics 365. */
			readonly CasePrefix: string;
			/** Nhập tiền tố để dùng cho mọi thể loại trong Microsoft Dynamics 365. */
			readonly CategoryPrefix: string;
			/** Tính năng Máy khách để bật làm XML BLOB. */
			readonly ClientFeatureSet: string;
			/** Cấu hình chính sách cho CSP */
			readonly ContentSecurityPolicyConfiguration: string;
			/** Cấu hình chính sách bảo mật nội dung cho Các ứng dụng canvas. */
			readonly ContentSecurityPolicyConfigurationForCanvas: string;
			/** Content Security Policy Options. */
			readonly ContentSecurityPolicyOptions: string;
			/** Uri báo cáo chính sách bảo mật nội dung. */
			readonly ContentSecurityPolicyReportUri: string;
			/** Tiền tố để dùng cho mọi hợp đồng trong toàn Microsoft Dynamics 365. */
			readonly ContractPrefix: string;
			/** Tốc độ làm mới dữ liệu hiện diện đồng thời tính bằng giây. */
			readonly CopresenceRefreshRate: string;
			/** Cho biết xem liệu có nên bật tính năng quy trình Dòng CortanaProactiveExperience cho tổ chức này hay không. */
			readonly CortanaProactiveExperienceEnabled: string;
			/** Mã định danh duy nhất của người dùng đã tạo tổ chức. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo tổ chức. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo tổ chức. */
			readonly CreatedOnBehalfBy: string;
			/** Bật trạng thái Ban đầu của sản phẩm mới được tạo ở Hiện hoạt thay vì Bản nháp */
			readonly CreateProductsWithoutParentInActiveState: string;
			/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền. */
			readonly CurrencyDecimalPrecision: string;
			/** Cho biết khả năng hiển thị trường tiền với mã loại tiền hay ký hiệu loại tiền. */
			readonly CurrencyDisplayOption: string;
			/** Thông tin về cách đặt ký hiệu loại tiền trong toàn Microsoft Dynamics CRM. */
			readonly CurrencyFormatCode: string;
			/** Ký hiệu dùng cho loại tiền trong toàn Microsoft Dynamics 365. */
			readonly CurrencySymbol: string;
			/** Số thao tác hàng loạt hiện tại. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentBulkOperationNumber: string;
			/** Số chiến dịch hiện tại. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentCampaignNumber: string;
			/** Số hiệu trường hợp đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentCaseNumber: string;
			/** Nhập số đầu tiên để dùng cho Thể loại. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentCategoryNumber: string;
			/** Số hiệu hợp đồng đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentContractNumber: string;
			/** Thứ tự chuỗi nhập để dùng. */
			readonly CurrentImportSequenceNumber: string;
			/** Số hiệu hóa đơn đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentInvoiceNumber: string;
			/** Nhập số đầu tiên để dùng cho bài viết trong cơ sở kiến thức. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentKaNumber: string;
			/** Số hiệu bài viết đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentKbNumber: string;
			/** Số hiệu đơn hàng đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentOrderNumber: string;
			/** Số bảng đã phân tách đầu tiên để dùng. */
			readonly CurrentParsedTableNumber: string;
			/** Số hiệu báo giá đầu tiên để dùng. Không còn dùng. Dùng thông báo SetAutoNumberSeed. */
			readonly CurrentQuoteNumber: string;
			/** Thông tin về cách hiển thị ngày trong toàn Microsoft CRM. */
			readonly DateFormatCode: string;
			/** Chuỗi cho thấy cách hiển thị ngày trong toàn Microsoft CRM. */
			readonly DateFormatString: string;
			/** Ký tự dùng để phân tách tháng, ngày và năm trong ngày tháng, trong toàn Microsoft Dynamics 365. */
			readonly DateSeparator: string;
			/** Number of days before we migrate email description to blob. */
			readonly DaysBeforeEmailDescriptionIsMigrated: string;
			/** Số ngày không hoạt động trước khi chức năng đồng bộ hóa bị tắt đối với Cuộc trò chuyện Teams. */
			readonly DaysBeforeInactiveTeamsChatSyncDisabled: string;
			/** Giá trị tối đa cho Ngày thiết đặt Mobile Offline kể từ lần cuối sửa đổi bản ghi */
			readonly DaysSinceRecordLastModifiedMaxValue: string;
			/** Ký hiệu dùng cho dấu thập phân trong Microsoft Dynamics 365. */
			readonly DecimalSymbol: string;
			/** Khu vực văn bản để nhập mã quốc gia mặc định. */
			readonly DefaultCountryCode: string;
			/** Tên của crm custom mặc định. */
			readonly DefaultCrmCustomName: string;
			/** Mã định danh duy nhất cho cấu hình máy chủ email mặc định. */
			readonly DefaultEmailServerProfileId: string;
			/** Chuỗi XML chứa thiết đặt email mặc định, áp dụng khi tạo người dùng hay hàng đợi. */
			readonly DefaultEmailSettings: string;
			/** Mã định danh duy nhất của cấu hình Mobile Offline mặc định. */
			readonly DefaultMobileOfflineProfileId: string;
			/** Loại của ngày phạm vi kết thúc lặp lại mặc định. */
			readonly DefaultRecurrenceEndRangeType: string;
			/** Dữ liệu chủ đề mặc định dành cho tổ chức. */
			readonly DefaultThemeData: string;
			/** Mã định danh duy nhất của người dùng quản trị viên đại diện cho tổ chức. */
			readonly DelegatedAdminUserId: string;
			/** Thời gian tồn tại mặc định tính bằng phút đối với bản ghi nhật ký hàng đợi dòng màn hình nền mới. */
			readonly DesktopFlowQueueLogsTtlInMinutes: string;
			/** Kích hoạt/Hủy kích hoạt nhật ký hành động chạy Dòng màn hình nền Power Automate. */
			readonly DesktopFlowRunActionLogsStatus: string;
			/** Nơi lưu trữ nhật ký hành động chạy dòng màn hình nền Power Automate. */
			readonly DesktopFlowRunActionLogVersion: string;
			/** Lý do tắt tổ chức. */
			readonly DisabledReason: string;
			/** Cho biết có tắt Chăm sóc mạng xã hội hay không. */
			readonly DisableSocialCare: string;
			/** Tắt tính năng chia sẻ nhãn hệ thống cho tổ chức. */
			readonly DisableSystemLabelsCacheSharing: string;
			/** Phương pháp tính giảm giá cho sản phẩm QOOI. */
			readonly DiscountCalculationMethod: string;
			/** Cho biết hiển thị hay không hiển thị hướng dẫn điều hướng. */
			readonly DisplayNavigationTour: string;
			/** Chọn nếu bạn muốn dùng Bộ định tuyến email hay đồng bộ hóa phía máy chủ khi xử lý email. */
			readonly EmailConnectionChannel: string;
			/** Gắn cờ để bật hoặc tắt tương quan email. */
			readonly EmailCorrelationEnabled: string;
			/** Tần số bỏ phiếu thông thường, dùng khi gửi email trong Microsoft Office Outlook. */
			readonly EmailSendPollingPeriod: string;
			/** Xác định xem các bản ghi được hợp nhất thông qua hộp thoại hợp nhất trong UCI có được hợp nhất theo cách không đồng thời hay không */
			readonly EnableAsyncMergeAPIForUCI: string;
			/** Bật tích hợp với Bing Bản đồ */
			readonly EnableBingMapsIntegration: string;
			/** Lưu ý: Bằng cách bật tính năng này, bạn cũng sẽ tự động tạo các biến môi trường khi thêm nguồn dữ liệu cho ứng dụng của mình. */
			readonly EnableCanvasAppsInSolutionsByDefault: string;
			/** Cho biết liệu việc tạo dòng quy trình có nằm trong một giải pháp theo mặc định cho tổ chức này hay không. */
			readonly EnableFlowsInSolutionByDefault: string;
			/** Những tổ chức có thuộc tính này được đặt thành True sẽ được gia hạn và chưa được sử dụng chức năng 'tạo các dòng trong giải pháp theo mặc định' khi chức năng này bắt đầu được bật trên toàn thế giới. Sau khi hết thời gian gia hạn, chức năng này sẽ được bật trong tổ chức của bạn. */
			readonly EnableFlowsInSolutionByDefaultGracePeriod: string;
			/** Bật Tích hợp với Skype Chân thực */
			readonly EnableImmersiveSkypeIntegration: string;
			/** Information that specifies whether IP based cookie binding is enabled */
			readonly EnableIpBasedCookieBinding: string;
			/** Information that specifies whether IP based firewall rule is enabled */
			readonly EnableIpBasedFirewallRule: string;
			/** Information that specifies whether IP based firewall rule is enabled in Audit Only Mode */
			readonly EnableIpBasedFirewallRuleInAuditMode: string;
			/** Information that specifies whether IP based SAS URI generation rule is enabled */
			readonly EnableIpBasedStorageAccessSignatureRule: string;
			/** Cho biết người dùng đã bật hay tắt tính năng Thẻ Persona Trực tiếp trong UCI. */
			readonly EnableLivePersonaCardUCI: string;
			/** Cho biết người dùng đã bật hay tắt LivePersonCardIntegration trong Office. */
			readonly EnableLivePersonCardIntegrationInOffice: string;
			/** Chọn bật tác giả hướng dẫn học tập. */
			readonly EnableLPAuthoring: string;
			/** Kiểm soát xem tổ chức có Chuyển đổi Maker Portal sang phiên bản cũ hay không */
			readonly EnableMakerSwitchToClassic: string;
			/** Bật Tích hợp với Microsoft Flow */
			readonly EnableMicrosoftFlowIntegration: string;
			/** Bật tính định giá khi gọi ra lệnh Tạo. */
			readonly EnablePricingOnCreate: string;
			/** Dùng kết nối tương quan thông minh. */
			readonly EnableSmartMatching: string;
			/** Để trống để sử dụng thiết đặt mặc định. Đặt thành bật/tắt để bật/tắt CDN cho UCI. */
			readonly EnableUnifiedClientCDN: string;
			/** Bật sơ đồ trang web và cập nhật lệnh */
			readonly EnableUnifiedInterfaceShellRefresh: string;
			/** Thiết đặt tổ chức để thực thi phần bổ trợ chỉ đọc. */
			readonly EnforceReadOnlyPlugins: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Số ngày tối đa để theo dõi thay đổi đối với bản ghi đã xóa */
			readonly ExpireChangeTrackingInDays: string;
			/** Số ngày tối đa trước khi xóa đăng ký không hoạt động. */
			readonly ExpireSubscriptionsInDays: string;
			/** Chỉ định URL gốc dùng để tìm kiếm gợi ý tài liệu bên ngoài. */
			readonly ExternalBaseUrl: string;
			/** Chuỗi XML chứa khóa tương quan của thực thể đã kích hoạt bên ngoài để liên kết các thực thể phiên bản Bên ngoài hiện có với các thực thể đã Kích hoạt Bên ngoài mới tạo. Chỉ sử dụng nội bộ. */
			readonly ExternalPartyCorrelationKeys: string;
			/** Chuỗi XML chứa thiết đặt thực thể đã kích hoạt bên ngoài. */
			readonly ExternalPartyEntitySettings: string;
			/** Tính năng để bật làm XML BLOB. */
			readonly FeatureSet: string;
			/** Ngày bắt đầu cho kỳ tài chính dùng trong toàn bộ Microsoft CRM. */
			readonly FiscalCalendarStart_UtcDateOnly: string;
			/** Thông tin chỉ định cách hiển thị tên của kỳ tài chính trong toàn Microsoft CRM. */
			readonly FiscalPeriodFormat: string;
			/** Định dạng sẽ hiển thị kỳ tài chính. */
			readonly FiscalPeriodFormatPeriod: string;
			/** Loại kỳ tài chính được dùng trong toàn Microsoft CRM. */
			readonly FiscalPeriodType: string;
			/** Thông tin chỉ định trạng thái cập nhật thiết đặt tài chính. */
			readonly FiscalSettingsUpdated: string;
			/** Thông tin chỉ định việc hiển thị năm tài chính dựa trên ngày bắt đầu hay ngày kết thúc của năm tài chính. */
			readonly FiscalYearDisplayCode: string;
			/** Thông tin chỉ định cách hiển thị tên của năm tài chính trong toàn Microsoft CRM. */
			readonly FiscalYearFormat: string;
			/** Tiền tố khi hiển thị năm tài chính. */
			readonly FiscalYearFormatPrefix: string;
			/** Hậu tố khi hiển thị năm tài chính. */
			readonly FiscalYearFormatSuffix: string;
			/** Định dạng cho năm. */
			readonly FiscalYearFormatYear: string;
			/** Thông tin chỉ định cách kết nối tên của năm tài chính và kỳ tài chính khi hiển thị cùng nhau. */
			readonly FiscalYearPeriodConnect: string;
			/** Thời gian tồn tại mặc định tính bằng phút đối với các bản ghi mới trong thực thể nhật ký dòng. */
			readonly FlowLogsTtlInMinutes: string;
			/** Thời gian hoạt động (tính bằng giây) cho phiên chạy dòng */
			readonly FlowRunTimeToLiveInSeconds: string;
			/** Thứ tự hiển thị tên trong toàn Microsoft CRM. */
			readonly FullNameConventionCode: string;
			/** Chỉ định số lượng tháng tối đa trong tương lai để có thể tạo hoạt động lặp lại. */
			readonly FutureExpansionWindow: string;
			/** Cho biết khả năng tạo cảnh báo dành cho lỗi. */
			readonly GenerateAlertsForErrors: string;
			/** Cho biết khả năng tạo cảnh báo dành cho thông tin. */
			readonly GenerateAlertsForInformation: string;
			/** Cho biết khả năng tạo thông báo dành cho cảnh báo. */
			readonly GenerateAlertsForWarnings: string;
			/** Cho biết khả năng bật nội dung Bắt đầu dành cho tổ chức này. */
			readonly GetStartedPaneContentEnabled: string;
			/** Cho biết có bật tham số URL nối vào không. */
			readonly GlobalAppendUrlParametersEnabled: string;
			/** URL cho trợ giúp chung về trang web. */
			readonly GlobalHelpUrl: string;
			/** Cho biết có bật trợ giúp chung có thể tùy chỉnh không. */
			readonly GlobalHelpUrlEnabled: string;
			/** Số lượng ngày sau ngày kết thúc mục đích, sau khi tổng số của mục đích dừng tự động. */
			readonly GoalRollupExpiryTime: string;
			/** Số lượng giờ giữa các công việc tổng số tự động. */
			readonly GoalRollupFrequency: string;
			/** Chỉ sử dụng nội bộ. */
			readonly GrantAccessToNetworkService: string;
			/** Chênh lệch tối đa có thể có giữa tổng số đếm từ khóa chủ đề của email với nội dung gửi cần tương quan */
			readonly HashDeltaSubjectCount: string;
			/** Lọc từ khóa chủ đề */
			readonly HashFilterKeywords: string;
			/** Số lượng từ khóa chủ đề hay người nhận tối đa dùng để tương quan */
			readonly HashMaxCount: string;
			/** Số lượng người nhận tối đa cần thiết để khớp cho email với nội dung gửi cần tương quan */
			readonly HashMinAddressCount: string;
			/** Dữ liệu chủ đề có độ thương phản cao dành cho tổ chức. */
			readonly HighContrastThemeData: string;
			/** Cho biết khả năng theo dõi email đến do người dùng hay hàng đợi Microsoft Dynamics 365 nội bộ gửi đi. */
			readonly IgnoreInternalEmail: string;
			/** Cho biết tổ chức đã đồng ý chia sẻ dữ liệu truy vấn tìm kiếm để giúp cải thiện kết quả tìm kiếm hay chưa */
			readonly ImproveSearchLoggingEnabled: string;
			/** Thông tin chỉ định có bật thời gian chờ Không hoạt động hay không */
			readonly InactivityTimeoutEnabled: string;
			/** Thời gian chờ không hoạt động tính theo phút */
			readonly InactivityTimeoutInMins: string;
			/** Lời nhắc thời gian chờ không hoạt động tính theo phút */
			readonly InactivityTimeoutReminderInMins: string;
			/** Thiết đặt cho Hàng đợi hộp thư dịch vụ không đồng bộ. Xác định kích thước khối truy xuất của máy chủ exchange. */
			readonly IncomingEmailExchangeEmailRetrievalBatchSize: string;
			/** Phiên bản ban đầu của tổ chức. */
			readonly InitialVersion: string;
			/** Mã định danh duy nhất của người dùng tích hợp cho tổ chức. */
			readonly IntegrationUserId: string;
			/** Tiền tố để dùng cho mọi mã số hóa đơn trong toàn Microsoft Dynamics 365. */
			readonly InvoicePrefix: string;
			/** IP Based SAS mode. */
			readonly IpBasedStorageAccessSignatureMode: string;
			/** Cho biết khả năng bật tính năng Thẻ Hành động cho tổ chức. */
			readonly IsActionCardEnabled: string;
			/** Thông tin chỉ định khả năng bật Tính năng Hỗ trợ Hành động */
			readonly IsActionSupportFeatureEnabled: string;
			/** Cho biết xem liệu có nên bật tính năng Phân tích Mối quan hệ cho tổ chức này hay không. */
			readonly IsActivityAnalysisEnabled: string;
			/** Cho biết liệu tất cả các thuộc tính tiền có được chuyển đổi thành số thập phân không. */
			readonly IsAllMoneyDecimal: string;
			/** Cho biết khả năng bật tải Microsoft Dynamics 365 trong cửa sổ trình duyệt không có địa chỉ, công cụ và thanh menu. */
			readonly IsAppMode: string;
			/** Bật hoặc tắt đồng bộ tệp đính kèm cho Outlook và Exchange. */
			readonly IsAppointmentAttachmentSyncEnabled: string;
			/** Bật hoặc tắt đồng bộ nhiệm vụ đã gán cho Outlook và Exchange. */
			readonly IsAssignedTasksSyncEnabled: string;
			/** Bật hoặc tắt kiểm tra thay đổi. */
			readonly IsAuditEnabled: string;
			/** Cho biết khả năng bật tính năng Tự động Ghi cho tổ chức này. */
			readonly IsAutoDataCaptureEnabled: string;
			/** Cho biết khả năng bật tính năng V2 của Tự động Ghi cho tổ chức này. */
			readonly IsAutoDataCaptureV2Enabled: string;
			readonly IsAutoInstallAppForD365InTeamsEnabled: string;
			/** Thông tin về khả năng bật tự động lưu. */
			readonly IsAutoSaveEnabled: string;
			readonly IsBaseCardStaticFieldDataEnabled: string;
			/** Xác định xem người dùng có thể sử dụng các tính năng Không gian địa lý cơ bản trong Ứng dụng canvas hay không. */
			readonly IsBasicGeospatialIntegrationEnabled: string;
			/** Thông tin chỉ định khả năng bật Tính năng Tùy chỉnh Thực thể BDF */
			readonly IsBPFEntityCustomizationFeatureEnabled: string;
			readonly IsCollaborationExperienceEnabled: string;
			/** Thông tin chỉ định khả năng sẽ bật phát hiện xung đột cho máy khách di động. */
			readonly IsConflictDetectionEnabledForMobileClient: string;
			/** Bật hoặc tắt đồng bộ địa chỉ gửi thư cho Outlook và Exchange. */
			readonly IsContactMailingAddressSyncEnabled: string;
			/** Cho biết Chính sách Bảo mật Nội dung đã được bật cho tổ chức hay chưa. */
			readonly IsContentSecurityPolicyEnabled: string;
			/** Cho biết Chính sách bảo mật nội dung đã được bật cho Các ứng dụng canvas của tổ chức này hay chưa. */
			readonly IsContentSecurityPolicyEnabledForCanvas: string;
			/** Cho biết Trải nghiệm email theo ngữ cảnh có được bật trên tổ chức này không */
			readonly IsContextualEmailEnabled: string;
			/** Chọn để bật Trợ giúp theo Ngữ cảnh trong UCI. */
			readonly IsContextualHelpEnabled: string;
			/** Determines whether users can provide feedback Copilot experiences. */
			readonly IsCopilotFeedbackEnabled: string;
			/** Cho biết tính năng Kiểm soát Tùy chỉnh trong bảng tùy biến PowerApps đã được bật cho tổ chức hay chưa. */
			readonly IsCustomControlsInCanvasAppsEnabled: string;
			/** Bật hoặc tắt chọn lựa mã quốc gia. */
			readonly IsDefaultCountryCodeCheckEnabled: string;
			/** Bật nội dung Truy cập Ủy quyền */
			readonly IsDelegateAccessEnabled: string;
			/** Cho biết khả năng có thể bật tính năng Hub Hành động cho tổ chức. */
			readonly IsDelveActionHubIntegrationEnabled: string;
			/** Indicates whether connection embedding in Desktop Flows is enabled in this organization. */
			readonly IsDesktopFlowConnectionEmbeddingEnabled: string;
			/** Indicates whether the Desktop Flows UI Automation Runtime Repair for Attended feature for this organization. */
			readonly IsDesktopFlowRuntimeRepairAttendedEnabled: string;
			/** Indicates whether the Desktop Flows UI Automation Runtime Repair for Unattended feature for this organization. */
			readonly IsDesktopFlowRuntimeRepairUnattendedEnabled: string;
			/** Cho biết có bật lược đồ v2 cho Dòng màn hình nền trong tổ chức này hay không. */
			readonly IsDesktopFlowSchemaV2Enabled: string;
			/** Thông tin chỉ định khả năng tắt tổ chức. */
			readonly IsDisabled: string;
			/** Cho biết khả năng bật phát hiện sự trùng lặp bản ghi. */
			readonly IsDuplicateDetectionEnabled: string;
			/** Cho biết khả năng bật phát hiện sự trùng lặp bản ghi trong khi nhập. */
			readonly IsDuplicateDetectionEnabledForImport: string;
			/** Cho biết khả năng bật phát hiện sự trùng lặp bản ghi trong khi đồng bộ ngoại tuyến. */
			readonly IsDuplicateDetectionEnabledForOfflineSync: string;
			/** Cho biết khả năng bật phát hiện sự trùng lặp trong khi tạo hay cập nhật trực tuyến. */
			readonly IsDuplicateDetectionEnabledForOnlineCreateUpdate: string;
			/** Information on whether Smart Email Address Validation is enabled. */
			readonly IsEmailAddressValidationEnabled: string;
			/** Cho phép theo dõi hoạt động của người nhận trên các email đã gửi. */
			readonly IsEmailMonitoringAllowed: string;
			/** Bật lọc nội dung Cấu hình Máy chủ Email */
			readonly IsEmailServerProfileContentFilteringEnabled: string;
			/** Cho biết appmodule đã được bật cho tất cả các vai trò hay chưa */
			readonly IsEnabledForAllRoles: string;
			/** Cho biết các tệp của tổ chức có đang được lưu trữ trong Azure hay không. */
			readonly IsExternalFileStorageEnabled: string;
			/** Chọn khả năng đồng bộ hóa dữ liệu với chỉ mục tìm kiếm bên ngoài. */
			readonly IsExternalSearchIndexEnabled: string;
			/** Cho biết khả năng hiển thị kỳ tài chính ở dạng số tháng. */
			readonly IsFiscalPeriodMonthBased: string;
			/** Chọn khả năng tạo thư mục tự động trên SharePoint. */
			readonly IsFolderAutoCreatedonSP: string;
			/** Bật hoặc tắt tính năng theo dõi dựa trên thư mục để Đồng bộ Phía Máy chủ. */
			readonly IsFolderBasedTrackingEnabled: string;
			/** Cho biết có thể bật thực thể tìm kiếm văn bản đầy đủ cho Tìm Nhanh cho tổ chức hay không. */
			readonly IsFullTextSearchEnabled: string;
			/** Cho biết liệu các khả năng không gian địa lý tận dụng Azure Maps có được bật hay không. */
			readonly IsGeospatialAzureMapsIntegrationEnabled: string;
			/** Bật mô hình bảo mật theo cấp bậc */
			readonly IsHierarchicalSecurityModelEnabled: string;
			/** Indicates whether data collection for ideas in canvas PowerApps has been enabled. */
			readonly IsIdeasDataCollectionEnabled: string;
			/** Cấp chấp thuận sử dụng LUIS trong Bot Dynamics 365 */
			readonly IsLUISEnabledforD365Bot: string;
			/** Bật hoặc tắt tính năng buộc mở khóa để Đồng bộ hóa Phía Máy chủ. */
			readonly IsMailboxForcedUnlockingEnabled: string;
			/** Bật hoặc tắt hộp thư luôn hoạt động đối với Đồng bộ phía máy chủ. */
			readonly IsMailboxInactiveBackoffEnabled: string;
			/** Cho biết tính năng Dự báo Bán hàng Thủ công đã được bật cho tổ chức hay chưa. */
			readonly IsManualSalesForecastingEnabled: string;
			/** Thông tin chỉ định khả năng sẽ bật đồng bộ máy khách di động theo yêu cầu. */
			readonly IsMobileClientOnDemandSyncEnabled: string;
			/** Cho biết khả năng bật tính năng Ngoại tuyến trên Thiết bị di động cho tổ chức này. */
			readonly IsMobileOfflineEnabled: string;
			/** Cho biết liệu có thể nhúng Ứng dụng mô hình trong Microsoft Teams hay không. Đây là một tính năng thử nghiệm/bản xem trước do quản trị viên đối tượng thuê kiểm soát. */
			readonly IsModelDrivenAppsInMSTeamsEnabled: string;
			/** Cho biết tính năng Cộng tác Microsoft Teams đã được bật cho tổ chức hay chưa. */
			readonly IsMSTeamsCollaborationEnabled: string;
			/** Cho biết tích hợp Microsoft Teams đã được bật cho tổ chức hay chưa. */
			readonly IsMSTeamsEnabled: string;
			/** Cho biết người dùng đã bật hay tắt tích hợp Microsoft Teams. */
			readonly IsMSTeamsSettingChangedByUser: string;
			/** Cho biết tính năng Đồng bộ Người dùng Microsoft Teams đã được bật cho tổ chức hay chưa. */
			readonly IsMSTeamsUserSyncEnabled: string;
			/** Cho biết liệu trải nghiệm thêm sản phẩm mới có được bật không. */
			readonly IsNewAddProductExperienceEnabled: string;
			/** Cho biết khả năng bật tính năng Phân tích Ghi chú cho tổ chức này. */
			readonly IsNotesAnalysisEnabled: string;
			readonly IsNotificationForD365InTeamsEnabled: string;
			/** Cho biết có thể bật tính năng Office Graph cho tổ chức hay không. */
			readonly IsOfficeGraphEnabled: string;
			/** Cho biết có thể bật tính năng One Drive cho tổ chức hay không. */
			readonly IsOneDriveEnabled: string;
			/** Cho biết tính năng PAI đã được bật cho tổ chức hay chưa. */
			readonly IsPAIEnabled: string;
			/** Cho biết tính năng Tạo PDF đã được bật cho tổ chức hay chưa. */
			readonly IsPDFGenerationEnabled: string;
			/** Cho biết có bật tính năng Số dư theo quy trình trong tổ chức này hay không. */
			readonly IsPerProcessCapacityOverageEnabled: string;
			/** Cho biết tính năng cẩm nang đã được bật cho tổ chức hay chưa. */
			readonly IsPlaybookEnabled: string;
			/** Thông tin về khả năng bật hiển thị IM. */
			readonly IsPresenceEnabled: string;
			/** Cho biết tính năng ở giai đoạn Bản xem trước cho Thẻ hành động có được phép bật cho tổ chức hay không. */
			readonly IsPreviewEnabledForActionCard: string;
			/** Cho biết khả năng bật tính năng Thu nạp Tự động cho tổ chức này ở Thiết đặt Xem trước. */
			readonly IsPreviewForAutoCaptureEnabled: string;
			/** Cho phép Xem trước đối với Theo dõi Email. */
			readonly IsPreviewForEmailMonitoringAllowed: string;
			/** Cho biết liệu Bảng giá có bắt buộc đối với việc thêm sản phẩm hiện tại vào các thực thể bán hàng hay không. */
			readonly IsPriceListMandatory: string;
			/** Chọn sử dụng trải nghiệm Đóng Cơ hội Dùng được ngay tiêu chuẩn hay tham gia trải nghiệm tùy chỉnh. */
			readonly IsQuickCreateEnabledForOpportunityClose: string;
			/** Bật hoặc tắt tính năng kiểm tra hoạt động đọc. */
			readonly IsReadAuditEnabled: string;
			/** Cho biết xem liệu có nên bật tính năng Relationship Insights cho tổ chức này hay không. */
			readonly IsRelationshipInsightsEnabled: string;
			/** Cho biết liệu việc đồng bộ hóa đăng ký nguồn lực người dùng với Exchange có được bật ở cấp độ tổ chức hay không. */
			readonly IsResourceBookingExchangeSyncEnabled: string;
			/** Cho biết liệu trình chỉnh sửa văn bản phong phú cho trải nghiệm ghi chú có được bật trên tổ chức này không */
			readonly IsRichTextNotesEnabled: string;
			/** Cho biết có bật Liên kết AAD cho tính năng Tự động co giãn RPA cho tổ chức này hay không. */
			readonly IsRpaAutoscaleAadJoinEnabled: string;
			/** Cho biết có bật tính năng Tự động điều chỉnh quy mô cho RPA trong tổ chức này hay không. */
			readonly IsRpaAutoscaleEnabled: string;
			/** Cho biết liệu tính năng Hộp RPA có được bật trong tổ chức này ở các vị trí bên ngoài vị trí địa lý của đối tượng thuê hay không. */
			readonly IsRpaBoxCrossGeoEnabled: string;
			/** Cho biết có bật tính năng RPA Box trong tổ chức này hay không. */
			readonly IsRpaBoxEnabled: string;
			/** Cho biết có bật tính năng Lần chạy không được giám sát cho RPA trong tổ chức này hay không. */
			readonly IsRpaUnattendedEnabled: string;
			/** Cho biết ứng dụng di động Sales Assistant đã được bật cho tổ chức hay chưa. */
			readonly IsSalesAssistantEnabled: string;
			readonly IsSharingInOrgAllowed: string;
			/** Bật tích hợp xử lý đơn bán hàng. */
			readonly IsSOPIntegrationEnabled: string;
			/** Thông tin về khả năng bật ngắt dòng. */
			readonly IsTextWrapEnabled: string;
			/** Bật hoặc tắt kiểm tra truy cập của người dùng. */
			readonly IsUserAccessAuditEnabled: string;
			/** Cho biết khả năng bật tải Microsoft Dynamics 365 trong cửa sổ trình duyệt không có địa chỉ, công cụ và thanh menu. */
			readonly ISVIntegrationCode: string;
			/** Cho biết liệu có thể thêm Sản phẩm chọn thêm vào Cơ hội/Báo giá/Đơn hàng/Hóa đơn hay không. */
			readonly IsWriteInProductsAllowed: string;
			/** Nhập tiền tố để dùng cho mọi bài viết trong cơ sở kiến thức trong Microsoft Dynamics 365. */
			readonly KaPrefix: string;
			/** Tiền tố để dùng cho mọi bài viết trong Microsoft Dynamics 365. */
			readonly KbPrefix: string;
			/** Chuỗi XML chứa các thiết đặt Quản lý Kiến thức được áp dụng trong Trình hướng dẫn Quản lý Kiến thức. */
			readonly KMSettings: string;
			/** Ngôn ngữ ưu tiên cho tổ chức. */
			readonly LanguageCode: string;
			/** Hiển thị ứng dụng cũ cho quản trị viên */
			readonly LegacyAppToggle: string;
			/** Mã định danh duy nhất của vùng bản địa của tổ chức. */
			readonly LocaleId: string;
			/** Thông tin chỉ định cách hiển thị định dạng Ngày dạng dài trong Microsoft Dynamics 365. */
			readonly LongDateFormatCode: string;
			/** Số ký tự tối thiểu cần nhập vào chức năng kiểm soát tra cứu trước khi giải quyết các đề xuất */
			readonly LookupCharacterCountBeforeResolve: string;
			/** Độ trễ tối thiểu (tính bằng mili giây) giữa hai lần nhập liên tiếp trong chức năng kiểm soát tra cứu mà sẽ kích hoạt tìm kiếm đề xuất */
			readonly LookupResolveDelayMS: string;
			/** Ngưỡng Dưới cho Sự cố Gián đoạn Hộp thư. */
			readonly MailboxIntermittentIssueMinRange: string;
			/** Ngưỡng Dưới cho Sự cố Vĩnh viễn của Hộp thư. */
			readonly MailboxPermanentIssueMinRange: string;
			/** Số actionsteps tối đa được cho phép trong BPF */
			readonly MaxActionStepsInBPF: string;
			/** Maximum Allowed Pending Rollup Job Count */
			readonly MaxAllowedPendingRollupJobCount: string;
			/** Percentage Of Entity Table Size For Kicking Off Bootstrap Job */
			readonly MaxAllowedPendingRollupJobPercentage: string;
			/** Số lượng ngày tối đa mà cuộc hẹn có thể có. */
			readonly MaxAppointmentDurationDays: string;
			/** Số lượng điều kiện tối đa được phép cho các bộ lọc Mobile Offline */
			readonly MaxConditionsForMobileOfflineFilters: string;
			/** Chiều sâu tối đa khi tự động điền bảo mật cho hệ thống cấp bậc. */
			readonly MaxDepthForHierarchicalSecurityModel: string;
			/** Số ánh xạ Theo dõi Trên Thư mục tối đa mà người dùng có thể thêm */
			readonly MaxFolderBasedTrackingMappings: string;
			/** Số lượng dòng quy trình công việc hiện hoạt tối đa có thể có cho mỗi thực thể */
			readonly MaximumActiveBusinessProcessFlowsAllowedPerEntity: string;
			/** Hạn chế số lượng thuộc tính sản phẩm tối đa cho họ/gói sản phẩm */
			readonly MaximumDynamicPropertiesAllowed: string;
			/** Số lượng Thỏa thuận Cấp độ Dịch vụ hiện hoạt tối đa được phép trên mỗi thực thể khi ở chế độ trực tuyến */
			readonly MaximumEntitiesWithActiveSLA: string;
			/** Số lượng SLA KPI tối đa cho mỗi SLA hiện hoạt được phép trên mỗi thực thể khi ở chế độ trực tuyến */
			readonly MaximumSLAKPIPerEntityWithActiveSLA: string;
			/** Số theo dõi tối đa trước khi thực hiện tái chế. */
			readonly MaximumTrackingNumber: string;
			/** Hạn chế số lượng mục tối đa trong gói */
			readonly MaxProductsInBundle: string;
			/** Số lượng bản ghi tối đa sẽ xuất ra bảng tính Microsoft Office Excel tĩnh khi xuất từ lưới. */
			readonly MaxRecordsForExportToExcel: string;
			/** Số lượng bản ghi tra cứu và danh sách chọn tối đa mà người dùng có thể chọn khi lọc. */
			readonly MaxRecordsForLookupFilters: string;
			/** Maximum Rollup Fields Per Entity */
			readonly MaxRollupFieldsPerEntity: string;
			/** Maximum Rollup Fields Per Organization */
			readonly MaxRollupFieldsPerOrg: string;
			readonly MaxSLAItemsPerSLA: string;
			/** Phiên bản IE cao nhất để chạy mô phỏng trình duyệt cho ứng dụng khách Outlook */
			readonly MaxSupportedInternetExplorerVersion: string;
			/** Kích thước tệp đính kèm tối đa có thể chấp nhận. */
			readonly MaxUploadFileSize: string;
			/** Số lượng hộp thư tối đa có thể chuyển đổi cho ghi nhật ký diễn giải */
			readonly MaxVerboseLoggingMailbox: string;
			/** Số chu kỳ đồng bộ tối đa để kích hoạt ghi nhật ký diễn giải theo mặc định */
			readonly MaxVerboseLoggingSyncCycles: string;
			/** Ngày/giờ cuối cùng là lúc nào, khi có siêu dữ liệu theo dõi đối tượng đã xóa nhưng đối tượng đó chưa bao giờ nằm ngoài khoảng thời gian hết hạn. */
			readonly MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: string;
			/** Chứa số lượng phiên bản tối đa của thuộc tính mà đồng bộ siêu dữ liệu đã đổi sử dụng. */
			readonly MetadataSyncTimestamp: string;
			/** (Không còn dùng) Môi trường đã chọn cho Tích hợp với Microsoft Flow */
			readonly MicrosoftFlowEnvironment: string;
			/** Tần số bỏ phiếu thông thường, dùng đồng bộ sổ địa chỉ trong Microsoft Office Outlook. */
			readonly MinAddressBookSyncInterval: string;
			/** Tần số bỏ phiếu thông thường, dùng đồng bộ ngoại tuyến dạng chạy ẩn trong Microsoft Office Outlook. */
			readonly MinOfflineSyncInterval: string;
			/** Thời gian tối thiểu có thể chấp nhận giữa các lần đồng bộ Outlook theo lịch. */
			readonly MinOutlookSyncInterval: string;
			/** Yêu cầu số lượng giấy phép người dùng tối thiểu cho dịch vụ Mobile Offline theo tổ chức sản xuất/xem trước */
			readonly MobileOfflineMinLicenseProd: string;
			/** Yêu cầu số lượng giấy phép người dùng tối thiểu cho dịch vụ Mobile Offline theo tổ chức dùng thử */
			readonly MobileOfflineMinLicenseTrial: string;
			/** Đồng bộ khoảng thời gian cho mobile offline. */
			readonly MobileOfflineSyncInterval: string;
			/** Gắn cờ để cho biết liệu có bật tính năng lọc tìm kiếm nâng cao tiên tiến trên tất cả các bảng trong một ứng dụng dựa trên mô hình hay không */
			readonly ModernAdvancedFindFiltering: string;
			/** Indicates whether coauthoring is enabled in modern app designer */
			readonly ModernAppDesignerCoauthoringEnabled: string;
			/** Mã định danh duy nhất của người dùng sửa đổi tổ chức lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi tổ chức lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi tổ chức lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiện nút sắp xếp theo trên dạng xem */
			readonly MultiColumnSortEnabled: string;
			/** Tên của tổ chức. Bạn đặt tên khi cài đặt Microsoft CRM và không đổi được tên này. */
			readonly Name: string;
			/** Bật bộ lọc hỗ trợ ngôn ngữ tự nhiên. */
			readonly NaturalLanguageAssistFilter: string;
			/** Thông tin chỉ định cách hiển thị số tiền âm trong toàn Microsoft Dynamics 365. */
			readonly NegativeCurrencyFormatCode: string;
			/** Thông tin chỉ định cách hiển thị số âm trong toàn Microsoft CRM. */
			readonly NegativeFormatCode: string;
			/** Cho biết liệu một tổ chức đã bật trải nghiệm Tìm kiếm liên quan mới (phát hành vào tháng 10/2020) cho tổ chức đó hay chưa */
			readonly NewSearchExperienceEnabled: string;
			/** Mã loại thực thể tiếp theo để dùng cho thực thể tùy chỉnh. */
			readonly NextCustomObjectTypeCode: string;
			/** Mã thông báo tiếp theo đặt trên dòng chủ đề của email. */
			readonly NextTrackingNumber: string;
			/** Cho biết khả năng sẽ thông báo chủ hộp thư về cảnh báo cấp độ cấu hình máy chủ email. */
			readonly NotifyMailboxOwnerOfEmailServerLevelAlerts: string;
			/** Chỉ định cách hiển thị số trong toàn Microsoft CRM. */
			readonly NumberFormat: string;
			/** Chỉ định cách phân nhóm số trong Microsoft Dynamics 365. */
			readonly NumberGroupFormat: string;
			/** Ký hiệu dùng cho dấu phân tách số trong Microsoft Dynamics 365. */
			readonly NumberSeparator: string;
			/** Cho biết tùy chọn tự động triển khai Ứng dụng Office đã được bật cho tổ chức hay chưa. */
			readonly OfficeAppsAutoDeploymentEnabled: string;
			/** Url để mở Delve cho tổ chức. */
			readonly OfficeGraphDelveUrl: string;
			/** Chấp nhận lôgic tính giá OOB cho thực thể Cơ hội, Báo giá, Đơn hàng và Hóa đơn. */
			readonly OOBPriceCalculationEnabled: string;
			/** Cho biết tổ chức này có chọn không tự động bật sơ đồ v2 trên tổ chức hay không. */
			readonly OptOutSchemaV2EnabledByDefault: string;
			/** Tiền tố để dùng cho mọi đơn hàng trong toàn Microsoft Dynamics 365. */
			readonly OrderPrefix: string;
			/** Mã định danh duy nhất của tổ chức. */
			readonly OrganizationId: string;
			/** Cho biết trạng thái vòng đời của tổ chức */
			readonly OrganizationState: string;
			/** Thiết đặt tổ chức đã lưu trong Cơ sở dữ liệu tổ chức. */
			readonly OrgDbOrgSettings: string;
			/** Chọn khả năng bật OrgInsights cho tổ chức. */
			readonly OrgInsightsEnabled: string;
			/** Cho biết đã bật tính năng ở giai đoạn Bản xem trước cho tổ chức hay chưa. */
			readonly PaiPreviewScenarioEnabled: string;
			/** Tiền tố dùng cho cột đã phân tách trong bảng. */
			readonly ParsedTableColumnPrefix: string;
			/** Tiền tố dùng cho bảng đã phân tách. */
			readonly ParsedTablePrefix: string;
			/** Chỉ định số lượng tháng tối đa trong quá khứ để có thể tạo hoạt động lặp lại. */
			readonly PastExpansionWindow: string;
			/** Để trống để sử dụng thiết đặt mặc định. Đặt thành bật/tắt để cho phép/vô hiệu hóa thay thế lưới mặc định bằng lưới hiện đại trong ứng dụng dựa trên mô hình. */
			readonly PcfDatasetGridEnabled: string;
			/** Thiết đặt này chứa ngày giờ trước khi có thể thực thi thao tác đồng bộ hóa ACT. */
			readonly PerformACTSyncAfter_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Picture: string;
			readonly PinpointLanguageCode: string;
			/** Thiết đặt ghi nhật ký truy vết phần bổ trợ cho Tổ chức. */
			readonly PluginTraceLogSetting: string;
			/** Bộ chỉ định CH để dùng trong toàn Microsoft Dynamics 365. */
			readonly PMDesignator: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PostMessageWhitelistDomains: string;
			/** Indicates whether bot for makers is enabled. */
			readonly PowerAppsMakerBotEnabled: string;
			/** Cho biết tổ chức có được phép thực hiện các hoạt động liên khu vực hay không */
			readonly PowerBIAllowCrossRegionOperations: string;
			/** Cho biết tính năng tự động gán quyền cho Power BI đã được bật cho tổ chức hay chưa */
			readonly PowerBIAutomaticPermissionsAssignment: string;
			/** Cho biết tính năng tạo thành phần Power BI đã được bật cho tổ chức hay chưa */
			readonly PowerBIComponentsCreate: string;
			/** Cho biết có thể bật tính năng Power BI cho tổ chức hay không. */
			readonly PowerBiFeatureEnabled: string;
			/** Số chữ số sau dấu thập phân có thể dùng cho giá. */
			readonly PricingDecimalPrecision: string;
			/** URL Tuyên bố về Quyền riêng tư */
			readonly PrivacyStatementUrl: string;
			/** Mã định danh duy nhất của quyền mặc định cho người dùng trong tổ chức. */
			readonly PrivilegeUserGroupId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PrivReportingGroupId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PrivReportingGroupName: string;
			/** Chọn khả năng bật đề xuất sản phẩm cho tổ chức. */
			readonly ProductRecommendationsEnabled: string;
			/** Cho biết liệu có hiển thị thông báo nhắc cho Trải nghiệm Định tính Khách hàng tiềm năng mới hay không */
			readonly QualifyLeadAdditionalOptions: string;
			/** Gắn cờ để cho biết liệu có bật tính năng sử dụng thao tác nhanh để mở bản ghi trong ngăn bên tìm kiếm hay không */
			readonly QuickActionToOpenRecordsInSidePaneEnabled: string;
			/** Cho biết khả năng bật giới hạn bản ghi tìm nhanh cho tổ chức này (để thực hiện nhanh hơn truy vấn tìm nhanh, nhưng ngăn tìm kiếm quá rộng). */
			readonly QuickFindRecordLimitEnabled: string;
			/** Tiền tố để dùng cho mọi báo giá trong toàn Microsoft Dynamics 365. */
			readonly QuotePrefix: string;
			/** Indicates whether SLA Recalculation has been enabled for the organization */
			readonly RecalculateSLA: string;
			/** Chỉ định giá trị mặc định cho trường số lần xảy ra trong hộp thoại lần lặp lại. */
			readonly RecurrenceDefaultNumberOfOccurrences: string;
			/** Chỉ định khoảng (tính bằng giây) cho tạm dừng công việc mở rộng. */
			readonly RecurrenceExpansionJobBatchInterval: string;
			/** Chỉ định giá trị cho số lượng phiên bản đã tạo trong công việc theo yêu cầu, tại một thời điểm. */
			readonly RecurrenceExpansionJobBatchSize: string;
			/** Chỉ định số lượng phiên bản tối đa tạo đồng thời sau khi tạo cuộc hẹn lặp lại. */
			readonly RecurrenceExpansionSynchCreateMax: string;
			/** Chuỗi XML xác định cấu trúc điều hướng cho ứng dụng. Đây là sơ đồ trang web từ bản nâng cấp trước đây và dùng trong quy trình hợp nhất 3 chiều khi nâng cấp. */
			readonly ReferenceSiteMapXml: string;
			/** Giá trị nhịp độ phát hành của tổ chức hiện tại */
			readonly ReleaseCadence: string;
			/** Kênh làm mới ứng dụng mô hình */
			readonly ReleaseChannel: string;
			/** Đợt phát hành được áp dụng cho môi trường. */
			readonly ReleaseWaveName: string;
			/** Cho biết liệu tìm kiếm theo mức độ liên quan có được bật cho các môi trường như một phần của tìm kiếm theo mức độ liên quan của Dataverse ở hoạt động quét theo mặc định hay không */
			readonly RelevanceSearchEnabledByPlatform: string;
			/** Thiết đặt này chứa ngày sửa đổi lần gần nhất cho thiết đặt tìm kiếm theo mức độ liên quan xuất hiện dưới dạng nút chuyển đổi trong PPAC. */
			readonly RelevanceSearchModifiedOn_UtcDateAndTime: string;
			/** Dựng cờ để kết xuất nội dung email trong biểu mẫu web trong IFRAME, đặt thuộc tính security='restricted'. Đây là tính năng bảo mật thêm, nhưng có thể khiến hệ thống nhắc nhập thông tin đăng nhập. */
			readonly RenderSecureIFrameForEmail: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReportingGroupId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReportingGroupName: string;
			/** Danh sách chọn để chọn tùy chọn tổ chức khi báo cáo lỗi script. */
			readonly ReportScriptErrors: string;
			/** Cho biết khả năng bật quyền Gửi với tư cách là người dùng khác. */
			readonly RequireApprovalForQueueEmail: string;
			/** Cho biết khả năng bật quyền Gửi với tư cách là người dùng khác. */
			readonly RequireApprovalForUserEmail: string;
			/** Khi tự giải quyết giá trị khớp cho một địa chỉ, áp dụng cùng địa chỉ email cho tất cả các giá trị khớp chưa được giải quyết */
			readonly ResolveSimilarUnresolvedEmailAddress: string;
			/** Information that specifies whether guest user restriction is enabled */
			readonly RestrictGuestUserAccess: string;
			/** Dựng cờ hạn chế Cập nhật cho sự việc. */
			readonly RestrictStatusUpdate: string;
			/** Information that specifies Reverse Proxy IP addresses from which requests have to be allowed. */
			readonly ReverseProxyIpAddresses: string;
			/** Trạng thái lỗi trong khi cung cấp Relationship Insights. */
			readonly RiErrorStatus: string;
			/** Samesite mode for Session Cookie 0 is Default, 1 is None, 2 is Lax , 3 is Strict */
			readonly SameSiteModeForSessionCookie: string;
			/** Mã định danh duy nhất cho công việc nhập dữ liệu mẫu. */
			readonly SampleDataImportId: string;
			/** Tiền tố dùng cho thực thể và thuộc tính tùy chỉnh. */
			readonly SchemaNamePrefix: string;
			/** Cho biết liệu Gửi Email Hàng loạt trong UCI có được bật cho tổ chức không. */
			readonly SendBulkEmailInUCI: string;
			/** Cung cấp Nội dung Tĩnh từ CDN */
			readonly ServeStaticResourcesFromAzureCDN: string;
			/** Bật tính năng ghi phiên để ghi lại phiên của người dùng trong UCI */
			readonly SessionRecordingEnabled: string;
			/** Thông tin chỉ định có bật thời gian chờ của phiên hay không */
			readonly SessionTimeoutEnabled: string;
			/** Thời gian chờ của phiên tính theo phút */
			readonly SessionTimeoutInMins: string;
			/** Lời nhắc thời gian chờ của phiên tính theo phút */
			readonly SessionTimeoutReminderInMins: string;
			/** Cho biết loại triển khai SharePoint được đặt cấu hình cho Máy chủ tới Máy chủ. (Trực tuyến hoặc Tại chỗ) */
			readonly SharePointDeploymentType: string;
			/** Thông tin chỉ định khả năng chia sẻ với chủ sở hữu trước khi gán. */
			readonly ShareToPreviousOwnerOnAssign: string;
			/** Chọn khả năng hiển thị cho người dùng về thông báo không dùng bài viết trong KB. */
			readonly ShowKBArticleDeprecationNotification: string;
			/** Thông tin chỉ định khả năng hiển thị số tuần trong lịch hiển thị trong toàn Microsoft CRM. */
			readonly ShowWeekNumber: string;
			/** URL tải xuống CRM dành cho Outlook */
			readonly SignupOutlookDownloadFWLink: string;
			/** Chuỗi XML xác định cấu trúc điều hướng cho ứng dụng. */
			readonly SiteMapXml: string;
			/** Chứa giá trị trạng thái của trường hợp tạm giữ. */
			readonly SlaPauseStates: string;
			/** Cờ hiệu cho việc tổ chức có đang dùng Hiểu biết xã hội hay không. */
			readonly SocialInsightsEnabled: string;
			/** Mã định danh cho phiên bản Hiểu biết xã hội của tổ chức. */
			readonly SocialInsightsInstance: string;
			/** Dựng cờ về khả năng tổ chức chấp nhận điều khoản sử dụng cho Hiểu biết xã hội. */
			readonly SocialInsightsTermsAccepted: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SortId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SqlAccessGroupId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SqlAccessGroupName: string;
			/** Có bật thiết đặt cho thu thập dữ liệu SQM, 0 là không, 1 là có */
			readonly SQMEnabled: string;
			/** Mã định danh duy nhất của người dùng hỗ trợ cho tổ chức. */
			readonly SupportUserId: string;
			/** Cho biết khả năng chặn dùng SLA. */
			readonly SuppressSLA: string;
			/** Để trống để sử dụng tùy chọn thiết đặt mặc định. Đặt thành bật/tắt để bật/tắt email của Quản trị viên khi không xác thực được Trình kiểm tra giải pháp. */
			readonly SuppressValidationEmails: string;
			/** Số bản ghi cần cập nhật trên mỗi thao tác trong Tạm dừng/Tiếp tục/Hủy Đồng bộ Hàng loạt */
			readonly SyncBulkOperationBatchSize: string;
			/** Tổng số bản ghi tối đa cần cập nhật trong cơ sở dữ liệu cho Tạm dừng/Tiếp tục/Hủy Đồng bộ Hàng loạt */
			readonly SyncBulkOperationMaxLimit: string;
			/** Cho biết việc chọn dùng khuôn khổ Dynamics 365 azure sync hay đồng bộ hóa phía máy chủ. */
			readonly SyncOptInSelection: string;
			/** Cho biết trạng thái của hoạt động tham gia hay không tham gia đối với Dynamics 365 azure sync. */
			readonly SyncOptInSelectionStatus: string;
			/** Mã định danh duy nhất của người dùng hệ thống cho tổ chức. */
			readonly SystemUserId: string;
			/** Kiểm soát sự xuất hiện của tùy chọn để tìm kiếm trên một bảng được lập chỉ mục tìm kiếm trong DV đơn nhất trong tìm kiếm toàn cầu của ứng dụng dựa trên mô hình trong tiêu đề. */
			readonly TableScopedDVSearchInApps: string;
			/** Số lượng vòng bỏ phiếu linh hoạt tối đa được thực hiện cho ghi thẻ tự động email khi nhận email mới. */
			readonly TagMaxAggressiveCycles: string;
			/** Tần số bỏ phiếu thông thường, dùng khi ghi thẻ tự động lúc nhận email trong outlook. */
			readonly TagPollingPeriod: string;
			/** Chọn khả năng bật dòng tác vụ cho tổ chức. */
			readonly TaskBasedFlowEnabled: string;
			/** Thông tin cho biết chức năng Đồng bộ hóa dữ liệu cuộc trò chuyện Teams có được bật hay không. */
			readonly TeamsChatDataSync: string;
			/** Instrumentation key for Application Insights used to log plugins telemetry. */
			readonly TelemetryInstrumentationKey: string;
			/** Chọn khả năng bật phân tích văn bản cho tổ chức. */
			readonly TextAnalyticsEnabled: string;
			/** Thông tin chỉ định cách hiển thị thời gian trong toàn Microsoft CRM. */
			readonly TimeFormatCode: string;
			/** Văn bản về cách hiển thị thời gian trong Microsoft Dynamics 365. */
			readonly TimeFormatString: string;
			/** Văn bản về cách hiển thị dấu phân tách thời gian trong toàn Microsoft Dynamics 365. */
			readonly TimeSeparator: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Khoảng thời gian dùng cho hết hạn mã thông báo. */
			readonly TokenExpiry: string;
			/** Khóa của mã thông báo. */
			readonly TokenKey: string;
			/** Tuổi tối đa của bản ghi tracelog tính theo ngày */
			readonly TraceLogMaximumAgeInDays: string;
			/** Danh sách lịch sử theo dõi tiền tố của mã thông báo. */
			readonly TrackingPrefix: string;
			/** Số cơ sở dùng để cấp mã định danh mã thông báo theo dõi riêng cho người dùng thuộc về bản phát triển khác. */
			readonly TrackingTokenIdBase: string;
			/** Số lượng chữ số dùng để thể hiện mã định dạng mã thông báo theo dõi. */
			readonly TrackingTokenIdDigits: string;
			/** Số lượng ký tự nối vào mã số hóa đơn, báo giá và đơn hàng. */
			readonly UniqueSpecifierLength: string;
			/** Cho biết liệu có phải hủy phân giải địa chỉ email nếu tìm thấy nhiều giá trị khớp hay không */
			readonly UnresolveEmailAddressIfMultipleMatch: string;
			/** Cờ hiệu cho biết khả năng Dùng quy tắc ghép vào cho DefaultPricelist. */
			readonly UseInbuiltRuleForDefaultPricelistSelection: string;
			/** Chọn có sử dụng kết xuất mẫu cũ hay không. */
			readonly UseLegacyRendering: string;
			/** Dùng hệ thống cấp bậc vị trí */
			readonly UsePositionHierarchy: string;
			/** Cho biết liệu việc tìm kiếm trong lưới có nên sử dụng dạng xem Tìm nhanh cho thực thể hay không. */
			readonly UseQuickFindViewForGridSearch: string;
			/** Khoảng thời gian kiểm tra truy cập người dùng. */
			readonly UserAccessAuditingInterval: string;
			/** Cho biết khả năng bật biểu mẫu tối hóa dạng chỉ đọc cho tổ chức này. */
			readonly UseReadForm: string;
			/** Mã định danh duy nhất của nhóm mặc định cho người dùng trong tổ chức. */
			readonly UserGroupId: string;
			/** Bật tính năng đánh giá của người dùng để hiển thị điểm NSAT và nhận xét cho người tạo */
			readonly UserRatingEnabled: string;
			/** Cho biết giao thức mặc định đã chọn cho tổ chức. */
			readonly UseSkypeProtocol: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Hàm băm của tệp cấu hình gọi lệnh V3. */
			readonly V3CalloutConfigHash: string;
			/** Chế độ xác thực cho các ứng dụng trong môi trường này */
			readonly ValidationMode: string;
			/** Số phiên bản của tổ chức. */
			readonly VersionNumber: string;
			/** Giá trị hàm băm của tài nguyên web. */
			readonly WebResourceHash: string;
			/** Ngày đầu tiên của tuần chỉ định trong toàn Microsoft Dynamics 365. */
			readonly WeekStartDayCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly WidgetProperties: string;
			/** Biểu thị ID nhóm Yammer */
			readonly YammerGroupId: string;
			/** Biểu thị liên kết cố định của mạng Yammer */
			readonly YammerNetworkPermalink: string;
			/** Biểu thị khả năng hết hạn của mã thông báo truy cập OAuth cho mạng Yammer */
			readonly YammerOAuthAccessTokenExpired: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly YammerPostMethod: string;
			/** Thông tin chỉ định cách chỉ định tuần đầu tiên của năm trong Microsoft Dynamics 365. */
			readonly YearStartWeekCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace Organization {
		enum ApplicationBasedAccessControlMode {
			/** 2 */
			AuditMode,
			/** 0 */
			Disabled,
			/** 1 */
			Enabled,
			/** 3 */
			Enabled_for_roles
		}
		enum CurrencyDisplayOption {
			/** 0 */
			Ky_hieu_loai_tien,
			/** 1 */
			Ma_loai_tien
		}
		enum CurrencyFormatCode {
			/** 0 */
			_123_0,
			/** 1 */
			_123_1,
			/** 2 */
			_123_2,
			/** 3 */
			_123_3
		}
		enum DateFormatCode {
		}
		enum DefaultRecurrenceEndRangeType {
			/** 1 */
			Khong_co_Ngay_Ket_thuc,
			/** 3 */
			Ngay_ket_thuc,
			/** 2 */
			So_lan_Xay_ra
		}
		enum DesktopFlowRunActionLogsStatus {
			/** 0 */
			Da_bat,
			/** 2 */
			Da_tat,
			/** 1 */
			Neu_khong_thanh_cong
		}
		enum DesktopFlowRunActionLogVersion {
			/** 0 */
			AdditionalContext,
			/** 2 */
			AdditionalContextAndFlowLogs,
			/** 1 */
			FlowLogs
		}
		enum DiscountCalculationMethod {
			/** 0 */
			Hang_muc,
			/** 1 */
			Moi_don_vi
		}
		enum EmailConnectionChannel {
			/** 1 */
			Bo_dinh_tuyen_Email_Microsoft_Dynamics_365,
			/** 0 */
			Dong_bo_phia_May_chu
		}
		enum FiscalPeriodFormatPeriod {
			/** 3 */
			Ky_0,
			/** 6 */
			Ky_sau_thang_0,
			/** 2 */
			Q0,
			/** 1 */
			Quy_0,
			/** 7 */
			Ten_Thang,
			/** 4 */
			Thang_0_4,
			/** 5 */
			Thang_0_5
		}
		enum FiscalYearFormatPrefix {
			/** 1 */
			Nam_Tai_chinh
		}
		enum FiscalYearFormatSuffix {
			/** 1 */
			Nam_Tai_chinh_1,
			/** 2 */
			Nam_Tai_chinh_2
		}
		enum FiscalYearFormatYear {
			/** 3 */
			GGYY,
			/** 2 */
			YY,
			/** 1 */
			YYYY
		}
		enum FullNameConventionCode {
			/** 6 */
			Ho_dau_cach_Ten,
			/** 7 */
			Ho_khong_co_dau_cach_Ten,
			/** 0 */
			Ho_Ten,
			/** 4 */
			Ho_Ten_Ten_dem,
			/** 2 */
			Ho_Ten_Viet_tat_Ten_dem,
			/** 1 */
			Ten,
			/** 5 */
			Ten_Ten_dem_Ho,
			/** 3 */
			Ten_Viet_tat_Ten_dem_Ho
		}
		enum IpBasedStorageAccessSignatureMode {
			/** 2 */
			IP_Binding_and_IP_Firewall,
			/** 0 */
			IP_Binding_only,
			/** 3 */
			IP_Binding_or_IP_Firewall,
			/** 1 */
			IP_Firewall_only
		}
		enum ISVIntegrationCode {
			/** 0 */
			Khong,
			/** 6 */
			Outlook,
			/** 7 */
			Tat_ca,
			/** 4 */
			Ung_dung_khach_May_tinh_xach_tay_Outlook,
			/** 2 */
			Ung_dung_khach_May_tram_Outlook,
			/** 1 */
			Web,
			/** 5 */
			Web_Ung_dung_khach_May_tinh_xach_tay_Outlook,
			/** 3 */
			Web_Ung_dung_khach_May_tram_Outlook
		}
		enum LegacyAppToggle {
			/** 1 */
			Bat,
			/** 2 */
			Tat,
			/** 0 */
			Tu_dong
		}
		enum NegativeFormatCode {
			/** 4 */
			Dau_cach_cong_voi_Dau_gach_Duoi,
			/** 1 */
			Dau_gach,
			/** 2 */
			Dau_gach_cong_voi_Dau_cach,
			/** 3 */
			Dau_gach_Duoi,
			/** 0 */
			Dau_ngoac
		}
		enum OrganizationState {
			/** 2 */
			Dang_cap_nhat,
			/** 1 */
			Dang_nang_cap,
			/** 0 */
			Dang_tao,
			/** 3 */
			Hien_hoat
		}
		enum PluginTraceLogSetting {
			/** 1 */
			Ngoai_le,
			/** 0 */
			Tat,
			/** 2 */
			Tat_ca
		}
		enum ReleaseChannel {
			/** 3 */
			Kenh_ban_nien,
			/** 1 */
			Kenh_hang_thang,
			/** 2 */
			Kenh_noi_bo_cua_Microsoft,
			/** 0 */
			Tu_dong
		}
		enum ReportScriptErrors {
			/** 3 */
			Khong_bao_gio_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365,
			/** 0 */
			Khong_co_tuy_chon_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365,
			/** 2 */
			Tu_dong_gui_bao_cao_loi_den_Microsoft_ma_khong_xin_phep_toi,
			/** 1 */
			Xin_phep_toi_khi_gui_bao_cao_loi_den_Microsoft
		}
		enum SameSiteModeForSessionCookie {
			/** 0 */
			Default,
			/** 2 */
			Lax,
			/** 1 */
			None,
			/** 3 */
			Strict
		}
		enum SharePointDeploymentType {
			/** 1 */
			Tai_cho,
			/** 0 */
			Truc_tuyen
		}
		enum SyncOptInSelectionStatus {
			/** 2 */
			Da_qua,
			/** 1 */
			Dang_xu_ly,
			/** 3 */
			Khong_thanh_cong
		}
		enum TimeFormatCode {
		}
		enum ValidationMode {
			/** 1 */
			Canh_bao,
			/** 2 */
			Chan,
			/** 0 */
			Tat
		}
		enum WeekStartDayCode {
		}
		enum YammerPostMethod {
			/** 0 */
			Cong_khai,
			/** 1 */
			Rieng_tu
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