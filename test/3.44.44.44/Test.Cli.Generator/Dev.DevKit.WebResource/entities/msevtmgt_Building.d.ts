//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBuilding {
		interface Header extends DevKit.Controls.IHeader {
			/** Number of available rooms */
			msevtmgt_NumberOfRooms: DevKit.Controls.Integer;
			/** A person who is responsible for the building */
			msevtmgt_PrimaryContact: DevKit.Controls.Lookup;
		}
		interface tab_GeneralTab_Sections {
			_4253DA88_7C4B_49E9_B2C2_CE80723144C8_SECTION_3: DevKit.Controls.Section;
			_4253DA88_7C4B_49E9_B2C2_CE80723144C8_SECTION_3_JP: DevKit.Controls.Section;
			_4253DA88_7C4B_49E9_B2C2_CE80723144C8_SECTION_4: DevKit.Controls.Section;
			_4253DA88_7C4B_49E9_B2C2_CE80723144C8_SECTION_5: DevKit.Controls.Section;
			_C99322B3_8280_4D62_AAA3_C019243C41A1: DevKit.Controls.Section;
		}
		interface tab_RoomsTab_Sections {
			RoomsTab_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface tab_RoomsTab extends DevKit.Controls.ITab {
			Section: tab_RoomsTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
			RoomsTab: tab_RoomsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Indicates whether accessbile toilets are available for disabled people at this location */
			msevtmgt_AccessibleToilets: DevKit.Controls.OptionSet;
			/** Additional facilities that aren't covered by the available options */
			msevtmgt_AdditionalFacilities: DevKit.Controls.String;
			msevtmgt_addresscomposite: DevKit.Controls.String;
			msevtmgt_addresscomposite1: DevKit.Controls.String;
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
			/** The city of the address */
			msevtmgt_City: DevKit.Controls.String;
			/** The city of the address */
			msevtmgt_City1: DevKit.Controls.String;
			/** Cost (of using the building) */
			msevtmgt_Cost: DevKit.Controls.Money;
			/** The country or region of the address */
			msevtmgt_Country: DevKit.Controls.String;
			/** The country or region of the address */
			msevtmgt_Country1: DevKit.Controls.String;
			/** Description of the building */
			msevtmgt_Description: DevKit.Controls.String;
			/** Indicates whether this location provides easy access for disabled people */
			msevtmgt_DisabledAccess: DevKit.Controls.OptionSet;
			/** Indicates wheter special parking for disabled people is available at this location */
			msevtmgt_DisabledParking: DevKit.Controls.OptionSet;
			/** Email to contact the building */
			msevtmgt_Email: DevKit.Controls.String;
			/** Estimated capacity of building */
			msevtmgt_EstimatedCapacity: DevKit.Controls.Integer;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Number of available rooms */
			msevtmgt_NumberOfRooms: DevKit.Controls.Integer;
			/** The postal code of the address */
			msevtmgt_PostalCode: DevKit.Controls.String;
			/** The postal code of the address */
			msevtmgt_PostalCode1: DevKit.Controls.String;
			/** Indicates whether public telephones are available at this location */
			msevtmgt_PublicTelephoneAvailable: DevKit.Controls.OptionSet;
			/** The state or province of the address */
			msevtmgt_StateProvince: DevKit.Controls.String;
			/** The state or province of the address */
			msevtmgt_StateProvince1: DevKit.Controls.String;
			/** A telephone number for contacting the building */
			msevtmgt_Telephone1: DevKit.Controls.String;
			/** A telephone number for contacting the building */
			msevtmgt_Telephone2: DevKit.Controls.String;
			/** A telephone number for contacting the building */
			msevtmgt_Telephone3: DevKit.Controls.String;
			/** Website for contacting the building */
			msevtmgt_Website: DevKit.Controls.String;
			/** Indicates whether WiFi is available at this location. */
			msevtmgt_WifiAvailable: DevKit.Controls.OptionSet;
			/** Only store public WiFi passwords in this field; do not save internal passwords here */
			msevtmgt_WifiPassword: DevKit.Controls.String;
			/** The service set identifier (network name) of the WiFi network */
			msevtmgt_WifiSSID: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_building_msevtmgt_room_Building: DevKit.Controls.NavigationItem,
			msevtmgt_event_building: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_building_msevtmgt_venue: DevKit.Controls.NavigationItem,
			msevtmgt_session_building: DevKit.Controls.NavigationItem
		}
		interface Grid {
			BuildingRooms: DevKit.Controls.Grid;
		}
	}
	class FormBuilding extends DevKit.IForm {
		/**
		* Building [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Building */
		Body: DevKit.FormBuilding.Body;
		/** The Header section of form Building */
		Header: DevKit.FormBuilding.Header;
		/** The Navigation of form Building */
		Navigation: DevKit.FormBuilding.Navigation;
		/** The Grid of form Building */
		Grid: DevKit.FormBuilding.Grid;
		/** The SidePanes of form Building */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormBuilding_quick_create_form {
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
			/** Address (not including city, country/region, state or province, or postal code) */
			msevtmgt_AddressLine1: DevKit.Controls.String;
			/** The city of the address */
			msevtmgt_City: DevKit.Controls.String;
			/** Cost (of using the building) */
			msevtmgt_Cost: DevKit.Controls.Money;
			/** Estimated capacity of building */
			msevtmgt_EstimatedCapacity: DevKit.Controls.Integer;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** The postal code of the address */
			msevtmgt_PostalCode: DevKit.Controls.String;
			/** A telephone number for contacting the building */
			msevtmgt_Telephone1: DevKit.Controls.String;
		}
	}
	class FormBuilding_quick_create_form extends DevKit.IForm {
		/**
		* Building quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Building_quick_create_form */
		Body: DevKit.FormBuilding_quick_create_form.Body;
	}
	class msevtmgt_BuildingApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_BuildingApi
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
		msevtmgt_AccessibleToilets: OptionSet.msevtmgt_Building.msevtmgt_AccessibleToilets;
		/** Additional facilities that aren't covered by the available options */
		msevtmgt_AdditionalFacilities: string;
		readonly msevtmgt_addresscomposite: string;
		/** Address (not including city, country/region, state or province, or postal code) */
		msevtmgt_AddressLine1: string;
		/** Additional address details */
		msevtmgt_AddressLine2: string;
		/** Additional address details */
		msevtmgt_AddressLine3: string;
		/** Unique identifier for entity instances */
		msevtmgt_BuildingId: string;
		/** The city of the address */
		msevtmgt_City: string;
		/** Cost (of using the building) */
		msevtmgt_Cost: number;
		/** Value of the cost (in the base currency) */
		readonly msevtmgt_cost_Base: number;
		/** The country or region of the address */
		msevtmgt_Country: string;
		/** Description of the building */
		msevtmgt_Description: string;
		/** Indicates whether this location provides easy access for disabled people */
		msevtmgt_DisabledAccess: OptionSet.msevtmgt_Building.msevtmgt_DisabledAccess;
		/** Indicates wheter special parking for disabled people is available at this location */
		msevtmgt_DisabledParking: OptionSet.msevtmgt_Building.msevtmgt_DisabledParking;
		/** Email to contact the building */
		msevtmgt_Email: string;
		/** Estimated capacity of building */
		msevtmgt_EstimatedCapacity: number;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		/** Number of available rooms */
		readonly msevtmgt_NumberOfRooms: number;
		/** Last Updated time of rollup field Number of rooms. */
		readonly msevtmgt_NumberOfRooms_Date_UtcDateAndTime: Date;
		/** State of rollup field Number of rooms. */
		readonly msevtmgt_NumberOfRooms_State: number;
		/** The postal code of the address */
		msevtmgt_PostalCode: string;
		/** A person who is responsible for the building */
		msevtmgt_PrimaryContact: string;
		/** Indicates whether public telephones are available at this location */
		msevtmgt_PublicTelephoneAvailable: OptionSet.msevtmgt_Building.msevtmgt_PublicTelephoneAvailable;
		/** The state or province of the address */
		msevtmgt_StateProvince: string;
		/** A telephone number for contacting the building */
		msevtmgt_Telephone1: string;
		/** A telephone number for contacting the building */
		msevtmgt_Telephone2: string;
		/** A telephone number for contacting the building */
		msevtmgt_Telephone3: string;
		/** Website for contacting the building */
		msevtmgt_Website: string;
		/** Indicates whether WiFi is available at this location. */
		msevtmgt_WifiAvailable: OptionSet.msevtmgt_Building.msevtmgt_WifiAvailable;
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
		/** Status of the building */
		statecode: OptionSet.msevtmgt_Building.statecode;
		/** Reason for the status of the building */
		statuscode: OptionSet.msevtmgt_Building.statuscode;
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
			readonly msevtmgt_addresscomposite: string;
			/** Address (not including city, country/region, state or province, or postal code) */
			readonly msevtmgt_AddressLine1: string;
			/** Additional address details */
			readonly msevtmgt_AddressLine2: string;
			/** Additional address details */
			readonly msevtmgt_AddressLine3: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_BuildingId: string;
			/** The city of the address */
			readonly msevtmgt_City: string;
			/** Cost (of using the building) */
			readonly msevtmgt_Cost: string;
			/** Value of the cost (in the base currency) */
			readonly msevtmgt_cost_Base: string;
			/** The country or region of the address */
			readonly msevtmgt_Country: string;
			/** Description of the building */
			readonly msevtmgt_Description: string;
			/** Indicates whether this location provides easy access for disabled people */
			readonly msevtmgt_DisabledAccess: string;
			/** Indicates wheter special parking for disabled people is available at this location */
			readonly msevtmgt_DisabledParking: string;
			/** Email to contact the building */
			readonly msevtmgt_Email: string;
			/** Estimated capacity of building */
			readonly msevtmgt_EstimatedCapacity: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			/** Number of available rooms */
			readonly msevtmgt_NumberOfRooms: string;
			/** Last Updated time of rollup field Number of rooms. */
			readonly msevtmgt_NumberOfRooms_Date_UtcDateAndTime: string;
			/** State of rollup field Number of rooms. */
			readonly msevtmgt_NumberOfRooms_State: string;
			/** The postal code of the address */
			readonly msevtmgt_PostalCode: string;
			/** A person who is responsible for the building */
			readonly msevtmgt_PrimaryContact: string;
			/** Indicates whether public telephones are available at this location */
			readonly msevtmgt_PublicTelephoneAvailable: string;
			/** The state or province of the address */
			readonly msevtmgt_StateProvince: string;
			/** A telephone number for contacting the building */
			readonly msevtmgt_Telephone1: string;
			/** A telephone number for contacting the building */
			readonly msevtmgt_Telephone2: string;
			/** A telephone number for contacting the building */
			readonly msevtmgt_Telephone3: string;
			/** Website for contacting the building */
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
			/** Status of the building */
			readonly statecode: string;
			/** Reason for the status of the building */
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
	namespace msevtmgt_Building {
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