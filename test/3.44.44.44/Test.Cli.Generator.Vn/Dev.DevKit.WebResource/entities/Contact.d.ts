//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormInvite_Web_Form {
		interface Tabs {
		}
		interface Body {
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Nhập tên của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			FirstName: DevKit.Controls.String;
			/** Nhập họ của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			LastName: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Nhập số điện thoại chính cho người liên hệ này. */
			Telephone1: DevKit.Controls.String;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem,
			adx_contact_externalidentity: DevKit.Controls.NavigationItem,
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem,
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem,
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem,
			adx_webformsession_contact: DevKit.Controls.NavigationItem,
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			contact_adx_portalcomments: DevKit.Controls.NavigationItem,
			Contact_Appointments: DevKit.Controls.NavigationItem,
			contact_customer_contacts: DevKit.Controls.NavigationItem,
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem,
			Contact_Emails: DevKit.Controls.NavigationItem,
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem,
			Contact_Feedback: DevKit.Controls.NavigationItem,
			Contact_Phonecalls: DevKit.Controls.NavigationItem,
			Contact_Tasks: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem
		}
	}
	class FormInvite_Web_Form extends DevKit.IForm {
		/**
		* Invite Web Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Invite_Web_Form */
		Body: DevKit.FormInvite_Web_Form.Body;
		/** The Navigation of form Invite_Web_Form */
		Navigation: DevKit.FormInvite_Web_Form.Navigation;
		/** The SidePanes of form Invite_Web_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNguoi_lien_he {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_DETAILS_TAB_Sections {
			billing_information: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			PERSONAL_INFORMATION: DevKit.Controls.Section;
			PERSONAL_NOTES_SECTION: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			CONTACT_INFORMATION: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Cho biết địa chỉ chính đầy đủ. */
			Address1_Composite: DevKit.Controls.String;
			/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ chính để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Nhập ngày cưới hoặc ngày kỷ niệm dịch vụ của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
			Anniversary: DevKit.Controls.Date;
			/** Nhập sinh nhật của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
			BirthDate: DevKit.Controls.Date;
			/** Nhập giới hạn tín dụng của người liên hệ để tham chiếu khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditLimit: DevKit.Controls.Money;
			/** Chọn người liên hệ có ở trạng thái treo tín dụng hay không, để tham chiếu khi xử lý các vấn đề về hóa đơn và kế toán. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Nhập thông tin bổ sung để mô tả người liên hệ, chẳng hạn như một đoạn trích từ trang web của công ty. */
			Description: DevKit.Controls.String;
			/** Chọn người liên hệ có hoặc không chấp nhận gửi email hàng loạt trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. Nếu chọn Không Cho phép thì có thể thêm người liên hệ vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi email trực tiếp từ Microsoft Dynamics 365. Nếu chọn Không Cho phép thì Microsoft Dynamics 365 sẽ không gửi email. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi fax. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động fax được phân phối trong chiến dịch tiếp thị. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không chấp nhận gọi điện thoại. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động gọi điện thoại được phân phối trong chiến dịch tiếp thị. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi thư trực tiếp. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Chọn tình trạng hôn nhân của người liên hệ để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
			FamilyStatusCode: DevKit.Controls.OptionSet;
			/** Nhập số fax cho người liên hệ. */
			Fax: DevKit.Controls.String;
			/** Thông tin về khả năng cho phép theo dõi hoạt động email như hoạt động mở, số lần xem tệp đính kèm và số lần bấm vào liên kết đối với những email gửi tới người liên hệ. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Kết hợp và cho biết tên và họ của người liên hệ để có thể hiển thị tên đầy đủ trong dạng xem và báo cáo. */
			FullName: DevKit.Controls.String;
			/** Chọn giới tính của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Nhập chức danh của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			JobTitle: DevKit.Controls.String;
			mapcontrol: DevKit.Controls.Map;
			/** Nhập số điện thoại di động của người liên hệ. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Chọn tài khoản mẹ hoặc người liên hệ ở cấp độ mẹ cho người liên hệ nhằm cung cấp liên kết nhanh tới những chi tiết bổ sung, chẳng hạn như thông tin tài chính, hoạt động và cơ hội. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode1: DevKit.Controls.OptionSet;
			/** Nhập tên vợ/chồng hoặc bạn đời của người liên hệ để tham chiếu trong các cuộc gọi, sự kiện hoặc các liên lạc khác với người liên hệ. */
			SpousesName: DevKit.Controls.String;
			/** Nhập số điện thoại chính cho người liên hệ này. */
			Telephone1: DevKit.Controls.String;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem,
			adx_contact_externalidentity: DevKit.Controls.NavigationItem,
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem,
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem,
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem,
			adx_webformsession_contact: DevKit.Controls.NavigationItem,
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			contact_adx_portalcomments: DevKit.Controls.NavigationItem,
			Contact_Appointments: DevKit.Controls.NavigationItem,
			contact_customer_contacts: DevKit.Controls.NavigationItem,
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem,
			Contact_Emails: DevKit.Controls.NavigationItem,
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem,
			Contact_Feedback: DevKit.Controls.NavigationItem,
			Contact_Phonecalls: DevKit.Controls.NavigationItem,
			Contact_Tasks: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem
		}
	}
	class FormNguoi_lien_he extends DevKit.IForm {
		/**
		* Người liên hệ [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Nguoi_lien_he */
		Body: DevKit.FormNguoi_lien_he.Body;
		/** The Header section of form Nguoi_lien_he */
		Header: DevKit.FormNguoi_lien_he.Header;
		/** The Navigation of form Nguoi_lien_he */
		Navigation: DevKit.FormNguoi_lien_he.Navigation;
		/** The SidePanes of form Nguoi_lien_he */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPortal_Contact_Enhanced {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
		}
		interface tab_administration_Sections {
			billing_information: DevKit.Controls.Section;
			contact_methods: DevKit.Controls.Section;
			internal_information: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			personal_information: DevKit.Controls.Section;
			professional_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			address: DevKit.Controls.Section;
			contact_webrole_section: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			name: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_notes_and_activities_Sections {
			activities: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_web_authentication_Sections {
			_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_4: DevKit.Controls.Section;
			_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_5: DevKit.Controls.Section;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes_and_activities extends DevKit.Controls.ITab {
			Section: tab_notes_and_activities_Sections;
		}
		interface tab_web_authentication extends DevKit.Controls.ITab {
			Section: tab_web_authentication_Sections;
		}
		interface Tabs {
			administration: tab_administration;
			details: tab_details;
			general: tab_general;
			notes_and_activities: tab_notes_and_activities;
			web_authentication: tab_web_authentication;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn vai trò của người liên hệ trong công ty hoặc quy trình bán hàng, chẳng hạn như người ra quyết định, nhân viên hoặc người ảnh hưởng. */
			AccountRoleCode: DevKit.Controls.OptionSet;
			/** Chọn loại địa chỉ chính. */
			Address1_AddressTypeCode: DevKit.Controls.OptionSet;
			/** Nhập thành phố cho địa chỉ chính. */
			Address1_City: DevKit.Controls.String;
			/** Nhập quốc gia hoặc khu vực cho địa chỉ chính. */
			Address1_Country: DevKit.Controls.String;
			/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ chính để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Nhập dòng đầu tiên của địa chỉ chính. */
			Address1_Line1: DevKit.Controls.String;
			/** Nhập dòng thứ hai của địa chỉ chính. */
			Address1_Line2: DevKit.Controls.String;
			/** Nhập dòng thứ ba của địa chỉ chính. */
			Address1_Line3: DevKit.Controls.String;
			/** Nhập tên mô tả cho địa chỉ chính, chẳng hạn như Trụ sở chính của Tập đoàn. */
			Address1_Name: DevKit.Controls.String;
			/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ chính. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Nhập bang hoặc tỉnh của địa chỉ chính. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** Nhập số điện thoại chính liên kết với địa chỉ chính. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Hiển thị tổng số những lần nhập sai mật khẩu hiện tại cho người liên hệ này. */
			adx_identity_accessfailedcount: DevKit.Controls.Integer;
			/** Xác định xem email đã được người liên hệ xác nhận hay chưa. */
			adx_identity_emailaddress1confirmed: DevKit.Controls.Boolean;
			/** Cho biết người liên hệ không thể đăng nhập vào cổng thông tin bằng cách dùng tài khoản cục bộ được nữa. */
			adx_identity_locallogindisabled: DevKit.Controls.Boolean;
			/** Xác định khả năng người liên hệ này sẽ để lại dấu vết của những lần truy cập không thành công và sẽ bị khóa sau khi cố gắng truy cập mà bị thất bại quá nhiều lần. Để tránh cho người liên hệ không bị khóa, bạn có thể tắt thiết đặt này. */
			adx_identity_lockoutenabled: DevKit.Controls.Boolean;
			/** Hiển thị thời gian người liên hệ bị khóa được mở khóa trở lại. */
			adx_identity_lockoutenddate: DevKit.Controls.DateTime;
			/** Xác định xem việc xác thực web có được bật cho người liên hệ hay không. */
			adx_identity_logonenabled: DevKit.Controls.Boolean;
			/** Xác định xem số điện thoại đã được người liên hệ xác nhận hay chưa. */
			adx_identity_mobilephoneconfirmed: DevKit.Controls.Boolean;
			/** Mã thông báo được dùng để quản lý phiên xác thực web. */
			adx_identity_securitystamp: DevKit.Controls.String;
			/** Xác định xem việc xác thực hai yếu tố có được bật cho người liên hệ hay không. */
			adx_identity_twofactorenabled: DevKit.Controls.Boolean;
			/** Hiển thị danh tính người dùng cho xác thực web cục bộ. */
			adx_identity_username: DevKit.Controls.String;
			Adx_TimeZone: DevKit.Controls.Integer;
			/** Nhập ngày cưới hoặc ngày kỷ niệm dịch vụ của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
			Anniversary: DevKit.Controls.Date;
			/** Nhập tên trợ lý của người liên hệ. */
			AssistantName: DevKit.Controls.String;
			/** Nhập số điện thoại cho trợ lý của người liên hệ. */
			AssistantPhone: DevKit.Controls.String;
			/** Nhập sinh nhật của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
			BirthDate: DevKit.Controls.Date;
			/** Nhập giới hạn tín dụng của người liên hệ để tham chiếu khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditLimit: DevKit.Controls.Money;
			/** Chọn người liên hệ có ở trạng thái treo tín dụng hay không, để tham chiếu khi xử lý các vấn đề về hóa đơn và kế toán. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Nhập bộ phận hoặc đơn vị kinh doanh có người liên hệ làm việc trong công ty hoặc doanh nghiệp mẹ. */
			Department: DevKit.Controls.String;
			/** Nhập thông tin bổ sung để mô tả người liên hệ, chẳng hạn như một đoạn trích từ trang web của công ty. */
			Description: DevKit.Controls.String;
			/** Chọn người liên hệ có hoặc không chấp nhận gửi email hàng loạt trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. Nếu chọn Không Cho phép thì có thể thêm người liên hệ vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi email trực tiếp từ Microsoft Dynamics 365. Nếu chọn Không Cho phép thì Microsoft Dynamics 365 sẽ không gửi email. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi fax. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động fax được phân phối trong chiến dịch tiếp thị. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không chấp nhận gọi điện thoại. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động gọi điện thoại được phân phối trong chiến dịch tiếp thị. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi thư trực tiếp. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Chọn tình trạng hôn nhân của người liên hệ để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
			FamilyStatusCode: DevKit.Controls.OptionSet;
			/** Nhập số fax cho người liên hệ. */
			Fax: DevKit.Controls.String;
			/** Nhập tên của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			FirstName: DevKit.Controls.String;
			/** Chọn giới tính của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Nhập chức danh của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			JobTitle: DevKit.Controls.String;
			/** Nhập họ của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			LastName: DevKit.Controls.String;
			/** Nhập tên người quản lý của người liên hệ để sử dụng trong việc giải quyết vấn đề hoặc các liên lạc sau này với người liên hệ. */
			ManagerName: DevKit.Controls.String;
			/** Nhập số điện thoại cho người quản lý của người liên hệ. */
			ManagerPhone: DevKit.Controls.String;
			/** Nhập tên đệm hoặc tên viết tắt của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác. */
			MiddleName: DevKit.Controls.String;
			/** Nhập số điện thoại di động của người liên hệ. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn tài khoản mẹ hoặc người liên hệ ở cấp độ mẹ cho người liên hệ nhằm cung cấp liên kết nhanh tới những chi tiết bổ sung, chẳng hạn như thông tin tài chính, hoạt động và cơ hội. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Nhập lời chào cho người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			Salutation: DevKit.Controls.String;
			/** Nhập tên vợ/chồng hoặc bạn đời của người liên hệ để tham chiếu trong các cuộc gọi, sự kiện hoặc các liên lạc khác với người liên hệ. */
			SpousesName: DevKit.Controls.String;
			/** Nhập số điện thoại chính cho người liên hệ này. */
			Telephone1: DevKit.Controls.String;
			/** Nhập số điện thoại thứ hai cho người liên hệ này. */
			Telephone2: DevKit.Controls.String;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem,
			adx_contact_externalidentity: DevKit.Controls.NavigationItem,
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem,
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem,
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem,
			adx_webformsession_contact: DevKit.Controls.NavigationItem,
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			contact_adx_portalcomments: DevKit.Controls.NavigationItem,
			Contact_Appointments: DevKit.Controls.NavigationItem,
			contact_customer_contacts: DevKit.Controls.NavigationItem,
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem,
			Contact_Emails: DevKit.Controls.NavigationItem,
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem,
			Contact_Feedback: DevKit.Controls.NavigationItem,
			Contact_Phonecalls: DevKit.Controls.NavigationItem,
			Contact_Tasks: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem
		}
		interface Grid {
			adx_externalidentity: DevKit.Controls.Grid;
			contactactivitiesgrid: DevKit.Controls.Grid;
			grid_contact_mspp_webrole: DevKit.Controls.Grid;
		}
	}
	class FormPortal_Contact_Enhanced extends DevKit.IForm {
		/**
		* Portal Contact (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Portal_Contact_Enhanced */
		Body: DevKit.FormPortal_Contact_Enhanced.Body;
		/** The Header section of form Portal_Contact_Enhanced */
		Header: DevKit.FormPortal_Contact_Enhanced.Header;
		/** The Navigation of form Portal_Contact_Enhanced */
		Navigation: DevKit.FormPortal_Contact_Enhanced.Navigation;
		/** The Grid of form Portal_Contact_Enhanced */
		Grid: DevKit.FormPortal_Contact_Enhanced.Grid;
		/** The SidePanes of form Portal_Contact_Enhanced */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProfile_Web_Form_Enhanced {
		interface Tabs {
		}
		interface Body {
			Adx_OrganizationName: DevKit.Controls.String;
			adx_PublicProfileCopy: DevKit.Controls.String;
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Nhập tên của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			FirstName: DevKit.Controls.String;
			/** Nhập chức danh của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			JobTitle: DevKit.Controls.String;
			/** Nhập họ của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			LastName: DevKit.Controls.String;
			/** Ngôn ngữ cổng thông tin ưa dùng của người dùng */
			mspp_userpreferredlcid: DevKit.Controls.OptionSet;
			/** Nhập biệt danh của người liên hệ. */
			NickName: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Nhập số điện thoại chính cho người liên hệ này. */
			Telephone1: DevKit.Controls.String;
			/** Nhập URL trang web hoặc blog công việc hay cá nhân của người liên hệ. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem,
			adx_contact_externalidentity: DevKit.Controls.NavigationItem,
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem,
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem,
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem,
			adx_webformsession_contact: DevKit.Controls.NavigationItem,
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			contact_adx_portalcomments: DevKit.Controls.NavigationItem,
			Contact_Appointments: DevKit.Controls.NavigationItem,
			contact_customer_contacts: DevKit.Controls.NavigationItem,
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem,
			Contact_Emails: DevKit.Controls.NavigationItem,
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem,
			Contact_Feedback: DevKit.Controls.NavigationItem,
			Contact_Phonecalls: DevKit.Controls.NavigationItem,
			Contact_Tasks: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem
		}
	}
	class FormProfile_Web_Form_Enhanced extends DevKit.IForm {
		/**
		* Profile Web Form (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Profile_Web_Form_Enhanced */
		Body: DevKit.FormProfile_Web_Form_Enhanced.Body;
		/** The Navigation of form Profile_Web_Form_Enhanced */
		Navigation: DevKit.FormProfile_Web_Form_Enhanced.Navigation;
		/** The SidePanes of form Profile_Web_Form_Enhanced */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProfile_Web_Form_Enhanced_Japanese {
		interface Tabs {
		}
		interface Body {
			Adx_OrganizationName: DevKit.Controls.String;
			adx_PublicProfileCopy: DevKit.Controls.String;
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Nhập tên của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			FirstName: DevKit.Controls.String;
			/** Nhập chức danh của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			JobTitle: DevKit.Controls.String;
			/** Nhập họ của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			LastName: DevKit.Controls.String;
			/** Ngôn ngữ cổng thông tin ưa dùng của người dùng */
			mspp_userpreferredlcid: DevKit.Controls.OptionSet;
			/** Nhập biệt danh của người liên hệ. */
			NickName: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Nhập số điện thoại chính cho người liên hệ này. */
			Telephone1: DevKit.Controls.String;
			/** Nhập URL trang web hoặc blog công việc hay cá nhân của người liên hệ. */
			WebSiteUrl: DevKit.Controls.String;
			/** Nhập cách phát âm tên của người liên hệ, nếu tên này được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
			YomiFirstName: DevKit.Controls.String;
			/** Nhập cách phát âm họ của người liên hệ, nếu họ được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
			YomiLastName: DevKit.Controls.String;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem,
			adx_contact_externalidentity: DevKit.Controls.NavigationItem,
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem,
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem,
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem,
			adx_webformsession_contact: DevKit.Controls.NavigationItem,
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			contact_adx_portalcomments: DevKit.Controls.NavigationItem,
			Contact_Appointments: DevKit.Controls.NavigationItem,
			contact_customer_contacts: DevKit.Controls.NavigationItem,
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem,
			Contact_Emails: DevKit.Controls.NavigationItem,
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem,
			Contact_Feedback: DevKit.Controls.NavigationItem,
			Contact_Phonecalls: DevKit.Controls.NavigationItem,
			Contact_Tasks: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem
		}
	}
	class FormProfile_Web_Form_Enhanced_Japanese extends DevKit.IForm {
		/**
		* Profile Web Form (Enhanced) - Japanese [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Profile_Web_Form_Enhanced_Japanese */
		Body: DevKit.FormProfile_Web_Form_Enhanced_Japanese.Body;
		/** The Navigation of form Profile_Web_Form_Enhanced_Japanese */
		Navigation: DevKit.FormProfile_Web_Form_Enhanced_Japanese.Navigation;
		/** The SidePanes of form Profile_Web_Form_Enhanced_Japanese */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
		}
		interface tab_administration_Sections {
			billing_information: DevKit.Controls.Section;
			contact_methods: DevKit.Controls.Section;
			internal_information: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			personal_information: DevKit.Controls.Section;
			professional_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			address: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			name: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_notes_and_activities_Sections {
			activities: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes_and_activities extends DevKit.Controls.ITab {
			Section: tab_notes_and_activities_Sections;
		}
		interface Tabs {
			administration: tab_administration;
			details: tab_details;
			general: tab_general;
			notes_and_activities: tab_notes_and_activities;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn vai trò của người liên hệ trong công ty hoặc quy trình bán hàng, chẳng hạn như người ra quyết định, nhân viên hoặc người ảnh hưởng. */
			AccountRoleCode: DevKit.Controls.OptionSet;
			/** Chọn loại địa chỉ chính. */
			Address1_AddressTypeCode: DevKit.Controls.OptionSet;
			/** Nhập thành phố cho địa chỉ chính. */
			Address1_City: DevKit.Controls.String;
			/** Nhập quốc gia hoặc khu vực cho địa chỉ chính. */
			Address1_Country: DevKit.Controls.String;
			/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ chính để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Nhập dòng đầu tiên của địa chỉ chính. */
			Address1_Line1: DevKit.Controls.String;
			/** Nhập dòng thứ hai của địa chỉ chính. */
			Address1_Line2: DevKit.Controls.String;
			/** Nhập dòng thứ ba của địa chỉ chính. */
			Address1_Line3: DevKit.Controls.String;
			/** Nhập tên mô tả cho địa chỉ chính, chẳng hạn như Trụ sở chính của Tập đoàn. */
			Address1_Name: DevKit.Controls.String;
			/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ chính. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Nhập bang hoặc tỉnh của địa chỉ chính. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** Nhập số điện thoại chính liên kết với địa chỉ chính. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Nhập ngày cưới hoặc ngày kỷ niệm dịch vụ của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
			Anniversary: DevKit.Controls.Date;
			/** Nhập tên trợ lý của người liên hệ. */
			AssistantName: DevKit.Controls.String;
			/** Nhập số điện thoại cho trợ lý của người liên hệ. */
			AssistantPhone: DevKit.Controls.String;
			/** Nhập sinh nhật của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
			BirthDate: DevKit.Controls.Date;
			/** Nhập giới hạn tín dụng của người liên hệ để tham chiếu khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditLimit: DevKit.Controls.Money;
			/** Chọn người liên hệ có ở trạng thái treo tín dụng hay không, để tham chiếu khi xử lý các vấn đề về hóa đơn và kế toán. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Nhập bộ phận hoặc đơn vị kinh doanh có người liên hệ làm việc trong công ty hoặc doanh nghiệp mẹ. */
			Department: DevKit.Controls.String;
			/** Nhập thông tin bổ sung để mô tả người liên hệ, chẳng hạn như một đoạn trích từ trang web của công ty. */
			Description: DevKit.Controls.String;
			/** Chọn người liên hệ có hoặc không chấp nhận gửi email hàng loạt trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. Nếu chọn Không Cho phép thì có thể thêm người liên hệ vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi email trực tiếp từ Microsoft Dynamics 365. Nếu chọn Không Cho phép thì Microsoft Dynamics 365 sẽ không gửi email. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi fax. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động fax được phân phối trong chiến dịch tiếp thị. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không chấp nhận gọi điện thoại. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động gọi điện thoại được phân phối trong chiến dịch tiếp thị. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Chọn người liên hệ có hoặc không cho phép gửi thư trực tiếp. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Chọn tình trạng hôn nhân của người liên hệ để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
			FamilyStatusCode: DevKit.Controls.OptionSet;
			/** Nhập số fax cho người liên hệ. */
			Fax: DevKit.Controls.String;
			/** Nhập tên của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			FirstName: DevKit.Controls.String;
			/** Chọn giới tính của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Nhập chức danh của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			JobTitle: DevKit.Controls.String;
			/** Nhập họ của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			LastName: DevKit.Controls.String;
			/** Nhập tên người quản lý của người liên hệ để sử dụng trong việc giải quyết vấn đề hoặc các liên lạc sau này với người liên hệ. */
			ManagerName: DevKit.Controls.String;
			/** Nhập số điện thoại cho người quản lý của người liên hệ. */
			ManagerPhone: DevKit.Controls.String;
			/** Nhập tên đệm hoặc tên viết tắt của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác. */
			MiddleName: DevKit.Controls.String;
			/** Nhập số điện thoại di động của người liên hệ. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn tài khoản mẹ hoặc người liên hệ ở cấp độ mẹ cho người liên hệ nhằm cung cấp liên kết nhanh tới những chi tiết bổ sung, chẳng hạn như thông tin tài chính, hoạt động và cơ hội. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Nhập lời chào cho người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			Salutation: DevKit.Controls.String;
			/** Nhập tên vợ/chồng hoặc bạn đời của người liên hệ để tham chiếu trong các cuộc gọi, sự kiện hoặc các liên lạc khác với người liên hệ. */
			SpousesName: DevKit.Controls.String;
			/** Nhập số điện thoại chính cho người liên hệ này. */
			Telephone1: DevKit.Controls.String;
			/** Nhập số điện thoại thứ hai cho người liên hệ này. */
			Telephone2: DevKit.Controls.String;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem,
			adx_contact_externalidentity: DevKit.Controls.NavigationItem,
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem,
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem,
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem,
			adx_webformsession_contact: DevKit.Controls.NavigationItem,
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			contact_adx_portalcomments: DevKit.Controls.NavigationItem,
			Contact_Appointments: DevKit.Controls.NavigationItem,
			contact_customer_contacts: DevKit.Controls.NavigationItem,
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem,
			Contact_Emails: DevKit.Controls.NavigationItem,
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem,
			Contact_Feedback: DevKit.Controls.NavigationItem,
			Contact_Phonecalls: DevKit.Controls.NavigationItem,
			Contact_Tasks: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem,
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem
		}
		interface Grid {
			contactactivitiesgrid: DevKit.Controls.Grid;
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
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTao_lien_he_nhanh {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập thành phố cho địa chỉ chính. */
			Address1_City: DevKit.Controls.String;
			/** Nhập dòng đầu tiên của địa chỉ chính. */
			Address1_Line1: DevKit.Controls.String;
			/** Nhập dòng thứ hai của địa chỉ chính. */
			Address1_Line2: DevKit.Controls.String;
			/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ chính. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Nhập thông tin bổ sung để mô tả người liên hệ, chẳng hạn như một đoạn trích từ trang web của công ty. */
			Description: DevKit.Controls.String;
			/** Nhập địa chỉ email chính cho người liên hệ. */
			EMailAddress1: DevKit.Controls.String;
			/** Nhập tên của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			FirstName: DevKit.Controls.String;
			/** Nhập chức danh của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			JobTitle: DevKit.Controls.String;
			/** Nhập họ của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			LastName: DevKit.Controls.String;
			/** Nhập số điện thoại di động của người liên hệ. */
			MobilePhone: DevKit.Controls.String;
			/** Chọn tài khoản mẹ hoặc người liên hệ ở cấp độ mẹ cho người liên hệ nhằm cung cấp liên kết nhanh tới những chi tiết bổ sung, chẳng hạn như thông tin tài chính, hoạt động và cơ hội. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Nhập số điện thoại chính cho người liên hệ này. */
			Telephone1: DevKit.Controls.String;
		}
	}
	class FormTao_lien_he_nhanh extends DevKit.IForm {
		/**
		* Tạo liên hệ nhanh [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Tao_lien_he_nhanh */
		Body: DevKit.FormTao_lien_he_nhanh.Body;
	}
	class ContactApi {
		/**
		* DynamicsCrm.DevKit ContactApi
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
		/** Mã định danh duy nhất của tài khoản khách hàng có người liên hệ được liên kết. */
		readonly AccountId: string;
		/** Chọn vai trò của người liên hệ trong công ty hoặc quy trình bán hàng, chẳng hạn như người ra quyết định, nhân viên hoặc người ảnh hưởng. */
		AccountRoleCode: OptionSet.Contact.AccountRoleCode;
		/** Mã định danh duy nhất cho địa chỉ 1. */
		Address1_AddressId: string;
		/** Chọn loại địa chỉ chính. */
		Address1_AddressTypeCode: OptionSet.Contact.Address1_AddressTypeCode;
		/** Nhập thành phố cho địa chỉ chính. */
		Address1_City: string;
		/** Cho biết địa chỉ chính đầy đủ. */
		readonly Address1_Composite: string;
		/** Nhập quốc gia hoặc khu vực cho địa chỉ chính. */
		Address1_Country: string;
		/** Nhập hạt cho địa chỉ chính. */
		Address1_County: string;
		/** Nhập số fax liên kết với địa chỉ chính. */
		Address1_Fax: string;
		/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ chính để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
		Address1_FreightTermsCode: OptionSet.Contact.Address1_FreightTermsCode;
		/** Nhập giá trị vĩ độ cho địa chỉ chính để sử dụng trong ánh xạ và các ứng dụng khác. */
		Address1_Latitude: number;
		/** Nhập dòng đầu tiên của địa chỉ chính. */
		Address1_Line1: string;
		/** Nhập dòng thứ hai của địa chỉ chính. */
		Address1_Line2: string;
		/** Nhập dòng thứ ba của địa chỉ chính. */
		Address1_Line3: string;
		/** Nhập giá trị kinh độ cho địa chỉ chính để sử dụng trong ánh xạ và các ứng dụng khác. */
		Address1_Longitude: number;
		/** Nhập tên mô tả cho địa chỉ chính, chẳng hạn như Trụ sở chính của Tập đoàn. */
		Address1_Name: string;
		/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ chính. */
		Address1_PostalCode: string;
		/** Nhập số hòm thư của địa chỉ chính. */
		Address1_PostOfficeBox: string;
		/** Nhập tên của người liên hệ chính tại địa chỉ chính của tài khoản. */
		Address1_PrimaryContactName: string;
		/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
		Address1_ShippingMethodCode: OptionSet.Contact.Address1_ShippingMethodCode;
		/** Nhập bang hoặc tỉnh của địa chỉ chính. */
		Address1_StateOrProvince: string;
		/** Nhập số điện thoại chính liên kết với địa chỉ chính. */
		Address1_Telephone1: string;
		/** Nhập số điện thoại thứ hai liên kết với địa chỉ chính. */
		Address1_Telephone2: string;
		/** Nhập số điện thoại thứ ba liên kết với địa chỉ chính. */
		Address1_Telephone3: string;
		/** Nhập vùng UPS của địa chỉ chính để đảm bảo phí vận chuyển được tính chính xác và hàng được giao kịp thời nếu giao bằng UPS. */
		Address1_UPSZone: string;
		/** Chọn múi giờ hoặc phần bù UTC cho địa chỉ này để người khác có thể tham chiếu khi họ liên hệ với người trong địa chỉ này. */
		Address1_UTCOffset: number;
		/** Mã định danh duy nhất cho địa chỉ 2. */
		Address2_AddressId: string;
		/** Chọn loại địa chỉ phụ. */
		Address2_AddressTypeCode: OptionSet.Contact.Address2_AddressTypeCode;
		/** Nhập thành phố cho địa chỉ phụ. */
		Address2_City: string;
		/** Cho biết địa chỉ phụ đầy đủ. */
		readonly Address2_Composite: string;
		/** Nhập quốc gia hoặc khu vực cho địa chỉ phụ. */
		Address2_Country: string;
		/** Nhập hạt cho địa chỉ phụ. */
		Address2_County: string;
		/** Nhập số fax liên kết với địa chỉ phụ. */
		Address2_Fax: string;
		/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ phụ để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
		Address2_FreightTermsCode: OptionSet.Contact.Address2_FreightTermsCode;
		/** Nhập giá trị vĩ độ cho địa chỉ phụ để sử dụng trong ánh xạ và các ứng dụng khác. */
		Address2_Latitude: number;
		/** Nhập dòng đầu tiên của địa chỉ phụ. */
		Address2_Line1: string;
		/** Nhập dòng thứ hai của địa chỉ phụ. */
		Address2_Line2: string;
		/** Nhập dòng thứ ba của địa chỉ phụ. */
		Address2_Line3: string;
		/** Nhập giá trị kinh độ cho địa chỉ phụ để sử dụng trong ánh xạ và các ứng dụng khác. */
		Address2_Longitude: number;
		/** Nhập tên mô tả cho địa chỉ phụ, chẳng hạn như Trụ sở chính của Tập đoàn. */
		Address2_Name: string;
		/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ phụ. */
		Address2_PostalCode: string;
		/** Nhập số hòm thư của địa chỉ phụ. */
		Address2_PostOfficeBox: string;
		/** Nhập tên của người liên hệ chính tại địa chỉ phụ của tài khoản. */
		Address2_PrimaryContactName: string;
		/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
		Address2_ShippingMethodCode: OptionSet.Contact.Address2_ShippingMethodCode;
		/** Nhập bang hoặc tỉnh của địa chỉ phụ. */
		Address2_StateOrProvince: string;
		/** Nhập số điện thoại chính liên kết với địa chỉ phụ. */
		Address2_Telephone1: string;
		/** Nhập số điện thoại thứ hai liên kết với địa chỉ phụ. */
		Address2_Telephone2: string;
		/** Nhập số điện thoại thứ ba liên kết với địa chỉ phụ. */
		Address2_Telephone3: string;
		/** Nhập vùng UPS của địa chỉ phụ để đảm bảo phí vận chuyển được tính chính xác và hàng được giao kịp thời nếu giao bằng UPS. */
		Address2_UPSZone: string;
		/** Chọn múi giờ hoặc phần bù UTC cho địa chỉ này để người khác có thể tham chiếu khi họ liên hệ với người trong địa chỉ này. */
		Address2_UTCOffset: number;
		/** Mã định danh duy nhất cho địa chỉ 3. */
		Address3_AddressId: string;
		/** Chọn loại địa chỉ thứ ba. */
		Address3_AddressTypeCode: OptionSet.Contact.Address3_AddressTypeCode;
		/** Nhập thành phố cho địa chỉ thứ ba. */
		Address3_City: string;
		/** Cho biết địa chỉ thứ ba đầy đủ. */
		readonly Address3_Composite: string;
		/** quốc gia hoặc khu vực cho địa chỉ thứ ba. */
		Address3_Country: string;
		/** Nhập hạt cho địa chỉ thứ ba. */
		Address3_County: string;
		/** Nhập số fax liên kết với địa chỉ thứ ba. */
		Address3_Fax: string;
		/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ thứ ba để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
		Address3_FreightTermsCode: OptionSet.Contact.Address3_FreightTermsCode;
		/** Nhập giá trị vĩ độ cho địa chỉ thứ ba để sử dụng trong ánh xạ và các ứng dụng khác. */
		Address3_Latitude: number;
		/** Nhập dòng đầu tiên của địa chỉ thứ ba. */
		Address3_Line1: string;
		/** dòng thứ hai của địa chỉ thứ ba. */
		Address3_Line2: string;
		/** dòng thứ ba của địa chỉ thứ ba. */
		Address3_Line3: string;
		/** Nhập giá trị kinh độ cho địa chỉ thứ ba để sử dụng trong ánh xạ và các ứng dụng khác. */
		Address3_Longitude: number;
		/** Nhập tên mô tả cho địa chỉ thứ ba, chẳng hạn như Trụ sở chính của Tập đoàn. */
		Address3_Name: string;
		/** Mã ZIP hoặc mã bưu điện của địa chỉ thứ ba. */
		Address3_PostalCode: string;
		/** số hòm thư của địa chỉ thứ ba. */
		Address3_PostOfficeBox: string;
		/** Nhập tên của người liên hệ chính tại địa chỉ thứ ba của tài khoản. */
		Address3_PrimaryContactName: string;
		/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
		Address3_ShippingMethodCode: OptionSet.Contact.Address3_ShippingMethodCode;
		/** bang hoặc tỉnh của địa chỉ thứ ba. */
		Address3_StateOrProvince: string;
		/** Nhập số điện thoại chính liên kết với địa chỉ thứ ba. */
		Address3_Telephone1: string;
		/** Nhập số điện thoại thứ hai liên kết với địa chỉ thứ ba. */
		Address3_Telephone2: string;
		/** Nhập số điện thoại thứ ba liên kết với địa chỉ chính. */
		Address3_Telephone3: string;
		/** Nhập vùng UPS của địa chỉ thứ ba để đảm bảo phí vận chuyển được tính chính xác và hàng được giao kịp thời nếu giao bằng UPS. */
		Address3_UPSZone: string;
		/** Chọn múi giờ hoặc phần bù UTC cho địa chỉ này để người khác có thể tham chiếu khi họ liên hệ với người trong địa chỉ này. */
		Address3_UTCOffset: number;
		adx_ConfirmRemovePassword: boolean;
		Adx_CreatedByIPAddress: string;
		Adx_CreatedByUsername: string;
		/** Hiển thị tổng số những lần nhập sai mật khẩu hiện tại cho người liên hệ này. */
		adx_identity_accessfailedcount: number;
		/** Xác định xem email đã được người liên hệ xác nhận hay chưa. */
		adx_identity_emailaddress1confirmed: boolean;
		/** Cho biết ngày giờ mà người dùng đăng nhập thành công vào cổng thông tin lần cuối. */
		adx_identity_lastsuccessfullogin_UtcDateAndTime: Date;
		/** Cho biết người liên hệ không thể đăng nhập vào cổng thông tin bằng cách dùng tài khoản cục bộ được nữa. */
		adx_identity_locallogindisabled: boolean;
		/** Xác định khả năng người liên hệ này sẽ để lại dấu vết của những lần truy cập không thành công và sẽ bị khóa sau khi cố gắng truy cập mà bị thất bại quá nhiều lần. Để tránh cho người liên hệ không bị khóa, bạn có thể tắt thiết đặt này. */
		adx_identity_lockoutenabled: boolean;
		/** Hiển thị thời gian người liên hệ bị khóa được mở khóa trở lại. */
		adx_identity_lockoutenddate_UtcDateAndTime: Date;
		/** Xác định xem việc xác thực web có được bật cho người liên hệ hay không. */
		adx_identity_logonenabled: boolean;
		/** Xác định xem số điện thoại đã được người liên hệ xác nhận hay chưa. */
		adx_identity_mobilephoneconfirmed: boolean;
		adx_identity_newpassword: string;
		adx_identity_passwordhash: string;
		/** Mã thông báo được dùng để quản lý phiên xác thực web. */
		adx_identity_securitystamp: string;
		/** Xác định xem việc xác thực hai yếu tố có được bật cho người liên hệ hay không. */
		adx_identity_twofactorenabled: boolean;
		/** Hiển thị danh tính người dùng cho xác thực web cục bộ. */
		adx_identity_username: string;
		Adx_ModifiedByIPAddress: string;
		Adx_ModifiedByUsername: string;
		Adx_OrganizationName: string;
		/** LCID cổng thông tin ưa dùng của người dùng */
		adx_preferredlcid: number;
		adx_profilealert: boolean;
		adx_profilealertdate_UtcDateAndTime: Date;
		adx_profilealertinstructions: string;
		Adx_ProfileIsAnonymous: boolean;
		Adx_ProfileLastActivity_UtcDateAndTime: Date;
		adx_profilemodifiedon_UtcDateAndTime: Date;
		adx_PublicProfileCopy: string;
		Adx_TimeZone: number;
		/** Chỉ sử dụng trong hệ thống. */
		readonly Aging30: number;
		/** Hiển thị trường Tuổi nợ 30 được quy đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
		readonly Aging30_Base: number;
		/** Chỉ sử dụng trong hệ thống. */
		readonly Aging60: number;
		/** Hiển thị trường Tuổi nợ 60 được quy đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
		readonly Aging60_Base: number;
		/** Chỉ sử dụng trong hệ thống. */
		readonly Aging90: number;
		/** Hiển thị trường Tuổi nợ 90 được quy đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
		readonly Aging90_Base: number;
		/** Nhập ngày cưới hoặc ngày kỷ niệm dịch vụ của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
		Anniversary_DateOnly: Date;
		/** Nhập thu nhập hàng năm của người liên hệ để sử dụng trong quá trình lập hồ sơ và phân tích tài chính. */
		AnnualIncome: number;
		/** Hiển thị trường Thu nhập Hàng năm được đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
		readonly AnnualIncome_Base: number;
		/** Nhập tên trợ lý của người liên hệ. */
		AssistantName: string;
		/** Nhập số điện thoại cho trợ lý của người liên hệ. */
		AssistantPhone: string;
		/** Nhập sinh nhật của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
		BirthDate_DateOnly: Date;
		/** Nhập số điện thoại doanh nghiệp thứ hai cho người liên hệ này. */
		Business2: string;
		/** Nhập số điện thoại gọi lại cho người liên hệ này. */
		Callback: string;
		/** Nhập tên các con của người liên hệ để tham chiếu trong các liên lạc và chương trình khách hàng. */
		ChildrensNames: string;
		/** Nhập điện thoại công ty của người liên hệ. */
		Company: string;
		/** Mã định danh duy nhất của người liên hệ. */
		ContactId: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Hiển thị bên ngoài đã tạo bản ghi. */
		readonly CreatedByExternalParty: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập giới hạn tín dụng của người liên hệ để tham chiếu khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
		CreditLimit: number;
		/** Hiển thị trường Giới hạn Tín dụng được quy đổi sang loại tiền gốc mặc định của hệ thống cho mục đích báo cáo. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
		readonly CreditLimit_Base: number;
		/** Chọn người liên hệ có ở trạng thái treo tín dụng hay không, để tham chiếu khi xử lý các vấn đề về hóa đơn và kế toán. */
		CreditOnHold: boolean;
		/** Chọn quy mô công ty của người liên hệ dành cho mục đích báo cáo và phân khúc. */
		CustomerSizeCode: OptionSet.Contact.CustomerSizeCode;
		/** Chọn thể loại mô tả đúng nhất mối quan hệ giữa người liên hệ và tổ chức của bạn. */
		CustomerTypeCode: OptionSet.Contact.CustomerTypeCode;
		/** Nhập bộ phận hoặc đơn vị kinh doanh có người liên hệ làm việc trong công ty hoặc doanh nghiệp mẹ. */
		Department: string;
		/** Nhập thông tin bổ sung để mô tả người liên hệ, chẳng hạn như một đoạn trích từ trang web của công ty. */
		Description: string;
		/** Chọn người liên hệ có hoặc không chấp nhận gửi email hàng loạt trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. Nếu chọn Không Cho phép thì có thể thêm người liên hệ vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
		DoNotBulkEMail: boolean;
		/** Chọn người liên hệ có hoặc không chấp nhận gửi thư qua đường bưu điện trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. Nếu chọn Không Cho phép thì có thể thêm người liên hệ vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi thư tín. */
		DoNotBulkPostalMail: boolean;
		/** Chọn người liên hệ có hoặc không cho phép gửi email trực tiếp từ Microsoft Dynamics 365. Nếu chọn Không Cho phép thì Microsoft Dynamics 365 sẽ không gửi email. */
		DoNotEMail: boolean;
		/** Chọn người liên hệ có hoặc không cho phép gửi fax. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động fax được phân phối trong chiến dịch tiếp thị. */
		DoNotFax: boolean;
		/** Chọn người liên hệ có hoặc không chấp nhận gọi điện thoại. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động gọi điện thoại được phân phối trong chiến dịch tiếp thị. */
		DoNotPhone: boolean;
		/** Chọn người liên hệ có hoặc không cho phép gửi thư trực tiếp. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
		DoNotPostalMail: boolean;
		/** Chọn người liên hệ có hoặc không chấp nhận tài liệu tiếp thị, chẳng hạn như sách quảng cáo hoặc danh mục sản phẩm. Người liên hệ chọn không tham gia có thể không nhận được quảng cáo tiếp thị. */
		DoNotSendMM: boolean;
		/** Chọn trình độ học vấn cao nhất của người liên hệ để sử dụng trong phân khúc và phân tích. */
		EducationCode: OptionSet.Contact.EducationCode;
		/** Nhập địa chỉ email chính cho người liên hệ. */
		EMailAddress1: string;
		/** Nhập địa chỉ email phụ cho người liên hệ. */
		EMailAddress2: string;
		/** Nhập địa chỉ email thay thế cho người liên hệ. */
		EMailAddress3: string;
		/** Nhập ID nhân viên hoặc số hiệu cho người liên hệ để tham chiếu trong đơn hàng, trường hợp dịch vụ hoặc các liên lạc khác với tổ chức của người liên hệ. */
		EmployeeId: string;
		/** Hiển thị hình ảnh mặc định cho bản ghi. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh cho người dùng bên ngoài. */
		ExternalUserIdentifier: string;
		/** Chọn tình trạng hôn nhân của người liên hệ để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
		FamilyStatusCode: OptionSet.Contact.FamilyStatusCode;
		/** Nhập số fax cho người liên hệ. */
		Fax: string;
		/** Nhập tên của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
		FirstName: string;
		/** Thông tin về khả năng cho phép theo dõi hoạt động email như hoạt động mở, số lần xem tệp đính kèm và số lần bấm vào liên kết đối với những email gửi tới người liên hệ. */
		FollowEmail: boolean;
		/** Nhập URL cho trang web FTP của người liên hệ để cho phép người dùng truy cập dữ liệu và chia sẻ tài liệu. */
		FtpSiteUrl: string;
		/** Kết hợp và cho biết tên và họ của người liên hệ để có thể hiển thị tên đầy đủ trong dạng xem và báo cáo. */
		readonly FullName: string;
		/** Chọn giới tính của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
		GenderCode: OptionSet.Contact.GenderCode;
		/** Nhập số hộ chiếu hoặc ID khác của chính phủ cho người liên hệ để sử dụng trong tài liệu hoặc báo cáo. */
		GovernmentId: string;
		/** Chọn người liên hệ có hay không có con để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
		HasChildrenCode: OptionSet.Contact.HasChildrenCode;
		/** Nhập số điện thoại nhà riêng thứ hai cho người liên hệ này. */
		Home2: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin về việc có tự động tạo người liên hệ hay không khi gửi email hoặc sắp xếp cuộc hẹn. */
		readonly IsAutoCreate: boolean;
		/** Chọn người liên hệ có hay không tồn tại trong hệ thống kế toán riêng biệt hoặc hệ thống khác, chẳng hạn như Microsoft Dynamics GP hoặc cơ sở dữ liệu ERP khác, để sử dụng trong quá trình tích hợp. */
		IsBackofficeCustomer: boolean;
		readonly IsPrivate: boolean;
		/** Nhập chức danh của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
		JobTitle: string;
		/** Nhập họ của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
		LastName: string;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Cho biết ngày bao gồm người liên hệ lần cuối cùng trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. */
		LastUsedInCampaign_UtcDateOnly: Date;
		/** Chọn nguồn tiếp thị chính đã khiến người liên hệ tìm đến tổ chức của bạn. */
		LeadSourceCode: OptionSet.Contact.LeadSourceCode;
		/** Nhập tên người quản lý của người liên hệ để sử dụng trong việc giải quyết vấn đề hoặc các liên lạc sau này với người liên hệ. */
		ManagerName: string;
		/** Nhập số điện thoại cho người quản lý của người liên hệ. */
		ManagerPhone: string;
		/** Xem có chỉ dành riêng cho tiếp thị hay không */
		MarketingOnly: boolean;
		/** Mã định danh duy nhất của người liên hệ chính để hợp nhất. */
		readonly MasterId: string;
		/** Cho biết tài khoản có được hợp nhất với người liên hệ chính hay không. */
		readonly Merged: boolean;
		/** Nhập tên đệm hoặc tên viết tắt của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác. */
		MiddleName: string;
		/** Nhập số điện thoại di động của người liên hệ. */
		MobilePhone: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Hiển thị bên ngoài đã sửa đổi bản ghi. */
		readonly ModifiedByExternalParty: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất cho Khách hàng được liên kết với Người liên hệ. */
		msa_managingpartnerid: string;
		/** Cho biết người liên hệ đã chọn không theo dõi web. */
		msdyn_disablewebtracking: boolean;
		/** Cho biết người liên hệ được coi là trẻ em hoặc trẻ vị thành niên trong khu vực pháp lý của họ. */
		msdyn_isminor: boolean;
		/** Cho biết người liên hệ được coi là trẻ em hoặc trẻ vị thành niên trong khu vực pháp lý của họ và có sự cho phép từ cha mẹ. */
		msdyn_isminorwithparentalconsent: boolean;
		/** Cho biết ngày giờ mà một người đã đồng ý với điều khoản và điều kiện của cổng thông tin. */
		msdyn_portaltermsagreementdate_UtcDateAndTime: Date;
		/** Ngôn ngữ cổng thông tin ưa dùng của người dùng */
		mspp_userpreferredlcid: OptionSet.Contact.mspp_userpreferredlcid;
		/** Nhập biệt danh của người liên hệ. */
		NickName: string;
		/** Nhập số lượng con cái của người liên hệ để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
		NumberOfChildren: number;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu người liên hệ. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu người liên hệ. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu người liên hệ. */
		readonly OwningUser: string;
		/** Nhập số máy nhắn tin của người liên hệ. */
		Pager: string;
		/** Mã định danh duy nhất của người liên hệ ở cấp độ cha. */
		readonly ParentContactId: string;
		/** Chọn tài khoản mẹ hoặc người liên hệ ở cấp độ mẹ cho người liên hệ nhằm cung cấp liên kết nhanh tới những chi tiết bổ sung, chẳng hạn như thông tin tài chính, hoạt động và cơ hội. */
		parentcustomerid_account: string;
		/** Chọn tài khoản mẹ hoặc người liên hệ ở cấp độ mẹ cho người liên hệ nhằm cung cấp liên kết nhanh tới những chi tiết bổ sung, chẳng hạn như thông tin tài chính, hoạt động và cơ hội. */
		parentcustomerid_contact: string;
		/** Cho biết người liên hệ có tham gia quy tắc quy trình làm việc hay không. */
		ParticipatesInWorkflow: boolean;
		/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
		PaymentTermsCode: OptionSet.Contact.PaymentTermsCode;
		/** Chọn ngày ưu tiên trong tuần cho cuộc hẹn dịch vụ. */
		PreferredAppointmentDayCode: OptionSet.Contact.PreferredAppointmentDayCode;
		/** Chọn giờ ưu tiên trong ngày cho cuộc hẹn dịch vụ. */
		PreferredAppointmentTimeCode: OptionSet.Contact.PreferredAppointmentTimeCode;
		/** Chọn phương thức liên hệ ưu tiên. */
		PreferredContactMethodCode: OptionSet.Contact.PreferredContactMethodCode;
		/** Chọn người đại diện dịch vụ khách hàng thông thường hay ưu tiên để tham chiếu khi lên lịch các hoạt động dịch vụ cho người liên hệ. */
		PreferredSystemUserId: string;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Nhập lời chào cho người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
		Salutation: string;
		/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
		ShippingMethodCode: OptionSet.Contact.ShippingMethodCode;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Người liên hệ. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho trường hợp này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Nhập tên vợ/chồng hoặc bạn đời của người liên hệ để tham chiếu trong các cuộc gọi, sự kiện hoặc các liên lạc khác với người liên hệ. */
		SpousesName: string;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Cho biết người liên hệ đang hiện hoạt hay không. Người liên hệ không hoạt động ở trạng thái chỉ đọc và không thể chỉnh sửa trừ khi được kích hoạt lại. */
		StateCode: OptionSet.Contact.StateCode;
		/** Chọn trạng thái của người liên hệ. */
		StatusCode: OptionSet.Contact.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		SubscriptionId: string;
		/** Nhập hậu tố của người liên hệ, chẳng hạn như Jr. (trẻ, con) hoặc Sr. (già, bố) để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
		Suffix: string;
		/** Nhập số điện thoại chính cho người liên hệ này. */
		Telephone1: string;
		/** Nhập số điện thoại thứ hai cho người liên hệ này. */
		Telephone2: string;
		/** Nhập số điện thoại thứ ba cho người liên hệ này. */
		Telephone3: string;
		/** Chọn khu vực hoặc vùng lãnh thổ cho người liên hệ để sử dụng trong phân khúc và phân tích. */
		TerritoryCode: OptionSet.Contact.TerritoryCode;
		/** Tổng thời gian mà tôi dành cho các email (đọc và viết) cùng các cuộc họp liên quan đến bản ghi người liên hệ. */
		readonly TimeSpentByMeOnEmailAndMeetings: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của người liên hệ. */
		readonly VersionNumber: number;
		/** Nhập URL trang web hoặc blog công việc hay cá nhân của người liên hệ. */
		WebSiteUrl: string;
		/** Nhập cách phát âm tên của người liên hệ, nếu tên này được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
		YomiFirstName: string;
		/** Cho biết kết hợp tên và họ phiên âm tiếng Nhật của người liên hệ để có thể hiển thị tên phiên âm đầy đủ trong dạng xem và báo cáo. */
		readonly YomiFullName: string;
		/** Nhập cách phát âm họ của người liên hệ, nếu họ được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
		YomiLastName: string;
		/** Nhập cách phát âm tên đệm của người liên hệ, nếu tên được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
		YomiMiddleName: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của tài khoản khách hàng có người liên hệ được liên kết. */
			readonly AccountId: string;
			/** Chọn vai trò của người liên hệ trong công ty hoặc quy trình bán hàng, chẳng hạn như người ra quyết định, nhân viên hoặc người ảnh hưởng. */
			readonly AccountRoleCode: string;
			/** Mã định danh duy nhất cho địa chỉ 1. */
			readonly Address1_AddressId: string;
			/** Chọn loại địa chỉ chính. */
			readonly Address1_AddressTypeCode: string;
			/** Nhập thành phố cho địa chỉ chính. */
			readonly Address1_City: string;
			/** Cho biết địa chỉ chính đầy đủ. */
			readonly Address1_Composite: string;
			/** Nhập quốc gia hoặc khu vực cho địa chỉ chính. */
			readonly Address1_Country: string;
			/** Nhập hạt cho địa chỉ chính. */
			readonly Address1_County: string;
			/** Nhập số fax liên kết với địa chỉ chính. */
			readonly Address1_Fax: string;
			/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ chính để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
			readonly Address1_FreightTermsCode: string;
			/** Nhập giá trị vĩ độ cho địa chỉ chính để sử dụng trong ánh xạ và các ứng dụng khác. */
			readonly Address1_Latitude: string;
			/** Nhập dòng đầu tiên của địa chỉ chính. */
			readonly Address1_Line1: string;
			/** Nhập dòng thứ hai của địa chỉ chính. */
			readonly Address1_Line2: string;
			/** Nhập dòng thứ ba của địa chỉ chính. */
			readonly Address1_Line3: string;
			/** Nhập giá trị kinh độ cho địa chỉ chính để sử dụng trong ánh xạ và các ứng dụng khác. */
			readonly Address1_Longitude: string;
			/** Nhập tên mô tả cho địa chỉ chính, chẳng hạn như Trụ sở chính của Tập đoàn. */
			readonly Address1_Name: string;
			/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ chính. */
			readonly Address1_PostalCode: string;
			/** Nhập số hòm thư của địa chỉ chính. */
			readonly Address1_PostOfficeBox: string;
			/** Nhập tên của người liên hệ chính tại địa chỉ chính của tài khoản. */
			readonly Address1_PrimaryContactName: string;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			readonly Address1_ShippingMethodCode: string;
			/** Nhập bang hoặc tỉnh của địa chỉ chính. */
			readonly Address1_StateOrProvince: string;
			/** Nhập số điện thoại chính liên kết với địa chỉ chính. */
			readonly Address1_Telephone1: string;
			/** Nhập số điện thoại thứ hai liên kết với địa chỉ chính. */
			readonly Address1_Telephone2: string;
			/** Nhập số điện thoại thứ ba liên kết với địa chỉ chính. */
			readonly Address1_Telephone3: string;
			/** Nhập vùng UPS của địa chỉ chính để đảm bảo phí vận chuyển được tính chính xác và hàng được giao kịp thời nếu giao bằng UPS. */
			readonly Address1_UPSZone: string;
			/** Chọn múi giờ hoặc phần bù UTC cho địa chỉ này để người khác có thể tham chiếu khi họ liên hệ với người trong địa chỉ này. */
			readonly Address1_UTCOffset: string;
			/** Mã định danh duy nhất cho địa chỉ 2. */
			readonly Address2_AddressId: string;
			/** Chọn loại địa chỉ phụ. */
			readonly Address2_AddressTypeCode: string;
			/** Nhập thành phố cho địa chỉ phụ. */
			readonly Address2_City: string;
			/** Cho biết địa chỉ phụ đầy đủ. */
			readonly Address2_Composite: string;
			/** Nhập quốc gia hoặc khu vực cho địa chỉ phụ. */
			readonly Address2_Country: string;
			/** Nhập hạt cho địa chỉ phụ. */
			readonly Address2_County: string;
			/** Nhập số fax liên kết với địa chỉ phụ. */
			readonly Address2_Fax: string;
			/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ phụ để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
			readonly Address2_FreightTermsCode: string;
			/** Nhập giá trị vĩ độ cho địa chỉ phụ để sử dụng trong ánh xạ và các ứng dụng khác. */
			readonly Address2_Latitude: string;
			/** Nhập dòng đầu tiên của địa chỉ phụ. */
			readonly Address2_Line1: string;
			/** Nhập dòng thứ hai của địa chỉ phụ. */
			readonly Address2_Line2: string;
			/** Nhập dòng thứ ba của địa chỉ phụ. */
			readonly Address2_Line3: string;
			/** Nhập giá trị kinh độ cho địa chỉ phụ để sử dụng trong ánh xạ và các ứng dụng khác. */
			readonly Address2_Longitude: string;
			/** Nhập tên mô tả cho địa chỉ phụ, chẳng hạn như Trụ sở chính của Tập đoàn. */
			readonly Address2_Name: string;
			/** Nhập Mã ZIP hoặc mã bưu điện cho địa chỉ phụ. */
			readonly Address2_PostalCode: string;
			/** Nhập số hòm thư của địa chỉ phụ. */
			readonly Address2_PostOfficeBox: string;
			/** Nhập tên của người liên hệ chính tại địa chỉ phụ của tài khoản. */
			readonly Address2_PrimaryContactName: string;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			readonly Address2_ShippingMethodCode: string;
			/** Nhập bang hoặc tỉnh của địa chỉ phụ. */
			readonly Address2_StateOrProvince: string;
			/** Nhập số điện thoại chính liên kết với địa chỉ phụ. */
			readonly Address2_Telephone1: string;
			/** Nhập số điện thoại thứ hai liên kết với địa chỉ phụ. */
			readonly Address2_Telephone2: string;
			/** Nhập số điện thoại thứ ba liên kết với địa chỉ phụ. */
			readonly Address2_Telephone3: string;
			/** Nhập vùng UPS của địa chỉ phụ để đảm bảo phí vận chuyển được tính chính xác và hàng được giao kịp thời nếu giao bằng UPS. */
			readonly Address2_UPSZone: string;
			/** Chọn múi giờ hoặc phần bù UTC cho địa chỉ này để người khác có thể tham chiếu khi họ liên hệ với người trong địa chỉ này. */
			readonly Address2_UTCOffset: string;
			/** Mã định danh duy nhất cho địa chỉ 3. */
			readonly Address3_AddressId: string;
			/** Chọn loại địa chỉ thứ ba. */
			readonly Address3_AddressTypeCode: string;
			/** Nhập thành phố cho địa chỉ thứ ba. */
			readonly Address3_City: string;
			/** Cho biết địa chỉ thứ ba đầy đủ. */
			readonly Address3_Composite: string;
			/** quốc gia hoặc khu vực cho địa chỉ thứ ba. */
			readonly Address3_Country: string;
			/** Nhập hạt cho địa chỉ thứ ba. */
			readonly Address3_County: string;
			/** Nhập số fax liên kết với địa chỉ thứ ba. */
			readonly Address3_Fax: string;
			/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ thứ ba để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
			readonly Address3_FreightTermsCode: string;
			/** Nhập giá trị vĩ độ cho địa chỉ thứ ba để sử dụng trong ánh xạ và các ứng dụng khác. */
			readonly Address3_Latitude: string;
			/** Nhập dòng đầu tiên của địa chỉ thứ ba. */
			readonly Address3_Line1: string;
			/** dòng thứ hai của địa chỉ thứ ba. */
			readonly Address3_Line2: string;
			/** dòng thứ ba của địa chỉ thứ ba. */
			readonly Address3_Line3: string;
			/** Nhập giá trị kinh độ cho địa chỉ thứ ba để sử dụng trong ánh xạ và các ứng dụng khác. */
			readonly Address3_Longitude: string;
			/** Nhập tên mô tả cho địa chỉ thứ ba, chẳng hạn như Trụ sở chính của Tập đoàn. */
			readonly Address3_Name: string;
			/** Mã ZIP hoặc mã bưu điện của địa chỉ thứ ba. */
			readonly Address3_PostalCode: string;
			/** số hòm thư của địa chỉ thứ ba. */
			readonly Address3_PostOfficeBox: string;
			/** Nhập tên của người liên hệ chính tại địa chỉ thứ ba của tài khoản. */
			readonly Address3_PrimaryContactName: string;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			readonly Address3_ShippingMethodCode: string;
			/** bang hoặc tỉnh của địa chỉ thứ ba. */
			readonly Address3_StateOrProvince: string;
			/** Nhập số điện thoại chính liên kết với địa chỉ thứ ba. */
			readonly Address3_Telephone1: string;
			/** Nhập số điện thoại thứ hai liên kết với địa chỉ thứ ba. */
			readonly Address3_Telephone2: string;
			/** Nhập số điện thoại thứ ba liên kết với địa chỉ chính. */
			readonly Address3_Telephone3: string;
			/** Nhập vùng UPS của địa chỉ thứ ba để đảm bảo phí vận chuyển được tính chính xác và hàng được giao kịp thời nếu giao bằng UPS. */
			readonly Address3_UPSZone: string;
			/** Chọn múi giờ hoặc phần bù UTC cho địa chỉ này để người khác có thể tham chiếu khi họ liên hệ với người trong địa chỉ này. */
			readonly Address3_UTCOffset: string;
			readonly adx_ConfirmRemovePassword: string;
			readonly Adx_CreatedByIPAddress: string;
			readonly Adx_CreatedByUsername: string;
			/** Hiển thị tổng số những lần nhập sai mật khẩu hiện tại cho người liên hệ này. */
			readonly adx_identity_accessfailedcount: string;
			/** Xác định xem email đã được người liên hệ xác nhận hay chưa. */
			readonly adx_identity_emailaddress1confirmed: string;
			/** Cho biết ngày giờ mà người dùng đăng nhập thành công vào cổng thông tin lần cuối. */
			readonly adx_identity_lastsuccessfullogin_UtcDateAndTime: string;
			/** Cho biết người liên hệ không thể đăng nhập vào cổng thông tin bằng cách dùng tài khoản cục bộ được nữa. */
			readonly adx_identity_locallogindisabled: string;
			/** Xác định khả năng người liên hệ này sẽ để lại dấu vết của những lần truy cập không thành công và sẽ bị khóa sau khi cố gắng truy cập mà bị thất bại quá nhiều lần. Để tránh cho người liên hệ không bị khóa, bạn có thể tắt thiết đặt này. */
			readonly adx_identity_lockoutenabled: string;
			/** Hiển thị thời gian người liên hệ bị khóa được mở khóa trở lại. */
			readonly adx_identity_lockoutenddate_UtcDateAndTime: string;
			/** Xác định xem việc xác thực web có được bật cho người liên hệ hay không. */
			readonly adx_identity_logonenabled: string;
			/** Xác định xem số điện thoại đã được người liên hệ xác nhận hay chưa. */
			readonly adx_identity_mobilephoneconfirmed: string;
			readonly adx_identity_newpassword: string;
			readonly adx_identity_passwordhash: string;
			/** Mã thông báo được dùng để quản lý phiên xác thực web. */
			readonly adx_identity_securitystamp: string;
			/** Xác định xem việc xác thực hai yếu tố có được bật cho người liên hệ hay không. */
			readonly adx_identity_twofactorenabled: string;
			/** Hiển thị danh tính người dùng cho xác thực web cục bộ. */
			readonly adx_identity_username: string;
			readonly Adx_ModifiedByIPAddress: string;
			readonly Adx_ModifiedByUsername: string;
			readonly Adx_OrganizationName: string;
			/** LCID cổng thông tin ưa dùng của người dùng */
			readonly adx_preferredlcid: string;
			readonly adx_profilealert: string;
			readonly adx_profilealertdate_UtcDateAndTime: string;
			readonly adx_profilealertinstructions: string;
			readonly Adx_ProfileIsAnonymous: string;
			readonly Adx_ProfileLastActivity_UtcDateAndTime: string;
			readonly adx_profilemodifiedon_UtcDateAndTime: string;
			readonly adx_PublicProfileCopy: string;
			readonly Adx_TimeZone: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly Aging30: string;
			/** Hiển thị trường Tuổi nợ 30 được quy đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
			readonly Aging30_Base: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly Aging60: string;
			/** Hiển thị trường Tuổi nợ 60 được quy đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
			readonly Aging60_Base: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly Aging90: string;
			/** Hiển thị trường Tuổi nợ 90 được quy đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
			readonly Aging90_Base: string;
			/** Nhập ngày cưới hoặc ngày kỷ niệm dịch vụ của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
			readonly Anniversary_DateOnly: string;
			/** Nhập thu nhập hàng năm của người liên hệ để sử dụng trong quá trình lập hồ sơ và phân tích tài chính. */
			readonly AnnualIncome: string;
			/** Hiển thị trường Thu nhập Hàng năm được đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
			readonly AnnualIncome_Base: string;
			/** Nhập tên trợ lý của người liên hệ. */
			readonly AssistantName: string;
			/** Nhập số điện thoại cho trợ lý của người liên hệ. */
			readonly AssistantPhone: string;
			/** Nhập sinh nhật của người liên hệ để sử dụng trong chương trình quà tặng cho khách hàng hoặc các liên lạc khác. */
			readonly BirthDate_DateOnly: string;
			/** Nhập số điện thoại doanh nghiệp thứ hai cho người liên hệ này. */
			readonly Business2: string;
			/** Nhập số điện thoại gọi lại cho người liên hệ này. */
			readonly Callback: string;
			/** Nhập tên các con của người liên hệ để tham chiếu trong các liên lạc và chương trình khách hàng. */
			readonly ChildrensNames: string;
			/** Nhập điện thoại công ty của người liên hệ. */
			readonly Company: string;
			/** Mã định danh duy nhất của người liên hệ. */
			readonly ContactId: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Hiển thị bên ngoài đã tạo bản ghi. */
			readonly CreatedByExternalParty: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập giới hạn tín dụng của người liên hệ để tham chiếu khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			readonly CreditLimit: string;
			/** Hiển thị trường Giới hạn Tín dụng được quy đổi sang loại tiền gốc mặc định của hệ thống cho mục đích báo cáo. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
			readonly CreditLimit_Base: string;
			/** Chọn người liên hệ có ở trạng thái treo tín dụng hay không, để tham chiếu khi xử lý các vấn đề về hóa đơn và kế toán. */
			readonly CreditOnHold: string;
			/** Chọn quy mô công ty của người liên hệ dành cho mục đích báo cáo và phân khúc. */
			readonly CustomerSizeCode: string;
			/** Chọn thể loại mô tả đúng nhất mối quan hệ giữa người liên hệ và tổ chức của bạn. */
			readonly CustomerTypeCode: string;
			/** Nhập bộ phận hoặc đơn vị kinh doanh có người liên hệ làm việc trong công ty hoặc doanh nghiệp mẹ. */
			readonly Department: string;
			/** Nhập thông tin bổ sung để mô tả người liên hệ, chẳng hạn như một đoạn trích từ trang web của công ty. */
			readonly Description: string;
			/** Chọn người liên hệ có hoặc không chấp nhận gửi email hàng loạt trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. Nếu chọn Không Cho phép thì có thể thêm người liên hệ vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
			readonly DoNotBulkEMail: string;
			/** Chọn người liên hệ có hoặc không chấp nhận gửi thư qua đường bưu điện trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. Nếu chọn Không Cho phép thì có thể thêm người liên hệ vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi thư tín. */
			readonly DoNotBulkPostalMail: string;
			/** Chọn người liên hệ có hoặc không cho phép gửi email trực tiếp từ Microsoft Dynamics 365. Nếu chọn Không Cho phép thì Microsoft Dynamics 365 sẽ không gửi email. */
			readonly DoNotEMail: string;
			/** Chọn người liên hệ có hoặc không cho phép gửi fax. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động fax được phân phối trong chiến dịch tiếp thị. */
			readonly DoNotFax: string;
			/** Chọn người liên hệ có hoặc không chấp nhận gọi điện thoại. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi mọi hoạt động gọi điện thoại được phân phối trong chiến dịch tiếp thị. */
			readonly DoNotPhone: string;
			/** Chọn người liên hệ có hoặc không cho phép gửi thư trực tiếp. Nếu chọn Không Cho phép thì người liên hệ sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
			readonly DoNotPostalMail: string;
			/** Chọn người liên hệ có hoặc không chấp nhận tài liệu tiếp thị, chẳng hạn như sách quảng cáo hoặc danh mục sản phẩm. Người liên hệ chọn không tham gia có thể không nhận được quảng cáo tiếp thị. */
			readonly DoNotSendMM: string;
			/** Chọn trình độ học vấn cao nhất của người liên hệ để sử dụng trong phân khúc và phân tích. */
			readonly EducationCode: string;
			/** Nhập địa chỉ email chính cho người liên hệ. */
			readonly EMailAddress1: string;
			/** Nhập địa chỉ email phụ cho người liên hệ. */
			readonly EMailAddress2: string;
			/** Nhập địa chỉ email thay thế cho người liên hệ. */
			readonly EMailAddress3: string;
			/** Nhập ID nhân viên hoặc số hiệu cho người liên hệ để tham chiếu trong đơn hàng, trường hợp dịch vụ hoặc các liên lạc khác với tổ chức của người liên hệ. */
			readonly EmployeeId: string;
			/** Hiển thị hình ảnh mặc định cho bản ghi. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh cho người dùng bên ngoài. */
			readonly ExternalUserIdentifier: string;
			/** Chọn tình trạng hôn nhân của người liên hệ để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
			readonly FamilyStatusCode: string;
			/** Nhập số fax cho người liên hệ. */
			readonly Fax: string;
			/** Nhập tên của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			readonly FirstName: string;
			/** Thông tin về khả năng cho phép theo dõi hoạt động email như hoạt động mở, số lần xem tệp đính kèm và số lần bấm vào liên kết đối với những email gửi tới người liên hệ. */
			readonly FollowEmail: string;
			/** Nhập URL cho trang web FTP của người liên hệ để cho phép người dùng truy cập dữ liệu và chia sẻ tài liệu. */
			readonly FtpSiteUrl: string;
			/** Kết hợp và cho biết tên và họ của người liên hệ để có thể hiển thị tên đầy đủ trong dạng xem và báo cáo. */
			readonly FullName: string;
			/** Chọn giới tính của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			readonly GenderCode: string;
			/** Nhập số hộ chiếu hoặc ID khác của chính phủ cho người liên hệ để sử dụng trong tài liệu hoặc báo cáo. */
			readonly GovernmentId: string;
			/** Chọn người liên hệ có hay không có con để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
			readonly HasChildrenCode: string;
			/** Nhập số điện thoại nhà riêng thứ hai cho người liên hệ này. */
			readonly Home2: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin về việc có tự động tạo người liên hệ hay không khi gửi email hoặc sắp xếp cuộc hẹn. */
			readonly IsAutoCreate: string;
			/** Chọn người liên hệ có hay không tồn tại trong hệ thống kế toán riêng biệt hoặc hệ thống khác, chẳng hạn như Microsoft Dynamics GP hoặc cơ sở dữ liệu ERP khác, để sử dụng trong quá trình tích hợp. */
			readonly IsBackofficeCustomer: string;
			readonly IsPrivate: string;
			/** Nhập chức danh của người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			readonly JobTitle: string;
			/** Nhập họ của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			readonly LastName: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Cho biết ngày bao gồm người liên hệ lần cuối cùng trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. */
			readonly LastUsedInCampaign_UtcDateOnly: string;
			/** Chọn nguồn tiếp thị chính đã khiến người liên hệ tìm đến tổ chức của bạn. */
			readonly LeadSourceCode: string;
			/** Nhập tên người quản lý của người liên hệ để sử dụng trong việc giải quyết vấn đề hoặc các liên lạc sau này với người liên hệ. */
			readonly ManagerName: string;
			/** Nhập số điện thoại cho người quản lý của người liên hệ. */
			readonly ManagerPhone: string;
			/** Xem có chỉ dành riêng cho tiếp thị hay không */
			readonly MarketingOnly: string;
			/** Mã định danh duy nhất của người liên hệ chính để hợp nhất. */
			readonly MasterId: string;
			/** Cho biết tài khoản có được hợp nhất với người liên hệ chính hay không. */
			readonly Merged: string;
			/** Nhập tên đệm hoặc tên viết tắt của người liên hệ để đảm bảo người liên hệ được gọi tên chính xác. */
			readonly MiddleName: string;
			/** Nhập số điện thoại di động của người liên hệ. */
			readonly MobilePhone: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Hiển thị bên ngoài đã sửa đổi bản ghi. */
			readonly ModifiedByExternalParty: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất cho Khách hàng được liên kết với Người liên hệ. */
			readonly msa_managingpartnerid: string;
			/** Cho biết người liên hệ đã chọn không theo dõi web. */
			readonly msdyn_disablewebtracking: string;
			/** Cho biết người liên hệ được coi là trẻ em hoặc trẻ vị thành niên trong khu vực pháp lý của họ. */
			readonly msdyn_isminor: string;
			/** Cho biết người liên hệ được coi là trẻ em hoặc trẻ vị thành niên trong khu vực pháp lý của họ và có sự cho phép từ cha mẹ. */
			readonly msdyn_isminorwithparentalconsent: string;
			/** Cho biết ngày giờ mà một người đã đồng ý với điều khoản và điều kiện của cổng thông tin. */
			readonly msdyn_portaltermsagreementdate_UtcDateAndTime: string;
			/** Ngôn ngữ cổng thông tin ưa dùng của người dùng */
			readonly mspp_userpreferredlcid: string;
			/** Nhập biệt danh của người liên hệ. */
			readonly NickName: string;
			/** Nhập số lượng con cái của người liên hệ để tham chiếu trong các cuộc gọi điện thoại sau này và các liên lạc khác. */
			readonly NumberOfChildren: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu người liên hệ. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu người liên hệ. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu người liên hệ. */
			readonly OwningUser: string;
			/** Nhập số máy nhắn tin của người liên hệ. */
			readonly Pager: string;
			/** Mã định danh duy nhất của người liên hệ ở cấp độ cha. */
			readonly ParentContactId: string;
			/** Chọn tài khoản mẹ hoặc người liên hệ ở cấp độ mẹ cho người liên hệ nhằm cung cấp liên kết nhanh tới những chi tiết bổ sung, chẳng hạn như thông tin tài chính, hoạt động và cơ hội. */
			readonly parentcustomerid_account: string;
			/** Chọn tài khoản mẹ hoặc người liên hệ ở cấp độ mẹ cho người liên hệ nhằm cung cấp liên kết nhanh tới những chi tiết bổ sung, chẳng hạn như thông tin tài chính, hoạt động và cơ hội. */
			readonly parentcustomerid_contact: string;
			/** Cho biết người liên hệ có tham gia quy tắc quy trình làm việc hay không. */
			readonly ParticipatesInWorkflow: string;
			/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
			readonly PaymentTermsCode: string;
			/** Chọn ngày ưu tiên trong tuần cho cuộc hẹn dịch vụ. */
			readonly PreferredAppointmentDayCode: string;
			/** Chọn giờ ưu tiên trong ngày cho cuộc hẹn dịch vụ. */
			readonly PreferredAppointmentTimeCode: string;
			/** Chọn phương thức liên hệ ưu tiên. */
			readonly PreferredContactMethodCode: string;
			/** Chọn người đại diện dịch vụ khách hàng thông thường hay ưu tiên để tham chiếu khi lên lịch các hoạt động dịch vụ cho người liên hệ. */
			readonly PreferredSystemUserId: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Nhập lời chào cho người liên hệ để đảm bảo xưng hô chính xác với người liên hệ trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			readonly Salutation: string;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			readonly ShippingMethodCode: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Người liên hệ. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho trường hợp này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Nhập tên vợ/chồng hoặc bạn đời của người liên hệ để tham chiếu trong các cuộc gọi, sự kiện hoặc các liên lạc khác với người liên hệ. */
			readonly SpousesName: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Cho biết người liên hệ đang hiện hoạt hay không. Người liên hệ không hoạt động ở trạng thái chỉ đọc và không thể chỉnh sửa trừ khi được kích hoạt lại. */
			readonly StateCode: string;
			/** Chọn trạng thái của người liên hệ. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SubscriptionId: string;
			/** Nhập hậu tố của người liên hệ, chẳng hạn như Jr. (trẻ, con) hoặc Sr. (già, bố) để đảm bảo người liên hệ được gọi tên chính xác trong cuộc gọi, email và chiến dịch tiếp thị bán hàng. */
			readonly Suffix: string;
			/** Nhập số điện thoại chính cho người liên hệ này. */
			readonly Telephone1: string;
			/** Nhập số điện thoại thứ hai cho người liên hệ này. */
			readonly Telephone2: string;
			/** Nhập số điện thoại thứ ba cho người liên hệ này. */
			readonly Telephone3: string;
			/** Chọn khu vực hoặc vùng lãnh thổ cho người liên hệ để sử dụng trong phân khúc và phân tích. */
			readonly TerritoryCode: string;
			/** Tổng thời gian mà tôi dành cho các email (đọc và viết) cùng các cuộc họp liên quan đến bản ghi người liên hệ. */
			readonly TimeSpentByMeOnEmailAndMeetings: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của người liên hệ. */
			readonly VersionNumber: string;
			/** Nhập URL trang web hoặc blog công việc hay cá nhân của người liên hệ. */
			readonly WebSiteUrl: string;
			/** Nhập cách phát âm tên của người liên hệ, nếu tên này được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
			readonly YomiFirstName: string;
			/** Cho biết kết hợp tên và họ phiên âm tiếng Nhật của người liên hệ để có thể hiển thị tên phiên âm đầy đủ trong dạng xem và báo cáo. */
			readonly YomiFullName: string;
			/** Nhập cách phát âm họ của người liên hệ, nếu họ được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
			readonly YomiLastName: string;
			/** Nhập cách phát âm tên đệm của người liên hệ, nếu tên được chỉ định ở tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại với người liên hệ. */
			readonly YomiMiddleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace Contact {
		enum AccountRoleCode {
			/** 3 */
			Nguoi_anh_huong,
			/** 1 */
			Nguoi_ra_quyet_dinh,
			/** 2 */
			Nhan_vien
		}
		enum Address1_AddressTypeCode {
			/** 3 */
			Chinh,
			/** 4 */
			Khac,
			/** 2 */
			Nhan_hang,
			/** 1 */
			Nhan_hoa_don
		}
		enum Address1_FreightTermsCode {
			/** 1 */
			Cang_giao_hang,
			/** 2 */
			Mien_phi
		}
		enum Address1_ShippingMethodCode {
			/** 7 */
			Ban_le_dat_hang_truoc,
			/** 1 */
			Chuyen_cho_bang_may_bay,
			/** 6 */
			Day_tai,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 5 */
			Thu_gui_buu_dien,
			/** 4 */
			UPS
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address2_FreightTermsCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address3_AddressTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address3_FreightTermsCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum Address3_ShippingMethodCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum CustomerSizeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum CustomerTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum EducationCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum FamilyStatusCode {
			/** 2 */
			Da_ket_hon,
			/** 3 */
			Da_ly_di,
			/** 1 */
			Doc_than,
			/** 4 */
			Goa
		}
		enum GenderCode {
			/** 1 */
			Nam,
			/** 2 */
			Nu
		}
		enum HasChildrenCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum LeadSourceCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum mspp_userpreferredlcid {
			/** 1025 */
			Tieng_A_Rap,
			/** 1033 */
			Tieng_Anh,
			/** 1045 */
			Tieng_Ba_Lan_Ba_Lan,
			/** 1069 */
			Tieng_Basque_Basque,
			/** 2070 */
			Tieng_Bo_Dao_Nha_Bo_Dao_Nha,
			/** 1046 */
			Tieng_Bo_Dao_Nha_Brazil,
			/** 1026 */
			Tieng_Bulgaria_Bulgaria,
			/** 1027 */
			Tieng_Catalan_Catalan,
			/** 1050 */
			Tieng_Croatia_Croatia,
			/** 1030 */
			Tieng_Dan_Mach_Dan_Mach,
			/** 1037 */
			Tieng_Do_Thai,
			/** 1031 */
			Tieng_Duc_Duc,
			/** 1061 */
			Tieng_Estonia_Estonia,
			/** 1110 */
			Tieng_Galician_Tay_Ban_Nha,
			/** 1043 */
			Tieng_Ha_Lan_Ha_Lan,
			/** 1042 */
			Tieng_Han_Han_Quoc,
			/** 1081 */
			Tieng_Hindi_An_Do,
			/** 1038 */
			Tieng_Hungary_Hungary,
			/** 1032 */
			Tieng_Hy_Lap_Hy_Lap,
			/** 1057 */
			Tieng_Indonesia_Indonesia,
			/** 1040 */
			Tieng_Italy_Italy,
			/** 1087 */
			Tieng_Kazakh_Kazakhstan,
			/** 1062 */
			Tieng_Latvia_Latvia,
			/** 1063 */
			Tieng_Litva_Litva,
			/** 1086 */
			Tieng_Ma_Lai_Malaysia,
			/** 1044 */
			Tieng_Na_Uy_Bokmal_Na_Uy,
			/** 1049 */
			Tieng_Nga_Nga,
			/** 1041 */
			Tieng_Nhat_Nhat_Ban,
			/** 1035 */
			Tieng_Phan_Lan_Phan_Lan,
			/** 1036 */
			Tieng_Phap_Phap,
			/** 1048 */
			Tieng_Romania_Romania,
			/** 1029 */
			Tieng_Sec_Cong_hoa_Sec,
			/** 3098 */
			Tieng_Serbia_Cyrillic_Serbia,
			/** 2074 */
			Tieng_Serbia_Latinh_Serbia,
			/** 1051 */
			Tieng_Slovak_Slovakia,
			/** 1060 */
			Tieng_Slovenia_Slovenia,
			/** 3082 */
			Tieng_Tay_Ban_Nha_Cach_sap_xep_Truyen_thong_Tay_Ban_Nha,
			/** 1054 */
			Tieng_Thai_Thai_Lan,
			/** 1055 */
			Tieng_Tho_Nhi_Ky_Tho_Nhi_Ky,
			/** 1053 */
			Tieng_Thuy_Dien_Thuy_Dien,
			/** 3076 */
			Tieng_Trung_Dac_khu_Hanh_chinh_Hong_Kong,
			/** 1028 */
			Tieng_Trung_Phon_the,
			/** 2052 */
			Tieng_Trung_Trung_Quoc,
			/** 1058 */
			Tieng_Ukraina_Ukraina,
			/** 1066 */
			Tieng_Viet_Viet_Nam
		}
		enum ParentCustomerIdType {
		}
		enum PaymentTermsCode {
			/** 2 */
			_2_10_Tong_30,
			/** 1 */
			Tong_30,
			/** 3 */
			Tong_45,
			/** 4 */
			Tong_60
		}
		enum PreferredAppointmentDayCode {
			/** 0 */
			Chu_Nhat,
			/** 2 */
			Thu_Ba,
			/** 6 */
			Thu_Bay,
			/** 1 */
			Thu_Hai,
			/** 4 */
			Thu_Nam,
			/** 5 */
			Thu_Sau,
			/** 3 */
			Thu_Tu
		}
		enum PreferredAppointmentTimeCode {
			/** 2 */
			Buoi_chieu,
			/** 1 */
			Buoi_sang,
			/** 3 */
			Buoi_toi
		}
		enum PreferredContactMethodCode {
			/** 1 */
			Bat_ky,
			/** 3 */
			Dien_thoai,
			/** 2 */
			Email,
			/** 4 */
			Fax,
			/** 5 */
			Thu
		}
		enum ShippingMethodCode {
			/** 1 */
			Gia_tri_mac_dinh
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
		enum TerritoryCode {
			/** 1 */
			Gia_tri_mac_dinh
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