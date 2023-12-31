'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_sequence_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_description: {},
			msdyn_name: {},
			msdyn_regardingentitydisplayname: {},
			msdyn_regardingEntityName: {},
			OwnerId: {},
			related_records: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Cadence: {
				Section: {
					tab_2_section_1: {}
				}
			},
			SequenceSummary: {
				Section: {
					SequenceDetails: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			related_records: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_sequenceparent: {},
			navAudit: {},
			navConnections: {}
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
	OptionSet.msdyn_sequence = {
		msdyn_orchestratorversion : {
			V1: 1,
			V2: 2
		},
		msdyn_Type : {
			Activation: 1,
			Definition: 0
		},
		OwnerIdType : {
		},
		statecode : {
			Active: 1,
			Inactive: 0
		},
		statuscode : {
			Active: 2,
			Inactive: 1,
			Revision: 3
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