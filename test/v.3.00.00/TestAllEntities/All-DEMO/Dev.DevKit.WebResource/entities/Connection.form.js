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
			Agreement: 10506,
			Agreement_Booking_Date: 10507,
			Agreement_Booking_Incident: 10508,
			Agreement_Booking_Product: 10509,
			Agreement_Booking_Service: 10510,
			Agreement_Booking_Service_Task: 10511,
			Agreement_Booking_Setup: 10512,
			Agreement_Invoice_Date: 10513,
			Agreement_Invoice_Product: 10514,
			Agreement_Invoice_Setup: 10515,
			Appointment: 4201,
			Assignment_Map: 10266,
			Assignment_Rule: 10263,
			Booking_Alert: 10386,
			Booking_Alert_Status: 10387,
			Booking_Rule: 10389,
			Booking_Timestamp: 10518,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10673,
			Customer_Asset: 10128,
			Customer_Voice_alert: 10283,
			Customer_Voice_survey_invite: 10293,
			Customer_Voice_survey_response: 10295,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10409,
			Goal: 9600,
			Incident_Type_Characteristic: 10529,
			Incident_Type_Product: 10530,
			Incident_Type_Service: 10531,
			Inventory_Adjustment: 10535,
			Inventory_Adjustment_Product: 10536,
			Inventory_Journal: 10537,
			Inventory_Transfer: 10538,
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
			Ongoing_conversation_Deprecated: 10663,
			Opportunity: 3,
			Option: 10787,
			Order: 1088,
			Outbound_message: 10781,
			Payment: 10543,
			Payment_Detail: 10544,
			Payment_Method: 10545,
			Payment_Term: 10546,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10547,
			Price_List: 1022,
			Process_Notes: 10454,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10548,
			Profile_Album: 10278,
			Project: 10455,
			Project_Service_Approval: 10416,
			Project_Team_Member: 10463,
			Purchase_Order: 10549,
			Purchase_Order_Bill: 10550,
			Purchase_Order_Product: 10551,
			Purchase_Order_Receipt: 10552,
			Purchase_Order_Receipt_Product: 10553,
			Purchase_Order_SubStatus: 10554,
			Quote: 1084,
			Quote_Booking_Incident: 10555,
			Quote_Booking_Product: 10556,
			Quote_Booking_Service: 10557,
			Quote_Booking_Service_Task: 10558,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10583,
			Resource_Territory: 10405,
			RMA: 10563,
			RMA_Product: 10564,
			RMA_Receipt: 10565,
			RMA_Receipt_Product: 10566,
			RMA_SubStatus: 10567,
			RTV: 10568,
			RTV_Product: 10569,
			RTV_Substatus: 10570,
			Scheduling_Group: 4005,
			Sequence: 10257,
			Sequence_Target: 10259,
			Service_Activity: 4214,
			Session: 10688,
			Ship_Via: 10572,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10408,
			Task: 4212,
			Tax_Code: 10573,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10410,
			Time_Off_Request: 10575,
			Toolbar_Button: 10810,
			User: 8,
			Warehouse: 10577,
			Work_Order: 10578,
			Work_Order_Characteristic_Deprecated: 10579,
			Work_Order_Incident: 10581,
			Work_Order_Product: 10582,
			Work_Order_Service: 10584,
			Work_Order_Service_Task: 10585
		},
		Record2ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10506,
			Agreement_Booking_Date: 10507,
			Agreement_Booking_Incident: 10508,
			Agreement_Booking_Product: 10509,
			Agreement_Booking_Service: 10510,
			Agreement_Booking_Service_Task: 10511,
			Agreement_Booking_Setup: 10512,
			Agreement_Invoice_Date: 10513,
			Agreement_Invoice_Product: 10514,
			Agreement_Invoice_Setup: 10515,
			Appointment: 4201,
			Assignment_Map: 10266,
			Assignment_Rule: 10263,
			Booking_Alert: 10386,
			Booking_Alert_Status: 10387,
			Booking_Rule: 10389,
			Booking_Timestamp: 10518,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10673,
			Customer_Asset: 10128,
			Customer_Voice_alert: 10283,
			Customer_Voice_survey_invite: 10293,
			Customer_Voice_survey_response: 10295,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10409,
			Goal: 9600,
			Incident_Type_Characteristic: 10529,
			Incident_Type_Product: 10530,
			Incident_Type_Service: 10531,
			Inventory_Adjustment: 10535,
			Inventory_Adjustment_Product: 10536,
			Inventory_Journal: 10537,
			Inventory_Transfer: 10538,
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
			Ongoing_conversation_Deprecated: 10663,
			Opportunity: 3,
			Option: 10787,
			Order: 1088,
			Outbound_message: 10781,
			Payment: 10543,
			Payment_Detail: 10544,
			Payment_Method: 10545,
			Payment_Term: 10546,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10547,
			Price_List: 1022,
			Process_Notes: 10454,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10548,
			Profile_Album: 10278,
			Project: 10455,
			Project_Service_Approval: 10416,
			Project_Team_Member: 10463,
			Purchase_Order: 10549,
			Purchase_Order_Bill: 10550,
			Purchase_Order_Product: 10551,
			Purchase_Order_Receipt: 10552,
			Purchase_Order_Receipt_Product: 10553,
			Purchase_Order_SubStatus: 10554,
			Quote: 1084,
			Quote_Booking_Incident: 10555,
			Quote_Booking_Product: 10556,
			Quote_Booking_Service: 10557,
			Quote_Booking_Service_Task: 10558,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10583,
			Resource_Territory: 10405,
			RMA: 10563,
			RMA_Product: 10564,
			RMA_Receipt: 10565,
			RMA_Receipt_Product: 10566,
			RMA_SubStatus: 10567,
			RTV: 10568,
			RTV_Product: 10569,
			RTV_Substatus: 10570,
			Scheduling_Group: 4005,
			Sequence: 10257,
			Sequence_Target: 10259,
			Service_Activity: 4214,
			Session: 10688,
			Ship_Via: 10572,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10408,
			Task: 4212,
			Tax_Code: 10573,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10410,
			Time_Off_Request: 10575,
			Toolbar_Button: 10810,
			User: 8,
			Warehouse: 10577,
			Work_Order: 10578,
			Work_Order_Characteristic_Deprecated: 10579,
			Work_Order_Incident: 10581,
			Work_Order_Product: 10582,
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