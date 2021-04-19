//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_omnichannelconfiguration_Information {
		interface tab_tab_skillbasedrouting_new_Sections {
			tab_2_section_1_2: DevKit.Controls.Section;
			tab_skillbasedrouting_section_2_3: DevKit.Controls.Section;
		}
		interface tab_tab_skillbasedrouting_new extends DevKit.Controls.ITab {
			Section: tab_tab_skillbasedrouting_new_Sections;
		}
		interface Tabs {
			tab_skillbasedrouting_new: tab_tab_skillbasedrouting_new;
		}
		interface Body {
			Tab: Tabs;
			/** Enable Skill Based Routing for Agents & Supervisors */
			msdyn_IsSkillBasedRoutingEnabled: DevKit.Controls.Boolean;
			/** This will enable agents to view and update skills for a conversation. */
			msdyn_IsUpdateSkillsEnabled: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Grid {
			RatingModelDetails: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_omnichannelconfiguration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_omnichannelconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_omnichannelconfiguration_Information */
		Body: MyDog.Formmsdyn_omnichannelconfiguration_Information.Body;
		/** The Grid of form msdyn_omnichannelconfiguration_Information */
		Grid: MyDog.Formmsdyn_omnichannelconfiguration_Information.Grid;
	}
	namespace FormMasking_settings {
		interface tab_Self_service_settings_Sections {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E_Sections {
			_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: DevKit.Controls.Section;
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_Self_service_settings extends DevKit.Controls.ITab {
			Section: tab_Self_service_settings_Sections;
		}
		interface tab__DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E extends DevKit.Controls.ITab {
			Section: tab__DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E_Sections;
		}
		interface Tabs {
			Self_service_settings: tab_Self_service_settings;
			_DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E: tab__DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E;
		}
		interface Body {
			Tab: Tabs;
			/** Enables supervisor assign feature for the org */
			msdyn_enable_supervisor_assign: DevKit.Controls.Boolean;
			/** Enables supervisor monitor feature for the org */
			msdyn_enable_supervisor_monitor: DevKit.Controls.Boolean;
			/** Enables self service feature for the org */
			msdyn_enable_visitorjourney: DevKit.Controls.Boolean;
			/** Mask agent data */
			msdyn_maskforagent: DevKit.Controls.Boolean;
			/** Mask customer data */
			msdyn_maskforcustomer: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Grid {
			MaskingRulesInSettings: DevKit.Controls.Grid;
		}
	}
	class FormMasking_settings extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Masking_settings
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Masking_settings */
		Body: MyDog.FormMasking_settings.Body;
		/** The Grid of form Masking_settings */
		Grid: MyDog.FormMasking_settings.Grid;
	}
	namespace FormNotifications {
		interface tab_notification_templates_Sections {
			notification_templates_section: DevKit.Controls.Section;
		}
		interface tab_missed_notification_settings_Sections {
			missed_notifications_settings_section: DevKit.Controls.Section;
		}
		interface tab_tab_sound_notification_settings_Sections {
			tab_sound_notification_settings_section_3: DevKit.Controls.Section;
			tab_sound_notification_settings_section_4: DevKit.Controls.Section;
		}
		interface tab_notification_templates extends DevKit.Controls.ITab {
			Section: tab_notification_templates_Sections;
		}
		interface tab_missed_notification_settings extends DevKit.Controls.ITab {
			Section: tab_missed_notification_settings_Sections;
		}
		interface tab_tab_sound_notification_settings extends DevKit.Controls.ITab {
			Section: tab_tab_sound_notification_settings_Sections;
		}
		interface Tabs {
			notification_templates: tab_notification_templates;
			missed_notification_settings: tab_missed_notification_settings;
			tab_sound_notification_settings: tab_tab_sound_notification_settings;
		}
		interface Body {
			Tab: Tabs;
			msdyn_missednotificationssubheading: DevKit.Controls.ActionCards;
			/** Setting to change agent status when a notification has been missed. */
			msdyn_enable_missed_notifications: DevKit.Controls.Boolean;
			/** Enable sound notifications feature */
			msdyn_enablesoundnotifications: DevKit.Controls.Boolean;
			/** Lookup to display inactive presence settings. */
			msdyn_inactive_presence_lookup: DevKit.Controls.Lookup;
			/** Field to host sound form control */
			msdyn_SoundFormControl: DevKit.Controls.String;
		}
		interface quickForm_missed_notification_presence_update_quick_view_form_Body {
			msdyn_description: DevKit.Controls.QuickView;
			msdyn_presencestatustext: DevKit.Controls.QuickView;
		}
		interface quickForm_missed_notification_presence_update_quick_view_form extends DevKit.Controls.IQuickView {
			Body: quickForm_missed_notification_presence_update_quick_view_form_Body;
		}
		interface QuickForm {
			missed_notification_presence_update_quick_view_form: quickForm_missed_notification_presence_update_quick_view_form;
		}
		interface Grid {
			templates_grid: DevKit.Controls.Grid;
		}
	}
	class FormNotifications extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Notifications
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Notifications */
		Body: MyDog.FormNotifications.Body;
		/** The QuickForm of form Notifications */
		QuickForm: MyDog.FormNotifications.QuickForm;
		/** The Grid of form Notifications */
		Grid: MyDog.FormNotifications.Grid;
	}
	namespace FormPersonal_quick_replies {
		interface tab_personal_message_settings_Sections {
			personal_messaages_settings_section: DevKit.Controls.Section;
		}
		interface tab_personal_message_settings extends DevKit.Controls.ITab {
			Section: tab_personal_message_settings_Sections;
		}
		interface Tabs {
			personal_message_settings: tab_personal_message_settings;
		}
		interface Body {
			Tab: Tabs;
			/** Enable personal messages feature for the org */
			msdyn_isPersonalMessagesEnabled: DevKit.Controls.Boolean;
		}
	}
	class FormPersonal_quick_replies extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Personal_quick_replies
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Personal_quick_replies */
		Body: MyDog.FormPersonal_quick_replies.Body;
	}
	namespace FormReal_Time_Translation_Settings {
		interface tab_Real_Time_Translation_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			RealTimeTranslation_section_2: DevKit.Controls.Section;
		}
		interface tab_Real_Time_Translation extends DevKit.Controls.ITab {
			Section: tab_Real_Time_Translation_Sections;
		}
		interface Tabs {
			Real_Time_Translation: tab_Real_Time_Translation;
		}
		interface Body {
			Tab: Tabs;
			WebResource_featureEnableTerms: DevKit.Controls.WebResource;
			WebResource_ocpreviewterms: DevKit.Controls.WebResource;
			/** Default language in which customer's messages are translated for an org */
			msdyn_defaultAgentInputLanguage: DevKit.Controls.OptionSet;
			/** Enable real time translation feature for the org */
			msdyn_EnableRealTimeTranslation: DevKit.Controls.Boolean;
			/** Webresource URL used for real time translation of the messages */
			msdyn_translationwebresourceurl: DevKit.Controls.String;
		}
	}
	class FormReal_Time_Translation_Settings extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Real_Time_Translation_Settings
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Real_Time_Translation_Settings */
		Body: MyDog.FormReal_Time_Translation_Settings.Body;
	}
	namespace FormSelf_service_settings {
		interface tab_Self_service_settings_Sections {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections {
			_311AD6D5_5179_4AC3_BE91_EF746DE66813: DevKit.Controls.Section;
		}
		interface tab_Self_service_settings extends DevKit.Controls.ITab {
			Section: tab_Self_service_settings_Sections;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808 extends DevKit.Controls.ITab {
			Section: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections;
		}
		interface Tabs {
			Self_service_settings: tab_Self_service_settings;
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808;
		}
		interface Body {
			Tab: Tabs;
			/** Enables supervisor assign feature for the org */
			msdyn_enable_supervisor_assign: DevKit.Controls.Boolean;
			/** Enables supervisor monitor feature for the org */
			msdyn_enable_supervisor_monitor: DevKit.Controls.Boolean;
			/** Enables self service feature for the org */
			msdyn_enable_visitorjourney: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	class FormSelf_service_settings extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Self_service_settings
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Self_service_settings */
		Body: MyDog.FormSelf_service_settings.Body;
	}
	namespace FormSupervisor_settings {
		interface tab_Supervisor_settings_Sections {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections {
			_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: DevKit.Controls.Section;
		}
		interface tab_Supervisor_settings extends DevKit.Controls.ITab {
			Section: tab_Supervisor_settings_Sections;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808 extends DevKit.Controls.ITab {
			Section: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections;
		}
		interface Tabs {
			Supervisor_settings: tab_Supervisor_settings;
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808;
		}
		interface Body {
			Tab: Tabs;
			/** Enables supervisor assign feature for the org */
			msdyn_enable_supervisor_assign: DevKit.Controls.Boolean;
			/** Enables supervisor monitor feature for the org */
			msdyn_enable_supervisor_monitor: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	class FormSupervisor_settings extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Supervisor_settings
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Supervisor_settings */
		Body: MyDog.FormSupervisor_settings.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_omnichannelconfiguration {
		enum msdyn_defaultAgentInputLanguage {
			/** 1025 */
			Arabic_Saudi_Arabia,
			/** 1069 */
			Basque_Spain,
			/** 1026 */
			Bulgarian_Bulgaria,
			/** 1027 */
			Catalan_Spain,
			/** 2052 */
			Chinese_China,
			/** 3076 */
			Chinese_Hong_Kong,
			/** 1050 */
			Croatian_Croatia,
			/** 1029 */
			Czech_Czech_Republic,
			/** 1030 */
			Danish_Denmark,
			/** 1043 */
			Dutch_Netherlands,
			/** 1033 */
			English_United_States,
			/** 1061 */
			Estonian_Estonia,
			/** 1035 */
			Finnish_Finland,
			/** 1036 */
			French_France,
			/** 1110 */
			Galician_Spain,
			/** 1031 */
			German_Germany,
			/** 1032 */
			Greek_Greece,
			/** 1037 */
			Hebrew_Israel,
			/** 1081 */
			Hindi_India,
			/** 1038 */
			Hungarian_Hungary,
			/** 1057 */
			Indonesian_Indonesia,
			/** 1040 */
			Italian_Italy,
			/** 1041 */
			Japanese_Japan,
			/** 1087 */
			Kazakh_Kazakhstan,
			/** 1042 */
			Korean_Korea,
			/** 1062 */
			Latvian_Latvia,
			/** 1063 */
			Lithuanian_Lithuania,
			/** 1086 */
			Malay_Malaysia,
			/** 1044 */
			Norwegian_Bokmal_Norway,
			/** 1045 */
			Polish_Poland,
			/** 1046 */
			Portuguese_Brazil,
			/** 2070 */
			Portuguese_Portugal,
			/** 1048 */
			Romanian_Romania,
			/** 1049 */
			Russian_Russia,
			/** 3098 */
			Serbian_Cyrillic_Serbia,
			/** 2074 */
			Serbian_Latin_Serbia,
			/** 1051 */
			Slovak_Slovakia,
			/** 1060 */
			Slovenian_Slovenia,
			/** 3082 */
			Spanish_Spain,
			/** 1053 */
			Swedish_Sweden,
			/** 1054 */
			Thai_Thailand,
			/** 1055 */
			Turkish_Turkey,
			/** 1058 */
			Ukrainian_Ukraine,
			/** 1066 */
			Vietnamese_Vietnam
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
//{'JsForm':['Information','Masking settings','Notifications','Personal quick replies','Real Time Translation Settings','Self service settings','Supervisor settings'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}