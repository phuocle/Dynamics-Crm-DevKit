'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_appointmentactivity_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_appointmenttemplate: {},
			msdyncrm_appointmenttemplate1: {},
			msdyncrm_description: {},
			msdyncrm_EntityTarget: {},
			msdyncrm_insightsdata: {},
			msdyncrm_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			appt_main_tab: {
				Section: {
					_5D345B0E_005F_40D0_8D5C_AC568D5C1276: {},
					_CDC6531C_8EC5_4BDE_90CF_F6CC9F8BB376_SECTION_2: {},
					appointmenttdetails_section: {},
					description_section: {}
				}
			},
			data_tab: {
				Section: {
					data_tab_section: {}
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
	OptionSet.msdyncrm_appointmentactivity = {
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