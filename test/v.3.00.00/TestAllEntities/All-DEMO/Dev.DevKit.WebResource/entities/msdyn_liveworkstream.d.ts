//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_liveworkstream_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The channel to which this workstream is attached */
			msdyn_streamsource: DevKit.Controls.OptionSet;
			/** Specifies the mode i.e Push/Pick for the workstream */
			msdyn_workdistributionmode: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_BotAssistedAgentGuidance_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_quickReplies_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_RoutingRuleItems_Sections {
		}
		interface tab_SkillAttachmentRulesTab_Sections {
			SkillAttachmentSection: DevKit.Controls.Section;
		}
		interface tab_smsNumbers_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_smsSettings_Sections {
			MSFlowOutboundNotifications: DevKit.Controls.Section;
			RESTAPIDetails: DevKit.Controls.Section;
			SMSConnectionParameters: DevKit.Controls.Section;
			SMSProviderDetails: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_templates_Sections {
			tab_templates_section_1: DevKit.Controls.Section;
			tab_templates_section_2: DevKit.Controls.Section;
		}
		interface tab_tab1_summary_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab1_summary_section_6: DevKit.Controls.Section;
		}
		interface tab_BotAssistedAgentGuidance extends DevKit.Controls.ITab {
			Section: tab_BotAssistedAgentGuidance_Sections;
		}
		interface tab_quickReplies extends DevKit.Controls.ITab {
			Section: tab_quickReplies_Sections;
		}
		interface tab_RoutingRuleItems extends DevKit.Controls.ITab {
			Section: tab_RoutingRuleItems_Sections;
		}
		interface tab_SkillAttachmentRulesTab extends DevKit.Controls.ITab {
			Section: tab_SkillAttachmentRulesTab_Sections;
		}
		interface tab_smsNumbers extends DevKit.Controls.ITab {
			Section: tab_smsNumbers_Sections;
		}
		interface tab_smsSettings extends DevKit.Controls.ITab {
			Section: tab_smsSettings_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_templates extends DevKit.Controls.ITab {
			Section: tab_tab_templates_Sections;
		}
		interface tab_tab1_summary extends DevKit.Controls.ITab {
			Section: tab_tab1_summary_Sections;
		}
		interface Tabs {
			BotAssistedAgentGuidance: tab_BotAssistedAgentGuidance;
			quickReplies: tab_quickReplies;
			RoutingRuleItems: tab_RoutingRuleItems;
			SkillAttachmentRulesTab: tab_SkillAttachmentRulesTab;
			smsNumbers: tab_smsNumbers;
			smsSettings: tab_smsSettings;
			tab_3: tab_tab_3;
			tab_templates: tab_tab_templates;
			tab1_summary: tab_tab1_summary;
		}
		interface Body {
			Tab: Tabs;
			msdyn_allowedpresencehelptext: DevKit.Controls.ActionCards;
			/** Allowed base presences for the work stream */
			msdyn_AllowedPresences: DevKit.Controls.MultiOptionSet;
			/** The API Key equivalent to password of account set up with TeleSign */
			msdyn_APIKey: DevKit.Controls.String;
			/** Set the time after which a work item can be assigned to the agent again after he/she has declined the work item or the request has timed out */
			msdyn_AssignWorkItemAfterDecline: DevKit.Controls.Integer;
			/** Set the time after which the work item will be closed if there is no activity on the work item. */
			msdyn_AutoCloseAfterInactivity: DevKit.Controls.Integer;
			/** Defines how the work stream will measure capacity consumption */
			msdyn_capacityformat: DevKit.Controls.OptionSet;
			/** The units of capacity that should be available for an item of this work stream to be processed. */
			msdyn_CapacityRequired: DevKit.Controls.Integer;
			/** Flow URL for Dynamics 365 connector */
			msdyn_ConnectorsURL: DevKit.Controls.String;
			/** The Customer Id equivalent to username of account set up with TeleSign */
			msdyn_CustomerID: DevKit.Controls.String;
			/** Keep same agent for entire conversation */
			msdyn_enableagentaffinity: DevKit.Controls.Boolean;
			msdyn_enableagentAffinityhelptext: DevKit.Controls.ActionCards;
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
			WebResource_HelpDialog: DevKit.Controls.WebResource;
		}
		interface Grid {
			AttachmentRulesSubGrid: DevKit.Controls.Grid;
			BotAssistedAgentGuidanceSubGrid: DevKit.Controls.Grid;
			contextvariables: DevKit.Controls.Grid;
			quickreplies: DevKit.Controls.Grid;
			RuleItems: DevKit.Controls.Grid;
			SMSNumbers: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_liveworkstream_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_liveworkstream_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_liveworkstream_Information */
		Body: DevKit.Formmsdyn_liveworkstream_Information.Body;
		/** The Header section of form msdyn_liveworkstream_Information */
		Header: DevKit.Formmsdyn_liveworkstream_Information.Header;
		/** The Grid of form msdyn_liveworkstream_Information */
		Grid: DevKit.Formmsdyn_liveworkstream_Information.Grid;
		/** The SidePanes of form msdyn_liveworkstream_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormInformation_New {
		interface tab_tab1_summary_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab1_summary extends DevKit.Controls.ITab {
			Section: tab_tab1_summary_Sections;
		}
		interface Tabs {
			tab1_summary: tab_tab1_summary;
		}
		interface Body {
			Tab: Tabs;
			/** The channel to which this workstream is attached */
			msdyn_streamsource: DevKit.Controls.OptionSet;
		}
	}
	class FormInformation_New extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Information_New Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Information_New */
		Body: DevKit.FormInformation_New.Body;
		/** The SidePanes of form Information_New */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_liveworkstreamApi {
		/**
		* DynamicsCrm.DevKit msdyn_liveworkstreamApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Allowed base presences for the work stream */
		msdyn_AllowedPresences: DevKit.WebApi.MultiOptionSetValue;
		/** The API Key equivalent to password of account set up with TeleSign */
		msdyn_APIKey: DevKit.WebApi.StringValue;
		/** Version number of the API key */
		msdyn_apikeyversionnumber: DevKit.WebApi.IntegerValue;
		/** Set the time after which a work item can be assigned to the agent again after he/she has declined the work item or the request has timed out */
		msdyn_AssignWorkItemAfterDecline: DevKit.WebApi.IntegerValue;
		/** Set the time after which the work item will be closed if there is no activity on the work item. */
		msdyn_AutoCloseAfterInactivity: DevKit.WebApi.IntegerValue;
		/** Time for which the agent's capacity is blocked for wrap up state. After this amount of time the agent's capacity will be released. */
		msdyn_blockcapacityforwrapup: DevKit.WebApi.IntegerValue;
		/** The queue created for the bot in the workstream. */
		msdyn_bot_queue: DevKit.WebApi.LookupValue;
		/** The rule added to workstream for bot routing. */
		msdyn_bot_rule: DevKit.WebApi.StringValue;
		/** The user of the bot. */
		msdyn_bot_user: DevKit.WebApi.LookupValue;
		/** Defines how the work stream will measure capacity consumption */
		msdyn_capacityformat: DevKit.WebApi.OptionSetValue;
		/** The units of capacity that should be available for an item of this work stream to be processed. */
		msdyn_CapacityRequired: DevKit.WebApi.IntegerValue;
		/** Flow URL for Dynamics 365 connector */
		msdyn_ConnectorsURL: DevKit.WebApi.StringValue;
		/** Conversation mode of chat channels */
		msdyn_conversationmode: DevKit.WebApi.OptionSetValue;
		/** The Customer Id equivalent to username of account set up with TeleSign */
		msdyn_CustomerID: DevKit.WebApi.StringValue;
		/** Direction to indicate if its an inbound or outbound workstream */
		msdyn_direction: DevKit.WebApi.OptionSetValue;
		/** Keep same agent for entire conversation */
		msdyn_enableagentaffinity: DevKit.WebApi.BooleanValue;
		/** Option for allowing automated messages or not */
		msdyn_enableautomatedmessages: DevKit.WebApi.BooleanValue;
		/** Agents can choose to work on items from push-based work streams. */
		msdyn_enableselectingfrompushbasedworkstreams: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Workstream Entity Configuration associated with Work Stream. */
		msdyn_EntityRoutingConfigurationId: DevKit.WebApi.LookupValue;
		/** Fall back language to be used for Live chat */
		msdyn_FallBackLanguage: DevKit.WebApi.StringValue;
		/** Set the time after which the work item should be offered to an agent if the work item has been waiting for input. */
		msdyn_FollowUpAfterWaiting: DevKit.WebApi.IntegerValue;
		/** Declare the expected handling time under which work items for this work stream should get resolved */
		msdyn_handlingtimethreshold: DevKit.WebApi.IntegerValue;
		/** Indicates whether this is the default workstream or not. */
		msdyn_isdefault: DevKit.WebApi.BooleanValue;
		/** The time when Validation api was last run */
		msdyn_LastValidationOn_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** The status of the last Validation results */
		msdyn_LastValidationStatus: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_liveworkstreamId: DevKit.WebApi.GuidValue;
		/** Unique identifier for master entity routing configuration associated with work stream. */
		msdyn_masterentityroutingconfigurationid: DevKit.WebApi.LookupValue;
		/** Matching logic used for Skill Based Routing like Exact Match or Closest match */
		msdyn_matchinglogic: DevKit.WebApi.OptionSetValue;
		/** Maximum number of concurrent sessions that an agent can work for a work item of a particular stream. */
		msdyn_MaxConcurrentConnection: DevKit.WebApi.IntegerValue;
		/** Mode of experience */
		msdyn_mode: DevKit.WebApi.OptionSetValue;
		/** Name of Work stream */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Notification type */
		msdyn_Notification: DevKit.WebApi.OptionSetValue;
		/** Notification association with scenarios */
		msdyn_notificationscenarioplaceholder: DevKit.WebApi.StringValue;
		/** Consult  notification template scenario */
		msdyn_notificationtemplate_consult: DevKit.WebApi.StringValue;
		/** Incoming authenticated notification template scenario */
		msdyn_notificationtemplate_incoming_auth: DevKit.WebApi.StringValue;
		/** Incoming unauthenticated notification template scenario */
		msdyn_notificationtemplate_incoming_unauth: DevKit.WebApi.StringValue;
		/** supervisorAssign notification template scenario */
		msdyn_notificationtemplate_supervisorassign: DevKit.WebApi.StringValue;
		/** Transfer notification template scenario */
		msdyn_notificationtemplate_transfer: DevKit.WebApi.StringValue;
		/** Unique identifier for outbound queue associated with workstream */
		msdyn_outboundqueueid: DevKit.WebApi.LookupValue;
		/** Record identification rule associated to a workstream */
		msdyn_recordidentificationrule: DevKit.WebApi.StringValue;
		/** Record Identification Validation Rule */
		msdyn_RecordIdentificationValidationRule: DevKit.WebApi.StringValue;
		/** Link contracts with live work streams. */
		msdyn_routingcontractid: DevKit.WebApi.LookupValue;
		/** Time duration for which notification will be shown to agent. */
		msdyn_Screenpoptimeout: DevKit.WebApi.IntegerValue;
		/** Time duration options for notification. */
		msdyn_Screenpoptimeout_optionSet: DevKit.WebApi.OptionSetValue;
		/** Session association with scenarios */
		msdyn_sessionscenarioplaceholder: DevKit.WebApi.StringValue;
		/** Default session template scenario */
		msdyn_sessiontemplate_default: DevKit.WebApi.StringValue;
		/** Skill Attachment Rules Count */
		msdyn_skillattachmentrulescount: DevKit.WebApi.IntegerValueReadonly;
		/** Last Updated time of rollup field Skill Attachment Rules Count. */
		msdyn_skillattachmentrulescount_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Skill Attachment Rules Count. */
		msdyn_skillattachmentrulescount_State: DevKit.WebApi.IntegerValueReadonly;
		/** SMS Provider */
		msdyn_smsprovider: DevKit.WebApi.OptionSetValue;
		/** The channel to which this workstream is attached */
		msdyn_streamsource: DevKit.WebApi.OptionSetValue;
		/** URL for TeleSign Inbound link */
		msdyn_TelesignInboundURL: DevKit.WebApi.StringValue;
		/** URL for Twilio Inbound link */
		msdyn_TwilioInboundURL: DevKit.WebApi.StringValue;
		/** Declare the expected waiting time under which work items for this work stream should be assigned to agents */
		msdyn_waitingtimethreshold: DevKit.WebApi.IntegerValue;
		/** Specifies the mode i.e Push/Pick for the workstream */
		msdyn_workdistributionmode: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Work stream */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Work stream */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
		enum msdyn_capacityformat {
			/** 192360000 */
			Profile_based,
			/** 192350000 */
			Unit_based
		}
		enum msdyn_conversationmode {
			/** 192350000 */
			Live_Chat,
			/** 192350001 */
			Persistent_Chat
		}
		enum msdyn_direction {
			/** 0 */
			Inbound,
			/** 1 */
			Outbound
		}
		enum msdyn_matchinglogic {
			/** 192350001 */
			Closest_Match,
			/** 192350000 */
			Exact_Match
		}
		enum msdyn_mode {
			/** 717210000 */
			Legacy,
			/** 717210001 */
			Simplified
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}