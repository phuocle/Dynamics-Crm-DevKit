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
			/** Type a short description about the objective or primary topic of the activity. */
			msdyn_subject: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** This field is for internal use only. */
			msdyn_playbookactivity_json: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_playbookactivity_msdyn_playbookactivityattribute: DevKit.Controls.NavigationItem
		}
		interface Grid {
			DocumentsSubGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_playbookactivity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_playbookactivity_Information */
		Body: DevKit.Formmsdyn_playbookactivity_Information.Body;
		/** The Navigation of form msdyn_playbookactivity_Information */
		Navigation: DevKit.Formmsdyn_playbookactivity_Information.Navigation;
		/** The Grid of form msdyn_playbookactivity_Information */
		Grid: DevKit.Formmsdyn_playbookactivity_Information.Grid;
		/** The SidePanes of form msdyn_playbookactivity_Information */
		SidePanes: DevKit.SidePanes;
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
		/** The logical name of the entity. */
		msdyn_activityLogicalName: string;
		/** Select the type of activity to be associated with the playbook. */
		msdyn_activityType: OptionSet.msdyn_playbookactivity.msdyn_activityType;
		/** This field is for internal use only. */
		msdyn_playbookactivity_json: string;
		/** Shows the ID of the playbook activity. */
		msdyn_playbookactivityId: string;
		/** Shows the ID of the playbook template associated with the playbook activities. */
		msdyn_playbooktemplateid: string;
		/** Type a short description about the objective or primary topic of the activity. */
		msdyn_subject: string;
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
		/** Status of the Playbook Activities */
		statecode: OptionSet.msdyn_playbookactivity.statecode;
		/** Reason for the status of the Playbook Activities */
		statuscode: OptionSet.msdyn_playbookactivity.statuscode;
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
			/** The logical name of the entity. */
			readonly msdyn_activityLogicalName: string;
			/** Select the type of activity to be associated with the playbook. */
			readonly msdyn_activityType: string;
			/** This field is for internal use only. */
			readonly msdyn_playbookactivity_json: string;
			/** Shows the ID of the playbook activity. */
			readonly msdyn_playbookactivityId: string;
			/** Shows the ID of the playbook template associated with the playbook activities. */
			readonly msdyn_playbooktemplateid: string;
			/** Type a short description about the objective or primary topic of the activity. */
			readonly msdyn_subject: string;
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
			/** Status of the Playbook Activities */
			readonly statecode: string;
			/** Reason for the status of the Playbook Activities */
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
	namespace msdyn_playbookactivity {
		enum msdyn_activityType {
			/** 1 */
			Account,
			/** 10563 */
			Account_KPI_Item,
			/** 16 */
			AccountLeads,
			/** 8040 */
			ACIViewMapper,
			/** 10795 */
			ACS_channel_instance,
			/** 10796 */
			ACS_channel_instance_account,
			/** 10093 */
			Action_Approval_Model,
			/** 9962 */
			Action_Card,
			/** 10545 */
			Action_Card_Regarding,
			/** 10546 */
			Action_Card_Role_Setting,
			/** 9983 */
			Action_Card_Type,
			/** 10550 */
			Action_Card_Usage,
			/** 10551 */
			Action_Card_Usage_Aggregation,
			/** 9973 */
			Action_Card_User_Settings,
			/** 10494 */
			Action_Input_Parameter,
			/** 10495 */
			Action_Output_Parameter,
			/** 9968 */
			ActionCardUserState,
			/** 10762 */
			Active_ICD_Extension,
			/** 4200 */
			Activity,
			/** 10564 */
			Activity_Analysis_CleanUp_State,
			/** 10184 */
			Activity_File_Attachment,
			/** 10367 */
			Activity_monitor,
			/** 135 */
			Activity_Party,
			/** 11371 */
			ActivityMappingMetadataBase,
			/** 10997 */
			Actual,
			/** 10317 */
			Ad_Placement,
			/** 10503 */
			Adaptive_Card_Configuration,
			/** 11372 */
			AdditionalEntityInfo,
			/** 1071 */
			Address,
			/** 10615 */
			AddToCalendar_style,
			/** 10427 */
			admin_settings_entity,
			/** 10665 */
			AdminAppState,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10746 */
			Agent_Capacity_Profile_Unit,
			/** 10742 */
			Agent_capacity_update_history,
			/** 10747 */
			Agent_Channel_State,
			/** 10867 */
			Agent_Copilot_Setting,
			/** 11604 */
			Agent_Group,
			/** 11605 */
			Agent_Group_Membership,
			/** 10874 */
			Agent_Preference_For_Copilot,
			/** 10893 */
			Agent_Resource_Forecasting,
			/** 10491 */
			Agent_script,
			/** 10492 */
			Agent_script_step,
			/** 10748 */
			Agent_Status,
			/** 10666 */
			Agent_Status_history,
			/** 11642 */
			Agreement,
			/** 11643 */
			Agreement_Booking_Date,
			/** 11644 */
			Agreement_Booking_Incident,
			/** 11645 */
			Agreement_Booking_Product,
			/** 11646 */
			Agreement_Booking_Service,
			/** 11647 */
			Agreement_Booking_Service_Task,
			/** 11648 */
			Agreement_Booking_Setup,
			/** 11657 */
			Agreement_Business_Process,
			/** 11649 */
			Agreement_Invoice_Date,
			/** 11650 */
			Agreement_Invoice_Product,
			/** 11651 */
			Agreement_Invoice_Setup,
			/** 11652 */
			Agreement_Substatus,
			/** 10142 */
			AI_Builder_Dataset,
			/** 10143 */
			AI_Builder_Dataset_File,
			/** 10144 */
			AI_Builder_Dataset_Record,
			/** 10145 */
			AI_Builder_Datasets_Container,
			/** 10135 */
			AI_Builder_Feedback_Loop,
			/** 10146 */
			AI_Builder_File,
			/** 10147 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 11578 */
			ai_conversationtopic,
			/** 11580 */
			ai_conversationtopic_conversation,
			/** 11579 */
			ai_conversationtopicclustersnapshot,
			/** 10134 */
			AI_Event,
			/** 10136 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10139 */
			AI_Object_Detection_Bounding_Box,
			/** 10137 */
			AI_Object_Detection_Image,
			/** 10140 */
			AI_Object_Detection_Image_Mapping,
			/** 10138 */
			AI_Object_Detection_Label,
			/** 10119 */
			AI_Plugin_Conversation_Starter,
			/** 10120 */
			AI_Plugin_Conversation_Starter_Mapping,
			/** 10121 */
			AI_Plugin_Governance,
			/** 10122 */
			AI_Plugin_Governance_Extended,
			/** 11613 */
			AI_Skill_Config,
			/** 400 */
			AI_Template,
			/** 11373 */
			AiBuilderCallbackTestHook,
			/** 11374 */
			AiBuilderModelMetadata,
			/** 10117 */
			AICopilot,
			/** 10126 */
			AIPlugin,
			/** 10118 */
			AIPluginAuth,
			/** 10127 */
			AIPluginExternalSchema,
			/** 10128 */
			AIPluginExternalSchemaProperty,
			/** 10129 */
			AIPluginInstance,
			/** 10130 */
			AIPluginOperation,
			/** 10131 */
			AIPluginOperationParameter,
			/** 10123 */
			AIPluginOperationResponseTemplate,
			/** 10124 */
			AIPluginTitle,
			/** 10132 */
			AIPluginUserSetting,
			/** 11467 */
			AlternateKey,
			/** 10277 */
			Analysis_Component,
			/** 10278 */
			Analysis_Job,
			/** 10279 */
			Analysis_Override,
			/** 10280 */
			Analysis_Result,
			/** 10281 */
			Analysis_Result_Detail,
			/** 11375 */
			AnalysisInstanceConfig,
			/** 11376 */
			AnalysisMetadata,
			/** 11140 */
			Analytics_configuration,
			/** 132 */
			Announcement,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 11611 */
			API_Request_Cache,
			/** 11612 */
			API_Request_Folder,
			/** 10248 */
			App_Action,
			/** 10249 */
			App_Action_Migration,
			/** 10250 */
			App_Action_Rule,
			/** 9011 */
			App_Config_Master,
			/** 9012 */
			App_Configuration,
			/** 9013 */
			App_Configuration_Instance,
			/** 10167 */
			App_Insights_Metadata,
			/** 9007 */
			App_Module_Component,
			/** 9009 */
			App_Module_Roles,
			/** 10455 */
			App_Parameter_Definition_Deprecated,
			/** 10439 */
			App_profile,
			/** 10639 */
			App_Profile_Copilot_Configuration,
			/** 10442 */
			App_profile_role_mapping,
			/** 11332 */
			App_Registration_Data_Source,
			/** 10628 */
			App_state,
			/** 11616 */
			Apple_messages_for_business_account,
			/** 11617 */
			Apple_messages_for_business_engagement_context,
			/** 1204 */
			Application,
			/** 10440 */
			Application_Extension,
			/** 4707 */
			Application_File,
			/** 1120 */
			Application_Ribbons,
			/** 10441 */
			Application_Tab_Template,
			/** 10457 */
			Application_Tab_Template_Deprecated,
			/** 10460 */
			Application_Type_Deprecated,
			/** 10072 */
			ApplicationUser,
			/** 8700 */
			AppModule_Metadata,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 4201 */
			Appointment,
			/** 11213 */
			Appointment_activity,
			/** 11138 */
			Appointment_activity_marketing_template,
			/** 10094 */
			Approval,
			/** 10095 */
			Approval_Request,
			/** 10096 */
			Approval_Response,
			/** 10097 */
			Approval_Step,
			/** 10223 */
			ArchiveCleanupInfo,
			/** 10224 */
			ArchiveCleanupOperation,
			/** 127 */
			Article,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 11311 */
			Asset,
			/** 10378 */
			Asset_Category_Template_Association,
			/** 11725 */
			Asset_Suggestion,
			/** 11741 */
			Asset_Suggestions_Setting,
			/** 10379 */
			Asset_Template_Association,
			/** 10652 */
			Assignment_Configuration,
			/** 10653 */
			Assignment_Configuration_Step,
			/** 10833 */
			Assignment_Map,
			/** 10830 */
			Assignment_Rule,
			/** 10752 */
			Attach_Skill,
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 11083 */
			Attendee_Pass,
			/** 9808 */
			Attribute,
			/** 10580 */
			Attribute_Influence_Statistics,
			/** 4601 */
			Attribute_Map,
			/** 11458 */
			AttributeDataProfile,
			/** 11607 */
			Audience_settings,
			/** 10729 */
			Audio_File,
			/** 4567 */
			Auditing,
			/** 10669 */
			Auth_Settings_Entry,
			/** 10668 */
			Authentication_Settings_10668,
			/** 11084 */
			Authentication_Settings_11084,
			/** 1094 */
			Authorization_Server,
			/** 10683 */
			Auto_block_rule,
			/** 10552 */
			Auto_Capture_Rule,
			/** 10553 */
			Auto_Capture_Settings,
			/** 10865 */
			Automated_action_rule,
			/** 10866 */
			Automated_action_rules_mapping,
			/** 10646 */
			Autonomous_case_creation_and_update_rules,
			/** 10370 */
			Available_Times,
			/** 10371 */
			Available_Times_Data_Source,
			/** 10098 */
			Await_All_Action_Approval_Model,
			/** 10099 */
			Await_All_Approval_Model,
			/** 9936 */
			Azure_Service_Connection,
			/** 11377 */
			AzureMLWebService,
			/** 10212 */
			Background_Operation,
			/** 10616 */
			basestyle,
			/** 10100 */
			Basic_Approval_Model_Data,
			/** 10321 */
			Basic_Form,
			/** 10322 */
			Basic_Form_Metadata,
			/** 1150 */
			Bookable_Resource,
			/** 10994 */
			Bookable_Resource_Association,
			/** 1145 */
			Bookable_Resource_Booking,
			/** 1146 */
			Bookable_Resource_Booking_Header,
			/** 11716 */
			Bookable_Resource_Booking_Quick_Note,
			/** 4421 */
			Bookable_Resource_Booking_to_Exchange_Id_Mapping,
			/** 10743 */
			Bookable_Resource_Capacity_Profile,
			/** 1147 */
			Bookable_Resource_Category,
			/** 1149 */
			Bookable_Resource_Category_Assn,
			/** 1148 */
			Bookable_Resource_Characteristic,
			/** 1151 */
			Bookable_Resource_Group,
			/** 11000 */
			Booking_Alert,
			/** 11001 */
			Booking_Alert_Status,
			/** 11002 */
			Booking_Change,
			/** 11653 */
			Booking_Journal,
			/** 11003 */
			Booking_Rule,
			/** 10995 */
			Booking_Setup_Metadata,
			/** 1152 */
			Booking_Status,
			/** 11654 */
			Booking_Timestamp,
			/** 10684 */
			Bot_Channel_Registration_Secret,
			/** 10864 */
			Bot_Session,
			/** 10150 */
			BotContent,
			/** 11347 */
			Brand_profile,
			/** 11349 */
			Brand_theme,
			/** 11317 */
			Browser,
			/** 11087 */
			Building,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 4405 */
			Bulk_Operation_Log,
			/** 10225 */
			BulkArchiveConfig,
			/** 10226 */
			BulkArchiveFailureDetail,
			/** 10227 */
			BulkArchiveOperation,
			/** 10228 */
			BulkArchiveOperationDetail,
			/** 11004 */
			Business_Closure,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 10 */
			Business_Unit,
			/** 6 */
			Business_Unit_Map,
			/** 11378 */
			BusinessUnitConfiguration,
			/** 10617 */
			Button_style_10617,
			/** 11325 */
			Button_style_11325,
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
			/** 10068 */
			CanvasApp_Extended_Metadata,
			/** 10654 */
			Capacity_Profile,
			/** 11352 */
			Captcha,
			/** 10253 */
			Card,
			/** 10254 */
			Card_State_Item,
			/** 11040 */
			Carrier,
			/** 10057 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10058 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 112 */
			Case,
			/** 10869 */
			Case_Enrichment,
			/** 10870 */
			Case_follow_up_and_closure_configuration,
			/** 4206 */
			Case_Resolution,
			/** 10871 */
			Case_Suggestion,
			/** 10872 */
			Case_Suggestion_Request_Payload,
			/** 10873 */
			Case_Suggestions_Data_Souce,
			/** 11656 */
			Case_to_Work_Order_Business_Process,
			/** 10895 */
			Case_Topic,
			/** 10898 */
			Case_topic_Incident_mapping,
			/** 10896 */
			Case_Topic_Setting,
			/** 10897 */
			Case_Topic_Summary,
			/** 10024 */
			Catalog,
			/** 10025 */
			Catalog_Assignment,
			/** 10359 */
			Catalog_Submission_Files,
			/** 10787 */
			CatalogEventStatusConfiguration,
			/** 9959 */
			Category,
			/** 11139 */
			CDN_configuration,
			/** 11379 */
			CdsaModelMetadata,
			/** 11582 */
			CertificateCredential,
			/** 11734 */
			CFS_IoT_Alert_Process_Flow,
			/** 11025 */
			channel,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 10687 */
			Channel_api_method_mapping,
			/** 10672 */
			Channel_Capability,
			/** 10662 */
			Channel_Configuration,
			/** 10476 */
			Channel_Definition,
			/** 10477 */
			Channel_Definition_Consent,
			/** 10478 */
			Channel_Definition_Locale,
			/** 10479 */
			Channel_Instance,
			/** 10480 */
			Channel_Instance_Account,
			/** 11615 */
			Channel_instance_secret,
			/** 10452 */
			Channel_Integration_Framework_v10_Provider,
			/** 10469 */
			Channel_Integration_Framework_v20_Provider,
			/** 11259 */
			Channel_Map,
			/** 10481 */
			Channel_Message_Attachment,
			/** 10482 */
			Channel_Message_Context_Part,
			/** 10483 */
			Channel_Message_Part,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10663 */
			Channel_State_Configuration,
			/** 1141 */
			Characteristic,
			/** 10755 */
			Characteristic_mapping,
			/** 11031 */
			Chat_Widget,
			/** 11030 */
			Chat_Widget_Languagedeprecated,
			/** 11033 */
			Chat_Widget_Location,
			/** 11088 */
			Check_in,
			/** 113 */
			Child_Incident_Count,
			/** 11459 */
			CIWorkflowJob,
			/** 11460 */
			CIWorkflowNode,
			/** 11461 */
			CIWorkflowTask,
			/** 10992 */
			Client_Extension,
			/** 36 */
			Client_update,
			/** 11380 */
			ClusterLoadMetadata,
			/** 11309 */
			CMS_AddOn,
			/** 10618 */
			Code_style,
			/** 10428 */
			Collab_Space_Team_Association,
			/** 4417 */
			Column_Mapping,
			/** 10318 */
			Column_Permission,
			/** 10319 */
			Column_Permission_Profile,
			/** 10619 */
			Column_style,
			/** 10165 */
			Comment_10165,
			/** 10769 */
			Comment_10769,
			/** 8005 */
			Comment_8005,
			/** 11310 */
			Commerce_Data_Source,
			/** 4215 */
			Commitment,
			/** 11037 */
			Communication_Provider_Setting,
			/** 11038 */
			Communication_Provider_Setting_Entry,
			/** 11568 */
			Comparator_Metadata,
			/** 123 */
			Competitor,
			/** 1004 */
			Competitor_Address,
			/** 1006 */
			Competitor_Product,
			/** 26 */
			CompetitorSalesLiterature,
			/** 11267 */
			Compliance_profile,
			/** 10006 */
			Component_Layer,
			/** 10007 */
			Component_Layer_Data_Source,
			/** 10049 */
			Component_Version,
			/** 10050 */
			Component_Version_Data_Source,
			/** 10051 */
			Component_Version_Internal,
			/** 10788 */
			Configuration_10788,
			/** 10993 */
			Configuration_10993,
			/** 11381 */
			ConflationCriteriaStatistics,
			/** 11382 */
			ConflationMetadata,
			/** 11383 */
			ConflationRun,
			/** 11384 */
			ConflationStatistics,
			/** 3234 */
			Connection,
			/** 373 */
			Connection_Instance,
			/** 10110 */
			Connection_Reference,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 11268 */
			Consent,
			/** 11263 */
			Consent_Provider,
			/** 11270 */
			Consent_Provider_Default_Configuration,
			/** 11264 */
			Consent_provider_Localization,
			/** 11272 */
			Consent_System_Configuration,
			/** 11385 */
			ConsentSettings,
			/** 10484 */
			Consuming_Application,
			/** 2 */
			Contact,
			/** 10566 */
			Contact_KPI_Item,
			/** 11276 */
			Contact_Point_Consent,
			/** 11277 */
			Contact_Point_Settings,
			/** 10514 */
			Contact_suggestion_rule,
			/** 10515 */
			Contact_suggestion_ruleset,
			/** 17 */
			ContactInvoices,
			/** 22 */
			ContactLeads,
			/** 19 */
			ContactOrders,
			/** 11476 */
			ContactProfile,
			/** 18 */
			ContactQuotes,
			/** 10620 */
			Content_Block,
			/** 11079 */
			Content_block_11079,
			/** 11340 */
			Content_block_11340,
			/** 11141 */
			Content_settings,
			/** 10320 */
			Content_Snippet,
			/** 10694 */
			Context_item_value,
			/** 10697 */
			Context_variable,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 2011 */
			Contract_Template,
			/** 10691 */
			Conversation,
			/** 10673 */
			Conversation_Action,
			/** 10767 */
			Conversation_Action_Item,
			/** 10674 */
			Conversation_Action_Locale,
			/** 10768 */
			Conversation_Aggregated_Insights,
			/** 10745 */
			Conversation_Capacity_profile,
			/** 10749 */
			Conversation_Characteristic,
			/** 10471 */
			Conversation_Data_Deprecated,
			/** 10675 */
			Conversation_Message_Block,
			/** 10770 */
			Conversation_Participant_Insights,
			/** 10771 */
			Conversation_Participant_Sentiment,
			/** 10772 */
			Conversation_Question,
			/** 10773 */
			Conversation_Segment_Sentiment,
			/** 10696 */
			Conversation_Sentiment_10696,
			/** 10774 */
			Conversation_Sentiment_10774,
			/** 10775 */
			Conversation_Signal,
			/** 10776 */
			Conversation_Subject,
			/** 10904 */
			Conversation_Summary_Interaction,
			/** 10905 */
			Conversation_Summary_Setting,
			/** 10777 */
			Conversation_Summary_Suggestion,
			/** 10778 */
			Conversation_System_Tag,
			/** 10779 */
			Conversation_Tag,
			/** 10906 */
			Conversation_Topic,
			/** 10909 */
			Conversation_topic_Conversation_mapping,
			/** 10907 */
			Conversation_Topic_Setting,
			/** 10908 */
			Conversation_Topic_Summary,
			/** 10761 */
			ConversationInsight,
			/** 10151 */
			ConversationTranscript,
			/** 10152 */
			Copilot,
			/** 11562 */
			Copilot_Analytics,
			/** 10153 */
			Copilot_component,
			/** 10154 */
			Copilot_component_collection,
			/** 10431 */
			Copilot_for_Sales_customer_list,
			/** 10875 */
			Copilot_Interaction,
			/** 10876 */
			Copilot_Interaction_Data,
			/** 11752 */
			Copilot_Interactions,
			/** 11599 */
			Copilot_knowledge_interaction,
			/** 10868 */
			Copilot_Summarization_Setting,
			/** 10877 */
			Copilot_Transcript,
			/** 10878 */
			Copilot_Transcript_Data,
			/** 10299 */
			CopilotExampleQuestion,
			/** 10300 */
			CopilotGlossaryTerm,
			/** 10301 */
			CopilotSynonyms,
			/** 11214 */
			Create_Lead_Activity,
			/** 11353 */
			Created_Entity_Link,
			/** 10077 */
			Credential,
			/** 10429 */
			CRM_Connection,
			/** 10629 */
			CSAdminConfig,
			/** 9105 */
			Currency,
			/** 10027 */
			Custom_API,
			/** 10028 */
			Custom_API_Request_Parameter,
			/** 10029 */
			Custom_API_Response_Property,
			/** 10630 */
			Custom_API_Ruleset_Configuration,
			/** 11144 */
			Custom_channel_activity,
			/** 11303 */
			Custom_channel_message,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 10259 */
			Custom_Control_Extended_Setting,
			/** 9754 */
			Custom_Control_Resource,
			/** 10782 */
			Custom_Email_Highlight,
			/** 11285 */
			Custom_Goal_Category,
			/** 10783 */
			Custom_Highlight,
			/** 10661 */
			Custom_messaging_account,
			/** 11050 */
			Custom_messaging_channel,
			/** 11048 */
			Custom_Messaging_Engagement_Context,
			/** 10784 */
			Custom_Publisher,
			/** 11089 */
			Custom_Registration_Field,
			/** 10380 */
			Customer_Asset,
			/** 10383 */
			Customer_Asset_Attachment,
			/** 10384 */
			Customer_Asset_Category,
			/** 11279 */
			Customer_Data_Selection,
			/** 10535 */
			Customer_email_communication,
			/** 11600 */
			Customer_feedback_survey,
			/** 11601 */
			Customer_feedback_survey_invite,
			/** 11602 */
			Customer_feedback_survey_response,
			/** 11748 */
			Customer_Insights_Card_Configuration,
			/** 11142 */
			Customer_insights_information,
			/** 11143 */
			Customer_journey,
			/** 11145 */
			Customer_journey_iteration,
			/** 11146 */
			Customer_journey_runtime_state,
			/** 11147 */
			Customer_journey_template,
			/** 11148 */
			Customer_journey_workflow_link,
			/** 4502 */
			Customer_Relationship,
			/** 10899 */
			Customer_Service_historical_analytics,
			/** 10614 */
			Customer_Service_Key_Value_Configuration,
			/** 10600 */
			Customer_Voice_alert,
			/** 10601 */
			Customer_Voice_alert_rule,
			/** 10603 */
			Customer_Voice_file_response,
			/** 10604 */
			Customer_Voice_localized_survey_email_template,
			/** 10605 */
			Customer_Voice_project,
			/** 10608 */
			Customer_Voice_satisfaction_metric,
			/** 10609 */
			Customer_Voice_survey,
			/** 10602 */
			Customer_Voice_survey_email_template,
			/** 10610 */
			Customer_Voice_survey_invite,
			/** 10606 */
			Customer_Voice_survey_question,
			/** 10607 */
			Customer_Voice_survey_question_response,
			/** 10611 */
			Customer_Voice_survey_reminder,
			/** 10612 */
			Customer_Voice_survey_response,
			/** 10613 */
			Customer_Voice_unsubscribed_recipient,
			/** 11468 */
			CustomerMeasure,
			/** 11469 */
			CustomerProfile,
			/** 11470 */
			CustomerProfileSegment,
			/** 11269 */
			CXP_Consent_Center_Configuration,
			/** 11278 */
			CXP_Customer_Data_Mapping,
			/** 10567 */
			Daily_Kpis_for_account,
			/** 10568 */
			Daily_kpis_for_contact,
			/** 10569 */
			Daily_kpis_for_lead,
			/** 10570 */
			Daily_kpis_for_Opportunity,
			/** 10859 */
			Data_Analytics_Admin_Settings_Deprecated,
			/** 10890 */
			Data_Analytics_Dataset,
			/** 10860 */
			Data_Analytics_Report,
			/** 10889 */
			Data_Analytics_User_Customized_Report,
			/** 10891 */
			Data_Analytics_Workspace,
			/** 10851 */
			Data_Hygiene_Setting_Info,
			/** 4410 */
			Data_Import,
			/** 10036 */
			Data_Lake_Folder,
			/** 10037 */
			Data_Lake_Folder_Permission,
			/** 10038 */
			Data_Lake_Workspace,
			/** 10039 */
			Data_Lake_Workspace_Permission,
			/** 4411 */
			Data_Map,
			/** 10172 */
			Data_Movement_Service_Request,
			/** 10173 */
			Data_Movement_Service_Request_Status,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 10040 */
			Data_Processing_configuration,
			/** 11236 */
			Data_protection,
			/** 11370 */
			DataAnalyticsReport_MKT,
			/** 10363 */
			Database_Version,
			/** 418 */
			Dataflow,
			/** 10168 */
			Dataflow_Connection_Reference,
			/** 10171 */
			Dataflow_DatalakeFolder,
			/** 10170 */
			Dataflow_Template,
			/** 11386 */
			DataflowMetadata,
			/** 10052 */
			DataflowRefreshHistory,
			/** 11387 */
			DataPreparationMetadata,
			/** 11388 */
			DataQualityFeatureWiseMetadata,
			/** 11389 */
			DataQualityOverview,
			/** 11390 */
			DataQualityReport,
			/** 11391 */
			DatasetCatalog,
			/** 11392 */
			DataSourceMetadata,
			/** 11393 */
			DataTroubleshootingAccess,
			/** 11394 */
			DataverseEntityDataCleanupJobInfo,
			/** 10562 */
			Deal_manager_settings,
			/** 10561 */
			dealmanageraccess,
			/** 10631 */
			Decision_contract,
			/** 10632 */
			Decision_rule_set,
			/** 11271 */
			Default_purpose,
			/** 11149 */
			Default_settings,
			/** 11215 */
			Delay_date_and_time_Activity,
			/** 11216 */
			Delay_duration_Activity,
			/** 10055 */
			DelegatedAuthorization,
			/** 10246 */
			Deleted_Record_Reference,
			/** 10676 */
			DeletedConversation,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 11086 */
			Deprecated_Bucket,
			/** 11265 */
			Deprecated_Compliance_11265,
			/** 11266 */
			Deprecated_Compliance_11266,
			/** 11273 */
			Deprecated_Contact_Point_Consent_11273,
			/** 11274 */
			Deprecated_Contact_Point_Consent_11274,
			/** 11275 */
			Deprecated_Contact_Point_Consent_11275,
			/** 11228 */
			Deprecated_custom_tile_activity,
			/** 11230 */
			Deprecated_Customer_Voice_survey_activity,
			/** 10894 */
			Deprecated_Dynamics_Customer_Service_Analytics,
			/** 11229 */
			Deprecated_Event_activity,
			/** 11105 */
			Deprecated_File,
			/** 11231 */
			Deprecated_Page_activity,
			/** 10423 */
			DEPRECATED_Playbook_category,
			/** 10425 */
			DEPRECATED_Playbook_template,
			/** 10677 */
			Deprecated_Workstream_Entity_Configuration,
			/** 11061 */
			DeprecatedTeams_Engagement_Context,
			/** 11756 */
			Derived_insights_related_entity,
			/** 11395 */
			DerivedEntityMetadata,
			/** 11080 */
			Designer_feature_protection,
			/** 10090 */
			Desktop_Flow_Binary,
			/** 10078 */
			Desktop_Flow_Module,
			/** 11318 */
			Device_Type,
			/** 11396 */
			DiagnosticSetting,
			/** 11073 */
			Digital_assets_configuration,
			/** 10813 */
			DigitalSellingActiveTask,
			/** 10814 */
			DigitalSellingCompletedTask,
			/** 1013 */
			Discount,
			/** 1080 */
			Discount_List,
			/** 11397 */
			DiscoveredCdsaModel,
			/** 11398 */
			DiscoveryOperation,
			/** 4102 */
			Display_String,
			/** 4101 */
			Display_String_Map,
			/** 10520 */
			Distributed_Lock,
			/** 10621 */
			Divider_style,
			/** 10174 */
			DMS_Sync_Request,
			/** 10175 */
			DMS_Sync_Status,
			/** 9508 */
			Document_Location,
			/** 1189 */
			Document_Suggestions,
			/** 9940 */
			Document_Template,
			/** 11181 */
			Domain_11181,
			/** 11337 */
			Domain_11337,
			/** 10852 */
			Duplicate_Detection_Plugin_Run,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 10853 */
			Duplicate_Lead_Mapping,
			/** 4415 */
			Duplicate_Record,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 10111 */
			DVFileSearch,
			/** 10112 */
			DVFileSearchAttribute,
			/** 10113 */
			DVFileSearchEntity,
			/** 10114 */
			DVTableSearch,
			/** 10115 */
			DVTableSearchAttribute,
			/** 10116 */
			DVTableSearchEntity,
			/** 11157 */
			Dynamic_content_metadata,
			/** 10758 */
			Effort_estimate,
			/** 10759 */
			Effort_estimation_model,
			/** 10760 */
			Effort_model_training_details,
			/** 7755 */
			ElasticFileAttachment,
			/** 11327 */
			Email_11327,
			/** 4202 */
			Email_4202,
			/** 11319 */
			Email_client,
			/** 4023 */
			Email_Hash,
			/** 11249 */
			Email_key_point,
			/** 4299 */
			Email_Search,
			/** 9605 */
			Email_Server_Profile,
			/** 9997 */
			Email_Signature,
			/** 11328 */
			Email_template,
			/** 2010 */
			Email_Template,
			/** 10229 */
			EnableArchivalRequest,
			/** 11471 */
			Enrichment,
			/** 11399 */
			EnrichmentMetadata,
			/** 11400 */
			EnrichmentRun,
			/** 9700 */
			Entitlement,
			/** 11659 */
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
			/** 10678 */
			Entity_10678,
			/** 9800 */
			Entity_9800,
			/** 430 */
			Entity_Analytics_Config,
			/** 10647 */
			Entity_Attachment,
			/** 11754 */
			Entity_Attribute_Prediction_Rule,
			/** 11737 */
			Entity_Configuration,
			/** 11090 */
			Entity_Counter,
			/** 10521 */
			Entity_Delta_Change,
			/** 11757 */
			Entity_derived_insights,
			/** 11366 */
			Entity_Grade_Distribution,
			/** 432 */
			Entity_Image_Configuration,
			/** 9815 */
			Entity_Index,
			/** 9810 */
			Entity_Key,
			/** 10257 */
			Entity_link_chat_configuration,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 10671 */
			Entity_Routing_Context,
			/** 11369 */
			Entity_Score_Distribution,
			/** 11367 */
			Entity_Scoring_Model,
			/** 10763 */
			Entity_Workstream_Map,
			/** 11462 */
			EntityDataProfile,
			/** 11401 */
			EntityFilterMetadata,
			/** 10547 */
			EntityRankingRule,
			/** 73 */
			EntityRecordFilter,
			/** 10053 */
			EntityRefreshHistory,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10785 */
			EnvironmentSettings,
			/** 11091 */
			Event,
			/** 11092 */
			Event_administration,
			/** 11093 */
			Event_Analytics,
			/** 11094 */
			Event_Custom_Registration_Field,
			/** 18085 */
			Event_Expander_Breadcrumb,
			/** 11095 */
			Event_Management_Activity,
			/** 11096 */
			Event_Management_Configuration,
			/** 11097 */
			Event_Purchase,
			/** 11098 */
			Event_Purchase_Attendee,
			/** 11099 */
			Event_Purchase_Contact,
			/** 11100 */
			Event_Purchase_Pass,
			/** 11101 */
			Event_Registration,
			/** 11102 */
			Event_Registration_Ticket,
			/** 11103 */
			Event_Team_Member,
			/** 11363 */
			Event_teams_properties,
			/** 11104 */
			Event_Vendor,
			/** 11085 */
			EventMainBusinessProcessFlow,
			/** 10791 */
			EventParameterMetadata,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 11286 */
			Experiment,
			/** 955 */
			Expired_Process,
			/** 11402 */
			ExportConfig,
			/** 11403 */
			ExportConfigReport,
			/** 10041 */
			Exported_Excel,
			/** 11404 */
			ExportedModuleConfiguration,
			/** 11405 */
			ExportSettings,
			/** 10012 */
			ExportSolutionUpload,
			/** 10837 */
			Extended_User_Setting,
			/** 10688 */
			External_context,
			/** 11559 */
			External_CRM,
			/** 10308 */
			External_Identity,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 11560 */
			External_Record,
			/** 10166 */
			Fabric_AISkill,
			/** 11046 */
			Facebook_Application,
			/** 11045 */
			Facebook_Engagement_Context,
			/** 11047 */
			Facebook_Page,
			/** 4000 */
			FacilityEquipment,
			/** 10197 */
			Favorite_knowledge_article,
			/** 4204 */
			Fax,
			/** 10013 */
			FeatureControlSetting,
			/** 11406 */
			FeatureTemplate,
			/** 10181 */
			FederatedKnowledgeConfiguration,
			/** 10182 */
			FederatedKnowledgeEntityConfiguration,
			/** 9958 */
			Feedback,
			/** 11204 */
			Field_mapping,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 11717 */
			Field_Service_Frontline_Worker_Configuration,
			/** 11742 */
			Field_service_historical_analytics,
			/** 11660 */
			Field_Service_Price_List_Item,
			/** 11661 */
			Field_Service_Setting,
			/** 11662 */
			Field_Service_SLA_Configuration,
			/** 11746 */
			Field_Service_Summary_Configuration,
			/** 11663 */
			Field_Service_System_Job,
			/** 44 */
			Field_Sharing,
			/** 11354 */
			Field_Submission,
			/** 11074 */
			File_11074,
			/** 11312 */
			File_11312,
			/** 10290 */
			File_Upload,
			/** 10522 */
			File_Upload_Status_Tracker,
			/** 55 */
			FileAttachment,
			/** 10599 */
			Filter,
			/** 30 */
			Filter_Template,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10689 */
			Flagged_spam,
			/** 10101 */
			Flow_Approval,
			/** 10079 */
			Flow_Capacity_Assignment,
			/** 10080 */
			Flow_Credential_Application,
			/** 10081 */
			Flow_Event,
			/** 10091 */
			Flow_Log,
			/** 10082 */
			Flow_Machine,
			/** 10083 */
			Flow_Machine_Group,
			/** 10084 */
			Flow_Machine_Image,
			/** 10085 */
			Flow_Machine_Image_Version,
			/** 10086 */
			Flow_Machine_Network,
			/** 10092 */
			Flow_Run,
			/** 4720 */
			Flow_Session,
			/** 10548 */
			flowcardtype,
			/** 8003 */
			Follow,
			/** 10523 */
			Forecast_10523,
			/** 10528 */
			Forecast_10528,
			/** 10900 */
			Forecast_10900,
			/** 10524 */
			Forecast_Configuration,
			/** 10525 */
			Forecast_definition,
			/** 10527 */
			Forecast_Insights,
			/** 10519 */
			Forecast_Manual_Adjustment_History,
			/** 10529 */
			Forecast_Prediction_Data,
			/** 10530 */
			Forecast_Prediction_Status,
			/** 10531 */
			Forecast_recurrence,
			/** 10533 */
			Forecast_Recurrence,
			/** 10902 */
			Forecast_Summary_and_Setting,
			/** 10526 */
			Forecasting_Cache,
			/** 11355 */
			Form,
			/** 11356 */
			Form_field,
			/** 11561 */
			Form_Mapping,
			/** 11173 */
			Form_matching,
			/** 11174 */
			Form_matching_attributes,
			/** 11150 */
			Form_page,
			/** 11151 */
			Form_page_template,
			/** 11606 */
			Form_settings,
			/** 10337 */
			Form_Step,
			/** 11357 */
			Form_Submission,
			/** 11358 */
			Form_Template,
			/** 11169 */
			Form_whitelist_rule,
			/** 11351 */
			Frequency_Cap_Settings,
			/** 11017 */
			Fulfillment_Preference,
			/** 11614 */
			Function,
			/** 10385 */
			Functional_Location,
			/** 10386 */
			Functional_Location_Type,
			/** 10388 */
			Functional_Location_Type_Template_Association,
			/** 10206 */
			FxExpression,
			/** 11064 */
			Gatekeeper_Engagement_Context,
			/** 11237 */
			GDPR_consent_change_record,
			/** 10536 */
			GDPRData,
			/** 11365 */
			GdprRequest,
			/** 10622 */
			General_styles,
			/** 10713 */
			Geo_Location_Provider,
			/** 11152 */
			Geo_pin,
			/** 11738 */
			Geofence,
			/** 11739 */
			Geofence_Event,
			/** 11740 */
			Geofencing_Settings,
			/** 11735 */
			Geolocation_Settings,
			/** 11736 */
			Geolocation_Tracking,
			/** 11569 */
			Git_Branch,
			/** 11570 */
			Git_Configuration_Retrieval_Data_Source,
			/** 11571 */
			Git_Organization,
			/** 11572 */
			Git_Project,
			/** 11573 */
			Git_Repository,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9603 */
			Goal_Metric,
			/** 11619 */
			Googles_Business_Messages_agent_account,
			/** 11621 */
			Googles_Business_Messages_engagement_context,
			/** 11620 */
			Googles_Business_Messages_partner_account,
			/** 11581 */
			Governance_Configuration,
			/** 11250 */
			GPT_3_Log,
			/** 11407 */
			GraphMetadata,
			/** 11247 */
			Gwennol_feature_configuration,
			/** 10148 */
			Help_Page,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 11408 */
			HierarchyMetadata,
			/** 9996 */
			HolidayWrapper,
			/** 11409 */
			HostLoadMetadata,
			/** 11106 */
			Hotel,
			/** 11107 */
			Hotel_Room_Allocation,
			/** 11108 */
			Hotel_Room_Reservation,
			/** 10764 */
			ICD_Extension,
			/** 10560 */
			icebreakersconfig,
			/** 11313 */
			Image,
			/** 431 */
			Image_Attribute_Configuration,
			/** 11323 */
			Image_context,
			/** 1007 */
			Image_Descriptor,
			/** 10623 */
			imagestyle_10623,
			/** 11326 */
			imagestyle_11326,
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
			/** 11410 */
			ImportExportStatusMetadata,
			/** 10636 */
			Inbox_card_configuration,
			/** 10637 */
			Inbox_Configuration,
			/** 10638 */
			Inbox_Entity_Configuration,
			/** 9931 */
			Incident_KnowledgeBaseRecord,
			/** 11664 */
			Incident_Type,
			/** 11665 */
			Incident_Type_Characteristic,
			/** 11666 */
			Incident_Type_Product,
			/** 11670 */
			Incident_Type_Requirement_Group,
			/** 11722 */
			Incident_Type_Resolution,
			/** 11667 */
			Incident_Type_Service,
			/** 11668 */
			Incident_Type_Service_Task,
			/** 11720 */
			Incident_Type_Suggestion_Result,
			/** 11721 */
			Incident_Type_Suggestion_Run_History,
			/** 11669 */
			Incident_Types_Setup,
			/** 11463 */
			IncrementalPartitionInfo,
			/** 11464 */
			IncrementalWatermarkInfo,
			/** 9816 */
			Index_Attribute,
			/** 126 */
			Indexed_Article,
			/** 10797 */
			Infobip_channel_instance,
			/** 10798 */
			Infobip_channel_instance_account,
			/** 10840 */
			Insight,
			/** 11411 */
			InsightMetadata,
			/** 10861 */
			Insights,
			/** 10243 */
			Insights_Store_Data_Source,
			/** 10244 */
			Insights_Store_Virtual_Entity,
			/** 11412 */
			InsightsDataQualityReport,
			/** 11629 */
			Inspection,
			/** 11627 */
			Inspection_Attachment,
			/** 11630 */
			Inspection_Response,
			/** 11626 */
			Inspection_Template,
			/** 11628 */
			Inspection_Template_Version,
			/** 11413 */
			InstanceMetrics,
			/** 11414 */
			InstancePartnerCatalog,
			/** 11415 */
			InstanceSearchConfiguration,
			/** 11416 */
			InstanceSettings,
			/** 11723 */
			Insurance,
			/** 10188 */
			Integrated_search_provider,
			/** 3000 */
			Integration_Status,
			/** 11417 */
			IntelligenceWorkflowMetadata,
			/** 11418 */
			IntelligenceWorkflowRunMetadata,
			/** 11419 */
			IntelligenceWorkspaceMetadata,
			/** 11586 */
			intent,
			/** 11590 */
			Intent_Config,
			/** 11594 */
			Intent_Group_Condition,
			/** 11597 */
			Intent_Solution_Map,
			/** 11587 */
			intentattribute,
			/** 11589 */
			intentattribute_entity,
			/** 11588 */
			intentattributeset,
			/** 11591 */
			intententity,
			/** 4011 */
			Inter_Process_Lock,
			/** 9986 */
			Interaction_for_Email,
			/** 1003 */
			Internal_Address,
			/** 10026 */
			Internal_Catalog_Assignment,
			/** 7107 */
			Invalid_Dependency,
			/** 11671 */
			Inventory_Adjustment,
			/** 11672 */
			Inventory_Adjustment_Product,
			/** 11673 */
			Inventory_Journal,
			/** 11674 */
			Inventory_Transfer,
			/** 10309 */
			Invitation,
			/** 10310 */
			Invite_Redemption,
			/** 1090 */
			Invoice,
			/** 1091 */
			Invoice_Product,
			/** 10402 */
			IoT_Alert,
			/** 10418 */
			IoT_Alert_to_Case_Process,
			/** 10403 */
			IoT_Device,
			/** 10404 */
			IoT_Device_Category,
			/** 10405 */
			IoT_Device_Command,
			/** 10406 */
			IoT_Device_Command_Definition,
			/** 10407 */
			IoT_Device_Data_History,
			/** 10408 */
			IoT_Device_Property,
			/** 10409 */
			IoT_Device_Registration_History,
			/** 10410 */
			IoT_Device_Visualization_Configuration,
			/** 10411 */
			IoT_Field_Mapping,
			/** 10412 */
			IoT_Property_Definition,
			/** 10413 */
			IoT_Provider,
			/** 10414 */
			IoT_Provider_Instance,
			/** 10415 */
			IoT_Settings,
			/** 4705 */
			ISV_Config,
			/** 11287 */
			Journey,
			/** 11288 */
			Journey_dependency,
			/** 11289 */
			Journey_Event,
			/** 11260 */
			Journey_Instance,
			/** 11291 */
			Journey_Run_Parameter,
			/** 11292 */
			Journey_Run_Session,
			/** 11293 */
			Journey_settings,
			/** 11294 */
			Journey_Template,
			/** 11290 */
			JourneyOptimizationCount,
			/** 11295 */
			JourneyWorkflowMapping,
			/** 10879 */
			KB_Enrichment,
			/** 10022 */
			Key_Vault_Reference,
			/** 11420 */
			KeyVaultMetadata,
			/** 11304 */
			Keyword,
			/** 10903 */
			Keywords_Description_Suggestion_Setting,
			/** 10901 */
			Knowledge_analytics,
			/** 9953 */
			Knowledge_Article,
			/** 10199 */
			Knowledge_Article_Attachment,
			/** 9960 */
			Knowledge_Article_Category,
			/** 10193 */
			Knowledge_Article_Image,
			/** 9954 */
			Knowledge_Article_Incident,
			/** 10198 */
			Knowledge_article_language_setting,
			/** 10880 */
			Knowledge_Article_Suggestion,
			/** 10881 */
			Knowledge_Article_Suggestion_Data_Source,
			/** 10201 */
			Knowledge_Article_Template,
			/** 9955 */
			Knowledge_Article_Views,
			/** 10176 */
			Knowledge_Asset_Configuration,
			/** 9930 */
			Knowledge_Base_Record,
			/** 10194 */
			Knowledge_Configuration,
			/** 10190 */
			Knowledge_Federated_Article,
			/** 10191 */
			Knowledge_Federated_Article_Incident,
			/** 11610 */
			Knowledge_Harvest_Job_Record,
			/** 10195 */
			Knowledge_Interaction_Insight,
			/** 10189 */
			Knowledge_Management_Setting,
			/** 10200 */
			Knowledge_personalization,
			/** 10203 */
			Knowledge_search_filter,
			/** 10196 */
			Knowledge_Search_Insight,
			/** 9947 */
			Knowledge_Search_Model,
			/** 10202 */
			Knowledge_search_personal_filter_config,
			/** 10472 */
			KPI_Event_Data,
			/** 10473 */
			KPI_Event_Definition,
			/** 11171 */
			Landing_page,
			/** 10690 */
			Language_10690,
			/** 9957 */
			Language_9957,
			/** 9875 */
			Language_Provisioning_State,
			/** 11217 */
			Launch_Workflow_Activity,
			/** 11109 */
			Layout,
			/** 10624 */
			Layout_Style,
			/** 4 */
			Lead,
			/** 1017 */
			Lead_Address,
			/** 11199 */
			Lead_Entity_Field,
			/** 10854 */
			Lead_Hygiene_Setting,
			/** 10571 */
			Lead_KPI_Item,
			/** 11368 */
			Lead_Qualification_Model,
			/** 11196 */
			Lead_score,
			/** 11194 */
			Lead_score_Deprecated,
			/** 11195 */
			Lead_Scoring_Model,
			/** 11198 */
			Lead_to_opportunity,
			/** 954 */
			Lead_To_Opportunity_Sales_Process,
			/** 24 */
			LeadCompetitors,
			/** 10593 */
			LeadModelConfig,
			/** 27 */
			LeadProduct,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 11421 */
			LightCdsaModelMetadata,
			/** 8006 */
			Like,
			/** 11051 */
			LINE_account,
			/** 11049 */
			LINE_Engagement_Context,
			/** 11592 */
			Line_of_Business,
			/** 10799 */
			Link_mobility_channel_instance,
			/** 10800 */
			Link_mobility_channel_instance_account,
			/** 10855 */
			Linked_Entity_Attribute_Validity,
			/** 11200 */
			LinkedIn_Account,
			/** 11201 */
			LinkedIn_Activity,
			/** 11202 */
			LinkedIn_Campaign,
			/** 11218 */
			LinkedIn_Campaign_Activity,
			/** 11207 */
			LinkedIn_Form_Question,
			/** 11206 */
			LinkedIn_Form_Submission_Answer,
			/** 11205 */
			LinkedIn_Lead_Gen_Form,
			/** 11208 */
			LinkedIn_Lead_Gen_Form_Submission,
			/** 11203 */
			LinkedIn_Lead_Gen_Integration_Configuration,
			/** 11238 */
			LinkedIn_Matched_Audience,
			/** 11209 */
			LinkedIn_matching,
			/** 11210 */
			LinkedIn_User_Profile,
			/** 10323 */
			List,
			/** 11153 */
			List_Form,
			/** 10361 */
			List_Operation,
			/** 4418 */
			List_Value_Mapping,
			/** 11032 */
			Live_Chat_Context,
			/** 11154 */
			Live_Entity_Dependency,
			/** 10680 */
			Live_work_item_event,
			/** 10695 */
			Live_Work_Item_Participant_Deprecated,
			/** 9201 */
			LocalConfigStore,
			/** 10698 */
			Localization,
			/** 11034 */
			Localized_Survey_Question_Deprecated,
			/** 10387 */
			Location_Template_Association,
			/** 10765 */
			Lock_Status,
			/** 11422 */
			LogicAppsSubscriberMetadata,
			/** 4419 */
			Lookup_Mapping,
			/** 10496 */
			Macro_Action_Template,
			/** 10498 */
			Macro_Connector,
			/** 10499 */
			Macro_Run_History,
			/** 10497 */
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
			/** 10291 */
			MainFewShot,
			/** 10292 */
			MakerFewShot,
			/** 10023 */
			Managed_Identity,
			/** 9812 */
			Managed_Property,
			/** 11423 */
			MappedSecretMetadata,
			/** 11175 */
			Marketing_activity,
			/** 11155 */
			Marketing_configuration,
			/** 11156 */
			Marketing_Data_Import,
			/** 11158 */
			Marketing_email,
			/** 11219 */
			Marketing_Email_Activity,
			/** 11159 */
			Marketing_email_dynamic_content_metadata,
			/** 11160 */
			Marketing_email_template,
			/** 11161 */
			Marketing_Email_Test,
			/** 11162 */
			Marketing_Email_Test_Attribute,
			/** 11163 */
			Marketing_email_test_send,
			/** 10793 */
			Marketing_feature_configuration_10793,
			/** 11235 */
			Marketing_feature_configuration_11235,
			/** 11164 */
			Marketing_field_submission,
			/** 11165 */
			Marketing_form,
			/** 11220 */
			Marketing_form_activity,
			/** 10362 */
			Marketing_Form_Display_Attributes,
			/** 11166 */
			Marketing_form_field,
			/** 11167 */
			Marketing_form_submission,
			/** 11168 */
			Marketing_form_template,
			/** 4300 */
			Marketing_List,
			/** 4301 */
			Marketing_List_Member,
			/** 11170 */
			Marketing_page,
			/** 11172 */
			Marketing_page_template,
			/** 11186 */
			Marketing_website,
			/** 10682 */
			Masking_Rule,
			/** 10650 */
			Master_Entity_Routing_Configuration,
			/** 11359 */
			Matching_Rule,
			/** 11360 */
			Matching_Strategy_Attribute,
			/** 11424 */
			MeasureMetadata,
			/** 11465 */
			MeasureScalarOutput,
			/** 10711 */
			Message,
			/** 4231 */
			Metadata_Difference,
			/** 10810 */
			Metadata_Entity_Relationship,
			/** 10811 */
			Metadata_Item,
			/** 10812 */
			Metadata_Store_State,
			/** 10230 */
			MetadataForArchival,
			/** 10018 */
			Microsoft_Entra_ID,
			/** 10518 */
			Microsoft_Orgchart_node_entity,
			/** 11060 */
			Microsoft_Teams_account,
			/** 10516 */
			Microsoft_Teams_chat_association_entity,
			/** 10517 */
			Microsoft_Teams_chat_suggestion,
			/** 10511 */
			Microsoft_Teams_Collaboration_entity,
			/** 10508 */
			Microsoft_Teams_Graph_resource_Entity,
			/** 11253 */
			Migration,
			/** 10374 */
			Migration_tracker,
			/** 10242 */
			Mobile_App,
			/** 11329 */
			Mobile_app_channel_instance,
			/** 11333 */
			Mobile_app_configuration_11333,
			/** 11334 */
			Mobile_app_configuration_11334,
			/** 11335 */
			Mobile_device,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 10214 */
			MobileOfflineProfileExtension,
			/** 10215 */
			MobileOfflineProfileItemFilter,
			/** 11747 */
			MobileSource,
			/** 10801 */
			MockSmsProvider_channel_instance,
			/** 10802 */
			MockSmsProvider_channel_instance_account,
			/** 11584 */
			Model_Customization_analytics,
			/** 9006 */
			Model_driven_App,
			/** 10063 */
			Model_Driven_App_Component_Node,
			/** 10062 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10061 */
			Model_Driven_App_Element,
			/** 10064 */
			Model_Driven_App_Setting,
			/** 10065 */
			Model_Driven_App_User_Setting,
			/** 10753 */
			Model_training_details,
			/** 11425 */
			ModelConfigMetadata,
			/** 10594 */
			ModelPreviewStatus,
			/** 10177 */
			Module_Run_Detail,
			/** 11426 */
			ModuleConfigurationReference,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10572 */
			Most_Contacted,
			/** 10573 */
			Most_Contacted_By,
			/** 10210 */
			Ms_Graph_Resource_To_Subscription,
			/** 10485 */
			msdyn_DefExtendedChannelInstance,
			/** 10486 */
			msdyn_DefExtendedChannelInstanceAccount,
			/** 11608 */
			msdyn_historicalcaseharvestbatch,
			/** 11609 */
			msdyn_historicalcaseharvestrun,
			/** 11593 */
			msdyn_intentfeature_configuration,
			/** 11595 */
			msdyn_intentharvesting_batchjobstatus,
			/** 11596 */
			msdyn_intentharvesting_provisioning_status,
			/** 11598 */
			msdyn_intentsolution_mappingconfiguration,
			/** 10509 */
			msdyn_msteamssetting,
			/** 10510 */
			msdyn_msteamssettingsv2,
			/** 11758 */
			msdyn_rawinsight,
			/** 11759 */
			msdyn_rawinsightentitylink,
			/** 10541 */
			msdyn_relationshipinsightsunifiedconfig,
			/** 11603 */
			msdyn_surveyconfig,
			/** 10432 */
			msdyn_vivaentitysetting,
			/** 10433 */
			msdyn_vivaorgextensioncred,
			/** 10434 */
			msdyn_vivaorgsetting,
			/** 10435 */
			msdyn_vivausersetting,
			/** 11300 */
			msdynmkt_aimodelversion,
			/** 11301 */
			msdynmkt_apsconfig,
			/** 11302 */
			msdynmkt_conversioneventdefinition,
			/** 10794 */
			msdynmkt_experimentv2,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 10335 */
			Multistep_Form,
			/** 10336 */
			Multistep_Form_Metadata,
			/** 10313 */
			Multistep_Form_Session,
			/** 9900 */
			Navigation_Setting,
			/** 11239 */
			Network_page,
			/** 950 */
			New_Process,
			/** 10882 */
			Next_Action,
			/** 5004 */
			NL2SQ_Registration_Information,
			/** 10031 */
			NonRelational_Data_Source,
			/** 11724 */
			Not_to_exceed,
			/** 5 */
			Note,
			/** 10559 */
			Notes_analysis_Config,
			/** 10240 */
			Notification_10240,
			/** 4110 */
			Notification_4110,
			/** 10443 */
			Notification_Field,
			/** 10453 */
			Notification_Field_Deprecated,
			/** 10444 */
			Notification_Template,
			/** 10454 */
			Notification_Template_Deprecated,
			/** 11427 */
			NotificationCheckpoint,
			/** 11618 */
			OC_Apple_Pay_Entity,
			/** 10699 */
			OC_Payment_Profile,
			/** 11623 */
			OC_Twitter_Handle_Secret,
			/** 10075 */
			OData_v4_Data_Source,
			/** 10537 */
			ODOSFeatureMetadata,
			/** 10538 */
			ODOSMetadata,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 10766 */
			Omnichannel_agent_assignment_custom_api_privilege,
			/** 10685 */
			Omnichannel_channel_api_conversation_privilege,
			/** 10686 */
			Omnichannel_channel_api_message_privilege,
			/** 10714 */
			Omnichannel_Configuration,
			/** 10910 */
			Omnichannel_historical_analytics,
			/** 10715 */
			Omnichannel_Personalization,
			/** 10716 */
			Omnichannel_Queue_Deprecated,
			/** 10912 */
			Omnichannel_Realtime_analytics,
			/** 10701 */
			Omnichannel_Request,
			/** 10717 */
			Omnichannel_Sync_Config,
			/** 10911 */
			Omnichannel_voice_historical_analytics_preview_Deprecated,
			/** 10679 */
			Ongoing_conversation_Deprecated,
			/** 10718 */
			Operating_Hour,
			/** 11320 */
			Operating_System,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 10574 */
			Opportunity_KPI_Item,
			/** 1083 */
			Opportunity_Line,
			/** 4503 */
			Opportunity_Relationship,
			/** 953 */
			Opportunity_Sales_Process,
			/** 25 */
			OpportunityCompetitors,
			/** 10592 */
			OpportunityModelConfig,
			/** 11296 */
			Optimization_Customer_Count,
			/** 11297 */
			Optimization_Decision,
			/** 11021 */
			Optimization_Request,
			/** 9809 */
			OptionSet,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 11675 */
			Order_Invoicing_Date,
			/** 11676 */
			Order_Invoicing_Product,
			/** 11677 */
			Order_Invoicing_Setup,
			/** 11678 */
			Order_Invoicing_Setup_Date,
			/** 1089 */
			Order_Line,
			/** 10437 */
			Org_level_settings_for_Sales_Copilot_apps,
			/** 1019 */
			Organization,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 10066 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 11005 */
			Organizational_Unit,
			/** 10221 */
			OrganizationDataSyncFnoState,
			/** 10222 */
			OrganizationDataSyncState,
			/** 10218 */
			OrganizationDataSyncSubscription,
			/** 10219 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10220 */
			OrganizationDataSyncSubscriptionFnoTable,
			/** 10368 */
			Originating_Queue_Mapping,
			/** 11062 */
			Outbound_Configuration,
			/** 11063 */
			Outbound_message,
			/** 10655 */
			Overflow_Action_Config,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10008 */
			Package,
			/** 10009 */
			Package_History,
			/** 10360 */
			Package_Submission_Store,
			/** 11428 */
			PackageImportMetadata,
			/** 11429 */
			PackageJobMetadata,
			/** 11430 */
			PackageMetadata,
			/** 10325 */
			Page_Template,
			/** 10488 */
			Pane_tab_configuration,
			/** 10489 */
			Pane_tool_configuration,
			/** 10500 */
			Parameter_definition,
			/** 10458 */
			Parameter_Deprecated,
			/** 1095 */
			Partner_Application,
			/** 11110 */
			Pass,
			/** 11679 */
			Payment,
			/** 11680 */
			Payment_Detail,
			/** 11681 */
			Payment_Method,
			/** 11633 */
			Payment_Term,
			/** 10183 */
			PDF_Setting,
			/** 10721 */
			Persona_Security_Role_Mapping,
			/** 9941 */
			Personal_Document_Template,
			/** 10719 */
			Personal_quick_reply,
			/** 10720 */
			Personal_sound_setting,
			/** 11479 */
			PersonalizationAction,
			/** 11480 */
			PersonalizationCookie,
			/** 11481 */
			PersonalizationUser,
			/** 11482 */
			PersonalizationView,
			/** 11251 */
			Personalized_page,
			/** 11252 */
			Personalized_page_field,
			/** 4210 */
			Phone_Call,
			/** 11221 */
			Phone_call_activity,
			/** 11176 */
			Phone_call_activity_marketing_template,
			/** 11065 */
			Phone_Call_Engagement_Context,
			/** 11066 */
			Phone_Music,
			/** 11039 */
			Phone_Number,
			/** 952 */
			Phone_To_Case_Process,
			/** 10208 */
			Planner_Business_Scenario,
			/** 10209 */
			Planner_Sync_Action,
			/** 11431 */
			PlatformInstanceMapping,
			/** 10424 */
			Playbook,
			/** 10421 */
			Playbook_activity,
			/** 10422 */
			Playbook_activity_attribute,
			/** 10420 */
			Playbook_Callable_Context,
			/** 11583 */
			Plug_in,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 10030 */
			Plugin_Package,
			/** 10264 */
			PM_Analysis_History,
			/** 10265 */
			PM_Business_Rule_Automation_Config,
			/** 10266 */
			PM_Calendar,
			/** 10267 */
			PM_Calendar_Version,
			/** 10268 */
			PM_Inferred_Task,
			/** 10269 */
			PM_Process_Extended_Metadata_Version,
			/** 10270 */
			PM_Process_Template,
			/** 10271 */
			PM_Process_User_Settings,
			/** 10272 */
			PM_Process_Version,
			/** 10273 */
			PM_Recording,
			/** 10274 */
			PM_Simulation,
			/** 10275 */
			PM_Template,
			/** 10276 */
			PM_View,
			/** 10326 */
			Poll_Placement,
			/** 10311 */
			Portal_Comment,
			/** 11177 */
			Portal_settings,
			/** 50 */
			Position,
			/** 8000 */
			Post,
			/** 10596 */
			Post_Configuration,
			/** 11240 */
			Post_ingishts,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 10597 */
			Post_Rule_Configuration,
			/** 11682 */
			Postal_Code,
			/** 10667 */
			Power_BI_Configuration,
			/** 10285 */
			Power_BI_Dataset,
			/** 10287 */
			Power_BI_Mashup_Parameter,
			/** 10288 */
			Power_BI_Report,
			/** 10327 */
			Power_Pages_Core_Entity_DS,
			/** 10354 */
			Power_Pages_Log,
			/** 10353 */
			Power_Pages_Scan_Report,
			/** 11567 */
			Power_Pages_Site_AI_Feedback,
			/** 10305 */
			Power_Pages_Site_Published,
			/** 10286 */
			powerbidatasetapdx,
			/** 10289 */
			powerbireportapdx,
			/** 10207 */
			PowerfxRule,
			/** 11566 */
			PowerPagesManagedIdentity,
			/** 11432 */
			PowerPlatformConnector,
			/** 11433 */
			PowerPlatformRefreshSignalMetadata,
			/** 10809 */
			Predefined_Placeholder,
			/** 11472 */
			Prediction,
			/** 10581 */
			Prediction_Computation_Operation,
			/** 10582 */
			Prediction_Model_Status,
			/** 10583 */
			Prediction_Scheduled_Operation,
			/** 11744 */
			Predictive_duration_preview,
			/** 10584 */
			Predictive_Model_Score,
			/** 10585 */
			Predictive_Score,
			/** 10586 */
			Predictive_Scoring_Sync_Status,
			/** 11745 */
			Predictive_Work_Hour_Duration_Setting,
			/** 11434 */
			PreEnrichmentMetadata,
			/** 11280 */
			Preference_Center,
			/** 11281 */
			Preference_center_link,
			/** 10656 */
			Preferred_Agent,
			/** 10657 */
			Preferred_Agent_Customer_Identity,
			/** 10658 */
			Preferred_Agent_Routed_Entity,
			/** 10722 */
			Presence,
			/** 1022 */
			Price_List,
			/** 1026 */
			Price_List_Item,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 61 */
			PrincipalEntityBusinessUnitMap,
			/** 11006 */
			Priority,
			/** 1023 */
			Privilege,
			/** 76 */
			Privilege_Checker_Log,
			/** 75 */
			Privilege_Checker_Run,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 103 */
			Privileges_Removal_Setting,
			/** 11726 */
			Problematic_Asset_Feedback,
			/** 4703 */
			Process,
			/** 9650 */
			Process_Configuration,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 4712 */
			Process_Trigger,
			/** 10087 */
			ProcessStageParameter,
			/** 1024 */
			Product,
			/** 1025 */
			Product_Association,
			/** 11683 */
			Product_Inventory,
			/** 1028 */
			Product_Relationship,
			/** 10487 */
			Productivity_pane_configuration,
			/** 21 */
			ProductSalesLiterature,
			/** 10595 */
			Profile_Album,
			/** 11435 */
			ProfileStoreStateInfo,
			/** 1048 */
			Property,
			/** 10390 */
			Property_Asset_Association,
			/** 1235 */
			Property_Association,
			/** 10389 */
			Property_Definition,
			/** 1333 */
			Property_Instance,
			/** 10391 */
			Property_Location_Association,
			/** 10392 */
			Property_Log,
			/** 1049 */
			Property_Option_Set_Item,
			/** 10393 */
			Property_Template_Association,
			/** 10723 */
			Provider,
			/** 10664 */
			Provisioning_State,
			/** 10032 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
			/** 10328 */
			Publishing_State,
			/** 10329 */
			Publishing_State_Transition_Rule,
			/** 11634 */
			Purchase_Order,
			/** 11684 */
			Purchase_Order_Bill,
			/** 11655 */
			Purchase_Order_Business_Process,
			/** 11635 */
			Purchase_Order_Product,
			/** 11636 */
			Purchase_Order_Receipt,
			/** 11637 */
			Purchase_Order_Receipt_Product,
			/** 11685 */
			Purchase_Order_SubStatus,
			/** 11282 */
			Purpose,
			/** 11330 */
			Push_device_registration_result,
			/** 11331 */
			Push_mobile_device,
			/** 11336 */
			Push_notification,
			/** 10625 */
			QR_code_style_10625,
			/** 11324 */
			QR_code_style_11324,
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
			/** 10670 */
			Quick_reply,
			/** 11248 */
			Quick_Send_Email,
			/** 11258 */
			Quiet_Time_Setting,
			/** 11234 */
			Quota_info_entity,
			/** 1084 */
			Quote,
			/** 11686 */
			Quote_Booking_Incident,
			/** 11687 */
			Quote_Booking_Product,
			/** 11688 */
			Quote_Booking_Service,
			/** 11689 */
			Quote_Booking_Service_Task,
			/** 11690 */
			Quote_Booking_Setup,
			/** 4211 */
			Quote_Close,
			/** 11691 */
			Quote_Invoicing_Product,
			/** 11692 */
			Quote_Invoicing_Setup,
			/** 1085 */
			Quote_Line,
			/** 1144 */
			Rating_Model,
			/** 1142 */
			Rating_Value,
			/** 11241 */
			Reaction,
			/** 10506 */
			Read_Tracker,
			/** 10507 */
			Read_tracking_enabled_information,
			/** 10587 */
			Real_Time_Scoring,
			/** 10588 */
			Real_Time_Scoring_Operation,
			/** 11436 */
			RealTimeAggregatedStats,
			/** 11437 */
			RealtimeM3Configuration,
			/** 11438 */
			RealtimeM3SearchConfiguration,
			/** 11439 */
			RealTimePluginMetadata,
			/** 11440 */
			RealtimeSystemTableMetadata,
			/** 11441 */
			RealTimeTableMetadata,
			/** 11362 */
			ReCaptcha_Configuration,
			/** 5000 */
			Recently_Used,
			/** 10532 */
			Recompute_Tracker,
			/** 10231 */
			ReconciliationEntityInfo,
			/** 10232 */
			ReconciliationEntityStepInfo,
			/** 10233 */
			ReconciliationInfo,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 72 */
			Record_Filter,
			/** 11222 */
			Record_Update_Activity,
			/** 10700 */
			Recording,
			/** 10780 */
			Recording_Deprecated,
			/** 4250 */
			Recurrence_Rule,
			/** 4251 */
			Recurring_Appointment,
			/** 10539 */
			Recurring_Sales_Action,
			/** 10540 */
			Recurring_Sales_Action_V2,
			/** 10330 */
			Redirect,
			/** 11178 */
			Redirect_URL,
			/** 11442 */
			RefreshHistoryMetadata,
			/** 11443 */
			RefreshScheduleBase,
			/** 11444 */
			RefreshStateHistoryMetadata,
			/** 11111 */
			Registration_Response,
			/** 10565 */
			Relationship_Analytics_Config,
			/** 10575 */
			Relationship_Analytics_Metadata,
			/** 9814 */
			Relationship_Attribute,
			/** 9813 */
			Relationship_Entity,
			/** 4500 */
			Relationship_Role,
			/** 4501 */
			Relationship_Role_Map,
			/** 11445 */
			RelationshipMetadata,
			/** 1140 */
			Replication_Backlog,
			/** 9100 */
			Report,
			/** 10892 */
			Report_Bookmark,
			/** 9104 */
			Report_Link,
			/** 10213 */
			Report_Parameter,
			/** 9102 */
			Report_Related_Category,
			/** 9101 */
			Report_Related_Entity,
			/** 9103 */
			Report_Visibility,
			/** 11446 */
			ReportMetadata,
			/** 11022 */
			Requirement_Change,
			/** 10999 */
			Requirement_Characteristic,
			/** 11023 */
			Requirement_Dependency,
			/** 10998 */
			Requirement_Group,
			/** 10996 */
			Requirement_Organization_Unit,
			/** 11007 */
			Requirement_Relationship,
			/** 11008 */
			Requirement_Resource_Category,
			/** 11009 */
			Requirement_Resource_Preference,
			/** 11010 */
			Requirement_Status,
			/** 11447 */
			ResetInstanceHistory,
			/** 11727 */
			Resolution,
			/** 4002 */
			Resource,
			/** 11743 */
			Resource_duration_preview,
			/** 4010 */
			Resource_Expansion,
			/** 4007 */
			Resource_Group,
			/** 10372 */
			resource_group_data_source,
			/** 11693 */
			Resource_Pay_Type,
			/** 11011 */
			Resource_Requirement,
			/** 11012 */
			Resource_Requirement_Detail,
			/** 11710 */
			Resource_Restriction_Deprecated,
			/** 4006 */
			Resource_Specification,
			/** 11013 */
			Resource_Territory,
			/** 11448 */
			ResourceMetadata,
			/** 10247 */
			Restore_Deleted_Records_Configuration,
			/** 10042 */
			RetainedData_Excel,
			/** 10234 */
			RetentionCleanupInfo,
			/** 10235 */
			RetentionCleanupOperation,
			/** 10236 */
			RetentionConfig,
			/** 10237 */
			RetentionFailureDetail,
			/** 10238 */
			RetentionOperation,
			/** 10239 */
			RetentionOperationDetail,
			/** 11565 */
			RetentionSuccessDetail,
			/** 10059 */
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
			/** 11314 */
			Rich_fragment,
			/** 10702 */
			Rich_message,
			/** 10703 */
			Rich_object_map,
			/** 10258 */
			Rich_Text_Attachment,
			/** 11694 */
			RMA,
			/** 11695 */
			RMA_Product,
			/** 11696 */
			RMA_Receipt,
			/** 11697 */
			RMA_Receipt_Product,
			/** 11698 */
			RMA_SubStatus,
			/** 1037 */
			Role_Template,
			/** 10245 */
			RoleEditorLayout,
			/** 9604 */
			Rollup_Field,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 9602 */
			Rollup_Query,
			/** 11112 */
			Room,
			/** 11113 */
			Room_Reservation,
			/** 10659 */
			Routing_configuration,
			/** 10660 */
			Routing_configuration_step,
			/** 10635 */
			Routing_diagnostic,
			/** 10634 */
			Routing_diagnostic_item,
			/** 8181 */
			Routing_Rule_Set,
			/** 10651 */
			Routing_Rule_Set_Setting,
			/** 10724 */
			RoutingRequest,
			/** 11699 */
			RTV,
			/** 11700 */
			RTV_Product,
			/** 11701 */
			RTV_Substatus,
			/** 10704 */
			Rule_Item_10704,
			/** 8199 */
			Rule_Item_8199,
			/** 10633 */
			Rulesetentitymapping,
			/** 7200 */
			RuntimeDependency,
			/** 11449 */
			RuntimeRealtimeM3Metadata,
			/** 10822 */
			sabackupdiagnostic,
			/** 10823 */
			SABatchRunInstance,
			/** 10838 */
			Sales_acceleration_insights,
			/** 10862 */
			Sales_acceleration_reports,
			/** 10839 */
			Sales_Acceleration_settings,
			/** 10834 */
			Sales_Assignment_Setting,
			/** 1070 */
			Sales_Attachment,
			/** 10436 */
			Sales_Copilot_Insight,
			/** 10438 */
			Sales_Copilot_User_Setting,
			/** 1038 */
			Sales_Literature,
			/** 32 */
			Sales_Process_Instance,
			/** 10856 */
			Sales_provisioning_request,
			/** 10835 */
			Sales_routing_run,
			/** 10815 */
			Sales_Tag,
			/** 11558 */
			Sales_usage_reporting,
			/** 11557 */
			Sales_usage_telemetry_reports,
			/** 10178 */
			Salesforce_Structured_Object,
			/** 10179 */
			Salesforce_Structured_QnA_Config,
			/** 10549 */
			salesinsightssettings,
			/** 10857 */
			SalesOmnichannel_Message,
			/** 10824 */
			salesroutingdiagnostic,
			/** 10825 */
			SARunInstance,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
			/** 11026 */
			Scenario,
			/** 10169 */
			Schedule,
			/** 11014 */
			Schedule_Board_Setting,
			/** 11024 */
			Scheduling_Feature_Flag,
			/** 4005 */
			Scheduling_Group,
			/** 11015 */
			Scheduling_Parameter,
			/** 11755 */
			Scheduling_Scope,
			/** 10781 */
			SCI_Conversation,
			/** 11197 */
			Scoring_configuration,
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
			/** 10725 */
			Search_Configuration,
			/** 10192 */
			Search_provider,
			/** 10297 */
			Search_Telemetry,
			/** 10293 */
			SearchAttributeSettings,
			/** 10294 */
			SearchCustomAnalyzer,
			/** 10295 */
			SearchRelationshipSettings,
			/** 10296 */
			SearchResultsCache,
			/** 9820 */
			Secured_Masking_Column,
			/** 74 */
			Secured_Masking_Rule,
			/** 1036 */
			Security_Role,
			/** 10826 */
			Segment_10826,
			/** 11179 */
			Segment_11179,
			/** 11254 */
			Segment_11254,
			/** 11298 */
			Segment_11298,
			/** 11223 */
			Segment_Activity,
			/** 11256 */
			Segment_Definition,
			/** 11257 */
			Segment_Execution,
			/** 10828 */
			Segment_property,
			/** 11180 */
			Segment_Template,
			/** 11255 */
			Segment_usage,
			/** 11477 */
			SegmentMembership,
			/** 11450 */
			SegmentMetadata,
			/** 10827 */
			segmentsetting,
			/** 10829 */
			SegmentsUtil,
			/** 10735 */
			Self_service,
			/** 10831 */
			Seller_attribute,
			/** 10832 */
			Seller_attribute_value,
			/** 11451 */
			SemanticEntityMappingMetadata,
			/** 11466 */
			SemanticMapping,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 11348 */
			Sender,
			/** 10726 */
			Sentiment_analysis,
			/** 10705 */
			Sentiment_daily_topic,
			/** 10706 */
			Sentiment_daily_topic_keyword,
			/** 10707 */
			Sentiment_daily_topic_trending,
			/** 10816 */
			Sequence,
			/** 10817 */
			Sequence_Stat,
			/** 10818 */
			Sequence_Target,
			/** 10819 */
			Sequence_Target_Step,
			/** 10820 */
			Sequence_Template,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 10186 */
			Service_Configuration,
			/** 20 */
			Service_Contract_Contact,
			/** 10883 */
			Service_Copilot_Plugin,
			/** 11564 */
			Service_Copilot_Plugin_Action,
			/** 10884 */
			Service_Copilot_Plugin_Role,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 10070 */
			Service_Plan_Custom_Control,
			/** 10069 */
			Service_Plan_Mapping,
			/** 11702 */
			Service_Task_Type,
			/** 10708 */
			Session_10708,
			/** 11114 */
			Session_11114,
			/** 10750 */
			Session_Characteristic,
			/** 10474 */
			Session_Data_Deprecated,
			/** 10727 */
			Session_event,
			/** 10728 */
			Session_participant,
			/** 10475 */
			Session_Participant_Data_Deprecated,
			/** 10709 */
			Session_Participant_Event,
			/** 11115 */
			Session_Registration,
			/** 10710 */
			Session_Sentiment,
			/** 10445 */
			Session_Template,
			/** 10456 */
			Session_Templates_Deprecated,
			/** 11116 */
			Session_Track,
			/** 10312 */
			Setting,
			/** 10067 */
			Setting_Definition,
			/** 10534 */
			ShareAs_Configuration,
			/** 10054 */
			Shared_Link_Setting,
			/** 10033 */
			Shared_Object,
			/** 10034 */
			Shared_Workspace,
			/** 11563 */
			Shared_Workspace_Access_Token,
			/** 10035 */
			Shared_Workspace_Pool,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 11638 */
			Ship_Via,
			/** 10331 */
			Shortcut,
			/** 10543 */
			SI_Key_Value_Config,
			/** 10542 */
			siconfig,
			/** 10125 */
			SideloadedAIPlugin,
			/** 11750 */
			signal,
			/** 10576 */
			Similar_entities_feature_importance,
			/** 9951 */
			Similarity_Rule,
			/** 10303 */
			Site_10303,
			/** 4009 */
			Site_4009,
			/** 10302 */
			Site_Component,
			/** 10304 */
			Site_Language,
			/** 4709 */
			Site_Map,
			/** 10332 */
			Site_Marker,
			/** 10333 */
			Site_Setting,
			/** 10751 */
			Skill_Attachment_Rule,
			/** 10757 */
			Skill_finder_model,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 10187 */
			SLA_KPI,
			/** 9752 */
			SLA_KPI_Instance,
			/** 10504 */
			Smartassist_configuration,
			/** 11042 */
			SMS_Engagement_Context,
			/** 11043 */
			SMS_Number,
			/** 11041 */
			SMS_Number_settings,
			/** 11307 */
			SMS_Phone_Number_Data_Source,
			/** 11044 */
			SMS_Setting_Secret,
			/** 11308 */
			SmsSubmission,
			/** 4216 */
			Social_Activity,
			/** 11243 */
			Social_media_account,
			/** 11242 */
			Social_post,
			/** 11244 */
			Social_Posting_Consent,
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
			/** 10017 */
			Solution_Component_Count_Data_Source,
			/** 10015 */
			Solution_Component_Count_Summary,
			/** 10016 */
			Solution_Component_Data_Source,
			/** 7104 */
			Solution_Component_Definition,
			/** 10003 */
			Solution_Component_Relationship_Configuration,
			/** 10014 */
			Solution_Component_Summary,
			/** 10282 */
			Solution_Health_Rule,
			/** 10283 */
			Solution_Health_Rule_Argument,
			/** 10284 */
			Solution_Health_Rule_Set,
			/** 10004 */
			Solution_History,
			/** 10005 */
			Solution_History_Data_Source,
			/** 9890 */
			SolutionHistoryData,
			/** 10730 */
			Sound_notification_setting,
			/** 11224 */
			Source_Activity,
			/** 11574 */
			Source_Control_Branch_Configuration,
			/** 11575 */
			Source_Control_Component,
			/** 11576 */
			Source_Control_Component_Payload,
			/** 11577 */
			Source_Control_Configuration,
			/** 11245 */
			Spam_Score_Activity,
			/** 11246 */
			Spam_Score_Request,
			/** 11452 */
			SparkJobExecutionMetadata,
			/** 11117 */
			Speaker,
			/** 11118 */
			Speaker_Engagement,
			/** 11225 */
			Splitter_Activity,
			/** 11119 */
			Sponsorable_Article,
			/** 11120 */
			Sponsorship,
			/** 10019 */
			Staged_Entity,
			/** 10020 */
			Staged_Entity_Attribute,
			/** 10021 */
			Staged_Metadata_Async_Operation,
			/** 11749 */
			Staged_Source_Control_Component,
			/** 10011 */
			StageSolutionUpload,
			/** 1075 */
			Status_Map,
			/** 1043 */
			String_Map,
			/** 129 */
			Subject,
			/** 11361 */
			Submit_Button,
			/** 10589 */
			Submodel_Definition,
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
			/** 10555 */
			Suggested_Activity,
			/** 10556 */
			Suggested_Activity_Data_Source,
			/** 10557 */
			Suggested_Contact,
			/** 10558 */
			Suggested_Contacts_Data_Source,
			/** 10848 */
			Suggestion_Assignment_Rule,
			/** 10885 */
			Suggestion_Interaction,
			/** 10849 */
			Suggestion_Principal_Object_Access,
			/** 10886 */
			Suggestion_request_payload,
			/** 10850 */
			Suggestion_Seller_Priority,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10887 */
			Suggestions_Model_Summary,
			/** 10888 */
			Suggestions_Setting,
			/** 10205 */
			SupportUserTable,
			/** 11027 */
			Survey_Answer_Option,
			/** 11036 */
			Survey_Question,
			/** 11035 */
			Survey_Question_Sequence,
			/** 11028 */
			Survey_Response,
			/** 11029 */
			Survey_Response_Value,
			/** 10649 */
			Survey_setting,
			/** 10640 */
			Swarm,
			/** 10641 */
			Swarm_participant,
			/** 10642 */
			Swarm_participant_rule,
			/** 10643 */
			Swarm_role,
			/** 10644 */
			Swarm_skill,
			/** 10645 */
			Swarm_template,
			/** 10043 */
			Synapse_Database,
			/** 10044 */
			Synapse_Link_External_Table_State,
			/** 10045 */
			Synapse_Link_Profile,
			/** 10046 */
			Synapse_Link_Profile_Entity,
			/** 10047 */
			Synapse_Link_Profile_Entity_State,
			/** 10048 */
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
			/** 11016 */
			System_User_Scheduler_Setting,
			/** 11453 */
			SystemIntegrationMigrationTrackingInfo,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10324 */
			Table_Permission,
			/** 10712 */
			Tag_10712,
			/** 11075 */
			Tag_11075,
			/** 11081 */
			Tag_11081,
			/** 11341 */
			Tag_11341,
			/** 10430 */
			Tagged_Record,
			/** 4212 */
			Task,
			/** 11226 */
			Task_activity,
			/** 11182 */
			Task_activity_marketing_template,
			/** 11639 */
			Tax_Code,
			/** 11640 */
			Tax_Code_Detail,
			/** 10060 */
			TdsMetadata,
			/** 9 */
			Team,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 10216 */
			TeamMobileOfflineProfileMembership,
			/** 10185 */
			Teams_chat,
			/** 10513 */
			Teams_Contact_Suggestion_by_AI,
			/** 10512 */
			Teams_Dialer_Admin_settings,
			/** 11345 */
			Teams_Engagement,
			/** 11624 */
			Teams_Engagement_Context,
			/** 10803 */
			TeleSign_channel_instance,
			/** 10804 */
			TeleSign_channel_instance_account,
			/** 10394 */
			Template_For_Properties,
			/** 10446 */
			Template_Parameter,
			/** 11753 */
			Template_Rule_Set,
			/** 10459 */
			Template_Tag_Deprecated,
			/** 11454 */
			TemplatedMeasureMetadata,
			/** 11455 */
			TemplatedSegmentMetadata,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 9948 */
			Text_Analytics_Topic,
			/** 11315 */
			Text_fragment,
			/** 11305 */
			Text_message,
			/** 11306 */
			Text_message_sender,
			/** 10858 */
			Text_message_template,
			/** 10626 */
			Text_style,
			/** 2015 */
			Theme,
			/** 11625 */
			Three_Dimensional_Model,
			/** 11631 */
			Time_Entry,
			/** 11018 */
			Time_Group_Detail,
			/** 11703 */
			Time_Off_Request,
			/** 11632 */
			Time_Source,
			/** 10590 */
			Time_spent_in_BPF,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 10648 */
			Time_Tracker,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 10260 */
			Timeline_Pin,
			/** 11283 */
			Topic,
			/** 9946 */
			Topic_History,
			/** 9944 */
			Topic_Model,
			/** 9942 */
			Topic_Model_Configuration,
			/** 9943 */
			Topic_Model_Execution_History,
			/** 10149 */
			Tour,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 8052 */
			Trace_Regarding,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 10792 */
			TrackingContext,
			/** 11728 */
			Trade,
			/** 11729 */
			Trade_Coverage,
			/** 10754 */
			Training_data_import_configuration,
			/** 10756 */
			Training_record,
			/** 10591 */
			Training_Result,
			/** 11751 */
			trait,
			/** 11019 */
			Transaction_Origin,
			/** 10731 */
			Transcript,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 11456 */
			TransformMetadata,
			/** 951 */
			Translation_Process,
			/** 10789 */
			Trigger,
			/** 11227 */
			Trigger_activity,
			/** 10790 */
			Triggers_To_Sdk_Message_Processing_Steps,
			/** 10805 */
			Twilio_channel_instance,
			/** 10806 */
			Twilio_channel_instance_account,
			/** 11052 */
			Twitter_account,
			/** 11057 */
			Twitter_Engagement_Context,
			/** 11053 */
			Twitter_handle,
			/** 11622 */
			Twitter_Handle_Provisioning_Status,
			/** 11183 */
			UIC_config,
			/** 10369 */
			Unified_Routing_Setup_Tracker,
			/** 11473 */
			UnifiedActivity,
			/** 11457 */
			UnifiedActivityMappingGroupMetadata,
			/** 11478 */
			UnifiedContact,
			/** 11474 */
			UnifiedContactAlternateKey,
			/** 11475 */
			UnifiedContactSegment,
			/** 11704 */
			Unique_Number,
			/** 1055 */
			Unit,
			/** 1056 */
			Unit_Group,
			/** 2012 */
			Unresolved_Address,
			/** 10554 */
			UntrackedAppointment,
			/** 4220 */
			UntrackedEmail,
			/** 10364 */
			Upgrade_Run,
			/** 10365 */
			Upgrade_Step,
			/** 10366 */
			Upgrade_Version,
			/** 10732 */
			UR_notification_template,
			/** 10733 */
			UR_Notification_Template_Mapping,
			/** 11585 */
			UR_RecordRouting_Real_timeAnalytics,
			/** 10544 */
			Usage_Metric,
			/** 8 */
			User,
			/** 11321 */
			User_Agent_Info_Data_Source,
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
			/** 11184 */
			User_geo_region,
			/** 2016 */
			User_Mapping,
			/** 10241 */
			User_Rating,
			/** 52 */
			User_Search_Facet,
			/** 11185 */
			User_Setting,
			/** 10734 */
			User_settings,
			/** 150 */
			User_Settings,
			/** 11364 */
			User_token_cache,
			/** 10217 */
			UserMobileOfflineProfileMembership,
			/** 10786 */
			UserSettings,
			/** 11322 */
			UTM_tracking,
			/** 11121 */
			Venue,
			/** 10807 */
			Vibes_channel_instance,
			/** 10808 */
			Vibes_channel_instance_account,
			/** 11076 */
			Video_11076,
			/** 11316 */
			Video_11316,
			/** 10627 */
			Video_style,
			/** 1039 */
			View,
			/** 10298 */
			ViewAsExampleQuestion,
			/** 10261 */
			Virtual_Connector_Data_Source,
			/** 11338 */
			Virtual_Domain,
			/** 11339 */
			Virtual_Domain_Data_Source,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 10211 */
			Virtual_Entity_Metadata,
			/** 10373 */
			Virtual_Resource_Group_Resource,
			/** 11299 */
			Virtual_Segment_Data_Source,
			/** 10262 */
			Virtual_Table_Column_Candidate,
			/** 11067 */
			Voice,
			/** 11068 */
			Voice_Channel_Language_Setting,
			/** 11071 */
			Voice_channel_organization_setting,
			/** 11069 */
			Voice_Channel_Setting,
			/** 11072 */
			Voice_workstream_V2_migration_status,
			/** 11070 */
			Voicemail,
			/** 11122 */
			Waitlist_Item,
			/** 10598 */
			Wall_View,
			/** 11641 */
			Warehouse,
			/** 10395 */
			Warranty,
			/** 11123 */
			Web_application,
			/** 10334 */
			Web_File,
			/** 10338 */
			Web_Link,
			/** 10339 */
			Web_Link_Set,
			/** 10340 */
			Web_Page,
			/** 10341 */
			Web_Page_Access_Control_Rule,
			/** 9333 */
			Web_Resource,
			/** 10342 */
			Web_Role,
			/** 10346 */
			Web_Template,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 11124 */
			Webinar_configuration,
			/** 11125 */
			Webinar_Consent,
			/** 11346 */
			Webinar_Email_Journey,
			/** 11126 */
			Webinar_provider,
			/** 11127 */
			Webinar_Type,
			/** 10343 */
			Website,
			/** 10344 */
			Website_Access,
			/** 10345 */
			Website_Language,
			/** 11128 */
			Website_table_configuration,
			/** 11054 */
			WeChat_account,
			/** 11058 */
			WeChat_Engagement_Context,
			/** 11055 */
			WhatsApp_account,
			/** 11059 */
			WhatsApp_Engagement_Context,
			/** 11056 */
			WhatsApp_number,
			/** 4802 */
			Wizard_Page,
			/** 10577 */
			wkwcolleaguesforcompany,
			/** 10578 */
			wkwcolleaguesforcontact,
			/** 10579 */
			wkwconfig,
			/** 10841 */
			Work_List_Suggestion,
			/** 10842 */
			Work_list_suggestion_source,
			/** 10846 */
			Work_list_user_setting,
			/** 10843 */
			Work_List_View_Configuration,
			/** 11705 */
			Work_Order,
			/** 11658 */
			Work_Order_Business_Process,
			/** 11706 */
			Work_Order_Characteristic_Deprecated,
			/** 11707 */
			Work_Order_Details_Generation_Queue_Deprecated,
			/** 11708 */
			Work_Order_Incident,
			/** 11732 */
			Work_order_not_to_exceed,
			/** 11709 */
			Work_Order_Product,
			/** 11733 */
			Work_Order_Resolution,
			/** 11711 */
			Work_Order_Service,
			/** 11712 */
			Work_Order_Service_Task,
			/** 11713 */
			Work_Order_Substatus,
			/** 11714 */
			Work_Order_Type,
			/** 10088 */
			Work_Queue,
			/** 10089 */
			Work_Queue_Item,
			/** 10844 */
			Work_Queue_Record,
			/** 10845 */
			Work_Queue_Record_State,
			/** 10681 */
			Work_Stream,
			/** 10744 */
			Work_stream_capacity_profile,
			/** 11020 */
			Work_Template,
			/** 10180 */
			Workflow_Action_Status,
			/** 10076 */
			Workflow_Binary,
			/** 11261 */
			Workflow_Resume_Map,
			/** 11262 */
			Workflow_Trigger_Map,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 10847 */
			WQDataSource
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}