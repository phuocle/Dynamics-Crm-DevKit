'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyusd_configuration_Information = function(executionContext, defaultWebResourceName) {
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
			ActionCalls: {},
			AgentScripts: {},
			CustomizationFiles: {},
			EntitySearches: {},
			Events: {},
			Forms: {},
			HostedControls: {},
			msdyusd_auditanddiagnosticssettingfield: {},
			msdyusd_ClientConfigCacheVersionNumber: {},
			msdyusd_Description: {},
			msdyusd_isdefault: {},
			msdyusd_name: {},
			msdyusd_ucisettingsid: {},
			Options: {},
			OwnerId: {},
			Scriplets: {},
			SessionLines: {},
			Toolbars: {},
			usergrid: {},
			WindowNavigationRules: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {},
					tab_4_section_3: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_1: {},
					tab_5_section_2: {},
					tab_5_section_3: {}
				}
			},
			tab_6: {
				Section: {
					tab_6_section_1: {},
					tab_6_section_2: {},
					tab_6_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			ActionCalls: {},
			AgentScripts: {},
			CustomizationFiles: {},
			EntitySearches: {},
			Events: {},
			Forms: {},
			HostedControls: {},
			Options: {},
			Scriplets: {},
			SessionLines: {},
			Toolbars: {},
			usergrid: {},
			WindowNavigationRules: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyusd_configuration_users: {},
			navAsyncOperations: {},
			navAudit: {}
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
	OptionSet.msdyusd_configuration = {
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