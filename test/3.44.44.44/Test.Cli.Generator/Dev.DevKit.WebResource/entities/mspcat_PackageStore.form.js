'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPackages = function(executionContext, defaultWebResourceName) {
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
			ModifiedBy: {},
			ModifiedOn: {},
			ModifiedOnBehalfBy: {},
			mspcat_AsyncOperationId: {},
			mspcat_IntendedDeploymentType: {},
			mspcat_Name: {},
			mspcat_Operation: {},
			mspcat_PackageFile: {},
			mspcat_ProcessingMessage: {},
			mspcat_SolutionUniqueName: {},
			OwnerId: {},
			statecode: {},
			statuscode: {},
			Subgrid_new_1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Subgrid_new_1: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			mspcat_mspcat_catalogsubmissionfiles_PackageStor: {}
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
	OptionSet.mspcat_PackageStore = {
		mspcat_IntendedDeploymentType : {
			Standard: 526430000,
			Template: 526430001
		},
		mspcat_Operation : {
			Create_Package: 958090001,
			Package_Upload: 526430001,
			Submit_To_Catalog: 958090000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Completed: 958090001,
			Draft: 958090003,
			Failed: 958090002,
			Inactive: 2,
			Pending: 1,
			Running: 958090000,
			Submitted: 958090004
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