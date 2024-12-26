//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_eventpurchaseattendee_Information {
		interface tab__ED6DF3CC_7ACE_4ABA_9410_126159C255A9_Sections {
			_ED6DF3CC_7ACE_4ABA_9410_126159C255A9_SECTION_3: DevKit.Controls.Section;
			_ED6DF3CC_7ACE_4ABA_9410_126159C255A9_SECTION_4: DevKit.Controls.Section;
		}
		interface tab__ED6DF3CC_7ACE_4ABA_9410_126159C255A9 extends DevKit.Controls.ITab {
			Section: tab__ED6DF3CC_7ACE_4ABA_9410_126159C255A9_Sections;
		}
		interface Tabs {
			_ED6DF3CC_7ACE_4ABA_9410_126159C255A9: tab__ED6DF3CC_7ACE_4ABA_9410_126159C255A9;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_eventpurchaseattendee_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchaseattendee_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_eventpurchaseattendee_msevtmgt_e: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_eventpurchaseattendee_msevtmgt_registrationresponse_eventpurchaseattendee: DevKit.Controls.NavigationItem
		}
		interface quickForm_AttendeeContact_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FirstName: DevKit.Controls.QuickView;
			LastName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
		}
		interface quickForm_EventPurchase_Body {
			msevtmgt_name: DevKit.Controls.QuickView;
			OwnerId: DevKit.Controls.QuickView;
		}
		interface quickForm_AttendeeContact extends DevKit.Controls.IQuickView {
			Body: quickForm_AttendeeContact_Body;
		}
		interface quickForm_EventPurchase extends DevKit.Controls.IQuickView {
			Body: quickForm_EventPurchase_Body;
		}
		interface QuickForm {
			AttendeeContact: quickForm_AttendeeContact;
			EventPurchase: quickForm_EventPurchase;
		}
		interface Grid {
			EventPurchasePasses: DevKit.Controls.Grid;
		}
	}
	class Formmsevtmgt_eventpurchaseattendee_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_eventpurchaseattendee_Information */
		Body: DevKit.Formmsevtmgt_eventpurchaseattendee_Information.Body;
		/** The Navigation of form msevtmgt_eventpurchaseattendee_Information */
		Navigation: DevKit.Formmsevtmgt_eventpurchaseattendee_Information.Navigation;
		/** The QuickForm of form msevtmgt_eventpurchaseattendee_Information */
		QuickForm: DevKit.Formmsevtmgt_eventpurchaseattendee_Information.QuickForm;
		/** The Grid of form msevtmgt_eventpurchaseattendee_Information */
		Grid: DevKit.Formmsevtmgt_eventpurchaseattendee_Information.Grid;
		/** The SidePanes of form msevtmgt_eventpurchaseattendee_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_eventpurchaseattendeeApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_eventpurchaseattendeeApi
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
		/** The contact that will attend the event */
		msevtmgt_AttendeeContactId: string;
		/** Unique identifier for entity instances */
		msevtmgt_eventpurchaseattendeeId: string;
		/** Unique identifier for the event purchase contact associated with the event purchase attendee */
		msevtmgt_eventpurchasecontactid: string;
		/** Unique identifier for the event registration associated with the event purchase attendee. */
		msevtmgt_EventRegistrationId: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		/** Unique identifier for the event purchase associated with the event purchase attendee */
		msevtmgt_PurchaseId: string;
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
		/** Status of the event purchase attendee */
		statecode: OptionSet.msevtmgt_eventpurchaseattendee.statecode;
		/** Reason for the status of the event purchase attendee */
		statuscode: OptionSet.msevtmgt_eventpurchaseattendee.statuscode;
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
			/** The contact that will attend the event */
			readonly msevtmgt_AttendeeContactId: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_eventpurchaseattendeeId: string;
			/** Unique identifier for the event purchase contact associated with the event purchase attendee */
			readonly msevtmgt_eventpurchasecontactid: string;
			/** Unique identifier for the event registration associated with the event purchase attendee. */
			readonly msevtmgt_EventRegistrationId: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			/** Unique identifier for the event purchase associated with the event purchase attendee */
			readonly msevtmgt_PurchaseId: string;
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
			/** Status of the event purchase attendee */
			readonly statecode: string;
			/** Reason for the status of the event purchase attendee */
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
	namespace msevtmgt_eventpurchaseattendee {
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