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
		ObjectIdTypeCode : {
		},
		ObjectTypeCode : {
			Activity: 4200,
			Agreement_Booking_Date: 10580,
			Agreement_Booking_Setup: 10585,
			Agreement_Invoice_Date: 10586,
			Agreement_Invoice_Setup: 10588,
			Appointment: 4201,
			Booking_Alert: 10473,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Conversation: 10743,
			Customer_Voice_alert: 10330,
			Customer_Voice_survey_invite: 10340,
			Customer_Voice_survey_response: 10342,
			Email: 4202,
			Fax: 4204,
			Fulfillment_Preference: 10484,
			Inventory_Adjustment: 10608,
			Inventory_Transfer: 10611,
			IoT_Alert: 10165,
			Knowledge_Article: 9953,
			Knowledge_Article_Template: 10101,
			Letter: 4207,
			Ongoing_conversation_Deprecated: 10733,
			Outbound_message: 10857,
			Overflow_Action_Config: 10714,
			Phone_Call: 4210,
			Project: 10528,
			Project_Service_Approval: 10489,
			Project_Task: 10533,
			Quick_Campaign: 4406,
			Recurring_Appointment: 4251,
			Resource_Request: 10551,
			Service_Activity: 4214,
			Session: 10760,
			Social_Activity: 4216,
			Task: 4212,
			Teams_chat: 10088,
			Time_Group_Detail: 10485,
			Work_Order: 10651,
			Work_Order_Incident: 10654,
			Work_Order_Service: 10657,
			Work_Order_Service_Task: 10658
		},
		OwnerIdType : {
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
		},
		WorkerIdType : {
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