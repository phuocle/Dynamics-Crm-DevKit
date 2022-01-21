'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormQueueItem_Information = function(executionContext, defaultWebResourceName) {
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
			EnteredOn: {},
			ModifiedOn: {},
			QueueId: {},
			WorkerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.QueueItem = {
		ObjectTypeCode : {
			Activity: 4200,
			Agreement_Booking_Date: 10524,
			Agreement_Booking_Setup: 10529,
			Agreement_Invoice_Date: 10530,
			Agreement_Invoice_Setup: 10532,
			Appointment: 4201,
			Booking_Alert: 10400,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Conversation: 10702,
			Customer_Voice_alert: 10294,
			Customer_Voice_survey_invite: 10304,
			Customer_Voice_survey_response: 10306,
			Email: 4202,
			Fax: 4204,
			Fulfillment_Preference: 10423,
			Inventory_Adjustment: 10552,
			Inventory_Transfer: 10555,
			IoT_Alert: 10138,
			Knowledge_Article: 9953,
			Knowledge_Article_Template: 10086,
			Letter: 4207,
			Ongoing_conversation_Deprecated: 10692,
			Outbound_message: 10813,
			Overflow_Action_Config: 10679,
			Phone_Call: 4210,
			Project: 10469,
			Project_Service_Approval: 10430,
			Project_Task: 10474,
			Quick_Campaign: 4406,
			Recurring_Appointment: 4251,
			Resource_Request: 10492,
			Service_Activity: 4214,
			Session: 10717,
			Social_Activity: 4216,
			Task: 4212,
			Time_Group_Detail: 10424,
			Work_Order: 10595,
			Work_Order_Incident: 10598,
			Work_Order_Service: 10601,
			Work_Order_Service_Task: 10602
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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