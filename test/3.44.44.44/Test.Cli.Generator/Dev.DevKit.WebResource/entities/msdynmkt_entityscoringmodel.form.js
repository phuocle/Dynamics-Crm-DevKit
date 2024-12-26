'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_entityscoringmodel_Information = function(executionContext, defaultWebResourceName) {
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
			Scores: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Scores: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_entityscoringmodel_msdynmkt_entitygradedistribution: {},
			msdynmkt_entityscoringmodel_msdynmkt_entityscoredistribution: {},
			msdynmkt_entityscoringmodelid_msdyncrm_leadscore_v2: {},
			msdynmkt_msdynmkt_entityscoringmodel_msdynmkt_entityscoringmodel_baseversionmodelid: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_entityscoringmodel_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_globalcondition: {},
			msdynmkt_gradingdefinition: {},
			msdynmkt_mainquery: {},
			msdynmkt_modeldefinition: {},
			msdynmkt_name: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_entityscoringmodel_msdynmkt_entitygradedistribution: {},
			msdynmkt_entityscoringmodel_msdynmkt_entityscoredistribution: {},
			msdynmkt_entityscoringmodelid_msdyncrm_leadscore_v2: {},
			msdynmkt_msdynmkt_entityscoringmodel_msdynmkt_entityscoringmodel_baseversionmodelid: {}
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
	OptionSet.msdynmkt_entityscoringmodel = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Deleted: 723270005,
			Draft: 723270000,
			Live: 723270002,
			Publishing: 723270001,
			Stopped: 723270004,
			Stopping: 723270003
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