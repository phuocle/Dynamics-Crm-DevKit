'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBusinessUnit_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Address1_City", "Address1_Country", "Address1_Line1", "Address1_Line2", "Address1_Line3", "Address1_PostalCode", "Address1_StateOrProvince", "Address1_Telephone1", "Address1_Telephone2", "Address1_Telephone3", "Address2_City", "Address2_Country", "Address2_Line1", "Address2_Line2", "Address2_Line3", "Address2_PostalCode", "Address2_StateOrProvince", "DivisionName", "EMailAddress", "Name", "ParentBusinessUnitId", "WebSiteUrl"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["addresses___bill_to_address", "addresses___ship_to_address", "general___section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BusinessUnit = {
		Address1_AddressTypeCode: { Default_Value: 1 },
		Address1_ShippingMethodCode: { Default_Value: 1 },
		Address2_AddressTypeCode: { Default_Value: 1 },
		Address2_ShippingMethodCode: { Default_Value: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));