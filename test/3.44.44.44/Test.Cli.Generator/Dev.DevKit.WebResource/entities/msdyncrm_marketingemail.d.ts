//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEmail_header_form {
		interface tab_email_header_Sections {
			header_section: DevKit.Controls.Section;
		}
		interface tab_email_header extends DevKit.Controls.ITab {
			Section: tab_email_header_Sections;
		}
		interface Tabs {
			email_header: tab_email_header;
		}
		interface Body {
			Tab: Tabs;
			/** The language to be used for email content. */
			msdyncrm_email_contentlanguage: DevKit.Controls.OptionSet;
			msdyncrm_fromemail: DevKit.Controls.ActionCards;
			msdyncrm_fromname: DevKit.Controls.ActionCards;
			msdyncrm_FromUser: DevKit.Controls.Lookup;
			msdyncrm_previewtext: DevKit.Controls.ActionCards;
			msdyncrm_subject: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyncrm_marketingemail_marketingemailtest: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemail_marketingformsubmission: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_contact_emailid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_lead_emailid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_consentconfirmationmessage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_subscriptionoptinmessage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_marketingform_doubleoptinmessage: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_header_form extends DevKit.IForm {
		/**
		* Email header form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_header_form */
		Body: DevKit.FormEmail_header_form.Body;
		/** The Navigation of form Email_header_form */
		Navigation: DevKit.FormEmail_header_form.Navigation;
		/** The SidePanes of form Email_header_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_Properties {
		interface tab_Settings_Sections {
			Email_settings: DevKit.Controls.Section;
			Plain_text: DevKit.Controls.Section;
			SendSettings_expanded: DevKit.Controls.Section;
			tab_1_section_2: DevKit.Controls.Section;
		}
		interface tab_Settings extends DevKit.Controls.ITab {
			Section: tab_Settings_Sections;
		}
		interface Tabs {
			Settings: tab_Settings;
		}
		interface Body {
			Tab: Tabs;
			msdyncrm_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdyncrm_contentsettingscompanyaddress: DevKit.Controls.ActionCards;
			/** The language to be used for email content. */
			msdyncrm_email_contentlanguage: DevKit.Controls.OptionSet;
			msdyncrm_email_contenttype: DevKit.Controls.OptionSet;
			msdyncrm_fromemail: DevKit.Controls.ActionCards;
			msdyncrm_fromname: DevKit.Controls.ActionCards;
			msdyncrm_messagedesignation: DevKit.Controls.OptionSet;
			msdyncrm_previewtext: DevKit.Controls.ActionCards;
			msdyncrm_replytoemail: DevKit.Controls.ActionCards;
			msdyncrm_subject: DevKit.Controls.ActionCards;
			/** Template for the email */
			msdyncrm_TemplateId: DevKit.Controls.Lookup;
			msdyncrm_testconfiguration: DevKit.Controls.String;
			msdyncrm_textpart: DevKit.Controls.String;
			msdyncrm_to: DevKit.Controls.ActionCards;
			/** Marketing email status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_marketingemail_marketingemailtest: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemail_marketingformsubmission: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_contact_emailid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_lead_emailid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_consentconfirmationmessage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_subscriptionoptinmessage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_marketingform_doubleoptinmessage: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_Properties extends DevKit.IForm {
		/**
		* Email Properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_Properties */
		Body: DevKit.FormEmail_Properties.Body;
		/** The Navigation of form Email_Properties */
		Navigation: DevKit.FormEmail_Properties.Navigation;
		/** The SidePanes of form Email_Properties */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNew_editing_experience {
		interface Header extends DevKit.Controls.IHeader {
			msdyncrm_FromUser: DevKit.Controls.Lookup;
			msdyncrm_Name: DevKit.Controls.String;
			header_msdyncrm_subject: DevKit.Controls.ActionCards;
			header_msdyncrm_subject_upgrade_hotfix: DevKit.Controls.ActionCards;
			/** Marketing email status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_designTab_Sections {
			DesignSection: DevKit.Controls.Section;
		}
		interface tab_designTab extends DevKit.Controls.ITab {
			Section: tab_designTab_Sections;
		}
		interface Tabs {
			designTab: tab_designTab;
		}
		interface Body {
			Tab: Tabs;
			entityimage: DevKit.Controls.ELSE1???;//entityimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			msdyncrm_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdyncrm_contentsettingscompanyaddress: DevKit.Controls.ActionCards;
			msdyncrm_Description: DevKit.Controls.String;
			/** Clean email body: HTML with no CSS inlining and no compression */
			msdyncrm_designerhtml: DevKit.Controls.String;
			/** The language to be used for email content. */
			msdyncrm_email_contentlanguage: DevKit.Controls.OptionSet;
			msdyncrm_email_contenttype: DevKit.Controls.OptionSet;
			msdyncrm_email_contenttype1: DevKit.Controls.OptionSet;
			/** The body of the email */
			msdyncrm_emailbody: DevKit.Controls.String;
			/** Form to save */
			msdyncrm_formtosave: DevKit.Controls.Boolean;
			msdyncrm_FromEmail: DevKit.Controls.String;
			msdyncrm_FromName: DevKit.Controls.String;
			msdyncrm_messagedesignation: DevKit.Controls.OptionSet;
			msdyncrm_messagedesignation1: DevKit.Controls.OptionSet;
			/** Email body used only for preview display purposes */
			msdyncrm_previewhtml: DevKit.Controls.String;
			/** The preview (pre-header) text for marketing email */
			msdyncrm_previewtext: DevKit.Controls.String;
			msdyncrm_ReplyToEmail: DevKit.Controls.String;
			msdyncrm_subject: DevKit.Controls.ActionCards;
			/** Template for the email */
			msdyncrm_TemplateId: DevKit.Controls.Lookup;
			msdyncrm_testconfiguration: DevKit.Controls.String;
			msdyncrm_textpart: DevKit.Controls.String;
			msdyncrm_To: DevKit.Controls.String;
			/** Status of the marketing email */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_marketingemail_marketingemailtest: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemail_marketingformsubmission: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_contact_emailid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_lead_emailid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_consentconfirmationmessage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_subscriptionoptinmessage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_marketingform_doubleoptinmessage: DevKit.Controls.NavigationItem
		}
	}
	class FormNew_editing_experience extends DevKit.IForm {
		/**
		* New editing experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form New_editing_experience */
		Body: DevKit.FormNew_editing_experience.Body;
		/** The Header section of form New_editing_experience */
		Header: DevKit.FormNew_editing_experience.Header;
		/** The Navigation of form New_editing_experience */
		Navigation: DevKit.FormNew_editing_experience.Navigation;
		/** The SidePanes of form New_editing_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOrchestration_pane_view {
		interface tab_email_details_Sections {
			DesignSection: DevKit.Controls.Section;
			email_details_section_2: DevKit.Controls.Section;
		}
		interface tab_email_details extends DevKit.Controls.ITab {
			Section: tab_email_details_Sections;
		}
		interface Tabs {
			email_details: tab_email_details;
		}
		interface Body {
			Tab: Tabs;
			/** The language to be used for email content. */
			msdyncrm_email_contentlanguage: DevKit.Controls.OptionSet;
			msdyncrm_emailbody: DevKit.Controls.ActionCards;
			msdyncrm_Name: DevKit.Controls.String;
			/** The subject of the marketing email */
			msdyncrm_subject: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the marketing email */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_marketingemail_marketingemailtest: DevKit.Controls.NavigationItem,
			msdyncrm_marketingemail_marketingformsubmission: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_contact_emailid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_lead_emailid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_consentconfirmationmessage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_subscriptionoptinmessage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingemail_msdyncrm_marketingform_doubleoptinmessage: DevKit.Controls.NavigationItem
		}
	}
	class FormOrchestration_pane_view extends DevKit.IForm {
		/**
		* Orchestration pane view [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Orchestration_pane_view */
		Body: DevKit.FormOrchestration_pane_view.Body;
		/** The Navigation of form Orchestration_pane_view */
		Navigation: DevKit.FormOrchestration_pane_view.Navigation;
		/** The SidePanes of form Orchestration_pane_view */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_marketingemail_Quick_Create {
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
			msdyncrm_FromUser: DevKit.Controls.Lookup;
			msdyncrm_Description: DevKit.Controls.String;
			msdyncrm_fromemail: DevKit.Controls.ActionCards;
			msdyncrm_fromemail_upgrade_hotfix: DevKit.Controls.ActionCards;
			msdyncrm_fromname: DevKit.Controls.ActionCards;
			msdyncrm_fromname_upgrade_hotfix: DevKit.Controls.ActionCards;
			msdyncrm_messagedesignation: DevKit.Controls.OptionSet;
			msdyncrm_Name: DevKit.Controls.String;
			/** The subject of the marketing email */
			msdyncrm_subject: DevKit.Controls.String;
			msdyncrm_to: DevKit.Controls.ActionCards;
			msdyncrm_to_upgrade_hotfix: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyncrm_marketingemail_Quick_Create extends DevKit.IForm {
		/**
		* Quick create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingemail_Quick_Create */
		Body: DevKit.Formmsdyncrm_marketingemail_Quick_Create.Body;
	}
	class msdyncrm_marketingemailApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingemailApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Thumbnail preview of email. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_automaticallygeneratetextpart: boolean;
		msdyncrm_ClickMap: string;
		msdyncrm_contentsettingscompanyaddress: string;
		msdyncrm_Description: string;
		/** Clean email body: HTML with no CSS inlining and no compression */
		msdyncrm_designerhtml: string;
		/** The language to be used for email content. */
		msdyncrm_email_contentlanguage: OptionSet.msdyncrm_marketingemail.msdyncrm_email_contentlanguage;
		msdyncrm_email_contenttype: OptionSet.msdyncrm_marketingemail.msdyncrm_email_contenttype;
		/** The body of the email */
		msdyncrm_emailbody: string;
		/** Form to save */
		readonly msdyncrm_formtosave: boolean;
		msdyncrm_FromEmail: string;
		msdyncrm_FromName: string;
		msdyncrm_FromUser: string;
		msdyncrm_insights_placeholder: string;
		msdyncrm_Istemplategalleryneeded: boolean;
		/** Unique ID for entity instances */
		msdyncrm_marketingemailId: string;
		msdyncrm_messagedesignation: OptionSet.msdyncrm_marketingemail.msdyncrm_messagedesignation;
		msdyncrm_Name: string;
		/** Email body used only for preview display purposes */
		msdyncrm_previewhtml: string;
		/** The preview (pre-header) text for marketing email */
		msdyncrm_previewtext: string;
		msdyncrm_ReplyToEmail: string;
		/** The subject of the marketing email */
		msdyncrm_subject: string;
		/** Template for the email */
		msdyncrm_TemplateId: string;
		msdyncrm_testconfiguration: string;
		msdyncrm_textpart: string;
		msdyncrm_To: string;
		msdyncrm_uicentityid: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the team that owns this. */
		readonly OwningUser: string;
		/** Status of the marketing email */
		statecode: OptionSet.msdyncrm_marketingemail.statecode;
		/** Marketing email status reason */
		statuscode: OptionSet.msdyncrm_marketingemail.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Thumbnail preview of email. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_automaticallygeneratetextpart: string;
			readonly msdyncrm_ClickMap: string;
			readonly msdyncrm_contentsettingscompanyaddress: string;
			readonly msdyncrm_Description: string;
			/** Clean email body: HTML with no CSS inlining and no compression */
			readonly msdyncrm_designerhtml: string;
			/** The language to be used for email content. */
			readonly msdyncrm_email_contentlanguage: string;
			readonly msdyncrm_email_contenttype: string;
			/** The body of the email */
			readonly msdyncrm_emailbody: string;
			/** Form to save */
			readonly msdyncrm_formtosave: string;
			readonly msdyncrm_FromEmail: string;
			readonly msdyncrm_FromName: string;
			readonly msdyncrm_FromUser: string;
			readonly msdyncrm_insights_placeholder: string;
			readonly msdyncrm_Istemplategalleryneeded: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingemailId: string;
			readonly msdyncrm_messagedesignation: string;
			readonly msdyncrm_Name: string;
			/** Email body used only for preview display purposes */
			readonly msdyncrm_previewhtml: string;
			/** The preview (pre-header) text for marketing email */
			readonly msdyncrm_previewtext: string;
			readonly msdyncrm_ReplyToEmail: string;
			/** The subject of the marketing email */
			readonly msdyncrm_subject: string;
			/** Template for the email */
			readonly msdyncrm_TemplateId: string;
			readonly msdyncrm_testconfiguration: string;
			readonly msdyncrm_textpart: string;
			readonly msdyncrm_To: string;
			readonly msdyncrm_uicentityid: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the team that owns this. */
			readonly OwningUser: string;
			/** Status of the marketing email */
			readonly statecode: string;
			/** Marketing email status reason */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_marketingemail {
		enum msdyncrm_email_contentlanguage {
			/** 1025 */
			Arabic_Saudi_Arabia,
			/** 1069 */
			Basque_Basque,
			/** 1026 */
			Bulgarian_Bulgaria,
			/** 1027 */
			Catalan_Catalan,
			/** 3076 */
			Chinese_Hong_Kong_SAR,
			/** 2052 */
			Chinese_PRC,
			/** 1028 */
			Chinese_Taiwan,
			/** 1050 */
			Croatian_Croatia,
			/** 1029 */
			Czech_Czech_Republic,
			/** 1030 */
			Danish,
			/** 1043 */
			Dutch,
			/** 1033 */
			English,
			/** 3081 */
			English_Australia,
			/** 4105 */
			English_Canada,
			/** 2057 */
			English_Great_Britain,
			/** 1061 */
			Estonian_Estonia,
			/** 1035 */
			Finnish_Finland,
			/** 1036 */
			French,
			/** 3084 */
			French_Canada,
			/** 1110 */
			Galician_Galician,
			/** 1031 */
			German,
			/** 1032 */
			Greek_Greece,
			/** 1037 */
			Hebrew_Israel,
			/** 1038 */
			Hungarian_Hungary,
			/** 1057 */
			Indonesian_Indonesia,
			/** 1040 */
			Italian,
			/** 1041 */
			Japanese,
			/** 1042 */
			Korean_Korea,
			/** 1062 */
			Latvian_Latvia,
			/** 1063 */
			Lithuanian_Lithuania,
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
			Serbian_Cyrillic_Serbia_and_Montenegro,
			/** 2074 */
			Serbian_Latin_Serbia_and_Montenegro,
			/** 1051 */
			Slovak_Slovakia,
			/** 1060 */
			Slovenian_Slovenia,
			/** 3082 */
			Spanish,
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
		enum msdyncrm_email_contenttype {
			/** 1 */
			Confirmation_request,
			/** 0 */
			Default
		}
		enum msdyncrm_messagedesignation {
			/** 0 */
			Commercial,
			/** 1 */
			Transactional
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350000 */
			Draft,
			/** 192350005 */
			Error,
			/** 192350004 */
			Expired,
			/** 192350006 */
			Going_live,
			/** 192350001 */
			Live,
			/** 192350003 */
			Live_editable,
			/** 192350002 */
			Stopped,
			/** 192350007 */
			Stopping
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