'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SdkMessageProcessingStep = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		EventHandlerTypeCode : {
		},
		InvocationSource : {
			Ma_Cha: 0,
			Muc_con: 1
		},
		Mode : {
			Dong_bo: 0,
			Khong_dong_bo: 1
		},
		Stage : {
			Giai_doan_Hau_cam_ket_duoc_bat_dau_sau_khi_cam_ket_giao_dich_Chi_su_dung_noi_bo: 90,
			Giai_doan_Tien_cam_ket_duoc_bat_dau_truoc_khi_cam_ket_giao_dich_Chi_su_dung_noi_bo: 80,
			Sau_khi_thao_tac: 40,
			Sau_khi_thao_tac_Khong_con_dung: 50,
			Sau_khi_thao_thac_cuoi_cung_Chi_su_dung_noi_bo: 55,
			Sau_khi_thao_thac_noi_bo_sau_bo_tro_ngoai_Chi_su_dung_noi_bo: 45,
			Sau_khi_thao_thac_noi_bo_truoc_bo_tro_ngoai_Chi_su_dung_noi_bo: 35,
			Thao_thac_chinh_Chi_su_dung_noi_bo: 30,
			Truoc_khi_thao_tac: 20,
			Truoc_khi_thao_thac_ban_dau_Chi_su_dung_noi_bo: 5,
			Truoc_khi_thao_thac_noi_bo_sau_bo_tro_ngoai_Chi_su_dung_noi_bo: 25,
			Truoc_khi_thao_thac_noi_bo_truoc_bo_tro_ngoai_Chi_su_dung_noi_bo: 15,
			Truoc_khi_xac_thuc: 10
		},
		StateCode : {
			Da_bat: 0,
			Da_tat: 1
		},
		StatusCode : {
			Da_bat: 1,
			Da_tat: 2
		},
		SupportedDeployment : {
			Ca_hai: 2,
			Chi_danh_cho_Microsoft_Dynamics_365_Client_for_Outlook: 1,
			Duy_nhat_may_chu: 0
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