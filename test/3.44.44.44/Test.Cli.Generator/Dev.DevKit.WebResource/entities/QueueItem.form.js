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
					information: {},
					Time_Information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_queueitem_msdyn_ocliveworkitem_queueitemid: {},
			msdyn_queueitem_msdyn_unifiedroutingdiagnostic_targetobject: {},
			msdyn_unifiedroutingrun_queueitem_targetobject: {}
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
	OptionSet.QueueItem = {
		ObjectIdTypeCode : {
		},
		ObjectTypeCode : {
			Activity: 4200,
			Agreement_Booking_Date: 11643,
			Agreement_Booking_Setup: 11648,
			Agreement_Invoice_Date: 11649,
			Agreement_Invoice_Setup: 11651,
			Appointment: 4201,
			Appointment_activity_marketing_template: 11138,
			Booking_Alert: 11000,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Conversation: 10691,
			Copilot_Transcript: 10877,
			Customer_Voice_alert: 10600,
			Customer_Voice_survey_invite: 10610,
			Customer_Voice_survey_response: 10612,
			Email: 4202,
			Fax: 4204,
			Fulfillment_Preference: 11017,
			Inventory_Adjustment: 11671,
			Inventory_Transfer: 11674,
			Invite_Redemption: 10310,
			IoT_Alert: 10402,
			Knowledge_Article: 9953,
			Knowledge_Article_Template: 10201,
			Letter: 4207,
			Marketing_activity: 11175,
			Ongoing_conversation_Deprecated: 10679,
			Outbound_message: 11063,
			Overflow_Action_Config: 10655,
			Phone_Call: 4210,
			Phone_call_activity_marketing_template: 11176,
			Portal_Comment: 10311,
			Quick_Campaign: 4406,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10708,
			Social_Activity: 4216,
			Task: 4212,
			Task_activity_marketing_template: 11182,
			Teams_chat: 10185,
			Time_Group_Detail: 11018,
			Voicemail: 11070,
			Work_Order: 11705,
			Work_Order_Incident: 11708,
			Work_Order_Service: 11711,
			Work_Order_Service_Task: 11712
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