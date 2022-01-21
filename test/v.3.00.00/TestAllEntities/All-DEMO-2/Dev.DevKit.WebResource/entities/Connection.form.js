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
		Record1ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10523,
			Agreement_Booking_Date: 10524,
			Agreement_Booking_Incident: 10525,
			Agreement_Booking_Product: 10526,
			Agreement_Booking_Service: 10527,
			Agreement_Booking_Service_Task: 10528,
			Agreement_Booking_Setup: 10529,
			Agreement_Invoice_Date: 10530,
			Agreement_Invoice_Product: 10531,
			Agreement_Invoice_Setup: 10532,
			Appointment: 4201,
			Assignment_Map: 10277,
			Assignment_Rule: 10274,
			Booking_Alert: 10400,
			Booking_Alert_Status: 10401,
			Booking_Rule: 10403,
			Booking_Timestamp: 10535,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10702,
			Customer_Asset: 10128,
			Customer_Voice_alert: 10294,
			Customer_Voice_survey_invite: 10304,
			Customer_Voice_survey_response: 10306,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10423,
			Goal: 9600,
			Incident_Type_Characteristic: 10546,
			Incident_Type_Product: 10547,
			Incident_Type_Service: 10548,
			Inventory_Adjustment: 10552,
			Inventory_Adjustment_Product: 10553,
			Inventory_Journal: 10554,
			Inventory_Transfer: 10555,
			Invoice: 1090,
			IoT_Alert: 10138,
			IoT_Device: 10139,
			IoT_Device_Category: 10140,
			IoT_Device_Command: 10141,
			IoT_Device_Registration_History: 10145,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Ongoing_conversation_Deprecated: 10692,
			Opportunity: 3,
			Option: 10819,
			Order: 1088,
			Outbound_message: 10813,
			Payment: 10560,
			Payment_Detail: 10561,
			Payment_Method: 10562,
			Payment_Term: 10563,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10564,
			Price_List: 1022,
			Process_Notes: 10468,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10565,
			Profile_Album: 10289,
			Project: 10469,
			Project_Service_Approval: 10430,
			Project_Team_Member: 10477,
			Purchase_Order: 10566,
			Purchase_Order_Bill: 10567,
			Purchase_Order_Product: 10568,
			Purchase_Order_Receipt: 10569,
			Purchase_Order_Receipt_Product: 10570,
			Purchase_Order_SubStatus: 10571,
			Quote: 1084,
			Quote_Booking_Incident: 10572,
			Quote_Booking_Product: 10573,
			Quote_Booking_Service: 10574,
			Quote_Booking_Service_Task: 10575,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10600,
			Resource_Territory: 10419,
			RMA: 10580,
			RMA_Product: 10581,
			RMA_Receipt: 10582,
			RMA_Receipt_Product: 10583,
			RMA_SubStatus: 10584,
			RTV: 10585,
			RTV_Product: 10586,
			RTV_Substatus: 10587,
			Scheduling_Group: 4005,
			Sequence: 10268,
			Sequence_Target: 10270,
			Service_Activity: 4214,
			Session: 10717,
			Ship_Via: 10589,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10422,
			Task: 4212,
			Tax_Code: 10590,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10424,
			Time_Off_Request: 10592,
			Toolbar_Button: 10842,
			User: 8,
			Warehouse: 10594,
			Work_Order: 10595,
			Work_Order_Characteristic_Deprecated: 10596,
			Work_Order_Incident: 10598,
			Work_Order_Product: 10599,
			Work_Order_Service: 10601,
			Work_Order_Service_Task: 10602
		},
		Record2ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10523,
			Agreement_Booking_Date: 10524,
			Agreement_Booking_Incident: 10525,
			Agreement_Booking_Product: 10526,
			Agreement_Booking_Service: 10527,
			Agreement_Booking_Service_Task: 10528,
			Agreement_Booking_Setup: 10529,
			Agreement_Invoice_Date: 10530,
			Agreement_Invoice_Product: 10531,
			Agreement_Invoice_Setup: 10532,
			Appointment: 4201,
			Assignment_Map: 10277,
			Assignment_Rule: 10274,
			Booking_Alert: 10400,
			Booking_Alert_Status: 10401,
			Booking_Rule: 10403,
			Booking_Timestamp: 10535,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10702,
			Customer_Asset: 10128,
			Customer_Voice_alert: 10294,
			Customer_Voice_survey_invite: 10304,
			Customer_Voice_survey_response: 10306,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10423,
			Goal: 9600,
			Incident_Type_Characteristic: 10546,
			Incident_Type_Product: 10547,
			Incident_Type_Service: 10548,
			Inventory_Adjustment: 10552,
			Inventory_Adjustment_Product: 10553,
			Inventory_Journal: 10554,
			Inventory_Transfer: 10555,
			Invoice: 1090,
			IoT_Alert: 10138,
			IoT_Device: 10139,
			IoT_Device_Category: 10140,
			IoT_Device_Command: 10141,
			IoT_Device_Registration_History: 10145,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Ongoing_conversation_Deprecated: 10692,
			Opportunity: 3,
			Option: 10819,
			Order: 1088,
			Outbound_message: 10813,
			Payment: 10560,
			Payment_Detail: 10561,
			Payment_Method: 10562,
			Payment_Term: 10563,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10564,
			Price_List: 1022,
			Process_Notes: 10468,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10565,
			Profile_Album: 10289,
			Project: 10469,
			Project_Service_Approval: 10430,
			Project_Team_Member: 10477,
			Purchase_Order: 10566,
			Purchase_Order_Bill: 10567,
			Purchase_Order_Product: 10568,
			Purchase_Order_Receipt: 10569,
			Purchase_Order_Receipt_Product: 10570,
			Purchase_Order_SubStatus: 10571,
			Quote: 1084,
			Quote_Booking_Incident: 10572,
			Quote_Booking_Product: 10573,
			Quote_Booking_Service: 10574,
			Quote_Booking_Service_Task: 10575,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10600,
			Resource_Territory: 10419,
			RMA: 10580,
			RMA_Product: 10581,
			RMA_Receipt: 10582,
			RMA_Receipt_Product: 10583,
			RMA_SubStatus: 10584,
			RTV: 10585,
			RTV_Product: 10586,
			RTV_Substatus: 10587,
			Scheduling_Group: 4005,
			Sequence: 10268,
			Sequence_Target: 10270,
			Service_Activity: 4214,
			Session: 10717,
			Ship_Via: 10589,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10422,
			Task: 4212,
			Tax_Code: 10590,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10424,
			Time_Off_Request: 10592,
			Toolbar_Button: 10842,
			User: 8,
			Warehouse: 10594,
			Work_Order: 10595,
			Work_Order_Characteristic_Deprecated: 10596,
			Work_Order_Incident: 10598,
			Work_Order_Product: 10599,
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