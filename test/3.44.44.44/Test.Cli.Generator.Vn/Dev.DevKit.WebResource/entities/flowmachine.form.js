'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowmachine = {
		HostedMachineState : {
			Da_bat: 1,
			Da_tat: 0,
			Loi: 2
		},
		HostingType : {
			Duoc_luu_tru: 1,
			Khach_hang: 0,
			PC_tren_dam_may: 2
		},
		KeyDeliveryStatus : {
			KeyExpired: 3,
			Mac_dinh: 1,
			PendingNewKey: 2
		},
		LastKnownPictureInPictureSupport : {
			Da_bat: 2,
			Da_tat: 1,
			Khong_xac_dinh: 0
		},
		statecode : {
			Bao_tri: 2,
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Da_tat: 9,
			Dang_cung_cap: 10,
			DrainMode: 5,
			Hien_hoat: 1,
			HostedMachineOvercapacity: 13,
			HostedMachineOvercapacityDeleted: 14,
			HostedMachineOvercapacityDisabled: 15,
			Khong_hoat_dong: 2,
			Loi: 8,
			ManualMaintenance: 4,
			ProvisionedWithError: 12,
			RequiresGroupKey: 11,
			RequiresReconnection: 3,
			Se_xoa: 6,
			Tam_thoi: 7
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