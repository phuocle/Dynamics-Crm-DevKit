'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_Configuration_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Name: {},
			msdyn_Type: {},
			msdyn_Value: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery: {},
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery: {},
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery: {},
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout: {},
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate: {},
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_Configuration_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyn_Name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery: {},
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery: {},
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery: {},
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout: {},
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate: {},
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery: {}
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
	OptionSet.msdyn_Configuration = {
		msdyn_Type : {
			Clone_Entity_Query: 192350005,
			Filter_Layout: 192350000,
			Resource_Cell_Template: 192350001,
			Retrieve_Resources_Query: 192350002,
			Schedule_Assistant_Filter_Layout: 192350003,
			Schedule_Assistant_Retrieve_Constraints_Query: 192350004
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