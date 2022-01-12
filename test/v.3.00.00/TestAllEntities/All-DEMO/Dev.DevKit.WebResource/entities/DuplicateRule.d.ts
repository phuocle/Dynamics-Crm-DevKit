//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDuplicateRule_Information {
		interface tab_administration_Sections {
			section_1_2: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_rule_Sections {
			criteria: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			Rule_Conditions: DevKit.Controls.Section;
			section_1: DevKit.Controls.Section;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_rule extends DevKit.Controls.ITab {
			Section: tab_rule_Sections;
		}
		interface Tabs {
			administration: tab_administration;
			notes: tab_notes;
			rule: tab_rule;
		}
		interface Body {
			Tab: Tabs;
			/** Record type of the record being evaluated for potential duplicates. */
			BaseEntityTypeCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who created the duplicate detection rule. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the duplicate detection rule was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Description of the duplicate detection rule. */
			Description: DevKit.Controls.String;
			/** Determines whether to flag inactive records as duplicates */
			ExcludeInactiveRecords: DevKit.Controls.Boolean;
			/** Indicates if the operator is case-sensitive. */
			IsCaseSensitive: DevKit.Controls.Boolean;
			/** Record type of the records being evaluated as potential duplicates. */
			MatchingEntityTypeCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who last modified the duplicate detection rule. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the duplicate detection rule was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the duplicate detection rule. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the duplicate detection rule. */
			OwnerId: DevKit.Controls.Lookup;
			ruleconditioncontrol: DevKit.Controls.IFrame;
			/** Reason for the status of the duplicate detection rule. */
			StatusCode: DevKit.Controls.OptionSet;
		}
	}
	class FormDuplicateRule_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form DuplicateRule_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form DuplicateRule_Information */
		Body: DevKit.FormDuplicateRule_Information.Body;
		/** The SidePanes of form DuplicateRule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class DuplicateRuleApi {
		/**
		* DynamicsCrm.DevKit DuplicateRuleApi
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
		/** Database table that stores match codes for the record type being evaluated for potential duplicates. */
		BaseEntityMatchCodeTable: DevKit.WebApi.StringValueReadonly;
		/** Record type of the record being evaluated for potential duplicates. */
		BaseEntityName: DevKit.WebApi.StringValue;
		/** Record type of the record being evaluated for potential duplicates. */
		BaseEntityTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the duplicate detection rule. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the duplicate detection rule was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the duplicaterule. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the duplicate detection rule. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the duplicate detection rule. */
		DuplicateRuleId: DevKit.WebApi.GuidValue;
		/** Determines whether to flag inactive records as duplicates */
		ExcludeInactiveRecords: DevKit.WebApi.BooleanValue;
		/** Indicates if the operator is case-sensitive. */
		IsCaseSensitive: DevKit.WebApi.BooleanValue;
		/** Database table that stores match codes for potential duplicate records. */
		MatchingEntityMatchCodeTable: DevKit.WebApi.StringValueReadonly;
		/** Record type of the records being evaluated as potential duplicates. */
		MatchingEntityName: DevKit.WebApi.StringValue;
		/** Record type of the records being evaluated as potential duplicates. */
		MatchingEntityTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who last modified the duplicate detection rule. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the duplicate detection rule was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the duplicaterule. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the duplicate detection rule. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns duplicate detection rule. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the duplicate detection rule. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the duplicate detection rule. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the duplicate detection rule. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the duplicate detection rule. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace DuplicateRule {
		enum BaseEntityTypeCode {
			/** 10203 */
			_Deprecated_Dynamics_Customer_Service_Analytics,
			/** 10749 */
			_DeprecatedTeams_Engagement_Context,
			/** 1 */
			Account,
			/** 10386 */
			Account_Project_Price_List,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 10765 */
			Action_Call,
			/** 10764 */
			Action_Call_Workflow,
			/** 9962 */
			Action_Card,
			/** 10240 */
			Action_Card_Regarding,
			/** 10241 */
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
			/** 10355 */
			Actual,
			/** 10395 */
			Actual_Data_Export_Deprecated,
			/** 10186 */
			Adaptive_Card_Configuration,
			/** 1071 */
			Address,
			/** 10218 */
			admin_settings_entity,
			/** 10624 */
			AdminAppState,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10174 */
			Agent_script,
			/** 10767 */
			Agent_Script_Answer,
			/** 10175 */
			Agent_script_step,
			/** 10780 */
			Agent_Script_Task,
			/** 10766 */
			Agent_Script_Task_Category,
			/** 10625 */
			Agent_Status_history,
			/** 10477 */
			Agreement,
			/** 10478 */
			Agreement_Booking_Date,
			/** 10479 */
			Agreement_Booking_Incident,
			/** 10480 */
			Agreement_Booking_Product,
			/** 10481 */
			Agreement_Booking_Service,
			/** 10482 */
			Agreement_Booking_Service_Task,
			/** 10483 */
			Agreement_Booking_Setup,
			/** 10492 */
			Agreement_Business_Process,
			/** 10484 */
			Agreement_Invoice_Date,
			/** 10485 */
			Agreement_Invoice_Product,
			/** 10486 */
			Agreement_Invoice_Setup,
			/** 10487 */
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
			/** 10595 */
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
			/** 10597 */
			Application_Tab_Template_Deprecated,
			/** 10600 */
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
			/** 10468 */
			Approval_Set,
			/** 127 */
			Article,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 10126 */
			Asset_Category_Template_Association,
			/** 10570 */
			Asset_Suggestion,
			/** 10583 */
			Asset_Suggestions_Setting,
			/** 10127 */
			Asset_Template_Association,
			/** 10618 */
			Assignment_Configuration,
			/** 10619 */
			Assignment_Configuration_Step,
			/** 10820 */
			Assignment_Map,
			/** 10817 */
			Assignment_Rule,
			/** 10697 */
			Attach_Skill,
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 10818 */
			Attribute_10818,
			/** 9808 */
			Attribute_9808,
			/** 4601 */
			Attribute_Map,
			/** 10819 */
			Attribute_Value,
			/** 10680 */
			Audio_File,
			/** 10768 */
			Audit_Diagnostics_Setting,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 10638 */
			Auto_block_rule,
			/** 10245 */
			Auto_Capture_Rule,
			/** 10246 */
			Auto_Capture_Settings,
			/** 10121 */
			Available_Times,
			/** 10122 */
			Available_Times_Data_Source,
			/** 9936 */
			Azure_Service_Connection,
			/** 10388 */
			Batch_Job,
			/** 1150 */
			Bookable_Resource,
			/** 10356 */
			Bookable_Resource_Association,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 10564 */
			Bookable_Resource_Booking_Quick_Note,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 10691 */
			Bookable_Resource_Capacity_Profile,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 10357 */
			Booking_Alert,
			/** 10358 */
			Booking_Alert_Status,
			/** 10359 */
			Booking_Change,
			/** 10488 */
			Booking_Journal,
			/** 10360 */
			Booking_Rule,
			/** 10361 */
			Booking_Setup_Metadata,
			/** 1152 */
			Booking_Status,
			/** 10489 */
			Booking_Timestamp,
			/** 10064 */
			BotContent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4405 */
			Bulk_Operation_Log,
			/** 10362 */
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
			/** 10620 */
			Capacity_Profile,
			/** 10726 */
			Carrier,
			/** 10028 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10029 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 112 */
			Case,
			/** 10189 */
			Case_Enrichment,
			/** 4206 */
			Case_Resolution,
			/** 10190 */
			Case_Suggestion,
			/** 10191 */
			Case_Suggestion_Request_Payload,
			/** 10192 */
			Case_Suggestions_Data_Souce,
			/** 10491 */
			Case_to_Work_Order_Business_Process,
			/** 10204 */
			Case_Topic,
			/** 10207 */
			Case_topic_Incident_mapping,
			/** 10205 */
			Case_Topic_Setting,
			/** 10206 */
			Case_Topic_Summary,
			/** 10017 */
			Catalog,
			/** 10018 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 10576 */
			CFS_IoT_Alert_Process_Flow,
			/** 10609 */
			channel,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 10629 */
			Channel_Capability,
			/** 10640 */
			Channel_Configuration,
			/** 10592 */
			Channel_Integration_Framework_v10_Provider,
			/** 10168 */
			Channel_Integration_Framework_v20_Provider,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10641 */
			Channel_State_Configuration,
			/** 1141 */
			Characteristic,
			/** 10700 */
			Characteristic_mapping,
			/** 10707 */
			Chat_Authentication_Settings,
			/** 10712 */
			Chat_Widget,
			/** 10711 */
			Chat_Widget_Languagedeprecated,
			/** 10714 */
			Chat_Widget_Location,
			/** 10066 */
			Chatbot,
			/** 10067 */
			Chatbot_subcomponent,
			/** 113 */
			Child_Incident_Count,
			/** 10363 */
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
			/** 10727 */
			Communication_Provider_Setting,
			/** 10728 */
			Communication_Provider_Setting_Entry,
			/** 10391 */
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
			/** 10364 */
			Configuration_10364,
			/** 10769 */
			Configuration_10769,
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
			/** 10392 */
			Contact_Price_List,
			/** 10851 */
			Contact_suggestion_rule,
			/** 10852 */
			Contact_suggestion_ruleset,
			/** 17 */
			ContactInvoices,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 10647 */
			Context_item_value,
			/** 10650 */
			Context_variable,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 10469 */
			Contract_Line_Detail_Performance,
			/** 10470 */
			Contract_Performance,
			/** 2011 */
			Contract_Template,
			/** 10644 */
			Conversation,
			/** 10630 */
			Conversation_Action,
			/** 10631 */
			Conversation_Action_Locale,
			/** 10693 */
			Conversation_Capacity_profile,
			/** 10694 */
			Conversation_Characteristic,
			/** 10219 */
			Conversation_Data_Deprecated,
			/** 10649 */
			Conversation_Sentiment,
			/** 10720 */
			Conversation_Topic,
			/** 10723 */
			Conversation_topic_Conversation_mapping,
			/** 10721 */
			Conversation_Topic_Setting,
			/** 10722 */
			Conversation_Topic_Summary,
			/** 10719 */
			ConversationInsight,
			/** 10718 */
			conversationsuggestionrequestpayload,
			/** 10065 */
			ConversationTranscript,
			/** 10777 */
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
			/** 10639 */
			Custom_messaging_account,
			/** 10738 */
			Custom_messaging_channel,
			/** 10736 */
			Custom_Messaging_Engagement_Context,
			/** 10128 */
			Customer_Asset,
			/** 10129 */
			Customer_Asset_Attachment,
			/** 10130 */
			Customer_Asset_Category,
			/** 4502 */
			Customer_Relationship,
			/** 10208 */
			Customer_Service_historical_analytics,
			/** 10261 */
			Customer_Voice_alert,
			/** 10262 */
			Customer_Voice_alert_rule,
			/** 10264 */
			Customer_Voice_file_response,
			/** 10265 */
			Customer_Voice_localized_survey_email_template,
			/** 10266 */
			Customer_Voice_project,
			/** 10269 */
			Customer_Voice_satisfaction_metric,
			/** 10270 */
			Customer_Voice_survey,
			/** 10263 */
			Customer_Voice_survey_email_template,
			/** 10271 */
			Customer_Voice_survey_invite,
			/** 10267 */
			Customer_Voice_survey_question,
			/** 10268 */
			Customer_Voice_survey_question_response,
			/** 10272 */
			Customer_Voice_survey_reminder,
			/** 10273 */
			Customer_Voice_survey_response,
			/** 10274 */
			Customer_Voice_unsubscribed_recipient,
			/** 10770 */
			Customization_File,
			/** 10200 */
			Data_Analytics_Admin_Settings_Deprecated,
			/** 10201 */
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
			/** 10855 */
			Data_Sync_State,
			/** 10115 */
			Database_Version,
			/** 418 */
			Dataflow,
			/** 10255 */
			Deal_manager_settings,
			/** 10254 */
			dealmanageraccess,
			/** 10611 */
			Decision_contract,
			/** 10612 */
			Decision_rule_set,
			/** 10396 */
			Delegation,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10632 */
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
			/** 10703 */
			Effort_estimate,
			/** 10704 */
			Effort_estimation_model,
			/** 10705 */
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
			/** 10494 */
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
			/** 10633 */
			Entity_10633,
			/** 9800 */
			Entity_9800,
			/** 430 */
			Entity_Analytics_Config,
			/** 10579 */
			Entity_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 9815 */
			Entity_Index,
			/** 9810 */
			Entity_Key,
			/** 10229 */
			Entity_link_chat_configuration,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 10628 */
			Entity_Routing_Context,
			/** 10772 */
			Entity_Search,
			/** 10771 */
			Entity_Type,
			/** 10242 */
			EntityRankingRule,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10399 */
			Estimate,
			/** 10400 */
			Estimate_Line,
			/** 10785 */
			Event,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 10401 */
			Expense,
			/** 10402 */
			Expense_Category,
			/** 10403 */
			Expense_Receipt,
			/** 955 */
			Expired_Process,
			/** 10011 */
			ExportSolutionUpload,
			/** 10823 */
			Extended_User_Setting,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 10734 */
			Facebook_Application,
			/** 10733 */
			Facebook_Engagement_Context,
			/** 10735 */
			Facebook_Page,
			/** 4000 */
			FacilityEquipment,
			/** 10404 */
			Fact,
			/** 4204 */
			Fax,
			/** 10012 */
			FeatureControlSetting,
			/** 9958 */
			Feedback,
			/** 10405 */
			Field_Computation,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 10584 */
			Field_service_historical_analytics,
			/** 10495 */
			Field_Service_Price_List_Item,
			/** 10496 */
			Field_Service_Setting,
			/** 10497 */
			Field_Service_SLA_Configuration,
			/** 10498 */
			Field_Service_System_Job,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 10260 */
			Filter,
			/** 30 */
			Filter_Template,
			/** 10406 */
			Find_Work_Event_Deprecated_in_v30,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10642 */
			Flagged_spam,
			/** 10045 */
			Flow_Machine,
			/** 10046 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 10243 */
			flowcardtype,
			/** 8003 */
			Follow,
			/** 10234 */
			Forecast,
			/** 10232 */
			Forecast_Configuration,
			/** 10233 */
			Forecast_definition,
			/** 10235 */
			Forecast_recurrence,
			/** 10773 */
			Form,
			/** 10380 */
			Fulfillment_Preference,
			/** 10131 */
			Functional_Location,
			/** 10236 */
			GDPRData,
			/** 10664 */
			Geo_Location_Provider,
			/** 10580 */
			Geofence,
			/** 10581 */
			Geofence_Event,
			/** 10582 */
			Geofencing_Settings,
			/** 10577 */
			Geolocation_Settings,
			/** 10578 */
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
			/** 10756 */
			Hosted_Control,
			/** 10253 */
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
			/** 10499 */
			Incident_Type,
			/** 10500 */
			Incident_Type_Characteristic,
			/** 10501 */
			Incident_Type_Product,
			/** 10505 */
			Incident_Type_Requirement_Group,
			/** 10569 */
			Incident_Type_Resolution,
			/** 10502 */
			Incident_Type_Service,
			/** 10503 */
			Incident_Type_Service_Task,
			/** 10567 */
			Incident_Type_Suggestion_Result,
			/** 10568 */
			Incident_Type_Suggestion_Run_History,
			/** 10504 */
			Incident_Types_Setup,
			/** 9816 */
			Index_Attribute,
			/** 126 */
			Indexed_Article,
			/** 10202 */
			Insights,
			/** 10475 */
			Inspection,
			/** 10473 */
			Inspection_Attachment,
			/** 10476 */
			Inspection_Response,
			/** 10472 */
			Inspection_Template,
			/** 10474 */
			Inspection_Template_Version,
			/** 10407 */
			Integration_Job,
			/** 10408 */
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
			/** 10506 */
			Inventory_Adjustment,
			/** 10507 */
			Inventory_Adjustment_Product,
			/** 10508 */
			Inventory_Journal,
			/** 10509 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10409 */
			Invoice_Frequency,
			/** 10410 */
			Invoice_Frequency_Detail,
			/** 1091 */
			Invoice_Line,
			/** 10411 */
			Invoice_Line_Detail,
			/** 10390 */
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
			/** 10412 */
			Journal,
			/** 10413 */
			Journal_Line,
			/** 10193 */
			KB_Enrichment,
			/** 10091 */
			Key_Vault_Reference,
			/** 10210 */
			Keywords_Description_Suggestion_Setting,
			/** 10209 */
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
			/** 10194 */
			Knowledge_Article_Suggestion,
			/** 10195 */
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
			/** 10220 */
			KPI_Event_Data,
			/** 10221 */
			KPI_Event_Definition,
			/** 10643 */
			Language_10643,
			/** 9957 */
			Language_9957,
			/** 10774 */
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
			/** 10739 */
			LINE_account,
			/** 10737 */
			LINE_Engagement_Context,
			/** 10113 */
			List_Operation,
			/** 4418 */
			List_Value_Mapping,
			/** 10713 */
			Live_Chat_Context,
			/** 10635 */
			Live_work_item_event,
			/** 10648 */
			Live_Work_Item_Participant_Deprecated,
			/** 9201 */
			LocalConfigStore,
			/** 10651 */
			Localization,
			/** 10715 */
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
			/** 10588 */
			MarketingSiteMap,
			/** 10637 */
			Masking_Rule,
			/** 10616 */
			Master_Entity_Routing_Configuration,
			/** 10662 */
			Message,
			/** 4231 */
			Metadata_Difference,
			/** 10748 */
			Microsoft_Teams_account,
			/** 10230 */
			Microsoft_Teams_chat_association_entity,
			/** 10231 */
			Microsoft_Teams_chat_suggestion,
			/** 10227 */
			Microsoft_Teams_Collaboration_entity,
			/** 10224 */
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
			/** 10698 */
			Model_training_details,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10225 */
			msdyn_msteamssetting,
			/** 10226 */
			msdyn_msteamssettingsv2,
			/** 10237 */
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
			/** 10252 */
			Notes_analysis_Config,
			/** 10099 */
			Notification_10099,
			/** 4110 */
			Notification_4110,
			/** 10159 */
			Notification_Field,
			/** 10593 */
			Notification_Field_Deprecated,
			/** 10160 */
			Notification_Template,
			/** 10594 */
			Notification_Template_Deprecated,
			/** 10044 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 10665 */
			Omnichannel_Configuration,
			/** 10724 */
			Omnichannel_historical_analytics,
			/** 10666 */
			Omnichannel_Personalization,
			/** 10667 */
			Omnichannel_Queue_Deprecated,
			/** 10654 */
			Omnichannel_Request,
			/** 10668 */
			Omnichannel_Sync_Config,
			/** 10725 */
			Omnichannel_voice_historical_analytics_preview_Deprecated,
			/** 10634 */
			Ongoing_conversation_Deprecated,
			/** 10669 */
			Operating_Hour,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 1083 */
			Opportunity_Line,
			/** 10416 */
			Opportunity_Line_Detail_Deprecated,
			/** 10415 */
			Opportunity_Line_Resource_Category_Deprecated,
			/** 10417 */
			Opportunity_Line_Transaction_Category_Deprecated,
			/** 10418 */
			Opportunity_Line_Transaction_Classification_Deprecated,
			/** 10419 */
			Opportunity_Project_Price_List,
			/** 4503 */
			Opportunity_Relationship,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 10758 */
			Option,
			/** 9809 */
			OptionSet,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 10510 */
			Order_Invoicing_Date,
			/** 10511 */
			Order_Invoicing_Product,
			/** 10512 */
			Order_Invoicing_Setup,
			/** 10513 */
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
			/** 10365 */
			Organizational_Unit,
			/** 10096 */
			OrganizationDataSyncSubscription,
			/** 10097 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10751 */
			Outbound_Configuration,
			/** 10752 */
			Outbound_message,
			/** 10621 */
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
			/** 10598 */
			Parameter_Deprecated,
			/** 1095 */
			Partner_Application,
			/** 10514 */
			Payment,
			/** 10515 */
			Payment_Detail,
			/** 10516 */
			Payment_Method,
			/** 10517 */
			Payment_Term,
			/** 10073 */
			PDF_Setting,
			/** 10672 */
			Persona_Security_Role_Mapping,
			/** 9941 */
			Personal_Document_Template,
			/** 10670 */
			Personal_quick_reply,
			/** 10671 */
			Personal_sound_setting,
			/** 4210 */
			Phone_Call,
			/** 10729 */
			Phone_Number,
			/** 952 */
			Phone_To_Case_Process,
			/** 10215 */
			Playbook,
			/** 10212 */
			Playbook_activity,
			/** 10213 */
			Playbook_activity_attribute,
			/** 10211 */
			Playbook_Callable_Context,
			/** 10214 */
			Playbook_category,
			/** 10216 */
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
			/** 10257 */
			Post_Configuration,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 10258 */
			Post_Rule_Configuration,
			/** 10518 */
			Postal_Code,
			/** 10626 */
			Power_BI_Configuration,
			/** 10586 */
			Predictive_duration_preview,
			/** 10587 */
			Predictive_Work_Hour_Duration_Setting,
			/** 10673 */
			Presence,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10397 */
			Pricing_Dimension,
			/** 10398 */
			Pricing_Dimension_Field_Name,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 61 */
			PrincipalEntityBusinessUnitMap,
			/** 10366 */
			Priority,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 10571 */
			Problematic_Asset_Feedback,
			/** 4703 */
			Process,
			/** 9650 */
			Process_Configuration,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 10425 */
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
			/** 10519 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10170 */
			Productivity_pane_configuration,
			/** 21 */
			ProductSalesLiterature,
			/** 10256 */
			Profile_Album,
			/** 10426 */
			Project,
			/** 10427 */
			Project_Approval,
			/** 10421 */
			Project_Contract_Line_Detail,
			/** 10393 */
			Project_Contract_Line_Invoice_Schedule,
			/** 10394 */
			Project_Contract_Line_Milestone,
			/** 10420 */
			Project_Contract_Line_Resource_Category,
			/** 10422 */
			Project_Contract_Line_Transaction_Category,
			/** 10423 */
			Project_Contract_Line_Transaction_Classification,
			/** 10424 */
			Project_Contract_Project_Price_List,
			/** 10428 */
			Project_Parameter,
			/** 10429 */
			Project_Parameter_Price_List,
			/** 10430 */
			Project_Price_List,
			/** 10387 */
			Project_Service_Approval,
			/** 10389 */
			Project_Stages,
			/** 10431 */
			Project_Task,
			/** 10432 */
			Project_Task_Dependency,
			/** 10433 */
			Project_Task_Status_User,
			/** 10434 */
			Project_Team_Member,
			/** 10435 */
			Project_Team_Member_Sign_Up_Deprecated_in_v30,
			/** 10436 */
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
			/** 10674 */
			Provider,
			/** 10652 */
			Provisioning_State,
			/** 10023 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 10520 */
			Purchase_Order,
			/** 10521 */
			Purchase_Order_Bill,
			/** 10490 */
			Purchase_Order_Business_Process,
			/** 10522 */
			Purchase_Order_Product,
			/** 10523 */
			Purchase_Order_Receipt,
			/** 10524 */
			Purchase_Order_Receipt_Product,
			/** 10525 */
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
			/** 10627 */
			Quick_reply,
			/** 1084 */
			Quote,
			/** 10526 */
			Quote_Booking_Incident,
			/** 10527 */
			Quote_Booking_Product,
			/** 10528 */
			Quote_Booking_Service,
			/** 10529 */
			Quote_Booking_Service_Task,
			/** 10530 */
			Quote_Booking_Setup,
			/** 4211 */
			Quote_Close,
			/** 10531 */
			Quote_Invoicing_Product,
			/** 10532 */
			Quote_Invoicing_Setup,
			/** 1085 */
			Quote_Line,
			/** 10437 */
			Quote_Line_Analytics_Breakdown,
			/** 10441 */
			Quote_Line_Detail,
			/** 10438 */
			Quote_Line_Invoice_Schedule,
			/** 10440 */
			Quote_Line_Milestone,
			/** 10439 */
			Quote_Line_Resource_Category,
			/** 10442 */
			Quote_Line_Transaction_Category,
			/** 10443 */
			Quote_Line_Transaction_Classification,
			/** 10444 */
			Quote_Project_Price_List,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 10653 */
			Recording,
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
			/** 10367 */
			Requirement_Characteristic,
			/** 10384 */
			Requirement_Dependency,
			/** 10368 */
			Requirement_Group,
			/** 10369 */
			Requirement_Organization_Unit,
			/** 10370 */
			Requirement_Relationship,
			/** 10371 */
			Requirement_Resource_Category,
			/** 10372 */
			Requirement_Resource_Preference,
			/** 10373 */
			Requirement_Status,
			/** 10572 */
			Resolution,
			/** 4002 */
			Resource,
			/** 10445 */
			Resource_Assignment,
			/** 10446 */
			Resource_Assignment_Detail_Deprecated_in_v20,
			/** 10585 */
			Resource_duration_preview,
			/** 4010 */
			Resource_Expansion,
			/** 4007 */
			Resource_Group,
			/** 10123 */
			resource_group_data_source,
			/** 10533 */
			Resource_Pay_Type,
			/** 10449 */
			Resource_Request,
			/** 10374 */
			Resource_Requirement,
			/** 10375 */
			Resource_Requirement_Detail,
			/** 10554 */
			Resource_Restriction_Deprecated,
			/** 4006 */
			Resource_Specification,
			/** 10376 */
			Resource_Territory,
			/** 10414 */
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
			/** 10534 */
			RMA,
			/** 10535 */
			RMA_Product,
			/** 10536 */
			RMA_Receipt,
			/** 10537 */
			RMA_Receipt_Product,
			/** 10538 */
			RMA_SubStatus,
			/** 10450 */
			Role_competency_requirement,
			/** 10448 */
			Role_Price,
			/** 10447 */
			Role_Price_Markup,
			/** 1037 */
			Role_Template,
			/** 10451 */
			Role_Utilization,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 9602 */
			Rollup_Query,
			/** 10622 */
			Routing_configuration,
			/** 10623 */
			Routing_configuration_step,
			/** 10615 */
			Routing_diagnostic,
			/** 10614 */
			Routing_diagnostic_item,
			/** 8181 */
			Routing_Rule_Set,
			/** 10617 */
			Routing_Rule_Set_Setting,
			/** 10675 */
			RoutingRequest,
			/** 10539 */
			RTV,
			/** 10540 */
			RTV_Product,
			/** 10541 */
			RTV_Substatus,
			/** 10655 */
			Rule_Item_10655,
			/** 8199 */
			Rule_Item_8199,
			/** 10613 */
			Rulesetentitymapping,
			/** 7200 */
			RuntimeDependency,
			/** 10824 */
			Sales_Acceleration_settings,
			/** 10821 */
			Sales_Assignment_Setting,
			/** 1070 */
			Sales_Attachment,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 10854 */
			Sales_routing_run,
			/** 10244 */
			salesinsightssettings,
			/** 10589 */
			SalesSiteMap,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
			/** 10610 */
			Scenario,
			/** 10377 */
			Schedule_Board_Setting,
			/** 10385 */
			Scheduling_Feature_Flag,
			/** 4005 */
			Scheduling_Group,
			/** 10378 */
			Scheduling_Parameter,
			/** 10776 */
			Script_Task_Trigger,
			/** 10775 */
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
			/** 10676 */
			Search_Configuration,
			/** 10079 */
			Search_provider,
			/** 10102 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 10815 */
			Segment,
			/** 10816 */
			SegmentsUtil,
			/** 10686 */
			Self_service,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10677 */
			Sentiment_analysis,
			/** 10656 */
			Sentiment_daily_topic,
			/** 10657 */
			Sentiment_daily_topic_keyword,
			/** 10658 */
			Sentiment_daily_topic_trending,
			/** 10812 */
			Sequence,
			/** 10853 */
			Sequence_Stat,
			/** 10813 */
			Sequence_Target,
			/** 10814 */
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
			/** 10542 */
			Service_Task_Type,
			/** 10590 */
			ServicesSiteMap,
			/** 10659 */
			Session,
			/** 10695 */
			Session_Characteristic,
			/** 10222 */
			Session_Data_Deprecated,
			/** 10678 */
			Session_event,
			/** 10778 */
			Session_Information,
			/** 10679 */
			Session_participant,
			/** 10223 */
			Session_Participant_Data_Deprecated,
			/** 10660 */
			Session_Participant_Event,
			/** 10661 */
			Session_Sentiment,
			/** 10161 */
			Session_Template,
			/** 10596 */
			Session_Templates_Deprecated,
			/** 10779 */
			Session_Transfer,
			/** 10037 */
			Setting_Definition,
			/** 10591 */
			SettingsSiteMap,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 10543 */
			Ship_Via,
			/** 10239 */
			SI_Key_Value_Config,
			/** 10238 */
			siconfig,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 4709 */
			Site_Map,
			/** 10696 */
			Skill_Attachment_Rule,
			/** 10702 */
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
			/** 10730 */
			SMS_Engagement_Context,
			/** 10731 */
			SMS_Number,
			/** 10732 */
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
			/** 10681 */
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
			/** 10248 */
			Suggested_Activity,
			/** 10249 */
			Suggested_Activity_Data_Source,
			/** 10250 */
			Suggested_Contact,
			/** 10251 */
			Suggested_contacts_data_source,
			/** 10196 */
			Suggestion_Interaction,
			/** 10197 */
			Suggestion_request_payload,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10198 */
			Suggestions_Model_Summary,
			/** 10199 */
			Suggestions_Setting,
			/** 10708 */
			Survey_Answer_Option,
			/** 10717 */
			Survey_Question,
			/** 10716 */
			Survey_Question_Sequence,
			/** 10709 */
			Survey_Response,
			/** 10710 */
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
			/** 10379 */
			System_User_Scheduler_Setting,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10663 */
			Tag,
			/** 4212 */
			Task,
			/** 10544 */
			Tax_Code,
			/** 10545 */
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
			/** 10850 */
			Teams_Contact_Suggestion_by_AI,
			/** 10228 */
			Teams_Dialer_Admin_settings,
			/** 10750 */
			Teams_Engagement_Context,
			/** 10136 */
			Template_For_Properties,
			/** 10162 */
			Template_Parameter,
			/** 10599 */
			Template_Tag_Deprecated,
			/** 2013 */
			Territory,
			/** 10849 */
			Test,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 9948 */
			Text_Analytics_Topic,
			/** 2015 */
			Theme,
			/** 10471 */
			Three_Dimensional_Model,
			/** 10452 */
			Time_Entry,
			/** 10381 */
			Time_Group_Detail,
			/** 10453 */
			Time_Off_Calendar,
			/** 10546 */
			Time_Off_Request,
			/** 10467 */
			Time_Source,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 10782 */
			Toolbar,
			/** 10781 */
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
			/** 10783 */
			Trace_Source_Setting,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 10699 */
			Training_data_import_configuration,
			/** 10701 */
			Training_record,
			/** 10454 */
			Transaction_Category,
			/** 10455 */
			Transaction_Category_Classification,
			/** 10456 */
			Transaction_Category_Hierarchy_Element,
			/** 10457 */
			Transaction_Category_Price,
			/** 10458 */
			Transaction_Connection,
			/** 10382 */
			Transaction_Origin,
			/** 10459 */
			Transaction_Type,
			/** 10682 */
			Transcript,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 10740 */
			Twitter_account,
			/** 10745 */
			Twitter_Engagement_Context,
			/** 10741 */
			Twitter_handle,
			/** 10753 */
			UII_Action,
			/** 10754 */
			UII_Audit,
			/** 10755 */
			UII_Context,
			/** 10757 */
			UII_Non_Hosted_Application,
			/** 10759 */
			UII_Saved_Session,
			/** 10760 */
			UII_Session_Transfer,
			/** 10761 */
			UII_Workflow,
			/** 10762 */
			UII_Workflow_Step,
			/** 10763 */
			UII_Workflow_Step_Mapping,
			/** 10784 */
			Unified_Interface_Settings,
			/** 10120 */
			Unified_Routing_Setup_Tracker,
			/** 10547 */
			Unique_Number,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 2012 */
			Unresolved_Address,
			/** 10247 */
			UntrackedAppointment,
			/** 4220 */
			UntrackedEmail,
			/** 10116 */
			Upgrade_Run,
			/** 10117 */
			Upgrade_Step,
			/** 10118 */
			Upgrade_Version,
			/** 10683 */
			UR_notification_template,
			/** 10684 */
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
			/** 10786 */
			User_Setting,
			/** 10685 */
			User_settings,
			/** 150 */
			User_Settings,
			/** 10460 */
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
			/** 10259 */
			Wall_View,
			/** 10548 */
			Warehouse,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10742 */
			WeChat_account,
			/** 10746 */
			WeChat_Engagement_Context,
			/** 10743 */
			WhatsApp_account,
			/** 10747 */
			WhatsApp_Engagement_Context,
			/** 10744 */
			WhatsApp_number,
			/** 10787 */
			Window_Navigation_Rule,
			/** 4802 */
			Wizard_Page,
			/** 10827 */
			Work_list_user_setting,
			/** 10549 */
			Work_Order,
			/** 10493 */
			Work_Order_Business_Process,
			/** 10550 */
			Work_Order_Characteristic_Deprecated,
			/** 10551 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 10552 */
			Work_Order_Incident,
			/** 10553 */
			Work_Order_Product,
			/** 10575 */
			Work_Order_Resolution,
			/** 10555 */
			Work_Order_Service,
			/** 10556 */
			Work_Order_Service_Task,
			/** 10557 */
			Work_Order_Substatus,
			/** 10558 */
			Work_Order_Type,
			/** 10825 */
			Work_Queue_Record,
			/** 10826 */
			Work_Queue_Record_State,
			/** 10636 */
			Work_Stream,
			/** 10692 */
			Work_stream_capacity_profile,
			/** 10383 */
			Work_template,
			/** 10048 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 10828 */
			WQDataSource
		}
		enum MatchingEntityTypeCode {
			/** 10203 */
			_Deprecated_Dynamics_Customer_Service_Analytics,
			/** 10749 */
			_DeprecatedTeams_Engagement_Context,
			/** 1 */
			Account,
			/** 10386 */
			Account_Project_Price_List,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 10765 */
			Action_Call,
			/** 10764 */
			Action_Call_Workflow,
			/** 9962 */
			Action_Card,
			/** 10240 */
			Action_Card_Regarding,
			/** 10241 */
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
			/** 10355 */
			Actual,
			/** 10395 */
			Actual_Data_Export_Deprecated,
			/** 10186 */
			Adaptive_Card_Configuration,
			/** 1071 */
			Address,
			/** 10218 */
			admin_settings_entity,
			/** 10624 */
			AdminAppState,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10174 */
			Agent_script,
			/** 10767 */
			Agent_Script_Answer,
			/** 10175 */
			Agent_script_step,
			/** 10780 */
			Agent_Script_Task,
			/** 10766 */
			Agent_Script_Task_Category,
			/** 10625 */
			Agent_Status_history,
			/** 10477 */
			Agreement,
			/** 10478 */
			Agreement_Booking_Date,
			/** 10479 */
			Agreement_Booking_Incident,
			/** 10480 */
			Agreement_Booking_Product,
			/** 10481 */
			Agreement_Booking_Service,
			/** 10482 */
			Agreement_Booking_Service_Task,
			/** 10483 */
			Agreement_Booking_Setup,
			/** 10492 */
			Agreement_Business_Process,
			/** 10484 */
			Agreement_Invoice_Date,
			/** 10485 */
			Agreement_Invoice_Product,
			/** 10486 */
			Agreement_Invoice_Setup,
			/** 10487 */
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
			/** 10595 */
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
			/** 10597 */
			Application_Tab_Template_Deprecated,
			/** 10600 */
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
			/** 10468 */
			Approval_Set,
			/** 127 */
			Article,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 10126 */
			Asset_Category_Template_Association,
			/** 10570 */
			Asset_Suggestion,
			/** 10583 */
			Asset_Suggestions_Setting,
			/** 10127 */
			Asset_Template_Association,
			/** 10618 */
			Assignment_Configuration,
			/** 10619 */
			Assignment_Configuration_Step,
			/** 10820 */
			Assignment_Map,
			/** 10817 */
			Assignment_Rule,
			/** 10697 */
			Attach_Skill,
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 10818 */
			Attribute_10818,
			/** 9808 */
			Attribute_9808,
			/** 4601 */
			Attribute_Map,
			/** 10819 */
			Attribute_Value,
			/** 10680 */
			Audio_File,
			/** 10768 */
			Audit_Diagnostics_Setting,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 10638 */
			Auto_block_rule,
			/** 10245 */
			Auto_Capture_Rule,
			/** 10246 */
			Auto_Capture_Settings,
			/** 10121 */
			Available_Times,
			/** 10122 */
			Available_Times_Data_Source,
			/** 9936 */
			Azure_Service_Connection,
			/** 10388 */
			Batch_Job,
			/** 1150 */
			Bookable_Resource,
			/** 10356 */
			Bookable_Resource_Association,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 10564 */
			Bookable_Resource_Booking_Quick_Note,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 10691 */
			Bookable_Resource_Capacity_Profile,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 10357 */
			Booking_Alert,
			/** 10358 */
			Booking_Alert_Status,
			/** 10359 */
			Booking_Change,
			/** 10488 */
			Booking_Journal,
			/** 10360 */
			Booking_Rule,
			/** 10361 */
			Booking_Setup_Metadata,
			/** 1152 */
			Booking_Status,
			/** 10489 */
			Booking_Timestamp,
			/** 10064 */
			BotContent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4405 */
			Bulk_Operation_Log,
			/** 10362 */
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
			/** 10620 */
			Capacity_Profile,
			/** 10726 */
			Carrier,
			/** 10028 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10029 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 112 */
			Case,
			/** 10189 */
			Case_Enrichment,
			/** 4206 */
			Case_Resolution,
			/** 10190 */
			Case_Suggestion,
			/** 10191 */
			Case_Suggestion_Request_Payload,
			/** 10192 */
			Case_Suggestions_Data_Souce,
			/** 10491 */
			Case_to_Work_Order_Business_Process,
			/** 10204 */
			Case_Topic,
			/** 10207 */
			Case_topic_Incident_mapping,
			/** 10205 */
			Case_Topic_Setting,
			/** 10206 */
			Case_Topic_Summary,
			/** 10017 */
			Catalog,
			/** 10018 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 10576 */
			CFS_IoT_Alert_Process_Flow,
			/** 10609 */
			channel,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 10629 */
			Channel_Capability,
			/** 10640 */
			Channel_Configuration,
			/** 10592 */
			Channel_Integration_Framework_v10_Provider,
			/** 10168 */
			Channel_Integration_Framework_v20_Provider,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10641 */
			Channel_State_Configuration,
			/** 1141 */
			Characteristic,
			/** 10700 */
			Characteristic_mapping,
			/** 10707 */
			Chat_Authentication_Settings,
			/** 10712 */
			Chat_Widget,
			/** 10711 */
			Chat_Widget_Languagedeprecated,
			/** 10714 */
			Chat_Widget_Location,
			/** 10066 */
			Chatbot,
			/** 10067 */
			Chatbot_subcomponent,
			/** 113 */
			Child_Incident_Count,
			/** 10363 */
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
			/** 10727 */
			Communication_Provider_Setting,
			/** 10728 */
			Communication_Provider_Setting_Entry,
			/** 10391 */
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
			/** 10364 */
			Configuration_10364,
			/** 10769 */
			Configuration_10769,
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
			/** 10392 */
			Contact_Price_List,
			/** 10851 */
			Contact_suggestion_rule,
			/** 10852 */
			Contact_suggestion_ruleset,
			/** 17 */
			ContactInvoices,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 18 */
			ContactQuotes,
			/** 10647 */
			Context_item_value,
			/** 10650 */
			Context_variable,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 10469 */
			Contract_Line_Detail_Performance,
			/** 10470 */
			Contract_Performance,
			/** 2011 */
			Contract_Template,
			/** 10644 */
			Conversation,
			/** 10630 */
			Conversation_Action,
			/** 10631 */
			Conversation_Action_Locale,
			/** 10693 */
			Conversation_Capacity_profile,
			/** 10694 */
			Conversation_Characteristic,
			/** 10219 */
			Conversation_Data_Deprecated,
			/** 10649 */
			Conversation_Sentiment,
			/** 10720 */
			Conversation_Topic,
			/** 10723 */
			Conversation_topic_Conversation_mapping,
			/** 10721 */
			Conversation_Topic_Setting,
			/** 10722 */
			Conversation_Topic_Summary,
			/** 10719 */
			ConversationInsight,
			/** 10718 */
			conversationsuggestionrequestpayload,
			/** 10065 */
			ConversationTranscript,
			/** 10777 */
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
			/** 10639 */
			Custom_messaging_account,
			/** 10738 */
			Custom_messaging_channel,
			/** 10736 */
			Custom_Messaging_Engagement_Context,
			/** 10128 */
			Customer_Asset,
			/** 10129 */
			Customer_Asset_Attachment,
			/** 10130 */
			Customer_Asset_Category,
			/** 4502 */
			Customer_Relationship,
			/** 10208 */
			Customer_Service_historical_analytics,
			/** 10261 */
			Customer_Voice_alert,
			/** 10262 */
			Customer_Voice_alert_rule,
			/** 10264 */
			Customer_Voice_file_response,
			/** 10265 */
			Customer_Voice_localized_survey_email_template,
			/** 10266 */
			Customer_Voice_project,
			/** 10269 */
			Customer_Voice_satisfaction_metric,
			/** 10270 */
			Customer_Voice_survey,
			/** 10263 */
			Customer_Voice_survey_email_template,
			/** 10271 */
			Customer_Voice_survey_invite,
			/** 10267 */
			Customer_Voice_survey_question,
			/** 10268 */
			Customer_Voice_survey_question_response,
			/** 10272 */
			Customer_Voice_survey_reminder,
			/** 10273 */
			Customer_Voice_survey_response,
			/** 10274 */
			Customer_Voice_unsubscribed_recipient,
			/** 10770 */
			Customization_File,
			/** 10200 */
			Data_Analytics_Admin_Settings_Deprecated,
			/** 10201 */
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
			/** 10855 */
			Data_Sync_State,
			/** 10115 */
			Database_Version,
			/** 418 */
			Dataflow,
			/** 10255 */
			Deal_manager_settings,
			/** 10254 */
			dealmanageraccess,
			/** 10611 */
			Decision_contract,
			/** 10612 */
			Decision_rule_set,
			/** 10396 */
			Delegation,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10632 */
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
			/** 10703 */
			Effort_estimate,
			/** 10704 */
			Effort_estimation_model,
			/** 10705 */
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
			/** 10494 */
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
			/** 10633 */
			Entity_10633,
			/** 9800 */
			Entity_9800,
			/** 430 */
			Entity_Analytics_Config,
			/** 10579 */
			Entity_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 9815 */
			Entity_Index,
			/** 9810 */
			Entity_Key,
			/** 10229 */
			Entity_link_chat_configuration,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 10628 */
			Entity_Routing_Context,
			/** 10772 */
			Entity_Search,
			/** 10771 */
			Entity_Type,
			/** 10242 */
			EntityRankingRule,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10399 */
			Estimate,
			/** 10400 */
			Estimate_Line,
			/** 10785 */
			Event,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 10401 */
			Expense,
			/** 10402 */
			Expense_Category,
			/** 10403 */
			Expense_Receipt,
			/** 955 */
			Expired_Process,
			/** 10011 */
			ExportSolutionUpload,
			/** 10823 */
			Extended_User_Setting,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 10734 */
			Facebook_Application,
			/** 10733 */
			Facebook_Engagement_Context,
			/** 10735 */
			Facebook_Page,
			/** 4000 */
			FacilityEquipment,
			/** 10404 */
			Fact,
			/** 4204 */
			Fax,
			/** 10012 */
			FeatureControlSetting,
			/** 9958 */
			Feedback,
			/** 10405 */
			Field_Computation,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 10584 */
			Field_service_historical_analytics,
			/** 10495 */
			Field_Service_Price_List_Item,
			/** 10496 */
			Field_Service_Setting,
			/** 10497 */
			Field_Service_SLA_Configuration,
			/** 10498 */
			Field_Service_System_Job,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 10260 */
			Filter,
			/** 30 */
			Filter_Template,
			/** 10406 */
			Find_Work_Event_Deprecated_in_v30,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10642 */
			Flagged_spam,
			/** 10045 */
			Flow_Machine,
			/** 10046 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 10243 */
			flowcardtype,
			/** 8003 */
			Follow,
			/** 10234 */
			Forecast,
			/** 10232 */
			Forecast_Configuration,
			/** 10233 */
			Forecast_definition,
			/** 10235 */
			Forecast_recurrence,
			/** 10773 */
			Form,
			/** 10380 */
			Fulfillment_Preference,
			/** 10131 */
			Functional_Location,
			/** 10236 */
			GDPRData,
			/** 10664 */
			Geo_Location_Provider,
			/** 10580 */
			Geofence,
			/** 10581 */
			Geofence_Event,
			/** 10582 */
			Geofencing_Settings,
			/** 10577 */
			Geolocation_Settings,
			/** 10578 */
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
			/** 10756 */
			Hosted_Control,
			/** 10253 */
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
			/** 10499 */
			Incident_Type,
			/** 10500 */
			Incident_Type_Characteristic,
			/** 10501 */
			Incident_Type_Product,
			/** 10505 */
			Incident_Type_Requirement_Group,
			/** 10569 */
			Incident_Type_Resolution,
			/** 10502 */
			Incident_Type_Service,
			/** 10503 */
			Incident_Type_Service_Task,
			/** 10567 */
			Incident_Type_Suggestion_Result,
			/** 10568 */
			Incident_Type_Suggestion_Run_History,
			/** 10504 */
			Incident_Types_Setup,
			/** 9816 */
			Index_Attribute,
			/** 126 */
			Indexed_Article,
			/** 10202 */
			Insights,
			/** 10475 */
			Inspection,
			/** 10473 */
			Inspection_Attachment,
			/** 10476 */
			Inspection_Response,
			/** 10472 */
			Inspection_Template,
			/** 10474 */
			Inspection_Template_Version,
			/** 10407 */
			Integration_Job,
			/** 10408 */
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
			/** 10506 */
			Inventory_Adjustment,
			/** 10507 */
			Inventory_Adjustment_Product,
			/** 10508 */
			Inventory_Journal,
			/** 10509 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10409 */
			Invoice_Frequency,
			/** 10410 */
			Invoice_Frequency_Detail,
			/** 1091 */
			Invoice_Line,
			/** 10411 */
			Invoice_Line_Detail,
			/** 10390 */
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
			/** 10412 */
			Journal,
			/** 10413 */
			Journal_Line,
			/** 10193 */
			KB_Enrichment,
			/** 10091 */
			Key_Vault_Reference,
			/** 10210 */
			Keywords_Description_Suggestion_Setting,
			/** 10209 */
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
			/** 10194 */
			Knowledge_Article_Suggestion,
			/** 10195 */
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
			/** 10220 */
			KPI_Event_Data,
			/** 10221 */
			KPI_Event_Definition,
			/** 10643 */
			Language_10643,
			/** 9957 */
			Language_9957,
			/** 10774 */
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
			/** 10739 */
			LINE_account,
			/** 10737 */
			LINE_Engagement_Context,
			/** 10113 */
			List_Operation,
			/** 4418 */
			List_Value_Mapping,
			/** 10713 */
			Live_Chat_Context,
			/** 10635 */
			Live_work_item_event,
			/** 10648 */
			Live_Work_Item_Participant_Deprecated,
			/** 9201 */
			LocalConfigStore,
			/** 10651 */
			Localization,
			/** 10715 */
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
			/** 10588 */
			MarketingSiteMap,
			/** 10637 */
			Masking_Rule,
			/** 10616 */
			Master_Entity_Routing_Configuration,
			/** 10662 */
			Message,
			/** 4231 */
			Metadata_Difference,
			/** 10748 */
			Microsoft_Teams_account,
			/** 10230 */
			Microsoft_Teams_chat_association_entity,
			/** 10231 */
			Microsoft_Teams_chat_suggestion,
			/** 10227 */
			Microsoft_Teams_Collaboration_entity,
			/** 10224 */
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
			/** 10698 */
			Model_training_details,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10225 */
			msdyn_msteamssetting,
			/** 10226 */
			msdyn_msteamssettingsv2,
			/** 10237 */
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
			/** 10252 */
			Notes_analysis_Config,
			/** 10099 */
			Notification_10099,
			/** 4110 */
			Notification_4110,
			/** 10159 */
			Notification_Field,
			/** 10593 */
			Notification_Field_Deprecated,
			/** 10160 */
			Notification_Template,
			/** 10594 */
			Notification_Template_Deprecated,
			/** 10044 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 10665 */
			Omnichannel_Configuration,
			/** 10724 */
			Omnichannel_historical_analytics,
			/** 10666 */
			Omnichannel_Personalization,
			/** 10667 */
			Omnichannel_Queue_Deprecated,
			/** 10654 */
			Omnichannel_Request,
			/** 10668 */
			Omnichannel_Sync_Config,
			/** 10725 */
			Omnichannel_voice_historical_analytics_preview_Deprecated,
			/** 10634 */
			Ongoing_conversation_Deprecated,
			/** 10669 */
			Operating_Hour,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 1083 */
			Opportunity_Line,
			/** 10416 */
			Opportunity_Line_Detail_Deprecated,
			/** 10415 */
			Opportunity_Line_Resource_Category_Deprecated,
			/** 10417 */
			Opportunity_Line_Transaction_Category_Deprecated,
			/** 10418 */
			Opportunity_Line_Transaction_Classification_Deprecated,
			/** 10419 */
			Opportunity_Project_Price_List,
			/** 4503 */
			Opportunity_Relationship,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 10758 */
			Option,
			/** 9809 */
			OptionSet,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 10510 */
			Order_Invoicing_Date,
			/** 10511 */
			Order_Invoicing_Product,
			/** 10512 */
			Order_Invoicing_Setup,
			/** 10513 */
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
			/** 10365 */
			Organizational_Unit,
			/** 10096 */
			OrganizationDataSyncSubscription,
			/** 10097 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10751 */
			Outbound_Configuration,
			/** 10752 */
			Outbound_message,
			/** 10621 */
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
			/** 10598 */
			Parameter_Deprecated,
			/** 1095 */
			Partner_Application,
			/** 10514 */
			Payment,
			/** 10515 */
			Payment_Detail,
			/** 10516 */
			Payment_Method,
			/** 10517 */
			Payment_Term,
			/** 10073 */
			PDF_Setting,
			/** 10672 */
			Persona_Security_Role_Mapping,
			/** 9941 */
			Personal_Document_Template,
			/** 10670 */
			Personal_quick_reply,
			/** 10671 */
			Personal_sound_setting,
			/** 4210 */
			Phone_Call,
			/** 10729 */
			Phone_Number,
			/** 952 */
			Phone_To_Case_Process,
			/** 10215 */
			Playbook,
			/** 10212 */
			Playbook_activity,
			/** 10213 */
			Playbook_activity_attribute,
			/** 10211 */
			Playbook_Callable_Context,
			/** 10214 */
			Playbook_category,
			/** 10216 */
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
			/** 10257 */
			Post_Configuration,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 10258 */
			Post_Rule_Configuration,
			/** 10518 */
			Postal_Code,
			/** 10626 */
			Power_BI_Configuration,
			/** 10586 */
			Predictive_duration_preview,
			/** 10587 */
			Predictive_Work_Hour_Duration_Setting,
			/** 10673 */
			Presence,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 10397 */
			Pricing_Dimension,
			/** 10398 */
			Pricing_Dimension_Field_Name,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 61 */
			PrincipalEntityBusinessUnitMap,
			/** 10366 */
			Priority,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 10571 */
			Problematic_Asset_Feedback,
			/** 4703 */
			Process,
			/** 9650 */
			Process_Configuration,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 10425 */
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
			/** 10519 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10170 */
			Productivity_pane_configuration,
			/** 21 */
			ProductSalesLiterature,
			/** 10256 */
			Profile_Album,
			/** 10426 */
			Project,
			/** 10427 */
			Project_Approval,
			/** 10421 */
			Project_Contract_Line_Detail,
			/** 10393 */
			Project_Contract_Line_Invoice_Schedule,
			/** 10394 */
			Project_Contract_Line_Milestone,
			/** 10420 */
			Project_Contract_Line_Resource_Category,
			/** 10422 */
			Project_Contract_Line_Transaction_Category,
			/** 10423 */
			Project_Contract_Line_Transaction_Classification,
			/** 10424 */
			Project_Contract_Project_Price_List,
			/** 10428 */
			Project_Parameter,
			/** 10429 */
			Project_Parameter_Price_List,
			/** 10430 */
			Project_Price_List,
			/** 10387 */
			Project_Service_Approval,
			/** 10389 */
			Project_Stages,
			/** 10431 */
			Project_Task,
			/** 10432 */
			Project_Task_Dependency,
			/** 10433 */
			Project_Task_Status_User,
			/** 10434 */
			Project_Team_Member,
			/** 10435 */
			Project_Team_Member_Sign_Up_Deprecated_in_v30,
			/** 10436 */
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
			/** 10674 */
			Provider,
			/** 10652 */
			Provisioning_State,
			/** 10023 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 10520 */
			Purchase_Order,
			/** 10521 */
			Purchase_Order_Bill,
			/** 10490 */
			Purchase_Order_Business_Process,
			/** 10522 */
			Purchase_Order_Product,
			/** 10523 */
			Purchase_Order_Receipt,
			/** 10524 */
			Purchase_Order_Receipt_Product,
			/** 10525 */
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
			/** 10627 */
			Quick_reply,
			/** 1084 */
			Quote,
			/** 10526 */
			Quote_Booking_Incident,
			/** 10527 */
			Quote_Booking_Product,
			/** 10528 */
			Quote_Booking_Service,
			/** 10529 */
			Quote_Booking_Service_Task,
			/** 10530 */
			Quote_Booking_Setup,
			/** 4211 */
			Quote_Close,
			/** 10531 */
			Quote_Invoicing_Product,
			/** 10532 */
			Quote_Invoicing_Setup,
			/** 1085 */
			Quote_Line,
			/** 10437 */
			Quote_Line_Analytics_Breakdown,
			/** 10441 */
			Quote_Line_Detail,
			/** 10438 */
			Quote_Line_Invoice_Schedule,
			/** 10440 */
			Quote_Line_Milestone,
			/** 10439 */
			Quote_Line_Resource_Category,
			/** 10442 */
			Quote_Line_Transaction_Category,
			/** 10443 */
			Quote_Line_Transaction_Classification,
			/** 10444 */
			Quote_Project_Price_List,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 10653 */
			Recording,
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
			/** 10367 */
			Requirement_Characteristic,
			/** 10384 */
			Requirement_Dependency,
			/** 10368 */
			Requirement_Group,
			/** 10369 */
			Requirement_Organization_Unit,
			/** 10370 */
			Requirement_Relationship,
			/** 10371 */
			Requirement_Resource_Category,
			/** 10372 */
			Requirement_Resource_Preference,
			/** 10373 */
			Requirement_Status,
			/** 10572 */
			Resolution,
			/** 4002 */
			Resource,
			/** 10445 */
			Resource_Assignment,
			/** 10446 */
			Resource_Assignment_Detail_Deprecated_in_v20,
			/** 10585 */
			Resource_duration_preview,
			/** 4010 */
			Resource_Expansion,
			/** 4007 */
			Resource_Group,
			/** 10123 */
			resource_group_data_source,
			/** 10533 */
			Resource_Pay_Type,
			/** 10449 */
			Resource_Request,
			/** 10374 */
			Resource_Requirement,
			/** 10375 */
			Resource_Requirement_Detail,
			/** 10554 */
			Resource_Restriction_Deprecated,
			/** 4006 */
			Resource_Specification,
			/** 10376 */
			Resource_Territory,
			/** 10414 */
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
			/** 10534 */
			RMA,
			/** 10535 */
			RMA_Product,
			/** 10536 */
			RMA_Receipt,
			/** 10537 */
			RMA_Receipt_Product,
			/** 10538 */
			RMA_SubStatus,
			/** 10450 */
			Role_competency_requirement,
			/** 10448 */
			Role_Price,
			/** 10447 */
			Role_Price_Markup,
			/** 1037 */
			Role_Template,
			/** 10451 */
			Role_Utilization,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 9602 */
			Rollup_Query,
			/** 10622 */
			Routing_configuration,
			/** 10623 */
			Routing_configuration_step,
			/** 10615 */
			Routing_diagnostic,
			/** 10614 */
			Routing_diagnostic_item,
			/** 8181 */
			Routing_Rule_Set,
			/** 10617 */
			Routing_Rule_Set_Setting,
			/** 10675 */
			RoutingRequest,
			/** 10539 */
			RTV,
			/** 10540 */
			RTV_Product,
			/** 10541 */
			RTV_Substatus,
			/** 10655 */
			Rule_Item_10655,
			/** 8199 */
			Rule_Item_8199,
			/** 10613 */
			Rulesetentitymapping,
			/** 7200 */
			RuntimeDependency,
			/** 10824 */
			Sales_Acceleration_settings,
			/** 10821 */
			Sales_Assignment_Setting,
			/** 1070 */
			Sales_Attachment,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 10854 */
			Sales_routing_run,
			/** 10244 */
			salesinsightssettings,
			/** 10589 */
			SalesSiteMap,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
			/** 10610 */
			Scenario,
			/** 10377 */
			Schedule_Board_Setting,
			/** 10385 */
			Scheduling_Feature_Flag,
			/** 4005 */
			Scheduling_Group,
			/** 10378 */
			Scheduling_Parameter,
			/** 10776 */
			Script_Task_Trigger,
			/** 10775 */
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
			/** 10676 */
			Search_Configuration,
			/** 10079 */
			Search_provider,
			/** 10102 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 10815 */
			Segment,
			/** 10816 */
			SegmentsUtil,
			/** 10686 */
			Self_service,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10677 */
			Sentiment_analysis,
			/** 10656 */
			Sentiment_daily_topic,
			/** 10657 */
			Sentiment_daily_topic_keyword,
			/** 10658 */
			Sentiment_daily_topic_trending,
			/** 10812 */
			Sequence,
			/** 10853 */
			Sequence_Stat,
			/** 10813 */
			Sequence_Target,
			/** 10814 */
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
			/** 10542 */
			Service_Task_Type,
			/** 10590 */
			ServicesSiteMap,
			/** 10659 */
			Session,
			/** 10695 */
			Session_Characteristic,
			/** 10222 */
			Session_Data_Deprecated,
			/** 10678 */
			Session_event,
			/** 10778 */
			Session_Information,
			/** 10679 */
			Session_participant,
			/** 10223 */
			Session_Participant_Data_Deprecated,
			/** 10660 */
			Session_Participant_Event,
			/** 10661 */
			Session_Sentiment,
			/** 10161 */
			Session_Template,
			/** 10596 */
			Session_Templates_Deprecated,
			/** 10779 */
			Session_Transfer,
			/** 10037 */
			Setting_Definition,
			/** 10591 */
			SettingsSiteMap,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 10543 */
			Ship_Via,
			/** 10239 */
			SI_Key_Value_Config,
			/** 10238 */
			siconfig,
			/** 9951 */
			Similarity_Rule,
			/** 4009 */
			Site,
			/** 4709 */
			Site_Map,
			/** 10696 */
			Skill_Attachment_Rule,
			/** 10702 */
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
			/** 10730 */
			SMS_Engagement_Context,
			/** 10731 */
			SMS_Number,
			/** 10732 */
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
			/** 10681 */
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
			/** 10248 */
			Suggested_Activity,
			/** 10249 */
			Suggested_Activity_Data_Source,
			/** 10250 */
			Suggested_Contact,
			/** 10251 */
			Suggested_contacts_data_source,
			/** 10196 */
			Suggestion_Interaction,
			/** 10197 */
			Suggestion_request_payload,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10198 */
			Suggestions_Model_Summary,
			/** 10199 */
			Suggestions_Setting,
			/** 10708 */
			Survey_Answer_Option,
			/** 10717 */
			Survey_Question,
			/** 10716 */
			Survey_Question_Sequence,
			/** 10709 */
			Survey_Response,
			/** 10710 */
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
			/** 10379 */
			System_User_Scheduler_Setting,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10663 */
			Tag,
			/** 4212 */
			Task,
			/** 10544 */
			Tax_Code,
			/** 10545 */
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
			/** 10850 */
			Teams_Contact_Suggestion_by_AI,
			/** 10228 */
			Teams_Dialer_Admin_settings,
			/** 10750 */
			Teams_Engagement_Context,
			/** 10136 */
			Template_For_Properties,
			/** 10162 */
			Template_Parameter,
			/** 10599 */
			Template_Tag_Deprecated,
			/** 2013 */
			Territory,
			/** 10849 */
			Test,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 9948 */
			Text_Analytics_Topic,
			/** 2015 */
			Theme,
			/** 10471 */
			Three_Dimensional_Model,
			/** 10452 */
			Time_Entry,
			/** 10381 */
			Time_Group_Detail,
			/** 10453 */
			Time_Off_Calendar,
			/** 10546 */
			Time_Off_Request,
			/** 10467 */
			Time_Source,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 10782 */
			Toolbar,
			/** 10781 */
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
			/** 10783 */
			Trace_Source_Setting,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 10699 */
			Training_data_import_configuration,
			/** 10701 */
			Training_record,
			/** 10454 */
			Transaction_Category,
			/** 10455 */
			Transaction_Category_Classification,
			/** 10456 */
			Transaction_Category_Hierarchy_Element,
			/** 10457 */
			Transaction_Category_Price,
			/** 10458 */
			Transaction_Connection,
			/** 10382 */
			Transaction_Origin,
			/** 10459 */
			Transaction_Type,
			/** 10682 */
			Transcript,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 10740 */
			Twitter_account,
			/** 10745 */
			Twitter_Engagement_Context,
			/** 10741 */
			Twitter_handle,
			/** 10753 */
			UII_Action,
			/** 10754 */
			UII_Audit,
			/** 10755 */
			UII_Context,
			/** 10757 */
			UII_Non_Hosted_Application,
			/** 10759 */
			UII_Saved_Session,
			/** 10760 */
			UII_Session_Transfer,
			/** 10761 */
			UII_Workflow,
			/** 10762 */
			UII_Workflow_Step,
			/** 10763 */
			UII_Workflow_Step_Mapping,
			/** 10784 */
			Unified_Interface_Settings,
			/** 10120 */
			Unified_Routing_Setup_Tracker,
			/** 10547 */
			Unique_Number,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 2012 */
			Unresolved_Address,
			/** 10247 */
			UntrackedAppointment,
			/** 4220 */
			UntrackedEmail,
			/** 10116 */
			Upgrade_Run,
			/** 10117 */
			Upgrade_Step,
			/** 10118 */
			Upgrade_Version,
			/** 10683 */
			UR_notification_template,
			/** 10684 */
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
			/** 10786 */
			User_Setting,
			/** 10685 */
			User_settings,
			/** 150 */
			User_Settings,
			/** 10460 */
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
			/** 10259 */
			Wall_View,
			/** 10548 */
			Warehouse,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10742 */
			WeChat_account,
			/** 10746 */
			WeChat_Engagement_Context,
			/** 10743 */
			WhatsApp_account,
			/** 10747 */
			WhatsApp_Engagement_Context,
			/** 10744 */
			WhatsApp_number,
			/** 10787 */
			Window_Navigation_Rule,
			/** 4802 */
			Wizard_Page,
			/** 10827 */
			Work_list_user_setting,
			/** 10549 */
			Work_Order,
			/** 10493 */
			Work_Order_Business_Process,
			/** 10550 */
			Work_Order_Characteristic_Deprecated,
			/** 10551 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 10552 */
			Work_Order_Incident,
			/** 10553 */
			Work_Order_Product,
			/** 10575 */
			Work_Order_Resolution,
			/** 10555 */
			Work_Order_Service,
			/** 10556 */
			Work_Order_Service_Task,
			/** 10557 */
			Work_Order_Substatus,
			/** 10558 */
			Work_Order_Type,
			/** 10825 */
			Work_Queue_Record,
			/** 10826 */
			Work_Queue_Record_State,
			/** 10636 */
			Work_Stream,
			/** 10692 */
			Work_stream_capacity_profile,
			/** 10383 */
			Work_template,
			/** 10048 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 10828 */
			WQDataSource
		}
		enum StateCode {
			/** 1 */
			Active,
			/** 0 */
			Inactive
		}
		enum StatusCode {
			/** 2 */
			Published,
			/** 1 */
			Publishing,
			/** 0 */
			Unpublished
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