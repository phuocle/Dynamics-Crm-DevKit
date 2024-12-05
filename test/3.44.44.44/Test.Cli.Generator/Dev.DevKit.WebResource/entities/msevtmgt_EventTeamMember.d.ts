//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEvent_team_member {
		interface Header extends DevKit.Controls.IHeader {
			msevtmgt_MemberType: DevKit.Controls.OptionSet;
			msevtmgt_Role: DevKit.Controls.OptionSet;
		}
		interface tab__C248B7E9_11AB_4751_BDA5_E4E17E977412_Sections {
			_C248B7E9_11AB_4751_BDA5_E4E17E977412_SECTION_3: DevKit.Controls.Section;
			_C248B7E9_11AB_4751_BDA5_E4E17E977412_SECTION_4: DevKit.Controls.Section;
			SessionsSection: DevKit.Controls.Section;
		}
		interface tab_HotelRoomReservationsTab_Sections {
			HotelRoomReservationsSection: DevKit.Controls.Section;
		}
		interface tab__C248B7E9_11AB_4751_BDA5_E4E17E977412 extends DevKit.Controls.ITab {
			Section: tab__C248B7E9_11AB_4751_BDA5_E4E17E977412_Sections;
		}
		interface tab_HotelRoomReservationsTab extends DevKit.Controls.ITab {
			Section: tab_HotelRoomReservationsTab_Sections;
		}
		interface Tabs {
			_C248B7E9_11AB_4751_BDA5_E4E17E977412: tab__C248B7E9_11AB_4751_BDA5_E4E17E977412;
			HotelRoomReservationsTab: tab_HotelRoomReservationsTab;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_Company: DevKit.Controls.String;
			msevtmgt_Contact: DevKit.Controls.Lookup;
			msevtmgt_Description: DevKit.Controls.String;
			msevtmgt_Email: DevKit.Controls.String;
			msevtmgt_MemberType: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_Phone: DevKit.Controls.String;
			msevtmgt_Role: DevKit.Controls.OptionSet;
			msevtmgt_User: DevKit.Controls.Lookup;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_eventteammember_hotelroomreservation: DevKit.Controls.NavigationItem,
			msevtmgt_EventTeamMember_msevtmgt_Session_Producer: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_eventteammember_msevtmgt_event_producer: DevKit.Controls.NavigationItem
		}
		interface quickForm_contactlookupquickviewform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactlookupquickviewform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactlookupquickviewform_Body;
		}
		interface QuickForm {
			contactlookupquickviewform: quickForm_contactlookupquickviewform;
		}
		interface Grid {
			EventsOverview: DevKit.Controls.Grid;
			HotelRoomReservationsGrid: DevKit.Controls.Grid;
			SessionsOverview: DevKit.Controls.Grid;
		}
	}
	class FormEvent_team_member extends DevKit.IForm {
		/**
		* Event team member [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Event_team_member */
		Body: DevKit.FormEvent_team_member.Body;
		/** The Header section of form Event_team_member */
		Header: DevKit.FormEvent_team_member.Header;
		/** The Navigation of form Event_team_member */
		Navigation: DevKit.FormEvent_team_member.Navigation;
		/** The QuickForm of form Event_team_member */
		QuickForm: DevKit.FormEvent_team_member.QuickForm;
		/** The Grid of form Event_team_member */
		Grid: DevKit.FormEvent_team_member.Grid;
		/** The SidePanes of form Event_team_member */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_EventTeamMemberApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_EventTeamMemberApi
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
		msevtmgt_Company: string;
		msevtmgt_Contact: string;
		msevtmgt_Description: string;
		msevtmgt_Email: string;
		/** Unique identifier for entity instances */
		msevtmgt_EventTeamMemberId: string;
		msevtmgt_MemberType: OptionSet.msevtmgt_EventTeamMember.msevtmgt_MemberType;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		msevtmgt_Phone: string;
		msevtmgt_Role: OptionSet.msevtmgt_EventTeamMember.msevtmgt_Role;
		msevtmgt_User: string;
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
		/** Status of the event team member */
		statecode: OptionSet.msevtmgt_EventTeamMember.statecode;
		/** Reason for the status of the event team member */
		statuscode: OptionSet.msevtmgt_EventTeamMember.statuscode;
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
			readonly msevtmgt_Company: string;
			readonly msevtmgt_Contact: string;
			readonly msevtmgt_Description: string;
			readonly msevtmgt_Email: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_EventTeamMemberId: string;
			readonly msevtmgt_MemberType: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			readonly msevtmgt_Phone: string;
			readonly msevtmgt_Role: string;
			readonly msevtmgt_User: string;
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
			/** Status of the event team member */
			readonly statecode: string;
			/** Reason for the status of the event team member */
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
	namespace msevtmgt_EventTeamMember {
		enum msevtmgt_MemberType {
			/** 100000001 */
			External_team_member,
			/** 100000000 */
			Internal_team_member
		}
		enum msevtmgt_Role {
			/** 100000005 */
			Accommodation_management,
			/** 100000008 */
			Catering_management,
			/** 100000009 */
			Equipment_management,
			/** 100000006 */
			Marketingevent_promotion,
			/** 100000003 */
			Registration_management,
			/** 100000004 */
			Security_management,
			/** 100000001 */
			Session_Management,
			/** 100000002 */
			Speaker_management,
			/** 100000007 */
			Sponsorship_management,
			/** 100000000 */
			Venue_management
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