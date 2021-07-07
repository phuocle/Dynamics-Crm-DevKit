//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_playbookactivity_Information {
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Controls.Section;
		}
		interface tab_documents_sharepoint extends DevKit.Controls.ITab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface Tabs {
			documents_sharepoint: tab_documents_sharepoint;
		}
		interface Body {
			Tab: Tabs;
			/** The logical name of the entity. */
			msdyn_activityLogicalName: DevKit.Controls.String;
			/** This field is for internal use only. */
			msdyn_playbookactivity_json: DevKit.Controls.String;
			/** Type a short description about the objective or primary topic of the activity. */
			msdyn_subject: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			DocumentsSubGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_playbookactivity_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_playbookactivity_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_playbookactivity_Information */
		Body: DevKit.Formmsdyn_playbookactivity_Information.Body;
		/** The Grid of form msdyn_playbookactivity_Information */
		Grid: DevKit.Formmsdyn_playbookactivity_Information.Grid;
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
			/** 1 */
			Account,
			/** 10323 */
			Account_Project_Price_List,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 10686 */
			Action_Call,
			/** 10685 */
			Action_Call_Workflow,
			/** 9962 */
			Action_Card,
			/** 10219 */
			Action_Card_Regarding,
			/** 10220 */
			Action_Card_Role_Setting,
			/** 9983 */
			Action_Card_Type,
			/** 9973 */
			Action_Card_User_Settings,
			/** 10165 */
			Action_Input_Parameter,
			/** 10166 */
			Action_Output_Parameter,
			/** 9968 */
			ActionCardUserState,
			/** 4200 */
			Activity,
			/** 10050 */
			Activity_File_Attachment,
			/** 10107 */
			Activity_monitor,
			/** 135 */
			Activity_Party,
			/** 10292 */
			Actual,
			/** 10332 */
			Actual_Data_Export_Deprecated,
			/** 10174 */
			Adaptive_Card_Configuration,
			/** 1071 */
			Address,
			/** 10205 */
			admin_settings_entity,
			/** 10587 */
			AdminAppState,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10162 */
			Agent_script,
			/** 10688 */
			Agent_Script_Answer,
			/** 10163 */
			Agent_script_step,
			/** 10701 */
			Agent_Script_Task,
			/** 10687 */
			Agent_Script_Task_Category,
			/** 10588 */
			Agent_Status_history,
			/** 10413 */
			Agreement,
			/** 10414 */
			Agreement_Booking_Date,
			/** 10415 */
			Agreement_Booking_Incident,
			/** 10416 */
			Agreement_Booking_Product,
			/** 10417 */
			Agreement_Booking_Service,
			/** 10418 */
			Agreement_Booking_Service_Task,
			/** 10419 */
			Agreement_Booking_Setup,
			/** 10428 */
			Agreement_Business_Process,
			/** 10420 */
			Agreement_Invoice_Date,
			/** 10421 */
			Agreement_Invoice_Product,
			/** 10422 */
			Agreement_Invoice_Setup,
			/** 10423 */
			Agreement_Substatus,
			/** 10087 */
			AI_Builder_Dataset,
			/** 10088 */
			AI_Builder_Dataset_File,
			/** 10089 */
			AI_Builder_Dataset_Record,
			/** 10090 */
			AI_Builder_Datasets_Container,
			/** 10091 */
			AI_Builder_File,
			/** 10092 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 10081 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10084 */
			AI_Object_Detection_Bounding_Box,
			/** 10082 */
			AI_Object_Detection_Image,
			/** 10085 */
			AI_Object_Detection_Image_Mapping,
			/** 10083 */
			AI_Object_Detection_Label,
			/** 400 */
			AI_Template,
			/** 10095 */
			Analysis_Component,
			/** 10096 */
			Analysis_Job,
			/** 10097 */
			Analysis_Result,
			/** 10098 */
			Analysis_Result_Detail,
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
			/** 10526 */
			App_Parameter_Definition_Deprecated,
			/** 10144 */
			App_profile,
			/** 10145 */
			Application_Extension,
			/** 4707 */
			Application_File,
			/** 1120 */
			Application_Ribbons,
			/** 10146 */
			Application_Tab_Template,
			/** 10528 */
			Application_Tab_Template_Deprecated,
			/** 10531 */
			Application_Type_Deprecated,
			/** 10021 */
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
			/** 10114 */
			Asset_Category_Template_Association,
			/** 10506 */
			Asset_Suggestion,
			/** 10115 */
			Asset_Template_Association,
			/** 10549 */
			Assignment_Configuration,
			/** 10550 */
			Assignment_Configuration_Step,
			/** 10621 */
			Attach_Skill,
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 9808 */
			Attribute,
			/** 4601 */
			Attribute_Map,
			/** 10606 */
			Audio_File,
			/** 10689 */
			Audit_Diagnostics_Setting,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 10224 */
			Auto_Capture_Rule,
			/** 10225 */
			Auto_Capture_Settings,
			/** 10109 */
			Available_Times,
			/** 10110 */
			Available_Times_Data_Source,
			/** 9936 */
			Azure_Service_Connection,
			/** 10325 */
			Batch_Job,
			/** 1150 */
			Bookable_Resource,
			/** 10293 */
			Bookable_Resource_Association,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 10500 */
			Bookable_Resource_Booking_Quick_Note,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 10615 */
			Bookable_Resource_Capacity_Profile,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 10294 */
			Booking_Alert,
			/** 10295 */
			Booking_Alert_Status,
			/** 10296 */
			Booking_Change,
			/** 10424 */
			Booking_Journal,
			/** 10297 */
			Booking_Rule,
			/** 10298 */
			Booking_Setup_Metadata,
			/** 1152 */
			Booking_Status,
			/** 10425 */
			Booking_Timestamp,
			/** 10040 */
			BotContent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4405 */
			Bulk_Operation_Log,
			/** 10299 */
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
			/** 10031 */
			CanvasApp_Extended_Metadata,
			/** 10551 */
			Capacity_Profile,
			/** 10018 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10019 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 112 */
			Case,
			/** 10177 */
			Case_Enrichment,
			/** 4206 */
			Case_Resolution,
			/** 10178 */
			Case_Suggestion,
			/** 10179 */
			Case_Suggestion_Request_Payload,
			/** 10180 */
			Case_Suggestions_Data_Souce,
			/** 10427 */
			Case_to_Work_Order_Business_Process,
			/** 10192 */
			Case_Topic,
			/** 10195 */
			Case_topic_Incident_mapping,
			/** 10193 */
			Case_Topic_Setting,
			/** 10194 */
			Case_Topic_Summary,
			/** 10066 */
			Catalog,
			/** 10067 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 10512 */
			CFS_IoT_Alert_Process_Flow,
			/** 10540 */
			channel,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 10589 */
			Channel_Capability,
			/** 10562 */
			Channel_Configuration,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10156 */
			Channel_Provider_10156,
			/** 10523 */
			Channel_Provider_10523,
			/** 10563 */
			Channel_State_Configuration,
			/** 1141 */
			Characteristic,
			/** 10624 */
			Characteristic_mapping,
			/** 10628 */
			Chat_Authentication_Settings,
			/** 10633 */
			Chat_Widget,
			/** 10632 */
			Chat_Widget_Languagedeprecated,
			/** 10635 */
			Chat_Widget_Location,
			/** 10042 */
			Chatbot,
			/** 10043 */
			Chatbot_subcomponent,
			/** 113 */
			Child_Incident_Count,
			/** 10300 */
			Client_Extension,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 8005 */
			Comment,
			/** 4215 */
			Commitment,
			/** 10649 */
			Communication_Provider_Setting,
			/** 10650 */
			Communication_Provider_Setting_Entry,
			/** 10328 */
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
			/** 10301 */
			Configuration_10301,
			/** 10690 */
			Configuration_10690,
			/** 3234 */
			Connection,
			/** 10037 */
			Connection_Reference,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 2 */
			Contact,
			/** 10329 */
			Contact_Price_List,
			/** 17 */
			ContactInvoices,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 10565 */
			Context_item_value,
			/** 10568 */
			Context_variable,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 10405 */
			Contract_Line_Detail_Performance,
			/** 10406 */
			Contract_Performance,
			/** 2011 */
			Contract_Template,
			/** 10564 */
			Conversation,
			/** 10590 */
			Conversation_Action,
			/** 10591 */
			Conversation_Action_Locale,
			/** 10617 */
			Conversation_Capacity_profile,
			/** 10618 */
			Conversation_Characteristic,
			/** 10206 */
			Conversation_Data_Deprecated,
			/** 10567 */
			Conversation_Sentiment,
			/** 10643 */
			Conversation_Topic,
			/** 10646 */
			Conversation_topic_Conversation_mapping,
			/** 10644 */
			Conversation_Topic_Setting,
			/** 10645 */
			Conversation_Topic_Summary,
			/** 10642 */
			ConversationInsight,
			/** 10641 */
			conversationsuggestionrequestpayload,
			/** 10041 */
			ConversationTranscript,
			/** 10698 */
			CTI_Search,
			/** 9105 */
			Currency,
			/** 10069 */
			Custom_API,
			/** 10070 */
			Custom_API_Request_Parameter,
			/** 10071 */
			Custom_API_Response_Property,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 10561 */
			Custom_messaging_account,
			/** 10660 */
			Custom_messaging_channel,
			/** 10658 */
			Custom_Messaging_Engagement_Context,
			/** 10116 */
			Customer_Asset,
			/** 10117 */
			Customer_Asset_Attachment,
			/** 10118 */
			Customer_Asset_Category,
			/** 4502 */
			Customer_Relationship,
			/** 10196 */
			Customer_Service_historical_analytics,
			/** 10238 */
			Customer_Voice_alert,
			/** 10239 */
			Customer_Voice_alert_rule,
			/** 10241 */
			Customer_Voice_file_response,
			/** 10242 */
			Customer_Voice_localized_survey_email_template,
			/** 10243 */
			Customer_Voice_project,
			/** 10246 */
			Customer_Voice_satisfaction_metric,
			/** 10247 */
			Customer_Voice_survey,
			/** 10240 */
			Customer_Voice_survey_email_template,
			/** 10248 */
			Customer_Voice_survey_invite,
			/** 10244 */
			Customer_Voice_survey_question,
			/** 10245 */
			Customer_Voice_survey_question_response,
			/** 10249 */
			Customer_Voice_survey_reminder,
			/** 10250 */
			Customer_Voice_survey_response,
			/** 10251 */
			Customer_Voice_unsubscribed_recipient,
			/** 10691 */
			Customization_File,
			/** 10188 */
			Data_Analytics_Admin_Settings_Deprecated,
			/** 10189 */
			Data_Analytics_Report,
			/** 4410 */
			Data_Import,
			/** 10014 */
			Data_Lake_Folder,
			/** 10015 */
			Data_Lake_Folder_Permission,
			/** 10016 */
			Data_Lake_Workspace,
			/** 10017 */
			Data_Lake_Workspace_Permission,
			/** 4411 */
			Data_Map,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 10103 */
			Database_Version,
			/** 418 */
			Dataflow,
			/** 10542 */
			Decision_contract,
			/** 10543 */
			Decision_rule_set,
			/** 10333 */
			Delegation,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10191 */
			Deprecated_Dynamics_Customer_Service_Analytics,
			/** 10557 */
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
			/** 10430 */
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
			/** 10592 */
			Entity_10592,
			/** 9800 */
			Entity_9800,
			/** 430 */
			Entity_Analytics_Config,
			/** 10515 */
			Entity_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 9810 */
			Entity_Key,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 10556 */
			Entity_Routing_Context,
			/** 10693 */
			Entity_Search,
			/** 10692 */
			Entity_Type,
			/** 10221 */
			EntityRankingRule,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10336 */
			Estimate,
			/** 10337 */
			Estimate_Line,
			/** 10706 */
			Event,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 10338 */
			Expense,
			/** 10339 */
			Expense_Category,
			/** 10340 */
			Expense_Receipt,
			/** 955 */
			Expired_Process,
			/** 10010 */
			ExportSolutionUpload,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 10656 */
			Facebook_Application,
			/** 10655 */
			Facebook_Engagement_Context,
			/** 10657 */
			Facebook_Page,
			/** 4000 */
			FacilityEquipment,
			/** 10341 */
			Fact,
			/** 4204 */
			Fax,
			/** 9958 */
			Feedback,
			/** 10342 */
			Field_Computation,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 10431 */
			Field_Service_Price_List_Item,
			/** 10432 */
			Field_Service_Setting,
			/** 10433 */
			Field_Service_SLA_Configuration,
			/** 10434 */
			Field_Service_System_Job,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 10237 */
			Filter,
			/** 30 */
			Filter_Template,
			/** 10343 */
			Find_Work_Event_Deprecated_in_v30,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10033 */
			Flow_Machine,
			/** 10034 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 10222 */
			flowcardtype,
			/** 8003 */
			Follow,
			/** 10213 */
			Forecast,
			/** 10211 */
			Forecast_Configuration,
			/** 10212 */
			Forecast_definition,
			/** 10214 */
			Forecast_recurrence,
			/** 10694 */
			Form,
			/** 10317 */
			Fulfillment_Preference,
			/** 10119 */
			Functional_Location,
			/** 10215 */
			GDPRData,
			/** 10575 */
			Geo_Location_Provider,
			/** 10516 */
			Geofence,
			/** 10517 */
			Geofence_Event,
			/** 10518 */
			Geofencing_Settings,
			/** 10513 */
			Geolocation_Settings,
			/** 10514 */
			Geolocation_Tracking,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9603 */
			Goal_Metric,
			/** 10038 */
			Help_Page,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
			/** 10677 */
			Hosted_Control,
			/** 10232 */
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
			/** 10435 */
			Incident_Type,
			/** 10436 */
			Incident_Type_Characteristic,
			/** 10437 */
			Incident_Type_Product,
			/** 10441 */
			Incident_Type_Requirement_Group,
			/** 10505 */
			Incident_Type_Resolution,
			/** 10438 */
			Incident_Type_Service,
			/** 10439 */
			Incident_Type_Service_Task,
			/** 10503 */
			Incident_Type_Suggestion_Result,
			/** 10504 */
			Incident_Type_Suggestion_Run_History,
			/** 10440 */
			Incident_Types_Setup,
			/** 126 */
			Indexed_Article,
			/** 10190 */
			Insights,
			/** 10411 */
			Inspection,
			/** 10409 */
			Inspection_Attachment,
			/** 10412 */
			Inspection_Response,
			/** 10408 */
			Inspection_Template,
			/** 10410 */
			Inspection_Template_Version,
			/** 10344 */
			Integration_Job,
			/** 10345 */
			Integration_Job_Detail,
			/** 3000 */
			Integration_Status,
			/** 4011 */
			Inter_Process_Lock,
			/** 9986 */
			Interaction_for_Email,
			/** 1003 */
			Internal_Address,
			/** 10068 */
			Internal_Catalog_Assignment,
			/** 7107 */
			Invalid_Dependency,
			/** 10442 */
			Inventory_Adjustment,
			/** 10443 */
			Inventory_Adjustment_Product,
			/** 10444 */
			Inventory_Journal,
			/** 10445 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10346 */
			Invoice_Frequency,
			/** 10347 */
			Invoice_Frequency_Detail,
			/** 1091 */
			Invoice_Line,
			/** 10348 */
			Invoice_Line_Detail,
			/** 10327 */
			Invoice_Process,
			/** 10126 */
			IoT_Alert,
			/** 10142 */
			IoT_Alert_to_Case_Process,
			/** 10127 */
			IoT_Device,
			/** 10128 */
			IoT_Device_Category,
			/** 10129 */
			IoT_Device_Command,
			/** 10130 */
			IoT_Device_Command_Definition,
			/** 10131 */
			IoT_Device_Data_History,
			/** 10132 */
			IoT_Device_Property,
			/** 10133 */
			IoT_Device_Registration_History,
			/** 10134 */
			IoT_Device_Visualization_Configuration,
			/** 10135 */
			IoT_Field_Mapping,
			/** 10136 */
			IoT_Property_Definition,
			/** 10137 */
			IoT_Provider,
			/** 10138 */
			IoT_Provider_Instance,
			/** 10139 */
			IoT_Settings,
			/** 4705 */
			ISV_Config,
			/** 10349 */
			Journal,
			/** 10350 */
			Journal_Line,
			/** 10181 */
			KB_Enrichment,
			/** 10064 */
			KeyVaultReference,
			/** 9953 */
			Knowledge_Article,
			/** 9960 */
			Knowledge_Article_Category,
			/** 10056 */
			Knowledge_Article_Image,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 10059 */
			Knowledge_article_language_setting,
			/** 10182 */
			Knowledge_Article_Suggestion,
			/** 10183 */
			Knowledge_Article_Suggestion_Data_Source,
			/** 10061 */
			Knowledge_Article_Template,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 10053 */
			Knowledge_Federated_Article,
			/** 10054 */
			Knowledge_FederatedArticle_Incident,
			/** 10057 */
			Knowledge_Interaction_Insight,
			/** 10060 */
			Knowledge_personalization,
			/** 10197 */
			Knowledge_search_analytics,
			/** 10063 */
			Knowledge_search_filter,
			/** 10058 */
			Knowledge_Search_Insight,
			/** 9947 */
			Knowledge_Search_Model,
			/** 10062 */
			Knowledge_search_personal_filter_config,
			/** 10207 */
			KPI_Event_Data,
			/** 10208 */
			KPI_Event_Definition,
			/** 10594 */
			Language_10594,
			/** 9957 */
			Language_9957,
			/** 10695 */
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
			/** 10661 */
			LINE_account,
			/** 10659 */
			LINE_Engagement_Context,
			/** 10102 */
			List_Operation,
			/** 4418 */
			List_Value_Mapping,
			/** 10634 */
			Live_Chat_Context,
			/** 10593 */
			Live_work_item_event,
			/** 10566 */
			Live_Work_Item_Participant_Deprecated,
			/** 9201 */
			LocalConfigStore,
			/** 10569 */
			Localization,
			/** 10636 */
			Localized_Survey_Question_Deprecated,
			/** 4419 */
			Lookup_Mapping,
			/** 10167 */
			Macro_Action_Template,
			/** 10169 */
			Macro_Connector,
			/** 10170 */
			Macro_Run_History,
			/** 10168 */
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
			/** 10065 */
			ManagedIdentity,
			/** 10733 */
			Marketing_Form_Display_Attributes,
			/** 4300 */
			Marketing_List,
			/** 4301 */
			Marketing_List_Member,
			/** 10519 */
			MarketingSiteMap,
			/** 10560 */
			Masking_Rule,
			/** 10547 */
			Master_Entity_Routing_Configuration,
			/** 10574 */
			Message,
			/** 4231 */
			Metadata_Difference,
			/** 10670 */
			Microsoft_Teams_account,
			/** 10255 */
			Microsoft_Teams_Collaboration_entity,
			/** 10252 */
			Microsoft_Teams_Graph_resource_Entity,
			/** 10113 */
			Migration_tracker,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 9006 */
			Model_driven_App,
			/** 10026 */
			Model_Driven_App_Component_Node,
			/** 10025 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10024 */
			Model_Driven_App_Element,
			/** 10027 */
			Model_Driven_App_Setting,
			/** 10028 */
			Model_Driven_App_User_Setting,
			/** 10622 */
			Model_training_details,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10253 */
			msdyn_msteamssetting,
			/** 10254 */
			msdyn_msteamssettingsv2,
			/** 10216 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 9900 */
			Navigation_Setting,
			/** 950 */
			New_Process,
			/** 10079 */
			NonRelational_Data_Source,
			/** 5 */
			Note,
			/** 10231 */
			Notes_analysis_Config,
			/** 10077 */
			Notification_10077,
			/** 4110 */
			Notification_4110,
			/** 10147 */
			Notification_Field,
			/** 10524 */
			Notification_Field_Deprecated,
			/** 10148 */
			Notification_Template,
			/** 10525 */
			Notification_Template_Deprecated,
			/** 10032 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 10600 */
			Omnichannel_Configuration,
			/** 10647 */
			Omnichannel_historical_analytics,
			/** 10576 */
			Omnichannel_Personalization,
			/** 10577 */
			Omnichannel_Queue_Deprecated,
			/** 10571 */
			Omnichannel_Request,
			/** 10601 */
			Omnichannel_Sync_Config,
			/** 10648 */
			Omnichannel_voice_historical_analytics_preview,
			/** 10558 */
			Ongoing_conversation_Deprecated,
			/** 10578 */
			Operating_Hour,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 1083 */
			Opportunity_Line,
			/** 10353 */
			Opportunity_Line_Detail_Deprecated,
			/** 10352 */
			Opportunity_Line_Resource_Category_Deprecated,
			/** 10354 */
			Opportunity_Line_Transaction_Category_Deprecated,
			/** 10355 */
			Opportunity_Line_Transaction_Classification_Deprecated,
			/** 10356 */
			Opportunity_Project_Price_List,
			/** 4503 */
			Opportunity_Relationship,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 10679 */
			Option,
			/** 9809 */
			OptionSet,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 10446 */
			Order_Invoicing_Date,
			/** 10447 */
			Order_Invoicing_Product,
			/** 10448 */
			Order_Invoicing_Setup,
			/** 10449 */
			Order_Invoicing_Setup_Date,
			/** 1089 */
			Order_Line,
			/** 1019 */
			Organization,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 10029 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 10302 */
			Organizational_Unit,
			/** 10075 */
			OrganizationDataSyncSubscription,
			/** 10076 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10672 */
			Outbound_Configuration,
			/** 10673 */
			Outbound_message,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10007 */
			Package,
			/** 10159 */
			Pane_tab_configuration,
			/** 10160 */
			Pane_tool_configuration,
			/** 10171 */
			Parameter_definition,
			/** 10529 */
			Parameter_Deprecated,
			/** 1095 */
			Partner_Application,
			/** 10450 */
			Payment,
			/** 10451 */
			Payment_Detail,
			/** 10452 */
			Payment_Method,
			/** 10453 */
			Payment_Term,
			/** 10049 */
			PDF_Setting,
			/** 10604 */
			Persona_Security_Role_Mapping,
			/** 9941 */
			Personal_Document_Template,
			/** 10602 */
			Personal_quick_reply,
			/** 10603 */
			Personal_sound_setting,
			/** 4210 */
			Phone_Call,
			/** 10651 */
			Phone_Number,
			/** 952 */
			Phone_To_Case_Process,
			/** 10202 */
			Playbook,
			/** 10199 */
			Playbook_activity,
			/** 10200 */
			Playbook_activity_attribute,
			/** 10198 */
			Playbook_Callable_Context,
			/** 10201 */
			Playbook_category,
			/** 10203 */
			Playbook_template,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 10093 */
			PM_Inferred_Task,
			/** 10094 */
			PM_Recording,
			/** 50 */
			Position,
			/** 8000 */
			Post,
			/** 10234 */
			Post_Configuration,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 10235 */
			Post_Rule_Configuration,
			/** 10454 */
			Postal_Code,
			/** 10554 */
			Power_BI_Configuration,
			/** 10579 */
			Presence,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10334 */
			Pricing_Dimension,
			/** 10335 */
			Pricing_Dimension_Field_Name,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 10303 */
			Priority,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 10507 */
			Problematic_Asset_Feedback,
			/** 4703 */
			Process,
			/** 9650 */
			Process_Configuration,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 10362 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 4712 */
			Process_Trigger,
			/** 10035 */
			ProcessStageParameter,
			/** 1024 */
			Product,
			/** 1025 */
			Product_Association,
			/** 10455 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10158 */
			Productivity_pane_configuration,
			/** 21 */
			ProductSalesLiterature,
			/** 10233 */
			Profile_Album,
			/** 10363 */
			Project,
			/** 10364 */
			Project_Approval,
			/** 10358 */
			Project_Contract_Line_Detail,
			/** 10330 */
			Project_Contract_Line_Invoice_Schedule,
			/** 10331 */
			Project_Contract_Line_Milestone,
			/** 10357 */
			Project_Contract_Line_Resource_Category,
			/** 10359 */
			Project_Contract_Line_Transaction_Category,
			/** 10360 */
			Project_Contract_Line_Transaction_Classification,
			/** 10361 */
			Project_Contract_Project_Price_List,
			/** 10365 */
			Project_Parameter,
			/** 10366 */
			Project_Parameter_Price_List,
			/** 10367 */
			Project_Price_List,
			/** 10324 */
			Project_Service_Approval,
			/** 10326 */
			Project_Stages,
			/** 10368 */
			Project_Task,
			/** 10369 */
			Project_Task_Dependency,
			/** 10370 */
			Project_Task_Status_User,
			/** 10371 */
			Project_Team_Member,
			/** 10372 */
			Project_Team_Member_Sign_Up_Deprecated_in_v30,
			/** 10373 */
			Project_Transaction_Category_Deprecated,
			/** 1048 */
			Property,
			/** 10121 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10120 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10122 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10123 */
			Property_Template_Association,
			/** 10605 */
			Provider,
			/** 10570 */
			Provisioning_State,
			/** 10013 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 10456 */
			Purchase_Order,
			/** 10457 */
			Purchase_Order_Bill,
			/** 10426 */
			Purchase_Order_Business_Process,
			/** 10458 */
			Purchase_Order_Product,
			/** 10459 */
			Purchase_Order_Receipt,
			/** 10460 */
			Purchase_Order_Receipt_Product,
			/** 10461 */
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
			/** 10555 */
			Quick_reply,
			/** 1084 */
			Quote,
			/** 10462 */
			Quote_Booking_Incident,
			/** 10463 */
			Quote_Booking_Product,
			/** 10464 */
			Quote_Booking_Service,
			/** 10465 */
			Quote_Booking_Service_Task,
			/** 10466 */
			Quote_Booking_Setup,
			/** 4211 */
			Quote_Close,
			/** 10467 */
			Quote_Invoicing_Product,
			/** 10468 */
			Quote_Invoicing_Setup,
			/** 1085 */
			Quote_Line,
			/** 10374 */
			Quote_Line_Analytics_Breakdown,
			/** 10378 */
			Quote_Line_Detail,
			/** 10375 */
			Quote_Line_Invoice_Schedule,
			/** 10377 */
			Quote_Line_Milestone,
			/** 10376 */
			Quote_Line_Resource_Category,
			/** 10379 */
			Quote_Line_Transaction_Category,
			/** 10380 */
			Quote_Line_Transaction_Classification,
			/** 10381 */
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
			/** 10304 */
			Requirement_Characteristic,
			/** 10321 */
			Requirement_Dependency,
			/** 10305 */
			Requirement_Group,
			/** 10306 */
			Requirement_Organization_Unit,
			/** 10307 */
			Requirement_Relationship,
			/** 10308 */
			Requirement_Resource_Category,
			/** 10309 */
			Requirement_Resource_Preference,
			/** 10310 */
			Requirement_Status,
			/** 10508 */
			Resolution,
			/** 4002 */
			Resource,
			/** 10382 */
			Resource_Assignment,
			/** 10383 */
			Resource_Assignment_Detail_Deprecated_in_v20,
			/** 4010 */
			Resource_Expansion,
			/** 4007 */
			Resource_Group,
			/** 10111 */
			resource_group_data_source,
			/** 10469 */
			Resource_Pay_Type,
			/** 10386 */
			Resource_Request,
			/** 10311 */
			Resource_Requirement,
			/** 10312 */
			Resource_Requirement_Detail,
			/** 10490 */
			Resource_Restriction_Deprecated,
			/** 4006 */
			Resource_Specification,
			/** 10313 */
			Resource_Territory,
			/** 10351 */
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
			/** 10078 */
			Rich_Text_Attachment,
			/** 10470 */
			RMA,
			/** 10471 */
			RMA_Product,
			/** 10472 */
			RMA_Receipt,
			/** 10473 */
			RMA_Receipt_Product,
			/** 10474 */
			RMA_SubStatus,
			/** 10387 */
			Role_competency_requirement,
			/** 10385 */
			Role_Price,
			/** 10384 */
			Role_Price_Markup,
			/** 1037 */
			Role_Template,
			/** 10388 */
			Role_Utilization,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 9602 */
			Rollup_Query,
			/** 10552 */
			Routing_configuration,
			/** 10553 */
			Routing_configuration_step,
			/** 8181 */
			Routing_Rule_Set,
			/** 10548 */
			Routing_Rule_Set_Setting,
			/** 10580 */
			RoutingRequest,
			/** 10475 */
			RTV,
			/** 10476 */
			RTV_Product,
			/** 10477 */
			RTV_Substatus,
			/** 10572 */
			Rule_Item_10572,
			/** 8199 */
			Rule_Item_8199,
			/** 10544 */
			Rulesetentitymapping,
			/** 7200 */
			RuntimeDependency,
			/** 1070 */
			Sales_Attachment,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 10223 */
			salesinsightssettings,
			/** 10520 */
			SalesSiteMap,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
			/** 10541 */
			Scenario,
			/** 10314 */
			Schedule_Board_Setting,
			/** 10322 */
			Scheduling_Feature_Flag,
			/** 4005 */
			Scheduling_Group,
			/** 10315 */
			Scheduling_Parameter,
			/** 10697 */
			Script_Task_Trigger,
			/** 10696 */
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
			/** 10581 */
			Search_Configuration,
			/** 10055 */
			Search_provider,
			/** 10080 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 10611 */
			Self_service,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10582 */
			Sentiment_analysis,
			/** 10595 */
			Sentiment_daily_topic,
			/** 10596 */
			Sentiment_daily_topic_keyword,
			/** 10597 */
			Sentiment_daily_topic_trending,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 10051 */
			Service_Configuration,
			/** 20 */
			Service_Contract_Contact,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 10478 */
			Service_Task_Type,
			/** 10521 */
			ServicesSiteMap,
			/** 10573 */
			Session,
			/** 10619 */
			Session_Characteristic,
			/** 10209 */
			Session_Data_Deprecated,
			/** 10583 */
			Session_event,
			/** 10699 */
			Session_Information,
			/** 10584 */
			Session_participant,
			/** 10210 */
			Session_Participant_Data_Deprecated,
			/** 10598 */
			Session_Sentiment,
			/** 10149 */
			Session_Template,
			/** 10527 */
			Session_Templates_Deprecated,
			/** 10700 */
			Session_Transfer,
			/** 10030 */
			Setting_Definition,
			/** 10522 */
			SettingsSiteMap,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 10479 */
			Ship_Via,
			/** 10218 */
			SI_Key_Value_Config,
			/** 10217 */
			siconfig,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 4709 */
			Site_Map,
			/** 10620 */
			Skill_Attachment_Rule,
			/** 10626 */
			Skill_finder_model,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 10052 */
			SLA_KPI,
			/** 9752 */
			SLA_KPI_Instance,
			/** 10175 */
			Smartassist_configuration,
			/** 10652 */
			SMS_Engagement_Context,
			/** 10653 */
			SMS_Number,
			/** 10654 */
			SMS_Number_settings,
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
			/** 10000 */
			Solution_Component_Attribute_Configuration,
			/** 10001 */
			Solution_Component_Configuration,
			/** 10012 */
			Solution_Component_Data_Source,
			/** 7104 */
			Solution_Component_Definition,
			/** 10002 */
			Solution_Component_Relationship_Configuration,
			/** 10011 */
			Solution_Component_Summary,
			/** 10099 */
			Solution_Health_Rule,
			/** 10100 */
			Solution_Health_Rule_Argument,
			/** 10101 */
			Solution_Health_Rule_Set,
			/** 10003 */
			Solution_History,
			/** 10004 */
			Solution_History_Data_Source,
			/** 9890 */
			SolutionHistoryData,
			/** 10607 */
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
			/** 10227 */
			Suggested_Activity,
			/** 10228 */
			Suggested_Activity_Data_Source,
			/** 10229 */
			Suggested_Contact,
			/** 10230 */
			Suggested_contacts_data_source,
			/** 10184 */
			Suggestion_Interaction,
			/** 10185 */
			Suggestion_request_payload,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10186 */
			Suggestions_Model_Summary,
			/** 10187 */
			Suggestions_Setting,
			/** 10629 */
			Survey_Answer_Option,
			/** 10638 */
			Survey_Question,
			/** 10637 */
			Survey_Question_Sequence,
			/** 10630 */
			Survey_Response,
			/** 10631 */
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
			/** 10316 */
			System_User_Scheduler_Setting,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10599 */
			Tag,
			/** 4212 */
			Task,
			/** 10480 */
			Tax_Code,
			/** 10481 */
			Tax_Code_Detail,
			/** 9 */
			Team,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 10073 */
			TeamMobileOfflineProfileMembership,
			/** 10256 */
			Teams_Dialer_Admin_settings,
			/** 10671 */
			Teams_Engagement_Context,
			/** 10124 */
			Template_For_Properties,
			/** 10150 */
			Template_Parameter,
			/** 10530 */
			Template_Tag_Deprecated,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 9948 */
			Text_Analytics_Topic,
			/** 2015 */
			Theme,
			/** 10407 */
			Three_Dimensional_Model,
			/** 10389 */
			Time_Entry,
			/** 10318 */
			Time_Group_Detail,
			/** 10390 */
			Time_Off_Calendar,
			/** 10482 */
			Time_Off_Request,
			/** 10404 */
			Time_Source,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 10703 */
			Toolbar,
			/** 10702 */
			Toolbar_Button,
			/** 9946 */
			Topic_History,
			/** 9944 */
			Topic_Model,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 10039 */
			Tour,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 8052 */
			Trace_Regarding,
			/** 10704 */
			Trace_Source_Setting,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 10623 */
			Training_data_import_configuration,
			/** 10625 */
			Training_record,
			/** 10391 */
			Transaction_Category,
			/** 10392 */
			Transaction_Category_Classification,
			/** 10393 */
			Transaction_Category_Hierarchy_Element,
			/** 10394 */
			Transaction_Category_Price,
			/** 10395 */
			Transaction_Connection,
			/** 10319 */
			Transaction_Origin,
			/** 10396 */
			Transaction_Type,
			/** 10585 */
			Transcript,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 10662 */
			Twitter_account,
			/** 10667 */
			Twitter_Engagement_Context,
			/** 10663 */
			Twitter_handle,
			/** 10674 */
			UII_Action,
			/** 10675 */
			UII_Audit,
			/** 10676 */
			UII_Context,
			/** 10678 */
			UII_Non_Hosted_Application,
			/** 10680 */
			UII_Saved_Session,
			/** 10681 */
			UII_Session_Transfer,
			/** 10682 */
			UII_Workflow,
			/** 10683 */
			UII_Workflow_Step,
			/** 10684 */
			UII_Workflow_Step_Mapping,
			/** 10705 */
			Unified_Interface_Settings,
			/** 10545 */
			Unified_routing_diagnostic,
			/** 10546 */
			Unified_routing_run,
			/** 10108 */
			Unified_Routing_Setup_Tracker,
			/** 10483 */
			Unique_Number,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 2012 */
			Unresolved_Address,
			/** 10226 */
			UntrackedAppointment,
			/** 4220 */
			UntrackedEmail,
			/** 10104 */
			Upgrade_Run,
			/** 10105 */
			Upgrade_Step,
			/** 10106 */
			Upgrade_Version,
			/** 10608 */
			UR_notification_template,
			/** 10609 */
			UR_Notification_Template_Mapping,
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
			/** 10707 */
			User_Setting,
			/** 10610 */
			User_settings_10610,
			/** 150 */
			User_settings_150,
			/** 10397 */
			User_Work_History,
			/** 10074 */
			UserMobileOfflineProfileMembership,
			/** 1039 */
			View,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 10072 */
			Virtual_Entity_Metadata,
			/** 10112 */
			Virtual_Resource_Group_Resource,
			/** 10236 */
			Wall_View,
			/** 10484 */
			Warehouse,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10664 */
			WeChat_account,
			/** 10668 */
			WeChat_Engagement_Context,
			/** 10665 */
			WhatsApp_account,
			/** 10669 */
			WhatsApp_Engagement_Context,
			/** 10666 */
			WhatsApp_number,
			/** 10708 */
			Window_Navigation_Rule,
			/** 4802 */
			Wizard_Page,
			/** 10485 */
			Work_Order,
			/** 10429 */
			Work_Order_Business_Process,
			/** 10486 */
			Work_Order_Characteristic_Deprecated,
			/** 10487 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 10488 */
			Work_Order_Incident,
			/** 10489 */
			Work_Order_Product,
			/** 10511 */
			Work_Order_Resolution,
			/** 10491 */
			Work_Order_Service,
			/** 10492 */
			Work_Order_Service_Task,
			/** 10493 */
			Work_Order_Substatus,
			/** 10494 */
			Work_Order_Type,
			/** 10559 */
			Work_Stream,
			/** 10616 */
			Work_stream_capacity_profile,
			/** 10320 */
			Work_template,
			/** 10036 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}