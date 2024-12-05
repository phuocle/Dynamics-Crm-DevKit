//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDesigner {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the template */
			msdynmkt_name: DevKit.Controls.String;
			/** Reason for the status of the Email template */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_design_tab_Sections {
			general_section: DevKit.Controls.Section;
		}
		interface tab_design_tab extends DevKit.Controls.ITab {
			Section: tab_design_tab_Sections;
		}
		interface Tabs {
			design_tab: tab_design_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Automatically generate text part */
			msdynmkt_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdynmkt_compliancesettings: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings3: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings4: DevKit.Controls.Lookup;
			msdynmkt_compliancesettingscompanyaddress: DevKit.Controls.ActionCards;
			msdynmkt_conditionalcontent: DevKit.Controls.String;
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			msdynmkt_contenttype: DevKit.Controls.OptionSet;
			msdynmkt_description: DevKit.Controls.String;
			/** Designer HTML */
			msdynmkt_designerhtml: DevKit.Controls.String;
			msdynmkt_emailbody: DevKit.Controls.ActionCards;
			/** Unique identifier for entity instances */
			msdynmkt_emailtemplateId: DevKit.Controls.String;
			/** Form to save */
			msdynmkt_formtosave: DevKit.Controls.Boolean;
			/** From email */
			msdynmkt_fromemail: DevKit.Controls.String;
			/** From name */
			msdynmkt_fromname: DevKit.Controls.String;
			/** Template label */
			msdynmkt_label: DevKit.Controls.OptionSet;
			/** Template language */
			msdynmkt_language: DevKit.Controls.OptionSet;
			/** Message designation */
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the template */
			msdynmkt_name: DevKit.Controls.String;
			/** Placeholders */
			msdynmkt_placeholders: DevKit.Controls.String;
			/** Preview HTML */
			msdynmkt_previewhtml: DevKit.Controls.String;
			msdynmkt_previewtext: DevKit.Controls.String;
			msdynmkt_purpose: DevKit.Controls.Lookup;
			/** Reply-to email */
			msdynmkt_replytoemail: DevKit.Controls.String;
			/** Template subcategory */
			msdynmkt_subcategory: DevKit.Controls.OptionSet;
			/** Subject */
			msdynmkt_subject: DevKit.Controls.String;
			/** Plain text */
			msdynmkt_textpart: DevKit.Controls.String;
			msdynmkt_thumbnailimage: DevKit.Controls.ELSE1???;//msdynmkt_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			msdynmkt_topic: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Reason for the status of the Email template */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: DevKit.Controls.NavigationItem
		}
	}
	class FormDesigner extends DevKit.IForm {
		/**
		* Designer [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Designer */
		Body: DevKit.FormDesigner.Body;
		/** The Header section of form Designer */
		Header: DevKit.FormDesigner.Header;
		/** The Navigation of form Designer */
		Navigation: DevKit.FormDesigner.Navigation;
		/** The SidePanes of form Designer */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_template_header_form {
		interface Tabs {
		}
		interface Body {
			/** From email */
			msdynmkt_fromemail: DevKit.Controls.String;
			/** From name */
			msdynmkt_fromname: DevKit.Controls.String;
			msdynmkt_previewtext: DevKit.Controls.String;
			/** Subject */
			msdynmkt_subject: DevKit.Controls.String;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: DevKit.Controls.NavigationItem
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
	namespace FormEmail_Template_properties {
		interface tab_properties_tab_Sections {
			email_header_section_5: DevKit.Controls.Section;
			EmailSettings: DevKit.Controls.Section;
			general_section: DevKit.Controls.Section;
			PlainText: DevKit.Controls.Section;
			SendSettings_expanded: DevKit.Controls.Section;
		}
		interface tab_properties_tab extends DevKit.Controls.ITab {
			Section: tab_properties_tab_Sections;
		}
		interface Tabs {
			properties_tab: tab_properties_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Automatically generate text part */
			msdynmkt_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdynmkt_compliancesettings: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings3: DevKit.Controls.Lookup;
			msdynmkt_compliancesettingscompanyaddress: DevKit.Controls.ActionCards;
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			msdynmkt_contenttype: DevKit.Controls.OptionSet;
			msdynmkt_description: DevKit.Controls.String;
			msdynmkt_fromemail: DevKit.Controls.ActionCards;
			msdynmkt_fromname: DevKit.Controls.ActionCards;
			/** Template label */
			msdynmkt_label: DevKit.Controls.OptionSet;
			/** Template language */
			msdynmkt_language: DevKit.Controls.OptionSet;
			/** Message designation */
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the template */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_previewtext: DevKit.Controls.ActionCards;
			msdynmkt_replytoemail: DevKit.Controls.ActionCards;
			/** Template subcategory */
			msdynmkt_subcategory: DevKit.Controls.OptionSet;
			msdynmkt_subject: DevKit.Controls.ActionCards;
			msdynmkt_textpart: DevKit.Controls.ActionCards;
			msdynmkt_thumbnailimage: DevKit.Controls.ELSE1???;//msdynmkt_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_Template_properties extends DevKit.IForm {
		/**
		* Email Template properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_Template_properties */
		Body: DevKit.FormEmail_Template_properties.Body;
		/** The Navigation of form Email_Template_properties */
		Navigation: DevKit.FormEmail_Template_properties.Navigation;
		/** The SidePanes of form Email_Template_properties */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormFilter_form_for_template_gallery {
		interface tab__6A416E40_2D00_43BD_9527_A1DDF491C805_Sections {
			_B0184AF9_4CDA_43A8_A2D1_9016C6271D37: DevKit.Controls.Section;
		}
		interface tab__6A416E40_2D00_43BD_9527_A1DDF491C805 extends DevKit.Controls.ITab {
			Section: tab__6A416E40_2D00_43BD_9527_A1DDF491C805_Sections;
		}
		interface Tabs {
			_6A416E40_2D00_43BD_9527_A1DDF491C805: tab__6A416E40_2D00_43BD_9527_A1DDF491C805;
		}
		interface Body {
			Tab: Tabs;
			/** Template label */
			msdynmkt_label: DevKit.Controls.OptionSet;
			/** Template language */
			msdynmkt_language: DevKit.Controls.OptionSet;
			msdynmkt_marketingprovided: DevKit.Controls.ActionCards;
			/** Message designation */
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: DevKit.Controls.NavigationItem
		}
	}
	class FormFilter_form_for_template_gallery extends DevKit.IForm {
		/**
		* Filter form for template gallery [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Filter_form_for_template_gallery */
		Body: DevKit.FormFilter_form_for_template_gallery.Body;
		/** The Navigation of form Filter_form_for_template_gallery */
		Navigation: DevKit.FormFilter_form_for_template_gallery.Navigation;
		/** The SidePanes of form Filter_form_for_template_gallery */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormGallery_Properties {
		interface tab__7D8DDB65_13CC_445C_B9C6_6ED536C3C8E4_Sections {
			_1AD9A7A3_544A_4F2B_BBA7_224CEF4889A5: DevKit.Controls.Section;
		}
		interface tab__7D8DDB65_13CC_445C_B9C6_6ED536C3C8E4 extends DevKit.Controls.ITab {
			Section: tab__7D8DDB65_13CC_445C_B9C6_6ED536C3C8E4_Sections;
		}
		interface Tabs {
			_7D8DDB65_13CC_445C_B9C6_6ED536C3C8E4: tab__7D8DDB65_13CC_445C_B9C6_6ED536C3C8E4;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdynmkt_compliancesettings4: DevKit.Controls.Lookup;
			msdynmkt_description: DevKit.Controls.String;
			/** From email */
			msdynmkt_fromemail: DevKit.Controls.String;
			/** Template label */
			msdynmkt_label: DevKit.Controls.OptionSet;
			/** Template language */
			msdynmkt_language: DevKit.Controls.OptionSet;
			/** Marketing provided */
			msdynmkt_marketingprovided: DevKit.Controls.Boolean;
			/** Message designation */
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the template */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_purpose: DevKit.Controls.Lookup;
			/** Reply-to email */
			msdynmkt_replytoemail: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: DevKit.Controls.NavigationItem
		}
	}
	class FormGallery_Properties extends DevKit.IForm {
		/**
		* Gallery Properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Gallery_Properties */
		Body: DevKit.FormGallery_Properties.Body;
		/** The Navigation of form Gallery_Properties */
		Navigation: DevKit.FormGallery_Properties.Navigation;
		/** The SidePanes of form Gallery_Properties */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_Template_Quick_Create {
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
			entityimage: DevKit.Controls.ELSE1???;//entityimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Automatically generate text part */
			msdynmkt_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdynmkt_compliancesettings: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings3: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings4: DevKit.Controls.Lookup;
			msdynmkt_compliancesettingscompanyaddress: DevKit.Controls.String;
			msdynmkt_conditionalcontent: DevKit.Controls.String;
			/** Designer HTML */
			msdynmkt_designerhtml: DevKit.Controls.String;
			/** Email body */
			msdynmkt_emailbody: DevKit.Controls.String;
			/** From email */
			msdynmkt_fromemail: DevKit.Controls.String;
			/** From name */
			msdynmkt_fromname: DevKit.Controls.String;
			/** Template language */
			msdynmkt_language: DevKit.Controls.OptionSet;
			/** Message designation */
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the template */
			msdynmkt_name: DevKit.Controls.String;
			/** Placeholders */
			msdynmkt_placeholders: DevKit.Controls.String;
			msdynmkt_previewtext: DevKit.Controls.String;
			/** Reply-to email */
			msdynmkt_replytoemail: DevKit.Controls.String;
			/** Source email ID */
			msdynmkt_sourceemailid: DevKit.Controls.String;
			/** Subject */
			msdynmkt_subject: DevKit.Controls.String;
			/** Plain text */
			msdynmkt_textpart: DevKit.Controls.String;
			msdynmkt_thumbnailimage: DevKit.Controls.ELSE1???;//msdynmkt_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormEmail_Template_Quick_Create extends DevKit.IForm {
		/**
		* Email Template Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_Template_Quick_Create */
		Body: DevKit.FormEmail_Template_Quick_Create.Body;
	}
	class msdynmkt_emailtemplateApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_emailtemplateApi
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
		readonly ComponentState: OptionSet.msdynmkt_emailtemplate.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Thumbnail preview of template (deprecated) */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
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
		/** Automatically generate text part */
		msdynmkt_automaticallygeneratetextpart: boolean;
		/** Template tab category */
		msdynmkt_category: OptionSet.msdynmkt_emailtemplate.msdynmkt_category;
		msdynmkt_compliancesettings: string;
		msdynmkt_compliancesettings3: string;
		msdynmkt_compliancesettings4: string;
		msdynmkt_compliancesettingscompanyaddress: string;
		msdynmkt_conditionalcontent: string;
		msdynmkt_contenttype: OptionSet.msdynmkt_emailtemplate.msdynmkt_contenttype;
		msdynmkt_description: string;
		/** Designer HTML */
		msdynmkt_designerhtml: string;
		/** Email body */
		msdynmkt_emailbody: string;
		/** Unique identifier for entity instances */
		msdynmkt_emailtemplateId: string;
		/** Thumbnail preview of template (deprecated) */
		msdynmkt_entityimage: string;
		msdynmkt_entityimage_Timestamp: number;
		msdynmkt_entityimage_URL: string;
		readonly msdynmkt_entityimageId: string;
		/** Form to save */
		msdynmkt_formtosave: boolean;
		/** From email */
		msdynmkt_fromemail: string;
		/** From name */
		msdynmkt_fromname: string;
		/** Template label */
		msdynmkt_label: OptionSet.msdynmkt_emailtemplate.msdynmkt_label;
		/** Template language */
		msdynmkt_language: OptionSet.msdynmkt_emailtemplate.msdynmkt_language;
		/** Marketing provided */
		msdynmkt_marketingprovided: boolean;
		/** Message designation */
		msdynmkt_messagedesignation: OptionSet.msdynmkt_emailtemplate.msdynmkt_messagedesignation;
		/** The name of the template */
		msdynmkt_name: string;
		/** Information for result of migration from outbound marketing email template. */
		msdynmkt_obmmigrationinfo: string;
		/** Placeholders */
		msdynmkt_placeholders: string;
		/** Preview HTML */
		msdynmkt_previewhtml: string;
		msdynmkt_previewtext: string;
		msdynmkt_purpose: string;
		/** Reply-to email */
		msdynmkt_replytoemail: string;
		/** Source email ID */
		msdynmkt_sourceemailid: string;
		/** Template subcategory */
		msdynmkt_subcategory: OptionSet.msdynmkt_emailtemplate.msdynmkt_subcategory;
		/** Subject */
		msdynmkt_subject: string;
		/** Plain text */
		msdynmkt_textpart: string;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		msdynmkt_thumbnailimage: string;
		msdynmkt_thumbnailimage_Timestamp: number;
		msdynmkt_thumbnailimage_URL: string;
		readonly msdynmkt_thumbnailimageId: string;
		msdynmkt_topic: string;
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
		/** Status of the Email template */
		statecode: OptionSet.msdynmkt_emailtemplate.statecode;
		/** Reason for the status of the Email template */
		statuscode: OptionSet.msdynmkt_emailtemplate.statuscode;
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
			/** Thumbnail preview of template (deprecated) */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
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
			/** Automatically generate text part */
			readonly msdynmkt_automaticallygeneratetextpart: string;
			/** Template tab category */
			readonly msdynmkt_category: string;
			readonly msdynmkt_compliancesettings: string;
			readonly msdynmkt_compliancesettings3: string;
			readonly msdynmkt_compliancesettings4: string;
			readonly msdynmkt_compliancesettingscompanyaddress: string;
			readonly msdynmkt_conditionalcontent: string;
			readonly msdynmkt_contenttype: string;
			readonly msdynmkt_description: string;
			/** Designer HTML */
			readonly msdynmkt_designerhtml: string;
			/** Email body */
			readonly msdynmkt_emailbody: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_emailtemplateId: string;
			/** Thumbnail preview of template (deprecated) */
			readonly msdynmkt_entityimage: string;
			readonly msdynmkt_entityimage_Timestamp: string;
			readonly msdynmkt_entityimage_URL: string;
			readonly msdynmkt_entityimageId: string;
			/** Form to save */
			readonly msdynmkt_formtosave: string;
			/** From email */
			readonly msdynmkt_fromemail: string;
			/** From name */
			readonly msdynmkt_fromname: string;
			/** Template label */
			readonly msdynmkt_label: string;
			/** Template language */
			readonly msdynmkt_language: string;
			/** Marketing provided */
			readonly msdynmkt_marketingprovided: string;
			/** Message designation */
			readonly msdynmkt_messagedesignation: string;
			/** The name of the template */
			readonly msdynmkt_name: string;
			/** Information for result of migration from outbound marketing email template. */
			readonly msdynmkt_obmmigrationinfo: string;
			/** Placeholders */
			readonly msdynmkt_placeholders: string;
			/** Preview HTML */
			readonly msdynmkt_previewhtml: string;
			readonly msdynmkt_previewtext: string;
			readonly msdynmkt_purpose: string;
			/** Reply-to email */
			readonly msdynmkt_replytoemail: string;
			/** Source email ID */
			readonly msdynmkt_sourceemailid: string;
			/** Template subcategory */
			readonly msdynmkt_subcategory: string;
			/** Subject */
			readonly msdynmkt_subject: string;
			/** Plain text */
			readonly msdynmkt_textpart: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly msdynmkt_thumbnailimage: string;
			readonly msdynmkt_thumbnailimage_Timestamp: string;
			readonly msdynmkt_thumbnailimage_URL: string;
			readonly msdynmkt_thumbnailimageId: string;
			readonly msdynmkt_topic: string;
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
			/** Status of the Email template */
			readonly statecode: string;
			/** Reason for the status of the Email template */
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
	namespace msdynmkt_emailtemplate {
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
		enum msdynmkt_category {
			/** 1 */
			Custom_templates,
			/** 0 */
			Gallery
		}
		enum msdynmkt_contenttype {
			/** 534120000 */
			Default,
			/** 534120001 */
			Double_opt_in_confirmation
		}
		enum msdynmkt_label {
			/** 731570001 */
			Layout_enabled,
			/** 731570000 */
			New
		}
		enum msdynmkt_language {
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
			English_United_Kingdom,
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
			Italian_Italy,
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
			Turkish_Turkiye,
			/** 1058 */
			Ukrainian_Ukraine,
			/** 1066 */
			Vietnamese_Vietnam
		}
		enum msdynmkt_messagedesignation {
			/** 534120000 */
			Commercial,
			/** 534120001 */
			Transactional
		}
		enum msdynmkt_subcategory {
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
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 100 */
			Inactive,
			/** 2 */
			Ready_to_send
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