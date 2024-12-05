'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_virtualsegment_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_createdby: {},
			msdynmkt_createddate: {},
			msdynmkt_description: {},
			msdynmkt_lastupdated: {},
			msdynmkt_lastused: {},
			msdynmkt_membercount: {},
			msdynmkt_name: {},
			msdynmkt_owningbusinessunit: {},
			msdynmkt_source: {},
			msdynmkt_statecode: {},
			msdynmkt_statuscode: {},
			msdynmkt_type: {},
			msdynmkt_virtualsegmentId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					_E81032F7_53B1_4AF7_AC47_9BB7DEA5F822: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_createdby: {},
			msdynmkt_lastupdated: {},
			msdynmkt_membercount: {},
			msdynmkt_statecode: {}
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
	OptionSet.msdynmkt_virtualsegment = {
		msdynmkt_source : {
			Customer_Insights_Data: 0,
			Customer_Insights_Journeys: 2,
			Dynamics_365_Marketing_outbound: 1
		},
		msdynmkt_statecode : {
			Active: 0,
			Inactive: 1
		},
		msdynmkt_statuscode : {
			Completed_with_warnings: 4,
			Deactivated: 2,
			Draft: 1,
			Getting_ready: 3,
			Ready_to_use: 0,
			Stopped: 6,
			Stopping: 5
		},
		msdynmkt_type : {
			Compound: 3,
			Dynamic: 2,
			Expansion: 4,
			Static: 1,
			Unknown: 0
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