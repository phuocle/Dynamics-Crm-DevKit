//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CardTypeApi {
		/**
		* DynamicsCrm.DevKit CardTypeApi
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
		/** For internal use only. */
		Actions: string;
		/** AdaptiveCard template. */
		AdaptiveCardTemplate: string;
		/** Bolean option for a cardtype. */
		BoolCardOption: boolean;
		/** The name of the custom entity. */
		CardName: string;
		/** The CardType ENUM value. */
		CardType1: number;
		/** The CardTypeIcon of the card. */
		CardTypeIcon: string;
		/** Unique identifier for entity instances */
		CardTypeId: string;
		/** Determines on which client is this card available on. */
		ClientAvailability: OptionSet.CardType.ClientAvailability;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
		readonly ExchangeRate: number;
		/** GroupCategory dictates the grouping of cards in the Assistant. */
		GroupCategory: number;
		/** Specifies the card group type */
		GroupType: string;
		/** Specifies if the card type has snooze dismiss */
		HasSnoozeDismiss: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Any int option for a cardtype. */
		IntCardOption: number;
		/** IsBaseCard */
		IsBaseCard: boolean;
		/** IsEnabled */
		IsEnabled: boolean;
		/** IsLiveOnly */
		IsLiveOnly: boolean;
		/** IsPreviewCard */
		IsPreviewCard: boolean;
		/** This column is updated by the Plugin based on the last fetched data. */
		LastSyncTime_UtcDateAndTime: Date;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** The Priority of the CardType */
		Priority: number;
		/** The publisher name of card type */
		PublisherName: string;
		/** This column is updated by the Plugin based on the last fetched data. */
		ScheduleTime_TimezoneDateAndTime: Date;
		/** The soft title of the card. */
		SoftTitle: string;
		/** Any string option for a cardtype. */
		StringCardOption: string;
		/** The summary text of the card. */
		SummaryText: string;
		/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
		TransactionCurrencyId: string;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace CardType {
		enum ClientAvailability {
			/** 3 */
			MocaAndWeb,
			/** 2 */
			MocaOnly,
			/** 1 */
			WebClientOnly
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