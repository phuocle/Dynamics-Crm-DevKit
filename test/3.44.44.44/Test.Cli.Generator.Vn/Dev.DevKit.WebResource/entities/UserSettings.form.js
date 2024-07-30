'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UserSettings = {
		D365AutoInstallAttemptStatus : {
			Chua_thuc_hien: 0,
			Da_cai_dat: 2,
			Da_tat_nguon_luc: 7,
			Da_tu_dong_cai_dat: 1,
			Khong_co_giai_phap: 5,
			Khong_co_Graph_API: 6,
			Khong_duoc_uy_quyen: 4,
			Quan_tri_vien_Teams_da_chan: 3
		},
		DataValidationModeForExportToExcel : {
			Day_du: 0,
			Khong: 1
		},
		DefaultSearchExperience : {
			Su_dung_tim_kiem_gan_nhat: 2,
			Tim_kiem_duoc_phan_loai: 1,
			Tim_kiem_lien_quan: 0,
			Tim_kiem_tuy_chinh: 3
		},
		EntityFormMode : {
			Mac_dinh_to_chuc: 0,
			Sua: 2,
			Toi_uu_hoa_dang_chi_doc: 1
		},
		IncomingEmailFilteringMethod : {
			Email_khi_tra_loi_email_Dynamics_365: 1,
			Email_tu_ban_ghi_Dynamics_365_co_bat_email: 3,
			Email_tu_Khach_hang_tiem_nang_Nguoi_lien_he_va_Khach_hang_Dynamics_365: 2,
			Khong_co_email: 4,
			Tat_ca_thu_email: 0
		},
		ReleaseChannel : {
			Khong_co: 0,
			Thay_the_kenh_ben_trong: 3,
			Thay_the_kenh_hang_thang: 2,
			Thay_the_kenh_nua_nam_mot_lan: 1
		},
		ReportScriptErrors : {
			Khong_bao_gio_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365: 3,
			Tu_dong_gui_bao_cao_loi_den_Microsoft_ma_khong_xin_phep_toi: 2,
			Xin_phep_toi_khi_gui_bao_cao_loi_den_Microsoft: 1
		},
		VisualizationPaneLayout : {
			Dau_cuoi: 0,
			Lien_ke_nhau: 1
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