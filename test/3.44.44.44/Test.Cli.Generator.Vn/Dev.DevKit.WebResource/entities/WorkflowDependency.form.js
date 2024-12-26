'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.WorkflowDependency = {
		Type : {
			Bo_duoi_sdk: 1,
			Dinh_nghia_thuc_the_tuy_chinh_ma_quy_trinh_lam_viec_phu_thuoc_vao_do: 7,
			Dinh_nghia_thuoc_tinh_ma_quy_trinh_lam_viec_phu_thuoc_vao_do: 8,
			Tham_so_cuc_bo: 2,
			Thuc_the_chinh: 3,
			Thuc_the_chinh_sau_thao_tac_SDK: 5,
			Thuc_the_chinh_truoc_thao_tac_SDK: 4,
			Thuc_the_doi_so_ma_quy_trinh_lam_viec_phu_thuoc_vao_do: 9,
			Thuc_the_lien_quan: 6
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