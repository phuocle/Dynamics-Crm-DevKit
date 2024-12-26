//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormNhiem_vu {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Cho biết nhiệm vụ đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các nhiệm vụ đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_TASK_TAB_Sections {
			Description: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			TASK: DevKit.Controls.Section;
			task_details: DevKit.Controls.Section;
		}
		interface tab_TASK_TAB extends DevKit.Controls.ITab {
			Section: tab_TASK_TAB_Sections;
		}
		interface Tabs {
			TASK_TAB: tab_TASK_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập số phút cần cho nhiệm vụ. Khoảng thời gian này được sử dụng trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập thông tin thêm để mô tả nhiệm vụ. */
			Description: DevKit.Controls.String;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của nhiệm vụ. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			Task_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormNhiem_vu extends DevKit.IForm {
		/**
		* Nhiệm vụ [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Nhiem_vu */
		Body: DevKit.FormNhiem_vu.Body;
		/** The Header section of form Nhiem_vu */
		Header: DevKit.FormNhiem_vu.Header;
		/** The Navigation of form Nhiem_vu */
		Navigation: DevKit.FormNhiem_vu.Navigation;
		/** The SidePanes of form Nhiem_vu */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNhiem_vu_Trai_nghiem_tuong_tac {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Cho biết nhiệm vụ đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các nhiệm vụ đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_4_Sections {
			tab_3_section_3: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập số phút cần cho nhiệm vụ. Khoảng thời gian này được sử dụng trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập thông tin thêm để mô tả nhiệm vụ. */
			Description: DevKit.Controls.String;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của nhiệm vụ. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			Task_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormNhiem_vu_Trai_nghiem_tuong_tac extends DevKit.IForm {
		/**
		* Nhiệm vụ Trải nghiệm tương tác [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Nhiem_vu_Trai_nghiem_tuong_tac */
		Body: DevKit.FormNhiem_vu_Trai_nghiem_tuong_tac.Body;
		/** The Header section of form Nhiem_vu_Trai_nghiem_tuong_tac */
		Header: DevKit.FormNhiem_vu_Trai_nghiem_tuong_tac.Header;
		/** The Navigation of form Nhiem_vu_Trai_nghiem_tuong_tac */
		Navigation: DevKit.FormNhiem_vu_Trai_nghiem_tuong_tac.Navigation;
		/** The SidePanes of form Nhiem_vu_Trai_nghiem_tuong_tac */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormBieu_mau_tao_nhanh_nhiem_vu {
		interface tab_createtask_Sections {
			task: DevKit.Controls.Section;
			task_2: DevKit.Controls.Section;
			task_3: DevKit.Controls.Section;
		}
		interface tab_createtask extends DevKit.Controls.ITab {
			Section: tab_createtask_Sections;
		}
		interface Tabs {
			createtask: tab_createtask;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập số phút cần cho nhiệm vụ. Khoảng thời gian này được sử dụng trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập thông tin thêm để mô tả nhiệm vụ. */
			Description: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của nhiệm vụ. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormBieu_mau_tao_nhanh_nhiem_vu extends DevKit.IForm {
		/**
		* Biểu mẫu tạo nhanh nhiệm vụ. [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bieu_mau_tao_nhanh_nhiem_vu */
		Body: DevKit.FormBieu_mau_tao_nhanh_nhiem_vu.Body;
	}
	class TaskApi {
		/**
		* DynamicsCrm.DevKit TaskApi
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
		/** Mã định danh duy nhất của nhiệm vụ. */
		ActivityId: string;
		/** Nhập số phút cần cho nhiệm vụ. Khoảng thời gian này được sử dụng trong báo cáo. */
		ActualDurationMinutes: number;
		/** Nhập thời gian và ngày kết thúc thực tế của nhiệm vụ. Theo mặc định, nó sẽ hiển thị khi bạn hoàn tất hoặc hủy hoạt động. */
		ActualEnd_UtcDateOnly: Date;
		/** Nhập thời gian và ngày bắt đầu thực tế cho nhiệm vụ. Theo mặc định, nó sẽ hiển thị khi bạn tạo nhiệm vụ. */
		ActualStart_UtcDateOnly: Date;
		/** Nhập một thể loại để xác định loại nhiệm vụ, chẳng hạn như tập hợp khách hàng tiềm năng hoặc theo dõi khách hàng, nhằm liên kết nhiệm vụ với chức năng hoặc nhóm kinh doanh. */
		Category: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Id duy nhất của nhiệm vụ được gán */
		CrmTaskAssignedUniqueId: string;
		/** Nhập thông tin thêm để mô tả nhiệm vụ. */
		Description: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin chỉ định khả năng nhiệm vụ có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Thông tin chỉ định khả năng có tạo nhiệm vụ từ quy tắc quy trình hay không. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
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
		/** Hiện bơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu nhiệm vụ. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu nhiệm vụ. */
		readonly OwningUser: string;
		/** Nhập giá trị hoàn chỉnh của tỉ lệ phần trăm cho nhiệm vụ để theo dõi các nhiệm vụ hoàn thành. */
		PercentComplete: number;
		/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
		PriorityCode: OptionSet.Task.PriorityCode;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_account_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_adx_invitation_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_contact_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_knowledgearticle_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_knowledgebaserecord_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_mspp_adplacement_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_mspp_pollplacement_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_mspp_publishingstatetransitionrule_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_mspp_redirect_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_mspp_shortcut_task: string;
		/** Chọn bản ghi liên quan đến nhiệm vụ. */
		regardingobjectid_mspp_website_task: string;
		/** Khoảng thời gian theo lịch của nhiệm vụ, tính bằng phút. */
		readonly ScheduledDurationMinutes: number;
		/** Nhập ngày và giờ hết hạn dự kiến. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Nhập ngày và giờ hết hạn dự kiến. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Nhiệm vụ. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho Nhiệm vụ này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Cho biết nhiệm vụ đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các nhiệm vụ đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
		StateCode: OptionSet.Task.StateCode;
		/** Chọn trạng thái của nhiệm vụ. */
		StatusCode: OptionSet.Task.StatusCode;
		/** Nhập thể loại phụ để xác định loại nhiệm vụ và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
		Subcategory: string;
		/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của nhiệm vụ. */
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
		/** Số phiên bản của nhiệm vụ. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ActivityAdditionalParams: string;
			/** Mã định danh duy nhất của nhiệm vụ. */
			readonly ActivityId: string;
			/** Nhập số phút cần cho nhiệm vụ. Khoảng thời gian này được sử dụng trong báo cáo. */
			readonly ActualDurationMinutes: string;
			/** Nhập thời gian và ngày kết thúc thực tế của nhiệm vụ. Theo mặc định, nó sẽ hiển thị khi bạn hoàn tất hoặc hủy hoạt động. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Nhập thời gian và ngày bắt đầu thực tế cho nhiệm vụ. Theo mặc định, nó sẽ hiển thị khi bạn tạo nhiệm vụ. */
			readonly ActualStart_UtcDateOnly: string;
			/** Nhập một thể loại để xác định loại nhiệm vụ, chẳng hạn như tập hợp khách hàng tiềm năng hoặc theo dõi khách hàng, nhằm liên kết nhiệm vụ với chức năng hoặc nhóm kinh doanh. */
			readonly Category: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Id duy nhất của nhiệm vụ được gán */
			readonly CrmTaskAssignedUniqueId: string;
			/** Nhập thông tin thêm để mô tả nhiệm vụ. */
			readonly Description: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin chỉ định khả năng nhiệm vụ có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Thông tin chỉ định khả năng có tạo nhiệm vụ từ quy tắc quy trình hay không. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
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
			/** Hiện bơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu nhiệm vụ. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu nhiệm vụ. */
			readonly OwningUser: string;
			/** Nhập giá trị hoàn chỉnh của tỉ lệ phần trăm cho nhiệm vụ để theo dõi các nhiệm vụ hoàn thành. */
			readonly PercentComplete: string;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			readonly PriorityCode: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_account_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_adx_invitation_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_contact_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_knowledgearticle_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_knowledgebaserecord_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_mspp_adplacement_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_mspp_pollplacement_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_mspp_redirect_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_mspp_shortcut_task: string;
			/** Chọn bản ghi liên quan đến nhiệm vụ. */
			readonly regardingobjectid_mspp_website_task: string;
			/** Khoảng thời gian theo lịch của nhiệm vụ, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Nhiệm vụ. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho Nhiệm vụ này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Cho biết nhiệm vụ đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các nhiệm vụ đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			readonly StateCode: string;
			/** Chọn trạng thái của nhiệm vụ. */
			readonly StatusCode: string;
			/** Nhập thể loại phụ để xác định loại nhiệm vụ và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
			readonly Subcategory: string;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của nhiệm vụ. */
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
			/** Số phiên bản của nhiệm vụ. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Task {
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
			Chua_bat_dau,
			/** 5 */
			Da_hoan_thanh,
			/** 6 */
			Da_huy,
			/** 4 */
			Dang_doi_ai_do,
			/** 3 */
			Dang_tien_hanh,
			/** 7 */
			Tra_sau
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