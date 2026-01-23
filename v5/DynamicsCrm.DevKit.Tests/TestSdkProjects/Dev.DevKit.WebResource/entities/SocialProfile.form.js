'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormSocial_Profile = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Blocked", "CustomerId", "CustomerId1", "ProfileLink", "ProfileName"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["Community", "InfluenceScore", "OwnerId"],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormSocial_Profile_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Blocked", "CustomerId", "CustomerId1", "CustomerId2", "ProfileLink", "ProfileName"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["Community", "InfluenceScore", "OwnerId"],
			navigation: [],
			quick: ["customer_qfc___EMailAddress1", "customer_qfc___FullName", "customer_qfc___MobilePhone", "customer_qfc___ParentCustomerId", "customer_qfc___Telephone1"],
			tab: ["tab_2___tab_2_section_1", "tab_2___tab_2_section_2", "tab_2___tab_2_section_3", "tab_2___tab_2_section_4"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.SocialProfile = {
		Community: { Facebook: 1, Other: 0, Twitter: 2 },
		CustomerIdType: { },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));