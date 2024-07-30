//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThu_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Cho biết thư tín đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các thư tín đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
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
			/** Nhập số phút cần để tạo và gửi thư tín. Lượng thời gian này được sử dụng trong báo cáo. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Nhập địa chỉ đầy đủ của người nhận thư tín để đảm bảo gửi đến kịp thời. */
			Address: DevKit.Controls.String;
			/** Nhập nội dung thư tín hoặc thông tin bổ sung để mô tả thư tín, chẳng hạn như thông điệp chính hoặc sản phẩm và dịch vụ được mô tả. */
			Description: DevKit.Controls.String;
			/** Chọn hướng của thư tín là đến hoặc đi. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng hoặc người dùng đã gửi thư tín. */
			from: DevKit.Controls.Lookup;
			/** Chọn bản ghi liên quan đến thư tín. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của thư tín. */
			Subject: DevKit.Controls.String;
			/** Nhập khách hàng, người liên hệ, khách hàng tiềm năng hoặc người dùng nhận thư tín. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormThu_tin extends DevKit.IForm {
		/**
		* Thư tín [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thu_tin */
		Body: DevKit.FormThu_tin.Body;
		/** The Header section of form Thu_tin */
		Header: DevKit.FormThu_tin.Header;
		/** The Navigation of form Thu_tin */
		Navigation: DevKit.FormThu_tin.Navigation;
		/** The SidePanes of form Thu_tin */
		SidePanes: DevKit.SidePanes;
	}
	class LetterApi {
		/**
		* DynamicsCrm.DevKit LetterApi
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
		/** Mã định danh duy nhất của hoạt động thư tín. */
		ActivityId: string;
		/** Nhập số phút cần để tạo và gửi thư tín. Lượng thời gian này được sử dụng trong báo cáo. */
		ActualDurationMinutes: number;
		/** Nhập ngày và giờ kết thúc thư tín thực tế. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động, nhưng có thể chỉnh sửa được để thu thập thời gian tạo và gửi thư tín thực tế.  */
		ActualEnd_UtcDateOnly: Date;
		/** Nhập ngày và giờ bắt đầu thực tế cho thư tín. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động, nhưng có thể chỉnh sửa được để thu thập thời gian tạo và gửi thư tín thực tế. */
		ActualStart_UtcDateOnly: Date;
		/** Nhập địa chỉ đầy đủ của người nhận thư tín để đảm bảo gửi đến kịp thời. */
		Address: string;
		/** Nhập một thể loại để xác định loại thư tín, chẳng hạn như chào bán hoặc thông báo quá hạn, nhằm liên kết thư tín với chức năng hoặc nhóm kinh doanh. */
		Category: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập nội dung thư tín hoặc thông tin bổ sung để mô tả thư tín, chẳng hạn như thông điệp chính hoặc sản phẩm và dịch vụ được mô tả. */
		Description: string;
		/** Chọn hướng của thư tín là đến hoặc đi. */
		DirectionCode: boolean;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết hoạt động thư tín có được xuất hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Cho biết hoạt động là loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Cho biết hoạt động thư tín có được tạo bởi quy tắc quy trình hay không. */
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
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động thư tín. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hoạt động thư tín. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu hoạt động thư tín. */
		readonly OwningUser: string;
		/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
		PriorityCode: OptionSet.Letter.PriorityCode;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_account_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_adx_invitation_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_contact_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_knowledgearticle_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_knowledgebaserecord_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_mspp_adplacement_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_mspp_pollplacement_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_mspp_publishingstatetransitionrule_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_mspp_redirect_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_mspp_shortcut_letter: string;
		/** Chọn bản ghi liên quan đến thư tín. */
		regardingobjectid_mspp_website_letter: string;
		/** Lượng thời gian theo lịch của hoạt động thư tín, tính bằng phút. */
		readonly ScheduledDurationMinutes: number;
		/** Nhập ngày và giờ hết hạn dự kiến. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Nhập ngày và giờ hết hạn dự kiến. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Thư tín. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho Thư này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Cho biết thư tín đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các thư tín đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
		StateCode: OptionSet.Letter.StateCode;
		/** Chọn trạng thái của thư tín. */
		StatusCode: OptionSet.Letter.StatusCode;
		/** Nhập thể loại phụ để xác định loại thư tín và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
		Subcategory: string;
		/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của thư tín. */
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
		/** Số phiên bản của thư tín. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của hoạt động thư tín. */
			readonly ActivityId: string;
			/** Nhập số phút cần để tạo và gửi thư tín. Lượng thời gian này được sử dụng trong báo cáo. */
			readonly ActualDurationMinutes: string;
			/** Nhập ngày và giờ kết thúc thư tín thực tế. Theo mặc định, trường này hiển thị ngày và giờ hoàn thành hoặc hủy hoạt động, nhưng có thể chỉnh sửa được để thu thập thời gian tạo và gửi thư tín thực tế.  */
			readonly ActualEnd_UtcDateOnly: string;
			/** Nhập ngày và giờ bắt đầu thực tế cho thư tín. Theo mặc định, trường này hiển thị ngày và giờ tạo hoạt động, nhưng có thể chỉnh sửa được để thu thập thời gian tạo và gửi thư tín thực tế. */
			readonly ActualStart_UtcDateOnly: string;
			/** Nhập địa chỉ đầy đủ của người nhận thư tín để đảm bảo gửi đến kịp thời. */
			readonly Address: string;
			/** Nhập một thể loại để xác định loại thư tín, chẳng hạn như chào bán hoặc thông báo quá hạn, nhằm liên kết thư tín với chức năng hoặc nhóm kinh doanh. */
			readonly Category: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập nội dung thư tín hoặc thông tin bổ sung để mô tả thư tín, chẳng hạn như thông điệp chính hoặc sản phẩm và dịch vụ được mô tả. */
			readonly Description: string;
			/** Chọn hướng của thư tín là đến hoặc đi. */
			readonly DirectionCode: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết hoạt động thư tín có được xuất hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Cho biết hoạt động là loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Cho biết hoạt động thư tín có được tạo bởi quy tắc quy trình hay không. */
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
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động thư tín. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hoạt động thư tín. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu hoạt động thư tín. */
			readonly OwningUser: string;
			/** Chọn mức ưu tiên sao cho khách hàng được ưu tiên hoặc những vấn đề nghiêm trọng sẽ được xử lý nhanh chóng. */
			readonly PriorityCode: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_account_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_adx_invitation_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_contact_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_knowledgearticle_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_knowledgebaserecord_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_mspp_adplacement_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_mspp_pollplacement_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_mspp_redirect_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_mspp_shortcut_letter: string;
			/** Chọn bản ghi liên quan đến thư tín. */
			readonly regardingobjectid_mspp_website_letter: string;
			/** Lượng thời gian theo lịch của hoạt động thư tín, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Nhập ngày và giờ hết hạn dự kiến. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Thư tín. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho Thư này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Cho biết thư tín đang ở trạng thái mở, đã hoàn thành hay bị hủy. Các thư tín đã hoàn thành hoặc bị hủy ở trạng thái chỉ đọc và không chỉnh sửa được. */
			readonly StateCode: string;
			/** Chọn trạng thái của thư tín. */
			readonly StatusCode: string;
			/** Nhập thể loại phụ để xác định loại thư tín và liên kết hoạt động với sản phẩm cụ thể, khu vực bán hàng, nhóm kinh doanh hoặc chức năng khác. */
			readonly Subcategory: string;
			/** Nhập mô tả ngắn về mục tiêu hoặc chủ đề chính của thư tín. */
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
			/** Số phiên bản của thư tín. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Letter {
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
			Ban_nhap,
			/** 4 */
			Da_gui,
			/** 5 */
			Da_huy,
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