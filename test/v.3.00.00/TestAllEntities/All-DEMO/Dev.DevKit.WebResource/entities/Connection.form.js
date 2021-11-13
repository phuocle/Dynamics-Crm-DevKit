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
	OptionSet.Connection = {
		Record1ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10413,
			Agreement_Booking_Date: 10414,
			Agreement_Booking_Incident: 10415,
			Agreement_Booking_Product: 10416,
			Agreement_Booking_Service: 10417,
			Agreement_Booking_Service_Task: 10418,
			Agreement_Booking_Setup: 10419,
			Agreement_Invoice_Date: 10420,
			Agreement_Invoice_Product: 10421,
			Agreement_Invoice_Setup: 10422,
			Appointment: 4201,
			Booking_Alert: 10294,
			Booking_Alert_Status: 10295,
			Booking_Rule: 10297,
			Booking_Timestamp: 10425,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10564,
			Customer_Asset: 10116,
			Customer_Voice_alert: 10238,
			Customer_Voice_survey_invite: 10248,
			Customer_Voice_survey_response: 10250,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10317,
			Goal: 9600,
			Incident_Type_Characteristic: 10436,
			Incident_Type_Product: 10437,
			Incident_Type_Service: 10438,
			Inventory_Adjustment: 10442,
			Inventory_Adjustment_Product: 10443,
			Inventory_Journal: 10444,
			Inventory_Transfer: 10445,
			Invoice: 1090,
			IoT_Alert: 10126,
			IoT_Device: 10127,
			IoT_Device_Category: 10128,
			IoT_Device_Command: 10129,
			IoT_Device_Registration_History: 10133,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Ongoing_conversation_Deprecated: 10558,
			Opportunity: 3,
			Option: 10679,
			Order: 1088,
			Outbound_message: 10673,
			Payment: 10450,
			Payment_Detail: 10451,
			Payment_Method: 10452,
			Payment_Term: 10453,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10454,
			Price_List: 1022,
			Process_Notes: 10362,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10455,
			Profile_Album: 10233,
			Project: 10363,
			Project_Service_Approval: 10324,
			Project_Team_Member: 10371,
			Purchase_Order: 10456,
			Purchase_Order_Bill: 10457,
			Purchase_Order_Product: 10458,
			Purchase_Order_Receipt: 10459,
			Purchase_Order_Receipt_Product: 10460,
			Purchase_Order_SubStatus: 10461,
			Quote: 1084,
			Quote_Booking_Incident: 10462,
			Quote_Booking_Product: 10463,
			Quote_Booking_Service: 10464,
			Quote_Booking_Service_Task: 10465,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10490,
			Resource_Territory: 10313,
			RMA: 10470,
			RMA_Product: 10471,
			RMA_Receipt: 10472,
			RMA_Receipt_Product: 10473,
			RMA_SubStatus: 10474,
			RTV: 10475,
			RTV_Product: 10476,
			RTV_Substatus: 10477,
			Scheduling_Group: 4005,
			Service_Activity: 4214,
			Session: 10573,
			Ship_Via: 10479,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10316,
			Task: 4212,
			Tax_Code: 10480,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10318,
			Time_Off_Request: 10482,
			Toolbar_Button: 10702,
			User: 8,
			Warehouse: 10484,
			Work_Order: 10485,
			Work_Order_Characteristic_Deprecated: 10486,
			Work_Order_Incident: 10488,
			Work_Order_Product: 10489,
			Work_Order_Service: 10491,
			Work_Order_Service_Task: 10492
		},
		Record2ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Agreement: 10413,
			Agreement_Booking_Date: 10414,
			Agreement_Booking_Incident: 10415,
			Agreement_Booking_Product: 10416,
			Agreement_Booking_Service: 10417,
			Agreement_Booking_Service_Task: 10418,
			Agreement_Booking_Setup: 10419,
			Agreement_Invoice_Date: 10420,
			Agreement_Invoice_Product: 10421,
			Agreement_Invoice_Setup: 10422,
			Appointment: 4201,
			Booking_Alert: 10294,
			Booking_Alert_Status: 10295,
			Booking_Rule: 10297,
			Booking_Timestamp: 10425,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Case: 112,
			Channel_Access_Profile_Rule: 9400,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Conversation: 10564,
			Customer_Asset: 10116,
			Customer_Voice_alert: 10238,
			Customer_Voice_survey_invite: 10248,
			Customer_Voice_survey_response: 10250,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Channel: 9701,
			Entitlement_Template_Channel: 9703,
			FacilityEquipment: 4000,
			Fax: 4204,
			Fulfillment_Preference: 10317,
			Goal: 9600,
			Incident_Type_Characteristic: 10436,
			Incident_Type_Product: 10437,
			Incident_Type_Service: 10438,
			Inventory_Adjustment: 10442,
			Inventory_Adjustment_Product: 10443,
			Inventory_Journal: 10444,
			Inventory_Transfer: 10445,
			Invoice: 1090,
			IoT_Alert: 10126,
			IoT_Device: 10127,
			IoT_Device_Category: 10128,
			IoT_Device_Command: 10129,
			IoT_Device_Registration_History: 10133,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Ongoing_conversation_Deprecated: 10558,
			Opportunity: 3,
			Option: 10679,
			Order: 1088,
			Outbound_message: 10673,
			Payment: 10450,
			Payment_Detail: 10451,
			Payment_Method: 10452,
			Payment_Term: 10453,
			Phone_Call: 4210,
			Position: 50,
			Postal_Code: 10454,
			Price_List: 1022,
			Process_Notes: 10362,
			Process_Session: 4710,
			Product: 1024,
			Product_Inventory: 10455,
			Profile_Album: 10233,
			Project: 10363,
			Project_Service_Approval: 10324,
			Project_Team_Member: 10371,
			Purchase_Order: 10456,
			Purchase_Order_Bill: 10457,
			Purchase_Order_Product: 10458,
			Purchase_Order_Receipt: 10459,
			Purchase_Order_Receipt_Product: 10460,
			Purchase_Order_SubStatus: 10461,
			Quote: 1084,
			Quote_Booking_Incident: 10462,
			Quote_Booking_Product: 10463,
			Quote_Booking_Service: 10464,
			Quote_Booking_Service_Task: 10465,
			Recurring_Appointment: 4251,
			Resource_Group: 4007,
			Resource_Restriction_Deprecated: 10490,
			Resource_Territory: 10313,
			RMA: 10470,
			RMA_Product: 10471,
			RMA_Receipt: 10472,
			RMA_Receipt_Product: 10473,
			RMA_SubStatus: 10474,
			RTV: 10475,
			RTV_Product: 10476,
			RTV_Substatus: 10477,
			Scheduling_Group: 4005,
			Service_Activity: 4214,
			Session: 10573,
			Ship_Via: 10479,
			Social_Activity: 4216,
			Social_Profile: 99,
			System_User_Scheduler_Setting: 10316,
			Task: 4212,
			Tax_Code: 10480,
			Team: 9,
			Territory: 2013,
			Time_Group_Detail: 10318,
			Time_Off_Request: 10482,
			Toolbar_Button: 10702,
			User: 8,
			Warehouse: 10484,
			Work_Order: 10485,
			Work_Order_Characteristic_Deprecated: 10486,
			Work_Order_Incident: 10488,
			Work_Order_Product: 10489,
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