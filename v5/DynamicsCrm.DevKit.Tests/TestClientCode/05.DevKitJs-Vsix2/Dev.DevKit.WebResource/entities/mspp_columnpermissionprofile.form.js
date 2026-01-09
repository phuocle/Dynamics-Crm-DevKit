'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmspp_columnpermissionprofile_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["mspp_allcolumnpermissions", "mspp_profilename", "mspp_tablename", "mspp_websiteid", "subgrid_columnpermissions", "subgrid_webroles", "WebResource_mspp_tablenameselector"],
			bpf: [],
			dialog: [],
			grid: ["subgrid_columnpermissions", "subgrid_webroles"],
			header: [],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_columnpermissionprofile = {
		mspp_allcolumnpermissions: { Create: 746610000, Read: 746610001, Update: 746610002 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));