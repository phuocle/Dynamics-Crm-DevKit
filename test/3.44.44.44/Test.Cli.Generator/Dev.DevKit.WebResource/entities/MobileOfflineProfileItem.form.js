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
		var grid = {
			profileassociationgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: {}
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
			AccountLeads: 16,
			Activity_File_Attachment: 10184,
			Agreement_Business_Process: 11657,
			Asset_Category_Template_Association: 10378,
			Asset_Template_Association: 10379,
			Bookable_Resource: 1150,
			Bookable_Resource_Booking: 1145,
			Bookable_Resource_Booking_Quick_Note: 11716,
			Booking_Status: 1152,
			Booking_Timestamp: 11654,
			Case: 112,
			Case_to_Work_Order_Business_Process: 11656,
			CFS_IoT_Alert_Process_Flow: 11734,
			Comparator_Metadata: 11568,
			Competitor_Address: 1004,
			Competitor_Product: 1006,
			Connection_Role: 3231,
			ContactLeads: 22,
			Copilot_knowledge_interaction: 11599,
			Currency: 9105,
			Customer_Asset: 10380,
			Customer_Asset_Category: 10384,
			Entitlement: 9700,
			Entitlement_Contact: 7272,
			Entitlement_Product: 6363,
			Entitlement_Template_Product: 4545,
			Entity_Attachment: 10647,
			EventMainBusinessProcessFlow: 11085,
			Field_Service_Price_List_Item: 11660,
			Field_Service_Setting: 11661,
			Field_Service_Summary_Configuration: 11746,
			Functional_Location: 10385,
			Functional_Location_Type: 10386,
			Functional_Location_Type_Template_Association: 10388,
			Geolocation_Settings: 11735,
			Image_Descriptor: 1007,
			Incident_KnowledgeBaseRecord: 9931,
			Incident_Type: 11664,
			Incident_Type_Product: 11666,
			Incident_Type_Resolution: 11722,
			Incident_Type_Service: 11667,
			Incident_Type_Service_Task: 11668,
			Incident_Types_Setup: 11669,
			Inspection_Attachment: 11627,
			Inspection_Response: 11630,
			Inspection_Template: 11626,
			Inspection_Template_Version: 11628,
			Invoice_Product: 1091,
			IoT_Alert: 10402,
			IoT_Alert_to_Case_Process: 10418,
			IoT_Device: 10403,
			IoT_Device_Category: 10404,
			IoT_Device_Command: 10405,
			IoT_Device_Command_Definition: 10406,
			IoT_Device_Data_History: 10407,
			IoT_Device_Property: 10408,
			IoT_Device_Registration_History: 10409,
			IoT_Property_Definition: 10412,
			IoT_Provider: 10413,
			IoT_Provider_Instance: 10414,
			IoT_Settings: 10415,
			Knowledge_Article: 9953,
			Knowledge_Article_Attachment: 10199,
			Knowledge_Article_Image: 10193,
			Knowledge_Article_Views: 9955,
			Knowledge_Harvest_Job_Record: 11610,
			Lead_to_opportunity: 11198,
			Lead_To_Opportunity_Sales_Process: 954,
			LeadCompetitors: 24,
			LeadProduct: 27,
			Location_Template_Association: 10387,
			MobileSource: 11747,
			msdyn_historicalcaseharvestbatch: 11608,
			msdyn_historicalcaseharvestrun: 11609,
			Not_to_exceed: 11724,
			Opportunity_Line: 1083,
			Opportunity_Sales_Process: 953,
			OpportunityCompetitors: 25,
			Order_Line: 1089,
			OrganizationDataSyncFnoState: 10221,
			OrganizationDataSyncState: 10222,
			Phone_Call: 4210,
			Phone_To_Case_Process: 952,
			Price_List: 1022,
			Price_List_Item: 1026,
			Priority: 11006,
			Product_Inventory: 11683,
			Product_Relationship: 1028,
			Property: 1048,
			Property_Asset_Association: 10390,
			Property_Association: 1235,
			Property_Definition: 10389,
			Property_Instance: 1333,
			Property_Location_Association: 10391,
			Property_Log: 10392,
			Property_Option_Set_Item: 1049,
			Property_Template_Association: 10393,
			Purchase_Order_Business_Process: 11655,
			Queue: 2020,
			Queue_Item: 2029,
			Quote_Line: 1085,
			Resolution: 11727,
			Scheduling_Parameter: 11015,
			Service_Task_Type: 11702,
			SLA_KPI_Instance: 9752,
			Tax_Code: 11639,
			Team: 9,
			Template_For_Properties: 10394,
			Territory: 2013,
			Time_Entry: 11631,
			Time_Off_Request: 11703,
			Time_Source: 11632,
			Trade: 11728,
			Unit: 1055,
			Unit_Group: 1056,
			Warehouse: 11641,
			Work_Order: 11705,
			Work_Order_Business_Process: 11658,
			Work_Order_Incident: 11708,
			Work_order_not_to_exceed: 11732,
			Work_Order_Product: 11709,
			Work_Order_Resolution: 11733,
			Work_Order_Service: 11711,
			Work_Order_Service_Task: 11712,
			Work_Order_Substatus: 11713,
			Work_Order_Type: 11714
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