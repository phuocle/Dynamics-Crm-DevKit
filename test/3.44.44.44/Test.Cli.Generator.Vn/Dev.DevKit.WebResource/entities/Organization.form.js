'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Organization = {
		ApplicationBasedAccessControlMode : {
			AuditMode: 2,
			Disabled: 0,
			Enabled: 1,
			Enabled_for_roles: 3
		},
		CurrencyDisplayOption : {
			Ky_hieu_loai_tien: 0,
			Ma_loai_tien: 1
		},
		CurrencyFormatCode : {
			_123_0: 0,
			_123_1: 1,
			_123_2: 2,
			_123_3: 3
		},
		DateFormatCode : {
		},
		DefaultRecurrenceEndRangeType : {
			Khong_co_Ngay_Ket_thuc: 1,
			Ngay_ket_thuc: 3,
			So_lan_Xay_ra: 2
		},
		DesktopFlowRunActionLogsStatus : {
			Da_bat: 0,
			Da_tat: 2,
			Neu_khong_thanh_cong: 1
		},
		DesktopFlowRunActionLogVersion : {
			AdditionalContext: 0,
			AdditionalContextAndFlowLogs: 2,
			FlowLogs: 1
		},
		DiscountCalculationMethod : {
			Hang_muc: 0,
			Moi_don_vi: 1
		},
		EmailConnectionChannel : {
			Bo_dinh_tuyen_Email_Microsoft_Dynamics_365: 1,
			Dong_bo_phia_May_chu: 0
		},
		FiscalPeriodFormatPeriod : {
			Ky_0: 3,
			Ky_sau_thang_0: 6,
			Q0: 2,
			Quy_0: 1,
			Ten_Thang: 7,
			Thang_0_4: 4,
			Thang_0_5: 5
		},
		FiscalYearFormatPrefix : {
			Nam_Tai_chinh: 1
		},
		FiscalYearFormatSuffix : {
			Nam_Tai_chinh_1: 1,
			Nam_Tai_chinh_2: 2
		},
		FiscalYearFormatYear : {
			GGYY: 3,
			YY: 2,
			YYYY: 1
		},
		FullNameConventionCode : {
			Ho_dau_cach_Ten: 6,
			Ho_khong_co_dau_cach_Ten: 7,
			Ho_Ten: 0,
			Ho_Ten_Ten_dem: 4,
			Ho_Ten_Viet_tat_Ten_dem: 2,
			Ten: 1,
			Ten_Ten_dem_Ho: 5,
			Ten_Viet_tat_Ten_dem_Ho: 3
		},
		IpBasedStorageAccessSignatureMode : {
			IP_Binding_and_IP_Firewall: 2,
			IP_Binding_only: 0,
			IP_Binding_or_IP_Firewall: 3,
			IP_Firewall_only: 1
		},
		ISVIntegrationCode : {
			Khong: 0,
			Outlook: 6,
			Tat_ca: 7,
			Ung_dung_khach_May_tinh_xach_tay_Outlook: 4,
			Ung_dung_khach_May_tram_Outlook: 2,
			Web: 1,
			Web_Ung_dung_khach_May_tinh_xach_tay_Outlook: 5,
			Web_Ung_dung_khach_May_tram_Outlook: 3
		},
		LegacyAppToggle : {
			Bat: 1,
			Tat: 2,
			Tu_dong: 0
		},
		NegativeFormatCode : {
			Dau_cach_cong_voi_Dau_gach_Duoi: 4,
			Dau_gach: 1,
			Dau_gach_cong_voi_Dau_cach: 2,
			Dau_gach_Duoi: 3,
			Dau_ngoac: 0
		},
		OrganizationState : {
			Dang_cap_nhat: 2,
			Dang_nang_cap: 1,
			Dang_tao: 0,
			Hien_hoat: 3
		},
		PluginTraceLogSetting : {
			Ngoai_le: 1,
			Tat: 0,
			Tat_ca: 2
		},
		ReleaseChannel : {
			Kenh_ban_nien: 3,
			Kenh_hang_thang: 1,
			Kenh_noi_bo_cua_Microsoft: 2,
			Tu_dong: 0
		},
		ReportScriptErrors : {
			Khong_bao_gio_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365: 3,
			Khong_co_tuy_chon_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365: 0,
			Tu_dong_gui_bao_cao_loi_den_Microsoft_ma_khong_xin_phep_toi: 2,
			Xin_phep_toi_khi_gui_bao_cao_loi_den_Microsoft: 1
		},
		SameSiteModeForSessionCookie : {
			Default: 0,
			Lax: 2,
			None: 1,
			Strict: 3
		},
		SharePointDeploymentType : {
			Tai_cho: 1,
			Truc_tuyen: 0
		},
		SyncOptInSelectionStatus : {
			Da_qua: 2,
			Dang_xu_ly: 1,
			Khong_thanh_cong: 3
		},
		TimeFormatCode : {
		},
		ValidationMode : {
			Canh_bao: 1,
			Chan: 2,
			Tat: 0
		},
		WeekStartDayCode : {
		},
		YammerPostMethod : {
			Cong_khai: 0,
			Rieng_tu: 1
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