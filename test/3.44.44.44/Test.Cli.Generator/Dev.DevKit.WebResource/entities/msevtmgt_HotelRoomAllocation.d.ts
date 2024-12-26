//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_HotelRoomAllocation_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Related event */
			msevtmgt_Event: DevKit.Controls.Lookup;
			/** Number of rooms left */
			msevtmgt_NumberOfRoomsLeft: DevKit.Controls.Integer;
			/** Number of reserved rooms */
			msevtmgt_NumberofRoomsReserved: DevKit.Controls.Integer;
			/** Room type */
			msevtmgt_RoomType: DevKit.Controls.OptionSet;
		}
		interface tab__E088DFD2_761A_443A_BDDB_C2D24AEAF2E2_Sections {
			_E088DFD2_761A_443A_BDDB_C2D24AEAF2E2_SECTION_3: DevKit.Controls.Section;
			_E088DFD2_761A_443A_BDDB_C2D24AEAF2E2_SECTION_4: DevKit.Controls.Section;
		}
		interface tab_ReservationsTab_Sections {
			ReservationsTab_section_1: DevKit.Controls.Section;
		}
		interface tab__E088DFD2_761A_443A_BDDB_C2D24AEAF2E2 extends DevKit.Controls.ITab {
			Section: tab__E088DFD2_761A_443A_BDDB_C2D24AEAF2E2_Sections;
		}
		interface tab_ReservationsTab extends DevKit.Controls.ITab {
			Section: tab_ReservationsTab_Sections;
		}
		interface Tabs {
			_E088DFD2_761A_443A_BDDB_C2D24AEAF2E2: tab__E088DFD2_761A_443A_BDDB_C2D24AEAF2E2;
			ReservationsTab: tab_ReservationsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Room allocation additional details */
			msevtmgt_AdditionalDetails: DevKit.Controls.String;
			/** Related event */
			msevtmgt_Event: DevKit.Controls.Lookup;
			/** Related hotel property */
			msevtmgt_HotelProperty: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Number of allocated rooms */
			msevtmgt_NumberOfRoomsAllocated: DevKit.Controls.Integer;
			/** Price per room */
			msevtmgt_PricePerRoom: DevKit.Controls.Money;
			/** Primary contact */
			msevtmgt_PrimaryContact: DevKit.Controls.Lookup;
			/** Room type */
			msevtmgt_RoomType: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_hotelroomallocation_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomallocation_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_hotelroomallocation_msevtmgt_hotelroomreservation_HotelRoomAllocation: DevKit.Controls.NavigationItem
		}
		interface quickForm_HotelGroup_Body {
			msevtmgt_HotelGroup: DevKit.Controls.QuickView;
		}
		interface quickForm_HotelQuickViewForm_Body {
			msevtmgt_AddressLine1: DevKit.Controls.QuickView;
			msevtmgt_AddressLine2: DevKit.Controls.QuickView;
			msevtmgt_AddressLine3: DevKit.Controls.QuickView;
			msevtmgt_City: DevKit.Controls.QuickView;
			msevtmgt_Country: DevKit.Controls.QuickView;
			msevtmgt_Description: DevKit.Controls.QuickView;
			msevtmgt_Facilities: DevKit.Controls.QuickView;
			msevtmgt_HotelGroup: DevKit.Controls.QuickView;
			msevtmgt_Name: DevKit.Controls.QuickView;
			msevtmgt_PrimaryContact: DevKit.Controls.QuickView;
			msevtmgt_StateProvince: DevKit.Controls.QuickView;
			msevtmgt_ZIPPostalCode: DevKit.Controls.QuickView;
		}
		interface quickForm_HotelGroup extends DevKit.Controls.IQuickView {
			Body: quickForm_HotelGroup_Body;
		}
		interface quickForm_HotelQuickViewForm extends DevKit.Controls.IQuickView {
			Body: quickForm_HotelQuickViewForm_Body;
		}
		interface QuickForm {
			HotelGroup: quickForm_HotelGroup;
			HotelQuickViewForm: quickForm_HotelQuickViewForm;
		}
		interface Grid {
			msevtmgt_RoomReservations: DevKit.Controls.Grid;
		}
	}
	class Formmsevtmgt_HotelRoomAllocation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_HotelRoomAllocation_Information */
		Body: DevKit.Formmsevtmgt_HotelRoomAllocation_Information.Body;
		/** The Header section of form msevtmgt_HotelRoomAllocation_Information */
		Header: DevKit.Formmsevtmgt_HotelRoomAllocation_Information.Header;
		/** The Navigation of form msevtmgt_HotelRoomAllocation_Information */
		Navigation: DevKit.Formmsevtmgt_HotelRoomAllocation_Information.Navigation;
		/** The QuickForm of form msevtmgt_HotelRoomAllocation_Information */
		QuickForm: DevKit.Formmsevtmgt_HotelRoomAllocation_Information.QuickForm;
		/** The Grid of form msevtmgt_HotelRoomAllocation_Information */
		Grid: DevKit.Formmsevtmgt_HotelRoomAllocation_Information.Grid;
		/** The SidePanes of form msevtmgt_HotelRoomAllocation_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_HotelRoomAllocation_Quick_Create_Form {
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
			/** Related event */
			msevtmgt_Event: DevKit.Controls.Lookup;
			/** Related hotel property */
			msevtmgt_HotelProperty: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Number of allocated rooms */
			msevtmgt_NumberOfRoomsAllocated: DevKit.Controls.Integer;
			/** Price per room */
			msevtmgt_PricePerRoom: DevKit.Controls.Money;
			/** Room type */
			msevtmgt_RoomType: DevKit.Controls.OptionSet;
		}
	}
	class Formmsevtmgt_HotelRoomAllocation_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_HotelRoomAllocation_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_HotelRoomAllocation_Quick_Create_Form.Body;
	}
	class msevtmgt_HotelRoomAllocationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_HotelRoomAllocationApi
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
		/** Room allocation additional details */
		msevtmgt_AdditionalDetails: string;
		/** Related event */
		msevtmgt_Event: string;
		/** Related hotel property */
		msevtmgt_HotelProperty: string;
		/** Unique identifier for entity instances */
		msevtmgt_HotelRoomAllocationId: string;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		/** Number of allocated rooms */
		msevtmgt_NumberOfRoomsAllocated: number;
		/** Number of rooms left */
		readonly msevtmgt_NumberOfRoomsLeft: number;
		/** Number of reserved rooms */
		readonly msevtmgt_NumberofRoomsReserved: number;
		/** Last Updated time of rollup field Number of rooms reserved. */
		readonly msevtmgt_NumberofRoomsReserved_Date_UtcDateAndTime: Date;
		/** State of rollup field Number of rooms reserved. */
		readonly msevtmgt_NumberofRoomsReserved_State: number;
		/** Price per room */
		msevtmgt_PricePerRoom: number;
		/** Value of the price per room (in the base currency) */
		readonly msevtmgt_priceperroom_Base: number;
		/** Primary contact */
		msevtmgt_PrimaryContact: string;
		/** Room type */
		msevtmgt_RoomType: OptionSet.msevtmgt_HotelRoomAllocation.msevtmgt_RoomType;
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
		/** Status of the hotel room allocation */
		statecode: OptionSet.msevtmgt_HotelRoomAllocation.statecode;
		/** Reason for the status of the hotel room allocation */
		statuscode: OptionSet.msevtmgt_HotelRoomAllocation.statuscode;
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
			/** Room allocation additional details */
			readonly msevtmgt_AdditionalDetails: string;
			/** Related event */
			readonly msevtmgt_Event: string;
			/** Related hotel property */
			readonly msevtmgt_HotelProperty: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_HotelRoomAllocationId: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			/** Number of allocated rooms */
			readonly msevtmgt_NumberOfRoomsAllocated: string;
			/** Number of rooms left */
			readonly msevtmgt_NumberOfRoomsLeft: string;
			/** Number of reserved rooms */
			readonly msevtmgt_NumberofRoomsReserved: string;
			/** Last Updated time of rollup field Number of rooms reserved. */
			readonly msevtmgt_NumberofRoomsReserved_Date_UtcDateAndTime: string;
			/** State of rollup field Number of rooms reserved. */
			readonly msevtmgt_NumberofRoomsReserved_State: string;
			/** Price per room */
			readonly msevtmgt_PricePerRoom: string;
			/** Value of the price per room (in the base currency) */
			readonly msevtmgt_priceperroom_Base: string;
			/** Primary contact */
			readonly msevtmgt_PrimaryContact: string;
			/** Room type */
			readonly msevtmgt_RoomType: string;
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
			/** Status of the hotel room allocation */
			readonly statecode: string;
			/** Reason for the status of the hotel room allocation */
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
	namespace msevtmgt_HotelRoomAllocation {
		enum msevtmgt_RoomType {
			/** 100000001 */
			Double_room,
			/** 100000003 */
			Executive_suite,
			/** 100000002 */
			Junior_suite,
			/** 100000004 */
			Luxury_suite,
			/** 100000000 */
			Single_room
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