'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_matchingstrategy_Information = function(executionContext, defaultWebResourceName) {
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
			Matching_Strategy_Attributes: {},
			msdynmkt_description: {},
			msdynmkt_ignorebusinessunits: {},
			msdynmkt_matchinactiverecords: {},
			msdynmkt_name: {},
			msdynmkt_ruleslearnmore: {},
			msdynmkt_rulesmodel: {},
			msdynmkt_targetentity: {},
			msdynmkt_targetentity1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_rules: {
				Section: {
					rules_for_matching_records: {},
					rules_learn_more: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Matching Strategy Attributes: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_formtargetaudience_contactmatchingrule_msdynmkt_matchingstrategy: {},
			msdynmkt_formtargetaudience_leadmatchingrule_msdynmkt_matchingstrategy: {},
			msdynmkt_marketingform_contactmatchingrule_msdynmkt_matchingstrategy: {},
			msdynmkt_marketingform_leadmatchingrule_msdynmkt_matchingstrategy: {},
			msdynmkt_matchingstrategy_marketingform: {},
			msdynmkt_matchingstrategy_marketingformtemplate: {},
			msdynmkt_matchingstrategy_strategyattribute: {},
			msdynmkt_parentcontactmatchingstrategy_marketingform: {}
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
	OptionSet.msdynmkt_matchingstrategy = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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