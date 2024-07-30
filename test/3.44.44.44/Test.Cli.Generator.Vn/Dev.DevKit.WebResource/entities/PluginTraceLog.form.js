'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
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
					Configuration_Context: {},
					Configuration_General: {}
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
	OptionSet.PluginTraceLog = {
		Mode : {
			Dong_bo: 0,
			Khong_dong_bo: 1
		},
		OperationType : {
			Hoat_dong_cua_Quy_trinh: 2,
			Khong_xac_dinh: 0,
			Phan_bo_tro: 1
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