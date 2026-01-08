'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormTheme = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AccentColor", "BackgroundColor", "ControlBorder", "ControlShade", "DefaultCustomEntityColor", "DefaultEntityColor", "GlobalLinkColor", "HeaderColor", "HoverLinkEffect", "LogoId", "LogoToolTip", "MainColor", "Name", "NavBarBackgroundColor", "NavBarShelfColor", "PageHeaderBackgroundColor", "PanelHeaderBackgroundColor", "ProcessControlColor", "SelectedLinkEffect"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___theme_information", "general___theme_navigation", "general___theme_ui_elements"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Theme = {
		statecode: { Custom: 0, System: 1 },
		statuscode: { Custom: 1, System: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));