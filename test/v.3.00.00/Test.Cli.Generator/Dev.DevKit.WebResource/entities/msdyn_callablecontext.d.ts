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
	}
}
declare namespace OptionSet {
	namespace msdyn_callablecontext {
		enum msdyn_EntityOTC {
			/** 10217 */
			_Deprecated_Dynamics_Customer_Service_Analytics,
			/** 10814 */
			_DeprecatedTeams_Engagement_Context,
			/** 10017 */
			AAD_User,
			/** 1 */
			Account,
			/** 10433 */
			Account_Project_Price_List,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 10830 */
			Action_Call,
			/** 10829 */
			Action_Call_Workflow,
			/** 9962 */
			Action_Card,
			/** 10258 */
			Action_Card_Regarding,
			/** 10259 */
			Action_Card_Role_Setting,
			/** 9983 */
			Action_Card_Type,
			/** 9973 */
			Action_Card_User_Settings,
			/** 10191 */
			Action_Input_Parameter,
			/** 10192 */
			Action_Output_Parameter,
			/** 9968 */
			ActionCardUserState,
			/** 4200 */
			Activity,
			/** 10085 */
			Activity_File_Attachment,
			/** 10132 */
			Activity_monitor,
			/** 135 */
			Activity_Party,
			/** 10086 */
			Activity_record_for_the_Teams_chat,
			/** 10402 */
			Actual,
			/** 10442 */
			Actual_Data_Export_Deprecated,
			/** 10200 */
			Adaptive_Card_Configuration,
			/** 1071 */
			Address,
			/** 10232 */
			admin_settings_entity,
			/** 10687 */
			AdminAppState,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10188 */
			Agent_script,
			/** 10832 */
			Agent_Script_Answer,
			/** 10189 */
			Agent_script_step,
			/** 10845 */
			Agent_Script_Task,
			/** 10831 */
			Agent_Script_Task_Category,
			/** 10688 */
			Agent_Status_history,
			/** 10524 */
			Agreement,
			/** 10525 */
			Agreement_Booking_Date,
			/** 10526 */
			Agreement_Booking_Incident,
			/** 10527 */
			Agreement_Booking_Product,
			/** 10528 */
			Agreement_Booking_Service,
			/** 10529 */
			Agreement_Booking_Service_Task,
			/** 10530 */
			Agreement_Booking_Setup,
			/** 10539 */
			Agreement_Business_Process,
			/** 10531 */
			Agreement_Invoice_Date,
			/** 10532 */
			Agreement_Invoice_Product,
			/** 10533 */
			Agreement_Invoice_Setup,
			/** 10534 */
			Agreement_Substatus,
			/** 10066 */
			AI_Builder_Dataset,
			/** 10067 */
			AI_Builder_Dataset_File,
			/** 10068 */
			AI_Builder_Dataset_Record,
			/** 10069 */
			AI_Builder_Datasets_Container,
			/** 10878 */
			AI_Builder_Feedback_Loop,
			/** 10070 */
			AI_Builder_File,
			/** 10071 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 10060 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10063 */
			AI_Object_Detection_Bounding_Box,
			/** 10061 */
			AI_Object_Detection_Image,
			/** 10064 */
			AI_Object_Detection_Image_Mapping,
			/** 10062 */
			AI_Object_Detection_Label,
			/** 400 */
			AI_Template,
			/** 10119 */
			Analysis_Component,
			/** 10120 */
			Analysis_Job,
			/** 10121 */
			Analysis_Result,
			/** 10122 */
			Analysis_Result_Detail,
			/** 132 */
			Announcement,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 10114 */
			App_Action,
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
			/** 10654 */
			App_Parameter_Definition_Deprecated,
			/** 10170 */
			App_profile,
			/** 10171 */
			Application_Extension,
			/** 4707 */
			Application_File,
			/** 1120 */
			Application_Ribbons,
			/** 10172 */
			Application_Tab_Template,
			/** 10656 */
			Application_Tab_Template_Deprecated,
			/** 10659 */
			Application_Type_Deprecated,
			/** 10051 */
			ApplicationUser,
			/** 8700 */
			AppModule_Metadata,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 4201 */
			Appointment,
			/** 10515 */
			Approval_Set,
			/** 127 */
			Article,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 10139 */
			Asset_Category_Template_Association,
			/** 10629 */
			Asset_Suggestion,
			/** 10642 */
			Asset_Suggestions_Setting,
			/** 10140 */
			Asset_Template_Association,
			/** 10677 */
			Assignment_Configuration,
			/** 10678 */
			Assignment_Configuration_Step,
			/** 10283 */
			Assignment_Map,
			/** 10280 */
			Assignment_Rule,
			/** 10759 */
			Attach_Skill,
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 10281 */
			Attribute_10281,
			/** 9808 */
			Attribute_9808,
			/** 4601 */
			Attribute_Map,
			/** 10282 */
			Attribute_Value,
			/** 10742 */
			Audio_File,
			/** 10833 */
			Audit_Diagnostics_Setting,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 10701 */
			Auto_block_rule,
			/** 10263 */
			Auto_Capture_Rule,
			/** 10264 */
			Auto_Capture_Settings,
			/** 10134 */
			Available_Times,
			/** 10135 */
			Available_Times_Data_Source,
			/** 9936 */
			Azure_Service_Connection,
			/** 10435 */
			Batch_Job,
			/** 1150 */
			Bookable_Resource,
			/** 10403 */
			Bookable_Resource_Association,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 10623 */
			Bookable_Resource_Booking_Quick_Note,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 10753 */
			Bookable_Resource_Capacity_Profile,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 10404 */
			Booking_Alert,
			/** 10405 */
			Booking_Alert_Status,
			/** 10406 */
			Booking_Change,
			/** 10535 */
			Booking_Journal,
			/** 10407 */
			Booking_Rule,
			/** 10408 */
			Booking_Setup_Metadata,
			/** 1152 */
			Booking_Status,
			/** 10536 */
			Booking_Timestamp,
			/** 10074 */
			BotContent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4405 */
			Bulk_Operation_Log,
			/** 10409 */
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
			/** 10048 */
			CanvasApp_Extended_Metadata,
			/** 10679 */
			Capacity_Profile,
			/** 10794 */
			Carrier,
			/** 10038 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10039 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 112 */
			Case,
			/** 10203 */
			Case_Enrichment,
			/** 4206 */
			Case_Resolution,
			/** 10204 */
			Case_Suggestion,
			/** 10205 */
			Case_Suggestion_Request_Payload,
			/** 10206 */
			Case_Suggestions_Data_Souce,
			/** 10538 */
			Case_to_Work_Order_Business_Process,
			/** 10218 */
			Case_Topic,
			/** 10221 */
			Case_topic_Incident_mapping,
			/** 10219 */
			Case_Topic_Setting,
			/** 10220 */
			Case_Topic_Summary,
			/** 10018 */
			Catalog,
			/** 10019 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 10635 */
			CFS_IoT_Alert_Process_Flow,
			/** 10668 */
			channel,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 10704 */
			Channel_api_method_mapping,
			/** 10692 */
			Channel_Capability,
			/** 10684 */
			Channel_Configuration,
			/** 10651 */
			Channel_Integration_Framework_v10_Provider,
			/** 10182 */
			Channel_Integration_Framework_v20_Provider,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10685 */
			Channel_State_Configuration,
			/** 1141 */
			Characteristic,
			/** 10762 */
			Characteristic_mapping,
			/** 10772 */
			Chat_Authentication_Settings,
			/** 10777 */
			Chat_Widget,
			/** 10776 */
			Chat_Widget_Languagedeprecated,
			/** 10779 */
			Chat_Widget_Location,
			/** 10076 */
			Chatbot,
			/** 10077 */
			Chatbot_subcomponent,
			/** 113 */
			Child_Incident_Count,
			/** 10410 */
			Client_Extension,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 10083 */
			Comment_10083,
			/** 8005 */
			Comment_8005,
			/** 4215 */
			Commitment,
			/** 10791 */
			Communication_Provider_Setting,
			/** 10792 */
			Communication_Provider_Setting_Entry,
			/** 10438 */
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
			/** 10411 */
			Configuration_10411,
			/** 10834 */
			Configuration_10834,
			/** 3234 */
			Connection,
			/** 10059 */
			Connection_Reference,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 2 */
			Contact,
			/** 10439 */
			Contact_Price_List,
			/** 10244 */
			Contact_suggestion_rule,
			/** 10245 */
			Contact_suggestion_ruleset,
			/** 17 */
			ContactInvoices,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 10710 */
			Context_item_value,
			/** 10713 */
			Context_variable,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 10516 */
			Contract_Line_Detail_Performance,
			/** 10517 */
			Contract_Performance,
			/** 2011 */
			Contract_Template,
			/** 10707 */
			Conversation,
			/** 10693 */
			Conversation_Action,
			/** 10694 */
			Conversation_Action_Locale,
			/** 10755 */
			Conversation_Capacity_profile,
			/** 10756 */
			Conversation_Characteristic,
			/** 10233 */
			Conversation_Data_Deprecated,
			/** 10712 */
			Conversation_Sentiment,
			/** 10785 */
			Conversation_Topic,
			/** 10788 */
			Conversation_topic_Conversation_mapping,
			/** 10786 */
			Conversation_Topic_Setting,
			/** 10787 */
			Conversation_Topic_Summary,
			/** 10784 */
			ConversationInsight,
			/** 10783 */
			conversationsuggestionrequestpayload,
			/** 10075 */
			ConversationTranscript,
			/** 10842 */
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
			/** 10683 */
			Custom_messaging_account,
			/** 10803 */
			Custom_messaging_channel,
			/** 10801 */
			Custom_Messaging_Engagement_Context,
			/** 10141 */
			Customer_Asset,
			/** 10142 */
			Customer_Asset_Attachment,
			/** 10143 */
			Customer_Asset_Category,
			/** 4502 */
			Customer_Relationship,
			/** 10222 */
			Customer_Service_historical_analytics,
			/** 10313 */
			Customer_Voice_alert,
			/** 10314 */
			Customer_Voice_alert_rule,
			/** 10316 */
			Customer_Voice_file_response,
			/** 10317 */
			Customer_Voice_localized_survey_email_template,
			/** 10318 */
			Customer_Voice_project,
			/** 10321 */
			Customer_Voice_satisfaction_metric,
			/** 10322 */
			Customer_Voice_survey,
			/** 10315 */
			Customer_Voice_survey_email_template,
			/** 10323 */
			Customer_Voice_survey_invite,
			/** 10319 */
			Customer_Voice_survey_question,
			/** 10320 */
			Customer_Voice_survey_question_response,
			/** 10324 */
			Customer_Voice_survey_reminder,
			/** 10325 */
			Customer_Voice_survey_response,
			/** 10326 */
			Customer_Voice_unsubscribed_recipient,
			/** 10835 */
			Customization_File,
			/** 10214 */
			Data_Analytics_Admin_Settings_Deprecated,
			/** 10215 */
			Data_Analytics_Report,
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
			/** 10111 */
			Data_Sync_State,
			/** 10128 */
			Database_Version,
			/** 418 */
			Dataflow,
			/** 10036 */
			DataflowRefreshHistory,
			/** 10298 */
			Deal_manager_settings,
			/** 10297 */
			dealmanageraccess,
			/** 10670 */
			Decision_contract,
			/** 10671 */
			Decision_rule_set,
			/** 10443 */
			Delegation,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10695 */
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
			/** 10305 */
			Duplicate_Detection_Plugin_Run,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 10306 */
			Duplicate_Lead_Mapping,
			/** 4415 */
			Duplicate_Record,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 10768 */
			Effort_estimate,
			/** 10769 */
			Effort_estimation_model,
			/** 10770 */
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
			/** 10541 */
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
			/** 10696 */
			Entity_10696,
			/** 9800 */
			Entity_9800,
			/** 430 */
			Entity_Analytics_Config,
			/** 10638 */
			Entity_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 9815 */
			Entity_Index,
			/** 9810 */
			Entity_Key,
			/** 10246 */
			Entity_link_chat_configuration,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 10691 */
			Entity_Routing_Context,
			/** 10837 */
			Entity_Search,
			/** 10836 */
			Entity_Type,
			/** 10260 */
			EntityRankingRule,
			/** 10037 */
			EntityRefreshHistory,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10446 */
			Estimate,
			/** 10447 */
			Estimate_Line,
			/** 10850 */
			Event,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 10448 */
			Expense,
			/** 10449 */
			Expense_Category,
			/** 10450 */
			Expense_Receipt,
			/** 955 */
			Expired_Process,
			/** 10011 */
			ExportSolutionUpload,
			/** 10287 */
			Extended_User_Setting,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 10799 */
			Facebook_Application,
			/** 10798 */
			Facebook_Engagement_Context,
			/** 10800 */
			Facebook_Page,
			/** 4000 */
			FacilityEquipment,
			/** 10451 */
			Fact,
			/** 4204 */
			Fax,
			/** 10012 */
			FeatureControlSetting,
			/** 9958 */
			Feedback,
			/** 10452 */
			Field_Computation,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 10643 */
			Field_service_historical_analytics,
			/** 10542 */
			Field_Service_Price_List_Item,
			/** 10543 */
			Field_Service_Setting,
			/** 10544 */
			Field_Service_SLA_Configuration,
			/** 10545 */
			Field_Service_System_Job,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 10312 */
			Filter,
			/** 30 */
			Filter_Template,
			/** 10453 */
			Find_Work_Event_Deprecated_in_v30,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10705 */
			Flagged_spam,
			/** 10055 */
			Flow_Machine,
			/** 10056 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 10261 */
			flowcardtype,
			/** 8003 */
			Follow,
			/** 10251 */
			Forecast,
			/** 10249 */
			Forecast_Configuration,
			/** 10250 */
			Forecast_definition,
			/** 10252 */
			Forecast_recurrence,
			/** 10838 */
			Form,
			/** 10427 */
			Fulfillment_Preference,
			/** 10144 */
			Functional_Location,
			/** 10253 */
			GDPRData,
			/** 10726 */
			Geo_Location_Provider,
			/** 10639 */
			Geofence,
			/** 10640 */
			Geofence_Event,
			/** 10641 */
			Geofencing_Settings,
			/** 10636 */
			Geolocation_Settings,
			/** 10637 */
			Geolocation_Tracking,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9603 */
			Goal_Metric,
			/** 10072 */
			Help_Page,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
			/** 10821 */
			Hosted_Control,
			/** 10271 */
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
			/** 10546 */
			Incident_Type,
			/** 10547 */
			Incident_Type_Characteristic,
			/** 10548 */
			Incident_Type_Product,
			/** 10552 */
			Incident_Type_Requirement_Group,
			/** 10628 */
			Incident_Type_Resolution,
			/** 10549 */
			Incident_Type_Service,
			/** 10550 */
			Incident_Type_Service_Task,
			/** 10626 */
			Incident_Type_Suggestion_Result,
			/** 10627 */
			Incident_Type_Suggestion_Run_History,
			/** 10551 */
			Incident_Types_Setup,
			/** 9816 */
			Index_Attribute,
			/** 126 */
			Indexed_Article,
			/** 10216 */
			Insights,
			/** 10522 */
			Inspection,
			/** 10520 */
			Inspection_Attachment,
			/** 10523 */
			Inspection_Response,
			/** 10519 */
			Inspection_Template,
			/** 10521 */
			Inspection_Template_Version,
			/** 10454 */
			Integration_Job,
			/** 10455 */
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
			/** 10553 */
			Inventory_Adjustment,
			/** 10554 */
			Inventory_Adjustment_Product,
			/** 10555 */
			Inventory_Journal,
			/** 10556 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10456 */
			Invoice_Frequency,
			/** 10457 */
			Invoice_Frequency_Detail,
			/** 1091 */
			Invoice_Line,
			/** 10458 */
			Invoice_Line_Detail,
			/** 10437 */
			Invoice_Process,
			/** 10152 */
			IoT_Alert,
			/** 10168 */
			IoT_Alert_to_Case_Process,
			/** 10153 */
			IoT_Device,
			/** 10154 */
			IoT_Device_Category,
			/** 10155 */
			IoT_Device_Command,
			/** 10156 */
			IoT_Device_Command_Definition,
			/** 10157 */
			IoT_Device_Data_History,
			/** 10158 */
			IoT_Device_Property,
			/** 10159 */
			IoT_Device_Registration_History,
			/** 10160 */
			IoT_Device_Visualization_Configuration,
			/** 10161 */
			IoT_Field_Mapping,
			/** 10162 */
			IoT_Property_Definition,
			/** 10163 */
			IoT_Provider,
			/** 10164 */
			IoT_Provider_Instance,
			/** 10165 */
			IoT_Settings,
			/** 4705 */
			ISV_Config,
			/** 10459 */
			Journal,
			/** 10460 */
			Journal_Line,
			/** 10207 */
			KB_Enrichment,
			/** 10104 */
			Key_Vault_Reference,
			/** 10224 */
			Keywords_Description_Suggestion_Setting,
			/** 10223 */
			Knowledge_analytics,
			/** 9953 */
			Knowledge_Article,
			/** 10096 */
			Knowledge_Article_Attachment,
			/** 9960 */
			Knowledge_Article_Category,
			/** 10092 */
			Knowledge_Article_Image,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 10095 */
			Knowledge_article_language_setting,
			/** 10208 */
			Knowledge_Article_Suggestion,
			/** 10209 */
			Knowledge_Article_Suggestion_Data_Source,
			/** 10098 */
			Knowledge_Article_Template,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 10089 */
			Knowledge_Federated_Article,
			/** 10090 */
			Knowledge_Federated_Article_Incident,
			/** 10093 */
			Knowledge_Interaction_Insight,
			/** 10099 */
			Knowledge_Management_Setting,
			/** 10097 */
			Knowledge_personalization,
			/** 10101 */
			Knowledge_search_filter,
			/** 10094 */
			Knowledge_Search_Insight,
			/** 9947 */
			Knowledge_Search_Model,
			/** 10100 */
			Knowledge_search_personal_filter_config,
			/** 10234 */
			KPI_Event_Data,
			/** 10235 */
			KPI_Event_Definition,
			/** 10706 */
			Language_10706,
			/** 9957 */
			Language_9957,
			/** 10839 */
			Language_Module,
			/** 9875 */
			Language_Provisioning_State,
			/** 4 */
			Lead,
			/** 1017 */
			Lead_Address,
			/** 10307 */
			Lead_Hygiene_Setting,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 24 */
			LeadCompetitors,
			/** 10303 */
			LeadModelConfig,
			/** 27 */
			LeadProduct,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 8006 */
			Like,
			/** 10804 */
			LINE_account,
			/** 10802 */
			LINE_Engagement_Context,
			/** 10126 */
			List_Operation,
			/** 4418 */
			List_Value_Mapping,
			/** 10778 */
			Live_Chat_Context,
			/** 10698 */
			Live_work_item_event,
			/** 10711 */
			Live_Work_Item_Participant_Deprecated,
			/** 9201 */
			LocalConfigStore,
			/** 10714 */
			Localization,
			/** 10780 */
			Localized_Survey_Question_Deprecated,
			/** 4419 */
			Lookup_Mapping,
			/** 10193 */
			Macro_Action_Template,
			/** 10195 */
			Macro_Connector,
			/** 10196 */
			Macro_Run_History,
			/** 10194 */
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
			/** 10105 */
			Managed_Identity,
			/** 9812 */
			Managed_Property,
			/** 10127 */
			Marketing_Form_Display_Attributes,
			/** 4300 */
			Marketing_List,
			/** 4301 */
			Marketing_List_Member,
			/** 10647 */
			MarketingSiteMap,
			/** 10700 */
			Masking_Rule,
			/** 10675 */
			Master_Entity_Routing_Configuration,
			/** 10724 */
			Message,
			/** 4231 */
			Metadata_Difference,
			/** 10813 */
			Microsoft_Teams_account,
			/** 10247 */
			Microsoft_Teams_chat_association_entity,
			/** 10248 */
			Microsoft_Teams_chat_suggestion,
			/** 10241 */
			Microsoft_Teams_Collaboration_entity,
			/** 10238 */
			Microsoft_Teams_Graph_resource_Entity,
			/** 10138 */
			Migration_tracker,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 10907 */
			MobileOfflineProfileItemFilter,
			/** 9006 */
			Model_driven_App,
			/** 10043 */
			Model_Driven_App_Component_Node,
			/** 10042 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10041 */
			Model_Driven_App_Element,
			/** 10044 */
			Model_Driven_App_Setting,
			/** 10045 */
			Model_Driven_App_User_Setting,
			/** 10760 */
			Model_training_details,
			/** 10304 */
			ModelPreviewStatus,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10239 */
			msdyn_msteamssetting,
			/** 10240 */
			msdyn_msteamssettingsv2,
			/** 10254 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 9900 */
			Navigation_Setting,
			/** 950 */
			New_Process,
			/** 10112 */
			NonRelational_Data_Source,
			/** 5 */
			Note,
			/** 10270 */
			Notes_analysis_Config,
			/** 10113 */
			Notification_10113,
			/** 4110 */
			Notification_4110,
			/** 10173 */
			Notification_Field,
			/** 10652 */
			Notification_Field_Deprecated,
			/** 10174 */
			Notification_Template,
			/** 10653 */
			Notification_Template_Deprecated,
			/** 10054 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 10702 */
			Omnichannel_channel_api_conversation_privilege,
			/** 10703 */
			Omnichannel_channel_api_message_privilege,
			/** 10727 */
			Omnichannel_Configuration,
			/** 10789 */
			Omnichannel_historical_analytics,
			/** 10728 */
			Omnichannel_Personalization,
			/** 10729 */
			Omnichannel_Queue_Deprecated,
			/** 10716 */
			Omnichannel_Request,
			/** 10730 */
			Omnichannel_Sync_Config,
			/** 10790 */
			Omnichannel_voice_historical_analytics_preview_Deprecated,
			/** 10697 */
			Ongoing_conversation_Deprecated,
			/** 10731 */
			Operating_Hour,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 1083 */
			Opportunity_Line,
			/** 10463 */
			Opportunity_Line_Detail_Deprecated,
			/** 10462 */
			Opportunity_Line_Resource_Category_Deprecated,
			/** 10464 */
			Opportunity_Line_Transaction_Category_Deprecated,
			/** 10465 */
			Opportunity_Line_Transaction_Classification_Deprecated,
			/** 10466 */
			Opportunity_Project_Price_List,
			/** 4503 */
			Opportunity_Relationship,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 10302 */
			OpportunityModelConfig,
			/** 10823 */
			Option,
			/** 9809 */
			OptionSet,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 10557 */
			Order_Invoicing_Date,
			/** 10558 */
			Order_Invoicing_Product,
			/** 10559 */
			Order_Invoicing_Setup,
			/** 10560 */
			Order_Invoicing_Setup_Date,
			/** 1089 */
			Order_Line,
			/** 1019 */
			Organization,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 10046 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 10412 */
			Organizational_Unit,
			/** 10880 */
			OrganizationDataSyncState,
			/** 10109 */
			OrganizationDataSyncSubscription,
			/** 10110 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10816 */
			Outbound_Configuration,
			/** 10817 */
			Outbound_message,
			/** 10680 */
			Overflow_Action_Config,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10008 */
			Package,
			/** 10185 */
			Pane_tab_configuration,
			/** 10186 */
			Pane_tool_configuration,
			/** 10197 */
			Parameter_definition,
			/** 10657 */
			Parameter_Deprecated,
			/** 1095 */
			Partner_Application,
			/** 10561 */
			Payment,
			/** 10562 */
			Payment_Detail,
			/** 10563 */
			Payment_Method,
			/** 10564 */
			Payment_Term,
			/** 10084 */
			PDF_Setting,
			/** 10734 */
			Persona_Security_Role_Mapping,
			/** 9941 */
			Personal_Document_Template,
			/** 10732 */
			Personal_quick_reply,
			/** 10733 */
			Personal_sound_setting,
			/** 4210 */
			Phone_Call,
			/** 10793 */
			Phone_Number,
			/** 952 */
			Phone_To_Case_Process,
			/** 10229 */
			Playbook,
			/** 10226 */
			Playbook_activity,
			/** 10227 */
			Playbook_activity_attribute,
			/** 10225 */
			Playbook_Callable_Context,
			/** 10228 */
			Playbook_category,
			/** 10230 */
			Playbook_template,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 10103 */
			Plugin_Package,
			/** 10117 */
			PM_Inferred_Task,
			/** 10118 */
			PM_Recording,
			/** 50 */
			Position,
			/** 8000 */
			Post,
			/** 10309 */
			Post_Configuration,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 10310 */
			Post_Rule_Configuration,
			/** 10565 */
			Postal_Code,
			/** 10689 */
			Power_BI_Configuration,
			/** 10645 */
			Predictive_duration_preview,
			/** 10300 */
			Predictive_Model_Score,
			/** 10301 */
			Predictive_Score,
			/** 10646 */
			Predictive_Work_Hour_Duration_Setting,
			/** 10735 */
			Presence,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10444 */
			Pricing_Dimension,
			/** 10445 */
			Pricing_Dimension_Field_Name,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 61 */
			PrincipalEntityBusinessUnitMap,
			/** 10413 */
			Priority,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 103 */
			Privileges_Removal_Setting,
			/** 10630 */
			Problematic_Asset_Feedback,
			/** 4703 */
			Process,
			/** 9650 */
			Process_Configuration,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 10472 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 4712 */
			Process_Trigger,
			/** 10057 */
			ProcessStageParameter,
			/** 1024 */
			Product,
			/** 1025 */
			Product_Association,
			/** 10566 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10184 */
			Productivity_pane_configuration,
			/** 21 */
			ProductSalesLiterature,
			/** 10308 */
			Profile_Album,
			/** 10473 */
			Project,
			/** 10474 */
			Project_Approval,
			/** 10468 */
			Project_Contract_Line_Detail,
			/** 10440 */
			Project_Contract_Line_Invoice_Schedule,
			/** 10441 */
			Project_Contract_Line_Milestone,
			/** 10467 */
			Project_Contract_Line_Resource_Category,
			/** 10469 */
			Project_Contract_Line_Transaction_Category,
			/** 10470 */
			Project_Contract_Line_Transaction_Classification,
			/** 10471 */
			Project_Contract_Project_Price_List,
			/** 10475 */
			Project_Parameter,
			/** 10476 */
			Project_Parameter_Price_List,
			/** 10477 */
			Project_Price_List,
			/** 10434 */
			Project_Service_Approval,
			/** 10436 */
			Project_Stages,
			/** 10478 */
			Project_Task,
			/** 10479 */
			Project_Task_Dependency,
			/** 10480 */
			Project_Task_Status_User,
			/** 10481 */
			Project_Team_Member,
			/** 10482 */
			Project_Team_Member_Sign_Up_Deprecated_in_v30,
			/** 10483 */
			Project_Transaction_Category_Deprecated,
			/** 1048 */
			Property,
			/** 10146 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10145 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10147 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10148 */
			Property_Template_Association,
			/** 10736 */
			Provider,
			/** 10686 */
			Provisioning_State,
			/** 10024 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 10567 */
			Purchase_Order,
			/** 10568 */
			Purchase_Order_Bill,
			/** 10537 */
			Purchase_Order_Business_Process,
			/** 10569 */
			Purchase_Order_Product,
			/** 10570 */
			Purchase_Order_Receipt,
			/** 10571 */
			Purchase_Order_Receipt_Product,
			/** 10572 */
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
			/** 10690 */
			Quick_reply,
			/** 1084 */
			Quote,
			/** 10573 */
			Quote_Booking_Incident,
			/** 10574 */
			Quote_Booking_Product,
			/** 10575 */
			Quote_Booking_Service,
			/** 10576 */
			Quote_Booking_Service_Task,
			/** 10577 */
			Quote_Booking_Setup,
			/** 4211 */
			Quote_Close,
			/** 10578 */
			Quote_Invoicing_Product,
			/** 10579 */
			Quote_Invoicing_Setup,
			/** 1085 */
			Quote_Line,
			/** 10484 */
			Quote_Line_Analytics_Breakdown,
			/** 10488 */
			Quote_Line_Detail,
			/** 10485 */
			Quote_Line_Invoice_Schedule,
			/** 10487 */
			Quote_Line_Milestone,
			/** 10486 */
			Quote_Line_Resource_Category,
			/** 10489 */
			Quote_Line_Transaction_Category,
			/** 10490 */
			Quote_Line_Transaction_Classification,
			/** 10491 */
			Quote_Project_Price_List,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 10299 */
			Recording_10299,
			/** 10715 */
			Recording_10715,
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
			/** 10414 */
			Requirement_Characteristic,
			/** 10431 */
			Requirement_Dependency,
			/** 10415 */
			Requirement_Group,
			/** 10416 */
			Requirement_Organization_Unit,
			/** 10417 */
			Requirement_Relationship,
			/** 10418 */
			Requirement_Resource_Category,
			/** 10419 */
			Requirement_Resource_Preference,
			/** 10420 */
			Requirement_Status,
			/** 10631 */
			Resolution,
			/** 4002 */
			Resource,
			/** 10492 */
			Resource_Assignment,
			/** 10493 */
			Resource_Assignment_Detail_Deprecated_in_v20,
			/** 10644 */
			Resource_duration_preview,
			/** 4010 */
			Resource_Expansion,
			/** 4007 */
			Resource_Group,
			/** 10136 */
			resource_group_data_source,
			/** 10580 */
			Resource_Pay_Type,
			/** 10496 */
			Resource_Request,
			/** 10421 */
			Resource_Requirement,
			/** 10422 */
			Resource_Requirement_Detail,
			/** 10601 */
			Resource_Restriction_Deprecated,
			/** 4006 */
			Resource_Specification,
			/** 10423 */
			Resource_Territory,
			/** 10461 */
			Result_Cache,
			/** 10040 */
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
			/** 10115 */
			Rich_Text_Attachment,
			/** 10581 */
			RMA,
			/** 10582 */
			RMA_Product,
			/** 10583 */
			RMA_Receipt,
			/** 10584 */
			RMA_Receipt_Product,
			/** 10585 */
			RMA_SubStatus,
			/** 10497 */
			Role_competency_requirement,
			/** 10495 */
			Role_Price,
			/** 10494 */
			Role_Price_Markup,
			/** 1037 */
			Role_Template,
			/** 10498 */
			Role_Utilization,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 9602 */
			Rollup_Query,
			/** 10681 */
			Routing_configuration,
			/** 10682 */
			Routing_configuration_step,
			/** 10674 */
			Routing_diagnostic,
			/** 10673 */
			Routing_diagnostic_item,
			/** 8181 */
			Routing_Rule_Set,
			/** 10676 */
			Routing_Rule_Set_Setting,
			/** 10737 */
			RoutingRequest,
			/** 10586 */
			RTV,
			/** 10587 */
			RTV_Product,
			/** 10588 */
			RTV_Substatus,
			/** 10717 */
			Rule_Item_10717,
			/** 8199 */
			Rule_Item_8199,
			/** 10672 */
			Rulesetentitymapping,
			/** 7200 */
			RuntimeDependency,
			/** 10288 */
			Sales_Acceleration_settings,
			/** 10284 */
			Sales_Assignment_Setting,
			/** 1070 */
			Sales_Attachment,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 10285 */
			Sales_routing_run,
			/** 10272 */
			Sales_Tag,
			/** 10877 */
			Sales_usage_telemetry_reports,
			/** 10262 */
			salesinsightssettings,
			/** 10648 */
			SalesSiteMap,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
			/** 10669 */
			Scenario,
			/** 10424 */
			Schedule_Board_Setting,
			/** 10432 */
			Scheduling_Feature_Flag,
			/** 4005 */
			Scheduling_Group,
			/** 10425 */
			Scheduling_Parameter,
			/** 10841 */
			Script_Task_Trigger,
			/** 10840 */
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
			/** 10738 */
			Search_Configuration,
			/** 10091 */
			Search_provider,
			/** 10116 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 10278 */
			Segment,
			/** 10279 */
			SegmentsUtil,
			/** 10748 */
			Self_service,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10739 */
			Sentiment_analysis,
			/** 10718 */
			Sentiment_daily_topic,
			/** 10719 */
			Sentiment_daily_topic_keyword,
			/** 10720 */
			Sentiment_daily_topic_trending,
			/** 10273 */
			Sequence,
			/** 10274 */
			Sequence_Stat,
			/** 10275 */
			Sequence_Target,
			/** 10276 */
			Sequence_Target_Step,
			/** 10906 */
			Sequence_Template,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 10087 */
			Service_Configuration,
			/** 20 */
			Service_Contract_Contact,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 10049 */
			Service_Plan_Mapping,
			/** 10589 */
			Service_Task_Type,
			/** 10649 */
			ServicesSiteMap,
			/** 10721 */
			Session,
			/** 10757 */
			Session_Characteristic,
			/** 10236 */
			Session_Data_Deprecated,
			/** 10740 */
			Session_event,
			/** 10843 */
			Session_Information,
			/** 10741 */
			Session_participant,
			/** 10237 */
			Session_Participant_Data_Deprecated,
			/** 10722 */
			Session_Participant_Event,
			/** 10723 */
			Session_Sentiment,
			/** 10175 */
			Session_Template,
			/** 10655 */
			Session_Templates_Deprecated,
			/** 10844 */
			Session_Transfer,
			/** 10047 */
			Setting_Definition,
			/** 10650 */
			SettingsSiteMap,
			/** 10879 */
			Shared_Link_Setting,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 10590 */
			Ship_Via,
			/** 10256 */
			SI_Key_Value_Config,
			/** 10255 */
			siconfig,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 4709 */
			Site_Map,
			/** 10758 */
			Skill_Attachment_Rule,
			/** 10764 */
			Skill_finder_model,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 10088 */
			SLA_KPI,
			/** 9752 */
			SLA_KPI_Instance,
			/** 10201 */
			Smartassist_configuration,
			/** 10796 */
			SMS_Engagement_Context,
			/** 10797 */
			SMS_Number,
			/** 10795 */
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
			/** 10123 */
			Solution_Health_Rule,
			/** 10124 */
			Solution_Health_Rule_Argument,
			/** 10125 */
			Solution_Health_Rule_Set,
			/** 10004 */
			Solution_History,
			/** 10005 */
			Solution_History_Data_Source,
			/** 9890 */
			SolutionHistoryData,
			/** 10743 */
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
			/** 10266 */
			Suggested_Activity,
			/** 10267 */
			Suggested_Activity_Data_Source,
			/** 10268 */
			Suggested_Contact,
			/** 10269 */
			Suggested_contacts_data_source,
			/** 10289 */
			Suggestion,
			/** 10210 */
			Suggestion_Interaction,
			/** 10211 */
			Suggestion_request_payload,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10212 */
			Suggestions_Model_Summary,
			/** 10213 */
			Suggestions_Setting,
			/** 10773 */
			Survey_Answer_Option,
			/** 10782 */
			Survey_Question,
			/** 10781 */
			Survey_Question_Sequence,
			/** 10774 */
			Survey_Response,
			/** 10775 */
			Survey_Response_Value,
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
			/** 10426 */
			System_User_Scheduler_Setting,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10725 */
			Tag,
			/** 4212 */
			Task,
			/** 10591 */
			Tax_Code,
			/** 10592 */
			Tax_Code_Detail,
			/** 9 */
			Team,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 10107 */
			TeamMobileOfflineProfileMembership,
			/** 10243 */
			Teams_Contact_Suggestion_by_AI,
			/** 10242 */
			Teams_Dialer_Admin_settings,
			/** 10815 */
			Teams_Engagement_Context,
			/** 10149 */
			Template_For_Properties,
			/** 10176 */
			Template_Parameter,
			/** 10658 */
			Template_Tag_Deprecated,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 9948 */
			Text_Analytics_Topic,
			/** 2015 */
			Theme,
			/** 10518 */
			Three_Dimensional_Model,
			/** 10499 */
			Time_Entry,
			/** 10428 */
			Time_Group_Detail,
			/** 10500 */
			Time_Off_Calendar,
			/** 10593 */
			Time_Off_Request,
			/** 10514 */
			Time_Source,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 10847 */
			Toolbar,
			/** 10846 */
			Toolbar_Button,
			/** 9946 */
			Topic_History,
			/** 9944 */
			Topic_Model,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 10073 */
			Tour,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 8052 */
			Trace_Regarding,
			/** 10848 */
			Trace_Source_Setting,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 10761 */
			Training_data_import_configuration,
			/** 10763 */
			Training_record,
			/** 10501 */
			Transaction_Category,
			/** 10502 */
			Transaction_Category_Classification,
			/** 10503 */
			Transaction_Category_Hierarchy_Element,
			/** 10504 */
			Transaction_Category_Price,
			/** 10505 */
			Transaction_Connection,
			/** 10429 */
			Transaction_Origin,
			/** 10506 */
			Transaction_Type,
			/** 10744 */
			Transcript,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 10805 */
			Twitter_account,
			/** 10810 */
			Twitter_Engagement_Context,
			/** 10806 */
			Twitter_handle,
			/** 10818 */
			UII_Action,
			/** 10819 */
			UII_Audit,
			/** 10820 */
			UII_Context,
			/** 10822 */
			UII_Non_Hosted_Application,
			/** 10824 */
			UII_Saved_Session,
			/** 10825 */
			UII_Session_Transfer,
			/** 10826 */
			UII_Workflow,
			/** 10827 */
			UII_Workflow_Step,
			/** 10828 */
			UII_Workflow_Step_Mapping,
			/** 10849 */
			Unified_Interface_Settings,
			/** 10133 */
			Unified_Routing_Setup_Tracker,
			/** 10594 */
			Unique_Number,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 2012 */
			Unresolved_Address,
			/** 10265 */
			UntrackedAppointment,
			/** 4220 */
			UntrackedEmail,
			/** 10129 */
			Upgrade_Run,
			/** 10130 */
			Upgrade_Step,
			/** 10131 */
			Upgrade_Version,
			/** 10745 */
			UR_notification_template,
			/** 10746 */
			UR_Notification_Template_Mapping,
			/** 10257 */
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
			/** 10851 */
			User_Setting,
			/** 10747 */
			User_settings,
			/** 150 */
			User_Settings,
			/** 10507 */
			User_Work_History,
			/** 10108 */
			UserMobileOfflineProfileMembership,
			/** 1039 */
			View,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 10106 */
			Virtual_Entity_Metadata,
			/** 10137 */
			Virtual_Resource_Group_Resource,
			/** 10311 */
			Wall_View,
			/** 10595 */
			Warehouse,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10807 */
			WeChat_account,
			/** 10811 */
			WeChat_Engagement_Context,
			/** 10808 */
			WhatsApp_account,
			/** 10812 */
			WhatsApp_Engagement_Context,
			/** 10809 */
			WhatsApp_number,
			/** 10852 */
			Window_Navigation_Rule,
			/** 4802 */
			Wizard_Page,
			/** 10290 */
			Work_List_Suggestion,
			/** 10291 */
			Work_list_suggestion_source,
			/** 10295 */
			Work_list_user_setting,
			/** 10292 */
			Work_List_View_Configuration,
			/** 10596 */
			Work_Order,
			/** 10540 */
			Work_Order_Business_Process,
			/** 10597 */
			Work_Order_Characteristic_Deprecated,
			/** 10598 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 10599 */
			Work_Order_Incident,
			/** 10600 */
			Work_Order_Product,
			/** 10634 */
			Work_Order_Resolution,
			/** 10602 */
			Work_Order_Service,
			/** 10603 */
			Work_Order_Service_Task,
			/** 10604 */
			Work_Order_Substatus,
			/** 10605 */
			Work_Order_Type,
			/** 10293 */
			Work_Queue_Record,
			/** 10294 */
			Work_Queue_Record_State,
			/** 10699 */
			Work_Stream,
			/** 10754 */
			Work_stream_capacity_profile,
			/** 10430 */
			Work_template,
			/** 10058 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 10296 */
			WQDataSource
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}