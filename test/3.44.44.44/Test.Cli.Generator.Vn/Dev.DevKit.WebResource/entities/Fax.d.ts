//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormFax {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Cho biết hoạt động fax đang mở, đã hoàn thành hay bị hủy. Hoạt động fax đã hoàn thành và bị hủy ở trạng thái chỉ đọc và không thể chỉnh sửa được. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			general_information: DevKit.Controls.Section;
			Letter_description: DevKit.Controls.Section;
			Letter_details: DevKit.Controls.Section;
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
			/** Nhập số phút cần để tạo và gửi bản fax. Khoảng thời gian này được sử dụng trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập thông tin bổ sung mô tả bản fax, chẳng hạn như thông điệp chính hoặc sản phẩm và dịch vụ được mô tả. */
			Description: DevKit.Controls.String;
			/** Chọn hướng của bản fax là đến hoặc đi. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Nhập số fax của người nhận. */
			FaxNumber: DevKit.Controls.String;
			/** Nhập tài khoản, người liên hệ, khách hàng tiềm năng, hàng hoặc người dùng đã gửi fax. */
			from: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến bản fax. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của hoạt động fax. */
			Subject: DevKit.Controls.String;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng, hàng hoặc người dùng nhận bản fax. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormFax extends DevKit.IForm {
		/**
		* Fax [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Fax */
		Body: DevKit.FormFax.Body;
		/** The Header section of form Fax */
		Header: DevKit.FormFax.Header;
		/** The Navigation of form Fax */
		Navigation: DevKit.FormFax.Navigation;
		/** The SidePanes of form Fax */
		SidePanes: DevKit.SidePanes;
	}
	class FaxApi {
		/**
		* DynamicsCrm.DevKit FaxApi
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
		/** Mã định danh duy nhất của hoạt động fax. */
		ActivityId: string;
		/** Nhập số phút cần để tạo và gửi bản fax. Khoảng thời gian này được sử dụng trong báo cáo. */
		ActualDurationMinutes: number;
		/** Nhập ngày và giờ kết thúc thực tế của bản fax. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động nhưng có thể chỉnh sửa trường này để thu thập thời gian tạo và gửi bản fax thực tế. */
		ActualEnd_UtcDateOnly: Date;
		/** Nhập ngày và giờ bắt đầu thực tế cho bản fax. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động nhưng có thể chỉnh sửa trường này để thu thập thời gian tạo và gửi bản fax thực tế. */
		ActualStart_UtcDateOnly: Date;
		/** Nhập mã thanh toán cho bản fax để đảm bảo bản fax được tính phí cho người gửi hoặc tài khoản khách hàng chính xác. */
		BillingCode: string;
		/** Nhập một thể loại để xác định loại fax, chẳng hạn như chào bán hoặc thông cáo báo chí, nhằm liên kết bản fax với chức năng hoặc nhóm kinh doanh. */
		Category: string;
		/** Nhập tên của trang bìa sẽ sử dụng khi gửi bản fax. */
		CoverPageName: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung mô tả bản fax, chẳng hạn như thông điệp chính hoặc sản phẩm và dịch vụ được mô tả. */
		Description: string;
		/** Chọn hướng của bản fax là đến hoặc đi. */
		DirectionCode: boolean;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Nhập số fax của người nhận. */
		FaxNumber: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin về việc hoạt động fax có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Cho biết hoạt động fax có được tạo bởi quy tắc quy trình hay không. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập số lượng trang được bao gồm trong bản fax. */
		NumberOfPages: number;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động fax. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hoạt động fax. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu hoạt động fax. */
		readonly OwningUser: string;
		/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
		PriorityCode: OptionSet.Fax.PriorityCode;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_account_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_adx_invitation_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_contact_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_knowledgearticle_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_knowledgebaserecord_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_mspp_adplacement_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_mspp_pollplacement_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_mspp_publishingstatetransitionrule_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_mspp_redirect_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_mspp_shortcut_fax: string;
		/** Chọn bản ghi liên quan đến bản fax. */
		regardingobjectid_mspp_website_fax: string;
		/** Cho biết khoảng thời gian dự kiến của hoạt động fax, tính bằng phút. */
		readonly ScheduledDurationMinutes: number;
		/** Nhập ngày và giờ hết hạn dự kiến. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Nhập ngày và giờ hết hạn dự kiến. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi fax. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho bản fax này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Cho biết hoạt động fax đang mở, đã hoàn thành hay bị hủy. Hoạt động fax đã hoàn thành và bị hủy ở trạng thái chỉ đọc và không thể chỉnh sửa được. */
		StateCode: OptionSet.Fax.StateCode;
		/** Chọn trạng thái của hoạt động fax. */
		StatusCode: OptionSet.Fax.StatusCode;
		/** Nhập thể loại phụ để xác định loại fax nhằm liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
		Subcategory: string;
		/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của hoạt động fax. */
		Subject: string;
		/** Chỉ sử dụng nội bộ. */
		SubscriptionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Nhập ID Người đăng ký Truyền (TSID) được liên kết với tác vụ gửi. ID này thường là tổ hợp số fax hoặc số điện thoại và tên công ty của người nhận. */
		Tsid: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của bản fax. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của hoạt động fax. */
			readonly ActivityId: string;
			/** Nhập số phút cần để tạo và gửi bản fax. Khoảng thời gian này được sử dụng trong báo cáo. */
			readonly ActualDurationMinutes: string;
			/** Nhập ngày và giờ kết thúc thực tế của bản fax. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động nhưng có thể chỉnh sửa trường này để thu thập thời gian tạo và gửi bản fax thực tế. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Nhập ngày và giờ bắt đầu thực tế cho bản fax. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động nhưng có thể chỉnh sửa trường này để thu thập thời gian tạo và gửi bản fax thực tế. */
			readonly ActualStart_UtcDateOnly: string;
			/** Nhập mã thanh toán cho bản fax để đảm bảo bản fax được tính phí cho người gửi hoặc tài khoản khách hàng chính xác. */
			readonly BillingCode: string;
			/** Nhập một thể loại để xác định loại fax, chẳng hạn như chào bán hoặc thông cáo báo chí, nhằm liên kết bản fax với chức năng hoặc nhóm kinh doanh. */
			readonly Category: string;
			/** Nhập tên của trang bìa sẽ sử dụng khi gửi bản fax. */
			readonly CoverPageName: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung mô tả bản fax, chẳng hạn như thông điệp chính hoặc sản phẩm và dịch vụ được mô tả. */
			readonly Description: string;
			/** Chọn hướng của bản fax là đến hoặc đi. */
			readonly DirectionCode: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Nhập số fax của người nhận. */
			readonly FaxNumber: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin về việc hoạt động fax có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Cho biết hoạt động fax có được tạo bởi quy tắc quy trình hay không. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập số lượng trang được bao gồm trong bản fax. */
			readonly NumberOfPages: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động fax. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hoạt động fax. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu hoạt động fax. */
			readonly OwningUser: string;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			readonly PriorityCode: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_account_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_adx_invitation_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_contact_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_knowledgearticle_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_knowledgebaserecord_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_mspp_adplacement_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_mspp_pollplacement_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_mspp_redirect_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_mspp_shortcut_fax: string;
			/** Chọn bản ghi liên quan đến bản fax. */
			readonly regardingobjectid_mspp_website_fax: string;
			/** Cho biết khoảng thời gian dự kiến của hoạt động fax, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi fax. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho bản fax này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Cho biết hoạt động fax đang mở, đã hoàn thành hay bị hủy. Hoạt động fax đã hoàn thành và bị hủy ở trạng thái chỉ đọc và không thể chỉnh sửa được. */
			readonly StateCode: string;
			/** Chọn trạng thái của hoạt động fax. */
			readonly StatusCode: string;
			/** Nhập thể loại phụ để xác định loại fax nhằm liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
			readonly Subcategory: string;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của hoạt động fax. */
			readonly Subject: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SubscriptionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Nhập ID Người đăng ký Truyền (TSID) được liên kết với tác vụ gửi. ID này thường là tổ hợp số fax hoặc số điện thoại và tên công ty của người nhận. */
			readonly Tsid: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của bản fax. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Fax {
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
			/** 3 */
			Da_gui,
			/** 2 */
			Da_hoan_thanh,
			/** 5 */
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