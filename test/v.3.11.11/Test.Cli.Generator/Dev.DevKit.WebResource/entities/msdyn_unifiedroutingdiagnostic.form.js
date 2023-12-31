'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_unifiedroutingdiagnostic_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_completedon: {},
			msdyn_decisionrulesetid: {},
			msdyn_evaluation: {},
			msdyn_inputdata: {},
			msdyn_name: {},
			msdyn_outputdata: {},
			msdyn_ruletype: {},
			msdyn_startedon: {},
			msdyn_targetobject: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_unifiedroutingdiagnostic = {
		msdyn_diagnosticdatatype : {
			Assignment_Diagnostic: 4,
			Demand_Classification_Diagnostic: 2,
			Demand_ML_Diagnostic: 1,
			Demand_RTQ_Diagnostic: 3,
			Unknown: 0
		},
		msdyn_ruletype : {
			Assignment: 6,
			Assignment_Selection_Criteria: 9,
			Demand_Classification: 1,
			Intake: 11,
			ML: 4,
			Prioritization: 5,
			Route_To_Queue: 2,
			Skill_Identification: 3
		},
		msdyn_targetobjectIdType : {
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