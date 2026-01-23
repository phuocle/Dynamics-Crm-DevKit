'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormSavedQuery_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CreatedBy", "CreatedOn", "Description", "IsCustomizable", "IsDefault", "IsQuickFindQuery", "IsUserDefined", "ModifiedBy", "ModifiedOn", "Name"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___account_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.SavedQuery = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		ReturnedTypeCode: { },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));