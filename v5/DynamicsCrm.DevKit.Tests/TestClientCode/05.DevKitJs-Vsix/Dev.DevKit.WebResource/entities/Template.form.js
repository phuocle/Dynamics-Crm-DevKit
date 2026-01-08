'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormTemplate_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___email_template_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormTemplate = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["attachmentsGrid", "Description", "IsPersonal", "LanguageCode", "SafeHtml", "SubjectSafeHtml", "TemplateTypeCode", "Title"],
			bpf: [],
			dialog: [],
			grid: ["attachmentsGrid"],
			header: ["OwnerId"],
			navigation: [],
			quick: [],
			tab: ["Template___Details", "Template___Template_editor"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Template = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		TemplateTypeCode: { Account: 1, Contact: 2, System_Job: 4700, User: 8 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));