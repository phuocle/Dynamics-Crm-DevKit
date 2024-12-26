'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_phonecallactivity_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_AccountActivityTarget: {},
			msdyncrm_activitytarget: {},
			msdyncrm_description: {},
			msdyncrm_EntityTarget: {},
			msdyncrm_insightsdata: {},
			msdyncrm_name: {},
			msdyncrm_phonecalltemplate: {},
			msdyncrm_phonecalltemplate1: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			data_tab: {
				Section: {
					data_tab_section: {}
				}
			},
			phonecall_main_tab: {
				Section: {
					_2DF64D8B_E44C_4EA5_9C80_BC1A58E1E007_SECTION_2: {},
					description_section: {},
					phonecalldetails_section: {}
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
	OptionSet.msdyncrm_phonecallactivity = {
		msdyncrm_AccountActivityTarget : {
			Account_created_by: 192350002,
			Account_owner: 192350001,
			Customer_journey_owner: 192350000
		},
		msdyncrm_activitytarget : {
			Contact_created_by: 192350002,
			Contact_owner: 192350001,
			Customer_journey_owner: 192350000
		},
		msdyncrm_EntityTarget : {
			Account: 192350000,
			Contact: 192350001
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