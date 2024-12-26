'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormInvite_Web_Form = function(executionContext, defaultWebResourceName) {
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
			EMailAddress1: {},
			FirstName: {},
			LastName: {},
			OwnerId: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_customer_contacts: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			Contact_Phonecalls: {},
			Contact_Tasks: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormNguoi_lien_he = function(executionContext, defaultWebResourceName) {
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
			Anniversary: {},
			BirthDate: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FollowEmail: {},
			FullName: {},
			GenderCode: {},
			JobTitle: {},
			mapcontrol: {},
			MobilePhone: {},
			notescontrol: {},
			ParentCustomerId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			SpousesName: {},
			Telephone1: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_section_6: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_customer_contacts: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			Contact_Phonecalls: {},
			Contact_Tasks: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPortal_Contact_Enhanced = function(executionContext, defaultWebResourceName) {
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
			AccountRoleCode: {},
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
			adx_externalidentity: {},
			adx_identity_accessfailedcount: {},
			adx_identity_emailaddress1confirmed: {},
			adx_identity_locallogindisabled: {},
			adx_identity_lockoutenabled: {},
			adx_identity_lockoutenddate: {},
			adx_identity_logonenabled: {},
			adx_identity_mobilephoneconfirmed: {},
			adx_identity_securitystamp: {},
			adx_identity_twofactorenabled: {},
			adx_identity_username: {},
			Adx_TimeZone: {},
			Anniversary: {},
			AssistantName: {},
			AssistantPhone: {},
			BirthDate: {},
			contactactivitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			defaultpricelevelid: {},
			Department: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			GenderCode: {},
			grid_contact_mspp_webrole: {},
			JobTitle: {},
			LastName: {},
			ManagerName: {},
			ManagerPhone: {},
			MiddleName: {},
			MobilePhone: {},
			notescontrol: {},
			OwnerId: {},
			ParentCustomerId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			Salutation: {},
			SpousesName: {},
			Telephone1: {},
			Telephone2: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			administration: {
				Section: {
					billing_information: {},
					contact_methods: {},
					internal_information: {}
				}
			},
			details: {
				Section: {
					personal_information: {},
					professional_information: {}
				}
			},
			general: {
				Section: {
					address: {},
					contact_webrole_section: {},
					description: {},
					name: {},
					shipping_information: {}
				}
			},
			notes_and_activities: {
				Section: {
					activities: {},
					notes: {}
				}
			},
			web_authentication: {
				Section: {
					_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_4: {},
					_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_5: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EMailAddress1: {},
			OwnerId: {},
			PreferredContactMethodCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			adx_externalidentity: {},
			contactactivitiesgrid: {},
			grid_contact_mspp_webrole: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_customer_contacts: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			Contact_Phonecalls: {},
			Contact_Tasks: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormProfile_Web_Form_Enhanced = function(executionContext, defaultWebResourceName) {
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
			Adx_OrganizationName: {},
			adx_PublicProfileCopy: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			mspp_userpreferredlcid: {},
			NickName: {},
			OwnerId: {},
			Telephone1: {},
			WebSiteUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_customer_contacts: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			Contact_Phonecalls: {},
			Contact_Tasks: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormProfile_Web_Form_Enhanced_Japanese = function(executionContext, defaultWebResourceName) {
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
			Adx_OrganizationName: {},
			adx_PublicProfileCopy: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			mspp_userpreferredlcid: {},
			NickName: {},
			OwnerId: {},
			Telephone1: {},
			WebSiteUrl: {},
			YomiFirstName: {},
			YomiLastName: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_customer_contacts: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			Contact_Phonecalls: {},
			Contact_Tasks: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {}
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
			AccountRoleCode: {},
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
			Anniversary: {},
			AssistantName: {},
			AssistantPhone: {},
			BirthDate: {},
			contactactivitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			Department: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			GenderCode: {},
			JobTitle: {},
			LastName: {},
			ManagerName: {},
			ManagerPhone: {},
			MiddleName: {},
			MobilePhone: {},
			notescontrol: {},
			OwnerId: {},
			ParentCustomerId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			Salutation: {},
			SpousesName: {},
			Telephone1: {},
			Telephone2: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			administration: {
				Section: {
					billing_information: {},
					contact_methods: {},
					internal_information: {}
				}
			},
			details: {
				Section: {
					personal_information: {},
					professional_information: {}
				}
			},
			general: {
				Section: {
					address: {},
					description: {},
					name: {},
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
			EMailAddress1: {},
			OwnerId: {},
			PreferredContactMethodCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			contactactivitiesgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_customer_contacts: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			Contact_Phonecalls: {},
			Contact_Tasks: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTao_lien_he_nhanh = function(executionContext, defaultWebResourceName) {
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
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			MobilePhone: {},
			ParentCustomerId: {},
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
	OptionSet.Contact = {
		AccountRoleCode : {
			Nguoi_anh_huong: 3,
			Nguoi_ra_quyet_dinh: 1,
			Nhan_vien: 2
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
		Address3_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address3_FreightTermsCode : {
			Gia_tri_mac_dinh: 1
		},
		Address3_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		CustomerSizeCode : {
			Gia_tri_mac_dinh: 1
		},
		CustomerTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		EducationCode : {
			Gia_tri_mac_dinh: 1
		},
		FamilyStatusCode : {
			Da_ket_hon: 2,
			Da_ly_di: 3,
			Doc_than: 1,
			Goa: 4
		},
		GenderCode : {
			Nam: 1,
			Nu: 2
		},
		HasChildrenCode : {
			Gia_tri_mac_dinh: 1
		},
		LeadSourceCode : {
			Gia_tri_mac_dinh: 1
		},
		mspp_userpreferredlcid : {
			Tieng_A_Rap: 1025,
			Tieng_Anh: 1033,
			Tieng_Ba_Lan_Ba_Lan: 1045,
			Tieng_Basque_Basque: 1069,
			Tieng_Bo_Dao_Nha_Bo_Dao_Nha: 2070,
			Tieng_Bo_Dao_Nha_Brazil: 1046,
			Tieng_Bulgaria_Bulgaria: 1026,
			Tieng_Catalan_Catalan: 1027,
			Tieng_Croatia_Croatia: 1050,
			Tieng_Dan_Mach_Dan_Mach: 1030,
			Tieng_Do_Thai: 1037,
			Tieng_Duc_Duc: 1031,
			Tieng_Estonia_Estonia: 1061,
			Tieng_Galician_Tay_Ban_Nha: 1110,
			Tieng_Ha_Lan_Ha_Lan: 1043,
			Tieng_Han_Han_Quoc: 1042,
			Tieng_Hindi_An_Do: 1081,
			Tieng_Hungary_Hungary: 1038,
			Tieng_Hy_Lap_Hy_Lap: 1032,
			Tieng_Indonesia_Indonesia: 1057,
			Tieng_Italy_Italy: 1040,
			Tieng_Kazakh_Kazakhstan: 1087,
			Tieng_Latvia_Latvia: 1062,
			Tieng_Litva_Litva: 1063,
			Tieng_Ma_Lai_Malaysia: 1086,
			Tieng_Na_Uy_Bokmal_Na_Uy: 1044,
			Tieng_Nga_Nga: 1049,
			Tieng_Nhat_Nhat_Ban: 1041,
			Tieng_Phan_Lan_Phan_Lan: 1035,
			Tieng_Phap_Phap: 1036,
			Tieng_Romania_Romania: 1048,
			Tieng_Sec_Cong_hoa_Sec: 1029,
			Tieng_Serbia_Cyrillic_Serbia: 3098,
			Tieng_Serbia_Latinh_Serbia: 2074,
			Tieng_Slovak_Slovakia: 1051,
			Tieng_Slovenia_Slovenia: 1060,
			Tieng_Tay_Ban_Nha_Cach_sap_xep_Truyen_thong_Tay_Ban_Nha: 3082,
			Tieng_Thai_Thai_Lan: 1054,
			Tieng_Tho_Nhi_Ky_Tho_Nhi_Ky: 1055,
			Tieng_Thuy_Dien_Thuy_Dien: 1053,
			Tieng_Trung_Dac_khu_Hanh_chinh_Hong_Kong: 3076,
			Tieng_Trung_Phon_the: 1028,
			Tieng_Trung_Trung_Quoc: 2052,
			Tieng_Ukraina_Ukraina: 1058,
			Tieng_Viet_Viet_Nam: 1066
		},
		ParentCustomerIdType : {
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