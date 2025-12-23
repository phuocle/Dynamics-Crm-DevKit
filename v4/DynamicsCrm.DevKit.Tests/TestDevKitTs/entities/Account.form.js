'use strict';
/**
 * Account Form - JavaScript Implementation
 * @description AccountForm synced from Account.form.ts with shared OptionSets
 */

/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	// ============================================================================
	// FormAccountForm - Matches AccountForm namespace in Account.form.ts
	// ============================================================================
	DevKit.FormAccountForm = function (executionContext, defaultWebResourceName) {
		const form = {
			body: [
				// ========== Standard Field Controls ==========
				"Name", "Description", "NumberOfEmployees", "Revenue", "CreditOnHold",
				"IndustryCode", "PrimaryContactId",
				// ========== Custom v4_ Field Controls ==========
				"v4_Birthday", "v4_AppointmentTime", "v4_Latitude", "v4_DiscountPercentage", "v4_Categories",
				// ========== Specialty Controls ==========
				"v4_WebResourceHelp", "v4_IFrameExternal", "v4_TimerSLA", "v4_KnowledgeSearch"
			],
			header: ["OwnerId", "NumberOfEmployees"],
			tab: ["DETAILS_TAB___BILLING"],
			grid: ["Contacts"],
			navigation: ["Account_Tasks"],
			quick: ["contactquickform___EMailAddress1"],
			bpf: [
				"v4_AccountBPF___Name", "v4_AccountBPF___IndustryCode",
				"v4_AccountBPF___Revenue", "v4_AccountBPF___PrimaryContactId"
			]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));

/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	// ============================================================================
	// Account OptionSets - Matches Account.OptionSet in Account.form.ts
	// ============================================================================
	OptionSet.Account = {
		/** Industry Code OptionSet */
		IndustryCode: {
			Accounting: 1,
			Consulting: 7,
			Financial: 16,
			Insurance: 20,
			Technology: 12
		},
		/** Custom MultiOptionSet - v4_Categories */
		v4_Categories: {
			Category_A: 100000000,
			Category_B: 100000001,
			Category_C: 100000002,
			Category_D: 100000003
		}
	};
})(OptionSet || (OptionSet = {}));