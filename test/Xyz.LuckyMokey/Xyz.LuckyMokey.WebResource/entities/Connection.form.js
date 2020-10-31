'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormConnection_Information = function(executionContext, defaultWebResourceName) {
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
			info: {
				Section: {
					info_s: {},
					description: {}
				}
			},
			details: {
				Section: {
					connect_from: {},
					details: {}
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
	OptionSet.Connection = {
		Record1ObjectTypeCode : {
			Purchase_Order_Receipt_Product: 10245,
			Purchase_Order_SubStatus: 10246,
			Quote_Booking_Incident: 10247,
			Purchase_Order_Receipt: 10244,
			Purchase_Order: 10241,
			Purchase_Order_Bill: 10242,
			Purchase_Order_Product: 10243,
			Quote_Booking_Product: 10248,
			RMA_Receipt: 10257,
			RMA_Receipt_Product: 10258,
			RMA_SubStatus: 10259,
			RMA_Product: 10256,
			Quote_Booking_Service: 10249,
			Quote_Booking_Service_Task: 10250,
			RMA: 10255,
			Incident_Type_Service: 10223,
			Inventory_Adjustment: 10227,
			Inventory_Adjustment_Product: 10228,
			Incident_Type_Product: 10222,
			Booking_Timestamp: 10208,
			Customer_Asset: 10213,
			Incident_Type_Characteristic: 10221,
			Inventory_Journal: 10229,
			Payment_Term: 10238,
			Postal_Code: 10239,
			Product_Inventory: 10240,
			Payment_Method: 10237,
			Inventory_Transfer: 10230,
			Payment: 10235,
			Payment_Detail: 10236,
			Ongoing_conversation: 10332,
			Conversation: 10338,
			Session: 10347,
			IoT_Device_Registration_History: 10288,
			IoT_Device: 10282,
			IoT_Device_Category: 10283,
			IoT_Device_Command: 10284,
			migrated_record: 10401,
			Account: 1,
			Contact: 2,
			Case: 112,
			User: 8,
			Document: 10403,
			Option: 10413,
			Toolbar_Button: 10436,
			Tax_Code: 10265,
			Time_Off_Request: 10267,
			Warehouse: 10269,
			Ship_Via: 10264,
			RTV: 10260,
			RTV_Product: 10261,
			RTV_Substatus: 10262,
			Work_Order: 10270,
			Work_Order_Service: 10276,
			Work_Order_Service_Task: 10277,
			IoT_Alert: 10281,
			Resource_Restriction_Deprecated: 10275,
			Work_Order_Characteristic_Deprecated: 10271,
			Work_Order_Incident: 10273,
			Work_Order_Product: 10274,
			Agreement_Invoice_Setup: 10205,
			Price_List: 1022,
			Product: 1024,
			Campaign: 4400,
			Lead: 4,
			Channel_Access_Profile_Rule: 9400,
			Process_Session: 4710,
			Territory: 2013,
			Campaign_Activity: 4402,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Entitlement: 9700,
			Marketing_List: 4300,
			Resource_Group: 4007,
			Contract: 1010,
			Social_Activity: 4216,
			Knowledge_Base_Record: 9930,
			Position: 50,
			Goal: 9600,
			Knowledge_Article: 9953,
			Letter: 4207,
			Activity: 4200,
			Appointment: 4201,
			Social_Profile: 99,
			Phone_Call: 4210,
			Team: 9,
			Task: 4212,
			Email: 4202,
			Fax: 4204,
			Recurring_Appointment: 4251,
			Project: 10154,
			Project_Team_Member: 10162,
			Agreement: 10196,
			Process_Notes: 10153,
			Fulfillment_Preference: 10110,
			Time_Group_Detail: 10111,
			Project_Service_Approval: 10115,
			Agreement_Booking_Date: 10197,
			Agreement_Booking_Setup: 10202,
			Agreement_Invoice_Date: 10203,
			Agreement_Invoice_Product: 10204,
			Agreement_Booking_Service_Task: 10201,
			Agreement_Booking_Incident: 10198,
			Agreement_Booking_Product: 10199,
			Agreement_Booking_Service: 10200,
			Quote: 1084,
			Order: 1088,
			Competitor: 123,
			Opportunity: 3,
			Scheduling_Group: 4005,
			Service_Activity: 4214,
			Invoice: 1090,
			Profile_Album: 10069,
			Booking_Rule: 10090,
			Resource_Territory: 10106,
			System_User_Scheduler_Setting: 10109,
			Booking_Alert_Status: 10088,
			Forms_Pro_survey_invite: 10078,
			Forms_Pro_survey_response: 10079,
			Booking_Alert: 10087
		},
		Record2ObjectTypeCode : {
			Purchase_Order_Receipt_Product: 10245,
			Purchase_Order_SubStatus: 10246,
			Quote_Booking_Incident: 10247,
			Purchase_Order_Receipt: 10244,
			Purchase_Order: 10241,
			Purchase_Order_Bill: 10242,
			Purchase_Order_Product: 10243,
			Quote_Booking_Product: 10248,
			RMA_Receipt: 10257,
			RMA_Receipt_Product: 10258,
			RMA_SubStatus: 10259,
			RMA_Product: 10256,
			Quote_Booking_Service: 10249,
			Quote_Booking_Service_Task: 10250,
			RMA: 10255,
			Incident_Type_Service: 10223,
			Inventory_Adjustment: 10227,
			Inventory_Adjustment_Product: 10228,
			Incident_Type_Product: 10222,
			Booking_Timestamp: 10208,
			Customer_Asset: 10213,
			Incident_Type_Characteristic: 10221,
			Inventory_Journal: 10229,
			Payment_Term: 10238,
			Postal_Code: 10239,
			Product_Inventory: 10240,
			Payment_Method: 10237,
			Inventory_Transfer: 10230,
			Payment: 10235,
			Payment_Detail: 10236,
			Ongoing_conversation: 10332,
			Conversation: 10338,
			Session: 10347,
			IoT_Device_Registration_History: 10288,
			IoT_Device: 10282,
			IoT_Device_Category: 10283,
			IoT_Device_Command: 10284,
			migrated_record: 10401,
			Account: 1,
			Contact: 2,
			Case: 112,
			User: 8,
			Document: 10403,
			Option: 10413,
			Toolbar_Button: 10436,
			Tax_Code: 10265,
			Time_Off_Request: 10267,
			Warehouse: 10269,
			Ship_Via: 10264,
			RTV: 10260,
			RTV_Product: 10261,
			RTV_Substatus: 10262,
			Work_Order: 10270,
			Work_Order_Service: 10276,
			Work_Order_Service_Task: 10277,
			IoT_Alert: 10281,
			Resource_Restriction_Deprecated: 10275,
			Work_Order_Characteristic_Deprecated: 10271,
			Work_Order_Incident: 10273,
			Work_Order_Product: 10274,
			Agreement_Invoice_Setup: 10205,
			Product: 1024,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Price_List: 1022,
			Knowledge_Article: 9953,
			Social_Activity: 4216,
			Lead: 4,
			Marketing_List: 4300,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Scheduling_Group: 4005,
			Entitlement_Channel: 9701,
			Resource_Group: 4007,
			Contract: 1010,
			Entitlement: 9700,
			Knowledge_Base_Record: 9930,
			Task: 4212,
			Process_Session: 4710,
			Appointment: 4201,
			Social_Profile: 99,
			Goal: 9600,
			Activity: 4200,
			Channel_Access_Profile_Rule: 9400,
			Team: 9,
			Letter: 4207,
			Email: 4202,
			Phone_Call: 4210,
			Position: 50,
			Fax: 4204,
			Recurring_Appointment: 4251,
			Project: 10154,
			Project_Team_Member: 10162,
			Agreement: 10196,
			Process_Notes: 10153,
			Fulfillment_Preference: 10110,
			Time_Group_Detail: 10111,
			Project_Service_Approval: 10115,
			Agreement_Booking_Date: 10197,
			Agreement_Booking_Setup: 10202,
			Agreement_Invoice_Date: 10203,
			Agreement_Invoice_Product: 10204,
			Agreement_Booking_Service_Task: 10201,
			Agreement_Booking_Incident: 10198,
			Agreement_Booking_Product: 10199,
			Agreement_Booking_Service: 10200,
			Order: 1088,
			Competitor: 123,
			Territory: 2013,
			Quote: 1084,
			Service_Activity: 4214,
			Invoice: 1090,
			Opportunity: 3,
			Profile_Album: 10069,
			Booking_Rule: 10090,
			Resource_Territory: 10106,
			System_User_Scheduler_Setting: 10109,
			Booking_Alert_Status: 10088,
			Forms_Pro_survey_invite: 10078,
			Forms_Pro_survey_response: 10079,
			Booking_Alert: 10087
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