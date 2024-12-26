//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSponsorship {
		interface Header extends DevKit.Controls.IHeader {
			msevtmgt_Event: DevKit.Controls.Lookup;
			msevtmgt_Sponsor: DevKit.Controls.Lookup;
			msevtmgt_SponsorshipCategory: DevKit.Controls.OptionSet;
		}
		interface tab__1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8_Sections {
			_1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8_SECTION_3: DevKit.Controls.Section;
			_1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8_SECTION_4: DevKit.Controls.Section;
			_4EABCD18_9CA9_4B53_BC34_51EFAF27EE29: DevKit.Controls.Section;
			_5E6F0C41_B9B3_4550_956F_3A71CFCDA998: DevKit.Controls.Section;
		}
		interface tab__1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8 extends DevKit.Controls.ITab {
			Section: tab__1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8_Sections;
		}
		interface Tabs {
			_1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8: tab__1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_Description: DevKit.Controls.String;
			msevtmgt_Event: DevKit.Controls.Lookup;
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_Sponsor: DevKit.Controls.Lookup;
			msevtmgt_SponsorshipAmount: DevKit.Controls.Money;
			msevtmgt_SponsorshipCategory: DevKit.Controls.OptionSet;
			msevtmgt_SponsorshipType: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_sponsorablearticle_sponsorship: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorship_Tasks: DevKit.Controls.NavigationItem
		}
		interface quickForm_EventInformation_Body {
			msevtmgt_building: DevKit.Controls.QuickView;
			msevtmgt_EventEndDate: DevKit.Controls.QuickView;
			msevtmgt_EventStartDate: DevKit.Controls.QuickView;
			msevtmgt_Name: DevKit.Controls.QuickView;
			msevtmgt_PrimaryGoal: DevKit.Controls.QuickView;
		}
		interface quickForm_EventInformation extends DevKit.Controls.IQuickView {
			Body: quickForm_EventInformation_Body;
		}
		interface QuickForm {
			EventInformation: quickForm_EventInformation;
		}
		interface Grid {
			event_information_summary: DevKit.Controls.Grid;
		}
	}
	class FormSponsorship extends DevKit.IForm {
		/**
		* Sponsorship [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sponsorship */
		Body: DevKit.FormSponsorship.Body;
		/** The Header section of form Sponsorship */
		Header: DevKit.FormSponsorship.Header;
		/** The Navigation of form Sponsorship */
		Navigation: DevKit.FormSponsorship.Navigation;
		/** The QuickForm of form Sponsorship */
		QuickForm: DevKit.FormSponsorship.QuickForm;
		/** The Grid of form Sponsorship */
		Grid: DevKit.FormSponsorship.Grid;
		/** The SidePanes of form Sponsorship */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_Sponsorship_Quick_Create_Form {
		interface tab_GeneralTab_Sections {
			GeneralTab_column_1_section_1: DevKit.Controls.Section;
			GeneralTab_column_2_section_1: DevKit.Controls.Section;
			GeneralTab_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_Description: DevKit.Controls.String;
			msevtmgt_Event: DevKit.Controls.Lookup;
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_Sponsor: DevKit.Controls.Lookup;
			msevtmgt_SponsorshipAmount: DevKit.Controls.Money;
			msevtmgt_SponsorshipCategory: DevKit.Controls.OptionSet;
			msevtmgt_SponsorshipType: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_Sponsorship_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_Sponsorship_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_Sponsorship_Quick_Create_Form.Body;
	}
	class msevtmgt_SponsorshipApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_SponsorshipApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Exchange rate between the base currency and the currency associated with the entity */
		readonly ExchangeRate: number;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_Description: string;
		msevtmgt_Event: string;
		msevtmgt_Name: string;
		msevtmgt_Sponsor: string;
		msevtmgt_SponsorshipAmount: number;
		/** Value of the sponsorship amount (in the base currency) */
		readonly msevtmgt_sponsorshipamount_Base: number;
		msevtmgt_SponsorshipCategory: OptionSet.msevtmgt_Sponsorship.msevtmgt_SponsorshipCategory;
		/** Unique identifier for entity instances */
		msevtmgt_SponsorshipId: string;
		msevtmgt_SponsorshipType: OptionSet.msevtmgt_Sponsorship.msevtmgt_SponsorshipType;
		/** Unique identifier of the currency associated with the entity */
		msevtmgt_TransactionCurrencyId: string;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record */
		readonly OwningUser: string;
		/** Status of the sponsorship */
		statecode: OptionSet.msevtmgt_Sponsorship.statecode;
		/** Reason for the status of the sponsorship */
		statuscode: OptionSet.msevtmgt_Sponsorship.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity */
		TransactionCurrencyId: string;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Exchange rate between the base currency and the currency associated with the entity */
			readonly ExchangeRate: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_Description: string;
			readonly msevtmgt_Event: string;
			readonly msevtmgt_Name: string;
			readonly msevtmgt_Sponsor: string;
			readonly msevtmgt_SponsorshipAmount: string;
			/** Value of the sponsorship amount (in the base currency) */
			readonly msevtmgt_sponsorshipamount_Base: string;
			readonly msevtmgt_SponsorshipCategory: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_SponsorshipId: string;
			readonly msevtmgt_SponsorshipType: string;
			/** Unique identifier of the currency associated with the entity */
			readonly msevtmgt_TransactionCurrencyId: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record */
			readonly OwningUser: string;
			/** Status of the sponsorship */
			readonly statecode: string;
			/** Reason for the status of the sponsorship */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity */
			readonly TransactionCurrencyId: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_Sponsorship {
		enum msevtmgt_SponsorshipCategory {
			/** 100000003 */
			Bronze,
			/** 100000001 */
			Gold,
			/** 100000000 */
			Platinum,
			/** 100000002 */
			Silver
		}
		enum msevtmgt_SponsorshipType {
			/** 100000002 */
			Equipment,
			/** 100000000 */
			Monetary,
			/** 100000001 */
			Services
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