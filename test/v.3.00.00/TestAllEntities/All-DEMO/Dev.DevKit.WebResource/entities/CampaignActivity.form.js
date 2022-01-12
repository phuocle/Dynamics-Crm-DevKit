'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCampaign_Activity = function(executionContext, defaultWebResourceName) {
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
			audiences_tab: {
				Section: {
					excluded_accounts_section: {},
					excluded_contacts_section: {},
					excluded_leads_section: {},
					selected_accounts_section: {},
					selected_contacts_section: {},
					selected_leads_section: {}
				}
			},
			Campaign_Activity: {
				Section: {
					Anti_Spam: {},
					Financials: {},
					Marketing_list: {},
					Social_Pane: {},
					Summary: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			excluded_accounts: {},
			excluded_contacts: {},
			excluded_leads: {},
			marketing_lists_grid: {},
			selected_accounts: {},
			selected_contacts: {},
			selected_leads: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			navRelationshipCABulkOperationLogs: {},
			navTargetLists: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCampaign_Activity_deprecated = function(executionContext, defaultWebResourceName) {
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
					Anti_Spam: {},
					Financials: {},
					Marketing_list: {},
					Social_Pane: {},
					Summary: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			failuresGrid: {},
			marketing_lists_grid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			navTargetLists: {}
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
	OptionSet.CampaignActivity = {
		ActivityTypeCode : {
			Appointment: 4201,
			Booking_Alert: 10357,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10644,
			Customer_Voice_alert: 10261,
			Customer_Voice_survey_invite: 10271,
			Customer_Voice_survey_response: 10273,
			Email: 4202,
			Fax: 4204,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 10752,
			Phone_Call: 4210,
			Project_Service_Approval: 10387,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10659,
			Task: 4212
		},
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