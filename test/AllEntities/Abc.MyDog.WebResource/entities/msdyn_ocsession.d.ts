//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormOmnichannel_session_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the activity. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA_Sections {
		}
		interface tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA extends DevKit.Controls.ITab {
			Section: tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA_Sections;
		}
		interface Tabs {
			_E74AC0DC_7C2F_4E02_9235_A56E038611BA: tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when session was accepted by agent */
			msdyn_agentacceptedon: DevKit.Controls.DateTime;
			/** Date and time when session was assigned to agent */
			msdyn_agentassignedon: DevKit.Controls.DateTime;
			/** The channel type of the session */
			msdyn_channel: DevKit.Controls.OptionSet;
			/** Unique Identifier  of Conversation associated to the session */
			msdyn_liveworkitemid: DevKit.Controls.Lookup;
			/** Date and time when session was closed */
			msdyn_sessionclosedon: DevKit.Controls.DateTime;
			/** Date and time when session was created */
			msdyn_sessioncreatedon: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			nav_msdyn_ocsession_sessionparticipant_nested: DevKit.Controls.NavigationItem
		}
		interface Grid {
			session_participants: DevKit.Controls.Grid;
		}
	}
	class FormOmnichannel_session_form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Omnichannel_session_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Omnichannel_session_form */
		Body: MyDog.FormOmnichannel_session_form.Body;
		/** The Header section of form Omnichannel_session_form */
		Header: MyDog.FormOmnichannel_session_form.Header;
		/** The Navigation of form Omnichannel_session_form */
		Navigation: MyDog.FormOmnichannel_session_form.Navigation;
		/** The Grid of form Omnichannel_session_form */
		Grid: MyDog.FormOmnichannel_session_form.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocsession {
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
		enum msdyn_botengagementmode {
			/** 192350000 */
			Default,
			/** 192350003 */
			OffBusinessHour,
			/** 192350002 */
			PostConverstation,
			/** 192350001 */
			PreConversation
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
		enum msdyn_closurereason {
			/** 192350004 */
			AgentClosed,
			/** 192350007 */
			AgentDisconnected,
			/** 192350001 */
			AgentReject,
			/** 192350008 */
			AgentReRouted,
			/** 192350002 */
			AgentTimeout,
			/** 192350006 */
			AgentTransfered,
			/** 192350010 */
			AgentTransferToQueue,
			/** 192350005 */
			ConversationClosed,
			/** 192350003 */
			ConversationTimeout,
			/** 192350000 */
			Default,
			/** 192350011 */
			SupervisorAssignToQueue,
			/** 192350009 */
			VirtualAgentClosed
		}
		enum msdyn_state {
			/** 192350001 */
			Active,
			/** 192350002 */
			Closed,
			/** 192350000 */
			Default,
			/** 192350003 */
			New
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
			/** 2 */
			Canceled,
			/** 1 */
			Completed,
			/** 0 */
			Open,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 3 */
			Canceled,
			/** 2 */
			Completed,
			/** 1 */
			Open,
			/** 4 */
			Scheduled
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
//{'JsForm':['Omnichannel session form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}