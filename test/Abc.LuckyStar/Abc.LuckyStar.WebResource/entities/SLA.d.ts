//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormSLA {
		interface Header {
			/** Enter the user or team who owns the SLA. This field is updated every time the item is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the status of the service level agreement (SLA). */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tabUC_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			sladetails: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tabUC extends DevKit.Form.Controls.IControlTab {
			Section: tab_tabUC_Sections;
		}
		interface Tabs {
			tabUC: tab_tabUC;
		}
		interface Body {
			Tab: Tabs;
			SLADetails: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			SLAItemsUCI: DevKit.Form.Controls.ControlGrid;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Form.Controls.ControlBoolean;
			/** Select the field that specifies the date and time from which the SLA items will be calculated. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created. */
			ApplicableFromPickList: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the SLA */
			Description: DevKit.Form.Controls.ControlString;
			/** Type additional information to describe the SLA */
			Description_1: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name of the service level agreement (SLA). */
			Name: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name of the service level agreement (SLA). */
			Name_1: DevKit.Form.Controls.ControlString;
			/** Choose the entity type that the SLA is defined. */
			ObjectTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the primary entity that the SLA has been created for. */
			PrimaryEntityOTC: DevKit.Form.Controls.ControlInteger;
			/** Select the type of service level agreement (SLA). */
			SLAType: DevKit.Form.Controls.ControlOptionSet;
			slaversion: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormSLA extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form SLA
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SLA */
		Body: LuckyStar.FormSLA.Body;
		/** The Header section of form SLA */
		Header: LuckyStar.FormSLA.Header;
	}
	class SLAApi {
		/**
		* DynamicsCrm.DevKit SLAApi
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
		/** Select whether this SLA will allow pausing and resuming during the time calculation. */
		AllowPauseResume: DevKit.WebApi.BooleanValue;
		/** Select the field that specifies the date and time from which the SLA items will be calculated for the case record. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created.  */
		ApplicableFrom: DevKit.WebApi.StringValue;
		/** Select the field that specifies the date and time from which the SLA items will be calculated. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created. */
		ApplicableFromPickList: DevKit.WebApi.OptionSetValue;
		/** Choose the business hours for calculating SLA item timelines. */
		BusinessHoursId: DevKit.WebApi.LookupValue;
		/** Type additional information to describe the SLA */
		ChangedAttributeList: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the SLA */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate between the currency associated with the SLA record and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Tells whether this SLA is the default one. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name of the service level agreement (SLA). */
		Name: DevKit.WebApi.StringValue;
		/** Choose the entity type that the SLA is defined. */
		ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Shows the primary entity that the SLA has been created for. */
		PrimaryEntityOTC: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the SLA. */
		SLAId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SLAIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Select the type of service level agreement (SLA). */
		SLAType: DevKit.WebApi.OptionSetValue;
		slaversion: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows whether the Service Level Agreement (SLA) is active or inactive. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the status of the service level agreement (SLA). */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the currency associated with the SLA record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Version number of the SLA. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Workflow associated with the SLA. */
		WorkflowId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace SLA {
		enum ApplicableFromPickList {
			/** 1 */
			No,
			/** 2 */
			Yes
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
		enum ObjectTypeCode {
			/** 1140 */
			Replication_Backlog,
			/** 9100 */
			Report,
			/** 4501 */
			Relationship_Role_Map,
			/** 4251 */
			Recurring_Appointment,
			/** 4500 */
			Relationship_Role,
			/** 9102 */
			Report_Related_Category,
			/** 4579 */
			Ribbon_Client_Metadata,
			/** 1116 */
			Ribbon_Command,
			/** 9103 */
			Report_Visibility,
			/** 9101 */
			Report_Related_Entity,
			/** 9104 */
			Report_Link,
			/** 7102 */
			Publisher_Address,
			/** 2002 */
			Quarterly_Fiscal_Calendar,
			/** 7101 */
			Publisher,
			/** 10052 */
			ProcessStageParameter,
			/** 4712 */
			Process_Trigger,
			/** 2020 */
			Queue,
			/** 1189 */
			Document_Suggestions,
			/** 4250 */
			Recurrence_Rule,
			/** 2024 */
			QueueMemberCount,
			/** 2029 */
			Queue_Item,
			/** 2023 */
			QueueItemCount,
			/** 1309 */
			Saved_Organization_Insights_Configuration,
			/** 1039 */
			View,
			/** 7200 */
			RuntimeDependency,
			/** 8181 */
			Routing_Rule_Set,
			/** 8199 */
			Rule_Item,
			/** 1111 */
			System_Chart,
			/** 4608 */
			Sdk_Message_Processing_Step,
			/** 4615 */
			Sdk_Message_Processing_Step_Image,
			/** 4613 */
			Sdk_Message_Pair,
			/** 4606 */
			Sdk_Message,
			/** 4607 */
			Sdk_Message_Filter,
			/** 9880 */
			Ribbon_Metadata_To_Process,
			/** 1117 */
			Ribbon_Rule,
			/** 1130 */
			Ribbon_Difference,
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
			/** 9604 */
			Rollup_Field,
			/** 1036 */
			Security_Role,
			/** 1037 */
			Role_Template,
			/** 4724 */
			Process_Stage,
			/** 9950 */
			Office_Graph_Document,
			/** 9870 */
			Offline_Command_Definition,
			/** 4490 */
			Office_Document,
			/** 950 */
			New_Process,
			/** 4110 */
			Notification,
			/** 9809 */
			OptionSet,
			/** 9699 */
			Organization_Insights_Metric,
			/** 9690 */
			Organization_Insights_Notification,
			/** 1021 */
			Organization_UI,
			/** 1019 */
			Organization,
			/** 4708 */
			Organization_Statistic,
			/** 10017 */
			Solution_Health_Rule,
			/** 10018 */
			Solution_Health_Rule_Argument,
			/** 10001 */
			Solution_Component_Summary,
			/** 10044 */
			SLAKPI,
			/** 10002 */
			Solution_Component_Data_Source,
			/** 10019 */
			Solution_Health_Rule_Set,
			/** 9912 */
			Multi_Select_Option_Value,
			/** 9900 */
			Navigation_Setting,
			/** 9910 */
			MultiEntitySearch,
			/** 10003 */
			Solution_History,
			/** 10004 */
			Solution_History_Data_Source,
			/** 8006 */
			Like,
			/** 8002 */
			Post_Regarding,
			/** 8003 */
			Follow,
			/** 8000 */
			Post,
			/** 8005 */
			Comment,
			/** 8001 */
			Post_Role,
			/** 31 */
			Privilege_Object_Type_Code,
			/** 4710 */
			Process_Session,
			/** 1023 */
			Privilege,
			/** 44 */
			Field_Sharing,
			/** 1404 */
			Principal_Sync_Attribute_Map,
			/** 9941 */
			Personal_Document_Template,
			/** 4210 */
			Phone_Call,
			/** 1095 */
			Partner_Application,
			/** 7 */
			Owner,
			/** 4420 */
			Owner_Mapping,
			/** 4418 */
			List_Value_Mapping,
			/** 4603 */
			Plug_in_Type_Statistic,
			/** 50 */
			Position,
			/** 4602 */
			Plug_in_Type,
			/** 4605 */
			Plug_in_Assembly,
			/** 4619 */
			Plug_in_Trace_Log,
			/** 4616 */
			Sdk_Message_Processing_Step_Secure_Configuration,
			/** 4812 */
			Time_Zone_Localized_Name,
			/** 4811 */
			Time_Zone_Rule,
			/** 4810 */
			Time_Zone_Definition,
			/** 2015 */
			Theme,
			/** 9932 */
			Time_Stamp_Date_Mapping,
			/** 8051 */
			Trace_Association,
			/** 4426 */
			Transformation_Mapping,
			/** 4427 */
			Transformation_Parameter_Mapping,
			/** 9105 */
			Currency,
			/** 8050 */
			Trace,
			/** 8052 */
			Trace_Regarding,
			/** 4212 */
			Task,
			/** 9 */
			Team,
			/** 14 */
			System_User_Principal,
			/** 42 */
			SystemUser_BusinessUnit_Entity_Map,
			/** 51 */
			System_User_Manager_Map,
			/** 1203 */
			Team_Profiles,
			/** 2013 */
			Territory,
			/** 9945 */
			Text_Analytics_Entity_Mapping,
			/** 2010 */
			Email_Template,
			/** 1403 */
			Team_Sync_Attribute_Mapping_Profiles,
			/** 92 */
			Team_template,
			/** 4800 */
			Web_Wizard,
			/** 4803 */
			Web_Wizard_Access_Privilege,
			/** 9333 */
			Web_Resource,
			/** 52 */
			User_Search_Facet,
			/** 150 */
			User_Settings,
			/** 4802 */
			Wizard_Page,
			/** 4706 */
			Process_Log,
			/** 4702 */
			Workflow_Wait_Subscription,
			/** 4704 */
			Process_Dependency,
			/** 4703 */
			Process,
			/** 10032 */
			Workflow_Binary,
			/** 7001 */
			User_Application_Metadata,
			/** 2501 */
			User_Entity_Instance_Data,
			/** 4220 */
			UntrackedEmail,
			/** 951 */
			Translation_Process,
			/** 2012 */
			Unresolved_Address,
			/** 2500 */
			User_Entity_UI_Settings,
			/** 4230 */
			Saved_View,
			/** 1112 */
			User_Chart,
			/** 2016 */
			User_Mapping,
			/** 1086 */
			User_Fiscal_Calendar,
			/** 1031 */
			User_Dashboard,
			/** 8 */
			User,
			/** 9751 */
			SLA_Item,
			/** 9752 */
			SLA_KPI_Instance,
			/** 9750 */
			SLA,
			/** 9951 */
			Similarity_Rule,
			/** 4709 */
			Site_Map,
			/** 4216 */
			Social_Activity,
			/** 7103 */
			Solution_Component,
			/** 10034 */
			Solution_Component_Attribute_Configuration,
			/** 7100 */
			Solution,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 99 */
			Social_Profile,
			/** 4611 */
			Sdk_Message_Response_Field,
			/** 2001 */
			Semiannual_Fiscal_Calendar,
			/** 4610 */
			Sdk_Message_Response,
			/** 4609 */
			Sdk_Message_Request,
			/** 4614 */
			Sdk_Message_Request_Field,
			/** 4618 */
			Service_Endpoint,
			/** 9508 */
			Document_Location,
			/** 9502 */
			SharePoint_Site,
			/** 9507 */
			Sharepoint_Document,
			/** 101 */
			Service_Plan,
			/** 9509 */
			SharePoint_Data,
			/** 33 */
			Subscription_Synchronization_Information,
			/** 35 */
			Tracking_information_for_deleted_entities,
			/** 48 */
			Subscription_Sync_Entry_Outlook,
			/** 46 */
			Subscription_Statistic_Outlook,
			/** 47 */
			Subscription_Sync_Entry_Offline,
			/** 1190 */
			SuggestionCardTemplate,
			/** 7000 */
			System_Application_Metadata,
			/** 1030 */
			System_Form,
			/** 9869 */
			Sync_Error,
			/** 1401 */
			Sync_Attribute_Mapping,
			/** 1400 */
			Sync_Attribute_Mapping_Profile,
			/** 10046 */
			StageSolutionUpload,
			/** 1075 */
			Status_Map,
			/** 9890 */
			SolutionHistoryData,
			/** 10045 */
			Solution_Component_Configuration,
			/** 7104 */
			Solution_Component_Definition,
			/** 1043 */
			String_Map,
			/** 37 */
			Subscription_Manually_Tracked_Object,
			/** 45 */
			Subscription_Statistic_Offline,
			/** 1072 */
			Subscription_Clients,
			/** 129 */
			Subject,
			/** 29 */
			Subscription,
			/** 9753 */
			Custom_Control,
			/** 9755 */
			Custom_Control_Default_Config,
			/** 9301 */
			Record_Creation_and_Update_Rule_Item,
			/** 2 */
			Contact,
			/** 9300 */
			Record_Creation_and_Update_Rule,
			/** 9754 */
			Custom_Control_Resource,
			/** 9961 */
			DelveActionHub,
			/** 7105 */
			Dependency,
			/** 4450 */
			Data_Performance_Dashboard,
			/** 1071 */
			Address,
			/** 4502 */
			Customer_Relationship,
			/** 1234 */
			Channel_Property_Group,
			/** 36 */
			Client_update,
			/** 1236 */
			Channel_Property,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 9401 */
			Channel_Access_Profile_Rule_Item,
			/** 4417 */
			Column_Mapping,
			/** 3233 */
			Connection_Role_Object_Type_Code,
			/** 372 */
			Connector,
			/** 3231 */
			Connection_Role,
			/** 9650 */
			Process_Configuration,
			/** 3234 */
			Connection,
			/** 4299 */
			Email_Search,
			/** 9605 */
			Email_Server_Profile,
			/** 4023 */
			Email_Hash,
			/** 4416 */
			Duplicate_Rule_Condition,
			/** 4202 */
			Email,
			/** 9997 */
			Email_Signature,
			/** 85 */
			Virtual_Entity_Data_Source,
			/** 432 */
			Entity_Image_Configuration,
			/** 78 */
			Virtual_Entity_Data_Provider,
			/** 9800 */
			Entity,
			/** 430 */
			Entity_Analytics_Config,
			/** 10029 */
			Process_WebApi_1,
			/** 10030 */
			WebApi,
			/** 10042 */
			Custom_Activity,
			/** 7108 */
			Dependency_Feature,
			/** 7106 */
			Dependency_Node,
			/** 4102 */
			Display_String,
			/** 4415 */
			Duplicate_Record,
			/** 4414 */
			Duplicate_Detection_Rule,
			/** 9940 */
			Document_Template,
			/** 4101 */
			Display_String_Map,
			/** 126 */
			Indexed_Article,
			/** 3005 */
			Channel_Access_Profile,
			/** 9011 */
			App_Config_Master,
			/** 4707 */
			Application_File,
			/** 9013 */
			App_Configuration_Instance,
			/** 10036 */
			ApiSettings,
			/** 9012 */
			App_Configuration,
			/** 9006 */
			Model_driven_App,
			/** 8702 */
			AppModule_Metadata_Async_Operation,
			/** 9009 */
			App_Module_Roles,
			/** 8701 */
			AppModule_Metadata_Dependency,
			/** 9007 */
			App_Module_Component,
			/** 8700 */
			AppModule_Metadata,
			/** 9973 */
			Action_Card_User_Settings,
			/** 9968 */
			ActionCardUserState,
			/** 9962 */
			Action_Card,
			/** 1 */
			Account,
			/** 8040 */
			ACIViewMapper,
			/** 1001,1002 */
			Attachment,
			/** 5 */
			Note,
			/** 2000 */
			Annual_Fiscal_Calendar,
			/** 9949 */
			Advanced_Similarity_Rule,
			/** 135 */
			Activity_Party,
			/** 4200 */
			Activity,
			/** 6 */
			Business_Unit_Map,
			/** 132 */
			Announcement,
			/** 10 */
			Business_Unit,
			/** 4232 */
			Business_Data_Localized_Label,
			/** 4725 */
			Business_Process_Flow_Instance,
			/** 4003 */
			Calendar,
			/** 9983 */
			Action_Card_Type,
			/** 9959 */
			Category,
			/** 300 */
			Canvas_App,
			/** 4004 */
			Calendar_Rule,
			/** 301 */
			Callback_Registration,
			/** 9808 */
			Attribute,
			/** 431 */
			Image_Attribute_Configuration,
			/** 4201 */
			Appointment,
			/** 4700 */
			System_Job,
			/** 4601 */
			Attribute_Map,
			/** 4425 */
			Bulk_Delete_Failure,
			/** 4424 */
			Bulk_Delete_Operation,
			/** 9936 */
			Azure_Service_Connection,
			/** 4567 */
			Auditing,
			/** 1094 */
			Authorization_Server,
			/** 9810 */
			Entity_Key,
			/** 9866 */
			Mobile_Offline_Profile,
			/** 9867 */
			Mobile_Offline_Profile_Item,
			/** 9603 */
			Goal_Metric,
			/** 9812 */
			Managed_Property,
			/** 4231 */
			Metadata_Difference,
			/** 9868 */
			Mobile_Offline_Profile_Item_Association,
			/** 10053 */
			AI_Builder_Dataset_Record,
			/** 10039 */
			AI_Builder_Datasets_Container,
			/** 10038 */
			AI_Builder_Dataset_File,
			/** 2003 */
			Monthly_Fiscal_Calendar,
			/** 10037 */
			AI_Builder_Dataset,
			/** 2027 */
			License,
			/** 9201 */
			LocalConfigStore,
			/** 4207 */
			Letter,
			/** 9957 */
			Language,
			/** 9875 */
			Language_Provisioning_State,
			/** 4419 */
			Lookup_Mapping,
			/** 9608 */
			Mailbox_Auto_Tracking_Folder,
			/** 9106 */
			Mail_Merge_Template,
			/** 9609 */
			Mailbox_Tracking_Category,
			/** 9606 */
			Mailbox,
			/** 9607 */
			Mailbox_Statistics,
			/** 10005 */
			Component_Layer,
			/** 10006 */
			Component_Layer_Data_Source,
			/** 10016 */
			Analysis_Result_Detail,
			/** 10014 */
			Analysis_Job,
			/** 10015 */
			Analysis_Result,
			/** 418 */
			Dataflow,
			/** 10000 */
			OData_v4_Data_Source,
			/** 10043 */
			Service_Configuration,
			/** 10022 */
			Knowledge_Article_Template,
			/** 10033 */
			Help_Page,
			/** 10021 */
			Knowledge_Article_Image,
			/** 10007 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 402 */
			AI_Configuration,
			/** 10040 */
			AI_Builder_File,
			/** 10041 */
			AI_Builder_File_Attached_Data,
			/** 10008 */
			AI_Object_Detection_Image,
			/** 400 */
			AI_Template,
			/** 10013 */
			Analysis_Component,
			/** 10011 */
			AI_Object_Detection_Image_Mapping,
			/** 10009 */
			AI_Object_Detection_Label,
			/** 10010 */
			AI_Object_Detection_Bounding_Box,
			/** 9947 */
			Knowledge_Search_Model,
			/** 30 */
			Filter_Template,
			/** 2004 */
			Fixed_Monthly_Fiscal_Calendar,
			/** 55 */
			FileAttachment,
			/** 1201 */
			Field_Permission,
			/** 1200 */
			Field_Security_Profile,
			/** 4720 */
			Flow_Session,
			/** 8840 */
			Hierarchy_Rule,
			/** 9919 */
			Hierarchy_Security_Configuration,
			/** 9602 */
			Rollup_Query,
			/** 54 */
			Global_Search_Configuration,
			/** 9600 */
			Goal,
			/** 381 */
			Environment_Variable_Value,
			/** 4120 */
			Exchange_Sync_Id_Mapping,
			/** 380 */
			Environment_Variable_Definition,
			/** 4600 */
			Entity_Map,
			/** 9811 */
			Entity_Relationship,
			/** 4711 */
			Expander_Event,
			/** 4204 */
			Fax,
			/** 9958 */
			Feedback,
			/** 9987 */
			External_Party_Item,
			/** 955 */
			Expired_Process,
			/** 3008 */
			External_Party,
			/** 4705 */
			ISV_Config,
			/** 127 */
			Article,
			/** 7107 */
			Invalid_Dependency,
			/** 1003 */
			Internal_Address,
			/** 4011 */
			Inter_Process_Lock,
			/** 1082 */
			Article_Comment,
			/** 9955 */
			Knowledge_Article_Views,
			/** 9930 */
			Knowledge_Base_Record,
			/** 9960 */
			Knowledge_Article_Category,
			/** 1016 */
			Article_Template,
			/** 9953 */
			Knowledge_Article,
			/** 4413 */
			Import_Data,
			/** 4428 */
			Import_Entity_Mapping,
			/** 4410 */
			Data_Import,
			/** 9996 */
			HolidayWrapper,
			/** 1007 */
			Image_Descriptor,
			/** 4412 */
			Import_Source_File,
			/** 3000 */
			Integration_Status,
			/** 9986 */
			Interaction_for_Email,
			/** 4411 */
			Data_Map,
			/** 9107 */
			Import_Job,
			/** 4423 */
			Import_Log
		}
		enum SLAType {
			/** 0 */
			Standard,
			/** 1 */
			Enhanced
		}
		enum slaversion {
			/** 100000000 */
			Version_WC,
			/** 100000001 */
			Version_UC
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
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
//{'JsForm':['SLA'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}