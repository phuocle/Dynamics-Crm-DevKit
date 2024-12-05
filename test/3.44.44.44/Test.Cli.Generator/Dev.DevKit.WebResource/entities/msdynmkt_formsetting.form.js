'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormForm_settings_main_form = function(executionContext, defaultWebResourceName) {
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
			audience_settings_ctrl: {},
			lead_contact_mapping_ctrl: {},
			msdynmkt_defaultformtargetaudience: {},
			msdynmkt_Doubleoptin: {},
			msdynmkt_Errornotification: {},
			msdynmkt_formtype: {},
			msdynmkt_Name: {},
			msdynmkt_Postsubmissionactions: {},
			msdynmkt_Prefillfields: {},
			msdynmkt_Redirectaftersubmission: {},
			msdynmkt_Thankyouemail: {},
			msdynmkt_Thankyounotification: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			audience_tab: {
				Section: {
					audience_settings_section: {},
					target_audience_section: {}
				}
			},
			general_tab_body: {
				Section: {
					general_section: {},
					post_submission_section: {}
				}
			},
			lead_contact_mapping_tab: {
				Section: {
					lead_contact_mapping: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			audience_settings_ctrl: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_formtargetaudience_formsetting: {}
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
	OptionSet.msdynmkt_formsetting = {
		msdynmkt_createanewcontact_choice : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_defaulttargetaudience : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_Duplicaterecords : {
			Always_create_new_record: 100000001,
			Match_existing_contact_using_email: 100000000
		},
		msdynmkt_formtype : {
			Marketing_form: 534120000,
			Registration_form: 534120001
		},
		msdynmkt_Howtomatchexistingcontact : {
			Always_create_new_record: 100000001,
			Match_existing_contact_using_email: 100000000
		},
		msdynmkt_linkedleadtoparentcontact_choice : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_matchexistingcontact_choice : {
			Always_create_new_record: 100000001,
			Match_existing_contact_using_email: 100000000
		},
		msdynmkt_Postsubmissionactions : {
			Thank_you_message: 100000000
		},
		msdynmkt_Updatematchedcontactwithsubmitteddata : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_updateparentcontactwithsubmitteddata_choi : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
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