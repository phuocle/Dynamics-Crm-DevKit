'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRecord_Creation_and_Update_Rule_Item = function(executionContext, defaultWebResourceName) {
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
			Name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					CaseProperties: {},
					ConditionControl: {},
					Name: {},
					primaryactionsection: {},
					RegardingSettingsection: {},
					secondaryactionsection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			convertruleitem_activitymonitor: {},
			msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem: {},
			msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormRecord_Creation_and_Update_Rule_Item_UCI = function(executionContext, defaultWebResourceName) {
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
			ConditionXml: {},
			configure_child_flow: {},
			Name: {},
			PrimaryCreateEntityLogicalName: {},
			WebResource_Disclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			ConditionBuilder: {
				Section: {
					Actions_To_Take: {},
					New_Condition: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			convertruleitem_activitymonitor: {},
			msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem: {},
			msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem: {}
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
	OptionSet.ConvertRuleItem = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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