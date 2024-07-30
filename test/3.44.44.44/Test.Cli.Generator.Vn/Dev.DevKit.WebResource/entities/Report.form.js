'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Report = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		ManagedType : {
			Customer: 1,
			Dataverse: 0
		},
		ReportTypeCode : {
			Bao_cao_da_lien_ket: 3,
			Bao_cao_duoc_phan_trang_trong_Power_BI: 4,
			Bao_cao_khac: 2,
			Bao_cao_phan_tich_trong_Power_BI: 5,
			Bao_cao_ve_dich_vu_bao_cao: 1,
			Excel_Embedded_Report: 6,
			Excel_Embedded_Report_Template: 7
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