//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormVenue {
		interface Header extends DevKit.Controls.IHeader {
			/** The city of the address */
			msevtmgt_City: DevKit.Controls.String;
			/** A person who is responsible for the venue */
			msevtmgt_PrimaryContact: DevKit.Controls.Lookup;
		}
		interface tab__DEB4BE92_D318_4F2D_819C_CB273A7415AC_Sections {
			_4A049790_4139_4BCE_B4F8_80722AB41334: DevKit.Controls.Section;
			_DEB4BE92_D318_4F2D_819C_CB273A7415AC_SECTION_3: DevKit.Controls.Section;
			_DEB4BE92_D318_4F2D_819C_CB273A7415AC_SECTION_4: DevKit.Controls.Section;
		}
		interface tab_LocationTab_Sections {
			LocationTab_section_1: DevKit.Controls.Section;
		}
		interface tab_SubVenuesTab_Sections {
			MapSection: DevKit.Controls.Section;
			SubVenuesTab_section_1: DevKit.Controls.Section;
			SubVenuesTab_section_1_jp: DevKit.Controls.Section;
			SubVenuesTab_section_3: DevKit.Controls.Section;
		}
		interface tab__DEB4BE92_D318_4F2D_819C_CB273A7415AC extends DevKit.Controls.ITab {
			Section: tab__DEB4BE92_D318_4F2D_819C_CB273A7415AC_Sections;
		}
		interface tab_LocationTab extends DevKit.Controls.ITab {
			Section: tab_LocationTab_Sections;
		}
		interface tab_SubVenuesTab extends DevKit.Controls.ITab {
			Section: tab_SubVenuesTab_Sections;
		}
		interface Tabs {
			_DEB4BE92_D318_4F2D_819C_CB273A7415AC: tab__DEB4BE92_D318_4F2D_819C_CB273A7415AC;
			LocationTab: tab_LocationTab;
			SubVenuesTab: tab_SubVenuesTab;
		}
		interface Body {
			Tab: Tabs;
			mapcontrol: DevKit.Controls.Map;
			/** Indicates whether accessbile toilets are available for disabled people at this location */
			msevtmgt_AccessibleToilets: DevKit.Controls.OptionSet;
			/** Additional facilities that aren't covered by the available options */
			msevtmgt_AdditionalFacilities: DevKit.Controls.String;
			msevtmgt_AddressComposite: DevKit.Controls.String;
			msevtmgt_AddressComposite1: DevKit.Controls.String;
			/** Address (not including city, country/region, state or province, or postal code) */
			msevtmgt_AddressLine1: DevKit.Controls.String;
			/** Address (not including city, country/region, state or province, or postal code) */
			msevtmgt_AddressLine11: DevKit.Controls.String;
			/** Additional address details */
			msevtmgt_AddressLine2: DevKit.Controls.String;
			/** Additional address details */
			msevtmgt_AddressLine21: DevKit.Controls.String;
			/** Additional address details */
			msevtmgt_AddressLine3: DevKit.Controls.String;
			/** Additional address details */
			msevtmgt_AddressLine31: DevKit.Controls.String;
			/** Unique identifier for the building associated with the venue */
			msevtmgt_BuildingId: DevKit.Controls.Lookup;
			/** The city of the address */
			msevtmgt_City: DevKit.Controls.String;
			/** The city of the address */
			msevtmgt_City1: DevKit.Controls.String;
			/** Cost of the venue */
			msevtmgt_Cost: DevKit.Controls.Money;
			/** The country or region of the address */
			msevtmgt_Country: DevKit.Controls.String;
			/** The country or region of the address */
			msevtmgt_Country1: DevKit.Controls.String;
			/** Description of the venue */
			msevtmgt_Description: DevKit.Controls.String;
			/** Indicates whether this location provides easy access for disabled people */
			msevtmgt_DisabledAccess: DevKit.Controls.OptionSet;
			/** Indicates wheter special parking for disabled people is available at this location */
			msevtmgt_DisabledParking: DevKit.Controls.OptionSet;
			/** Email to contact the venue */
			msevtmgt_Email: DevKit.Controls.String;
			/** Unique identifier for the layout associated with the venue */
			msevtmgt_layoutId: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** The postal code of the address */
			msevtmgt_PostalCode: DevKit.Controls.String;
			/** The postal code of the address */
			msevtmgt_PostalCode1: DevKit.Controls.String;
			/** Indicates whether public telephones are available at this location */
			msevtmgt_PublicTelephoneAvailable: DevKit.Controls.OptionSet;
			/** Unique identifier for the room associated with the venue */
			msevtmgt_RoomId: DevKit.Controls.Lookup;
			/** The state or province of the address */
			msevtmgt_StateProvince: DevKit.Controls.String;
			/** The state or province of the address */
			msevtmgt_StateProvince1: DevKit.Controls.String;
			/** A telephone number for contacting the venue */
			msevtmgt_Telephone1: DevKit.Controls.String;
			/** A telephone number for contacting the venue */
			msevtmgt_Telephone2: DevKit.Controls.String;
			/** A telephone number for contacting the venue */
			msevtmgt_Telephone3: DevKit.Controls.String;
			/** Website for contacting the venue */
			msevtmgt_Website: DevKit.Controls.String;
			/** Indicates whether WiFi is available at this location. */
			msevtmgt_WifiAvailable: DevKit.Controls.OptionSet;
			/** Only store public WiFi passwords in this field; do not save internal passwords here */
			msevtmgt_WifiPassword: DevKit.Controls.String;
			/** The service set identifier (network name) of the WiFi network */
			msevtmgt_WifiSSID: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_msevtmgt_venue_msevtmgt_venue: DevKit.Controls.NavigationItem,
			msevtmgt_venue_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_venue_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_venue_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_venue_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msevtmgt_event_PrimaryVenue: DevKit.Controls.NavigationItem,
			msevtmgt_Venue_msevtmgt_Session_Venue: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_venue_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_venue_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_venue_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_venue_Tasks: DevKit.Controls.NavigationItem
		}
		interface quickForm_BuildingCapacity_Body {
			msevtmgt_EstimatedCapacity: DevKit.Controls.QuickView;
		}
		interface quickForm_LayoutCapacity_Body {
			msevtmgt_Capacity: DevKit.Controls.QuickView;
		}
		interface quickForm_RoomCapacity_Body {
			msevtmgt_Capacity: DevKit.Controls.QuickView;
		}
		interface quickForm_BuildingCapacity extends DevKit.Controls.IQuickView {
			Body: quickForm_BuildingCapacity_Body;
		}
		interface quickForm_LayoutCapacity extends DevKit.Controls.IQuickView {
			Body: quickForm_LayoutCapacity_Body;
		}
		interface quickForm_RoomCapacity extends DevKit.Controls.IQuickView {
			Body: quickForm_RoomCapacity_Body;
		}
		interface QuickForm {
			BuildingCapacity: quickForm_BuildingCapacity;
			LayoutCapacity: quickForm_LayoutCapacity;
			RoomCapacity: quickForm_RoomCapacity;
		}
		interface Grid {
			AllVenueEvents: DevKit.Controls.Grid;
			SubVenues: DevKit.Controls.Grid;
		}
	}
	class FormVenue extends DevKit.IForm {
		/**
		* Venue [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Venue */
		Body: DevKit.FormVenue.Body;
		/** The Header section of form Venue */
		Header: DevKit.FormVenue.Header;
		/** The Navigation of form Venue */
		Navigation: DevKit.FormVenue.Navigation;
		/** The QuickForm of form Venue */
		QuickForm: DevKit.FormVenue.QuickForm;
		/** The Grid of form Venue */
		Grid: DevKit.FormVenue.Grid;
		/** The SidePanes of form Venue */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_Venue_New_Form {
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
			/** Unique identifier for the building associated with the venue */
			msevtmgt_BuildingId: DevKit.Controls.Lookup;
			/** Cost of the venue */
			msevtmgt_Cost: DevKit.Controls.Money;
			/** Description of the venue */
			msevtmgt_Description: DevKit.Controls.String;
			/** Unique identifier for the layout associated with the venue */
			msevtmgt_layoutId: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Unique identifier for the room associated with the venue */
			msevtmgt_RoomId: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_Venue_New_Form extends DevKit.IForm {
		/**
		* New form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_Venue_New_Form */
		Body: DevKit.Formmsevtmgt_Venue_New_Form.Body;
	}
	class msevtmgt_VenueApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_VenueApi
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
		/** Indicates whether accessbile toilets are available for disabled people at this location */
		msevtmgt_AccessibleToilets: OptionSet.msevtmgt_Venue.msevtmgt_AccessibleToilets;
		/** Additional facilities that aren't covered by the available options */
		msevtmgt_AdditionalFacilities: string;
		readonly msevtmgt_AddressComposite: string;
		/** Address (not including city, country/region, state or province, or postal code) */
		msevtmgt_AddressLine1: string;
		/** Additional address details */
		msevtmgt_AddressLine2: string;
		/** Additional address details */
		msevtmgt_AddressLine3: string;
		/** Unique identifier for the building associated with the venue */
		msevtmgt_BuildingId: string;
		/** The city of the address */
		msevtmgt_City: string;
		/** Cost of the venue */
		msevtmgt_Cost: number;
		/** Value of the cost (in the base currency) */
		readonly msevtmgt_cost_Base: number;
		/** The country or region of the address */
		msevtmgt_Country: string;
		/** Description of the venue */
		msevtmgt_Description: string;
		/** Indicates whether this location provides easy access for disabled people */
		msevtmgt_DisabledAccess: OptionSet.msevtmgt_Venue.msevtmgt_DisabledAccess;
		/** Indicates wheter special parking for disabled people is available at this location */
		msevtmgt_DisabledParking: OptionSet.msevtmgt_Venue.msevtmgt_DisabledParking;
		/** Email to contact the venue */
		msevtmgt_Email: string;
		/** Estimated capacity of the venue */
		msevtmgt_EstCapacity: number;
		/** Unique identifier for the layout associated with the venue */
		msevtmgt_layoutId: string;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		/** Unique identifier for the venue associated with the venue */
		msevtmgt_ParentVenueId: string;
		/** The postal code of the address */
		msevtmgt_PostalCode: string;
		/** A person who is responsible for the venue */
		msevtmgt_PrimaryContact: string;
		/** Indicates whether public telephones are available at this location */
		msevtmgt_PublicTelephoneAvailable: OptionSet.msevtmgt_Venue.msevtmgt_PublicTelephoneAvailable;
		/** Unique identifier for the room associated with the venue */
		msevtmgt_RoomId: string;
		/** The state or province of the address */
		msevtmgt_StateProvince: string;
		/** A telephone number for contacting the venue */
		msevtmgt_Telephone1: string;
		/** A telephone number for contacting the venue */
		msevtmgt_Telephone2: string;
		/** A telephone number for contacting the venue */
		msevtmgt_Telephone3: string;
		/** Unique identifier of the currency associated with the entity */
		msevtmgt_TransactionCurrencyId: string;
		/** Unique identifier for entity instances */
		msevtmgt_VenueId: string;
		/** Website for contacting the venue */
		msevtmgt_Website: string;
		/** Indicates whether WiFi is available at this location. */
		msevtmgt_WifiAvailable: OptionSet.msevtmgt_Venue.msevtmgt_WifiAvailable;
		/** Only store public WiFi passwords in this field; do not save internal passwords here */
		msevtmgt_WifiPassword: string;
		/** The service set identifier (network name) of the WiFi network */
		msevtmgt_WifiSSID: string;
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
		/** Status of the venue */
		statecode: OptionSet.msevtmgt_Venue.statecode;
		/** Reason for the status of the venue */
		statuscode: OptionSet.msevtmgt_Venue.statuscode;
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
			/** Indicates whether accessbile toilets are available for disabled people at this location */
			readonly msevtmgt_AccessibleToilets: string;
			/** Additional facilities that aren't covered by the available options */
			readonly msevtmgt_AdditionalFacilities: string;
			readonly msevtmgt_AddressComposite: string;
			/** Address (not including city, country/region, state or province, or postal code) */
			readonly msevtmgt_AddressLine1: string;
			/** Additional address details */
			readonly msevtmgt_AddressLine2: string;
			/** Additional address details */
			readonly msevtmgt_AddressLine3: string;
			/** Unique identifier for the building associated with the venue */
			readonly msevtmgt_BuildingId: string;
			/** The city of the address */
			readonly msevtmgt_City: string;
			/** Cost of the venue */
			readonly msevtmgt_Cost: string;
			/** Value of the cost (in the base currency) */
			readonly msevtmgt_cost_Base: string;
			/** The country or region of the address */
			readonly msevtmgt_Country: string;
			/** Description of the venue */
			readonly msevtmgt_Description: string;
			/** Indicates whether this location provides easy access for disabled people */
			readonly msevtmgt_DisabledAccess: string;
			/** Indicates wheter special parking for disabled people is available at this location */
			readonly msevtmgt_DisabledParking: string;
			/** Email to contact the venue */
			readonly msevtmgt_Email: string;
			/** Estimated capacity of the venue */
			readonly msevtmgt_EstCapacity: string;
			/** Unique identifier for the layout associated with the venue */
			readonly msevtmgt_layoutId: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			/** Unique identifier for the venue associated with the venue */
			readonly msevtmgt_ParentVenueId: string;
			/** The postal code of the address */
			readonly msevtmgt_PostalCode: string;
			/** A person who is responsible for the venue */
			readonly msevtmgt_PrimaryContact: string;
			/** Indicates whether public telephones are available at this location */
			readonly msevtmgt_PublicTelephoneAvailable: string;
			/** Unique identifier for the room associated with the venue */
			readonly msevtmgt_RoomId: string;
			/** The state or province of the address */
			readonly msevtmgt_StateProvince: string;
			/** A telephone number for contacting the venue */
			readonly msevtmgt_Telephone1: string;
			/** A telephone number for contacting the venue */
			readonly msevtmgt_Telephone2: string;
			/** A telephone number for contacting the venue */
			readonly msevtmgt_Telephone3: string;
			/** Unique identifier of the currency associated with the entity */
			readonly msevtmgt_TransactionCurrencyId: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_VenueId: string;
			/** Website for contacting the venue */
			readonly msevtmgt_Website: string;
			/** Indicates whether WiFi is available at this location. */
			readonly msevtmgt_WifiAvailable: string;
			/** Only store public WiFi passwords in this field; do not save internal passwords here */
			readonly msevtmgt_WifiPassword: string;
			/** The service set identifier (network name) of the WiFi network */
			readonly msevtmgt_WifiSSID: string;
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
			/** Status of the venue */
			readonly statecode: string;
			/** Reason for the status of the venue */
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
	namespace msevtmgt_Venue {
		enum msevtmgt_AccessibleToilets {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_DisabledAccess {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_DisabledParking {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_PublicTelephoneAvailable {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_WifiAvailable {
			/** 100000002 */
			No,
			/** 100000001 */
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