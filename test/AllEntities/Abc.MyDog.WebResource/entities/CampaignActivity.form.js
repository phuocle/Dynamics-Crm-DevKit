'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormCampaign_Activity = function(executionContext, defaultWebResourceName) {
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
			ActualCost: {},
			ActualEnd: {},
			ActualStart: {},
			BudgetedCost: {},
			ChannelTypeCode: {},
			Description: {},
			excluded_accounts: {},
			excluded_contacts: {},
			excluded_leads: {},
			ExcludeIfContactedInXDays: {},
			marketing_lists_grid: {},
			notescontrol: {},
			Partners: {},
			RegardingObjectId: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			selected_accounts: {},
			selected_contacts: {},
			selected_leads: {},
			StatusCode: {},
			Subject: {},
			TransactionCurrencyId: {},
			TypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Campaign_Activity: {
				Section: {
					Summary: {},
					Financials: {},
					Anti_Spam: {},
					Marketing_list: {},
					Social_Pane: {}
				}
			},
			audiences_tab: {
				Section: {
					selected_accounts_section: {},
					excluded_accounts_section: {},
					selected_contacts_section: {},
					excluded_contacts_section: {},
					selected_leads_section: {},
					excluded_leads_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			marketing_lists_grid: {},
			selected_accounts: {},
			excluded_accounts: {},
			selected_contacts: {},
			excluded_contacts: {},
			selected_leads: {},
			excluded_leads: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navTargetLists: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			navRelationshipCABulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormCampaign_Activity_deprecated = function(executionContext, defaultWebResourceName) {
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
			ActualCost: {},
			ActualEnd: {},
			ActualStart: {},
			BudgetedCost: {},
			ChannelTypeCode: {},
			Description: {},
			ExcludeIfContactedInXDays: {},
			failuresGrid: {},
			marketing_lists_grid: {},
			notescontrol: {},
			Partners: {},
			RegardingObjectId: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			StatusCode: {},
			Subject: {},
			TransactionCurrencyId: {},
			TypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Campaign_Activity: {
				Section: {
					Summary: {},
					Financials: {},
					Anti_Spam: {},
					Marketing_list: {},
					Social_Pane: {}
				}
			},
			FailuresActivities: {
				Section: {
					failures_activities_grid: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			marketing_lists_grid: {},
			failuresGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navTargetLists: {},
			navActivities: {},
			navAsyncOperations: {},
			navProcessSessions: {}
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
	OptionSet.CampaignActivity = {
		ChannelTypeCode : {
			Appointment: 2,
			Email: 7,
			Email_via_Mail_Mergedeprecated: 8,
			Fax: 5,
			Fax_via_Mail_Mergedeprecated: 6,
			Letter: 3,
			Letter_via_Mail_Mergedeprecated: 4,
			Other: 9,
			Phone: 1
		},
		Community : {
			Cortana: 5,
			Direct_Line: 6,
			Direct_Line_Speech: 8,
			Email: 9,
			Facebook: 1,
			GroupMe: 10,
			Kik: 11,
			Line: 3,
			Microsoft_Teams: 7,
			Other: 0,
			Skype: 13,
			Slack: 14,
			Telegram: 12,
			Twitter: 2,
			Wechat: 4,
			WhatsApp: 15
		},
		DeliveryPriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		StateCode : {
			Canceled: 2,
			Closed: 1,
			Open: 0
		},
		StatusCode : {
			Canceled: 3,
			Closed: 2,
			Completed: 6,
			In_Progress: 0,
			Pending: 4,
			Proposed: 1,
			System_Aborted: 5
		},
		TypeCode : {
			Content_Distribution: 5,
			Content_Preparation: 2,
			Direct_Follow_Up_Contact: 7,
			Direct_Initial_Contact: 6,
			Lead_Qualification: 4,
			Reminder_Distribution: 8,
			Research: 1,
			Target_Marketing_List_Creation: 3
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