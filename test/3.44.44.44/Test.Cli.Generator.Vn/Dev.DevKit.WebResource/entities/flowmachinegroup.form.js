'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowmachinegroup = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		DomainSetting : {
			Da_tham_gia_AAD: 1,
			Khong_co: 0
		},
		FlowGroupType : {
			Khong_dung_khoa: 545940000,
			Mac_dinh: 545940002,
			Tieu_chuan: 545940001
		},
		ManagementType : {
			Duoc_quan_ly: 1,
			Khach_hang: 0
		},
		PreferredQueuingType : {
			ExtendedQueuePrioritization: 1,
			FIFO: 0
		},
		ProvisioningState : {
			Da_cung_cap: 2,
			Da_tao: 0,
			Dang_cung_cap: 1,
			Loi: 3
		},
		statecode : {
			Bao_tri: 2,
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Da_cach_ly: 6,
			Hien_hoat: 1,
			HmgCmkOperation: 7,
			HmgIslandMove: 5,
			KeyExpired: 4,
			Khong_hoat_dong: 2,
			ManualMaintenance: 3
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