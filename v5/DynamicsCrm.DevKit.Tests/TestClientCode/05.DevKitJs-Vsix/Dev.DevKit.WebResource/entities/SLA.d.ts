//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSLA {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who owns the SLA. This field is updated every time the item is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the status of the service level agreement (SLA). */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_tabUC_Sections {
			/** SLA Items */
			sladetails: DevKit.Controls.Section;
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
		}
		/** General */
		interface tab_tabUC extends DevKit.Controls.ITab {
			Section: tab_tabUC_Sections;
		}
		interface Tabs {
			/** General */
			tabUC: tab_tabUC;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Controls.Boolean;
			/** Select the field that specifies the date and time from which the SLA items will be calculated. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created. */
			ApplicableFromPickList: DevKit.Controls.OptionSet;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Controls.Lookup;
			/** Type additional information to describe the SLA */
			Description: DevKit.Controls.String;
			/** Type additional information to describe the SLA */
			Description1: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA). */
			Name: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA). */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the entity type that the SLA is defined. */
			ObjectTypeCode: DevKit.Controls.OptionSet;
			/** Shows the primary entity that the SLA has been created for. */
			PrimaryEntityOTC: DevKit.Controls.Integer;
			/** Select the type of service level agreement (SLA). */
			SLAType: DevKit.Controls.OptionSet;
			/** Record version */
			slaversion: DevKit.Controls.OptionSet;
		}
		interface Grid {
			/** SLA Items */
			SLADetails: DevKit.Controls.Grid;
			/** SLA Items */
			SLAItemsUCI: DevKit.Controls.Grid;
		}
	}
	export class FormSLA extends DevKit.IForm {
		/**
		* SLA [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form SLA */
		Body: DevKit.FormSLA.Body;
		/** The Header section of form SLA */
		Header: DevKit.FormSLA.Header;
		/** The Grid of form SLA */
		Grid: DevKit.FormSLA.Grid;
	}
	export class SLAApi {
		/**
		* DynamicsCrm.DevKit SLAApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Select whether this SLA will allow pausing and resuming during the time calculation. */
		AllowPauseResume: boolean | null;
		/** Select the field that specifies the date and time from which the SLA items will be calculated for the case record. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created.  */
		ApplicableFrom: string | null;
		/** Select the field that specifies the date and time from which the SLA items will be calculated. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created. */
		ApplicableFromPickList: OptionSet.SLA.ApplicableFromPickList | null;
		/** Choose the business hours for calculating SLA item timelines. */
		BusinessHoursId: string | null;
		/** Type additional information to describe the SLA */
		ChangedAttributeList: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SLA.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the SLA */
		Description: string | null;
		/** Exchange rate between the currency associated with the SLA record and the base currency. */
		readonly ExchangeRate: number | null;
		/** Tells whether this SLA is the default one. */
		IsDefault: boolean | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a descriptive name of the service level agreement (SLA). */
		Name: string | null;
		/** Choose the entity type that the SLA is defined. */
		readonly ObjectTypeCode: OptionSet.SLA.ObjectTypeCode | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		OwningUser: string | null;
		/** Shows the primary entity that the SLA has been created for. */
		PrimaryEntityOTC: number | null;
		/** Unique identifier of the SLA. */
		SLAId: string | null;
		/** For internal use only. */
		readonly SLAIdUnique: string | null;
		/** Select the type of service level agreement (SLA). */
		SLAType: OptionSet.SLA.SLAType | null;
		slaversion: OptionSet.SLA.slaversion | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Shows whether the Service Level Agreement (SLA) is active or inactive. */
		StateCode: OptionSet.SLA.StateCode | null;
		/** Select the status of the service level agreement (SLA). */
		StatusCode: OptionSet.SLA.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique identifier of the currency associated with the SLA record. */
		readonly TransactionCurrencyId: string | null;
		/** Version number of the SLA. */
		readonly VersionNumber: number | null;
		/** Workflow associated with the SLA. */
		WorkflowId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			readonly AllowPauseResume: string;
			/** Select the field that specifies the date and time from which the SLA items will be calculated for the case record. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created.  */
			readonly ApplicableFrom: string;
			/** Select the field that specifies the date and time from which the SLA items will be calculated. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created. */
			readonly ApplicableFromPickList: string;
			/** Choose the business hours for calculating SLA item timelines. */
			readonly BusinessHoursId: string;
			/** Type additional information to describe the SLA */
			readonly ChangedAttributeList: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the SLA */
			readonly Description: string;
			/** Exchange rate between the currency associated with the SLA record and the base currency. */
			readonly ExchangeRate: string;
			/** Tells whether this SLA is the default one. */
			readonly IsDefault: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name of the service level agreement (SLA). */
			readonly Name: string;
			/** Choose the entity type that the SLA is defined. */
			readonly ObjectTypeCode: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
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
			/** Shows the primary entity that the SLA has been created for. */
			readonly PrimaryEntityOTC: string;
			/** Unique identifier of the SLA. */
			readonly SLAId: string;
			/** For internal use only. */
			readonly SLAIdUnique: string;
			/** Select the type of service level agreement (SLA). */
			readonly SLAType: string;
			readonly slaversion: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Shows whether the Service Level Agreement (SLA) is active or inactive. */
			readonly StateCode: string;
			/** Select the status of the service level agreement (SLA). */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the currency associated with the SLA record. */
			readonly TransactionCurrencyId: string;
			/** Version number of the SLA. */
			readonly VersionNumber: string;
			/** Workflow associated with the SLA. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SLA {
		enum ApplicableFromPickList {
			/** No = 1*/
			No = 1,
			/** Yes = 2*/
			Yes = 2
		}
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum ObjectTypeCode {
			/** Account = 1*/
			Account = 1,
			/** AccountBPF = 10919*/
			AccountBPF = 10919,
			/** ACIViewMapper = 8040*/
			ACIViewMapper = 8040,
			/** Action_Approval_Model = 10133*/
			Action_Approval_Model = 10133,
			/** Action_Card = 9962*/
			Action_Card = 9962,
			/** Action_Card_Type = 9983*/
			Action_Card_Type = 9983,
			/** Action_Card_User_Settings = 9973*/
			Action_Card_User_Settings = 9973,
			/** ActionCardUserState = 9968*/
			ActionCardUserState = 9968,
			/** Activity = 4200*/
			Activity = 4200,
			/** Activity_File_Attachment = 10252*/
			Activity_File_Attachment = 10252,
			/** Activity_Party = 135*/
			Activity_Party = 135,
			/** Ad_Placement = 10414*/
			Ad_Placement = 10414,
			/** Address = 1071*/
			Address = 1071,
			/** Advanced_Similarity_Rule = 9949*/
			Advanced_Similarity_Rule = 9949,
			/** Agent_Conversation_Message = 10349*/
			Agent_Conversation_Message = 10349,
			/** Agent_Conversation_Message_File = 10350*/
			Agent_Conversation_Message_File = 10350,
			/** Agent_Feed_Item = 10920*/
			Agent_Feed_Item = 10920,
			/** Agent_Hub_Goal = 10921*/
			Agent_Hub_Goal = 10921,
			/** Agent_Hub_Insight = 10922*/
			Agent_Hub_Insight = 10922,
			/** Agent_Hub_Metric = 10923*/
			Agent_Hub_Metric = 10923,
			/** Agent_Memory = 10925*/
			Agent_Memory = 10925,
			/** Agent_Task = 10926*/
			Agent_Task = 10926,
			/** Agentic_Scenario = 10924*/
			Agentic_Scenario = 10924,
			/** AI_Builder_Dataset = 10191*/
			AI_Builder_Dataset = 10191,
			/** AI_Builder_Dataset_File = 10192*/
			AI_Builder_Dataset_File = 10192,
			/** AI_Builder_Dataset_Record = 10193*/
			AI_Builder_Dataset_Record = 10193,
			/** AI_Builder_Datasets_Container = 10194*/
			AI_Builder_Datasets_Container = 10194,
			/** AI_Builder_Feedback_Loop = 10184*/
			AI_Builder_Feedback_Loop = 10184,
			/** AI_Builder_File = 10195*/
			AI_Builder_File = 10195,
			/** AI_Builder_File_Attached_Data = 10196*/
			AI_Builder_File_Attached_Data = 10196,
			/** AI_Configuration = 402*/
			AI_Configuration = 402,
			/** AI_Configuration_Search = 10178*/
			AI_Configuration_Search = 10178,
			/** AI_Document_Template = 10180*/
			AI_Document_Template = 10180,
			/** AI_Evaluation_Configuration = 10197*/
			AI_Evaluation_Configuration = 10197,
			/** AI_Evaluation_Metric = 10198*/
			AI_Evaluation_Metric = 10198,
			/** AI_Evaluation_Run = 10199*/
			AI_Evaluation_Run = 10199,
			/** AI_Event = 10181*/
			AI_Event = 10181,
			/** AI_Form_Processing_Document = 10185*/
			AI_Form_Processing_Document = 10185,
			/** AI_Insight_Card = 10337*/
			AI_Insight_Card = 10337,
			/** AI_Model = 401*/
			AI_Model = 401,
			/** AI_Model_Catalog = 10182*/
			AI_Model_Catalog = 10182,
			/** AI_Object_Detection_Bounding_Box = 10188*/
			AI_Object_Detection_Bounding_Box = 10188,
			/** AI_Object_Detection_Image = 10186*/
			AI_Object_Detection_Image = 10186,
			/** AI_Object_Detection_Image_Mapping = 10189*/
			AI_Object_Detection_Image_Mapping = 10189,
			/** AI_Object_Detection_Label = 10187*/
			AI_Object_Detection_Label = 10187,
			/** AI_Optimization = 10200*/
			AI_Optimization = 10200,
			/** AI_Optimization_Private_Data = 10201*/
			AI_Optimization_Private_Data = 10201,
			/** AI_Plugin_Conversation_Starter = 10163*/
			AI_Plugin_Conversation_Starter = 10163,
			/** AI_Plugin_Conversation_Starter_Mapping = 10164*/
			AI_Plugin_Conversation_Starter_Mapping = 10164,
			/** AI_Plugin_Governance = 10165*/
			AI_Plugin_Governance = 10165,
			/** AI_Plugin_Governance_Extended = 10166*/
			AI_Plugin_Governance_Extended = 10166,
			/** AI_Skill_Config = 10338*/
			AI_Skill_Config = 10338,
			/** AI_Template = 400*/
			AI_Template = 400,
			/** AI_Test_Case = 10202*/
			AI_Test_Case = 10202,
			/** AI_Test_Case_Document = 10203*/
			AI_Test_Case_Document = 10203,
			/** AI_Test_Case_Input = 10204*/
			AI_Test_Case_Input = 10204,
			/** AI_Test_Run = 10205*/
			AI_Test_Run = 10205,
			/** AI_Test_Run_Batch = 10206*/
			AI_Test_Run_Batch = 10206,
			/** AICopilot = 10161*/
			AICopilot = 10161,
			/** AIPlugin = 10170*/
			AIPlugin = 10170,
			/** AIPluginAuth = 10162*/
			AIPluginAuth = 10162,
			/** AIPluginExternalSchema = 10171*/
			AIPluginExternalSchema = 10171,
			/** AIPluginExternalSchemaProperty = 10172*/
			AIPluginExternalSchemaProperty = 10172,
			/** AIPluginInstance = 10173*/
			AIPluginInstance = 10173,
			/** AIPluginOperation = 10174*/
			AIPluginOperation = 10174,
			/** AIPluginOperationParameter = 10175*/
			AIPluginOperationParameter = 10175,
			/** AIPluginOperationResponseTemplate = 10167*/
			AIPluginOperationResponseTemplate = 10167,
			/** AIPluginTitle = 10168*/
			AIPluginTitle = 10168,
			/** AIPluginUserSetting = 10176*/
			AIPluginUserSetting = 10176,
			/** Allowed_MCP_Client = 10242*/
			Allowed_MCP_Client = 10242,
			/** Analysis_Component = 10371*/
			Analysis_Component = 10371,
			/** Analysis_Job = 10372*/
			Analysis_Job = 10372,
			/** Analysis_Override = 10373*/
			Analysis_Override = 10373,
			/** Analysis_Result = 10374*/
			Analysis_Result = 10374,
			/** Analysis_Result_Detail = 10375*/
			Analysis_Result_Detail = 10375,
			/** Announcement = 132*/
			Announcement = 132,
			/** Annual_Fiscal_Calendar = 2000*/
			Annual_Fiscal_Calendar = 2000,
			/** App_Action = 10326*/
			App_Action = 10326,
			/** App_Action_Migration = 10327*/
			App_Action_Migration = 10327,
			/** App_Action_Rule = 10328*/
			App_Action_Rule = 10328,
			/** App_Config_Master = 9011*/
			App_Config_Master = 9011,
			/** App_Configuration = 9012*/
			App_Configuration = 9012,
			/** App_Configuration_Instance = 9013*/
			App_Configuration_Instance = 9013,
			/** App_Insights_Metadata = 10227*/
			App_Insights_Metadata = 10227,
			/** App_Module_Component = 9007*/
			App_Module_Component = 9007,
			/** App_Module_Roles = 9009*/
			App_Module_Roles = 9009,
			/** AppEntitySearchView = 10385*/
			AppEntitySearchView = 10385,
			/** Application = 1204*/
			Application = 1204,
			/** Application_File = 4707*/
			Application_File = 4707,
			/** Application_Ribbons = 1120*/
			Application_Ribbons = 1120,
			/** ApplicationUser = 10099*/
			ApplicationUser = 10099,
			/** AppModule_Metadata = 8700*/
			AppModule_Metadata = 8700,
			/** AppModule_Metadata_Async_Operation = 8702*/
			AppModule_Metadata_Async_Operation = 8702,
			/** AppModule_Metadata_Dependency = 8701*/
			AppModule_Metadata_Dependency = 8701,
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Approval = 10134*/
			Approval = 10134,
			/** Approval_Process = 10128*/
			Approval_Process = 10128,
			/** Approval_Request = 10135*/
			Approval_Request = 10135,
			/** Approval_Response = 10136*/
			Approval_Response = 10136,
			/** Approval_Stage_Approval = 10129*/
			Approval_Stage_Approval = 10129,
			/** Approval_Stage_Condition = 10130*/
			Approval_Stage_Condition = 10130,
			/** Approval_Stage_Intelligent = 10131*/
			Approval_Stage_Intelligent = 10131,
			/** Approval_Stage_Order = 10132*/
			Approval_Stage_Order = 10132,
			/** Approval_Step = 10137*/
			Approval_Step = 10137,
			/** ArchiveCleanupInfo = 10299*/
			ArchiveCleanupInfo = 10299,
			/** ArchiveCleanupOperation = 10300*/
			ArchiveCleanupOperation = 10300,
			/** Article = 127*/
			Article = 127,
			/** Article_Comment = 1082*/
			Article_Comment = 1082,
			/** Article_Template = 1016*/
			Article_Template = 1016,
			/** Attachment_1001 = 1001*/
			Attachment_1001 = 1001,
			/** Attachment_1002 = 1002*/
			Attachment_1002 = 1002,
			/** Attribute = 9808*/
			Attribute = 9808,
			/** Attribute_Cluster_Config = 10276*/
			Attribute_Cluster_Config = 10276,
			/** Attribute_Map = 4601*/
			Attribute_Map = 4601,
			/** Auditing = 4567*/
			Auditing = 4567,
			/** Authorization_Server = 1094*/
			Authorization_Server = 1094,
			/** Await_All_Action_Approval_Model = 10138*/
			Await_All_Action_Approval_Model = 10138,
			/** Await_All_Approval_Model = 10139*/
			Await_All_Approval_Model = 10139,
			/** Azure_Service_Connection = 9936*/
			Azure_Service_Connection = 9936,
			/** Background_Operation = 10288*/
			Background_Operation = 10288,
			/** Basic_Approval_Model_Data = 10140*/
			Basic_Approval_Model_Data = 10140,
			/** Basic_Form = 10418*/
			Basic_Form = 10418,
			/** Basic_Form_Metadata = 10419*/
			Basic_Form_Metadata = 10419,
			/** BotContent = 10209*/
			BotContent = 10209,
			/** Bulk_Delete_Failure = 4425*/
			Bulk_Delete_Failure = 4425,
			/** Bulk_Delete_Operation = 4424*/
			Bulk_Delete_Operation = 4424,
			/** BulkArchiveConfig = 10301*/
			BulkArchiveConfig = 10301,
			/** BulkArchiveFailureDetail = 10302*/
			BulkArchiveFailureDetail = 10302,
			/** BulkArchiveOperation = 10303*/
			BulkArchiveOperation = 10303,
			/** BulkArchiveOperationDetail = 10304*/
			BulkArchiveOperationDetail = 10304,
			/** Business_Data_Localized_Label = 4232*/
			Business_Data_Localized_Label = 4232,
			/** Business_Process = 10104*/
			Business_Process = 10104,
			/** Business_Process_Flow_Instance = 4725*/
			Business_Process_Flow_Instance = 4725,
			/** Business_Process_Linked_Artifact = 10589*/
			Business_Process_Linked_Artifact = 10589,
			/** Business_Unit = 10*/
			Business_Unit = 10,
			/** Business_Unit_Map = 6*/
			Business_Unit_Map = 6,
			/** Calendar = 4003*/
			Calendar = 4003,
			/** Calendar_Rule = 4004*/
			Calendar_Rule = 4004,
			/** Callback_Registration = 301*/
			Callback_Registration = 301,
			/** Canvas_App = 300*/
			Canvas_App = 300,
			/** CanvasApp_Extended_Metadata = 10095*/
			CanvasApp_Extended_Metadata = 10095,
			/** Card = 10331*/
			Card = 10331,
			/** Card_State_Item = 10332*/
			Card_State_Item = 10332,
			/** CascadeGrantRevokeAccessRecordsTracker = 10084*/
			CascadeGrantRevokeAccessRecordsTracker = 10084,
			/** CascadeGrantRevokeAccessVersionTracker = 10085*/
			CascadeGrantRevokeAccessVersionTracker = 10085,
			/** Catalog = 10033*/
			Catalog = 10033,
			/** Catalog_Assignment = 10034*/
			Catalog_Assignment = 10034,
			/** Catalog_Submission_Files = 10460*/
			Catalog_Submission_Files = 10460,
			/** Category = 9959*/
			Category = 9959,
			/** CertificateCredential = 10317*/
			CertificateCredential = 10317,
			/** Channel_Access_Profile = 3005*/
			Channel_Access_Profile = 3005,
			/** Channel_Access_Profile_Rule = 9400*/
			Channel_Access_Profile_Rule = 9400,
			/** Channel_Access_Profile_Rule_Item = 9401*/
			Channel_Access_Profile_Rule_Item = 9401,
			/** Channel_Property = 1236*/
			Channel_Property = 1236,
			/** Channel_Property_Group = 1234*/
			Channel_Property_Group = 1234,
			/** Client_update = 36*/
			Client_update = 36,
			/** Column_Mapping = 4417*/
			Column_Mapping = 4417,
			/** Column_Permission = 10415*/
			Column_Permission = 10415,
			/** Column_Permission_Profile = 10416*/
			Column_Permission_Profile = 10416,
			/** Comment_10224 = 10224*/
			Comment_10224 = 10224,
			/** Comment_8005 = 8005*/
			Comment_8005 = 8005,
			/** Component_Changeset_Payload = 10063*/
			Component_Changeset_Payload = 10063,
			/** Component_Changeset_Version = 10064*/
			Component_Changeset_Version = 10064,
			/** Component_Layer = 10006*/
			Component_Layer = 10006,
			/** Component_Layer_Data_Source = 10007*/
			Component_Layer_Data_Source = 10007,
			/** Component_Version = 10065*/
			Component_Version = 10065,
			/** Component_Version_Data_Source = 10066*/
			Component_Version_Data_Source = 10066,
			/** Component_Version_Internal = 10067*/
			Component_Version_Internal = 10067,
			/** Connection = 3234*/
			Connection = 3234,
			/** Connection_Instance = 373*/
			Connection_Instance = 373,
			/** Connection_Reference = 10150*/
			Connection_Reference = 10150,
			/** Connection_Role = 3231*/
			Connection_Role = 3231,
			/** Connection_Role_Object_Type_Code = 3233*/
			Connection_Role_Object_Type_Code = 3233,
			/** Connector = 372*/
			Connector = 372,
			/** Contact = 2*/
			Contact = 2,
			/** Content_Snippet = 10417*/
			Content_Snippet = 10417,
			/** ConversationTranscript = 10210*/
			ConversationTranscript = 10210,
			/** Copilot = 10211*/
			Copilot = 10211,
			/** Copilot_component = 10212*/
			Copilot_component = 10212,
			/** Copilot_component_collection = 10213*/
			Copilot_component_collection = 10213,
			/** Copilot_Interactions = 10250*/
			Copilot_Interactions = 10250,
			/** CopilotExampleQuestion = 10395*/
			CopilotExampleQuestion = 10395,
			/** CopilotGlossaryTerm = 10396*/
			CopilotGlossaryTerm = 10396,
			/** CopilotSynonyms = 10397*/
			CopilotSynonyms = 10397,
			/** Credential = 10105*/
			Credential = 10105,
			/** Currency = 9105*/
			Currency = 9105,
			/** Custom_API = 10036*/
			Custom_API = 10036,
			/** Custom_API_Request_Parameter = 10037*/
			Custom_API_Request_Parameter = 10037,
			/** Custom_API_Response_Property = 10038*/
			Custom_API_Response_Property = 10038,
			/** Custom_Control = 9753*/
			Custom_Control = 9753,
			/** Custom_Control_Default_Config = 9755*/
			Custom_Control_Default_Config = 9755,
			/** Custom_Control_Extended_Setting = 10352*/
			Custom_Control_Extended_Setting = 10352,
			/** Custom_Control_Resource = 9754*/
			Custom_Control_Resource = 9754,
			/** Customer_Relationship = 4502*/
			Customer_Relationship = 4502,
			/** Data_Import = 4410*/
			Data_Import = 4410,
			/** Data_Lake_Folder = 10050*/
			Data_Lake_Folder = 10050,
			/** Data_Lake_Folder_Permission = 10051*/
			Data_Lake_Folder_Permission = 10051,
			/** Data_Lake_Workspace = 10052*/
			Data_Lake_Workspace = 10052,
			/** Data_Lake_Workspace_Permission = 10053*/
			Data_Lake_Workspace_Permission = 10053,
			/** Data_Map = 4411*/
			Data_Map = 4411,
			/** Data_Movement_Service_Request = 10232*/
			Data_Movement_Service_Request = 10232,
			/** Data_Movement_Service_Request_Status = 10233*/
			Data_Movement_Service_Request_Status = 10233,
			/** Data_Performance_Dashboard = 4450*/
			Data_Performance_Dashboard = 4450,
			/** Data_Processing_configuration = 10054*/
			Data_Processing_configuration = 10054,
			/** Data_Processing_Event = 10179*/
			Data_Processing_Event = 10179,
			/** Data_Workspace = 10341*/
			Data_Workspace = 10341,
			/** Dataflow = 418*/
			Dataflow = 418,
			/** Dataflow_Connection_Reference = 10228*/
			Dataflow_Connection_Reference = 10228,
			/** Dataflow_DatalakeFolder = 10231*/
			Dataflow_DatalakeFolder = 10231,
			/** Dataflow_Template = 10230*/
			Dataflow_Template = 10230,
			/** DataflowRefreshHistory = 10079*/
			DataflowRefreshHistory = 10079,
			/** DelegatedAuthorization = 10082*/
			DelegatedAuthorization = 10082,
			/** Deleted_Record_Reference = 10324*/
			Deleted_Record_Reference = 10324,
			/** DelveActionHub = 9961*/
			DelveActionHub = 9961,
			/** Dependency = 7105*/
			Dependency = 7105,
			/** Dependency_Feature = 7108*/
			Dependency_Feature = 7108,
			/** Dependency_Node = 7106*/
			Dependency_Node = 7106,
			/** Desktop_Flow_Binary = 10124*/
			Desktop_Flow_Binary = 10124,
			/** Desktop_Flow_Module = 10106*/
			Desktop_Flow_Module = 10106,
			/** Display_String = 4102*/
			Display_String = 4102,
			/** Display_String_Map = 4101*/
			Display_String_Map = 4101,
			/** DMS_Sync_Request = 10234*/
			DMS_Sync_Request = 10234,
			/** DMS_Sync_Status = 10235*/
			DMS_Sync_Status = 10235,
			/** Document_Location = 9508*/
			Document_Location = 9508,
			/** Document_Suggestions = 1189*/
			Document_Suggestions = 1189,
			/** Document_Template = 9940*/
			Document_Template = 9940,
			/** Duplicate_Detection_Rule = 4414*/
			Duplicate_Detection_Rule = 4414,
			/** Duplicate_Record = 4415*/
			Duplicate_Record = 4415,
			/** Duplicate_Rule_Condition = 4416*/
			Duplicate_Rule_Condition = 4416,
			/** DVFileSearch = 10155*/
			DVFileSearch = 10155,
			/** DVFileSearchAttribute = 10156*/
			DVFileSearchAttribute = 10156,
			/** DVFileSearchEntity = 10157*/
			DVFileSearchEntity = 10157,
			/** DVTableSearch = 10158*/
			DVTableSearch = 10158,
			/** DVTableSearchAttribute = 10159*/
			DVTableSearchAttribute = 10159,
			/** DVTableSearchEntity = 10160*/
			DVTableSearchEntity = 10160,
			/** ElasticFileAttachment = 7755*/
			ElasticFileAttachment = 7755,
			/** Email = 4202*/
			Email = 4202,
			/** Email_Address_Configuration = 10285*/
			Email_Address_Configuration = 10285,
			/** Email_Hash = 4023*/
			Email_Hash = 4023,
			/** Email_Search = 4299*/
			Email_Search = 4299,
			/** Email_Server_Profile = 9605*/
			Email_Server_Profile = 9605,
			/** Email_Signature = 9997*/
			Email_Signature = 9997,
			/** Email_Template = 2010*/
			Email_Template = 2010,
			/** EnableArchivalRequest = 10305*/
			EnableArchivalRequest = 10305,
			/** Entity = 9800*/
			Entity = 9800,
			/** Entity_Analytics_Config = 430*/
			Entity_Analytics_Config = 430,
			/** Entity_Cluster_Configuration = 10277*/
			Entity_Cluster_Configuration = 10277,
			/** Entity_Image_Configuration = 432*/
			Entity_Image_Configuration = 432,
			/** Entity_Index = 9815*/
			Entity_Index = 9815,
			/** Entity_Key = 9810*/
			Entity_Key = 9810,
			/** Entity_link_chat_configuration = 10335*/
			Entity_link_chat_configuration = 10335,
			/** Entity_Map = 4600*/
			Entity_Map = 4600,
			/** Entity_Relationship = 9811*/
			Entity_Relationship = 9811,
			/** EntityRecordFilter = 73*/
			EntityRecordFilter = 73,
			/** EntityRefreshHistory = 10080*/
			EntityRefreshHistory = 10080,
			/** Environment_Variable_Definition = 380*/
			Environment_Variable_Definition = 380,
			/** Environment_Variable_Value = 381*/
			Environment_Variable_Value = 381,
			/** Event_Expander_Breadcrumb = 5006*/
			Event_Expander_Breadcrumb = 5006,
			/** Exchange_Sync_Id_Mapping = 4120*/
			Exchange_Sync_Id_Mapping = 4120,
			/** Expander_Event = 4711*/
			Expander_Event = 4711,
			/** Expired_Process = 955*/
			Expired_Process = 955,
			/** Exported_Excel = 10055*/
			Exported_Excel = 10055,
			/** ExportSolutionUpload = 10012*/
			ExportSolutionUpload = 10012,
			/** External_Identity = 10405*/
			External_Identity = 10405,
			/** External_Party = 3008*/
			External_Party = 3008,
			/** External_Party_Item = 9987*/
			External_Party_Item = 9987,
			/** Fabric_AISkill = 10226*/
			Fabric_AISkill = 10226,
			/** Favorite_knowledge_article = 10265*/
			Favorite_knowledge_article = 10265,
			/** Fax = 4204*/
			Fax = 4204,
			/** FeatureControlSetting = 10013*/
			FeatureControlSetting = 10013,
			/** FederatedKnowledgeCitation = 10243*/
			FederatedKnowledgeCitation = 10243,
			/** FederatedKnowledgeConfiguration = 10244*/
			FederatedKnowledgeConfiguration = 10244,
			/** FederatedKnowledgeEntityConfiguration = 10245*/
			FederatedKnowledgeEntityConfiguration = 10245,
			/** FederatedKnowledgeMetadataRefresh = 10246*/
			FederatedKnowledgeMetadataRefresh = 10246,
			/** Feedback = 9958*/
			Feedback = 9958,
			/** Field_Permission = 1201*/
			Field_Permission = 1201,
			/** Field_Security_Profile = 1200*/
			Field_Security_Profile = 1200,
			/** Field_Sharing = 44*/
			Field_Sharing = 44,
			/** File_Upload = 10384*/
			File_Upload = 10384,
			/** FileAttachment = 55*/
			FileAttachment = 55,
			/** Filter_Template = 30*/
			Filter_Template = 30,
			/** Fixed_Monthly_Fiscal_Calendar = 2004*/
			Fixed_Monthly_Fiscal_Calendar = 2004,
			/** Flow_Aggregation = 10125*/
			Flow_Aggregation = 10125,
			/** Flow_Approval = 10141*/
			Flow_Approval = 10141,
			/** Flow_Capacity_Assignment = 10107*/
			Flow_Capacity_Assignment = 10107,
			/** Flow_Credential_Application = 10108*/
			Flow_Credential_Application = 10108,
			/** Flow_Event = 10109*/
			Flow_Event = 10109,
			/** Flow_Log = 10126*/
			Flow_Log = 10126,
			/** Flow_Machine = 10110*/
			Flow_Machine = 10110,
			/** Flow_Machine_Group = 10111*/
			Flow_Machine_Group = 10111,
			/** Flow_Machine_Image = 10112*/
			Flow_Machine_Image = 10112,
			/** Flow_Machine_Image_Version = 10113*/
			Flow_Machine_Image_Version = 10113,
			/** Flow_Machine_Network = 10114*/
			Flow_Machine_Network = 10114,
			/** Flow_Run = 10127*/
			Flow_Run = 10127,
			/** Flow_Session = 4720*/
			Flow_Session = 4720,
			/** Flow_Session_Binary = 10115*/
			Flow_Session_Binary = 10115,
			/** Follow = 8003*/
			Follow = 8003,
			/** Form_Mapping = 10249*/
			Form_Mapping = 10249,
			/** Form_Step = 10434*/
			Form_Step = 10434,
			/** Function = 10280*/
			Function = 10280,
			/** FxExpression = 10279*/
			FxExpression = 10279,
			/** Git_Branch = 10068*/
			Git_Branch = 10068,
			/** Git_Configuration_Retrieval_Data_Source = 10069*/
			Git_Configuration_Retrieval_Data_Source = 10069,
			/** Git_Organization = 10070*/
			Git_Organization = 10070,
			/** Git_Project = 10071*/
			Git_Project = 10071,
			/** Git_Repository = 10072*/
			Git_Repository = 10072,
			/** Git_Solution = 10073*/
			Git_Solution = 10073,
			/** Global_Search_Configuration = 54*/
			Global_Search_Configuration = 54,
			/** Goal = 9600*/
			Goal = 9600,
			/** Goal_Metric = 9603*/
			Goal_Metric = 9603,
			/** Governance_Configuration = 10225*/
			Governance_Configuration = 10225,
			/** Healthcare_Feedback = 10586*/
			Healthcare_Feedback = 10586,
			/** Help_Page = 10207*/
			Help_Page = 10207,
			/** Hierarchy_Rule = 8840*/
			Hierarchy_Rule = 8840,
			/** Hierarchy_Security_Configuration = 9919*/
			Hierarchy_Security_Configuration = 9919,
			/** HolidayWrapper = 9996*/
			HolidayWrapper = 9996,
			/** Image_Attribute_Configuration = 431*/
			Image_Attribute_Configuration = 431,
			/** Image_Descriptor = 1007*/
			Image_Descriptor = 1007,
			/** Import_Data = 4413*/
			Import_Data = 4413,
			/** Import_Entity_Mapping = 4428*/
			Import_Entity_Mapping = 4428,
			/** Import_Job = 9107*/
			Import_Job = 9107,
			/** Import_Log = 4423*/
			Import_Log = 4423,
			/** Import_Source_File = 4412*/
			Import_Source_File = 4412,
			/** Index_Attribute = 9816*/
			Index_Attribute = 9816,
			/** Indexed_Article = 126*/
			Indexed_Article = 126,
			/** indexedtrait = 10462*/
			indexedtrait = 10462,
			/** Insights_Store_Data_Source = 10321*/
			Insights_Store_Data_Source = 10321,
			/** Insights_Store_Virtual_Entity = 10322*/
			Insights_Store_Virtual_Entity = 10322,
			/** Integrated_search_provider = 10256*/
			Integrated_search_provider = 10256,
			/** Integration_Status = 3000*/
			Integration_Status = 3000,
			/** IntelligentMemory = 10247*/
			IntelligentMemory = 10247,
			/** Inter_Process_Lock = 4011*/
			Inter_Process_Lock = 4011,
			/** Interaction_for_Email = 9986*/
			Interaction_for_Email = 9986,
			/** Interim_Update_Knowledge_Article = 10705*/
			Interim_Update_Knowledge_Article = 10705,
			/** Internal_Address = 1003*/
			Internal_Address = 1003,
			/** Internal_Catalog_Assignment = 10035*/
			Internal_Catalog_Assignment = 10035,
			/** Invalid_Dependency = 7107*/
			Invalid_Dependency = 7107,
			/** Invitation = 10406*/
			Invitation = 10406,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** ISV_Config = 4705*/
			ISV_Config = 4705,
			/** Key_Vault_Reference = 10031*/
			Key_Vault_Reference = 10031,
			/** Knowledge_Article = 9953*/
			Knowledge_Article = 9953,
			/** Knowledge_Article_Attachment = 10267*/
			Knowledge_Article_Attachment = 10267,
			/** Knowledge_Article_Category = 9960*/
			Knowledge_Article_Category = 9960,
			/** Knowledge_Article_Custom_Entity = 10706*/
			Knowledge_Article_Custom_Entity = 10706,
			/** Knowledge_Article_Image = 10261*/
			Knowledge_Article_Image = 10261,
			/** Knowledge_article_language_setting = 10266*/
			Knowledge_article_language_setting = 10266,
			/** Knowledge_Article_Template = 10269*/
			Knowledge_Article_Template = 10269,
			/** Knowledge_Article_Views = 9955*/
			Knowledge_Article_Views = 9955,
			/** Knowledge_Asset_Configuration = 10236*/
			Knowledge_Asset_Configuration = 10236,
			/** Knowledge_Base_Record = 9930*/
			Knowledge_Base_Record = 9930,
			/** Knowledge_Configuration = 10262*/
			Knowledge_Configuration = 10262,
			/** Knowledge_FAQ = 10248*/
			Knowledge_FAQ = 10248,
			/** Knowledge_Federated_Article = 10258*/
			Knowledge_Federated_Article = 10258,
			/** Knowledge_Federated_Article_Incident = 10259*/
			Knowledge_Federated_Article_Incident = 10259,
			/** Knowledge_Harvest_Job_Record = 10275*/
			Knowledge_Harvest_Job_Record = 10275,
			/** Knowledge_Interaction_Insight = 10263*/
			Knowledge_Interaction_Insight = 10263,
			/** Knowledge_Management_Setting = 10257*/
			Knowledge_Management_Setting = 10257,
			/** Knowledge_personalization = 10268*/
			Knowledge_personalization = 10268,
			/** Knowledge_search_filter = 10271*/
			Knowledge_search_filter = 10271,
			/** Knowledge_Search_Insight = 10264*/
			Knowledge_Search_Insight = 10264,
			/** Knowledge_Search_Model = 9947*/
			Knowledge_Search_Model = 9947,
			/** Knowledge_search_personal_filter_config = 10270*/
			Knowledge_search_personal_filter_config = 10270,
			/** Knowledge_Source_Consumer = 10151*/
			Knowledge_Source_Consumer = 10151,
			/** Knowledge_Source_Profile = 10152*/
			Knowledge_Source_Profile = 10152,
			/** Language = 9957*/
			Language = 9957,
			/** Language_Provisioning_State = 9875*/
			Language_Provisioning_State = 9875,
			/** Letter = 4207*/
			Letter = 4207,
			/** License = 2027*/
			License = 2027,
			/** Like = 8006*/
			Like = 8006,
			/** List = 10420*/
			List = 10420,
			/** List_Value_Mapping = 4418*/
			List_Value_Mapping = 4418,
			/** LocalConfigStore = 9201*/
			LocalConfigStore = 9201,
			/** Lookup_Mapping = 4419*/
			Lookup_Mapping = 4419,
			/** Mail_Merge_Template = 9106*/
			Mail_Merge_Template = 9106,
			/** Mailbox = 9606*/
			Mailbox = 9606,
			/** Mailbox_Auto_Tracking_Folder = 9608*/
			Mailbox_Auto_Tracking_Folder = 9608,
			/** Mailbox_Statistics = 9607*/
			Mailbox_Statistics = 9607,
			/** Mailbox_Tracking_Category = 9609*/
			Mailbox_Tracking_Category = 9609,
			/** MainFewShot = 10386*/
			MainFewShot = 10386,
			/** MakerFewShot = 10387*/
			MakerFewShot = 10387,
			/** Managed_Identity = 10032*/
			Managed_Identity = 10032,
			/** Managed_Property = 9812*/
			Managed_Property = 9812,
			/** MCPServer = 10708*/
			MCPServer = 10708,
			/** MCPTool = 10709*/
			MCPTool = 10709,
			/** Metadata_Difference = 4231*/
			Metadata_Difference = 4231,
			/** MetadataForArchival = 10306*/
			MetadataForArchival = 10306,
			/** Microsoft_Entra_ID = 10018*/
			Microsoft_Entra_ID = 10018,
			/** Mobile_App = 10320*/
			Mobile_App = 10320,
			/** Mobile_Offline_Profile = 9866*/
			Mobile_Offline_Profile = 9866,
			/** Mobile_Offline_Profile_Item = 9867*/
			Mobile_Offline_Profile_Item = 9867,
			/** Mobile_Offline_Profile_Item_Association = 9868*/
			Mobile_Offline_Profile_Item_Association = 9868,
			/** MobileOfflineProfileExtension = 10290*/
			MobileOfflineProfileExtension = 10290,
			/** MobileOfflineProfileItemFilter = 10291*/
			MobileOfflineProfileItemFilter = 10291,
			/** Model_driven_App = 9006*/
			Model_driven_App = 9006,
			/** Model_Driven_App_Component_Node = 10090*/
			Model_Driven_App_Component_Node = 10090,
			/** Model_Driven_App_Component_Nodes_Edge = 10089*/
			Model_Driven_App_Component_Nodes_Edge = 10089,
			/** Model_Driven_App_Element = 10088*/
			Model_Driven_App_Element = 10088,
			/** Model_Driven_App_Setting = 10091*/
			Model_Driven_App_Setting = 10091,
			/** Model_Driven_App_User_Setting = 10092*/
			Model_Driven_App_User_Setting = 10092,
			/** Module_Run_Detail = 10237*/
			Module_Run_Detail = 10237,
			/** Monthly_Fiscal_Calendar = 2003*/
			Monthly_Fiscal_Calendar = 2003,
			/** Ms_Graph_Resource_To_Subscription = 10286*/
			Ms_Graph_Resource_To_Subscription = 10286,
			/** msdyn_historicalcaseharvestbatch = 10273*/
			msdyn_historicalcaseharvestbatch = 10273,
			/** msdyn_historicalcaseharvestrun = 10274*/
			msdyn_historicalcaseharvestrun = 10274,
			/** Multi_Select_Option_Value = 9912*/
			Multi_Select_Option_Value = 9912,
			/** MultiEntitySearch = 9910*/
			MultiEntitySearch = 9910,
			/** Multistep_Form = 10432*/
			Multistep_Form = 10432,
			/** Multistep_Form_Metadata = 10433*/
			Multistep_Form_Metadata = 10433,
			/** Multistep_Form_Session = 10410*/
			Multistep_Form_Session = 10410,
			/** Navigation_Setting = 9900*/
			Navigation_Setting = 9900,
			/** New_Process = 950*/
			New_Process = 950,
			/** NL2SQ_Registration_Information = 5004*/
			NL2SQ_Registration_Information = 5004,
			/** NonRelational_Data_Source = 10041*/
			NonRelational_Data_Source = 10041,
			/** Note = 5*/
			Note = 5,
			/** Notification_10318 = 10318*/
			Notification_10318 = 10318,
			/** Notification_4110 = 4110*/
			Notification_4110 = 4110,
			/** Object_Detection_Product = 10587*/
			Object_Detection_Product = 10587,
			/** OData_v4_Data_Source = 10102*/
			OData_v4_Data_Source = 10102,
			/** Office_Document = 4490*/
			Office_Document = 4490,
			/** Office_Graph_Document = 9950*/
			Office_Graph_Document = 9950,
			/** Offline_Command_Definition = 9870*/
			Offline_Command_Definition = 9870,
			/** Online_Shopper_Intention = 10588*/
			Online_Shopper_Intention = 10588,
			/** Option_Set_Value = 9817*/
			Option_Set_Value = 9817,
			/** OptionSet = 9809*/
			OptionSet = 9809,
			/** Organization = 1019*/
			Organization = 1019,
			/** Organization_Insights_Metric = 9699*/
			Organization_Insights_Metric = 9699,
			/** Organization_Insights_Notification = 9690*/
			Organization_Insights_Notification = 9690,
			/** Organization_Setting = 10093*/
			Organization_Setting = 10093,
			/** Organization_Statistic = 4708*/
			Organization_Statistic = 4708,
			/** Organization_UI = 1021*/
			Organization_UI = 1021,
			/** OrganizationDataSyncFnoState = 10297*/
			OrganizationDataSyncFnoState = 10297,
			/** OrganizationDataSyncState = 10298*/
			OrganizationDataSyncState = 10298,
			/** OrganizationDataSyncSubscription = 10294*/
			OrganizationDataSyncSubscription = 10294,
			/** OrganizationDataSyncSubscriptionEntity = 10295*/
			OrganizationDataSyncSubscriptionEntity = 10295,
			/** OrganizationDataSyncSubscriptionFnoTable = 10296*/
			OrganizationDataSyncSubscriptionFnoTable = 10296,
			/** Owner = 7*/
			Owner = 7,
			/** Owner_Mapping = 4420*/
			Owner_Mapping = 4420,
			/** Package = 10008*/
			Package = 10008,
			/** Package_History = 10009*/
			Package_History = 10009,
			/** Package_Submission_Store = 10461*/
			Package_Submission_Store = 10461,
			/** Page_Template = 10422*/
			Page_Template = 10422,
			/** Partner_Application = 1095*/
			Partner_Application = 1095,
			/** PDF_Setting = 10251*/
			PDF_Setting = 10251,
			/** Personal_Document_Template = 9941*/
			Personal_Document_Template = 9941,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Plan = 10342*/
			Plan = 10342,
			/** Plan_Artifact = 10343*/
			Plan_Artifact = 10343,
			/** Plan_Attachment = 10344*/
			Plan_Attachment = 10344,
			/** Planner_Business_Scenario = 10283*/
			Planner_Business_Scenario = 10283,
			/** Planner_Sync_Action = 10284*/
			Planner_Sync_Action = 10284,
			/** Plug_in = 10281*/
			Plug_in = 10281,
			/** Plug_in_Assembly = 4605*/
			Plug_in_Assembly = 4605,
			/** Plug_in_Trace_Log = 4619*/
			Plug_in_Trace_Log = 4619,
			/** Plug_in_Type = 4602*/
			Plug_in_Type = 4602,
			/** Plug_in_Type_Statistic = 4603*/
			Plug_in_Type_Statistic = 4603,
			/** Plugin_Package = 10039*/
			Plugin_Package = 10039,
			/** PM_Analysis_History = 10357*/
			PM_Analysis_History = 10357,
			/** PM_Business_Rule_Automation_Config = 10358*/
			PM_Business_Rule_Automation_Config = 10358,
			/** PM_Calendar = 10359*/
			PM_Calendar = 10359,
			/** PM_Calendar_Version = 10360*/
			PM_Calendar_Version = 10360,
			/** PM_Inferred_Task = 10361*/
			PM_Inferred_Task = 10361,
			/** PM_Process_Extended_Metadata_Version = 10362*/
			PM_Process_Extended_Metadata_Version = 10362,
			/** PM_Process_Template = 10363*/
			PM_Process_Template = 10363,
			/** PM_Process_User_Settings = 10364*/
			PM_Process_User_Settings = 10364,
			/** PM_Process_Version = 10365*/
			PM_Process_Version = 10365,
			/** PM_Recording = 10366*/
			PM_Recording = 10366,
			/** PM_Simulation = 10367*/
			PM_Simulation = 10367,
			/** PM_Tab = 10368*/
			PM_Tab = 10368,
			/** PM_Template = 10369*/
			PM_Template = 10369,
			/** PM_View = 10370*/
			PM_View = 10370,
			/** Poll_Placement = 10423*/
			Poll_Placement = 10423,
			/** Portal_Comment = 10408*/
			Portal_Comment = 10408,
			/** Position = 50*/
			Position = 50,
			/** Post = 8000*/
			Post = 8000,
			/** Post_Regarding = 8002*/
			Post_Regarding = 8002,
			/** Post_Role = 8001*/
			Post_Role = 8001,
			/** Power_BI_Dataset = 10379*/
			Power_BI_Dataset = 10379,
			/** Power_BI_Mashup_Parameter = 10381*/
			Power_BI_Mashup_Parameter = 10381,
			/** Power_BI_Report = 10382*/
			Power_BI_Report = 10382,
			/** Power_Pages_Core_Entity_DS = 10424*/
			Power_Pages_Core_Entity_DS = 10424,
			/** Power_Pages_Log = 10452*/
			Power_Pages_Log = 10452,
			/** Power_Pages_Scan_Report = 10450*/
			Power_Pages_Scan_Report = 10450,
			/** Power_Pages_Site_AI_Feedback = 10454*/
			Power_Pages_Site_AI_Feedback = 10454,
			/** Power_Pages_Site_Published = 10401*/
			Power_Pages_Site_Published = 10401,
			/** powerbidatasetapdx = 10380*/
			powerbidatasetapdx = 10380,
			/** powerbireportapdx = 10383*/
			powerbireportapdx = 10383,
			/** PowerfxRule = 10282*/
			PowerfxRule = 10282,
			/** PowerPagesDDOSAlert = 10451*/
			PowerPagesDDOSAlert = 10451,
			/** PowerPagesManagedIdentity = 10453*/
			PowerPagesManagedIdentity = 10453,
			/** Principal_Sync_Attribute_Map = 1404*/
			Principal_Sync_Attribute_Map = 1404,
			/** Privilege = 1023*/
			Privilege = 1023,
			/** Privilege_Checker_Log = 76*/
			Privilege_Checker_Log = 76,
			/** Privilege_Checker_Run = 75*/
			Privilege_Checker_Run = 75,
			/** Privilege_Object_Type_Code = 31*/
			Privilege_Object_Type_Code = 31,
			/** Privileges_Removal_Setting = 103*/
			Privileges_Removal_Setting = 103,
			/** Process = 4703*/
			Process = 4703,
			/** Process_Configuration = 9650*/
			Process_Configuration = 9650,
			/** Process_Dependency = 4704*/
			Process_Dependency = 4704,
			/** Process_Log = 4706*/
			Process_Log = 4706,
			/** Process_Session = 4710*/
			Process_Session = 4710,
			/** Process_Stage = 4724*/
			Process_Stage = 4724,
			/** Process_Trigger = 4712*/
			Process_Trigger = 4712,
			/** processor_registration = 10463*/
			processor_registration = 10463,
			/** ProcessStageParameter = 10116*/
			ProcessStageParameter = 10116,
			/** ProvisionLanguageForUser = 10042*/
			ProvisionLanguageForUser = 10042,
			/** Publisher = 7101*/
			Publisher = 7101,
			/** Publisher_Address = 7102*/
			Publisher_Address = 7102,
			/** Publishing_State = 10425*/
			Publishing_State = 10425,
			/** Publishing_State_Transition_Rule = 10426*/
			Publishing_State_Transition_Rule = 10426,
			/** Purview_Label_Info = 10043*/
			Purview_Label_Info = 10043,
			/** Purview_Label_Sync_Cache = 10044*/
			Purview_Label_Sync_Cache = 10044,
			/** QnA = 10238*/
			QnA = 10238,
			/** Quarterly_Fiscal_Calendar = 2002*/
			Quarterly_Fiscal_Calendar = 2002,
			/** Queue = 2020*/
			Queue = 2020,
			/** Queue_Item = 2029*/
			Queue_Item = 2029,
			/** QueueItemCount = 2023*/
			QueueItemCount = 2023,
			/** QueueMemberCount = 2024*/
			QueueMemberCount = 2024,
			/** Recently_Used = 5000*/
			Recently_Used = 5000,
			/** ReconciliationEntityInfo = 10307*/
			ReconciliationEntityInfo = 10307,
			/** ReconciliationEntityStepInfo = 10308*/
			ReconciliationEntityStepInfo = 10308,
			/** ReconciliationInfo = 10309*/
			ReconciliationInfo = 10309,
			/** Record_Creation_and_Update_Rule = 9300*/
			Record_Creation_and_Update_Rule = 9300,
			/** Record_Creation_and_Update_Rule_Item = 9301*/
			Record_Creation_and_Update_Rule_Item = 9301,
			/** Record_Filter = 72*/
			Record_Filter = 72,
			/** Recurrence_Rule = 4250*/
			Recurrence_Rule = 4250,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Redirect = 10427*/
			Redirect = 10427,
			/** Relationship_Attribute = 9814*/
			Relationship_Attribute = 9814,
			/** Relationship_Entity = 9813*/
			Relationship_Entity = 9813,
			/** Relationship_Role = 4500*/
			Relationship_Role = 4500,
			/** Relationship_Role_Map = 4501*/
			Relationship_Role_Map = 4501,
			/** Replication_Backlog = 1140*/
			Replication_Backlog = 1140,
			/** Report = 9100*/
			Report = 9100,
			/** Report_Link = 9104*/
			Report_Link = 9104,
			/** Report_Parameter = 10289*/
			Report_Parameter = 10289,
			/** Report_Related_Category = 9102*/
			Report_Related_Category = 9102,
			/** Report_Related_Entity = 9101*/
			Report_Related_Entity = 9101,
			/** Report_Visibility = 9103*/
			Report_Visibility = 9103,
			/** Restore_Deleted_Records_Configuration = 10325*/
			Restore_Deleted_Records_Configuration = 10325,
			/** RetainedData_Excel = 10056*/
			RetainedData_Excel = 10056,
			/** RetentionCleanupInfo = 10310*/
			RetentionCleanupInfo = 10310,
			/** RetentionCleanupOperation = 10311*/
			RetentionCleanupOperation = 10311,
			/** RetentionConfig = 10312*/
			RetentionConfig = 10312,
			/** RetentionFailureDetail = 10313*/
			RetentionFailureDetail = 10313,
			/** RetentionOperation = 10314*/
			RetentionOperation = 10314,
			/** RetentionOperationDetail = 10315*/
			RetentionOperationDetail = 10315,
			/** RetentionSuccessDetail = 10316*/
			RetentionSuccessDetail = 10316,
			/** RevokeInheritedAccessRecordsTracker = 10086*/
			RevokeInheritedAccessRecordsTracker = 10086,
			/** Ribbon_Client_Metadata = 4579*/
			Ribbon_Client_Metadata = 4579,
			/** Ribbon_Command = 1116*/
			Ribbon_Command = 1116,
			/** Ribbon_Context_Group = 1115*/
			Ribbon_Context_Group = 1115,
			/** Ribbon_Difference = 1130*/
			Ribbon_Difference = 1130,
			/** Ribbon_Metadata_To_Process = 9880*/
			Ribbon_Metadata_To_Process = 9880,
			/** Ribbon_Rule = 1117*/
			Ribbon_Rule = 1117,
			/** Ribbon_Tab_To_Command_Mapping = 1113*/
			Ribbon_Tab_To_Command_Mapping = 1113,
			/** Rich_Text_Attachment = 10351*/
			Rich_Text_Attachment = 10351,
			/** Role_Template = 1037*/
			Role_Template = 1037,
			/** RoleEditorLayout = 10323*/
			RoleEditorLayout = 10323,
			/** Rollup_Field = 9604*/
			Rollup_Field = 9604,
			/** Rollup_Job = 9511*/
			Rollup_Job = 9511,
			/** Rollup_Properties = 9510*/
			Rollup_Properties = 9510,
			/** Rollup_Query = 9602*/
			Rollup_Query = 9602,
			/** Routing_Rule_Set = 8181*/
			Routing_Rule_Set = 8181,
			/** Rule_Item = 8199*/
			Rule_Item = 8199,
			/** RuntimeDependency = 7200*/
			RuntimeDependency = 7200,
			/** Salesforce_Structured_Object = 10239*/
			Salesforce_Structured_Object = 10239,
			/** Salesforce_Structured_QnA_Config = 10240*/
			Salesforce_Structured_QnA_Config = 10240,
			/** Saved_Organization_Insights_Configuration = 1309*/
			Saved_Organization_Insights_Configuration = 1309,
			/** Saved_View = 4230*/
			Saved_View = 4230,
			/** Saving_Rule = 10117*/
			Saving_Rule = 10117,
			/** Schedule = 10229*/
			Schedule = 10229,
			/** Sdk_Message = 4606*/
			Sdk_Message = 4606,
			/** Sdk_Message_Filter = 4607*/
			Sdk_Message_Filter = 4607,
			/** Sdk_Message_Pair = 4613*/
			Sdk_Message_Pair = 4613,
			/** Sdk_Message_Processing_Step = 4608*/
			Sdk_Message_Processing_Step = 4608,
			/** Sdk_Message_Processing_Step_Image = 4615*/
			Sdk_Message_Processing_Step_Image = 4615,
			/** Sdk_Message_Processing_Step_Secure_Configuration = 4616*/
			Sdk_Message_Processing_Step_Secure_Configuration = 4616,
			/** Sdk_Message_Request = 4609*/
			Sdk_Message_Request = 4609,
			/** Sdk_Message_Request_Field = 4614*/
			Sdk_Message_Request_Field = 4614,
			/** Sdk_Message_Response = 4610*/
			Sdk_Message_Response = 4610,
			/** Sdk_Message_Response_Field = 4611*/
			Sdk_Message_Response_Field = 4611,
			/** Search_provider = 10260*/
			Search_provider = 10260,
			/** Search_Telemetry = 10392*/
			Search_Telemetry = 10392,
			/** SearchAttributeSettings = 10388*/
			SearchAttributeSettings = 10388,
			/** SearchCustomAnalyzer = 10389*/
			SearchCustomAnalyzer = 10389,
			/** SearchRelationshipSettings = 10390*/
			SearchRelationshipSettings = 10390,
			/** SearchResultsCache = 10391*/
			SearchResultsCache = 10391,
			/** Secured_Masking_Column = 9820*/
			Secured_Masking_Column = 9820,
			/** Secured_Masking_Rule = 74*/
			Secured_Masking_Rule = 74,
			/** Security_Role = 1036*/
			Security_Role = 1036,
			/** Semiannual_Fiscal_Calendar = 2001*/
			Semiannual_Fiscal_Calendar = 2001,
			/** Sensitivity_Label = 10040*/
			Sensitivity_Label = 10040,
			/** Sensitivity_Label_Attribute_Mapping = 10045*/
			Sensitivity_Label_Attribute_Mapping = 10045,
			/** Service_Configuration = 10254*/
			Service_Configuration = 10254,
			/** Service_Endpoint = 4618*/
			Service_Endpoint = 4618,
			/** Service_Plan = 101*/
			Service_Plan = 101,
			/** Service_Plan_Custom_Control = 10097*/
			Service_Plan_Custom_Control = 10097,
			/** Service_Plan_Mapping = 10096*/
			Service_Plan_Mapping = 10096,
			/** Setting = 10409*/
			Setting = 10409,
			/** Setting_Definition = 10094*/
			Setting_Definition = 10094,
			/** Shared_Link_Setting = 10081*/
			Shared_Link_Setting = 10081,
			/** Shared_Object = 10046*/
			Shared_Object = 10046,
			/** Shared_Workspace = 10047*/
			Shared_Workspace = 10047,
			/** Shared_Workspace_Access_Token = 10048*/
			Shared_Workspace_Access_Token = 10048,
			/** Shared_Workspace_Pool = 10049*/
			Shared_Workspace_Pool = 10049,
			/** SharePoint_Data = 9509*/
			SharePoint_Data = 9509,
			/** Sharepoint_Document = 9507*/
			Sharepoint_Document = 9507,
			/** SharePoint_Managed_Identity = 10336*/
			SharePoint_Managed_Identity = 10336,
			/** SharePoint_Site = 9502*/
			SharePoint_Site = 9502,
			/** Shortcut = 10428*/
			Shortcut = 10428,
			/** SideloadedAIPlugin = 10169*/
			SideloadedAIPlugin = 10169,
			/** signal = 10464*/
			signal = 10464,
			/** signal_registration = 10465*/
			signal_registration = 10465,
			/** Similarity_Rule = 9951*/
			Similarity_Rule = 9951,
			/** Site = 10399*/
			Site = 10399,
			/** Site_Component = 10398*/
			Site_Component = 10398,
			/** Site_Language = 10400*/
			Site_Language = 10400,
			/** Site_Map = 4709*/
			Site_Map = 4709,
			/** Site_Marker = 10429*/
			Site_Marker = 10429,
			/** Site_Setting = 10430*/
			Site_Setting = 10430,
			/** Site_Source_File = 10402*/
			Site_Source_File = 10402,
			/** SLA = 9750*/
			SLA = 9750,
			/** SLA_Item = 9751*/
			SLA_Item = 9751,
			/** SLA_KPI = 10255*/
			SLA_KPI = 10255,
			/** SLA_KPI_Instance = 9752*/
			SLA_KPI_Instance = 9752,
			/** Social_Activity = 4216*/
			Social_Activity = 4216,
			/** Social_Profile = 99*/
			Social_Profile = 99,
			/** SocialInsightsConfiguration = 1300*/
			SocialInsightsConfiguration = 1300,
			/** Solution = 7100*/
			Solution = 7100,
			/** Solution_Component = 7103*/
			Solution_Component = 7103,
			/** Solution_Component_Attribute_Configuration = 10000*/
			Solution_Component_Attribute_Configuration = 10000,
			/** Solution_Component_Batch_Configuration = 10001*/
			Solution_Component_Batch_Configuration = 10001,
			/** Solution_Component_Configuration = 10002*/
			Solution_Component_Configuration = 10002,
			/** Solution_Component_Count_Data_Source = 10017*/
			Solution_Component_Count_Data_Source = 10017,
			/** Solution_Component_Count_Summary = 10015*/
			Solution_Component_Count_Summary = 10015,
			/** Solution_Component_Data_Source = 10016*/
			Solution_Component_Data_Source = 10016,
			/** Solution_Component_Definition = 7104*/
			Solution_Component_Definition = 7104,
			/** Solution_Component_Relationship_Configuration = 10003*/
			Solution_Component_Relationship_Configuration = 10003,
			/** Solution_Component_Summary = 10014*/
			Solution_Component_Summary = 10014,
			/** Solution_Health_Rule = 10376*/
			Solution_Health_Rule = 10376,
			/** Solution_Health_Rule_Argument = 10377*/
			Solution_Health_Rule_Argument = 10377,
			/** Solution_Health_Rule_Set = 10378*/
			Solution_Health_Rule_Set = 10378,
			/** Solution_History = 10004*/
			Solution_History = 10004,
			/** Solution_History_Data_Source = 10005*/
			Solution_History_Data_Source = 10005,
			/** SolutionHistoryData = 9890*/
			SolutionHistoryData = 9890,
			/** Source_Control_Branch_Configuration = 10074*/
			Source_Control_Branch_Configuration = 10074,
			/** Source_Control_Component = 10075*/
			Source_Control_Component = 10075,
			/** Source_Control_Component_Payload = 10076*/
			Source_Control_Component_Payload = 10076,
			/** Source_Control_Configuration = 10077*/
			Source_Control_Configuration = 10077,
			/** Sql_DataSource = 10704*/
			Sql_DataSource = 10704,
			/** Staged_attribute_lookup_value = 10019*/
			Staged_attribute_lookup_value = 10019,
			/** Staged_attribute_picklist_value = 10020*/
			Staged_attribute_picklist_value = 10020,
			/** Staged_Entity = 10021*/
			Staged_Entity = 10021,
			/** Staged_Entity_Attribute = 10022*/
			Staged_Entity_Attribute = 10022,
			/** Staged_entity_relationship = 10023*/
			Staged_entity_relationship = 10023,
			/** Staged_entity_relationship_relationships = 10024*/
			Staged_entity_relationship_relationships = 10024,
			/** Staged_entity_relationship_role = 10025*/
			Staged_entity_relationship_role = 10025,
			/** Staged_Metadata_Async_Operation = 10026*/
			Staged_Metadata_Async_Operation = 10026,
			/** Staged_optionset = 10027*/
			Staged_optionset = 10027,
			/** Staged_relationship_10028 = 10028*/
			Staged_relationship_10028 = 10028,
			/** Staged_relationship_10029 = 10029*/
			Staged_relationship_10029 = 10029,
			/** Staged_relationship_10030 = 10030*/
			Staged_relationship_10030 = 10030,
			/** Staged_Source_Control_Component = 10078*/
			Staged_Source_Control_Component = 10078,
			/** StageSolutionUpload = 10011*/
			StageSolutionUpload = 10011,
			/** Status_Map = 1075*/
			Status_Map = 1075,
			/** String_Map = 1043*/
			String_Map = 1043,
			/** Subject = 129*/
			Subject = 129,
			/** Subscription = 29*/
			Subscription = 29,
			/** Subscription_Clients = 1072*/
			Subscription_Clients = 1072,
			/** Subscription_Manually_Tracked_Object = 37*/
			Subscription_Manually_Tracked_Object = 37,
			/** Subscription_Statistic_Offline = 45*/
			Subscription_Statistic_Offline = 45,
			/** Subscription_Statistic_Outlook = 46*/
			Subscription_Statistic_Outlook = 46,
			/** Subscription_Sync_Entry_Offline = 47*/
			Subscription_Sync_Entry_Offline = 47,
			/** Subscription_Sync_Entry_Outlook = 48*/
			Subscription_Sync_Entry_Outlook = 48,
			/** Subscription_Synchronization_Information = 33*/
			Subscription_Synchronization_Information = 33,
			/** Suggested_Action = 10339*/
			Suggested_Action = 10339,
			/** Suggested_Action_Criteria = 10340*/
			Suggested_Action_Criteria = 10340,
			/** SuggestionCardTemplate = 1190*/
			SuggestionCardTemplate = 1190,
			/** SupportUserTable = 10278*/
			SupportUserTable = 10278,
			/** Synapse_Database = 10057*/
			Synapse_Database = 10057,
			/** Synapse_Link_External_Table_State = 10058*/
			Synapse_Link_External_Table_State = 10058,
			/** Synapse_Link_Profile = 10059*/
			Synapse_Link_Profile = 10059,
			/** Synapse_Link_Profile_Entity = 10060*/
			Synapse_Link_Profile_Entity = 10060,
			/** Synapse_Link_Profile_Entity_State = 10061*/
			Synapse_Link_Profile_Entity_State = 10061,
			/** Synapse_Link_Schedule = 10062*/
			Synapse_Link_Schedule = 10062,
			/** Sync_Attribute_Mapping = 1401*/
			Sync_Attribute_Mapping = 1401,
			/** Sync_Attribute_Mapping_Profile = 1400*/
			Sync_Attribute_Mapping_Profile = 1400,
			/** Sync_Error = 9869*/
			Sync_Error = 9869,
			/** System_Application_Metadata = 7000*/
			System_Application_Metadata = 7000,
			/** System_Chart = 1111*/
			System_Chart = 1111,
			/** System_Form = 1030*/
			System_Form = 1030,
			/** System_Job = 4700*/
			System_Job = 4700,
			/** System_User_Manager_Map = 51*/
			System_User_Manager_Map = 51,
			/** System_User_Principal = 14*/
			System_User_Principal = 14,
			/** SystemUser_BusinessUnit_Entity_Map = 42*/
			SystemUser_BusinessUnit_Entity_Map = 42,
			/** SystemUserAuthorizationChangeTracker = 60*/
			SystemUserAuthorizationChangeTracker = 60,
			/** Table_Permission = 10421*/
			Table_Permission = 10421,
			/** Tag = 10118*/
			Tag = 10118,
			/** Tagged_Flow_Session = 10119*/
			Tagged_Flow_Session = 10119,
			/** Tagged_Process = 10120*/
			Tagged_Process = 10120,
			/** Task = 4212*/
			Task = 4212,
			/** TdsMetadata = 10087*/
			TdsMetadata = 10087,
			/** Team = 9*/
			Team = 9,
			/** Team_Profiles = 1203*/
			Team_Profiles = 1203,
			/** Team_Sync_Attribute_Mapping_Profiles = 1403*/
			Team_Sync_Attribute_Mapping_Profiles = 1403,
			/** Team_template = 92*/
			Team_template = 92,
			/** TeamMobileOfflineProfileMembership = 10292*/
			TeamMobileOfflineProfileMembership = 10292,
			/** Teams_chat = 10253*/
			Teams_chat = 10253,
			/** Territory = 2013*/
			Territory = 2013,
			/** Text_Analytics_Entity_Mapping = 9945*/
			Text_Analytics_Entity_Mapping = 9945,
			/** TextDataRecordsIndexingStatus = 10393*/
			TextDataRecordsIndexingStatus = 10393,
			/** Theme = 2015*/
			Theme = 2015,
			/** Time_Stamp_Date_Mapping = 9932*/
			Time_Stamp_Date_Mapping = 9932,
			/** Time_Zone_Definition = 4810*/
			Time_Zone_Definition = 4810,
			/** Time_Zone_Localized_Name = 4812*/
			Time_Zone_Localized_Name = 4812,
			/** Time_Zone_Rule = 4811*/
			Time_Zone_Rule = 4811,
			/** Timeline_Pin = 10353*/
			Timeline_Pin = 10353,
			/** ToolingGateway = 10710*/
			ToolingGateway = 10710,
			/** ToolingGatewayMCPServer = 10711*/
			ToolingGatewayMCPServer = 10711,
			/** Tour = 10208*/
			Tour = 10208,
			/** Trace = 8050*/
			Trace = 8050,
			/** Trace_Association = 8051*/
			Trace_Association = 8051,
			/** Trace_Regarding = 8052*/
			Trace_Regarding = 8052,
			/** Tracking_information_for_deleted_entities = 35*/
			Tracking_information_for_deleted_entities = 35,
			/** trait = 10466*/
			trait = 10466,
			/** trait_registration = 10467*/
			trait_registration = 10467,
			/** Transformation_Mapping = 4426*/
			Transformation_Mapping = 4426,
			/** Transformation_Parameter_Mapping = 4427*/
			Transformation_Parameter_Mapping = 4427,
			/** Translation_Process = 951*/
			Translation_Process = 951,
			/** Unresolved_Address = 2012*/
			Unresolved_Address = 2012,
			/** UnstructuredFileSearchEntity = 10153*/
			UnstructuredFileSearchEntity = 10153,
			/** UnstructuredFileSearchRecord = 10154*/
			UnstructuredFileSearchRecord = 10154,
			/** UnstructuredFileSearchRecordStatus = 10707*/
			UnstructuredFileSearchRecordStatus = 10707,
			/** UntrackedEmail = 4220*/
			UntrackedEmail = 4220,
			/** User = 8*/
			User = 8,
			/** User_Application_Metadata = 7001*/
			User_Application_Metadata = 7001,
			/** User_Chart = 1112*/
			User_Chart = 1112,
			/** User_Dashboard = 1031*/
			User_Dashboard = 1031,
			/** User_Entity_Instance_Data = 2501*/
			User_Entity_Instance_Data = 2501,
			/** User_Entity_UI_Settings = 2500*/
			User_Entity_UI_Settings = 2500,
			/** User_Fiscal_Calendar = 1086*/
			User_Fiscal_Calendar = 1086,
			/** User_Mapping = 2016*/
			User_Mapping = 2016,
			/** User_Rating = 10319*/
			User_Rating = 10319,
			/** User_Search_Facet = 52*/
			User_Search_Facet = 52,
			/** User_Settings = 150*/
			User_Settings = 150,
			/** UserMobileOfflineProfileMembership = 10293*/
			UserMobileOfflineProfileMembership = 10293,
			/** UX_Agent_Component = 10345*/
			UX_Agent_Component = 10345,
			/** UX_Agent_Component_Revision = 10346*/
			UX_Agent_Component_Revision = 10346,
			/** UX_Agent_Project = 10347*/
			UX_Agent_Project = 10347,
			/** UX_Agent_Project_File = 10348*/
			UX_Agent_Project_File = 10348,
			/** View = 1039*/
			View = 1039,
			/** ViewAsExampleQuestion = 10394*/
			ViewAsExampleQuestion = 10394,
			/** Virtual_Connector_Data_Source = 10354*/
			Virtual_Connector_Data_Source = 10354,
			/** Virtual_Entity_Data_Provider = 78*/
			Virtual_Entity_Data_Provider = 78,
			/** Virtual_Entity_Data_Source = 85*/
			Virtual_Entity_Data_Source = 85,
			/** Virtual_Entity_Metadata = 10287*/
			Virtual_Entity_Metadata = 10287,
			/** Virtual_Table_Column_Candidate = 10355*/
			Virtual_Table_Column_Candidate = 10355,
			/** Web_File = 10431*/
			Web_File = 10431,
			/** Web_Link = 10435*/
			Web_Link = 10435,
			/** Web_Link_Set = 10436*/
			Web_Link_Set = 10436,
			/** Web_Page = 10437*/
			Web_Page = 10437,
			/** Web_Page_Access_Control_Rule = 10438*/
			Web_Page_Access_Control_Rule = 10438,
			/** Web_Resource = 9333*/
			Web_Resource = 9333,
			/** Web_Role = 10439*/
			Web_Role = 10439,
			/** Web_Template = 10443*/
			Web_Template = 10443,
			/** Web_Wizard = 4800*/
			Web_Wizard = 4800,
			/** Web_Wizard_Access_Privilege = 4803*/
			Web_Wizard_Access_Privilege = 4803,
			/** Website = 10440*/
			Website = 10440,
			/** Website_Access = 10441*/
			Website_Access = 10441,
			/** Website_Language = 10442*/
			Website_Language = 10442,
			/** Wizard_Page = 4802*/
			Wizard_Page = 4802,
			/** Work_Queue = 10122*/
			Work_Queue = 10122,
			/** Work_Queue_Item = 10123*/
			Work_Queue_Item = 10123,
			/** Workflow_Action_Status = 10241*/
			Workflow_Action_Status = 10241,
			/** Workflow_Binary = 10103*/
			Workflow_Binary = 10103,
			/** Workflow_Metadata = 10121*/
			Workflow_Metadata = 10121,
			/** Workflow_Wait_Subscription = 4702*/
			Workflow_Wait_Subscription = 4702
		}
		enum SLAType {
			/** Enhanced = 1*/
			Enhanced = 1,
			/** Standard = 0*/
			Standard = 0
		}
		enum slaversion {
			/** Version_UC = 100000001*/
			Version_UC = 100000001,
			/** Version_WC = 100000000*/
			Version_WC = 100000000
		}
		enum StateCode {
			/** Active = 1*/
			Active = 1,
			/** Draft = 0*/
			Draft = 0
		}
		enum StatusCode {
			/** Active = 2*/
			Active = 2,
			/** Draft = 1*/
			Draft = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}