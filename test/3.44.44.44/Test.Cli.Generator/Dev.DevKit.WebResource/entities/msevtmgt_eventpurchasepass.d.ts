//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_eventpurchasepass_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_eventpurchasepass_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchasepass_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsevtmgt_eventpurchasepass_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_eventpurchasepass_Information */
		Body: DevKit.Formmsevtmgt_eventpurchasepass_Information.Body;
		/** The Navigation of form msevtmgt_eventpurchasepass_Information */
		Navigation: DevKit.Formmsevtmgt_eventpurchasepass_Information.Navigation;
		/** The SidePanes of form msevtmgt_eventpurchasepass_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_eventpurchasepassApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_eventpurchasepassApi
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
		/** The attendee, passes are meant for */
		msevtmgt_AttendeeId: string;
		/** Unique identifier for the attendee pass associated with the event purchase pass */
		msevtmgt_AttendeePassId: string;
		/** Unique identifier for entity instances */
		msevtmgt_eventpurchasepassId: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		/** The purchased pass */
		msevtmgt_passid: string;
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
		/** Status of the event purchase pass */
		statecode: OptionSet.msevtmgt_eventpurchasepass.statecode;
		/** Reason for the status of the event purchase pass */
		statuscode: OptionSet.msevtmgt_eventpurchasepass.statuscode;
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
			/** The attendee, passes are meant for */
			readonly msevtmgt_AttendeeId: string;
			/** Unique identifier for the attendee pass associated with the event purchase pass */
			readonly msevtmgt_AttendeePassId: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_eventpurchasepassId: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			/** The purchased pass */
			readonly msevtmgt_passid: string;
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
			/** Status of the event purchase pass */
			readonly statecode: string;
			/** Reason for the status of the event purchase pass */
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
	namespace msevtmgt_eventpurchasepass {
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