'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ActivityParty = {
		InstanceTypeCode : {
			Ban_ghi_chu_Lap_lai: 1,
			Khong_Lap_lai: 0,
			Ngoai_le_Lap_lai: 3,
			Ngoai_le_Tuong_lai_Lap_lai: 4,
			Phien_ban_Lap_lai: 2
		},
		ParticipationTypeMask : {
			Chu_so_huu: 9,
			Co_lien_quan: 13,
			Khach_hang: 11,
			Lien_quan_den: 8,
			Nguoi_gui: 1,
			Nguoi_nhan_trong_muc_BCC: 4,
			Nguoi_nhan_trong_muc_CC: 3,
			Nguoi_nhan_trong_muc_Den: 2,
			Nguoi_tham_gia_bat_buoc: 5,
			Nguoi_tham_gia_cuoc_tro_chuyen: 12,
			Nguoi_tham_gia_khong_bat_buoc: 6,
			Nguoi_to_chuc: 7,
			Nguon_luc: 10
		},
		PartyObjectTypeCode : {
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