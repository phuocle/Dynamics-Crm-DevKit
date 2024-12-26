//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAgreement_Booking_Incident_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_2: DevKit.Controls.Section;
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the agreement associated with the agreement booking incident. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Shows the agreement booking setup associated with the agreement booking incident. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Shows the incident type associated with the agreement booking incident. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_agreementbookingincident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_Appointments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_Emails: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_Tasks: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingproduct_AgreementBookingIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservice_AgreementBookingIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservicetask_AgreementBookingIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingincident_msdyn_workorderincident_AgreementBookingIncident: DevKit.Controls.NavigationItem
		}
	}
	class FormAgreement_Booking_Incident_Mobile extends DevKit.IForm {
		/**
		* Agreement Booking Incident - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Booking_Incident_Mobile */
		Body: DevKit.FormAgreement_Booking_Incident_Mobile.Body;
		/** The Navigation of form Agreement_Booking_Incident_Mobile */
		Navigation: DevKit.FormAgreement_Booking_Incident_Mobile.Navigation;
		/** The SidePanes of form Agreement_Booking_Incident_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_agreementbookingincident_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows the agreement associated with the agreement booking incident. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Shows the agreement booking setup associated with the agreement booking incident. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Agreement Booking Incident's functional location. */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Shows the incident type associated with the agreement booking incident. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_agreementbookingincident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_Appointments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_Emails: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_agreementbookingincident_Tasks: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingproduct_AgreementBookingIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservice_AgreementBookingIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservicetask_AgreementBookingIncident: DevKit.Controls.NavigationItem,
			msdyn_msdyn_agreementbookingincident_msdyn_workorderincident_AgreementBookingIncident: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_agreementbookingincident_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agreementbookingincident_Information */
		Body: DevKit.Formmsdyn_agreementbookingincident_Information.Body;
		/** The Navigation of form msdyn_agreementbookingincident_Information */
		Navigation: DevKit.Formmsdyn_agreementbookingincident_Information.Navigation;
		/** The SidePanes of form msdyn_agreementbookingincident_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormAgreement_Booking_Incident_Quick_Create {
		interface tab_fstab_general_Sections {
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_other: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the agreement associated with the agreement booking incident. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Shows the agreement booking setup associated with the agreement booking incident. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Agreement Booking Incident's functional location. */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Shows the incident type associated with the agreement booking incident. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			msdyn_name: DevKit.Controls.String;
		}
	}
	class FormAgreement_Booking_Incident_Quick_Create extends DevKit.IForm {
		/**
		* Agreement Booking Incident - Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Booking_Incident_Quick_Create */
		Body: DevKit.FormAgreement_Booking_Incident_Quick_Create.Body;
	}
	class msdyn_agreementbookingincidentApi {
		/**
		* DynamicsCrm.DevKit msdyn_agreementbookingincidentApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the agreement associated with the agreement booking incident. */
		msdyn_Agreement: string;
		/** Shows the entity instances. */
		msdyn_agreementbookingincidentId: string;
		/** Shows the agreement booking setup associated with the agreement booking incident. */
		msdyn_AgreementBookingSetup: string;
		/** Customer Asset related to this incident reported */
		msdyn_CustomerAsset: string;
		/** Incident description */
		msdyn_Description: string;
		/** Shows the time estimated to resolve this incident. */
		msdyn_EstimatedDuration: number;
		/** Agreement Booking Incident's functional location. */
		msdyn_FunctionalLocation: string;
		msdyn_IncidentItemsCopied: boolean;
		/** Shows the incident type associated with the agreement booking incident. */
		msdyn_IncidentType: string;
		msdyn_InternalFlags: string;
		msdyn_name: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Shows the status of the agreement booking incident. */
		statecode: OptionSet.msdyn_agreementbookingincident.statecode;
		/** Select the Agreement Booking Incident's status. */
		statuscode: OptionSet.msdyn_agreementbookingincident.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the agreement associated with the agreement booking incident. */
			readonly msdyn_Agreement: string;
			/** Shows the entity instances. */
			readonly msdyn_agreementbookingincidentId: string;
			/** Shows the agreement booking setup associated with the agreement booking incident. */
			readonly msdyn_AgreementBookingSetup: string;
			/** Customer Asset related to this incident reported */
			readonly msdyn_CustomerAsset: string;
			/** Incident description */
			readonly msdyn_Description: string;
			/** Shows the time estimated to resolve this incident. */
			readonly msdyn_EstimatedDuration: string;
			/** Agreement Booking Incident's functional location. */
			readonly msdyn_FunctionalLocation: string;
			readonly msdyn_IncidentItemsCopied: string;
			/** Shows the incident type associated with the agreement booking incident. */
			readonly msdyn_IncidentType: string;
			readonly msdyn_InternalFlags: string;
			readonly msdyn_name: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Shows the status of the agreement booking incident. */
			readonly statecode: string;
			/** Select the Agreement Booking Incident's status. */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_agreementbookingincident {
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