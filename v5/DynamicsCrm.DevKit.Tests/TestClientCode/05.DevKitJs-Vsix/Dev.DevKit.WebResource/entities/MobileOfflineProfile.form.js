'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMobile_Offline_Profile = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "Name", "profileitemgrid", "SystemUserGrid"],
			bpf: [],
			dialog: [],
			grid: ["profileitemgrid", "SystemUserGrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["GENERALINFORMATION_TAB___MOBILE_OFFLINE_PROFILE_ITEMS", "GENERALINFORMATION_TAB___profile_users", "GENERALINFORMATION_TAB___property_bag_properties_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MobileOfflineProfile = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));