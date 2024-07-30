'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
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
			Description: {},
			EmailServerTypeName: {},
			ExchangeOnlineTenantId: {},
			IncomingAuthenticationProtocol: {},
			IncomingCredentialRetrieval: {},
			IncomingPassword: {},
			IncomingPortNumber: {},
			IncomingServerLocation: {},
			IncomingUseImpersonation: {},
			IncomingUserName: {},
			IncomingUseSSL: {},
			MaxConcurrentConnections: {},
			MinPollingIntervalInMinutes: {},
			MoveUndeliveredEmails: {},
			Name: {},
			notescontrol: {},
			OauthClientId: {},
			OauthClientSecret: {},
			OutgoingAuthenticationProtocol: {},
			OutgoingCredentialRetrieval: {},
			OutgoingPassword: {},
			OutgoingPortNumber: {},
			OutgoingServerLocation: {},
			OutgoingUseImpersonation: {},
			OutgoingUsername: {},
			OutgoingUseSSL: {},
			OwnerId: {},
			ProcessEmailsReceivedAfter: {},
			SendEmailAlert: {},
			ServerType: {},
			TimeoutMailboxConnection: {},
			TimeoutMailboxConnectionAfterAmount: {},
			UseAutoDiscover: {},
			UseDefaultTenantId: {},
			UseSameSettingsForOutgoingConnections: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_1: {},
					_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_2: {},
					_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_3: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			emailserverprofile_mailbox: {},
			tracelog_EmailServerProfile: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EmailServerProfile = {
		ExchangeVersion : {
			Exchange_2007: 0,
			Exchange_2007_SP1: 1,
			Exchange_2010: 2,
			Exchange_2010_SP1: 3,
			Exchange_2010_SP2: 4,
			Exchange_2013: 5
		},
		IncomingAuthenticationProtocol : {
			Co_ban: 3,
			NTLM: 2,
			OAuth: 4,
			Phat_hien_Tu_dong: 0,
			Thuong_luong: 1
		},
		IncomingCredentialRetrieval : {
			Gmail_OAuth: 5,
			Khong_co_thong_tin_xac_thuc_An_danh: 4,
			Oauth_voi_Microsoft_Entra_ID: 7,
			Phuong_thuc_xac_thuc_hien_dai_ket_hop_HMA_cua_Exchange: 6,
			Thong_tin_xac_thuc_do_nguoi_dung_hoac_hang_doi_chi_dinh: 0,
			Thong_tin_xac_thuc_duoc_chi_dinh_trong_Cau_hinh_may_chu_email: 1,
			Xac_thuc_may_chu_toi_may_chu: 2,
			Xac_thuc_tich_hop_cua_Windows: 3
		},
		LastAuthorizationStatus : {
			Loi: 0,
			Thanh_cong: 1
		},
		LastTestExecutionStatus : {
			Canh_bao: 2,
			Loi: 0,
			Thanh_cong: 1
		},
		LastTestValidationStatus : {
			Loi: 0,
			Thanh_cong: 1
		},
		OutgoingAuthenticationProtocol : {
			Co_ban: 3,
			NTLM: 2,
			OAuth: 4,
			Phat_hien_Tu_dong: 0,
			Thuong_luong: 1
		},
		OutgoingCredentialRetrieval : {
			Gmail_OAuth: 5,
			Khong_co_thong_tin_xac_thuc_An_danh: 4,
			Oauth_voi_Microsoft_Entra_ID: 7,
			Phuong_thuc_xac_thuc_hien_dai_ket_hop_HMA_cua_Exchange: 6,
			Thong_tin_xac_thuc_do_nguoi_dung_hoac_hang_doi_chi_dinh: 0,
			Thong_tin_xac_thuc_duoc_chi_dinh_trong_Cau_hinh_may_chu_email: 1,
			Xac_thuc_may_chu_toi_may_chu: 2,
			Xac_thuc_tich_hop_cua_Windows: 3
		},
		ServerAuthority : {
			Co_quan_chinh_phu_Hoa_Ky_GCC_High_va_DoD_httpsloginmicrosoftonlineus: 1,
			Cong_cong_GCC_httpsloginmicrosoftonlinecom: 0,
			Trung_Quoc_21Vianet_httpsloginchinacloudapicn: 2,
			Tu_dong_duoc_xac_dinh_boi_dam_may_Dynamics_365: 3
		},
		ServerType : {
			Exchange_Online_Ket_hop: 3,
			Exchange_Server: 0,
			Exchange_Server_Ket_hop: 2,
			IMAPSMTP: 4,
			Khac_POP3SMTP: 1
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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