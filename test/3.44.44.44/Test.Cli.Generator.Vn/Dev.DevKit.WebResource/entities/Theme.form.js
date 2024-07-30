'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormChu_de = function(executionContext, defaultWebResourceName) {
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
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Theme = {
		statecode : {
			He_thong: 1,
			Tuy_chinh: 0
		},
		statuscode : {
			He_thong: 2,
			Tuy_chinh: 1
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