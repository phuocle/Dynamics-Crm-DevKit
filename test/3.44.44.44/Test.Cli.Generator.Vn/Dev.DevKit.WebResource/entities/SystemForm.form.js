'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SystemForm = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		FormActivationState : {
			Hien_hoat: 1,
			Khong_hoat_dong: 0
		},
		FormPresentation : {
			AirForm: 1,
			ClassicForm: 0,
			ConvertedICForm: 2
		},
		ObjectTypeCode : {
		},
		Type : {
			AppointmentBook: 1,
			AppointmentBookBackup: 102,
			Ban_xem_truoc: 4,
			Bang_thong_tin: 0,
			Bang_thong_tin_Power_BI: 103,
			Bang_thong_tin_theo_ngu_canh: 13,
			Bieu_mau_dong_tac_vu: 9,
			Bieu_mau_xem_nhanh: 6,
			Chinh: 2,
			Chinh_Trai_nghiem_tuong_tac: 12,
			Di_dong_Nhanh: 5,
			Hop_thoai: 8,
			InteractionCentricDashboard: 10,
			Khac: 100,
			MainBackup: 101,
			MiniCampaignBO: 3,
			Tao_nhanh: 7,
			The: 11
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