'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmspp_pagetemplate_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["grid_webpages", "mspp_description", "mspp_entityname", "mspp_isdefault", "mspp_name", "mspp_rewriteurl", "mspp_type", "mspp_usewebsiteheaderandfooter", "mspp_websiteid", "mspp_webtemplateid", "WebResource_entityname"],
			bpf: [],
			dialog: [],
			grid: ["grid_webpages"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["tab_webpages___tab_3_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_pagetemplate = {
		mspp_type: { Rewrite: 756150000, Web_Template: 756150001 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));