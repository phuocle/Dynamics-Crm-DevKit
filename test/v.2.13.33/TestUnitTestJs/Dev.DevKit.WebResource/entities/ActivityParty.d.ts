//@ts-check
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
		/** Email address column number from associated party. */
		AddressUsedEmailColumnNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Information about whether to allow sending email to the activity party. */
		DoNotEmail: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether to allow sending faxes to the activity party. */
		DoNotFax: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether to allow phone calls to the lead. */
		DoNotPhone: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether to allow sending postal mail to the lead. */
		DoNotPostalMail: DevKit.WebApi.BooleanValueReadonly;
		/** Amount of effort used by the resource in a service appointment activity. */
		Effort: DevKit.WebApi.DoubleValue;
		/** For internal use only. */
		ExchangeEntryId: DevKit.WebApi.StringValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Information about whether the underlying entity record is deleted. */
		IsPartyDeleted: DevKit.WebApi.BooleanValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner. */
		ParticipationTypeMask: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the party associated with the activity. */
		partyid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the resource specification for the activity party. */
		ResourceSpecId: DevKit.WebApi.LookupValue;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.13.33','JsFormVersion':null}