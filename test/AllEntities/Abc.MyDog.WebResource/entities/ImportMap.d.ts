﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormImportMap_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type additional information to describe the data map, such as the intended use or data source. */
			Description: DevKit.Controls.String;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a descriptive name for the data map. */
			Name: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormImportMap_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form ImportMap_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ImportMap_Information */
		Body: MyDog.FormImportMap_Information.Body;
	}
	class ImportMapApi {
		/**
		* DynamicsCrm.DevKit ImportMapApi
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
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the data map, such as the intended use or data source. */
		Description: DevKit.WebApi.StringValue;
		/** Choose whether a data file can contain data for one or more record types. */
		EntitiesPerFile: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the data map. */
		ImportMapId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the ImortMap. */
		ImportMapIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Select the type of data map to distinguish out-of-the-box data maps from custom maps. */
		ImportMapType: DevKit.WebApi.OptionSetValue;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the data map is valid for use with data import. */
		IsValidForImport: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether this data map was created by the Data Migration Manager. */
		IsWizardCreated: DevKit.WebApi.BooleanValue;
		/** Customizations XML */
		MapCustomizations: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the data map. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Business unit that owns the data map. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the data map. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the data map. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Type the name of the migration source that this data map is used for. */
		Source: DevKit.WebApi.StringValue;
		/** Select the migration source type that this data map is used for. */
		SourceType: DevKit.WebApi.OptionSetValue;
		/** Source user value for source Microsoft Dynamics 365 user link. */
		SourceUserIdentifierForSourceCRMUserLink: DevKit.WebApi.StringValue;
		/** Column in the source file that uniquely identifies a user. */
		SourceUserIdentifierForSourceDataSourceUserLink: DevKit.WebApi.StringValue;
		/** Shows whether the data map is active or inactive. Inactive data maps are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the data map's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Select the name of the Microsoft Dynamics 365 record type that this data map is defined for. */
		TargetEntity: DevKit.WebApi.OptionSetValueReadonly;
		/** Microsoft Dynamics 365 user. */
		TargetUserIdentifierForSourceCRMUserLink: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ImportMap {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum EntitiesPerFile {
			/** 2 */
			Multiple_Entities_Per_File,
			/** 1 */
			Single_Entity_Per_File
		}
		enum ImportMapType {
			/** 3 */
			In_Process,
			/** 2 */
			Out_of_Box,
			/** 1 */
			Standard
		}
		enum SourceType {
			/** 5 */
			Generic_Map_for_Contact_and_Account,
			/** 3 */
			Map_For_SalesForcecom_Contact_and_Account_Report_Export,
			/** 1 */
			Map_For_SalesForcecom_Full_Data_Export,
			/** 2 */
			Map_For_SalesForcecom_Report_Export,
			/** 4 */
			Microsoft_Office_Outlook_2010_with_Business_Contact_Manager
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum TargetEntity {
			/** 1 */
			Account,
			/** 10264 */
			Account_Project_Price_List,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 10579 */
			Action_Call,
			/** 10578 */
			Action_Call_Workflow,
			/** 9962 */
			Action_Card,
			/** 10197 */
			Action_Card_Regarding,
			/** 10198 */
			Action_Card_Role_Setting,
			/** 9983 */
			Action_Card_Type,
			/** 9973 */
			Action_Card_User_Settings,
			/** 10144 */
			Action_Input_Parameter,
			/** 10145 */
			Action_Output_Parameter,
			/** 9968 */
			ActionCardUserState,
			/** 4200 */
			Activity,
			/** 10639 */
			Activity_File_Attachment,
			/** 10087 */
			Activity_monitor,
			/** 135 */
			Activity_Party,
			/** 10233 */
			Actual,
			/** 10273 */
			Actual_Data_Export_Deprecated,
			/** 10153 */
			Adaptive_Card_Configuration,
			/** 1071 */
			Address,
			/** 10184 */
			admin_settings_entity,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10141 */
			Agent_script,
			/** 10581 */
			Agent_Script_Answer,
			/** 10142 */
			Agent_script_step,
			/** 10594 */
			Agent_Script_Task,
			/** 10580 */
			Agent_Script_Task_Category,
			/** 10503 */
			Agent_Status_history,
			/** 10353 */
			Agreement,
			/** 10354 */
			Agreement_Booking_Date,
			/** 10355 */
			Agreement_Booking_Incident,
			/** 10356 */
			Agreement_Booking_Product,
			/** 10357 */
			Agreement_Booking_Service,
			/** 10358 */
			Agreement_Booking_Service_Task,
			/** 10359 */
			Agreement_Booking_Setup,
			/** 10368 */
			Agreement_Business_Process,
			/** 10360 */
			Agreement_Invoice_Date,
			/** 10361 */
			Agreement_Invoice_Product,
			/** 10362 */
			Agreement_Invoice_Setup,
			/** 10363 */
			Agreement_Substatus,
			/** 10063 */
			AI_Builder_Dataset,
			/** 10064 */
			AI_Builder_Dataset_File,
			/** 10065 */
			AI_Builder_Dataset_Record,
			/** 10066 */
			AI_Builder_Datasets_Container,
			/** 10067 */
			AI_Builder_File,
			/** 10068 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 10069 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10072 */
			AI_Object_Detection_Bounding_Box,
			/** 10070 */
			AI_Object_Detection_Image,
			/** 10073 */
			AI_Object_Detection_Image_Mapping,
			/** 10071 */
			AI_Object_Detection_Label,
			/** 400 */
			AI_Template,
			/** 10075 */
			Analysis_Component,
			/** 10076 */
			Analysis_Job,
			/** 10077 */
			Analysis_Result,
			/** 10078 */
			Analysis_Result_Detail,
			/** 10169 */
			Analytics_and_insights,
			/** 132 */
			Announcement,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 9011 */
			App_Config_Master,
			/** 9012 */
			App_Configuration,
			/** 9013 */
			App_Configuration_Instance,
			/** 9007 */
			App_Module_Component,
			/** 9009 */
			App_Module_Roles,
			/** 10454 */
			App_Parameter_Definition_Deprecated,
			/** 10123 */
			App_profile,
			/** 10124 */
			Application_Extension,
			/** 4707 */
			Application_File,
			/** 1120 */
			Application_Ribbons,
			/** 10125 */
			Application_Tab_Template,
			/** 10456 */
			Application_Tab_Template_Deprecated,
			/** 10459 */
			Application_Type_Deprecated,
			/** 10017 */
			ApplicationUser,
			/** 8700 */
			AppModule_Metadata,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 4201 */
			Appointment,
			/** 127 */
			Article,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 10093 */
			Asset_Category_Template_Association,
			/** 10438 */
			Asset_Suggestion,
			/** 10094 */
			Asset_Template_Association,
			/** 10530 */
			Attach_Skill,
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 9808 */
			Attribute,
			/** 4601 */
			Attribute_Map,
			/** 10520 */
			Audio_File,
			/** 10582 */
			Audit_Diagnostics_Setting,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 10202 */
			Auto_Capture_Rule,
			/** 10203 */
			Auto_Capture_Settings,
			/** 10088 */
			Available_Times,
			/** 10089 */
			Available_Times_Data_Source,
			/** 9936 */
			Azure_Service_Connection,
			/** 10266 */
			Batch_Job,
			/** 1150 */
			Bookable_Resource,
			/** 10234 */
			Bookable_Resource_Association,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 10235 */
			Booking_Alert,
			/** 10236 */
			Booking_Alert_Status,
			/** 10237 */
			Booking_Change,
			/** 10364 */
			Booking_Journal,
			/** 10238 */
			Booking_Rule,
			/** 10239 */
			Booking_Setup_Metadata,
			/** 1152 */
			Booking_Status,
			/** 10365 */
			Booking_Timestamp,
			/** 10031 */
			BotContent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4405 */
			Bulk_Operation_Log,
			/** 10240 */
			Business_Closure,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 10 */
			Business_Unit,
			/** 6 */
			Business_Unit_Map,
			/** 4003 */
			Calendar,
			/** 4004 */
			Calendar_Rule,
			/** 301 */
			Callback_Registration,
			/** 4400 */
			Campaign,
			/** 4402 */
			Campaign_Activity,
			/** 4404 */
			Campaign_Activity_Item,
			/** 4403 */
			Campaign_Item,
			/** 4401 */
			Campaign_Response,
			/** 300 */
			Canvas_App,
			/** 10025 */
			CanvasApp_Extended_Metadata,
			/** 10014 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10015 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 112 */
			Case,
			/** 10156 */
			Case_Enrichment,
			/** 4206 */
			Case_Resolution,
			/** 10157 */
			Case_Suggestion,
			/** 10158 */
			Case_Suggestion_Request_Payload,
			/** 10159 */
			Case_Suggestions_Data_Souce,
			/** 10367 */
			Case_to_Work_Order_Business_Process,
			/** 10171 */
			Case_Topic,
			/** 10174 */
			Case_topic_Incident_mapping,
			/** 10172 */
			Case_Topic_Setting,
			/** 10173 */
			Case_Topic_Summary,
			/** 10048 */
			Catalog,
			/** 10049 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 10440 */
			CFS_IoT_Alert_Process_Flow,
			/** 10468 */
			channel,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 10504 */
			Channel_Capability,
			/** 10478 */
			Channel_Configuration,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10135 */
			Channel_Provider_10135,
			/** 10451 */
			Channel_Provider_10451,
			/** 10479 */
			Channel_State_Configuration,
			/** 1141 */
			Characteristic,
			/** 10532 */
			Chat_Authentication_Settings,
			/** 10537 */
			Chat_Widget,
			/** 10536 */
			Chat_Widget_Languagedeprecated,
			/** 10539 */
			Chat_Widget_Location,
			/** 10033 */
			Chatbot,
			/** 10034 */
			Chatbot_subcomponent,
			/** 113 */
			Child_Incident_Count,
			/** 10241 */
			Client_Extension,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 8005 */
			Comment,
			/** 4215 */
			Commitment,
			/** 10269 */
			Competency_Requirement_Deprecated,
			/** 123 */
			Competitor,
			/** 1004 */
			Competitor_Address,
			/** 1006 */
			Competitor_Product,
			/** 26 */
			CompetitorSalesLiterature,
			/** 10005 */
			Component_Layer,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 10242 */
			Configuration_10242,
			/** 10583 */
			Configuration_10583,
			/** 3234 */
			Connection,
			/** 10029 */
			Connection_Reference,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 2 */
			Contact,
			/** 10270 */
			Contact_Price_List,
			/** 17 */
			ContactInvoices,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 10481 */
			Context_item_value,
			/** 10484 */
			Context_variable,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 10346 */
			Contract_Line_Detail_Performance,
			/** 10347 */
			Contract_Performance,
			/** 2011 */
			Contract_Template,
			/** 10480 */
			Conversation,
			/** 10505 */
			Conversation_Action,
			/** 10506 */
			Conversation_Action_Locale,
			/** 10527 */
			Conversation_Characteristic,
			/** 10185 */
			Conversation_Data_Deprecated,
			/** 10483 */
			Conversation_Sentiment,
			/** 10545 */
			conversationsuggestionrequestpayload,
			/** 10032 */
			ConversationTranscript,
			/** 10591 */
			CTI_Search,
			/** 9105 */
			Currency,
			/** 10051 */
			Custom_API,
			/** 10052 */
			Custom_API_Request_Parameter,
			/** 10053 */
			Custom_API_Response_Property,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 10477 */
			Custom_messaging_account,
			/** 10553 */
			Custom_messaging_channel,
			/** 10551 */
			Custom_Messaging_Engagement_Context,
			/** 10095 */
			Customer_Asset,
			/** 10096 */
			Customer_Asset_Attachment,
			/** 10097 */
			Customer_Asset_Category,
			/** 4502 */
			Customer_Relationship,
			/** 10175 */
			Customer_service_historical_analytics_preview,
			/** 10216 */
			Customer_Voice_alert,
			/** 10217 */
			Customer_Voice_alert_rule,
			/** 10636 */
			Customer_Voice_file_response,
			/** 10219 */
			Customer_Voice_localized_survey_email_template,
			/** 10220 */
			Customer_Voice_project,
			/** 10223 */
			Customer_Voice_satisfaction_metric,
			/** 10224 */
			Customer_Voice_survey,
			/** 10218 */
			Customer_Voice_survey_email_template,
			/** 10225 */
			Customer_Voice_survey_invite,
			/** 10221 */
			Customer_Voice_survey_question,
			/** 10222 */
			Customer_Voice_survey_question_response,
			/** 10226 */
			Customer_Voice_survey_reminder,
			/** 10227 */
			Customer_Voice_survey_response,
			/** 10228 */
			Customer_Voice_unsubscribed_recipient,
			/** 10584 */
			Customization_File,
			/** 10168 */
			Data_Analytics_Report,
			/** 4410 */
			Data_Import,
			/** 10056 */
			Data_Lake_Folder,
			/** 10057 */
			Data_Lake_Folder_Permission,
			/** 10058 */
			Data_Lake_Workspace,
			/** 10059 */
			Data_Lake_Workspace_Permission,
			/** 4411 */
			Data_Map,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 10083 */
			Database_Version,
			/** 418 */
			Dataflow,
			/** 10274 */
			Delegation,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10167 */
			Deprecated_Data_Analytics_Admin_Settings,
			/** 10170 */
			Deprecated_Dynamics_Customer_Service_Analytics,
			/** 10473 */
			Deprecated_Workstream_Entity_Configuration,
			/** 1013 */
			Discount,
			/** 1080 */
			Discount_List,
			/** 4102 */
			Display_String,
			/** 4101 */
			Display_String_Map,
			/** 9508 */
			Document_Location,
			/** 1189 */
			Document_Suggestions,
			/** 9940 */
			Document_Template,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 4415 */
			Duplicate_Record,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 4202 */
			Email,
			/** 4023 */
			Email_Hash,
			/** 4299 */
			Email_Search,
			/** 9605 */
			Email_Server_Profile,
			/** 9997 */
			Email_Signature,
			/** 2010 */
			Email_Template,
			/** 9700 */
			Entitlement,
			/** 10370 */
			Entitlement_Application,
			/** 9701 */
			Entitlement_Channel,
			/** 7272 */
			Entitlement_Contact,
			/** 9704 */
			Entitlement_Entity_Allocation_Type_Mapping,
			/** 6363 */
			Entitlement_Product,
			/** 9702 */
			Entitlement_Template,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 4545 */
			Entitlement_Template_Product,
			/** 10507 */
			Entity_10507,
			/** 9800 */
			Entity_9800,
			/** 430 */
			Entity_Analytics_Config,
			/** 10443 */
			Entity_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 9810 */
			Entity_Key,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 10472 */
			Entity_Routing_Context,
			/** 10586 */
			Entity_Search,
			/** 10585 */
			Entity_Type,
			/** 10199 */
			EntityRankingRule,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10277 */
			Estimate,
			/** 10278 */
			Estimate_Line,
			/** 10599 */
			Event,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 10279 */
			Expense,
			/** 10280 */
			Expense_Category,
			/** 10281 */
			Expense_Receipt,
			/** 955 */
			Expired_Process,
			/** 10010 */
			ExportSolutionUpload,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 10549 */
			Facebook_Application,
			/** 10548 */
			Facebook_Engagement_Context,
			/** 10550 */
			Facebook_Page,
			/** 4000 */
			FacilityEquipment,
			/** 10282 */
			Fact,
			/** 4204 */
			Fax,
			/** 9958 */
			Feedback,
			/** 10283 */
			Field_Computation,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 10371 */
			Field_Service_Price_List_Item,
			/** 10372 */
			Field_Service_Setting,
			/** 10373 */
			Field_Service_SLA_Configuration,
			/** 10374 */
			Field_Service_System_Job,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 10215 */
			Filter,
			/** 30 */
			Filter_Template,
			/** 10284 */
			Find_Work_Event_Deprecated_in_v30,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10640 */
			Flow_Machine,
			/** 10641 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 10200 */
			flowcardtype,
			/** 8003 */
			Follow,
			/** 10192 */
			Forecast,
			/** 10190 */
			Forecast_Configuration,
			/** 10191 */
			Forecast_definition,
			/** 10193 */
			Forecast_recurrence,
			/** 10587 */
			Form,
			/** 10258 */
			Fulfillment_Preference,
			/** 10098 */
			Functional_Location,
			/** 10491 */
			Geo_Location_Provider,
			/** 10444 */
			Geofence,
			/** 10445 */
			Geofence_Event,
			/** 10446 */
			Geofencing_Settings,
			/** 10441 */
			Geolocation_Settings,
			/** 10442 */
			Geolocation_Tracking,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9603 */
			Goal_Metric,
			/** 10030 */
			Help_Page,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
			/** 10570 */
			Hosted_Control,
			/** 10210 */
			icebreakersconfig,
			/** 431 */
			Image_Attribute_Configuration,
			/** 1007 */
			Image_Descriptor,
			/** 4413 */
			Import_Data,
			/** 4428 */
			Import_Entity_Mapping,
			/** 9107 */
			Import_Job,
			/** 4423 */
			Import_Log,
			/** 4412 */
			Import_Source_File,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 10375 */
			Incident_Type,
			/** 10376 */
			Incident_Type_Characteristic,
			/** 10377 */
			Incident_Type_Product,
			/** 10381 */
			Incident_Type_Requirement_Group,
			/** 10378 */
			Incident_Type_Service,
			/** 10379 */
			Incident_Type_Service_Task,
			/** 10436 */
			Incident_Type_Suggestion_Result,
			/** 10437 */
			Incident_Type_Suggestion_Run_History,
			/** 10380 */
			Incident_Types_Setup,
			/** 126 */
			Indexed_Article,
			/** 10349 */
			Inspection,
			/** 10350 */
			Inspection_Attachment,
			/** 10352 */
			Inspection_Response,
			/** 10351 */
			Inspection_Version,
			/** 10285 */
			Integration_Job,
			/** 10286 */
			Integration_Job_Detail,
			/** 3000 */
			Integration_Status,
			/** 4011 */
			Inter_Process_Lock,
			/** 9986 */
			Interaction_for_Email,
			/** 1003 */
			Internal_Address,
			/** 10050 */
			Internal_Catalog_Assignment,
			/** 7107 */
			Invalid_Dependency,
			/** 10382 */
			Inventory_Adjustment,
			/** 10383 */
			Inventory_Adjustment_Product,
			/** 10384 */
			Inventory_Journal,
			/** 10385 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10287 */
			Invoice_Frequency,
			/** 10288 */
			Invoice_Frequency_Detail,
			/** 1091 */
			Invoice_Line,
			/** 10289 */
			Invoice_Line_Detail,
			/** 10268 */
			Invoice_Process,
			/** 10105 */
			IoT_Alert,
			/** 10121 */
			IoT_Alert_to_Case_Process,
			/** 10106 */
			IoT_Device,
			/** 10107 */
			IoT_Device_Category,
			/** 10108 */
			IoT_Device_Command,
			/** 10109 */
			IoT_Device_Command_Definition,
			/** 10110 */
			IoT_Device_Data_History,
			/** 10111 */
			IoT_Device_Property,
			/** 10112 */
			IoT_Device_Registration_History,
			/** 10113 */
			IoT_Device_Visualization_Configuration,
			/** 10114 */
			IoT_Field_Mapping,
			/** 10115 */
			IoT_Property_Definition,
			/** 10116 */
			IoT_Provider,
			/** 10117 */
			IoT_Provider_Instance,
			/** 10118 */
			IoT_Settings,
			/** 4705 */
			ISV_Config,
			/** 10290 */
			Journal,
			/** 10291 */
			Journal_Line,
			/** 10160 */
			KB_Enrichment,
			/** 10632 */
			KeyVaultReference,
			/** 9953 */
			Knowledge_Article,
			/** 9960 */
			Knowledge_Article_Category,
			/** 10044 */
			Knowledge_Article_Image,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 10161 */
			Knowledge_Article_Suggestion,
			/** 10162 */
			Knowledge_Article_Suggestion_Data_Source,
			/** 10047 */
			Knowledge_Article_Template,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 10041 */
			Knowledge_Federated_Article,
			/** 10042 */
			Knowledge_FederatedArticle_Incident,
			/** 10045 */
			Knowledge_Interaction_Insight,
			/** 10176 */
			Knowledge_search_analytics_preview,
			/** 10046 */
			Knowledge_Search_Insight,
			/** 9947 */
			Knowledge_Search_Model,
			/** 10186 */
			KPI_Event_Data,
			/** 10187 */
			KPI_Event_Definition,
			/** 10509 */
			Language_10509,
			/** 9957 */
			Language_9957,
			/** 10588 */
			Language_Module,
			/** 9875 */
			Language_Provisioning_State,
			/** 4 */
			Lead,
			/** 1017 */
			Lead_Address,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 24 */
			LeadCompetitors,
			/** 27 */
			LeadProduct,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 8006 */
			Like,
			/** 10554 */
			LINE_account,
			/** 10552 */
			LINE_Engagement_Context,
			/** 10082 */
			List_Operation,
			/** 4418 */
			List_Value_Mapping,
			/** 10538 */
			Live_Chat_Context,
			/** 10508 */
			Live_work_item_event,
			/** 10482 */
			Live_Work_Item_Participant_Deprecated,
			/** 9201 */
			LocalConfigStore,
			/** 10485 */
			Localization,
			/** 10540 */
			Localized_Survey_Question_Deprecated,
			/** 4419 */
			Lookup_Mapping,
			/** 10146 */
			Macro_Action_Template,
			/** 10148 */
			Macro_Connector,
			/** 10149 */
			Macro_Run_History,
			/** 10147 */
			Macro_Solution_Configuration,
			/** 9106 */
			Mail_Merge_Template,
			/** 9606 */
			Mailbox,
			/** 9608 */
			Mailbox_Auto_Tracking_Folder,
			/** 9607 */
			Mailbox_Statistics,
			/** 9609 */
			Mailbox_Tracking_Category,
			/** 9812 */
			Managed_Property,
			/** 10633 */
			ManagedIdentity,
			/** 4300 */
			Marketing_List,
			/** 4301 */
			Marketing_List_Member,
			/** 10447 */
			MarketingSiteMap,
			/** 10476 */
			Masking_Rule,
			/** 10490 */
			Message,
			/** 4231 */
			Metadata_Difference,
			/** 10563 */
			Microsoft_Teams_account,
			/** 10232 */
			Microsoft_Teams_Collaboration_entity,
			/** 10229 */
			Microsoft_Teams_Graph_resource_Entity,
			/** 10092 */
			Migration_tracker,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 9006 */
			Model_driven_App,
			/** 10022 */
			Model_Driven_App_Component_Node,
			/** 10021 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10020 */
			Model_Driven_App_Element,
			/** 10023 */
			Model_Driven_App_Setting,
			/** 10629 */
			Model_Driven_App_User_Setting,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10230 */
			msdyn_msteamssetting,
			/** 10231 */
			msdyn_msteamssettingsv2,
			/** 10194 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 9900 */
			Navigation_Setting,
			/** 950 */
			New_Process,
			/** 10061 */
			NonRelational_Data_Source,
			/** 5 */
			Note,
			/** 10209 */
			Notes_analysis_Config,
			/** 10634 */
			Notification_10634,
			/** 4110 */
			Notification_4110,
			/** 10126 */
			Notification_Field,
			/** 10452 */
			Notification_Field_Deprecated,
			/** 10127 */
			Notification_Template,
			/** 10453 */
			Notification_Template_Deprecated,
			/** 10026 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 10515 */
			Omnichannel_Configuration,
			/** 10492 */
			Omnichannel_Personalization,
			/** 10493 */
			Omnichannel_Queue_Deprecated,
			/** 10487 */
			Omnichannel_Request,
			/** 10516 */
			Omnichannel_Sync_Config,
			/** 10474 */
			Ongoing_conversation_Deprecated,
			/** 10494 */
			Operating_Hour,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 1083 */
			Opportunity_Line,
			/** 10294 */
			Opportunity_Line_Detail_Deprecated,
			/** 10293 */
			Opportunity_Line_Resource_Category_Deprecated,
			/** 10295 */
			Opportunity_Line_Transaction_Category_Deprecated,
			/** 10296 */
			Opportunity_Line_Transaction_Classification_Deprecated,
			/** 10297 */
			Opportunity_Project_Price_List,
			/** 4503 */
			Opportunity_Relationship,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 10572 */
			Option,
			/** 9809 */
			OptionSet,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 10386 */
			Order_Invoicing_Date,
			/** 10387 */
			Order_Invoicing_Product,
			/** 10388 */
			Order_Invoicing_Setup,
			/** 10389 */
			Order_Invoicing_Setup_Date,
			/** 1089 */
			Order_Line,
			/** 1019 */
			Organization,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 10626 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 10243 */
			Organizational_Unit,
			/** 10627 */
			OrganizationDataSyncSubscription,
			/** 10628 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10565 */
			Outbound_Configuration,
			/** 10566 */
			Outbound_message,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10007 */
			Package,
			/** 10138 */
			Pane_tab_configuration,
			/** 10139 */
			Pane_tool_configuration,
			/** 10150 */
			Parameter_definition,
			/** 10457 */
			Parameter_Deprecated,
			/** 1095 */
			Partner_Application,
			/** 10390 */
			Payment,
			/** 10391 */
			Payment_Detail,
			/** 10392 */
			Payment_Method,
			/** 10393 */
			Payment_Term,
			/** 10038 */
			PDF_Setting,
			/** 9941 */
			Personal_Document_Template,
			/** 10517 */
			Personal_quick_reply,
			/** 10518 */
			Personal_sound_setting,
			/** 4210 */
			Phone_Call,
			/** 952 */
			Phone_To_Case_Process,
			/** 10181 */
			Playbook,
			/** 10178 */
			Playbook_activity,
			/** 10179 */
			Playbook_activity_attribute,
			/** 10177 */
			Playbook_Callable_Context,
			/** 10180 */
			Playbook_category,
			/** 10182 */
			Playbook_template,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 50 */
			Position,
			/** 8000 */
			Post,
			/** 10212 */
			Post_Configuration,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 10213 */
			Post_Rule_Configuration,
			/** 10394 */
			Postal_Code,
			/** 10470 */
			Power_BI_Configuration,
			/** 10495 */
			Presence,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10275 */
			Pricing_Dimension,
			/** 10276 */
			Pricing_Dimension_Field_Name,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 10244 */
			Priority,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 10439 */
			Problematic_Asset_Feedback,
			/** 4703 */
			Process,
			/** 9650 */
			Process_Configuration,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 10303 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 4712 */
			Process_Trigger,
			/** 10027 */
			ProcessStageParameter,
			/** 1024 */
			Product,
			/** 1025 */
			Product_Association,
			/** 10395 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10137 */
			Productivity_pane_configuration,
			/** 21 */
			ProductSalesLiterature,
			/** 10211 */
			Profile_Album,
			/** 10304 */
			Project,
			/** 10305 */
			Project_Approval,
			/** 10299 */
			Project_Contract_Line_Detail,
			/** 10271 */
			Project_Contract_Line_Invoice_Schedule,
			/** 10272 */
			Project_Contract_Line_Milestone,
			/** 10298 */
			Project_Contract_Line_Resource_Category,
			/** 10300 */
			Project_Contract_Line_Transaction_Category,
			/** 10301 */
			Project_Contract_Line_Transaction_Classification,
			/** 10302 */
			Project_Contract_Project_Price_List,
			/** 10306 */
			Project_Parameter,
			/** 10307 */
			Project_Parameter_Price_List,
			/** 10308 */
			Project_Price_List,
			/** 10265 */
			Project_Service_Approval,
			/** 10267 */
			Project_Stages,
			/** 10309 */
			Project_Task,
			/** 10310 */
			Project_Task_Dependency,
			/** 10311 */
			Project_Task_Status_User,
			/** 10312 */
			Project_Team_Member,
			/** 10313 */
			Project_Team_Member_Sign_Up_Deprecated_in_v30,
			/** 10314 */
			Project_Transaction_Category_Deprecated,
			/** 1048 */
			Property,
			/** 10100 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10099 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10101 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10102 */
			Property_Template_Association,
			/** 10519 */
			Provider,
			/** 10486 */
			Provisioning_State,
			/** 10013 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 10396 */
			Purchase_Order,
			/** 10397 */
			Purchase_Order_Bill,
			/** 10366 */
			Purchase_Order_Business_Process,
			/** 10398 */
			Purchase_Order_Product,
			/** 10399 */
			Purchase_Order_Receipt,
			/** 10400 */
			Purchase_Order_Receipt_Product,
			/** 10401 */
			Purchase_Order_SubStatus,
			/** 2002 */
			Quarterly_Fiscal_Calendar,
			/** 2020 */
			Queue,
			/** 2029 */
			Queue_Item,
			/** 2023 */
			QueueItemCount,
			/** 2024 */
			QueueMemberCount,
			/** 4406 */
			Quick_Campaign,
			/** 10471 */
			Quick_reply,
			/** 1084 */
			Quote,
			/** 10402 */
			Quote_Booking_Incident,
			/** 10403 */
			Quote_Booking_Product,
			/** 10404 */
			Quote_Booking_Service,
			/** 10405 */
			Quote_Booking_Service_Task,
			/** 10406 */
			Quote_Booking_Setup,
			/** 4211 */
			Quote_Close,
			/** 10407 */
			Quote_Invoicing_Product,
			/** 10408 */
			Quote_Invoicing_Setup,
			/** 1085 */
			Quote_Line,
			/** 10315 */
			Quote_Line_Analytics_Breakdown,
			/** 10319 */
			Quote_Line_Detail,
			/** 10316 */
			Quote_Line_Invoice_Schedule,
			/** 10318 */
			Quote_Line_Milestone,
			/** 10317 */
			Quote_Line_Resource_Category,
			/** 10320 */
			Quote_Line_Transaction_Category,
			/** 10321 */
			Quote_Line_Transaction_Classification,
			/** 10322 */
			Quote_Project_Price_List,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 4250 */
			Recurrence_Rule,
			/** 4251 */
			Recurring_Appointment,
			/** 9814 */
			Relationship_Attribute,
			/** 9813 */
			Relationship_Entity,
			/** 4500 */
			Relationship_Role,
			/** 4501 */
			Relationship_Role_Map,
			/** 1140 */
			Replication_Backlog,
			/** 9100 */
			Report,
			/** 9104 */
			Report_Link,
			/** 9102 */
			Report_Related_Category,
			/** 9101 */
			Report_Related_Entity,
			/** 9103 */
			Report_Visibility,
			/** 10245 */
			Requirement_Characteristic,
			/** 10262 */
			Requirement_Dependency,
			/** 10246 */
			Requirement_Group,
			/** 10247 */
			Requirement_Organization_Unit,
			/** 10248 */
			Requirement_Relationship,
			/** 10249 */
			Requirement_Resource_Category,
			/** 10250 */
			Requirement_Resource_Preference,
			/** 10251 */
			Requirement_Status,
			/** 4002 */
			Resource,
			/** 10323 */
			Resource_Assignment,
			/** 10324 */
			Resource_Assignment_Detail_Deprecated_in_v20,
			/** 4010 */
			Resource_Expansion,
			/** 4007 */
			Resource_Group,
			/** 10090 */
			resource_group_data_source,
			/** 10409 */
			Resource_Pay_Type,
			/** 10327 */
			Resource_Request,
			/** 10252 */
			Resource_Requirement,
			/** 10253 */
			Resource_Requirement_Detail,
			/** 10430 */
			Resource_Restriction_Deprecated,
			/** 4006 */
			Resource_Specification,
			/** 10254 */
			Resource_Territory,
			/** 10292 */
			Result_Cache,
			/** 90001 */
			RevokeInheritedAccessRecordsTracker,
			/** 4579 */
			Ribbon_Client_Metadata,
			/** 1116 */
			Ribbon_Command,
			/** 1115 */
			Ribbon_Context_Group,
			/** 1130 */
			Ribbon_Difference,
			/** 9880 */
			Ribbon_Metadata_To_Process,
			/** 1117 */
			Ribbon_Rule,
			/** 1113 */
			Ribbon_Tab_To_Command_Mapping,
			/** 10060 */
			Rich_Text_Attachment,
			/** 10410 */
			RMA,
			/** 10411 */
			RMA_Product,
			/** 10412 */
			RMA_Receipt,
			/** 10413 */
			RMA_Receipt_Product,
			/** 10414 */
			RMA_SubStatus,
			/** 10328 */
			Role_competency_requirement,
			/** 10326 */
			Role_Price,
			/** 10325 */
			Role_Price_Markup,
			/** 1037 */
			Role_Template,
			/** 10329 */
			Role_Utilization,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 9602 */
			Rollup_Query,
			/** 8181 */
			Routing_Rule_Set,
			/** 10496 */
			RoutingRequest,
			/** 10415 */
			RTV,
			/** 10416 */
			RTV_Product,
			/** 10417 */
			RTV_Substatus,
			/** 10488 */
			Rule_Item_10488,
			/** 8199 */
			Rule_Item_8199,
			/** 7200 */
			RuntimeDependency,
			/** 1070 */
			Sales_Attachment,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 10201 */
			salesinsightssettings,
			/** 10448 */
			SalesSiteMap,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
			/** 10469 */
			Scenario,
			/** 10255 */
			Schedule_Board_Setting,
			/** 10263 */
			Scheduling_Feature_Flag,
			/** 4005 */
			Scheduling_Group,
			/** 10256 */
			Scheduling_Parameter,
			/** 10590 */
			Script_Task_Trigger,
			/** 10589 */
			Scriptlet,
			/** 4606 */
			Sdk_Message,
			/** 4607 */
			Sdk_Message_Filter,
			/** 4613 */
			Sdk_Message_Pair,
			/** 4608 */
			Sdk_Message_Processing_Step,
			/** 4615 */
			Sdk_Message_Processing_Step_Image,
			/** 4616 */
			Sdk_Message_Processing_Step_Secure_Configuration,
			/** 4609 */
			Sdk_Message_Request,
			/** 4614 */
			Sdk_Message_Request_Field,
			/** 4610 */
			Sdk_Message_Response,
			/** 4611 */
			Sdk_Message_Response_Field,
			/** 10497 */
			Search_Configuration,
			/** 10043 */
			Search_provider,
			/** 10062 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 10523 */
			Self_service,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10498 */
			Sentiment_analysis,
			/** 10510 */
			Sentiment_daily_topic,
			/** 10511 */
			Sentiment_daily_topic_keyword,
			/** 10512 */
			Sentiment_daily_topic_trending,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 10039 */
			Service_Configuration,
			/** 20 */
			Service_Contract_Contact,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 10418 */
			Service_Task_Type,
			/** 10449 */
			ServicesSiteMap,
			/** 10489 */
			Session,
			/** 10528 */
			Session_Characteristic,
			/** 10188 */
			Session_Data_Deprecated,
			/** 10499 */
			Session_event,
			/** 10592 */
			Session_Information,
			/** 10500 */
			Session_participant,
			/** 10189 */
			Session_Participant_Data_Deprecated,
			/** 10513 */
			Session_Sentiment,
			/** 10128 */
			Session_Template,
			/** 10455 */
			Session_Templates_Deprecated,
			/** 10593 */
			Session_Transfer,
			/** 10024 */
			Setting_Definition,
			/** 10450 */
			SettingsSiteMap,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 10419 */
			Ship_Via,
			/** 10196 */
			SI_Key_Value_Config,
			/** 10195 */
			siconfig,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 4709 */
			Site_Map,
			/** 10529 */
			Skill_Attachment_Rule,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 10040 */
			SLA_KPI,
			/** 9752 */
			SLA_KPI_Instance,
			/** 10154 */
			Smartassist_configuration,
			/** 10546 */
			SMS_Engagement_Context,
			/** 10547 */
			SMS_Number,
			/** 4216 */
			Social_Activity,
			/** 99 */
			Social_Profile,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 7100 */
			Solution,
			/** 7103 */
			Solution_Component,
			/** 10002 */
			Solution_Component_Attribute_Configuration,
			/** 10003 */
			Solution_Component_Configuration,
			/** 10012 */
			Solution_Component_Data_Source,
			/** 7104 */
			Solution_Component_Definition,
			/** 10004 */
			Solution_Component_Relationship_Configuration,
			/** 10011 */
			Solution_Component_Summary,
			/** 10079 */
			Solution_Health_Rule,
			/** 10080 */
			Solution_Health_Rule_Argument,
			/** 10081 */
			Solution_Health_Rule_Set,
			/** 10000 */
			Solution_History,
			/** 10001 */
			Solution_History_Data_Source,
			/** 9890 */
			SolutionHistoryData,
			/** 10521 */
			Sound_notification_setting,
			/** 10009 */
			StageSolutionUpload,
			/** 1075 */
			Status_Map,
			/** 1043 */
			String_Map,
			/** 129 */
			Subject,
			/** 29 */
			Subscription,
			/** 1072 */
			Subscription_Clients,
			/** 37 */
			Subscription_Manually_Tracked_Object,
			/** 45 */
			Subscription_Statistic_Offline,
			/** 46 */
			Subscription_Statistic_Outlook,
			/** 47 */
			Subscription_Sync_Entry_Offline,
			/** 48 */
			Subscription_Sync_Entry_Outlook,
			/** 33 */
			Subscription_Synchronization_Information,
			/** 10205 */
			Suggested_Activity,
			/** 10206 */
			Suggested_Activity_Data_Source,
			/** 10207 */
			Suggested_Contact,
			/** 10208 */
			Suggested_contacts_data_source,
			/** 10163 */
			Suggestion_Interaction,
			/** 10164 */
			Suggestion_request_payload,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10165 */
			Suggestions_Model_Summary,
			/** 10166 */
			Suggestions_Setting,
			/** 10533 */
			Survey_Answer_Option,
			/** 10542 */
			Survey_Question,
			/** 10541 */
			Survey_Question_Sequence,
			/** 10534 */
			Survey_Response,
			/** 10535 */
			Survey_Response_Value,
			/** 1401 */
			Sync_Attribute_Mapping,
			/** 1400 */
			Sync_Attribute_Mapping_Profile,
			/** 9869 */
			Sync_Error,
			/** 7000 */
			System_Application_Metadata,
			/** 1111 */
			System_Chart,
			/** 1030 */
			System_Form,
			/** 4700 */
			System_Job,
			/** 51 */
			System_User_Manager_Map,
			/** 14 */
			System_User_Principal,
			/** 10257 */
			System_User_Scheduler_Setting,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10514 */
			Tag,
			/** 4212 */
			Task,
			/** 10420 */
			Tax_Code,
			/** 10421 */
			Tax_Code_Detail,
			/** 9 */
			Team,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 10630 */
			TeamMobileOfflineProfileMembership,
			/** 10635 */
			Teams_Dialer_Admin_settings,
			/** 10564 */
			Teams_Engagement_Context,
			/** 10103 */
			Template_For_Properties,
			/** 10129 */
			Template_Parameter,
			/** 10458 */
			Template_Tag_Deprecated,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 9948 */
			Text_Analytics_Topic,
			/** 2015 */
			Theme,
			/** 10348 */
			Three_Dimensional_Model,
			/** 10330 */
			Time_Entry,
			/** 10259 */
			Time_Group_Detail,
			/** 10331 */
			Time_Off_Calendar,
			/** 10422 */
			Time_Off_Request,
			/** 10345 */
			Time_Source,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 10596 */
			Toolbar,
			/** 10595 */
			Toolbar_Button,
			/** 9946 */
			Topic_History,
			/** 9944 */
			Topic_Model,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 8052 */
			Trace_Regarding,
			/** 10597 */
			Trace_Source_Setting,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 10332 */
			Transaction_Category,
			/** 10333 */
			Transaction_Category_Classification,
			/** 10334 */
			Transaction_Category_Hierarchy_Element,
			/** 10335 */
			Transaction_Category_Price,
			/** 10336 */
			Transaction_Connection,
			/** 10260 */
			Transaction_Origin,
			/** 10337 */
			Transaction_Type,
			/** 10501 */
			Transcript,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 10555 */
			Twitter_account,
			/** 10560 */
			Twitter_Engagement_Context,
			/** 10556 */
			Twitter_handle,
			/** 10567 */
			UII_Action,
			/** 10568 */
			UII_Audit,
			/** 10569 */
			UII_Context,
			/** 10571 */
			UII_Non_Hosted_Application,
			/** 10573 */
			UII_Saved_Session,
			/** 10574 */
			UII_Session_Transfer,
			/** 10575 */
			UII_Workflow,
			/** 10576 */
			UII_Workflow_Step,
			/** 10577 */
			UII_Workflow_Step_Mapping,
			/** 10598 */
			Unified_Interface_Settings,
			/** 10423 */
			Unique_Number,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 2012 */
			Unresolved_Address,
			/** 10204 */
			UntrackedAppointment,
			/** 4220 */
			UntrackedEmail,
			/** 10084 */
			Upgrade_Run,
			/** 10085 */
			Upgrade_Step,
			/** 10086 */
			Upgrade_Version,
			/** 8 */
			User,
			/** 7001 */
			User_Application_Metadata,
			/** 1112 */
			User_Chart,
			/** 1031 */
			User_Dashboard,
			/** 2501 */
			User_Entity_Instance_Data,
			/** 2500 */
			User_Entity_UI_Settings,
			/** 1086 */
			User_Fiscal_Calendar,
			/** 2016 */
			User_Mapping,
			/** 52 */
			User_Search_Facet,
			/** 10600 */
			User_Setting,
			/** 10522 */
			User_settings_10522,
			/** 150 */
			User_settings_150,
			/** 10338 */
			User_Work_History,
			/** 10631 */
			UserMobileOfflineProfileMembership,
			/** 1039 */
			View,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 10091 */
			Virtual_Resource_Group_Resource,
			/** 10214 */
			Wall_View,
			/** 10424 */
			Warehouse,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10557 */
			WeChat_account,
			/** 10561 */
			WeChat_Engagement_Context,
			/** 10558 */
			WhatsApp_account,
			/** 10562 */
			WhatsApp_Engagement_Context,
			/** 10559 */
			WhatsApp_number,
			/** 10601 */
			Window_Navigation_Rule,
			/** 4802 */
			Wizard_Page,
			/** 10425 */
			Work_Order,
			/** 10369 */
			Work_Order_Business_Process,
			/** 10426 */
			Work_Order_Characteristic_Deprecated,
			/** 10427 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 10428 */
			Work_Order_Incident,
			/** 10429 */
			Work_Order_Product,
			/** 10431 */
			Work_Order_Service,
			/** 10432 */
			Work_Order_Service_Task,
			/** 10433 */
			Work_Order_Substatus,
			/** 10434 */
			Work_Order_Type,
			/** 10475 */
			Work_Stream,
			/** 10261 */
			Work_template,
			/** 10028 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}