'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.WorkflowDependency = {
		Type : {
			Argument_Entity_that_workflow_depends_on: 9,
			Attribute_definition_that_workflow_depends_on: 8,
			Custom_entity_definition_that_workflow_depends_on: 7,
			Local_parameter: 2,
			Primary_entity: 3,
			Primary_entity_after_SDK_operation: 5,
			Primary_entity_before_SDK_operation: 4,
			Related_entity: 6,
			Sdk_association: 1
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