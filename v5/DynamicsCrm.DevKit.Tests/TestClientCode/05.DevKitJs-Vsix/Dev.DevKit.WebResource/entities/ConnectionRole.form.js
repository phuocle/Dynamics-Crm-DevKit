'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormConnectionRole_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Category", "connectionroleobjecttypecodelist", "Description", "Name", "reciprocalRoleGrid"],
			bpf: [],
			dialog: [],
			grid: ["reciprocalRoleGrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general____B0A70B0D_568C_10D3_1A3D_01C997A061C1", "general___step1", "general___step2", "reciprocalroles___roleGrid"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ConnectionRole = {
		Category: { Business: 1, Family: 2, Other: 5, Sales: 4, Sales_Team: 1001, Service: 1002, Social: 3, Stakeholder: 1000 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));