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
		/** Unique identifier for entity instances */
		msdyn_callablecontextId: DevKit.WebApi.GuidValue;
		/** The name of the custom entity. */
		msdyn_EntityLogicalName: DevKit.WebApi.StringValue;
		/** Internal Use Only */
		msdyn_EntityOTC: DevKit.WebApi.OptionSetValue;
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
		/** Status of the Playbook Callable Context */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Playbook Callable Context */
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
	namespace msdyn_callablecontext {
		enum msdyn_EntityOTC {
			/** 10214 */
			_Deprecated_Dynamics_Customer_Service_Analytics,
			/** 10810 */
			_DeprecatedTeams_Engagement_Context,
			/** 1 */
			Account,
			/** 10429 */
			Account_Project_Price_List,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 10826 */
			Action_Call,
			/** 10825 */
			Action_Call_Workflow,
			/** 9962 */
			Action_Card,
			/** 10254 */
			Action_Card_Regarding,
			/** 10255 */
			Action_Card_Role_Setting,
			/** 9983 */
			Action_Card_Type,
			/** 9973 */
			Action_Card_User_Settings,
			/** 10177 */
			Action_Input_Parameter,
			/** 10178 */
			Action_Output_Parameter,
			/** 9968 */
			ActionCardUserState,
			/** 4200 */
			Activity,
			/** 10074 */
			Activity_File_Attachment,
			/** 10119 */
			Activity_monitor,
			/** 135 */
			Activity_Party,
			/** 10398 */
			Actual,
			/** 10438 */
			Actual_Data_Export_Deprecated,
			/** 10186 */
			Adaptive_Card_Configuration,
			/** 1071 */
			Address,
			/** 10229 */
			admin_settings_entity,
			/** 10682 */
			AdminAppState,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10174 */
			Agent_script,
			/** 10828 */
			Agent_Script_Answer,
			/** 10175 */
			Agent_script_step,
			/** 10841 */
			Agent_Script_Task,
			/** 10827 */
			Agent_Script_Task_Category,
			/** 10683 */
			Agent_Status_history,
			/** 10523 */
			Agreement,
			/** 10524 */
			Agreement_Booking_Date,
			/** 10525 */
			Agreement_Booking_Incident,
			/** 10526 */
			Agreement_Booking_Product,
			/** 10527 */
			Agreement_Booking_Service,
			/** 10528 */
			Agreement_Booking_Service_Task,
			/** 10529 */
			Agreement_Booking_Setup,
			/** 10538 */
			Agreement_Business_Process,
			/** 10530 */
			Agreement_Invoice_Date,
			/** 10531 */
			Agreement_Invoice_Product,
			/** 10532 */
			Agreement_Invoice_Setup,
			/** 10533 */
			Agreement_Substatus,
			/** 10056 */
			AI_Builder_Dataset,
			/** 10057 */
			AI_Builder_Dataset_File,
			/** 10058 */
			AI_Builder_Dataset_Record,
			/** 10059 */
			AI_Builder_Datasets_Container,
			/** 10060 */
			AI_Builder_File,
			/** 10061 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 10050 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10053 */
			AI_Object_Detection_Bounding_Box,
			/** 10051 */
			AI_Object_Detection_Image,
			/** 10054 */
			AI_Object_Detection_Image_Mapping,
			/** 10052 */
			AI_Object_Detection_Label,
			/** 400 */
			AI_Template,
			/** 10105 */
			Analysis_Component,
			/** 10106 */
			Analysis_Job,
			/** 10107 */
			Analysis_Result,
			/** 10108 */
			Analysis_Result_Detail,
			/** 132 */
			Announcement,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 10100 */
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
			/** 10653 */
			App_Parameter_Definition_Deprecated,
			/** 10156 */
			App_profile,
			/** 10157 */
			Application_Extension,
			/** 4707 */
			Application_File,
			/** 1120 */
			Application_Ribbons,
			/** 10158 */
			Application_Tab_Template,
			/** 10655 */
			Application_Tab_Template_Deprecated,
			/** 10658 */
			Application_Type_Deprecated,
			/** 10041 */
			ApplicationUser,
			/** 8700 */
			AppModule_Metadata,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 4201 */
			Appointment,
			/** 10514 */
			Approval_Set,
			/** 127 */
			Article,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 10126 */
			Asset_Category_Template_Association,
			/** 10628 */
			Asset_Suggestion,
			/** 10641 */
			Asset_Suggestions_Setting,
			/** 10127 */
			Asset_Template_Association,
			/** 10676 */
			Assignment_Configuration,
			/** 10677 */
			Assignment_Configuration_Step,
			/** 10277 */
			Assignment_Map,
			/** 10274 */
			Assignment_Rule,
			/** 10758 */
			Attach_Skill,
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 10275 */
			Attribute_10275,
			/** 9808 */
			Attribute_9808,
			/** 4601 */
			Attribute_Map,
			/** 10276 */
			Attribute_Value,
			/** 10738 */
			Audio_File,
			/** 10829 */
			Audit_Diagnostics_Setting,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 10696 */
			Auto_block_rule,
			/** 10259 */
			Auto_Capture_Rule,
			/** 10260 */
			Auto_Capture_Settings,
			/** 10121 */
			Available_Times,
			/** 10122 */
			Available_Times_Data_Source,
			/** 9936 */
			Azure_Service_Connection,
			/** 10431 */
			Batch_Job,
			/** 1150 */
			Bookable_Resource,
			/** 10399 */
			Bookable_Resource_Association,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 10622 */
			Bookable_Resource_Booking_Quick_Note,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 10752 */
			Bookable_Resource_Capacity_Profile,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 10400 */
			Booking_Alert,
			/** 10401 */
			Booking_Alert_Status,
			/** 10402 */
			Booking_Change,
			/** 10534 */
			Booking_Journal,
			/** 10403 */
			Booking_Rule,
			/** 10404 */
			Booking_Setup_Metadata,
			/** 1152 */
			Booking_Status,
			/** 10535 */
			Booking_Timestamp,
			/** 10064 */
			BotContent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4405 */
			Bulk_Operation_Log,
			/** 10405 */
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
			/** 10038 */
			CanvasApp_Extended_Metadata,
			/** 10678 */
			Capacity_Profile,
			/** 10787 */
			Carrier,
			/** 10028 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10029 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 112 */
			Case,
			/** 10200 */
			Case_Enrichment,
			/** 4206 */
			Case_Resolution,
			/** 10201 */
			Case_Suggestion,
			/** 10202 */
			Case_Suggestion_Request_Payload,
			/** 10203 */
			Case_Suggestions_Data_Souce,
			/** 10537 */
			Case_to_Work_Order_Business_Process,
			/** 10215 */
			Case_Topic,
			/** 10218 */
			Case_topic_Incident_mapping,
			/** 10216 */
			Case_Topic_Setting,
			/** 10217 */
			Case_Topic_Summary,
			/** 10017 */
			Catalog,
			/** 10018 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 10634 */
			CFS_IoT_Alert_Process_Flow,
			/** 10667 */
			channel,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 10687 */
			Channel_Capability,
			/** 10698 */
			Channel_Configuration,
			/** 10650 */
			Channel_Integration_Framework_v10_Provider,
			/** 10168 */
			Channel_Integration_Framework_v20_Provider,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10699 */
			Channel_State_Configuration,
			/** 1141 */
			Characteristic,
			/** 10761 */
			Characteristic_mapping,
			/** 10768 */
			Chat_Authentication_Settings,
			/** 10773 */
			Chat_Widget,
			/** 10772 */
			Chat_Widget_Languagedeprecated,
			/** 10775 */
			Chat_Widget_Location,
			/** 10066 */
			Chatbot,
			/** 10067 */
			Chatbot_subcomponent,
			/** 113 */
			Child_Incident_Count,
			/** 10406 */
			Client_Extension,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 10112 */
			Comment_10112,
			/** 8005 */
			Comment_8005,
			/** 4215 */
			Commitment,
			/** 10788 */
			Communication_Provider_Setting,
			/** 10789 */
			Communication_Provider_Setting_Entry,
			/** 10434 */
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
			/** 10407 */
			Configuration_10407,
			/** 10830 */
			Configuration_10830,
			/** 3234 */
			Connection,
			/** 10049 */
			Connection_Reference,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 2 */
			Contact,
			/** 10435 */
			Contact_Price_List,
			/** 10241 */
			Contact_suggestion_rule,
			/** 10242 */
			Contact_suggestion_ruleset,
			/** 17 */
			ContactInvoices,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 10705 */
			Context_item_value,
			/** 10708 */
			Context_variable,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 10515 */
			Contract_Line_Detail_Performance,
			/** 10516 */
			Contract_Performance,
			/** 2011 */
			Contract_Template,
			/** 10702 */
			Conversation,
			/** 10688 */
			Conversation_Action,
			/** 10689 */
			Conversation_Action_Locale,
			/** 10754 */
			Conversation_Capacity_profile,
			/** 10755 */
			Conversation_Characteristic,
			/** 10230 */
			Conversation_Data_Deprecated,
			/** 10707 */
			Conversation_Sentiment,
			/** 10781 */
			Conversation_Topic,
			/** 10784 */
			Conversation_topic_Conversation_mapping,
			/** 10782 */
			Conversation_Topic_Setting,
			/** 10783 */
			Conversation_Topic_Summary,
			/** 10780 */
			ConversationInsight,
			/** 10779 */
			conversationsuggestionrequestpayload,
			/** 10065 */
			ConversationTranscript,
			/** 10838 */
			CTI_Search,
			/** 9105 */
			Currency,
			/** 10020 */
			Custom_API,
			/** 10021 */
			Custom_API_Request_Parameter,
			/** 10022 */
			Custom_API_Response_Property,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 10697 */
			Custom_messaging_account,
			/** 10799 */
			Custom_messaging_channel,
			/** 10797 */
			Custom_Messaging_Engagement_Context,
			/** 10128 */
			Customer_Asset,
			/** 10129 */
			Customer_Asset_Attachment,
			/** 10130 */
			Customer_Asset_Category,
			/** 4502 */
			Customer_Relationship,
			/** 10219 */
			Customer_Service_historical_analytics,
			/** 10294 */
			Customer_Voice_alert,
			/** 10295 */
			Customer_Voice_alert_rule,
			/** 10297 */
			Customer_Voice_file_response,
			/** 10298 */
			Customer_Voice_localized_survey_email_template,
			/** 10299 */
			Customer_Voice_project,
			/** 10302 */
			Customer_Voice_satisfaction_metric,
			/** 10303 */
			Customer_Voice_survey,
			/** 10296 */
			Customer_Voice_survey_email_template,
			/** 10304 */
			Customer_Voice_survey_invite,
			/** 10300 */
			Customer_Voice_survey_question,
			/** 10301 */
			Customer_Voice_survey_question_response,
			/** 10305 */
			Customer_Voice_survey_reminder,
			/** 10306 */
			Customer_Voice_survey_response,
			/** 10307 */
			Customer_Voice_unsubscribed_recipient,
			/** 10831 */
			Customization_File,
			/** 10211 */
			Data_Analytics_Admin_Settings_Deprecated,
			/** 10212 */
			Data_Analytics_Report,
			/** 4410 */
			Data_Import,
			/** 10024 */
			Data_Lake_Folder,
			/** 10025 */
			Data_Lake_Folder_Permission,
			/** 10026 */
			Data_Lake_Workspace,
			/** 10027 */
			Data_Lake_Workspace_Permission,
			/** 4411 */
			Data_Map,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 10873 */
			Data_Sync_State,
			/** 10115 */
			Database_Version,
			/** 418 */
			Dataflow,
			/** 10288 */
			Deal_manager_settings,
			/** 10287 */
			dealmanageraccess,
			/** 10669 */
			Decision_contract,
			/** 10670 */
			Decision_rule_set,
			/** 10439 */
			Delegation,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10690 */
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
			/** 10764 */
			Effort_estimate,
			/** 10765 */
			Effort_estimation_model,
			/** 10766 */
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
			/** 10540 */
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
			/** 10691 */
			Entity_10691,
			/** 9800 */
			Entity_9800,
			/** 430 */
			Entity_Analytics_Config,
			/** 10637 */
			Entity_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 9815 */
			Entity_Index,
			/** 9810 */
			Entity_Key,
			/** 10243 */
			Entity_link_chat_configuration,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 10686 */
			Entity_Routing_Context,
			/** 10833 */
			Entity_Search,
			/** 10832 */
			Entity_Type,
			/** 10256 */
			EntityRankingRule,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10442 */
			Estimate,
			/** 10443 */
			Estimate_Line,
			/** 10846 */
			Event,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 10444 */
			Expense,
			/** 10445 */
			Expense_Category,
			/** 10446 */
			Expense_Receipt,
			/** 955 */
			Expired_Process,
			/** 10011 */
			ExportSolutionUpload,
			/** 10281 */
			Extended_User_Setting,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 10795 */
			Facebook_Application,
			/** 10794 */
			Facebook_Engagement_Context,
			/** 10796 */
			Facebook_Page,
			/** 4000 */
			FacilityEquipment,
			/** 10447 */
			Fact,
			/** 4204 */
			Fax,
			/** 10012 */
			FeatureControlSetting,
			/** 9958 */
			Feedback,
			/** 10448 */
			Field_Computation,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 10642 */
			Field_service_historical_analytics,
			/** 10541 */
			Field_Service_Price_List_Item,
			/** 10542 */
			Field_Service_Setting,
			/** 10543 */
			Field_Service_SLA_Configuration,
			/** 10544 */
			Field_Service_System_Job,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 10293 */
			Filter,
			/** 30 */
			Filter_Template,
			/** 10449 */
			Find_Work_Event_Deprecated_in_v30,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10700 */
			Flagged_spam,
			/** 10045 */
			Flow_Machine,
			/** 10046 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 10257 */
			flowcardtype,
			/** 8003 */
			Follow,
			/** 10248 */
			Forecast,
			/** 10246 */
			Forecast_Configuration,
			/** 10247 */
			Forecast_definition,
			/** 10249 */
			Forecast_recurrence,
			/** 10834 */
			Form,
			/** 10423 */
			Fulfillment_Preference,
			/** 10131 */
			Functional_Location,
			/** 10250 */
			GDPRData,
			/** 10722 */
			Geo_Location_Provider,
			/** 10638 */
			Geofence,
			/** 10639 */
			Geofence_Event,
			/** 10640 */
			Geofencing_Settings,
			/** 10635 */
			Geolocation_Settings,
			/** 10636 */
			Geolocation_Tracking,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9603 */
			Goal_Metric,
			/** 10062 */
			Help_Page,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
			/** 10817 */
			Hosted_Control,
			/** 10267 */
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
			/** 10545 */
			Incident_Type,
			/** 10546 */
			Incident_Type_Characteristic,
			/** 10547 */
			Incident_Type_Product,
			/** 10551 */
			Incident_Type_Requirement_Group,
			/** 10627 */
			Incident_Type_Resolution,
			/** 10548 */
			Incident_Type_Service,
			/** 10549 */
			Incident_Type_Service_Task,
			/** 10625 */
			Incident_Type_Suggestion_Result,
			/** 10626 */
			Incident_Type_Suggestion_Run_History,
			/** 10550 */
			Incident_Types_Setup,
			/** 9816 */
			Index_Attribute,
			/** 126 */
			Indexed_Article,
			/** 10213 */
			Insights,
			/** 10521 */
			Inspection,
			/** 10519 */
			Inspection_Attachment,
			/** 10522 */
			Inspection_Response,
			/** 10518 */
			Inspection_Template,
			/** 10520 */
			Inspection_Template_Version,
			/** 10450 */
			Integration_Job,
			/** 10451 */
			Integration_Job_Detail,
			/** 3000 */
			Integration_Status,
			/** 4011 */
			Inter_Process_Lock,
			/** 9986 */
			Interaction_for_Email,
			/** 1003 */
			Internal_Address,
			/** 10019 */
			Internal_Catalog_Assignment,
			/** 7107 */
			Invalid_Dependency,
			/** 10552 */
			Inventory_Adjustment,
			/** 10553 */
			Inventory_Adjustment_Product,
			/** 10554 */
			Inventory_Journal,
			/** 10555 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10452 */
			Invoice_Frequency,
			/** 10453 */
			Invoice_Frequency_Detail,
			/** 1091 */
			Invoice_Line,
			/** 10454 */
			Invoice_Line_Detail,
			/** 10433 */
			Invoice_Process,
			/** 10138 */
			IoT_Alert,
			/** 10154 */
			IoT_Alert_to_Case_Process,
			/** 10139 */
			IoT_Device,
			/** 10140 */
			IoT_Device_Category,
			/** 10141 */
			IoT_Device_Command,
			/** 10142 */
			IoT_Device_Command_Definition,
			/** 10143 */
			IoT_Device_Data_History,
			/** 10144 */
			IoT_Device_Property,
			/** 10145 */
			IoT_Device_Registration_History,
			/** 10146 */
			IoT_Device_Visualization_Configuration,
			/** 10147 */
			IoT_Field_Mapping,
			/** 10148 */
			IoT_Property_Definition,
			/** 10149 */
			IoT_Provider,
			/** 10150 */
			IoT_Provider_Instance,
			/** 10151 */
			IoT_Settings,
			/** 4705 */
			ISV_Config,
			/** 10455 */
			Journal,
			/** 10456 */
			Journal_Line,
			/** 10204 */
			KB_Enrichment,
			/** 10091 */
			Key_Vault_Reference,
			/** 10221 */
			Keywords_Description_Suggestion_Setting,
			/** 10220 */
			Knowledge_analytics,
			/** 9953 */
			Knowledge_Article,
			/** 10084 */
			Knowledge_Article_Attachment,
			/** 9960 */
			Knowledge_Article_Category,
			/** 10080 */
			Knowledge_Article_Image,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 10083 */
			Knowledge_article_language_setting,
			/** 10205 */
			Knowledge_Article_Suggestion,
			/** 10206 */
			Knowledge_Article_Suggestion_Data_Source,
			/** 10086 */
			Knowledge_Article_Template,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 10077 */
			Knowledge_Federated_Article,
			/** 10078 */
			Knowledge_Federated_Article_Incident,
			/** 10081 */
			Knowledge_Interaction_Insight,
			/** 10085 */
			Knowledge_personalization,
			/** 10088 */
			Knowledge_search_filter,
			/** 10082 */
			Knowledge_Search_Insight,
			/** 9947 */
			Knowledge_Search_Model,
			/** 10087 */
			Knowledge_search_personal_filter_config,
			/** 10231 */
			KPI_Event_Data,
			/** 10232 */
			KPI_Event_Definition,
			/** 10701 */
			Language_10701,
			/** 9957 */
			Language_9957,
			/** 10835 */
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
			/** 10890 */
			LeadModelConfig,
			/** 27 */
			LeadProduct,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 8006 */
			Like,
			/** 10800 */
			LINE_account,
			/** 10798 */
			LINE_Engagement_Context,
			/** 10113 */
			List_Operation,
			/** 4418 */
			List_Value_Mapping,
			/** 10774 */
			Live_Chat_Context,
			/** 10693 */
			Live_work_item_event,
			/** 10706 */
			Live_Work_Item_Participant_Deprecated,
			/** 9201 */
			LocalConfigStore,
			/** 10709 */
			Localization,
			/** 10776 */
			Localized_Survey_Question_Deprecated,
			/** 4419 */
			Lookup_Mapping,
			/** 10179 */
			Macro_Action_Template,
			/** 10181 */
			Macro_Connector,
			/** 10182 */
			Macro_Run_History,
			/** 10180 */
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
			/** 10092 */
			Managed_Identity,
			/** 9812 */
			Managed_Property,
			/** 10114 */
			Marketing_Form_Display_Attributes,
			/** 4300 */
			Marketing_List,
			/** 4301 */
			Marketing_List_Member,
			/** 10646 */
			MarketingSiteMap,
			/** 10695 */
			Masking_Rule,
			/** 10674 */
			Master_Entity_Routing_Configuration,
			/** 10720 */
			Message,
			/** 4231 */
			Metadata_Difference,
			/** 10809 */
			Microsoft_Teams_account,
			/** 10244 */
			Microsoft_Teams_chat_association_entity,
			/** 10245 */
			Microsoft_Teams_chat_suggestion,
			/** 10238 */
			Microsoft_Teams_Collaboration_entity,
			/** 10235 */
			Microsoft_Teams_Graph_resource_Entity,
			/** 10125 */
			Migration_tracker,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 9006 */
			Model_driven_App,
			/** 10033 */
			Model_Driven_App_Component_Node,
			/** 10032 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10031 */
			Model_Driven_App_Element,
			/** 10034 */
			Model_Driven_App_Setting,
			/** 10035 */
			Model_Driven_App_User_Setting,
			/** 10759 */
			Model_training_details,
			/** 10891 */
			ModelPreviewStatus,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10236 */
			msdyn_msteamssetting,
			/** 10237 */
			msdyn_msteamssettingsv2,
			/** 10251 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 9900 */
			Navigation_Setting,
			/** 950 */
			New_Process,
			/** 10098 */
			NonRelational_Data_Source,
			/** 5 */
			Note,
			/** 10266 */
			Notes_analysis_Config,
			/** 10099 */
			Notification_10099,
			/** 4110 */
			Notification_4110,
			/** 10159 */
			Notification_Field,
			/** 10651 */
			Notification_Field_Deprecated,
			/** 10160 */
			Notification_Template,
			/** 10652 */
			Notification_Template_Deprecated,
			/** 10044 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 10723 */
			Omnichannel_Configuration,
			/** 10785 */
			Omnichannel_historical_analytics,
			/** 10724 */
			Omnichannel_Personalization,
			/** 10725 */
			Omnichannel_Queue_Deprecated,
			/** 10712 */
			Omnichannel_Request,
			/** 10726 */
			Omnichannel_Sync_Config,
			/** 10786 */
			Omnichannel_voice_historical_analytics_preview_Deprecated,
			/** 10692 */
			Ongoing_conversation_Deprecated,
			/** 10727 */
			Operating_Hour,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 1083 */
			Opportunity_Line,
			/** 10459 */
			Opportunity_Line_Detail_Deprecated,
			/** 10458 */
			Opportunity_Line_Resource_Category_Deprecated,
			/** 10460 */
			Opportunity_Line_Transaction_Category_Deprecated,
			/** 10461 */
			Opportunity_Line_Transaction_Classification_Deprecated,
			/** 10462 */
			Opportunity_Project_Price_List,
			/** 4503 */
			Opportunity_Relationship,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 10889 */
			OpportunityModelConfig,
			/** 10819 */
			Option,
			/** 9809 */
			OptionSet,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 10556 */
			Order_Invoicing_Date,
			/** 10557 */
			Order_Invoicing_Product,
			/** 10558 */
			Order_Invoicing_Setup,
			/** 10559 */
			Order_Invoicing_Setup_Date,
			/** 1089 */
			Order_Line,
			/** 1019 */
			Organization,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 10036 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 10408 */
			Organizational_Unit,
			/** 10096 */
			OrganizationDataSyncSubscription,
			/** 10097 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10812 */
			Outbound_Configuration,
			/** 10813 */
			Outbound_message,
			/** 10679 */
			Overflow_Action_Config,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10008 */
			Package,
			/** 10171 */
			Pane_tab_configuration,
			/** 10172 */
			Pane_tool_configuration,
			/** 10183 */
			Parameter_definition,
			/** 10656 */
			Parameter_Deprecated,
			/** 1095 */
			Partner_Application,
			/** 10560 */
			Payment,
			/** 10561 */
			Payment_Detail,
			/** 10562 */
			Payment_Method,
			/** 10563 */
			Payment_Term,
			/** 10073 */
			PDF_Setting,
			/** 10730 */
			Persona_Security_Role_Mapping,
			/** 9941 */
			Personal_Document_Template,
			/** 10728 */
			Personal_quick_reply,
			/** 10729 */
			Personal_sound_setting,
			/** 4210 */
			Phone_Call,
			/** 10790 */
			Phone_Number,
			/** 952 */
			Phone_To_Case_Process,
			/** 10226 */
			Playbook,
			/** 10223 */
			Playbook_activity,
			/** 10224 */
			Playbook_activity_attribute,
			/** 10222 */
			Playbook_Callable_Context,
			/** 10225 */
			Playbook_category,
			/** 10227 */
			Playbook_template,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 10090 */
			Plugin_Package,
			/** 10103 */
			PM_Inferred_Task,
			/** 10104 */
			PM_Recording,
			/** 50 */
			Position,
			/** 8000 */
			Post,
			/** 10290 */
			Post_Configuration,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 10291 */
			Post_Rule_Configuration,
			/** 10564 */
			Postal_Code,
			/** 10684 */
			Power_BI_Configuration,
			/** 10644 */
			Predictive_duration_preview,
			/** 10887 */
			Predictive_Model_Score,
			/** 10888 */
			Predictive_Score,
			/** 10645 */
			Predictive_Work_Hour_Duration_Setting,
			/** 10731 */
			Presence,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10440 */
			Pricing_Dimension,
			/** 10441 */
			Pricing_Dimension_Field_Name,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 61 */
			PrincipalEntityBusinessUnitMap,
			/** 10409 */
			Priority,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 103 */
			Privileges_Removal_Setting,
			/** 10629 */
			Problematic_Asset_Feedback,
			/** 4703 */
			Process,
			/** 9650 */
			Process_Configuration,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 10468 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 4712 */
			Process_Trigger,
			/** 10047 */
			ProcessStageParameter,
			/** 1024 */
			Product,
			/** 1025 */
			Product_Association,
			/** 10565 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10170 */
			Productivity_pane_configuration,
			/** 21 */
			ProductSalesLiterature,
			/** 10289 */
			Profile_Album,
			/** 10469 */
			Project,
			/** 10470 */
			Project_Approval,
			/** 10464 */
			Project_Contract_Line_Detail,
			/** 10436 */
			Project_Contract_Line_Invoice_Schedule,
			/** 10437 */
			Project_Contract_Line_Milestone,
			/** 10463 */
			Project_Contract_Line_Resource_Category,
			/** 10465 */
			Project_Contract_Line_Transaction_Category,
			/** 10466 */
			Project_Contract_Line_Transaction_Classification,
			/** 10467 */
			Project_Contract_Project_Price_List,
			/** 10471 */
			Project_Parameter,
			/** 10472 */
			Project_Parameter_Price_List,
			/** 10473 */
			Project_Price_List,
			/** 10430 */
			Project_Service_Approval,
			/** 10432 */
			Project_Stages,
			/** 10474 */
			Project_Task,
			/** 10475 */
			Project_Task_Dependency,
			/** 10476 */
			Project_Task_Status_User,
			/** 10477 */
			Project_Team_Member,
			/** 10478 */
			Project_Team_Member_Sign_Up_Deprecated_in_v30,
			/** 10479 */
			Project_Transaction_Category_Deprecated,
			/** 1048 */
			Property,
			/** 10133 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10132 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10134 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10135 */
			Property_Template_Association,
			/** 10732 */
			Provider,
			/** 10710 */
			Provisioning_State,
			/** 10023 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 10566 */
			Purchase_Order,
			/** 10567 */
			Purchase_Order_Bill,
			/** 10536 */
			Purchase_Order_Business_Process,
			/** 10568 */
			Purchase_Order_Product,
			/** 10569 */
			Purchase_Order_Receipt,
			/** 10570 */
			Purchase_Order_Receipt_Product,
			/** 10571 */
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
			/** 10685 */
			Quick_reply,
			/** 1084 */
			Quote,
			/** 10572 */
			Quote_Booking_Incident,
			/** 10573 */
			Quote_Booking_Product,
			/** 10574 */
			Quote_Booking_Service,
			/** 10575 */
			Quote_Booking_Service_Task,
			/** 10576 */
			Quote_Booking_Setup,
			/** 4211 */
			Quote_Close,
			/** 10577 */
			Quote_Invoicing_Product,
			/** 10578 */
			Quote_Invoicing_Setup,
			/** 1085 */
			Quote_Line,
			/** 10480 */
			Quote_Line_Analytics_Breakdown,
			/** 10484 */
			Quote_Line_Detail,
			/** 10481 */
			Quote_Line_Invoice_Schedule,
			/** 10483 */
			Quote_Line_Milestone,
			/** 10482 */
			Quote_Line_Resource_Category,
			/** 10485 */
			Quote_Line_Transaction_Category,
			/** 10486 */
			Quote_Line_Transaction_Classification,
			/** 10487 */
			Quote_Project_Price_List,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 10711 */
			Recording_10711,
			/** 10886 */
			Recording_10886,
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
			/** 10410 */
			Requirement_Characteristic,
			/** 10427 */
			Requirement_Dependency,
			/** 10411 */
			Requirement_Group,
			/** 10412 */
			Requirement_Organization_Unit,
			/** 10413 */
			Requirement_Relationship,
			/** 10414 */
			Requirement_Resource_Category,
			/** 10415 */
			Requirement_Resource_Preference,
			/** 10416 */
			Requirement_Status,
			/** 10630 */
			Resolution,
			/** 4002 */
			Resource,
			/** 10488 */
			Resource_Assignment,
			/** 10489 */
			Resource_Assignment_Detail_Deprecated_in_v20,
			/** 10643 */
			Resource_duration_preview,
			/** 4010 */
			Resource_Expansion,
			/** 4007 */
			Resource_Group,
			/** 10123 */
			resource_group_data_source,
			/** 10579 */
			Resource_Pay_Type,
			/** 10492 */
			Resource_Request,
			/** 10417 */
			Resource_Requirement,
			/** 10418 */
			Resource_Requirement_Detail,
			/** 10600 */
			Resource_Restriction_Deprecated,
			/** 4006 */
			Resource_Specification,
			/** 10419 */
			Resource_Territory,
			/** 10457 */
			Result_Cache,
			/** 10030 */
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
			/** 10101 */
			Rich_Text_Attachment,
			/** 10580 */
			RMA,
			/** 10581 */
			RMA_Product,
			/** 10582 */
			RMA_Receipt,
			/** 10583 */
			RMA_Receipt_Product,
			/** 10584 */
			RMA_SubStatus,
			/** 10493 */
			Role_competency_requirement,
			/** 10491 */
			Role_Price,
			/** 10490 */
			Role_Price_Markup,
			/** 1037 */
			Role_Template,
			/** 10494 */
			Role_Utilization,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 9602 */
			Rollup_Query,
			/** 10680 */
			Routing_configuration,
			/** 10681 */
			Routing_configuration_step,
			/** 10673 */
			Routing_diagnostic,
			/** 10672 */
			Routing_diagnostic_item,
			/** 8181 */
			Routing_Rule_Set,
			/** 10675 */
			Routing_Rule_Set_Setting,
			/** 10733 */
			RoutingRequest,
			/** 10585 */
			RTV,
			/** 10586 */
			RTV_Product,
			/** 10587 */
			RTV_Substatus,
			/** 10713 */
			Rule_Item_10713,
			/** 8199 */
			Rule_Item_8199,
			/** 10671 */
			Rulesetentitymapping,
			/** 7200 */
			RuntimeDependency,
			/** 10282 */
			Sales_Acceleration_settings,
			/** 10278 */
			Sales_Assignment_Setting,
			/** 1070 */
			Sales_Attachment,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 10279 */
			Sales_routing_run,
			/** 10884 */
			Sales_Tag,
			/** 10258 */
			salesinsightssettings,
			/** 10647 */
			SalesSiteMap,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
			/** 10668 */
			Scenario,
			/** 10420 */
			Schedule_Board_Setting,
			/** 10428 */
			Scheduling_Feature_Flag,
			/** 4005 */
			Scheduling_Group,
			/** 10421 */
			Scheduling_Parameter,
			/** 10837 */
			Script_Task_Trigger,
			/** 10836 */
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
			/** 10734 */
			Search_Configuration,
			/** 10079 */
			Search_provider,
			/** 10102 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 10272 */
			Segment,
			/** 10273 */
			SegmentsUtil,
			/** 10744 */
			Self_service,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10735 */
			Sentiment_analysis,
			/** 10714 */
			Sentiment_daily_topic,
			/** 10715 */
			Sentiment_daily_topic_keyword,
			/** 10716 */
			Sentiment_daily_topic_trending,
			/** 10268 */
			Sequence,
			/** 10269 */
			Sequence_Stat,
			/** 10270 */
			Sequence_Target,
			/** 10271 */
			Sequence_Target_Step,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 10075 */
			Service_Configuration,
			/** 20 */
			Service_Contract_Contact,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 10039 */
			Service_Plan_Mapping,
			/** 10588 */
			Service_Task_Type,
			/** 10648 */
			ServicesSiteMap,
			/** 10717 */
			Session,
			/** 10756 */
			Session_Characteristic,
			/** 10233 */
			Session_Data_Deprecated,
			/** 10736 */
			Session_event,
			/** 10839 */
			Session_Information,
			/** 10737 */
			Session_participant,
			/** 10234 */
			Session_Participant_Data_Deprecated,
			/** 10718 */
			Session_Participant_Event,
			/** 10719 */
			Session_Sentiment,
			/** 10161 */
			Session_Template,
			/** 10654 */
			Session_Templates_Deprecated,
			/** 10840 */
			Session_Transfer,
			/** 10037 */
			Setting_Definition,
			/** 10649 */
			SettingsSiteMap,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 10589 */
			Ship_Via,
			/** 10253 */
			SI_Key_Value_Config,
			/** 10252 */
			siconfig,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 4709 */
			Site_Map,
			/** 10757 */
			Skill_Attachment_Rule,
			/** 10763 */
			Skill_finder_model,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 10076 */
			SLA_KPI,
			/** 9752 */
			SLA_KPI_Instance,
			/** 10187 */
			Smartassist_configuration,
			/** 10791 */
			SMS_Engagement_Context,
			/** 10792 */
			SMS_Number,
			/** 10793 */
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
			/** 10109 */
			Solution_Health_Rule,
			/** 10110 */
			Solution_Health_Rule_Argument,
			/** 10111 */
			Solution_Health_Rule_Set,
			/** 10004 */
			Solution_History,
			/** 10005 */
			Solution_History_Data_Source,
			/** 9890 */
			SolutionHistoryData,
			/** 10739 */
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
			/** 10262 */
			Suggested_Activity,
			/** 10263 */
			Suggested_Activity_Data_Source,
			/** 10264 */
			Suggested_Contact,
			/** 10265 */
			Suggested_contacts_data_source,
			/** 10207 */
			Suggestion_Interaction,
			/** 10208 */
			Suggestion_request_payload,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10209 */
			Suggestions_Model_Summary,
			/** 10210 */
			Suggestions_Setting,
			/** 10769 */
			Survey_Answer_Option,
			/** 10778 */
			Survey_Question,
			/** 10777 */
			Survey_Question_Sequence,
			/** 10770 */
			Survey_Response,
			/** 10771 */
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
			/** 10422 */
			System_User_Scheduler_Setting,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10721 */
			Tag,
			/** 4212 */
			Task,
			/** 10590 */
			Tax_Code,
			/** 10591 */
			Tax_Code_Detail,
			/** 9 */
			Team,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 10094 */
			TeamMobileOfflineProfileMembership,
			/** 10240 */
			Teams_Contact_Suggestion_by_AI,
			/** 10239 */
			Teams_Dialer_Admin_settings,
			/** 10811 */
			Teams_Engagement_Context,
			/** 10136 */
			Template_For_Properties,
			/** 10162 */
			Template_Parameter,
			/** 10657 */
			Template_Tag_Deprecated,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 9948 */
			Text_Analytics_Topic,
			/** 2015 */
			Theme,
			/** 10517 */
			Three_Dimensional_Model,
			/** 10495 */
			Time_Entry,
			/** 10424 */
			Time_Group_Detail,
			/** 10496 */
			Time_Off_Calendar,
			/** 10592 */
			Time_Off_Request,
			/** 10510 */
			Time_Source,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 10843 */
			Toolbar,
			/** 10842 */
			Toolbar_Button,
			/** 9946 */
			Topic_History,
			/** 9944 */
			Topic_Model,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 10063 */
			Tour,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 8052 */
			Trace_Regarding,
			/** 10844 */
			Trace_Source_Setting,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 10760 */
			Training_data_import_configuration,
			/** 10762 */
			Training_record,
			/** 10497 */
			Transaction_Category,
			/** 10498 */
			Transaction_Category_Classification,
			/** 10499 */
			Transaction_Category_Hierarchy_Element,
			/** 10500 */
			Transaction_Category_Price,
			/** 10501 */
			Transaction_Connection,
			/** 10425 */
			Transaction_Origin,
			/** 10502 */
			Transaction_Type,
			/** 10740 */
			Transcript,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 10801 */
			Twitter_account,
			/** 10806 */
			Twitter_Engagement_Context,
			/** 10802 */
			Twitter_handle,
			/** 10814 */
			UII_Action,
			/** 10815 */
			UII_Audit,
			/** 10816 */
			UII_Context,
			/** 10818 */
			UII_Non_Hosted_Application,
			/** 10820 */
			UII_Saved_Session,
			/** 10821 */
			UII_Session_Transfer,
			/** 10822 */
			UII_Workflow,
			/** 10823 */
			UII_Workflow_Step,
			/** 10824 */
			UII_Workflow_Step_Mapping,
			/** 10845 */
			Unified_Interface_Settings,
			/** 10120 */
			Unified_Routing_Setup_Tracker,
			/** 10593 */
			Unique_Number,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 2012 */
			Unresolved_Address,
			/** 10261 */
			UntrackedAppointment,
			/** 4220 */
			UntrackedEmail,
			/** 10116 */
			Upgrade_Run,
			/** 10117 */
			Upgrade_Step,
			/** 10118 */
			Upgrade_Version,
			/** 10741 */
			UR_notification_template,
			/** 10742 */
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
			/** 10847 */
			User_Setting,
			/** 10743 */
			User_settings,
			/** 150 */
			User_Settings,
			/** 10503 */
			User_Work_History,
			/** 10095 */
			UserMobileOfflineProfileMembership,
			/** 1039 */
			View,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 10093 */
			Virtual_Entity_Metadata,
			/** 10124 */
			Virtual_Resource_Group_Resource,
			/** 10292 */
			Wall_View,
			/** 10594 */
			Warehouse,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10803 */
			WeChat_account,
			/** 10807 */
			WeChat_Engagement_Context,
			/** 10804 */
			WhatsApp_account,
			/** 10808 */
			WhatsApp_Engagement_Context,
			/** 10805 */
			WhatsApp_number,
			/** 10848 */
			Window_Navigation_Rule,
			/** 4802 */
			Wizard_Page,
			/** 10285 */
			Work_list_user_setting,
			/** 10595 */
			Work_Order,
			/** 10539 */
			Work_Order_Business_Process,
			/** 10596 */
			Work_Order_Characteristic_Deprecated,
			/** 10597 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 10598 */
			Work_Order_Incident,
			/** 10599 */
			Work_Order_Product,
			/** 10633 */
			Work_Order_Resolution,
			/** 10601 */
			Work_Order_Service,
			/** 10602 */
			Work_Order_Service_Task,
			/** 10603 */
			Work_Order_Substatus,
			/** 10604 */
			Work_Order_Type,
			/** 10283 */
			Work_Queue_Record,
			/** 10284 */
			Work_Queue_Record_State,
			/** 10694 */
			Work_Stream,
			/** 10753 */
			Work_stream_capacity_profile,
			/** 10426 */
			Work_template,
			/** 10048 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 10286 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}