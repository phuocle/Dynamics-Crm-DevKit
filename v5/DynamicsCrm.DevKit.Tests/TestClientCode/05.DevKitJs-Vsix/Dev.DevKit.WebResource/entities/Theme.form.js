'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Theme = {
		statecode: { Custom: 0, System: 1 },
		statuscode: { Custom: 1, System: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));