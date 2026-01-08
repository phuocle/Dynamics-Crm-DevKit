'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_contentsnippet_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["mspp_contentsnippetlanguageid", "mspp_display_name", "mspp_name", "mspp_type", "mspp_value", "mspp_value1", "mspp_websiteid"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["mspp_contentsnippet_general___mspp_contentsnippet_html_section", "mspp_contentsnippet_general___mspp_contentsnippet_text_section"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_contentsnippet = {
		mspp_type: { HTML: 756150001, Text: 756150000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));