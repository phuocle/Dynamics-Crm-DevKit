//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_callablecontext_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_EntityLogicalName: DevKit.Controls.String;
			/** Internal Use Only */
			msdyn_EntityOTC: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_callablecontext_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_callablecontext_Information */
		Body: DevKit.Formmsdyn_callablecontext_Information.Body;
		/** The Process of form msdyn_callablecontext_Information */
		Process: DevKit.Formmsdyn_callablecontext_Information.Process;
		/** The SidePanes of form msdyn_callablecontext_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_callablecontextApi {
		/**
		* DynamicsCrm.DevKit msdyn_callablecontextApi
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for entity instances */
		msdyn_callablecontextId: string;
		/** The name of the custom entity. */
		msdyn_EntityLogicalName: string;
		/** Internal Use Only */
		msdyn_EntityOTC: OptionSet.msdyn_callablecontext.msdyn_EntityOTC;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Playbook Callable Context */
		statecode: OptionSet.msdyn_callablecontext.statecode;
		/** Reason for the status of the Playbook Callable Context */
		statuscode: OptionSet.msdyn_callablecontext.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for entity instances */
			readonly msdyn_callablecontextId: string;
			/** The name of the custom entity. */
			readonly msdyn_EntityLogicalName: string;
			/** Internal Use Only */
			readonly msdyn_EntityOTC: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Playbook Callable Context */
			readonly statecode: string;
			/** Reason for the status of the Playbook Callable Context */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_callablecontext {
		enum msdyn_EntityOTC {
			/** 10017 */
			AAD_User,
			/** 1 */
			Account,
			/** 10488 */
			Account_Project_Price_List,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 10938 */
			Action_Call,
			/** 10937 */
			Action_Call_Workflow,
			/** 9962 */
			Action_Card,
			/** 10274 */
			Action_Card_Regarding,
			/** 10275 */
			Action_Card_Role_Setting,
			/** 9983 */
			Action_Card_Type,
			/** 9973 */
			Action_Card_User_Settings,
			/** 10204 */
			Action_Input_Parameter,
			/** 10205 */
			Action_Output_Parameter,
			/** 9968 */
			ActionCardUserState,
			/** 4200 */
			Activity,
			/** 10087 */
			Activity_File_Attachment,
			/** 10142 */
			Activity_monitor,
			/** 135 */
			Activity_Party,
			/** 10462 */
			Actual,
			/** 10497 */
			Actual_Data_Export_Deprecated,
			/** 10213 */
			Adaptive_Card_Configuration,
			/** 1071 */
			Address,
			/** 10248 */
			admin_settings_entity,
			/** 10721 */
			AdminAppState,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10201 */
			Agent_script,
			/** 10940 */
			Agent_Script_Answer,
			/** 10202 */
			Agent_script_step,
			/** 10951 */
			Agent_Script_Task,
			/** 10939 */
			Agent_Script_Task_Category,
			/** 10722 */
			Agent_Status_history,
			/** 10579 */
			Agreement,
			/** 10580 */
			Agreement_Booking_Date,
			/** 10581 */
			Agreement_Booking_Incident,
			/** 10582 */
			Agreement_Booking_Product,
			/** 10583 */
			Agreement_Booking_Service,
			/** 10584 */
			Agreement_Booking_Service_Task,
			/** 10585 */
			Agreement_Booking_Setup,
			/** 10594 */
			Agreement_Business_Process,
			/** 10586 */
			Agreement_Invoice_Date,
			/** 10587 */
			Agreement_Invoice_Product,
			/** 10588 */
			Agreement_Invoice_Setup,
			/** 10589 */
			Agreement_Substatus,
			/** 10068 */
			AI_Builder_Dataset,
			/** 10069 */
			AI_Builder_Dataset_File,
			/** 10070 */
			AI_Builder_Dataset_Record,
			/** 10071 */
			AI_Builder_Datasets_Container,
			/** 10061 */
			AI_Builder_Feedback_Loop,
			/** 10072 */
			AI_Builder_File,
			/** 10073 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 10062 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10065 */
			AI_Object_Detection_Bounding_Box,
			/** 10063 */
			AI_Object_Detection_Image,
			/** 10066 */
			AI_Object_Detection_Image_Mapping,
			/** 10064 */
			AI_Object_Detection_Label,
			/** 400 */
			AI_Template,
			/** 10129 */
			Analysis_Component,
			/** 10130 */
			Analysis_Job,
			/** 10131 */
			Analysis_Result,
			/** 10132 */
			Analysis_Result_Detail,
			/** 132 */
			Announcement,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 10119 */
			App_Action,
			/** 10120 */
			App_Action_Migration,
			/** 10121 */
			App_Action_Rule,
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
			/** 10693 */
			App_Parameter_Definition_Deprecated,
			/** 10183 */
			App_profile,
			/** 10850 */
			Apple_messages_for_business_account,
			/** 10851 */
			Apple_messages_for_business_engagement_context,
			/** 10184 */
			Application_Extension,
			/** 4707 */
			Application_File,
			/** 1120 */
			Application_Ribbons,
			/** 10185 */
			Application_Tab_Template,
			/** 10695 */
			Application_Tab_Template_Deprecated,
			/** 10698 */
			Application_Type_Deprecated,
			/** 10052 */
			ApplicationUser,
			/** 8700 */
			AppModule_Metadata,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 4201 */
			Appointment,
			/** 10570 */
			Approval_Set,
			/** 127 */
			Article,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 10149 */
			Asset_Category_Template_Association,
			/** 10668 */
			Asset_Suggestion,
			/** 10681 */
			Asset_Suggestions_Setting,
			/** 10150 */
			Asset_Template_Association,
			/** 10711 */
			Assignment_Configuration,
			/** 10712 */
			Assignment_Configuration_Step,
			/** 10300 */
			Assignment_Map,
			/** 10297 */
			Assignment_Rule,
			/** 10800 */
			Attach_Skill,
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 10298 */
			Attribute_10298,
			/** 9808 */
			Attribute_9808,
			/** 4601 */
			Attribute_Map,
			/** 10299 */
			Attribute_Value,
			/** 10781 */
			Audio_File,
			/** 10887 */
			Audit_Diagnostics_Setting,
			/** 4567 */
			Auditing,
			/** 10725 */
			Auth_Settings_Entry,
			/** 10724 */
			Authentication_Settings,
			/** 1094 */
			Authorization_Server,
			/** 10737 */
			Auto_block_rule,
			/** 10279 */
			Auto_Capture_Rule,
			/** 10280 */
			Auto_Capture_Settings,
			/** 10144 */
			Available_Times,
			/** 10145 */
			Available_Times_Data_Source,
			/** 9936 */
			Azure_Service_Connection,
			/** 10490 */
			Batch_Job,
			/** 1150 */
			Bookable_Resource,
			/** 10463 */
			Bookable_Resource_Association,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 10662 */
			Bookable_Resource_Booking_Quick_Note,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 10794 */
			Bookable_Resource_Capacity_Profile,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 10473 */
			Booking_Alert,
			/** 10474 */
			Booking_Alert_Status,
			/** 10475 */
			Booking_Change,
			/** 10590 */
			Booking_Journal,
			/** 10476 */
			Booking_Rule,
			/** 10465 */
			Booking_Setup_Metadata,
			/** 1152 */
			Booking_Status,
			/** 10591 */
			Booking_Timestamp,
			/** 10076 */
			BotContent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4405 */
			Bulk_Operation_Log,
			/** 10477 */
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
			/** 10049 */
			CanvasApp_Extended_Metadata,
			/** 10713 */
			Capacity_Profile,
			/** 10831 */
			Carrier,
			/** 10039 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10040 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 112 */
			Case,
			/** 10216 */
			Case_Enrichment,
			/** 4206 */
			Case_Resolution,
			/** 10217 */
			Case_Suggestion,
			/** 10218 */
			Case_Suggestion_Request_Payload,
			/** 10219 */
			Case_Suggestions_Data_Souce,
			/** 10593 */
			Case_to_Work_Order_Business_Process,
			/** 10232 */
			Case_Topic,
			/** 10235 */
			Case_topic_Incident_mapping,
			/** 10233 */
			Case_Topic_Setting,
			/** 10234 */
			Case_Topic_Summary,
			/** 10018 */
			Catalog,
			/** 10019 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 10674 */
			CFS_IoT_Alert_Process_Flow,
			/** 10707 */
			channel,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 10740 */
			Channel_api_method_mapping,
			/** 10728 */
			Channel_Capability,
			/** 10718 */
			Channel_Configuration,
			/** 10690 */
			Channel_Integration_Framework_v10_Provider,
			/** 10195 */
			Channel_Integration_Framework_v20_Provider,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10719 */
			Channel_State_Configuration,
			/** 1141 */
			Characteristic,
			/** 10803 */
			Characteristic_mapping,
			/** 10814 */
			Chat_Widget,
			/** 10813 */
			Chat_Widget_Languagedeprecated,
			/** 10816 */
			Chat_Widget_Location,
			/** 10078 */
			Chatbot,
			/** 10079 */
			Chatbot_subcomponent,
			/** 113 */
			Child_Incident_Count,
			/** 10461 */
			Client_Extension,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 10085 */
			Comment_10085,
			/** 8005 */
			Comment_8005,
			/** 4215 */
			Commitment,
			/** 10828 */
			Communication_Provider_Setting,
			/** 10829 */
			Communication_Provider_Setting_Entry,
			/** 10493 */
			Competency_Requirement_Deprecated,
			/** 123 */
			Competitor,
			/** 1004 */
			Competitor_Address,
			/** 1006 */
			Competitor_Product,
			/** 26 */
			CompetitorSalesLiterature,
			/** 10006 */
			Component_Layer,
			/** 10007 */
			Component_Layer_Data_Source,
			/** 10471 */
			Configuration_10471,
			/** 10941 */
			Configuration_10941,
			/** 3234 */
			Connection,
			/** 10060 */
			Connection_Reference,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 2 */
			Contact,
			/** 10494 */
			Contact_Price_List,
			/** 10260 */
			Contact_suggestion_rule,
			/** 10261 */
			Contact_suggestion_ruleset,
			/** 17 */
			ContactInvoices,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 10746 */
			Context_item_value,
			/** 10749 */
			Context_variable,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 10571 */
			Contract_Line_Detail_Performance,
			/** 10572 */
			Contract_Performance,
			/** 2011 */
			Contract_Template,
			/** 10743 */
			Conversation,
			/** 10729 */
			Conversation_Action,
			/** 10730 */
			Conversation_Action_Locale,
			/** 10796 */
			Conversation_Capacity_profile,
			/** 10797 */
			Conversation_Characteristic,
			/** 10249 */
			Conversation_Data_Deprecated,
			/** 10748 */
			Conversation_Sentiment,
			/** 10822 */
			Conversation_Topic,
			/** 10825 */
			Conversation_topic_Conversation_mapping,
			/** 10823 */
			Conversation_Topic_Setting,
			/** 10824 */
			Conversation_Topic_Summary,
			/** 10821 */
			ConversationInsight,
			/** 10820 */
			conversationsuggestionrequestpayload,
			/** 10077 */
			ConversationTranscript,
			/** 10344 */
			CSAdminConfig,
			/** 10948 */
			CTI_Search,
			/** 9105 */
			Currency,
			/** 10021 */
			Custom_API,
			/** 10022 */
			Custom_API_Request_Parameter,
			/** 10023 */
			Custom_API_Response_Property,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 10717 */
			Custom_messaging_account,
			/** 10840 */
			Custom_messaging_channel,
			/** 10838 */
			Custom_Messaging_Engagement_Context,
			/** 10151 */
			Customer_Asset,
			/** 10154 */
			Customer_Asset_Attachment,
			/** 10155 */
			Customer_Asset_Category,
			/** 4502 */
			Customer_Relationship,
			/** 10236 */
			Customer_Service_historical_analytics,
			/** 10330 */
			Customer_Voice_alert,
			/** 10331 */
			Customer_Voice_alert_rule,
			/** 10333 */
			Customer_Voice_file_response,
			/** 10334 */
			Customer_Voice_localized_survey_email_template,
			/** 10335 */
			Customer_Voice_project,
			/** 10338 */
			Customer_Voice_satisfaction_metric,
			/** 10339 */
			Customer_Voice_survey,
			/** 10332 */
			Customer_Voice_survey_email_template,
			/** 10340 */
			Customer_Voice_survey_invite,
			/** 10336 */
			Customer_Voice_survey_question,
			/** 10337 */
			Customer_Voice_survey_question_response,
			/** 10341 */
			Customer_Voice_survey_reminder,
			/** 10342 */
			Customer_Voice_survey_response,
			/** 10343 */
			Customer_Voice_unsubscribed_recipient,
			/** 10920 */
			Customization_File,
			/** 10227 */
			Data_Analytics_Admin_Settings_Deprecated,
			/** 10229 */
			Data_Analytics_Report,
			/** 10228 */
			Data_Analytics_User_Customized_Report,
			/** 4410 */
			Data_Import,
			/** 10025 */
			Data_Lake_Folder,
			/** 10026 */
			Data_Lake_Folder_Permission,
			/** 10027 */
			Data_Lake_Workspace,
			/** 10028 */
			Data_Lake_Workspace_Permission,
			/** 4411 */
			Data_Map,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 10029 */
			Data_Processing_configuration,
			/** 10138 */
			Database_Version,
			/** 418 */
			Dataflow,
			/** 10036 */
			DataflowRefreshHistory,
			/** 10315 */
			Deal_manager_settings,
			/** 10314 */
			dealmanageraccess,
			/** 10345 */
			Decision_contract,
			/** 10346 */
			Decision_rule_set,
			/** 10498 */
			Delegation,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10231 */
			Deprecated_Dynamics_Customer_Service_Analytics,
			/** 10731 */
			Deprecated_Workstream_Entity_Configuration,
			/** 10854 */
			DeprecatedTeams_Engagement_Context,
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
			/** 10322 */
			Duplicate_Detection_Plugin_Run,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 10323 */
			Duplicate_Lead_Mapping,
			/** 4415 */
			Duplicate_Record,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 10806 */
			Effort_estimate,
			/** 10807 */
			Effort_estimation_model,
			/** 10808 */
			Effort_model_training_details,
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
			/** 10596 */
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
			/** 10732 */
			Entity_10732,
			/** 9800 */
			Entity_9800,
			/** 430 */
			Entity_Analytics_Config,
			/** 10677 */
			Entity_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 9815 */
			Entity_Index,
			/** 9810 */
			Entity_Key,
			/** 10262 */
			Entity_link_chat_configuration,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 10727 */
			Entity_Routing_Context,
			/** 10943 */
			Entity_Search,
			/** 10942 */
			Entity_Type,
			/** 10276 */
			EntityRankingRule,
			/** 10037 */
			EntityRefreshHistory,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10501 */
			Estimate,
			/** 10502 */
			Estimate_Line,
			/** 10954 */
			Event,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 10503 */
			Expense,
			/** 10504 */
			Expense_Category,
			/** 10505 */
			Expense_Receipt,
			/** 955 */
			Expired_Process,
			/** 10011 */
			ExportSolutionUpload,
			/** 10304 */
			Extended_User_Setting,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 10836 */
			Facebook_Application,
			/** 10835 */
			Facebook_Engagement_Context,
			/** 10837 */
			Facebook_Page,
			/** 4000 */
			FacilityEquipment,
			/** 10506 */
			Fact,
			/** 4204 */
			Fax,
			/** 10012 */
			FeatureControlSetting,
			/** 9958 */
			Feedback,
			/** 10507 */
			Field_Computation,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 10682 */
			Field_service_historical_analytics,
			/** 10597 */
			Field_Service_Price_List_Item,
			/** 10598 */
			Field_Service_Setting,
			/** 10599 */
			Field_Service_SLA_Configuration,
			/** 10600 */
			Field_Service_System_Job,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 10329 */
			Filter,
			/** 30 */
			Filter_Template,
			/** 10508 */
			Find_Work_Event_Deprecated_in_v30,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10741 */
			Flagged_spam,
			/** 10056 */
			Flow_Machine,
			/** 10057 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 10277 */
			flowcardtype,
			/** 8003 */
			Follow,
			/** 10267 */
			Forecast,
			/** 10265 */
			Forecast_Configuration,
			/** 10266 */
			Forecast_definition,
			/** 10237 */
			Forecast_preview,
			/** 10268 */
			Forecast_recurrence,
			/** 10239 */
			Forecast_Summary_and_Setting,
			/** 10944 */
			Form,
			/** 10484 */
			Fulfillment_Preference,
			/** 10156 */
			Functional_Location,
			/** 10269 */
			GDPRData,
			/** 10765 */
			Geo_Location_Provider,
			/** 10678 */
			Geofence,
			/** 10679 */
			Geofence_Event,
			/** 10680 */
			Geofencing_Settings,
			/** 10675 */
			Geolocation_Settings,
			/** 10676 */
			Geolocation_Tracking,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9603 */
			Goal_Metric,
			/** 10074 */
			Help_Page,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
			/** 10932 */
			Hosted_Control,
			/** 10287 */
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
			/** 10350 */
			Inbox_Configuration,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 10601 */
			Incident_Type,
			/** 10602 */
			Incident_Type_Characteristic,
			/** 10603 */
			Incident_Type_Product,
			/** 10607 */
			Incident_Type_Requirement_Group,
			/** 10667 */
			Incident_Type_Resolution,
			/** 10604 */
			Incident_Type_Service,
			/** 10605 */
			Incident_Type_Service_Task,
			/** 10665 */
			Incident_Type_Suggestion_Result,
			/** 10666 */
			Incident_Type_Suggestion_Run_History,
			/** 10606 */
			Incident_Types_Setup,
			/** 9816 */
			Index_Attribute,
			/** 126 */
			Indexed_Article,
			/** 10230 */
			Insights,
			/** 10117 */
			Insights_Store_Data_Source,
			/** 10118 */
			Insights_Store_Virtual_Entity,
			/** 10577 */
			Inspection,
			/** 10575 */
			Inspection_Attachment,
			/** 10578 */
			Inspection_Response,
			/** 10574 */
			Inspection_Template,
			/** 10576 */
			Inspection_Template_Version,
			/** 10509 */
			Integration_Job,
			/** 10510 */
			Integration_Job_Detail,
			/** 3000 */
			Integration_Status,
			/** 4011 */
			Inter_Process_Lock,
			/** 9986 */
			Interaction_for_Email,
			/** 1003 */
			Internal_Address,
			/** 10020 */
			Internal_Catalog_Assignment,
			/** 7107 */
			Invalid_Dependency,
			/** 10608 */
			Inventory_Adjustment,
			/** 10609 */
			Inventory_Adjustment_Product,
			/** 10610 */
			Inventory_Journal,
			/** 10611 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10511 */
			Invoice_Frequency,
			/** 10512 */
			Invoice_Frequency_Detail,
			/** 1091 */
			Invoice_Line,
			/** 10513 */
			Invoice_Line_Detail,
			/** 10492 */
			Invoice_Process,
			/** 10165 */
			IoT_Alert,
			/** 10181 */
			IoT_Alert_to_Case_Process,
			/** 10166 */
			IoT_Device,
			/** 10167 */
			IoT_Device_Category,
			/** 10168 */
			IoT_Device_Command,
			/** 10169 */
			IoT_Device_Command_Definition,
			/** 10170 */
			IoT_Device_Data_History,
			/** 10171 */
			IoT_Device_Property,
			/** 10172 */
			IoT_Device_Registration_History,
			/** 10173 */
			IoT_Device_Visualization_Configuration,
			/** 10174 */
			IoT_Field_Mapping,
			/** 10175 */
			IoT_Property_Definition,
			/** 10176 */
			IoT_Provider,
			/** 10177 */
			IoT_Provider_Instance,
			/** 10178 */
			IoT_Settings,
			/** 4705 */
			ISV_Config,
			/** 10514 */
			Journal,
			/** 10515 */
			Journal_Line,
			/** 10220 */
			KB_Enrichment,
			/** 10106 */
			Key_Vault_Reference,
			/** 10240 */
			Keywords_Description_Suggestion_Setting,
			/** 10238 */
			Knowledge_analytics,
			/** 9953 */
			Knowledge_Article,
			/** 10099 */
			Knowledge_Article_Attachment,
			/** 9960 */
			Knowledge_Article_Category,
			/** 10095 */
			Knowledge_Article_Image,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 10098 */
			Knowledge_article_language_setting,
			/** 10221 */
			Knowledge_Article_Suggestion,
			/** 10222 */
			Knowledge_Article_Suggestion_Data_Source,
			/** 10101 */
			Knowledge_Article_Template,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 10092 */
			Knowledge_Federated_Article,
			/** 10093 */
			Knowledge_Federated_Article_Incident,
			/** 10096 */
			Knowledge_Interaction_Insight,
			/** 10091 */
			Knowledge_Management_Setting,
			/** 10100 */
			Knowledge_personalization,
			/** 10103 */
			Knowledge_search_filter,
			/** 10097 */
			Knowledge_Search_Insight,
			/** 9947 */
			Knowledge_Search_Model,
			/** 10102 */
			Knowledge_search_personal_filter_config,
			/** 10250 */
			KPI_Event_Data,
			/** 10251 */
			KPI_Event_Definition,
			/** 10742 */
			Language_10742,
			/** 9957 */
			Language_9957,
			/** 10945 */
			Language_Module,
			/** 9875 */
			Language_Provisioning_State,
			/** 4 */
			Lead,
			/** 1017 */
			Lead_Address,
			/** 10324 */
			Lead_Hygiene_Setting,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 24 */
			LeadCompetitors,
			/** 10320 */
			LeadModelConfig,
			/** 27 */
			LeadProduct,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 8006 */
			Like,
			/** 10841 */
			LINE_account,
			/** 10839 */
			LINE_Engagement_Context,
			/** 10136 */
			List_Operation,
			/** 4418 */
			List_Value_Mapping,
			/** 10815 */
			Live_Chat_Context,
			/** 10734 */
			Live_work_item_event,
			/** 10747 */
			Live_Work_Item_Participant_Deprecated,
			/** 9201 */
			LocalConfigStore,
			/** 10750 */
			Localization,
			/** 10817 */
			Localized_Survey_Question_Deprecated,
			/** 4419 */
			Lookup_Mapping,
			/** 10206 */
			Macro_Action_Template,
			/** 10208 */
			Macro_Connector,
			/** 10209 */
			Macro_Run_History,
			/** 10207 */
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
			/** 10107 */
			Managed_Identity,
			/** 9812 */
			Managed_Property,
			/** 10137 */
			Marketing_Form_Display_Attributes,
			/** 4300 */
			Marketing_List,
			/** 4301 */
			Marketing_List_Member,
			/** 10686 */
			MarketingSiteMap,
			/** 10736 */
			Masking_Rule,
			/** 10709 */
			Master_Entity_Routing_Configuration,
			/** 10763 */
			Message,
			/** 4231 */
			Metadata_Difference,
			/** 10853 */
			Microsoft_Teams_account,
			/** 10263 */
			Microsoft_Teams_chat_association_entity,
			/** 10264 */
			Microsoft_Teams_chat_suggestion,
			/** 10257 */
			Microsoft_Teams_Collaboration_entity,
			/** 10254 */
			Microsoft_Teams_Graph_resource_Entity,
			/** 10148 */
			Migration_tracker,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 10109 */
			MobileOfflineProfileItemFilter,
			/** 9006 */
			Model_driven_App,
			/** 10044 */
			Model_Driven_App_Component_Node,
			/** 10043 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10042 */
			Model_Driven_App_Element,
			/** 10045 */
			Model_Driven_App_Setting,
			/** 10046 */
			Model_Driven_App_User_Setting,
			/** 10801 */
			Model_training_details,
			/** 10321 */
			ModelPreviewStatus,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10255 */
			msdyn_msteamssetting,
			/** 10256 */
			msdyn_msteamssettingsv2,
			/** 10270 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 9900 */
			Navigation_Setting,
			/** 950 */
			New_Process,
			/** 10115 */
			NonRelational_Data_Source,
			/** 5 */
			Note,
			/** 10286 */
			Notes_analysis_Config,
			/** 10116 */
			Notification_10116,
			/** 4110 */
			Notification_4110,
			/** 10186 */
			Notification_Field,
			/** 10691 */
			Notification_Field_Deprecated,
			/** 10187 */
			Notification_Template,
			/** 10692 */
			Notification_Template_Deprecated,
			/** 10852 */
			OC_Apple_Pay_Entity,
			/** 10751 */
			OC_Payment_Profile,
			/** 10055 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 10738 */
			Omnichannel_channel_api_conversation_privilege,
			/** 10739 */
			Omnichannel_channel_api_message_privilege,
			/** 10766 */
			Omnichannel_Configuration,
			/** 10826 */
			Omnichannel_historical_analytics,
			/** 10767 */
			Omnichannel_Personalization,
			/** 10768 */
			Omnichannel_Queue_Deprecated,
			/** 10753 */
			Omnichannel_Request,
			/** 10769 */
			Omnichannel_Sync_Config,
			/** 10827 */
			Omnichannel_voice_historical_analytics_preview_Deprecated,
			/** 10733 */
			Ongoing_conversation_Deprecated,
			/** 10770 */
			Operating_Hour,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 1083 */
			Opportunity_Line,
			/** 10518 */
			Opportunity_Line_Detail_Deprecated,
			/** 10517 */
			Opportunity_Line_Resource_Category_Deprecated,
			/** 10519 */
			Opportunity_Line_Transaction_Category_Deprecated,
			/** 10520 */
			Opportunity_Line_Transaction_Classification_Deprecated,
			/** 10521 */
			Opportunity_Project_Price_List,
			/** 4503 */
			Opportunity_Relationship,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 10319 */
			OpportunityModelConfig,
			/** 10916 */
			Option,
			/** 9809 */
			OptionSet,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 10612 */
			Order_Invoicing_Date,
			/** 10613 */
			Order_Invoicing_Product,
			/** 10614 */
			Order_Invoicing_Setup,
			/** 10615 */
			Order_Invoicing_Setup_Date,
			/** 1089 */
			Order_Line,
			/** 1019 */
			Organization,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 10047 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 10478 */
			Organizational_Unit,
			/** 10114 */
			OrganizationDataSyncState,
			/** 10112 */
			OrganizationDataSyncSubscription,
			/** 10113 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10856 */
			Outbound_Configuration,
			/** 10857 */
			Outbound_message,
			/** 10714 */
			Overflow_Action_Config,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10008 */
			Package,
			/** 10198 */
			Pane_tab_configuration,
			/** 10199 */
			Pane_tool_configuration,
			/** 10210 */
			Parameter_definition,
			/** 10696 */
			Parameter_Deprecated,
			/** 1095 */
			Partner_Application,
			/** 10616 */
			Payment,
			/** 10617 */
			Payment_Detail,
			/** 10618 */
			Payment_Method,
			/** 10619 */
			Payment_Term,
			/** 10086 */
			PDF_Setting,
			/** 10773 */
			Persona_Security_Role_Mapping,
			/** 9941 */
			Personal_Document_Template,
			/** 10771 */
			Personal_quick_reply,
			/** 10772 */
			Personal_sound_setting,
			/** 4210 */
			Phone_Call,
			/** 10830 */
			Phone_Number,
			/** 952 */
			Phone_To_Case_Process,
			/** 10245 */
			Playbook,
			/** 10242 */
			Playbook_activity,
			/** 10243 */
			Playbook_activity_attribute,
			/** 10241 */
			Playbook_Callable_Context,
			/** 10244 */
			Playbook_category,
			/** 10246 */
			Playbook_template,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 10105 */
			Plugin_Package,
			/** 10126 */
			PM_Analysis_History,
			/** 10127 */
			PM_Inferred_Task,
			/** 10128 */
			PM_Recording,
			/** 10981 */
			PM_Template,
			/** 50 */
			Position,
			/** 8000 */
			Post,
			/** 10326 */
			Post_Configuration,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 10327 */
			Post_Rule_Configuration,
			/** 10620 */
			Postal_Code,
			/** 10723 */
			Power_BI_Configuration,
			/** 10684 */
			Predictive_duration_preview,
			/** 10317 */
			Predictive_Model_Score,
			/** 10318 */
			Predictive_Score,
			/** 10685 */
			Predictive_Work_Hour_Duration_Setting,
			/** 10774 */
			Presence,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10499 */
			Pricing_Dimension,
			/** 10500 */
			Pricing_Dimension_Field_Name,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 61 */
			PrincipalEntityBusinessUnitMap,
			/** 10479 */
			Priority,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 103 */
			Privileges_Removal_Setting,
			/** 10669 */
			Problematic_Asset_Feedback,
			/** 4703 */
			Process,
			/** 9650 */
			Process_Configuration,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 10527 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 4712 */
			Process_Trigger,
			/** 10058 */
			ProcessStageParameter,
			/** 1024 */
			Product,
			/** 1025 */
			Product_Association,
			/** 10621 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10197 */
			Productivity_pane_configuration,
			/** 21 */
			ProductSalesLiterature,
			/** 10325 */
			Profile_Album,
			/** 10528 */
			Project,
			/** 10529 */
			Project_Approval,
			/** 10523 */
			Project_Contract_Line_Detail,
			/** 10495 */
			Project_Contract_Line_Invoice_Schedule,
			/** 10496 */
			Project_Contract_Line_Milestone,
			/** 10522 */
			Project_Contract_Line_Resource_Category,
			/** 10524 */
			Project_Contract_Line_Transaction_Category,
			/** 10525 */
			Project_Contract_Line_Transaction_Classification,
			/** 10526 */
			Project_Contract_Project_Price_List,
			/** 10530 */
			Project_Parameter,
			/** 10531 */
			Project_Parameter_Price_List,
			/** 10532 */
			Project_Price_List,
			/** 10489 */
			Project_Service_Approval,
			/** 10491 */
			Project_Stages,
			/** 10533 */
			Project_Task,
			/** 10534 */
			Project_Task_Dependency,
			/** 10535 */
			Project_Task_Status_User,
			/** 10536 */
			Project_Team_Member,
			/** 10537 */
			Project_Team_Member_Sign_Up_Deprecated_in_v30,
			/** 10538 */
			Project_Transaction_Category_Deprecated,
			/** 1048 */
			Property,
			/** 10158 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10157 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10159 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10160 */
			Property_Template_Association,
			/** 10775 */
			Provider,
			/** 10720 */
			Provisioning_State,
			/** 10024 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 10622 */
			Purchase_Order,
			/** 10623 */
			Purchase_Order_Bill,
			/** 10592 */
			Purchase_Order_Business_Process,
			/** 10624 */
			Purchase_Order_Product,
			/** 10625 */
			Purchase_Order_Receipt,
			/** 10626 */
			Purchase_Order_Receipt_Product,
			/** 10627 */
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
			/** 10726 */
			Quick_reply,
			/** 1084 */
			Quote,
			/** 10628 */
			Quote_Booking_Incident,
			/** 10629 */
			Quote_Booking_Product,
			/** 10630 */
			Quote_Booking_Service,
			/** 10631 */
			Quote_Booking_Service_Task,
			/** 10632 */
			Quote_Booking_Setup,
			/** 4211 */
			Quote_Close,
			/** 10633 */
			Quote_Invoicing_Product,
			/** 10634 */
			Quote_Invoicing_Setup,
			/** 1085 */
			Quote_Line,
			/** 10539 */
			Quote_Line_Analytics_Breakdown,
			/** 10543 */
			Quote_Line_Detail,
			/** 10540 */
			Quote_Line_Invoice_Schedule,
			/** 10542 */
			Quote_Line_Milestone,
			/** 10541 */
			Quote_Line_Resource_Category,
			/** 10544 */
			Quote_Line_Transaction_Category,
			/** 10545 */
			Quote_Line_Transaction_Classification,
			/** 10546 */
			Quote_Project_Price_List,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 10316 */
			Recording_10316,
			/** 10752 */
			Recording_10752,
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
			/** 10459 */
			Requirement_Characteristic,
			/** 10486 */
			Requirement_Dependency,
			/** 10466 */
			Requirement_Group,
			/** 10469 */
			Requirement_Organization_Unit,
			/** 10460 */
			Requirement_Relationship,
			/** 10470 */
			Requirement_Resource_Category,
			/** 10467 */
			Requirement_Resource_Preference,
			/** 10464 */
			Requirement_Status,
			/** 10670 */
			Resolution,
			/** 4002 */
			Resource,
			/** 10547 */
			Resource_Assignment,
			/** 10548 */
			Resource_Assignment_Detail_Deprecated_in_v20,
			/** 10683 */
			Resource_duration_preview,
			/** 4010 */
			Resource_Expansion,
			/** 4007 */
			Resource_Group,
			/** 10146 */
			resource_group_data_source,
			/** 10635 */
			Resource_Pay_Type,
			/** 10551 */
			Resource_Request,
			/** 10472 */
			Resource_Requirement,
			/** 10457 */
			Resource_Requirement_Detail,
			/** 10656 */
			Resource_Restriction_Deprecated,
			/** 4006 */
			Resource_Specification,
			/** 10480 */
			Resource_Territory,
			/** 10516 */
			Result_Cache,
			/** 10041 */
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
			/** 10754 */
			Rich_message,
			/** 10755 */
			Rich_object_map,
			/** 10124 */
			Rich_Text_Attachment,
			/** 10636 */
			RMA,
			/** 10637 */
			RMA_Product,
			/** 10638 */
			RMA_Receipt,
			/** 10639 */
			RMA_Receipt_Product,
			/** 10640 */
			RMA_SubStatus,
			/** 10552 */
			Role_competency_requirement,
			/** 10550 */
			Role_Price,
			/** 10549 */
			Role_Price_Markup,
			/** 1037 */
			Role_Template,
			/** 10553 */
			Role_Utilization,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 9602 */
			Rollup_Query,
			/** 10715 */
			Routing_configuration,
			/** 10716 */
			Routing_configuration_step,
			/** 10349 */
			Routing_diagnostic,
			/** 10348 */
			Routing_diagnostic_item,
			/** 8181 */
			Routing_Rule_Set,
			/** 10710 */
			Routing_Rule_Set_Setting,
			/** 10776 */
			RoutingRequest,
			/** 10641 */
			RTV,
			/** 10642 */
			RTV_Product,
			/** 10643 */
			RTV_Substatus,
			/** 10756 */
			Rule_Item_10756,
			/** 8199 */
			Rule_Item_8199,
			/** 10347 */
			Rulesetentitymapping,
			/** 7200 */
			RuntimeDependency,
			/** 10305 */
			Sales_Acceleration_settings,
			/** 10301 */
			Sales_Assignment_Setting,
			/** 1070 */
			Sales_Attachment,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 10302 */
			Sales_routing_run,
			/** 10288 */
			Sales_Tag,
			/** 10859 */
			Sales_usage_telemetry_reports,
			/** 10278 */
			salesinsightssettings,
			/** 10687 */
			SalesSiteMap,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
			/** 10708 */
			Scenario,
			/** 10481 */
			Schedule_Board_Setting,
			/** 10487 */
			Scheduling_Feature_Flag,
			/** 4005 */
			Scheduling_Group,
			/** 10482 */
			Scheduling_Parameter,
			/** 10947 */
			Script_Task_Trigger,
			/** 10946 */
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
			/** 10777 */
			Search_Configuration,
			/** 10094 */
			Search_provider,
			/** 10125 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 10295 */
			Segment,
			/** 10296 */
			SegmentsUtil,
			/** 10787 */
			Self_service,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10778 */
			Sentiment_analysis,
			/** 10757 */
			Sentiment_daily_topic,
			/** 10758 */
			Sentiment_daily_topic_keyword,
			/** 10759 */
			Sentiment_daily_topic_trending,
			/** 10289 */
			Sequence,
			/** 10290 */
			Sequence_Stat,
			/** 10291 */
			Sequence_Target,
			/** 10292 */
			Sequence_Target_Step,
			/** 10293 */
			Sequence_Template,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 10089 */
			Service_Configuration,
			/** 20 */
			Service_Contract_Contact,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 10050 */
			Service_Plan_Mapping,
			/** 10644 */
			Service_Task_Type,
			/** 10688 */
			ServicesSiteMap,
			/** 10760 */
			Session,
			/** 10798 */
			Session_Characteristic,
			/** 10252 */
			Session_Data_Deprecated,
			/** 10779 */
			Session_event,
			/** 10949 */
			Session_Information,
			/** 10780 */
			Session_participant,
			/** 10253 */
			Session_Participant_Data_Deprecated,
			/** 10761 */
			Session_Participant_Event,
			/** 10762 */
			Session_Sentiment,
			/** 10188 */
			Session_Template,
			/** 10694 */
			Session_Templates_Deprecated,
			/** 10950 */
			Session_Transfer,
			/** 10048 */
			Setting_Definition,
			/** 10689 */
			SettingsSiteMap,
			/** 10038 */
			Shared_Link_Setting,
			/** 10860 */
			Shared_Object,
			/** 10861 */
			Shared_Workspace,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 10645 */
			Ship_Via,
			/** 10272 */
			SI_Key_Value_Config,
			/** 10271 */
			siconfig,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 4709 */
			Site_Map,
			/** 10799 */
			Skill_Attachment_Rule,
			/** 10805 */
			Skill_finder_model,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 10090 */
			SLA_KPI,
			/** 9752 */
			SLA_KPI_Instance,
			/** 10214 */
			Smartassist_configuration,
			/** 10833 */
			SMS_Engagement_Context,
			/** 10834 */
			SMS_Number,
			/** 10832 */
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
			Solution_Component_Batch_Configuration,
			/** 10002 */
			Solution_Component_Configuration,
			/** 10016 */
			Solution_Component_Count_Data_Source,
			/** 10014 */
			Solution_Component_Count_Summary,
			/** 10015 */
			Solution_Component_Data_Source,
			/** 7104 */
			Solution_Component_Definition,
			/** 10003 */
			Solution_Component_Relationship_Configuration,
			/** 10013 */
			Solution_Component_Summary,
			/** 10133 */
			Solution_Health_Rule,
			/** 10134 */
			Solution_Health_Rule_Argument,
			/** 10135 */
			Solution_Health_Rule_Set,
			/** 10004 */
			Solution_History,
			/** 10005 */
			Solution_History_Data_Source,
			/** 9890 */
			SolutionHistoryData,
			/** 10782 */
			Sound_notification_setting,
			/** 10010 */
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
			/** 10282 */
			Suggested_Activity,
			/** 10283 */
			Suggested_Activity_Data_Source,
			/** 10284 */
			Suggested_Contact,
			/** 10285 */
			Suggested_contacts_data_source,
			/** 10306 */
			Suggestion,
			/** 10223 */
			Suggestion_Interaction,
			/** 10224 */
			Suggestion_request_payload,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10225 */
			Suggestions_Model_Summary,
			/** 10226 */
			Suggestions_Setting,
			/** 10810 */
			Survey_Answer_Option,
			/** 10819 */
			Survey_Question,
			/** 10818 */
			Survey_Question_Sequence,
			/** 10811 */
			Survey_Response,
			/** 10812 */
			Survey_Response_Value,
			/** 10351 */
			Swarm,
			/** 10352 */
			Swarm_participant,
			/** 10353 */
			Swarm_participant_rule,
			/** 10354 */
			Swarm_role,
			/** 10355 */
			Swarm_skill,
			/** 10356 */
			Swarm_template,
			/** 10030 */
			Synapse_Database,
			/** 10031 */
			Synapse_Link_External_Table_State,
			/** 10032 */
			Synapse_Link_Profile,
			/** 10033 */
			Synapse_Link_Profile_Entity,
			/** 10034 */
			Synapse_Link_Profile_Entity_State,
			/** 10035 */
			Synapse_Link_Schedule,
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
			/** 10483 */
			System_User_Scheduler_Setting,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10764 */
			Tag,
			/** 4212 */
			Task,
			/** 10646 */
			Tax_Code,
			/** 10647 */
			Tax_Code_Detail,
			/** 9 */
			Team,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 10110 */
			TeamMobileOfflineProfileMembership,
			/** 10088 */
			Teams_chat,
			/** 10259 */
			Teams_Contact_Suggestion_by_AI,
			/** 10258 */
			Teams_Dialer_Admin_settings,
			/** 10855 */
			Teams_Engagement_Context,
			/** 10161 */
			Template_For_Properties,
			/** 10189 */
			Template_Parameter,
			/** 10697 */
			Template_Tag_Deprecated,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 9948 */
			Text_Analytics_Topic,
			/** 2015 */
			Theme,
			/** 10573 */
			Three_Dimensional_Model,
			/** 10554 */
			Time_Entry,
			/** 10485 */
			Time_Group_Detail,
			/** 10555 */
			Time_Off_Calendar,
			/** 10648 */
			Time_Off_Request,
			/** 10569 */
			Time_Source,
			/** 10858 */
			Time_spent_in_BPF,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 10953 */
			Toolbar,
			/** 10952 */
			Toolbar_Button,
			/** 9946 */
			Topic_History,
			/** 9944 */
			Topic_Model,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 10075 */
			Tour,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 8052 */
			Trace_Regarding,
			/** 10901 */
			Trace_Source_Setting,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 10802 */
			Training_data_import_configuration,
			/** 10804 */
			Training_record,
			/** 10556 */
			Transaction_Category,
			/** 10557 */
			Transaction_Category_Classification,
			/** 10558 */
			Transaction_Category_Hierarchy_Element,
			/** 10559 */
			Transaction_Category_Price,
			/** 10560 */
			Transaction_Connection,
			/** 10468 */
			Transaction_Origin,
			/** 10561 */
			Transaction_Type,
			/** 10783 */
			Transcript,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 10842 */
			Twitter_account,
			/** 10847 */
			Twitter_Engagement_Context,
			/** 10843 */
			Twitter_handle,
			/** 10869 */
			UII_Action,
			/** 10922 */
			UII_Audit,
			/** 10888 */
			UII_Context,
			/** 10923 */
			UII_Non_Hosted_Application,
			/** 10883 */
			UII_Saved_Session,
			/** 10897 */
			UII_Session_Transfer,
			/** 10912 */
			UII_Workflow,
			/** 10874 */
			UII_Workflow_Step,
			/** 10918 */
			UII_Workflow_Step_Mapping,
			/** 10914 */
			Unified_Interface_Settings,
			/** 10143 */
			Unified_Routing_Setup_Tracker,
			/** 10649 */
			Unique_Number,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 2012 */
			Unresolved_Address,
			/** 10281 */
			UntrackedAppointment,
			/** 4220 */
			UntrackedEmail,
			/** 10139 */
			Upgrade_Run,
			/** 10140 */
			Upgrade_Step,
			/** 10141 */
			Upgrade_Version,
			/** 10784 */
			UR_notification_template,
			/** 10785 */
			UR_Notification_Template_Mapping,
			/** 10273 */
			Usage_Metric,
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
			/** 10955 */
			User_Setting,
			/** 10786 */
			User_settings,
			/** 150 */
			User_Settings,
			/** 10562 */
			User_Work_History,
			/** 10111 */
			UserMobileOfflineProfileMembership,
			/** 1039 */
			View,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 10108 */
			Virtual_Entity_Metadata,
			/** 10147 */
			Virtual_Resource_Group_Resource,
			/** 10328 */
			Wall_View,
			/** 10650 */
			Warehouse,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10844 */
			WeChat_account,
			/** 10848 */
			WeChat_Engagement_Context,
			/** 10845 */
			WhatsApp_account,
			/** 10849 */
			WhatsApp_Engagement_Context,
			/** 10846 */
			WhatsApp_number,
			/** 10956 */
			Window_Navigation_Rule,
			/** 4802 */
			Wizard_Page,
			/** 10307 */
			Work_List_Suggestion,
			/** 10308 */
			Work_list_suggestion_source,
			/** 10312 */
			Work_list_user_setting,
			/** 10309 */
			Work_List_View_Configuration,
			/** 10651 */
			Work_Order,
			/** 10595 */
			Work_Order_Business_Process,
			/** 10652 */
			Work_Order_Characteristic_Deprecated,
			/** 10653 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 10654 */
			Work_Order_Incident,
			/** 10655 */
			Work_Order_Product,
			/** 10673 */
			Work_Order_Resolution,
			/** 10657 */
			Work_Order_Service,
			/** 10658 */
			Work_Order_Service_Task,
			/** 10659 */
			Work_Order_Substatus,
			/** 10660 */
			Work_Order_Type,
			/** 10310 */
			Work_Queue_Record,
			/** 10311 */
			Work_Queue_Record_State,
			/** 10735 */
			Work_Stream,
			/** 10795 */
			Work_stream_capacity_profile,
			/** 10458 */
			Work_template,
			/** 10059 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 10313 */
			WQDataSource
		}
		enum OwnerIdType {
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}