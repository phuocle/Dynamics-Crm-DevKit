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
			Agreement_Booking_Date: 10507,
			Agreement_Booking_Setup: 10512,
			Agreement_Invoice_Date: 10513,
			Agreement_Invoice_Setup: 10515,
			Appointment: 4201,
			Booking_Alert: 10386,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Conversation: 10673,
			Customer_Voice_alert: 10283,
			Customer_Voice_survey_invite: 10293,
			Customer_Voice_survey_response: 10295,
			Email: 4202,
			Fax: 4204,
			Fulfillment_Preference: 10409,
			Inventory_Adjustment: 10535,
			Inventory_Transfer: 10538,
			IoT_Alert: 10138,
			Knowledge_Article: 9953,
			Knowledge_Article_Template: 10086,
			Letter: 4207,
			Ongoing_conversation_Deprecated: 10663,
			Outbound_message: 10781,
			Overflow_Action_Config: 10650,
			Phone_Call: 4210,
			Project: 10455,
			Project_Service_Approval: 10416,
			Project_Task: 10460,
			Quick_Campaign: 4406,
			Recurring_Appointment: 4251,
			Resource_Request: 10478,
			Service_Activity: 4214,
			Session: 10688,
			Social_Activity: 4216,
			Task: 4212,
			Time_Group_Detail: 10410,
			Work_Order: 10578,
			Work_Order_Incident: 10581,
			Work_Order_Service: 10584,
			Work_Order_Service_Task: 10585
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