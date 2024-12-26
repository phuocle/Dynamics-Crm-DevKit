//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSession_registration {
		interface Header extends DevKit.Controls.IHeader {
			/** The date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
		}
		interface tab__613E4BEB_EBC4_466F_BB00_F8667A0D2D6A_Sections {
			_97B8428E_9A49_423C_BCE7_2144713D6598: DevKit.Controls.Section;
		}
		interface tab_SessionBreakdownTab_Sections {
			Session_by_Audience_Type_section: DevKit.Controls.Section;
			Sessions_by_Session_Type_section: DevKit.Controls.Section;
		}
		interface tab__613E4BEB_EBC4_466F_BB00_F8667A0D2D6A extends DevKit.Controls.ITab {
			Section: tab__613E4BEB_EBC4_466F_BB00_F8667A0D2D6A_Sections;
		}
		interface tab_SessionBreakdownTab extends DevKit.Controls.ITab {
			Section: tab_SessionBreakdownTab_Sections;
		}
		interface Tabs {
			_613E4BEB_EBC4_466F_BB00_F8667A0D2D6A: tab__613E4BEB_EBC4_466F_BB00_F8667A0D2D6A;
			SessionBreakdownTab: tab_SessionBreakdownTab;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_ContactId: DevKit.Controls.Lookup;
			/** Active events records */
			msevtmgt_Event: DevKit.Controls.Lookup;
			msevtmgt_iscanceled: DevKit.Controls.Boolean;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_RegistrationID: DevKit.Controls.Lookup;
			/** Unique identifier for the session associated with the session registration */
			msevtmgt_SessionId: DevKit.Controls.Lookup;
			/** Webinar ID of the session registration */
			msevtmgt_WebinarRegistrationID: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_sessionregistration_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_SessionRegistration_msevtmgt_CheckIn_SessionRegistration: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_sessionregistration_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			msevtmgt_SessionsByAudienceType: DevKit.Controls.Grid;
			msevtmgt_SessionsBySessionType: DevKit.Controls.Grid;
		}
	}
	class FormSession_registration extends DevKit.IForm {
		/**
		* Session registration [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Session_registration */
		Body: DevKit.FormSession_registration.Body;
		/** The Header section of form Session_registration */
		Header: DevKit.FormSession_registration.Header;
		/** The Navigation of form Session_registration */
		Navigation: DevKit.FormSession_registration.Navigation;
		/** The Grid of form Session_registration */
		Grid: DevKit.FormSession_registration.Grid;
		/** The SidePanes of form Session_registration */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSession_registration_quick_create {
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
			msevtmgt_ContactId: DevKit.Controls.Lookup;
			/** Active events records */
			msevtmgt_Event: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_RegistrationID: DevKit.Controls.Lookup;
			/** Unique identifier for the session associated with the session registration */
			msevtmgt_SessionId: DevKit.Controls.Lookup;
		}
	}
	class FormSession_registration_quick_create extends DevKit.IForm {
		/**
		* Session registration quick create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Session_registration_quick_create */
		Body: DevKit.FormSession_registration_quick_create.Body;
	}
	class msevtmgt_SessionRegistrationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_SessionRegistrationApi
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
		msevtmgt_ContactId: string;
		/** A flag that indicates the origin of the registration */
		msevtmgt_createdFromApi: boolean;
		/** Active events records */
		msevtmgt_Event: string;
		msevtmgt_iscanceled: boolean;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		msevtmgt_publishingstate: OptionSet.msevtmgt_SessionRegistration.msevtmgt_publishingstate;
		msevtmgt_RegistrationID: string;
		msevtmgt_registrationnotificationseen: boolean;
		msevtmgt_registrationoperation: string;
		msevtmgt_registrationstatus: string;
		/** Unique identifier for the session associated with the session registration */
		msevtmgt_SessionId: string;
		/** Unique identifier for entity instances */
		msevtmgt_SessionRegistrationId: string;
		/** A flag that indicates that the registration was synced with the provider */
		msevtmgt_SyncedWithProvider: OptionSet.msevtmgt_SessionRegistration.msevtmgt_SyncedWithProvider;
		/** Deprecated attribute */
		msevtmgt_TimesCheckedIn: number;
		/** Webinar ID of the session registration */
		msevtmgt_WebinarRegistrationID: string;
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
		/** Status of the session registration */
		statecode: OptionSet.msevtmgt_SessionRegistration.statecode;
		/** Reason for the status of the session registration */
		statuscode: OptionSet.msevtmgt_SessionRegistration.statuscode;
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
			readonly msevtmgt_ContactId: string;
			/** A flag that indicates the origin of the registration */
			readonly msevtmgt_createdFromApi: string;
			/** Active events records */
			readonly msevtmgt_Event: string;
			readonly msevtmgt_iscanceled: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			readonly msevtmgt_publishingstate: string;
			readonly msevtmgt_RegistrationID: string;
			readonly msevtmgt_registrationnotificationseen: string;
			readonly msevtmgt_registrationoperation: string;
			readonly msevtmgt_registrationstatus: string;
			/** Unique identifier for the session associated with the session registration */
			readonly msevtmgt_SessionId: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_SessionRegistrationId: string;
			/** A flag that indicates that the registration was synced with the provider */
			readonly msevtmgt_SyncedWithProvider: string;
			/** Deprecated attribute */
			readonly msevtmgt_TimesCheckedIn: string;
			/** Webinar ID of the session registration */
			readonly msevtmgt_WebinarRegistrationID: string;
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
			/** Status of the session registration */
			readonly statecode: string;
			/** Reason for the status of the session registration */
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
	namespace msevtmgt_SessionRegistration {
		enum msevtmgt_publishingstate {
			/** 100000003 */
			Failed_to_publish,
			/** 100000002 */
			Parent_webinar_failed,
			/** 100000000 */
			Pending,
			/** 100000001 */
			Published,
			/** 100000004 */
			Webinar_provider_error
		}
		enum msevtmgt_SyncedWithProvider {
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