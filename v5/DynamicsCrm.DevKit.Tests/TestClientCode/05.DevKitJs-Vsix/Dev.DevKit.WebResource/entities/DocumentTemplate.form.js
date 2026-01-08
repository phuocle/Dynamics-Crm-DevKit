'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormDocumentTemplate_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AssociatedEntityTypeCode", "CreatedBy", "CreatedOn", "Description", "DocumentType", "LanguageCode", "ModifiedBy", "ModifiedOn", "Name", "Status"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___Details"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DocumentTemplate = {
		AssociatedEntityTypeCode: { },
		DocumentType: { Microsoft_Excel: 1, Microsoft_Word: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));