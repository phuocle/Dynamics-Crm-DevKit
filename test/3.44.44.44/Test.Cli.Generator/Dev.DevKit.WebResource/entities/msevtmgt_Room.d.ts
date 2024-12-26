//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRoom {
		interface Header extends DevKit.Controls.IHeader {
			/** Link to the building */
			msevtmgt_Building: DevKit.Controls.Lookup;
			/** Capacity */
			msevtmgt_Capacity: DevKit.Controls.Integer;
		}
		interface tab_GeneralTab_Sections {
			_6D22B45E_79CD_4F1B_83FC_341A07596546_SECTION_3: DevKit.Controls.Section;
			_6D22B45E_79CD_4F1B_83FC_341A07596546_SECTION_4: DevKit.Controls.Section;
			_6D22B45E_79CD_4F1B_83FC_341A07596546_SECTION_5: DevKit.Controls.Section;
			_BF00C7F8_95A0_40FB_B131_4A8998D070D1: DevKit.Controls.Section;
			_FA7317D8_DEDF_4BDC_8263_EF0BAB5D5D68: DevKit.Controls.Section;
		}
		interface tab_RoomReservationsTab_Sections {
			RoomReservationsSection: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface tab_RoomReservationsTab extends DevKit.Controls.ITab {
			Section: tab_RoomReservationsTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
			RoomReservationsTab: tab_RoomReservationsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Is there A/V support? */
			msevtmgt_AVSupport: DevKit.Controls.OptionSet;
			/** Link to the building */
			msevtmgt_Building: DevKit.Controls.Lookup;
			/** Capacity */
			msevtmgt_Capacity: DevKit.Controls.Integer;
			/** Description of the room */
			msevtmgt_Description: DevKit.Controls.String;
			/** Indicates whether this location provides easy access for disabled people */
			msevtmgt_DisabledAccess: DevKit.Controls.OptionSet;
			/** Indicates wheter an internet connection is available at this location */
			msevtmgt_InternetConnection: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Indicates wheter video conferencing is available at this location */
			msevtmgt_VideoConferencing: DevKit.Controls.OptionSet;
			/** Indicates whether there is a whiteboard at this location */
			msevtmgt_Whiteboard: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_event_room: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_room_msevtmgt_venue: DevKit.Controls.NavigationItem,
			msevtmgt_room_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_room_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_room_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_room_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_room_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_room_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_room_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_room_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_room_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_room_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_room_msevtmgt_layout_Room: DevKit.Controls.NavigationItem,
			msevtmgt_room_msevtmgt_roomreservation: DevKit.Controls.NavigationItem,
			msevtmgt_room_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_room_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_room_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_room_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_room_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_room_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_session_room: DevKit.Controls.NavigationItem
		}
		interface quickForm_BuildingSummary_Body {
			msevtmgt_AccessibleToilets: DevKit.Controls.QuickView;
			msevtmgt_AdditionalFacilities: DevKit.Controls.QuickView;
			msevtmgt_AddressLine1: DevKit.Controls.QuickView;
			msevtmgt_AddressLine2: DevKit.Controls.QuickView;
			msevtmgt_AddressLine3: DevKit.Controls.QuickView;
			msevtmgt_City: DevKit.Controls.QuickView;
			msevtmgt_Country: DevKit.Controls.QuickView;
			msevtmgt_Description: DevKit.Controls.QuickView;
			msevtmgt_DisabledAccess: DevKit.Controls.QuickView;
			msevtmgt_DisabledParking: DevKit.Controls.QuickView;
			msevtmgt_Name: DevKit.Controls.QuickView;
			msevtmgt_PrimaryContact: DevKit.Controls.QuickView;
			msevtmgt_StateProvince: DevKit.Controls.QuickView;
			OwnerId: DevKit.Controls.QuickView;
		}
		interface quickForm_BuildingSummary extends DevKit.Controls.IQuickView {
			Body: quickForm_BuildingSummary_Body;
		}
		interface QuickForm {
			BuildingSummary: quickForm_BuildingSummary;
		}
		interface Grid {
			RoomLayouts: DevKit.Controls.Grid;
			RoomReservationsGrid: DevKit.Controls.Grid;
		}
	}
	class FormRoom extends DevKit.IForm {
		/**
		* Room [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Room */
		Body: DevKit.FormRoom.Body;
		/** The Header section of form Room */
		Header: DevKit.FormRoom.Header;
		/** The Navigation of form Room */
		Navigation: DevKit.FormRoom.Navigation;
		/** The QuickForm of form Room */
		QuickForm: DevKit.FormRoom.QuickForm;
		/** The Grid of form Room */
		Grid: DevKit.FormRoom.Grid;
		/** The SidePanes of form Room */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormRoom_quick_create_form {
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
			/** Link to the building */
			msevtmgt_Building: DevKit.Controls.Lookup;
			/** Capacity */
			msevtmgt_Capacity: DevKit.Controls.Integer;
			/** Description of the room */
			msevtmgt_Description: DevKit.Controls.String;
			/** Indicates whether this location provides easy access for disabled people */
			msevtmgt_DisabledAccess: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** A person who is responsible for the room */
			msevtmgt_PrimaryContact: DevKit.Controls.Lookup;
		}
	}
	class FormRoom_quick_create_form extends DevKit.IForm {
		/**
		* Room quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Room_quick_create_form */
		Body: DevKit.FormRoom_quick_create_form.Body;
	}
	class msevtmgt_RoomApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_RoomApi
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
		/** Is there A/V support? */
		msevtmgt_AVSupport: OptionSet.msevtmgt_Room.msevtmgt_AVSupport;
		/** Link to the building */
		msevtmgt_Building: string;
		/** Capacity */
		msevtmgt_Capacity: number;
		/** Description of the room */
		msevtmgt_Description: string;
		/** Indicates whether this location provides easy access for disabled people */
		msevtmgt_DisabledAccess: OptionSet.msevtmgt_Room.msevtmgt_DisabledAccess;
		/** Indicates wheter an internet connection is available at this location */
		msevtmgt_InternetConnection: OptionSet.msevtmgt_Room.msevtmgt_InternetConnection;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		/** Other */
		msevtmgt_Other: string;
		/** A person who is responsible for the room */
		msevtmgt_PrimaryContact: string;
		/** Unique identifier for entity instances */
		msevtmgt_RoomId: string;
		/** Indicates wheter video conferencing is available at this location */
		msevtmgt_VideoConferencing: OptionSet.msevtmgt_Room.msevtmgt_VideoConferencing;
		/** Indicates whether there is a whiteboard at this location */
		msevtmgt_Whiteboard: OptionSet.msevtmgt_Room.msevtmgt_Whiteboard;
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
		/** Status of the room */
		statecode: OptionSet.msevtmgt_Room.statecode;
		/** Reason for the status of the room */
		statuscode: OptionSet.msevtmgt_Room.statuscode;
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
			/** Is there A/V support? */
			readonly msevtmgt_AVSupport: string;
			/** Link to the building */
			readonly msevtmgt_Building: string;
			/** Capacity */
			readonly msevtmgt_Capacity: string;
			/** Description of the room */
			readonly msevtmgt_Description: string;
			/** Indicates whether this location provides easy access for disabled people */
			readonly msevtmgt_DisabledAccess: string;
			/** Indicates wheter an internet connection is available at this location */
			readonly msevtmgt_InternetConnection: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			/** Other */
			readonly msevtmgt_Other: string;
			/** A person who is responsible for the room */
			readonly msevtmgt_PrimaryContact: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_RoomId: string;
			/** Indicates wheter video conferencing is available at this location */
			readonly msevtmgt_VideoConferencing: string;
			/** Indicates whether there is a whiteboard at this location */
			readonly msevtmgt_Whiteboard: string;
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
			/** Status of the room */
			readonly statecode: string;
			/** Reason for the status of the room */
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
	namespace msevtmgt_Room {
		enum msevtmgt_AVSupport {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_DisabledAccess {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_InternetConnection {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_VideoConferencing {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_Whiteboard {
			/** 100000001 */
			No,
			/** 100000002 */
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