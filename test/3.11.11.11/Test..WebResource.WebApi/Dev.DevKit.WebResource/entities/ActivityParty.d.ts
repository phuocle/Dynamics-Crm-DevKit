﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ActivityPartyApi {
		/**
		* DynamicsCrm.DevKit ActivityPartyApi
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
		/** Unique identifier of the activity associated with the activity party. (A "party" is any person who is associated with an activity.) */
		ActivityId: string;
		/** Unique identifier of the activity party. */
		ActivityPartyId: string;
		/** Email address to which an email is delivered, and which is associated with the target entity. */
		AddressUsed: string;
		/** Email address column number from associated party. */
		readonly AddressUsedEmailColumnNumber: number;
		/** Information about whether to allow sending email to the activity party. */
		readonly DoNotEmail: boolean;
		/** Information about whether to allow sending faxes to the activity party. */
		readonly DoNotFax: boolean;
		/** Information about whether to allow phone calls to the lead. */
		readonly DoNotPhone: boolean;
		/** Information about whether to allow sending postal mail to the lead. */
		readonly DoNotPostalMail: boolean;
		/** Amount of effort used by the resource in a service appointment activity. */
		Effort: number;
		/** For internal use only. */
		ExchangeEntryId: string;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.ActivityParty.InstanceTypeCode;
		/** Information about whether the underlying entity record is deleted. */
		readonly IsPartyDeleted: boolean;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		readonly OwningBusinessUnit: string;
		readonly OwningUser: string;
		/** Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner. */
		ParticipationTypeMask: OptionSet.ActivityParty.ParticipationTypeMask;
		/** Unique identifier of the party associated with the activity. */
		partyid_account: string;
		/** Unique identifier of the party associated with the activity. */
		partyid_contact: string;
		/** Unique identifier of the party associated with the activity. */
		partyid_knowledgearticle: string;
		/** Unique identifier of the party associated with the activity. */
		partyid_queue: string;
		/** Unique identifier of the party associated with the activity. */
		partyid_systemuser: string;
		/** Scheduled end time of the activity. */
		readonly ScheduledEnd_UtcDateOnly: Date;
		/** Scheduled start time of the activity. */
		readonly ScheduledStart_UtcDateOnly: Date;
		readonly VersionNumber: number;
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
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ActivityParty {
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
		enum ParticipationTypeMask {
			/** 4 */
			BCC_Recipient,
			/** 3 */
			CC_Recipient,
			/** 11 */
			Customer,
			/** 6 */
			Optional_attendee,
			/** 7 */
			Organizer,
			/** 9 */
			Owner,
			/** 8 */
			Regarding,
			/** 5 */
			Required_attendee,
			/** 10 */
			Resource,
			/** 1 */
			Sender,
			/** 2 */
			To_Recipient
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}