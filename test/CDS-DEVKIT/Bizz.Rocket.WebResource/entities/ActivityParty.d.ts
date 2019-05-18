///<reference path='devkit.d.ts' />
declare namespace Rocket {
	interface ActivityPartyOptionSet {
		RollupState: {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated: number,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated: number,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError: number,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError: number,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded: number,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached: number,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected: number
		},
		InstanceTypeCode: {
			/** 0 */
			Not_Recurring: number,
			/** 1 */
			Recurring_Master: number,
			/** 2 */
			Recurring_Instance: number,
			/** 3 */
			Recurring_Exception: number,
			/** 4 */
			Recurring_Future_Exception: number
		},
		ParticipationTypeMask: {
			/** 1 */
			Sender: number,
			/** 2 */
			To_Recipient: number,
			/** 3 */
			CC_Recipient: number,
			/** 4 */
			BCC_Recipient: number,
			/** 5 */
			Required_attendee: number,
			/** 6 */
			Optional_attendee: number,
			/** 7 */
			Organizer: number,
			/** 8 */
			Regarding: number,
			/** 9 */
			Owner: number,
			/** 10 */
			Resource: number,
			/** 11 */
			Customer: number
		}
	}
	class ActivityPartyApi {
		constructor(entity?: object);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): object;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity of ODATA */
		Entity: object;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** A collection OptionSet of ActivityParty enttiy */
		OptionSet: ActivityPartyOptionSet;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the activity associated with the activity party. (A "party" is any person who is associated with an activity.) */
		ActivityId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the activity party. */
		ActivityPartyId: DevKit.WebApi.GuidValue;
		/** Email address to which an email is delivered, and which is associated with the target entity. */
		AddressUsed: DevKit.WebApi.StringValue;
		/** ReadOnly - Email address column number from associated party. */
		AddressUsedEmailColumnNumber: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Information about whether to allow sending email to the activity party. */
		DoNotEmail: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Information about whether to allow sending faxes to the activity party. */
		DoNotFax: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Information about whether to allow phone calls to the lead. */
		DoNotPhone: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Information about whether to allow sending postal mail to the lead. */
		DoNotPostalMail: DevKit.WebApi.BooleanValue;
		/** Amount of effort used by the resource in a service appointment activity. */
		Effort: DevKit.WebApi.DoubleValue;
		/** For internal use only. */
		ExchangeEntryId: DevKit.WebApi.StringValue;
		/** ReadOnly - Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Information about whether the underlying entity record is deleted. */
		IsPartyDeleted: DevKit.WebApi.BooleanValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** ReadOnly */
		OwningBusinessUnit: DevKit.WebApi.GuidValue;
		/** ReadOnly */
		OwningUser: DevKit.WebApi.GuidValue;
		/** Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner. */
		ParticipationTypeMask: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_systemuser: DevKit.WebApi.LookupValue;
		/** ReadOnly - Scheduled end time of the activity. */
		ScheduledEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** ReadOnly - Scheduled start time of the activity. */
		ScheduledStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** ReadOnly */
		VersionNumber: DevKit.WebApi.BigIntValue;
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}