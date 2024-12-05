//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		interface Navigation {

		}
		interface Grid {
			RatingModelDetails: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_omnichannelconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_omnichannelconfiguration_Information */
		Body: DevKit.Formmsdyn_omnichannelconfiguration_Information.Body;
		/** The Navigation of form msdyn_omnichannelconfiguration_Information */
		Navigation: DevKit.Formmsdyn_omnichannelconfiguration_Information.Navigation;
		/** The Grid of form msdyn_omnichannelconfiguration_Information */
		Grid: DevKit.Formmsdyn_omnichannelconfiguration_Information.Grid;
		/** The SidePanes of form msdyn_omnichannelconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMarkdown_Settings {
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections {
			_360DEA1C_38CE_48A4_9E94_CCF1A7E7C18E: DevKit.Controls.Section;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808 extends DevKit.Controls.ITab {
			Section: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections;
		}
		interface Tabs {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808;
		}
		interface Body {
			Tab: Tabs;
			/** Enable markdown support for messages */
			msdyn_enablemarkdown: DevKit.Controls.Boolean;
			WebResource_ocpreviewterms: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class FormMarkdown_Settings extends DevKit.IForm {
		/**
		* Markdown Settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Markdown_Settings */
		Body: DevKit.FormMarkdown_Settings.Body;
		/** The Navigation of form Markdown_Settings */
		Navigation: DevKit.FormMarkdown_Settings.Navigation;
		/** The SidePanes of form Markdown_Settings */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMasking_settings {
		interface tab__DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E_Sections {
			_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: DevKit.Controls.Section;
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_Self_service_settings_Sections {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E extends DevKit.Controls.ITab {
			Section: tab__DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E_Sections;
		}
		interface tab_Self_service_settings extends DevKit.Controls.ITab {
			Section: tab_Self_service_settings_Sections;
		}
		interface Tabs {
			_DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E: tab__DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E;
			Self_service_settings: tab_Self_service_settings;
		}
		interface Body {
			Tab: Tabs;
			/** Enables supervisor assign feature for the org */
			msdyn_enable_supervisor_assign: DevKit.Controls.Boolean;
			/** Enables supervisor force close feature for the org */
			msdyn_enable_supervisor_forceclose: DevKit.Controls.Boolean;
			/** Enables supervisor monitor feature for the org */
			msdyn_enable_supervisor_monitor: DevKit.Controls.Boolean;
			/** Enables supervisor transfer feature for the org */
			msdyn_enable_supervisor_transfer: DevKit.Controls.Boolean;
			/** Enables self service feature for the org */
			msdyn_enable_visitorjourney: DevKit.Controls.Boolean;
			/** Mask agent data */
			msdyn_maskforagent: DevKit.Controls.Boolean;
			/** Mask customer data */
			msdyn_maskforcustomer: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
		interface Grid {
			MaskingRulesInSettings: DevKit.Controls.Grid;
		}
	}
	class FormMasking_settings extends DevKit.IForm {
		/**
		* Masking settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Masking_settings */
		Body: DevKit.FormMasking_settings.Body;
		/** The Navigation of form Masking_settings */
		Navigation: DevKit.FormMasking_settings.Navigation;
		/** The Grid of form Masking_settings */
		Grid: DevKit.FormMasking_settings.Grid;
		/** The SidePanes of form Masking_settings */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNotifications {
		interface tab_agent_reject_notification_settings_Sections {
			agent_reject_notification_settings_section: DevKit.Controls.Section;
		}
		interface tab_missed_notification_settings_Sections {
			missed_notifications_settings_section: DevKit.Controls.Section;
		}
		interface tab_notification_templates_Sections {
			notification_templates_section: DevKit.Controls.Section;
		}
		interface tab_tab_sound_notification_settings_Sections {
			tab_sound_notification_settings_section_3: DevKit.Controls.Section;
			tab_sound_notification_settings_section_4: DevKit.Controls.Section;
		}
		interface tab_agent_reject_notification_settings extends DevKit.Controls.ITab {
			Section: tab_agent_reject_notification_settings_Sections;
		}
		interface tab_missed_notification_settings extends DevKit.Controls.ITab {
			Section: tab_missed_notification_settings_Sections;
		}
		interface tab_notification_templates extends DevKit.Controls.ITab {
			Section: tab_notification_templates_Sections;
		}
		interface tab_tab_sound_notification_settings extends DevKit.Controls.ITab {
			Section: tab_tab_sound_notification_settings_Sections;
		}
		interface Tabs {
			agent_reject_notification_settings: tab_agent_reject_notification_settings;
			missed_notification_settings: tab_missed_notification_settings;
			notification_templates: tab_notification_templates;
			tab_sound_notification_settings: tab_tab_sound_notification_settings;
		}
		interface Body {
			Tab: Tabs;
			msdyn_agentrejectnotificationssubheading: DevKit.Controls.ActionCards;
			/** Lookup to display DND presence. */
			msdyn_dnd_presence_lookup: DevKit.Controls.Lookup;
			/** Setting to change agent status when agent rejects a notification. */
			msdyn_enable_agent_reject_notifications: DevKit.Controls.Boolean;
			/** Setting to change agent status when a notification has been missed. */
			msdyn_enable_missed_notifications: DevKit.Controls.Boolean;
			/** Enable sound notifications feature */
			msdyn_enablesoundnotifications: DevKit.Controls.Boolean;
			/** Lookup to display inactive presence settings. */
			msdyn_inactive_presence_lookup: DevKit.Controls.Lookup;
			msdyn_missednotificationssubheading: DevKit.Controls.ActionCards;
			/** Field to host sound form control */
			msdyn_SoundFormControl: DevKit.Controls.String;
		}
		interface Navigation {

		}
		interface quickForm_agent_reject_notification_presence_update_quick_view_form_Body {
			msdyn_description: DevKit.Controls.QuickView;
			msdyn_presencestatustext: DevKit.Controls.QuickView;
		}
		interface quickForm_missed_notification_presence_update_quick_view_form_Body {
			msdyn_description: DevKit.Controls.QuickView;
			msdyn_presencestatustext: DevKit.Controls.QuickView;
		}
		interface quickForm_agent_reject_notification_presence_update_quick_view_form extends DevKit.Controls.IQuickView {
			Body: quickForm_agent_reject_notification_presence_update_quick_view_form_Body;
		}
		interface quickForm_missed_notification_presence_update_quick_view_form extends DevKit.Controls.IQuickView {
			Body: quickForm_missed_notification_presence_update_quick_view_form_Body;
		}
		interface QuickForm {
			agent_reject_notification_presence_update_quick_view_form: quickForm_agent_reject_notification_presence_update_quick_view_form;
			missed_notification_presence_update_quick_view_form: quickForm_missed_notification_presence_update_quick_view_form;
		}
		interface Grid {
			templates_grid: DevKit.Controls.Grid;
		}
	}
	class FormNotifications extends DevKit.IForm {
		/**
		* Notifications [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Notifications */
		Body: DevKit.FormNotifications.Body;
		/** The Navigation of form Notifications */
		Navigation: DevKit.FormNotifications.Navigation;
		/** The QuickForm of form Notifications */
		QuickForm: DevKit.FormNotifications.QuickForm;
		/** The Grid of form Notifications */
		Grid: DevKit.FormNotifications.Grid;
		/** The SidePanes of form Notifications */
		SidePanes: DevKit.SidePanes;
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
		interface Navigation {

		}
	}
	class FormPersonal_quick_replies extends DevKit.IForm {
		/**
		* Personal quick replies [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Personal_quick_replies */
		Body: DevKit.FormPersonal_quick_replies.Body;
		/** The Navigation of form Personal_quick_replies */
		Navigation: DevKit.FormPersonal_quick_replies.Navigation;
		/** The SidePanes of form Personal_quick_replies */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormReal_Time_Translation_Settings {
		interface tab_Real_Time_Translation_Sections {
			RealTimeTranslation_section_2: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_Real_Time_Translation extends DevKit.Controls.ITab {
			Section: tab_Real_Time_Translation_Sections;
		}
		interface Tabs {
			Real_Time_Translation: tab_Real_Time_Translation;
		}
		interface Body {
			Tab: Tabs;
			/** Default language in which customer's messages are translated for an org */
			msdyn_defaultAgentInputLanguage: DevKit.Controls.OptionSet;
			/** Enable real time translation feature for the org */
			msdyn_EnableRealTimeTranslation: DevKit.Controls.Boolean;
			/** Webresource URL used for real time translation of the messages */
			msdyn_translationwebresourceurl: DevKit.Controls.String;
			WebResource_featureEnableTerms: DevKit.Controls.WebResource;
			WebResource_ocpreviewterms: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class FormReal_Time_Translation_Settings extends DevKit.IForm {
		/**
		* Real Time Translation Settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Real_Time_Translation_Settings */
		Body: DevKit.FormReal_Time_Translation_Settings.Body;
		/** The Navigation of form Real_Time_Translation_Settings */
		Navigation: DevKit.FormReal_Time_Translation_Settings.Navigation;
		/** The SidePanes of form Real_Time_Translation_Settings */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSelf_service_settings {
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections {
			_311AD6D5_5179_4AC3_BE91_EF746DE66813: DevKit.Controls.Section;
		}
		interface tab_Self_service_settings_Sections {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808 extends DevKit.Controls.ITab {
			Section: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections;
		}
		interface tab_Self_service_settings extends DevKit.Controls.ITab {
			Section: tab_Self_service_settings_Sections;
		}
		interface Tabs {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808;
			Self_service_settings: tab_Self_service_settings;
		}
		interface Body {
			Tab: Tabs;
			/** Enables supervisor assign feature for the org */
			msdyn_enable_supervisor_assign: DevKit.Controls.Boolean;
			/** Enables supervisor force close feature for the org */
			msdyn_enable_supervisor_forceclose: DevKit.Controls.Boolean;
			/** Enables supervisor monitor feature for the org */
			msdyn_enable_supervisor_monitor: DevKit.Controls.Boolean;
			/** Enables supervisor transfer feature for the org */
			msdyn_enable_supervisor_transfer: DevKit.Controls.Boolean;
			/** Enables self service feature for the org */
			msdyn_enable_visitorjourney: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormSelf_service_settings extends DevKit.IForm {
		/**
		* Self service settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Self_service_settings */
		Body: DevKit.FormSelf_service_settings.Body;
		/** The Navigation of form Self_service_settings */
		Navigation: DevKit.FormSelf_service_settings.Navigation;
		/** The SidePanes of form Self_service_settings */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSkill_based_routing_settings {
		interface tab_tab_1_Sections {
			tab_1_section_1: DevKit.Controls.Section;
			tab_1_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** This will enable agents to view and update skills for a conversation. */
			msdyn_IsUpdateSkillsEnabled: DevKit.Controls.Boolean;
		}
		interface Navigation {

		}
		interface Grid {
			RatingModelDetails: DevKit.Controls.Grid;
		}
	}
	class FormSkill_based_routing_settings extends DevKit.IForm {
		/**
		* Skill based routing settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Skill_based_routing_settings */
		Body: DevKit.FormSkill_based_routing_settings.Body;
		/** The Navigation of form Skill_based_routing_settings */
		Navigation: DevKit.FormSkill_based_routing_settings.Navigation;
		/** The Grid of form Skill_based_routing_settings */
		Grid: DevKit.FormSkill_based_routing_settings.Grid;
		/** The SidePanes of form Skill_based_routing_settings */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSupervisor_settings {
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections {
			_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: DevKit.Controls.Section;
		}
		interface tab_Supervisor_settings_Sections {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808 extends DevKit.Controls.ITab {
			Section: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections;
		}
		interface tab_Supervisor_settings extends DevKit.Controls.ITab {
			Section: tab_Supervisor_settings_Sections;
		}
		interface Tabs {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808;
			Supervisor_settings: tab_Supervisor_settings;
		}
		interface Body {
			Tab: Tabs;
			/** Enables supervisor assign feature for the org */
			msdyn_enable_supervisor_assign: DevKit.Controls.Boolean;
			/** Enables supervisor force close feature for the org */
			msdyn_enable_supervisor_forceclose: DevKit.Controls.Boolean;
			/** Enables supervisor monitor feature for the org */
			msdyn_enable_supervisor_monitor: DevKit.Controls.Boolean;
			/** Enables supervisor transfer feature for the org */
			msdyn_enable_supervisor_transfer: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormSupervisor_settings extends DevKit.IForm {
		/**
		* Supervisor settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Supervisor_settings */
		Body: DevKit.FormSupervisor_settings.Body;
		/** The Navigation of form Supervisor_settings */
		Navigation: DevKit.FormSupervisor_settings.Navigation;
		/** The SidePanes of form Supervisor_settings */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTranscript_settings {
		interface tab_transcript_settings_Sections {
			transcript_settings_section: DevKit.Controls.Section;
		}
		interface tab_transcript_settings extends DevKit.Controls.ITab {
			Section: tab_transcript_settings_Sections;
		}
		interface Tabs {
			transcript_settings: tab_transcript_settings;
		}
		interface Body {
			Tab: Tabs;
			/** Enable new conversation form feature */
			msdyn_enablenewconversationform: DevKit.Controls.Boolean;
		}
		interface Navigation {

		}
	}
	class FormTranscript_settings extends DevKit.IForm {
		/**
		* Transcript settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Transcript_settings */
		Body: DevKit.FormTranscript_settings.Body;
		/** The Navigation of form Transcript_settings */
		Navigation: DevKit.FormTranscript_settings.Navigation;
		/** The SidePanes of form Transcript_settings */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_omnichannelconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_omnichannelconfigurationApi
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
		readonly ComponentState: OptionSet.msdyn_omnichannelconfiguration.ComponentState;
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
		/** Default language in which customer's messages are translated for an org */
		msdyn_defaultAgentInputLanguage: OptionSet.msdyn_omnichannelconfiguration.msdyn_defaultAgentInputLanguage;
		/** Store if migration for Delegated Prioritization is complete/not complete. */
		msdyn_delegated_prioritization_migration: boolean;
		/** Lookup to display DND presence. */
		msdyn_dnd_presence_lookup: string;
		/** Setting to change advance entity routing for the org. */
		msdyn_enable_advance_entity_routing: boolean;
		/** Setting to change agent status when agent rejects a notification. */
		msdyn_enable_agent_reject_notifications: boolean;
		/** Setting to change agent status when a notification has been missed. */
		msdyn_enable_missed_notifications: boolean;
		/** Enable consult pane */
		msdyn_enable_new_consult_exp: boolean;
		/** Setting to enable/disable preferred agent routing for an organization. */
		msdyn_enable_preferred_agent_routing: boolean;
		/** Enables supervisor assign feature for the org */
		msdyn_enable_supervisor_assign: boolean;
		/** Enables supervisor force close feature for the org */
		msdyn_enable_supervisor_forceclose: boolean;
		/** Enables supervisor monitor feature for the org */
		msdyn_enable_supervisor_monitor: boolean;
		/** Enables supervisor transfer feature for the org */
		msdyn_enable_supervisor_transfer: boolean;
		/** Setting to change unified routing diagnostic for the org. */
		msdyn_enable_unified_routing_diagnostic: boolean;
		/** Enables self service feature for the org */
		msdyn_enable_visitorjourney: boolean;
		/** Enable markdown support for messages */
		msdyn_enablemarkdown: boolean;
		/** Enable new conversation form feature */
		msdyn_enablenewconversationform: boolean;
		/** Enable real time translation feature for the org */
		msdyn_EnableRealTimeTranslation: boolean;
		/** Enable sound notifications feature */
		msdyn_enablesoundnotifications: boolean;
		/** Lookup to display inactive presence settings. */
		msdyn_inactive_presence_lookup: string;
		msdyn_isdefaultpersonamapped: boolean;
		/** Allow agents to create personal sound settings */
		msdyn_ispersonalizationofsoundenabled: boolean;
		/** Enable personal messages feature for the org */
		msdyn_isPersonalMessagesEnabled: boolean;
		msdyn_ispersonasecurityrolemappingenabled: boolean;
		/** Enable Skill Based Routing for Agents & Supervisors */
		msdyn_IsSkillBasedRoutingEnabled: boolean;
		/** This will enable agents to view and update skills for a conversation. */
		msdyn_IsUpdateSkillsEnabled: boolean;
		/** Mask agent data */
		msdyn_maskforagent: boolean;
		/** Mask customer data */
		msdyn_maskforcustomer: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Number of times an agent can reject or time-out notification. */
		msdyn_number_of_declines_allowed: number;
		/** Unique identifier for entity instances */
		msdyn_omnichannelconfigurationId: string;
		/** Setting the Preferred Agent Backup Mode for Preferred Agent Routing. */
		msdyn_preferredagentbackupmode: OptionSet.msdyn_omnichannelconfiguration.msdyn_preferredagentbackupmode;
		/** Field to host sound form control */
		msdyn_SoundFormControl: string;
		/** Webresource URL used for real time translation of the messages */
		msdyn_translationwebresourceurl: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Omnichannel Configuration */
		statecode: OptionSet.msdyn_omnichannelconfiguration.statecode;
		/** Reason for the status of the Omnichannel Configuration */
		statuscode: OptionSet.msdyn_omnichannelconfiguration.statuscode;
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
			/** Default language in which customer's messages are translated for an org */
			readonly msdyn_defaultAgentInputLanguage: string;
			/** Store if migration for Delegated Prioritization is complete/not complete. */
			readonly msdyn_delegated_prioritization_migration: string;
			/** Lookup to display DND presence. */
			readonly msdyn_dnd_presence_lookup: string;
			/** Setting to change advance entity routing for the org. */
			readonly msdyn_enable_advance_entity_routing: string;
			/** Setting to change agent status when agent rejects a notification. */
			readonly msdyn_enable_agent_reject_notifications: string;
			/** Setting to change agent status when a notification has been missed. */
			readonly msdyn_enable_missed_notifications: string;
			/** Enable consult pane */
			readonly msdyn_enable_new_consult_exp: string;
			/** Setting to enable/disable preferred agent routing for an organization. */
			readonly msdyn_enable_preferred_agent_routing: string;
			/** Enables supervisor assign feature for the org */
			readonly msdyn_enable_supervisor_assign: string;
			/** Enables supervisor force close feature for the org */
			readonly msdyn_enable_supervisor_forceclose: string;
			/** Enables supervisor monitor feature for the org */
			readonly msdyn_enable_supervisor_monitor: string;
			/** Enables supervisor transfer feature for the org */
			readonly msdyn_enable_supervisor_transfer: string;
			/** Setting to change unified routing diagnostic for the org. */
			readonly msdyn_enable_unified_routing_diagnostic: string;
			/** Enables self service feature for the org */
			readonly msdyn_enable_visitorjourney: string;
			/** Enable markdown support for messages */
			readonly msdyn_enablemarkdown: string;
			/** Enable new conversation form feature */
			readonly msdyn_enablenewconversationform: string;
			/** Enable real time translation feature for the org */
			readonly msdyn_EnableRealTimeTranslation: string;
			/** Enable sound notifications feature */
			readonly msdyn_enablesoundnotifications: string;
			/** Lookup to display inactive presence settings. */
			readonly msdyn_inactive_presence_lookup: string;
			readonly msdyn_isdefaultpersonamapped: string;
			/** Allow agents to create personal sound settings */
			readonly msdyn_ispersonalizationofsoundenabled: string;
			/** Enable personal messages feature for the org */
			readonly msdyn_isPersonalMessagesEnabled: string;
			readonly msdyn_ispersonasecurityrolemappingenabled: string;
			/** Enable Skill Based Routing for Agents & Supervisors */
			readonly msdyn_IsSkillBasedRoutingEnabled: string;
			/** This will enable agents to view and update skills for a conversation. */
			readonly msdyn_IsUpdateSkillsEnabled: string;
			/** Mask agent data */
			readonly msdyn_maskforagent: string;
			/** Mask customer data */
			readonly msdyn_maskforcustomer: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Number of times an agent can reject or time-out notification. */
			readonly msdyn_number_of_declines_allowed: string;
			/** Unique identifier for entity instances */
			readonly msdyn_omnichannelconfigurationId: string;
			/** Setting the Preferred Agent Backup Mode for Preferred Agent Routing. */
			readonly msdyn_preferredagentbackupmode: string;
			/** Field to host sound form control */
			readonly msdyn_SoundFormControl: string;
			/** Webresource URL used for real time translation of the messages */
			readonly msdyn_translationwebresourceurl: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Omnichannel Configuration */
			readonly statecode: string;
			/** Reason for the status of the Omnichannel Configuration */
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
	namespace msdyn_omnichannelconfiguration {
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
		enum msdyn_preferredagentbackupmode {
			/** 192350001 */
			NextBestAssignment,
			/** 192350000 */
			NoAssignment
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