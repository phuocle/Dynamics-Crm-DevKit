'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormTheme = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			AccentColor: {},
			BackgroundColor: {},
			ControlBorder: {},
			ControlShade: {},
			DefaultCustomEntityColor: {},
			DefaultEntityColor: {},
			GlobalLinkColor: {},
			HeaderColor: {},
			HoverLinkEffect: {},
			LogoId: {},
			LogoToolTip: {},
			MainColor: {},
			Name: {},
			NavBarBackgroundColor: {},
			NavBarShelfColor: {},
			PageHeaderBackgroundColor: {},
			PanelHeaderBackgroundColor: {},
			ProcessControlColor: {},
			SelectedLinkEffect: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					theme_information: {},
					theme_navigation: {},
					theme_ui_elements: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Theme = {
		statecode : {
			Custom: 0,
			System: 1
		},
		statuscode : {
			Custom: 1,
			System: 2
		},
        RollupState : {
            NotCalculated: 0,
            Calculated: 1,
            OverflowError: 2,
            OtherError: 3,
            RetryLimitExceeded: 4,
            HierarchicalRecursionLimitReached: 5,
            LoopDetected: 6
        }

	};
})(OptionSet || (OptionSet = {}));