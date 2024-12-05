//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEmail_Properties {
		interface tab_Settings_Sections {
			EmailSettings: DevKit.Controls.Section;
			PlainText: DevKit.Controls.Section;
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
			msdyncrm_description: DevKit.Controls.String;
			msdyncrm_email_contenttype: DevKit.Controls.OptionSet;
			/** Market type */
			msdyncrm_email_template_market_type_optionset: DevKit.Controls.OptionSet;
			/** Optimized for */
			msdyncrm_email_template_optimizedfor_optionset: DevKit.Controls.OptionSet;
			/** Purpose */
			msdyncrm_email_template_purpose_optionset: DevKit.Controls.OptionSet;
			/** Visual style */
			msdyncrm_email_template_visual_style_optionset: DevKit.Controls.OptionSet;
			msdyncrm_FromEmail: DevKit.Controls.String;
			msdyncrm_FromName: DevKit.Controls.String;
			msdyncrm_Label: DevKit.Controls.OptionSet;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			msdyncrm_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the template */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_ReplyToEmail: DevKit.Controls.String;
			/** Template subcategory */
			msdyncrm_subcategory: DevKit.Controls.OptionSet;
			msdyncrm_subject: DevKit.Controls.String;
			msdyncrm_textpart: DevKit.Controls.String;
			msdyncrm_thumbnailimage: DevKit.Controls.ELSE1???;//msdyncrm_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			msdyncrm_To: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_msdyncrm_marketingemailtemplate_msdyncrm_: DevKit.Controls.NavigationItem
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
	namespace FormEmail_template_header_form {
		interface tab_email_template_header_Sections {
			header_section: DevKit.Controls.Section;
		}
		interface tab_email_template_header extends DevKit.Controls.ITab {
			Section: tab_email_template_header_Sections;
		}
		interface Tabs {
			email_template_header: tab_email_template_header;
		}
		interface Body {
			Tab: Tabs;
			msdyncrm_FromEmail: DevKit.Controls.String;
			msdyncrm_FromName: DevKit.Controls.String;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			/** The name of the template */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_subject: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_msdyncrm_marketingemailtemplate_msdyncrm_: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_template_header_form extends DevKit.IForm {
		/**
		* Email template header form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_template_header_form */
		Body: DevKit.FormEmail_template_header_form.Body;
		/** The Navigation of form Email_template_header_form */
		Navigation: DevKit.FormEmail_template_header_form.Navigation;
		/** The SidePanes of form Email_template_header_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNew_editing_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the template */
			msdyncrm_name: DevKit.Controls.String;
			/** Marketing email template status reason */
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
			msdyncrm_description: DevKit.Controls.String;
			/** Clean email body: HTML with no CSS inlining and no compression */
			msdyncrm_designerhtml: DevKit.Controls.String;
			msdyncrm_email_contenttype: DevKit.Controls.OptionSet;
			/** Market type */
			msdyncrm_email_template_market_type_optionset: DevKit.Controls.OptionSet;
			/** Optimized for */
			msdyncrm_email_template_optimizedfor_optionset: DevKit.Controls.OptionSet;
			/** Purpose */
			msdyncrm_email_template_purpose_optionset: DevKit.Controls.OptionSet;
			/** Visual style */
			msdyncrm_email_template_visual_style_optionset: DevKit.Controls.OptionSet;
			msdyncrm_emailbody: DevKit.Controls.String;
			/** Form to save */
			msdyncrm_formtosave: DevKit.Controls.Boolean;
			msdyncrm_FromEmail: DevKit.Controls.String;
			msdyncrm_FromName: DevKit.Controls.String;
			msdyncrm_Label: DevKit.Controls.OptionSet;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			msdyncrm_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the template */
			msdyncrm_name: DevKit.Controls.String;
			/** Email body used only for preview display purposes */
			msdyncrm_previewhtml: DevKit.Controls.String;
			msdyncrm_ReplyToEmail: DevKit.Controls.String;
			/** Template subcategory */
			msdyncrm_subcategory: DevKit.Controls.OptionSet;
			msdyncrm_subject: DevKit.Controls.String;
			msdyncrm_textpart: DevKit.Controls.String;
			msdyncrm_thumbnailimage: DevKit.Controls.ELSE1???;//msdyncrm_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			msdyncrm_To: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Marketing email template status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_msdyncrm_marketingemailtemplate_msdyncrm_: DevKit.Controls.NavigationItem
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
	namespace Formmsdyncrm_marketingemailtemplate_Information {
		interface tab__1A45C0E7_83FE_42B7_9D84_8D1CDFA08916_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab__1A45C0E7_83FE_42B7_9D84_8D1CDFA08916 extends DevKit.Controls.ITab {
			Section: tab__1A45C0E7_83FE_42B7_9D84_8D1CDFA08916_Sections;
		}
		interface Tabs {
			_1A45C0E7_83FE_42B7_9D84_8D1CDFA08916: tab__1A45C0E7_83FE_42B7_9D84_8D1CDFA08916;
		}
		interface Body {
			Tab: Tabs;
			entityimage: DevKit.Controls.ELSE1???;//entityimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			msdyncrm_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdyncrm_description: DevKit.Controls.String;
			/** Clean email body: HTML with no CSS inlining and no compression */
			msdyncrm_designerhtml: DevKit.Controls.String;
			msdyncrm_email_contenttype: DevKit.Controls.OptionSet;
			msdyncrm_emailbody: DevKit.Controls.String;
			msdyncrm_FromEmail: DevKit.Controls.String;
			msdyncrm_FromName: DevKit.Controls.String;
			msdyncrm_Language: DevKit.Controls.OptionSet;
			msdyncrm_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the template */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_ReplyToEmail: DevKit.Controls.String;
			msdyncrm_sourceemailid: DevKit.Controls.String;
			/** Template subcategory */
			msdyncrm_subcategory: DevKit.Controls.OptionSet;
			msdyncrm_subject: DevKit.Controls.String;
			msdyncrm_textpart: DevKit.Controls.String;
			msdyncrm_thumbnailimage: DevKit.Controls.ELSE1???;//msdyncrm_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			msdyncrm_To: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Marketing email template status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyncrm_marketingemailtemplate_Information extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingemailtemplate_Information */
		Body: DevKit.Formmsdyncrm_marketingemailtemplate_Information.Body;
	}
	class msdyncrm_marketingemailtemplateApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingemailtemplateApi
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
		/** Thumbnail preview of template (deprecated). */
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
		/** Template tab category */
		msdyncrm_category: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_category;
		msdyncrm_description: string;
		/** Clean email body: HTML with no CSS inlining and no compression */
		msdyncrm_designerhtml: string;
		msdyncrm_email_contenttype: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_email_contenttype;
		/** Market type */
		msdyncrm_email_template_market_type_optionset: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_email_template_market_type_optionset;
		/** Optimized for */
		msdyncrm_email_template_optimizedfor_optionset: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_email_template_optimizedfor_optionset;
		/** Purpose */
		msdyncrm_email_template_purpose_optionset: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_email_template_purpose_optionset;
		/** Visual style */
		msdyncrm_email_template_visual_style_optionset: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_email_template_visual_style_optionset;
		msdyncrm_emailbody: string;
		/** Form to save */
		readonly msdyncrm_formtosave: boolean;
		msdyncrm_FromEmail: string;
		msdyncrm_FromName: string;
		msdyncrm_Label: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_Label;
		msdyncrm_Language: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_Language;
		/** Unique ID for entity instances */
		msdyncrm_marketingemailtemplateId: string;
		msdyncrm_marketingprovided: boolean;
		msdyncrm_messagedesignation: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_messagedesignation;
		/** The name of the template */
		msdyncrm_name: string;
		/** Email body used only for preview display purposes */
		msdyncrm_previewhtml: string;
		/** The preview (pre-header) text for marketing email template */
		msdyncrm_previewtext: string;
		msdyncrm_ReplyToEmail: string;
		msdyncrm_sourceemailid: string;
		/** Template subcategory */
		msdyncrm_subcategory: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_subcategory;
		msdyncrm_subject: string;
		/** deprecated */
		msdyncrm_Tag: OptionSet.msdyncrm_marketingemailtemplate.msdyncrm_Tag;
		msdyncrm_textpart: string;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		msdyncrm_thumbnailimage: string;
		msdyncrm_thumbnailimage_Timestamp: number;
		msdyncrm_thumbnailimage_URL: string;
		readonly msdyncrm_thumbnailimageId: string;
		msdyncrm_To: string;
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
		/** Status of the marketing email template */
		statecode: OptionSet.msdyncrm_marketingemailtemplate.statecode;
		/** Marketing email template status reason */
		statuscode: OptionSet.msdyncrm_marketingemailtemplate.statuscode;
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
			/** Thumbnail preview of template (deprecated). */
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
			/** Template tab category */
			readonly msdyncrm_category: string;
			readonly msdyncrm_description: string;
			/** Clean email body: HTML with no CSS inlining and no compression */
			readonly msdyncrm_designerhtml: string;
			readonly msdyncrm_email_contenttype: string;
			/** Market type */
			readonly msdyncrm_email_template_market_type_optionset: string;
			/** Optimized for */
			readonly msdyncrm_email_template_optimizedfor_optionset: string;
			/** Purpose */
			readonly msdyncrm_email_template_purpose_optionset: string;
			/** Visual style */
			readonly msdyncrm_email_template_visual_style_optionset: string;
			readonly msdyncrm_emailbody: string;
			/** Form to save */
			readonly msdyncrm_formtosave: string;
			readonly msdyncrm_FromEmail: string;
			readonly msdyncrm_FromName: string;
			readonly msdyncrm_Label: string;
			readonly msdyncrm_Language: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingemailtemplateId: string;
			readonly msdyncrm_marketingprovided: string;
			readonly msdyncrm_messagedesignation: string;
			/** The name of the template */
			readonly msdyncrm_name: string;
			/** Email body used only for preview display purposes */
			readonly msdyncrm_previewhtml: string;
			/** The preview (pre-header) text for marketing email template */
			readonly msdyncrm_previewtext: string;
			readonly msdyncrm_ReplyToEmail: string;
			readonly msdyncrm_sourceemailid: string;
			/** Template subcategory */
			readonly msdyncrm_subcategory: string;
			readonly msdyncrm_subject: string;
			/** deprecated */
			readonly msdyncrm_Tag: string;
			readonly msdyncrm_textpart: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly msdyncrm_thumbnailimage: string;
			readonly msdyncrm_thumbnailimage_Timestamp: string;
			readonly msdyncrm_thumbnailimage_URL: string;
			readonly msdyncrm_thumbnailimageId: string;
			readonly msdyncrm_To: string;
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
			/** Status of the marketing email template */
			readonly statecode: string;
			/** Marketing email template status reason */
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
	namespace msdyncrm_marketingemailtemplate {
		enum msdyncrm_category {
			/** 1 */
			Custom_templates,
			/** 0 */
			Gallery
		}
		enum msdyncrm_email_contenttype {
			/** 1 */
			Confirmation_request,
			/** 0 */
			Default
		}
		enum msdyncrm_email_template_market_type_optionset {
			/** 0 */
			B2B,
			/** 2 */
			B2B_B2C,
			/** 1 */
			B2C
		}
		enum msdyncrm_email_template_optimizedfor_optionset {
			/** 2 */
			Desktop,
			/** 1 */
			Mobile,
			/** 0 */
			Wide_reach
		}
		enum msdyncrm_email_template_purpose_optionset {
			/** 15 */
			Abandoned_shopping_cart,
			/** 21 */
			Anniversary,
			/** 2 */
			Announcement,
			/** 3 */
			Birthday,
			/** 4 */
			Blog_promotion,
			/** 5 */
			Content_promotion,
			/** 23 */
			Double_opt_in_email_based_confirmation,
			/** 6 */
			Event_countdown,
			/** 7 */
			Event_or_webinar_invitation,
			/** 20 */
			Feedback_request,
			/** 8 */
			Follow_up,
			/** 9 */
			Holiday_greetings,
			/** 11 */
			Hospitality,
			/** 10 */
			Information,
			/** 22 */
			Lead_nurturing,
			/** 12 */
			Newsletter,
			/** 13 */
			Post_purchase,
			/** 14 */
			Promotional_up_sellcross_sell,
			/** 0 */
			Structural,
			/** 16 */
			Thank_you,
			/** 17 */
			Upcoming_event,
			/** 18 */
			Welcome,
			/** 19 */
			Win_backre_engage
		}
		enum msdyncrm_email_template_visual_style_optionset {
			/** 2 */
			Colorful,
			/** 3 */
			Dark,
			/** 1 */
			Light,
			/** 0 */
			Other
		}
		enum msdyncrm_Label {
			/** 192350001 */
			Layout_enabled,
			/** 192350000 */
			New
		}
		enum msdyncrm_Language {
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
		enum msdyncrm_messagedesignation {
			/** 0 */
			Commercial,
			/** 1 */
			Transactional
		}
		enum msdyncrm_subcategory {
			/** 1 */
			Deals,
			/** 3 */
			EventsWebinars,
			/** 2 */
			Follow_up,
			/** 4 */
			Informational,
			/** 6 */
			Layouts,
			/** 0 */
			New_product,
			/** 5 */
			Transactional
		}
		enum msdyncrm_Tag {
			/** 192350001 */
			Layout_enabled,
			/** 192350000 */
			New
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
			/** 2 */
			Inactive,
			/** 192350001 */
			Live
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