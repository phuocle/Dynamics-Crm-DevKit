'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formadobe_recipient_Information = function(executionContext, defaultWebResourceName) {
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
			adobe_AgreementId: {},
			adobe_datesigned: {},
			adobe_emailaddress: {},
			adobe_fullname: {},
			adobe_hassigned: {},
			adobe_name: {},
			adobe_parentagreementstatus: {},
			adobe_recipientorderbackup: {},
			adobe_signingurl: {},
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
	LuckyMokey.Formadobe_recipient_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			adobe_countrycode: {},
			adobe_emailaddress: {},
			adobe_fullname: {},
			adobe_identityverification: {},
			adobe_overridedefaultverification: {},
			adobe_password: {},
			adobe_phone: {},
			adobe_recipientcrmtype: {},
			adobe_recipientrole: {},
			adobe_relatedcontact: {},
			adobe_relatedlead: {},
			adobe_relateduser: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_recipient = {
		adobe_identityverification : {
			EMAIL: 648770003,
			PHONE: 648770004,
			PASSWORD: 648770000,
			KNOWLEDGE_BASE: 648770001,
			WEB_IDENTITY: 648770002
		},
		adobe_recipientcrmtype : {
			New: 648770000,
			Contact: 648770001,
			Lead: 648770002,
			User: 648770003
		},
		adobe_recipientlookuptype : {
			Lead: 648770000,
			Contact: 648770001,
			User: 648770002
		},
		adobe_recipientrole : {
			SIGNER: 648770000,
			APPROVER: 648770001,
			CC: 648770002
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