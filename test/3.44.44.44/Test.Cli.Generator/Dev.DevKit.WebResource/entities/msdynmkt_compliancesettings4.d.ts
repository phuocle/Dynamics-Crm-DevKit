//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormExternal_link_edit_form {
		interface tab_Consent_purposes_Sections {
			Communication_purposes: DevKit.Controls.Section;
			Multienforcement_Communication_purposes: DevKit.Controls.Section;
			Tracking_purpose: DevKit.Controls.Section;
		}
		interface tab_Double_opt_in_Sections {
		}
		interface tab_Consent_purposes extends DevKit.Controls.ITab {
			Section: tab_Consent_purposes_Sections;
		}
		interface tab_Double_opt_in extends DevKit.Controls.ITab {
			Section: tab_Double_opt_in_Sections;
		}
		interface Tabs {
			Consent_purposes: tab_Consent_purposes;
			Double_opt_in: tab_Double_opt_in;
		}
		interface Body {
			Tab: Tabs;
			description: DevKit.Controls.ActionCards;
			msdynmkt_consentlink: DevKit.Controls.String;
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			/** Gets the current status of double opt in. */
			msdynmkt_DOIStatus: DevKit.Controls.OptionSet;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_quiettimesetting: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_compliancesettings4_formsubmission: DevKit.Controls.NavigationItem,
			msdynmkt_compliancesettings4_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: DevKit.Controls.NavigationItem
		}
		interface Grid {
			MultienforcementPurposegrid: DevKit.Controls.Grid;
			Purposegrid: DevKit.Controls.Grid;
		}
	}
	class FormExternal_link_edit_form extends DevKit.IForm {
		/**
		* External link edit form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form External_link_edit_form */
		Body: DevKit.FormExternal_link_edit_form.Body;
		/** The Navigation of form External_link_edit_form */
		Navigation: DevKit.FormExternal_link_edit_form.Navigation;
		/** The Grid of form External_link_edit_form */
		Grid: DevKit.FormExternal_link_edit_form.Grid;
		/** The SidePanes of form External_link_edit_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMain_generic_form_for_Compliance_profiles {
		interface tab_Consent_purposes_Sections {
			Communication_purposes: DevKit.Controls.Section;
			Multienforcement_Communication_purposes: DevKit.Controls.Section;
			Tracking_purpose: DevKit.Controls.Section;
		}
		interface tab_Double_opt_in_Sections {
		}
		interface tab_General_Sections {
			Default_preference_center: DevKit.Controls.Section;
			External_link: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			Preference_page: DevKit.Controls.Section;
			quiet_time_setting: DevKit.Controls.Section;
			Subscription_center: DevKit.Controls.Section;
			Tracking_Consent: DevKit.Controls.Section;
		}
		interface tab_Consent_purposes extends DevKit.Controls.ITab {
			Section: tab_Consent_purposes_Sections;
		}
		interface tab_Double_opt_in extends DevKit.Controls.ITab {
			Section: tab_Double_opt_in_Sections;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			Consent_purposes: tab_Consent_purposes;
			Double_opt_in: tab_Double_opt_in;
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			description: DevKit.Controls.ActionCards;
			msdynmkt_consentlink: DevKit.Controls.String;
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			/** Gets the current status of double opt in. */
			msdynmkt_DOIStatus: DevKit.Controls.OptionSet;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_quiettimesetting: DevKit.Controls.Lookup;
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
			msdynmkt_subscriptioncenter: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			preview: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_compliancesettings4_formsubmission: DevKit.Controls.NavigationItem,
			msdynmkt_compliancesettings4_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: DevKit.Controls.NavigationItem
		}
		interface Grid {
			MultienforcementPurposegrid: DevKit.Controls.Grid;
			Purposegrid: DevKit.Controls.Grid;
		}
	}
	class FormMain_generic_form_for_Compliance_profiles extends DevKit.IForm {
		/**
		* Main generic form for Compliance profiles [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Main_generic_form_for_Compliance_profiles */
		Body: DevKit.FormMain_generic_form_for_Compliance_profiles.Body;
		/** The Navigation of form Main_generic_form_for_Compliance_profiles */
		Navigation: DevKit.FormMain_generic_form_for_Compliance_profiles.Navigation;
		/** The Grid of form Main_generic_form_for_Compliance_profiles */
		Grid: DevKit.FormMain_generic_form_for_Compliance_profiles.Grid;
		/** The SidePanes of form Main_generic_form_for_Compliance_profiles */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPreference_center_edit_form {
		interface tab_Consent_purposes_Sections {
			Communication_purposes: DevKit.Controls.Section;
			Multienforcement_Communication_purposes: DevKit.Controls.Section;
			Tracking_purpose: DevKit.Controls.Section;
		}
		interface tab_Double_opt_in_Sections {
		}
		interface tab_Consent_purposes extends DevKit.Controls.ITab {
			Section: tab_Consent_purposes_Sections;
		}
		interface tab_Double_opt_in extends DevKit.Controls.ITab {
			Section: tab_Double_opt_in_Sections;
		}
		interface Tabs {
			Consent_purposes: tab_Consent_purposes;
			Double_opt_in: tab_Double_opt_in;
		}
		interface Body {
			Tab: Tabs;
			description: DevKit.Controls.ActionCards;
			extended_form: DevKit.Controls.ActionCards;
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			/** Consent provider */
			msdynmkt_ConsentProviderId: DevKit.Controls.Lookup;
			/** Gets the current status of double opt in. */
			msdynmkt_DOIStatus: DevKit.Controls.OptionSet;
			/** Extended entity */
			msdynmkt_extendedentityId: DevKit.Controls.Lookup;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_quiettimesetting: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_compliancesettings4_formsubmission: DevKit.Controls.NavigationItem,
			msdynmkt_compliancesettings4_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: DevKit.Controls.NavigationItem
		}
		interface Grid {
			MultienforcementPurposegrid: DevKit.Controls.Grid;
			Purposegrid: DevKit.Controls.Grid;
		}
	}
	class FormPreference_center_edit_form extends DevKit.IForm {
		/**
		* Preference center edit form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Preference_center_edit_form */
		Body: DevKit.FormPreference_center_edit_form.Body;
		/** The Navigation of form Preference_center_edit_form */
		Navigation: DevKit.FormPreference_center_edit_form.Navigation;
		/** The Grid of form Preference_center_edit_form */
		Grid: DevKit.FormPreference_center_edit_form.Grid;
		/** The SidePanes of form Preference_center_edit_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPreference_center_main_edit_form {
		interface tab__0081EC07_1089_4BC1_8037_9FDBDC01B5DF_Sections {
			_248B0653_6483_42D6_AE03_B641DECBE974: DevKit.Controls.Section;
			_760AD881_733A_49D0_9009_C4156D48D4BF: DevKit.Controls.Section;
			_D933764E_3B6A_4FC8_AE79_592D49B40D40: DevKit.Controls.Section;
		}
		interface tab__0081EC07_1089_4BC1_8037_9FDBDC01B5DF extends DevKit.Controls.ITab {
			Section: tab__0081EC07_1089_4BC1_8037_9FDBDC01B5DF_Sections;
		}
		interface Tabs {
			_0081EC07_1089_4BC1_8037_9FDBDC01B5DF: tab__0081EC07_1089_4BC1_8037_9FDBDC01B5DF;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
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
			msdynmkt_compliancesettings4_formsubmission: DevKit.Controls.NavigationItem,
			msdynmkt_compliancesettings4_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: DevKit.Controls.NavigationItem
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
		/** The Navigation of form Preference_center_main_edit_form */
		Navigation: DevKit.FormPreference_center_main_edit_form.Navigation;
		/** The SidePanes of form Preference_center_main_edit_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPreference_page_edit_form {
		interface tab_Consent_purposes_Sections {
			Communication_purposes: DevKit.Controls.Section;
			Multienforcement_Communication_purposes: DevKit.Controls.Section;
			Tracking_purpose: DevKit.Controls.Section;
		}
		interface tab_Double_opt_in_Sections {
		}
		interface tab_Consent_purposes extends DevKit.Controls.ITab {
			Section: tab_Consent_purposes_Sections;
		}
		interface tab_Double_opt_in extends DevKit.Controls.ITab {
			Section: tab_Double_opt_in_Sections;
		}
		interface Tabs {
			Consent_purposes: tab_Consent_purposes;
			Double_opt_in: tab_Double_opt_in;
		}
		interface Body {
			Tab: Tabs;
			description: DevKit.Controls.ActionCards;
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			/** Gets the current status of double opt in. */
			msdynmkt_DOIStatus: DevKit.Controls.OptionSet;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_quiettimesetting: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_compliancesettings4_formsubmission: DevKit.Controls.NavigationItem,
			msdynmkt_compliancesettings4_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: DevKit.Controls.NavigationItem
		}
		interface Grid {
			MultienforcementPurposegrid: DevKit.Controls.Grid;
			Purposegrid: DevKit.Controls.Grid;
		}
	}
	class FormPreference_page_edit_form extends DevKit.IForm {
		/**
		* Preference page edit form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Preference_page_edit_form */
		Body: DevKit.FormPreference_page_edit_form.Body;
		/** The Navigation of form Preference_page_edit_form */
		Navigation: DevKit.FormPreference_page_edit_form.Navigation;
		/** The Grid of form Preference_page_edit_form */
		Grid: DevKit.FormPreference_page_edit_form.Grid;
		/** The SidePanes of form Preference_page_edit_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSubscriptionCenterEditForm {
		interface tab_Consent_purposes_Sections {
			Communication_purposes: DevKit.Controls.Section;
			Multienforcement_Communication_purposes: DevKit.Controls.Section;
			Tracking_purpose: DevKit.Controls.Section;
		}
		interface tab_Double_opt_in_Sections {
		}
		interface tab_Consent_purposes extends DevKit.Controls.ITab {
			Section: tab_Consent_purposes_Sections;
		}
		interface tab_Double_opt_in extends DevKit.Controls.ITab {
			Section: tab_Double_opt_in_Sections;
		}
		interface Tabs {
			Consent_purposes: tab_Consent_purposes;
			Double_opt_in: tab_Double_opt_in;
		}
		interface Body {
			Tab: Tabs;
			description: DevKit.Controls.ActionCards;
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			/** Gets the current status of double opt in. */
			msdynmkt_DOIStatus: DevKit.Controls.OptionSet;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_quiettimesetting: DevKit.Controls.Lookup;
			msdynmkt_subscriptioncenter: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_compliancesettings4_formsubmission: DevKit.Controls.NavigationItem,
			msdynmkt_compliancesettings4_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: DevKit.Controls.NavigationItem
		}
		interface Grid {
			MultienforcementPurposegrid: DevKit.Controls.Grid;
			Purposegrid: DevKit.Controls.Grid;
		}
	}
	class FormSubscriptionCenterEditForm extends DevKit.IForm {
		/**
		* SubscriptionCenterEditForm [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SubscriptionCenterEditForm */
		Body: DevKit.FormSubscriptionCenterEditForm.Body;
		/** The Navigation of form SubscriptionCenterEditForm */
		Navigation: DevKit.FormSubscriptionCenterEditForm.Navigation;
		/** The Grid of form SubscriptionCenterEditForm */
		Grid: DevKit.FormSubscriptionCenterEditForm.Grid;
		/** The SidePanes of form SubscriptionCenterEditForm */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormDefault_preference_center_quick_create {
		interface tab_tab_1_Sections {
			Existing_Consent: DevKit.Controls.Section;
			tab_1_column_1_section_1: DevKit.Controls.Section;
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
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			/** UIOnly Link existing profile */
			msdynmkt_uionly_link_existing_profile: DevKit.Controls.Boolean;
			/** link existing profile to attach the existing purposes */
			msdynmkt_uionly_linked_profile: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
	}
	class FormDefault_preference_center_quick_create extends DevKit.IForm {
		/**
		* Default preference center quick create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Default_preference_center_quick_create */
		Body: DevKit.FormDefault_preference_center_quick_create.Body;
	}
	namespace FormExternal_link_subscription_center_quick_create_form {
		interface tab_tab_1_Sections {
			Existing_consent: DevKit.Controls.Section;
			External_link: DevKit.Controls.Section;
			tab_1_column_1_section_1: DevKit.Controls.Section;
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
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			/** Text to the right of the checkbox that the customer will select when opting in to receive marketing emails. */
			msdynmkt_ssc_emailtitle: DevKit.Controls.String;
			/** UIOnly Link existing profile */
			msdynmkt_uionly_link_existing_profile: DevKit.Controls.Boolean;
			/** link existing profile to attach the existing purposes */
			msdynmkt_uionly_linked_profile: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
	}
	class FormExternal_link_subscription_center_quick_create_form extends DevKit.IForm {
		/**
		* External link subscription center quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form External_link_subscription_center_quick_create_form */
		Body: DevKit.FormExternal_link_subscription_center_quick_create_form.Body;
	}
	namespace FormPreference_page_quick_create_form {
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
			/** Additional text explaining what type of emails the customer may expect to receive. */
			msdynmkt_emaildescription: DevKit.Controls.String;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			/** Additional text explaining what type of SMS messages the customer may expect to receive. */
			msdynmkt_ssc_allowsmsdescription: DevKit.Controls.String;
			/** Text explaining that the customer can list reasons for changing their consent preferences. This field will be shown as optional to end-users. */
			msdynmkt_ssc_consentchangereason: DevKit.Controls.String;
			/** The text that is displayed after an unsuccessful form submission. */
			msdynmkt_ssc_errorpagetext: DevKit.Controls.String;
			/** We recommend using this field to present your privacy policy and terms of service, which you can hyperlink to. */
			msdynmkt_ssc_legaltext: DevKit.Controls.String;
			/** The text that is displayed after a succesful form submission. */
			msdynmkt_ssc_thankyoupagetext: DevKit.Controls.String;
			/** Preference page where end users can manage their consent preferences. */
			msdynmkt_ssc_title: DevKit.Controls.String;
			/** Additional text explaining what kind of data will be collected. */
			msdynmkt_ssc_trackingdescription: DevKit.Controls.String;
		}
	}
	class FormPreference_page_quick_create_form extends DevKit.IForm {
		/**
		* Preference page quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Preference_page_quick_create_form */
		Body: DevKit.FormPreference_page_quick_create_form.Body;
	}
	namespace FormSubscription_center_quick_create_form {
		interface tab_tab_1_Sections {
			Select_a_subscription_center: DevKit.Controls.Section;
			tab_1_column_1_section_1: DevKit.Controls.Section;
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
			msdynmkt_consentlinktype: DevKit.Controls.OptionSet;
			msdynmkt_gettrackingconsents: DevKit.Controls.Boolean;
			/** Company address */
			msdynmkt_legaladdress: DevKit.Controls.String;
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_subscriptioncenter: DevKit.Controls.String;
			/** UIOnly Link existing profile */
			msdynmkt_uionly_link_existing_profile: DevKit.Controls.Boolean;
			/** link existing profile to attach the existing purposes */
			msdynmkt_uionly_linked_profile: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
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
	class msdynmkt_compliancesettings4Api {
		/**
		* DynamicsCrm.DevKit msdynmkt_compliancesettings4Api
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
		readonly ComponentState: OptionSet.msdynmkt_compliancesettings4.ComponentState;
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
		/** Unique identifier for entity instances */
		msdynmkt_compliancesettings4Id: string;
		msdynmkt_consentlink: string;
		msdynmkt_consentlinktype: OptionSet.msdynmkt_compliancesettings4.msdynmkt_consentlinktype;
		/** Consent provider */
		msdynmkt_ConsentProviderId: string;
		/** Double Opt-in Confirmation Text */
		msdynmkt_DOIConfirmationText: string;
		/** The type of double opt in confirmation - Text or URL. */
		msdynmkt_DOIConfirmationType: OptionSet.msdynmkt_compliancesettings4.msdynmkt_DOIConfirmationType;
		/** Double Opt-in Confirmation URL */
		msdynmkt_DOIConfirmationURL: string;
		/** Double Opt-in Failure Reason */
		msdynmkt_DOIFailureReason: string;
		/** Gets the current backend processing status of double opt in. */
		msdynmkt_doijobstatus: OptionSet.msdynmkt_compliancesettings4.msdynmkt_doijobstatus;
		/** Gets the current status of double opt in. */
		msdynmkt_DOIStatus: OptionSet.msdynmkt_compliancesettings4.msdynmkt_DOIStatus;
		/** Additional text explaining what type of emails the customer may expect to receive. */
		msdynmkt_emaildescription: string;
		/** Extended entity */
		msdynmkt_extendedentityId: string;
		msdynmkt_gettrackingconsents: boolean;
		/** Send double opt-in email only once */
		msdynmkt_globaldoienabled: boolean;
		msdynmkt_jurisdiction: OptionSet.msdynmkt_compliancesettings4.msdynmkt_jurisdiction;
		/** Company address */
		msdynmkt_legaladdress: string;
		/** for migrated records, this is the timestamp for migration. */
		msdynmkt_migrationtimestamp_UtcDateOnly: Date;
		msdynmkt_name: string;
		msdynmkt_quiettimesetting: string;
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
		/** Tracking Consent Purpose for tracking the consents from customers. */
		msdynmkt_TrackingConsentPurpose: string;
		/** UIOnly Link existing profile */
		msdynmkt_uionly_link_existing_profile: boolean;
		/** link existing profile to attach the existing purposes */
		msdynmkt_uionly_linked_profile: string;
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
		/** Status of the Compliance */
		statecode: OptionSet.msdynmkt_compliancesettings4.statecode;
		/** Reason for the status of the Compliance */
		statuscode: OptionSet.msdynmkt_compliancesettings4.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msdynmkt_compliancesettings4Id: string;
			readonly msdynmkt_consentlink: string;
			readonly msdynmkt_consentlinktype: string;
			/** Consent provider */
			readonly msdynmkt_ConsentProviderId: string;
			/** Double Opt-in Confirmation Text */
			readonly msdynmkt_DOIConfirmationText: string;
			/** The type of double opt in confirmation - Text or URL. */
			readonly msdynmkt_DOIConfirmationType: string;
			/** Double Opt-in Confirmation URL */
			readonly msdynmkt_DOIConfirmationURL: string;
			/** Double Opt-in Failure Reason */
			readonly msdynmkt_DOIFailureReason: string;
			/** Gets the current backend processing status of double opt in. */
			readonly msdynmkt_doijobstatus: string;
			/** Gets the current status of double opt in. */
			readonly msdynmkt_DOIStatus: string;
			/** Additional text explaining what type of emails the customer may expect to receive. */
			readonly msdynmkt_emaildescription: string;
			/** Extended entity */
			readonly msdynmkt_extendedentityId: string;
			readonly msdynmkt_gettrackingconsents: string;
			/** Send double opt-in email only once */
			readonly msdynmkt_globaldoienabled: string;
			readonly msdynmkt_jurisdiction: string;
			/** Company address */
			readonly msdynmkt_legaladdress: string;
			/** for migrated records, this is the timestamp for migration. */
			readonly msdynmkt_migrationtimestamp_UtcDateOnly: string;
			readonly msdynmkt_name: string;
			readonly msdynmkt_quiettimesetting: string;
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
			/** Tracking Consent Purpose for tracking the consents from customers. */
			readonly msdynmkt_TrackingConsentPurpose: string;
			/** UIOnly Link existing profile */
			readonly msdynmkt_uionly_link_existing_profile: string;
			/** link existing profile to attach the existing purposes */
			readonly msdynmkt_uionly_linked_profile: string;
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
			/** Status of the Compliance */
			readonly statecode: string;
			/** Reason for the status of the Compliance */
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
	namespace msdynmkt_compliancesettings4 {
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
		enum msdynmkt_DOIConfirmationType {
			/** 534120000 */
			Text,
			/** 534120001 */
			Url
		}
		enum msdynmkt_doijobstatus {
			/** 8 */
			Email_Create_Failed,
			/** 1 */
			Email_Created,
			/** 9 */
			Email_Publish_Failed,
			/** 2 */
			Email_Published,
			/** 7 */
			Failed,
			/** 10 */
			Journey_Create_Failed,
			/** 3 */
			Journey_Created,
			/** 11 */
			Journey_Publish_Failed,
			/** 5 */
			Journey_Published,
			/** 4 */
			Journey_Publishing_Started,
			/** 6 */
			Processing_Completed,
			/** 0 */
			Request_Accepted
		}
		enum msdynmkt_DOIStatus {
			/** 534120002 */
			DeprecatedEnabled,
			/** 534120001 */
			Enabled,
			/** 534120000 */
			Not_enabled
		}
		enum msdynmkt_extendedentityIdType {
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