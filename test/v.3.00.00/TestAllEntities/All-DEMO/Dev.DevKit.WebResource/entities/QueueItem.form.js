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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.QueueItem = {
		ObjectTypeCode : {
			Activity: 4200,
			Agreement_Booking_Date: 10414,
			Agreement_Booking_Setup: 10419,
			Agreement_Invoice_Date: 10420,
			Agreement_Invoice_Setup: 10422,
			Appointment: 4201,
			Booking_Alert: 10294,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Conversation: 10564,
			Customer_Voice_alert: 10238,
			Customer_Voice_survey_invite: 10248,
			Customer_Voice_survey_response: 10250,
			Email: 4202,
			Fax: 4204,
			Fulfillment_Preference: 10317,
			Inventory_Adjustment: 10442,
			Inventory_Transfer: 10445,
			IoT_Alert: 10126,
			Knowledge_Article: 9953,
			Knowledge_Article_Template: 10061,
			Letter: 4207,
			Ongoing_conversation_Deprecated: 10558,
			Outbound_message: 10673,
			Phone_Call: 4210,
			Project: 10363,
			Project_Service_Approval: 10324,
			Project_Task: 10368,
			Quick_Campaign: 4406,
			Recurring_Appointment: 4251,
			Resource_Request: 10386,
			Service_Activity: 4214,
			Session: 10573,
			Social_Activity: 4216,
			Task: 4212,
			Time_Group_Detail: 10318,
			Work_Order: 10485,
			Work_Order_Incident: 10488,
			Work_Order_Service: 10491,
			Work_Order_Service_Task: 10492
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