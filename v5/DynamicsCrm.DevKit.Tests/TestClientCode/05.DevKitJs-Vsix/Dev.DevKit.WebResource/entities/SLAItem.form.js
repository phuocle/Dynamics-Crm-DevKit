'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSLAItem_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActionURL", "AllowPauseResume", "ApplicableEntity", "applicablewhencontrol", "BusinessHoursId", "FailureAfter", "FailureAfter1", "msdyn_AdvancedPauseConfiguration", "msdyn_CustomTimeCalculation", "msdyn_CustomTimeCalculationWorkflowId", "msdyn_PauseConfigurationXml", "msdyn_slakpiid", "Name", "Name1", "relatedcasefield", "successconditioncontrol", "WarnAfter", "WarnAfter1", "WebResource_preview", "WebResource_slaitem_applicablewhen_notification", "WebResource_slaitem_success_notification"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["SLAId"],
			navigation: [],
			quick: [],
			tab: ["tabUC___Actions", "tabUC___ApplicableWhen", "tabUC___PauseConfiguration", "tabUC___SuccessConditions", "tabUC___Warn_and_Fail_Duration"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SLAItem = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));