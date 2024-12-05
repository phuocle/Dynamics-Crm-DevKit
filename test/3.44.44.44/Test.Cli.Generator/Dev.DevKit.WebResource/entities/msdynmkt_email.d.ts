//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEmail_Bulk_Edit_Form {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			msdynmkt_compliancesettings: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings3: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings4: DevKit.Controls.Lookup;
			msdynmkt_compliancesettingscompanyaddress: DevKit.Controls.ActionCards;
			msdynmkt_emailcontentlanguage: DevKit.Controls.OptionSet;
			msdynmkt_emailcontenttype: DevKit.Controls.OptionSet;
			msdynmkt_fromemail: DevKit.Controls.String;
			msdynmkt_fromname: DevKit.Controls.String;
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			msdynmkt_placeholders: DevKit.Controls.String;
			msdynmkt_replytoemail: DevKit.Controls.ActionCards;
			msdynmkt_to: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_email: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_contact_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_lead_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_Bulk_Edit_Form extends DevKit.IForm {
		/**
		* Email Bulk Edit Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_Bulk_Edit_Form */
		Body: DevKit.FormEmail_Bulk_Edit_Form.Body;
		/** The Header section of form Email_Bulk_Edit_Form */
		Header: DevKit.FormEmail_Bulk_Edit_Form.Header;
		/** The Navigation of form Email_Bulk_Edit_Form */
		Navigation: DevKit.FormEmail_Bulk_Edit_Form.Navigation;
		/** The SidePanes of form Email_Bulk_Edit_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_fields_control {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			msdynmkt_fromemail: DevKit.Controls.ActionCards;
			msdynmkt_fromname: DevKit.Controls.ActionCards;
			msdynmkt_subject: DevKit.Controls.ActionCards;
			msdynmkt_to: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_email: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_contact_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_lead_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_fields_control extends DevKit.IForm {
		/**
		* Email fields control [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_fields_control */
		Body: DevKit.FormEmail_fields_control.Body;
		/** The Header section of form Email_fields_control */
		Header: DevKit.FormEmail_fields_control.Header;
		/** The Navigation of form Email_fields_control */
		Navigation: DevKit.FormEmail_fields_control.Navigation;
		/** The SidePanes of form Email_fields_control */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_fields_control_collapsed {
		interface Tabs {
		}
		interface Body {
			msdynmkt_fromemail: DevKit.Controls.ActionCards;
			msdynmkt_subject: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_email: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_contact_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_lead_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_fields_control_collapsed extends DevKit.IForm {
		/**
		* Email fields control collapsed [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_fields_control_collapsed */
		Body: DevKit.FormEmail_fields_control_collapsed.Body;
		/** The Navigation of form Email_fields_control_collapsed */
		Navigation: DevKit.FormEmail_fields_control_collapsed.Navigation;
		/** The SidePanes of form Email_fields_control_collapsed */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_header {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab_email_header_Sections {
			email_header_section_5: DevKit.Controls.Section;
			section_email_settings: DevKit.Controls.Section;
			section_send_settings_expanded: DevKit.Controls.Section;
			section_subject: DevKit.Controls.Section;
		}
		interface tab_email_header extends DevKit.Controls.ITab {
			Section: tab_email_header_Sections;
		}
		interface Tabs {
			email_header: tab_email_header;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			/** Email brand profile */
			msdynmkt_brandprofileid: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings3: DevKit.Controls.Lookup;
			msdynmkt_compliancesettingscompanyaddress: DevKit.Controls.ActionCards;
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			msdynmkt_emailcontentlanguage: DevKit.Controls.OptionSet;
			msdynmkt_emailcontenttype: DevKit.Controls.OptionSet;
			msdynmkt_fromemail: DevKit.Controls.ActionCards;
			msdynmkt_fromname: DevKit.Controls.ActionCards;
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			msdynmkt_previewtext: DevKit.Controls.ActionCards;
			msdynmkt_replytoemail: DevKit.Controls.ActionCards;
			/** Email sender profile */
			msdynmkt_senderid: DevKit.Controls.Lookup;
			msdynmkt_subject: DevKit.Controls.ActionCards;
			/** Template for the email */
			msdynmkt_templateid: DevKit.Controls.Lookup;
			/** Template for the email */
			msdynmkt_templateid1: DevKit.Controls.Lookup;
			msdynmkt_textpart: DevKit.Controls.ActionCards;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit1: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_email: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_contact_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_lead_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_header extends DevKit.IForm {
		/**
		* Email header [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_header */
		Body: DevKit.FormEmail_header.Body;
		/** The Header section of form Email_header */
		Header: DevKit.FormEmail_header.Header;
		/** The Navigation of form Email_header */
		Navigation: DevKit.FormEmail_header.Navigation;
		/** The SidePanes of form Email_header */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_header_form {
		interface Tabs {
		}
		interface Body {
			/** Email brand profile */
			msdynmkt_brandprofileid: DevKit.Controls.Lookup;
			msdynmkt_fromemail: DevKit.Controls.String;
			msdynmkt_fromname: DevKit.Controls.String;
			msdynmkt_previewtext: DevKit.Controls.String;
			/** Email sender profile */
			msdynmkt_senderid: DevKit.Controls.Lookup;
			msdynmkt_subject: DevKit.Controls.String;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_email: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_contact_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_lead_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: DevKit.Controls.NavigationItem
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
	namespace FormEmail_settings_control {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			msdynmkt_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdynmkt_emailcontenttype: DevKit.Controls.OptionSet;
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			msdynmkt_replytoemail: DevKit.Controls.ActionCards;
			msdynmkt_textpart_onSettings: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_email: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_contact_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_lead_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: DevKit.Controls.NavigationItem
		}
	}
	class FormEmail_settings_control extends DevKit.IForm {
		/**
		* Email settings control [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_settings_control */
		Body: DevKit.FormEmail_settings_control.Body;
		/** The Header section of form Email_settings_control */
		Header: DevKit.FormEmail_settings_control.Header;
		/** The Navigation of form Email_settings_control */
		Navigation: DevKit.FormEmail_settings_control.Navigation;
		/** The SidePanes of form Email_settings_control */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_email_Information {
		interface Tabs {
		}
		interface Body {
			msdynmkt_designerhtml: DevKit.Controls.String;
			msdynmkt_emailbody: DevKit.Controls.String;
			msdynmkt_fromemail: DevKit.Controls.String;
			msdynmkt_fromname: DevKit.Controls.String;
			msdynmkt_placeholders: DevKit.Controls.String;
			msdynmkt_subject: DevKit.Controls.String;
			/** Reason for the status of the Email */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_email: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_contact_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_lead_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_email_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_email_Information */
		Body: DevKit.Formmsdynmkt_email_Information.Body;
		/** The Navigation of form msdynmkt_email_Information */
		Navigation: DevKit.Formmsdynmkt_email_Information.Navigation;
		/** The SidePanes of form msdynmkt_email_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_email_Information2 {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			msdynmkt_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdynmkt_brandprofiledata: DevKit.Controls.String;
			/** Email brand profile */
			msdynmkt_brandprofileid: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings3: DevKit.Controls.Lookup;
			msdynmkt_compliancesettings4: DevKit.Controls.Lookup;
			msdynmkt_compliancesettingscompanyaddress: DevKit.Controls.ActionCards;
			msdynmkt_conditionalcontent: DevKit.Controls.String;
			msdynmkt_conditionalcontent1: DevKit.Controls.String;
			msdynmkt_consentcompliancegroupcontrol: DevKit.Controls.ActionCards;
			msdynmkt_designerhtml: DevKit.Controls.String;
			msdynmkt_emailbody: DevKit.Controls.String;
			msdynmkt_emailcontentlanguage: DevKit.Controls.OptionSet;
			msdynmkt_emailcontenttype: DevKit.Controls.OptionSet;
			/** Unique identifier for entity instances */
			msdynmkt_emailId: DevKit.Controls.String;
			msdynmkt_fromemail: DevKit.Controls.String;
			msdynmkt_fromname: DevKit.Controls.String;
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			msdynmkt_placeholders: DevKit.Controls.String;
			msdynmkt_previewhtml: DevKit.Controls.String;
			msdynmkt_previewtext: DevKit.Controls.String;
			msdynmkt_previewtext1: DevKit.Controls.String;
			msdynmkt_purpose: DevKit.Controls.Lookup;
			msdynmkt_replytoemail: DevKit.Controls.ActionCards;
			/** Email sender profile */
			msdynmkt_senderid: DevKit.Controls.Lookup;
			msdynmkt_subject: DevKit.Controls.ActionCards;
			/** Template for the email */
			msdynmkt_templateid: DevKit.Controls.Lookup;
			msdynmkt_textpart: DevKit.Controls.ActionCards;
			msdynmkt_to: DevKit.Controls.ActionCards;
			msdynmkt_topic: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Reason for the status of the Email */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_journeydependency_dependency_msdynmkt_email: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_contact_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_lead_emailid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_email_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_email_Information2 */
		Body: DevKit.Formmsdynmkt_email_Information2.Body;
		/** The Header section of form msdynmkt_email_Information2 */
		Header: DevKit.Formmsdynmkt_email_Information2.Header;
		/** The Navigation of form msdynmkt_email_Information2 */
		Navigation: DevKit.Formmsdynmkt_email_Information2.Navigation;
		/** The SidePanes of form msdynmkt_email_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_quick_create_form {
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
			msdynmkt_automaticallygeneratetextpart: DevKit.Controls.Boolean;
			msdynmkt_description: DevKit.Controls.String;
			msdynmkt_designerhtml: DevKit.Controls.String;
			msdynmkt_emailbody: DevKit.Controls.String;
			msdynmkt_emailcontenttype: DevKit.Controls.OptionSet;
			msdynmkt_fromemail: DevKit.Controls.String;
			msdynmkt_fromname: DevKit.Controls.String;
			msdynmkt_messagedesignation: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_placeholders: DevKit.Controls.String;
			msdynmkt_previewtext: DevKit.Controls.String;
			msdynmkt_replytoemail: DevKit.Controls.String;
			msdynmkt_subject: DevKit.Controls.String;
			/** Template for the email */
			msdynmkt_templateid: DevKit.Controls.Lookup;
			msdynmkt_textpart: DevKit.Controls.String;
			msdynmkt_to: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Email */
			statuscode: DevKit.Controls.OptionSet;
		}
	}
	class FormEmail_quick_create_form extends DevKit.IForm {
		/**
		* Email quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_quick_create_form */
		Body: DevKit.FormEmail_quick_create_form.Body;
	}
	class msdynmkt_emailApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_emailApi
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
		readonly ComponentState: OptionSet.msdynmkt_email.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Thumbnail preview of template */
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
		msdynmkt_automaticallygeneratetextpart: boolean;
		msdynmkt_brandprofiledata: string;
		/** Email brand profile */
		msdynmkt_brandprofileid: string;
		msdynmkt_compliancesettings: string;
		msdynmkt_compliancesettings3: string;
		msdynmkt_compliancesettings4: string;
		msdynmkt_compliancesettingscompanyaddress: string;
		msdynmkt_conditionalcontent: string;
		msdynmkt_description: string;
		msdynmkt_designerhtml: string;
		msdynmkt_emailbody: string;
		msdynmkt_emailcontentlanguage: OptionSet.msdynmkt_email.msdynmkt_emailcontentlanguage;
		msdynmkt_emailcontenttype: OptionSet.msdynmkt_email.msdynmkt_emailcontenttype;
		/** Unique identifier for entity instances */
		msdynmkt_emailId: string;
		msdynmkt_eventtype: string;
		msdynmkt_fromemail: string;
		msdynmkt_fromname: string;
		msdynmkt_intendeduse: OptionSet.msdynmkt_email.msdynmkt_intendeduse;
		msdynmkt_isteamswebinaremail: boolean;
		msdynmkt_messagedesignation: OptionSet.msdynmkt_email.msdynmkt_messagedesignation;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Information for result of migration from outbound marketing email. */
		msdynmkt_obmmigrationinfo: string;
		msdynmkt_placeholders: string;
		msdynmkt_previewhtml: string;
		msdynmkt_previewtext: string;
		msdynmkt_profiletype: string;
		msdynmkt_purpose: string;
		msdynmkt_replytoemail: string;
		/** Email sender profile */
		msdynmkt_senderid: string;
		msdynmkt_subject: string;
		/** Template for the email */
		msdynmkt_templateid: string;
		msdynmkt_testconfiguration: string;
		msdynmkt_textpart: string;
		msdynmkt_to: string;
		msdynmkt_topic: string;
		msdynmkt_virtualeventid: string;
		msdynmkt_webinaremailtemplatetype: string;
		/** This field is deprecated */
		msdynmkt_webinarid: string;
		msdynmkt_webinartitle: string;
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
		/** Status of the Email */
		statecode: OptionSet.msdynmkt_email.statecode;
		/** Reason for the status of the Email */
		statuscode: OptionSet.msdynmkt_email.statuscode;
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
			/** Thumbnail preview of template */
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
			readonly msdynmkt_automaticallygeneratetextpart: string;
			readonly msdynmkt_brandprofiledata: string;
			/** Email brand profile */
			readonly msdynmkt_brandprofileid: string;
			readonly msdynmkt_compliancesettings: string;
			readonly msdynmkt_compliancesettings3: string;
			readonly msdynmkt_compliancesettings4: string;
			readonly msdynmkt_compliancesettingscompanyaddress: string;
			readonly msdynmkt_conditionalcontent: string;
			readonly msdynmkt_description: string;
			readonly msdynmkt_designerhtml: string;
			readonly msdynmkt_emailbody: string;
			readonly msdynmkt_emailcontentlanguage: string;
			readonly msdynmkt_emailcontenttype: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_emailId: string;
			readonly msdynmkt_eventtype: string;
			readonly msdynmkt_fromemail: string;
			readonly msdynmkt_fromname: string;
			readonly msdynmkt_intendeduse: string;
			readonly msdynmkt_isteamswebinaremail: string;
			readonly msdynmkt_messagedesignation: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Information for result of migration from outbound marketing email. */
			readonly msdynmkt_obmmigrationinfo: string;
			readonly msdynmkt_placeholders: string;
			readonly msdynmkt_previewhtml: string;
			readonly msdynmkt_previewtext: string;
			readonly msdynmkt_profiletype: string;
			readonly msdynmkt_purpose: string;
			readonly msdynmkt_replytoemail: string;
			/** Email sender profile */
			readonly msdynmkt_senderid: string;
			readonly msdynmkt_subject: string;
			/** Template for the email */
			readonly msdynmkt_templateid: string;
			readonly msdynmkt_testconfiguration: string;
			readonly msdynmkt_textpart: string;
			readonly msdynmkt_to: string;
			readonly msdynmkt_topic: string;
			readonly msdynmkt_virtualeventid: string;
			readonly msdynmkt_webinaremailtemplatetype: string;
			/** This field is deprecated */
			readonly msdynmkt_webinarid: string;
			readonly msdynmkt_webinartitle: string;
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
			/** Status of the Email */
			readonly statecode: string;
			/** Reason for the status of the Email */
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
	namespace msdynmkt_email {
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
		enum msdynmkt_emailcontentlanguage {
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
		enum msdynmkt_emailcontenttype {
			/** 534120000 */
			Default,
			/** 534120001 */
			Double_opt_in_confirmation
		}
		enum msdynmkt_intendeduse {
			/** 534120001 */
			Confirmation_Request,
			/** 534120000 */
			Default
		}
		enum msdynmkt_messagedesignation {
			/** 534120000 */
			Commercial,
			/** 534120001 */
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
			Ready_to_send,
			/** 3 */
			Ready_to_send_editing
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