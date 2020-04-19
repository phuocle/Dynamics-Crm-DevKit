'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormQueueItem_Information = function(executionContext, defaultWebResourceName) {
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
			ObjectId: {},
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
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.QueueItem = {
		ObjectTypeCode : {
			Agreement_Booking_Setup: 10202,
			Agreement_Booking_Date: 10197,
			Agreement_Invoice_Setup: 10205,
			Agreement_Invoice_Date: 10203,
			Resource_Request: 10177,
			Project_Service_Approval: 10115,
			Time_Group_Detail: 10111,
			Project_Task: 10159,
			Project: 10154,
			Inventory_Adjustment: 10227,
			Ongoing_conversation: 10332,
			IoT_Alert: 10281,
			Session: 10347,
			Conversation: 10338,
			Work_Order_Service_Task: 10277,
			Work_Order: 10270,
			Inventory_Transfer: 10230,
			Work_Order_Service: 10276,
			Work_Order_Incident: 10273,
			Fulfillment_Preference: 10110,
			Recurring_Appointment: 4251,
			Activity: 4200,
			Task: 4212,
			Phone_Call: 4210,
			Letter: 4207,
			Appointment: 4201,
			Fax: 4204,
			Knowledge_Article: 9953,
			Social_Activity: 4216,
			Email: 4202,
			Forms_Pro_survey_invite: 10078,
			Service_Activity: 4214,
			Booking_Alert: 10087,
			Forms_Pro_survey_response: 10079,
			Case: 112,
			Campaign_Activity: 4402,
			Knowledge_Article_Template: 10011,
			Quick_Campaign: 4406,
			Campaign_Response: 4401
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Inactive: 2,
			Active: 1
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