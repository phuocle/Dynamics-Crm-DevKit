//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_liveworkstream_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The channel to which this workstream is attached */
			msdyn_streamsource: DevKit.Controls.OptionSet;
			/** Specifies the mode i.e Push/Pick for the workstream */
			msdyn_workdistributionmode: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_tab1_summary_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab1_summary_section_6: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_smsSettings_Sections {
			SMSProviderDetails: DevKit.Controls.Section;
			RESTAPIDetails: DevKit.Controls.Section;
			SMSConnectionParameters: DevKit.Controls.Section;
			MSFlowOutboundNotifications: DevKit.Controls.Section;
		}
		interface tab_smsNumbers_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_SkillAttachmentRulesTab_Sections {
			SkillAttachmentSection: DevKit.Controls.Section;
		}
		interface tab_RoutingRuleItems_Sections {
		}
		interface tab_tab_templates_Sections {
			tab_templates_section_1: DevKit.Controls.Section;
			tab_templates_section_2: DevKit.Controls.Section;
		}
		interface tab_BotAssistedAgentGuidance_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_quickReplies_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab1_summary extends DevKit.Controls.ITab {
			Section: tab_tab1_summary_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_smsSettings extends DevKit.Controls.ITab {
			Section: tab_smsSettings_Sections;
		}
		interface tab_smsNumbers extends DevKit.Controls.ITab {
			Section: tab_smsNumbers_Sections;
		}
		interface tab_SkillAttachmentRulesTab extends DevKit.Controls.ITab {
			Section: tab_SkillAttachmentRulesTab_Sections;
		}
		interface tab_RoutingRuleItems extends DevKit.Controls.ITab {
			Section: tab_RoutingRuleItems_Sections;
		}
		interface tab_tab_templates extends DevKit.Controls.ITab {
			Section: tab_tab_templates_Sections;
		}
		interface tab_BotAssistedAgentGuidance extends DevKit.Controls.ITab {
			Section: tab_BotAssistedAgentGuidance_Sections;
		}
		interface tab_quickReplies extends DevKit.Controls.ITab {
			Section: tab_quickReplies_Sections;
		}
		interface Tabs {
			tab1_summary: tab_tab1_summary;
			tab_3: tab_tab_3;
			smsSettings: tab_smsSettings;
			smsNumbers: tab_smsNumbers;
			SkillAttachmentRulesTab: tab_SkillAttachmentRulesTab;
			RoutingRuleItems: tab_RoutingRuleItems;
			tab_templates: tab_tab_templates;
			BotAssistedAgentGuidance: tab_BotAssistedAgentGuidance;
			quickReplies: tab_quickReplies;
		}
		interface Body {
			Tab: Tabs;
			msdyn_allowedpresencehelptext: DevKit.Controls.ActionCards;
			msdyn_enableagentAffinityhelptext: DevKit.Controls.ActionCards;
			WebResource_HelpDialog: DevKit.Controls.WebResource;
			/** Allowed base presences for the work stream */
			msdyn_AllowedPresences: DevKit.Controls.MultiOptionSet;
			/** The API Key equivalent to password of account set up with TeleSign */
			msdyn_APIKey: DevKit.Controls.String;
			/** Set the time after which a work item can be assigned to the agent again after he/she has declined the work item or the request has timed out */
			msdyn_AssignWorkItemAfterDecline: DevKit.Controls.Integer;
			/** Set the time after which the work item will be closed if there is no activity on the work item. */
			msdyn_AutoCloseAfterInactivity: DevKit.Controls.Integer;
			/** The units of capacity that should be available for an item of this work stream to be processed. */
			msdyn_CapacityRequired: DevKit.Controls.Integer;
			/** Flow URL for Dynamics 365 connector */
			msdyn_ConnectorsURL: DevKit.Controls.String;
			/** The Customer Id equivalent to username of account set up with TeleSign */
			msdyn_CustomerID: DevKit.Controls.String;
			/** Keep same agent for entire conversation */
			msdyn_enableagentaffinity: DevKit.Controls.Boolean;
			/** Agents can choose to work on items from push-based work streams. */
			msdyn_enableselectingfrompushbasedworkstreams: DevKit.Controls.Boolean;
			/** Unique identifier for Workstream Entity Configuration associated with Work Stream. */
			msdyn_EntityRoutingConfigurationId: DevKit.Controls.Lookup;
			/** The time when Validation api was last run */
			msdyn_LastValidationOn: DevKit.Controls.DateTime;
			/** The status of the last Validation results */
			msdyn_LastValidationStatus: DevKit.Controls.String;
			/** Matching logic used for Skill Based Routing like Exact Match or Closest match */
			msdyn_matchinglogic: DevKit.Controls.OptionSet;
			/** Maximum number of concurrent sessions that an agent can work for a work item of a particular stream. */
			msdyn_MaxConcurrentConnection: DevKit.Controls.Integer;
			/** Name of Work stream */
			msdyn_name: DevKit.Controls.String;
			/** Notification type */
			msdyn_Notification: DevKit.Controls.OptionSet;
			/** Consult  notification template scenario */
			msdyn_notificationtemplate_consult: DevKit.Controls.String;
			/** Incoming authenticated notification template scenario */
			msdyn_notificationtemplate_incoming_auth: DevKit.Controls.String;
			/** Incoming unauthenticated notification template scenario */
			msdyn_notificationtemplate_incoming_unauth: DevKit.Controls.String;
			/** supervisorAssign notification template scenario */
			msdyn_notificationtemplate_supervisorassign: DevKit.Controls.String;
			/** Transfer notification template scenario */
			msdyn_notificationtemplate_transfer: DevKit.Controls.String;
			/** Time duration options for notification. */
			msdyn_Screenpoptimeout_optionSet: DevKit.Controls.OptionSet;
			/** Default session template scenario */
			msdyn_sessiontemplate_default: DevKit.Controls.String;
			/** SMS Provider */
			msdyn_smsprovider: DevKit.Controls.OptionSet;
			/** The channel to which this workstream is attached */
			msdyn_streamsource: DevKit.Controls.OptionSet;
			/** URL for TeleSign Inbound link */
			msdyn_TelesignInboundURL: DevKit.Controls.String;
			/** URL for Twilio Inbound link */
			msdyn_TwilioInboundURL: DevKit.Controls.String;
			/** Specifies the mode i.e Push/Pick for the workstream */
			msdyn_workdistributionmode: DevKit.Controls.OptionSet;
		}
		interface Grid {
			contextvariables: DevKit.Controls.Grid;
			SMSNumbers: DevKit.Controls.Grid;
			AttachmentRulesSubGrid: DevKit.Controls.Grid;
			RuleItems: DevKit.Controls.Grid;
			BotAssistedAgentGuidanceSubGrid: DevKit.Controls.Grid;
			quickreplies: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_liveworkstream_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_liveworkstream_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_liveworkstream_Information */
		Body: MyDog.Formmsdyn_liveworkstream_Information.Body;
		/** The Header section of form msdyn_liveworkstream_Information */
		Header: MyDog.Formmsdyn_liveworkstream_Information.Header;
		/** The Grid of form msdyn_liveworkstream_Information */
		Grid: MyDog.Formmsdyn_liveworkstream_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_liveworkstream {
		enum msdyn_AllowedPresences {
			/** 192360000 */
			Available,
			/** 192360003 */
			Away,
			/** 192360001 */
			Busy,
			/** 192360002 */
			Busy_DND,
			/** 192360004 */
			Offline
		}
		enum msdyn_matchinglogic {
			/** 192350001 */
			Closest_Match,
			/** 192350000 */
			Exact_Match
		}
		enum msdyn_Notification {
			/** 100000000 */
			Directly_open_session,
			/** 100000002 */
			Screen_pop_with_decline,
			/** 100000001 */
			Screen_pop_with_timeout
		}
		enum msdyn_Screenpoptimeout_optionSet {
			/** 120 */
			_120,
			/** 150 */
			_150,
			/** 180 */
			_180,
			/** 210 */
			_210,
			/** 240 */
			_240,
			/** 270 */
			_270,
			/** 30 */
			_30,
			/** 300 */
			_300,
			/** 60 */
			_60,
			/** 90 */
			_90
		}
		enum msdyn_smsprovider {
			/** 192350000 */
			TeleSign,
			/** 192350001 */
			Twilio
		}
		enum msdyn_streamsource {
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
		enum msdyn_workdistributionmode {
			/** 192350001 */
			Pick,
			/** 192350000 */
			Push
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}