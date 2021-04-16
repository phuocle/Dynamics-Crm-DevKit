//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	class SimilarityRuleApi {
		/**
		* DynamicsCrm.DevKit SimilarityRuleApi
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
		/** Generated Fetch xml from Active rule and rule conditions. */
		ActiveRuleFetchXML: DevKit.WebApi.StringValue;
		/** Record type of the record being evaluated for potential similarities. */
		BaseEntityName: DevKit.WebApi.StringValue;
		/** Record type of the record being evaluated for potential similarities. */
		BaseEntityTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the similarity detection rule. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the SimilarityRule with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Determines whether to flag inactive records as similarities */
		ExcludeInactiveRecords: DevKit.WebApi.BooleanValue;
		/** Fetch Xml */
		FetchXmlList: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is Managed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Record type of the records being evaluated as potential similarities. */
		MatchingEntityName: DevKit.WebApi.StringValue;
		/** Record type of the records being evaluated as potential similarities. */
		MatchingEntityTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Enter the maximum number of keywords and key phrases to use with text analytics. */
		MaxKeyWords: DevKit.WebApi.IntegerValue;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the custom entity. */
		name: DevKit.WebApi.StringValue;
		/** Enter the maximum number of words in a key phrase to use with text analytics. */
		NgramSize: DevKit.WebApi.IntegerValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** ConditionXml for similarity rule conditions. */
		RuleConditionXml: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		SimilarityRuleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Similarity Rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		SimilarityRuleIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Similarity Rule */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Similarity Rule */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the SimilarityRule with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SimilarityRule {
		enum BaseEntityTypeCode {
			/** 4712 */
			Process_Trigger,
			/** 10083 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 10052 */
			ProcessStageParameter,
			/** 7102 */
			Publisher_Address,
			/** 2023 */
			QueueItemCount,
			/** 2024 */
			QueueMemberCount,
			/** 1189 */
			Document_Suggestions,
			/** 2002 */
			Quarterly_Fiscal_Calendar,
			/** 2020 */
			Queue,
			/** 2029 */
			Queue_Item,
			/** 8000 */
			Post,
			/** 8005 */
			Comment,
			/** 8003 */
			Follow,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 50 */
			Position,
			/** 8006 */
			Like,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 44 */
			Field_Sharing,
			/** 4250 */
			Recurrence_Rule,
			/** 1130 */
			Ribbon_Difference,
			/** 9880 */
			Ribbon_Metadata_To_Process,
			/** 1117 */
			Ribbon_Rule,
			/** 1116 */
			Ribbon_Command,
			/** 1115 */
			Ribbon_Context_Group,
			/** 1120 */
			Application_Ribbons,
			/** 1113 */
			Ribbon_Tab_To_Command_Mapping,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 8181 */
			Routing_Rule_Set,
			/** 1036 */
			Security_Role,
			/** 1037 */
			Role_Template,
			/** 9604 */
			Rollup_Field,
			/** 4500 */
			Relationship_Role,
			/** 4501 */
			Relationship_Role_Map,
			/** 1140 */
			Replication_Backlog,
			/** 4251 */
			Recurring_Appointment,
			/** 9813 */
			Relationship_Entity,
			/** 9814 */
			Relationship_Attribute,
			/** 9100 */
			Report,
			/** 9103 */
			Report_Visibility,
			/** 10104 */
			RevokeInheritedAccessRecordsTracker,
			/** 4579 */
			Ribbon_Client_Metadata,
			/** 9102 */
			Report_Related_Category,
			/** 9101 */
			Report_Related_Entity,
			/** 9104 */
			Report_Link,
			/** 10001 */
			Solution_Component_Summary,
			/** 10017 */
			Solution_Health_Rule,
			/** 10018 */
			Solution_Health_Rule_Argument,
			/** 10043 */
			Service_Configuration,
			/** 10044 */
			SLA_KPI,
			/** 10002 */
			Solution_Component_Data_Source,
			/** 10019 */
			Solution_Health_Rule_Set,
			/** 9910 */
			MultiEntitySearch,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9900 */
			Navigation_Setting,
			/** 10003 */
			Solution_History,
			/** 10004 */
			Solution_History_Data_Source,
			/** 10091 */
			BotContent,
			/** 10139 */
			Knowledge_personalization,
			/** 10021 */
			Knowledge_Article_Image,
			/** 10022 */
			Knowledge_Article_Template,
			/** 10033 */
			Help_Page,
			/** 10140 */
			Knowledge_article_language_setting,
			/** 10100 */
			Search_provider,
			/** 10079 */
			Knowledge_Interaction_Insight,
			/** 10054 */
			NonRelational_Data_Source,
			/** 10000 */
			OData_v4_Data_Source,
			/** 10074 */
			Rich_Text_Attachment,
			/** 10141 */
			Knowledge_search_personal_filter_config,
			/** 10142 */
			Knowledge_search_filter,
			/** 10080 */
			Knowledge_Search_Insight,
			/** 10071 */
			BPF_Location_2,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10077 */
			Package,
			/** 1021 */
			Organization_UI,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 1095 */
			Partner_Application,
			/** 4418 */
			List_Value_Mapping,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 10072 */
			PDF_Setting,
			/** 9941 */
			Personal_Document_Template,
			/** 4210 */
			Phone_Call,
			/** 4110,10122 */
			Notification,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 10146 */
			My_Mother,
			/** 10147 */
			VETicket,
			/** 950 */
			New_Process,
			/** 9870 */
			Offline_Command_Definition,
			/** 10116 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10114 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 9809 */
			OptionSet,
			/** 1019 */
			Organization,
			/** 10115 */
			OrganizationDataSyncSubscription,
			/** 2010 */
			Email_Template,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 2015 */
			Theme,
			/** 4811 */
			Time_Zone_Rule,
			/** 8051 */
			Trace_Association,
			/** 8050 */
			Trace,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 7000 */
			System_Application_Metadata,
			/** 1030 */
			System_Form,
			/** 8 */
			User,
			/** 1401 */
			Sync_Attribute_Mapping,
			/** 1400 */
			Sync_Attribute_Mapping_Profile,
			/** 9869 */
			Sync_Error,
			/** 10113 */
			SystemUserAuthorizationChangeTracker,
			/** 4212 */
			Task,
			/** 9 */
			Team,
			/** 10118 */
			TeamMobileOfflineProfileMembership,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 51 */
			System_User_Manager_Map,
			/** 14 */
			System_User_Principal,
			/** 8052 */
			Trace_Regarding,
			/** 150 */
			User_Settings,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4230 */
			Saved_View,
			/** 1112 */
			User_Chart,
			/** 52 */
			User_Search_Facet,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 4802 */
			Wizard_Page,
			/** 4703 */
			Process,
			/** 10032 */
			Workflow_Binary,
			/** 951 */
			Translation_Process,
			/** 2012 */
			Unresolved_Address,
			/** 4220 */
			UntrackedEmail,
			/** 9105 */
			Currency,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 7001 */
			User_Application_Metadata,
			/** 1031 */
			User_Dashboard,
			/** 2016 */
			User_Mapping,
			/** 10119 */
			UserMobileOfflineProfileMembership,
			/** 2501 */
			User_Entity_Instance_Data,
			/** 2500 */
			User_Entity_UI_Settings,
			/** 1086 */
			User_Fiscal_Calendar,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 4610 */
			Sdk_Message_Response,
			/** 4611 */
			Sdk_Message_Response_Field,
			/** 10101 */
			Search_Telemetry,
			/** 10064 */
			Setting_Definition,
			/** 9502 */
			SharePoint_Site,
			/** 9951 */
			Similarity_Rule,
			/** 4709 */
			Site_Map,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9508 */
			Document_Location,
			/** 1039 */
			View,
			/** 1111 */
			System_Chart,
			/** 4606 */
			Sdk_Message,
			/** 8199 */
			Rule_Item,
			/** 7200 */
			RuntimeDependency,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4607 */
			Sdk_Message_Filter,
			/** 4616 */
			Sdk_Message_Processing_Step_Secure_Configuration,
			/** 4609 */
			Sdk_Message_Request,
			/** 4614 */
			Sdk_Message_Request_Field,
			/** 4613 */
			Sdk_Message_Pair,
			/** 4608 */
			Sdk_Message_Processing_Step,
			/** 4615 */
			Sdk_Message_Processing_Step_Image,
			/** 9750 */
			SLA,
			/** 29 */
			Subscription,
			/** 1072 */
			Subscription_Clients,
			/** 37 */
			Subscription_Manually_Tracked_Object,
			/** 1075 */
			Status_Map,
			/** 1043 */
			String_Map,
			/** 129 */
			Subject,
			/** 45 */
			Subscription_Statistic_Offline,
			/** 33 */
			Subscription_Synchronization_Information,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 1190 */
			SuggestionCardTemplate,
			/** 46 */
			Subscription_Statistic_Outlook,
			/** 47 */
			Subscription_Sync_Entry_Offline,
			/** 48 */
			Subscription_Sync_Entry_Outlook,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 99 */
			Social_Profile,
			/** 7100 */
			Solution,
			/** 9751 */
			SLA_Item,
			/** 9752 */
			SLA_KPI_Instance,
			/** 4216 */
			Social_Activity,
			/** 7103 */
			Solution_Component,
			/** 10059 */
			Solution_Component_Relationship_Configuration,
			/** 9890 */
			SolutionHistoryData,
			/** 10046 */
			StageSolutionUpload,
			/** 10034 */
			Solution_Component_Attribute_Configuration,
			/** 10045 */
			Solution_Component_Configuration,
			/** 7104 */
			Solution_Component_Definition,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 9650 */
			Process_Configuration,
			/** 3234 */
			Connection,
			/** 10067 */
			Connection_Reference,
			/** 2 */
			Contact,
			/** 10088 */
			Custom_API,
			/** 10089 */
			Custom_API_Request_Parameter,
			/** 10090 */
			Custom_API_Response_Property,
			/** 10092 */
			ConversationTranscript,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 10085 */
			Catalog,
			/** 10086 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 9983 */
			Action_Card_Type,
			/** 10075 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10076 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 3005 */
			Channel_Access_Profile,
			/** 1234 */
			Channel_Property_Group,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 1236 */
			Channel_Property,
			/** 9753 */
			Custom_Control,
			/** 10065 */
			BPF_Account_1,
			/** 10066 */
			BPF_Account_3,
			/** 10042 */
			Custom_Activity,
			/** 10138 */
			Azure_Account,
			/** 10135 */
			Azure_Sql,
			/** 10070 */
			BPF_Location_1,
			/** 10069 */
			Location,
			/** 4101 */
			Display_String_Map,
			/** 126 */
			Indexed_Article,
			/** 9940 */
			Document_Template,
			/** 10029 */
			Process_WebApi_1,
			/** 10030 */
			WebApi,
			/** 4102 */
			Display_String,
			/** 4502 */
			Customer_Relationship,
			/** 10081 */
			Data_Lake_Folder,
			/** 10082 */
			Data_Lake_Folder_Permission,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 1071 */
			Address,
			/** 10055 */
			Data_Lake_Workspace,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10056 */
			Data_Lake_Workspace_Permission,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 9961 */
			DelveActionHub,
			/** 10060 */
			Model_Driven_App_Element,
			/** 4707 */
			Application_File,
			/** 10057 */
			ApplicationUser,
			/** 9012 */
			App_Configuration,
			/** 9013 */
			App_Configuration_Instance,
			/** 9011 */
			App_Config_Master,
			/** 9006 */
			Model_driven_App,
			/** 8700 */
			AppModule_Metadata,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 9007 */
			App_Module_Component,
			/** 10061 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10062 */
			Model_Driven_App_Component_Node,
			/** 9973 */
			Action_Card_User_Settings,
			/** 9968 */
			ActionCardUserState,
			/** 10145 */
			Activity_File_Attachment,
			/** 1 */
			Account,
			/** 8040 */
			ACIViewMapper,
			/** 9962 */
			Action_Card,
			/** 1001,1002 */
			Attachment,
			/** 5 */
			Note,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 10036 */
			ApiSettings,
			/** 135 */
			Activity_Party,
			/** 4200 */
			Activity,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 9009 */
			App_Module_Roles,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 10 */
			Business_Unit,
			/** 10094 */
			Chatbot_subcomponent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 6 */
			Business_Unit_Map,
			/** 301 */
			Callback_Registration,
			/** 300 */
			Canvas_App,
			/** 10068 */
			CanvasApp_Extended_Metadata,
			/** 132 */
			Announcement,
			/** 4003 */
			Calendar,
			/** 4004 */
			Calendar_Rule,
			/** 10117 */
			Model_Driven_App_User_Setting,
			/** 4700 */
			System_Job,
			/** 4201 */
			Appointment,
			/** 10063 */
			Model_Driven_App_Setting,
			/** 9808 */
			Attribute,
			/** 1094 */
			Authorization_Server,
			/** 9936 */
			Azure_Service_Connection,
			/** 10093 */
			Chatbot,
			/** 431 */
			Image_Attribute_Configuration,
			/** 4601 */
			Attribute_Map,
			/** 4567 */
			Auditing,
			/** 4419 */
			Lookup_Mapping,
			/** 9606 */
			Mailbox,
			/** 9607 */
			Mailbox_Statistics,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 9201 */
			LocalConfigStore,
			/** 9609 */
			Mailbox_Tracking_Category,
			/** 9812 */
			Managed_Property,
			/** 4231 */
			Metadata_Difference,
			/** 9603 */
			Goal_Metric,
			/** 9608 */
			Mailbox_Auto_Tracking_Folder,
			/** 9106 */
			Mail_Merge_Template,
			/** 10121 */
			ManagedIdentity,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 10120 */
			KeyVaultReference,
			/** 7107 */
			Invalid_Dependency,
			/** 4705 */
			ISV_Config,
			/** 127 */
			Article,
			/** 9953 */
			Knowledge_Article,
			/** 9947 */
			Knowledge_Search_Model,
			/** 9957 */
			Language,
			/** 9875 */
			Language_Provisioning_State,
			/** 9960 */
			Knowledge_Article_Category,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 400 */
			AI_Template,
			/** 10013 */
			Analysis_Component,
			/** 10014 */
			Analysis_Job,
			/** 10009 */
			AI_Object_Detection_Label,
			/** 10010 */
			AI_Object_Detection_Bounding_Box,
			/** 10011 */
			AI_Object_Detection_Image_Mapping,
			/** 10015 */
			Analysis_Result,
			/** 418 */
			Dataflow,
			/** 10098 */
			Knowledge_Federated_Article,
			/** 10099 */
			Knowledge_FederatedArticle_Incident,
			/** 10016 */
			Analysis_Result_Detail,
			/** 10005 */
			Component_Layer,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 10037 */
			AI_Builder_Dataset,
			/** 10038 */
			AI_Builder_Dataset_File,
			/** 10053 */
			AI_Builder_Dataset_Record,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10039 */
			AI_Builder_Datasets_Container,
			/** 10007 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10008 */
			AI_Object_Detection_Image,
			/** 10040 */
			AI_Builder_File,
			/** 10041 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 9810 */
			Entity_Key,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 4711 */
			Expander_Event,
			/** 9987 */
			External_Party_Item,
			/** 4204 */
			Fax,
			/** 9958 */
			Feedback,
			/** 955 */
			Expired_Process,
			/** 10073 */
			ExportSolutionUpload,
			/** 3008 */
			External_Party,
			/** 4202 */
			Email,
			/** 4023 */
			Email_Hash,
			/** 4299 */
			Email_Search,
			/** 4415 */
			Duplicate_Record,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 9605 */
			Email_Server_Profile,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 432 */
			Entity_Image_Configuration,
			/** 9997 */
			Email_Signature,
			/** 9800 */
			Entity,
			/** 430 */
			Entity_Analytics_Config,
			/** 1201 */
			Field_Permission,
			/** 4428 */
			Import_Entity_Mapping,
			/** 4412 */
			Import_Source_File,
			/** 9107 */
			Import_Job,
			/** 1007 */
			Image_Descriptor,
			/** 4410 */
			Data_Import,
			/** 4413 */
			Import_Data,
			/** 4423 */
			Import_Log,
			/** 1003 */
			Internal_Address,
			/** 10087 */
			Internal_Catalog_Assignment,
			/** 4011 */
			Inter_Process_Lock,
			/** 4411 */
			Data_Map,
			/** 3000 */
			Integration_Status,
			/** 9986 */
			Interaction_for_Email,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10125 */
			Flow_Machine,
			/** 10126 */
			Flow_Machine_Group,
			/** 1200 */
			Field_Security_Profile,
			/** 55 */
			FileAttachment,
			/** 30 */
			Filter_Template,
			/** 4720 */
			Flow_Session,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9602 */
			Rollup_Query
		}
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum MatchingEntityTypeCode {
			/** 4712 */
			Process_Trigger,
			/** 10083 */
			ProvisionLanguageForUser,
			/** 7101 */
			Publisher,
			/** 4710 */
			Process_Session,
			/** 4724 */
			Process_Stage,
			/** 10052 */
			ProcessStageParameter,
			/** 7102 */
			Publisher_Address,
			/** 2023 */
			QueueItemCount,
			/** 2024 */
			QueueMemberCount,
			/** 1189 */
			Document_Suggestions,
			/** 2002 */
			Quarterly_Fiscal_Calendar,
			/** 2020 */
			Queue,
			/** 2029 */
			Queue_Item,
			/** 8000 */
			Post,
			/** 8005 */
			Comment,
			/** 8003 */
			Follow,
			/** 4602 */
			Plug_in_Type,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 50 */
			Position,
			/** 8006 */
			Like,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 1023 */
			Privilege,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 8002 */
			Post_Regarding,
			/** 8001 */
			Post_Role,
			/** 44 */
			Field_Sharing,
			/** 4250 */
			Recurrence_Rule,
			/** 1130 */
			Ribbon_Difference,
			/** 9880 */
			Ribbon_Metadata_To_Process,
			/** 1117 */
			Ribbon_Rule,
			/** 1116 */
			Ribbon_Command,
			/** 1115 */
			Ribbon_Context_Group,
			/** 1120 */
			Application_Ribbons,
			/** 1113 */
			Ribbon_Tab_To_Command_Mapping,
			/** 9511 */
			Rollup_Job,
			/** 9510 */
			Rollup_Properties,
			/** 8181 */
			Routing_Rule_Set,
			/** 1036 */
			Security_Role,
			/** 1037 */
			Role_Template,
			/** 9604 */
			Rollup_Field,
			/** 4500 */
			Relationship_Role,
			/** 4501 */
			Relationship_Role_Map,
			/** 1140 */
			Replication_Backlog,
			/** 4251 */
			Recurring_Appointment,
			/** 9813 */
			Relationship_Entity,
			/** 9814 */
			Relationship_Attribute,
			/** 9100 */
			Report,
			/** 9103 */
			Report_Visibility,
			/** 10104 */
			RevokeInheritedAccessRecordsTracker,
			/** 4579 */
			Ribbon_Client_Metadata,
			/** 9102 */
			Report_Related_Category,
			/** 9101 */
			Report_Related_Entity,
			/** 9104 */
			Report_Link,
			/** 10001 */
			Solution_Component_Summary,
			/** 10017 */
			Solution_Health_Rule,
			/** 10018 */
			Solution_Health_Rule_Argument,
			/** 10043 */
			Service_Configuration,
			/** 10044 */
			SLA_KPI,
			/** 10002 */
			Solution_Component_Data_Source,
			/** 10019 */
			Solution_Health_Rule_Set,
			/** 9910 */
			MultiEntitySearch,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9900 */
			Navigation_Setting,
			/** 10003 */
			Solution_History,
			/** 10004 */
			Solution_History_Data_Source,
			/** 10091 */
			BotContent,
			/** 10139 */
			Knowledge_personalization,
			/** 10021 */
			Knowledge_Article_Image,
			/** 10022 */
			Knowledge_Article_Template,
			/** 10033 */
			Help_Page,
			/** 10140 */
			Knowledge_article_language_setting,
			/** 10100 */
			Search_provider,
			/** 10079 */
			Knowledge_Interaction_Insight,
			/** 10054 */
			NonRelational_Data_Source,
			/** 10000 */
			OData_v4_Data_Source,
			/** 10074 */
			Rich_Text_Attachment,
			/** 10141 */
			Knowledge_search_personal_filter_config,
			/** 10142 */
			Knowledge_search_filter,
			/** 10080 */
			Knowledge_Search_Insight,
			/** 10071 */
			BPF_Location_2,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 10077 */
			Package,
			/** 1021 */
			Organization_UI,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 1095 */
			Partner_Application,
			/** 4418 */
			List_Value_Mapping,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 10072 */
			PDF_Setting,
			/** 9941 */
			Personal_Document_Template,
			/** 4210 */
			Phone_Call,
			/** 4110,10122 */
			Notification,
			/** 4490 */
			Office_Document,
			/** 9950 */
			Office_Graph_Document,
			/** 10146 */
			My_Mother,
			/** 10147 */
			VETicket,
			/** 950 */
			New_Process,
			/** 9870 */
			Offline_Command_Definition,
			/** 10116 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10114 */
			Organization_Setting,
			/** 4708 */
			Organization_Statistic,
			/** 9809 */
			OptionSet,
			/** 1019 */
			Organization,
			/** 10115 */
			OrganizationDataSyncSubscription,
			/** 2010 */
			Email_Template,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 1203 */
			Team_Profiles,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 2015 */
			Theme,
			/** 4811 */
			Time_Zone_Rule,
			/** 8051 */
			Trace_Association,
			/** 8050 */
			Trace,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 4810 */
			Time_Zone_Definition,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 7000 */
			System_Application_Metadata,
			/** 1030 */
			System_Form,
			/** 8 */
			User,
			/** 1401 */
			Sync_Attribute_Mapping,
			/** 1400 */
			Sync_Attribute_Mapping_Profile,
			/** 9869 */
			Sync_Error,
			/** 10113 */
			SystemUserAuthorizationChangeTracker,
			/** 4212 */
			Task,
			/** 9 */
			Team,
			/** 10118 */
			TeamMobileOfflineProfileMembership,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 51 */
			System_User_Manager_Map,
			/** 14 */
			System_User_Principal,
			/** 8052 */
			Trace_Regarding,
			/** 150 */
			User_Settings,
			/** 9333 */
			Web_Resource,
			/** 4800 */
			Web_Wizard,
			/** 4230 */
			Saved_View,
			/** 1112 */
			User_Chart,
			/** 52 */
			User_Search_Facet,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 4704 */
			Process_Dependency,
			/** 4706 */
			Process_Log,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 4802 */
			Wizard_Page,
			/** 4703 */
			Process,
			/** 10032 */
			Workflow_Binary,
			/** 951 */
			Translation_Process,
			/** 2012 */
			Unresolved_Address,
			/** 4220 */
			UntrackedEmail,
			/** 9105 */
			Currency,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 7001 */
			User_Application_Metadata,
			/** 1031 */
			User_Dashboard,
			/** 2016 */
			User_Mapping,
			/** 10119 */
			UserMobileOfflineProfileMembership,
			/** 2501 */
			User_Entity_Instance_Data,
			/** 2500 */
			User_Entity_UI_Settings,
			/** 1086 */
			User_Fiscal_Calendar,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 4618 */
			Service_Endpoint,
			/** 101 */
			Service_Plan,
			/** 4610 */
			Sdk_Message_Response,
			/** 4611 */
			Sdk_Message_Response_Field,
			/** 10101 */
			Search_Telemetry,
			/** 10064 */
			Setting_Definition,
			/** 9502 */
			SharePoint_Site,
			/** 9951 */
			Similarity_Rule,
			/** 4709 */
			Site_Map,
			/** 9509 */
			SharePoint_Data,
			/** 9507 */
			Sharepoint_Document,
			/** 9508 */
			Document_Location,
			/** 1039 */
			View,
			/** 1111 */
			System_Chart,
			/** 4606 */
			Sdk_Message,
			/** 8199 */
			Rule_Item,
			/** 7200 */
			RuntimeDependency,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 4607 */
			Sdk_Message_Filter,
			/** 4616 */
			Sdk_Message_Processing_Step_Secure_Configuration,
			/** 4609 */
			Sdk_Message_Request,
			/** 4614 */
			Sdk_Message_Request_Field,
			/** 4613 */
			Sdk_Message_Pair,
			/** 4608 */
			Sdk_Message_Processing_Step,
			/** 4615 */
			Sdk_Message_Processing_Step_Image,
			/** 9750 */
			SLA,
			/** 29 */
			Subscription,
			/** 1072 */
			Subscription_Clients,
			/** 37 */
			Subscription_Manually_Tracked_Object,
			/** 1075 */
			Status_Map,
			/** 1043 */
			String_Map,
			/** 129 */
			Subject,
			/** 45 */
			Subscription_Statistic_Offline,
			/** 33 */
			Subscription_Synchronization_Information,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 1190 */
			SuggestionCardTemplate,
			/** 46 */
			Subscription_Statistic_Outlook,
			/** 47 */
			Subscription_Sync_Entry_Offline,
			/** 48 */
			Subscription_Sync_Entry_Outlook,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 99 */
			Social_Profile,
			/** 7100 */
			Solution,
			/** 9751 */
			SLA_Item,
			/** 9752 */
			SLA_KPI_Instance,
			/** 4216 */
			Social_Activity,
			/** 7103 */
			Solution_Component,
			/** 10059 */
			Solution_Component_Relationship_Configuration,
			/** 9890 */
			SolutionHistoryData,
			/** 10046 */
			StageSolutionUpload,
			/** 10034 */
			Solution_Component_Attribute_Configuration,
			/** 10045 */
			Solution_Component_Configuration,
			/** 7104 */
			Solution_Component_Definition,
			/** 3231 */
			Connection_Role,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 9650 */
			Process_Configuration,
			/** 3234 */
			Connection,
			/** 10067 */
			Connection_Reference,
			/** 2 */
			Contact,
			/** 10088 */
			Custom_API,
			/** 10089 */
			Custom_API_Request_Parameter,
			/** 10090 */
			Custom_API_Response_Property,
			/** 10092 */
			ConversationTranscript,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 10085 */
			Catalog,
			/** 10086 */
			Catalog_Assignment,
			/** 9959 */
			Category,
			/** 9983 */
			Action_Card_Type,
			/** 10075 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10076 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 3005 */
			Channel_Access_Profile,
			/** 1234 */
			Channel_Property_Group,
			/** 36 */
			Client_update,
			/** 4417 */
			Column_Mapping,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 1236 */
			Channel_Property,
			/** 9753 */
			Custom_Control,
			/** 10065 */
			BPF_Account_1,
			/** 10066 */
			BPF_Account_3,
			/** 10042 */
			Custom_Activity,
			/** 10138 */
			Azure_Account,
			/** 10135 */
			Azure_Sql,
			/** 10070 */
			BPF_Location_1,
			/** 10069 */
			Location,
			/** 4101 */
			Display_String_Map,
			/** 126 */
			Indexed_Article,
			/** 9940 */
			Document_Template,
			/** 10029 */
			Process_WebApi_1,
			/** 10030 */
			WebApi,
			/** 4102 */
			Display_String,
			/** 4502 */
			Customer_Relationship,
			/** 10081 */
			Data_Lake_Folder,
			/** 10082 */
			Data_Lake_Folder_Permission,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9754 */
			Custom_Control_Resource,
			/** 1071 */
			Address,
			/** 10055 */
			Data_Lake_Workspace,
			/** 7105 */
			Dependency,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 10056 */
			Data_Lake_Workspace_Permission,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 9961 */
			DelveActionHub,
			/** 10060 */
			Model_Driven_App_Element,
			/** 4707 */
			Application_File,
			/** 10057 */
			ApplicationUser,
			/** 9012 */
			App_Configuration,
			/** 9013 */
			App_Configuration_Instance,
			/** 9011 */
			App_Config_Master,
			/** 9006 */
			Model_driven_App,
			/** 8700 */
			AppModule_Metadata,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 9007 */
			App_Module_Component,
			/** 10061 */
			Model_Driven_App_Component_Nodes_Edge,
			/** 10062 */
			Model_Driven_App_Component_Node,
			/** 9973 */
			Action_Card_User_Settings,
			/** 9968 */
			ActionCardUserState,
			/** 10145 */
			Activity_File_Attachment,
			/** 1 */
			Account,
			/** 8040 */
			ACIViewMapper,
			/** 9962 */
			Action_Card,
			/** 1001,1002 */
			Attachment,
			/** 5 */
			Note,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 10036 */
			ApiSettings,
			/** 135 */
			Activity_Party,
			/** 4200 */
			Activity,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 9009 */
			App_Module_Roles,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 10 */
			Business_Unit,
			/** 10094 */
			Chatbot_subcomponent,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 6 */
			Business_Unit_Map,
			/** 301 */
			Callback_Registration,
			/** 300 */
			Canvas_App,
			/** 10068 */
			CanvasApp_Extended_Metadata,
			/** 132 */
			Announcement,
			/** 4003 */
			Calendar,
			/** 4004 */
			Calendar_Rule,
			/** 10117 */
			Model_Driven_App_User_Setting,
			/** 4700 */
			System_Job,
			/** 4201 */
			Appointment,
			/** 10063 */
			Model_Driven_App_Setting,
			/** 9808 */
			Attribute,
			/** 1094 */
			Authorization_Server,
			/** 9936 */
			Azure_Service_Connection,
			/** 10093 */
			Chatbot,
			/** 431 */
			Image_Attribute_Configuration,
			/** 4601 */
			Attribute_Map,
			/** 4567 */
			Auditing,
			/** 4419 */
			Lookup_Mapping,
			/** 9606 */
			Mailbox,
			/** 9607 */
			Mailbox_Statistics,
			/** 4207 */
			Letter,
			/** 2027 */
			License,
			/** 9201 */
			LocalConfigStore,
			/** 9609 */
			Mailbox_Tracking_Category,
			/** 9812 */
			Managed_Property,
			/** 4231 */
			Metadata_Difference,
			/** 9603 */
			Goal_Metric,
			/** 9608 */
			Mailbox_Auto_Tracking_Folder,
			/** 9106 */
			Mail_Merge_Template,
			/** 10121 */
			ManagedIdentity,
			/** 1082 */
			Article_Comment,
			/** 1016 */
			Article_Template,
			/** 10120 */
			KeyVaultReference,
			/** 7107 */
			Invalid_Dependency,
			/** 4705 */
			ISV_Config,
			/** 127 */
			Article,
			/** 9953 */
			Knowledge_Article,
			/** 9947 */
			Knowledge_Search_Model,
			/** 9957 */
			Language,
			/** 9875 */
			Language_Provisioning_State,
			/** 9960 */
			Knowledge_Article_Category,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 400 */
			AI_Template,
			/** 10013 */
			Analysis_Component,
			/** 10014 */
			Analysis_Job,
			/** 10009 */
			AI_Object_Detection_Label,
			/** 10010 */
			AI_Object_Detection_Bounding_Box,
			/** 10011 */
			AI_Object_Detection_Image_Mapping,
			/** 10015 */
			Analysis_Result,
			/** 418 */
			Dataflow,
			/** 10098 */
			Knowledge_Federated_Article,
			/** 10099 */
			Knowledge_FederatedArticle_Incident,
			/** 10016 */
			Analysis_Result_Detail,
			/** 10005 */
			Component_Layer,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 10037 */
			AI_Builder_Dataset,
			/** 10038 */
			AI_Builder_Dataset_File,
			/** 10053 */
			AI_Builder_Dataset_Record,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10039 */
			AI_Builder_Datasets_Container,
			/** 10007 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10008 */
			AI_Object_Detection_Image,
			/** 10040 */
			AI_Builder_File,
			/** 10041 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 9810 */
			Entity_Key,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 4711 */
			Expander_Event,
			/** 9987 */
			External_Party_Item,
			/** 4204 */
			Fax,
			/** 9958 */
			Feedback,
			/** 955 */
			Expired_Process,
			/** 10073 */
			ExportSolutionUpload,
			/** 3008 */
			External_Party,
			/** 4202 */
			Email,
			/** 4023 */
			Email_Hash,
			/** 4299 */
			Email_Search,
			/** 4415 */
			Duplicate_Record,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 9605 */
			Email_Server_Profile,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 432 */
			Entity_Image_Configuration,
			/** 9997 */
			Email_Signature,
			/** 9800 */
			Entity,
			/** 430 */
			Entity_Analytics_Config,
			/** 1201 */
			Field_Permission,
			/** 4428 */
			Import_Entity_Mapping,
			/** 4412 */
			Import_Source_File,
			/** 9107 */
			Import_Job,
			/** 1007 */
			Image_Descriptor,
			/** 4410 */
			Data_Import,
			/** 4413 */
			Import_Data,
			/** 4423 */
			Import_Log,
			/** 1003 */
			Internal_Address,
			/** 10087 */
			Internal_Catalog_Assignment,
			/** 4011 */
			Inter_Process_Lock,
			/** 4411 */
			Data_Map,
			/** 3000 */
			Integration_Status,
			/** 9986 */
			Interaction_for_Email,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 10125 */
			Flow_Machine,
			/** 10126 */
			Flow_Machine_Group,
			/** 1200 */
			Field_Security_Profile,
			/** 55 */
			FileAttachment,
			/** 30 */
			Filter_Template,
			/** 4720 */
			Flow_Session,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9996 */
			HolidayWrapper,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 9602 */
			Rollup_Query
		}
		enum statecode {
			/** 0 */
			Draft,
			/** 1 */
			Active
		}
		enum statuscode {
			/** 0 */
			Draft,
			/** 1 */
			Active
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}