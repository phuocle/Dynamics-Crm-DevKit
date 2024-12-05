'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_formtargetaudience_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_contactmatchingrule: {},
			msdynmkt_contactmatchingrule1: {},
			msdynmkt_createcontact: {},
			msdynmkt_createcontact1: {},
			msdynmkt_createlead: {},
			msdynmkt_description: {},
			msdynmkt_formsettingid: {},
			msdynmkt_formtype: {},
			msdynmkt_handlingduplicatecontacts: {},
			msdynmkt_handlingduplicatecontacts1: {},
			msdynmkt_handlingduplicateleads: {},
			msdynmkt_leadmatchingrule: {},
			msdynmkt_name: {},
			msdynmkt_targetentity: {},
			msdynmkt_updatecontact: {},
			msdynmkt_updatecontact1: {},
			msdynmkt_updatelead: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					contact_rules: {},
					general: {},
					lead_rules: {},
					parent_contact_rules: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_formsetting_targetaudience_msdynmkt_formtargetaudience: {},
			msdynmkt_marketingform_targetaudience_msdynmkt_formtargetaudience: {}
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
	OptionSet.msdynmkt_formtargetaudience = {
		msdynmkt_createcontact : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_createlead : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_formtype : {
			Marketing_form: 534120000,
			Registration_form: 534120001
		},
		msdynmkt_handlingduplicatecontacts : {
			Always_create_new_contact: 100000001,
			Use_a_rule_to_match_an_existing_contact: 100000000
		},
		msdynmkt_handlingduplicateleads : {
			Always_create_new_lead: 100000001,
			Use_a_rule_to_match_an_existing_lead: 100000000
		},
		msdynmkt_targetentity : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_updatecontact : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_updatelead : {
			No: 810180001,
			Yes: 810180000
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