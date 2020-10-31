'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formadobe_templaterecipient_Information = function(executionContext, defaultWebResourceName) {
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
			adobe_dynamicrecipient: {},
			adobe_emaildisplay: {},
			adobe_name: {},
			adobe_primaryentity: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_templaterecipient = {
		adobe_accountoptions : {
			Lead_Contact_Only: 648770000,
			All_Contacts_associated_with_Account: 648770001
		},
		adobe_customentityoptions : {
			Lead_Contact_Only: 648770000,
			All_Contacts_associated_with_Entity: 648770001,
			Lead_Contact_from_associated_Account: 648770002,
			All_Contacts_from_associated_Account: 648770003
		},
		adobe_identityverification : {
			EMAIL: 648770003,
			PHONE: 648770004,
			PASSWORD: 648770000,
			KNOWLEDGE_BASE: 648770001,
			WEB_IDENTITY: 648770002
		},
		adobe_opportunityoptions : {
			Lead_Contact_Only: 648770000,
			All_Contacts_Associated_With_Opportunity: 648770001
		},
		adobe_recipientrole : {
			SIGNER: 648770000,
			APPROVER: 648770001,
			CC: 648770002
		},
		adobe_recipienttype : {
			New: 648770000,
			Contact: 648770001,
			Lead: 648770002,
			User: 648770003
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