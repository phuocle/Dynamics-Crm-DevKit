'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormKhach_hang = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActionCards: {},
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			ChildAccounts: {},
			Contacts: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			Fax: {},
			FollowEmail: {},
			IndustryCode: {},
			mapcontrol: {},
			Name: {},
			notescontrol: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			PrimaryContactId1: {},
			SIC: {},
			Telephone1: {},
			TickerSymbol: {},
			TransactionCurrencyId: {},
			WebSiteURL: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					BILLING: {},
					ChildAccounts: {},
					COMPANY_PROFILE: {},
					CONTACT_PREFERENCES: {},
					DETAILS_TAB_section_6: {},
					SHIPPING: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					ACCOUNT_INFORMATION: {},
					ADDRESS: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_section_6: {},
					SUMMARY_TAB_section_6: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			NumberOfEmployees: {},
			OwnerId: {},
			Revenue: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			ChildAccounts: {},
			Contacts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_adx_inviteredemptions: {},
			account_adx_portalcomments: {},
			Account_Appointments: {},
			Account_Email_EmailSender: {},
			Account_Email_SendersAccount: {},
			Account_Emails: {},
			account_parent_account: {},
			Account_Phonecalls: {},
			Account_Tasks: {},
			adx_invitation_assigntoaccount: {},
			contact_customer_accounts: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormKhach_hang_Trai_nghiem_tuong_tac = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			Contacts: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			Fax: {},
			FollowEmail: {},
			IndustryCode: {},
			Name: {},
			notescontrol: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			PrimaryContactId1: {},
			SIC: {},
			Telephone1: {},
			TransactionCurrencyId: {},
			WebSiteURL: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					BILLING: {},
					COMPANY_PROFILE: {},
					CONTACT_PREFERENCES: {},
					DETAILS_TAB_section_6: {},
					SHIPPING: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					ACCOUNT_INFORMATION: {},
					Timeline: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			NumberOfEmployees: {},
			OwnerId: {},
			Revenue: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Contacts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_adx_inviteredemptions: {},
			account_adx_portalcomments: {},
			Account_Appointments: {},
			Account_Email_EmailSender: {},
			Account_Email_SendersAccount: {},
			Account_Emails: {},
			account_parent_account: {},
			Account_Phonecalls: {},
			Account_Tasks: {},
			adx_invitation_assigntoaccount: {},
			contact_customer_accounts: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			accountactivitiesgrid: {},
			AccountCategoryCode: {},
			accountContactsGrid: {},
			AccountNumber: {},
			Address1_AddressTypeCode: {},
			Address1_City: {},
			Address1_Country: {},
			Address1_FreightTermsCode: {},
			Address1_Line1: {},
			Address1_Line2: {},
			Address1_Line3: {},
			Address1_Name: {},
			Address1_PostalCode: {},
			Address1_ShippingMethodCode: {},
			Address1_StateOrProvince: {},
			Address1_Telephone1: {},
			CreditLimit: {},
			CreditOnHold: {},
			CustomerTypeCode: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			EMailAddress1: {},
			Fax: {},
			FollowEmail: {},
			IndustryCode: {},
			Name: {},
			notescontrol: {},
			NumberOfEmployees: {},
			OwnerId: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			Revenue: {},
			SIC: {},
			Telephone1: {},
			Telephone2: {},
			TickerSymbol: {},
			TransactionCurrencyId: {},
			WebSiteURL: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			administration: {
				Section: {
					contact_methods: {},
					internal_information: {}
				}
			},
			contacts: {
				Section: {
					contacts: {}
				}
			},
			details: {
				Section: {
					billing_information: {},
					description_2: {},
					professional_information: {}
				}
			},
			general: {
				Section: {
					account_information: {},
					address: {},
					description: {},
					shipping_information: {}
				}
			},
			notes_and_activities: {
				Section: {
					activities: {},
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreditLimit: {},
			OwnerId: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			Revenue: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			accountactivitiesgrid: {},
			accountContactsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_adx_inviteredemptions: {},
			account_adx_portalcomments: {},
			Account_Appointments: {},
			Account_Email_EmailSender: {},
			Account_Email_SendersAccount: {},
			Account_Emails: {},
			account_parent_account: {},
			Account_Phonecalls: {},
			Account_Tasks: {},
			adx_invitation_assigntoaccount: {},
			contact_customer_accounts: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTao_nhanh_tai_khoan = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_City: {},
			Address1_Line1: {},
			Address1_Line2: {},
			Address1_PostalCode: {},
			Description: {},
			Name: {},
			NumberOfEmployees: {},
			PrimaryContactId: {},
			Revenue: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Account = {
		AccountCategoryCode : {
			Chuan: 2,
			Khach_hang_Uu_tien: 1
		},
		AccountClassificationCode : {
			Gia_tri_mac_dinh: 1
		},
		AccountRatingCode : {
			Gia_tri_mac_dinh: 1
		},
		Address1_AddressTypeCode : {
			Chinh: 3,
			Khac: 4,
			Nhan_hang: 2,
			Nhan_hoa_don: 1
		},
		Address1_FreightTermsCode : {
			Cang_giao_hang: 1,
			Mien_phi: 2
		},
		Address1_ShippingMethodCode : {
			Ban_le_dat_hang_truoc: 7,
			Chuyen_cho_bang_may_bay: 1,
			Day_tai: 6,
			DHL: 2,
			FedEx: 3,
			Thu_gui_buu_dien: 5,
			UPS: 4
		},
		Address2_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_FreightTermsCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		BusinessTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		CustomerSizeCode : {
			Gia_tri_mac_dinh: 1
		},
		CustomerTypeCode : {
			Bao_chi: 7,
			Dai_ly: 11,
			Doi_tac: 5,
			Doi_thu_canh_tranh: 1,
			Khac: 12,
			Khach_hang: 3,
			Khach_hang_trien_vong: 8,
			Nguoi_anh_huong: 6,
			Nha_ban_le: 9,
			Nha_cung_cap: 10,
			Nha_dau_tu: 4,
			Tu_van_vien: 2
		},
		IndustryCode : {
			Ban_buon: 33,
			Ban_le_Dich_vu: 25,
			Ban_le_Dich_vu_Cap_nuoc_trong_Toa_nha: 5,
			Ban_le_Dich_vu_Giai_tri: 14,
			Ban_le_Hang_hoa_Khong_lau_ben: 22,
			Ban_le_Phuong_tien: 32,
			Bao_hiem: 20,
			Bat_dong_san_Dac_biet: 29,
			Che_bien_Thuc_pham_va_Thuoc_la: 17,
			Chi_nhanh_SIG: 26,
			Dia_diem_An_Uong: 13,
			Dich_vu_Kinh_doanh: 6,
			Dich_vu_Phap_ly: 21,
			Dich_vu_Tieu_dung: 8,
			Dich_vu_Tieu_dung_Ben_ngoai: 23,
			Dich_vu_Xa_hoi: 27,
			In_va_Xuat_ban_Truyen_thong: 3,
			Ke_toan: 1,
			Nha_moi_gioi: 4,
			Nha_phan_phoi_Nguoi_dieu_van_va_Nha_che_bien: 10,
			Nha_thau_Giao_dich_Ben_ngoai_Dac_biet: 28,
			Nong_nghiep_va_Trich_xuat_Tai_nguyen_Thien_nhien_Khong_Dau: 2,
			Quan_ly_Thiet_ke_Chi_dao_va_Quang_cao: 9,
			San_xuat_Lau_ben: 12,
			Sua_chua_va_Bao_duong_Chuyen_den: 19,
			Tai_chinh: 16,
			Tao_va_Phan_phoi_Tien_ich: 31,
			Thue_va_Cho_thue_Thiet_bi: 15,
			Trich_xuat_va_Phan_phoi_Hoa_dau: 24,
			Tu_van: 7,
			Van_phong_va_Phong_kham_Bac_si: 11,
			Van_tai: 30,
			Xu_ly_Dua_vao_Nhieu_von_Chuyen_ve: 18
		},
		OwnershipCode : {
			Cong_khai: 1,
			Cong_ty_con: 3,
			Khac: 4,
			Rieng_tu: 2
		},
		PaymentTermsCode : {
			_2_10_Tong_30: 2,
			Tong_30: 1,
			Tong_45: 3,
			Tong_60: 4
		},
		PreferredAppointmentDayCode : {
			Chu_Nhat: 0,
			Thu_Ba: 2,
			Thu_Bay: 6,
			Thu_Hai: 1,
			Thu_Nam: 4,
			Thu_Sau: 5,
			Thu_Tu: 3
		},
		PreferredAppointmentTimeCode : {
			Buoi_chieu: 2,
			Buoi_sang: 1,
			Buoi_toi: 3
		},
		PreferredContactMethodCode : {
			Bat_ky: 1,
			Dien_thoai: 3,
			Email: 2,
			Fax: 4,
			Thu: 5
		},
		ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		TerritoryCode : {
			Gia_tri_mac_dinh: 1
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));