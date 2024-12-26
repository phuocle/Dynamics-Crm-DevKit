'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Report = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ManagedType : {
			Customer: 1,
			Dataverse: 0
		},
		ReportTypeCode : {
			Excel_Embedded_Report: 6,
			Excel_Embedded_Report_Template: 7,
			Linked_Report: 3,
			Other_Report: 2,
			Power_BI_Analytic_Report: 5,
			Power_BI_Paginated_Report: 4,
			Reporting_Services_Report: 1
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