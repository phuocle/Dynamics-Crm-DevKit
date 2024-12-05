//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSetup {
		interface Header extends DevKit.Controls.IHeader {
			/** Name of the marketing page */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_partialurl: DevKit.Controls.String;
			msdyncrm_type: DevKit.Controls.OptionSet;
			/** Marketing page status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_DesignerTab_Sections {
			DesignerSection: DevKit.Controls.Section;
		}
		interface tab_insights_Sections {
			insights_section: DevKit.Controls.Section;
		}
		interface tab_PortalIntegrationTabV2_Sections {
		}
		interface tab_SetupTab_Sections {
			ContentSection: DevKit.Controls.Section;
			EntitiesSection: DevKit.Controls.Section;
			GeneralInformationSection: DevKit.Controls.Section;
			NotesSection: DevKit.Controls.Section;
		}
		interface tab_DesignerTab extends DevKit.Controls.ITab {
			Section: tab_DesignerTab_Sections;
		}
		interface tab_insights extends DevKit.Controls.ITab {
			Section: tab_insights_Sections;
		}
		interface tab_PortalIntegrationTabV2 extends DevKit.Controls.ITab {
			Section: tab_PortalIntegrationTabV2_Sections;
		}
		interface tab_SetupTab extends DevKit.Controls.ITab {
			Section: tab_SetupTab_Sections;
		}
		interface Tabs {
			DesignerTab: tab_DesignerTab;
			insights: tab_insights;
			PortalIntegrationTabV2: tab_PortalIntegrationTabV2;
			SetupTab: tab_SetupTab;
		}
		interface Body {
			Tab: Tabs;
			adx_pagetemplateid: DevKit.Controls.ActionCards;
			adx_parentwebpageid: DevKit.Controls.ActionCards;
			adx_webpageid: DevKit.Controls.ActionCards;
			adx_websiteid: DevKit.Controls.ActionCards;
			adx_websitelanguageid: DevKit.Controls.ActionCards;
			adx_webtemplateid: DevKit.Controls.ActionCards;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyncrm_content: DevKit.Controls.ActionCards;
			msdyncrm_contenttype: DevKit.Controls.OptionSet;
			msdyncrm_formpagemapping: DevKit.Controls.String;
			/** Form to save */
			msdyncrm_formtosave: DevKit.Controls.Boolean;
			msdyncrm_full_page_url: DevKit.Controls.String;
			/** Date and time when the marketing page last tried going live */
			msdyncrm_lastgoinglivedate: DevKit.Controls.DateTime;
			/** Date and time when the marketing page was last published */
			msdyncrm_lastpublisheddate: DevKit.Controls.DateTime;
			msdyncrm_lastpublishstate: DevKit.Controls.ActionCards;
			/** Date and time when the marketing page was last unpublished */
			msdyncrm_lastunpublisheddate: DevKit.Controls.DateTime;
			msdyncrm_marketingpagetemplate: DevKit.Controls.Lookup;
			msdyncrm_marketingwebsite: DevKit.Controls.Lookup;
			msdyncrm_markettype: DevKit.Controls.OptionSet;
			/** Name of the marketing page */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_optimizedfor: DevKit.Controls.OptionSet;
			msdyncrm_purpose: DevKit.Controls.OptionSet;
			msdyncrm_visualstyle: DevKit.Controls.OptionSet;
			msdyncrm_websitefilter_placeholder: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			PageInsightsCtrl: DevKit.Controls.ActionCards;
			/** Status of the marketing page */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_marketingpage_marketingformsubmission: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingpage_contact_marketingpageid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingpage_lead_marketingpageid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingpage_msdyncrm_defaultmarketingsetting_defaultmarketingthankyoupage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingpage_msdyncrm_defaultmarketingsetting_defaultmarketingthankyoupagedoi: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingpage_msdyncrm_deprecatedpageactivity_marketingpageid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingpage_msdyncrm_formpage: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingpage_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_marketingpage_msdyncrm_marketingform_doubleoptinthankyoupage: DevKit.Controls.NavigationItem
		}
		interface Grid {
			SubGrid_Contacts: DevKit.Controls.Grid;
			SubGrid_CustomerJourneys: DevKit.Controls.Grid;
			SubGrid_EmailMessages: DevKit.Controls.Grid;
			SubGrid_Forms: DevKit.Controls.Grid;
			SubGrid_Leads: DevKit.Controls.Grid;
		}
	}
	class FormSetup extends DevKit.IForm {
		/**
		* Setup [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Setup */
		Body: DevKit.FormSetup.Body;
		/** The Header section of form Setup */
		Header: DevKit.FormSetup.Header;
		/** The Navigation of form Setup */
		Navigation: DevKit.FormSetup.Navigation;
		/** The Grid of form Setup */
		Grid: DevKit.FormSetup.Grid;
		/** The SidePanes of form Setup */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuick_create_marketing_page {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
			tab_1_column_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			adx_parentwebpageid: DevKit.Controls.ActionCards;
			adx_websiteid: DevKit.Controls.ActionCards;
			adx_websitelanguageid: DevKit.Controls.ActionCards;
			msdyncrm_marketingwebsite: DevKit.Controls.Lookup;
			/** Name of the marketing page */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_partialurl: DevKit.Controls.String;
			msdyncrm_type: DevKit.Controls.OptionSet;
			msdyncrm_websitefilter_placeholder: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormQuick_create_marketing_page extends DevKit.IForm {
		/**
		* Quick create marketing page [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_create_marketing_page */
		Body: DevKit.FormQuick_create_marketing_page.Body;
	}
	class msdyncrm_marketingpageApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingpageApi
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
		adx_pagetemplateid: string;
		adx_parentwebpageid: string;
		adx_webpageid: string;
		adx_websiteid: string;
		adx_websitelanguageid: string;
		adx_webtemplateid: string;
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
		msdyncrm_alloweddomains: string;
		msdyncrm_Content: string;
		msdyncrm_contenttype: OptionSet.msdyncrm_marketingpage.msdyncrm_contenttype;
		msdyncrm_forceportalless: boolean;
		msdyncrm_formpagemapping: string;
		/** Form to save */
		readonly msdyncrm_formtosave: boolean;
		msdyncrm_full_page_url: string;
		msdyncrm_full_page_urls: string;
		/** flag to check that the page is live */
		msdyncrm_iamlive: boolean;
		msdyncrm_insights_placeholder: string;
		/** Date and time when the marketing page last tried going live */
		msdyncrm_lastgoinglivedate_UtcDateAndTime: Date;
		/** Date and time when the marketing page was last published */
		msdyncrm_lastpublisheddate_UtcDateAndTime: Date;
		/** State of last going live attempt */
		msdyncrm_lastpublishstate: OptionSet.msdyncrm_marketingpage.msdyncrm_lastpublishstate;
		/** Date and time when the marketing page was last unpublished */
		msdyncrm_lastunpublisheddate_UtcDateAndTime: Date;
		/** Unique ID for entity instances */
		msdyncrm_marketingpageId: string;
		msdyncrm_marketingpagetemplate: string;
		msdyncrm_marketingprovided: boolean;
		msdyncrm_marketingwebsite: string;
		msdyncrm_markettype: OptionSet.msdyncrm_marketingpage.msdyncrm_markettype;
		/** Name of the marketing page */
		msdyncrm_name: string;
		msdyncrm_optimizedfor: OptionSet.msdyncrm_marketingpage.msdyncrm_optimizedfor;
		msdyncrm_partialurl: string;
		msdyncrm_purpose: OptionSet.msdyncrm_marketingpage.msdyncrm_purpose;
		/** Unique ID for remote entity instances */
		msdyncrm_remote_websiteid: string;
		msdyncrm_type: OptionSet.msdyncrm_marketingpage.msdyncrm_type;
		msdyncrm_visualstyle: OptionSet.msdyncrm_marketingpage.msdyncrm_visualstyle;
		msdyncrm_websitefilter_placeholder: string;
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
		/** Status of the marketing page */
		statecode: OptionSet.msdyncrm_marketingpage.statecode;
		/** Marketing page status reason */
		statuscode: OptionSet.msdyncrm_marketingpage.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly adx_pagetemplateid: string;
			readonly adx_parentwebpageid: string;
			readonly adx_webpageid: string;
			readonly adx_websiteid: string;
			readonly adx_websitelanguageid: string;
			readonly adx_webtemplateid: string;
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
			readonly msdyncrm_alloweddomains: string;
			readonly msdyncrm_Content: string;
			readonly msdyncrm_contenttype: string;
			readonly msdyncrm_forceportalless: string;
			readonly msdyncrm_formpagemapping: string;
			/** Form to save */
			readonly msdyncrm_formtosave: string;
			readonly msdyncrm_full_page_url: string;
			readonly msdyncrm_full_page_urls: string;
			/** flag to check that the page is live */
			readonly msdyncrm_iamlive: string;
			readonly msdyncrm_insights_placeholder: string;
			/** Date and time when the marketing page last tried going live */
			readonly msdyncrm_lastgoinglivedate_UtcDateAndTime: string;
			/** Date and time when the marketing page was last published */
			readonly msdyncrm_lastpublisheddate_UtcDateAndTime: string;
			/** State of last going live attempt */
			readonly msdyncrm_lastpublishstate: string;
			/** Date and time when the marketing page was last unpublished */
			readonly msdyncrm_lastunpublisheddate_UtcDateAndTime: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingpageId: string;
			readonly msdyncrm_marketingpagetemplate: string;
			readonly msdyncrm_marketingprovided: string;
			readonly msdyncrm_marketingwebsite: string;
			readonly msdyncrm_markettype: string;
			/** Name of the marketing page */
			readonly msdyncrm_name: string;
			readonly msdyncrm_optimizedfor: string;
			readonly msdyncrm_partialurl: string;
			readonly msdyncrm_purpose: string;
			/** Unique ID for remote entity instances */
			readonly msdyncrm_remote_websiteid: string;
			readonly msdyncrm_type: string;
			readonly msdyncrm_visualstyle: string;
			readonly msdyncrm_websitefilter_placeholder: string;
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
			/** Status of the marketing page */
			readonly statecode: string;
			/** Marketing page status reason */
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
	namespace msdyncrm_marketingpage {
		enum msdyncrm_contenttype {
			/** 3 */
			Company_background,
			/** 6 */
			Confirmation_request,
			/** 4 */
			Event_information,
			/** 5 */
			Offers_and_discounts,
			/** 2 */
			Product_information,
			/** 1 */
			Product_launch,
			/** 0 */
			Structural
		}
		enum msdyncrm_lastpublishstate {
			/** 0 */
			Error,
			/** 1 */
			Success
		}
		enum msdyncrm_markettype {
			/** 2 */
			All,
			/** 1 */
			Consumer,
			/** 0 */
			Enterprise
		}
		enum msdyncrm_optimizedfor {
			/** 0 */
			Desktop,
			/** 2 */
			Mobile,
			/** 1 */
			Tablet
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
		enum msdyncrm_type {
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
			/** 2 */
			Colorful,
			/** 1 */
			Dark,
			/** 0 */
			Light,
			/** 3 */
			Other
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