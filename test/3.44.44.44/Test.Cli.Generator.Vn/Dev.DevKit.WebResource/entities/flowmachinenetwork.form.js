'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowmachinenetwork = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		ProvisioningState : {
			Da_cung_cap: 2,
			Dang_cung_cap: 1,
			Loi: 3,
			Thoi_gian_tao: 0
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2,
			Loi: 3
		},
		SupportedScenario : {
			HostedMachineGroup: 1,
			HostedMachineGroupdAndRpaBox: 3,
			RpaBox: 2
		},
		type : {
			azureAdJoin: 100000000,
			hybridAdJoin: 100000001
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