'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_webfile_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["mspp_alloworigin", "mspp_cloudblobaddress", "mspp_contentdisposition", "mspp_displaydate", "mspp_displayorder", "mspp_excludefromsearch", "mspp_expirationdate", "mspp_hiddenfromsitemap", "mspp_masterwebfileid", "mspp_name", "mspp_parentpageid", "mspp_partialurl", "mspp_publishingstateid", "mspp_releasedate", "mspp_summary", "mspp_summary1", "mspp_title", "mspp_websiteid", "WebResource_file_attachment_html"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_FBAB524E_5B3C_4DB1_8A8A_74366B17D549____2B6A953D_2F2F_4CA4_8D4E_7637C1C9A42F", "_FBAB524E_5B3C_4DB1_8A8A_74366B17D549____FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_2", "_FBAB524E_5B3C_4DB1_8A8A_74366B17D549____FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_3", "_FBAB524E_5B3C_4DB1_8A8A_74366B17D549____FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_4", "_FBAB524E_5B3C_4DB1_8A8A_74366B17D549___mspp_webfile_summary_monacoEditor"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webfile = {
		mspp_contentdisposition: { attachment: 756150001, inline: 756150000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));