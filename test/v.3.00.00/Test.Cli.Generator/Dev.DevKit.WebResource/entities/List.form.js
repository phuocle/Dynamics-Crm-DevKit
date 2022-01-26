'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMarketing_List = function(executionContext, defaultWebResourceName) {
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
			members: {
				Section: {
					listoperationssection: {},
					members: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			},
			Summary: {
				Section: {
					campaigns: {},
					information: {},
					quickcampaigns: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			accounts: {},
			accountsUCI: {},
			Campaigns: {},
			contacts: {},
			contactsUCI: {},
			dynamic_accounts: {},
			dynamic_contacts: {},
			dynamic_leads: {},
			leads: {},
			leadsUCI: {},
			ListOperationsSubGrid: {},
			QuickCampaigns: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormMarketing_List_Light = function(executionContext, defaultWebResourceName) {
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
			notes: {
				Section: {
					notes: {}
				}
			},
			Summary: {
				Section: {
					campaigns: {},
					information: {},
					members: {},
					quickcampaigns: {},
					Summary_section_4: {},
					Summary_section_5: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			accounts: {},
			accountsUCI: {},
			Campaigns: {},
			contacts: {},
			contactsUCI: {},
			dynamic_accounts: {},
			dynamic_contacts: {},
			dynamic_leads: {},
			leads: {},
			leadsUCI: {},
			QuickCampaigns: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
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