'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCustomerAddress_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AddressTypeCode", "City", "Country", "Fax", "FreightTermsCode", "Line1", "Line2", "Line3", "Name", "PostalCode", "PrimaryContactName", "ShippingMethodCode", "StateOrProvince", "Telephone1", "Telephone2"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___additional_information", "general___customer_address_information", "general___phone_numbers"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.CustomerAddress = {
		AddressTypeCode: { Bill_To: 1, Other: 4, Primary: 3, Ship_To: 2 },
		FreightTermsCode: { FOB: 1, No_Charge: 2 },
		ObjectTypeCode: { Account: 1, Contact: 2 },
		ParentIdTypeCode: { },
		ShippingMethodCode: { Airborne: 1, DHL: 2, FedEx: 3, Full_Load: 6, Postal_Mail: 5, UPS: 4, Will_Call: 7 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));