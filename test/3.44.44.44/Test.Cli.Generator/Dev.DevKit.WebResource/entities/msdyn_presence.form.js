'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_presence_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_basepresencestatus: {},
			msdyn_canuserset: {},
			msdyn_description: {},
			msdyn_name: {},
			msdyn_presencestatustext: {},
			ownerid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_presence_msdyn_agentcapacityupdatehistory_presenceid: {},
			msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid: {},
			msdyn_msdyn_presence_systemuser: {},
			msdyn_presence_msdyn_agentstatus_currentpresenceid: {},
			msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup: {},
			msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup: {}
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
	OptionSet.msdyn_presence = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_basepresencestatus : {
			Available: 192360000,
			Away: 192360003,
			Busy: 192360001,
			Busy_DND: 192360002,
			Offline: 192360004
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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