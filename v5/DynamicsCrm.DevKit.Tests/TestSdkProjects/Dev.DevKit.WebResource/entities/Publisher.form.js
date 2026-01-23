'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormPublisher_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Address1_City", "Address1_Country", "Address1_Line1", "Address1_Line2", "Address1_PostalCode", "Address1_StateOrProvince", "Address1_Telephone1", "CustomizationOptionValuePrefix", "CustomizationPrefix", "Description", "EMailAddress", "FriendlyName", "IFRAME_SolutionsMarketplace", "preview_prefix", "SupportingWebsiteUrl", "UniqueName"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_70098AD5_4956_11DD_982E_00188B01DCE6____70098AD6_4956_11DD_982E_00188B01DCE6", "_70098AD5_4956_11DD_982E_00188B01DCE6____EAF2EDB4_7C5E_DD11_940F_00155D8AC303", "_70098AD5_4956_11DD_982E_00188B01DCE6___description", "_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343____6FE75F79_0CA8_4DBE_8C7B_6E68C17DE013", "_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343____CBF04024_5749_444C_BC51_CFAF839688BF", "solutions_marketplace___marketplacesection"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Publisher = {
		Address1_AddressTypeCode: { Default_Value: 1 },
		Address1_ShippingMethodCode: { Default_Value: 1 },
		Address2_AddressTypeCode: { Default_Value: 1 },
		Address2_ShippingMethodCode: { Default_Value: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));