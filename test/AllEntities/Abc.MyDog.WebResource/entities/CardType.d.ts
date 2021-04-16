//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		Actions: DevKit.WebApi.StringValue;
		/** AdaptiveCard template. */
		AdaptiveCardTemplate: DevKit.WebApi.StringValue;
		/** Bolean option for a cardtype. */
		BoolCardOption: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		CardName: DevKit.WebApi.StringValue;
		/** The CardType ENUM value. */
		CardType: DevKit.WebApi.IntegerValue;
		/** The CardTypeIcon of the card. */
		CardTypeIcon: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		CardTypeId: DevKit.WebApi.GuidValue;
		/** Determines on which client is this card available on. */
		ClientAvailability: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** GroupCategory dictates the grouping of cards in the Assistant. */
		GroupCategory: DevKit.WebApi.IntegerValue;
		/** Specifies the card group type */
		GroupType: DevKit.WebApi.StringValue;
		/** Specifies if the card type has snooze dismiss */
		HasSnoozeDismiss: DevKit.WebApi.BooleanValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Any int option for a cardtype. */
		IntCardOption: DevKit.WebApi.IntegerValue;
		/** IsBaseCard */
		IsBaseCard: DevKit.WebApi.BooleanValue;
		/** IsEnabled */
		IsEnabled: DevKit.WebApi.BooleanValue;
		/** IsLiveOnly */
		IsLiveOnly: DevKit.WebApi.BooleanValue;
		/** IsPreviewCard */
		IsPreviewCard: DevKit.WebApi.BooleanValue;
		/** This column is updated by the Plugin based on the last fetched data. */
		LastSyncTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The Priority of the CardType */
		Priority: DevKit.WebApi.IntegerValue;
		/** The publisher name of card type */
		PublisherName: DevKit.WebApi.StringValue;
		/** This column is updated by the Plugin based on the last fetched data. */
		ScheduleTime_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** The soft title of the card. */
		SoftTitle: DevKit.WebApi.StringValue;
		/** Any string option for a cardtype. */
		StringCardOption: DevKit.WebApi.StringValue;
		/** The summary text of the card. */
		SummaryText: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace CardType {
		enum ClientAvailability {
			/** 1 */
			WebClientOnly,
			/** 2 */
			MocaOnly,
			/** 3 */
			MocaAndWeb
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}