'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormKbArticle_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ArticleComments", "ArticleXml", "KeyWords", "LanguageCode", "msa_publishtoweb", "notescontrol", "SubjectId", "Title"],
			bpf: [],
			dialog: [],
			grid: ["ArticleComments"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_B641B7D4_753C_C99A_5978_977E6912E856____493D7206_6935_E73D_75CC_44DC53D021E8", "general___article_information", "general___Article_Keywords", "general___general_section_4", "general___kb_article_description", "notes___notes"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.KbArticle = {
		StateCode: { Draft: 1, Published: 3, Unapproved: 2 },
		StatusCode: { Draft: 1, Published: 3, Unapproved: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));