//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormFailed_Submissions {
		interface tab_Failed_Submissions_Sections {
		}
		interface tab_Failed_Submissions extends DevKit.Controls.ITab {
			Section: tab_Failed_Submissions_Sections;
		}
		interface Tabs {
			Failed_Submissions: tab_Failed_Submissions;
		}
		interface Body {
			Tab: Tabs;

		}
		interface Navigation {
			msdynmkt_marketingformsubmission_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: DevKit.Controls.NavigationItem,
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_submissions: DevKit.Controls.Grid;
		}
	}
	class FormFailed_Submissions extends DevKit.IForm {
		/**
		* Failed Submissions [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Failed_Submissions */
		Body: DevKit.FormFailed_Submissions.Body;
		/** The Navigation of form Failed_Submissions */
		Navigation: DevKit.FormFailed_Submissions.Navigation;
		/** The Grid of form Failed_Submissions */
		Grid: DevKit.FormFailed_Submissions.Grid;
		/** The SidePanes of form Failed_Submissions */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormForm_settings {
		interface tab_tab_1_Sections {
			audience_contact: DevKit.Controls.Section;
			audience_lead: DevKit.Controls.Section;
			audience_leadcontact: DevKit.Controls.Section;
			general: DevKit.Controls.Section;
			submission: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdynmkt_contactmatchingrule: DevKit.Controls.Lookup;
			msdynmkt_contactmatchingrule1: DevKit.Controls.Lookup;
			msdynmkt_createcontact: DevKit.Controls.OptionSet;
			msdynmkt_createcontact1: DevKit.Controls.OptionSet;
			msdynmkt_createlead: DevKit.Controls.OptionSet;
			msdynmkt_createlead1: DevKit.Controls.OptionSet;
			msdynmkt_handlingduplicatecontacts: DevKit.Controls.OptionSet;
			msdynmkt_handlingduplicatecontacts1: DevKit.Controls.OptionSet;
			msdynmkt_handlingduplicateleads: DevKit.Controls.OptionSet;
			msdynmkt_handlingduplicateleads1: DevKit.Controls.OptionSet;
			msdynmkt_leadmatchingrule: DevKit.Controls.Lookup;
			msdynmkt_leadmatchingrule1: DevKit.Controls.Lookup;
			/** Redirect URL */
			msdynmkt_redirecturl: DevKit.Controls.String;
			msdynmkt_submission_control: DevKit.Controls.ActionCards;
			msdynmkt_targetaudience: DevKit.Controls.Lookup;
			/** Audience */
			msdynmkt_targetentity: DevKit.Controls.String;
			msdynmkt_updatecontact: DevKit.Controls.OptionSet;
			msdynmkt_updatecontact1: DevKit.Controls.OptionSet;
			msdynmkt_updatelead: DevKit.Controls.OptionSet;
			msdynmkt_updatelead1: DevKit.Controls.OptionSet;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_marketingformsubmission_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: DevKit.Controls.NavigationItem,
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: DevKit.Controls.NavigationItem
		}
	}
	class FormForm_settings extends DevKit.IForm {
		/**
		* Form settings [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Form_settings */
		Body: DevKit.FormForm_settings.Body;
		/** The Navigation of form Form_settings */
		Navigation: DevKit.FormForm_settings.Navigation;
		/** The SidePanes of form Form_settings */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_marketingform_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Name of the Form */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier for Compliance profile associated with Form. */
			msdynmkt_compliancesettings4id: DevKit.Controls.Lookup;
			msdynmkt_contactmatchingrule: DevKit.Controls.Lookup;
			msdynmkt_createcontact: DevKit.Controls.OptionSet;
			msdynmkt_createlead: DevKit.Controls.OptionSet;
			/** When selected we'll try to create a new contact if there was no match to an existing one */
			msdynmkt_createnewparentcontactonnomatch: DevKit.Controls.Boolean;
			/** Marked-up HTML used by Form Editor */
			msdynmkt_designerhtml: DevKit.Controls.String;
			/** Unique identifier of the user who modified the Is Double Opt-In Forcibly Disabled column. */
			msdynmkt_doubleoptintogglemodifiedby: DevKit.Controls.Lookup;
			/** Date and time when the Is Double Opt-In Forcibly Disabled column was modified. */
			msdynmkt_doubleoptintogglemodifiedon: DevKit.Controls.DateTime;
			/** Error message */
			msdynmkt_errormessage: DevKit.Controls.String;
			msdynmkt_formhtml: DevKit.Controls.ActionCards;
			msdynmkt_handlingduplicatecontacts: DevKit.Controls.OptionSet;
			msdynmkt_handlingduplicateleads: DevKit.Controls.OptionSet;
			/** If yes, Double Opt-In will be disabled for this marketing form, even if the form's compliance profile has Double Opt-In enabled. */
			msdynmkt_isdoiforciblydisabled: DevKit.Controls.Boolean;
			msdynmkt_leadmatchingrule: DevKit.Controls.Lookup;
			/** When selected we'll try to find a parent contact for a lead */
			msdynmkt_linkleadtoparentcontact: DevKit.Controls.Boolean;
			/** Form template */
			msdynmkt_marketingformtemplateid: DevKit.Controls.Lookup;
			msdynmkt_marketingformtype: DevKit.Controls.OptionSet;
			/** Matching Strategy associated with Form. */
			msdynmkt_matchingstrategyid: DevKit.Controls.Lookup;
			/** When selected it specified how to match existing contact */
			msdynmkt_parentcontactmatchingstrategyid: DevKit.Controls.Lookup;
			/** Placeholders */
			msdynmkt_placeholders: DevKit.Controls.String;
			/** If enabled, form fields are prefilled by default. */
			msdynmkt_prefillfields: DevKit.Controls.Boolean;
			/** Redirect after submission */
			msdynmkt_redirectenabled: DevKit.Controls.Boolean;
			/** Redirect URL */
			msdynmkt_redirecturl: DevKit.Controls.String;
			/** Thank you message */
			msdynmkt_successmessage: DevKit.Controls.String;
			msdynmkt_targetaudience: DevKit.Controls.Lookup;
			/** Audience */
			msdynmkt_targetentity: DevKit.Controls.String;
			msdynmkt_updatecontact: DevKit.Controls.OptionSet;
			msdynmkt_updatelead: DevKit.Controls.OptionSet;
			/** When selected we'll try to update parent contact with submitted data */
			msdynmkt_updateparentcontact: DevKit.Controls.Boolean;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Reason for the status of the Form */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_marketingformsubmission_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: DevKit.Controls.NavigationItem,
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_marketingform_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_marketingform_Information */
		Body: DevKit.Formmsdynmkt_marketingform_Information.Body;
		/** The Header section of form msdynmkt_marketingform_Information */
		Header: DevKit.Formmsdynmkt_marketingform_Information.Header;
		/** The Navigation of form msdynmkt_marketingform_Information */
		Navigation: DevKit.Formmsdynmkt_marketingform_Information.Navigation;
		/** The SidePanes of form msdynmkt_marketingform_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSubmissions {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {
			msdynmkt_marketingformsubmission_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: DevKit.Controls.NavigationItem,
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_submissions: DevKit.Controls.Grid;
		}
	}
	class FormSubmissions extends DevKit.IForm {
		/**
		* Submissions [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Submissions */
		Body: DevKit.FormSubmissions.Body;
		/** The Navigation of form Submissions */
		Navigation: DevKit.FormSubmissions.Navigation;
		/** The Grid of form Submissions */
		Grid: DevKit.FormSubmissions.Grid;
		/** The SidePanes of form Submissions */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSubmissions2 {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {
			msdynmkt_marketingformsubmission_marketingform: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: DevKit.Controls.NavigationItem,
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_submissions: DevKit.Controls.Grid;
		}
	}
	class FormSubmissions2 extends DevKit.IForm {
		/**
		* Submissions [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Submissions2 */
		Body: DevKit.FormSubmissions2.Body;
		/** The Navigation of form Submissions2 */
		Navigation: DevKit.FormSubmissions2.Navigation;
		/** The Grid of form Submissions2 */
		Grid: DevKit.FormSubmissions2.Grid;
		/** The SidePanes of form Submissions2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_marketingform_New_Form {
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
			/** Name of the Form */
			msdynmkt_name: DevKit.Controls.String;
			/** Audience */
			msdynmkt_targetentity: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdynmkt_marketingform_New_Form extends DevKit.IForm {
		/**
		* New Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_marketingform_New_Form */
		Body: DevKit.Formmsdynmkt_marketingform_New_Form.Body;
	}
	class msdynmkt_marketingformApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_marketingformApi
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
		readonly ComponentState: OptionSet.msdynmkt_marketingform.ComponentState;
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
		/** Unique identifier for Compliance profile associated with Form. */
		msdynmkt_compliancesettings4id: string;
		msdynmkt_conditionalcontent: string;
		msdynmkt_contactmatchingrule: string;
		msdynmkt_createcontact: OptionSet.msdynmkt_marketingform.msdynmkt_createcontact;
		msdynmkt_createlead: OptionSet.msdynmkt_marketingform.msdynmkt_createlead;
		/** When selected we'll try to create a new contact if there was no match to an existing one */
		msdynmkt_createnewparentcontactonnomatch: boolean;
		/** Marked-up HTML used by Form Editor */
		msdynmkt_designerhtml: string;
		/** Unique identifier of the user who modified the Is Double Opt-In Forcibly Disabled column. */
		msdynmkt_doubleoptintogglemodifiedby: string;
		/** Date and time when the Is Double Opt-In Forcibly Disabled column was modified. */
		msdynmkt_doubleoptintogglemodifiedon_UtcDateAndTime: Date;
		/** Error message */
		msdynmkt_errormessage: string;
		/** Finilized HTML served to C2 */
		msdynmkt_formhtml: string;
		msdynmkt_handlingduplicatecontacts: OptionSet.msdynmkt_marketingform.msdynmkt_handlingduplicatecontacts;
		msdynmkt_handlingduplicateleads: OptionSet.msdynmkt_marketingform.msdynmkt_handlingduplicateleads;
		/** If yes, Double Opt-In will be disabled for this marketing form, even if the form's compliance profile has Double Opt-In enabled. */
		msdynmkt_isdoiforciblydisabled: boolean;
		msdynmkt_leadmatchingrule: string;
		/** When selected we'll try to find a parent contact for a lead */
		msdynmkt_linkleadtoparentcontact: boolean;
		/** Unique identifier for entity instances */
		msdynmkt_marketingformId: string;
		/** Form template */
		msdynmkt_marketingformtemplateid: string;
		msdynmkt_marketingformtype: OptionSet.msdynmkt_marketingform.msdynmkt_marketingformtype;
		/** Matching Strategy associated with Form. */
		msdynmkt_matchingstrategyid: string;
		/** Name of the Form */
		msdynmkt_name: string;
		/** When selected it specified how to match existing contact */
		msdynmkt_parentcontactmatchingstrategyid: string;
		/** Placeholders */
		msdynmkt_placeholders: string;
		/** (Deprecated) PortalPublishingStatus - use standalonepublishstatus instead */
		msdynmkt_portalpublishingstatus: OptionSet.msdynmkt_marketingform.msdynmkt_portalpublishingstatus;
		/** (Deprecated) Portal Url */
		msdynmkt_portalurl: string;
		/** If enabled, form fields are prefilled by default. */
		msdynmkt_prefillfields: boolean;
		/** Redirect after submission */
		msdynmkt_redirectenabled: boolean;
		/** Redirect URL */
		msdynmkt_redirecturl: string;
		msdynmkt_standalonehtml: string;
		msdynmkt_standalonepublishstatus: OptionSet.msdynmkt_marketingform.msdynmkt_standalonepublishstatus;
		/** Thank you message */
		msdynmkt_successmessage: string;
		msdynmkt_targetaudience: string;
		/** Audience */
		msdynmkt_targetentity: string;
		/** Unique Name for the entity. */
		msdynmkt_uniquename: string;
		msdynmkt_updatecontact: OptionSet.msdynmkt_marketingform.msdynmkt_updatecontact;
		msdynmkt_updatelead: OptionSet.msdynmkt_marketingform.msdynmkt_updatelead;
		/** When selected we'll try to update parent contact with submitted data */
		msdynmkt_updateparentcontact: boolean;
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
		/** Status of the Form */
		statecode: OptionSet.msdynmkt_marketingform.statecode;
		/** Reason for the status of the Form */
		statuscode: OptionSet.msdynmkt_marketingform.statuscode;
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
			/** Unique identifier for Compliance profile associated with Form. */
			readonly msdynmkt_compliancesettings4id: string;
			readonly msdynmkt_conditionalcontent: string;
			readonly msdynmkt_contactmatchingrule: string;
			readonly msdynmkt_createcontact: string;
			readonly msdynmkt_createlead: string;
			/** When selected we'll try to create a new contact if there was no match to an existing one */
			readonly msdynmkt_createnewparentcontactonnomatch: string;
			/** Marked-up HTML used by Form Editor */
			readonly msdynmkt_designerhtml: string;
			/** Unique identifier of the user who modified the Is Double Opt-In Forcibly Disabled column. */
			readonly msdynmkt_doubleoptintogglemodifiedby: string;
			/** Date and time when the Is Double Opt-In Forcibly Disabled column was modified. */
			readonly msdynmkt_doubleoptintogglemodifiedon_UtcDateAndTime: string;
			/** Error message */
			readonly msdynmkt_errormessage: string;
			/** Finilized HTML served to C2 */
			readonly msdynmkt_formhtml: string;
			readonly msdynmkt_handlingduplicatecontacts: string;
			readonly msdynmkt_handlingduplicateleads: string;
			/** If yes, Double Opt-In will be disabled for this marketing form, even if the form's compliance profile has Double Opt-In enabled. */
			readonly msdynmkt_isdoiforciblydisabled: string;
			readonly msdynmkt_leadmatchingrule: string;
			/** When selected we'll try to find a parent contact for a lead */
			readonly msdynmkt_linkleadtoparentcontact: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_marketingformId: string;
			/** Form template */
			readonly msdynmkt_marketingformtemplateid: string;
			readonly msdynmkt_marketingformtype: string;
			/** Matching Strategy associated with Form. */
			readonly msdynmkt_matchingstrategyid: string;
			/** Name of the Form */
			readonly msdynmkt_name: string;
			/** When selected it specified how to match existing contact */
			readonly msdynmkt_parentcontactmatchingstrategyid: string;
			/** Placeholders */
			readonly msdynmkt_placeholders: string;
			/** (Deprecated) PortalPublishingStatus - use standalonepublishstatus instead */
			readonly msdynmkt_portalpublishingstatus: string;
			/** (Deprecated) Portal Url */
			readonly msdynmkt_portalurl: string;
			/** If enabled, form fields are prefilled by default. */
			readonly msdynmkt_prefillfields: string;
			/** Redirect after submission */
			readonly msdynmkt_redirectenabled: string;
			/** Redirect URL */
			readonly msdynmkt_redirecturl: string;
			readonly msdynmkt_standalonehtml: string;
			readonly msdynmkt_standalonepublishstatus: string;
			/** Thank you message */
			readonly msdynmkt_successmessage: string;
			readonly msdynmkt_targetaudience: string;
			/** Audience */
			readonly msdynmkt_targetentity: string;
			/** Unique Name for the entity. */
			readonly msdynmkt_uniquename: string;
			readonly msdynmkt_updatecontact: string;
			readonly msdynmkt_updatelead: string;
			/** When selected we'll try to update parent contact with submitted data */
			readonly msdynmkt_updateparentcontact: string;
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
			/** Status of the Form */
			readonly statecode: string;
			/** Reason for the status of the Form */
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
	namespace msdynmkt_marketingform {
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
		enum msdynmkt_createcontact {
			/** 810180001 */
			No,
			/** 810180000 */
			Yes
		}
		enum msdynmkt_createlead {
			/** 810180001 */
			No,
			/** 810180000 */
			Yes
		}
		enum msdynmkt_handlingduplicatecontacts {
			/** 100000001 */
			Always_create_new_contact,
			/** 100000000 */
			Use_a_rule_to_match_an_existing_contact
		}
		enum msdynmkt_handlingduplicateleads {
			/** 100000001 */
			Always_create_new_lead,
			/** 100000000 */
			Use_a_rule_to_match_an_existing_lead
		}
		enum msdynmkt_marketingformtype {
			/** 534120000 */
			Marketing_form,
			/** 534120001 */
			Registration_form
		}
		enum msdynmkt_portalpublishingstatus {
			/** 534120003 */
			Failed,
			/** 534120001 */
			NotStarted,
			/** 534120002 */
			Publishing,
			/** 534120004 */
			Succeeded
		}
		enum msdynmkt_standalonepublishstatus {
			/** 534120003 */
			Failed,
			/** 534120002 */
			InProgress,
			/** 534120001 */
			NotStarted,
			/** 534120004 */
			Succeeded
		}
		enum msdynmkt_updatecontact {
			/** 810180001 */
			No,
			/** 810180000 */
			Yes
		}
		enum msdynmkt_updatelead {
			/** 810180001 */
			No,
			/** 810180000 */
			Yes
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
			/** 2 */
			Live,
			/** 3 */
			Live_Editing
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