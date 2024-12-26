'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProcessTrigger = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		ControlType : {
			The_bieu_mau: 2,
			Thuoc_tinh: 1
		},
		PipelineStage : {
			Gia_tri_Mac_dinh: 0,
			Sau_Thao_tac_Chinh: 40,
			Truoc_Thao_tac_Chinh: 20
		},
		PrimaryEntityTypeCode : {
		},
		Scope : {
			Bieu_mau: 1,
			Thuc_the: 2
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