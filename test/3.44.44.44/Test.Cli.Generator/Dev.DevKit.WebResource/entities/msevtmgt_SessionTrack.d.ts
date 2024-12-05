//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_SessionTrack_Information {
		interface Header extends DevKit.Controls.IHeader {
			msevtmgt_SessionsInTrack: DevKit.Controls.Integer;
			msevtmgt_TargetNumberOfSessions: DevKit.Controls.Integer;
			msevtmgt_TrackType: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__DFBE1579_8F1B_40CA_8DF8_964010FBE6E5_Sections {
			_A9EF0EBC_FFAC_4C0A_B87C_6F5B510F264E: DevKit.Controls.Section;
			_DFBE1579_8F1B_40CA_8DF8_964010FBE6E5_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_SessionBreakdownTab_Sections {
			SessionBreakdownTab_section_1: DevKit.Controls.Section;
			SessionBreakdownTab_section_2: DevKit.Controls.Section;
		}
		interface tab__DFBE1579_8F1B_40CA_8DF8_964010FBE6E5 extends DevKit.Controls.ITab {
			Section: tab__DFBE1579_8F1B_40CA_8DF8_964010FBE6E5_Sections;
		}
		interface tab_SessionBreakdownTab extends DevKit.Controls.ITab {
			Section: tab_SessionBreakdownTab_Sections;
		}
		interface Tabs {
			_DFBE1579_8F1B_40CA_8DF8_964010FBE6E5: tab__DFBE1579_8F1B_40CA_8DF8_964010FBE6E5;
			SessionBreakdownTab: tab_SessionBreakdownTab;
		}
		interface Body {
			Tab: Tabs;
			/** The intended audience for the session track */
			msevtmgt_AudienceType: DevKit.Controls.OptionSet;
			msevtmgt_Description: DevKit.Controls.String;
			/** Unique identifier for the event associated with the session track */
			msevtmgt_EventId: DevKit.Controls.Lookup;
			/** Industry of the session track */
			msevtmgt_IndustryType: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_numberofregistrations: DevKit.Controls.Integer;
			msevtmgt_PublishStatus: DevKit.Controls.OptionSet;
			msevtmgt_TrackCode: DevKit.Controls.String;
			msevtmgt_TrackGoal: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_sessiontrack_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msevtmgt_pass_Track: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_sessiontrack_Tasks: DevKit.Controls.NavigationItem
		}
		interface quickForm_Event_Body {
			msevtmgt_building: DevKit.Controls.QuickView;
			msevtmgt_EventEndDate: DevKit.Controls.QuickView;
			msevtmgt_EventStartDate: DevKit.Controls.QuickView;
			msevtmgt_Name: DevKit.Controls.QuickView;
			msevtmgt_PrimaryGoal: DevKit.Controls.QuickView;
		}
		interface quickForm_Event extends DevKit.Controls.IQuickView {
			Body: quickForm_Event_Body;
		}
		interface QuickForm {
			Event: quickForm_Event;
		}
		interface Grid {
			Sessions: DevKit.Controls.Grid;
			sessionsbyAudienceType: DevKit.Controls.Grid;
			sessionsbySessionType: DevKit.Controls.Grid;
		}
	}
	class Formmsevtmgt_SessionTrack_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_SessionTrack_Information */
		Body: DevKit.Formmsevtmgt_SessionTrack_Information.Body;
		/** The Header section of form msevtmgt_SessionTrack_Information */
		Header: DevKit.Formmsevtmgt_SessionTrack_Information.Header;
		/** The Navigation of form msevtmgt_SessionTrack_Information */
		Navigation: DevKit.Formmsevtmgt_SessionTrack_Information.Navigation;
		/** The QuickForm of form msevtmgt_SessionTrack_Information */
		QuickForm: DevKit.Formmsevtmgt_SessionTrack_Information.QuickForm;
		/** The Grid of form msevtmgt_SessionTrack_Information */
		Grid: DevKit.Formmsevtmgt_SessionTrack_Information.Grid;
		/** The SidePanes of form msevtmgt_SessionTrack_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_SessionTrack_Quick_Create_Form {
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
			/** The intended audience for the session track */
			msevtmgt_AudienceType: DevKit.Controls.OptionSet;
			msevtmgt_Description: DevKit.Controls.String;
			/** Unique identifier for the event associated with the session track */
			msevtmgt_EventId: DevKit.Controls.Lookup;
			/** Industry of the session track */
			msevtmgt_IndustryType: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_numberofregistrations: DevKit.Controls.Integer;
			msevtmgt_PublishStatus: DevKit.Controls.OptionSet;
			msevtmgt_SessionsInTrack: DevKit.Controls.Integer;
			msevtmgt_TargetNumberOfSessions: DevKit.Controls.Integer;
			msevtmgt_TrackCode: DevKit.Controls.String;
			msevtmgt_TrackGoal: DevKit.Controls.String;
			msevtmgt_TrackType: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_SessionTrack_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_SessionTrack_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_SessionTrack_Quick_Create_Form.Body;
	}
	class msevtmgt_SessionTrackApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_SessionTrackApi
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
		/** The intended audience for the session track */
		msevtmgt_AudienceType: OptionSet.msevtmgt_SessionTrack.msevtmgt_AudienceType;
		msevtmgt_Description: string;
		/** Unique identifier for the event associated with the session track */
		msevtmgt_EventId: string;
		/** Industry of the session track */
		msevtmgt_IndustryType: OptionSet.msevtmgt_SessionTrack.msevtmgt_IndustryType;
		/** Keywords for the session track */
		msevtmgt_Keywords: string;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		msevtmgt_numberofregistrations: number;
		msevtmgt_PublishStatus: OptionSet.msevtmgt_SessionTrack.msevtmgt_PublishStatus;
		msevtmgt_SessionsInTrack: number;
		/** Unique identifier for entity instances */
		msevtmgt_SessionTrackId: string;
		msevtmgt_TargetNumberOfSessions: number;
		msevtmgt_TrackCode: string;
		msevtmgt_TrackGoal: string;
		msevtmgt_TrackType: OptionSet.msevtmgt_SessionTrack.msevtmgt_TrackType;
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
		/** Status of the session track */
		statecode: OptionSet.msevtmgt_SessionTrack.statecode;
		/** Reason for the status of the session track */
		statuscode: OptionSet.msevtmgt_SessionTrack.statuscode;
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
			/** The intended audience for the session track */
			readonly msevtmgt_AudienceType: string;
			readonly msevtmgt_Description: string;
			/** Unique identifier for the event associated with the session track */
			readonly msevtmgt_EventId: string;
			/** Industry of the session track */
			readonly msevtmgt_IndustryType: string;
			/** Keywords for the session track */
			readonly msevtmgt_Keywords: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			readonly msevtmgt_numberofregistrations: string;
			readonly msevtmgt_PublishStatus: string;
			readonly msevtmgt_SessionsInTrack: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_SessionTrackId: string;
			readonly msevtmgt_TargetNumberOfSessions: string;
			readonly msevtmgt_TrackCode: string;
			readonly msevtmgt_TrackGoal: string;
			readonly msevtmgt_TrackType: string;
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
			/** Status of the session track */
			readonly statecode: string;
			/** Reason for the status of the session track */
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
	namespace msevtmgt_SessionTrack {
		enum msevtmgt_AudienceType {
			/** 100000003 */
			Advanced,
			/** 100000000 */
			General,
			/** 100000002 */
			Intermediate,
			/** 100000001 */
			Introductory
		}
		enum msevtmgt_IndustryType {
			/** 100000000 */
			Architecture_and_engineering,
			/** 100000001 */
			Financial_services,
			/** 100000002 */
			Manufacturing,
			/** 100000003 */
			Media_entertainment,
			/** 100000008 */
			Other,
			/** 100000004 */
			Professional_services,
			/** 100000005 */
			Public_sector,
			/** 100000006 */
			Retail,
			/** 100000007 */
			Wholesale_and_distribution
		}
		enum msevtmgt_PublishStatus {
			/** 100000004 */
			Cancelled,
			/** 100000000 */
			Draft,
			/** 100000005 */
			Going_live,
			/** 100000002 */
			In_progress,
			/** 100000003 */
			Live,
			/** 100000001 */
			Ready_to_go_live
		}
		enum msevtmgt_TrackType {
			/** 100000001 */
			External,
			/** 100000000 */
			Internal
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