'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRollupField_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["DateAttribute", "DateAttribute1", "EntityForDateAttribute", "EntityForDateAttribute1", "GoalAttribute", "GoalAttribute1", "SourceAttribute", "SourceAttribute1", "SourceEntity", "SourceEntity1", "SourceState", "SourceState1", "SourceStatus", "SourceStatus1"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general____27578C24_6DCB_7649_BA95_913C229C39EB", "general____41A22D3A_56EC_4317_812A_AC5C92764CD5", "general____6AD1C698_2E2E_8A08_B43A_B66815B9EB06", "general____D65A4472_A959_3B9C_C416_D79C56E4A44B"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RollupField = {
		EntityForDateAttribute: { },
		SourceEntity: { },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));