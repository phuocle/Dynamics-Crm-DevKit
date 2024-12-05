'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_journey_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			msdynmkt_baseversionjourneyid: {},
			msdynmkt_DoubleOptInCompliance: {},
			msdynmkt_errorDetails: {},
			msdynmkt_frequencycaptype: {},
			msdynmkt_issupersededbylaterversion: {},
			msdynmkt_JourneyJSON: {},
			msdynmkt_Purpose: {},
			msdynmkt_versionnumber: {},
			OwnerId: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			settings: {
				Section: {
					settings_tab_section_1: {}
				}
			},
			tab: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_experiment_journeyId: {},
			msdynmkt_journey_journeyevent: {},
			msdynmkt_journey_journeyoptimizationcount: {},
			msdynmkt_journey_msdynmkt_journeyrunparameter_JourneyId: {},
			msdynmkt_journeydependency_journey: {},
			msdynmkt_marketingformsubmission_customerjourneyid: {},
			msdynmkt_msdynmkt_journey_contact_customerjourneyid: {},
			msdynmkt_msdynmkt_journey_lead_customerjourneyid: {},
			msdynmkt_msdynmkt_journey_msdynmkt_teamsengagement_engagementjourney: {},
			msdynmkt_opportunity_JourneyId_msdynmkt_journey: {},
			msdynmkt_phonecall_JourneyId_msdynmkt_journey: {},
			msdynmkt_segmentusage_JourneyId_lookup: {},
			msdynmkt_segmentusage_msdynmkt_journey_dependententityid: {},
			msdynmkt_task_JourneyId_msdynmkt_journey: {}
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
	OptionSet.msdynmkt_journey = {
		msdynmkt_frequencycaptype : {
			Apply_frequency_cap_by_skipping_messages: 0,
			Ignore_frequency_cap: 1
		},
		msdynmkt_Purpose : {
			Double_Opt_In: 721460001,
			Marketing: 721460000
		},
		msdynmkt_triggerType : {
			Event: 3,
			OneTime: 2,
			Ongoing: 1,
			Recurring: 0
		},
		statecode : {
			Completed: 6,
			Completing: 5,
			Deleted: 4,
			Draft: 0,
			Live: 1,
			Publishing: 3,
			Stopped: 2,
			Stopping: 8
		},
		statuscode : {
			Completed: 8,
			Completing: 7,
			Deleted: 6,
			Draft: 1,
			Draining: 5,
			Live: 2,
			Publishing: 4,
			Stopped: 3,
			Stopping: 9
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