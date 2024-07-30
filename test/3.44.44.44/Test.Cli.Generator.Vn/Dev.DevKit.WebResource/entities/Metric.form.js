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
			AmountDataType: {},
			Description: {},
			IsAmount: {},
			IsStretchTracked: {},
			MetricLineItemSubGrid: {},
			Name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			description: {
				Section: {
					description: {}
				}
			},
			general: {
				Section: {
					_379F3DB8_82DF_4E44_930A_C7A22C0E5206: {}
				}
			},
			Rollup_Attributes: {
				Section: {
					_CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			MetricLineItemSubGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			metric_goal: {},
			metric_rollupfield: {}
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
	OptionSet.Metric = {
		AmountDataType : {
			Loai_tien: 0,
			So_nguyen: 2,
			Thap_phan: 1
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Da_dong: 1,
			Mo: 0
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