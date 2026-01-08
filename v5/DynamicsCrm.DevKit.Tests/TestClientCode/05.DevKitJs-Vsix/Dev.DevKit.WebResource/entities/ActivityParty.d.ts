//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ActivityPartyApi {
		/**
		* DynamicsCrm.DevKit ActivityPartyApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the activity associated with the activity party. (A "party" is any person who is associated with an activity.) */
		ActivityId: string | null;
		/** Unique identifier of the activity party. */
		ActivityPartyId: string | null;
		/** Email address to which an email is delivered, and which is associated with the target entity. */
		AddressUsed: string | null;
		/** Email address column number from associated party. */
		readonly AddressUsedEmailColumnNumber: number | null;
		/** Information about whether to allow sending email to the activity party. */
		readonly DoNotEmail: boolean | null;
		/** Information about whether to allow sending faxes to the activity party. */
		readonly DoNotFax: boolean | null;
		/** Information about whether to allow phone calls to the lead. */
		readonly DoNotPhone: boolean | null;
		/** Information about whether to allow sending postal mail to the lead. */
		readonly DoNotPostalMail: boolean | null;
		/** Amount of effort used by the resource in a service appointment activity. */
		Effort: number | null;
		/** For internal use only. */
		ExchangeEntryId: string | null;
		/** The external id used when the party does not have an email address. */
		ExternalId: string | null;
		/** The external id type used when the party does not have an email address. */
		ExternalIdType: string | null;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.ActivityParty.InstanceTypeCode | null;
		/** Information about whether the underlying entity record is deleted. */
		readonly IsPartyDeleted: boolean | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		readonly OwningBusinessUnit: string | null;
		readonly OwningUser: string | null;
		/** Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner. */
		ParticipationTypeMask: OptionSet.ActivityParty.ParticipationTypeMask | null;
		/** Unique identifier of the party associated with the activity. */
		partyid_account: string | null;
		/** Unique identifier of the party associated with the activity. */
		partyid_contact: string | null;
		/** Unique identifier of the party associated with the activity. */
		partyid_knowledgearticle: string | null;
		/** Unique identifier of the party associated with the activity. */
		partyid_queue: string | null;
		/** Unique identifier of the party associated with the activity. */
		partyid_systemuser: string | null;
		/** Scheduled end time of the activity. */
		readonly ScheduledEnd_UtcDateOnly: Date | null;
		/** Scheduled start time of the activity. */
		readonly ScheduledStart_UtcDateOnly: Date | null;
		/** The name of the party to be used when the party is not resolved to an entity. */
		UnresolvedPartyName: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the activity associated with the activity party. (A "party" is any person who is associated with an activity.) */
			readonly ActivityId: string;
			/** Unique identifier of the activity party. */
			readonly ActivityPartyId: string;
			/** Email address to which an email is delivered, and which is associated with the target entity. */
			readonly AddressUsed: string;
			/** Email address column number from associated party. */
			readonly AddressUsedEmailColumnNumber: string;
			/** Information about whether to allow sending email to the activity party. */
			readonly DoNotEmail: string;
			/** Information about whether to allow sending faxes to the activity party. */
			readonly DoNotFax: string;
			/** Information about whether to allow phone calls to the lead. */
			readonly DoNotPhone: string;
			/** Information about whether to allow sending postal mail to the lead. */
			readonly DoNotPostalMail: string;
			/** Amount of effort used by the resource in a service appointment activity. */
			readonly Effort: string;
			/** For internal use only. */
			readonly ExchangeEntryId: string;
			/** The external id used when the party does not have an email address. */
			readonly ExternalId: string;
			/** The external id type used when the party does not have an email address. */
			readonly ExternalIdType: string;
			/** Type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Information about whether the underlying entity record is deleted. */
			readonly IsPartyDeleted: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			readonly OwningBusinessUnit: string;
			readonly OwningUser: string;
			/** Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner. */
			readonly ParticipationTypeMask: string;
			/** Unique identifier of the party associated with the activity. */
			readonly partyid_account: string;
			/** Unique identifier of the party associated with the activity. */
			readonly partyid_contact: string;
			/** Unique identifier of the party associated with the activity. */
			readonly partyid_knowledgearticle: string;
			/** Unique identifier of the party associated with the activity. */
			readonly partyid_queue: string;
			/** Unique identifier of the party associated with the activity. */
			readonly partyid_systemuser: string;
			/** Scheduled end time of the activity. */
			readonly ScheduledEnd_UtcDateOnly: string;
			/** Scheduled start time of the activity. */
			readonly ScheduledStart_UtcDateOnly: string;
			/** The name of the party to be used when the party is not resolved to an entity. */
			readonly UnresolvedPartyName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ActivityParty {
		enum InstanceTypeCode {
			/** Not_Recurring = 0*/
			Not_Recurring = 0,
			/** Recurring_Exception = 3*/
			Recurring_Exception = 3,
			/** Recurring_Future_Exception = 4*/
			Recurring_Future_Exception = 4,
			/** Recurring_Instance = 2*/
			Recurring_Instance = 2,
			/** Recurring_Master = 1*/
			Recurring_Master = 1
		}
		enum ParticipationTypeMask {
			/** BCC_Recipient = 4*/
			BCC_Recipient = 4,
			/** CC_Recipient = 3*/
			CC_Recipient = 3,
			/** Chat_Participant = 12*/
			Chat_Participant = 12,
			/** Customer = 11*/
			Customer = 11,
			/** Optional_attendee = 6*/
			Optional_attendee = 6,
			/** Organizer = 7*/
			Organizer = 7,
			/** Owner = 9*/
			Owner = 9,
			/** Regarding = 8*/
			Regarding = 8,
			/** Related = 13*/
			Related = 13,
			/** Required_attendee = 5*/
			Required_attendee = 5,
			/** Resource = 10*/
			Resource = 10,
			/** Sender = 1*/
			Sender = 1,
			/** To_Recipient = 2*/
			To_Recipient = 2
		}
		enum PartyObjectTypeCode {
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}