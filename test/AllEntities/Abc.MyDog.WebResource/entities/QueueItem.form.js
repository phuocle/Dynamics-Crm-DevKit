'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormQueueItem_Information = function(executionContext, defaultWebResourceName) {
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.QueueItem = {
		ObjectTypeCode : {
			Activity: 4200,
			Agreement_Booking_Date: 10354,
			Agreement_Booking_Setup: 10359,
			Agreement_Invoice_Date: 10360,
			Agreement_Invoice_Setup: 10362,
			Appointment: 4201,
			Booking_Alert: 10235,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Conversation: 10480,
			Customer_Voice_alert: 10216,
			Customer_Voice_survey_invite: 10225,
			Customer_Voice_survey_response: 10227,
			Email: 4202,
			Fax: 4204,
			Fulfillment_Preference: 10258,
			Inventory_Adjustment: 10382,
			Inventory_Transfer: 10385,
			IoT_Alert: 10105,
			Knowledge_Article: 9953,
			Knowledge_Article_Template: 10047,
			Letter: 4207,
			Ongoing_conversation_Deprecated: 10474,
			Outbound_message: 10566,
			Phone_Call: 4210,
			Project: 10304,
			Project_Service_Approval: 10265,
			Project_Task: 10309,
			Quick_Campaign: 4406,
			Recurring_Appointment: 4251,
			Resource_Request: 10327,
			Service_Activity: 4214,
			Session: 10489,
			Social_Activity: 4216,
			Task: 4212,
			Time_Group_Detail: 10259,
			Work_Order: 10425,
			Work_Order_Incident: 10428,
			Work_Order_Service: 10431,
			Work_Order_Service_Task: 10432
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