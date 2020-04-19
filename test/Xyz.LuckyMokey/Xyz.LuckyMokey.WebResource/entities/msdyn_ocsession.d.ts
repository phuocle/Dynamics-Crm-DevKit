//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormOmnichannel_session_form {
		interface Header {
			/** Status of the activity. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA_Sections {
		}
		interface tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA extends DevKit.Form.Controls.IControlTab {
			Section: tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA_Sections;
		}
		interface Tabs {
			_E74AC0DC_7C2F_4E02_9235_A56E038611BA: tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA;
		}
		interface Body {
			Tab: Tabs;
			session_participants: DevKit.Form.Controls.ControlGrid;
			msdyn_agentacceptedon: DevKit.Form.Controls.ControlDateTime;
			msdyn_agentassignedon: DevKit.Form.Controls.ControlDateTime;
			/** The channel type of the session */
			msdyn_channel: DevKit.Form.Controls.ControlOptionSet;
			msdyn_liveworkitemid: DevKit.Form.Controls.ControlLookup;
			msdyn_sessionclosedon: DevKit.Form.Controls.ControlDateTime;
			msdyn_sessioncreatedon: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
		interface Navigation {
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_ocsession_sessionevent_nested: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_ocsession_msdyn_ocliveworkitem_lastsessionid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_ocsession_sessionparticipant_nested: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormOmnichannel_session_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Omnichannel_session_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Omnichannel_session_form */
		Body: LuckyMokey.FormOmnichannel_session_form.Body;
		/** The Header section of form Omnichannel_session_form */
		Header: LuckyMokey.FormOmnichannel_session_form.Header;
		/** The Navigation of form Omnichannel_session_form */
		Navigation: LuckyMokey.FormOmnichannel_session_form.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocsession {
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
		enum msdyn_botengagementmode {
			/** 192350000 */
			Default,
			/** 192350001 */
			PreConversation,
			/** 192350002 */
			PostConverstation,
			/** 192350003 */
			OffBusinessHour
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
		enum msdyn_closurereason {
			/** 192350000 */
			Default,
			/** 192350001 */
			AgentReject,
			/** 192350002 */
			AgentTimeout,
			/** 192350003 */
			ConversationTimeout,
			/** 192350004 */
			AgentClosed,
			/** 192350005 */
			ConversationClosed,
			/** 192350006 */
			AgentTransfered,
			/** 192350007 */
			AgentDisconnected,
			/** 192350008 */
			AgentReRouted,
			/** 192350009 */
			VirtualAgentClosed,
			/** 192350010 */
			AgentTransferToQueue
		}
		enum msdyn_state {
			/** 192350000 */
			Default,
			/** 192350001 */
			Active,
			/** 192350002 */
			Closed,
			/** 192350003 */
			New
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
			Completed,
			/** 2 */
			Canceled,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Completed,
			/** 3 */
			Canceled,
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
//{'JsForm':['Omnichannel session form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}