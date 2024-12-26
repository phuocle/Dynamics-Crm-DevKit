'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_brandprofile_Information = function(executionContext, defaultWebResourceName) {
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
			logos_grid: {},
			msdynmkt_brandprofileId: {},
			msdynmkt_default: {},
			msdynmkt_description: {},
			msdynmkt_name: {},
			msdynmkt_social_facebook: {},
			msdynmkt_social_instagram: {},
			msdynmkt_social_linkedin: {},
			msdynmkt_social_twitter: {},
			msdynmkt_social_youtube: {},
			msdynmkt_themestate: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			Senders: {},
			statuscode: {},
			Themes: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_F7E7A749_9E56_4A8C_94E5_91B05F2617C8: {
				Section: {
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			},
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			},
			tab_logos: {
				Section: {
					tab_logos: {}
				}
			},
			theme_tab: {
				Section: {
				}
			},
			themes_tab: {
				Section: {
					themes_tab_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			logos_grid: {},
			Senders: {},
			Themes: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_msdynmkt_brandprofile_brandsender: {},
			msdynmkt_msdynmkt_brandprofile_msdynmkt_brandtheme: {},
			msdynmkt_msdynmkt_brandprofile_msdynmkt_email_brandprofile: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormLogos = function(executionContext, defaultWebResourceName) {
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
			logos_grid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_logos: {
				Section: {
					tab_logos: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			logos_grid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_msdynmkt_brandprofile_brandsender: {},
			msdynmkt_msdynmkt_brandprofile_msdynmkt_brandtheme: {},
			msdynmkt_msdynmkt_brandprofile_msdynmkt_email_brandprofile: {}
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
	OptionSet.msdynmkt_brandprofile = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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