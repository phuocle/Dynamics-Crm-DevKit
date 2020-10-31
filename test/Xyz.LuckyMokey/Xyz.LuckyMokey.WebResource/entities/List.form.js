'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormMarketing_List = function(executionContext, defaultWebResourceName) {
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
			accounts: {},
			accountsUCI: {},
			Campaigns: {},
			contacts: {},
			contactsUCI: {},
			Cost: {},
			CreatedFromCode: {},
			Description: {},
			dynamic_accounts: {},
			dynamic_contacts: {},
			dynamic_leads: {},
			LastUsedOn: {},
			leads: {},
			leadsUCI: {},
			ListName: {},
			LockStatus: {},
			MemberType: {},
			ModifiedOn: {},
			notescontrol: {},
			OwnerId: {},
			Purpose: {},
			Query: {},
			QuickCampaigns: {},
			Source: {},
			StateCode: {},
			TransactionCurrencyId: {},
			Type: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					information: {},
					campaigns: {},
					quickcampaigns: {}
				}
			},
			members: {
				Section: {
					members: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			LastUsedOn: {},
			LockStatus: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	LuckyMokey.FormMarketing_List_Light = function(executionContext, defaultWebResourceName) {
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
			accounts: {},
			accountsUCI: {},
			Campaigns: {},
			contacts: {},
			contactsUCI: {},
			Cost: {},
			CreatedFromCode: {},
			Description: {},
			dynamic_accounts: {},
			dynamic_contacts: {},
			dynamic_leads: {},
			LastUsedOn: {},
			leads: {},
			leadsUCI: {},
			ListName: {},
			LockStatus: {},
			MemberType: {},
			ModifiedOn: {},
			notescontrol: {},
			OwnerId: {},
			Purpose: {},
			Query: {},
			QuickCampaigns: {},
			Source: {},
			StateCode: {},
			TransactionCurrencyId: {},
			Type: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					information: {},
					members: {},
					Summary_section_5: {},
					campaigns: {},
					quickcampaigns: {},
					Summary_section_4: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			LastUsedOn: {},
			LockStatus: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	OptionSet.List = {
		CreatedFromCode : {
			Account: 1,
			Contact: 2,
			Lead: 4
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 0,
			Inactive: 1
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