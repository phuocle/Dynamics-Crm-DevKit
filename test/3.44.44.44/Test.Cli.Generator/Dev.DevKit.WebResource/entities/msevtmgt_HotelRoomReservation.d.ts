//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_HotelRoomReservation_Information {
		interface tab__32E11295_AC97_44AD_A876_938FF71983B6_Sections {
			_32E11295_AC97_44AD_A876_938FF71983B6_SECTION_3: DevKit.Controls.Section;
			_83D5A013_9BF6_4156_A782_1E2645C0AC7E: DevKit.Controls.Section;
		}
		interface tab__32E11295_AC97_44AD_A876_938FF71983B6 extends DevKit.Controls.ITab {
			Section: tab__32E11295_AC97_44AD_A876_938FF71983B6_Sections;
		}
		interface Tabs {
			_32E11295_AC97_44AD_A876_938FF71983B6: tab__32E11295_AC97_44AD_A876_938FF71983B6;
		}
		interface Body {
			Tab: Tabs;
			/** Room reservation attendee */
			msevtmgt_Attendee: DevKit.Controls.Lookup;
			/** Unique identifier for event team member associated with hotel room reservation. */
			msevtmgt_EventTeamMemberId: DevKit.Controls.Lookup;
			msevtmgt_Guesttype: DevKit.Controls.OptionSet;
			msevtmgt_HotelRoomAllocation: DevKit.Controls.Lookup;
			/** The reservation number */
			msevtmgt_Name: DevKit.Controls.String;
			/** Room reservation rewards program number */
			msevtmgt_RewardsProgramNumber: DevKit.Controls.String;
			/** Unique identifier for speaker associated with hotel room reservation. */
			msevtmgt_SpeakerId: DevKit.Controls.Lookup;
			/** Room reservation special requests */
			msevtmgt_SpecialRequests: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_hotelroomreservation_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_hotelroomreservation_Tasks: DevKit.Controls.NavigationItem
		}
		interface quickForm_msevtmgt_EventRegistration_Body {
			msevtmgt_ContactId: DevKit.Controls.QuickView;
			msevtmgt_Name: DevKit.Controls.QuickView;
		}
		interface quickForm_msevtmgt_HotelRoomAllocation_Body {
			msevtmgt_Event: DevKit.Controls.QuickView;
			msevtmgt_HotelProperty: DevKit.Controls.QuickView;
			msevtmgt_Name: DevKit.Controls.QuickView;
			msevtmgt_NumberOfRoomsAllocated: DevKit.Controls.QuickView;
			msevtmgt_PricePerRoom: DevKit.Controls.QuickView;
			msevtmgt_RoomType: DevKit.Controls.QuickView;
		}
		interface quickForm_msevtmgt_EventRegistration extends DevKit.Controls.IQuickView {
			Body: quickForm_msevtmgt_EventRegistration_Body;
		}
		interface quickForm_msevtmgt_HotelRoomAllocation extends DevKit.Controls.IQuickView {
			Body: quickForm_msevtmgt_HotelRoomAllocation_Body;
		}
		interface QuickForm {
			msevtmgt_EventRegistration: quickForm_msevtmgt_EventRegistration;
			msevtmgt_HotelRoomAllocation: quickForm_msevtmgt_HotelRoomAllocation;
		}
	}
	class Formmsevtmgt_HotelRoomReservation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_HotelRoomReservation_Information */
		Body: DevKit.Formmsevtmgt_HotelRoomReservation_Information.Body;
		/** The Navigation of form msevtmgt_HotelRoomReservation_Information */
		Navigation: DevKit.Formmsevtmgt_HotelRoomReservation_Information.Navigation;
		/** The QuickForm of form msevtmgt_HotelRoomReservation_Information */
		QuickForm: DevKit.Formmsevtmgt_HotelRoomReservation_Information.QuickForm;
		/** The SidePanes of form msevtmgt_HotelRoomReservation_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_HotelRoomReservation_Quick_Create_Form {
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
			/** Room reservation attendee */
			msevtmgt_Attendee: DevKit.Controls.Lookup;
			/** Unique identifier for event team member associated with hotel room reservation. */
			msevtmgt_EventTeamMemberId: DevKit.Controls.Lookup;
			msevtmgt_Guesttype: DevKit.Controls.OptionSet;
			msevtmgt_HotelRoomAllocation: DevKit.Controls.Lookup;
			/** The reservation number */
			msevtmgt_Name: DevKit.Controls.String;
			/** Room reservation rewards program number */
			msevtmgt_RewardsProgramNumber: DevKit.Controls.String;
			/** Unique identifier for speaker associated with hotel room reservation. */
			msevtmgt_SpeakerId: DevKit.Controls.Lookup;
			/** Room reservation special requests */
			msevtmgt_SpecialRequests: DevKit.Controls.String;
		}
	}
	class Formmsevtmgt_HotelRoomReservation_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_HotelRoomReservation_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_HotelRoomReservation_Quick_Create_Form.Body;
	}
	class msevtmgt_HotelRoomReservationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_HotelRoomReservationApi
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
		/** Room reservation attendee */
		msevtmgt_Attendee: string;
		/** Unique identifier for event team member associated with hotel room reservation. */
		msevtmgt_EventTeamMemberId: string;
		msevtmgt_Guesttype: OptionSet.msevtmgt_HotelRoomReservation.msevtmgt_Guesttype;
		msevtmgt_HotelRoomAllocation: string;
		/** Unique identifier for entity instances */
		msevtmgt_HotelRoomReservationId: string;
		/** The reservation number */
		msevtmgt_Name: string;
		/** Room reservation rewards program number */
		msevtmgt_RewardsProgramNumber: string;
		/** Unique identifier for speaker associated with hotel room reservation. */
		msevtmgt_SpeakerId: string;
		/** Room reservation special requests */
		msevtmgt_SpecialRequests: string;
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
		/** Status of the hotel room reservation */
		statecode: OptionSet.msevtmgt_HotelRoomReservation.statecode;
		/** Reason for the status of the hotel room reservation */
		statuscode: OptionSet.msevtmgt_HotelRoomReservation.statuscode;
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
			/** Room reservation attendee */
			readonly msevtmgt_Attendee: string;
			/** Unique identifier for event team member associated with hotel room reservation. */
			readonly msevtmgt_EventTeamMemberId: string;
			readonly msevtmgt_Guesttype: string;
			readonly msevtmgt_HotelRoomAllocation: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_HotelRoomReservationId: string;
			/** The reservation number */
			readonly msevtmgt_Name: string;
			/** Room reservation rewards program number */
			readonly msevtmgt_RewardsProgramNumber: string;
			/** Unique identifier for speaker associated with hotel room reservation. */
			readonly msevtmgt_SpeakerId: string;
			/** Room reservation special requests */
			readonly msevtmgt_SpecialRequests: string;
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
			/** Status of the hotel room reservation */
			readonly statecode: string;
			/** Reason for the status of the hotel room reservation */
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
	namespace msevtmgt_HotelRoomReservation {
		enum msevtmgt_Guesttype {
			/** 100000000 */
			Attendee,
			/** 100000002 */
			Event_team_member,
			/** 100000001 */
			Speaker
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