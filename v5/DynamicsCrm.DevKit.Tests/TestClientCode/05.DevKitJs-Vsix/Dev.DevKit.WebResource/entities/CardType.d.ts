//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class CardTypeApi {
		/**
		* DynamicsCrm.DevKit CardTypeApi
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
		/** For internal use only. */
		Actions: string | null;
		/** AdaptiveCard template. */
		AdaptiveCardTemplate: string | null;
		/** Bolean option for a cardtype. */
		BoolCardOption: boolean | null;
		/** The name of the custom entity. */
		CardName: string | null;
		/** The CardType ENUM value. */
		CardType2: number | null;
		/** The CardTypeIcon of the card. */
		CardTypeIcon: string | null;
		/** Unique identifier for entity instances */
		CardTypeId: string | null;
		/** Determines on which client is this card available on. */
		ClientAvailability: OptionSet.CardType.ClientAvailability | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** GroupCategory dictates the grouping of cards in the Assistant. */
		GroupCategory: number | null;
		/** Specifies the card group type */
		GroupType: string | null;
		/** Specifies if the card type has snooze dismiss */
		HasSnoozeDismiss: boolean | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Any int option for a cardtype. */
		IntCardOption: number | null;
		/** IsBaseCard */
		IsBaseCard: boolean | null;
		/** IsEnabled */
		IsEnabled: boolean | null;
		/** IsLiveOnly */
		IsLiveOnly: boolean | null;
		/** IsPreviewCard */
		IsPreviewCard: boolean | null;
		/** This column is updated by the Plugin based on the last fetched data. */
		LastSyncTime_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** The Priority of the CardType */
		Priority: number | null;
		/** The publisher name of card type */
		PublisherName: string | null;
		/** This column is updated by the Plugin based on the last fetched data. */
		ScheduleTime_TimezoneDateAndTime: Date | null;
		/** The soft title of the card. */
		SoftTitle: string | null;
		/** Any string option for a cardtype. */
		StringCardOption: string | null;
		/** The summary text of the card. */
		SummaryText: string | null;
		/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
		TransactionCurrencyId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly Actions: string;
			/** AdaptiveCard template. */
			readonly AdaptiveCardTemplate: string;
			/** Bolean option for a cardtype. */
			readonly BoolCardOption: string;
			/** The name of the custom entity. */
			readonly CardName: string;
			/** The CardType ENUM value. */
			readonly CardType2: string;
			/** The CardTypeIcon of the card. */
			readonly CardTypeIcon: string;
			/** Unique identifier for entity instances */
			readonly CardTypeId: string;
			/** Determines on which client is this card available on. */
			readonly ClientAvailability: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
			readonly ExchangeRate: string;
			/** GroupCategory dictates the grouping of cards in the Assistant. */
			readonly GroupCategory: string;
			/** Specifies the card group type */
			readonly GroupType: string;
			/** Specifies if the card type has snooze dismiss */
			readonly HasSnoozeDismiss: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Any int option for a cardtype. */
			readonly IntCardOption: string;
			/** IsBaseCard */
			readonly IsBaseCard: string;
			/** IsEnabled */
			readonly IsEnabled: string;
			/** IsLiveOnly */
			readonly IsLiveOnly: string;
			/** IsPreviewCard */
			readonly IsPreviewCard: string;
			/** This column is updated by the Plugin based on the last fetched data. */
			readonly LastSyncTime_UtcDateAndTime: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** The Priority of the CardType */
			readonly Priority: string;
			/** The publisher name of card type */
			readonly PublisherName: string;
			/** This column is updated by the Plugin based on the last fetched data. */
			readonly ScheduleTime_TimezoneDateAndTime: string;
			/** The soft title of the card. */
			readonly SoftTitle: string;
			/** Any string option for a cardtype. */
			readonly StringCardOption: string;
			/** The summary text of the card. */
			readonly SummaryText: string;
			/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CardType {
		enum ClientAvailability {
			/** MocaAndWeb = 3*/
			MocaAndWeb = 3,
			/** MocaOnly = 2*/
			MocaOnly = 2,
			/** WebClientOnly = 1*/
			WebClientOnly = 1
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