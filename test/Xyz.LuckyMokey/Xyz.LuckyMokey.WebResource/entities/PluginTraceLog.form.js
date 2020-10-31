'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormPluginTraceLog_Information = function(executionContext, defaultWebResourceName) {
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
			Configuration: {},
			CorrelationId: {},
			Depth: {},
			ExceptionDetails: {},
			IsSystemCreated: {},
			MessageBlock: {},
			MessageName: {},
			Mode: {},
			OperationType: {},
			PerformanceExecutionDuration: {},
			PerformanceExecutionStartTime: {},
			PersistenceKey: {},
			PluginStepId: {},
			PrimaryEntity: {},
			RequestId: {},
			SecureConfiguration: {},
			TypeName: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Configuration: {
				Section: {
					Configuration_General: {},
					Configuration_Context: {}
				}
			},
			Execution: {
				Section: {
					Execution_Performance: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			MessageName: {},
			OperationType: {},
			PrimaryEntity: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PluginTraceLog = {
		Mode : {
			Synchronous: 0,
			Asynchronous: 1
		},
		OperationType : {
			Unknown: 0,
			Plug_in: 1,
			Workflow_Activity: 2
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