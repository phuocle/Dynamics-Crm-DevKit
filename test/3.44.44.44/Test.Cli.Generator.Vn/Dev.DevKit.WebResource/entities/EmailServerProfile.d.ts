//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_tab_3_Sections {
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_1: DevKit.Controls.Section;
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_2: DevKit.Controls.Section;
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thông tin bổ sung mô tả cấu hình máy chủ email. */
			Description: DevKit.Controls.String;
			/** Tên Loại Máy chủ Email */
			EmailServerTypeName: DevKit.Controls.String;
			/** Nhập ID đối tượng thuê của Exchange Online. */
			ExchangeOnlineTenantId: DevKit.Controls.String;
			/** Chọn giao thức xác thực email đến được sử dụng để kết nối với máy chủ email. */
			IncomingAuthenticationProtocol: DevKit.Controls.OptionSet;
			/** Chọn cách truy xuất thông tin đăng nhập của email đến. */
			IncomingCredentialRetrieval: DevKit.Controls.OptionSet;
			/** Nhập mật khẩu cho email đến. */
			IncomingPassword: DevKit.Controls.String;
			/** Nhấp số cổng Exchange cho thư đến. */
			IncomingPortNumber: DevKit.Controls.Integer;
			/** Nhập vị trí máy chủ cho email đến. */
			IncomingServerLocation: DevKit.Controls.String;
			/** Chọn liệu có truy cập hộp thư dưới hình thức mạo danh để xử lý các email đến không. */
			IncomingUseImpersonation: DevKit.Controls.Boolean;
			/** Nhập tên người dùng cho email đến. */
			IncomingUserName: DevKit.Controls.String;
			/** Chọn liệu có sử dụng giao thức Tầng Khe Bảo mật (giao thức SSL) cho email đến hay không. */
			IncomingUseSSL: DevKit.Controls.Boolean;
			/** Số lượng kết nối đồng thời tối đa được phép tới máy chủ email cho mỗi người dùng được xác thực. */
			MaxConcurrentConnections: DevKit.Controls.Integer;
			/** Khoảng thời gian kiểm soát vòng tối thiểu, tính theo phút, cho các hộp thư được liên kết với cấu hình máy chủ email này. */
			MinPollingIntervalInMinutes: DevKit.Controls.Integer;
			/** Cho biết liệu có di chuyển các email đến không gửi được tới thư mục Không gửi được trong Microsoft Exchange hay không. */
			MoveUndeliveredEmails: DevKit.Controls.Boolean;
			/** Nhập một tên có nghĩa cho cấu hình máy chủ email. Tên này được hiển thị khi bạn cần chọn một cấu hình máy chủ email. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Id máy khách được dùng cho sơ đồ xác thực OAuth */
			OauthClientId: DevKit.Controls.String;
			/** Mã bí mật máy khách được dùng cho sơ đồ xác thực OAuth */
			OauthClientSecret: DevKit.Controls.String;
			/** Chọn giao thức xác thực email đi được sử dụng để kết nối với máy chủ email. */
			OutgoingAuthenticationProtocol: DevKit.Controls.OptionSet;
			/** Chọn cách truy xuất thông tin đăng nhập cho email đi. */
			OutgoingCredentialRetrieval: DevKit.Controls.OptionSet;
			/** Nhập mật khẩu cho email đi. */
			OutgoingPassword: DevKit.Controls.String;
			/** Nhấp số cổng Exchange cho thư đi. */
			OutgoingPortNumber: DevKit.Controls.Integer;
			/** Nhập vị trí máy chủ cho email đi. */
			OutgoingServerLocation: DevKit.Controls.String;
			/** Chọn liệu có truy cập hộp thư dưới hình thức mạo danh để xử lý các email đi không. */
			OutgoingUseImpersonation: DevKit.Controls.Boolean;
			/** Nhập tên người dùng cho email đi. */
			OutgoingUsername: DevKit.Controls.String;
			/** Chọn liệu có sử dụng giao thức Tầng Khe Bảo mật (giao thức SSL) cho email đi hay không. */
			OutgoingUseSSL: DevKit.Controls.Boolean;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Hiển thị ngày và giờ mà sau đó email nhận được sẽ được xử lý cho các hộp thư được liên kết với cấu hình máy chủ email. */
			ProcessEmailsReceivedAfter: DevKit.Controls.DateTime;
			/** Chọn xem có gửi cảnh báo qua email nếu hơn 50% hộp thư trong cấu hình máy chủ email này không thể đồng bộ hóa trong khoảng thời gian một giờ được không. */
			SendEmailAlert: DevKit.Controls.Boolean;
			/** Chọn loại máy chủ email của cấu hình. */
			ServerType: DevKit.Controls.OptionSet;
			/** Chọn xem đã hết thời gian chờ một hộp thư đơn lẻ chưa. */
			TimeoutMailboxConnection: DevKit.Controls.Boolean;
			/** Nhập số mili giây hết thời gian chờ một hộp thư đơn lẻ. Giới hạn trên là 100 giây. */
			TimeoutMailboxConnectionAfterAmount: DevKit.Controls.Integer;
			/** Chọn liệu có tự động phát hiện vị trí máy chủ hay không */
			UseAutoDiscover: DevKit.Controls.Boolean;
			/** Chọn có sử dụng ID Đối tượng thuê của Exchange Online có được khi chạy các lệnh ghép ngắn Microsoft Azure PowerShell (rất khuyến nghị) không. Nếu chọn Không, bạn có thể chỉnh sửa thủ công trường này */
			UseDefaultTenantId: DevKit.Controls.Boolean;
			/** Chọn liệu có sử dụng cùng một cài đặt cho các kết nối đến và đi hay không. */
			UseSameSettingsForOutgoingConnections: DevKit.Controls.Boolean;
		}
		interface Navigation {
			emailserverprofile_mailbox: DevKit.Controls.NavigationItem,
			tracelog_EmailServerProfile: DevKit.Controls.NavigationItem
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
	class EmailServerProfileApi {
		/**
		* DynamicsCrm.DevKit EmailServerProfileApi
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
		/** ID nguồn lực Microsoft Entra được dùng cho sơ đồ xác thực OAuth */
		AadResourceId: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập vị trí mặc định của máy chủ. */
		DefaultServerLocation: string;
		/** Nhập thông tin bổ sung mô tả cấu hình máy chủ email. */
		Description: string;
		/** Mã định danh duy nhất của cấu hình máy chủ email. */
		EmailServerProfileId: string;
		/** Tên Loại Máy chủ Email */
		readonly EmailServerTypeName: string;
		/** Cho biết trang mã để sử dụng khi mã hóa nội dung email. */
		EncodingCodePage: string;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Nhập ID đối tượng thuê của Exchange Online. */
		ExchangeOnlineTenantId: string;
		/** Chọn phiên bản Exchange trên máy chủ email. */
		ExchangeVersion: OptionSet.EmailServerProfile.ExchangeVersion;
		/** Chọn giao thức xác thực email đến được sử dụng để kết nối với máy chủ email. */
		IncomingAuthenticationProtocol: OptionSet.EmailServerProfile.IncomingAuthenticationProtocol;
		/** Chọn cách truy xuất thông tin đăng nhập của email đến. */
		IncomingCredentialRetrieval: OptionSet.EmailServerProfile.IncomingCredentialRetrieval;
		/** Cho biết ứng dụng đối tác của email đến. */
		readonly IncomingPartnerApplication: string;
		/** Nhập mật khẩu cho email đến. */
		IncomingPassword: string;
		/** Nhấp số cổng Exchange cho thư đến. */
		IncomingPortNumber: number;
		/** Nhập vị trí máy chủ cho email đến. */
		IncomingServerLocation: string;
		/** Chọn liệu có truy cập hộp thư dưới hình thức mạo danh để xử lý các email đến không. */
		IncomingUseImpersonation: boolean;
		/** Nhập tên người dùng cho email đến. */
		IncomingUserName: string;
		/** Chọn liệu có sử dụng giao thức Tầng Khe Bảo mật (giao thức SSL) cho email đến hay không. */
		IncomingUseSSL: boolean;
		readonly IsIncomingPasswordSet: boolean;
		readonly IsOauthClientSecretSet: boolean;
		readonly IsOutgoingPasswordSet: boolean;
		/** ID tham chiếu cho Azure Key Vault */
		keyvaultreferenceid: string;
		/** Hiển thị trạng thái ủy quyền kiểm tra lần cuối của cấu hình máy chủ email */
		LastAuthorizationStatus: OptionSet.EmailServerProfile.LastAuthorizationStatus;
		/** Hiển thị Thông báo Dynamics 365 nhận được trong quá trình Kiểm tra Lần cuối */
		LastCrmMessage: string;
		/** Hiển thị trạng thái Thực thi kiểm tra lần cuối của cấu hình máy chủ email */
		LastTestExecutionStatus: OptionSet.EmailServerProfile.LastTestExecutionStatus;
		/** Hiển thị Yêu cầu EWS được tạo trong quá trình Kiểm tra Lần cuối */
		LastTestRequest: string;
		/** Hiển thị Phản hồi EWS nhận được trong quá trình Kiểm tra Lần cuối */
		LastTestResponse: string;
		/** Hiển thị ngày và giờ Bắt đầu Kiểm tra Lần cuối */
		LastTestStartTime_UtcDateAndTime: Date;
		/** Hiển thị Thời gian đã bỏ ra trong khi chạy kiểm tra lần cuối */
		LastTestTotalExecutionTime: number;
		/** Hiển thị trạng thái Xác thực kiểm tra lần cuối của cấu hình máy chủ email */
		LastTestValidationStatus: OptionSet.EmailServerProfile.LastTestValidationStatus;
		/** ID danh tính được quản lý */
		managedidentityid: string;
		/** Số lượng kết nối đồng thời tối đa được phép tới máy chủ email cho mỗi người dùng được xác thực. */
		MaxConcurrentConnections: number;
		/** Khoảng thời gian kiểm soát vòng tối thiểu, tính theo phút, cho các hộp thư được liên kết với cấu hình máy chủ email này. */
		MinPollingIntervalInMinutes: number;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Cho biết liệu có di chuyển các email đến không gửi được tới thư mục Không gửi được trong Microsoft Exchange hay không. */
		MoveUndeliveredEmails: boolean;
		/** Nhập một tên có nghĩa cho cấu hình máy chủ email. Tên này được hiển thị khi bạn cần chọn một cấu hình máy chủ email. */
		Name: string;
		/** Id máy khách được dùng cho sơ đồ xác thực OAuth */
		OauthClientId: string;
		/** Mã bí mật máy khách được dùng cho sơ đồ xác thực OAuth */
		OauthClientSecret: string;
		/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
		readonly OrganizationId: string;
		/** Chọn giao thức xác thực email đi được sử dụng để kết nối với máy chủ email. */
		OutgoingAuthenticationProtocol: OptionSet.EmailServerProfile.OutgoingAuthenticationProtocol;
		/** Cho biết liệu bộ liên kết email có cấp quyền truy cập đại diện cho người dùng đang truy cập khi được yêu cầu trong lúc xử lý email đi hay không. */
		OutgoingAutoGrantDelegateAccess: boolean;
		/** Chọn cách truy xuất thông tin đăng nhập cho email đi. */
		OutgoingCredentialRetrieval: OptionSet.EmailServerProfile.OutgoingCredentialRetrieval;
		/** Cho biết ứng dụng đối tác của email đi. */
		readonly OutgoingPartnerApplication: string;
		/** Nhập mật khẩu cho email đi. */
		OutgoingPassword: string;
		/** Nhấp số cổng Exchange cho thư đi. */
		OutgoingPortNumber: number;
		/** Nhập vị trí máy chủ cho email đi. */
		OutgoingServerLocation: string;
		/** Chọn liệu có truy cập hộp thư dưới hình thức mạo danh để xử lý các email đi không. */
		OutgoingUseImpersonation: boolean;
		/** Nhập tên người dùng cho email đi. */
		OutgoingUsername: string;
		/** Chọn liệu có sử dụng giao thức Tầng Khe Bảo mật (giao thức SSL) cho email đi hay không. */
		OutgoingUseSSL: boolean;
		/** Địa chỉ email của chủ sở hữu cấu hình máy chủ email */
		OwnerEmailAddress: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Chọn đơn vị kinh doanh sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Hiển thị ngày và giờ mà sau đó email nhận được sẽ được xử lý cho các hộp thư được liên kết với cấu hình máy chủ email. */
		ProcessEmailsReceivedAfter_UtcDateAndTime: Date;
		/** Chọn xem có gửi cảnh báo qua email nếu hơn 50% hộp thư trong cấu hình máy chủ email này không thể đồng bộ hóa trong khoảng thời gian một giờ được không. */
		SendEmailAlert: boolean;
		/** Chọn quyền cho máy chủ email. */
		ServerAuthority: OptionSet.EmailServerProfile.ServerAuthority;
		/** Chọn loại máy chủ email của cấu hình. */
		ServerType: OptionSet.EmailServerProfile.ServerType;
		/** Cho biết cấu hình máy chủ email hiện hoạt hay không hoạt động. */
		StateCode: OptionSet.EmailServerProfile.StateCode;
		/** Chọn trạng thái của cấu hình máy chủ email. */
		StatusCode: OptionSet.EmailServerProfile.StatusCode;
		/** Chọn xem đã hết thời gian chờ một hộp thư đơn lẻ chưa. */
		TimeoutMailboxConnection: boolean;
		/** Nhập số mili giây hết thời gian chờ một hộp thư đơn lẻ. Giới hạn trên là 100 giây. */
		TimeoutMailboxConnectionAfterAmount: number;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn liệu có tự động phát hiện vị trí máy chủ hay không */
		UseAutoDiscover: boolean;
		/** Chọn có sử dụng ID Đối tượng thuê của Exchange Online có được khi chạy các lệnh ghép ngắn Microsoft Azure PowerShell (rất khuyến nghị) không. Nếu chọn Không, bạn có thể chỉnh sửa thủ công trường này */
		UseDefaultTenantId: boolean;
		/** Chọn liệu có sử dụng cùng một cài đặt cho các kết nối đến và đi hay không. */
		UseSameSettingsForOutgoingConnections: boolean;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của cấu hình máy chủ email. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** ID nguồn lực Microsoft Entra được dùng cho sơ đồ xác thực OAuth */
			readonly AadResourceId: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập vị trí mặc định của máy chủ. */
			readonly DefaultServerLocation: string;
			/** Nhập thông tin bổ sung mô tả cấu hình máy chủ email. */
			readonly Description: string;
			/** Mã định danh duy nhất của cấu hình máy chủ email. */
			readonly EmailServerProfileId: string;
			/** Tên Loại Máy chủ Email */
			readonly EmailServerTypeName: string;
			/** Cho biết trang mã để sử dụng khi mã hóa nội dung email. */
			readonly EncodingCodePage: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Nhập ID đối tượng thuê của Exchange Online. */
			readonly ExchangeOnlineTenantId: string;
			/** Chọn phiên bản Exchange trên máy chủ email. */
			readonly ExchangeVersion: string;
			/** Chọn giao thức xác thực email đến được sử dụng để kết nối với máy chủ email. */
			readonly IncomingAuthenticationProtocol: string;
			/** Chọn cách truy xuất thông tin đăng nhập của email đến. */
			readonly IncomingCredentialRetrieval: string;
			/** Cho biết ứng dụng đối tác của email đến. */
			readonly IncomingPartnerApplication: string;
			/** Nhập mật khẩu cho email đến. */
			readonly IncomingPassword: string;
			/** Nhấp số cổng Exchange cho thư đến. */
			readonly IncomingPortNumber: string;
			/** Nhập vị trí máy chủ cho email đến. */
			readonly IncomingServerLocation: string;
			/** Chọn liệu có truy cập hộp thư dưới hình thức mạo danh để xử lý các email đến không. */
			readonly IncomingUseImpersonation: string;
			/** Nhập tên người dùng cho email đến. */
			readonly IncomingUserName: string;
			/** Chọn liệu có sử dụng giao thức Tầng Khe Bảo mật (giao thức SSL) cho email đến hay không. */
			readonly IncomingUseSSL: string;
			readonly IsIncomingPasswordSet: string;
			readonly IsOauthClientSecretSet: string;
			readonly IsOutgoingPasswordSet: string;
			/** ID tham chiếu cho Azure Key Vault */
			readonly keyvaultreferenceid: string;
			/** Hiển thị trạng thái ủy quyền kiểm tra lần cuối của cấu hình máy chủ email */
			readonly LastAuthorizationStatus: string;
			/** Hiển thị Thông báo Dynamics 365 nhận được trong quá trình Kiểm tra Lần cuối */
			readonly LastCrmMessage: string;
			/** Hiển thị trạng thái Thực thi kiểm tra lần cuối của cấu hình máy chủ email */
			readonly LastTestExecutionStatus: string;
			/** Hiển thị Yêu cầu EWS được tạo trong quá trình Kiểm tra Lần cuối */
			readonly LastTestRequest: string;
			/** Hiển thị Phản hồi EWS nhận được trong quá trình Kiểm tra Lần cuối */
			readonly LastTestResponse: string;
			/** Hiển thị ngày và giờ Bắt đầu Kiểm tra Lần cuối */
			readonly LastTestStartTime_UtcDateAndTime: string;
			/** Hiển thị Thời gian đã bỏ ra trong khi chạy kiểm tra lần cuối */
			readonly LastTestTotalExecutionTime: string;
			/** Hiển thị trạng thái Xác thực kiểm tra lần cuối của cấu hình máy chủ email */
			readonly LastTestValidationStatus: string;
			/** ID danh tính được quản lý */
			readonly managedidentityid: string;
			/** Số lượng kết nối đồng thời tối đa được phép tới máy chủ email cho mỗi người dùng được xác thực. */
			readonly MaxConcurrentConnections: string;
			/** Khoảng thời gian kiểm soát vòng tối thiểu, tính theo phút, cho các hộp thư được liên kết với cấu hình máy chủ email này. */
			readonly MinPollingIntervalInMinutes: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Cho biết liệu có di chuyển các email đến không gửi được tới thư mục Không gửi được trong Microsoft Exchange hay không. */
			readonly MoveUndeliveredEmails: string;
			/** Nhập một tên có nghĩa cho cấu hình máy chủ email. Tên này được hiển thị khi bạn cần chọn một cấu hình máy chủ email. */
			readonly Name: string;
			/** Id máy khách được dùng cho sơ đồ xác thực OAuth */
			readonly OauthClientId: string;
			/** Mã bí mật máy khách được dùng cho sơ đồ xác thực OAuth */
			readonly OauthClientSecret: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
			readonly OrganizationId: string;
			/** Chọn giao thức xác thực email đi được sử dụng để kết nối với máy chủ email. */
			readonly OutgoingAuthenticationProtocol: string;
			/** Cho biết liệu bộ liên kết email có cấp quyền truy cập đại diện cho người dùng đang truy cập khi được yêu cầu trong lúc xử lý email đi hay không. */
			readonly OutgoingAutoGrantDelegateAccess: string;
			/** Chọn cách truy xuất thông tin đăng nhập cho email đi. */
			readonly OutgoingCredentialRetrieval: string;
			/** Cho biết ứng dụng đối tác của email đi. */
			readonly OutgoingPartnerApplication: string;
			/** Nhập mật khẩu cho email đi. */
			readonly OutgoingPassword: string;
			/** Nhấp số cổng Exchange cho thư đi. */
			readonly OutgoingPortNumber: string;
			/** Nhập vị trí máy chủ cho email đi. */
			readonly OutgoingServerLocation: string;
			/** Chọn liệu có truy cập hộp thư dưới hình thức mạo danh để xử lý các email đi không. */
			readonly OutgoingUseImpersonation: string;
			/** Nhập tên người dùng cho email đi. */
			readonly OutgoingUsername: string;
			/** Chọn liệu có sử dụng giao thức Tầng Khe Bảo mật (giao thức SSL) cho email đi hay không. */
			readonly OutgoingUseSSL: string;
			/** Địa chỉ email của chủ sở hữu cấu hình máy chủ email */
			readonly OwnerEmailAddress: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Chọn đơn vị kinh doanh sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Hiển thị ngày và giờ mà sau đó email nhận được sẽ được xử lý cho các hộp thư được liên kết với cấu hình máy chủ email. */
			readonly ProcessEmailsReceivedAfter_UtcDateAndTime: string;
			/** Chọn xem có gửi cảnh báo qua email nếu hơn 50% hộp thư trong cấu hình máy chủ email này không thể đồng bộ hóa trong khoảng thời gian một giờ được không. */
			readonly SendEmailAlert: string;
			/** Chọn quyền cho máy chủ email. */
			readonly ServerAuthority: string;
			/** Chọn loại máy chủ email của cấu hình. */
			readonly ServerType: string;
			/** Cho biết cấu hình máy chủ email hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của cấu hình máy chủ email. */
			readonly StatusCode: string;
			/** Chọn xem đã hết thời gian chờ một hộp thư đơn lẻ chưa. */
			readonly TimeoutMailboxConnection: string;
			/** Nhập số mili giây hết thời gian chờ một hộp thư đơn lẻ. Giới hạn trên là 100 giây. */
			readonly TimeoutMailboxConnectionAfterAmount: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn liệu có tự động phát hiện vị trí máy chủ hay không */
			readonly UseAutoDiscover: string;
			/** Chọn có sử dụng ID Đối tượng thuê của Exchange Online có được khi chạy các lệnh ghép ngắn Microsoft Azure PowerShell (rất khuyến nghị) không. Nếu chọn Không, bạn có thể chỉnh sửa thủ công trường này */
			readonly UseDefaultTenantId: string;
			/** Chọn liệu có sử dụng cùng một cài đặt cho các kết nối đến và đi hay không. */
			readonly UseSameSettingsForOutgoingConnections: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của cấu hình máy chủ email. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace EmailServerProfile {
		enum ExchangeVersion {
			/** 0 */
			Exchange_2007,
			/** 1 */
			Exchange_2007_SP1,
			/** 2 */
			Exchange_2010,
			/** 3 */
			Exchange_2010_SP1,
			/** 4 */
			Exchange_2010_SP2,
			/** 5 */
			Exchange_2013
		}
		enum IncomingAuthenticationProtocol {
			/** 3 */
			Co_ban,
			/** 2 */
			NTLM,
			/** 4 */
			OAuth,
			/** 0 */
			Phat_hien_Tu_dong,
			/** 1 */
			Thuong_luong
		}
		enum IncomingCredentialRetrieval {
			/** 5 */
			Gmail_OAuth,
			/** 4 */
			Khong_co_thong_tin_xac_thuc_An_danh,
			/** 7 */
			Oauth_voi_Microsoft_Entra_ID,
			/** 6 */
			Phuong_thuc_xac_thuc_hien_dai_ket_hop_HMA_cua_Exchange,
			/** 0 */
			Thong_tin_xac_thuc_do_nguoi_dung_hoac_hang_doi_chi_dinh,
			/** 1 */
			Thong_tin_xac_thuc_duoc_chi_dinh_trong_Cau_hinh_may_chu_email,
			/** 2 */
			Xac_thuc_may_chu_toi_may_chu,
			/** 3 */
			Xac_thuc_tich_hop_cua_Windows
		}
		enum LastAuthorizationStatus {
			/** 0 */
			Loi,
			/** 1 */
			Thanh_cong
		}
		enum LastTestExecutionStatus {
			/** 2 */
			Canh_bao,
			/** 0 */
			Loi,
			/** 1 */
			Thanh_cong
		}
		enum LastTestValidationStatus {
			/** 0 */
			Loi,
			/** 1 */
			Thanh_cong
		}
		enum OutgoingAuthenticationProtocol {
			/** 3 */
			Co_ban,
			/** 2 */
			NTLM,
			/** 4 */
			OAuth,
			/** 0 */
			Phat_hien_Tu_dong,
			/** 1 */
			Thuong_luong
		}
		enum OutgoingCredentialRetrieval {
			/** 5 */
			Gmail_OAuth,
			/** 4 */
			Khong_co_thong_tin_xac_thuc_An_danh,
			/** 7 */
			Oauth_voi_Microsoft_Entra_ID,
			/** 6 */
			Phuong_thuc_xac_thuc_hien_dai_ket_hop_HMA_cua_Exchange,
			/** 0 */
			Thong_tin_xac_thuc_do_nguoi_dung_hoac_hang_doi_chi_dinh,
			/** 1 */
			Thong_tin_xac_thuc_duoc_chi_dinh_trong_Cau_hinh_may_chu_email,
			/** 2 */
			Xac_thuc_may_chu_toi_may_chu,
			/** 3 */
			Xac_thuc_tich_hop_cua_Windows
		}
		enum ServerAuthority {
			/** 1 */
			Co_quan_chinh_phu_Hoa_Ky_GCC_High_va_DoD_httpsloginmicrosoftonlineus,
			/** 0 */
			Cong_cong_GCC_httpsloginmicrosoftonlinecom,
			/** 2 */
			Trung_Quoc_21Vianet_httpsloginchinacloudapicn,
			/** 3 */
			Tu_dong_duoc_xac_dinh_boi_dam_may_Dynamics_365
		}
		enum ServerType {
			/** 3 */
			Exchange_Online_Ket_hop,
			/** 0 */
			Exchange_Server,
			/** 2 */
			Exchange_Server_Ket_hop,
			/** 4 */
			IMAPSMTP,
			/** 1 */
			Khac_POP3SMTP
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