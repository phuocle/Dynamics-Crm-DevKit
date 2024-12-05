'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_solutionhistory_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_errorcode: {},
			msdyn_exceptionmessage: {},
			msdyn_ismanaged: {},
			msdyn_isoverwritecustomizations: {},
			msdyn_ispatch: {},
			msdyn_name: {},
			msdyn_operation: {},
			msdyn_publishername: {},
			msdyn_solutionversion: {},
			msdyn_suboperation: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_endtime: {},
			msdyn_result: {},
			msdyn_starttime: {},
			msdyn_totaltime: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	OptionSet.msdyn_solutionhistory = {
		msdyn_operation : {
			Export: 2,
			Import: 0,
			ImportTranslation: 6,
			LanguageProvision: 5,
			None: 9,
			Publish: 3,
			PublishAll: 4,
			RibbonMetadataGeneration: 7,
			Uninstall: 1,
			WorkflowSetState: 8
		},
		msdyn_status : {
			Completed: 1,
			Started: 0
		},
		msdyn_suboperation : {
			Delete: 4,
			New: 1,
			None: 0,
			Update: 3,
			Upgrade: 2
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