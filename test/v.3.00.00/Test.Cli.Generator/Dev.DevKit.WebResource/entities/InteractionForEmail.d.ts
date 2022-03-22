//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class InteractionForEmailApi {
		/**
		* DynamicsCrm.DevKit InteractionForEmailApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Email Activity Id. */
		readonly EmailActivityId: string;
		/** For internal use only. */
		EmailAddress: string;
		/** Email Activity Id. */
		readonly EmailInteractionReplyId: string;
		/** Shows the Interaction date and time of the an email. */
		readonly EmailInteractionTime_UtcDateAndTime: Date;
		/** Exchange rate for the currency associated with the InteractionForEmail with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		InteractedComponentText: string;
		/** Unique identifier for entity instances */
		InteractionForEmailId: string;
		/** Shows the location for an Interaction */
		InteractionLocation: string;
		/** For internal use only. */
		readonly InteractionPartyId: string;
		/** For internal use only */
		readonly InteractionPartyTypecode: number;
		/** Shows the Name who replied to email if interaction is reply */
		InteractionRepliedBy: string;
		/** InteractionReplyId */
		InteractionReplyId: string;
		/** Shows the type of Interaction. */
		readonly InteractionType: OptionSet.InteractionForEmail.InteractionType;
		/** Shows the User Agent for an Interaction if available */
		InteractionUserAgent: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Date and time that the record was migrated. */
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
		/** Status of the Interaction for Email */
		statecode: OptionSet.InteractionForEmail.statecode;
		/** Reason for the status of the Interaction for Email */
		statuscode: OptionSet.InteractionForEmail.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the InteractionForEmail with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace InteractionForEmail {
		enum InteractionType {
			/** 2 */
			AttachmentOpen,
			/** 0 */
			EmailOpen,
			/** 3 */
			EmailReply,
			/** 1 */
			LinkOpen
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}