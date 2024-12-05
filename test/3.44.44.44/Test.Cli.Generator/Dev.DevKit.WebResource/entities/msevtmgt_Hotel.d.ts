//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_Hotel_Information {
		interface tab__D81D6645_D5B5_4C03_A211_2F576722CA7D_Sections {
			_D81D6645_D5B5_4C03_A211_2F576722CA7D_SECTION_3: DevKit.Controls.Section;
			_D81D6645_D5B5_4C03_A211_2F576722CA7D_SECTION_3_JP: DevKit.Controls.Section;
			_D81D6645_D5B5_4C03_A211_2F576722CA7D_SECTION_4: DevKit.Controls.Section;
		}
		interface tab_RoomTab_Sections {
			RoomTab_section_1: DevKit.Controls.Section;
		}
		interface tab__D81D6645_D5B5_4C03_A211_2F576722CA7D extends DevKit.Controls.ITab {
			Section: tab__D81D6645_D5B5_4C03_A211_2F576722CA7D_Sections;
		}
		interface tab_RoomTab extends DevKit.Controls.ITab {
			Section: tab_RoomTab_Sections;
		}
		interface Tabs {
			_D81D6645_D5B5_4C03_A211_2F576722CA7D: tab__D81D6645_D5B5_4C03_A211_2F576722CA7D;
			RoomTab: tab_RoomTab;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_AddressLine1: DevKit.Controls.String;
			msevtmgt_AddressLine11: DevKit.Controls.String;
			msevtmgt_AddressLine2: DevKit.Controls.String;
			msevtmgt_AddressLine21: DevKit.Controls.String;
			msevtmgt_AddressLine3: DevKit.Controls.String;
			msevtmgt_AddressLine31: DevKit.Controls.String;
			/** The city where the hotel is located */
			msevtmgt_City: DevKit.Controls.String;
			/** The city where the hotel is located */
			msevtmgt_City1: DevKit.Controls.String;
			/** The country or region where the hotel is located */
			msevtmgt_Country: DevKit.Controls.String;
			/** The country or region where the hotel is located */
			msevtmgt_Country1: DevKit.Controls.String;
			/** Hotel description */
			msevtmgt_Description: DevKit.Controls.String;
			/** Hotel facilities */
			msevtmgt_Facilities: DevKit.Controls.String;
			msevtmgt_HotelGroup: DevKit.Controls.Lookup;
			/** The name of the hotel */
			msevtmgt_Name: DevKit.Controls.String;
			/** Hotel primary contact */
			msevtmgt_PrimaryContact: DevKit.Controls.Lookup;
			/** The state or province where the hotel is located */
			msevtmgt_StateProvince: DevKit.Controls.String;
			/** The state or province where the hotel is located */
			msevtmgt_StateProvince1: DevKit.Controls.String;
			/** Hotel website */
			msevtmgt_Website: DevKit.Controls.String;
			/** Hotel ZIP postal code */
			msevtmgt_ZIPPostalCode: DevKit.Controls.String;
			/** Hotel ZIP postal code */
			msevtmgt_ZIPPostalCode1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			msevtmgt_hotel_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_hotel_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_hotel_hotelroomallocation_HotelProperty: DevKit.Controls.NavigationItem
		}
		interface quickForm_msevtmgt_eventvendor_Body {
			msevtmgt_Account: DevKit.Controls.QuickView;
			msevtmgt_name: DevKit.Controls.QuickView;
			msevtmgt_Type: DevKit.Controls.QuickView;
		}
		interface quickForm_msevtmgt_contact_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FirstName: DevKit.Controls.QuickView;
			LastName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
		}
		interface quickForm_msevtmgt_eventvendor extends DevKit.Controls.IQuickView {
			Body: quickForm_msevtmgt_eventvendor_Body;
		}
		interface quickForm_msevtmgt_contact extends DevKit.Controls.IQuickView {
			Body: quickForm_msevtmgt_contact_Body;
		}
		interface QuickForm {
			msevtmgt_eventvendor: quickForm_msevtmgt_eventvendor;
			msevtmgt_contact: quickForm_msevtmgt_contact;
		}
		interface Grid {
			msevtmgt_RoomAllocations: DevKit.Controls.Grid;
		}
	}
	class Formmsevtmgt_Hotel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_Hotel_Information */
		Body: DevKit.Formmsevtmgt_Hotel_Information.Body;
		/** The Navigation of form msevtmgt_Hotel_Information */
		Navigation: DevKit.Formmsevtmgt_Hotel_Information.Navigation;
		/** The QuickForm of form msevtmgt_Hotel_Information */
		QuickForm: DevKit.Formmsevtmgt_Hotel_Information.QuickForm;
		/** The Grid of form msevtmgt_Hotel_Information */
		Grid: DevKit.Formmsevtmgt_Hotel_Information.Grid;
		/** The SidePanes of form msevtmgt_Hotel_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_Hotel_Quick_Create_Form {
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
			msevtmgt_AddressLine1: DevKit.Controls.String;
			msevtmgt_AddressLine11: DevKit.Controls.String;
			msevtmgt_AddressLine2: DevKit.Controls.String;
			msevtmgt_AddressLine21: DevKit.Controls.String;
			msevtmgt_AddressLine3: DevKit.Controls.String;
			msevtmgt_AddressLine31: DevKit.Controls.String;
			/** The city where the hotel is located */
			msevtmgt_City: DevKit.Controls.String;
			/** The city where the hotel is located */
			msevtmgt_City1: DevKit.Controls.String;
			/** The country or region where the hotel is located */
			msevtmgt_Country: DevKit.Controls.String;
			/** The country or region where the hotel is located */
			msevtmgt_Country1: DevKit.Controls.String;
			/** Hotel description */
			msevtmgt_Description: DevKit.Controls.String;
			/** Hotel facilities */
			msevtmgt_Facilities: DevKit.Controls.String;
			msevtmgt_HotelGroup: DevKit.Controls.Lookup;
			/** The name of the hotel */
			msevtmgt_Name: DevKit.Controls.String;
			/** Hotel primary contact */
			msevtmgt_PrimaryContact: DevKit.Controls.Lookup;
			/** The state or province where the hotel is located */
			msevtmgt_StateProvince: DevKit.Controls.String;
			/** The state or province where the hotel is located */
			msevtmgt_StateProvince1: DevKit.Controls.String;
			/** Hotel ZIP postal code */
			msevtmgt_ZIPPostalCode: DevKit.Controls.String;
			/** Hotel ZIP postal code */
			msevtmgt_ZIPPostalCode1: DevKit.Controls.String;
		}
	}
	class Formmsevtmgt_Hotel_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_Hotel_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_Hotel_Quick_Create_Form.Body;
	}
	class msevtmgt_HotelApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_HotelApi
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
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_AddressLine1: string;
		msevtmgt_AddressLine2: string;
		msevtmgt_AddressLine3: string;
		/** The city where the hotel is located */
		msevtmgt_City: string;
		/** The country or region where the hotel is located */
		msevtmgt_Country: string;
		/** Hotel description */
		msevtmgt_Description: string;
		/** Hotel facilities */
		msevtmgt_Facilities: string;
		msevtmgt_HotelGroup: string;
		/** Unique identifier for entity instances */
		msevtmgt_HotelId: string;
		/** The name of the hotel */
		msevtmgt_Name: string;
		/** Hotel primary contact */
		msevtmgt_PrimaryContact: string;
		/** The state or province where the hotel is located */
		msevtmgt_StateProvince: string;
		/** Hotel website */
		msevtmgt_Website: string;
		/** Hotel ZIP postal code */
		msevtmgt_ZIPPostalCode: string;
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
		/** Status of the hotel */
		statecode: OptionSet.msevtmgt_Hotel.statecode;
		/** Reason for the status of the hotel */
		statuscode: OptionSet.msevtmgt_Hotel.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
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
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_AddressLine1: string;
			readonly msevtmgt_AddressLine2: string;
			readonly msevtmgt_AddressLine3: string;
			/** The city where the hotel is located */
			readonly msevtmgt_City: string;
			/** The country or region where the hotel is located */
			readonly msevtmgt_Country: string;
			/** Hotel description */
			readonly msevtmgt_Description: string;
			/** Hotel facilities */
			readonly msevtmgt_Facilities: string;
			readonly msevtmgt_HotelGroup: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_HotelId: string;
			/** The name of the hotel */
			readonly msevtmgt_Name: string;
			/** Hotel primary contact */
			readonly msevtmgt_PrimaryContact: string;
			/** The state or province where the hotel is located */
			readonly msevtmgt_StateProvince: string;
			/** Hotel website */
			readonly msevtmgt_Website: string;
			/** Hotel ZIP postal code */
			readonly msevtmgt_ZIPPostalCode: string;
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
			/** Status of the hotel */
			readonly statecode: string;
			/** Reason for the status of the hotel */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_Hotel {
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