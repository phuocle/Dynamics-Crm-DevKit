'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SdkMessageProcessingStep = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		EventHandlerTypeCode : {
		},
		InvocationSource : {
			Child: 1,
			Parent: 0
		},
		Mode : {
			Asynchronous: 1,
			Synchronous: 0
		},
		Stage : {
			Final_Post_operation_For_internal_use_only: 55,
			Initial_Pre_operation_For_internal_use_only: 5,
			Internal_Post_operation_After_External_Plugins_For_internal_use_only: 45,
			Internal_Post_operation_Before_External_Plugins_For_internal_use_only: 35,
			Internal_Pre_operation_After_External_Plugins_For_internal_use_only: 25,
			Internal_Pre_operation_Before_External_Plugins_For_internal_use_only: 15,
			Main_Operation_For_internal_use_only: 30,
			Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only: 90,
			Post_operation: 40,
			Post_operation_Deprecated: 50,
			Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only: 80,
			Pre_operation: 20,
			Pre_validation: 10
		},
		StateCode : {
			Disabled: 1,
			Enabled: 0
		},
		StatusCode : {
			Disabled: 2,
			Enabled: 1
		},
		SupportedDeployment : {
			Both: 2,
			Microsoft_Dynamics_365_Client_for_Outlook_Only: 1,
			Server_Only: 0
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