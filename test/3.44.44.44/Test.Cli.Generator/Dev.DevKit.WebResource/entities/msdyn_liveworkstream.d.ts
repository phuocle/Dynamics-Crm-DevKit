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
			/** callbackpreviewdialing notification template scenario */
			msdyn_notificationtemplate_callback_previewdialing: DevKit.Controls.String;
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
			/** Restrict download of recording */
			msdyn_restrictdownloadrecording: DevKit.Controls.Boolean;
			/** Restrict download of transcript */
			msdyn_restrictdownloadtranscript: DevKit.Controls.Boolean;
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
		interface Navigation {
			msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_msdyn_ocvoicechannelsetting_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_msdyn_workstreamId_msdyn_entityWorkstreamMap: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_ocruleitem: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_queueitem_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_skillattachmentruleitem: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_entityconfig: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_liveconversation: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocapplebusinessaccount_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocautomatedactionrulesmapping_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocfbpage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocgooglebusinessmessagesagentaccount_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocsmssettingsecret_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_scenario: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_smsnumber: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_surveyquestion: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_workstreamhmmigrationstatus_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream: DevKit.Controls.NavigationItem,
			msdyn_ocoutboundmessage_ocliveworkstream: DevKit.Controls.NavigationItem,
			msdyn_rulesetdependencymapping_liveworkstream_referencedpolymorphicentityid: DevKit.Controls.NavigationItem
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
		* Information [Main Form]
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
		/** The Navigation of form msdyn_liveworkstream_Information */
		Navigation: DevKit.Formmsdyn_liveworkstream_Information.Navigation;
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
		interface Navigation {
			msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_msdyn_ocvoicechannelsetting_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_msdyn_workstreamId_msdyn_entityWorkstreamMap: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_ocruleitem: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_queueitem_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_liveworkstream_skillattachmentruleitem: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_entityconfig: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_liveconversation: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocapplebusinessaccount_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocautomatedactionrulesmapping_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocfbpage: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocgooglebusinessmessagesagentaccount_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocsmssettingsecret_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_scenario: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_smsnumber: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_surveyquestion: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream: DevKit.Controls.NavigationItem,
			msdyn_msdyn_liveworkstream_msdyn_workstreamhmmigrationstatus_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream: DevKit.Controls.NavigationItem,
			msdyn_ocoutboundmessage_ocliveworkstream: DevKit.Controls.NavigationItem,
			msdyn_rulesetdependencymapping_liveworkstream_referencedpolymorphicentityid: DevKit.Controls.NavigationItem
		}
	}
	class FormInformation_New extends DevKit.IForm {
		/**
		* Information (New) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Information_New */
		Body: DevKit.FormInformation_New.Body;
		/** The Navigation of form Information_New */
		Navigation: DevKit.FormInformation_New.Navigation;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_liveworkstream.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Allowed base presences for the work stream */
		msdyn_AllowedPresences: Array<OptionSet.msdyn_liveworkstream.msdyn_AllowedPresences>;
		/** The API Key equivalent to password of account set up with TeleSign */
		msdyn_APIKey: string;
		/** Version number of the API key */
		msdyn_apikeyversionnumber: number;
		/** Set the time after which a work item can be assigned to the agent again after he/she has declined the work item or the request has timed out */
		msdyn_AssignWorkItemAfterDecline: number;
		/** Set the time after which the work item will be closed if there is no activity on the work item. */
		msdyn_AutoCloseAfterInactivity: number;
		/** Time for which the agent's capacity is blocked for wrap up state. After this amount of time the agent's capacity will be released. */
		msdyn_blockcapacityforwrapup: number;
		/** The queue created for the bot in the workstream. */
		msdyn_bot_queue: string;
		/** The rule added to workstream for bot routing. */
		msdyn_bot_rule: string;
		/** The user of the bot. */
		msdyn_bot_user: string;
		/** Link the bot action failure config to the workstream. */
		msdyn_botfailureactionconfig: string;
		/** Defines how the work stream will measure capacity consumption */
		msdyn_capacityformat: OptionSet.msdyn_liveworkstream.msdyn_capacityformat;
		/** The units of capacity that should be available for an item of this work stream to be processed. */
		msdyn_CapacityRequired: number;
		/** Flow URL for Dynamics 365 connector */
		msdyn_ConnectorsURL: string;
		/** Conversation mode of chat channels */
		msdyn_conversationmode: OptionSet.msdyn_liveworkstream.msdyn_conversationmode;
		/** Hold the time for which customer disconnect will not close the open conversation. */
		msdyn_CustomerDisconnectHoldDurationForOpenConversation: number;
		/** The Customer Id equivalent to username of account set up with TeleSign */
		msdyn_CustomerID: string;
		/** Link the default queue to the workstream. */
		msdyn_defaultqueue: string;
		/** Direction to indicate if it's an inbound, outbound, direct inbound or direct outbound workstream */
		msdyn_direction: OptionSet.msdyn_liveworkstream.msdyn_direction;
		/** Keep same agent for entire conversation */
		msdyn_enableagentaffinity: boolean;
		/** Option for allowing automated messages or not */
		msdyn_enableautomatedmessages: boolean;
		/** Agents can choose to work on items from push-based work streams. */
		msdyn_enableselectingfrompushbasedworkstreams: boolean;
		/** Enable Voice V2 */
		msdyn_enablevoicev2: boolean;
		/** Unique identifier for Workstream Entity Configuration associated with Work Stream. */
		msdyn_EntityRoutingConfigurationId: string;
		/** Fall back language to be used for Live chat */
		msdyn_FallBackLanguage: string;
		/** Set the time after which the work item should be offered to an agent if the work item has been waiting for input. */
		msdyn_FollowUpAfterWaiting: number;
		/** Declare the expected handling time under which work items for this work stream should get resolved */
		msdyn_handlingtimethreshold: number;
		msdyn_intentfamilyid: string;
		/** (Deprecated) Is Intent based routing enabled for workstream */
		msdyn_intentfeatureenabled: boolean;
		/** Indicates whether this is the default workstream or not. */
		msdyn_isdefault: boolean;
		/** Is Intent based routing enabled for workstream */
		msdyn_isICDEnabled: boolean;
		/** The time when Validation api was last run */
		msdyn_LastValidationOn_TimezoneDateAndTime: Date;
		/** The status of the last Validation results */
		msdyn_LastValidationStatus: string;
		/** Unique identifier for entity instances */
		msdyn_liveworkstreamId: string;
		/** Unique identifier for master entity routing configuration associated with work stream. */
		msdyn_masterentityroutingconfigurationid: string;
		/** Matching logic used for Skill Based Routing like Exact Match or Closest match */
		msdyn_matchinglogic: OptionSet.msdyn_liveworkstream.msdyn_matchinglogic;
		/** Maximum number of concurrent sessions that an agent can work for a work item of a particular stream. */
		msdyn_MaxConcurrentConnection: number;
		/** Mode of experience */
		msdyn_mode: OptionSet.msdyn_liveworkstream.msdyn_mode;
		/** Name of Work stream */
		msdyn_name: string;
		/** Notification type */
		msdyn_Notification: OptionSet.msdyn_liveworkstream.msdyn_Notification;
		/** Notification association with scenarios */
		msdyn_notificationscenarioplaceholder: string;
		/** callbackpreviewdialing notification template scenario */
		msdyn_notificationtemplate_callback_previewdialing: string;
		/** Consult  notification template scenario */
		msdyn_notificationtemplate_consult: string;
		/** Incoming authenticated notification template scenario */
		msdyn_notificationtemplate_incoming_auth: string;
		/** Incoming unauthenticated notification template scenario */
		msdyn_notificationtemplate_incoming_unauth: string;
		/** Notification template for assignment of new messages in a conversation */
		msdyn_notificationtemplate_returning_conv_assig: string;
		/** supervisorAssign notification template scenario */
		msdyn_notificationtemplate_supervisorassign: string;
		/** Transfer notification template scenario */
		msdyn_notificationtemplate_transfer: string;
		/** Unique identifier for outbound queue associated with workstream */
		msdyn_outboundqueueid: string;
		/** Record identification rule associated to a workstream */
		msdyn_recordidentificationrule: string;
		/** Record Identification Validation Rule */
		msdyn_RecordIdentificationValidationRule: string;
		/** Restrict download of recording */
		msdyn_restrictdownloadrecording: boolean;
		/** Restrict download of transcript */
		msdyn_restrictdownloadtranscript: boolean;
		/** Link contracts with live work streams. */
		msdyn_routingcontractid: string;
		/** Time duration for which notification will be shown to agent. */
		msdyn_Screenpoptimeout: number;
		/** Time duration options for notification. */
		msdyn_Screenpoptimeout_optionSet: OptionSet.msdyn_liveworkstream.msdyn_Screenpoptimeout_optionSet;
		/** The secure API Key equivalent to password of account set up with TeleSign */
		msdyn_secureapikey: string;
		/** Session association with scenarios */
		msdyn_sessionscenarioplaceholder: string;
		/** Default session template scenario */
		msdyn_sessiontemplate_default: string;
		/** Skill Attachment Rules Count */
		readonly msdyn_skillattachmentrulescount: number;
		/** Last Updated time of rollup field Skill Attachment Rules Count. */
		readonly msdyn_skillattachmentrulescount_Date_UtcDateAndTime: Date;
		/** State of rollup field Skill Attachment Rules Count. */
		readonly msdyn_skillattachmentrulescount_State: number;
		/** SMS Provider */
		msdyn_smsprovider: OptionSet.msdyn_liveworkstream.msdyn_smsprovider;
		/** The channel to which this workstream is attached */
		msdyn_streamsource: OptionSet.msdyn_liveworkstream.msdyn_streamsource;
		/** URL for TeleSign Inbound link */
		msdyn_TelesignInboundURL: string;
		/** URL for Twilio Inbound link */
		msdyn_TwilioInboundURL: string;
		/** Declare the expected waiting time under which work items for this work stream should be assigned to agents */
		msdyn_waitingtimethreshold: number;
		/** Specifies the mode i.e Push/Pick for the workstream */
		msdyn_workdistributionmode: OptionSet.msdyn_liveworkstream.msdyn_workdistributionmode;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Work stream */
		statecode: OptionSet.msdyn_liveworkstream.statecode;
		/** Reason for the status of the Work stream */
		statuscode: OptionSet.msdyn_liveworkstream.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Allowed base presences for the work stream */
			readonly msdyn_AllowedPresences: Array<string>;
			/** The API Key equivalent to password of account set up with TeleSign */
			readonly msdyn_APIKey: string;
			/** Version number of the API key */
			readonly msdyn_apikeyversionnumber: string;
			/** Set the time after which a work item can be assigned to the agent again after he/she has declined the work item or the request has timed out */
			readonly msdyn_AssignWorkItemAfterDecline: string;
			/** Set the time after which the work item will be closed if there is no activity on the work item. */
			readonly msdyn_AutoCloseAfterInactivity: string;
			/** Time for which the agent's capacity is blocked for wrap up state. After this amount of time the agent's capacity will be released. */
			readonly msdyn_blockcapacityforwrapup: string;
			/** The queue created for the bot in the workstream. */
			readonly msdyn_bot_queue: string;
			/** The rule added to workstream for bot routing. */
			readonly msdyn_bot_rule: string;
			/** The user of the bot. */
			readonly msdyn_bot_user: string;
			/** Link the bot action failure config to the workstream. */
			readonly msdyn_botfailureactionconfig: string;
			/** Defines how the work stream will measure capacity consumption */
			readonly msdyn_capacityformat: string;
			/** The units of capacity that should be available for an item of this work stream to be processed. */
			readonly msdyn_CapacityRequired: string;
			/** Flow URL for Dynamics 365 connector */
			readonly msdyn_ConnectorsURL: string;
			/** Conversation mode of chat channels */
			readonly msdyn_conversationmode: string;
			/** Hold the time for which customer disconnect will not close the open conversation. */
			readonly msdyn_CustomerDisconnectHoldDurationForOpenConversation: string;
			/** The Customer Id equivalent to username of account set up with TeleSign */
			readonly msdyn_CustomerID: string;
			/** Link the default queue to the workstream. */
			readonly msdyn_defaultqueue: string;
			/** Direction to indicate if it's an inbound, outbound, direct inbound or direct outbound workstream */
			readonly msdyn_direction: string;
			/** Keep same agent for entire conversation */
			readonly msdyn_enableagentaffinity: string;
			/** Option for allowing automated messages or not */
			readonly msdyn_enableautomatedmessages: string;
			/** Agents can choose to work on items from push-based work streams. */
			readonly msdyn_enableselectingfrompushbasedworkstreams: string;
			/** Enable Voice V2 */
			readonly msdyn_enablevoicev2: string;
			/** Unique identifier for Workstream Entity Configuration associated with Work Stream. */
			readonly msdyn_EntityRoutingConfigurationId: string;
			/** Fall back language to be used for Live chat */
			readonly msdyn_FallBackLanguage: string;
			/** Set the time after which the work item should be offered to an agent if the work item has been waiting for input. */
			readonly msdyn_FollowUpAfterWaiting: string;
			/** Declare the expected handling time under which work items for this work stream should get resolved */
			readonly msdyn_handlingtimethreshold: string;
			readonly msdyn_intentfamilyid: string;
			/** (Deprecated) Is Intent based routing enabled for workstream */
			readonly msdyn_intentfeatureenabled: string;
			/** Indicates whether this is the default workstream or not. */
			readonly msdyn_isdefault: string;
			/** Is Intent based routing enabled for workstream */
			readonly msdyn_isICDEnabled: string;
			/** The time when Validation api was last run */
			readonly msdyn_LastValidationOn_TimezoneDateAndTime: string;
			/** The status of the last Validation results */
			readonly msdyn_LastValidationStatus: string;
			/** Unique identifier for entity instances */
			readonly msdyn_liveworkstreamId: string;
			/** Unique identifier for master entity routing configuration associated with work stream. */
			readonly msdyn_masterentityroutingconfigurationid: string;
			/** Matching logic used for Skill Based Routing like Exact Match or Closest match */
			readonly msdyn_matchinglogic: string;
			/** Maximum number of concurrent sessions that an agent can work for a work item of a particular stream. */
			readonly msdyn_MaxConcurrentConnection: string;
			/** Mode of experience */
			readonly msdyn_mode: string;
			/** Name of Work stream */
			readonly msdyn_name: string;
			/** Notification type */
			readonly msdyn_Notification: string;
			/** Notification association with scenarios */
			readonly msdyn_notificationscenarioplaceholder: string;
			/** callbackpreviewdialing notification template scenario */
			readonly msdyn_notificationtemplate_callback_previewdialing: string;
			/** Consult  notification template scenario */
			readonly msdyn_notificationtemplate_consult: string;
			/** Incoming authenticated notification template scenario */
			readonly msdyn_notificationtemplate_incoming_auth: string;
			/** Incoming unauthenticated notification template scenario */
			readonly msdyn_notificationtemplate_incoming_unauth: string;
			/** Notification template for assignment of new messages in a conversation */
			readonly msdyn_notificationtemplate_returning_conv_assig: string;
			/** supervisorAssign notification template scenario */
			readonly msdyn_notificationtemplate_supervisorassign: string;
			/** Transfer notification template scenario */
			readonly msdyn_notificationtemplate_transfer: string;
			/** Unique identifier for outbound queue associated with workstream */
			readonly msdyn_outboundqueueid: string;
			/** Record identification rule associated to a workstream */
			readonly msdyn_recordidentificationrule: string;
			/** Record Identification Validation Rule */
			readonly msdyn_RecordIdentificationValidationRule: string;
			/** Restrict download of recording */
			readonly msdyn_restrictdownloadrecording: string;
			/** Restrict download of transcript */
			readonly msdyn_restrictdownloadtranscript: string;
			/** Link contracts with live work streams. */
			readonly msdyn_routingcontractid: string;
			/** Time duration for which notification will be shown to agent. */
			readonly msdyn_Screenpoptimeout: string;
			/** Time duration options for notification. */
			readonly msdyn_Screenpoptimeout_optionSet: string;
			/** The secure API Key equivalent to password of account set up with TeleSign */
			readonly msdyn_secureapikey: string;
			/** Session association with scenarios */
			readonly msdyn_sessionscenarioplaceholder: string;
			/** Default session template scenario */
			readonly msdyn_sessiontemplate_default: string;
			/** Skill Attachment Rules Count */
			readonly msdyn_skillattachmentrulescount: string;
			/** Last Updated time of rollup field Skill Attachment Rules Count. */
			readonly msdyn_skillattachmentrulescount_Date_UtcDateAndTime: string;
			/** State of rollup field Skill Attachment Rules Count. */
			readonly msdyn_skillattachmentrulescount_State: string;
			/** SMS Provider */
			readonly msdyn_smsprovider: string;
			/** The channel to which this workstream is attached */
			readonly msdyn_streamsource: string;
			/** URL for TeleSign Inbound link */
			readonly msdyn_TelesignInboundURL: string;
			/** URL for Twilio Inbound link */
			readonly msdyn_TwilioInboundURL: string;
			/** Declare the expected waiting time under which work items for this work stream should be assigned to agents */
			readonly msdyn_waitingtimethreshold: string;
			/** Specifies the mode i.e Push/Pick for the workstream */
			readonly msdyn_workdistributionmode: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Work stream */
			readonly statecode: string;
			/** Reason for the status of the Work stream */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_liveworkstream {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
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
			/** 2 */
			Direct_Inbound,
			/** 3 */
			Direct_Outbound,
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
			/** 192350002 */
			Azure_Communication_Services,
			/** 192350000 */
			TeleSign,
			/** 192350001 */
			Twilio
		}
		enum msdyn_streamsource {
			/** 192450000 */
			Apple_Messages_for_Business,
			/** 192390000 */
			Co_browse,
			/** 192350002 */
			Custom,
			/** 192350000 */
			Entity_Records,
			/** 192330000 */
			Facebook,
			/** 192450001 */
			Googles_Business_Messages,
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
			/** 192440000 */
			Voice_call,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}