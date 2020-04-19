//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormConversation_Form {
		interface tab_Details_Sections {
			Details: DevKit.Form.Controls.ControlSection;
			tab_2_section_4: DevKit.Form.Controls.ControlSection;
			Details_section_4: DevKit.Form.Controls.ControlSection;
			tab_2_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Details extends DevKit.Form.Controls.IControlTab {
			Section: tab_Details_Sections;
		}
		interface Tabs {
			Details: tab_Details;
		}
		interface Body {
			Tab: Tabs;
			SessionDetails: DevKit.Form.Controls.ControlGrid;
			msdyn_activeagentid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Queue associated with Conversation. */
			msdyn_cdsqueueid: DevKit.Form.Controls.ControlLookup;
			msdyn_closedon: DevKit.Form.Controls.ControlDateTime;
			msdyn_createdon: DevKit.Form.Controls.ControlDateTime;
			msdyn_customer: DevKit.Form.Controls.ControlLookup;
			msdyn_escalationcount: DevKit.Form.Controls.ControlInteger;
			msdyn_liveworkstreamid: DevKit.Form.Controls.ControlLookup;
			msdyn_modifiedon: DevKit.Form.Controls.ControlDateTime;
			msdyn_statusupdatedon: DevKit.Form.Controls.ControlDateTime;
			msdyn_title: DevKit.Form.Controls.ControlString;
			/** Placeholder for Transcript Control */
			msdyn_TranscriptControl: DevKit.Form.Controls.ControlString;
			msdyn_transfercount: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** State of the conversation record */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the activity. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_transcript: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormConversation_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Conversation_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Conversation_Form */
		Body: LuckyMokey.FormConversation_Form.Body;
		/** The Navigation of form Conversation_Form */
		Navigation: LuckyMokey.FormConversation_Form.Navigation;
	}
	namespace FormCustomer_summary {
		interface tab_Details_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			Details_section_3: DevKit.Form.Controls.ControlSection;
			Details_section_4: DevKit.Form.Controls.ControlSection;
			tab_2_section_2_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_KBSearch_Sections {
			tab_2_section_5: DevKit.Form.Controls.ControlSection;
		}
		interface tab_OCSearchRuntimeControl_Sections {
			tab_3_section_5: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Details extends DevKit.Form.Controls.IControlTab {
			Section: tab_Details_Sections;
		}
		interface tab_KBSearch extends DevKit.Form.Controls.IControlTab {
			Section: tab_KBSearch_Sections;
		}
		interface tab_OCSearchRuntimeControl extends DevKit.Form.Controls.IControlTab {
			Section: tab_OCSearchRuntimeControl_Sections;
		}
		interface Tabs {
			Details: tab_Details;
			KBSearch: tab_KBSearch;
			OCSearchRuntimeControl: tab_OCSearchRuntimeControl;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			KBSearchcontrol: DevKit.Form.Controls.ControlWebResource;
			OCSearchRuntimeControl: DevKit.Form.Controls.ControlIFrame;
			/** Field to bind conversation summary control */
			msdyn_ConversationSummaryField: DevKit.Form.Controls.ControlString;
			msdyn_customer: DevKit.Form.Controls.ControlLookup;
			CustomerProfile: DevKit.Form.Controls.ControlQuickView;
			RecentCases: DevKit.Form.Controls.ControlQuickView;
			/** Unique identifier for Case associated with Conversation. */
			msdyn_IssueId: DevKit.Form.Controls.ControlLookup;
			IssueSnapshot: DevKit.Form.Controls.ControlQuickView;
			/** Field to bind Timelinewall control */
			msdyn_TimelineControlField: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCustomer_summary extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Customer_summary
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Customer_summary */
		Body: LuckyMokey.FormCustomer_summary.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocliveworkitem {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 1 */
			Recurring_Master,
			/** 2 */
			Recurring_Instance,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception
		}
		enum msdyn_channel {
			/** 192350000 */
			Entity_Records,
			/** 192360000 */
			Live_chat,
			/** 192370000 */
			Voice,
			/** 192380000 */
			Video,
			/** 192390000 */
			Co_browse,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192330000 */
			Facebook
		}
		enum msdyn_customersentimentlabel {
			/** 0 */
			NA,
			/** 7 */
			Very_negative,
			/** 8 */
			Negative,
			/** 9 */
			Slightly_negative,
			/** 10 */
			Neutral,
			/** 11 */
			Slightly_positive,
			/** 12 */
			Positive,
			/** 13 */
			Very_positive
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Active,
			/** 2 */
			Waiting,
			/** 3 */
			Closed,
			/** 4 */
			Wrap_up
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Active,
			/** 3 */
			Waiting,
			/** 4 */
			Closed,
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
//{'JsForm':['Conversation Form','Customer summary'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}