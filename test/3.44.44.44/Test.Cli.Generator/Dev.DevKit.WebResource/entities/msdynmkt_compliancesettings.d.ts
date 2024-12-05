//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormExternal_subscription_center_main_edit_form {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B_Sections {
			_3FEB1E85_024C_443C_9A03_2A85608AC1D8: DevKit.Controls.Section;
			_45AD733F_6D4E_4003_8D64_3E05F9ECCF89: DevKit.Controls.Section;
			_A485AA03_A4E8_4850_B764_9F9394A106FD: DevKit.Controls.Section;
		}
		interface tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B extends DevKit.Controls.ITab {
			Section: tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B_Sections;
		}
		interface Tabs {
			_8065E1ED_0362_49F0_BC28_BAEDB906E32B: tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B;
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: DevKit.Controls.NavigationItem
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
	namespace Formmsdynmkt_compliancesettings_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__16565665_EE75_49A8_BCDA_F59FE127D2F7_Sections {
			_6DEF07DB_64D5_4926_BB52_59170A475A4F: DevKit.Controls.Section;
		}
		interface tab__E485AA03_A4E8_4850_B764_9F9394A106F1_Sections {
			_0CD87215_07D5_4CF8_8BB6_6A47112A8947: DevKit.Controls.Section;
			_12128F3F_14C1_4A9A_A7D4_F7F43523285D: DevKit.Controls.Section;
			_3EA25173_750B_467B_8FD3_A7093550849D: DevKit.Controls.Section;
		}
		interface tab__E485AA03_A4E8_4850_B764_9F9394A106FD_Sections {
			_A485AA03_A4E8_4850_B764_9F9394A106FD: DevKit.Controls.Section;
			_B8E98F3F_14C1_4A9A_A7D4_F7F43523285D: DevKit.Controls.Section;
		}
		interface tab__16565665_EE75_49A8_BCDA_F59FE127D2F7 extends DevKit.Controls.ITab {
			Section: tab__16565665_EE75_49A8_BCDA_F59FE127D2F7_Sections;
		}
		interface tab__E485AA03_A4E8_4850_B764_9F9394A106F1 extends DevKit.Controls.ITab {
			Section: tab__E485AA03_A4E8_4850_B764_9F9394A106F1_Sections;
		}
		interface tab__E485AA03_A4E8_4850_B764_9F9394A106FD extends DevKit.Controls.ITab {
			Section: tab__E485AA03_A4E8_4850_B764_9F9394A106FD_Sections;
		}
		interface Tabs {
			_16565665_EE75_49A8_BCDA_F59FE127D2F7: tab__16565665_EE75_49A8_BCDA_F59FE127D2F7;
			_E485AA03_A4E8_4850_B764_9F9394A106F1: tab__E485AA03_A4E8_4850_B764_9F9394A106F1;
			_E485AA03_A4E8_4850_B764_9F9394A106FD: tab__E485AA03_A4E8_4850_B764_9F9394A106FD;
		}
		interface Body {
			Tab: Tabs;
			AddressControl: DevKit.Controls.ActionCards;
			ConsentDocLinkControl: DevKit.Controls.ActionCards;
			msdynmkt_consentmodel: DevKit.Controls.OptionSet;
			msdynmkt_defaulttracking: DevKit.Controls.Boolean;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_marketinglogconsentchangesswitch: DevKit.Controls.Boolean;
			msdynmkt_marketingrespectconsentswitch: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name1: DevKit.Controls.String;
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
			OutboundDocLinkControl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_compliancesettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_compliancesettings_Information */
		Body: DevKit.Formmsdynmkt_compliancesettings_Information.Body;
		/** The Header section of form msdynmkt_compliancesettings_Information */
		Header: DevKit.Formmsdynmkt_compliancesettings_Information.Header;
		/** The Navigation of form msdynmkt_compliancesettings_Information */
		Navigation: DevKit.Formmsdynmkt_compliancesettings_Information.Navigation;
		/** The SidePanes of form msdynmkt_compliancesettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMain_generic_form_for_Compliance_settings {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab__1CAF13BE_48D5_40AD_89AE_EB06E9DEC220_Sections {
			_306DF968_3ADF_4B5E_BA99_901FAEB1142F: DevKit.Controls.Section;
			_505DF5EC_FFF0_4BB4_A457_6E0992187CED: DevKit.Controls.Section;
			_521A7D00_3D64_4AA4_851A_B8138CB710E8: DevKit.Controls.Section;
			_A78A820C_3D44_4518_B1DB_95AD101ED6D0: DevKit.Controls.Section;
			_C3F1017A_12DC_4EB6_BF3D_E4CF58C7D5ED: DevKit.Controls.Section;
			_DC5B6086_07A8_4239_A53A_FE6CCED8618D: DevKit.Controls.Section;
		}
		interface tab__1CAF13BE_48D5_40AD_89AE_EB06E9DEC220 extends DevKit.Controls.ITab {
			Section: tab__1CAF13BE_48D5_40AD_89AE_EB06E9DEC220_Sections;
		}
		interface Tabs {
			_1CAF13BE_48D5_40AD_89AE_EB06E9DEC220: tab__1CAF13BE_48D5_40AD_89AE_EB06E9DEC220;
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: DevKit.Controls.NavigationItem
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
		interface tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B_Sections {
			_1D61EEAC_01DC_4EE1_A8EA_A163D020BD07: DevKit.Controls.Section;
			_3FEB1E85_024C_443C_9A03_2A85608AC1D8: DevKit.Controls.Section;
			_A485AA03_A4E8_4850_B764_9F9394A106FD: DevKit.Controls.Section;
		}
		interface tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B extends DevKit.Controls.ITab {
			Section: tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B_Sections;
		}
		interface Tabs {
			_8065E1ED_0362_49F0_BC28_BAEDB906E32B: tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B;
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: DevKit.Controls.NavigationItem
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
		interface tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B_Sections {
			_3FEB1E85_024C_443C_9A03_2A85608AC1D8: DevKit.Controls.Section;
			_A485AA03_A4E8_4850_B764_9F9394A106FD: DevKit.Controls.Section;
			_E485AA03_A4E8_4850_B764_9F9394A106FC: DevKit.Controls.Section;
		}
		interface tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B extends DevKit.Controls.ITab {
			Section: tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B_Sections;
		}
		interface Tabs {
			_8065E1ED_0362_49F0_BC28_BAEDB906E32B: tab__8065E1ED_0362_49F0_BC28_BAEDB906E32B;
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: DevKit.Controls.NavigationItem
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
			basicinfosection: DevKit.Controls.Section;
			externallinksection: DevKit.Controls.Section;
			trackingconsentsection: DevKit.Controls.Section;
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
			basicinfosection: DevKit.Controls.Section;
			preferencepagesection: DevKit.Controls.Section;
			trackingconsentsection: DevKit.Controls.Section;
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
			basicinfosection: DevKit.Controls.Section;
			selectscsection: DevKit.Controls.Section;
			trackingconsentsection: DevKit.Controls.Section;
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
			msdynmkt_subscriptioncenter: DevKit.Controls.ActionCards;
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
	class msdynmkt_compliancesettingsApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_compliancesettingsApi
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
		msdynmkt_compliancesettingsId: string;
		msdynmkt_consentlink: string;
		msdynmkt_consentlinktype: OptionSet.msdynmkt_compliancesettings.msdynmkt_consentlinktype;
		msdynmkt_consentmodel: OptionSet.msdynmkt_compliancesettings.msdynmkt_consentmodel;
		msdynmkt_defaulttracking: boolean;
		msdynmkt_gettrackingconsents: boolean;
		msdynmkt_jurisdiction: OptionSet.msdynmkt_compliancesettings.msdynmkt_jurisdiction;
		/** Company address */
		msdynmkt_legaladdress: string;
		msdynmkt_marketinglogconsentchangesswitch: boolean;
		msdynmkt_marketingrespectconsentswitch: boolean;
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
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Compliance Settings */
		statecode: OptionSet.msdynmkt_compliancesettings.statecode;
		/** Reason for the status of the Compliance Settings */
		statuscode: OptionSet.msdynmkt_compliancesettings.statuscode;
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
			readonly msdynmkt_compliancesettingsId: string;
			readonly msdynmkt_consentlink: string;
			readonly msdynmkt_consentlinktype: string;
			readonly msdynmkt_consentmodel: string;
			readonly msdynmkt_defaulttracking: string;
			readonly msdynmkt_gettrackingconsents: string;
			readonly msdynmkt_jurisdiction: string;
			/** Company address */
			readonly msdynmkt_legaladdress: string;
			readonly msdynmkt_marketinglogconsentchangesswitch: string;
			readonly msdynmkt_marketingrespectconsentswitch: string;
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
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
	namespace msdynmkt_compliancesettings {
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