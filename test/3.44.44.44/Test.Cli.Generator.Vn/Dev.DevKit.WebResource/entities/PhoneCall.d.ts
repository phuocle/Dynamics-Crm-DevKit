//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCuoc_goi_dien_thoai {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Cho biết cuộc gọi điện thoại đang mở, đã hoàn thành hay đã hủy. Cuộc gọi điện thoại đã hoàn thành hoặc bị hủy sẽ ở trạng thái chỉ đọc và bạn không thể sửa chúng. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_phonecall_Sections {
			general_information: DevKit.Controls.Section;
			phone_call_description: DevKit.Controls.Section;
			phone_call_details: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_phonecall extends DevKit.Controls.ITab {
			Section: tab_phonecall_Sections;
		}
		interface Tabs {
			phonecall: tab_phonecall;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập số phút cần cho cuộc gọi điện thoại này. Hệ thống sẽ dùng khoảng thời gian này trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập thêm thông tin mô tả cuộc gọi điện thoại, như thông điệp chính hoặc sản phẩm và dịch vụ đã thảo luận. */
			Description: DevKit.Controls.String;
			/** Chọn hướng của cuộc gọi điện thoại là đến hoặc đi. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng hoặc người dùng đã gọi điện thoại. */
			from: DevKit.Controls.Lookup;
			/** Nhập số điện thoại. */
			PhoneNumber: DevKit.Controls.String;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc gọi điện thoại. */
			Subject: DevKit.Controls.String;
			/** Nhập người nhận cuộc gọi điện thoại của khách hàng, người liên hệ, khách hàng tiềm năng hoặc người dùng. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {
			PhoneCall_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormCuoc_goi_dien_thoai extends DevKit.IForm {
		/**
		* Cuộc gọi điện thoại [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Cuoc_goi_dien_thoai */
		Body: DevKit.FormCuoc_goi_dien_thoai.Body;
		/** The Header section of form Cuoc_goi_dien_thoai */
		Header: DevKit.FormCuoc_goi_dien_thoai.Header;
		/** The Navigation of form Cuoc_goi_dien_thoai */
		Navigation: DevKit.FormCuoc_goi_dien_thoai.Navigation;
		/** The SidePanes of form Cuoc_goi_dien_thoai */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Cho biết cuộc gọi điện thoại đang mở, đã hoàn thành hay đã hủy. Cuộc gọi điện thoại đã hoàn thành hoặc bị hủy sẽ ở trạng thái chỉ đọc và bạn không thể sửa chúng. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập số phút cần cho cuộc gọi điện thoại này. Hệ thống sẽ dùng khoảng thời gian này trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập thêm thông tin mô tả cuộc gọi điện thoại, như thông điệp chính hoặc sản phẩm và dịch vụ đã thảo luận. */
			Description: DevKit.Controls.String;
			/** Chọn hướng của cuộc gọi điện thoại là đến hoặc đi. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng hoặc người dùng đã gọi điện thoại. */
			from: DevKit.Controls.Lookup;
			/** Nhập số điện thoại. */
			PhoneNumber: DevKit.Controls.String;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc gọi điện thoại. */
			Subject: DevKit.Controls.String;
			/** Nhập người nhận cuộc gọi điện thoại của khách hàng, người liên hệ, khách hàng tiềm năng hoặc người dùng. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {
			PhoneCall_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormCuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac extends DevKit.IForm {
		/**
		* Cuộc gọi Điện thoại Trải nghiệm tương tác [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Cuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac */
		Body: DevKit.FormCuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac.Body;
		/** The Header section of form Cuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac */
		Header: DevKit.FormCuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac.Header;
		/** The Navigation of form Cuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac */
		Navigation: DevKit.FormCuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac.Navigation;
		/** The SidePanes of form Cuoc_goi_Dien_thoai_Trai_nghiem_tuong_tac */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormBieu_mau_tao_nhanh_cuoc_goi_dien_thoai {
		interface tab_PhoneCall_Tab_1_Sections {
			PhoneCall_Description: DevKit.Controls.Section;
			PhoneCall_Description_2: DevKit.Controls.Section;
			PhoneCall_Description_3: DevKit.Controls.Section;
		}
		interface tab_PhoneCall_Tab_1 extends DevKit.Controls.ITab {
			Section: tab_PhoneCall_Tab_1_Sections;
		}
		interface Tabs {
			PhoneCall_Tab_1: tab_PhoneCall_Tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập số phút cần cho cuộc gọi điện thoại này. Hệ thống sẽ dùng khoảng thời gian này trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập thêm thông tin mô tả cuộc gọi điện thoại, như thông điệp chính hoặc sản phẩm và dịch vụ đã thảo luận. */
			Description: DevKit.Controls.String;
			/** Chọn hướng của cuộc gọi điện thoại là đến hoặc đi. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng hoặc người dùng đã gọi điện thoại. */
			from: DevKit.Controls.Lookup;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Nhập số điện thoại. */
			PhoneNumber: DevKit.Controls.String;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc gọi điện thoại. */
			Subject: DevKit.Controls.String;
			/** Nhập người nhận cuộc gọi điện thoại của khách hàng, người liên hệ, khách hàng tiềm năng hoặc người dùng. */
			to: DevKit.Controls.Lookup;
		}
	}
	class FormBieu_mau_tao_nhanh_cuoc_goi_dien_thoai extends DevKit.IForm {
		/**
		* Biểu mẫu tạo nhanh cuộc gọi điện thoại. [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bieu_mau_tao_nhanh_cuoc_goi_dien_thoai */
		Body: DevKit.FormBieu_mau_tao_nhanh_cuoc_goi_dien_thoai.Body;
	}
	class PhoneCallApi {
		/**
		* DynamicsCrm.DevKit PhoneCallApi
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
		/** Mã định danh duy nhất của hoạt động cuộc gọi điện thoại. */
		ActivityId: string;
		/** Nhập số phút cần cho cuộc gọi điện thoại này. Hệ thống sẽ dùng khoảng thời gian này trong báo cáo. */
		ActualDurationMinutes: number;
		/** Nhập ngày và giờ kết thúc thực tế của cuộc gọi điện thoại. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động, nhưng bạn có thể sửa để thu thập khoảng thời gian thực tế của cuộc gọi điện thoại. */
		ActualEnd_UtcDateOnly: Date;
		/** Nhập ngày và giờ bắt đầu thực tế cho cuộc gọi điện thoại. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động, nhưng bạn có thể sửa để thu thập khoảng thời gian thực tế của cuộc gọi điện thoại. */
		ActualStart_UtcDateOnly: Date;
		/** Nhập một thể loại để xác định loại cuộc gọi điện thoại, như tập hợp khách hàng tiềm năng hoặc theo dõi khách hàng, để liên kết cuộc gọi điện thoại với phòng ban hoặc nhóm kinh doanh. */
		Category: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thêm thông tin mô tả cuộc gọi điện thoại, như thông điệp chính hoặc sản phẩm và dịch vụ đã thảo luận. */
		Description: string;
		/** Chọn hướng của cuộc gọi điện thoại là đến hoặc đi. */
		DirectionCode: boolean;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin chỉ định khả năng xuất hóa đơn cho hoạt động gọi điện thoại trong quy trình giải quyết trường hợp. */
		IsBilled: boolean;
		/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Thông tin chỉ định khả năng quy tắc quy trình làm việc tạo ra hoạt động gọi điện thoại. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Chọn khả năng để lại thư thoại cho một người. */
		LeftVoiceMail: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu hoạt động gọi điện thoại. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hoạt động gọi điện thoại. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu hoạt động gọi điện thoại. */
		readonly OwningUser: string;
		/** Nhập số điện thoại. */
		PhoneNumber: string;
		/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
		PriorityCode: OptionSet.PhoneCall.PriorityCode;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_account_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_adx_invitation_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_contact_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_knowledgearticle_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_knowledgebaserecord_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_mspp_adplacement_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_mspp_pollplacement_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_mspp_publishingstatetransitionrule_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_mspp_redirect_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_mspp_shortcut_phonecall: string;
		/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
		regardingobjectid_mspp_website_phonecall: string;
		/** Khoảng thời gian theo lịch của hoạt động gọi điện thoại, tính bằng phút. */
		readonly ScheduledDurationMinutes: number;
		/** Nhập ngày và giờ hết hạn dự kiến. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Nhập ngày và giờ hết hạn dự kiến. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Cuộc gọi Điện thoại. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho Cuộc gọi Điện thoại này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Cho biết cuộc gọi điện thoại đang mở, đã hoàn thành hay đã hủy. Cuộc gọi điện thoại đã hoàn thành hoặc bị hủy sẽ ở trạng thái chỉ đọc và bạn không thể sửa chúng. */
		StateCode: OptionSet.PhoneCall.StateCode;
		/** Chọn trạng thái của cuộc gọi điện thoại. */
		StatusCode: OptionSet.PhoneCall.StatusCode;
		/** Nhập thể loại con để xác định loại cuộc gọi điện thoại và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
		Subcategory: string;
		/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc gọi điện thoại. */
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
		/** Số phiên bản của hoạt động gọi điện thoại. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ActivityAdditionalParams: string;
			/** Mã định danh duy nhất của hoạt động cuộc gọi điện thoại. */
			readonly ActivityId: string;
			/** Nhập số phút cần cho cuộc gọi điện thoại này. Hệ thống sẽ dùng khoảng thời gian này trong báo cáo. */
			readonly ActualDurationMinutes: string;
			/** Nhập ngày và giờ kết thúc thực tế của cuộc gọi điện thoại. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động, nhưng bạn có thể sửa để thu thập khoảng thời gian thực tế của cuộc gọi điện thoại. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Nhập ngày và giờ bắt đầu thực tế cho cuộc gọi điện thoại. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động, nhưng bạn có thể sửa để thu thập khoảng thời gian thực tế của cuộc gọi điện thoại. */
			readonly ActualStart_UtcDateOnly: string;
			/** Nhập một thể loại để xác định loại cuộc gọi điện thoại, như tập hợp khách hàng tiềm năng hoặc theo dõi khách hàng, để liên kết cuộc gọi điện thoại với phòng ban hoặc nhóm kinh doanh. */
			readonly Category: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thêm thông tin mô tả cuộc gọi điện thoại, như thông điệp chính hoặc sản phẩm và dịch vụ đã thảo luận. */
			readonly Description: string;
			/** Chọn hướng của cuộc gọi điện thoại là đến hoặc đi. */
			readonly DirectionCode: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin chỉ định khả năng xuất hóa đơn cho hoạt động gọi điện thoại trong quy trình giải quyết trường hợp. */
			readonly IsBilled: string;
			/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Thông tin chỉ định khả năng quy tắc quy trình làm việc tạo ra hoạt động gọi điện thoại. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Chọn khả năng để lại thư thoại cho một người. */
			readonly LeftVoiceMail: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu hoạt động gọi điện thoại. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hoạt động gọi điện thoại. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu hoạt động gọi điện thoại. */
			readonly OwningUser: string;
			/** Nhập số điện thoại. */
			readonly PhoneNumber: string;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			readonly PriorityCode: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_account_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_adx_invitation_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_contact_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_knowledgearticle_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_knowledgebaserecord_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_mspp_adplacement_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_mspp_pollplacement_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_mspp_redirect_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_mspp_shortcut_phonecall: string;
			/** Chọn bản ghi liên quan đến cuộc gọi điện thoại. */
			readonly regardingobjectid_mspp_website_phonecall: string;
			/** Khoảng thời gian theo lịch của hoạt động gọi điện thoại, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Cuộc gọi Điện thoại. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho Cuộc gọi Điện thoại này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Cho biết cuộc gọi điện thoại đang mở, đã hoàn thành hay đã hủy. Cuộc gọi điện thoại đã hoàn thành hoặc bị hủy sẽ ở trạng thái chỉ đọc và bạn không thể sửa chúng. */
			readonly StateCode: string;
			/** Chọn trạng thái của cuộc gọi điện thoại. */
			readonly StatusCode: string;
			/** Nhập thể loại con để xác định loại cuộc gọi điện thoại và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
			readonly Subcategory: string;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của cuộc gọi điện thoại. */
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
			/** Số phiên bản của hoạt động gọi điện thoại. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PhoneCall {
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
			/** 0 */
			Mo
		}
		enum StatusCode {
			/** 2 */
			Da_goi,
			/** 3 */
			Da_huy,
			/** 4 */
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