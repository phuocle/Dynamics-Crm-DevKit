//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKhach_hang {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập số lượng nhân viên làm việc tại tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Nhập giá trị doanh thu hàng năm của tài khoản được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
			Revenue: DevKit.Controls.Money;
		}
		interface tab_DETAILS_TAB_Sections {
			BILLING: DevKit.Controls.Section;
			ChildAccounts: DevKit.Controls.Section;
			COMPANY_PROFILE: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			DETAILS_TAB_section_6: DevKit.Controls.Section;
			SHIPPING: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			ACCOUNT_INFORMATION: DevKit.Controls.Section;
			ADDRESS: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
			SUMMARY_TAB_section_6: DevKit.Controls.Section;
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
			/** Nhập giới hạn tín dụng của tài khoản. Đây là tham chiếu hữu ích khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditLimit: DevKit.Controls.Money;
			/** Chọn trạng thái tín dụng cho tài khoản có đang treo hay không. Đây là tham chiếu hữu ích khi xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Nhập thông tin bổ sung để mô tả tài khoản, chẳng hạn như một đoạn trích từ trang web của công ty. */
			Description: DevKit.Controls.String;
			/** Chọn tài khoản có cho phép gửi email hàng loạt qua chiến dịch hay không. Nếu chọn Không Cho phép thì có thể thêm tài khoản vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi email trực tiếp từ Microsoft Dynamics 365 hay không. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi fax hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động fax được phân phối trong chiến dịch tiếp thị. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gọi điện hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gọi điện được phân phối trong chiến dịch tiếp thị. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi thư trực tiếp hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Nhập số fax cho tài khoản. */
			Fax: DevKit.Controls.String;
			/** Thông tin về khả năng cho phép theo dõi hoạt động email như hoạt động mở, xem tệp đính kèm và bấm vào liên kết đối với những email gửi tới khách hàng. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Chọn ngành chính của tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			IndustryCode: DevKit.Controls.OptionSet;
			mapcontrol: DevKit.Controls.Map;
			/** Nhập tên công ty hoặc doanh nghiệp. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Chọn cơ cấu quyền sở hữu của tài khoản, chẳng hạn như công khai hoặc riêng tư. */
			OwnershipCode: DevKit.Controls.OptionSet;
			/** Chọn tài khoản mẹ liên kết với tài khoản này để cho biết doanh nghiệp mẹ và con trong báo cáo và phân tích. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Chọn người liên hệ chính cho tài khoản để cung cấp truy cập nhanh vào chi tiết liên hệ. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Nhập mã Hệ thống Phân ngành Kinh doanh Tiêu chuẩn (SIC) cho biết ngành kinh doanh chính của tài khoản, để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			SIC: DevKit.Controls.String;
			/** Nhập số điện thoại chính cho tài khoản này. */
			Telephone1: DevKit.Controls.String;
			/** Nhập ký hiệu sở giao dịch chứng khoán cho tài khoản để theo dõi hoạt động tài chính của công ty. Bạn có thể bấm vào mã được nhập trong trường này để truy cập thông tin thương mại mới nhất từ Tài chính trên MSN. */
			TickerSymbol: DevKit.Controls.String;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Nhập URL trang web của tài khoản để truy cập chi tiết nhanh về hồ sơ công ty. */
			WebSiteURL: DevKit.Controls.String;
		}
		interface Navigation {
			account_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			account_adx_portalcomments: DevKit.Controls.NavigationItem,
			Account_Appointments: DevKit.Controls.NavigationItem,
			Account_Email_EmailSender: DevKit.Controls.NavigationItem,
			Account_Email_SendersAccount: DevKit.Controls.NavigationItem,
			Account_Emails: DevKit.Controls.NavigationItem,
			account_parent_account: DevKit.Controls.NavigationItem,
			Account_Phonecalls: DevKit.Controls.NavigationItem,
			Account_Tasks: DevKit.Controls.NavigationItem,
			adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem,
			contact_customer_accounts: DevKit.Controls.NavigationItem,
			msa_account_managingpartner: DevKit.Controls.NavigationItem,
			msa_contact_managingpartner: DevKit.Controls.NavigationItem
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface Grid {
			ChildAccounts: DevKit.Controls.Grid;
			Contacts: DevKit.Controls.Grid;
		}
	}
	class FormKhach_hang extends DevKit.IForm {
		/**
		* Khách hàng [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Khach_hang */
		Body: DevKit.FormKhach_hang.Body;
		/** The Header section of form Khach_hang */
		Header: DevKit.FormKhach_hang.Header;
		/** The Navigation of form Khach_hang */
		Navigation: DevKit.FormKhach_hang.Navigation;
		/** The QuickForm of form Khach_hang */
		QuickForm: DevKit.FormKhach_hang.QuickForm;
		/** The Grid of form Khach_hang */
		Grid: DevKit.FormKhach_hang.Grid;
		/** The SidePanes of form Khach_hang */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormKhach_hang_Trai_nghiem_tuong_tac {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập số lượng nhân viên làm việc tại tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Nhập giá trị doanh thu hàng năm của tài khoản được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
			Revenue: DevKit.Controls.Money;
		}
		interface tab_DETAILS_TAB_Sections {
			BILLING: DevKit.Controls.Section;
			COMPANY_PROFILE: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			DETAILS_TAB_section_6: DevKit.Controls.Section;
			SHIPPING: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			ACCOUNT_INFORMATION: DevKit.Controls.Section;
			ref_pan_SUMMARY_TAB_section_6: DevKit.Controls.Section;
			Timeline: DevKit.Controls.Section;
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
			/** Cho biết địa chỉ chính đầy đủ. */
			Address1_Composite: DevKit.Controls.String;
			/** Chọn điều khoản vận chuyển hàng hóa cho địa chỉ chính để đảm bảo yêu cầu giao hàng được xử lý chính xác. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Chọn một phương thức giao hàng cho hàng hóa được gửi đến địa chỉ này. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Nhập giới hạn tín dụng của tài khoản. Đây là tham chiếu hữu ích khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditLimit: DevKit.Controls.Money;
			/** Chọn trạng thái tín dụng cho tài khoản có đang treo hay không. Đây là tham chiếu hữu ích khi xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Nhập thông tin bổ sung để mô tả tài khoản, chẳng hạn như một đoạn trích từ trang web của công ty. */
			Description: DevKit.Controls.String;
			/** Chọn tài khoản có cho phép gửi email hàng loạt qua chiến dịch hay không. Nếu chọn Không Cho phép thì có thể thêm tài khoản vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi email trực tiếp từ Microsoft Dynamics 365 hay không. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi fax hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động fax được phân phối trong chiến dịch tiếp thị. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gọi điện hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gọi điện được phân phối trong chiến dịch tiếp thị. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi thư trực tiếp hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Nhập số fax cho tài khoản. */
			Fax: DevKit.Controls.String;
			/** Thông tin về khả năng cho phép theo dõi hoạt động email như hoạt động mở, xem tệp đính kèm và bấm vào liên kết đối với những email gửi tới khách hàng. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Chọn ngành chính của tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Nhập tên công ty hoặc doanh nghiệp. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Chọn cơ cấu quyền sở hữu của tài khoản, chẳng hạn như công khai hoặc riêng tư. */
			OwnershipCode: DevKit.Controls.OptionSet;
			/** Chọn tài khoản mẹ liên kết với tài khoản này để cho biết doanh nghiệp mẹ và con trong báo cáo và phân tích. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Chọn người liên hệ chính cho tài khoản để cung cấp truy cập nhanh vào chi tiết liên hệ. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Nhập mã Hệ thống Phân ngành Kinh doanh Tiêu chuẩn (SIC) cho biết ngành kinh doanh chính của tài khoản, để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			SIC: DevKit.Controls.String;
			/** Nhập số điện thoại chính cho tài khoản này. */
			Telephone1: DevKit.Controls.String;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Nhập URL trang web của tài khoản để truy cập chi tiết nhanh về hồ sơ công ty. */
			WebSiteURL: DevKit.Controls.String;
		}
		interface Navigation {
			account_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			account_adx_portalcomments: DevKit.Controls.NavigationItem,
			Account_Appointments: DevKit.Controls.NavigationItem,
			Account_Email_EmailSender: DevKit.Controls.NavigationItem,
			Account_Email_SendersAccount: DevKit.Controls.NavigationItem,
			Account_Emails: DevKit.Controls.NavigationItem,
			account_parent_account: DevKit.Controls.NavigationItem,
			Account_Phonecalls: DevKit.Controls.NavigationItem,
			Account_Tasks: DevKit.Controls.NavigationItem,
			adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem,
			contact_customer_accounts: DevKit.Controls.NavigationItem,
			msa_account_managingpartner: DevKit.Controls.NavigationItem,
			msa_contact_managingpartner: DevKit.Controls.NavigationItem
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface Grid {
			Contacts: DevKit.Controls.Grid;
		}
	}
	class FormKhach_hang_Trai_nghiem_tuong_tac extends DevKit.IForm {
		/**
		* Khách hàng Trải nghiệm tương tác [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Khach_hang_Trai_nghiem_tuong_tac */
		Body: DevKit.FormKhach_hang_Trai_nghiem_tuong_tac.Body;
		/** The Header section of form Khach_hang_Trai_nghiem_tuong_tac */
		Header: DevKit.FormKhach_hang_Trai_nghiem_tuong_tac.Header;
		/** The Navigation of form Khach_hang_Trai_nghiem_tuong_tac */
		Navigation: DevKit.FormKhach_hang_Trai_nghiem_tuong_tac.Navigation;
		/** The QuickForm of form Khach_hang_Trai_nghiem_tuong_tac */
		QuickForm: DevKit.FormKhach_hang_Trai_nghiem_tuong_tac.QuickForm;
		/** The Grid of form Khach_hang_Trai_nghiem_tuong_tac */
		Grid: DevKit.FormKhach_hang_Trai_nghiem_tuong_tac.Grid;
		/** The SidePanes of form Khach_hang_Trai_nghiem_tuong_tac */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập giới hạn tín dụng của tài khoản. Đây là tham chiếu hữu ích khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditLimit: DevKit.Controls.Money;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Chọn người liên hệ chính cho tài khoản để cung cấp truy cập nhanh vào chi tiết liên hệ. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Nhập giá trị doanh thu hàng năm của tài khoản được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
			Revenue: DevKit.Controls.Money;
		}
		interface tab_administration_Sections {
			contact_methods: DevKit.Controls.Section;
			internal_information: DevKit.Controls.Section;
		}
		interface tab_contacts_Sections {
			contacts: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			billing_information: DevKit.Controls.Section;
			description_2: DevKit.Controls.Section;
			professional_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			account_information: DevKit.Controls.Section;
			address: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_notes_and_activities_Sections {
			activities: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_contacts extends DevKit.Controls.ITab {
			Section: tab_contacts_Sections;
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
			contacts: tab_contacts;
			details: tab_details;
			general: tab_general;
			notes_and_activities: tab_notes_and_activities;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn một thể loại để cho biết tài khoản khách hàng là tiêu chuẩn hay là ưu tiên. */
			AccountCategoryCode: DevKit.Controls.OptionSet;
			/** Nhập số ID hoặc mã cho tài khoản để nhanh chóng tìm kiếm và xác định tài khoản trong dạng xem hệ thống. */
			AccountNumber: DevKit.Controls.String;
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
			/** Nhập giới hạn tín dụng của tài khoản. Đây là tham chiếu hữu ích khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditLimit: DevKit.Controls.Money;
			/** Chọn trạng thái tín dụng cho tài khoản có đang treo hay không. Đây là tham chiếu hữu ích khi xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Chọn loại mô tả đúng nhất mối quan hệ giữa khách hàng và tổ chức của bạn. */
			CustomerTypeCode: DevKit.Controls.OptionSet;
			/** Nhập thông tin bổ sung để mô tả tài khoản, chẳng hạn như một đoạn trích từ trang web của công ty. */
			Description: DevKit.Controls.String;
			/** Chọn tài khoản có cho phép gửi email hàng loạt qua chiến dịch hay không. Nếu chọn Không Cho phép thì có thể thêm tài khoản vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi email trực tiếp từ Microsoft Dynamics 365 hay không. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi fax hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động fax được phân phối trong chiến dịch tiếp thị. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gọi điện hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gọi điện được phân phối trong chiến dịch tiếp thị. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Chọn tài khoản có cho phép gửi thư trực tiếp hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Nhập địa chỉ email chính cho tài khoản. */
			EMailAddress1: DevKit.Controls.String;
			/** Nhập số fax cho tài khoản. */
			Fax: DevKit.Controls.String;
			/** Thông tin về khả năng cho phép theo dõi hoạt động email như hoạt động mở, xem tệp đính kèm và bấm vào liên kết đối với những email gửi tới khách hàng. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Chọn ngành chính của tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Nhập tên công ty hoặc doanh nghiệp. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Nhập số lượng nhân viên làm việc tại tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn cơ cấu quyền sở hữu của tài khoản, chẳng hạn như công khai hoặc riêng tư. */
			OwnershipCode: DevKit.Controls.OptionSet;
			/** Chọn tài khoản mẹ liên kết với tài khoản này để cho biết doanh nghiệp mẹ và con trong báo cáo và phân tích. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Chọn phương thức liên hệ ưu tiên. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Chọn người liên hệ chính cho tài khoản để cung cấp truy cập nhanh vào chi tiết liên hệ. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Nhập giá trị doanh thu hàng năm của tài khoản được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
			Revenue: DevKit.Controls.Money;
			/** Nhập mã Hệ thống Phân ngành Kinh doanh Tiêu chuẩn (SIC) cho biết ngành kinh doanh chính của tài khoản, để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			SIC: DevKit.Controls.String;
			/** Nhập số điện thoại chính cho tài khoản này. */
			Telephone1: DevKit.Controls.String;
			/** Nhập số điện thoại thứ hai cho tài khoản này. */
			Telephone2: DevKit.Controls.String;
			/** Nhập ký hiệu sở giao dịch chứng khoán cho tài khoản để theo dõi hoạt động tài chính của công ty. Bạn có thể bấm vào mã được nhập trong trường này để truy cập thông tin thương mại mới nhất từ Tài chính trên MSN. */
			TickerSymbol: DevKit.Controls.String;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Nhập URL trang web của tài khoản để truy cập chi tiết nhanh về hồ sơ công ty. */
			WebSiteURL: DevKit.Controls.String;
		}
		interface Navigation {
			account_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			account_adx_portalcomments: DevKit.Controls.NavigationItem,
			Account_Appointments: DevKit.Controls.NavigationItem,
			Account_Email_EmailSender: DevKit.Controls.NavigationItem,
			Account_Email_SendersAccount: DevKit.Controls.NavigationItem,
			Account_Emails: DevKit.Controls.NavigationItem,
			account_parent_account: DevKit.Controls.NavigationItem,
			Account_Phonecalls: DevKit.Controls.NavigationItem,
			Account_Tasks: DevKit.Controls.NavigationItem,
			adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem,
			contact_customer_accounts: DevKit.Controls.NavigationItem,
			msa_account_managingpartner: DevKit.Controls.NavigationItem,
			msa_contact_managingpartner: DevKit.Controls.NavigationItem
		}
		interface Grid {
			accountactivitiesgrid: DevKit.Controls.Grid;
			accountContactsGrid: DevKit.Controls.Grid;
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
	namespace FormTao_nhanh_tai_khoan {
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
			/** Nhập thông tin bổ sung để mô tả tài khoản, chẳng hạn như một đoạn trích từ trang web của công ty. */
			Description: DevKit.Controls.String;
			/** Nhập tên công ty hoặc doanh nghiệp. */
			Name: DevKit.Controls.String;
			/** Nhập số lượng nhân viên làm việc tại tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Chọn người liên hệ chính cho tài khoản để cung cấp truy cập nhanh vào chi tiết liên hệ. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Nhập giá trị doanh thu hàng năm của tài khoản được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
			Revenue: DevKit.Controls.Money;
			/** Nhập số điện thoại chính cho tài khoản này. */
			Telephone1: DevKit.Controls.String;
		}
	}
	class FormTao_nhanh_tai_khoan extends DevKit.IForm {
		/**
		* Tạo nhanh tài khoản [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Tao_nhanh_tai_khoan */
		Body: DevKit.FormTao_nhanh_tai_khoan.Body;
	}
	class AccountApi {
		/**
		* DynamicsCrm.DevKit AccountApi
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
		/** Chọn một thể loại để cho biết tài khoản khách hàng là tiêu chuẩn hay là ưu tiên. */
		AccountCategoryCode: OptionSet.Account.AccountCategoryCode;
		/** Chọn mã phân loại để biểu thị giá trị tiềm năng của tài khoản khách hàng dựa trên Hệ số thu nhập trên đầu tư (ROI) dự toán, mức độ hợp tác, độ dài chu kỳ bán hàng hoặc tiêu chí khác. */
		AccountClassificationCode: OptionSet.Account.AccountClassificationCode;
		/** Mã định danh duy nhất của tài khoản. */
		AccountId: string;
		/** Nhập số ID hoặc mã cho tài khoản để nhanh chóng tìm kiếm và xác định tài khoản trong dạng xem hệ thống. */
		AccountNumber: string;
		/** Chọn một mức xếp hạng để biểu thị giá trị của tài khoản khách hàng. */
		AccountRatingCode: OptionSet.Account.AccountRatingCode;
		/** Mã định danh duy nhất cho địa chỉ 1. */
		Address1_AddressId: string;
		/** Chọn loại địa chỉ chính. */
		Address1_AddressTypeCode: OptionSet.Account.Address1_AddressTypeCode;
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
		Address1_FreightTermsCode: OptionSet.Account.Address1_FreightTermsCode;
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
		Address1_ShippingMethodCode: OptionSet.Account.Address1_ShippingMethodCode;
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
		Address2_AddressTypeCode: OptionSet.Account.Address2_AddressTypeCode;
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
		Address2_FreightTermsCode: OptionSet.Account.Address2_FreightTermsCode;
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
		Address2_ShippingMethodCode: OptionSet.Account.Address2_ShippingMethodCode;
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
		Adx_CreatedByIPAddress: string;
		Adx_CreatedByUsername: string;
		Adx_ModifiedByIPAddress: string;
		Adx_ModifiedByUsername: string;
		/** Chỉ sử dụng trong hệ thống. */
		readonly Aging30: number;
		/** Giá trị tương đương theo loại tiền gốc của trường tuổi nợ 30. */
		readonly Aging30_Base: number;
		/** Chỉ sử dụng trong hệ thống. */
		readonly Aging60: number;
		/** Giá trị tương đương theo loại tiền gốc của trường tuổi nợ 60. */
		readonly Aging60_Base: number;
		/** Chỉ sử dụng trong hệ thống. */
		readonly Aging90: number;
		/** Giá trị tương đương theo loại tiền gốc của trường tuổi nợ 90. */
		readonly Aging90_Base: number;
		/** Chọn chỉ định pháp lý hoặc loại doanh nghiệp khác của tài khoản dành cho hợp đồng hoặc mục đích báo cáo. */
		BusinessTypeCode: OptionSet.Account.BusinessTypeCode;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Hiển thị bên ngoài đã tạo bản ghi. */
		readonly CreatedByExternalParty: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập giới hạn tín dụng của tài khoản. Đây là tham chiếu hữu ích khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
		CreditLimit: number;
		/** Cho biết giới hạn tín dụng được chuyển sang loại tiền gốc mặc định của hệ thống dành cho mục đích báo cáo. */
		readonly CreditLimit_Base: number;
		/** Chọn trạng thái tín dụng cho tài khoản có đang treo hay không. Đây là tham chiếu hữu ích khi xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
		CreditOnHold: boolean;
		/** Chọn loại quy mô hoặc phạm vi của tài khoản dành cho mục đích báo cáo và phân khúc. */
		CustomerSizeCode: OptionSet.Account.CustomerSizeCode;
		/** Chọn loại mô tả đúng nhất mối quan hệ giữa khách hàng và tổ chức của bạn. */
		CustomerTypeCode: OptionSet.Account.CustomerTypeCode;
		/** Nhập thông tin bổ sung để mô tả tài khoản, chẳng hạn như một đoạn trích từ trang web của công ty. */
		Description: string;
		/** Chọn tài khoản có cho phép gửi email hàng loạt qua chiến dịch hay không. Nếu chọn Không Cho phép thì có thể thêm tài khoản vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
		DoNotBulkEMail: boolean;
		/** Chọn tài khoản có cho phép gửi thư bưu điện hàng loạt qua chiến dịch tiếp thị hoặc chiến dịch nhanh gọn hay không. Nếu chọn Không Cho phép thì có thể thêm tài khoản vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi thư bưu điện. */
		DoNotBulkPostalMail: boolean;
		/** Chọn tài khoản có cho phép gửi email trực tiếp từ Microsoft Dynamics 365 hay không. */
		DoNotEMail: boolean;
		/** Chọn tài khoản có cho phép gửi fax hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động fax được phân phối trong chiến dịch tiếp thị. */
		DoNotFax: boolean;
		/** Chọn tài khoản có cho phép gọi điện hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gọi điện được phân phối trong chiến dịch tiếp thị. */
		DoNotPhone: boolean;
		/** Chọn tài khoản có cho phép gửi thư trực tiếp hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
		DoNotPostalMail: boolean;
		/** Chọn tài khoản có chấp nhận các tài liệu tiếp thị hay không, chẳng hạn như sách quảng cáo hoặc danh mục sản phẩm. */
		DoNotSendMM: boolean;
		/** Nhập địa chỉ email chính cho tài khoản. */
		EMailAddress1: string;
		/** Nhập địa chỉ email phụ cho tài khoản. */
		EMailAddress2: string;
		/** Nhập địa chỉ email thay thế cho tài khoản. */
		EMailAddress3: string;
		/** Hiển thị hình ảnh mặc định cho bản ghi. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Nhập số fax cho tài khoản. */
		Fax: string;
		/** Thông tin về khả năng cho phép theo dõi hoạt động email như hoạt động mở, xem tệp đính kèm và bấm vào liên kết đối với những email gửi tới khách hàng. */
		FollowEmail: boolean;
		/** Nhập URL cho trang web FTP của tài khoản để cho phép người dùng truy cập dữ liệu và chia sẻ tài liệu. */
		FtpSiteURL: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Chọn ngành chính của tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
		IndustryCode: OptionSet.Account.IndustryCode;
		readonly IsPrivate: boolean;
		/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Cho biết ngày tài khoản được bao gồm lần cuối cùng trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. */
		LastUsedInCampaign_UtcDateOnly: Date;
		/** Nhập giá trị vốn hóa thị trường của tài khoản để xác định vốn cổ phần của công ty được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
		MarketCap: number;
		/** Cho biết giá trị vốn hóa thị trường được đổi sang loại tiền gốc mặc định của hệ thống. */
		readonly MarketCap_Base: number;
		/** Xem có chỉ dành riêng cho tiếp thị hay không */
		MarketingOnly: boolean;
		/** Cho biết tài khoản tổng thể hợp nhất với tài khoản này. */
		readonly MasterId: string;
		/** Cho biết tài khoản có được hợp nhất với tài khoản khác hay không. */
		readonly Merged: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Hiển thị bên ngoài đã sửa đổi bản ghi. */
		readonly ModifiedByExternalParty: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Account associated with Account. */
		msa_managingpartnerid: string;
		/** Nhập tên công ty hoặc doanh nghiệp. */
		Name: string;
		/** Nhập số lượng nhân viên làm việc tại tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
		NumberOfEmployees: number;
		/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
		readonly OnHoldTime: number;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Chọn cơ cấu quyền sở hữu của tài khoản, chẳng hạn như công khai hoặc riêng tư. */
		OwnershipCode: OptionSet.Account.OwnershipCode;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu tài khoản. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu tài khoản. */
		readonly OwningUser: string;
		/** Chọn tài khoản mẹ liên kết với tài khoản này để cho biết doanh nghiệp mẹ và con trong báo cáo và phân tích. */
		ParentAccountId: string;
		/** Chỉ sử dụng trong hệ thống. Dữ liệu quy trình làm việc Microsoft Dynamics CRM 3.0 cũ. */
		ParticipatesInWorkflow: boolean;
		/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
		PaymentTermsCode: OptionSet.Account.PaymentTermsCode;
		/** Chọn ngày ưu tiên trong tuần cho cuộc hẹn dịch vụ. */
		PreferredAppointmentDayCode: OptionSet.Account.PreferredAppointmentDayCode;
		/** Chọn giờ ưu tiên trong ngày cho cuộc hẹn dịch vụ. */
		PreferredAppointmentTimeCode: OptionSet.Account.PreferredAppointmentTimeCode;
		/** Chọn phương thức liên hệ ưu tiên. */
		PreferredContactMethodCode: OptionSet.Account.PreferredContactMethodCode;
		/** Chọn người đại diện dịch vụ ưu tiên để tham chiếu khi bạn lên lịch các hoạt động dịch vụ cho tài khoản. */
		PreferredSystemUserId: string;
		/** Chọn người liên hệ chính cho tài khoản để cung cấp truy cập nhanh vào chi tiết liên hệ. */
		PrimaryContactId: string;
		/** ID Satori Chính của Tài khoản */
		PrimarySatoriId: string;
		/** ID Twitter Chính của Tài khoản */
		PrimaryTwitterId: string;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Nhập giá trị doanh thu hàng năm của tài khoản được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
		Revenue: number;
		/** Cho biết doanh thu hàng năm được đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
		readonly Revenue_Base: number;
		/** Nhập số lượng cổ phiếu hiện ra công chúng của tài khoản. Con số này được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
		SharesOutstanding: number;
		/** Chọn phương thức giao hàng cho hàng hóa được gửi đến địa chỉ của tài khoản để chỉ định hãng vận chuyển ưu tiên hoặc tùy chọn giao hàng khác. */
		ShippingMethodCode: OptionSet.Account.ShippingMethodCode;
		/** Nhập mã Hệ thống Phân ngành Kinh doanh Tiêu chuẩn (SIC) cho biết ngành kinh doanh chính của tài khoản, để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
		SIC: string;
		/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Khách hàng. */
		SLAId: string;
		/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho trường hợp này. Chỉ sử dụng nội bộ trường này. */
		readonly SLAInvokedId: string;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Cho biết tài khoản hiện hoạt hay không hoạt động. Các tài khoản không hoạt động ở trạng thái chỉ đọc và không chỉnh sửa được trừ khi chúng được kích hoạt lại. */
		StateCode: OptionSet.Account.StateCode;
		/** Chọn trạng thái của tài khoản. */
		StatusCode: OptionSet.Account.StatusCode;
		/** Nhập sở giao dịch chứng khoán có tài khoản được niêm yết để theo dõi cổ phiếu và hoạt động tài chính của công ty. */
		StockExchange: string;
		/** Nhập số điện thoại chính cho tài khoản này. */
		Telephone1: string;
		/** Nhập số điện thoại thứ hai cho tài khoản này. */
		Telephone2: string;
		/** Nhập số điện thoại thứ ba cho tài khoản này. */
		Telephone3: string;
		/** Chọn khu vực hoặc vùng lãnh thổ của tài khoản để sử dụng trong phân khúc và phân tích. */
		TerritoryCode: OptionSet.Account.TerritoryCode;
		/** Nhập ký hiệu sở giao dịch chứng khoán cho tài khoản để theo dõi hoạt động tài chính của công ty. Bạn có thể bấm vào mã được nhập trong trường này để truy cập thông tin thương mại mới nhất từ Tài chính trên MSN. */
		TickerSymbol: string;
		/** Tổng thời gian mà tôi dành cho các email (đọc và viết) cùng các cuộc họp liên quan đến bản ghi khách hàng. */
		readonly TimeSpentByMeOnEmailAndMeetings: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của tài khoản. */
		readonly VersionNumber: number;
		/** Nhập URL trang web của tài khoản để truy cập chi tiết nhanh về hồ sơ công ty. */
		WebSiteURL: string;
		/** Nhập cách phát âm tên công ty nếu được chỉ định trong tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại và các liên lạc khác. */
		YomiName: string;
		readonly FormattedValue: {
			/** Chọn một thể loại để cho biết tài khoản khách hàng là tiêu chuẩn hay là ưu tiên. */
			readonly AccountCategoryCode: string;
			/** Chọn mã phân loại để biểu thị giá trị tiềm năng của tài khoản khách hàng dựa trên Hệ số thu nhập trên đầu tư (ROI) dự toán, mức độ hợp tác, độ dài chu kỳ bán hàng hoặc tiêu chí khác. */
			readonly AccountClassificationCode: string;
			/** Mã định danh duy nhất của tài khoản. */
			readonly AccountId: string;
			/** Nhập số ID hoặc mã cho tài khoản để nhanh chóng tìm kiếm và xác định tài khoản trong dạng xem hệ thống. */
			readonly AccountNumber: string;
			/** Chọn một mức xếp hạng để biểu thị giá trị của tài khoản khách hàng. */
			readonly AccountRatingCode: string;
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
			readonly Adx_CreatedByIPAddress: string;
			readonly Adx_CreatedByUsername: string;
			readonly Adx_ModifiedByIPAddress: string;
			readonly Adx_ModifiedByUsername: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly Aging30: string;
			/** Giá trị tương đương theo loại tiền gốc của trường tuổi nợ 30. */
			readonly Aging30_Base: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly Aging60: string;
			/** Giá trị tương đương theo loại tiền gốc của trường tuổi nợ 60. */
			readonly Aging60_Base: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly Aging90: string;
			/** Giá trị tương đương theo loại tiền gốc của trường tuổi nợ 90. */
			readonly Aging90_Base: string;
			/** Chọn chỉ định pháp lý hoặc loại doanh nghiệp khác của tài khoản dành cho hợp đồng hoặc mục đích báo cáo. */
			readonly BusinessTypeCode: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Hiển thị bên ngoài đã tạo bản ghi. */
			readonly CreatedByExternalParty: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập giới hạn tín dụng của tài khoản. Đây là tham chiếu hữu ích khi bạn xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			readonly CreditLimit: string;
			/** Cho biết giới hạn tín dụng được chuyển sang loại tiền gốc mặc định của hệ thống dành cho mục đích báo cáo. */
			readonly CreditLimit_Base: string;
			/** Chọn trạng thái tín dụng cho tài khoản có đang treo hay không. Đây là tham chiếu hữu ích khi xử lý các vấn đề về hóa đơn và kế toán với khách hàng. */
			readonly CreditOnHold: string;
			/** Chọn loại quy mô hoặc phạm vi của tài khoản dành cho mục đích báo cáo và phân khúc. */
			readonly CustomerSizeCode: string;
			/** Chọn loại mô tả đúng nhất mối quan hệ giữa khách hàng và tổ chức của bạn. */
			readonly CustomerTypeCode: string;
			/** Nhập thông tin bổ sung để mô tả tài khoản, chẳng hạn như một đoạn trích từ trang web của công ty. */
			readonly Description: string;
			/** Chọn tài khoản có cho phép gửi email hàng loạt qua chiến dịch hay không. Nếu chọn Không Cho phép thì có thể thêm tài khoản vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi email. */
			readonly DoNotBulkEMail: string;
			/** Chọn tài khoản có cho phép gửi thư bưu điện hàng loạt qua chiến dịch tiếp thị hoặc chiến dịch nhanh gọn hay không. Nếu chọn Không Cho phép thì có thể thêm tài khoản vào danh sách khách hàng tiếp thị, nhưng sẽ loại trừ khỏi thư bưu điện. */
			readonly DoNotBulkPostalMail: string;
			/** Chọn tài khoản có cho phép gửi email trực tiếp từ Microsoft Dynamics 365 hay không. */
			readonly DoNotEMail: string;
			/** Chọn tài khoản có cho phép gửi fax hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động fax được phân phối trong chiến dịch tiếp thị. */
			readonly DoNotFax: string;
			/** Chọn tài khoản có cho phép gọi điện hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gọi điện được phân phối trong chiến dịch tiếp thị. */
			readonly DoNotPhone: string;
			/** Chọn tài khoản có cho phép gửi thư trực tiếp hay không. Nếu chọn Không Cho phép thì tài khoản sẽ bị loại trừ khỏi các hoạt động gửi thư được phân phối trong chiến dịch tiếp thị. */
			readonly DoNotPostalMail: string;
			/** Chọn tài khoản có chấp nhận các tài liệu tiếp thị hay không, chẳng hạn như sách quảng cáo hoặc danh mục sản phẩm. */
			readonly DoNotSendMM: string;
			/** Nhập địa chỉ email chính cho tài khoản. */
			readonly EMailAddress1: string;
			/** Nhập địa chỉ email phụ cho tài khoản. */
			readonly EMailAddress2: string;
			/** Nhập địa chỉ email thay thế cho tài khoản. */
			readonly EMailAddress3: string;
			/** Hiển thị hình ảnh mặc định cho bản ghi. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Nhập số fax cho tài khoản. */
			readonly Fax: string;
			/** Thông tin về khả năng cho phép theo dõi hoạt động email như hoạt động mở, xem tệp đính kèm và bấm vào liên kết đối với những email gửi tới khách hàng. */
			readonly FollowEmail: string;
			/** Nhập URL cho trang web FTP của tài khoản để cho phép người dùng truy cập dữ liệu và chia sẻ tài liệu. */
			readonly FtpSiteURL: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Chọn ngành chính của tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			readonly IndustryCode: string;
			readonly IsPrivate: string;
			/** Chứa nhãn ngày và giờ của lần tạm giữ gần đây nhất. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Cho biết ngày tài khoản được bao gồm lần cuối cùng trong chiến dịch tiếp thị hoặc chiến dịch nhanh gọn. */
			readonly LastUsedInCampaign_UtcDateOnly: string;
			/** Nhập giá trị vốn hóa thị trường của tài khoản để xác định vốn cổ phần của công ty được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
			readonly MarketCap: string;
			/** Cho biết giá trị vốn hóa thị trường được đổi sang loại tiền gốc mặc định của hệ thống. */
			readonly MarketCap_Base: string;
			/** Xem có chỉ dành riêng cho tiếp thị hay không */
			readonly MarketingOnly: string;
			/** Cho biết tài khoản tổng thể hợp nhất với tài khoản này. */
			readonly MasterId: string;
			/** Cho biết tài khoản có được hợp nhất với tài khoản khác hay không. */
			readonly Merged: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Hiển thị bên ngoài đã sửa đổi bản ghi. */
			readonly ModifiedByExternalParty: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Account associated with Account. */
			readonly msa_managingpartnerid: string;
			/** Nhập tên công ty hoặc doanh nghiệp. */
			readonly Name: string;
			/** Nhập số lượng nhân viên làm việc tại tài khoản để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			readonly NumberOfEmployees: string;
			/** Hiển thị khoảng thời gian tính bằng phút mà bản ghi bị tạm giữ. */
			readonly OnHoldTime: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Chọn cơ cấu quyền sở hữu của tài khoản, chẳng hạn như công khai hoặc riêng tư. */
			readonly OwnershipCode: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu tài khoản. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu tài khoản. */
			readonly OwningUser: string;
			/** Chọn tài khoản mẹ liên kết với tài khoản này để cho biết doanh nghiệp mẹ và con trong báo cáo và phân tích. */
			readonly ParentAccountId: string;
			/** Chỉ sử dụng trong hệ thống. Dữ liệu quy trình làm việc Microsoft Dynamics CRM 3.0 cũ. */
			readonly ParticipatesInWorkflow: string;
			/** Chọn điều khoản thanh toán để biểu thị thời điểm khách hàng cần thanh toán tổng số tiền. */
			readonly PaymentTermsCode: string;
			/** Chọn ngày ưu tiên trong tuần cho cuộc hẹn dịch vụ. */
			readonly PreferredAppointmentDayCode: string;
			/** Chọn giờ ưu tiên trong ngày cho cuộc hẹn dịch vụ. */
			readonly PreferredAppointmentTimeCode: string;
			/** Chọn phương thức liên hệ ưu tiên. */
			readonly PreferredContactMethodCode: string;
			/** Chọn người đại diện dịch vụ ưu tiên để tham chiếu khi bạn lên lịch các hoạt động dịch vụ cho tài khoản. */
			readonly PreferredSystemUserId: string;
			/** Chọn người liên hệ chính cho tài khoản để cung cấp truy cập nhanh vào chi tiết liên hệ. */
			readonly PrimaryContactId: string;
			/** ID Satori Chính của Tài khoản */
			readonly PrimarySatoriId: string;
			/** ID Twitter Chính của Tài khoản */
			readonly PrimaryTwitterId: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Nhập giá trị doanh thu hàng năm của tài khoản được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
			readonly Revenue: string;
			/** Cho biết doanh thu hàng năm được đổi sang loại tiền gốc mặc định của hệ thống. Các phép tính sử dụng tỷ giá được chỉ định trong vùng Loại tiền. */
			readonly Revenue_Base: string;
			/** Nhập số lượng cổ phiếu hiện ra công chúng của tài khoản. Con số này được sử dụng làm chỉ số trong phân tích hoạt động tài chính. */
			readonly SharesOutstanding: string;
			/** Chọn phương thức giao hàng cho hàng hóa được gửi đến địa chỉ của tài khoản để chỉ định hãng vận chuyển ưu tiên hoặc tùy chọn giao hàng khác. */
			readonly ShippingMethodCode: string;
			/** Nhập mã Hệ thống Phân ngành Kinh doanh Tiêu chuẩn (SIC) cho biết ngành kinh doanh chính của tài khoản, để sử dụng trong phân khúc tiếp thị và phân tích nhân khẩu học. */
			readonly SIC: string;
			/** Chọn thỏa thuận cấp độ dịch vụ (SLA) mà bạn muốn áp dụng cho bản ghi Khách hàng. */
			readonly SLAId: string;
			/** Thỏa thuận Cấp độ Dịch vụ lần cuối đã được áp dụng cho trường hợp này. Chỉ sử dụng nội bộ trường này. */
			readonly SLAInvokedId: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Cho biết tài khoản hiện hoạt hay không hoạt động. Các tài khoản không hoạt động ở trạng thái chỉ đọc và không chỉnh sửa được trừ khi chúng được kích hoạt lại. */
			readonly StateCode: string;
			/** Chọn trạng thái của tài khoản. */
			readonly StatusCode: string;
			/** Nhập sở giao dịch chứng khoán có tài khoản được niêm yết để theo dõi cổ phiếu và hoạt động tài chính của công ty. */
			readonly StockExchange: string;
			/** Nhập số điện thoại chính cho tài khoản này. */
			readonly Telephone1: string;
			/** Nhập số điện thoại thứ hai cho tài khoản này. */
			readonly Telephone2: string;
			/** Nhập số điện thoại thứ ba cho tài khoản này. */
			readonly Telephone3: string;
			/** Chọn khu vực hoặc vùng lãnh thổ của tài khoản để sử dụng trong phân khúc và phân tích. */
			readonly TerritoryCode: string;
			/** Nhập ký hiệu sở giao dịch chứng khoán cho tài khoản để theo dõi hoạt động tài chính của công ty. Bạn có thể bấm vào mã được nhập trong trường này để truy cập thông tin thương mại mới nhất từ Tài chính trên MSN. */
			readonly TickerSymbol: string;
			/** Tổng thời gian mà tôi dành cho các email (đọc và viết) cùng các cuộc họp liên quan đến bản ghi khách hàng. */
			readonly TimeSpentByMeOnEmailAndMeetings: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của tài khoản. */
			readonly VersionNumber: string;
			/** Nhập URL trang web của tài khoản để truy cập chi tiết nhanh về hồ sơ công ty. */
			readonly WebSiteURL: string;
			/** Nhập cách phát âm tên công ty nếu được chỉ định trong tiếng Nhật, nhằm đảm bảo tên được phát âm đúng trong các cuộc gọi điện thoại và các liên lạc khác. */
			readonly YomiName: string;
		}
	}
}
declare namespace OptionSet {
	namespace Account {
		enum AccountCategoryCode {
			/** 2 */
			Chuan,
			/** 1 */
			Khach_hang_Uu_tien
		}
		enum AccountClassificationCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum AccountRatingCode {
			/** 1 */
			Gia_tri_mac_dinh
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
		enum BusinessTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum CustomerSizeCode {
			/** 1 */
			Gia_tri_mac_dinh
		}
		enum CustomerTypeCode {
			/** 7 */
			Bao_chi,
			/** 11 */
			Dai_ly,
			/** 5 */
			Doi_tac,
			/** 1 */
			Doi_thu_canh_tranh,
			/** 12 */
			Khac,
			/** 3 */
			Khach_hang,
			/** 8 */
			Khach_hang_trien_vong,
			/** 6 */
			Nguoi_anh_huong,
			/** 9 */
			Nha_ban_le,
			/** 10 */
			Nha_cung_cap,
			/** 4 */
			Nha_dau_tu,
			/** 2 */
			Tu_van_vien
		}
		enum IndustryCode {
			/** 33 */
			Ban_buon,
			/** 25 */
			Ban_le_Dich_vu,
			/** 5 */
			Ban_le_Dich_vu_Cap_nuoc_trong_Toa_nha,
			/** 14 */
			Ban_le_Dich_vu_Giai_tri,
			/** 22 */
			Ban_le_Hang_hoa_Khong_lau_ben,
			/** 32 */
			Ban_le_Phuong_tien,
			/** 20 */
			Bao_hiem,
			/** 29 */
			Bat_dong_san_Dac_biet,
			/** 17 */
			Che_bien_Thuc_pham_va_Thuoc_la,
			/** 26 */
			Chi_nhanh_SIG,
			/** 13 */
			Dia_diem_An_Uong,
			/** 6 */
			Dich_vu_Kinh_doanh,
			/** 21 */
			Dich_vu_Phap_ly,
			/** 8 */
			Dich_vu_Tieu_dung,
			/** 23 */
			Dich_vu_Tieu_dung_Ben_ngoai,
			/** 27 */
			Dich_vu_Xa_hoi,
			/** 3 */
			In_va_Xuat_ban_Truyen_thong,
			/** 1 */
			Ke_toan,
			/** 4 */
			Nha_moi_gioi,
			/** 10 */
			Nha_phan_phoi_Nguoi_dieu_van_va_Nha_che_bien,
			/** 28 */
			Nha_thau_Giao_dich_Ben_ngoai_Dac_biet,
			/** 2 */
			Nong_nghiep_va_Trich_xuat_Tai_nguyen_Thien_nhien_Khong_Dau,
			/** 9 */
			Quan_ly_Thiet_ke_Chi_dao_va_Quang_cao,
			/** 12 */
			San_xuat_Lau_ben,
			/** 19 */
			Sua_chua_va_Bao_duong_Chuyen_den,
			/** 16 */
			Tai_chinh,
			/** 31 */
			Tao_va_Phan_phoi_Tien_ich,
			/** 15 */
			Thue_va_Cho_thue_Thiet_bi,
			/** 24 */
			Trich_xuat_va_Phan_phoi_Hoa_dau,
			/** 7 */
			Tu_van,
			/** 11 */
			Van_phong_va_Phong_kham_Bac_si,
			/** 30 */
			Van_tai,
			/** 18 */
			Xu_ly_Dua_vao_Nhieu_von_Chuyen_ve
		}
		enum OwnershipCode {
			/** 1 */
			Cong_khai,
			/** 3 */
			Cong_ty_con,
			/** 4 */
			Khac,
			/** 2 */
			Rieng_tu
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