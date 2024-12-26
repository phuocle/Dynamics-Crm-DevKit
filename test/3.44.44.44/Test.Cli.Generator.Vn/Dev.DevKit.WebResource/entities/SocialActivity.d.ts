//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormHoat_dong_mang_xa_hoi {
		interface Header extends DevKit.Controls.IHeader {
			/** Cho biết cách khởi nguồn liên hệ về hoạt động xã hội, chẳng hạn như Twitter hoặc Facebook. Trường này ở trạng thái chỉ đọc. */
			Community: DevKit.Controls.OptionSet;
			/** Hiện mức ưu tiên sao cho hệ thống xử lý nhanh khách hàng ưu tiên hay vấn đề nghiêm trọng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Giá trị được suy ra sau khi đánh giá các từ thường được liên kết với các thông tin cảm tính mang nghĩa tích cực, trung tính hoặc tiêu cực xuất hiện trong bài đăng thuộc mạng xã hội. Thông tin cảm tính cũng có thể được báo cáo dưới dạng giá trị số. */
			SentimentValue: DevKit.Controls.Double;
			/** Hiện khả năng hoạt động mạng xã hội là đã hoàn thành, không thành công hay đang xử lý. Trường này có trạng thái chỉ đọc. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Ngày và giờ tạo hoạt động. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Hiện thông tin về nội dung của bài đăng trên mạng xã hội. Trường này ở trạng thái chỉ đọc. */
			Description: DevKit.Controls.String;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu hoạt động. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chỉ sử dụng nội bộ. */
			PostedOn: DevKit.Controls.DateTime;
			/** Hiện tác giả của bài đăng trên kênh xã hội tương ứng. */
			PostFromProfileId: DevKit.Controls.Lookup;
			/** Cho biết bài đăng trên mạng xã hội bắt đầu từ thông báo riêng tư hay công khai. */
			PostMessageType: DevKit.Controls.OptionSet;
			/** Hiện người nhận của bài đăng trên mạng xã hội. */
			PostToProfileId: DevKit.Controls.String;
			/** Hiện URL của bài đăng. */
			PostURL: DevKit.Controls.String;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Chủ đề liên kết với hoạt động. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormHoat_dong_mang_xa_hoi extends DevKit.IForm {
		/**
		* Hoạt động mạng xã hội [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Hoat_dong_mang_xa_hoi */
		Body: DevKit.FormHoat_dong_mang_xa_hoi.Body;
		/** The Header section of form Hoat_dong_mang_xa_hoi */
		Header: DevKit.FormHoat_dong_mang_xa_hoi.Header;
		/** The Navigation of form Hoat_dong_mang_xa_hoi */
		Navigation: DevKit.FormHoat_dong_mang_xa_hoi.Navigation;
		/** The SidePanes of form Hoat_dong_mang_xa_hoi */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormHoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac {
		interface Header extends DevKit.Controls.IHeader {
			/** Cho biết cách khởi nguồn liên hệ về hoạt động xã hội, chẳng hạn như Twitter hoặc Facebook. Trường này ở trạng thái chỉ đọc. */
			Community: DevKit.Controls.OptionSet;
			/** Hiện mức ưu tiên sao cho hệ thống xử lý nhanh khách hàng ưu tiên hay vấn đề nghiêm trọng. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Giá trị được suy ra sau khi đánh giá các từ thường được liên kết với các thông tin cảm tính mang nghĩa tích cực, trung tính hoặc tiêu cực xuất hiện trong bài đăng thuộc mạng xã hội. Thông tin cảm tính cũng có thể được báo cáo dưới dạng giá trị số. */
			SentimentValue: DevKit.Controls.Double;
			/** Hiện khả năng hoàn thành của hoạt động mạng xã hội. Trường này có trạng thái chỉ đọc. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_2_Sections {
			Description: DevKit.Controls.Section;
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Hiện thông tin về nội dung của bài đăng trên mạng xã hội. Trường này ở trạng thái chỉ đọc. */
			Description: DevKit.Controls.String;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu hoạt động. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chỉ sử dụng nội bộ. */
			PostedOn: DevKit.Controls.DateTime;
			/** Chỉ sử dụng nội bộ. */
			PostedOn1: DevKit.Controls.DateTime;
			/** Hiện tác giả của bài đăng trên kênh xã hội tương ứng. */
			PostFromProfileId: DevKit.Controls.Lookup;
			/** Cho biết bài đăng trên mạng xã hội bắt đầu từ thông báo riêng tư hay công khai. */
			PostMessageType: DevKit.Controls.OptionSet;
			/** Hiện người nhận của bài đăng trên mạng xã hội. */
			PostToProfileId: DevKit.Controls.String;
			/** Hiện URL của bài đăng. */
			PostURL: DevKit.Controls.String;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Chủ đề liên kết với hoạt động. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormHoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac extends DevKit.IForm {
		/**
		* Hoạt động thuộc Mạng xã hội cho Trải nghiệm tương tác [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Hoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac */
		Body: DevKit.FormHoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac.Body;
		/** The Header section of form Hoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac */
		Header: DevKit.FormHoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac.Header;
		/** The Navigation of form Hoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac */
		Navigation: DevKit.FormHoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac.Navigation;
		/** The SidePanes of form Hoat_dong_thuoc_Mang_xa_hoi_cho_Trai_nghiem_tuong_tac */
		SidePanes: DevKit.SidePanes;
	}
	class SocialActivityApi {
		/**
		* DynamicsCrm.DevKit SocialActivityApi
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
		/** Mã định danh duy nhất của hoạt động. */
		ActivityId: string;
		/** Khoảng thời gian thực tế của hoạt động tính bằng phút. */
		ActualDurationMinutes: number;
		/** Thời gian kết thúc thực tế của hoạt động. */
		ActualEnd_UtcDateAndTime: Date;
		/** Thời gian bắt đầu thực tế của hoạt động. */
		ActualStart_UtcDateAndTime: Date;
		/** Cho biết cách khởi nguồn liên hệ về hoạt động xã hội, chẳng hạn như Twitter hoặc Facebook. Trường này ở trạng thái chỉ đọc. */
		Community: OptionSet.SocialActivity.Community;
		/** Mã định danh duy nhất của người dùng đã tạo hoạt động. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo hoạt động. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Hiện thông tin về nội dung của bài đăng trên mạng xã hội. Trường này ở trạng thái chỉ đọc. */
		Description: string;
		/** Chọn hướng của bài đăng là đến hoặc đi. */
		DirectionCode: boolean;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất dành cho phản hồi của bài đăng. Chỉ sử dụng nội bộ. */
		InResponseTo: string;
		/** Thông tin về việc hoạt động có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
		IsBilled: boolean;
		/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
		readonly IsRegularActivity: boolean;
		/** Thông tin về việc hoạt động có được tạo từ quy tắc quy trình làm việc hay không. */
		IsWorkflowCreated: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hoạt động. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu Hoạt động. */
		readonly OwningUser: string;
		/** Hiện người liên hệ hoặc khách hàng đã tạo bài đăng. */
		postauthor_account: string;
		/** Hiện người liên hệ hoặc khách hàng đã tạo bài đăng. */
		postauthor_contact: string;
		/** Hiện tài khoản mẹ của tác giả bài đăng. */
		postauthoraccount_account: string;
		/** Hiện tài khoản mẹ của tác giả bài đăng. */
		postauthoraccount_contact: string;
		/** Chỉ sử dụng nội bộ. */
		PostedOn_UtcDateAndTime: Date;
		/** Hiện tác giả của bài đăng trên kênh xã hội tương ứng. */
		PostFromProfileId: string;
		/** Mã định danh duy nhất của bài đăng. Chỉ sử dụng nội bộ. */
		PostId: string;
		/** Cho biết bài đăng trên mạng xã hội bắt đầu từ thông báo riêng tư hay công khai. */
		PostMessageType: OptionSet.SocialActivity.PostMessageType;
		/** Hiện người nhận của bài đăng trên mạng xã hội. */
		PostToProfileId: string;
		/** Hiện URL của bài đăng. */
		PostURL: string;
		/** Hiện mức ưu tiên sao cho hệ thống xử lý nhanh khách hàng ưu tiên hay vấn đề nghiêm trọng. */
		PriorityCode: OptionSet.SocialActivity.PriorityCode;
		/** Mã định danh duy nhất của Quy trình. */
		ProcessId: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_account_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_adx_invitation_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_asyncoperation: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_contact_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_knowledgearticle_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_knowledgebaserecord_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_mspp_adplacement_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_mspp_pollplacement_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_mspp_publishingstatetransitionrule_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_mspp_redirect_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_mspp_shortcut_socialactivity: string;
		/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
		regardingobjectid_mspp_website_socialactivity: string;
		/** Khoảng thời gian theo lịch của hoạt động, tính bằng phút. */
		ScheduledDurationMinutes: number;
		/** Thời gian kết thúc theo lịch của hoạt động. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Thời gian bắt đầu theo lịch của hoạt động. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Giá trị được suy ra sau khi đánh giá các từ thường được liên kết với các thông tin cảm tính mang nghĩa tích cực, trung tính hoặc tiêu cực xuất hiện trong bài đăng thuộc mạng xã hội. Thông tin cảm tính cũng có thể được báo cáo dưới dạng giá trị số. */
		SentimentValue: number;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Hoạt động thuộc Mạng xã hội. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho Hoạt động thuộc Mạng xã hội này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Chỉ sử dụng nội bộ. */
		SocialAdditionalParams: string;
		/** Hiển thị ngày và giờ sắp xếp hoạt động. */
		SortDate_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của Giai đoạn. */
		StageId: string;
		/** Hiện khả năng hoàn thành của hoạt động mạng xã hội. Trường này có trạng thái chỉ đọc. */
		StateCode: OptionSet.SocialActivity.StateCode;
		/** Hiện khả năng hoạt động mạng xã hội là đã hoàn thành, không thành công hay đang xử lý. Trường này có trạng thái chỉ đọc. */
		StatusCode: OptionSet.SocialActivity.StatusCode;
		/** Chủ đề liên kết với hoạt động. */
		Subject: string;
		/** Mã định danh duy nhất của cuộc trao đổi trên mạng xã hội. Chỉ sử dụng nội bộ. */
		ThreadId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của hoạt động thuộc mạng xã hội. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ActivityAdditionalParams: string;
			/** Mã định danh duy nhất của hoạt động. */
			readonly ActivityId: string;
			/** Khoảng thời gian thực tế của hoạt động tính bằng phút. */
			readonly ActualDurationMinutes: string;
			/** Thời gian kết thúc thực tế của hoạt động. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Thời gian bắt đầu thực tế của hoạt động. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Cho biết cách khởi nguồn liên hệ về hoạt động xã hội, chẳng hạn như Twitter hoặc Facebook. Trường này ở trạng thái chỉ đọc. */
			readonly Community: string;
			/** Mã định danh duy nhất của người dùng đã tạo hoạt động. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo hoạt động. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo activitypointer. */
			readonly CreatedOnBehalfBy: string;
			/** Hiện thông tin về nội dung của bài đăng trên mạng xã hội. Trường này ở trạng thái chỉ đọc. */
			readonly Description: string;
			/** Chọn hướng của bài đăng là đến hoặc đi. */
			readonly DirectionCode: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất dành cho phản hồi của bài đăng. Chỉ sử dụng nội bộ. */
			readonly InResponseTo: string;
			/** Thông tin về việc hoạt động có được lập hóa đơn như một phần trong việc giải quyết trường hợp hay không. */
			readonly IsBilled: string;
			/** Thông tin về việc hoạt động có loại hoạt động thông thường hay loại sự kiện. */
			readonly IsRegularActivity: string;
			/** Thông tin về việc hoạt động có được tạo từ quy tắc quy trình làm việc hay không. */
			readonly IsWorkflowCreated: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu hoạt động. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hoạt động. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu Hoạt động. */
			readonly OwningUser: string;
			/** Hiện người liên hệ hoặc khách hàng đã tạo bài đăng. */
			readonly postauthor_account: string;
			/** Hiện người liên hệ hoặc khách hàng đã tạo bài đăng. */
			readonly postauthor_contact: string;
			/** Hiện tài khoản mẹ của tác giả bài đăng. */
			readonly postauthoraccount_account: string;
			/** Hiện tài khoản mẹ của tác giả bài đăng. */
			readonly postauthoraccount_contact: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PostedOn_UtcDateAndTime: string;
			/** Hiện tác giả của bài đăng trên kênh xã hội tương ứng. */
			readonly PostFromProfileId: string;
			/** Mã định danh duy nhất của bài đăng. Chỉ sử dụng nội bộ. */
			readonly PostId: string;
			/** Cho biết bài đăng trên mạng xã hội bắt đầu từ thông báo riêng tư hay công khai. */
			readonly PostMessageType: string;
			/** Hiện người nhận của bài đăng trên mạng xã hội. */
			readonly PostToProfileId: string;
			/** Hiện URL của bài đăng. */
			readonly PostURL: string;
			/** Hiện mức ưu tiên sao cho hệ thống xử lý nhanh khách hàng ưu tiên hay vấn đề nghiêm trọng. */
			readonly PriorityCode: string;
			/** Mã định danh duy nhất của Quy trình. */
			readonly ProcessId: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_account_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_adx_invitation_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_asyncoperation: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_contact_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_knowledgearticle_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_knowledgebaserecord_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_mspp_adplacement_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_mspp_pollplacement_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_mspp_redirect_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_mspp_shortcut_socialactivity: string;
			/** Hiện bản ghi liên quan đến hoạt động mạng xã hội. */
			readonly regardingobjectid_mspp_website_socialactivity: string;
			/** Khoảng thời gian theo lịch của hoạt động, tính bằng phút. */
			readonly ScheduledDurationMinutes: string;
			/** Thời gian kết thúc theo lịch của hoạt động. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Thời gian bắt đầu theo lịch của hoạt động. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Giá trị được suy ra sau khi đánh giá các từ thường được liên kết với các thông tin cảm tính mang nghĩa tích cực, trung tính hoặc tiêu cực xuất hiện trong bài đăng thuộc mạng xã hội. Thông tin cảm tính cũng có thể được báo cáo dưới dạng giá trị số. */
			readonly SentimentValue: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Hoạt động thuộc Mạng xã hội. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho Hoạt động thuộc Mạng xã hội này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SocialAdditionalParams: string;
			/** Hiển thị ngày và giờ sắp xếp hoạt động. */
			readonly SortDate_UtcDateAndTime: string;
			/** Mã định danh duy nhất của Giai đoạn. */
			readonly StageId: string;
			/** Hiện khả năng hoàn thành của hoạt động mạng xã hội. Trường này có trạng thái chỉ đọc. */
			readonly StateCode: string;
			/** Hiện khả năng hoạt động mạng xã hội là đã hoàn thành, không thành công hay đang xử lý. Trường này có trạng thái chỉ đọc. */
			readonly StatusCode: string;
			/** Chủ đề liên kết với hoạt động. */
			readonly Subject: string;
			/** Mã định danh duy nhất của cuộc trao đổi trên mạng xã hội. Chỉ sử dụng nội bộ. */
			readonly ThreadId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của hoạt động thuộc mạng xã hội. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SocialActivity {
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
		enum Community {
			/** 1 */
			Facebook,
			/** 0 */
			Khac,
			/** 2 */
			Twitter
		}
		enum PostAuthorAccountType {
		}
		enum PostAuthorType {
		}
		enum PostMessageType {
			/** 0 */
			Thong_bao_Cong_khai,
			/** 1 */
			Thong_bao_Rieng_tu
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
			/** 1 */
			Da_hoan_thanh,
			/** 5 */
			Da_huy,
			/** 3 */
			Dang_xu_ly,
			/** 2 */
			Khong_thanh_cong,
			/** 4 */
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