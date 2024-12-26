'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_marketingformsubmission_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			ModifiedOn: {},
			msdynmkt_createdentity: {},
			msdynmkt_customerjourneyid: {},
			msdynmkt_emailid: {},
			msdynmkt_failuredescription: {},
			msdynmkt_marketingformid: {},
			msdynmkt_name: {},
			msdynmkt_pageurl: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			statecode: {},
			statuscode: {},
			Submitted_Values: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Submitted_Values: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_marketingformsubmission_field: {}
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
	OptionSet.msdynmkt_marketingformsubmission = {
		msdynmkt_marketingformsubmissiontype : {
			Form_Capture: 624650001,
			Form_Embed: 624650000,
			Form_Standalone: 624650002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Confirmation_Pending: 575440004,
			Failure: 575440001,
			Failure_after_Confirmation: 575440005,
			Finished: 575440003,
			Inactive: 2,
			Pending: 575440000,
			Success: 575440002,
			Warning: 575440006
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