'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_segment_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_sourcesegmentuid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_msdynmkt_segment_msdynmkt_teamsengagement_audiencesegment: {},
			msdynmkt_segmentusage_msdynmkt_segment: {},
			msdynmkt_segmentusage_msdynmkt_segment_dependententityid: {}
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
	OptionSet.msdynmkt_segment = {
		msdynmkt_scope : {
			Business_unit: 270100001,
			Organization: 270100000
		},
		msdynmkt_source : {
			Customer_Insights: 11,
			Marketing: 10,
			Real_time_Journeys: 12
		},
		msdynmkt_type : {
			Dynamic: 11,
			Expansion: 12,
			Static: 10
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			ComputedWithWarnings: 7,
			Computing: 6,
			Deleted: 4,
			Error: 3,
			Exporting: 5,
			Inactive: 2,
			Stopped: 9,
			Stopping: 8
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