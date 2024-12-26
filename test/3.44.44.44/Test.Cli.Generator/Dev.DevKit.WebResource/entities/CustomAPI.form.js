'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCustomAPI_Information = function(executionContext, defaultWebResourceName) {
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
			AllowedCustomProcessingStepType: {},
			BindingType: {},
			BoundEntityLogicalName: {},
			Description: {},
			DisplayName: {},
			ExecutePrivilegeName: {},
			IsFunction: {},
			IsPrivate: {},
			Name: {},
			OwnerId: {},
			PluginTypeId: {},
			UniqueName: {},
			WorkflowSdkStepEnabled: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			AIPluginOperation_CustomAPI_CustomAPI: {},
			catalogassignment_customapi: {},
			customapi_customapirequestparameter: {},
			customapi_customapiresponseproperty: {},
			customapi_msdyn_function_customapi: {},
			customapi_plugin_CustomAPI: {},
			customapi_serviceplanmapping: {},
			fabricaiskill_customapiid: {},
			msdyn_apirequestcache_CustomAPI_customapi: {},
			msdyn_customapi_msdyn_customapirulesetconfiguration_CustomAPI: {},
			msdyn_customapi_msdyn_pmbusinessruleautomationconfig_CustomApiId: {},
			msdyn_formmapping_customapiid: {},
			msdyn_knowledgeassetconfiguration_customapiid: {},
			msdynmkt_customapi_eventmetadata: {},
			msdynmkt_journeydependency_dependency_customapi: {}
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
	OptionSet.CustomAPI = {
		AllowedCustomProcessingStepType : {
			Async_Only: 1,
			None: 0,
			Sync_and_Async: 2
		},
		BindingType : {
			Entity: 1,
			Entity_Collection: 2,
			Global: 0
		},
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