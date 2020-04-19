'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormCampaign_Activity = function(executionContext, defaultWebResourceName) {
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
		return form;
	};
	LuckyMokey.FormCampaign_Activity_deprecated = function(executionContext, defaultWebResourceName) {
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
		var navigation = {
			navTargetLists: {},
			navActivities: {},
			navAsyncOperations: {},
			navProcessSessions: {}
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
	OptionSet.CampaignActivity = {
		ChannelTypeCode : {
			Phone: 1,
			Appointment: 2,
			Letter: 3,
			Letter_via_Mail_Merge: 4,
			Fax: 5,
			Fax_via_Mail_Merge: 6,
			Email: 7,
			Email_via_Mail_Merge: 8,
			Other: 9
		},
		Community : {
			Facebook: 1,
			Twitter: 2,
			Other: 0
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Closed: 1,
			Canceled: 2
		},
		StatusCode : {
			Proposed: 1,
			In_Progress: 0,
			Closed: 2,
			Canceled: 3,
			Pending: 4,
			System_Aborted: 5,
			Completed: 6
		},
		TypeCode : {
			Research: 1,
			Content_Preparation: 2,
			Target_Marketing_List_Creation: 3,
			Lead_Qualification: 4,
			Content_Distribution: 5,
			Direct_Initial_Contact: 6,
			Direct_Follow_Up_Contact: 7,
			Reminder_Distribution: 8
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