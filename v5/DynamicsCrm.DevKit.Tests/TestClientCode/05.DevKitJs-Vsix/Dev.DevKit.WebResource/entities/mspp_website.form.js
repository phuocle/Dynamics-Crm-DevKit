'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_website_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["grid_advancedforms", "grid_basicforms", "grid_childpages", "grid_lists", "grid_pagetemplates", "grid_rootpages", "grid_sitemarkers", "grid_sitesettings", "grid_websiteaccesspermissions", "mspp_defaultlanguage", "mspp_footerwebtemplateid", "mspp_headerwebtemplateid", "mspp_name", "mspp_parentwebsiteid", "mspp_partialurl", "mspp_primarydomainname", "mspp_website_language", "SupportedLanguagesSubgrid"],
			bpf: [],
			dialog: [],
			grid: ["grid_advancedforms", "grid_basicforms", "grid_childpages", "grid_lists", "grid_pagetemplates", "grid_rootpages", "grid_sitemarkers", "grid_sitesettings", "grid_websiteaccesspermissions", "SupportedLanguagesSubgrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_A36E3E44_6924_4722_8D78_44175EAD950B____139917FD_C4F2_411C_BCAB_D810AD4B3A5A", "_A36E3E44_6924_4722_8D78_44175EAD950B____A36E3E44_6924_4722_8D78_44175EAD950B_SECTION_2", "_A36E3E44_6924_4722_8D78_44175EAD950B___tab_13_section_2", "tab_advancedforms___tab_12_section_3", "tab_basicforms___tab_11_section_2", "tab_childpages___tab_5_section_1", "tab_lists___tab_10_section_2", "tab_pagetemplates___tab_10_section_1", "tab_rootpages___tab_12_section_2", "tab_sitemarkers___tab_9_section_1", "tab_sitesettings___tab_8_section_1", "tab_websiteaccesspermissions___tab_12_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_website = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));