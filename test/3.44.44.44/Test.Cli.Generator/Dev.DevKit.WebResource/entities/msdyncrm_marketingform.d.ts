//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingform_Information {
		interface Header extends DevKit.Controls.IHeader {
			msdyncrm_entityupdatebehavioronsubmit: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_validForPageType: DevKit.Controls.OptionSet;
			/** Reason for the status of the marketing form */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab__C0537846_8E64_48CA_AF92_2219CF84E4AF_Sections {
			_2330E860_97DA_4BF4_A5DA_DE4B82DA15F5: DevKit.Controls.Section;
			_C0537846_8E64_48CA_AF92_2219CF84E4AF_SECTION_2: DevKit.Controls.Section;
			_C0537846_8E64_48CA_AF92_2219CF84E4AF_SECTION_3: DevKit.Controls.Section;
			_C0537846_8E64_48CA_AF92_2219CF84E4AF_SECTION_4: DevKit.Controls.Section;
			DoubleOptIn: DevKit.Controls.Section;
			SubmissionBehavior: DevKit.Controls.Section;
		}
		interface tab_CapturingDefinition_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_Form_hosting_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_FormDefinition_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_insights_Sections {
			insights_section: DevKit.Controls.Section;
		}
		interface tab_tab_submissions_Sections {
			tab_submissions_left: DevKit.Controls.Section;
		}
		interface tab__C0537846_8E64_48CA_AF92_2219CF84E4AF extends DevKit.Controls.ITab {
			Section: tab__C0537846_8E64_48CA_AF92_2219CF84E4AF_Sections;
		}
		interface tab_CapturingDefinition extends DevKit.Controls.ITab {
			Section: tab_CapturingDefinition_Sections;
		}
		interface tab_Form_hosting extends DevKit.Controls.ITab {
			Section: tab_Form_hosting_Sections;
		}
		interface tab_FormDefinition extends DevKit.Controls.ITab {
			Section: tab_FormDefinition_Sections;
		}
		interface tab_insights extends DevKit.Controls.ITab {
			Section: tab_insights_Sections;
		}
		interface tab_tab_submissions extends DevKit.Controls.ITab {
			Section: tab_tab_submissions_Sections;
		}
		interface Tabs {
			_C0537846_8E64_48CA_AF92_2219CF84E4AF: tab__C0537846_8E64_48CA_AF92_2219CF84E4AF;
			CapturingDefinition: tab_CapturingDefinition;
			Form_hosting: tab_Form_hosting;
			FormDefinition: tab_FormDefinition;
			insights: tab_insights;
			tab_submissions: tab_tab_submissions;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			FormInsightsCtrl: DevKit.Controls.ActionCards;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyncrm_allowPrefill: DevKit.Controls.Boolean;
			msdyncrm_alwaysgenerateleads: DevKit.Controls.Boolean;
			msdyncrm_capturing: DevKit.Controls.Boolean;
			msdyncrm_capturing_configured: DevKit.Controls.ELSE3???;//msdyncrm_capturing_configured - AC60732E-6E57-404A-9D03-3435AC14249A -- FOR DEBUG 
			msdyncrm_capturing_data: DevKit.Controls.String;
			msdyncrm_capturing_scantime: DevKit.Controls.DateTime;
			msdyncrm_capturing_wizard: DevKit.Controls.ActionCards;
			msdyncrm_ConfirmationMessage: DevKit.Controls.String;
			msdyncrm_contactmatchingstrategy: DevKit.Controls.Lookup;
			/** Select the content settings to use for confirmation email. */
			msdyncrm_doubleoptincontentsettings: DevKit.Controls.Lookup;
			/** Select the confirmation email to send contacts requesting to submit a form. */
			msdyncrm_doubleoptinmessage: DevKit.Controls.Lookup;
			/** How to say Thank You */
			msdyncrm_doubleoptinthankyouformat: DevKit.Controls.OptionSet;
			/** Marketing Page displayed when customer triggers confirmation */
			msdyncrm_doubleoptinthankyoupage: DevKit.Controls.Lookup;
			/** Web Page displayed when customer triggers confirmation */
			msdyncrm_doubleoptinthankyouurl: DevKit.Controls.String;
			msdyncrm_enabledoubleoptin: DevKit.Controls.Boolean;
			msdyncrm_errorImageUrl: DevKit.Controls.String;
			msdyncrm_ErrorMessage: DevKit.Controls.String;
			msdyncrm_eventmatchingstrategy: DevKit.Controls.String;
			msdyncrm_eventmatchingstrategyinfo: DevKit.Controls.ActionCards;
			msdyncrm_externalhostedforminstructions: DevKit.Controls.ActionCards;
			msdyncrm_formcontrolmapping: DevKit.Controls.String;
			msdyncrm_formdefinition: DevKit.Controls.ActionCards;
			msdyncrm_formfieldmapping: DevKit.Controls.String;
			/** Form to save */
			msdyncrm_formtosave: DevKit.Controls.Boolean;
			msdyncrm_info: DevKit.Controls.ActionCards;
			msdyncrm_keepsuccessfulsubmissions: DevKit.Controls.Boolean;
			msdyncrm_leadmatchingstrategy: DevKit.Controls.Lookup;
			msdyncrm_LimitExceededMessage: DevKit.Controls.String;
			msdyncrm_marketingformtemplate: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_organizationwhitelistdomain: DevKit.Controls.String;
			msdyncrm_purpose: DevKit.Controls.OptionSet;
			msdyncrm_RedirectURL: DevKit.Controls.String;
			msdyncrm_successImageUrl: DevKit.Controls.String;
			msdyncrm_visualstyle: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the marketing form */
			statecode: DevKit.Controls.OptionSet;
			WhiteListControl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyncrm_marketingform_marketingformsubmission: DevKit.Controls.NavigationItem,
			msdyncrm_marketingform_msdyncrm_formpagetemplate: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingform_contact_marketingformid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingform_lead_marketingformid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingform_msdyncrm_formpage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingform_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingform_msdyncrm_listform: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingform_msdyncrm_marketingformactivity_marketingformid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingform_msdyncrm_marketingformw: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingform_msevtmgt_event: DevKit.Controls.NavigationItem,
			msgdpr_msdyncrm_marketingform_contact_consentchangesourceformId: DevKit.Controls.NavigationItem,
			msgdpr_msdyncrm_marketingform_msgdpr_gdprconsentchangerecord: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_submissions: DevKit.Controls.Grid;
			Related_Fields: DevKit.Controls.Grid;
			related_formpages: DevKit.Controls.Grid;
			Related_MarketingPages: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_marketingform_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingform_Information */
		Body: DevKit.Formmsdyncrm_marketingform_Information.Body;
		/** The Header section of form msdyncrm_marketingform_Information */
		Header: DevKit.Formmsdyncrm_marketingform_Information.Header;
		/** The Navigation of form msdyncrm_marketingform_Information */
		Navigation: DevKit.Formmsdyncrm_marketingform_Information.Navigation;
		/** The Grid of form msdyncrm_marketingform_Information */
		Grid: DevKit.Formmsdyncrm_marketingform_Information.Grid;
		/** The SidePanes of form msdyncrm_marketingform_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_marketingformApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingformApi
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
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_allowPrefill: boolean;
		msdyncrm_alwaysgenerateleads: boolean;
		msdyncrm_capturing: boolean;
		msdyncrm_capturing_configured: boolean;
		msdyncrm_capturing_data: string;
		msdyncrm_capturing_scantime_UtcDateAndTime: Date;
		msdyncrm_ConfirmationMessage: string;
		msdyncrm_contactmatchingstrategy: string;
		/** Select the content settings to use for confirmation email. */
		msdyncrm_doubleoptincontentsettings: string;
		/** Select the confirmation email to send contacts requesting to submit a form. */
		msdyncrm_doubleoptinmessage: string;
		/** How to say Thank You */
		msdyncrm_doubleoptinthankyouformat: OptionSet.msdyncrm_marketingform.msdyncrm_doubleoptinthankyouformat;
		/** Marketing Page displayed when customer triggers confirmation */
		msdyncrm_doubleoptinthankyoupage: string;
		/** Web Page displayed when customer triggers confirmation */
		msdyncrm_doubleoptinthankyouurl: string;
		msdyncrm_enabledoubleoptin: boolean;
		msdyncrm_entityupdatebehavioronsubmit: OptionSet.msdyncrm_marketingform.msdyncrm_entityupdatebehavioronsubmit;
		msdyncrm_errorImageUrl: string;
		msdyncrm_ErrorMessage: string;
		msdyncrm_eventmatchingstrategy: string;
		msdyncrm_eventmatchingstrategyinfo: string;
		readonly msdyncrm_externalhostedforminstructions: string;
		msdyncrm_formcontrolmapping: string;
		/** JSON definition of the fields related to the Marketing form entity. */
		msdyncrm_FormDefinition: string;
		msdyncrm_formfieldmapping: string;
		/** Form to save */
		readonly msdyncrm_formtosave: boolean;
		/** Info */
		msdyncrm_info: string;
		msdyncrm_insights_placeholder: string;
		msdyncrm_keepsuccessfulsubmissions: boolean;
		msdyncrm_leadmatchingstrategy: string;
		msdyncrm_LimitExceededMessage: string;
		/** Unique ID for entity instances */
		msdyncrm_marketingformId: string;
		msdyncrm_marketingformtemplate: string;
		msdyncrm_marketingprovided: boolean;
		/** The name of the custom entity */
		msdyncrm_name: string;
		readonly msdyncrm_organizationwhitelistdomain: string;
		msdyncrm_publishedformurl: string;
		msdyncrm_purpose: OptionSet.msdyncrm_marketingform.msdyncrm_purpose;
		msdyncrm_RedirectURL: string;
		msdyncrm_successImageUrl: string;
		msdyncrm_validForPageType: OptionSet.msdyncrm_marketingform.msdyncrm_validForPageType;
		msdyncrm_visualstyle: OptionSet.msdyncrm_marketingform.msdyncrm_visualstyle;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique ID for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the marketing form */
		statecode: OptionSet.msdyncrm_marketingform.statecode;
		/** Reason for the status of the marketing form */
		statuscode: OptionSet.msdyncrm_marketingform.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time-zone code that was in use when the record was created */
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
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_allowPrefill: string;
			readonly msdyncrm_alwaysgenerateleads: string;
			readonly msdyncrm_capturing: string;
			readonly msdyncrm_capturing_configured: string;
			readonly msdyncrm_capturing_data: string;
			readonly msdyncrm_capturing_scantime_UtcDateAndTime: string;
			readonly msdyncrm_ConfirmationMessage: string;
			readonly msdyncrm_contactmatchingstrategy: string;
			/** Select the content settings to use for confirmation email. */
			readonly msdyncrm_doubleoptincontentsettings: string;
			/** Select the confirmation email to send contacts requesting to submit a form. */
			readonly msdyncrm_doubleoptinmessage: string;
			/** How to say Thank You */
			readonly msdyncrm_doubleoptinthankyouformat: string;
			/** Marketing Page displayed when customer triggers confirmation */
			readonly msdyncrm_doubleoptinthankyoupage: string;
			/** Web Page displayed when customer triggers confirmation */
			readonly msdyncrm_doubleoptinthankyouurl: string;
			readonly msdyncrm_enabledoubleoptin: string;
			readonly msdyncrm_entityupdatebehavioronsubmit: string;
			readonly msdyncrm_errorImageUrl: string;
			readonly msdyncrm_ErrorMessage: string;
			readonly msdyncrm_eventmatchingstrategy: string;
			readonly msdyncrm_eventmatchingstrategyinfo: string;
			readonly msdyncrm_externalhostedforminstructions: string;
			readonly msdyncrm_formcontrolmapping: string;
			/** JSON definition of the fields related to the Marketing form entity. */
			readonly msdyncrm_FormDefinition: string;
			readonly msdyncrm_formfieldmapping: string;
			/** Form to save */
			readonly msdyncrm_formtosave: string;
			/** Info */
			readonly msdyncrm_info: string;
			readonly msdyncrm_insights_placeholder: string;
			readonly msdyncrm_keepsuccessfulsubmissions: string;
			readonly msdyncrm_leadmatchingstrategy: string;
			readonly msdyncrm_LimitExceededMessage: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingformId: string;
			readonly msdyncrm_marketingformtemplate: string;
			readonly msdyncrm_marketingprovided: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			readonly msdyncrm_organizationwhitelistdomain: string;
			readonly msdyncrm_publishedformurl: string;
			readonly msdyncrm_purpose: string;
			readonly msdyncrm_RedirectURL: string;
			readonly msdyncrm_successImageUrl: string;
			readonly msdyncrm_validForPageType: string;
			readonly msdyncrm_visualstyle: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique ID for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the marketing form */
			readonly statecode: string;
			/** Reason for the status of the marketing form */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_marketingform {
		enum msdyncrm_doubleoptinthankyouformat {
			/** 192350000 */
			Open_the_marketing_page_after_confirmation,
			/** 192350001 */
			Open_the_web_page_after_confirmation
		}
		enum msdyncrm_entityupdatebehavioronsubmit {
			/** 0 */
			Contacts_and_leads,
			/** 3 */
			No_update,
			/** 1 */
			Only_contacts,
			/** 2 */
			Only_leads
		}
		enum msdyncrm_purpose {
			/** 3 */
			Collateral_download,
			/** 0 */
			Contact_capture,
			/** 7 */
			Double_Opt_In_Email_based_confirmation,
			/** 5 */
			Event_feedback,
			/** 4 */
			Event_registration,
			/** 2 */
			Lead_generation,
			/** 1 */
			Newsletter_subscription,
			/** 6 */
			Structural
		}
		enum msdyncrm_validForPageType {
			/** 3 */
			Event_registration,
			/** 2 */
			Forward_to_a_friend,
			/** 0 */
			Landing_page,
			/** 1 */
			Subscription_center
		}
		enum msdyncrm_visualstyle {
			/** 0 */
			_1_column,
			/** 1 */
			_2_column,
			/** 2 */
			Mixed
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
			/** 1 */
			Live,
			/** 192350003 */
			Live_editable,
			/** 2 */
			Stopped
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