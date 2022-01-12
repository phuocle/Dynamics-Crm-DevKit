'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMobile_Offline_Profile_Item = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			Name: {},
			profileassociationgrid: {},
			RecordDistributionCriteria: {},
			RecordsOwnedByMe: {},
			RecordsOwnedByMyBusinessUnit: {},
			RecordsOwnedByMyTeam: {},
			SelectedEntityTypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GENERALINFORMATION_TAB: {
				Section: {
					Entity_Selection: {},
					MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			profileassociationgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
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
	OptionSet.MobileOfflineProfileItem = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		RecordDistributionCriteria : {
			All_records: 1,
			Custom_data_filter: 3,
			Download_related_data_only: 0,
			Other_data_filter: 2
		},
		SelectedEntityTypeCode : {
			Account: 1,
			AccountLeads: 16,
			Activity_File_Attachment: 10074,
			Agreement_Business_Process: 10492,
			Appointment: 4201,
			Asset_Category_Template_Association: 10126,
			Asset_Template_Association: 10127,
			Attachment: 1001,
			Bookable_Resource: 1150,
			Bookable_Resource_Booking: 1145,
			Bookable_Resource_Booking_Quick_Note: 10564,
			Booking_Status: 1152,
			Booking_Timestamp: 10489,
			Case: 112,
			Case_to_Work_Order_Business_Process: 10491,
			CFS_IoT_Alert_Process_Flow: 10576,
			Competitor: 123,
			Competitor_Address: 1004,
			Competitor_Product: 1006,
			Connection: 3234,
			Connection_Role: 3231,
			Contact: 2,
			ContactLeads: 22,
			Currency: 9105,
			Customer_Asset: 10128,
			Customer_Asset_Category: 10130,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Contact: 7272,
			Entitlement_Product: 6363,
			Entitlement_Template_Product: 4545,
			Field_Service_Price_List_Item: 10495,
			Field_Service_Setting: 10496,
			Functional_Location: 10131,
			Geolocation_Settings: 10577,
			Image_Descriptor: 1007,
			Incident_KnowledgeBaseRecord: 9931,
			Incident_Type: 10499,
			Incident_Type_Product: 10501,
			Incident_Type_Resolution: 10569,
			Incident_Type_Service: 10502,
			Incident_Type_Service_Task: 10503,
			Incident_Types_Setup: 10504,
			Inspection_Attachment: 10473,
			Inspection_Response: 10476,
			Inspection_Template: 10472,
			Inspection_Template_Version: 10474,
			Invoice: 1090,
			Invoice_Line: 1091,
			Invoice_Process: 10390,
			IoT_Alert: 10138,
			IoT_Alert_to_Case_Process: 10154,
			IoT_Device: 10139,
			IoT_Device_Category: 10140,
			IoT_Device_Command: 10141,
			IoT_Device_Command_Definition: 10142,
			IoT_Device_Data_History: 10143,
			IoT_Device_Property: 10144,
			IoT_Device_Registration_History: 10145,
			IoT_Property_Definition: 10148,
			IoT_Provider: 10149,
			IoT_Provider_Instance: 10150,
			IoT_Settings: 10151,
			Knowledge_Article: 9953,
			Knowledge_Article_Attachment: 10084,
			Knowledge_Article_Image: 10080,
			Knowledge_Article_Views: 9955,
			Lead: 4,
			Lead_To_Opportunity_Sales_Process: 954,
			LeadCompetitors: 24,
			LeadProduct: 27,
			Note: 5,
			Opportunity: 3,
			Opportunity_Line: 1083,
			Opportunity_Sales_Process: 953,
			OpportunityCompetitors: 25,
			Order: 1088,
			Order_Line: 1089,
			Phone_Call: 4210,
			Phone_To_Case_Process: 952,
			Price_List: 1022,
			Price_List_Item: 1026,
			Priority: 10366,
			Product: 1024,
			Product_Inventory: 10519,
			Product_Relationship: 1028,
			Project_Stages: 10389,
			Property: 1048,
			Property_Asset_Association: 10133,
			Property_Association: 1235,
			Property_Definition: 10132,
			Property_Instance: 1333,
			Property_Log: 10134,
			Property_Option_Set_Item: 1049,
			Property_Template_Association: 10135,
			Purchase_Order_Business_Process: 10490,
			Queue: 2020,
			Queue_Item: 2029,
			Quote: 1084,
			Quote_Line: 1085,
			Resolution: 10572,
			Scheduling_Parameter: 10378,
			Service_Task_Type: 10542,
			SLA_KPI_Instance: 9752,
			Task: 4212,
			Tax_Code: 10544,
			Team: 9,
			Template_For_Properties: 10136,
			Territory: 2013,
			Time_Entry: 10452,
			Time_Off_Request: 10546,
			Time_Source: 10467,
			Unit: 1055,
			Unit_Group: 1056,
			User: 8,
			Warehouse: 10548,
			Work_Order: 10549,
			Work_Order_Business_Process: 10493,
			Work_Order_Incident: 10552,
			Work_Order_Product: 10553,
			Work_Order_Resolution: 10575,
			Work_Order_Service: 10555,
			Work_Order_Service_Task: 10556,
			Work_Order_Substatus: 10557,
			Work_Order_Type: 10558
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