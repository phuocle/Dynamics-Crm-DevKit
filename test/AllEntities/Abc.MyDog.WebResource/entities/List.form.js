'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormMarketing_List = function(executionContext, defaultWebResourceName) {
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
			ListOperationsSubGrid: {},
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
					members: {},
					listoperationssection: {}
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
		var grid = {
			Campaigns: {},
			QuickCampaigns: {},
			accountsUCI: {},
			contactsUCI: {},
			leadsUCI: {},
			contacts: {},
			accounts: {},
			leads: {},
			dynamic_accounts: {},
			dynamic_contacts: {},
			dynamic_leads: {},
			ListOperationsSubGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormMarketing_List_Light = function(executionContext, defaultWebResourceName) {
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
		var grid = {
			accountsUCI: {},
			contactsUCI: {},
			leadsUCI: {},
			contacts: {},
			accounts: {},
			leads: {},
			dynamic_accounts: {},
			dynamic_contacts: {},
			dynamic_leads: {},
			Campaigns: {},
			QuickCampaigns: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
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