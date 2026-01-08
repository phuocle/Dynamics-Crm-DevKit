'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_websiteaccess_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["grid_webroles", "mspp_managecontentsnippets", "mspp_managesitemarkers", "mspp_manageweblinksets", "mspp_name", "mspp_previewunpublishedentities", "mspp_websiteid"],
			bpf: [],
			dialog: [],
			grid: ["grid_webroles"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["tab_webroles___tab_3_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_websiteaccess = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));