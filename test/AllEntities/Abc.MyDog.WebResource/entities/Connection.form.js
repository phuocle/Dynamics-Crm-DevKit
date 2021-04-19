'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormConnection_Information = function(executionContext, defaultWebResourceName) {
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Connection = {
		Record1ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10353,
			Agreement_Booking_Date: 10354,
			Agreement_Booking_Incident: 10355,
			Agreement_Booking_Product: 10356,
			Agreement_Booking_Service: 10357,
			Agreement_Booking_Service_Task: 10358,
			Agreement_Booking_Setup: 10359,
			Agreement_Invoice_Date: 10360,
			Agreement_Invoice_Product: 10361,
			Agreement_Invoice_Setup: 10362,
			Appointment: 4201,
			Booking_Alert: 10235,
			Booking_Alert_Status: 10236,
			Booking_Rule: 10238,
			Booking_Timestamp: 10365,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10480,
			Customer_Asset: 10095,
			Customer_Voice_alert: 10216,
			Customer_Voice_survey_invite: 10225,
			Customer_Voice_survey_response: 10227,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10258,
			Goal: 9600,
			Incident_Type_Characteristic: 10376,
			Incident_Type_Product: 10377,
			Incident_Type_Service: 10378,
			Inventory_Adjustment: 10382,
			Inventory_Adjustment_Product: 10383,
			Inventory_Journal: 10384,
			Inventory_Transfer: 10385,
			Invoice: 1090,
			IoT_Alert: 10105,
			IoT_Device: 10106,
			IoT_Device_Category: 10107,
			IoT_Device_Command: 10108,
			IoT_Device_Registration_History: 10112,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Ongoing_conversation_Deprecated: 10474,
			Opportunity: 3,
			Option: 10572,
			Order: 1088,
			Outbound_message: 10566,
			Payment: 10390,
			Payment_Detail: 10391,
			Payment_Method: 10392,
			Payment_Term: 10393,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10394,
			Price_List: 1022,
			Process_Notes: 10303,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10395,
			Profile_Album: 10211,
			Project: 10304,
			Project_Service_Approval: 10265,
			Project_Team_Member: 10312,
			Purchase_Order: 10396,
			Purchase_Order_Bill: 10397,
			Purchase_Order_Product: 10398,
			Purchase_Order_Receipt: 10399,
			Purchase_Order_Receipt_Product: 10400,
			Purchase_Order_SubStatus: 10401,
			Quote: 1084,
			Quote_Booking_Incident: 10402,
			Quote_Booking_Product: 10403,
			Quote_Booking_Service: 10404,
			Quote_Booking_Service_Task: 10405,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10430,
			Resource_Territory: 10254,
			RMA: 10410,
			RMA_Product: 10411,
			RMA_Receipt: 10412,
			RMA_Receipt_Product: 10413,
			RMA_SubStatus: 10414,
			RTV: 10415,
			RTV_Product: 10416,
			RTV_Substatus: 10417,
			Scheduling_Group: 4005,
			Service_Activity: 4214,
			Session: 10489,
			Ship_Via: 10419,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10257,
			Task: 4212,
			Tax_Code: 10420,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10259,
			Time_Off_Request: 10422,
			Toolbar_Button: 10595,
			User: 8,
			Warehouse: 10424,
			Work_Order: 10425,
			Work_Order_Characteristic_Deprecated: 10426,
			Work_Order_Incident: 10428,
			Work_Order_Product: 10429,
			Work_Order_Service: 10431,
			Work_Order_Service_Task: 10432
		},
		Record2ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10353,
			Agreement_Booking_Date: 10354,
			Agreement_Booking_Incident: 10355,
			Agreement_Booking_Product: 10356,
			Agreement_Booking_Service: 10357,
			Agreement_Booking_Service_Task: 10358,
			Agreement_Booking_Setup: 10359,
			Agreement_Invoice_Date: 10360,
			Agreement_Invoice_Product: 10361,
			Agreement_Invoice_Setup: 10362,
			Appointment: 4201,
			Booking_Alert: 10235,
			Booking_Alert_Status: 10236,
			Booking_Rule: 10238,
			Booking_Timestamp: 10365,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10480,
			Customer_Asset: 10095,
			Customer_Voice_alert: 10216,
			Customer_Voice_survey_invite: 10225,
			Customer_Voice_survey_response: 10227,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10258,
			Goal: 9600,
			Incident_Type_Characteristic: 10376,
			Incident_Type_Product: 10377,
			Incident_Type_Service: 10378,
			Inventory_Adjustment: 10382,
			Inventory_Adjustment_Product: 10383,
			Inventory_Journal: 10384,
			Inventory_Transfer: 10385,
			Invoice: 1090,
			IoT_Alert: 10105,
			IoT_Device: 10106,
			IoT_Device_Category: 10107,
			IoT_Device_Command: 10108,
			IoT_Device_Registration_History: 10112,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Ongoing_conversation_Deprecated: 10474,
			Opportunity: 3,
			Option: 10572,
			Order: 1088,
			Outbound_message: 10566,
			Payment: 10390,
			Payment_Detail: 10391,
			Payment_Method: 10392,
			Payment_Term: 10393,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10394,
			Price_List: 1022,
			Process_Notes: 10303,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10395,
			Profile_Album: 10211,
			Project: 10304,
			Project_Service_Approval: 10265,
			Project_Team_Member: 10312,
			Purchase_Order: 10396,
			Purchase_Order_Bill: 10397,
			Purchase_Order_Product: 10398,
			Purchase_Order_Receipt: 10399,
			Purchase_Order_Receipt_Product: 10400,
			Purchase_Order_SubStatus: 10401,
			Quote: 1084,
			Quote_Booking_Incident: 10402,
			Quote_Booking_Product: 10403,
			Quote_Booking_Service: 10404,
			Quote_Booking_Service_Task: 10405,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10430,
			Resource_Territory: 10254,
			RMA: 10410,
			RMA_Product: 10411,
			RMA_Receipt: 10412,
			RMA_Receipt_Product: 10413,
			RMA_SubStatus: 10414,
			RTV: 10415,
			RTV_Product: 10416,
			RTV_Substatus: 10417,
			Scheduling_Group: 4005,
			Service_Activity: 4214,
			Session: 10489,
			Ship_Via: 10419,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10257,
			Task: 4212,
			Tax_Code: 10420,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10259,
			Time_Off_Request: 10422,
			Toolbar_Button: 10595,
			User: 8,
			Warehouse: 10424,
			Work_Order: 10425,
			Work_Order_Characteristic_Deprecated: 10426,
			Work_Order_Incident: 10428,
			Work_Order_Product: 10429,
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