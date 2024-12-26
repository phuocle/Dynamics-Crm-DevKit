//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormHang_doi {
		interface tab_general_Sections {
			incoming_email: DevKit.Controls.Section;
			queue_information: DevKit.Controls.Section;
			QueueItems: DevKit.Controls.Section;
			QueueMembers: DevKit.Controls.Section;
			QueueMembersNoRecord: DevKit.Controls.Section;
			RecordCreationAndUpdateRule: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn hộp thư liên kết với hàng đợi này. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Mô tả hàng đợi. */
			Description: DevKit.Controls.String;
			/** Địa chỉ email có liên kết với hàng đợi này. */
			EMailAddress: DevKit.Controls.String;
			/** Chuyển đổi email đến thành hoạt động */
			IncomingEmailFilteringMethod: DevKit.Controls.OptionSet;
			/** Tên của hàng đợi. */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu hàng đợi. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn xem hàng đợi ở chế độ công khai hay riêng tư. Tất cả mọi người đều có thể xem hàng đợi công khai. Chỉ các thành viên được thêm vào hàng đợi mới có thể xem hàng đợi riêng tư. */
			QueueViewType: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			convertrule_queue: DevKit.Controls.NavigationItem,
			email_acceptingentity_queue: DevKit.Controls.NavigationItem,
			mailbox_regarding_queue: DevKit.Controls.NavigationItem,
			queue_convertruleitem: DevKit.Controls.NavigationItem,
			Queue_Email_EmailSender: DevKit.Controls.NavigationItem,
			queue_entries: DevKit.Controls.NavigationItem
		}
		interface Grid {
			QueueItemsGrid: DevKit.Controls.Grid;
			queuemembersgrid: DevKit.Controls.Grid;
			RecordCreationAndUpdateRuleGrid: DevKit.Controls.Grid;
		}
	}
	class FormHang_doi extends DevKit.IForm {
		/**
		* Hàng đợi [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Hang_doi */
		Body: DevKit.FormHang_doi.Body;
		/** The Navigation of form Hang_doi */
		Navigation: DevKit.FormHang_doi.Navigation;
		/** The Grid of form Hang_doi */
		Grid: DevKit.FormHang_doi.Grid;
		/** The SidePanes of form Hang_doi */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormThong_tin {
		interface tab_general_Sections {
			email_configuration: DevKit.Controls.Section;
			incoming_email: DevKit.Controls.Section;
			queue_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn hộp thư liên kết với hàng đợi này. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Mô tả hàng đợi. */
			Description: DevKit.Controls.String;
			/** Địa chỉ email có liên kết với hàng đợi này. */
			EMailAddress: DevKit.Controls.String;
			/** Chuyển đổi email đến thành hoạt động */
			IncomingEmailFilteringMethod: DevKit.Controls.OptionSet;
			/** Tên của hàng đợi. */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu hàng đợi. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			convertrule_queue: DevKit.Controls.NavigationItem,
			email_acceptingentity_queue: DevKit.Controls.NavigationItem,
			mailbox_regarding_queue: DevKit.Controls.NavigationItem,
			queue_convertruleitem: DevKit.Controls.NavigationItem,
			Queue_Email_EmailSender: DevKit.Controls.NavigationItem,
			queue_entries: DevKit.Controls.NavigationItem
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
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class QueueApi {
		/**
		* DynamicsCrm.DevKit QueueApi
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
		/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.AllowEmailConnectorToUseCredentials. */
		readonly AllowEmailCredentials: boolean;
		/** Mã định danh duy nhất của bơn vị kinh doanh có liên kết với hàng đợi. */
		BusinessUnitId: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi hàng đợi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo hàng đợi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo hàng đợi. */
		readonly CreatedOnBehalfBy: string;
		/** Chọn hộp thư liên kết với hàng đợi này. */
		readonly DefaultMailbox: string;
		/** Mô tả hàng đợi. */
		Description: string;
		/** Địa chỉ email có liên kết với hàng đợi này. */
		EMailAddress: string;
		/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.Password. */
		readonly EmailPassword: string;
		/** Cho biết trạng thái của địa chỉ email chính. */
		EmailRouterAccessApproval: OptionSet.Queue.EmailRouterAccessApproval;
		/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.UserName. */
		readonly EmailUsername: string;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Tỷ giá của loại tiền liên kết với hàng đợi theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Thông tin xác định khả năng hàng đợi định bỏ qua thư không mong muốn (không còn dùng). */
		IgnoreUnsolicitedEmail: boolean;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Phương thức chuyển giao email đến cho hàng đợi. */
		IncomingEmailDeliveryMethod: OptionSet.Queue.IncomingEmailDeliveryMethod;
		/** Chuyển đổi email đến thành hoạt động */
		IncomingEmailFilteringMethod: OptionSet.Queue.IncomingEmailFilteringMethod;
		/** Cho biết trạng thái phê duyệt về địa chỉ email của Quản trị viên O365. */
		readonly IsEmailAddressApprovedByO365Admin: boolean;
		/** Chỉ định hàng đợi có phải là hàng đợi chuyển giao fax hay không. */
		readonly IsFaxQueue: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi hàng đợi lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi hàng đợi lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa hàng đợi lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của hàng đợi. */
		Name: string;
		/** Số lượng Mục trong hàng đợi đã liên kết với hàng đợi. */
		readonly NumberOfItems: number;
		/** Số lượng thành viên đã liên kết với hàng đợi. */
		readonly NumberOfMembers: number;
		/** Mã định danh duy nhất của tổ chức có liên kết với hàng đợi. */
		readonly OrganizationId: string;
		/** Phương thức chuyển giao email đi cho hàng đợi. */
		OutgoingEmailDeliveryMethod: OptionSet.Queue.OutgoingEmailDeliveryMethod;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu hàng đợi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu hàng đợi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu hàng đợi. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của chủ sở hữu hàng đợi. */
		PrimaryUserId: string;
		/** Mã định danh duy nhất của hàng đợi. */
		QueueId: string;
		/** Loại hàng đợi được tự động gán khi tạo người dùng hay hàng đợi. Loại này có thể là công khai, riêng tư hoặc đang thực hiện. */
		readonly QueueTypeCode: OptionSet.Queue.QueueTypeCode;
		/** Chọn xem hàng đợi ở chế độ công khai hay riêng tư. Tất cả mọi người đều có thể xem hàng đợi công khai. Chỉ các thành viên được thêm vào hàng đợi mới có thể xem hàng đợi riêng tư. */
		QueueViewType: OptionSet.Queue.QueueViewType;
		/** Trạng thái của hàng đợi. */
		StateCode: OptionSet.Queue.StateCode;
		/** Lý do cho trạng thái của hàng đợi. */
		StatusCode: OptionSet.Queue.StatusCode;
		/** Mã định danh duy nhất của loại tiền liên kết với hàng đợi. */
		TransactionCurrencyId: string;
		/** Số phiên bản của hàng đợi. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.AllowEmailConnectorToUseCredentials. */
			readonly AllowEmailCredentials: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh có liên kết với hàng đợi. */
			readonly BusinessUnitId: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi hàng đợi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo hàng đợi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo hàng đợi. */
			readonly CreatedOnBehalfBy: string;
			/** Chọn hộp thư liên kết với hàng đợi này. */
			readonly DefaultMailbox: string;
			/** Mô tả hàng đợi. */
			readonly Description: string;
			/** Địa chỉ email có liên kết với hàng đợi này. */
			readonly EMailAddress: string;
			/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.Password. */
			readonly EmailPassword: string;
			/** Cho biết trạng thái của địa chỉ email chính. */
			readonly EmailRouterAccessApproval: string;
			/** Hệ thống không còn dùng thuộc tính này. Dữ liệu giờ nằm trong thuộc tính Mailbox.UserName. */
			readonly EmailUsername: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Tỷ giá của loại tiền liên kết với hàng đợi theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Thông tin xác định khả năng hàng đợi định bỏ qua thư không mong muốn (không còn dùng). */
			readonly IgnoreUnsolicitedEmail: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phương thức chuyển giao email đến cho hàng đợi. */
			readonly IncomingEmailDeliveryMethod: string;
			/** Chuyển đổi email đến thành hoạt động */
			readonly IncomingEmailFilteringMethod: string;
			/** Cho biết trạng thái phê duyệt về địa chỉ email của Quản trị viên O365. */
			readonly IsEmailAddressApprovedByO365Admin: string;
			/** Chỉ định hàng đợi có phải là hàng đợi chuyển giao fax hay không. */
			readonly IsFaxQueue: string;
			/** Mã định danh duy nhất của người dùng sửa đổi hàng đợi lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi hàng đợi lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa hàng đợi lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của hàng đợi. */
			readonly Name: string;
			/** Số lượng Mục trong hàng đợi đã liên kết với hàng đợi. */
			readonly NumberOfItems: string;
			/** Số lượng thành viên đã liên kết với hàng đợi. */
			readonly NumberOfMembers: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với hàng đợi. */
			readonly OrganizationId: string;
			/** Phương thức chuyển giao email đi cho hàng đợi. */
			readonly OutgoingEmailDeliveryMethod: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu hàng đợi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu hàng đợi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu hàng đợi. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của chủ sở hữu hàng đợi. */
			readonly PrimaryUserId: string;
			/** Mã định danh duy nhất của hàng đợi. */
			readonly QueueId: string;
			/** Loại hàng đợi được tự động gán khi tạo người dùng hay hàng đợi. Loại này có thể là công khai, riêng tư hoặc đang thực hiện. */
			readonly QueueTypeCode: string;
			/** Chọn xem hàng đợi ở chế độ công khai hay riêng tư. Tất cả mọi người đều có thể xem hàng đợi công khai. Chỉ các thành viên được thêm vào hàng đợi mới có thể xem hàng đợi riêng tư. */
			readonly QueueViewType: string;
			/** Trạng thái của hàng đợi. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của hàng đợi. */
			readonly StatusCode: string;
			/** Mã định danh duy nhất của loại tiền liên kết với hàng đợi. */
			readonly TransactionCurrencyId: string;
			/** Số phiên bản của hàng đợi. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Queue {
		enum EmailRouterAccessApproval {
			/** 3 */
			Bi_tu_choi,
			/** 1 */
			Da_phe_chuan,
			/** 2 */
			Dang_cho_Phe_duyet,
			/** 0 */
			Trong
		}
		enum IncomingEmailDeliveryMethod {
			/** 2 */
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email,
			/** 3 */
			Hop_thu_chuyen_tiep,
			/** 0 */
			Khong
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
		enum OutgoingEmailDeliveryMethod {
			/** 2 */
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email,
			/** 0 */
			Khong
		}
		enum QueueTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum QueueViewType {
			/** 0 */
			Cong_khai,
			/** 1 */
			Rieng_tu
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