'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyusd_toolbarbutton_Information = function(executionContext, defaultWebResourceName) {
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
			Actions: {},
			msdyusd_ButtonText: {},
			msdyusd_EnabledCondition: {},
			msdyusd_Image: {},
			msdyusd_name: {},
			msdyusd_order: {},
			msdyusd_shortcutkey: {},
			msdyusd_showtab: {},
			msdyusd_Tooltip: {},
			msdyusd_VisibleCondition: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					tab_3_section_2: {}
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
			Actions: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyusd_toolbarbutton_agentscriptaction: {}
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
	OptionSet.msdyusd_toolbarbutton = {
		msdyusd_EnableCondition : {
			Always: 803750000,
			Customer_Session: 803750001,
			Script_Expression: 803750002
		},
		OwnerIdType : {
		},
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