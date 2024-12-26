//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormExternal_subscription_center_main_edit_form {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__50411B10_BFF8_4C52_8A7A_A7CB432B6031_Sections {
			_2CAF6558_3E1F_4818_B169_3B899E22C7FA: DevKit.Controls.Section;
			_3A6BBDDA_F370_44C4_B755_D77166E52602: DevKit.Controls.Section;
			_CC81843B_222B_483E_84E8_2F5269D683E6: DevKit.Controls.Section;
		}
		interface tab__50411B10_BFF8_4C52_8A7A_A7CB432B6031 extends DevKit.Controls.ITab {
			Section: tab__50411B10_BFF8_4C52_8A7A_A7CB432B6031_Sections;
		}
		interface Tabs {
			_50411B10_BFF8_4C52_8A7A_A7CB432B6031: tab__50411B10_BFF8_4C52_8A7A_A7CB432B6031;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_consentlink: DevKit.Controls.String;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Navigation {
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: DevKit.Controls.NavigationItem
		}
	}
	class FormExternal_subscription_center_main_edit_form extends DevKit.IForm {
		/**
		* External subscription center main edit form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form External_subscription_center_main_edit_form */
		Body: DevKit.FormExternal_subscription_center_main_edit_form.Body;
		/** The Header section of form External_subscription_center_main_edit_form */
		Header: DevKit.FormExternal_subscription_center_main_edit_form.Header;
		/** The Navigation of form External_subscription_center_main_edit_form */
		Navigation: DevKit.FormExternal_subscription_center_main_edit_form.Navigation;
		/** The SidePanes of form External_subscription_center_main_edit_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_compliancesettings3_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__26ADB7C3_FE93_4288_8256_E7D687A7AD8A_Sections {
			_1BAC8B3A_3A6D_451C_B12E_BA6F1F245B23: DevKit.Controls.Section;
			_42968D14_2228_48B7_B4ED_DEC33F802892: DevKit.Controls.Section;
		}
		interface tab__45A044D4_A4C4_46D7_A2E1_86958F9E5AA4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab__A8AC080A_1C22_42B1_B511_FC1396A71A0D_Sections {
			_2DDE596A_1081_4900_A78C_F2E69F3B03BA: DevKit.Controls.Section;
			_32EE62DB_5035_4ABA_982C_04EF14844F79: DevKit.Controls.Section;
			_D6912772_B4CD_4785_8363_1C90E96BCA87: DevKit.Controls.Section;
		}
		interface tab__26ADB7C3_FE93_4288_8256_E7D687A7AD8A extends DevKit.Controls.ITab {
			Section: tab__26ADB7C3_FE93_4288_8256_E7D687A7AD8A_Sections;
		}
		interface tab__45A044D4_A4C4_46D7_A2E1_86958F9E5AA4 extends DevKit.Controls.ITab {
			Section: tab__45A044D4_A4C4_46D7_A2E1_86958F9E5AA4_Sections;
		}
		interface tab__A8AC080A_1C22_42B1_B511_FC1396A71A0D extends DevKit.Controls.ITab {
			Section: tab__A8AC080A_1C22_42B1_B511_FC1396A71A0D_Sections;
		}
		interface Tabs {
			_26ADB7C3_FE93_4288_8256_E7D687A7AD8A: tab__26ADB7C3_FE93_4288_8256_E7D687A7AD8A;
			_45A044D4_A4C4_46D7_A2E1_86958F9E5AA4: tab__45A044D4_A4C4_46D7_A2E1_86958F9E5AA4;
			_A8AC080A_1C22_42B1_B511_FC1396A71A0D: tab__A8AC080A_1C22_42B1_B511_FC1396A71A0D;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			/** Additional text explaining what type of emails the customer may expect to receive. */
			msdynmkt_ssc_allowemaildescription: DevKit.Controls.String;
			/** Additional text explaining what type of SMS messages the customer may expect to receive. */
			msdynmkt_ssc_allowsmsdescription: DevKit.Controls.String;
			/** Additional text explaining what kind of data will be collected. */
			msdynmkt_ssc_allowtrackingdescription: DevKit.Controls.String;
			/** Text explaining that the customer can list reasons for changing their consent preferences. This field will be shown as optional to end-users. */
			msdynmkt_ssc_consentchangereason: DevKit.Controls.String;
			/** Additional text explaining the purpose of the preference page. */
			msdynmkt_ssc_description: DevKit.Controls.String;
			/** The text that is displayed after an unsuccessful form submission. */
			msdynmkt_ssc_errorpagetext: DevKit.Controls.String;
			/** We recommend using this field to present your privacy policy and terms of service, which you can hyperlink to. */
			msdynmkt_ssc_legaltext: DevKit.Controls.String;
			/** The text that is displayed after a succesful form submission. */
			msdynmkt_ssc_thankyoupagetext: DevKit.Controls.String;
			/** Preference page where end users can manage their consent preferences. */
			msdynmkt_ssc_title: DevKit.Controls.String;
		}
		interface Navigation {
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_compliancesettings3_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_compliancesettings3_Information */
		Body: DevKit.Formmsdynmkt_compliancesettings3_Information.Body;
		/** The Header section of form msdynmkt_compliancesettings3_Information */
		Header: DevKit.Formmsdynmkt_compliancesettings3_Information.Header;
		/** The Navigation of form msdynmkt_compliancesettings3_Information */
		Navigation: DevKit.Formmsdynmkt_compliancesettings3_Information.Navigation;
		/** The SidePanes of form msdynmkt_compliancesettings3_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMain_generic_form_for_Compliance_settings {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__FB129374_75DF_43FB_8716_95411810BEFB_Sections {
			_1BEAF5C7_812E_41AF_87B4_D9457E20C75E: DevKit.Controls.Section;
			_2CAF6558_3E1F_4818_B169_3B899E22C7FA: DevKit.Controls.Section;
			_60868DBB_8724_4F64_99D4_74EC720B9E22: DevKit.Controls.Section;
			_90A5A858_9021_449B_A731_79BEC3C0A4B9: DevKit.Controls.Section;
			_AA95AA9D_8D9F_469C_9ED1_056DEEF62061: DevKit.Controls.Section;
			_CC81843B_222B_483E_84E8_2F5269D683E6: DevKit.Controls.Section;
		}
		interface tab__FB129374_75DF_43FB_8716_95411810BEFB extends DevKit.Controls.ITab {
			Section: tab__FB129374_75DF_43FB_8716_95411810BEFB_Sections;
		}
		interface Tabs {
			_FB129374_75DF_43FB_8716_95411810BEFB: tab__FB129374_75DF_43FB_8716_95411810BEFB;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_consentlink: DevKit.Controls.String;
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Text explaining that the customer can list reasons for changing their consent preferences. This field will be shown as optional to end-users. */
			msdynmkt_ssc_consentchangereason: DevKit.Controls.String;
			/** Additional text explaining the purpose of the preference page. */
			msdynmkt_ssc_description: DevKit.Controls.String;
			/** Additional text explaining what type of emails the customer may expect to receive. */
			msdynmkt_ssc_allowemaildescription: DevKit.Controls.String;
			/** The text that is displayed after an unsuccessful form submission. */
			msdynmkt_ssc_errorpagetext: DevKit.Controls.String;
			/** We recommend using this field to present your privacy policy and terms of service, which you can hyperlink to. */
			msdynmkt_ssc_legaltext: DevKit.Controls.String;
			/** Additional text explaining what type of SMS messages the customer may expect to receive. */
			msdynmkt_ssc_allowsmsdescription: DevKit.Controls.String;
			/** The text that is displayed after a succesful form submission. */
			msdynmkt_ssc_thankyoupagetext: DevKit.Controls.String;
			/** Preference page where end users can manage their consent preferences. */
			msdynmkt_ssc_title: DevKit.Controls.String;
			/** Additional text explaining what kind of data will be collected. */
			msdynmkt_ssc_allowtrackingdescription: DevKit.Controls.String;
			msdynmkt_subscriptioncenter: DevKit.Controls.ActionCards;
			preview: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: DevKit.Controls.NavigationItem
		}
	}
	class FormMain_generic_form_for_Compliance_settings extends DevKit.IForm {
		/**
		* Main generic form for Compliance settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Main_generic_form_for_Compliance_settings */
		Body: DevKit.FormMain_generic_form_for_Compliance_settings.Body;
		/** The Header section of form Main_generic_form_for_Compliance_settings */
		Header: DevKit.FormMain_generic_form_for_Compliance_settings.Header;
		/** The Navigation of form Main_generic_form_for_Compliance_settings */
		Navigation: DevKit.FormMain_generic_form_for_Compliance_settings.Navigation;
		/** The SidePanes of form Main_generic_form_for_Compliance_settings */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPreference_center_main_edit_form {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__025423E2_0753_42B4_BFDB_6F912551BBCB_Sections {
			_2CAF6558_3E1F_4818_B169_3B899E22C7FA: DevKit.Controls.Section;
			_4CCA2A95_E79B_46E6_ADB1_6701697236E9: DevKit.Controls.Section;
			_CC81843B_222B_483E_84E8_2F5269D683E6: DevKit.Controls.Section;
		}
		interface tab__025423E2_0753_42B4_BFDB_6F912551BBCB extends DevKit.Controls.ITab {
			Section: tab__025423E2_0753_42B4_BFDB_6F912551BBCB_Sections;
		}
		interface Tabs {
			_025423E2_0753_42B4_BFDB_6F912551BBCB: tab__025423E2_0753_42B4_BFDB_6F912551BBCB;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Text explaining that the customer can list reasons for changing their consent preferences. This field will be shown as optional to end-users. */
			msdynmkt_ssc_consentchangereason: DevKit.Controls.String;
			/** Additional text explaining the purpose of the preference page. */
			msdynmkt_ssc_description: DevKit.Controls.String;
			/** Additional text explaining what type of emails the customer may expect to receive. */
			msdynmkt_ssc_allowemaildescription: DevKit.Controls.String;
			/** The text that is displayed after an unsuccessful form submission. */
			msdynmkt_ssc_errorpagetext: DevKit.Controls.String;
			/** We recommend using this field to present your privacy policy and terms of service, which you can hyperlink to. */
			msdynmkt_ssc_legaltext: DevKit.Controls.String;
			/** Additional text explaining what type of SMS messages the customer may expect to receive. */
			msdynmkt_ssc_allowsmsdescription: DevKit.Controls.String;
			/** The text that is displayed after a succesful form submission. */
			msdynmkt_ssc_thankyoupagetext: DevKit.Controls.String;
			/** Preference page where end users can manage their consent preferences. */
			msdynmkt_ssc_title: DevKit.Controls.String;
			/** Additional text explaining what kind of data will be collected. */
			msdynmkt_ssc_allowtrackingdescription: DevKit.Controls.String;
			preview: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: DevKit.Controls.NavigationItem
		}
	}
	class FormPreference_center_main_edit_form extends DevKit.IForm {
		/**
		* Preference center main edit form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Preference_center_main_edit_form */
		Body: DevKit.FormPreference_center_main_edit_form.Body;
		/** The Header section of form Preference_center_main_edit_form */
		Header: DevKit.FormPreference_center_main_edit_form.Header;
		/** The Navigation of form Preference_center_main_edit_form */
		Navigation: DevKit.FormPreference_center_main_edit_form.Navigation;
		/** The SidePanes of form Preference_center_main_edit_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSubscription_center_main_edit_form {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__D51AC0C0_FD59_46D3_B41B_C61DDBA2782F_Sections {
			_2CAF6558_3E1F_4818_B169_3B899E22C7FA: DevKit.Controls.Section;
			_B1F81D59_C8CE_4C7D_9663_D7B9368FE64C: DevKit.Controls.Section;
			_CC81843B_222B_483E_84E8_2F5269D683E6: DevKit.Controls.Section;
		}
		interface tab__D51AC0C0_FD59_46D3_B41B_C61DDBA2782F extends DevKit.Controls.ITab {
			Section: tab__D51AC0C0_FD59_46D3_B41B_C61DDBA2782F_Sections;
		}
		interface Tabs {
			_D51AC0C0_FD59_46D3_B41B_C61DDBA2782F: tab__D51AC0C0_FD59_46D3_B41B_C61DDBA2782F;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_subscriptioncenter: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: DevKit.Controls.NavigationItem
		}
	}
	class FormSubscription_center_main_edit_form extends DevKit.IForm {
		/**
		* Subscription center main edit form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Subscription_center_main_edit_form */
		Body: DevKit.FormSubscription_center_main_edit_form.Body;
		/** The Header section of form Subscription_center_main_edit_form */
		Header: DevKit.FormSubscription_center_main_edit_form.Header;
		/** The Navigation of form Subscription_center_main_edit_form */
		Navigation: DevKit.FormSubscription_center_main_edit_form.Navigation;
		/** The SidePanes of form Subscription_center_main_edit_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormExternal_subscription_center_quick_create_form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_consentlink: DevKit.Controls.String;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
	}
	class FormExternal_subscription_center_quick_create_form extends DevKit.IForm {
		/**
		* External subscription center quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form External_subscription_center_quick_create_form */
		Body: DevKit.FormExternal_subscription_center_quick_create_form.Body;
	}
	namespace FormPreference_center_quick_create_form {
		interface tab_tab_1_Sections {
			preferencepagesection: DevKit.Controls.Section;
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Additional text explaining what type of SMS messages the customer may expect to receive. */
			msdynmkt_ssc_allowsmsdescription: DevKit.Controls.String;
			/** Additional text explaining what kind of data will be collected. */
			msdynmkt_ssc_allowtrackingdescription: DevKit.Controls.String;
			/** Text explaining that the customer can list reasons for changing their consent preferences. This field will be shown as optional to end-users. */
			msdynmkt_ssc_consentchangereason: DevKit.Controls.String;
			/** Additional text explaining the purpose of the preference page. */
			msdynmkt_ssc_description: DevKit.Controls.String;
			/** Additional text explaining what type of emails the customer may expect to receive. */
			msdynmkt_ssc_emaildescription: DevKit.Controls.String;
			/** The text that is displayed after an unsuccessful form submission. */
			msdynmkt_ssc_errorpagetext: DevKit.Controls.String;
			/** We recommend using this field to present your privacy policy and terms of service, which you can hyperlink to. */
			msdynmkt_ssc_legaltext: DevKit.Controls.String;
			/** The text that is displayed after a succesful form submission. */
			msdynmkt_ssc_thankyoupagetext: DevKit.Controls.String;
			/** Preference page where end users can manage their consent preferences. */
			msdynmkt_ssc_title: DevKit.Controls.String;
		}
	}
	class FormPreference_center_quick_create_form extends DevKit.IForm {
		/**
		* Preference center quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Preference_center_quick_create_form */
		Body: DevKit.FormPreference_center_quick_create_form.Body;
	}
	namespace FormSubscription_center_quick_create_form {
		interface tab_tab_1_Sections {
			selectscsection: DevKit.Controls.Section;
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_subscriptioncenter: DevKit.Controls.String;
		}
	}
	class FormSubscription_center_quick_create_form extends DevKit.IForm {
		/**
		* Subscription center quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Subscription_center_quick_create_form */
		Body: DevKit.FormSubscription_center_quick_create_form.Body;
	}
	class msdynmkt_compliancesettings3Api {
		/**
		* DynamicsCrm.DevKit msdynmkt_compliancesettings3Api
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
		/** Unique identifier for entity instances */
		msdynmkt_compliancesettings3Id: string;
		msdynmkt_consentlink: string;
		msdynmkt_consentlinktype: OptionSet.msdynmkt_compliancesettings3.msdynmkt_consentlinktype;
		msdynmkt_consentmodel: OptionSet.msdynmkt_compliancesettings3.msdynmkt_consentmodel;
		msdynmkt_defaulttracking: boolean;
		msdynmkt_gettrackingconsents: boolean;
		msdynmkt_jurisdiction: OptionSet.msdynmkt_compliancesettings3.msdynmkt_jurisdiction;
		/** Company address */
		msdynmkt_legaladdress: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Additional text explaining what type of emails the customer may expect to receive. */
		msdynmkt_ssc_allowemaildescription: string;
		/** Additional text explaining what type of SMS messages the customer may expect to receive. */
		msdynmkt_ssc_allowsmsdescription: string;
		/** Additional text explaining what kind of data will be collected. */
		msdynmkt_ssc_allowtrackingdescription: string;
		/** Text explaining that the customer can list reasons for changing their consent preferences. This field will be shown as optional to end-users. */
		msdynmkt_ssc_consentchangereason: string;
		/** Additional text explaining the purpose of the preference page. */
		msdynmkt_ssc_description: string;
		/** Additional text explaining what type of emails the customer may expect to receive. */
		msdynmkt_ssc_emaildescription: string;
		/** Text to the right of the checkbox that the customer will select when opting in to receive marketing emails. */
		msdynmkt_ssc_emailtitle: string;
		/** The text that is displayed after an unsuccessful form submission. */
		msdynmkt_ssc_errorpagetext: string;
		/** We recommend using this field to present your privacy policy and terms of service, which you can hyperlink to. */
		msdynmkt_ssc_legaltext: string;
		/** Additional text explaining what type of SMS messages the customer may expect to receive. */
		msdynmkt_ssc_smsdescription: string;
		/** Text to the right of the checkbox that the customer will select when opting in to receive SMS messages. */
		msdynmkt_ssc_smstitle: string;
		/** The text that is displayed on the “Submit” button. This can remain “Submit,” but you can also choose another word. */
		msdynmkt_ssc_submitbuttonlabel: string;
		/** The text that is displayed after a succesful form submission. */
		msdynmkt_ssc_thankyoupagetext: string;
		/** Preference page where end users can manage their consent preferences. */
		msdynmkt_ssc_title: string;
		/** Additional text explaining what kind of data will be collected. */
		msdynmkt_ssc_trackingdescription: string;
		/** Text to the right of the checkbox that the customer will select when opting in to behavior tracking. */
		msdynmkt_ssc_trackingtitle: string;
		msdynmkt_subscriptioncenter: string;
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
		/** Status of the Compliance Settings */
		statecode: OptionSet.msdynmkt_compliancesettings3.statecode;
		/** Reason for the status of the Compliance Settings */
		statuscode: OptionSet.msdynmkt_compliancesettings3.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_compliancesettings3Id: string;
			readonly msdynmkt_consentlink: string;
			readonly msdynmkt_consentlinktype: string;
			readonly msdynmkt_consentmodel: string;
			readonly msdynmkt_defaulttracking: string;
			readonly msdynmkt_gettrackingconsents: string;
			readonly msdynmkt_jurisdiction: string;
			/** Company address */
			readonly msdynmkt_legaladdress: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Additional text explaining what type of emails the customer may expect to receive. */
			readonly msdynmkt_ssc_allowemaildescription: string;
			/** Additional text explaining what type of SMS messages the customer may expect to receive. */
			readonly msdynmkt_ssc_allowsmsdescription: string;
			/** Additional text explaining what kind of data will be collected. */
			readonly msdynmkt_ssc_allowtrackingdescription: string;
			/** Text explaining that the customer can list reasons for changing their consent preferences. This field will be shown as optional to end-users. */
			readonly msdynmkt_ssc_consentchangereason: string;
			/** Additional text explaining the purpose of the preference page. */
			readonly msdynmkt_ssc_description: string;
			/** Additional text explaining what type of emails the customer may expect to receive. */
			readonly msdynmkt_ssc_emaildescription: string;
			/** Text to the right of the checkbox that the customer will select when opting in to receive marketing emails. */
			readonly msdynmkt_ssc_emailtitle: string;
			/** The text that is displayed after an unsuccessful form submission. */
			readonly msdynmkt_ssc_errorpagetext: string;
			/** We recommend using this field to present your privacy policy and terms of service, which you can hyperlink to. */
			readonly msdynmkt_ssc_legaltext: string;
			/** Additional text explaining what type of SMS messages the customer may expect to receive. */
			readonly msdynmkt_ssc_smsdescription: string;
			/** Text to the right of the checkbox that the customer will select when opting in to receive SMS messages. */
			readonly msdynmkt_ssc_smstitle: string;
			/** The text that is displayed on the “Submit” button. This can remain “Submit,” but you can also choose another word. */
			readonly msdynmkt_ssc_submitbuttonlabel: string;
			/** The text that is displayed after a succesful form submission. */
			readonly msdynmkt_ssc_thankyoupagetext: string;
			/** Preference page where end users can manage their consent preferences. */
			readonly msdynmkt_ssc_title: string;
			/** Additional text explaining what kind of data will be collected. */
			readonly msdynmkt_ssc_trackingdescription: string;
			/** Text to the right of the checkbox that the customer will select when opting in to behavior tracking. */
			readonly msdynmkt_ssc_trackingtitle: string;
			readonly msdynmkt_subscriptioncenter: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the Compliance Settings */
			readonly statecode: string;
			/** Reason for the status of the Compliance Settings */
			readonly statuscode: string;
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
	namespace msdynmkt_compliancesettings3 {
		enum msdynmkt_consentlinktype {
			/** 534120002 */
			External_link,
			/** 534120003 */
			Preference_center,
			/** 534120000 */
			Preference_page,
			/** 534120001 */
			Subscription_center
		}
		enum msdynmkt_consentmodel {
			/** 534120001 */
			Non_Restrictive,
			/** 534120000 */
			Restrictive
		}
		enum msdynmkt_jurisdiction {
			/** 534120000 */
			GDPRCCPA,
			/** 534120001 */
			Other
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