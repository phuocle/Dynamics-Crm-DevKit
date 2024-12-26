'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_matchingstrategy_Information = function(executionContext, defaultWebResourceName) {
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
			Fields: {},
			msdyncrm_description: {},
			msdyncrm_name: {},
			msdyncrm_targetentity: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Fields: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_marketingform_contactmatchingstrategy: {},
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_marketingform_leadmatchingstrategy: {},
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_marketingpageconfiguration_contactmatchingstrategy: {},
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_marketingpageconfiguration_leadmatchingstrategy: {},
			msdyncrm_msdyncrm_matchingstrategy_msdyncrm_matchingstrategyattribute_msdyncrm_matchingstrategy: {}
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
	OptionSet.msdyncrm_matchingstrategy = {
		msdyncrm_matchingstrategyfieldsstatus : {
			Not_validated: 100000000,
			Validated: 100000001
		},
		msdyncrm_targetentity : {
			Contact: 192350000,
			Lead: 192350001
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