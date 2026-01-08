'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBusinessUnitNewsArticle_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActiveUntil", "ArticleTitle", "ArticleUrl", "NewsArticle"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["announcement___additional_settings", "announcement___announcement_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BusinessUnitNewsArticle = {
		ArticleTypeCode: { All_Users: 1, Sales_Users: 2, Service_Users: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));