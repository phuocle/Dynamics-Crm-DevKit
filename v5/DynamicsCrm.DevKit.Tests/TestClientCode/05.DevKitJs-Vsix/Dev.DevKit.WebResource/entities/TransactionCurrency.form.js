'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormTransactionCurrency_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CurrencyName", "CurrencyName1", "CurrencyPrecision", "CurrencyPrecision1", "CurrencySymbol", "CurrencySymbol1", "CurrencyType", "CurrencyType1", "ExchangeRate", "ExchangeRate1", "ISOCurrencyCode", "ISOCurrencyCode1", "systemcurrency", "systemcurrency_uci"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["Legacy_tab___Currency_conversion", "Legacy_tab___Select_Base_Currency", "Legacy_tab___Transaction_currency_information", "UCI_tab___CurrencyInformation", "UCI_tab___General"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.TransactionCurrency = {
		CurrencyType: { Custom: 1, System: 0 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));