//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_livechatconfig_Information {
		interface Header {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			tab_4_section_5: DevKit.Form.Controls.ControlSection;
			tab_4_section_6: DevKit.Form.Controls.ControlSection;
			File_attachments: DevKit.Form.Controls.ControlSection;
			Chat_Transcripts: DevKit.Form.Controls.ControlSection;
			tab_4_section_6_2: DevKit.Form.Controls.ControlSection;
			tab_4_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_6_Sections {
			tab_4_section_4: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
			location_tracking: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_8_Sections {
			tab_8_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_7 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_6 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_8 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_8_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
			tab_3: tab_tab_3;
			tab_5: tab_tab_5;
			tab_7: tab_tab_7;
			tab_6: tab_tab_6;
			tab_8: tab_tab_8;
		}
		interface Body {
			Tab: Tabs;
			WebResource_Disclaimer: DevKit.Form.Controls.ControlWebResource;
			PrechatUnauthenticatedQuestions: DevKit.Form.Controls.ControlGrid;
			PostchatUnauthenticatedQuestions: DevKit.Form.Controls.ControlGrid;
			includeDomain: DevKit.Form.Controls.ControlGrid;
			/** Configure agent name to be displayed in the chat widget */
			msdyn_agentDisplayName: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for Authentication settings associated with Chat widget. */
			msdyn_AuthsettingsId: DevKit.Form.Controls.ControlLookup;
			/** Indicates if the chat widget should automatically detect user locale. */
			msdyn_AutoDetectLanguage: DevKit.Form.Controls.ControlBoolean;
			/** Chat logo */
			msdyn_avatarUrl: DevKit.Form.Controls.ControlString;
			/** Select a co-browse provider */
			msdyn_cobrowseprovider: DevKit.Form.Controls.ControlString;
			msdyn_Duringnonoperatinghours: DevKit.Form.Controls.ControlString;
			msdyn_EmailTemplate: DevKit.Form.Controls.ControlString;
			msdyn_Enablechattranscriptdownload: DevKit.Form.Controls.ControlBoolean;
			msdyn_Enablechattranscriptemail: DevKit.Form.Controls.ControlBoolean;
			/** Co-browse allows agent and customer to interact on the same web page in real time */
			msdyn_enablecobrowse: DevKit.Form.Controls.ControlBoolean;
			msdyn_Enablefileattachmentsforagents: DevKit.Form.Controls.ControlBoolean;
			msdyn_Enablefileattachmentsforcustomers: DevKit.Form.Controls.ControlBoolean;
			msdyn_enablescreensharing: DevKit.Form.Controls.ControlBoolean;
			msdyn_genericagentdisplayname: DevKit.Form.Controls.ControlString;
			msdyn_infolabel: DevKit.Form.Controls.ControlString;
			msdyn_liveworkstreamid: DevKit.Form.Controls.ControlLookup;
			/** The mailbox where your email transcripts will be sent from. */
			msdyn_Mailbox: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_oc_geolocationprovider: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Operating hour associated with Chat widget. */
			msdyn_operatinghourid: DevKit.Form.Controls.ControlLookup;
			msdyn_positioninqueue_enabled: DevKit.Form.Controls.ControlBoolean;
			msdyn_postchatenabled: DevKit.Form.Controls.ControlBoolean;
			msdyn_PrechatEnabled: DevKit.Form.Controls.ControlBoolean;
			msdyn_proactivechatenabled: DevKit.Form.Controls.ControlBoolean;
			msdyn_requestvisitorlocation: DevKit.Form.Controls.ControlBoolean;
			/** Select a screensharing provider */
			msdyn_screensharingprovider: DevKit.Form.Controls.ControlString;
			msdyn_widgetAppId: DevKit.Form.Controls.ControlString;
			/** The language of the chat widget. */
			msdyn_WidgetLocale: DevKit.Form.Controls.ControlLookup;
			/** Chat position relative to the page */
			msdyn_widgetPosition: DevKit.Form.Controls.ControlOptionSet;
			msdyn_WidgetSnippet: DevKit.Form.Controls.ControlString;
			msdyn_widgetSubtitle: DevKit.Form.Controls.ControlString;
			msdyn_widgetThemeColor: DevKit.Form.Controls.ControlOptionSet;
			msdyn_widgetTitle: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_livechatconfig_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_livechatconfig_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_livechatconfig_Information */
		Body: LuckyMokey.Formmsdyn_livechatconfig_Information.Body;
		/** The Header section of form msdyn_livechatconfig_Information */
		Header: LuckyMokey.Formmsdyn_livechatconfig_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_livechatconfig {
		enum msdyn_agentDisplayName {
			/** 192350000 */
			Full_name,
			/** 192350001 */
			First_name,
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
		enum msdyn_Language {
			/** 192350000 */
			Auto_Detect,
			/** 192360014 */
			English
		}
		enum msdyn_widgetPosition {
			/** 192236010 */
			Bottom_right,
			/** 192236011 */
			Bottom_left
		}
		enum msdyn_widgetThemeColor {
			/** 19236001 */
			Red,
			/** 192360017 */
			Teal,
			/** 19236002 */
			Blue,
			/** 19236003 */
			Green,
			/** 19236004 */
			Black,
			/** 192350001 */
			Orange,
			/** 192350002 */
			Pink,
			/** 192350003 */
			Grey,
			/** 192350004 */
			Violet,
			/** 192350005 */
			Brown,
			/** 192350006 */
			Clay,
			/** 192350007 */
			Purple
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}