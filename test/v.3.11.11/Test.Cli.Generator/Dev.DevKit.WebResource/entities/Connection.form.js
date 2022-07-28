'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormConnection_Information = function(executionContext, defaultWebResourceName) {
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
			EffectiveEnd: {},
			EffectiveStart: {},
			OwnerId: {},
			Record1Id: {},
			Record1RoleId: {},
			Record2Id: {},
			Record2RoleId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			details: {
				Section: {
					connect_from: {},
					details: {}
				}
			},
			info: {
				Section: {
					description: {},
					info_s: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			Record1Id: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	OptionSet.Connection = {
		OwnerIdType : {
		},
		Record1IdObjectTypeCode : {
		},
		Record1ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10579,
			Agreement_Booking_Date: 10580,
			Agreement_Booking_Incident: 10581,
			Agreement_Booking_Product: 10582,
			Agreement_Booking_Service: 10583,
			Agreement_Booking_Service_Task: 10584,
			Agreement_Booking_Setup: 10585,
			Agreement_Invoice_Date: 10586,
			Agreement_Invoice_Product: 10587,
			Agreement_Invoice_Setup: 10588,
			Appointment: 4201,
			Assignment_Map: 10300,
			Assignment_Rule: 10297,
			Booking_Alert: 10473,
			Booking_Alert_Status: 10474,
			Booking_Rule: 10476,
			Booking_Timestamp: 10591,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10743,
			Customer_Asset: 10151,
			Customer_Voice_alert: 10330,
			Customer_Voice_survey_invite: 10340,
			Customer_Voice_survey_response: 10342,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10484,
			Goal: 9600,
			Incident_Type_Characteristic: 10602,
			Incident_Type_Product: 10603,
			Incident_Type_Service: 10604,
			Inventory_Adjustment: 10608,
			Inventory_Adjustment_Product: 10609,
			Inventory_Journal: 10610,
			Inventory_Transfer: 10611,
			Invoice: 1090,
			IoT_Alert: 10165,
			IoT_Device: 10166,
			IoT_Device_Category: 10167,
			IoT_Device_Command: 10168,
			IoT_Device_Registration_History: 10172,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Ongoing_conversation_Deprecated: 10733,
			Opportunity: 3,
			Option: 10916,
			Order: 1088,
			Outbound_message: 10857,
			Payment: 10616,
			Payment_Detail: 10617,
			Payment_Method: 10618,
			Payment_Term: 10619,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10620,
			Price_List: 1022,
			Process_Notes: 10527,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10621,
			Profile_Album: 10325,
			Project: 10528,
			Project_Service_Approval: 10489,
			Project_Team_Member: 10536,
			Purchase_Order: 10622,
			Purchase_Order_Bill: 10623,
			Purchase_Order_Product: 10624,
			Purchase_Order_Receipt: 10625,
			Purchase_Order_Receipt_Product: 10626,
			Purchase_Order_SubStatus: 10627,
			Quote: 1084,
			Quote_Booking_Incident: 10628,
			Quote_Booking_Product: 10629,
			Quote_Booking_Service: 10630,
			Quote_Booking_Service_Task: 10631,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10656,
			Resource_Territory: 10480,
			RMA: 10636,
			RMA_Product: 10637,
			RMA_Receipt: 10638,
			RMA_Receipt_Product: 10639,
			RMA_SubStatus: 10640,
			RTV: 10641,
			RTV_Product: 10642,
			RTV_Substatus: 10643,
			Scheduling_Group: 4005,
			Sequence: 10289,
			Sequence_Target: 10291,
			Service_Activity: 4214,
			Session: 10760,
			Ship_Via: 10645,
			Social_Activity: 4216,
			Social_Profile: 99,
			Suggestion: 10306,
			System_User_Scheduler_Setting: 10483,
			Task: 4212,
			Tax_Code: 10646,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10485,
			Time_Off_Request: 10648,
			Toolbar_Button: 10952,
			User: 8,
			Warehouse: 10650,
			Work_Order: 10651,
			Work_Order_Characteristic_Deprecated: 10652,
			Work_Order_Incident: 10654,
			Work_Order_Product: 10655,
			Work_Order_Service: 10657,
			Work_Order_Service_Task: 10658
		},
		Record2IdObjectTypeCode : {
		},
		Record2ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10579,
			Agreement_Booking_Date: 10580,
			Agreement_Booking_Incident: 10581,
			Agreement_Booking_Product: 10582,
			Agreement_Booking_Service: 10583,
			Agreement_Booking_Service_Task: 10584,
			Agreement_Booking_Setup: 10585,
			Agreement_Invoice_Date: 10586,
			Agreement_Invoice_Product: 10587,
			Agreement_Invoice_Setup: 10588,
			Appointment: 4201,
			Assignment_Map: 10300,
			Assignment_Rule: 10297,
			Booking_Alert: 10473,
			Booking_Alert_Status: 10474,
			Booking_Rule: 10476,
			Booking_Timestamp: 10591,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10743,
			Customer_Asset: 10151,
			Customer_Voice_alert: 10330,
			Customer_Voice_survey_invite: 10340,
			Customer_Voice_survey_response: 10342,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10484,
			Goal: 9600,
			Incident_Type_Characteristic: 10602,
			Incident_Type_Product: 10603,
			Incident_Type_Service: 10604,
			Inventory_Adjustment: 10608,
			Inventory_Adjustment_Product: 10609,
			Inventory_Journal: 10610,
			Inventory_Transfer: 10611,
			Invoice: 1090,
			IoT_Alert: 10165,
			IoT_Device: 10166,
			IoT_Device_Category: 10167,
			IoT_Device_Command: 10168,
			IoT_Device_Registration_History: 10172,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Ongoing_conversation_Deprecated: 10733,
			Opportunity: 3,
			Option: 10916,
			Order: 1088,
			Outbound_message: 10857,
			Payment: 10616,
			Payment_Detail: 10617,
			Payment_Method: 10618,
			Payment_Term: 10619,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10620,
			Price_List: 1022,
			Process_Notes: 10527,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10621,
			Profile_Album: 10325,
			Project: 10528,
			Project_Service_Approval: 10489,
			Project_Team_Member: 10536,
			Purchase_Order: 10622,
			Purchase_Order_Bill: 10623,
			Purchase_Order_Product: 10624,
			Purchase_Order_Receipt: 10625,
			Purchase_Order_Receipt_Product: 10626,
			Purchase_Order_SubStatus: 10627,
			Quote: 1084,
			Quote_Booking_Incident: 10628,
			Quote_Booking_Product: 10629,
			Quote_Booking_Service: 10630,
			Quote_Booking_Service_Task: 10631,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10656,
			Resource_Territory: 10480,
			RMA: 10636,
			RMA_Product: 10637,
			RMA_Receipt: 10638,
			RMA_Receipt_Product: 10639,
			RMA_SubStatus: 10640,
			RTV: 10641,
			RTV_Product: 10642,
			RTV_Substatus: 10643,
			Scheduling_Group: 4005,
			Sequence: 10289,
			Sequence_Target: 10291,
			Service_Activity: 4214,
			Session: 10760,
			Ship_Via: 10645,
			Social_Activity: 4216,
			Social_Profile: 99,
			Suggestion: 10306,
			System_User_Scheduler_Setting: 10483,
			Task: 4212,
			Tax_Code: 10646,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10485,
			Time_Off_Request: 10648,
			Toolbar_Button: 10952,
			User: 8,
			Warehouse: 10650,
			Work_Order: 10651,
			Work_Order_Characteristic_Deprecated: 10652,
			Work_Order_Incident: 10654,
			Work_Order_Product: 10655,
			Work_Order_Service: 10657,
			Work_Order_Service_Task: 10658
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