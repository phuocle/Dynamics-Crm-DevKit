//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormDuplicateRule_Information {
		interface tab_rule_Sections {
			section_1: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			criteria: DevKit.Controls.Section;
			Rule_Conditions: DevKit.Controls.Section;
		}
		interface tab_administration_Sections {
			section_1_2: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_rule extends DevKit.Controls.ITab {
			Section: tab_rule_Sections;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			rule: tab_rule;
			administration: tab_administration;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			ruleconditioncontrol: DevKit.Controls.IFrame;
			notescontrol: DevKit.Controls.Note;
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
			/** Unique identifier of the user or team who owns the duplicate detection rule. */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the duplicate detection rule. */
			StatusCode: DevKit.Controls.OptionSet;
		}
	}
	class FormDuplicateRule_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form DuplicateRule_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form DuplicateRule_Information */
		Body: MyDog.FormDuplicateRule_Information.Body;
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
			/** 1 */
			Account,
			/** 8040 */
			ACIViewMapper,
			/** 9962 */
			Action_Card,
			/** 9983 */
			Action_Card_Type,
			/** 9973 */
			Action_Card_User_Settings,
			/** 9968 */
			ActionCardUserState,
			/** 4200 */
			Activity,
			/** 10145 */
			Activity_File_Attachment,
			/** 135 */
			Activity_Party,
			/** 1071 */
			Address,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10037 */
			AI_Builder_Dataset,
			/** 10038 */
			AI_Builder_Dataset_File,
			/** 10053 */
			AI_Builder_Dataset_Record,
			/** 10039 */
			AI_Builder_Datasets_Container,
			/** 10040 */
			AI_Builder_File,
			/** 10041 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 10007 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10010 */
			AI_Object_Detection_Bounding_Box,
			/** 10008 */
			AI_Object_Detection_Image,
			/** 10011 */
			AI_Object_Detection_Image_Mapping,
			/** 10009 */
			AI_Object_Detection_Label,
			/** 400 */
			AI_Template,
			/** 10013 */
			Analysis_Component,
			/** 10014 */
			Analysis_Job,
			/** 10015 */
			Analysis_Result,
			/** 10016 */
			Analysis_Result_Detail,
			/** 132 */
			Announcement,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 10036 */
			ApiSettings,
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
			/** 4707 */
			Application_File,
			/** 1120 */
			Application_Ribbons,
			/** 10057 */
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
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 9808 */
			Attribute,
			/** 4601 */
			Attribute_Map,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 10138 */
			Azure_Account,
			/** 9936 */
			Azure_Service_Connection,
			/** 10135 */
			Azure_Sql,
			/** 10091 */
			BotContent,
			/** 10065 */
			BPF_Account_1,
			/** 10066 */
			BPF_Account_3,
			/** 10070 */
			BPF_Location_1,
			/** 10071 */
			BPF_Location_2,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
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
			/** 300 */
			Canvas_App,
			/** 10068 */
			CanvasApp_Extended_Metadata,
			/** 10075 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10076 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 10085 */
			Catalog,
			/** 10086 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10093 */
			Chatbot,
			/** 10094 */
			Chatbot_subcomponent,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 8005 */
			Comment,
			/** 10005 */
			Component_Layer,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 3234 */
			Connection,
			/** 10067 */
			Connection_Reference,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 2 */
			Contact,
			/** 10092 */
			ConversationTranscript,
			/** 9105 */
			Currency,
			/** 10042 */
			Custom_Activity,
			/** 10088 */
			Custom_API,
			/** 10089 */
			Custom_API_Request_Parameter,
			/** 10090 */
			Custom_API_Response_Property,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 4502 */
			Customer_Relationship,
			/** 4410 */
			Data_Import,
			/** 10081 */
			Data_Lake_Folder,
			/** 10082 */
			Data_Lake_Folder_Permission,
			/** 10055 */
			Data_Lake_Workspace,
			/** 10056 */
			Data_Lake_Workspace_Permission,
			/** 4411 */
			Data_Map,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 418 */
			Dataflow,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
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
			/** 9800 */
			Entity,
			/** 430 */
			Entity_Analytics_Config,
			/** 432 */
			Entity_Image_Configuration,
			/** 9810 */
			Entity_Key,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 955 */
			Expired_Process,
			/** 10073 */
			ExportSolutionUpload,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 4204 */
			Fax,
			/** 9958 */
			Feedback,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 30 */
			Filter_Template,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10125 */
			Flow_Machine,
			/** 10126 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 8003 */
			Follow,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9603 */
			Goal_Metric,
			/** 10033 */
			Help_Page,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
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
			/** 126 */
			Indexed_Article,
			/** 3000 */
			Integration_Status,
			/** 4011 */
			Inter_Process_Lock,
			/** 9986 */
			Interaction_for_Email,
			/** 1003 */
			Internal_Address,
			/** 10087 */
			Internal_Catalog_Assignment,
			/** 7107 */
			Invalid_Dependency,
			/** 4705 */
			ISV_Config,
			/** 10120 */
			KeyVaultReference,
			/** 9953 */
			Knowledge_Article,
			/** 9960 */
			Knowledge_Article_Category,
			/** 10021 */
			Knowledge_Article_Image,
			/** 10140 */
			Knowledge_article_language_setting,
			/** 10022 */
			Knowledge_Article_Template,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 10098 */
			Knowledge_Federated_Article,
			/** 10099 */
			Knowledge_FederatedArticle_Incident,
			/** 10079 */
			Knowledge_Interaction_Insight,
			/** 10139 */
			Knowledge_personalization,
			/** 10142 */
			Knowledge_search_filter,
			/** 10080 */
			Knowledge_Search_Insight,
			/** 9947 */
			Knowledge_Search_Model,
			/** 10141 */
			Knowledge_search_personal_filter_config,
			/** 9957 */
			Language,
			/** 9875 */
			Language_Provisioning_State,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 8006 */
			Like,
			/** 4418 */
			List_Value_Mapping,
			/** 9201 */
			LocalConfigStore,
			/** 10069 */
			Location,
			/** 4419 */
			Lookup_Mapping,
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
			/** 10121 */
			ManagedIdentity,
			/** 4231 */
			Metadata_Difference,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 9006 */
			Model_driven_App,
			/** 10062 */
			Model_Driven_App_Component_Node,
			/** 10061 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10060 */
			Model_Driven_App_Element,
			/** 10063 */
			Model_Driven_App_Setting,
			/** 10117 */
			Model_Driven_App_User_Setting,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 10146 */
			My_Mother,
			/** 9900 */
			Navigation_Setting,
			/** 950 */
			New_Process,
			/** 10054 */
			NonRelational_Data_Source,
			/** 5 */
			Note,
			/** 10122 */
			Notification_10122,
			/** 4110 */
			Notification_4110,
			/** 10000 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 9809 */
			OptionSet,
			/** 1019 */
			Organization,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 10114 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 10115 */
			OrganizationDataSyncSubscription,
			/** 10116 */
			OrganizationDataSyncSubscriptionEntity,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10077 */
			Package,
			/** 1095 */
			Partner_Application,
			/** 10072 */
			PDF_Setting,
			/** 9941 */
			Personal_Document_Template,
			/** 4210 */
			Phone_Call,
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
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
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
			/** 10029 */
			Process_WebApi_1,
			/** 10052 */
			ProcessStageParameter,
			/** 10083 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
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
			/** 10104 */
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
			/** 10074 */
			Rich_Text_Attachment,
			/** 1037 */
			Role_Template,
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
			/** 8199 */
			Rule_Item,
			/** 7200 */
			RuntimeDependency,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
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
			/** 10100 */
			Search_provider,
			/** 10101 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10043 */
			Service_Configuration,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 10064 */
			Setting_Definition,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 9951 */
			Similarity_Rule,
			/** 4709 */
			Site_Map,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 10044 */
			SLA_KPI,
			/** 9752 */
			SLA_KPI_Instance,
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
			/** 10034 */
			Solution_Component_Attribute_Configuration,
			/** 10045 */
			Solution_Component_Configuration,
			/** 10002 */
			Solution_Component_Data_Source,
			/** 7104 */
			Solution_Component_Definition,
			/** 10059 */
			Solution_Component_Relationship_Configuration,
			/** 10001 */
			Solution_Component_Summary,
			/** 10017 */
			Solution_Health_Rule,
			/** 10018 */
			Solution_Health_Rule_Argument,
			/** 10019 */
			Solution_Health_Rule_Set,
			/** 10003 */
			Solution_History,
			/** 10004 */
			Solution_History_Data_Source,
			/** 9890 */
			SolutionHistoryData,
			/** 10046 */
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
			/** 1190 */
			SuggestionCardTemplate,
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
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 10113 */
			SystemUserAuthorizationChangeTracker,
			/** 4212 */
			Task,
			/** 9 */
			Team,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 10118 */
			TeamMobileOfflineProfileMembership,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 2015 */
			Theme,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 8052 */
			Trace_Regarding,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 2012 */
			Unresolved_Address,
			/** 4220 */
			UntrackedEmail,
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
			/** 150 */
			User_Settings,
			/** 10119 */
			UserMobileOfflineProfileMembership,
			/** 10147 */
			VETicket,
			/** 1039 */
			View,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10030 */
			WebApi,
			/** 4802 */
			Wizard_Page,
			/** 10032 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription
		}
		enum MatchingEntityTypeCode {
			/** 1 */
			Account,
			/** 8040 */
			ACIViewMapper,
			/** 9962 */
			Action_Card,
			/** 9983 */
			Action_Card_Type,
			/** 9973 */
			Action_Card_User_Settings,
			/** 9968 */
			ActionCardUserState,
			/** 4200 */
			Activity,
			/** 10145 */
			Activity_File_Attachment,
			/** 135 */
			Activity_Party,
			/** 1071 */
			Address,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 10037 */
			AI_Builder_Dataset,
			/** 10038 */
			AI_Builder_Dataset_File,
			/** 10053 */
			AI_Builder_Dataset_Record,
			/** 10039 */
			AI_Builder_Datasets_Container,
			/** 10040 */
			AI_Builder_File,
			/** 10041 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 10007 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10010 */
			AI_Object_Detection_Bounding_Box,
			/** 10008 */
			AI_Object_Detection_Image,
			/** 10011 */
			AI_Object_Detection_Image_Mapping,
			/** 10009 */
			AI_Object_Detection_Label,
			/** 400 */
			AI_Template,
			/** 10013 */
			Analysis_Component,
			/** 10014 */
			Analysis_Job,
			/** 10015 */
			Analysis_Result,
			/** 10016 */
			Analysis_Result_Detail,
			/** 132 */
			Announcement,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 10036 */
			ApiSettings,
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
			/** 4707 */
			Application_File,
			/** 1120 */
			Application_Ribbons,
			/** 10057 */
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
			/** 1001 */
			Attachment_1001,
			/** 1002 */
			Attachment_1002,
			/** 9808 */
			Attribute,
			/** 4601 */
			Attribute_Map,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 10138 */
			Azure_Account,
			/** 9936 */
			Azure_Service_Connection,
			/** 10135 */
			Azure_Sql,
			/** 10091 */
			BotContent,
			/** 10065 */
			BPF_Account_1,
			/** 10066 */
			BPF_Account_3,
			/** 10070 */
			BPF_Location_1,
			/** 10071 */
			BPF_Location_2,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
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
			/** 300 */
			Canvas_App,
			/** 10068 */
			CanvasApp_Extended_Metadata,
			/** 10075 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10076 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 10085 */
			Catalog,
			/** 10086 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 3005 */
			Channel_Access_Profile,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 1236 */
			Channel_Property,
			/** 1234 */
			Channel_Property_Group,
			/** 10093 */
			Chatbot,
			/** 10094 */
			Chatbot_subcomponent,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 8005 */
			Comment,
			/** 10005 */
			Component_Layer,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 3234 */
			Connection,
			/** 10067 */
			Connection_Reference,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 2 */
			Contact,
			/** 10092 */
			ConversationTranscript,
			/** 9105 */
			Currency,
			/** 10042 */
			Custom_Activity,
			/** 10088 */
			Custom_API,
			/** 10089 */
			Custom_API_Request_Parameter,
			/** 10090 */
			Custom_API_Response_Property,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 4502 */
			Customer_Relationship,
			/** 4410 */
			Data_Import,
			/** 10081 */
			Data_Lake_Folder,
			/** 10082 */
			Data_Lake_Folder_Permission,
			/** 10055 */
			Data_Lake_Workspace,
			/** 10056 */
			Data_Lake_Workspace_Permission,
			/** 4411 */
			Data_Map,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 418 */
			Dataflow,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
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
			/** 9800 */
			Entity,
			/** 430 */
			Entity_Analytics_Config,
			/** 432 */
			Entity_Image_Configuration,
			/** 9810 */
			Entity_Key,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 4711 */
			Expander_Event,
			/** 955 */
			Expired_Process,
			/** 10073 */
			ExportSolutionUpload,
			/** 3008 */
			External_Party,
			/** 9987 */
			External_Party_Item,
			/** 4204 */
			Fax,
			/** 9958 */
			Feedback,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 44 */
			Field_Sharing,
			/** 55 */
			FileAttachment,
			/** 30 */
			Filter_Template,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10125 */
			Flow_Machine,
			/** 10126 */
			Flow_Machine_Group,
			/** 4720 */
			Flow_Session,
			/** 8003 */
			Follow,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9603 */
			Goal_Metric,
			/** 10033 */
			Help_Page,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
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
			/** 126 */
			Indexed_Article,
			/** 3000 */
			Integration_Status,
			/** 4011 */
			Inter_Process_Lock,
			/** 9986 */
			Interaction_for_Email,
			/** 1003 */
			Internal_Address,
			/** 10087 */
			Internal_Catalog_Assignment,
			/** 7107 */
			Invalid_Dependency,
			/** 4705 */
			ISV_Config,
			/** 10120 */
			KeyVaultReference,
			/** 9953 */
			Knowledge_Article,
			/** 9960 */
			Knowledge_Article_Category,
			/** 10021 */
			Knowledge_Article_Image,
			/** 10140 */
			Knowledge_article_language_setting,
			/** 10022 */
			Knowledge_Article_Template,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 10098 */
			Knowledge_Federated_Article,
			/** 10099 */
			Knowledge_FederatedArticle_Incident,
			/** 10079 */
			Knowledge_Interaction_Insight,
			/** 10139 */
			Knowledge_personalization,
			/** 10142 */
			Knowledge_search_filter,
			/** 10080 */
			Knowledge_Search_Insight,
			/** 9947 */
			Knowledge_Search_Model,
			/** 10141 */
			Knowledge_search_personal_filter_config,
			/** 9957 */
			Language,
			/** 9875 */
			Language_Provisioning_State,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 8006 */
			Like,
			/** 4418 */
			List_Value_Mapping,
			/** 9201 */
			LocalConfigStore,
			/** 10069 */
			Location,
			/** 4419 */
			Lookup_Mapping,
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
			/** 10121 */
			ManagedIdentity,
			/** 4231 */
			Metadata_Difference,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 9006 */
			Model_driven_App,
			/** 10062 */
			Model_Driven_App_Component_Node,
			/** 10061 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10060 */
			Model_Driven_App_Element,
			/** 10063 */
			Model_Driven_App_Setting,
			/** 10117 */
			Model_Driven_App_User_Setting,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9910 */
			MultiEntitySearch,
			/** 10146 */
			My_Mother,
			/** 9900 */
			Navigation_Setting,
			/** 950 */
			New_Process,
			/** 10054 */
			NonRelational_Data_Source,
			/** 5 */
			Note,
			/** 10122 */
			Notification_10122,
			/** 4110 */
			Notification_4110,
			/** 10000 */
			OData_v4_Data_Source,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 9809 */
			OptionSet,
			/** 1019 */
			Organization,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 10114 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 1021 */
			Organization_UI,
			/** 10115 */
			OrganizationDataSyncSubscription,
			/** 10116 */
			OrganizationDataSyncSubscriptionEntity,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10077 */
			Package,
			/** 1095 */
			Partner_Application,
			/** 10072 */
			PDF_Setting,
			/** 9941 */
			Personal_Document_Template,
			/** 4210 */
			Phone_Call,
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
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
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
			/** 10029 */
			Process_WebApi_1,
			/** 10052 */
			ProcessStageParameter,
			/** 10083 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 7102 */
			Publisher_Address,
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
			/** 10104 */
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
			/** 10074 */
			Rich_Text_Attachment,
			/** 1037 */
			Role_Template,
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
			/** 8199 */
			Rule_Item,
			/** 7200 */
			RuntimeDependency,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4230 */
			Saved_View,
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
			/** 10100 */
			Search_provider,
			/** 10101 */
			Search_Telemetry,
			/** 1036 */
			Security_Role,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 10043 */
			Service_Configuration,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 10064 */
			Setting_Definition,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9502 */
			SharePoint_Site,
			/** 9951 */
			Similarity_Rule,
			/** 4709 */
			Site_Map,
			/** 9750 */
			SLA,
			/** 9751 */
			SLA_Item,
			/** 10044 */
			SLA_KPI,
			/** 9752 */
			SLA_KPI_Instance,
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
			/** 10034 */
			Solution_Component_Attribute_Configuration,
			/** 10045 */
			Solution_Component_Configuration,
			/** 10002 */
			Solution_Component_Data_Source,
			/** 7104 */
			Solution_Component_Definition,
			/** 10059 */
			Solution_Component_Relationship_Configuration,
			/** 10001 */
			Solution_Component_Summary,
			/** 10017 */
			Solution_Health_Rule,
			/** 10018 */
			Solution_Health_Rule_Argument,
			/** 10019 */
			Solution_Health_Rule_Set,
			/** 10003 */
			Solution_History,
			/** 10004 */
			Solution_History_Data_Source,
			/** 9890 */
			SolutionHistoryData,
			/** 10046 */
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
			/** 1190 */
			SuggestionCardTemplate,
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
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 10113 */
			SystemUserAuthorizationChangeTracker,
			/** 4212 */
			Task,
			/** 9 */
			Team,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 10118 */
			TeamMobileOfflineProfileMembership,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 2015 */
			Theme,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 8050 */
			Trace,
			/** 8051 */
			Trace_Association,
			/** 8052 */
			Trace_Regarding,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 951 */
			Translation_Process,
			/** 2012 */
			Unresolved_Address,
			/** 4220 */
			UntrackedEmail,
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
			/** 150 */
			User_Settings,
			/** 10119 */
			UserMobileOfflineProfileMembership,
			/** 10147 */
			VETicket,
			/** 1039 */
			View,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 10030 */
			WebApi,
			/** 4802 */
			Wizard_Page,
			/** 10032 */
			Workflow_Binary,
			/** 4702 */
			Workflow_Wait_Subscription
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}