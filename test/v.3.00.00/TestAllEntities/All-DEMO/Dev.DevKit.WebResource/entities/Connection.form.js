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
			Agreement: 10477,
			Agreement_Booking_Date: 10478,
			Agreement_Booking_Incident: 10479,
			Agreement_Booking_Product: 10480,
			Agreement_Booking_Service: 10481,
			Agreement_Booking_Service_Task: 10482,
			Agreement_Booking_Setup: 10483,
			Agreement_Invoice_Date: 10484,
			Agreement_Invoice_Product: 10485,
			Agreement_Invoice_Setup: 10486,
			Appointment: 4201,
			Assignment_Map: 10820,
			Assignment_Rule: 10817,
			Booking_Alert: 10357,
			Booking_Alert_Status: 10358,
			Booking_Rule: 10360,
			Booking_Timestamp: 10489,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10644,
			Customer_Asset: 10128,
			Customer_Voice_alert: 10261,
			Customer_Voice_survey_invite: 10271,
			Customer_Voice_survey_response: 10273,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10380,
			Goal: 9600,
			Incident_Type_Characteristic: 10500,
			Incident_Type_Product: 10501,
			Incident_Type_Service: 10502,
			Inventory_Adjustment: 10506,
			Inventory_Adjustment_Product: 10507,
			Inventory_Journal: 10508,
			Inventory_Transfer: 10509,
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
			Ongoing_conversation_Deprecated: 10634,
			Opportunity: 3,
			Option: 10758,
			Order: 1088,
			Outbound_message: 10752,
			Payment: 10514,
			Payment_Detail: 10515,
			Payment_Method: 10516,
			Payment_Term: 10517,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10518,
			Price_List: 1022,
			Process_Notes: 10425,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10519,
			Profile_Album: 10256,
			Project: 10426,
			Project_Service_Approval: 10387,
			Project_Team_Member: 10434,
			Purchase_Order: 10520,
			Purchase_Order_Bill: 10521,
			Purchase_Order_Product: 10522,
			Purchase_Order_Receipt: 10523,
			Purchase_Order_Receipt_Product: 10524,
			Purchase_Order_SubStatus: 10525,
			Quote: 1084,
			Quote_Booking_Incident: 10526,
			Quote_Booking_Product: 10527,
			Quote_Booking_Service: 10528,
			Quote_Booking_Service_Task: 10529,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10554,
			Resource_Territory: 10376,
			RMA: 10534,
			RMA_Product: 10535,
			RMA_Receipt: 10536,
			RMA_Receipt_Product: 10537,
			RMA_SubStatus: 10538,
			RTV: 10539,
			RTV_Product: 10540,
			RTV_Substatus: 10541,
			Scheduling_Group: 4005,
			Sequence: 10812,
			Sequence_Target: 10813,
			Service_Activity: 4214,
			Session: 10659,
			Ship_Via: 10543,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10379,
			Task: 4212,
			Tax_Code: 10544,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10381,
			Time_Off_Request: 10546,
			Toolbar_Button: 10781,
			User: 8,
			Warehouse: 10548,
			Work_Order: 10549,
			Work_Order_Characteristic_Deprecated: 10550,
			Work_Order_Incident: 10552,
			Work_Order_Product: 10553,
			Work_Order_Service: 10555,
			Work_Order_Service_Task: 10556
		},
		Record2ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10477,
			Agreement_Booking_Date: 10478,
			Agreement_Booking_Incident: 10479,
			Agreement_Booking_Product: 10480,
			Agreement_Booking_Service: 10481,
			Agreement_Booking_Service_Task: 10482,
			Agreement_Booking_Setup: 10483,
			Agreement_Invoice_Date: 10484,
			Agreement_Invoice_Product: 10485,
			Agreement_Invoice_Setup: 10486,
			Appointment: 4201,
			Assignment_Map: 10820,
			Assignment_Rule: 10817,
			Booking_Alert: 10357,
			Booking_Alert_Status: 10358,
			Booking_Rule: 10360,
			Booking_Timestamp: 10489,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10644,
			Customer_Asset: 10128,
			Customer_Voice_alert: 10261,
			Customer_Voice_survey_invite: 10271,
			Customer_Voice_survey_response: 10273,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10380,
			Goal: 9600,
			Incident_Type_Characteristic: 10500,
			Incident_Type_Product: 10501,
			Incident_Type_Service: 10502,
			Inventory_Adjustment: 10506,
			Inventory_Adjustment_Product: 10507,
			Inventory_Journal: 10508,
			Inventory_Transfer: 10509,
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
			Ongoing_conversation_Deprecated: 10634,
			Opportunity: 3,
			Option: 10758,
			Order: 1088,
			Outbound_message: 10752,
			Payment: 10514,
			Payment_Detail: 10515,
			Payment_Method: 10516,
			Payment_Term: 10517,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10518,
			Price_List: 1022,
			Process_Notes: 10425,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10519,
			Profile_Album: 10256,
			Project: 10426,
			Project_Service_Approval: 10387,
			Project_Team_Member: 10434,
			Purchase_Order: 10520,
			Purchase_Order_Bill: 10521,
			Purchase_Order_Product: 10522,
			Purchase_Order_Receipt: 10523,
			Purchase_Order_Receipt_Product: 10524,
			Purchase_Order_SubStatus: 10525,
			Quote: 1084,
			Quote_Booking_Incident: 10526,
			Quote_Booking_Product: 10527,
			Quote_Booking_Service: 10528,
			Quote_Booking_Service_Task: 10529,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10554,
			Resource_Territory: 10376,
			RMA: 10534,
			RMA_Product: 10535,
			RMA_Receipt: 10536,
			RMA_Receipt_Product: 10537,
			RMA_SubStatus: 10538,
			RTV: 10539,
			RTV_Product: 10540,
			RTV_Substatus: 10541,
			Scheduling_Group: 4005,
			Sequence: 10812,
			Sequence_Target: 10813,
			Service_Activity: 4214,
			Session: 10659,
			Ship_Via: 10543,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10379,
			Task: 4212,
			Tax_Code: 10544,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10381,
			Time_Off_Request: 10546,
			Toolbar_Button: 10781,
			User: 8,
			Warehouse: 10548,
			Work_Order: 10549,
			Work_Order_Characteristic_Deprecated: 10550,
			Work_Order_Incident: 10552,
			Work_Order_Product: 10553,
			Work_Order_Service: 10555,
			Work_Order_Service_Task: 10556
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