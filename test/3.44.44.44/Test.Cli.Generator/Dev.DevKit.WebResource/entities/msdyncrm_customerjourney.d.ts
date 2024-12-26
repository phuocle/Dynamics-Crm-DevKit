//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_customerjourney_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Tells whether the customer journey is recurring */
			msdyncrm_IsRecurring: DevKit.Controls.Boolean;
			/** The name of the customer journey */
			msdyncrm_name: DevKit.Controls.String;
			/** The start date of the customer journey */
			msdyncrm_StartDateTime: DevKit.Controls.DateTime;
			/** Reason for the status of the customer journey */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_designer_tab_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_general_tab_Sections {
			general_tab_section_2: DevKit.Controls.Section;
			general_tab_section_3: DevKit.Controls.Section;
			general_tab_section_4: DevKit.Controls.Section;
			general_tab_section_5: DevKit.Controls.Section;
			general_tab_section_6: DevKit.Controls.Section;
			general_tab_section_7: DevKit.Controls.Section;
			general_tab_section_marketingemailsused: DevKit.Controls.Section;
			general_tab_section_segmentsused: DevKit.Controls.Section;
		}
		interface tab_insights_Sections {
			insights_section: DevKit.Controls.Section;
		}
		interface tab_LinkedInCampaignTab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_RecoveryItemsTab_Sections {
			RecoveryItemsSection: DevKit.Controls.Section;
		}
		interface tab_designer_tab extends DevKit.Controls.ITab {
			Section: tab_designer_tab_Sections;
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface tab_insights extends DevKit.Controls.ITab {
			Section: tab_insights_Sections;
		}
		interface tab_LinkedInCampaignTab extends DevKit.Controls.ITab {
			Section: tab_LinkedInCampaignTab_Sections;
		}
		interface tab_RecoveryItemsTab extends DevKit.Controls.ITab {
			Section: tab_RecoveryItemsTab_Sections;
		}
		interface Tabs {
			designer_tab: tab_designer_tab;
			general_tab: tab_general_tab;
			insights: tab_insights;
			LinkedInCampaignTab: tab_LinkedInCampaignTab;
			RecoveryItemsTab: tab_RecoveryItemsTab;
		}
		interface Body {
			Tab: Tabs;
			CustomerJourneyInsightsCtrl: DevKit.Controls.ActionCards;
			/** Content settings that apply to this customer journey */
			msdyncrm_ContentSettingsId: DevKit.Controls.Lookup;
			/** The state of customer journey */
			msdyncrm_CustomerJourneyDesignerState: DevKit.Controls.String;
			/** The template used to create the initial layout of the customer journey */
			msdyncrm_CustomerJourneyTemplate: DevKit.Controls.Lookup;
			/** Effective time zone for this customer journey */
			msdyncrm_CustomerJourneyTimeZone: DevKit.Controls.Integer;
			/** Enter additional information to describe this customer journey */
			msdyncrm_description: DevKit.Controls.String;
			/** The end date of customer journey */
			msdyncrm_EndDateTime: DevKit.Controls.DateTime;
			/** Tells which is the entity target */
			msdyncrm_entitytarget: DevKit.Controls.OptionSet;
			/** Form to save */
			msdyncrm_formtosave: DevKit.Controls.Boolean;
			/** Tells whether the customer journey is recurring */
			msdyncrm_IsRecurring: DevKit.Controls.Boolean;
			msdyncrm_lockdowndateinmilliseconds: DevKit.Controls.ELSE1???;//msdyncrm_lockdowndateinmilliseconds - 3EF39988-22BB-4F0B-BBBE-64B5A3748AEE -- FOR DEBUG 
			/** The name of the customer journey */
			msdyncrm_name: DevKit.Controls.String;
			/** Indicates the person who published this. */
			msdyncrm_publishedby: DevKit.Controls.Lookup;
			msdyncrm_purpose: DevKit.Controls.String;
			msdyncrm_recoveryitems: DevKit.Controls.ActionCards;
			/** The number of iterations */
			msdyncrm_RecurrenceCount: DevKit.Controls.Integer;
			/** The duration of the iteration (in days) */
			msdyncrm_RecurrenceIntervalDays: DevKit.Controls.Integer;
			/** Scope for the customer journey execution */
			msdyncrm_scope: DevKit.Controls.OptionSet;
			/** The start date of the customer journey */
			msdyncrm_StartDateTime: DevKit.Controls.DateTime;
			/** A segment that defines a list of contacts excluded from this customer journey */
			msdyncrm_SuppressionSegmentId: DevKit.Controls.Lookup;
			msdyncrm_Type: DevKit.Controls.OptionSet;
			msdyncrm_ValidationResults: DevKit.Controls.String;
			msdyncrm_workflowdefinition: DevKit.Controls.ActionCards;
			msgdpr_requiredconsent: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			RelatedMarketingEmails: DevKit.Controls.ActionCards;
			RelatedSegments: DevKit.Controls.ActionCards;
			/** Status of the customer journey */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the customer journey */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncr2_linkedinformsubmission_customerjourney: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_marketingformsubmission: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_customerjourney_Tasks: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourney_contact_customerjourneyid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourney_lead_customerjourneyid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourney_msdyncrm_custome: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourney_msdyncrm_customerjourneycustomchannelactivity_customerjourney: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourney_msdyncrm_customerjourneyiteration_customerjourneyid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourney_msdyncrm_customerjourneytemplate_Origin: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourney_msdyncrm_geopin_customerJourney: DevKit.Controls.NavigationItem
		}
		interface quickForm_Campaign_Body {
			msdyncrm_CampaignType: DevKit.Controls.QuickView;
			msdyncrm_LinkedInAccount: DevKit.Controls.QuickView;
			msdyncrm_linkedinid: DevKit.Controls.QuickView;
			msdyncrm_LinkedInStatus: DevKit.Controls.QuickView;
			msdyncrm_name: DevKit.Controls.QuickView;
			msdyncrm_totalleads: DevKit.Controls.QuickView;
			msdyncrm_totalsubmissions: DevKit.Controls.QuickView;
			OwnerId: DevKit.Controls.QuickView;
		}
		interface quickForm_Campaign extends DevKit.Controls.IQuickView {
			Body: quickForm_Campaign_Body;
		}
		interface QuickForm {
			Campaign: quickForm_Campaign;
		}
		interface Grid {
			Leads: DevKit.Controls.Grid;
			RuntimeState: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_customerjourney_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_customerjourney_Information */
		Body: DevKit.Formmsdyncrm_customerjourney_Information.Body;
		/** The Header section of form msdyncrm_customerjourney_Information */
		Header: DevKit.Formmsdyncrm_customerjourney_Information.Header;
		/** The Navigation of form msdyncrm_customerjourney_Information */
		Navigation: DevKit.Formmsdyncrm_customerjourney_Information.Navigation;
		/** The QuickForm of form msdyncrm_customerjourney_Information */
		QuickForm: DevKit.Formmsdyncrm_customerjourney_Information.QuickForm;
		/** The Grid of form msdyncrm_customerjourney_Information */
		Grid: DevKit.Formmsdyncrm_customerjourney_Information.Grid;
		/** The SidePanes of form msdyncrm_customerjourney_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCustomer_Journey_Quick_Create {
		interface tab_Quick_create_options_Sections {
			quickcreate_tab: DevKit.Controls.Section;
		}
		interface tab_Quick_create_options extends DevKit.Controls.ITab {
			Section: tab_Quick_create_options_Sections;
		}
		interface Tabs {
			Quick_create_options: tab_Quick_create_options;
		}
		interface Body {
			Tab: Tabs;
			/** The state of customer journey */
			msdyncrm_CustomerJourneyDesignerState: DevKit.Controls.String;
			/** Effective time zone for this customer journey */
			msdyncrm_CustomerJourneyTimeZone: DevKit.Controls.Integer;
			/** Enter additional information to describe this customer journey */
			msdyncrm_description: DevKit.Controls.String;
			/** The end date of customer journey */
			msdyncrm_EndDateTime: DevKit.Controls.DateTime;
			/** Tells which is the entity target */
			msdyncrm_entitytarget: DevKit.Controls.OptionSet;
			/** Tells whether the customer journey is recurring */
			msdyncrm_IsRecurring: DevKit.Controls.Boolean;
			/** The name of the customer journey */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_purpose: DevKit.Controls.String;
			/** The number of iterations */
			msdyncrm_RecurrenceCount: DevKit.Controls.Integer;
			/** The duration of the iteration (in days) */
			msdyncrm_RecurrenceIntervalDays: DevKit.Controls.Integer;
			/** Scope for the customer journey execution */
			msdyncrm_scope: DevKit.Controls.OptionSet;
			/** The start date of the customer journey */
			msdyncrm_StartDateTime: DevKit.Controls.DateTime;
			/** A segment that defines a list of contacts excluded from this customer journey */
			msdyncrm_SuppressionSegmentId: DevKit.Controls.Lookup;
			msdyncrm_Type: DevKit.Controls.OptionSet;
			/** The customer journey design definition */
			msdyncrm_WorkflowDefinition: DevKit.Controls.String;
		}
	}
	class FormCustomer_Journey_Quick_Create extends DevKit.IForm {
		/**
		* Customer Journey Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Customer_Journey_Quick_Create */
		Body: DevKit.FormCustomer_Journey_Quick_Create.Body;
	}
	class msdyncrm_customerjourneyApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_customerjourneyApi
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
		/** Link to LinkedIn */
		msdyncr2_LinkedInCampaign: string;
		/** Content settings that apply to this customer journey */
		msdyncrm_ContentSettingsId: string;
		/** The state of customer journey */
		msdyncrm_CustomerJourneyDesignerState: string;
		/** Unique ID for entity instances */
		msdyncrm_customerjourneyId: string;
		/** The template used to create the initial layout of the customer journey */
		msdyncrm_CustomerJourneyTemplate: string;
		/** Effective time zone for this customer journey */
		msdyncrm_CustomerJourneyTimeZone: number;
		/** Enter additional information to describe this customer journey */
		msdyncrm_description: string;
		/** The end date of customer journey */
		msdyncrm_EndDateTime_TimezoneDateAndTime: Date;
		/** Tells which is the entity target */
		msdyncrm_entitytarget: OptionSet.msdyncrm_customerjourney.msdyncrm_entitytarget;
		/** Form to save */
		readonly msdyncrm_formtosave: boolean;
		msdyncrm_insights_placeholder: string;
		/** Tells whether the customer journey is recurring */
		msdyncrm_IsRecurring: boolean;
		/** Lockdown date in milliseconds (Unix format). */
		msdyncrm_lockdowndateinmilliseconds: number;
		/** The name of the customer journey */
		msdyncrm_name: string;
		/** Indicates the person who published this. */
		msdyncrm_publishedby: string;
		msdyncrm_purpose: string;
		/** The number of iterations */
		msdyncrm_RecurrenceCount: number;
		/** The duration of the iteration (in days) */
		msdyncrm_RecurrenceIntervalDays: number;
		/** Scope for the customer journey execution */
		msdyncrm_scope: OptionSet.msdyncrm_customerjourney.msdyncrm_scope;
		/** The start date of the customer journey */
		msdyncrm_StartDateTime_TimezoneDateAndTime: Date;
		/** A segment that defines a list of contacts excluded from this customer journey */
		msdyncrm_SuppressionSegmentId: string;
		msdyncrm_Type: OptionSet.msdyncrm_customerjourney.msdyncrm_Type;
		msdyncrm_ValidationResults: string;
		/** The customer journey design definition */
		msdyncrm_WorkflowDefinition: string;
		msgdpr_requiredconsent: OptionSet.msdyncrm_customerjourney.msgdpr_requiredconsent;
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
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the customer journey */
		statecode: OptionSet.msdyncrm_customerjourney.statecode;
		/** Reason for the status of the customer journey */
		statuscode: OptionSet.msdyncrm_customerjourney.statuscode;
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
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			/** Link to LinkedIn */
			readonly msdyncr2_LinkedInCampaign: string;
			/** Content settings that apply to this customer journey */
			readonly msdyncrm_ContentSettingsId: string;
			/** The state of customer journey */
			readonly msdyncrm_CustomerJourneyDesignerState: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_customerjourneyId: string;
			/** The template used to create the initial layout of the customer journey */
			readonly msdyncrm_CustomerJourneyTemplate: string;
			/** Effective time zone for this customer journey */
			readonly msdyncrm_CustomerJourneyTimeZone: string;
			/** Enter additional information to describe this customer journey */
			readonly msdyncrm_description: string;
			/** The end date of customer journey */
			readonly msdyncrm_EndDateTime_TimezoneDateAndTime: string;
			/** Tells which is the entity target */
			readonly msdyncrm_entitytarget: string;
			/** Form to save */
			readonly msdyncrm_formtosave: string;
			readonly msdyncrm_insights_placeholder: string;
			/** Tells whether the customer journey is recurring */
			readonly msdyncrm_IsRecurring: string;
			/** Lockdown date in milliseconds (Unix format). */
			readonly msdyncrm_lockdowndateinmilliseconds: string;
			/** The name of the customer journey */
			readonly msdyncrm_name: string;
			/** Indicates the person who published this. */
			readonly msdyncrm_publishedby: string;
			readonly msdyncrm_purpose: string;
			/** The number of iterations */
			readonly msdyncrm_RecurrenceCount: string;
			/** The duration of the iteration (in days) */
			readonly msdyncrm_RecurrenceIntervalDays: string;
			/** Scope for the customer journey execution */
			readonly msdyncrm_scope: string;
			/** The start date of the customer journey */
			readonly msdyncrm_StartDateTime_TimezoneDateAndTime: string;
			/** A segment that defines a list of contacts excluded from this customer journey */
			readonly msdyncrm_SuppressionSegmentId: string;
			readonly msdyncrm_Type: string;
			readonly msdyncrm_ValidationResults: string;
			/** The customer journey design definition */
			readonly msdyncrm_WorkflowDefinition: string;
			readonly msgdpr_requiredconsent: string;
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
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the customer journey */
			readonly statecode: string;
			/** Reason for the status of the customer journey */
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
	namespace msdyncrm_customerjourney {
		enum msdyncrm_entitytarget {
			/** 1 */
			Account,
			/** 0 */
			Contact
		}
		enum msdyncrm_scope {
			/** 270100001 */
			Business_unit,
			/** 270100000 */
			Organization
		}
		enum msdyncrm_Type {
			/** 192350000 */
			Automated,
			/** 192350001 */
			LinkedIn
		}
		enum msgdpr_requiredconsent {
			/** 587030001 */
			_1_Consent,
			/** 587030002 */
			_2_Transactional,
			/** 587030003 */
			_3_Subscriptions,
			/** 587030004 */
			_4_Marketing,
			/** 587030005 */
			_5_Profiling
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