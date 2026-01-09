'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormChannelAccessProfile_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["EmailAccess", "FacebookAccess", "Name", "notescontrol", "OwnerId", "PhoneAccess", "RateKnowledgeArticles", "Role_Control", "SubmitFeedback", "TwitterAccess", "ViewArticleRating", "ViewKnowledgeArticles", "WebAccess"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["StatusCode"],
			navigation: [],
			quick: [],
			tab: ["ChannelAccess___tab_3_section_1", "ChannelAccess___tab_3_section_2", "EntityPermissions___tab_2_section_1", "KnowledgeSettings___tab_4_section_1", "KnowledgeSettings___tab_4_section_2", "Note___notes"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.ChannelAccessProfile = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));