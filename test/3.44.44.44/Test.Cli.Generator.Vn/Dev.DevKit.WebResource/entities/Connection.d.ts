//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			Record1Id: DevKit.Controls.Lookup;
		}
		interface tab_details_Sections {
			connect_from: DevKit.Controls.Section;
			details: DevKit.Controls.Section;
		}
		interface tab_info_Sections {
			description: DevKit.Controls.Section;
			info_s: DevKit.Controls.Section;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_info extends DevKit.Controls.ITab {
			Section: tab_info_Sections;
		}
		interface Tabs {
			details: tab_details;
			info: tab_info;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thông tin bổ sung để mô tả kết nối, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
			Description: DevKit.Controls.String;
			/** Nhập ngày kết thúc của kết nối. */
			EffectiveEnd: DevKit.Controls.Date;
			/** Nhập ngày bắt đầu của kết nối. */
			EffectiveStart: DevKit.Controls.Date;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			Record1Id: DevKit.Controls.Lookup;
			/** Chọn vai trò hoặc mối quan hệ của bên chính với bên thứ hai. */
			Record1RoleId: DevKit.Controls.Lookup;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			Record2Id: DevKit.Controls.Lookup;
			/** Chọn vai trò hoặc mối quan hệ của bên phụ với bên chính. */
			Record2RoleId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Header section of form Thong_tin */
		Header: DevKit.FormThong_tin.Header;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class ConnectionApi {
		/**
		* DynamicsCrm.DevKit ConnectionApi
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
		/** Mã định danh duy nhất của kết nối. */
		ConnectionId: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung để mô tả kết nối, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
		Description: string;
		/** Nhập ngày kết thúc của kết nối. */
		EffectiveEnd_UtcDateOnly: Date;
		/** Nhập ngày bắt đầu của kết nối. */
		EffectiveStart_UtcDateOnly: Date;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết đây là bản ghi tổng thể. */
		readonly IsMaster: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của kết nối. */
		readonly Name: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu kết nối. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu kết nối. */
		readonly OwningUser: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_account: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_activitypointer: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_adx_invitation: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_adx_inviteredemption: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_appointment: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		profileruleid1: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_contact: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_email: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_fax: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_goal: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_knowledgearticle: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_knowledgebaserecord: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_letter: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_mspp_publishingstatetransitionrule: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_mspp_shortcut: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_mspp_website: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_phonecall: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_position: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_processsession: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_recurringappointmentmaster: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_socialactivity: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_socialprofile: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_systemuser: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_task: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_team: string;
		/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
		record1id_territory: string;
		/** Hiển thị loại bản ghi của bản ghi nguồn. */
		readonly Record1ObjectTypeCode: OptionSet.Connection.Record1ObjectTypeCode;
		/** Chọn vai trò hoặc mối quan hệ của bên chính với bên thứ hai. */
		Record1RoleId: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_account: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_activitypointer: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_adx_invitation: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_adx_inviteredemption: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_appointment: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		channelaccessprofileruleid: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_contact: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_email: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_fax: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_goal: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_knowledgearticle: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_knowledgebaserecord: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_letter: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_mspp_publishingstatetransitionrule: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_mspp_shortcut: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_mspp_website: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_phonecall: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_position: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_processsession: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_recurringappointmentmaster: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_socialactivity: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_socialprofile: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_systemuser: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_task: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_team: string;
		/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
		record2id_territory: string;
		/** Hiển thị loại bản ghi của bản ghi đích. */
		readonly Record2ObjectTypeCode: OptionSet.Connection.Record2ObjectTypeCode;
		/** Chọn vai trò hoặc mối quan hệ của bên phụ với bên chính. */
		Record2RoleId: string;
		/** Mã định danh duy nhất cho bản ghi kết nối nghịch đảo. */
		readonly RelatedConnectionId: string;
		/** Cho biết kết nối có đang hiện hoạt hay không. Các kết nối không hoạt động ở trạng thái chỉ đọc và không thể chỉnh sửa được trừ khi chúng được kích hoạt lại. */
		StateCode: OptionSet.Connection.StateCode;
		/** Lý do cho trạng thái của kết nối. */
		StatusCode: OptionSet.Connection.StatusCode;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Số phiên bản của kết nối. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của kết nối. */
			readonly ConnectionId: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung để mô tả kết nối, chẳng hạn như độ dài hoặc chất lượng của mối quan hệ. */
			readonly Description: string;
			/** Nhập ngày kết thúc của kết nối. */
			readonly EffectiveEnd_UtcDateOnly: string;
			/** Nhập ngày bắt đầu của kết nối. */
			readonly EffectiveStart_UtcDateOnly: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết đây là bản ghi tổng thể. */
			readonly IsMaster: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của kết nối. */
			readonly Name: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu kết nối. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu kết nối. */
			readonly OwningUser: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_account: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_activitypointer: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_adx_invitation: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_adx_inviteredemption: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_appointment: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly profileruleid1: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_contact: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_email: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_fax: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_goal: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_knowledgearticle: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_knowledgebaserecord: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_letter: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_mspp_publishingstatetransitionrule: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_mspp_shortcut: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_mspp_website: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_phonecall: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_position: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_processsession: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_recurringappointmentmaster: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_socialactivity: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_socialprofile: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_systemuser: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_task: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_team: string;
			/** Chọn tài khoản khách hàng, người liên hệ chính hoặc bản ghi khác tham gia vào kết nối. */
			readonly record1id_territory: string;
			/** Hiển thị loại bản ghi của bản ghi nguồn. */
			readonly Record1ObjectTypeCode: string;
			/** Chọn vai trò hoặc mối quan hệ của bên chính với bên thứ hai. */
			readonly Record1RoleId: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_account: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_activitypointer: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_adx_invitation: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_adx_inviteredemption: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_appointment: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly channelaccessprofileruleid: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_contact: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_email: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_fax: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_goal: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_knowledgearticle: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_knowledgebaserecord: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_letter: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_mspp_publishingstatetransitionrule: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_mspp_shortcut: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_mspp_website: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_phonecall: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_position: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_processsession: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_recurringappointmentmaster: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_socialactivity: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_socialprofile: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_systemuser: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_task: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_team: string;
			/** Chọn tài khoản khách hàng, người liên hệ phụ hoặc bản ghi khác tham gia vào kết nối. */
			readonly record2id_territory: string;
			/** Hiển thị loại bản ghi của bản ghi đích. */
			readonly Record2ObjectTypeCode: string;
			/** Chọn vai trò hoặc mối quan hệ của bên phụ với bên chính. */
			readonly Record2RoleId: string;
			/** Mã định danh duy nhất cho bản ghi kết nối nghịch đảo. */
			readonly RelatedConnectionId: string;
			/** Cho biết kết nối có đang hiện hoạt hay không. Các kết nối không hoạt động ở trạng thái chỉ đọc và không thể chỉnh sửa được trừ khi chúng được kích hoạt lại. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của kết nối. */
			readonly StatusCode: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Số phiên bản của kết nối. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Connection {
		enum Record1IdObjectTypeCode {
		}
		enum Record1ObjectTypeCode {
			/** 9953 */
			Bai_viet_trong_co_so_kien_thuc,
			/** 9930 */
			Ban_ghi_co_so_kien_thuc,
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
			/** 4710 */
			Giao_dich_quy_trinh,
			/** 99 */
			Ho_so_Mang_xa_hoi,
			/** 4200 */
			Hoat_dong,
			/** 4216 */
			Hoat_dong_mang_xa_hoi,
			/** 10309 */
			Loi_moi,
			/** 10331 */
			Loi_tat,
			/** 9600 */
			Muc_tieu,
			/** 8 */
			Nguoi_dung,
			/** 2 */
			Nguoi_lien_he,
			/** 4212 */
			Nhiem_vu,
			/** 9 */
			Nhom,
			/** 10310 */
			Quy_doi_Loi_moi,
			/** 9400 */
			Quy_tac_Cau_hinh_Truy_cap_Kenh,
			/** 10329 */
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh,
			/** 1 */
			Tai_khoan,
			/** 4207 */
			Thu_tin,
			/** 50 */
			Vi_tri,
			/** 2013 */
			Vung_lanh_tho,
			/** 10343 */
			Website
		}
		enum Record2IdObjectTypeCode {
		}
		enum Record2ObjectTypeCode {
			/** 9953 */
			Bai_viet_trong_co_so_kien_thuc,
			/** 9930 */
			Ban_ghi_co_so_kien_thuc,
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
			/** 4710 */
			Giao_dich_quy_trinh,
			/** 99 */
			Ho_so_Mang_xa_hoi,
			/** 4200 */
			Hoat_dong,
			/** 4216 */
			Hoat_dong_mang_xa_hoi,
			/** 10309 */
			Loi_moi,
			/** 10331 */
			Loi_tat,
			/** 9600 */
			Muc_tieu,
			/** 8 */
			Nguoi_dung,
			/** 2 */
			Nguoi_lien_he,
			/** 4212 */
			Nhiem_vu,
			/** 9 */
			Nhom,
			/** 10310 */
			Quy_doi_Loi_moi,
			/** 9400 */
			Quy_tac_Cau_hinh_Truy_cap_Kenh,
			/** 10329 */
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh,
			/** 1 */
			Tai_khoan,
			/** 4207 */
			Thu_tin,
			/** 50 */
			Vi_tri,
			/** 2013 */
			Vung_lanh_tho,
			/** 10343 */
			Website
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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