//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConversation_Form {
		interface tab_Details_Sections {
			Details: DevKit.Controls.Section;
			Details_section_4: DevKit.Controls.Section;
			Details_skills_5: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
			tab_2_section_4: DevKit.Controls.Section;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface Tabs {
			Details: tab_Details;
		}
		interface Body {
			Tab: Tabs;
			/** Last agent assigned to the conversation */
			msdyn_activeagentid: DevKit.Controls.Lookup;
			/** Unique identifier for Queue associated with Conversation. */
			msdyn_cdsqueueid: DevKit.Controls.Lookup;
			/** Date and time when conversation was closed */
			msdyn_closedon: DevKit.Controls.DateTime;
			/** Date and time when the activity was created. */
			msdyn_createdon: DevKit.Controls.DateTime;
			/** Customer with which the activity is associated. */
			msdyn_customer: DevKit.Controls.Lookup;
			/** Number of times conversation was escalated to Supervisor i.e. transferred to Supervisor */
			msdyn_escalationcount: DevKit.Controls.Integer;
			/** Work stream associated to the conversation */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** Date and time when conversation was last modified */
			msdyn_modifiedon: DevKit.Controls.DateTime;
			/** Date and time when conversation status was last modified */
			msdyn_statusupdatedon: DevKit.Controls.DateTime;
			/** Conversation Title */
			msdyn_title: DevKit.Controls.String;
			/** Conversation Title */
			msdyn_title_1: DevKit.Controls.String;
			/** Placeholder for Transcript Control */
			msdyn_TranscriptControl: DevKit.Controls.String;
			/** Number of times the conversation was transferred */
			msdyn_transfercount: DevKit.Controls.Integer;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** State of the conversation record */
			StateCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the activity. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_transcript: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem
		}
		interface Grid {
			SessionDetails: DevKit.Controls.Grid;
		}
	}
	class FormConversation_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Conversation_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Conversation_Form */
		Body: DevKit.FormConversation_Form.Body;
		/** The Navigation of form Conversation_Form */
		Navigation: DevKit.FormConversation_Form.Navigation;
		/** The Grid of form Conversation_Form */
		Grid: DevKit.FormConversation_Form.Grid;
	}
	namespace FormCustomer_summary {
		interface tab_Details_Sections {
			Details_section_3: DevKit.Controls.Section;
			Details_section_4: DevKit.Controls.Section;
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_KBSearch_Sections {
			tab_2_section_5: DevKit.Controls.Section;
		}
		interface tab_OCSearchRuntimeControl_Sections {
			tab_3_section_5: DevKit.Controls.Section;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_KBSearch extends DevKit.Controls.ITab {
			Section: tab_KBSearch_Sections;
		}
		interface tab_OCSearchRuntimeControl extends DevKit.Controls.ITab {
			Section: tab_OCSearchRuntimeControl_Sections;
		}
		interface Tabs {
			Details: tab_Details;
			KBSearch: tab_KBSearch;
			OCSearchRuntimeControl: tab_OCSearchRuntimeControl;
		}
		interface Body {
			Tab: Tabs;
			KBSearchcontrol: DevKit.Controls.WebResource;
			/** Field to bind conversation summary control */
			msdyn_ConversationSummaryField: DevKit.Controls.String;
			/** Customer with which the activity is associated. */
			msdyn_customer: DevKit.Controls.Lookup;
			/** Unique identifier for Case associated with Conversation. */
			msdyn_IssueId: DevKit.Controls.Lookup;
			/** Field to bind Timelinewall control */
			msdyn_TimelineControlField: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			OCSearchRuntimeControl: DevKit.Controls.IFrame;
		}
		interface quickForm_CustomerProfile_Body {
			Address1_City: DevKit.Controls.QuickView;
			PrimaryContactId: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_RecentCases_Body {
		}
		interface quickForm_IssueSnapshot_Body {
			PriorityCode: DevKit.Controls.QuickView;
			StateCode: DevKit.Controls.QuickView;
			SubjectId: DevKit.Controls.QuickView;
		}
		interface quickForm_CustomerProfile extends DevKit.Controls.IQuickView {
			Body: quickForm_CustomerProfile_Body;
		}
		interface quickForm_RecentCases extends DevKit.Controls.IQuickView {
			Body: quickForm_RecentCases_Body;
		}
		interface quickForm_IssueSnapshot extends DevKit.Controls.IQuickView {
			Body: quickForm_IssueSnapshot_Body;
		}
		interface QuickForm {
			CustomerProfile: quickForm_CustomerProfile;
			RecentCases: quickForm_RecentCases;
			IssueSnapshot: quickForm_IssueSnapshot;
		}
	}
	class FormCustomer_summary extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Customer_summary
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Customer_summary */
		Body: DevKit.FormCustomer_summary.Body;
		/** The QuickForm of form Customer_summary */
		QuickForm: DevKit.FormCustomer_summary.QuickForm;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocliveworkitem {
		enum Community {
			/** 5 */
			Cortana,
			/** 6 */
			Direct_Line,
			/** 8 */
			Direct_Line_Speech,
			/** 9 */
			Email,
			/** 1 */
			Facebook,
			/** 10 */
			GroupMe,
			/** 11 */
			Kik,
			/** 3 */
			Line,
			/** 7 */
			Microsoft_Teams,
			/** 0 */
			Other,
			/** 13 */
			Skype,
			/** 14 */
			Slack,
			/** 12 */
			Telegram,
			/** 2 */
			Twitter,
			/** 4 */
			Wechat,
			/** 15 */
			WhatsApp
		}
		enum DeliveryPriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
		enum msdyn_channel {
			/** 192390000 */
			Co_browse,
			/** 192350002 */
			Custom,
			/** 192350000 */
			Entity_Records,
			/** 192330000 */
			Facebook,
			/** 192310000 */
			LINE,
			/** 192360000 */
			Live_chat,
			/** 19241000 */
			Microsoft_Teams,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192350001 */
			Twitter,
			/** 192380000 */
			Video,
			/** 192370000 */
			Voice,
			/** 192320000 */
			WeChat,
			/** 192300000 */
			WhatsApp
		}
		enum msdyn_customersentimentlabel {
			/** 0 */
			NA,
			/** 8 */
			Negative,
			/** 10 */
			Neutral,
			/** 12 */
			Positive,
			/** 9 */
			Slightly_negative,
			/** 11 */
			Slightly_positive,
			/** 7 */
			Very_negative,
			/** 13 */
			Very_positive
		}
		enum msdyn_workstreamworkdistributionmode {
			/** 192350001 */
			Pick,
			/** 192350000 */
			Push
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum StateCode {
			/** 1 */
			Closed,
			/** 0 */
			Open,
			/** 2 */
			Resolved,
			/** 3 */
			Scheduled,
			/** 4 */
			Wrap_up_Deprecated
		}
		enum StatusCode {
			/** 2 */
			Active,
			/** 4 */
			Closed,
			/** 1 */
			Open,
			/** 6 */
			Resolved,
			/** 7 */
			Scheduled,
			/** 3 */
			Waiting,
			/** 5 */
			Wrap_up
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
//{'JsForm':['Conversation Form','Customer summary'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}