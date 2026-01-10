'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormPost_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["RegardingObjectId", "Source", "Text"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___Post_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Post = {
		RegardingObjectOwnerIdType: { },
		RegardingObjectTypeCode: { },
		Source: { ActionHub_Post: 3, Auto_Post: 1, Manual_Post: 2 },
		Type: { Check_in: 1, Idea: 2, News: 3, Private_Message: 4, Question: 5, Re_post: 6, Status: 7 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));