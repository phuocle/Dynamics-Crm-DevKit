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
			DateAttribute: {},
			DateAttribute1: {},
			EntityForDateAttribute: {},
			EntityForDateAttribute1: {},
			GoalAttribute: {},
			GoalAttribute1: {},
			SourceAttribute: {},
			SourceAttribute1: {},
			SourceEntity: {},
			SourceEntity1: {},
			SourceState: {},
			SourceState1: {},
			SourceStatus: {},
			SourceStatus1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					_27578C24_6DCB_7649_BA95_913C229C39EB: {},
					_41A22D3A_56EC_4317_812A_AC5C92764CD5: {},
					_6AD1C698_2E2E_8A08_B43A_B66815B9EB06: {},
					_D65A4472_A959_3B9C_C416_D79C56E4A44B: {}
				}
			}
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
	OptionSet.RollupField = {
		EntityForDateAttribute : {
		},
		SourceEntity : {
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