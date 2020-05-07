//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_playbookactivity_Information {
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_documents_sharepoint extends DevKit.Form.Controls.IControlTab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface Tabs {
			documents_sharepoint: tab_documents_sharepoint;
		}
		interface Body {
			Tab: Tabs;
			DocumentsSubGrid: DevKit.Form.Controls.ControlGrid;
			/** The logical name of the entity. */
			msdyn_activityLogicalName: DevKit.Form.Controls.ControlString;
			/** This field is for internal use only. */
			msdyn_playbookactivity_json: DevKit.Form.Controls.ControlString;
			/** Type a short description about the objective or primary topic of the activity. */
			msdyn_subject: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_playbookactivity_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_playbookactivity_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_playbookactivity_Information */
		Body: LuckyMokey.Formmsdyn_playbookactivity_Information.Body;
	}
	class msdyn_playbookactivityApi {
		/**
		* DynamicsCrm.DevKit msdyn_playbookactivityApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The logical name of the entity. */
		msdyn_activityLogicalName: DevKit.WebApi.StringValue;
		/** Select the type of activity to be associated with the playbook. */
		msdyn_activityType: DevKit.WebApi.OptionSetValue;
		/** This field is for internal use only. */
		msdyn_playbookactivity_json: DevKit.WebApi.StringValue;
		/** Shows the ID of the playbook activity. */
		msdyn_playbookactivityId: DevKit.WebApi.GuidValue;
		/** Shows the ID of the playbook template associated with the playbook activities. */
		msdyn_playbooktemplateid: DevKit.WebApi.LookupValue;
		/** Type a short description about the objective or primary topic of the activity. */
		msdyn_subject: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Playbook Activities */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Playbook Activities */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_playbookactivity {
		enum msdyn_activityType {
			/** 10185 */
			Transaction_Category_Price,
			/** 10184 */
			Transaction_Category_Hierarchy_Element,
			/** 10183 */
			Transaction_Category_Classification,
			/** 10187 */
			Transaction_Type,
			/** 10112 */
			Transaction_Origin,
			/** 10186 */
			Transaction_Connection,
			/** 10182 */
			Transaction_Category,
			/** 10110 */
			Fulfillment_Preference,
			/** 10180 */
			Time_Entry,
			/** 10311 */
			Template_Tag,
			/** 10267 */
			Time_Off_Request,
			/** 10181 */
			Time_Off_Calendar,
			/** 10111 */
			Time_Group_Detail,
			/** 10073 */
			Filter,
			/** 10072 */
			Wall_View,
			/** 10380 */
			Self_service,
			/** 10270 */
			Work_Order,
			/** 10113 */
			Work_template,
			/** 10269 */
			Warehouse,
			/** 10188 */
			User_Work_History,
			/** 10062 */
			UntrackedAppointment,
			/** 10268 */
			Unique_Number,
			/** 10359 */
			Transcript,
			/** 10039 */
			Upgrade_Version,
			/** 10038 */
			Upgrade_Step,
			/** 10037 */
			Upgrade_Run,
			/** 10387 */
			SMS_Number,
			/** 10386 */
			SMS_Engagement_Context,
			/** 10468 */
			SLAKPI,
			/** 10033 */
			Solution_Health_Rule,
			/** 10008 */
			Solution_Component_Summary,
			/** 10009 */
			Solution_Component_Data_Source,
			/** 10385 */
			Attach_Skill,
			/** 10264 */
			Ship_Via,
			/** 10327 */
			Session_Participant_Data,
			/** 10358 */
			Session_participant,
			/** 10384 */
			Skill_Attachment_Rule,
			/** 10054 */
			SI_Key_Value_Config,
			/** 10053 */
			siconfig,
			/** 10109 */
			System_User_Scheduler_Setting,
			/** 10371 */
			Survey_Question,
			/** 10066 */
			Suggested_contacts_data_source,
			/** 10084 */
			Microsoft_Teams_Collaboration_entity,
			/** 10266 */
			Tax_Code_Detail,
			/** 10265 */
			Tax_Code,
			/** 10065 */
			Suggested_Contact,
			/** 10000 */
			Solution_History,
			/** 10035 */
			Solution_Health_Rule_Set,
			/** 10034 */
			Solution_Health_Rule_Argument,
			/** 10064 */
			Suggested_Activity_Data_Source,
			/** 10063 */
			Suggested_Activity,
			/** 10001 */
			Solution_History_Data_Source,
			/** 10271 */
			Work_Order_Characteristic_Deprecated,
			/** 10074 */
			Forms_Pro_survey_email_template,
			/** 10441 */
			Window_Navigation_Rule,
			/** 10440 */
			User_Setting,
			/** 10077 */
			Forms_Pro_survey,
			/** 10076 */
			Forms_Pro_survey_question_response,
			/** 10075 */
			Forms_Pro_survey_question,
			/** 10439 */
			Event,
			/** 10435 */
			Agent_Script_Task,
			/** 10434 */
			Session_Transfer,
			/** 10433 */
			Session_Information,
			/** 10438 */
			Trace_Source_Setting,
			/** 10437 */
			Toolbar,
			/** 10436 */
			Toolbar_Button,
			/** 4110 */
			Notification,
			/** 950 */
			New_Process,
			/** 9900 */
			Navigation_Setting,
			/** 9870 */
			Offline_Command_Definition,
			/** 9950 */
			Office_Graph_Document,
			/** 4490 */
			Office_Document,
			/** 10392 */
			Mawens_Solution_Setting,
			/** 10080 */
			Forms_Pro_unsubscribed_recipient,
			/** 10079 */
			Forms_Pro_survey_response,
			/** 10078 */
			Forms_Pro_survey_invite,
			/** 10391 */
			Mawens_Solution,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 10301 */
			SalesSiteMap,
			/** 10300 */
			MarketingSiteMap,
			/** 10279 */
			Work_Order_Type,
			/** 10419 */
			Action_Call_Workflow,
			/** 10303 */
			SettingsSiteMap,
			/** 10302 */
			ServicesSiteMap,
			/** 10278 */
			Work_Order_Substatus,
			/** 10274 */
			Work_Order_Product,
			/** 10273 */
			Work_Order_Incident,
			/** 10272 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 10277 */
			Work_Order_Service_Task,
			/** 10276 */
			Work_Order_Service,
			/** 10275 */
			Resource_Restriction_Deprecated,
			/** 10429 */
			Language_Module,
			/** 10428 */
			Form,
			/** 10427 */
			Entity_Search,
			/** 10432 */
			CTI_Search,
			/** 10431 */
			Script_Task_Trigger,
			/** 10430 */
			Scriptlet,
			/** 10426 */
			Entity_Type,
			/** 10422 */
			Agent_Script_Answer,
			/** 10421 */
			Agent_Script_Task_Category,
			/** 10420 */
			Action_Call,
			/** 10425 */
			Customization_File,
			/** 10424,10094 */
			Configuration,
			/** 10423 */
			Audit_Diagnostics_Setting,
			/** 10357 */
			Session_event,
			/** 10155 */
			Project_Approval,
			/** 10154 */
			Project,
			/** 10240 */
			Product_Inventory,
			/** 10158 */
			Project_Price_List,
			/** 10157 */
			Project_Parameter_Price_List,
			/** 10156 */
			Project_Parameter,
			/** 10153 */
			Process_Notes,
			/** 10070 */
			Post_Configuration,
			/** 10239 */
			Postal_Code,
			/** 10069 */
			Profile_Album,
			/** 10096 */
			Priority,
			/** 10353 */
			Presence,
			/** 10071 */
			Post_Rule_Configuration,
			/** 10243 */
			Purchase_Order_Product,
			/** 10242 */
			Purchase_Order_Bill,
			/** 10241 */
			Purchase_Order,
			/** 10246 */
			Purchase_Order_SubStatus,
			/** 10245 */
			Purchase_Order_Receipt_Product,
			/** 10244 */
			Purchase_Order_Receipt,
			/** 10379 */
			Provider,
			/** 10161 */
			Project_Task_Status_User,
			/** 10160 */
			Project_Task_Dependency,
			/** 10159 */
			Project_Task,
			/** 10164 */
			Project_Transaction_Category_Deprecated,
			/** 10163 */
			Project_Team_Member_Sign_Up_Deprecated_in_v30,
			/** 10162 */
			Project_Team_Member,
			/** 10233 */
			Order_Invoicing_Setup,
			/** 10232 */
			Order_Invoicing_Product,
			/** 10231 */
			Order_Invoicing_Date,
			/** 10149 */
			Project_Contract_Line_Detail,
			/** 10148 */
			Project_Contract_Line_Resource_Category,
			/** 10234 */
			Order_Invoicing_Setup_Date,
			/** 10147 */
			Opportunity_Project_Price_List,
			/** 10143 */
			Opportunity_Line_Resource_Category_Deprecated,
			/** 10352 */
			Operating_Hour,
			/** 10378 */
			Omnichannel_Sync_Config,
			/** 10146 */
			Opportunity_Line_Transaction_Classification_Deprecated,
			/** 10145 */
			Opportunity_Line_Transaction_Category_Deprecated,
			/** 10144 */
			Opportunity_Line_Detail_Deprecated,
			/** 10042 */
			Playbook_activity_attribute,
			/** 10041 */
			Playbook_activity,
			/** 10238 */
			Payment_Term,
			/** 10045 */
			Playbook_template,
			/** 10044 */
			Playbook,
			/** 10043 */
			Playbook_category,
			/** 10237 */
			Payment_Method,
			/** 10152 */
			Project_Contract_Project_Price_List,
			/** 10151 */
			Project_Contract_Line_Transaction_Classification,
			/** 10150 */
			Project_Contract_Line_Transaction_Category,
			/** 10236 */
			Payment_Detail,
			/** 10235 */
			Payment,
			/** 10095 */
			Organizational_Unit,
			/** 10370 */
			Survey_Question_Sequence,
			/** 10258 */
			RMA_Receipt_Product,
			/** 10257 */
			RMA_Receipt,
			/** 10256 */
			RMA_Product,
			/** 10179 */
			Role_Utilization,
			/** 10178 */
			Role_competency_requirement,
			/** 10259 */
			RMA_SubStatus,
			/** 10255 */
			RMA,
			/** 10177 */
			Resource_Request,
			/** 10254 */
			Resource_Pay_Type,
			/** 10176 */
			Role_Price,
			/** 10106 */
			Resource_Territory,
			/** 10105 */
			Resource_Requirement_Detail,
			/** 10104 */
			Resource_Requirement,
			/** 10356 */
			Sentiment_analysis,
			/** 10355 */
			Search_Configuration,
			/** 10108 */
			Scheduling_Parameter,
			/** 10326 */
			Session_Data,
			/** 10263 */
			Service_Task_Type,
			/** 10467 */
			Service_Configuration,
			/** 10107 */
			Schedule_Board_Setting,
			/** 10261 */
			RTV_Product,
			/** 10260 */
			RTV,
			/** 10354 */
			RoutingRequest,
			/** 10322 */
			Scenario,
			/** 10059 */
			salesinsightssettings,
			/** 10262 */
			RTV_Substatus,
			/** 10167 */
			Quote_Line_Resource_Category,
			/** 10166 */
			Quote_Line_Invoice_Schedule,
			/** 10165 */
			Quote_Line_Analytics_Breakdown,
			/** 10170 */
			Quote_Line_Transaction_Category,
			/** 10169 */
			Quote_Line_Detail,
			/** 10168 */
			Quote_Line_Milestone,
			/** 10253 */
			Quote_Invoicing_Setup,
			/** 10249 */
			Quote_Booking_Service,
			/** 10248 */
			Quote_Booking_Product,
			/** 10247 */
			Quote_Booking_Incident,
			/** 10252 */
			Quote_Invoicing_Product,
			/** 10251 */
			Quote_Booking_Setup,
			/** 10250 */
			Quote_Booking_Service_Task,
			/** 10103 */
			Requirement_Status,
			/** 10102 */
			Requirement_Resource_Preference,
			/** 10101 */
			Requirement_Resource_Category,
			/** 10175 */
			Role_Price_Markup,
			/** 10174 */
			Resource_Assignment_Detail_Deprecated_in_v20,
			/** 10173 */
			Resource_Assignment,
			/** 10100 */
			Requirement_Relationship,
			/** 10052 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 10172 */
			Quote_Project_Price_List,
			/** 10171 */
			Quote_Line_Transaction_Classification,
			/** 10099 */
			Requirement_Organization_Unit,
			/** 10098 */
			Requirement_Group,
			/** 10097 */
			Requirement_Characteristic,
			/** 3 */
			Opportunity,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 33 */
			Subscription_Synchronization_Information,
			/** 48 */
			Subscription_Sync_Entry_Outlook,
			/** 1400 */
			Sync_Attribute_Mapping_Profile,
			/** 1401 */
			Sync_Attribute_Mapping,
			/** 1190 */
			SuggestionCardTemplate,
			/** 47 */
			Subscription_Sync_Entry_Offline,
			/** 1072 */
			Subscription_Clients,
			/** 29 */
			Subscription,
			/** 129 */
			Subject,
			/** 46 */
			Subscription_Statistic_Outlook,
			/** 45 */
			Subscription_Statistic_Offline,
			/** 37 */
			Subscription_Manually_Tracked_Object,
			/** 1203 */
			Team_Profiles,
			/** 9 */
			Team,
			/** 4212 */
			Task,
			/** 2010 */
			Email_Template,
			/** 92 */
			Team_template,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 14 */
			System_User_Principal,
			/** 1030 */
			System_Form,
			/** 7000 */
			System_Application_Metadata,
			/** 9869 */
			Sync_Error,
			/** 51 */
			System_User_Manager_Map,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 8 */
			User,
			/** 4009 */
			Site,
			/** 9951 */
			Similarity_Rule,
			/** 9502 */
			SharePoint_Site,
			/** 9751 */
			SLA_Item,
			/** 9750 */
			SLA,
			/** 4709 */
			Site_Map,
			/** 9508 */
			Document_Location,
			/** 4618 */
			Service_Endpoint,
			/** 20 */
			Service_Contract_Contact,
			/** 4214 */
			Service_Activity,
			/** 9507 */
			Sharepoint_Document,
			/** 9509 */
			SharePoint_Data,
			/** 101 */
			Service_Plan,
			/** 9890 */
			SolutionHistoryData,
			/** 7104 */
			Solution_Component_Definition,
			/** 10003 */
			Solution_Component_Configuration,
			/** 1043 */
			String_Map,
			/** 1075 */
			Status_Map,
			/** 10006 */
			StageSolutionUpload,
			/** 10002 */
			Solution_Component_Attribute_Configuration,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 4216 */
			Social_Activity,
			/** 9752 */
			SLA_KPI_Instance,
			/** 7103 */
			Solution_Component,
			/** 7100 */
			Solution,
			/** 99 */
			Social_Profile,
			/** 2013 */
			Territory,
			/** 2500 */
			User_Entity_UI_Settings,
			/** 2501 */
			User_Entity_Instance_Data,
			/** 7001 */
			User_Application_Metadata,
			/** 2016 */
			User_Mapping,
			/** 1031 */
			User_Dashboard,
			/** 1086 */
			User_Fiscal_Calendar,
			/** 1056 */
			Unit_Group,
			/** 10417 */
			UII_Workflow_Step,
			/** 10418 */
			UII_Workflow_Step_Mapping,
			/** 10416 */
			UII_Workflow,
			/** 1055 */
			Unit,
			/** 4220 */
			UntrackedEmail,
			/** 2012 */
			Unresolved_Address,
			/** 10026 */
			Workflow_Binary,
			/** 4703 */
			Process,
			/** 4802 */
			Wizard_Page,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 4706 */
			Process_Log,
			/** 4704 */
			Process_Dependency,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 52 */
			User_Search_Facet,
			/** 1112 */
			User_Chart,
			/** 4230 */
			Saved_View,
			/** 4800 */
			Web_Wizard,
			/** 9333 */
			Web_Resource,
			/** 150 */
			User_Settings,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9944 */
			Topic_Model,
			/** 9946 */
			Topic_History,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 9948 */
			Text_Analytics_Topic,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 2015 */
			Theme,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 4811 */
			Time_Zone_Rule,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4810 */
			Time_Zone_Definition,
			/** 10412 */
			UII_Non_Hosted_Application,
			/** 10411 */
			Hosted_Control,
			/** 10410 */
			UII_Context,
			/** 10415 */
			UII_Session_Transfer,
			/** 10414 */
			UII_Saved_Session,
			/** 10413 */
			Option,
			/** 10409 */
			UII_Audit,
			/** 4426 */
			Transformation_Mapping,
			/** 9105 */
			Currency,
			/** 8052 */
			Trace_Regarding,
			/** 10408 */
			UII_Action,
			/** 951 */
			Translation_Process,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 4001 */
			Service,
			/** 4724 */
			Process_Stage,
			/** 4710 */
			Process_Session,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 1024 */
			Product,
			/** 4712 */
			Process_Trigger,
			/** 10025 */
			ProcessStageParameter,
			/** 1023 */
			Privilege,
			/** 8001 */
			Post_Role,
			/** 8002 */
			Post_Regarding,
			/** 8006 */
			Like,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 44 */
			Field_Sharing,
			/** 1022 */
			Price_List,
			/** 2023 */
			QueueItemCount,
			/** 2029 */
			Queue_Item,
			/** 2020 */
			Queue,
			/** 4211 */
			Quote_Close,
			/** 1084 */
			Quote,
			/** 2024 */
			QueueMemberCount,
			/** 2002 */
			Quarterly_Fiscal_Calendar,
			/** 21 */
			ProductSalesLiterature,
			/** 1026 */
			Price_List_Item,
			/** 1025 */
			Product_Association,
			/** 7102 */
			Publisher_Address,
			/** 7101 */
			Publisher,
			/** 1028 */
			Product_Relationship,
			/** 9699 */
			Organization_Insights_Metric,
			/** 1021 */
			Organization_UI,
			/** 4708 */
			Organization_Statistic,
			/** 4420 */
			Owner_Mapping,
			/** 7 */
			Owner,
			/** 9690 */
			Organization_Insights_Notification,
			/** 1019 */
			Organization,
			/** 1083 */
			Opportunity_Line,
			/** 25 */
			OpportunityCompetitors,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 9809 */
			OptionSet,
			/** 953 */
			Opportunity_Sales_Process,
			/** 50 */
			Position,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 4602 */
			Plug_in_Type,
			/** 8003 */
			Follow,
			/** 8005 */
			Comment,
			/** 8000 */
			Post,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4210 */
			Phone_Call,
			/** 9941 */
			Personal_Document_Template,
			/** 1095 */
			Partner_Application,
			/** 4605 */
			Plug_in_Assembly,
			/** 4418 */
			List_Value_Mapping,
			/** 952 */
			Phone_To_Case_Process,
			/** 1085 */
			Quote_Line,
			/** 1088 */
			Order,
			/** 1070 */
			Sales_Attachment,
			/** 1038 */
			Sales_Literature,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 32 */
			Sales_Process_Instance,
			/** 1089 */
			Order_Line,
			/** 7200 */
			RuntimeDependency,
			/** 9511 */
			Rollup_Job,
			/** 9604 */
			Rollup_Field,
			/** 1037 */
			Role_Template,
			/** 8199,10346 */
			Rule_Item,
			/** 8181 */
			Routing_Rule_Set,
			/** 9510 */
			Rollup_Properties,
			/** 4614 */
			Sdk_Message_Request_Field,
			/** 4609 */
			Sdk_Message_Request,
			/** 4616 */
			Sdk_Message_Processing_Step_Secure_Configuration,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 4611 */
			Sdk_Message_Response_Field,
			/** 4610 */
			Sdk_Message_Response,
			/** 4615 */
			Sdk_Message_Processing_Step_Image,
			/** 4606 */
			Sdk_Message,
			/** 1111 */
			System_Chart,
			/** 1039 */
			View,
			/** 4608 */
			Sdk_Message_Processing_Step,
			/** 4613 */
			Sdk_Message_Pair,
			/** 4607 */
			Sdk_Message_Filter,
			/** 9102 */
			Report_Related_Category,
			/** 9100 */
			Report,
			/** 1140 */
			Replication_Backlog,
			/** 9103 */
			Report_Visibility,
			/** 9104 */
			Report_Link,
			/** 9101 */
			Report_Related_Entity,
			/** 4501 */
			Relationship_Role_Map,
			/** 1189 */
			Document_Suggestions,
			/** 1142 */
			Rating_Value,
			/** 1144 */
			Rating_Model,
			/** 4500 */
			Relationship_Role,
			/** 4251 */
			Recurring_Appointment,
			/** 4250 */
			Recurrence_Rule,
			/** 9880 */
			Ribbon_Metadata_To_Process,
			/** 1130 */
			Ribbon_Difference,
			/** 1120 */
			Application_Ribbons,
			/** 1036 */
			Security_Role,
			/** 1113 */
			Ribbon_Tab_To_Command_Mapping,
			/** 1117 */
			Ribbon_Rule,
			/** 1115 */
			Ribbon_Context_Group,
			/** 4010 */
			Resource_Expansion,
			/** 4005 */
			Scheduling_Group,
			/** 4002 */
			Resource,
			/** 1116 */
			Ribbon_Command,
			/** 4579 */
			Ribbon_Client_Metadata,
			/** 4006 */
			Resource_Specification,
			/** 9702 */
			Entitlement_Template,
			/** 6363 */
			Entitlement_Product,
			/** 9704 */
			Entitlement_Entity_Allocation_Type_Mapping,
			/** 9800,10375 */
			Entity,
			/** 4545 */
			Entitlement_Template_Product,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 7272 */
			Entitlement_Contact,
			/** 9605 */
			Email_Server_Profile,
			/** 4299 */
			Email_Search,
			/** 4023 */
			Email_Hash,
			/** 9701 */
			Entitlement_Channel,
			/** 9700 */
			Entitlement,
			/** 9997 */
			Email_Signature,
			/** 4000 */
			FacilityEquipment,
			/** 381 */
			Environment_Variable_Value,
			/** 380 */
			Environment_Variable_Definition,
			/** 955 */
			Expired_Process,
			/** 4711 */
			Expander_Event,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 9811 */
			Entity_Relationship,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 430 */
			Entity_Analytics_Config,
			/** 4600 */
			Entity_Map,
			/** 9810 */
			Entity_Key,
			/** 432 */
			Entity_Image_Configuration,
			/** 7105 */
			Dependency,
			/** 9961 */
			DelveActionHub,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 1013 */
			Discount,
			/** 7106 */
			Dependency_Node,
			/** 7108 */
			Dependency_Feature,
			/** 4502 */
			Customer_Relationship,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9753 */
			Custom_Control,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 4503 */
			Opportunity_Relationship,
			/** 1071 */
			Address,
			/** 9754 */
			Custom_Control_Resource,
			/** 1235 */
			Property_Association,
			/** 1048 */
			Property,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 4202 */
			Email,
			/** 1049 */
			Property_Option_Set_Item,
			/** 1333 */
			Property_Instance,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 4101 */
			Display_String_Map,
			/** 4102 */
			Display_String,
			/** 1080 */
			Discount_List,
			/** 4415 */
			Duplicate_Record,
			/** 9940 */
			Document_Template,
			/** 126 */
			Indexed_Article,
			/** 3008 */
			External_Party,
			/** 1082 */
			Article_Comment,
			/** 127 */
			Article,
			/** 4705 */
			ISV_Config,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 9953 */
			Knowledge_Article,
			/** 1016 */
			Article_Template,
			/** 1091 */
			Invoice_Line,
			/** 1003 */
			Internal_Address,
			/** 9986 */
			Interaction_for_Email,
			/** 3000 */
			Integration_Status,
			/** 1090 */
			Invoice,
			/** 7107 */
			Invalid_Dependency,
			/** 4011 */
			Inter_Process_Lock,
			/** 27 */
			LeadProduct,
			/** 24 */
			LeadCompetitors,
			/** 1017 */
			Lead_Address,
			/** 2027 */
			License,
			/** 4207 */
			Letter,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 4 */
			Lead,
			/** 9930 */
			Knowledge_Base_Record,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9960 */
			Knowledge_Article_Category,
			/** 9875 */
			Language_Provisioning_State,
			/** 9957 */
			Language,
			/** 9947 */
			Knowledge_Search_Model,
			/** 54 */
			Global_Search_Configuration,
			/** 4720 */
			Flow_Session,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 8840 */
			Hierarchy_Rule,
			/** 9602 */
			Rollup_Query,
			/** 9600 */
			Goal,
			/** 30 */
			Filter_Template,
			/** 9958 */
			Feedback,
			/** 4204 */
			Fax,
			/** 9987 */
			External_Party_Item,
			/** 55 */
			FileAttachment,
			/** 1200 */
			Field_Security_Profile,
			/** 1201 */
			Field_Permission,
			/** 4411 */
			Data_Map,
			/** 4423 */
			Import_Log,
			/** 9107 */
			Import_Job,
			/** 4206 */
			Case_Resolution,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 112 */
			Case,
			/** 4412 */
			Import_Source_File,
			/** 1007 */
			Image_Descriptor,
			/** 9996 */
			HolidayWrapper,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 4428 */
			Import_Entity_Mapping,
			/** 4413 */
			Import_Data,
			/** 4410 */
			Data_Import,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 8700 */
			AppModule_Metadata,
			/** 9007 */
			App_Module_Component,
			/** 4201 */
			Appointment,
			/** 9009 */
			App_Module_Roles,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 9006 */
			Model_driven_App,
			/** 9012 */
			App_Configuration,
			/** 10012 */
			ApiSettings,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 4707 */
			Application_File,
			/** 9011 */
			App_Config_Master,
			/** 9013 */
			App_Configuration_Instance,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1150 */
			Bookable_Resource,
			/** 9936 */
			Azure_Service_Connection,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 1094 */
			Authorization_Server,
			/** 9808 */
			Attribute,
			/** 1002,1001 */
			Attachment,
			/** 4700 */
			System_Job,
			/** 4567 */
			Auditing,
			/** 4601 */
			Attribute_Map,
			/** 431 */
			Image_Attribute_Configuration,
			/** 10047 */
			admin_settings_entity,
			/** 4200 */
			Activity,
			/** 135 */
			Activity_Party,
			/** 10395 */
			Data_Mapping,
			/** 10394 */
			Agreement_Document,
			/** 10393,10196 */
			Agreement,
			/** 8040 */
			ACIViewMapper,
			/** 16 */
			AccountLeads,
			/** 1 */
			Account,
			/** 9968 */
			ActionCardUserState,
			/** 9973 */
			Action_Card_User_Settings,
			/** 9962 */
			Action_Card,
			/** 10405 */
			Transaction_Performance,
			/** 10404,10402 */
			Recipient,
			/** 10403 */
			Document,
			/** 5 */
			Note,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10406 */
			Adobe_Workflow_Activity,
			/** 10398 */
			Data_Mapping_Attachment,
			/** 10397 */
			Dynamics_CRM_to_Adobe_Sign_Template_Mapping,
			/** 10396 */
			Agreement_Template,
			/** 10401 */
			migrated_record,
			/** 10400 */
			Settings,
			/** 10399 */
			Adobe_Sign_Agreement_to_Dynamics_CRM_Mapping,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1006 */
			Competitor_Product,
			/** 1004 */
			Competitor_Address,
			/** 123 */
			Competitor,
			/** 3234 */
			Connection,
			/** 9650 */
			Process_Configuration,
			/** 26 */
			CompetitorSalesLiterature,
			/** 4215 */
			Commitment,
			/** 1141 */
			Characteristic,
			/** 1234 */
			Channel_Property_Group,
			/** 1236 */
			Channel_Property,
			/** 4417 */
			Column_Mapping,
			/** 36 */
			Client_update,
			/** 113 */
			Child_Incident_Count,
			/** 18 */
			ContactQuotes,
			/** 19 */
			ContactOrders,
			/** 22 */
			ContactLeads,
			/** 2011 */
			Contract_Template,
			/** 1011 */
			Contract_Line,
			/** 1010 */
			Contract,
			/** 17 */
			ContactInvoices,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 3231 */
			Connection_Role,
			/** 10027 */
			Connection_Reference,
			/** 2 */
			Contact,
			/** 4007 */
			Resource_Group,
			/** 372 */
			Connector,
			/** 10 */
			Business_Unit,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 4003 */
			Calendar,
			/** 132 */
			Announcement,
			/** 6 */
			Business_Unit_Map,
			/** 4405 */
			Bulk_Operation_Log,
			/** 1152 */
			Booking_Status,
			/** 1151 */
			Bookable_Resource_Group,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 4406 */
			Quick_Campaign,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 9959 */
			Category,
			/** 9983 */
			Action_Card_Type,
			/** 300 */
			Canvas_App,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 3005 */
			Channel_Access_Profile,
			/** 4401 */
			Campaign_Response,
			/** 4400 */
			Campaign,
			/** 301 */
			Callback_Registration,
			/** 4004 */
			Calendar_Rule,
			/** 4403 */
			Campaign_Item,
			/** 4404 */
			Campaign_Activity_Item,
			/** 4402 */
			Campaign_Activity,
			/** 4300 */
			Marketing_List,
			/** 10221 */
			Incident_Type_Characteristic,
			/** 10226 */
			Incident_Type_Requirement_Group,
			/** 10220 */
			Incident_Type,
			/** 10224 */
			Incident_Type_Service_Task,
			/** 10223 */
			Incident_Type_Service,
			/** 10222 */
			Incident_Type_Product,
			/** 10068 */
			icebreakersconfig,
			/** 10297 */
			Geofence,
			/** 10051 */
			Forecast_recurrence,
			/** 10050 */
			Forecast,
			/** 10028 */
			Help_Page,
			/** 10299 */
			Geofencing_Settings,
			/** 10298 */
			Geofence_Event,
			/** 10139 */
			Invoice_Line_Detail,
			/** 10138 */
			Invoice_Frequency_Detail,
			/** 10137 */
			Invoice_Frequency,
			/** 10283 */
			IoT_Device_Category,
			/** 10282 */
			IoT_Device,
			/** 10281 */
			IoT_Alert,
			/** 10230 */
			Inventory_Transfer,
			/** 10136 */
			Integration_Job_Detail,
			/** 10135 */
			Integration_Job,
			/** 10225 */
			Incident_Types_Setup,
			/** 10229 */
			Inventory_Journal,
			/** 10228 */
			Inventory_Adjustment_Product,
			/** 10227 */
			Inventory_Adjustment,
			/** 10057 */
			EntityRankingRule,
			/** 10296 */
			Entity_Configuration,
			/** 10129 */
			Expense,
			/** 10128 */
			Estimate_Line,
			/** 10127 */
			Estimate,
			/** 10331 */
			Deprecated_Workstream_Entity_Configuration,
			/** 10124 */
			Delegation,
			/** 418 */
			Dataflow,
			/** 10123 */
			Actual_Data_Export_Deprecated,
			/** 10215 */
			Entitlement_Application,
			/** 10126 */
			Pricing_Dimension_Field_Name,
			/** 10125 */
			Pricing_Dimension,
			/** 10134 */
			Find_Work_Event_Deprecated_in_v30,
			/** 10219 */
			Field_Service_System_Job,
			/** 10218 */
			Field_Service_SLA_Configuration,
			/** 10049 */
			Forecast_definition,
			/** 10048 */
			Forecast_Configuration,
			/** 10058 */
			flowcardtype,
			/** 10217 */
			Field_Service_Setting,
			/** 10388 */
			Facebook_Engagement_Context,
			/** 10131 */
			Expense_Receipt,
			/** 10130 */
			Expense_Category,
			/** 10216 */
			Field_Service_Price_List_Item,
			/** 10133 */
			Field_Computation,
			/** 10132 */
			Fact,
			/** 10284 */
			IoT_Device_Command,
			/** 10382 */
			Conversation_Characteristic,
			/** 10338 */
			Conversation,
			/** 10390 */
			Facebook_Page,
			/** 10341 */
			Conversation_Sentiment,
			/** 10340 */
			Live_Work_Item_Participant_Deprecated,
			/** 10339 */
			Context_item_value,
			/** 10389 */
			Facebook_Application,
			/** 10349 */
			Geo_Location_Provider,
			/** 10067 */
			Notes_analysis_Config,
			/** 10083 */
			msdyn_msteamssettingsv2,
			/** 10337 */
			Channel_State_Configuration,
			/** 10336 */
			Channel_Configuration,
			/** 10335 */
			Bot_Channel_Registration,
			/** 10013 */
			OData_v4_Data_Source,
			/** 10348 */
			System_Message,
			/** 10376 */
			Session_Sentiment,
			/** 10351 */
			Omnichannel_Queue_Deprecated,
			/** 10350 */
			Omnichannel_Personalization,
			/** 10377 */
			Omnichannel_Configuration,
			/** 10383 */
			Session_Characteristic,
			/** 10344 */
			Provisioning_State,
			/** 10343 */
			Localization_Data,
			/** 10342 */
			Context_variable,
			/** 10347 */
			Session,
			/** 10345 */
			Omnichannel_Request,
			/** 10292 */
			IoT_Settings,
			/** 10291 */
			IoT_Provider_Instance,
			/** 10290 */
			IoT_Provider,
			/** 10141 */
			Journal_Line,
			/** 10140 */
			Journal,
			/** 10471 */
			IoT_Alert_to_Case_Process,
			/** 10289 */
			IoT_Property_Definition,
			/** 10287 */
			IoT_Device_Property,
			/** 10286 */
			IoT_Device_Data_History,
			/** 10285 */
			IoT_Device_Command_Definition,
			/** 10470 */
			IoT_Field_Mapping,
			/** 10469 */
			IoT_Device_Visualization_Configuration,
			/** 10288 */
			IoT_Device_Registration_History,
			/** 10369 */
			Localized_Survey_Question_Deprecated,
			/** 10333 */
			Work_Stream,
			/** 10332 */
			Ongoing_conversation,
			/** 10082 */
			msdyn_msteamssetting,
			/** 10142 */
			Result_Cache,
			/** 10334 */
			Masking_Rule,
			/** 10368 */
			Chat_Widget_Location,
			/** 10324 */
			KPI_Event_Data,
			/** 10011 */
			Knowledge_Article_Template,
			/** 10010 */
			Knowledge_Article_Image,
			/** 10367 */
			Live_Chat_Context,
			/** 10366 */
			Chat_Widget,
			/** 10325 */
			KPI_Event_Definition,
			/** 10036 */
			Database_Version,
			/** 10017 */
			AI_Builder_File,
			/** 10016 */
			AI_Builder_Datasets_Container,
			/** 10466 */
			AI_Builder_Dataset_Record,
			/** 10019 */
			AI_Form_Processing_Document,
			/** 402 */
			AI_Configuration,
			/** 10018 */
			AI_Builder_File_Attached_Data,
			/** 10015 */
			AI_Builder_Dataset_File,
			/** 10204 */
			Agreement_Invoice_Product,
			/** 10203 */
			Agreement_Invoice_Date,
			/** 10202 */
			Agreement_Booking_Setup,
			/** 10014 */
			AI_Builder_Dataset,
			/** 10206 */
			Agreement_Substatus,
			/** 10205 */
			Agreement_Invoice_Setup,
			/** 10032 */
			Analysis_Result_Detail,
			/** 10031 */
			Analysis_Result,
			/** 10030 */
			Analysis_Job,
			/** 10475 */
			Dynamics_Customer_Service_Analytics,
			/** 10473 */
			Data_Analytics_Admin_Settings,
			/** 10328 */
			Power_BI_Configuration,
			/** 10029 */
			Analysis_Component,
			/** 10021 */
			AI_Object_Detection_Label,
			/** 10020 */
			AI_Object_Detection_Image,
			/** 401 */
			AI_Model,
			/** 400 */
			AI_Template,
			/** 10023 */
			AI_Object_Detection_Image_Mapping,
			/** 10022 */
			AI_Object_Detection_Bounding_Box,
			/** 4231 */
			Metadata_Difference,
			/** 9812 */
			Managed_Property,
			/** 9106 */
			Mail_Merge_Template,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9603 */
			Goal_Metric,
			/** 9608 */
			Mailbox_Auto_Tracking_Folder,
			/** 4419 */
			Lookup_Mapping,
			/** 9201 */
			LocalConfigStore,
			/** 4301 */
			Marketing_List_Member,
			/** 9609 */
			Mailbox_Tracking_Category,
			/** 9607 */
			Mailbox_Statistics,
			/** 9606 */
			Mailbox,
			/** 10198 */
			Agreement_Booking_Incident,
			/** 10197 */
			Agreement_Booking_Date,
			/** 10201 */
			Agreement_Booking_Service_Task,
			/** 10200 */
			Agreement_Booking_Service,
			/** 10199 */
			Agreement_Booking_Product,
			/** 10085 */
			Actual,
			/** 10195 */
			Three_Dimensional_Model,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 10056 */
			Action_Card_Role_Setting,
			/** 10055 */
			Action_Card_Regarding,
			/** 10114 */
			Account_Project_Price_List,
			/** 10115 */
			Project_Service_Approval,
			/** 10005 */
			Component_Layer_Data_Source,
			/** 10004 */
			Component_Layer,
			/** 10308 */
			Session_Templates,
			/** 10306 */
			Notification_Template,
			/** 10305 */
			Notification_Field,
			/** 10081 */
			Microsoft_Teams_Graph_resource_Entity,
			/** 10364 */
			Survey_Response_Value,
			/** 10363 */
			Survey_Response,
			/** 10362 */
			Survey_Answer_Option,
			/** 10093 */
			Client_Extension,
			/** 10304 */
			Channel_Provider,
			/** 10365 */
			Chat_Widget_Language,
			/** 10323 */
			Conversation_Data,
			/** 10374 */
			Conversation_Action_Locale,
			/** 10373 */
			Conversation_Action,
			/** 10474 */
			Data_Analytics_Report,
			/** 10214 */
			Customer_Asset_Category,
			/** 10213 */
			Customer_Asset,
			/** 10122 */
			Project_Contract_Line_Milestone,
			/** 10312 */
			Application_Type,
			/** 10310 */
			Parameter,
			/** 10309 */
			Application_Tab_Template,
			/** 10121 */
			Project_Contract_Line_Invoice_Schedule,
			/** 10120 */
			Contact_Price_List,
			/** 10307 */
			App_Parameter_Definition,
			/** 10090 */
			Booking_Rule,
			/** 10207 */
			Booking_Journal,
			/** 10089 */
			Booking_Change,
			/** 10209 */
			Purchase_Order_Business_Process,
			/** 10208 */
			Booking_Timestamp,
			/** 10091 */
			Booking_Setup_Metadata,
			/** 10088 */
			Booking_Alert_Status,
			/** 10061 */
			Auto_Capture_Settings,
			/** 10060 */
			Auto_Capture_Rule,
			/** 10361 */
			Chat_Authentication_Settings,
			/** 10087 */
			Booking_Alert,
			/** 10086 */
			Bookable_Resource_Association,
			/** 10116 */
			Batch_Job,
			/** 10330 */
			Entity_Routing_Context,
			/** 10329 */
			Quick_reply,
			/** 10040 */
			Playbook_Callable_Context,
			/** 10119 */
			Competency_Requirement_Deprecated,
			/** 10372 */
			Channel_Capability,
			/** 10321 */
			channel,
			/** 10092 */
			Business_Closure,
			/** 10210 */
			Case_to_Work_Order_Business_Process,
			/** 10117 */
			Project_Stages,
			/** 10295 */
			CFS_IoT_Alert_Process_Flow,
			/** 10118 */
			Invoice_Process,
			/** 10212 */
			Work_Order_Business_Process,
			/** 10211 */
			Agreement_Business_Process
		}
		enum statecode {
			/** 0 */
			Draft,
			/** 1 */
			Published
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 2 */
			Published
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}