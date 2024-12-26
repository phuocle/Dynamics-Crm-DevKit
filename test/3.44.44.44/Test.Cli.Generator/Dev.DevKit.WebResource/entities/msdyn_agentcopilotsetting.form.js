'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_agentcopilotsetting_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_agentassistenabled: {},
			msdyn_answerassistenabled: {},
			msdyn_companyscopeurls: {},
			msdyn_copilotenabled: {},
			msdyn_emailassistenabled: {},
			msdyn_interactionsenabled: {},
			msdyn_name: {},
			msdyn_transcriptenabled: {},
			msdyn_useagentlanguage: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

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
	OptionSet.msdyn_agentcopilotsetting = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_copilotemailenabledmode : {
			_default: 133230002,
			manual: 133230001
		},
		msdyn_lasttrainingstatus : {
			Completed: 100230102,
			Failed: 100230103,
			Initiated: 100230101,
			InvalidKBFilters: 100230104,
			NoKBArticles: 100230105
		},
		msdyn_systemstatus : {
			Configuring: 100230002,
			Disabling: 100230004,
			FailureConfiguring: 100230005,
			New: 100230001,
			Ready: 100230003
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