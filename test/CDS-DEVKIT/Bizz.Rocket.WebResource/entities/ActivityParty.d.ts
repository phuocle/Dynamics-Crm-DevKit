///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class ActivityPartyApi {
		/**
		* PL.DynamicsCrm.DevKit ActivityPartyApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
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
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
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
declare namespace OptionSet {
	namespace ActivityParty {
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 1 */
			Recurring_Master,
			/** 2 */
			Recurring_Instance,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception
		}
		enum ParticipationTypeMask {
			/** 1 */
			Sender,
			/** 2 */
			To_Recipient,
			/** 3 */
			CC_Recipient,
			/** 4 */
			BCC_Recipient,
			/** 5 */
			Required_attendee,
			/** 6 */
			Optional_attendee,
			/** 7 */
			Organizer,
			/** 8 */
			Regarding,
			/** 9 */
			Owner,
			/** 10 */
			Resource,
			/** 11 */
			Customer
		}
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}