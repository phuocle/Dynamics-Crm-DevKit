﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormQuick_Campaign = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			excluded_accounts: {},
			excluded_contacts: {},
			excluded_leads: {},
			FailureCount: {},
			notescontrol: {},
			OwnerId: {},
			Responses: {},
			selected_accounts: {},
			selected_contacts: {},
			selected_leads: {},
			Subject: {},
			SuccessCount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Responses: {
				Section: {
					Responses: {}
				}
			},
			Summary: {
				Section: {
					excludedMembers: {},
					Information: {},
					RELATED_PANE: {},
					selectedMembers: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			CreatedRecordTypeCode: {},
			StatusCode: {},
			TargetedRecordTypeCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			excluded_accounts: {},
			excluded_contacts: {},
			excluded_leads: {},
			Responses: {},
			selected_accounts: {},
			selected_contacts: {},
			selected_leads: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navRelationshipActivities: {},
			navRelationshipBulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQuick_Campaign_deprecated = function(executionContext, defaultWebResourceName) {
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
			accounts_uci: {},
			contacts: {},
			contacts_uci: {},
			Description: {},
			excluded_accounts_uci: {},
			excluded_contacts_uci: {},
			excluded_leads_uci: {},
			FailureCount: {},
			leads: {},
			leads_uci: {},
			notescontrol: {},
			OwnerId: {},
			Responses: {},
			Subject: {},
			SuccessCount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Responses: {
				Section: {
					Responses: {}
				}
			},
			Summary: {
				Section: {
					excludedMembers: {},
					Information: {},
					RELATED_PANE: {},
					selectedMembers: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			CreatedRecordTypeCode: {},
			StatusCode: {},
			TargetedRecordTypeCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			accounts: {},
			accounts_uci: {},
			contacts: {},
			contacts_uci: {},
			excluded_accounts_uci: {},
			excluded_contacts_uci: {},
			excluded_leads_uci: {},
			leads: {},
			leads_uci: {},
			Responses: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navRelationshipActivities: {},
			navRelationshipBulkOperationLogs: {}
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
	OptionSet.BulkOperation = {
		ActivityTypeCode : {
			Activity_record_for_the_Teams_chat: 10088,
			Appointment: 4201,
			Booking_Alert: 10473,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10743,
			Customer_Voice_alert: 10330,
			Customer_Voice_survey_invite: 10340,
			Customer_Voice_survey_response: 10342,
			Email: 4202,
			Fax: 4204,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 10857,
			Phone_Call: 4210,
			Project_Service_Approval: 10489,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10760,
			Task: 4212
		},
		Community : {
			Apple_Messages_For_Business: 16,
			Cortana: 5,
			Direct_Line: 6,
			Direct_Line_Speech: 8,
			Email: 9,
			Facebook: 1,
			Googles_Business_Messages: 17,
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
		CreatedRecordTypeCode : {
			Appointment: 5,
			Email: 4,
			Fax: 2,
			Letter: 3,
			Phone_Call: 1,
			Send_Direct_Email: 6
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
		OperationTypeCode : {
			Create_Activities: 2,
			Create_Opportunities: 1,
			Distribute: 4,
			Execute: 5,
			Quick_Campaign: 7,
			Send_Direct_Mail: 3
		},
		OwnerIdType : {
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Canceled: 2,
			Closed: 1,
			Open: 0
		},
		StatusCode : {
			Aborted: 3,
			Canceled: 5,
			Completed: 4,
			In_Progress: 2,
			Pending: 1
		},
		TargetedRecordTypeCode : {
			Account: 1,
			Contact: 2,
			Lead: 4
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