//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_livechatconfig_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			offline_messagingsection: DevKit.Controls.Section;
			offline_section: DevKit.Controls.Section;
			online_section: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			Chat_Transcripts: DevKit.Controls.Section;
			File_attachments: DevKit.Controls.Section;
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
			tab_4_section_5: DevKit.Controls.Section;
			tab_4_section_6: DevKit.Controls.Section;
			tab_4_section_6_2: DevKit.Controls.Section;
			tab_4_section_8: DevKit.Controls.Section;
			tab_4_section_9: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			Survey_section_1: DevKit.Controls.Section;
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_6_Sections {
			location_tracking: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_1: DevKit.Controls.Section;
			tab_8_section_2: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab extends DevKit.Controls.ITab {
			Section: tab_AutomatedMessages_tab_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_8 extends DevKit.Controls.ITab {
			Section: tab_tab_8_Sections;
		}
		interface Tabs {
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
			tab_8: tab_tab_8;
		}
		interface Body {
			Tab: Tabs;
			/** Configure agent name to be displayed in the chat widget */
			msdyn_agentDisplayName: DevKit.Controls.OptionSet;
			/** Unique identifier for Authentication settings associated with Chat widget. */
			msdyn_AuthsettingsId: DevKit.Controls.Lookup;
			/** Indicates if the chat widget should automatically detect user locale. */
			msdyn_AutoDetectLanguage: DevKit.Controls.Boolean;
			/** Chat logo */
			msdyn_avatarUrl: DevKit.Controls.String;
			/** Indicates whether display of wait time is enabled */
			msdyn_averagewaittime_enabled: DevKit.Controls.Boolean;
			/** List of calling options available for the chat widget */
			msdyn_callingoptions: DevKit.Controls.OptionSet;
			/** Select a co-browse provider */
			msdyn_cobrowseprovider: DevKit.Controls.String;
			/** Indicates the conversation mode of the chat widget */
			msdyn_conversationmode: DevKit.Controls.OptionSet;
			msdyn_conversationmodedisclaimer: DevKit.Controls.ActionCards;
			/** Email Template */
			msdyn_EmailTemplate: DevKit.Controls.String;
			/** This will let customers reconnect to their previous session. */
			msdyn_enablechatreconnect: DevKit.Controls.Boolean;
			/** Allow download of transcript */
			msdyn_Enablechattranscriptdownload: DevKit.Controls.Boolean;
			/** Allow email of transcript */
			msdyn_Enablechattranscriptemail: DevKit.Controls.Boolean;
			/** Co-browse allows agent and customer to interact on the same web page in real time */
			msdyn_enablecobrowse: DevKit.Controls.Boolean;
			/** Enable file attachments for agents */
			msdyn_Enablefileattachmentsforagents: DevKit.Controls.Boolean;
			/** Enable file attachments for customers */
			msdyn_Enablefileattachmentsforcustomers: DevKit.Controls.Boolean;
			/** Enable Screen sharing */
			msdyn_enablescreensharing: DevKit.Controls.Boolean;
			msdyn_FormsProButton: DevKit.Controls.WebResource;
			msdyn_generalsubheading: DevKit.Controls.ActionCards;
			/** Display Agent Generic Name */
			msdyn_genericagentdisplayname: DevKit.Controls.String;
			/** Label string indicating user to save the record to add location information */
			msdyn_infolabel: DevKit.Controls.String;
			msdyn_livechattext: DevKit.Controls.ActionCards;
			/** Work Stream Identifier */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** The mailbox where your email transcripts will be sent from. */
			msdyn_Mailbox: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Geo Location Provider API Key */
			msdyn_oc_geolocationprovider: DevKit.Controls.Lookup;
			/** The language of the chat widget. */
			msdyn_ocWidgetLanguage: DevKit.Controls.Lookup;
			/** Description for offline widget subtitle attribute */
			msdyn_offlinewidgetsubtitle: DevKit.Controls.String;
			/** Description for offline widget theme color attribute */
			msdyn_offlinewidgetthemecolor: DevKit.Controls.OptionSet;
			/** Description for offline widget title attribute */
			msdyn_offlinewidgettitle: DevKit.Controls.String;
			/** Unique identifier for Operating hour associated with Chat widget. */
			msdyn_operatinghourid: DevKit.Controls.Lookup;
			msdyn_persistentchattext: DevKit.Controls.ActionCards;
			/** Provide a link to the web portal where your chat is hosted. */
			msdyn_portalurl: DevKit.Controls.String;
			/** Enable Position In Queue feature */
			msdyn_positioninqueue_enabled: DevKit.Controls.Boolean;
			/** Enable Post-Chat (Deprecated) */
			msdyn_postchatenabled: DevKit.Controls.Boolean;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			msdyn_PostConversationSurvey: DevKit.Controls.Lookup;
			/** To enable or disable post conversation survey */
			msdyn_PostConversationSurveyEnable: DevKit.Controls.Boolean;
			/** Prefix text for survey link message that will be sent to the user. */
			msdyn_PostConversationSurveyMessageText: DevKit.Controls.String;
			/** Mode of the survey to be sent */
			msdyn_PostConversationSurveyMode: DevKit.Controls.OptionSet;
			/** Enable Pre-chat survey feature */
			msdyn_PrechatEnabled: DevKit.Controls.Boolean;
			/** Enable Proactive chat for this chat widget */
			msdyn_proactivechatenabled: DevKit.Controls.Boolean;
			/** We'll redirect customers to this webpage. */
			msdyn_redirectionurl: DevKit.Controls.String;
			/** Enable Visitor Location Feature */
			msdyn_requestvisitorlocation: DevKit.Controls.Boolean;
			/** Select a screen sharing provider */
			msdyn_screensharingprovider: DevKit.Controls.String;
			/** Description for show/hide offline widget attribute */
			msdyn_Showwidgetduringofflinehours: DevKit.Controls.Boolean;
			/** The previous agent's capacity will be held for this time period. */
			msdyn_timetoreconnectwithpreviousagent: DevKit.Controls.Integer;
			/** Widget App Identifier used to identify the chat widget */
			msdyn_widgetAppId: DevKit.Controls.String;
			/** The language of the chat widget. */
			msdyn_WidgetLocale: DevKit.Controls.Lookup;
			/** Chat position relative to the page */
			msdyn_widgetPosition: DevKit.Controls.OptionSet;
			/** Javascript snippet which can be embedded in a webpage */
			msdyn_WidgetSnippet: DevKit.Controls.String;
			/** Enable sound notifications for new incoming messages */
			msdyn_widgetsoundnotification: DevKit.Controls.Boolean;
			/** Subtitle for the chat widget */
			msdyn_widgetSubtitle: DevKit.Controls.String;
			/** Theme color for the chat widget */
			msdyn_widgetThemeColor: DevKit.Controls.OptionSet;
			/** Title for the chat widget */
			msdyn_widgetTitle: DevKit.Controls.String;
			/** Enable visual indicators for unread messages */
			msdyn_widgetvisualnotification: DevKit.Controls.Boolean;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
			WebResource_ocpreviewterms: DevKit.Controls.WebResource;
			WebResource_postconversationsurveydisclaimer: DevKit.Controls.WebResource;
		}
		interface quickForm_msdyn_reconnecttimelimit_Body {
			msdyn_AutoCloseAfterInactivity: DevKit.Controls.QuickView;
		}
		interface quickForm_msdyn_reconnecttimelimit extends DevKit.Controls.IQuickView {
			Body: quickForm_msdyn_reconnecttimelimit_Body;
		}
		interface QuickForm {
			msdyn_reconnecttimelimit: quickForm_msdyn_reconnecttimelimit;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			CustomOOOHMessages: DevKit.Controls.Grid;
			includeDomain: DevKit.Controls.Grid;
			instance_CustomSystemMessage: DevKit.Controls.Grid;
			PostchatUnauthenticatedQuestions: DevKit.Controls.Grid;
			PrechatUnauthenticatedQuestions: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_livechatconfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_livechatconfig_Information */
		Body: DevKit.Formmsdyn_livechatconfig_Information.Body;
		/** The Header section of form msdyn_livechatconfig_Information */
		Header: DevKit.Formmsdyn_livechatconfig_Information.Header;
		/** The QuickForm of form msdyn_livechatconfig_Information */
		QuickForm: DevKit.Formmsdyn_livechatconfig_Information.QuickForm;
		/** The Process of form msdyn_livechatconfig_Information */
		Process: DevKit.Formmsdyn_livechatconfig_Information.Process;
		/** The Grid of form msdyn_livechatconfig_Information */
		Grid: DevKit.Formmsdyn_livechatconfig_Information.Grid;
		/** The SidePanes of form msdyn_livechatconfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_livechatconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_livechatconfigApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Configure agent name to be displayed in the chat widget */
		msdyn_agentDisplayName: OptionSet.msdyn_livechatconfig.msdyn_agentDisplayName;
		/** Unique identifier for Authentication settings associated with Chat widget. */
		msdyn_AuthsettingsId: string;
		/** Indicates if the chat widget should automatically detect user locale. */
		msdyn_AutoDetectLanguage: boolean;
		/** Chat logo */
		msdyn_avatarUrl: string;
		/** Indicates whether display of wait time is enabled */
		msdyn_averagewaittime_enabled: boolean;
		/** List of calling options available for the chat widget */
		msdyn_callingoptions: OptionSet.msdyn_livechatconfig.msdyn_callingoptions;
		/** Select a co-browse provider */
		msdyn_cobrowseprovider: string;
		/** Indicates the conversation mode of the chat widget */
		msdyn_conversationmode: OptionSet.msdyn_livechatconfig.msdyn_conversationmode;
		/** (Deprecated) During non-operating hours */
		msdyn_Duringnonoperatinghours: string;
		/** Email Template */
		msdyn_EmailTemplate: string;
		/** This will let customers reconnect to their previous session. */
		msdyn_enablechatreconnect: boolean;
		/** Allow download of transcript */
		msdyn_Enablechattranscriptdownload: boolean;
		/** Allow email of transcript */
		msdyn_Enablechattranscriptemail: boolean;
		/** Co-browse allows agent and customer to interact on the same web page in real time */
		msdyn_enablecobrowse: boolean;
		/** Enable file attachments for agents */
		msdyn_Enablefileattachmentsforagents: boolean;
		/** Enable file attachments for customers */
		msdyn_Enablefileattachmentsforcustomers: boolean;
		/** Enable Screen sharing */
		msdyn_enablescreensharing: boolean;
		/** Display Agent Generic Name */
		msdyn_genericagentdisplayname: string;
		/** Label string indicating user to save the record to add location information */
		msdyn_infolabel: string;
		/** Language  in which chat widget is rendered */
		msdyn_Language: OptionSet.msdyn_livechatconfig.msdyn_Language;
		/** Unique identifier for entity instances */
		msdyn_livechatconfigId: string;
		/** Work Stream Identifier */
		msdyn_liveworkstreamid: string;
		/** The mailbox where your email transcripts will be sent from. */
		msdyn_Mailbox: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Geo Location Provider API Key */
		msdyn_oc_geolocationprovider: string;
		/** The language of the chat widget. */
		msdyn_ocWidgetLanguage: string;
		/** Description for offline widget subtitle attribute */
		msdyn_offlinewidgetsubtitle: string;
		/** Description for offline widget theme color attribute */
		msdyn_offlinewidgetthemecolor: OptionSet.msdyn_livechatconfig.msdyn_offlinewidgetthemecolor;
		/** Description for offline widget title attribute */
		msdyn_offlinewidgettitle: string;
		/** Unique identifier for Operating hour associated with Chat widget. */
		msdyn_operatinghourid: string;
		/** Provide a link to the web portal where your chat is hosted. */
		msdyn_portalurl: string;
		/** Enable Position In Queue feature */
		msdyn_positioninqueue_enabled: boolean;
		/** Enable Post-Chat (Deprecated) */
		msdyn_postchatenabled: boolean;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurvey: string;
		/** Enable or disable bot survey */
		msdyn_PostConversationSurveyBotSurvey: boolean;
		/** To enable or disable post conversation survey */
		msdyn_PostConversationSurveyEnable: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyMessageText: string;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyMode: OptionSet.msdyn_livechatconfig.msdyn_PostConversationSurveyMode;
		/** Enable Pre-chat survey feature */
		msdyn_PrechatEnabled: boolean;
		/** Prechat Question set for authenticated users */
		msdyn_PreChatQuestionnaireAuthenticated: string;
		/** Prechat Question set for unauthenticated users */
		msdyn_PreChatQuestionnaireUnauthenticated: string;
		/** Enable Proactive chat for this chat widget */
		msdyn_proactivechatenabled: boolean;
		/** We'll redirect customers to this webpage. */
		msdyn_redirectionurl: string;
		/** Enable Visitor Location Feature */
		msdyn_requestvisitorlocation: boolean;
		/** Select a screen sharing provider */
		msdyn_screensharingprovider: string;
		/** Agent Display Name configuration for the chat widget */
		msdyn_showagentname: boolean;
		/** Description for show/hide offline widget attribute */
		msdyn_Showwidgetduringofflinehours: boolean;
		/** The previous agent's capacity will be held for this time period. */
		msdyn_timetoreconnectwithpreviousagent: number;
		/** Widget App Identifier used to identify the chat widget */
		msdyn_widgetAppId: string;
		/** The language of the chat widget. */
		msdyn_WidgetLocale: string;
		/** Chat position relative to the page */
		msdyn_widgetPosition: OptionSet.msdyn_livechatconfig.msdyn_widgetPosition;
		/** Javascript snippet which can be embedded in a webpage */
		msdyn_WidgetSnippet: string;
		/** Enable sound notifications for new incoming messages */
		msdyn_widgetsoundnotification: boolean;
		/** Subtitle for the chat widget */
		msdyn_widgetSubtitle: string;
		/** Theme color for the chat widget */
		msdyn_widgetThemeColor: OptionSet.msdyn_livechatconfig.msdyn_widgetThemeColor;
		/** Title for the chat widget */
		msdyn_widgetTitle: string;
		/** Enable visual indicators for unread messages */
		msdyn_widgetvisualnotification: boolean;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
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
		/** Status of the Chat widget */
		statecode: OptionSet.msdyn_livechatconfig.statecode;
		/** Reason for the status of the Chat widget */
		statuscode: OptionSet.msdyn_livechatconfig.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_livechatconfig {
		enum msdyn_agentDisplayName {
			/** 192350001 */
			First_name,
			/** 192350000 */
			Full_name,
			/** 192350002 */
			Last_name,
			/** 192350003 */
			Nick_name
		}
		enum msdyn_callingoptions {
			/** 192350000 */
			No_calling,
			/** 192350001 */
			Video_and_voice_calling,
			/** 192350002 */
			Voice_only
		}
		enum msdyn_conversationmode {
			/** 192350000 */
			Live_Chat,
			/** 192350001 */
			Persistent_Chat
		}
		enum msdyn_Language {
			/** 192350000 */
			Auto_Detect,
			/** 192360014 */
			English
		}
		enum msdyn_offlinewidgetthemecolor {
			/** 19236004 */
			Black,
			/** 19236002 */
			Blue,
			/** 192350005 */
			Brown,
			/** 192350006 */
			Clay,
			/** 19236003 */
			Green,
			/** 192350003 */
			Grey,
			/** 192350001 */
			Orange,
			/** 192350002 */
			Pink,
			/** 192350007 */
			Purple,
			/** 19236001 */
			Red,
			/** 192360017 */
			Teal,
			/** 192350004 */
			Violet
		}
		enum msdyn_PostConversationSurveyMode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
		}
		enum msdyn_widgetPosition {
			/** 192236011 */
			Bottom_left,
			/** 192236010 */
			Bottom_right
		}
		enum msdyn_widgetThemeColor {
			/** 19236004 */
			Black,
			/** 19236002 */
			Blue,
			/** 192350005 */
			Brown,
			/** 192350006 */
			Clay,
			/** 19236003 */
			Green,
			/** 192350003 */
			Grey,
			/** 192350001 */
			Orange,
			/** 192350002 */
			Pink,
			/** 192350007 */
			Purple,
			/** 19236001 */
			Red,
			/** 192360017 */
			Teal,
			/** 192350004 */
			Violet
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}