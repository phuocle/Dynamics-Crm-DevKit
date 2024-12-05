'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_ocskillidentmlmodel_Information = function(executionContext, defaultWebResourceName) {
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
			Data_loading_status: {},
			msdyn_name: {},
			msdyn_retrainingconfiguration: {},
			msdyn_trainingconfiguration: {},
			msdyn_UniqueName: {},
			OwnerId: {},
			statecode: {},
			training_history: {},
			Trainingdatasubgrid: {},
			WebResource_inputmodel: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Intelligent_skill_based_routing: {
				Section: {
					Intelligent_skill_based_routing_section_7: {},
					Intelligent_skill_based_routing_section_8: {},
					summarysection: {}
				}
			},
			training_data: {
				Section: {
					tab_2_section_3: {},
					training_data_section_3: {}
				}
			},
			trainings: {
				Section: {
					training_history: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_ocskillidentmlmodelstatus: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			Data_loading_status: {},
			training_history: {},
			Trainingdatasubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_ocsimltraining_ocskillidentmlmodeli: {},
			msdyn_ocsitdimportconfig_ocskillidentmlmo: {},
			msdyn_ocsitrainingdata_ocskillidentmlmode: {}
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
	OptionSet.msdyn_ocskillidentmlmodel = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_ocskillidentmlmodelstatus : {
			Draft: 100000000,
			Published: 100000002,
			Trained: 100000001
		},
		msdyn_ocskillidentmlmodeltrainingstatus : {
			Loading_data: 100000007,
			Not_trained: 100000000,
			Publish_completed: 100000006,
			Publish_failed: 100000005,
			Publish_in_progress: 100000004,
			Training_completed: 100000002,
			Training_failed: 100000003,
			Training_in_progress: 100000001
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